# 【Node学习】（10）crypto — 加密与安全

## 概述

`crypto` 模块提供加密功能，包括哈希、HMAC、对称加密、非对称加密、数字签名等。基于 OpenSSL 实现。

```js
const crypto = require('crypto')
```

---

## 哈希（Hash）

单向散列，不可逆，常用于数据指纹、密码存储（需加盐）。

```js
// 常用算法：md5、sha1、sha256、sha512
const hash = crypto.createHash('sha256')
hash.update('hello')
hash.update(' world')  // 可多次 update
console.log(hash.digest('hex'))     // 输出十六进制
// b94d27b9934d3e08a52e52d7da7dabfac484efe04294e576b...

// 链式写法
const result = crypto
  .createHash('sha256')
  .update('hello world')
  .digest('hex')

// 输出格式
hash.digest('hex')     // 十六进制字符串
hash.digest('base64')  // Base64 字符串
hash.digest()          // Buffer

// 文件哈希
const fs = require('fs')
const { pipeline } = require('stream/promises')

async function fileHash(filePath, algorithm = 'sha256') {
  const hash = crypto.createHash(algorithm)
  await pipeline(fs.createReadStream(filePath), hash)
  return hash.digest('hex')
}
```

---

## HMAC — 带密钥的哈希

比普通哈希多了密钥，用于消息认证，防篡改。

```js
const hmac = crypto.createHmac('sha256', 'secret-key')
hmac.update('重要数据')
const signature = hmac.digest('hex')
console.log(signature)

// 验证：重新计算并比较
function verifyHmac(data, key, expected) {
  const actual = crypto.createHmac('sha256', key).update(data).digest('hex')
  // timingSafeEqual 防止时序攻击
  return crypto.timingSafeEqual(
    Buffer.from(actual, 'hex'),
    Buffer.from(expected, 'hex')
  )
}
```

---

## 密码哈希（加盐）

存储用户密码时，必须加盐哈希：

```js
// scrypt — 推荐，内存难以破解
function hashPassword(password) {
  const salt = crypto.randomBytes(16).toString('hex')
  const hash = crypto.scryptSync(password, salt, 64).toString('hex')
  return `${salt}:${hash}`
}

function verifyPassword(password, stored) {
  const [salt, hash] = stored.split(':')
  const actual = crypto.scryptSync(password, salt, 64).toString('hex')
  return crypto.timingSafeEqual(
    Buffer.from(actual, 'hex'),
    Buffer.from(hash, 'hex')
  )
}

const stored = hashPassword('mypassword123')
console.log(verifyPassword('mypassword123', stored))  // true
console.log(verifyPassword('wrongpassword', stored))  // false

// pbkdf2 — 异步版本
crypto.pbkdf2('password', 'salt', 100000, 64, 'sha512', (err, key) => {
  console.log(key.toString('hex'))
})
```

---

## 对称加密（AES）

加密解密用同一个密钥，速度快，适合大量数据。

```js
const ALGORITHM = 'aes-256-gcm'  // GCM 提供认证加密

function encrypt(plaintext, password) {
  const key = crypto.scryptSync(password, 'salt', 32)  // 派生密钥
  const iv = crypto.randomBytes(16)                      // 随机 IV

  const cipher = crypto.createCipheriv(ALGORITHM, key, iv)
  const encrypted = Buffer.concat([
    cipher.update(plaintext, 'utf8'),
    cipher.final()
  ])
  const authTag = cipher.getAuthTag()  // GCM 认证标签

  // 将 iv + authTag + 密文合并（需要一起存储/传输）
  return Buffer.concat([iv, authTag, encrypted]).toString('base64')
}

function decrypt(ciphertext, password) {
  const key = crypto.scryptSync(password, 'salt', 32)
  const buf = Buffer.from(ciphertext, 'base64')

  const iv = buf.slice(0, 16)
  const authTag = buf.slice(16, 32)
  const encrypted = buf.slice(32)

  const decipher = crypto.createDecipheriv(ALGORITHM, key, iv)
  decipher.setAuthTag(authTag)

  return Buffer.concat([
    decipher.update(encrypted),
    decipher.final()
  ]).toString('utf8')
}

const encrypted = encrypt('敏感数据', 'my-password')
console.log(decrypt(encrypted, 'my-password'))  // '敏感数据'
```

---

## 非对称加密（RSA）

公钥加密，私钥解密；私钥签名，公钥验证。

### 生成密钥对

```js
// 同步生成
const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
  modulusLength: 2048,
  publicKeyEncoding: { type: 'spki', format: 'pem' },
  privateKeyEncoding: { type: 'pkcs8', format: 'pem' }
})

// 异步生成（推荐）
crypto.generateKeyPair('rsa', {
  modulusLength: 2048,
  publicKeyEncoding: { type: 'spki', format: 'pem' },
  privateKeyEncoding: { type: 'pkcs8', format: 'pem' }
}, (err, publicKey, privateKey) => {
  console.log(publicKey)
})
```

### RSA 加密/解密

```js
// 公钥加密（只有私钥能解密）
const encrypted = crypto.publicEncrypt(publicKey, Buffer.from('机密信息'))
console.log(encrypted.toString('base64'))

// 私钥解密
const decrypted = crypto.privateDecrypt(privateKey, encrypted)
console.log(decrypted.toString())  // '机密信息'
```

### 数字签名

```js
// 私钥签名
function sign(data, privateKey) {
  return crypto.createSign('sha256')
    .update(data)
    .sign(privateKey, 'base64')
}

// 公钥验证
function verify(data, signature, publicKey) {
  return crypto.createVerify('sha256')
    .update(data)
    .verify(publicKey, signature, 'base64')
}

const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
  modulusLength: 2048,
  publicKeyEncoding: { type: 'spki', format: 'pem' },
  privateKeyEncoding: { type: 'pkcs8', format: 'pem' }
})

const data = '重要合同内容'
const signature = sign(data, privateKey)
console.log(verify(data, signature, publicKey))         // true
console.log(verify('篡改内容', signature, publicKey))   // false
```

---

## 随机数生成

```js
// 加密安全的随机字节
const bytes = crypto.randomBytes(32)           // Buffer
const hex = crypto.randomBytes(16).toString('hex')     // 32位十六进制
const base64 = crypto.randomBytes(24).toString('base64') // Base64

// 随机整数 [0, max)
const n = crypto.randomInt(100)   // 0-99

// 随机 UUID v4
const uuid = crypto.randomUUID()  // 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'

// 填充随机字节到已有 Buffer
const buf = Buffer.alloc(16)
crypto.randomFillSync(buf)  // 同步填充
crypto.randomFill(buf, (err, buf) => { /* 异步填充 */ })
```

---

## 实战：JWT 简易实现

```js
const crypto = require('crypto')

function base64url(str) {
  return Buffer.from(str).toString('base64')
    .replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '')
}

function createJWT(payload, secret, expiresIn = 3600) {
  const header = base64url(JSON.stringify({ alg: 'HS256', typ: 'JWT' }))
  const body = base64url(JSON.stringify({ ...payload, exp: Date.now() + expiresIn * 1000 }))
  const signature = crypto
    .createHmac('sha256', secret)
    .update(`${header}.${body}`)
    .digest('base64url')
  return `${header}.${body}.${signature}`
}

function verifyJWT(token, secret) {
  const [header, body, sig] = token.split('.')
  const expected = crypto
    .createHmac('sha256', secret)
    .update(`${header}.${body}`)
    .digest('base64url')

  if (sig !== expected) throw new Error('签名无效')

  const payload = JSON.parse(Buffer.from(body, 'base64url').toString())
  if (payload.exp < Date.now()) throw new Error('Token 已过期')

  return payload
}

const token = createJWT({ userId: 1, role: 'admin' }, 'my-secret')
console.log(token)
console.log(verifyJWT(token, 'my-secret'))
```

---

## 关键点总结

| 场景 | 推荐方式 |
|------|----------|
| 数据指纹/完整性 | `createHash('sha256')` |
| 消息认证 | `createHmac('sha256', key)` |
| 密码存储 | `scryptSync` + 随机盐 |
| 对称加密 | `aes-256-gcm`（带认证） |
| 非对称加密 | RSA publicEncrypt/privateDecrypt |
| 数字签名 | `createSign` / `createVerify` |
| 安全随机数 | `randomBytes` / `randomUUID` |
| 字符串比较 | `timingSafeEqual`（防时序攻击）|

> **核心原则**：密码必须加盐哈希（`scrypt`/`pbkdf2`），绝不明文存储；加密优先选 AES-256-GCM（认证加密）；比较敏感字符串用 `timingSafeEqual` 防时序攻击；IV/Nonce 必须随机且每次唯一。
