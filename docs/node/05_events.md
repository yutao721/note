# 【Node学习】（5）events — 事件系统

## 概述

`events` 模块提供 `EventEmitter` 类，是 Node.js 异步编程的基础。`fs`、`stream`、`http`、`net` 等几乎所有核心模块都继承自它。

```js
const { EventEmitter } = require('events')
```

---

## 核心 API

### 监听事件

```js
const ee = new EventEmitter()

// 持续监听
ee.on('data', (msg) => console.log('on:', msg))

// 只触发一次，自动移除
ee.once('connect', () => console.log('已连接'))

// 将监听器插入队列最前面
ee.prependListener('data', (msg) => console.log('prepend:', msg))
ee.prependOnceListener('data', (msg) => console.log('prepend once:', msg))
```

### 触发事件

```js
ee.emit('data', 'hello')        // 同步执行所有监听器
ee.emit('connect')
ee.emit('error', new Error('出错了'))  // error 事件若无监听器会抛出
```

### 移除监听器

```js
function handler(msg) { console.log(msg) }

ee.on('data', handler)
ee.off('data', handler)                // 移除指定监听器（removeListener 别名）
ee.removeAllListeners('data')          // 移除某事件所有监听器
ee.removeAllListeners()                // 移除所有事件的所有监听器
```

### 查询监听器

```js
ee.listeners('data')          // 返回监听器数组副本
ee.rawListeners('data')       // 包含 once 包装器的原始数组
ee.listenerCount('data')      // 监听器数量
ee.eventNames()               // 所有已注册事件名
```

---

## 继承 EventEmitter

```js
const { EventEmitter } = require('events')

class Server extends EventEmitter {
  constructor() {
    super()
    this._connections = 0
  }

  connect(id) {
    this._connections++
    this.emit('connection', { id, total: this._connections })
  }

  disconnect(id) {
    this._connections--
    this.emit('disconnection', { id, total: this._connections })
  }
}

const server = new Server()

server.on('connection', ({ id, total }) => {
  console.log(`客户端 ${id} 连接，当前共 ${total} 个连接`)
})

server.connect('client-1')
server.connect('client-2')
server.disconnect('client-1')
```

---

## 内存泄漏与 maxListeners

默认超过 **10 个**监听器会打印警告（不是报错）：

```
MaxListenersExceededWarning: Possible EventEmitter memory leak detected.
11 data listeners added to [EventEmitter].
```

```js
// 调整单个实例
ee.setMaxListeners(50)

// 调整全局默认值
EventEmitter.defaultMaxListeners = 50

// 设为 0 表示无限制（不推荐）
ee.setMaxListeners(0)
```

---

## error 事件的特殊处理

`error` 事件是唯一有特殊行为的事件：**若没有监听器，Node.js 会抛出异常并终止进程**。

```js
const ee = new EventEmitter()

// 危险：没有 error 监听器
ee.emit('error', new Error('崩了'))  // 进程退出！

// 正确：始终监听 error
ee.on('error', (err) => {
  console.error('捕获到错误:', err.message)
})
ee.emit('error', new Error('崩了'))  // 安全处理
```

---

## 异步事件与 setImmediate

`emit` 是**同步**的，监听器按注册顺序立即执行。如需异步，手动推迟：

```js
ee.on('data', (chunk) => {
  // 同步执行
  process.nextTick(() => {
    // 当前操作完成后执行
  })
  setImmediate(() => {
    // I/O 回调后执行
  })
})
```

---

## 实战：实现一个简单的发布订阅

```js
const { EventEmitter } = require('events')

class EventBus extends EventEmitter {
  constructor() {
    super()
    this.setMaxListeners(100)
  }

  subscribe(event, handler) {
    this.on(event, handler)
    // 返回取消订阅函数
    return () => this.off(event, handler)
  }

  publish(event, data) {
    this.emit(event, data)
  }
}

const bus = new EventBus()

const unsub = bus.subscribe('user:login', (user) => {
  console.log(`${user.name} 登录了`)
})

bus.publish('user:login', { name: 'Alice' })  // Alice 登录了
unsub()  // 取消订阅
bus.publish('user:login', { name: 'Bob' })    // 无输出
```

---

## 关键点总结

| 方法 | 说明 |
|------|------|
| `on(event, fn)` | 持续监听 |
| `once(event, fn)` | 只触发一次 |
| `off(event, fn)` | 移除指定监听器 |
| `emit(event, ...args)` | 同步触发，传参给所有监听器 |
| `setMaxListeners(n)` | 调整监听器上限，防误报 |
| `error` 事件 | 必须监听，否则进程崩溃 |

> **核心原则**：`emit` 同步执行 → 注意执行顺序；`error` 必须监听；大量订阅时注意 `maxListeners`。
