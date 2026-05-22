
# CommonJS 规范核心指南

## 1. 模块基础概念

### 1.1 模块定义

- 每个文件被视为一个独立的模块
- 模块具有独立的作用域
- 模块会被包装在函数中执行

### 1.2 核心变量

每个模块自动提供以下全局变量：

- `__filename`: 当前文件的完整路径
- `__dirname`: 当前文件所在目录的路径
- `module`: 当前模块的信息对象
- `exports`: 导出对象的引用
- `require`: 用于导入模块的函数

## 2. 模块导出机制

### 2.1 导出方式

```javascript
// 方式1：直接导出属性
exports.name = 'value';
exports.method = function() {};

// 方式2：使用 module.exports
module.exports = {
    name: 'value',
    method: function() {}
};

// 方式3：导出构造函数/类
module.exports = class MyClass {};
```

### 2.2 导出注意事项

- `exports` 是 `module.exports` 的引用
- 直接给 `exports` 赋值会断开引用
- 最终导出的是 `module.exports` 的值

## 3. 模块导入机制

### 3.1 导入方式

```javascript
// 导入整个模块
const module = require('./module');

// 解构导入
const { name, method } = require('./module');

// 导入默认导出
const MyClass = require('./myclass');
```

### 3.2 模块解析规则

1. 核心模块（Node.js 内置）
2. 文件模块（以 `./` 或 `../` 开头）
3. node_modules 中的模块

## 4. 核心特性

### 4.1 同步加载

- `require` 是同步操作
- 会阻塞代码执行直到模块加载完成
- 适合服务器端应用

### 4.2 模块缓存

- 模块在第一次加载后会被缓存
- 后续加载直接从缓存返回
- 可通过 `require.cache` 访问缓存

### 4.3 值的拷贝

- 导出的是值的拷贝，不是引用
- 基本类型值的修改不会影响其他模块
- 对象类型的属性修改会影响其他模块

## 5. 特殊情况处理

### 5.1 循环依赖

```javascript
// a.js
const b = require('./b');
console.log('a.js', b.done);
exports.done = true;

// b.js
const a = require('./a');
console.log('b.js', a.done);
exports.done = true;
```

### 5.2 动态导入

```javascript
// 条件导入
if (condition) {
    const module = require('./module');
}

// 路径计算
const modulePath = path.join(__dirname, 'module');
const module = require(modulePath);
```

## 6. 最佳实践

### 6.1 导出建议

- 优先使用 `module.exports` 而不是 `exports`
- 保持导出接口的一致性
- 避免循环依赖

### 6.2 性能优化

- 合理利用模块缓存
- 避免在模块顶层执行耗时操作
- 使用条件加载减少内存占用

## 7. 实际应用示例

### 7.1 工具模块

```javascript
// utils.js
const utils = {
    formatDate(date) {
        // 格式化日期
    },
    validateEmail(email) {
        // 邮箱验证
    }
};

module.exports = utils;
```

### 7.2 类模块

```javascript
// user.js
class User {
    constructor(name) {
        this.name = name;
    }
    
    getName() {
        return this.name;
    }
}

module.exports = User;
```
