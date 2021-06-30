const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname, 'input.txt')

fs.open(filePath, 'r', '0666', function(err, fd) {
  console.log('读取成功', fd) //返回的第二个参数为一个整数，表示打开文件返回的文件描述符，window中又称文件句柄
})
