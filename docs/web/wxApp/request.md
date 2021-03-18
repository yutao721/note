### 小程序中实现token过期重新登录再重新请求业务接口

首先还是来看下小程序官方给出的小程序登录流程：

- [小程序官方登录地址](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/login.html)
- 小程序官方登录流程图

![](https://res.wx.qq.com/wxdoc/dist/assets/img/api-login.2fcc9f35.jpg)



我们这里所说的token就是指的官方说的`自定义登录态`，token一般都是有时效性，按照此流程，当token失效的时候，页面在请求接口的时候服务端肯定会认为token是非法的，此时就需要小程序端重新获取新的token，然后继续接着后面的流程走。一般服务端都会给一个特定的状态码标记需要重新获取token，后面的场景我们都以服务端返回code码401认为需要去登录。

#### 场景1：token失效之后直接跳转到特定的一个授权登录页面

由于getUserInfo接口变动的缘故，必须用户手动去触发一个按钮，一般都会做一个特定的授权登录页面或者弹窗，那此时在接口返回401的时候那我们直接就跳转到那个授权页面或者弹起授权登录弹窗即可，相当于是走了用户第一次进入该小程序的流程。

> 这种方案是最简单的解决方案，但是缺点也很明显：打断了用户的操作流程，重复了第一次授权登录的流程，很繁琐。

#### 场景2：token失效之后无感知获取新token并继续之前的操作

分2步来解决这个问题，无感知获取token

这个其实很简单，调wx.login()获取code之后再调服务端新的接口，此接口只需要接受code返回当前登录账户最新的信息（token以及其他），拿到最新token。

具体代码实现如下：

http.js文件核心代码

```js
export class Http {
  constructor() {}

  request({ url, data = {}, method, header, callback = ''} = {}) {
    let _this = this;
    return new Promise((resolve, reject) => {
      wx.request({
        url,
        data,
        method,
        header: { Authorization: 'Bearer ' + storge.get(LOGIN_TOKEN) },
        callback,
        fail(res) {
          reject(res)
        },
        complete: res => {
          if (callback) return callback(res.data);
          let statusCode = res.statusCode;
          if (statusCode == 404) {
            console.log('接口不存在')
          } else if (statusCode == 401) {
           getNewToken().then(() => {
              _this.request({ url, data, method, callback: resolve })
           })
          } else if (statusCode == 200) {
            resolve(res.data)
          } else if (statusCode.startsWith('5')) {
            wx.showModal({ content: '服务器报错，请重试！', showCancel: false });
          } 
        }
      })
    })
  }
}

// 获取token
const getNewToken = () => {
  return new Promise((resolve, reject) => {
    wx.login({
      success(res) {
        wx.request({
          url: '获取最新token接口地址',
          method: 'POST',
          success(res) {
            let r = res.data;
            // 将所有存储到观察者数组中的请求重新执行。
            if (r.code == 0) {
              const token = r['data']['token'];
              wx.setStorageSyn('LOGIN_TOKEN', token);
              resolve(res);
            }
          }
        })
      },
      fail(err) {
        reject()
        console.error('wx login fail', err);
      }
    });
  })
}
```

接下来看下如何使用：

api/index.js文件部分api

```js
import { Http } from '../utils/http.js';
export class Index extends Http {
  constructor() {
    super();
  }
  
  // 获取商品分类
  goodsList(data) {
    return this.request({
      url: 'goodsList',
      method: 'GET',
      data: data
    });
  }
}
```

pages/index/index.js文件中调用该接口，部分代码：

```js
import { Index } from '../../api/index.js';

const API = new Index();

Page({

  /**
   * 页面的初始数据
   */
  data: {},
  
  // 获取商品列表
  getGoodList(page) {
    let param = this.data.params;
    let params = { page: page, ...param };
    return new Promise(resolve => {
      API.getGoodList(params).then(res => {
        // 业务逻辑
      })
    })
  }
  
  ...
 })
```

如此，我们来试验一番，看到底可以不

![](https://gitee.com/yutao618/images/raw/master/images/20210318142443.png)

如图，看到在调user接口的时候发现token失效（服务端返回了401），会调issue获取最新的token,然后继续走user接口，整个过程用户无感知，而且也不会中断之前的操作，是不是很完美，答案是NO! 往下看

![](https://gitee.com/yutao618/images/raw/master/images/20210318143225.png)

遇到业务复杂的页面，会有多个请求，此时，获取最新token的这个接口就会多次调用，这个接口其实只需要调一次就可以了，这样就影响性能了，那如何对这种进行优化呢？其实方法有很多种，最简单的就是利用发布订阅模式，简单修改代码如下：



```js
let isRefreshing = true;
let subscribers = [];

function onAccessTokenFetched() {
  subscribers.forEach((callback) => {
    callback();
  })
  subscribers = [];
}

function addSubscriber(callback) {
  subscribers.push(callback)
}

export class Http {
  constructor() {}

  request({ url, data = {}, method, header, callback = ''} = {}) {
    let _this = this;
    return new Promise((resolve, reject) => {
      wx.request({
        url,
        data,
        method,
        header: { Authorization: 'Bearer ' + storge.get(LOGIN_TOKEN) },
        callback,
        fail(res) {
          reject(res)
        },
        complete: res => {
          if (callback) return callback(res.data);
          let statusCode = res.statusCode;
          if (statusCode == 404) {
            console.log('接口不存在')
          } else if (statusCode == 401) {
            
            // 将需要重新执行的接口缓存到一个队列中
           addSubscriber(() => {
             _this.request({ url, data, method, header, callback: resolve })
           })
            
           if (isRefreshing) {
              getNewToken(url, data).then(() => {
                // 依次去执行缓存的接口
                onAccessTokenFetched();
                isRefreshing = true;
              })
            }
            isRefreshing = false; 
          } else if (statusCode == 200) {
            resolve(res.data)
          } else if (statusCode.startsWith('5')) {
            wx.showModal({ content: '服务器报错，请重试！', showCancel: false });
          } 
        }
      })
    })
  }
}

// 获取token
const getNewToken = () => {
  return new Promise((resolve, reject) => {
    wx.login({
      success(res) {
        wx.request({
          url: '获取最新token接口地址',
          method: 'POST',
          success(res) {
            let r = res.data;
            // 将所有存储到观察者数组中的请求重新执行。
            if (r.code == 0) {
              const token = r['data']['token'];
              wx.setStorageSyn('LOGIN_TOKEN', token);
              resolve(res);
            }
          }
        })
      },
      fail(err) {
        reject()
        console.error('wx login fail', err);
      }
    });
  })
}
```

对，就是这么简答，把所有401的接口执行缓存到一个队列中，拿到最新token（这里使用了请求锁，只执行一次获取token的接口），接着再依次去走之前的逻辑，整个过程无感知，而且页面不管有多少个请求，始终只会调一次获取token的接口。下面来简单测试下：

![](https://gitee.com/yutao618/images/raw/master/images/20210318144706.png)

看到，issue接口只调取了一次，如此就可以完美的解决小程序中token过期重新无感知登录并重新请求之前所有的接口。

