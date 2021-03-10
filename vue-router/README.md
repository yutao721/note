## vue-router 原理以及实现

[官方文档](https://router.vuejs.org/zh/installation.html)

> Vue Router 是 [Vue.js](http://cn.vuejs.org/) 官方的路由管理器。它和 Vue.js 的核心深度集成，让构建单页面应用变得易如反掌。

### 前置知识

前端路由的本质是监听url变化，然后匹配路由规则，无需刷新就可以显示相应的页面（组件），目前单页面路由主要有两种方式：

- hash模式
- history模式

#### hash模式实现路由

主要通过location.hash设置hash Url，也就是url的符号#后面的值。当哈希值发生变化时，不会向服务器请求发送数据，可以通过hashchange事件来监听hash的变化，实现相应的功能。



```html
<!DOCTYPE html>
<html lang="en">

  <body>
    <ul>
      <ul>
        <!-- 定义路由 -->
        <li><a href="#/home">home</a></li>
        <li><a href="#/about">about</a></li>

        <!-- 渲染路由对应的 UI -->
        <div id="routeView"></div>
      </ul>
    </ul>
  </body>
  <script>
    let routerView = routeView
    window.addEventListener('hashchange', () => {
      let hash = location.hash;
      routerView.innerHTML = hash
    })
    window.addEventListener('DOMContentLoaded', () => {
      if (!location.hash) { //如果不存在hash值，那么重定向到#/
        location.hash = '/'
      } else { //如果存在hash值，那就渲染对应UI
        let hash = location.hash;
        routerView.innerHTML = hash
      }
    })
  </script>

</html>
```

#### history模式实现路由

主要通过history.pushState/replceState向当前历史记录中插入状态对象state,在浏览器前进、回退、跳转等动作发生时触发popState事件，此时可以通过解析popState事件回调函数的event参数中的state对象，或者解析当前页面url来实现路由。

```html
<!DOCTYPE html>
<html lang="en">
  <body>
    <ul>
      <ul>
        <li><a href='/home'>home</a></li>
        <li><a href='/about'>about</a></li>
        <div id="routeView"></div>
      </ul>
    </ul>
  </body>
  <script language="JavaScript">
    let routerView = routeView
    window.addEventListener('DOMContentLoaded', onLoad)
    window.addEventListener('popstate', () => {
      routerView.innerHTML = location.pathname
    })

    function onLoad() {
      routerView.innerHTML = location.pathname
      var linkList = document.querySelectorAll('a[href]')
      linkList.forEach(el => el.addEventListener('click', function(e) {
        e.preventDefault()
        history.pushState(null, '', el.getAttribute('href'))
        console.log(location.pathname);
        routerView.innerHTML = location.pathname
      }))
    }
  </script>
</html>
```

#### 两种方式的异同点

- 页面手动刷新，hash模式不会向服务器发送请求，history模式会
- hash模式下url中的哈希值不会发送到服务器，history模式url全部会发送至服务器
- 设置location.hash和pushState都不会导致浏览器刷新
- 设置location.hash的时候会触发hashchange事件和popstate事件
- 仅当pushState函数设置url参数的值为hash格式时,浏览器动作发生会触发hashchange事件，尽管location.hash值为空
- a标签锚点跳转可以设置hash，触发hashchange事件

由此看出，如果是history模式的话，是需要服务端额外配置，避免找不到对应的路径导致出现404页面。

在初步了解了前端路由实现原理之后，我们慢慢来揭开vue-router神秘的面纱。

### vue-router 的使用

要了解vue-router原理，首先需要知道其用法，接下来简单使用下vue-router

src/router/index.js

```jsx
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    children: [
      {
        path: 'a',
        component: {
          render() {
            return <h1> about a </h1>
          }
        }
      },
      {
        path: 'b',
        component: {
          render() {
            return <h1> about b </h1>
          }
        }
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'hash',
  routes
})

export default router
```

src/main.js

```js
import Vue from 'vue'
import App from './App.vue'
import router from './router'

new Vue({
  name:'root',
  router,
  render: h => h(App)
}).$mount('#app')
```

以上是vue-router简单配置以及使用，接下来，我们就从这2个文件，一步步去梳理vue-router的实现。

### 作为插件

上边代码中关键的第 1 步，利用 Vue.js 提供的插件机制 `Vue.use(plugin)` 来安装 `VueRouter`，而这个插件机制则会调用该 `plugin` 对象的 `install` 方法（当然如果该 `plugin` 没有该方法的话会把 `plugin` 自身作为函数来调用）；`VueRouter`能用new就说明`VueRouter`是一个类，而我们传入的mode以及routers都是这个插件的参数。由此我们可以写出下面的代码。

```js
import install from './install';
class VueRouter {
    constructor(options) {
        this.mode = options.mode;
    }
}
VueRouter.install = install;
export default VueRouter;
```

```js
// export 一个 Vue 引用
export let _Vue
// 为了保证我们的VueRouter内部不需要依赖于Vue，用户在使用插件时可以传入对应的vue
const install = function (Vue) {
 		_Vue = Vue
    // install的作用就是 将我们的router实例共享给每个组件
    // 把所有的方法都和组件初始化的时候进行混合
    // 只是将这个router 挂载到了每个组件上
    Vue.mixin({ 
        beforeCreate(){
            // 区分父子关系
            // 先找到父亲 ，儿子找父亲的属性,孙子找父亲的
            // 组件的声明周期调用顺序 先父后子
            if(this.$options.router){
                // 我将根实例放到了_routerRoot上
               this._routerRoot = this;
               this._router = this.$options.router;
            }else{
                // 将根属性全部增加到了每个组件上的_routerRoot上
                // 所有组件都可以获取_routerRoot._router获取路由的实例
               this._routerRoot = this.$parent && this.$parent._routerRoot
            }
        }
    })
}
export default install
```

- 为啥要 export 一个 Vue 引用？

> 插件在打包的时候是肯定不希望把 vue 作为一个依赖包打进去的，但是呢又希望使用 `Vue` 对象本身的一些方法，此时就可以采用上边类似的做法，在 `install` 的时候把这个变量赋值 `Vue` ，这样就可以在其他地方使用 `Vue` 的一些方法而不必引入 vue 依赖包（前提是保证 `install` 后才会使用）。

`Vue.mixin` 通过beforeCreate 这个钩子函数 可以把router实例共享给每个组件，当然目前这个install方法能想到就是这么多后面还会慢慢完善。

### 实例化vueRouter

在new Vue 的时候传入的是vueRouter的实例，new vueRouter的时候传入了mode以及路由配置表，当然还可以传入其他参数，这里目前只考虑这2个比较重要的参数。此时就要考虑怎么才能通过用户传入的路由规则（嵌套路由，动态添加路由...）匹配到相对应的页面或者组件。其实就是vueRouter在构造函数中初始化了 `macther`。

```js
class VueRouter {
    constructor(options) {
      this.mode = options.mode;
      this.matcher = createMatcher(options.routes || []);
    }
}
```

### matcher 匹配函数

create-matcher.js

```js
import createRouteMap from './create-route-map';

function createMatcher(routes) {

  // matcher 有两个功能
  // 1.添加路由 在原有的路由的基础上动态添加路由
  // 2.匹配,根据路由匹配路由

  let { pathMap } = createRouteMap(routes);

  // 一个路径对应一条记录， 扁平化

  function addRoutes(routes) {
    createRouteMap(routes, pathMap);
  }

  function match(path) {

  }

  return {
    addRoutes,
    match
  }
}

export default createMatcher;
```

createMatcher 接受用户传入的routes返回addRoutes 和match 两个方法；pathMap 就是通过用户传入的路由配置来生成的一个映射表；

create-router-map.js

```js
function createRouteMap(routes, oldPathMap) {
  let pathMap = oldPathMap || Object.create(null);
  // path=>record
  routes.forEach(route => {
    addRouteRecord(route, pathMap)
  })
  return {
    pathMap
  }
}

function addRouteRecord(route, pathMap, parent) {
  let path = parent ? `${parent.path}/${route.path}` : route.path
  let record = {
    path,
    name: route.name,
    component: route.component // 最核心的
  }
  // 根据路径匹配记录
  pathMap[path] = record;
  // 如果有儿子就递归
  if (route.children) {
    route.children.forEach(r => {
      addRouteRecord(r, pathMap, record)
    })
  }
}

export default createRouteMap;
```

`createRouteMap` 需要传入路由配置，支持传入旧路径数组和旧的 `Map` 这一步是为后面递归和 `addRoutes` 做好准备。主要看下addRouteRecord 的实现。

使用 `recod` 对象 记录路由配置有利于后续路径切换时计算出新路径，这里的 `path` 其实是通过传入父级 `record` 对象的`path`和当前 `path` 拼接出来的  。 如果 `route` 有子节点就递归调用 `addRouteRecord`。

### addRoutes

这是在 `vue2.2.0` 之后新添加的 `api` ,或许很多情况路由并不是写死的，需要动态添加路由。有了前面的 `createRouteMap` 的基础上我们只需要传入 `routes` 即可，他就能在原基础上修改

```js
function addRoutes(routes) {
  createRouteMap(routes, pathMap);
}
```

传入一个新的路由配置表，再通过createRouteMap 组成新的路由映射表；无非就是把用户传入的路由配置变成下图所展示的格式。

![](https://gitee.com/yutao618/images/raw/master/images/20201215172750.png)

