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
