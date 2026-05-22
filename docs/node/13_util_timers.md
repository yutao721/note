# 【Node学习】（13）util & timers — 工具函数与定时器

---

## util — 工具函数

```js
const util = require('util')
```

### promisify — 回调转 Promise

```js
const util = require('util')
const fs = require('fs')

// 将 Node.js 错误优先回调风格转为 Promise
const readFile = util.promisify(fs.readFile)
const writeFile = util.promisify(fs.writeFile)

// 使用
const content = await readFile('file.txt', 'utf8')
await writeFile('output.txt', content)

// 自定义 promisify（函数有非标准签名时）
function customAsync(value, callback) {
  setTimeout(() => callback(null, value * 2, value * 3), 100)
  // 返回多个值
}
customAsync[util.promisify.custom] = (value) =>
  new Promise((resolve) => setTimeout(() => resolve([value * 2, value * 3]), 100))

const custom = util.promisify(customAsync)
const [a, b] = await custom(5)  // [10, 15]
```

### callbackify — Promise 转回调

```js
async function fetchData(id) {
  return { id, name: 'Alice' }
}

const fetchDataCb = util.callbackify(fetchData)

fetchDataCb(1, (err, result) => {
  if (err) throw err
  console.log(result)  // { id: 1, name: 'Alice' }
})
```

### util.format — 格式化字符串

```js
util.format('%s:%s', 'foo', 'bar')   // 'foo:bar'
util.format('%d + %d = %d', 1, 2, 3) // '1 + 2 = 3'
util.format('%j', { a: 1 })          // '{"a":1}'
util.format('%o', { a: 1 })          // 对象详细信息
util.format('无占位符', 1, 2)         // '无占位符 1 2'（多余参数追加）
```

### util.inspect — 对象调试输出

```js
const obj = { a: 1, b: [1, 2, 3], c: { d: { e: 'deep' } } }

util.inspect(obj)
// "{ a: 1, b: [ 1, 2, 3 ], c: { d: { e: 'deep' } } }"

util.inspect(obj, {
  depth: 1,          // 展开深度（null=无限）
  colors: true,      // 终端彩色输出
  compact: false,    // 多行展示
  showHidden: true,  // 显示不可枚举属性
})

// 自定义 inspect 输出
class Point {
  constructor(x, y) { this.x = x; this.y = y }
  [util.inspect.custom](depth, options) {
    return `Point(${this.x}, ${this.y})`
  }
}
console.log(new Point(1, 2))  // Point(1, 2)
```

### util.types — 类型检测

```js
util.types.isDate(new Date())           // true
util.types.isRegExp(/abc/)              // true
util.types.isPromise(Promise.resolve()) // true
util.types.isMap(new Map())             // true
util.types.isSet(new Set())             // true
util.types.isArrayBuffer(new ArrayBuffer(8)) // true
util.types.isSharedArrayBuffer(new SharedArrayBuffer(8)) // true
util.types.isUint8Array(Buffer.alloc(8)) // true（Buffer 是 Uint8Array 子类）
util.types.isNativeError(new Error())   // true
util.types.isAsyncFunction(async () => {}) // true
util.types.isGeneratorFunction(function*(){}) // true
```

### util.deprecate — 标记废弃

```js
const oldFunction = util.deprecate(
  function () { return 'old result' },
  'oldFunction() 已废弃，请使用 newFunction()',
  'DEP0001'  // 废弃码（可选）
)

oldFunction()
// DeprecationWarning: oldFunction() 已废弃，请使用 newFunction()
```

### util.isDeepStrictEqual — 深度严格相等

```js
util.isDeepStrictEqual({ a: 1 }, { a: 1 })  // true
util.isDeepStrictEqual([1, 2], [1, 2])       // true
util.isDeepStrictEqual({ a: 1 }, { a: '1' }) // false（严格类型比较）
util.isDeepStrictEqual(NaN, NaN)             // true（与 === 不同）
```

### util.TextEncoder / TextDecoder

```js
// 编码：字符串 → Uint8Array
const encoder = new util.TextEncoder()
const encoded = encoder.encode('hello')
// Uint8Array [104, 101, 108, 108, 111]

// 解码：Buffer/Uint8Array → 字符串
const decoder = new util.TextDecoder('utf-8')
decoder.decode(encoded)  // 'hello'
decoder.decode(Buffer.from([0xe4, 0xb8, 0xad, 0xe6, 0x96, 0x87]))  // '中文'
```

---

## timers — 定时器

### 基础定时器

```js
// setTimeout — 延迟执行
const timer = setTimeout(() => {
  console.log('1秒后执行')
}, 1000)

clearTimeout(timer)  // 取消

// setInterval — 周期执行
const interval = setInterval(() => {
  console.log('每秒执行')
}, 1000)

clearInterval(interval)  // 取消

// setImmediate — 当前 I/O 事件后立即执行
const immediate = setImmediate(() => {
  console.log('I/O 后执行')
})

clearImmediate(immediate)  // 取消
```

### 执行顺序

```js
setTimeout(() => console.log('setTimeout'), 0)
setImmediate(() => console.log('setImmediate'))
process.nextTick(() => console.log('nextTick'))
Promise.resolve().then(() => console.log('Promise'))
console.log('同步')

// 输出顺序：
// 同步
// nextTick         ← 微任务，最先
// Promise          ← 微任务，次之
// setTimeout       ← 宏任务（在 I/O 外时，与 setImmediate 顺序不确定）
// setImmediate     ← 宏任务

// 在 I/O 回调中，setImmediate 总是先于 setTimeout
fs.readFile('file', () => {
  setTimeout(() => console.log('timeout'))
  setImmediate(() => console.log('immediate'))  // 先执行
})
```

### timers/promises — Promise 版定时器

```js
const { setTimeout: sleep, setInterval, setImmediate } = require('timers/promises')

// sleep（Promise 版 setTimeout）
await sleep(1000)                         // 等待1秒
const value = await sleep(1000, 'result') // 1秒后返回值

// setInterval 生成器（Node 16+）
for await (const _ of setInterval(1000, null, { signal: AbortSignal.timeout(5000) })) {
  console.log('每秒打印，5秒后停止')
}

// setImmediate
await setImmediate()  // 等到下一个 immediate 阶段
```

### AbortController — 取消定时器

```js
const { setTimeout: sleep } = require('timers/promises')

const controller = new AbortController()
const { signal } = controller

// 3秒后取消
setTimeout(() => controller.abort(), 3000)

try {
  await sleep(10000, null, { signal })  // 会被提前取消
  console.log('完成')
} catch (err) {
  if (err.name === 'AbortError') {
    console.log('被取消了')
  }
}
```

### ref / unref — 不阻止进程退出

```js
// 默认情况下，活跃的定时器会阻止进程退出
const timer = setInterval(() => {
  console.log('心跳')
}, 1000)

// unref：如果只剩这个定时器，允许进程退出
timer.unref()

// ref：重新标记为活跃（阻止退出）
timer.ref()
```

---

## 实战：带重试的异步任务

```js
const { setTimeout: sleep } = require('timers/promises')

async function retry(fn, { maxAttempts = 3, delay = 1000, backoff = 2 } = {}) {
  let lastError
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      return await fn()
    } catch (err) {
      lastError = err
      if (attempt < maxAttempts) {
        const waitMs = delay * Math.pow(backoff, attempt - 1)
        console.log(`第${attempt}次失败，${waitMs}ms 后重试...`)
        await sleep(waitMs)
      }
    }
  }
  throw lastError
}

// 使用
await retry(
  () => fetch('https://api.example.com/data').then(r => r.json()),
  { maxAttempts: 3, delay: 500, backoff: 2 }
)
// 失败后等待：500ms → 1000ms → 放弃
```

---

## 实战：任务调度器

```js
const { setInterval } = require('timers/promises')

class Scheduler {
  constructor() {
    this._jobs = new Map()
  }

  every(name, ms, fn) {
    const controller = new AbortController()

    const run = async () => {
      for await (const _ of setInterval(ms, null, { signal: controller.signal })) {
        try {
          await fn()
        } catch (err) {
          console.error(`任务 ${name} 执行出错:`, err)
        }
      }
    }

    run().catch(() => {})  // AbortError 静默处理
    this._jobs.set(name, controller)
    return this
  }

  stop(name) {
    this._jobs.get(name)?.abort()
    this._jobs.delete(name)
  }

  stopAll() {
    for (const ctrl of this._jobs.values()) ctrl.abort()
    this._jobs.clear()
  }
}

const scheduler = new Scheduler()

scheduler
  .every('heartbeat', 5000, async () => {
    console.log('心跳检测...')
  })
  .every('cleanup', 60000, async () => {
    console.log('清理临时文件...')
  })

// 10秒后停止心跳
setTimeout(() => scheduler.stop('heartbeat'), 10000)
```

---

## 关键点总结

### util

| 方法 | 说明 |
|------|------|
| `promisify(fn)` | 回调 → Promise |
| `callbackify(fn)` | async → 回调 |
| `format(fmt, ...args)` | printf 风格格式化 |
| `inspect(obj, opts)` | 对象调试字符串 |
| `types.isXxx(val)` | 精确类型判断 |
| `isDeepStrictEqual(a, b)` | 深度严格比较 |
| `TextEncoder/TextDecoder` | 字符串 ↔ 字节转换 |

### timers

| 方法 | 说明 |
|------|------|
| `setTimeout(fn, ms)` | 延迟执行 |
| `setInterval(fn, ms)` | 周期执行 |
| `setImmediate(fn)` | 当前 I/O 后执行 |
| `timers/promises` | Promise 版，支持 await |
| `timer.unref()` | 不阻止进程退出 |
| `AbortController` + signal | 可取消的定时器 |

> **核心原则**：优先使用 `timers/promises` 的 async 版本；`setImmediate` 比 `setTimeout(fn,0)` 在 I/O 回调中更可预测；长期运行的定时器用 `unref()` 避免阻止进程退出。
