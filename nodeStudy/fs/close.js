const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname, 'input.txt')

fs.open(filePath, 'r', '0666', function(err, fd) {
  fs.close(fd, (err) => {
    console.log('关闭成功') // 关闭成功
  })
})
