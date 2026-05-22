# 【Node学习】（9）net — TCP 网络编程

## 概述

`net` 模块提供底层 TCP/IPC 网络通信能力。`http` 模块就是基于 `net` 实现的。适用于自定义二进制协议、长连接、游戏服务器等场景。

```js
const net = require('net')
```

---

## TCP 服务器

```js
const net = require('net')

const server = net.createServer((socket) => {
  // socket 是 Duplex Stream（既可读又可写）
  console.log(`客户端连接: ${socket.remoteAddress}:${socket.remotePort}`)

  // 接收数据
  socket.on('data', (data) => {
    console.log('收到:', data.toString())
    socket.write('回声: ' + data)  // 回写给客户端
  })

  // 连接关闭
  socket.on('end', () => {
    console.log('客户端断开')
  })

  // 错误处理
  socket.on('error', (err) => {
    console.error('socket 错误:', err.message)
  })

  // 超时
  socket.setTimeout(30000)
  socket.on('timeout', () => {
    console.log('连接超时')
    socket.end()
  })
})

server.listen(8888, '0.0.0.0', () => {
  const addr = server.address()
  console.log(`服务器监听 ${addr.address}:${addr.port}`)
})

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error('端口被占用！')
  }
})
```

---

## TCP 客户端

```js
const net = require('net')

const client = net.createConnection({ host: '127.0.0.1', port: 8888 }, () => {
  console.log('已连接到服务器')
  client.write('Hello Server!')
})

client.on('data', (data) => {
  console.log('服务器响应:', data.toString())
  client.end()  // 主动断开
})

client.on('end', () => {
  console.log('连接已断开')
})

client.on('error', (err) => {
  console.error('连接错误:', err.message)
})
```

---

## Socket 属性与方法

```js
// 属性
socket.remoteAddress    // 对端 IP
socket.remotePort       // 对端端口
socket.localAddress     // 本地 IP
socket.localPort        // 本地端口
socket.bytesRead        // 已读字节数
socket.bytesWritten     // 已写字节数
socket.connecting       // 是否正在连接中

// 方法
socket.write(data)           // 发送数据（Buffer 或 string）
socket.end([data])           // 发送 FIN，半关闭连接
socket.destroy([error])      // 强制销毁连接
socket.pause()               // 暂停接收数据
socket.resume()              // 恢复接收数据
socket.setEncoding('utf8')   // 设置数据编码，data 事件返回 string
socket.setKeepAlive(true, 60000)  // 开启 keep-alive，60s 探测
socket.setNoDelay(true)      // 禁用 Nagle 算法（小包立即发送）
```

---

## 粘包处理

TCP 是**流协议**，数据边界不固定，多条消息可能粘在一起。需要应用层协议定界。

### 方案1：固定长度头部

```js
// 协议：4字节长度 + 消息体
class PacketParser {
  constructor() {
    this._buffer = Buffer.alloc(0)
  }

  feed(chunk) {
    this._buffer = Buffer.concat([this._buffer, chunk])
    const packets = []

    while (this._buffer.length >= 4) {
      const msgLen = this._buffer.readUInt32BE(0)

      if (this._buffer.length < 4 + msgLen) break  // 数据还没到齐

      const payload = this._buffer.slice(4, 4 + msgLen)
      packets.push(payload)
      this._buffer = this._buffer.slice(4 + msgLen)
    }

    return packets
  }
}

function encode(msg) {
  const body = Buffer.from(msg, 'utf8')
  const head = Buffer.alloc(4)
  head.writeUInt32BE(body.length)
  return Buffer.concat([head, body])
}

// 服务端使用
const server = net.createServer((socket) => {
  const parser = new PacketParser()

  socket.on('data', (chunk) => {
    const packets = parser.feed(chunk)
    for (const pkt of packets) {
      console.log('完整消息:', pkt.toString())
      socket.write(encode('已收到: ' + pkt.toString()))
    }
  })
})
```

### 方案2：分隔符（适合文本协议）

```js
class LineParser {
  constructor() {
    this._buffer = ''
  }

  feed(chunk) {
    this._buffer += chunk.toString()
    const lines = this._buffer.split('\n')
    this._buffer = lines.pop()  // 最后一段可能不完整
    return lines
  }
}

const server = net.createServer((socket) => {
  socket.setEncoding('utf8')
  const parser = new LineParser()

  socket.on('data', (data) => {
    const lines = parser.feed(data)
    for (const line of lines) {
      if (line.trim()) console.log('收到行:', line)
    }
  })
})
```

---

## IPC（Unix Domain Socket / Windows Named Pipe）

进程间通信，比 TCP 快，不走网络栈：

```js
const net = require('net')
const path = require('path')

// Unix: '/tmp/app.sock'
// Windows: '\\\\.\pipe\\app'
const PIPE_PATH = process.platform === 'win32'
  ? '\\\\.\\pipe\\myapp'
  : '/tmp/myapp.sock'

// 服务端
const server = net.createServer((socket) => {
  socket.on('data', (data) => {
    console.log('IPC 收到:', data.toString())
    socket.write('IPC 响应')
  })
})

server.listen(PIPE_PATH, () => {
  console.log('IPC 服务器启动')
})

// 客户端
const client = net.createConnection(PIPE_PATH, () => {
  client.write('IPC 请求')
})
client.on('data', (data) => console.log(data.toString()))
```

---

## 实战：多人聊天室

```js
const net = require('net')

const clients = new Map()
let idCounter = 0

function broadcast(msg, exclude = null) {
  for (const [id, socket] of clients) {
    if (id !== exclude) socket.write(msg)
  }
}

const server = net.createServer((socket) => {
  const id = ++idCounter
  const name = `用户${id}`
  clients.set(id, socket)

  socket.setEncoding('utf8')
  socket.write(`欢迎，${name}！当前在线 ${clients.size} 人\n`)
  broadcast(`${name} 加入了聊天室\n`, id)

  socket.on('data', (data) => {
    const msg = data.trim()
    if (msg) broadcast(`${name}: ${msg}\n`, id)
  })

  socket.on('end', () => {
    clients.delete(id)
    broadcast(`${name} 离开了聊天室\n`)
  })

  socket.on('error', () => {
    clients.delete(id)
  })
})

server.listen(9999, () => console.log('聊天室启动在 9999 端口'))
// 测试: nc localhost 9999
```

---

## 关键点总结

| 概念 | 说明 |
|------|------|
| `net.createServer(cb)` | 创建 TCP 服务器 |
| `net.createConnection(opts)` | 创建 TCP 客户端 |
| `socket` | Duplex Stream，可读可写 |
| 粘包 | TCP 是流协议，必须应用层定界 |
| IPC | Unix Socket / Named Pipe，进程间通信 |
| `setNoDelay(true)` | 禁用 Nagle，降低延迟 |
| `setKeepAlive(true)` | 保活，检测死连接 |

> **核心原则**：TCP 无消息边界，必须自己处理粘包；始终监听 `error` 事件；长连接务必设置超时和 keep-alive。
