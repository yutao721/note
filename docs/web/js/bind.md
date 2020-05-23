### 思路
1. 拷贝源函数:
  -  通过变量储存源函数
  - 使用Object.create复制源函数的prototype给fToBind
2. 返回拷贝的函数
3. 调用拷贝的函数：
  - new调用判断：通过instanceof判断函数是否通过new调用，来决定绑定的context
  - 绑定this+传递参数
  - 返回源函数的执行结果

### 参考链接
[JavaScript深入之bind的模拟实现](https://juejin.im/post/59093b1fa0bb9f006517b906)

[深度解析bind原理、使用场景及模拟实现](https://juejin.im/post/5c09e6f9e51d456c4c49f4c6#heading-11)


### 第一版没有参数
```js
var foo = {
    value: 1
};

function bar() {
    console.log(this.value);
}

// 返回了一个函数
var bindFoo = bar.bind(foo); 

bindFoo(); // 1

```


### 第二版 处理参数

```js
// 第二版
Function.prototype.bind2 = function (context) {

    var self = this;
    // 获取bind2函数从第二个参数到最后一个参数
    var args = Array.prototype.slice.call(arguments, 1);

    return function () {
        // 这个时候的arguments是指bind返回的函数传入的参数
        var bindArgs = Array.prototype.slice.call(arguments);
        self.apply(context, args.concat(bindArgs));
    }

}

var foo = {
    value: 1
};

function bar(name, age) {
    console.log(this.value);
    console.log(name);
    console.log(age);

}

var bindFoo = bar.bind2(foo, 'daisy');
bindFoo('18');
// 1
// daisy
// 18

```


### 第三版 构造函数效果的模拟实现
完成了这两点，最难的部分到啦！因为 bind 还有一个特点，就是
> 一个绑定函数也能使用new操作符创建对象：这种行为就像把原函数当成构造器。提供的 this 值被忽略，同时调用时的参数被提供给模拟函数。

也就是说当 bind 返回的函数作为构造函数的时候，bind 时指定的 this 值会失效，但传入的参数依然生效。举个例子：

```js
var value = 2;

var foo = {
    value: 1
};

function bar(name, age) {
    this.habit = 'shopping';
    console.log(this.value);
    console.log(name);
    console.log(age);
}

bar.prototype.friend = 'kevin';

var bindFoo = bar.bind(foo, 'daisy');

var obj = new bindFoo('18');
// undefined
// daisy
// 18
console.log(obj.habit);
console.log(obj.friend);
// shopping
// kevin
```
注意：尽管在全局和 foo 中都声明了 value 值，最后依然返回了 undefind，说明绑定的 this 失效了，如果大家了解 new 的模拟实现，就会知道这个时候的 this 已经指向了 obj。

所以我们可以通过修改返回的函数的原型来实现，让我们写一下：

```js
// 第三版
Function.prototype.bind2 = function (context) {
    var self = this;
    var args = Array.prototype.slice.call(arguments, 1);

    var fbound = function () {

        var bindArgs = Array.prototype.slice.call(arguments);
        // 当作为构造函数时，this 指向实例，self 指向绑定函数，因为下面一句 `fbound.prototype = this.prototype;`，已经修改了 fbound.prototype 为 绑定函数的 prototype，此时结果为 true，当结果为 true 的时候，this 指向实例。
        // 当作为普通函数时，this 指向 window，self 指向绑定函数，此时结果为 false，当结果为 false 的时候，this 指向绑定的 context。
        self.apply(this instanceof self ? this : context, args.concat(bindArgs));
    }
    // 修改返回函数的 prototype 为绑定函数的 prototype，实例就可以继承函数的原型中的值
    fbound.prototype = this.prototype;
    return fbound;
}
```


### 构造函数效果的优化实现

但是在这个写法中，我们直接将 fbound.prototype = this.prototype，我们直接修改 fbound.prototype 的时候，也会直接修改函数的 prototype。这个时候，我们可以通过一个空函数来进行中转：

```js
// 第四版
Function.prototype.bind2 = function (context) {

    var self = this;
    var args = Array.prototype.slice.call(arguments, 1);

    var fNOP = function () {};

    var fbound = function () {
        var bindArgs = Array.prototype.slice.call(arguments);
        self.apply(this instanceof self ? this : context, args.concat(bindArgs));
    }
    fNOP.prototype = this.prototype;
    fbound.prototype = new fNOP();
    return fbound;

}
```

### 几个小问题
#### 1.箭头函数没有prototype
```js
if (this.prototype) {
  fNOP.prototype = this.prototype;
}
```
#### 2.调用 bind 的不是函数咋办？
不行，我们要报错！
```js
if (typeof this !== "function") {
  throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
}
```


### 最终代码

```js
Function.prototype.bind2 = function (context) {
  if (typeof this !== "function") {
    throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
  }
  var self = this;
  var args = Array.prototype.slice.call(arguments, 1);
  var fNOP = function () { };
  var fBound = function () {
    var bindArgs = Array.prototype.slice.call(arguments);
    self.apply(this instanceof self ? this : context, args.concat(bindArgs))
  }
  if (this.prototype) {
    fNOP.prototype = this.prototype;
  }
  fBound.prototype = new fNOP();
  return fBound
}
```

