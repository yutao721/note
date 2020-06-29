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
#### 3.1先来看一个例子，看下实际场景中是如何使用链式调用的  
> 有如下场景，第一次读取的是文件名字，拿到文件名字后，再去读这个名字文件的内容。很显然这是两次异步操作，并且第二次的异步操作依赖第一次的异步操作结果。     

```js
// 简要说明 创建一个js文件 与这个文件同级的 name.txt, text.txt 
// 其中name.txt内容是text.txt， 而text.txt的内容是 文本1
// node 运行这个js文件

let fs = require('fs')

fs.readFile('./name.txt', 'utf8', function (err, data) {
  console.log(data)
  fs.readFile(data, 'utf8', function (err, data) {
    console.log(data)
  })
})

```
很显然，上面的回调模式不是我们想要的，那么我们如何把上面写法给promise化呢？为了表述的更清晰一下，我还是分步来写：

```js
function read(url){
    return new Promise((resolve,reject)=>{
        fs.readFile(url,'utf8',(err,data)=>{
            if(err)reject(err);
            resolve(data);
        })
    })
}
```

这个函数执行就会返回promise实例，也就是有then方法可以使用,我们有以下2种调用方式

```js
readFile('./name.txt').then(
  (data) => {
    console.log(data)
    readFile(data).then(
      (data) => {console.log(data)},
      (err) => {console.log(err)}
    )
  },
  (err) => {console.log(err)}
)

```

这种在回调中加回调，promise说你还不如不用我。

```js
readFile('./name.txt')
.then(
  (data) => {
    console.log(data)
    return readFile(data)
  },
  (err) => {console.log(err)}
)
.then(
  (data) => { console.log(data) },
  (err) => { console.log(err) }
)

```
这种调用方式才是符合Promise的正确使用方式。   


#### 3.2 回顾链式调用的常见场景  
- 验证then中第一个回调返回普通值情况
```js
readFile('./name.txt')
.then(
  (data) => {
    console.log(data)
    // return {'a': 100} // 1 返回引用类型
    // return 100 // 2 返回基本类型
    // return undefined 3 返回undefined
    // 4 不写return
  },
  (err) => {console.log(err)}
)
.then(
  (data) => { console.log(data) },
  (err) => { console.log(err) }
)

```

上面4种情况对应一下运行结果：

```
// text.txt  {a: 100}
// text.txt  100
// text.txt  undefined
// text.txt  undefined
```

- 验证第一个then中，返回promise情况，链式的第二个then怎么回应

```js
readFile('./name.txt')
.then(
  (data) => {
    console.log(data)
    return new Promise(function(resolve, reject){
      setTimeout(function(){
      // resolve('ok')
      reject('error')
      },1000)
    })
  },
  (err) => {console.log(err)}
)
.then(
  (data) => { console.log(data) },
  (err) => { console.log(err) }
)

// 运行结果如下：
// resolve结果为： text.txt ok
// reject结果为： text.txt error
```

- 验证第一个then中，返回错误情况，链式的第二个then怎么相应

```js
readFile('./name.txt')
.then(
  (data) => {
    console.log(data)
    throw TypeError()
  },
  (err) => {console.log(err)}
)
.then(
  (data) => { console.log(data) },
  (err) => { console.log(err) }
)

// 执行结果如下 text.txt err:TypeError
```

基于上面这些测试，以及 [promise A+](https://promisesaplus.com) 文档规范，我们可以总结出以下关于链式调用的几点：
1. jquery 链式调用 是因为jquery返回了this，promise能一直then下去，是因为promise的then方法返回了promise  
2. 返回的是新的promise，因为上面说过，promise实例状态一旦修改，不能再次修改，所以要返回全新的promise  
3. 如果then方法返回的是一个常量 包括undefined，会把这个结果传递给外层的then的成功的结果    
4. 如果then方法中抛出异常 会走到下一次then的失败的结果
5. then方法执行后可能会返回一个promise,那么会采用这个promise的返回结果作为下一个then的成功或者失败
6. 走失败 两种可能 第一种发生了错误 第二种就是返回一个失败的promise    


#### 3.3 基于上述完善Promise的链式调用
##### 1 then返回的是全新的promise
```js
then(onFulfilled, onRejected) {
    let promise2;
    // 调用then后必须返回一个新的promise
    promise2 = new Promise((resolve, reject) => {
      if (this.status === FULFILLED) {
        // 用try catch包裹是因为promise2 可能在运行的时候就出错了，如果出错直接reject出去即可
        try{
          // 需要对then的成功的回调和失败的回调取到他的返回结果，如果是普通值就让promise2成功即可
          let x = onFulfilled(this.value);
          resolve(x)
        } catch (e) {
          reject(e)
        }
        
      }
      if (this.status === REJECTED) {
        try{
          let x = onRejected(this.reason)
          resolve(x)
        }catch (e) {
          reject(e)
        }
      }
      if(this.status === PENDING){
        // ... 先把成功的回调和失败的回调分开存放
        this.resolveCallbacks.push(()=>{
          try{
            let x = onFulfilled(this.value)
            resolve(x)
          }catch (e) {
            reject(e)
          }
        });
        this.rejectCallbacks.push(()=>{
          try{
            let x = onRejected(this.reason);
            resolve(x)
          }catch (e) {
            reject(e)
          }
        })
      }
    })
    return promise2
  }
```
用上面的代码来测试下

```js
const Promise = require('./promise')
let p = new Promise((resolve, reject) => {
  console.log('start')
  resolve('jiaHang')
  // reject('jiaHang')
})
p.then((res) => {
  console.log('success:' + res);
}, (err) => {
  console.log('fail' + err);
}).then((res) => {
  console.log('success:' + res);
}, (err) => {
  console.log('fail' + err);
})


// 运行结果
// start
// success:jiaHang
// success:undefined
```


> 需要注意的是，需要对then的成功的回调和失败的回调取到到的返回结果进行处理,如果是普通值就让promise2成功即可
如果是promise 那应该让x这个promise执行 x.then。  

我们将之前resolve(x)的地方替换成一个方法，统一处理这块的逻辑

```js
if (this.status === FULFILLED) {
    // 用try catch包裹是因为promise2 可能在运行的时候就出错了，如果出错直接reject出去即可
    try{
      // 需要对then的成功的回调和失败的回调取到他的返回结果
      // 如果是普通值就让promise2成功即可
      // 如果是promise 那应该让x这个promise执行 x.then
      let x = onFulfilled(this.value);
      resolvePromise(promise2,x,resolve,reject);
    } catch (e) {
      reject(e)
    }
  }
```

其他地方也是如此替换，我们单独写一个方法

```js
let resolvePromise = (promise2,x,resolve,reject) => {
  console.log(promise2);
}
```

思考下，这里能拿到promise2吗？为什么？其实目前是拿不到promise2的，打印结果为undefined。那怎么蔡才能拿到
其实规范2.2.4也说明了 要确保 onFulfilled 和 onRejected 方法异步执行(且应该在 then 方法被调用的那一轮事件循环之后的新执行栈中执行) 所以要在resolve里加上setTimeout

```js
then(onFulfilled, onRejected) {
    let promise2;
    // 调用then后必须返回一个新的promise
    promise2 = new Promise((resolve, reject) => {
      if (this.status === FULFILLED) {
        // 2.2.4 规范
        setTimeout(()=> {
          // 用try catch包裹是因为promise2 可能在运行的时候就出错了，如果出错直接reject出去即可
          try{
            // 需要对then的成功的回调和失败的回调取到他的返回结果
            // 如果是普通值就让promise2成功即可
            // 如果是promise 那应该让x这个promise执行 x.then
            let x = onFulfilled(this.value);
            resolvePromise(promise2,x,resolve,reject);
          } catch (e) {
            reject(e)
          }
        }, 0)
      }


      if (this.status === REJECTED) {
        setTimeout(()=> {
          try{
            let x = onRejected(this.reason)
            resolvePromise(promise2,x,resolve,reject);
          }catch (e) {
            reject(e)
          }
        }, 0)
      }

      if(this.status === PENDING){
        // ... 先把成功的回调和失败的回调分开存放
        this.resolveCallbacks.push(()=>{
          setTimeout(()=> {
            try{
              let x = onFulfilled(this.value)
              resolvePromise(promise2,x,resolve,reject);
            }catch (e) {
              reject(e)
            }
          }, 0)
        });

        this.rejectCallbacks.push(()=>{
          setTimeout(()=> {
            try{
              let x = onRejected(this.reason);
              resolvePromise(promise2,x,resolve,reject);
            }catch (e) {
              reject(e)
            }
          }, 0)
        })
      }
    })
    return promise2
  }
```

来测试下，看下Promise2能有结果吗
```js
const Promise = require('./promise')
let p = new Promise((resolve, reject) => {
  console.log('start')
  resolve('jiaHang')
  // reject('jiaHang')
})
p.then((res) => {
  console.log('success:' + res);
  return new Promise((resolve, reject) => {
    resolve(2)
  })
}, (err) => {
  console.log('fail' + err);
}).then((res) => {
  console.log('success:' + res);
}, (err) => {
  console.log('fail' + err);
})

```

结果为：
```
start
success:jiaHang
Promise {
  status: 'pending',
  value: undefined,
  reason: undefined,
  resolveCallbacks: [ [Function] ],
  rejectCallbacks: [ [Function] ] }

```

可以看到promise2打印出来是一个Promise对象，接下来，我们把重心就可以放到来处理resolvePromise了。 

#### 2.resolvePromise函数处理    

resolvePromise函数处理的情况有很多情况，我们也是一步步来处理，具体可以参考规范2.3
- Promise循环引用的问题   
先通过一个例子来看下

```js
let p1 = new Promise((resolve, reject) => {
  resolve();
})

let p2 = p1.then(() => {
  return p2
})

```
先来看下执行的结果：

```
UnhandledPromiseRejectionWarning: TypeError: Chaining cycle detected for promise #<Promise>
```
很明显，这是Promise报了一个类型错误，循环引用的问题，原因是p2的结果要等到p2执行完，自己等待自己，永远都是等待态。实际上开发中很少人会这样写，
但是所有的promise都遵循这个规范，不同的人写的promise可能会混用，尽可能考虑的周全 要考虑别人promise可能出错的情况。因此就有了如下代码：

```js
let resolvePromise = (promise2, x, resolve, reject) => {
  if (promise2 === x) {
    return reject(new TypeError('Chaining cycle detected for promise'))
  }
}
```
- 对x值的处理  

```js
// 看x是不是一个promise,promise应该是一个对象
  if (typeof x === 'function' || (typeof x === 'object' && x !== null)) {
    let called; // 表示是否调用过成功或者失败
    // 尝试取当前x的then方法, 这个then方法可能别人定义的时候 用的Object.defineProperty
    try {
      let then = x.then; // 如果取then方法出错 那就用错误拒绝promise2
      if (typeof then === 'function') { // 我就认为他是一个promise
        then.call(x, y => { // 让当前的promise执行 ，不用多次取then方法了
          // y 有可能还是一个promise , 继续调用resolvePromise方法，直到解析出一个常量为止，最终把常量传递下去
          if (called) return; // 防止此方法多次被调用
          called = true;
          resolvePromise(promise2, y, resolve, reject);
        }, r => {
          if (called) return;
          called = true;
          reject(r); // 让当前的promise变成失败态即可
        })
      } else {
        // x就是一个普通的对象 并没有then方法
        resolve(x);
      }
    } catch (e) {
      if (called) return;
      called = true;
      reject(e);
    }
  } else {
    // x肯定一个常量
    resolve(x);
  }
```

完整的resolvePromise如下：
```js
let resolvePromise = (promise2, x, resolve, reject) => {
  if (promise2 === x) {
    return reject(new TypeError('Chaining cycle detected for promise'))
  }
  // 看x是不是一个promise,promise应该是一个对象
  if (typeof x === 'function' || (typeof x === 'object' && x !== null)) {
    let called; // 表示是否调用过成功或者失败
    // 尝试取当前x的then方法, 这个then方法可能别人定义的时候 用的Object.defineProperty
    try {
      let then = x.then; // 如果取then方法出错 那就用错误拒绝promise2
      if (typeof then === 'function') { // 我就认为他是一个promise
        then.call(x, y => { // 让当前的promise执行 ，不用多次取then方法了
          // y 有可能还是一个promise , 继续调用resolvePromise方法，直到解析出一个常量为止，最终把常量传递下去
          if (called) return; // 防止此方法多次被调用
          called = true;
          resolvePromise(promise2, y, resolve, reject);
        }, r => {
          if (called) return;
          called = true;
          reject(r); // 让当前的promise变成失败态即可
        })
      } else {
        // x就是一个普通的对象 并没有then方法
        resolve(x);
      }
    } catch (e) {
      if (called) return;
      called = true;
      reject(e);
    }
  } else {
    // x肯定一个常量
    resolve(x);
  }
}
```

说明：这里边以下几点要注意   
- 为什么要用一个变量来存x.then的值
- 为什么需要有called这个标记

其实规范中也有说明，这里简单说下，用变量存储了一个指向 x.then 的引用，然后测试并调用该引用，
以避免多次访问 x.then 属性。这种预防措施确保了该属性的一致性，因为其值可能在检索调用时被改变。
called的标记是为了防止resolve,reject多次调用，不排除有人在resolve之后又调用reject。


到此，自己写的Promise可以算是完成，不过还有些问题要处理。先来看下下面这个用法：

```js
let p = new Promise(function (resolve, reject) {
   resolve(1000)
 })
 p.then().then().then(function (data) {
   console.log(data, 'resolve');
 }, function (error) {
   console.log(error, 'reject');
})

```

我们的代码应该可以在then中什么都不传,实现值得穿透

所以在then方法中需要对接收的参数onFulfilled, onRejected进行容错处理, 
onFulfilled 有就用原参数，没有就给个默认的函数 对于onRejected 没有就抛出异常

```js
then(onFulfilled, onRejected) { // onFulfilled, onRejected 是两个可选参数
    // onFulfilled，返回val
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : val => val;
    // 如果onRejected不是函数就抛出异常
    onRejected = typeof onRejected === 'function' ? onRejected : r => {throw r};
    let promise2;
    // 调用then后必须返回一个新的promise
    promise2 = new Promise((resolve, reject) => {
      if (this.status === FULFILLED) {
        // 2.2.4 规范
        setTimeout(() => {
          // 用try catch包裹是因为promise2 可能在运行的时候就出错了，如果出错直接reject出去即可
          try {
            // 需要对then的成功的回调和失败的回调取到他的返回结果
            // 如果是普通值就让promise2成功即可
            // 如果是promise 那应该让x这个promise执行 x.then
            let x = onFulfilled(this.value);
            resolvePromise(promise2, x, resolve, reject);
          } catch (e) {
            reject(e)
          }
        }, 0)
      }


      if (this.status === REJECTED) {
        setTimeout(() => {
          try {
            let x = onRejected(this.reason)
            resolvePromise(promise2, x, resolve, reject);
          } catch (e) {
            reject(e)
          }
        }, 0)
      }

      if (this.status === PENDING) {
        // ... 先把成功的回调和失败的回调分开存放
        this.resolveCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onFulfilled(this.value)
              resolvePromise(promise2, x, resolve, reject);
            } catch (e) {
              reject(e)
            }
          }, 0)
        });

        this.rejectCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onRejected(this.reason);
              resolvePromise(promise2, x, resolve, reject);
            } catch (e) {
              reject(e)
            }
          }, 0)
        })
      }
    })
    return promise2
  }
```

至此，Promise可以算是比较完整的了，接下来我们用测试用例跑下试试。

```shell script
 npm install promises-aplus-tests -g
 promises-aplus-tests 文件名
```

### 3.实现Promise其他方法

- Promise.resolve()方法
Promise.resolve(value) 返回一个以给定值解析后的Promise 对象.
如果 value 是个 thenable 对象，返回的promise会“跟随”这个thenable的对象，采用它的最终状态
如果传入的value本身就是promise对象，那么Promise.resolve将不做任何修改、原封不动地返回这个promise对象。
其他情况，直接返回以该值为成功状态的promise对象。
```js
// 产生成功的promise
Promise.resolve = function (param) {
        if (param instanceof Promise) {
        return param;
    }
    return new Promise((resolve, reject) => {
        if (param && param.then && typeof param.then === 'function') {
            setTimeout(() => {
                param.then(resolve, reject);
            });
        } else {
            resolve(param);
        }
    });
}
```
- Promise.reject()方法

```js
// 产生一个失败的promise
Promise.reject = function(reason){
  return new Promise((resolve,reject)=>{
    reject(reason);
  })
}
```

- catch方法的实现  
catch 是没有成功的then方法，用于指定出错时的回调，是特殊的then方法，catch之后，可以继续 .then

```js
catch(rejectFunc){  
  return this.then(null,rejectFunc);
}
```

- Promise.all() 方法实现
```js
Promise.all = function(values){
    return new Promise((resolve,reject)=>{
        let results = []; // 结果数组
        let i = 0;
        let processData = (value,index)=>{
            results[index] = value;
            // 当成功的个数 和 当前的参数个数相等就把结果抛出去
            if(++i === values.length){
                resolve(results);
            }
        }
        for(let i = 0 ; i< values.length;i++){
            let current = values[i]; // 拿到数组中每一项
            // 判断是不是一个promise
            if((typeof current === 'object' &&  current !== null)|| typeof current == 'function'){
                // 如果是promise
                if(typeof current.then == 'function'){
                    // 就调用这个promise的then方法，把结果和索引对应上,如果任何一个失败了返回的proimise就是一个失败的promise
                    current.then(y=>{
                        processData(y,i);
                    },reject);
                }else{
                    processData(current,i);
                }
            }else{
                processData(current,i);
            }
        }
    });
}
```

- Promise.finally() 实现
```js
Promise.finally = function (callback) {
  return this.then((value) => {
    return Promise.resolve(callback()).then(() => {
      return value;
    });
  }, (err) => {
    return Promise.resolve(callback()).then(() => {
      throw err;
    });
  });
}
```


至此，Promise以及其方法已全部实现。

完整代码如下：

```js
const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

let resolvePromise = (promise2, x, resolve, reject) => {
  if (promise2 === x) {
    return reject(new TypeError('Chaining cycle detected for promise'))
  }
  // 看x是不是一个promise,promise应该是一个对象
  if (typeof x === 'function' || (typeof x === 'object' && x !== null)) {
    let called; // 表示是否调用过成功或者失败
    // 尝试取当前x的then方法, 这个then方法可能别人定义的时候 用的Object.defineProperty
    try {
      let then = x.then; // 如果取then方法出错 那就用错误拒绝promise2
      if (typeof then === 'function') { // 我就认为他是一个promise
        then.call(x, y => { // 让当前的promise执行 ，不用多次取then方法了
          // y 有可能还是一个promise , 继续调用resolvePromise方法，直到解析出一个常量为止，最终把常量传递下去
          if (called) return; // 防止此方法多次被调用
          called = true;
          resolvePromise(promise2, y, resolve, reject);
        }, r => {
          if (called) return;
          called = true;
          reject(r); // 让当前的promise变成失败态即可
        })
      } else {
        // x就是一个普通的对象 并没有then方法
        resolve(x);
      }
    } catch (e) {
      if (called) return;
      called = true;
      reject(e);
    }
  } else {
    // x肯定一个常量
    resolve(x);
  }
}

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
        this.resolveCallbacks.forEach(fn => fn()); // 发布
      }
    }
    let reject = (reason) => {
      if (this.status === PENDING) {
        this.status = REJECTED;
        this.reason = reason;
        this.rejectCallbacks.forEach(fn => fn()); // 发布
      }
    }
    try {
      executor(resolve, reject)
    } catch (e) {
      reject(e)
    }

  }

  then(onFulfilled, onRejected) { // onFulfilled, onRejected 是两个可选参数
    // onFulfilled，返回val
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : val => val;
    // 如果onRejected不是函数就抛出异常
    onRejected = typeof onRejected === 'function' ? onRejected : r => {throw r};
    let promise2;
    // 调用then后必须返回一个新的promise
    promise2 = new Promise((resolve, reject) => {
      if (this.status === FULFILLED) {
        // 2.2.4 规范
        setTimeout(() => {
          // 用try catch包裹是因为promise2 可能在运行的时候就出错了，如果出错直接reject出去即可
          try {
            // 需要对then的成功的回调和失败的回调取到他的返回结果
            // 如果是普通值就让promise2成功即可
            // 如果是promise 那应该让x这个promise执行 x.then
            let x = onFulfilled(this.value);
            resolvePromise(promise2, x, resolve, reject);
          } catch (e) {
            reject(e)
          }
        }, 0)
      }


      if (this.status === REJECTED) {
        setTimeout(() => {
          try {
            let x = onRejected(this.reason)
            resolvePromise(promise2, x, resolve, reject);
          } catch (e) {
            reject(e)
          }
        }, 0)
      }

      if (this.status === PENDING) {
        // ... 先把成功的回调和失败的回调分开存放
        this.resolveCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onFulfilled(this.value)
              resolvePromise(promise2, x, resolve, reject);
            } catch (e) {
              reject(e)
            }
          }, 0)
        });

        this.rejectCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onRejected(this.reason);
              resolvePromise(promise2, x, resolve, reject);
            } catch (e) {
              reject(e)
            }
          }, 0)
        })
      }
    })
    return promise2
  }

  catch(rejectFunc){ // catch的实现
    return this.then(null,rejectFunc);
  }
}

// 暴露一个方法这个方法需要返回一个对象 对象上需要有 promise resolve reject 三个属性
Promise.defer = Promise.deferred = function(){
  let dfd = {}
  dfd.promise = new Promise((resolve,reject)=>{
    dfd.resolve = resolve;
    dfd.reject = reject;
  })
  return dfd;
}

// 产生成功的promise
Promise.resolve = function (param) {
  if (param instanceof Promise) {
    return param;
  }
  return new Promise((resolve, reject) => {
    if (param && param.then && typeof param.then === 'function') {
      setTimeout(() => {
        param.then(resolve, reject);
      });
    } else {
      resolve(param);
    }
  });
}
// 产生一个失败的promise
Promise.reject = function(reason){
  return new Promise((resolve,reject)=>{
    reject(reason);
  })
}

// all的原理
Promise.all = function(values){
  return new Promise((resolve,reject)=>{
    let results = []; // 结果数组
    let i = 0;
    let processData = (value,index)=>{
      results[index] = value;
      // 当成功的个数 和 当前的参数个数相等就把结果抛出去
      if(++i === values.length){
        resolve(results);
      }
    }
    for(let i = 0 ; i< values.length;i++){
      let current = values[i]; // 拿到数组中每一项
      // 判断是不是一个promise
      if((typeof current === 'object' &&  current !==null)|| typeof current == 'function'){
        // 如果是promise
        if(typeof current.then == 'function'){
          // 就调用这个promise的then方法，把结果和索引对应上,如果任何一个失败了返回的proimise就是一个失败的promise
          current.then(y=>{
            processData(y,i);
          },reject);
        }else{
          processData(current,i);
        }
      }else{
        processData(current,i);
      }
    }
  });
}

// race的原理
Promise.race = function(values){
  return new Promise((resolve,reject)=>{
    for(let i = 0 ; i< values.length;i++){
      let current = values[i];
      if((typeof current === 'object' &&  current !==null)|| typeof current == 'function'){
        let then = current.then;
        if(typeof then == 'function'){ // 比较哪个promise比较快，谁快用快
          then.call(current,resolve,reject)
        }else{
          resolve(current);
        }
      }else{
        resolve(current);
      }
    }
  });
}

// finally的原理
// 不管成功还是失败，都会走到finally中,并且finally之后，还可以继续then。并且会将值原封不动的传递给后面的then.
Promise.finally = function (callback) {
  return this.then((value) => {
    return Promise.resolve(callback()).then(() => {
      return value;
    });
  }, (err) => {
    return Promise.resolve(callback()).then(() => {
      throw err;
    });
  });
}

module.exports = Promise;

```

