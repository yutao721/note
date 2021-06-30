const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname, 'input.txt')

// -- 异步另一种文件追加操作(非覆盖方式)
// 写入文件内容（如果文件不存在会创建一个文件）
fs.appendFile(filePath, '新数据456', function(err) {
  if (err) {
    throw err
  }
  // 写入成功后读取测试
  let data = fs.readFileSync(filePath, 'utf-8')
  console.log(data)
})

// -- 同步另一种文件追加操作(非覆盖方式)
fs.appendFileSync(filePath, '同步追加一条新数据789')

