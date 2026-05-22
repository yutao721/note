# 【Node学习】（7）Buffer — 二进制数据

## 概述

`Buffer` 是 Node.js 处理二进制数据的核心类，类似固定长度的字节数组（`Uint8Array` 的子类）。在网络传输、文件 I/O、加密等场景中大量使用。

```js
// Buffer 是全局类，无需 require
// const { Buffer } = require('buffer')  // 也可显式引入
```

---

## 创建 Buffer

```js
// 1. 从字符串创建
const buf1 = Buffer.from('hello', 'utf8')       // 默认 utf8
const buf2 = Buffer.from('68656c6c6f', 'hex')   // 从十六进制
const buf3 = Buffer.from('aGVsbG8=', 'base64')  // 从 base64

// 2. 从数组/ArrayBuffer 创建
const buf4 = Buffer.from([0x68, 0x65, 0x6c, 0x6c, 0x6f])
const ab = new ArrayBuffer(8)
const buf5 = Buffer.from(ab)

// 3. 分配固定大小
const buf6 = Buffer.alloc(10)          // 10字节，填充0（安全）
const buf7 = Buffer.alloc(10, 0xff)    // 10字节，填充 0xff
const buf8 = Buffer.allocUnsafe(10)    // 10字节，不初始化（快，有内存残留风险）
```

> **alloc vs allocUnsafe**：`allocUnsafe` 更快，但内存中可能有旧数据，不可信任内容时必须用 `alloc`。

---

## 编码格式

| 编码 | 说明 |
|------|------|
| `utf8` | 默认，最常用 |
| `ascii` | 仅 7 位 ASCII |
| `utf16le` | UTF-16 小端序 |
| `hex` | 十六进制字符串 |
| `base64` | Base64 编码 |
| `base64url` | URL 安全的 Base64 |
| `binary` | Latin-1 编码 |

---

## 读写操作

```js
const buf = Buffer.alloc(10)

// 写入
buf.write('hello', 0, 'utf8')   // (string, offset, encoding)
buf.writeUInt8(255, 0)          // 在偏移0写入一个无符号8位整数
buf.writeUInt16BE(0x1234, 0)    // 大端序 16位
buf.writeUInt16LE(0x1234, 0)    // 小端序 16位
buf.writeInt32BE(-1, 0)
buf.writeFloatBE(3.14, 0)
buf.writeDoubleBE(3.14159, 0)

// 读取
buf.readUInt8(0)
buf.readUInt16BE(0)
buf.readInt32LE(0)
buf.readFloatBE(0)

// 按下标访问
console.log(buf[0])   // 数字，0-255
buf[0] = 0x41        // 修改单个字节
```

---

## 转换操作

```js
const buf = Buffer.from('hello world')

// 转字符串
buf.toString()           // 'hello world'（默认 utf8）
buf.toString('hex')      // '68656c6c6f20776f726c64'
buf.toString('base64')   // 'aGVsbG8gd29ybGQ='
buf.toString('utf8', 0, 5)  // 'hello'（指定范围）

// 转 JSON
buf.toJSON()
// { type: 'Buffer', data: [104, 101, 108, 108, 111, ...] }

// 转数组
Array.from(buf)   // [104, 101, 108, 108, 111, ...]
[...buf]          // 同上

// 转 ArrayBuffer（零拷贝）
buf.buffer        // 返回底层 ArrayBuffer
```

---

## 切片与合并

```js
const buf = Buffer.from('hello world')

// slice — 零拷贝，共享内存！
const slice = buf.slice(0, 5)
slice[0] = 0x48  // 修改 slice 会影响原 buf！
console.log(buf.toString())  // 'Hello world'

// subarray — 同 slice，也是零拷贝
const sub = buf.subarray(6, 11)

// copy — 真正复制
const copy = Buffer.alloc(5)
buf.copy(copy, 0, 0, 5)   // (target, targetStart, sourceStart, sourceEnd)

// concat — 合并多个 Buffer（创建新 Buffer）
const a = Buffer.from('hello ')
const b = Buffer.from('world')
const combined = Buffer.concat([a, b])
const withLen = Buffer.concat([a, b], 8)  // 指定总长度
```

---

## 比较与查找

```js
const buf1 = Buffer.from('ABC')
const buf2 = Buffer.from('BCD')

// 比较
buf1.compare(buf2)    // -1（buf1 < buf2）
buf2.compare(buf1)    // 1
buf1.compare(buf1)    // 0（相等）
buf1.equals(buf1)     // true

// 排序
[buf2, buf1].sort(Buffer.compare)  // [buf1, buf2]

// 查找
const buf = Buffer.from('hello world hello')
buf.indexOf('hello')          // 0
buf.indexOf('hello', 1)       // 12（从偏移1开始找）
buf.lastIndexOf('hello')      // 12
buf.includes('world')         // true
```

---

## 实战：自定义二进制协议

```js
// 协议格式：[type:1byte][length:4bytes(BE)][data:length bytes]

function encode(type, data) {
  const dataBuf = Buffer.from(data, 'utf8')
  const buf = Buffer.alloc(1 + 4 + dataBuf.length)

  buf.writeUInt8(type, 0)               // 1字节类型
  buf.writeUInt32BE(dataBuf.length, 1)  // 4字节长度（大端序）
  dataBuf.copy(buf, 5)                  // 数据从偏移5开始

  return buf
}

function decode(buf) {
  const type = buf.readUInt8(0)
  const length = buf.readUInt32BE(1)
  const data = buf.slice(5, 5 + length).toString('utf8')
  return { type, data }
}

const encoded = encode(0x01, 'Hello, Protocol!')
console.log(encoded.toString('hex'))
// 01 0000000f 48656c6c6f2c2050726f746f636f6c21

const decoded = decode(encoded)
console.log(decoded)
// { type: 1, data: 'Hello, Protocol!' }
```

---

## Buffer 与 Stream 的关系

Stream 传输的数据默认就是 Buffer：

```js
const fs = require('fs')

fs.createReadStream('file.txt').on('data', (chunk) => {
  console.log(Buffer.isBuffer(chunk))   // true
  console.log(chunk.length)            // 每次最多 highWaterMark 字节
})

// 设置 encoding 后自动转为字符串
fs.createReadStream('file.txt', { encoding: 'utf8' }).on('data', (chunk) => {
  console.log(typeof chunk)  // 'string'
})
```

---

## 内存安全注意事项

```js
// 1. allocUnsafe 必须完整写入再使用
const buf = Buffer.allocUnsafe(100)
buf.fill(0)           // 手动清零
// 或直接用 alloc

// 2. slice 共享内存，小心修改
const original = Buffer.from([1, 2, 3, 4, 5])
const slice = original.slice(1, 3)
slice[0] = 99
console.log(original)  // <Buffer 01 63 03 04 05> ← 被修改了！

// 3. 安全复制
const safeCopy = Buffer.from(original)  // 真正复制
```

---

## 关键点总结

| 方法 | 说明 |
|------|------|
| `Buffer.from()` | 从字符串/数组/Buffer 创建 |
| `Buffer.alloc(n)` | 创建 n 字节（安全，填0）|
| `Buffer.allocUnsafe(n)` | 创建 n 字节（快，有残留）|
| `buf.toString(enc)` | 转字符串 |
| `buf.slice()` / `subarray()` | 零拷贝切片（共享内存）|
| `Buffer.concat([...])` | 合并（新建 Buffer）|
| `buf.copy(target)` | 复制到另一个 Buffer |
| `buf.readUInt32BE(offset)` | 读取固定宽度整数 |

> **核心原则**：`alloc` 比 `allocUnsafe` 安全；`slice` 是零拷贝共享内存，修改会影响原数据；网络协议解析用 `readUInt*` / `writeUInt*` 系列方法。
