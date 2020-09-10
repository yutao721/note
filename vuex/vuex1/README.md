# 实现vuex

[vuex官方文档](https://vuex.vuejs.org/zh/)

## Vuex是什么？

> Vuex 是一个专为 Vue.js 应用程序开发的**状态管理模式**。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化

每一个 Vuex 应用的核心就是 store（仓库）。“store”基本上就是一个容器，它包含着你的应用中大部分的**状态 (state)**。Vuex 和单纯的全局对象有以下两点不同：

1. Vuex 的状态存储是响应式的。当 Vue 组件从 store 中读取状态的时候，若 store 中的状态发生变化，那么相应的组件也会相应地得到高效更新。
2. 你不能直接改变 store 中的状态。改变 store 中的状态的唯一途径就是显式地**提交 (commit) mutation**。这样使得我们可以方便地跟踪每一个状态的变化，从而让我们能够实现一些工具帮助我们更好地了解我们的应用。

## 实现简易版的vuex

### 先来看下vuex的基本用法

```js
import Vue from 'vue';
import Vuex from 'vuex/vuex2/index';
// 1.Vue.use(Vuex);  Vuex是一个对象 install方法
// 2.Vuex中有一个Store类 
// 3.混入到组件中 增添store属性

Vue.use(Vuex); // 使用这个插件  内部会调用Vuex中的install方法

const store = new Vuex.Store({
  state:{ // -> data
    age:10
  },
  getters:{ // 计算属性
    myAge(state){
      return state.age + 20
    }
  },
  mutations:{ // method=> 同步的更改state  mutation的参数是状态
    changeAge(state,payload){
      state.age += payload; // 更新age属性
    }
  },
  actions:{ // 异步操作做完后将结果提交给mutations
    changeAge({commit},payload){
      setTimeout(() => {
        commit('changeAge',payload)
      }, 1000);
    }
  }
});
export default store;
```

通过用法可以知道：

1. Vuex是一个对象，它作为vue的插件，必然有install方法；
2. Vuex中有一个Store类，在使用的时候有使用new;
3. 需要将store混入到组件中。

于是可以梳理好入口文件

vuex/index.js

```js
import { Store, install } from './store'; 

// 这个文件是入口文件，核心就是导出所有写好的方法
export default {
  Store,
  install
}
```

### store文件

vuex/store.js

### 

```js
export let Vue;

export class Store {
  
}

// _vue 是Vue的构造函数
export const install = (_vue) => {
  // 需要保存Vue,用户传入的Vue构造函数
  Vue = _vue; 
}
```

接下来就是把store挂载到每个组件上面，这样数据才能互通共享，很显然，通过Vue.mixin 在Vue生命周期beforeCreate 可以为每个组件注入store；

```js
import applyMixin from "./mixin";
export let Vue;

export class Store {
  
}

// _vue 是Vue的构造函数
export const install = (_vue) => {
  // 需要保存Vue,用户传入的Vue构造函数
  Vue = _vue;
  // 需要将根组件中注入的store 分派给每一个组件 （子组件） Vue.mixin
  applyMixin(Vue);
}
```

vuex/mixin.js

```js
export default function applyMixin(Vue) {
  // 父子组件的beforecreate执行顺序
  Vue.mixin({ // 内部会把生命周期函数 拍平成一个数组 
    beforeCreate: vuexInit
  });
}

// 组件渲染时从父=》子

function vuexInit() {
  // 给所有的组件增加$store 属性 指向我们创建的store实例
  const options = this.$options; // 获取用户所有的选项
  if (options.store) { // 根实例（只有根实例才会有store属性）
    this.$store = options.store;
  } else if (options.parent && options.parent.$store) { // 儿子 或者孙子....
    // 后面的每一个都从其父组件拿到store
    this.$store = options.parent.$store;
  }
}
```

接下来就是处理state,getters,mutations,actions

### state实现

```js
export class Store {
  constructor(options) {
    const state = options.state; //数据变化要更新视图 （vue的核心逻辑依赖收集）
    this._vm = new Vue({
      data: { // 属性如果是通过$开头的 默认不会将这个属性挂载到vm上
        $$store: state
      }
    })
  }
  get state() { // 属性访问器   new Store().state  Object.defineProperty({get()})
    return this._vm._data.$$state
  }
  
}
```



首先来处理state,options是用户传入的，其中有state,getters,mutations,actions，自然可以在options.state中取到，但是此时state还不是响应式，可以借助new Vue中data的数据是响应式处理这个问题，将state挂载到$$state上，这个属性是不会被vue暴露出去（可能是内部做了处理）。当我们在组件中去获取值的时候，比如this.$store.state.age时候 this.$store.state 就走到到了访问器get state() 就会将整个仓库的state返回出去，而且数据是响应式的。至于为什么在_vm._data上，需要去看下vue源码实现。



### getters实现

```js
export class Store {
  constructor(options) {
    // 1.处理state
    const state = options.state; //数据变化要更新视图 （vue的核心逻辑依赖收集）
    this._vm = new Vue({
      data: { // 属性如果是通过$开头的 默认不会将这个属性挂载到vm上
        $$store: state
      }
    })
    
    // 2.处理getters属性 具有缓存的 computed 带有缓存 （多次取值是如果值不变是不会重新取值）
    this.getters = {};
    Object.key(options.getters).forEach(key => {
      Object.defineProperty(this.getters, key, {
        get: () => options.getters[key](this.state)
      })
    })
  }
  get state() { // 属性访问器   new Store().state  Object.defineProperty({get()})
    return this._vm._data.$$state
  }

}
```

通过循环用户传进来的getters,再通过Object.defineProperty把每一个getter放入store中。不过目前每一次取值都会重新计算，没有缓存功能，不符合vue计算属性的用法以及定义。

先来改造下对象遍历这个方法，因为这个方法后面用的比较多。

vuex/util.js

```js
export const forEachValue = (obj, callback) => {
  Object.keys(obj).forEach(key => callback(obj[key], key))
}

```

```js
export class Store {
  constructor(options) {
    // 1.处理state
    const state = options.state; //数据变化要更新视图 （vue的核心逻辑依赖收集）
    this._vm = new Vue({
      data: { // 属性如果是通过$开头的 默认不会将这个属性挂载到vm上
        $$store: state
      }
    })

    // 2.处理getters属性 具有缓存的 computed 带有缓存 （多次取值是如果值不变是不会重新取值）
    this.getters = {};
    forEachValue(options.getters, (fn, key) => {
      Object.defineProperty(this.getters, key, {
        get: () => fn(this.state)
      })
    })
  }
  get state() { // 属性访问器   new Store().state  Object.defineProperty({get()})
    return this._vm._data.$$state
  }

}
```

逻辑都是一样的，接着处理下缓存功能。

```js
export class Store {
  constructor(options) {
    // 1.处理state
    const state = options.state; //数据变化要更新视图 （vue的核心逻辑依赖收集）
    const computed = {};

    // 2.处理getters属性 具有缓存的 computed 带有缓存 （多次取值是如果值不变是不会重新取值）
    this.getters = {};
    forEachValue(options.getters, (fn, key) => {
      // 将用户的getters 定义在实例上， 计算属性是如何实现缓存
      computed[key] = () => fn(this.state);
      // 当取值的时候执行计算属性的逻辑，此时就有缓存功能
      Object.defineProperty(this.getters, key, {
        get: () => fn(this._vm[key])
      })
    })

    this._vm = new Vue({
      data: { // 属性如果是通过$开头的 默认不会将这个属性挂载到vm上
        $$store: state
      },
      computed,
    })

  }
  get state() { // 属性访问器   new Store().state  Object.defineProperty({get()})
    return this._vm._data.$$state
  }

}
```

computed具有缓存功能，可以在用户传入的getters的时候，将用户的getters 定义在实例上，computed[key] = () => fn(this.state) ，在取值的时候fn(this._vm[key])执行计算属性的逻辑。vuex的作者真是脑洞大开，鬼才啊，这都能想到。

mutation 都有一个字符串的 事件类型 (type) 和 一个 回调函数 (handler)

- 对传入的属性进行遍历订阅

- 通过commit方法触发调用。

### mutation实现

```js
// 3.实现mutations
this.mutations = {};
forEachValue(options.mutations, (fn, key) => {
  this.mutations[key] = (payload) => fn(this.state, payload)
})

commit = (type, payload) => { //保证当前this 当前store实例
    this.mutations[type](payload)
}
```

> commit使用箭头函数是为了保证调用的都是当前实例，一是通过this.commit(type,data)，二是在action中被解构使用changeAge({commit},payload){}

actions和dispath也是如此。

完整的Store类

```js
export class Store {
  constructor(options) {
    // 1.处理state
    const state = options.state; //数据变化要更新视图 （vue的核心逻辑依赖收集）
    const computed = {};

    // 2.处理getters属性 具有缓存的 computed 带有缓存 （多次取值是如果值不变是不会重新取值）
    this.getters = {};
    forEachValue(options.getters, (fn, key) => {
      // 将用户的getters 定义在实例上， 计算属性是如何实现缓存
      computed[key] = () => fn(this.state);
      // 当取值的时候执行计算属性的逻辑，此时就有缓存功能
      Object.defineProperty(this.getters, key, {
        get: () => fn(this._vm[key])
      })
    })

    this._vm = new Vue({
      data: { // 属性如果是通过$开头的 默认不会将这个属性挂载到vm上
        $$store: state
      },
      computed,
    })

    // 3.实现mutations
    this.mutations = {};
    forEachValue(options.mutations, (fn, key) => {
      this.mutations[key] = (payload) => fn(this.state, payload)
    })

    // 4.实现actions
    this.actions = {};
    forEachValue(options.actions, (fn, key) => {
      this.actions[key] = (payload) => fn(this, payload);
    });

  }

  commit = (type, payload) => { //保证当前this 当前store实例
    this.mutations[type](payload)
  }
  
  dispatch = (type, payload) => {
    this.mutations[type](payload)
  }

  get state() { // 属性访问器   new Store().state  Object.defineProperty({get()})
    return this._vm._data.$$state
  }

}
```

### 完整的store.js

```js
import applyMixin from "./mixin";
import { forEachValue } from './util';
export let Vue;

export class Store {
  constructor(options) {
    // 1.处理state
    const state = options.state; //数据变化要更新视图 （vue的核心逻辑依赖收集）
    const computed = {};

    // 2.处理getters属性 具有缓存的 computed 带有缓存 （多次取值是如果值不变是不会重新取值）
    this.getters = {};
    forEachValue(options.getters, (fn, key) => {
      // 将用户的getters 定义在实例上， 计算属性是如何实现缓存
      computed[key] = () => fn(this.state);
      // 当取值的时候执行计算属性的逻辑，此时就有缓存功能
      Object.defineProperty(this.getters, key, {
        get: () => fn(this._vm[key])
      })
    })

    this._vm = new Vue({
      data: { // 属性如果是通过$开头的 默认不会将这个属性挂载到vm上
        $$store: state
      },
      computed,
    })

    // 3.实现mutations
    this.mutations = {};
    forEachValue(options.mutations, (fn, key) => {
      this.mutations[key] = (payload) => fn(this.state, payload)
    })

    // 4.实现actions
    this.actions = {};
    forEachValue(options.actions, (fn, key) => {
      this.actions[key] = (payload) => fn(this, payload);
    });

  }

  commit = (type, payload) => { //保证当前this 当前store实例
    this.mutations[type](payload)
  }
  
  dispatch = (type, payload) => {
    this.mutations[type](payload)
  }

  get state() { // 属性访问器   new Store().state  Object.defineProperty({get()})
    return this._vm._data.$$state
  }

}

// _vue 是Vue的构造函数
export const install = (_vue) => {
  // 需要保存Vue,用户传入的Vue构造函数
  Vue = _vue;
  // 需要将根组件中注入的store 分派给每一个组件 （子组件） Vue.mixin
  applyMixin(Vue);
}
```

简易版的vuex到此完成。接下来就是要处理module。

