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
