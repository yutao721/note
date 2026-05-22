# 【Node学习】（12）child_process & cluster & worker_threads — 多进程与多线程

## 概述

Node.js 是单线程的，突破单核限制有三种方式：

| 方式 | 适用场景 | 通信方式 |
|------|----------|----------|
| `child_process` | 执行外部命令、隔离崩溃 | IPC / stdin/stdout |
| `cluster` | HTTP 服务利用多核 | IPC（自动） |
| `worker_threads` | CPU 密集型计算 | SharedArrayBuffer / postMessage |

---

## child_process — 子进程

```js
const { exec, execFile, spawn, fork } = require('child_process')
```

### exec — 执行命令（Shell）

```js
const { exec } = require('child_process')

// 缓冲输出，命令完成后回调
exec('ls -la', (err, stdout, stderr) => {
  if (err) {
    console.error('错误:', err.message)
    console.error('stderr:', stderr)
    return
  }
  console.log(stdout)
})

// Promise 封装
const { promisify } = require('util')
const execAsync = promisify(exec)

const { stdout } = await execAsync('git log --oneline -5')
console.log(stdout)

// 注意：exec 使用 Shell，存在命令注入风险
// 用户输入不要直接拼接！
const userInput = 'file.txt; rm -rf /'  // 危险！
// exec(`cat ${userInput}`)  // 绝对不要这样做
```

### execFile — 直接执行文件（无 Shell，更安全）

```js
const { execFile } = require('child_process')

// 参数数组，不经过 Shell 解析，安全
execFile('node', ['--version'], (err, stdout) => {
  console.log(stdout)  // v20.5.0
})

// 用户输入可以安全传入参数数组
execFile('grep', ['-r', userInput, './src'], callback)
```

### spawn — 流式输出（推荐大输出场景）

```js
const { spawn } = require('child_process')

const child = spawn('ping', ['-c', '4', 'google.com'])

// stdin/stdout/stderr 都是 Stream
child.stdout.on('data', (data) => process.stdout.write(data))
child.stderr.on('data', (data) => process.stderr.write(data))

child.on('close', (code) => {
  console.log(`子进程退出，退出码: ${code}`)
})

child.on('error', (err) => {
  console.error('启动失败:', err)
})

// 向子进程写入输入
child.stdin.write('some input\n')
child.stdin.end()
```

### fork — 创建 Node.js 子进程（有 IPC 通道）

```js
// 主进程 main.js
const { fork } = require('child_process')

const child = fork('./worker.js', [], {
  env: { ...process.env, WORKER_ID: '1' }
})

// 向子进程发消息
child.send({ type: 'task', data: [1, 2, 3, 4, 5] })

// 接收子进程消息
child.on('message', (msg) => {
  console.log('子进程结果:', msg)
})

child.on('exit', (code) => {
  console.log(`子进程退出，代码: ${code}`)
})

// worker.js（子进程）
process.on('message', (msg) => {
  if (msg.type === 'task') {
    const result = msg.data.reduce((a, b) => a + b, 0)
    process.send({ type: 'result', value: result })
  }
})
```

### 进程池模式

```js
// worker-pool.js
const { fork } = require('child_process')
const os = require('os')

class WorkerPool {
  constructor(workerPath, size = os.cpus().length) {
    this._workers = []
    this._queue = []

    for (let i = 0; i < size; i++) {
      const w = fork(workerPath)
      w.busy = false
      w.on('message', (result) => {
        w.busy = false
        w._resolve(result)
        this._processQueue()
      })
      this._workers.push(w)
    }
  }

  run(data) {
    return new Promise((resolve) => {
      const free = this._workers.find(w => !w.busy)
      if (free) {
        free.busy = true
        free._resolve = resolve
        free.send(data)
      } else {
        this._queue.push({ data, resolve })
      }
    })
  }

  _processQueue() {
    if (!this._queue.length) return
    const { data, resolve } = this._queue.shift()
    this.run(data).then(resolve)
  }

  destroy() {
    this._workers.forEach(w => w.kill())
  }
}
```

---

## cluster — 多进程 HTTP 服务

利用多核 CPU，主进程管理，子进程（Worker）处理请求。

```js
const cluster = require('cluster')
const http = require('http')
const os = require('os')

const NUM_WORKERS = os.cpus().length

if (cluster.isPrimary) {
  console.log(`主进程 ${process.pid} 启动，创建 ${NUM_WORKERS} 个 Worker`)

  // 创建 Worker
  for (let i = 0; i < NUM_WORKERS; i++) {
    cluster.fork()
  }

  // Worker 退出时自动重启
  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} 退出 (${signal || code})，重启...`)
    cluster.fork()
  })

  // 主进程监控
  cluster.on('online', (worker) => {
    console.log(`Worker ${worker.process.pid} 上线`)
  })

} else {
  // Worker 进程：运行 HTTP 服务
  http.createServer((req, res) => {
    res.writeHead(200)
    res.end(`Worker ${process.pid} 响应\n`)
  }).listen(3000)

  console.log(`Worker ${process.pid} 启动`)
}
```

### 主进程与 Worker 通信

```js
if (cluster.isPrimary) {
  const worker = cluster.fork()

  // 发消息给指定 Worker
  worker.send({ type: 'config', value: { timeout: 30000 } })

  // 接收 Worker 消息
  worker.on('message', (msg) => {
    console.log('Worker 上报:', msg)
  })

  // 向所有 Worker 广播
  for (const id in cluster.workers) {
    cluster.workers[id].send({ type: 'broadcast', msg: '更新配置' })
  }
} else {
  process.on('message', (msg) => {
    if (msg.type === 'config') {
      console.log('收到配置:', msg.value)
    }
    process.send({ type: 'ack', pid: process.pid })
  })
}
```

---

## worker_threads — 多线程

线程共享内存，适合 CPU 密集型任务（图像处理、加密计算、压缩等）。

```js
const { Worker, isMainThread, parentPort, workerData, MessageChannel } = require('worker_threads')
```

### 基础用法

```js
// main.js
const { Worker, isMainThread, parentPort, workerData } = require('worker_threads')

if (isMainThread) {
  const worker = new Worker(__filename, {
    workerData: { numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }
  })

  worker.on('message', (result) => console.log('结果:', result))
  worker.on('error', console.error)
  worker.on('exit', (code) => console.log('Worker 退出，code:', code))

} else {
  // Worker 线程
  const sum = workerData.numbers.reduce((a, b) => a + b, 0)
  parentPort.postMessage(sum)
}
```

### SharedArrayBuffer — 零拷贝共享内存

```js
const { Worker, isMainThread, parentPort, workerData } = require('worker_threads')

if (isMainThread) {
  // 共享内存（所有线程可同时访问）
  const sharedBuffer = new SharedArrayBuffer(4 * 4)  // 4个 Int32
  const sharedArray = new Int32Array(sharedBuffer)

  sharedArray[0] = 100
  sharedArray[1] = 200

  const worker = new Worker(__filename, {
    workerData: { sharedBuffer }
  })

  worker.on('exit', () => {
    console.log('Worker 修改后:', Array.from(sharedArray))
    // [99, 201, 0, 0]
  })

} else {
  const arr = new Int32Array(workerData.sharedBuffer)
  arr[0] -= 1   // 直接修改主线程的内存！
  arr[1] += 1
}
```

### Atomics — 原子操作（防竞态）

```js
const { Worker, isMainThread, parentPort, workerData } = require('worker_threads')

if (isMainThread) {
  const sab = new SharedArrayBuffer(4)
  const counter = new Int32Array(sab)

  const workers = Array.from({ length: 4 }, () =>
    new Worker(__filename, { workerData: { sab, iterations: 1000 } })
  )

  let done = 0
  workers.forEach(w => w.on('exit', () => {
    if (++done === workers.length) {
      console.log('最终计数:', counter[0])  // 期望 4000
    }
  }))

} else {
  const counter = new Int32Array(workerData.sab)
  for (let i = 0; i < workerData.iterations; i++) {
    Atomics.add(counter, 0, 1)  // 原子自增，线程安全
  }
}
```

### MessageChannel — 线程间双向通信

```js
const { Worker, isMainThread, workerData, parentPort, MessageChannel } = require('worker_threads')

if (isMainThread) {
  const { port1, port2 } = new MessageChannel()

  const worker = new Worker(__filename, {
    workerData: { port: port2 },
    transferList: [port2]  // 转移所有权
  })

  port1.on('message', (msg) => console.log('主线程收到:', msg))
  port1.postMessage('Hello Worker')

} else {
  const port = workerData.port
  port.on('message', (msg) => {
    console.log('Worker 收到:', msg)
    port.postMessage('Hello Main')
  })
}
```

---

## 三种方式对比

```
child_process.fork()
  ├── 独立内存空间（隔离好）
  ├── IPC 通信（序列化，有开销）
  └── 适合：任务隔离、防崩溃影响主进程

cluster
  ├── 本质是 fork 的封装
  ├── 自动负载均衡（round-robin）
  └── 适合：HTTP 服务多核扩展

worker_threads
  ├── 共享内存（效率高）
  ├── postMessage 通信（可零拷贝传输 ArrayBuffer）
  └── 适合：CPU 密集型计算（图像、加密、JSON 大解析）
```

---

## 实战：CPU 密集型任务不阻塞主线程

```js
// compute-worker.js
const { parentPort } = require('worker_threads')

parentPort.on('message', ({ taskId, n }) => {
  // 模拟 CPU 密集型计算（斐波那契）
  function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2)
  }
  parentPort.postMessage({ taskId, result: fib(n) })
})

// main.js
const { Worker } = require('worker_threads')
const http = require('http')

const workers = Array.from({ length: 4 }, () =>
  new Worker('./compute-worker.js')
)
let workerIndex = 0

function compute(n) {
  return new Promise((resolve) => {
    const worker = workers[workerIndex++ % workers.length]
    const taskId = Math.random().toString(36).slice(2)

    const handler = ({ taskId: id, result }) => {
      if (id === taskId) {
        worker.off('message', handler)
        resolve(result)
      }
    }
    worker.on('message', handler)
    worker.postMessage({ taskId, n })
  })
}

http.createServer(async (req, res) => {
  const result = await compute(40)  // fib(40) 不阻塞主线程
  res.end(`fib(40) = ${result}`)
}).listen(3000)
```

---

## 关键点总结

| 方式 | 关键点 |
|------|--------|
| `exec` | Shell 执行，有注入风险，不适合大输出 |
| `spawn` | 流式输出，无 Shell，大数据推荐 |
| `fork` | Node.js 子进程，有 IPC，隔离性好 |
| `cluster` | HTTP 多核，自动负载均衡 |
| `worker_threads` | 线程共享内存，CPU 密集任务 |
| `SharedArrayBuffer` | 零拷贝共享，用 `Atomics` 保证线程安全 |

> **核心原则**：I/O 密集用单进程异步，CPU 密集用 `worker_threads`，HTTP 多核用 `cluster`；`exec` 有 Shell 注入风险，用户输入用 `execFile` 或 `spawn` + 参数数组。
