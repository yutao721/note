const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname, 'input.txt')

// 写入文件内容（如果文件不存在会创建一个文件）
// 写入时会先清空文件
fs.writeFile(filePath, '写入成功：Node模块fs学习', function(err) {
  if (err) {
    throw err
  }
  // 写入成功后读取测试
  let data = fs.readFileSync(filePath, 'utf-8')
  console.log('new data -->' + data)
})

// 通过文件写入并且利用flag也可以实现文件追加
fs.writeFile(filePath, 'Node模块fs学习追加的数据', { 'flag': 'a' }, function(err) {
  if (err) {
    throw err
  }
  console.log('success')
  let data = fs.readFileSync(filePath, 'utf-8')
  // 写入成功后读取测试
  console.log('追加后的数据 -->' + data)
})
