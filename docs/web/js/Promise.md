## Promise的源码实现（完美符合Promise/A+规范）

> Promise是前端面试中的高频问题，大多数公司，都会问一些关于Promise的问题。
>那是因为前端异步一直是老生常谈，promise更是绕不过去的话题，那么除了会使用promise之外，能否尝试自己封装一个promise呢？
>如果你能根据PromiseA+的规范，写出符合规范的源码，那么我想，对于面试中的Promise相关的问题，都能够给出比较完美的答案。

> Promise/A+规范地址   
>[中文翻译地址](https://malcolmyu.github.io/2015/06/12/Promises-A-Plus/)  
>[英文原版地址](https://promisesaplus.com/)  
>[csdn](https://www.cnblogs.com/zhouyangla/p/10781697.html)  
>[掘金1](https://juejin.im/post/5d59757f6fb9a06ae76405c6)  
>[掘金2](https://juejin.im/post/5c6ad98e6fb9a049d51a0f5e#heading-9)  
   
### 1.结合Promise/A+规范和使用例子实现简易版本Promise
> 先来看一下promise使用的一个小例子：  
```js
let p = new Promise((resolve, reject) => {
  console.log('start')
  resolve('jiaHang')
})
p.then((res) => {
  console.log('success:' + res);
}, (err) => {
  console.log('fail' + err);
})

console.log('end')
// 执行结果：start end success:jiaHang
```
> 看下文档翻译怎么解释Promise   
1. promise相当于一个状态机，有3种状态(pending,fulfilled,rejected)   
    - promise 对象初始化状态为 pending
    - 当调用resolve(成功)，会由pending => fulfilled
    - 当调用reject(失败)，会由pending => rejected   
2. promise对象方法,Promise实例需要提供一个then方法，then中有两个参数，
这两个参数也都是函数，当执行器调用resolve后，then中第一个参数函数会执行。当执行器调用reject后，then中第二个参数函数会执行。

> 由这个简单的例子和前2点的规范，我们可以归纳总结如下几点：   

1. Promise是构造函数，new出来的实例有then方法。
2. new Promise时，传递一个参数，这个参数是函数，又被称为执行器函数(executor)， 并执行器会被立即调用，也就是上面结果中start最先输出的原因。
3. executor是函数，它接受两个参数 resolve reject ，同时这两个参数也是函数。
4. new Promise后的实例具有状态， 默认状态是等待，当调用resolve后， 实例状态为成功状态， 当执行器调用reject后，实例状态为失败状态。
5. promise翻译过来是承诺的意思，实例的状态一经改变，不能再次修改，不能成功再变失败，或者反过来也不行。
6. 每一个promise实例都有方法then ，then中有两个参数，这两个参数也都是函数，当调用resolve后，then中第一个参数函数会执行。当调用reject后，then中第二个参数函数会执行。

```js
const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

class Promise {
  constructor(executor) {
    this.status = PENDING; // Promise状态，默认为pending
    this.value = undefined;
    this.reason = undefined;
    let resolve = (value) => {
      if (this.status === PENDING) {
        this.status = FULFILLED;
        this.value = value;
      }
    }
    let reject = (reason) => {
      if (this.status === PENDING) {
        this.status = REJECTED;
        this.reason = reason;
      }
    }
    executor(resolve, reject)
  }

  then(onFulfilled, onRejected) {
    if (this.status === FULFILLED) {
      onFulfilled(this.value)
    }
    if (this.status === REJECTED) {
      onRejected(this.reason)
    }
  }
}

module.exports = Promise;

```
我们来测试下刚才自己写的Promise

```js
const Promise = require('./promise')

let p = new Promise((resolve, reject) => {
  console.log('start')
  resolve('jiaHang')
})
p.then((res) => {
  console.log('success:' + res);
}, (err) => {
  console.log('fail' + err);
})

console.log('end')
// 执行结果：start success:jiaHang end
```

貌似结果看似对了，不过和原生的promise还是有不同的，就是success那条语句的打印顺序，不要急，后面我们会来慢慢实现。目前
还有一个问题要在这里先处理掉。   
先看下下面这个
```js
let p = new Promise((resolve, reject) => {
  throw new Error('出错了')
  console.log('start')
  resolve('jiaHang')
})
p.then((res) => {
  console.log('success:' + res);
}, (err) => {
  console.log('fail' + err);
})

console.log('end')

```
执行时可能会发生异常,那要怎么处理呢，很简单，用try...catch将执行器给
包裹起来，如果执行器出错，那就内部将错误异常作为原因，让promise变成失败态

```js
const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

class Promise {
  constructor(executor) {
    this.status = PENDING; // Promise状态，默认为pending
    this.value = undefined;
    this.reason = undefined;
    let resolve = (value) => {
      if (this.status === PENDING) {
        this.status = FULFILLED;
        this.value = value;
      }
    }
    let reject = (reason) => {
      if (this.status === PENDING) {
        this.status = REJECTED;
        this.reason = reason;
      }
    }
    try {
      executor(resolve, reject)
    } catch (e) {
      reject(e)
    }

  }

  then(onFulfilled, onRejected) {
    if (this.status === FULFILLED) {
      onFulfilled(this.value)
    }
    if (this.status === REJECTED) {
      onRejected(this.reason)
    }
  }
}

module.exports = Promise;

```
在不考虑执行顺序的前提下，一个简易版本的Promise就完成了，接下来让我们慢慢完善

### 2. 实现异步处理和一个实例多次调用then方法
还是来先看2个小例子

```js
let p = new Promise((resolve, reject) => {
  console.log('start')
  setTimeout(() => {
    resolve('jiaHang')
  })
})
p.then((res) => {
  console.log('success:' + res);
}, (err) => {
  console.log('fail' + err);
})

console.log('end')
// 执行结果：start end success:jiaHang 
```
想一下，Promise是怎么处理异步的呢？

```js
let p = new Promise((resolve, reject) => {
  console.log('start')
  setTimeout(() => {
    resolve('jiaHang')
  })
})
p.then((res) => {
  console.log('success:' + res);
}, (err) => {
  console.log('fail' + err);
})

p.then((res) => {
  console.log('success:' + res);
}, (err) => {
  console.log('fail' + err);
})

console.log('end')
// 执行结果：start end success:jiaHang success:jiaHang 
```

Promise 是怎么处理一个promise实例 可以then多次的？

1. 对于异步情况，我们先来看上面的例子，当代码执行到了p.then() 的时候，执行器方法中的resolve('data1')被setTimeout放到了异步任务队列中。
2. 换句话说，也就是，此时实例p的状态还是默认状态，没有改变，那么我们此时并不知道要去执行then中的第一个参数（成功回调）还是第二个参数（失败回调）。
3. 在不知道哪个回调会被执行的情况下，就需要先把这两个回调函数保存起来，等到时机成熟，确定调用哪个函数的时候，再拿出来调用。
4. 其实就是发布订阅的一个变种，我们在执行一次p.then(),就会then中的参数，也就是把成功回调和失败回调都保存起来（订阅），当执行了resolve方法或者reject方法时，我们去执行刚保存起来的函数（发布）。

基于这几点思考，我们的代码做以下改变：

```
// 省略其余等待，突出增加的点，等下发完整版
class Promise {
  constructor(executor) {
    ...
    this.resolveCallbacks = []; // 当then是pending 我希望把成功的方法都放到数组中
    this.rejectCallbacks = [];  // 当then是pending 我希望把失败的方法都放到数组中
    let resolve = (value) => {
      if (this.status === PENDING) {
        ...
        this.resolveCallbacks.forEach(fn=>fn()); // 发布
      }
    }
    let reject = (reason) => {
      if (this.status === PENDING) {
        ...
        this.rejectCallbacks.forEach(fn=>fn()); // 发布
      }
    }
    ...
  }

  then(onFulfilled, onRejected) {
    ...
    if(this.status === PENDING){
      // ... 先把成功的回调和失败的回调分开存放
      this.resolveCallbacks.push(()=>{
        onFulfilled(this.value)
      });
      this.rejectCallbacks.push(()=>{
        onRejected(this.reason);
      })
    }
  }
}
```
这样修改后，我们执行器方法中，有异步函数的情况时，p.then执行就会把对应的两个参数保存起来了。那么在什么时候调用呢？
答，肯定是在执行器中的resolve执行时候或者reject执行时候。多次调用then的时候，就会触发对应的成功和失败

完整的Promise代码如下：

```js
const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

class Promise {
  constructor(executor) {
    this.status = PENDING; // Promise状态，默认为pending
    this.value = undefined;
    this.reason = undefined;
    this.resolveCallbacks = []; // 当then是pending 我希望把成功的方法都放到数组中
    this.rejectCallbacks = [];  // 当then是pending 我希望把失败的方法都放到数组中
    let resolve = (value) => {
      if (this.status === PENDING) {
        this.status = FULFILLED;
        this.value = value;
        this.resolveCallbacks.forEach(fn=>fn()); // 发布
      }
    }
    let reject = (reason) => {
      if (this.status === PENDING) {
        this.status = REJECTED;
        this.reason = reason;
        this.rejectCallbacks.forEach(fn=>fn()); // 发布
      }
    }
    try {
      executor(resolve, reject)
    } catch (e) {
      reject(e)
    }

  }

  then(onFulfilled, onRejected) {
    if (this.status === FULFILLED) {
      onFulfilled(this.value)
    }
    if (this.status === REJECTED) {
      onRejected(this.reason)
    }
    if(this.status === PENDING){
      // ... 先把成功的回调和失败的回调分开存放
      this.resolveCallbacks.push(()=>{
        onFulfilled(this.value)
      });
      this.rejectCallbacks.push(()=>{
        onRejected(this.reason);
      })
    }
  }
}

module.exports = Promise;

```

换成自己写的Promise试下刚才的例子

```js
const Promise = require('./promise')

let p = new Promise((resolve, reject) => {
  console.log('start')
  setTimeout(() => {
    resolve('jiaHang')
  })
})
p.then((res) => {
  console.log('success:' + res);
}, (err) => {
  console.log('fail' + err);
})

p.then((res) => {
  console.log('success:' + res);
}, (err) => {
  console.log('fail' + err);
})

console.log('end')
// // 执行结果：start end success:jiaHang success:jiaHang 
```
> 这里为什么能拿到success的值，其关键点就在于发布订阅，then的时候，当status等于pending时候，将成功和失败的回调分别存到
对应的数组中，当触发resolve和reject的时候 触发对应的成功和失败。   

接下来就是要实现Promise的链式调用，这个是Promise的核心
### 3.实现Promise链式调用
