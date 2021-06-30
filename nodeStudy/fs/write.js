const fs = require('fs')
let buf = Buffer.alloc(6) // 创建6字节长度的buf缓存对象

// 打开文件
fs.open('input.txt', 'r', (err, fd) => {
  // 读取文件
  fs.read(fd, buf, 0, 3, 0, (err, bytesRead, buffer) => {
    console.log(bytesRead)
    console.log(buffer)

    // 写入
    fs.write(fd, buf, 3, 3, 3, (err, bytesRead, buffer) => {
      console.log(bytesRead)
      console.log(buffer)
      console.log(buffer.toString())
    })
  })
})

// 3
// <Buffer 4e 6f 64 00 00 00>


// 0
// <Buffer 4e 6f 64 00 00 00>
// Nod
