
# 小程序中的IntersectionObserver

## 1. 背景

小程序中，需要监听某些元素是否出现在可视区域内，比如帖子列表、商品列表曝光数据采集上报。

## 2. 官方文档

[IntersectionObserver](https://developers.weixin.qq.com/miniprogram/dev/api/wxml/IntersectionObserver.html)
> IntersectionObserver 用于推断某些节点是否可以被用户看见、有多大比例可以被用户看见。

## 3. 简易使用

### 3.1 创建

```js
const observer = wx.createIntersectionObserver(this, options)
```

### 3.2 监听

```js
// 使用选择器指定一个节点，作为参照区域之一
observer.relativeTo(selector, margin)
```

或者  

```js
// 指定页面显示区域作为参照区域之一
observer.relativeToViewport(margin)
```

### 3.3 停止监听

```js
observer.disconnect()
```

### 3.4 监听回调

```js
observer.observe(selector, callback)
```

## 4. 实战

### 4.1 监听帖子列表曝光

为了使用简易，封装了一个 `IntersectionObserver` 类，下面贴出核心代码：


```js
export default class IntersectionObserver {
  constructor(options) {
    this.options = {
      // 阈值 0-1
      thresholds: options.thresholds || 0.5,
      // 是否观察所有节点
      observeAll: options.observeAll || false,
      // 初始的相交比例
      initialRatio: options.initialRatio || 0,
      // 上下文，默认为当前页面
      context: options.context || null,
      // 目标节点
      selector: options.selector || null,
      // 延迟时间
      delayTime: options.delayTime || 200,
      // 相对于某个元素
      relativeToTarget: options.relativeToTarget || null,
      // 相对于某个元素的位置
      relativeToOptions: options.relativeToOptions || {},
      // 相对于视口的位置
      relativeToViewportOptions: options.relativeToViewportOptions || {},
      // 每次触发的回调
      onForEach: options.onForEach || ((res) => res.dataset),
      // 最后触发的回调
      onFinalCallback: options.onFinalCallback || (() => null),
      ...options,
    };
    
    // 监听器
    this.observer = null;
    // 定时器
    this.timer = null;
    // 当前收集的数据
    this.observerData = [];
  }

  connect() {
    if (this.observer) return this;
    this.observer = this.createObserver();
    return this;
  }

  // 重新连接
  reconnect() {
    this.disconnect();
    this.connect();
  }

  createObserver() {
    const observerOptions = {
      thresholds: [this.options.thresholds],
      observeAll: this.options.observeAll,
      initialRatio: this.options.initialRatio,
    };
    // 创建监听器
    const ob = this.options.context
      ? this.options.context.createIntersectionObserver(observerOptions)
      : wx.createIntersectionObserver(null, observerOptions);

    // 设置相对于某个元素
    if (this.options.relativeToTarget) {
      ob.relativeTo(this.options.relativeToTarget, this.options.relativeToOptions);
    } else {
      ob.relativeToViewport(this.options.relativeToViewportOptions);
    }

    let isCollecting = false;
    let observerData = [];
    // 监听回调
    ob.observe(this.options.selector, (res) => {
      const { intersectionRatio, intersectionRect } = res;
      const visible = intersectionRatio >= this.options.thresholds;

      if (!visible) return;

      const data = this.options.onForEach(res);
      observerData.push(data);
      

      if (isCollecting) return
      isCollecting = true

      // 延迟执行
      this.timer = setTimeout(() => {
        this.options.onFinalCallback(observerData);
        isCollecting = false;
        observerData = [];
      }, this.options.delayTime);
    })

    return ob;
  }



  // 断开连接
  disconnect() {
    if (!this.observer) return;
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    } 
    this.observer.disconnect();
    this.observer = null;
  }
}
```

### 4.2 参数说明

```js
const options = {
  // 阈值 0-1
  thresholds: 0.5,
  // 是否观察所有节点
  observeAll: false,
  // 初始的相交比例
  initialRatio: 0,
  // 上下文，默认为当前页面
  context: null,
  // 目标节点
  selector: null, 
  // 延迟时间
  delayTime: 200,
  // 相对于某个元素
  relativeToTarget: null,
  // 相对于某个元素的位置
  relativeToOptions: {},
  // 相对于视口的位置
  relativeToViewportOptions: {},
  // 每次触发的回调
  onForEach: (res) => res.dataset, // 最后触发的回调
  onFinalCallback: (res) => res,
};

```

- context：上下文，一般传入 `this` 即可，在自定义组件中，也必须是 `this`。
- selector：目标节点， 比如列表的class类名'.list' 。
- relativeToTarget：相对于某个元素，传了此参数，即开启了`relativeTo`模式，即 `使用选择器指定一个节点，作为参照区域`,无参数则代表使用`relativeToViewport`,即`指定页面显示区域作为参照区域`也就是可视区域。
- relativeToOptions：`relativeToTarget`有值开启之后才生效，相对于某个元素的位置，一般传入`{ bottom: 0 }`，代表相对于某个元素底部，其参数如下：
  - top：顶部
  - bottom：底部
  - left：左边
  - right：右边
- relativeToViewportOptions：相对于视口的位置，一般传入`{ bottom: 0 }`，代表相对于视口底部，其参数如下：
  - top：顶部
  - bottom：底部
  - left：左边
  - right：右边
- thresholds：阈值，0-1，默认为0.5，即相交比例达到50%时触发回调。
- observeAll：是否观察所有节点，默认为false，即只观察第一个匹配的节点。
- initialRatio：初始的相交比例，默认为0，即初始时相交比例为0。
- delayTime：延迟时间，单位为毫秒，默认为200，即延迟200毫秒触发回调。
- onForEach：每次触发的回调，参数为IntersectionObserver实例的回调参数，默认为`res => res.dataset`，即返回节点数据。
- onFinalCallback：最后触发的回调，参数为IntersectionObserver实例的回调参数，默认为`res => res`，即返回节点数据。

### 4.3 页面中使用


```js
import IntersectionObserver from '../../utils/IntersectionObserver.js';
Page({
  data: {
    // 列表数据
    list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },

  onLoad() {
    // 初始化IntersectionObserver
    this.observer = new IntersectionObserver({
      selector: '.list',  
      observeAll: true,
      context: this,
      onForEach: ({dataset}) => {
        // id以及key对应list列表上的自定义属性，例如：data-id="1" data-key="0"
        const { id, key } = dataset;
        // 这里需要返回想要的数据，例如：帖子id
        return { id };
      },
      onFinalCallback: (args) => {
        console.log('observer view', args);
      },
    });

    // 连接IntersectionObserver
    this.observer.connect();
  },

  onUnload() {
    // 断开IntersectionObserver
    this.observer.disconnect();
  },
});
```

```wxml
<view class="container">
  <view class="list" wx:for="{{list}}" wx:key="index" data-id="{{item}}" data-key="{{index}}">
    {{item}}
  </view>
</view>
```

说明：在`IntersectionObserver`中，我们通过`observe`方法来观察目标节点，当目标节点与视口相交时，会触发回调函数。在回调函数中，我们可以获取到目标节点的数据，并进行相应的处理。在页面中，我们通过`onLoad`方法来初始化`IntersectionObserver`，并在`onUnload`方法中断开连接。

![演示1](https://fastly.jsdelivr.net/gh/yutao721/blogImage@main/img/20250311150446683.png)

在`onFinalCallback`回调中，我们已经能拿到想要的数据，例如：帖子id，然后我们可以进行相应的处理，例如：发送请求，上报给服务端即可统计到帖子的曝光量，根据自己的业务进行操作。

### 4.4 存在的问题以及解决方案

1. 在小程序中，`IntersectionObserver`的回调函数是在`onLoad`生命周期中触发的，因此，如果页面中的节点在`onLoad`生命周期之前就已经加载完毕，那么`IntersectionObserver`将无法获取到这些节点的数据。另外，列表数据大部分场景都是异步获取的，因此，如果列表数据在`IntersectionObserver`初始化之前就已经获取到了，那么`IntersectionObserver`也无法获取到这些节点的数据。

>解决方案：在`IntersectionObserver`实例化之前，我们可以先获取到列表数据，然后通过`setData`方法将列表数据更新到页面中，这样，`IntersectionObserver`就可以获取到这些节点的数据了，也就是在通过接口获取到数据之后，再初始化`IntersectionObserver`，保证`IntersectionObserver`初始化时，列表数据已经获取并渲染到了页面。

2. 大部分场景，列表都是异步获取，并且是有分页的，因此，在分页加载时，`IntersectionObserver`无法获取到新加载的节点的数据。下面是一个分页加载的示例：

 ```js
  onReachBottom() {
    const { list } = this.data;
    list.push(11, 12, 13, 14, 15, 16, 17, 18, 19, 20);
    this.setData({
      list: list.concat(list)
    })
  },
 ```  

上面是通过`onReachBottom`方法来模拟分页加载，每次加载10条数据，当用户滑动到底部时，会触发`onReachBottom`方法，然后通过`setData`方法将新加载的数据更新到页面中。实际测试效果如下：

![演示2](https://fastly.jsdelivr.net/gh/yutao721/blogImage@main/img/20250311152204885.png)

>解决方案：在分页加载时，我们需要在`setData`的回调函数中，`重连`,也就是调用`this.ob.reconnect();`,这个时候，`IntersectionObserver`就相当于关闭之前的观察期，然后重新链接，因为这个时候`IntersectionObserver`会监听到新加进来的元素，这样就能保证获取到新加载的节点的数据了。实际测试效果如下：

![演示3](https://fastly.jsdelivr.net/gh/yutao721/blogImage@main/img/20250311152845937.png)

3.  上面的方案虽然能通过重连的方式监听到可视化区域的元素，但是很明显分页的时候也就加载了`11,12`这2条，但是确将之前已经可视化的元素也重新加载了，这样明显是不合理的，因此，我们需要在分页的时候，将之前已经可视化的元素过滤掉，只加载未可视化的元素。

>解决方案：在分页的时候，我们需要在`ob.observe`的回调函数中，判断当前节点是否已经可视化了，如果已经可视化了，那么就不加载，否则就加载。具体实现如下：


类里面的有个`this.observerData`数组，用来存储上次已经可视化的元素，在`onFinalCallback`函数中将本次可视化的元素存储到`this.observerData`数组中。下一次重连的时候，通过`this.observerData`数组中的最后一项，找到`observerData`中的索引位置，截取掉`observerData`数组中已经可视化的元素，这样就能保证分页的时候，只加载未可视化的元素了。具体代码如下：

```js
  // 延迟执行
  this.timer = setTimeout(() => {
    
    // 重新连接的时候，需要过滤掉之前已经监听到的数据
    const lastObserverData = this.observerData.length ? this.observerData[this.observerData.length - 1] : null;
    const index = observerData.findIndex(item => item === lastObserverData);
    if (index !== -1) {
      observerData = observerData.slice(index + 1);
    }
    
    this.options.onFinalCallback(observerData);
    // 保存当前数据,需要断开连接时使用
    this.observerData = observerData;
    isCollecting = false;
    observerData = [];
  }, this.options.delayTime);
```
>实际测试效果如下：

![演示4](https://fastly.jsdelivr.net/gh/yutao721/blogImage@main/img/20250311154159395.png)

4. 使用时的优化，为了在使用过程中，会触发接口频繁上报，可以用一个防抖函数，控制上报的评率，也可以在`onFinalCallback`函数中，将接口请求放到`setTimeout`中，这样就能保证接口请求不会频繁的上报了。具体代码如下：

```js
  onReady() {
    this.ob = new IntersectionObserver({
      selector: '.list',
      observeAll: true,
      context: this,
      onForEach: ({ dataset }) => {
        const { key, id } = dataset || {} 
        return id
      },
      onFinalCallback: args => {
        if (!args) return
        console.log('observer view', args)
        // 如果需要过滤已经上报的数据，可以在这里过滤
        // reportids:全局定义的一个数组，用来存储上报的id
        for (var i = 0; i < args.length; i++) {
          if (reportids.indexOf(args[i]) == -1) reportids.push(args[i]);
        }
        if (timer != null) {
          clearTimeout(timer);
        }
        timer = setTimeout(function () {
          console.log(reportids);
          // ajax 上报逻辑
          reportids = [];
        }, 400)
      },
    }).connect()
  },
```

### 4.5 组件中使用

> 有的时候，帖子列表或者商品列表单个列表被包裹在一个组件中，这个时候，我们只需要在组件中，监听`IntersectionObserver`即可，不需要在页面中监听，具体代码如下：

```wxml
<view class="lists">
   <list-item wx:for="{{list}}" wx:key="unique" index="{{index}}" item="{{item}}"></list-item>
</view>
```

listItem.js:

```js

import IntersectionObserver from '../../../../utils/IntersectionObserver.js';
let reportid = [];
let iTime = null;

Component({
  behaviors: [],
  properties: {
    item: {
      type: Object,
      value: {},
    },
    index: {
      type: Number,
      value: 0,
    },
  },
  data: {

  },
  lifetimes: {
    created() {

    },
    attached() {

    },
    ready() {
      this.ob = new IntersectionObserver({
        selector: '.list',//自定监听的class 元素
        observeAll: true,
        context: this,
        onForEach: ({ dataset }) => {
          const { id, key } = dataset || {} //获取设置的key 值 ，自定义
          return key
        },
        onFinalCallback: args => {
          if (!args) return
          console.log('observer view', args)//打印监听到的元素
          for (var i = 0; i < args.length; i++) {
            if (reportid.indexOf(args[i]) == -1) reportid.push(args[i]);
          }
          if (iTime != null) {
            clearTimeout(iTime);
          }
          iTime = setTimeout(function () {
            var reportidstr = reportid.toString();
            reportid = [];
          }, 800)


        },
      })
      this.ob.connect()
    },
    moved() {

    },
    detached() {

    },
  },
  methods: {

  },
});

```

测试效果如下：

![演示5](https://fastly.jsdelivr.net/gh/yutao721/blogImage@main/img/20250311155715469.png)

这种使用方式，就不需要通过重新连接的方式来处理分页获取到的动态数据了，组件`ready`的时候，必定是能获取到元素节点的，只不过上报的时候是一条条单个数据上报的，所以需要设置一个定时器，来合并上报，避免频繁的上报。

### 4.6 相对于某个元素

```js
 onReady() {
    this.ob = new IntersectionObserver({
      selector: '.list',
      observeAll: true,
      relativeToTarget: '.header',
      relativeToOptions: {
        bottom: 50,
      },
      context: this,
      onForEach: ({ dataset }) => {
        const { key, id } = dataset || {} 
        return id
      },
      onFinalCallback: args => {
        if (!args) return
        console.log('observer view', args)
        for (var i = 0; i < args.length; i++) {
          if (reportids.indexOf(args[i]) == -1) reportids.push(args[i]);
        }
        if (timer != null) {
          clearTimeout(timer);
        }
        timer = setTimeout(function () {
          console.log(reportids);
          // ajax 上报逻辑
          reportids = [];
        }, 400)
      },
    }).connect()
  },
```

![演示6](https://fastly.jsdelivr.net/gh/yutao721/blogImage@main/img/20250311160507950.png)

### 4.8 relativeTo扩展

通过`relativeTo`，可以监听相对于某个元素，并且可以设置相对于某个元素的位置，比如距离顶部多少，距离底部多少，距离左侧多少，距离右侧多少。可以通过这个实现pageScroll对某个元素的的监听，监听某个元素距离顶部多少。

