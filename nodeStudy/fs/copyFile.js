const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname, 'input.txt')
const filePath1 = path.join(__dirname, 'input1.txt')

// 异步将filePath文件内容拷贝到filePath1文件内容
fs.copyFile(filePath, filePath1, function(err) {
  if (err) {
    throw err
  } else {
    let data = fs.readFileSync(filePath1, 'utf8');
    console.log(data);
  }
});

// 异步将filePath文件内容拷贝到filePath1文件内容
fs.copyFileSync(filePath, filePath1);
let data = fs.readFileSync(filePath1, 'utf8');
console.log(data);
