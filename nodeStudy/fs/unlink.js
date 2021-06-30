const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname, 'input.txt')

// -- 异步文件删除
fs.unlink(filePath, function(err) {
  if (err) return
})

// -- 同步删除文件
fs.unlinkSync(filePath)
