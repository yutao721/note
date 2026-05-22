import fs from 'fs/promises'

// 读文件
const content = await fs.readFile('input.txt', 'utf8')
console.log(content)

// 写文件
await fs.writeFile('input.txt', '内容')

// 追加
await fs.appendFile('input.txt', '新日志\n')

// 拷贝
await fs.copyFile('input1.txt', 'input.txt')

// 删除文件
// await fs.unlink('input1.txt')

// 重命名 / 移动
// await fs.rename('input.txt', 'input2.txt')
// await fs.rename('file.txt', '/other/dir/file.txt')  // 跨目录移动

// 创建目录（recursive: true 相当于 mkdir -p）
// await fs.mkdir('./a/b/c', { recursive: true })

// 删除目录（recursive: true 相当于 rm -rf）
// await fs.rm('./dir', { recursive: true, force: true })

// 读取目录
const entries = await fs.readdir('../fs', { withFileTypes: true })
for (const entry of entries) {
  console.log(entry.name, entry.isDirectory() ? '[dir]' : '[file]')
}