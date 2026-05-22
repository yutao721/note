# 【Node学习】（11）os & process — 系统与进程

## os — 操作系统信息

```js
const os = require('os')
```

### 系统信息

```js
os.platform()     // 'linux' | 'darwin' | 'win32' | ...
os.arch()         // 'x64' | 'arm64' | 'ia32' | ...
os.type()         // 'Linux' | 'Darwin' | 'Windows_NT'
os.release()      // 内核版本，如 '5.15.0-76-generic'
os.version()      // 操作系统版本字符串
os.hostname()     // 主机名
os.homedir()      // 用户主目录，如 '/home/alice' 或 'C:\Users\Alice'
os.tmpdir()       // 临时目录，如 '/tmp'
os.EOL            // 行结束符：Linux/Mac '\n'，Windows '\r\n'
os.devNull        // 空设备：Linux '/dev/null'，Windows '\\.\nul'
```

### CPU 信息

```js
os.cpus()
// [
//   {
//     model: 'Intel(R) Core(TM) i7-9750H',
//     speed: 2600,   // MHz
//     times: { user: 12345, nice: 0, sys: 6789, idle: 987654, irq: 0 }
//   },
//   ...  // 每个逻辑核一条
// ]

os.cpus().length   // CPU 逻辑核心数（cluster/worker_threads 常用）
```

### 内存信息

```js
os.totalmem()   // 总内存（字节）
os.freemem()    // 可用内存（字节）

// 格式化输出
const GB = 1024 ** 3
console.log(`总内存: ${(os.totalmem() / GB).toFixed(1)} GB`)
console.log(`可用: ${(os.freemem() / GB).toFixed(1)} GB`)
```

### 网络接口

```js
const ifaces = os.networkInterfaces()
// {
//   eth0: [
//     { address: '192.168.1.100', family: 'IPv4', internal: false, ... },
//     { address: 'fe80::1', family: 'IPv6', internal: false, ... }
//   ],
//   lo: [
//     { address: '127.0.0.1', family: 'IPv4', internal: true, ... }
//   ]
// }

// 获取本机 IPv4 地址
function getLocalIP() {
  for (const iface of Object.values(os.networkInterfaces()).flat()) {
    if (iface.family === 'IPv4' && !iface.internal) return iface.address
  }
  return '127.0.0.1'
}
```

### 负载与运行时间

```js
os.loadavg()   // [1分钟均值, 5分钟, 15分钟]（Windows 返回 [0,0,0]）
os.uptime()    // 系统运行时间（秒）
```

---

## process — 当前进程

`process` 是全局对象，无需 require。

### 环境与路径

```js
process.env                    // 环境变量对象
process.env.NODE_ENV           // 'development' | 'production' | ...
process.env.PORT               // 自定义变量
process.env.HOME               // 用户主目录

process.cwd()                  // 当前工作目录（可改变）
process.chdir('/tmp')          // 改变工作目录
__dirname                      // 当前文件所在目录（CJS，固定不变）

process.argv                   // ['node', 'script.js', '--port', '3000']
process.argv[2]                // 第一个参数: '--port'
process.execPath               // Node.js 可执行文件路径
process.version                // Node.js 版本，如 'v20.5.0'
process.versions               // { node: '20.5.0', v8: '11.3.244', ... }
process.platform               // 同 os.platform()
```

### 进程控制

```js
process.exit(0)     // 正常退出（0=成功，非0=错误）
process.exit(1)     // 错误退出

process.pid         // 进程 ID
process.ppid        // 父进程 ID
process.title       // 进程名称（可设置）
process.title = 'my-server'  // 在 ps 命令中显示
```

### 标准输入输出

```js
// process.stdin / stdout / stderr 都是 Stream
process.stdout.write('Hello\n')   // 不加换行符的输出
process.stderr.write('Error\n')   // 错误输出
console.log === process.stdout.write  // 近似，console.log 会加换行

// 读取 stdin
process.stdin.setEncoding('utf8')
process.stdin.on('data', (data) => {
  process.stdout.write('你输入了: ' + data)
})
process.stdin.on('end', () => process.exit(0))
```

### 内存与性能

```js
process.memoryUsage()
// {
//   rss: 42237952,       // 常驻内存（字节）
//   heapTotal: 8192000,  // V8 堆总量
//   heapUsed: 4567890,   // V8 堆已用
//   external: 123456,    // C++ 对象占用
//   arrayBuffers: 78901  // ArrayBuffer 占用
// }

process.cpuUsage()
// { user: 38579, system: 6986 }（微秒）

process.hrtime.bigint()  // 高精度时间（纳秒），用于性能测量
const start = process.hrtime.bigint()
// ... 执行代码 ...
const duration = process.hrtime.bigint() - start
console.log(`耗时 ${duration / 1000000n} ms`)
```

### 事件处理

```js
// 未捕获的同步异常
process.on('uncaughtException', (err, origin) => {
  console.error('未捕获异常:', err)
  // 记录日志后退出，不要试图继续运行！
  process.exit(1)
})

// 未处理的 Promise 拒绝
process.on('unhandledRejection', (reason, promise) => {
  console.error('未处理的 Promise 拒绝:', reason)
  process.exit(1)
})

// 进程退出前（不能阻止退出，不能异步操作）
process.on('exit', (code) => {
  console.log(`进程即将退出，退出码: ${code}`)
  // 只能执行同步代码
})

// 信号处理
process.on('SIGTERM', () => {
  console.log('收到 SIGTERM，优雅关闭...')
  // 关闭数据库连接、HTTP 服务器等
  process.exit(0)
})

process.on('SIGINT', () => {
  console.log('\n收到 Ctrl+C')
  process.exit(0)
})
```

### nextTick — 微任务

```js
// 在当前操作完成后、I/O 事件之前执行（比 Promise.then 更早）
process.nextTick(() => {
  console.log('nextTick 回调')
})

console.log('同步代码')
// 输出顺序：同步代码 → nextTick 回调

// 常用场景：确保回调在当前调用栈清空后异步执行
function readData(callback) {
  if (this._cache) {
    process.nextTick(() => callback(null, this._cache))  // 保持异步一致性
    return
  }
  fs.readFile(this._path, callback)
}
```

---

## 实战：环境配置与优雅关闭

```js
const http = require('http')

// 从环境变量读取配置
const config = {
  port: parseInt(process.env.PORT) || 3000,
  host: process.env.HOST || '0.0.0.0',
  env: process.env.NODE_ENV || 'development',
}

console.log(`启动模式: ${config.env}`)
console.log(`Node.js ${process.version} on ${os.platform()}`)
console.log(`PID: ${process.pid}, CPU: ${os.cpus().length} 核`)

const server = http.createServer((req, res) => {
  res.end('OK')
})

server.listen(config.port, config.host, () => {
  console.log(`服务器运行在 http://${config.host}:${config.port}`)
})

// 优雅关闭
let isShuttingDown = false

function gracefulShutdown(signal) {
  if (isShuttingDown) return
  isShuttingDown = true

  console.log(`\n收到 ${signal}，开始优雅关闭...`)

  server.close(() => {
    console.log('HTTP 服务器已关闭')
    // 关闭数据库等资源
    process.exit(0)
  })

  // 超时强制退出
  setTimeout(() => {
    console.error('优雅关闭超时，强制退出')
    process.exit(1)
  }, 10000)
}

process.on('SIGTERM', () => gracefulShutdown('SIGTERM'))
process.on('SIGINT', () => gracefulShutdown('SIGINT'))

process.on('uncaughtException', (err) => {
  console.error('未捕获异常:', err)
  gracefulShutdown('uncaughtException')
})

process.on('unhandledRejection', (reason) => {
  console.error('未处理的 Promise 拒绝:', reason)
  gracefulShutdown('unhandledRejection')
})
```

---

## 关键点总结

### os

| 方法 | 说明 |
|------|------|
| `os.cpus().length` | CPU 核心数，用于 cluster/worker 数量 |
| `os.freemem()` / `totalmem()` | 内存监控 |
| `os.platform()` | 跨平台判断 |
| `os.tmpdir()` | 临时文件目录 |
| `os.networkInterfaces()` | 获取本机 IP |

### process

| 方法/属性 | 说明 |
|-----------|------|
| `process.env` | 环境变量 |
| `process.argv` | 命令行参数 |
| `process.cwd()` | 当前工作目录 |
| `process.exit(code)` | 退出进程 |
| `process.nextTick(fn)` | 微任务，优先于 Promise |
| `process.memoryUsage()` | 内存监控 |
| `SIGTERM` / `SIGINT` 信号 | 优雅关闭的触发点 |
| `uncaughtException` | 全局异常兜底（记录后必须退出）|

> **核心原则**：`uncaughtException` 捕获后必须退出，不可继续运行（状态不可信）；优雅关闭要处理 SIGTERM；`process.nextTick` 优先级高于 Promise，不要嵌套太深。
