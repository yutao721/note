const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

let resolvePromise = (promise2,x,resolve,reject) => {
  console.log(promise2);
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
}

module.exports = Promise;
