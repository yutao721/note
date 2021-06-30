const fs = require('fs')

// 异步读取
fs.readFile('./input.txt', 'utf8', (err, data) => {
  console.log(data) //  Node模块fs学习
})

// 同步读取
const data = fs.readFileSync('./input.txt', 'utf8')
console.log(data) //  Node模块fs学习
