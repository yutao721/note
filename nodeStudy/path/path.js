const path = require('path')

// 获取路径的目录名
console.log(path.dirname('/path/example/index.js'));

// 获取路径的扩展名
console.log(path.extname('/path/example/index.js'));

// 是否是绝对路径
console.log(path.isAbsolute('/path/example/index.js'));
console.log(path.isAbsolute('.'));

// 拼接路径片段
console.log(path.join('/path', 'example', './index.js'));

// 将路径或路径片段的序列解析为绝对路径。
console.log(path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif'));

console.log(path.relative('/path/example/index.js', '/path'));
