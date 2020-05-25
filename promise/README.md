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
```
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
执行结果：start end success:jiaHang
```
> 看下文档翻译怎么解释Promise  
1. promise相当于一个状态机，有3种状态(pending,fulfilled,rejected)
 - promise 对象初始化状态为 pending
 - 当调用resolve(成功)，会由pending => fulfilled
 - 当调用reject(失败)，会由pending => rejected
2. promise对象方法,Promise是咧需要提供一个then方法
