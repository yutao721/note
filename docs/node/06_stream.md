# 【Node学习】（6）stream — 流

## 概述

Stream 是处理**流式数据**的抽象接口，适用于大文件读写、网络通信等场景。核心优势：**不一次性将数据加载到内存，而是分块处理**。

```js
const { Readable, Writable, Duplex, Transform, pipeline } = require('stream')
```

---

## 四种流类型

| 类型 | 说明 | 内置例子 |
|------|------|----------|
| `Readable` | 只读流 | `fs.createReadStream`、`http.IncomingMessage` |
| `Writable` | 只写流 | `fs.createWriteStream`、`http.ServerResponse` |
| `Duplex` | 可读可写（独立） | `net.Socket` |
| `Transform` | 可读可写（输出由输入转换而来） | `zlib.createGzip`、`crypto.createCipher` |

---

## Readable — 可读流

### 两种模式

```
flowing（流动模式）   → 数据自动推送，通过 'data' 事件消费
paused（暂停模式）   → 手动调用 .read() 拉取数据
```

```js
const fs = require('fs')
const rs = fs.createReadStream('big.txt', { encoding: 'utf8', highWaterMark: 64 * 1024 })

// 流动模式：监听 data 自动切换
rs.on('data', (chunk) => {
  console.log('收到:', chunk.length, '字节')
})

rs.on('end', () => console.log('读取完毕'))
rs.on('error', (err) => console.error('读取错误:', err))

// 暂停/恢复
rs.pause()
rs.resume()
```

### 自定义 Readable

```js
const { Readable } = require('stream')

class CounterStream extends Readable {
  constructor(max) {
    super()
    this._max = max
    this._current = 0
  }

  _read() {
    if (this._current >= this._max) {
      this.push(null)  // null 表示流结束
      return
    }
    this.push(String(this._current++) + '\n')
  }
}

const counter = new CounterStream(5)
counter.pipe(process.stdout)
// 输出：0\n1\n2\n3\n4\n
```

---

## Writable — 可写流

```js
const fs = require('fs')
const ws = fs.createWriteStream('output.txt')

// write 返回 false 说明内部缓冲区已满，应暂停写入
const ok = ws.write('hello\n')
ws.write('world\n')
ws.end('最后一行\n')  // 写完后关闭流

ws.on('finish', () => console.log('写入完毕'))
ws.on('error', (err) => console.error(err))
```

### 自定义 Writable

```js
const { Writable } = require('stream')

class LogWriter extends Writable {
  _write(chunk, encoding, callback) {
    console.log('[LOG]', chunk.toString().trim())
    callback()  // 必须调用，否则流卡住
  }

  _final(callback) {
    console.log('[LOG] 流结束')
    callback()
  }
}

const logger = new LogWriter()
logger.write('第一条日志\n')
logger.write('第二条日志\n')
logger.end()
```

---

## Transform — 转换流

输入经过处理后变成输出，是最常用的自定义流类型。

```js
const { Transform } = require('stream')

class UpperCaseTransform extends Transform {
  _transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase())
    callback()
  }

  _flush(callback) {
    // 所有数据处理完毕后的收尾操作
    this.push('\n--- END ---\n')
    callback()
  }
}

// 使用
process.stdin
  .pipe(new UpperCaseTransform())
  .pipe(process.stdout)
```

### objectMode — 对象模式

默认流只传输 `Buffer` 或字符串，开启 `objectMode` 可传输任意对象：

```js
const { Transform } = require('stream')

class JsonParseTransform extends Transform {
  constructor() {
    super({ objectMode: true })
    this._buffer = ''
  }

  _transform(chunk, encoding, callback) {
    this._buffer += chunk.toString()
    const lines = this._buffer.split('\n')
    this._buffer = lines.pop()

    for (const line of lines) {
      if (!line.trim()) continue
      try {
        this.push(JSON.parse(line))
      } catch (e) {
        this.emit('error', new Error(`JSON 解析失败: ${line}`))
      }
    }
    callback()
  }

  _flush(callback) {
    if (this._buffer.trim()) {
      try {
        this.push(JSON.parse(this._buffer))
      } catch (e) { /* ignore */ }
    }
    callback()
  }
}
```

---

## pipe 与背压（Backpressure）

### pipe 的作用

```js
// 不用 pipe（危险：可能撑爆内存）
rs.on('data', (chunk) => ws.write(chunk))

// 用 pipe（自动处理背压）
rs.pipe(ws)
rs.pipe(transform).pipe(ws)
```

### 背压机制

```
Readable 生产数据  →  Writable 消费数据

当 ws.write() 返回 false（缓冲区满）：
  pipe 自动调用 rs.pause()   → 暂停读取
当 ws 触发 drain 事件（缓冲区清空）：
  pipe 自动调用 rs.resume()  → 恢复读取
```

### 手动处理背压

```js
function manualPipe(readable, writable) {
  readable.on('data', (chunk) => {
    const ok = writable.write(chunk)
    if (!ok) {
      readable.pause()
      writable.once('drain', () => readable.resume())
    }
  })
  readable.on('end', () => writable.end())
}
```

---

## pipeline — 推荐替代 pipe

`pipe` 的问题：一个流出错不会自动销毁其他流，导致内存泄漏。

```js
const { pipeline } = require('stream')
const fs = require('fs')
const zlib = require('zlib')

// 回调风格
pipeline(
  fs.createReadStream('input.txt'),
  zlib.createGzip(),
  fs.createWriteStream('input.txt.gz'),
  (err) => {
    if (err) console.error('pipeline 失败:', err)
    else console.log('压缩完成')
  }
)

// Promise 风格（Node 15+）
const { pipeline: pipelinePromise } = require('stream/promises')

await pipelinePromise(
  fs.createReadStream('input.txt'),
  zlib.createGzip(),
  fs.createWriteStream('input.txt.gz')
)
```

---

## 实战：大文件加密压缩

```js
const fs = require('fs')
const zlib = require('zlib')
const crypto = require('crypto')
const { pipeline } = require('stream/promises')

async function encryptAndCompress(input, output, password) {
  const key = crypto.scryptSync(password, 'salt', 32)
  const iv = crypto.randomBytes(16)

  // 先写入 iv（解密时需要）
  const ws = fs.createWriteStream(output)
  ws.write(iv)

  await pipeline(
    fs.createReadStream(input),
    zlib.createGzip(),
    crypto.createCipheriv('aes-256-cbc', key, iv),
    ws
  )

  console.log('加密压缩完成:', output)
}

encryptAndCompress('big.txt', 'big.txt.gz.enc', 'my-password')
```

---

## highWaterMark — 缓冲区大小

```js
// 默认 16KB（二进制流）或 16 个对象（对象模式）
fs.createReadStream('file.txt', { highWaterMark: 64 * 1024 })  // 64KB

// 调小：内存占用低，I/O 次数多
// 调大：内存占用高，I/O 次数少，吞吐量高
```

---

## 关键点总结

| 概念 | 说明 |
|------|------|
| `Readable` | 实现 `_read()`，用 `this.push()` 推送数据 |
| `Writable` | 实现 `_write(chunk, enc, cb)`，cb 必须调用 |
| `Transform` | 实现 `_transform()` 和可选的 `_flush()` |
| `pipe` | 自动处理背压，但错误不传播 |
| `pipeline` | 推荐：自动传播错误并清理资源 |
| `objectMode` | 允许流传输任意 JS 对象 |
| `highWaterMark` | 控制内部缓冲区大小，影响内存和吞吐量 |

> **核心原则**：大数据用流，用 `pipeline` 替代 `pipe`，始终监听 `error` 事件。
