# 【Node学习】（8）http/https — HTTP 服务器与客户端

## 概述

`http` 和 `https` 模块是 Node.js 内置的 HTTP 实现，Express、Koa 等框架都基于它构建。

```js
const http = require('http')
const https = require('https')
```

---

## 创建 HTTP 服务器

### 基础服务器

```js
const http = require('http')

const server = http.createServer((req, res) => {
  // req: http.IncomingMessage (Readable Stream)
  // res: http.ServerResponse (Writable Stream)

  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' })
  res.end('Hello World\n')
})

server.listen(3000, '127.0.0.1', () => {
  console.log('服务器运行在 http://127.0.0.1:3000')
})
```

### 请求对象 req

```js
const server = http.createServer((req, res) => {
  console.log(req.method)      // 'GET'、'POST' 等
  console.log(req.url)         // '/path?key=value'
  console.log(req.headers)     // { 'content-type': '...', ... }
  console.log(req.httpVersion) // '1.1'

  // 解析 URL
  const url = new URL(req.url, `http://${req.headers.host}`)
  console.log(url.pathname)    // '/path'
  console.log(url.searchParams.get('key'))  // 'value'

  // 读取请求体（req 是 Readable Stream）
  let body = ''
  req.on('data', (chunk) => body += chunk.toString())
  req.on('end', () => {
    console.log('body:', body)
    res.end('ok')
  })
})
```

### 响应对象 res

```js
// 设置状态码和响应头
res.statusCode = 404
res.setHeader('Content-Type', 'application/json')
res.setHeader('X-Custom-Header', 'value')

// 或一次性设置
res.writeHead(200, {
  'Content-Type': 'application/json',
  'Cache-Control': 'no-cache'
})

// 写入响应体
res.write('部分内容')
res.write('更多内容')
res.end()           // 结束响应
res.end('最后内容')  // 写入最后内容并结束

// 发送 JSON
res.writeHead(200, { 'Content-Type': 'application/json' })
res.end(JSON.stringify({ code: 0, data: 'ok' }))
```

---

## 路由处理

```js
const http = require('http')
const url = require('url')

const server = http.createServer((req, res) => {
  const { pathname } = new URL(req.url, `http://${req.headers.host}`)
  const method = req.method

  if (method === 'GET' && pathname === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.end('<h1>首页</h1>')

  } else if (method === 'GET' && pathname === '/api/users') {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify([{ id: 1, name: 'Alice' }]))

  } else if (method === 'POST' && pathname === '/api/users') {
    let body = ''
    req.on('data', (chunk) => body += chunk)
    req.on('end', () => {
      const user = JSON.parse(body)
      res.writeHead(201, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify({ id: 2, ...user }))
    })

  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({ error: 'Not Found' }))
  }
})

server.listen(3000)
```

---

## 静态文件服务

```js
const http = require('http')
const fs = require('fs')
const path = require('path')

const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
}

const server = http.createServer((req, res) => {
  const urlPath = new URL(req.url, 'http://localhost').pathname
  const filePath = path.join(__dirname, 'public', urlPath)
  const ext = path.extname(filePath)
  const contentType = MIME_TYPES[ext] || 'application/octet-stream'

  fs.createReadStream(filePath)
    .on('error', () => {
      res.writeHead(404)
      res.end('Not Found')
    })
    .pipe(res.writeHead(200, { 'Content-Type': contentType }) || res)
})

server.listen(8080)
```

---

## HTTP 客户端

### 发起 GET 请求

```js
const http = require('http')

http.get('http://jsonplaceholder.typicode.com/todos/1', (res) => {
  let data = ''
  res.on('data', (chunk) => data += chunk)
  res.on('end', () => console.log(JSON.parse(data)))
}).on('error', console.error)
```

### 发起 POST 请求

```js
const http = require('http')

function postJson(url, body) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify(body)
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(data)
      }
    }

    const req = http.request(url, options, (res) => {
      let result = ''
      res.on('data', (chunk) => result += chunk)
      res.on('end', () => resolve(JSON.parse(result)))
    })

    req.on('error', reject)
    req.write(data)
    req.end()
  })
}

postJson('http://httpbin.org/post', { name: 'Alice' }).then(console.log)
```

---

## HTTPS 服务器

```js
const https = require('https')
const fs = require('fs')

const options = {
  key: fs.readFileSync('server.key'),   // 私钥
  cert: fs.readFileSync('server.cert'), // 证书
}

https.createServer(options, (req, res) => {
  res.writeHead(200)
  res.end('HTTPS Hello!')
}).listen(443)
```

### 自签名证书（开发用）

```bash
# 生成私钥和自签名证书
openssl req -x509 -newkey rsa:4096 -keyout server.key -out server.cert -days 365 -nodes
```

---

## 服务器事件

```js
server.on('request', (req, res) => { /* 每个请求 */ })
server.on('connection', (socket) => { /* 新 TCP 连接 */ })
server.on('close', () => { /* 服务器关闭 */ })
server.on('error', (err) => { /* 错误，如端口占用 */ })

// 超时设置
server.timeout = 30000          // 请求超时 30s
server.keepAliveTimeout = 5000  // keep-alive 超时

// 优雅关闭
process.on('SIGTERM', () => {
  server.close(() => {
    console.log('服务器已关闭')
    process.exit(0)
  })
})
```

---

## 实战：简易 HTTP 框架

```js
const http = require('http')

class App {
  constructor() {
    this._routes = []
    this._middlewares = []
  }

  use(fn) {
    this._middlewares.push(fn)
    return this
  }

  get(path, handler) {
    this._routes.push({ method: 'GET', path, handler })
    return this
  }

  post(path, handler) {
    this._routes.push({ method: 'POST', path, handler })
    return this
  }

  async _handleRequest(req, res) {
    // 执行中间件
    for (const mw of this._middlewares) {
      await new Promise((resolve) => mw(req, res, resolve))
    }

    // 路由匹配
    const route = this._routes.find(
      r => r.method === req.method && r.path === new URL(req.url, 'http://x').pathname
    )

    if (route) {
      await route.handler(req, res)
    } else {
      res.writeHead(404)
      res.end('Not Found')
    }
  }

  listen(port, cb) {
    const server = http.createServer((req, res) => {
      this._handleRequest(req, res).catch((err) => {
        res.writeHead(500)
        res.end('Internal Server Error')
      })
    })
    server.listen(port, cb)
    return server
  }
}

// 使用
const app = new App()

// JSON 解析中间件
app.use((req, res, next) => {
  let body = ''
  req.on('data', chunk => body += chunk)
  req.on('end', () => {
    try { req.body = JSON.parse(body) } catch { req.body = {} }
    next()
  })
})

app.get('/hello', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.end(JSON.stringify({ message: 'Hello World' }))
})

app.post('/echo', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.end(JSON.stringify(req.body))
})

app.listen(3000, () => console.log('Running on http://localhost:3000'))
```

---

## 关键点总结

| 对象/方法 | 说明 |
|-----------|------|
| `http.createServer(handler)` | 创建服务器 |
| `req.method` / `req.url` / `req.headers` | 请求信息 |
| `res.writeHead(code, headers)` | 设置状态码和响应头 |
| `res.end(data)` | 发送响应并关闭 |
| `http.get(url, cb)` | 简单 GET 请求 |
| `http.request(options, cb)` | 完整请求（支持 POST） |
| `server.close(cb)` | 优雅关闭，停止接受新连接 |

> **核心原则**：req/res 都是 Stream；务必处理 `error` 事件；生产环境用 Express/Fastify 代替原生路由；优雅关闭要在 SIGTERM 信号中处理。
