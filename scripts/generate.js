const fs = require('fs');
const path = require('path');
const { Command } = require('commander');

const program = new Command();

program
  .name('generate-md-index')
  .description('增量更新README.md中的目录列表，只添加不重复的项')
  .requiredOption('-d, --dir <path>', '要扫描的源目录（相对于项目根目录）')
  .option('-o, --out <filename>', '输出的README文件名（默认为README.md）', 'README.md')
  .parse();

const options = program.opts();
const sourceDir = path.resolve(__dirname, '..', options.dir);
const readmePath = path.join(sourceDir, options.out);

// --- 1. 递归扫描，获取所有.md文件的相对路径 ---
function getAllMdFiles(dir, relativePath = '') {
  let files = [];
  const items = fs.readdirSync(dir);

  items.sort().forEach(item => {
    const fullPath = path.join(dir, item);
    const stats = fs.statSync(fullPath);

    if (stats.isDirectory()) {
      files = files.concat(getAllMdFiles(fullPath, path.posix.join(relativePath, item)));
    } else if (path.extname(item).toLowerCase() === '.md' && item !== options.out) {
      const relativeFilePath = path.posix.join(relativePath, item);
      files.push(relativeFilePath);
    }
  });

  return files;
}

// --- 2. 解析README.md，提取已有的链接显示文本 ---
function getExistingLinkTitles(content) {
  const existingTitles = new Set();
  // 匹配所有无序列表项，并捕获 [] 中的显示文本
  const regex = /^\s*- \[(.+?)\]/gm;
  let match;
  while ((match = regex.exec(content)) !== null) {
    existingTitles.add(match[1]);
  }
  return existingTitles;
}

// --- 主程序 (基于文件名比较) ---
if (!fs.existsSync(sourceDir) || !fs.statSync(sourceDir).isDirectory()) {
  console.error(`错误：源目录 "${sourceDir}" 不存在或不是一个目录。`);
  process.exit(1);
}

const originalContent = fs.existsSync(readmePath) ? fs.readFileSync(readmePath, 'utf8') : '';

// 获取磁盘上所有.md文件
const allDiskFiles = getAllMdFiles(sourceDir);

// 获取README中已有的链接显示文本（如 "如何学习"）
const existingTitles = getExistingLinkTitles(originalContent);

// 找出需要新增的文件（文件名不在已有标题集合中）
const newFiles = allDiskFiles.filter(file => {
  const title = path.basename(file, '.md');
  return !existingTitles.has(title);
});

if (newFiles.length === 0) {
  console.log('没有发现新的文件，无需更新。');
  process.exit(0);
}

// 将新增文件转换为Markdown列表项
const newLinksMarkdown = newFiles.map(file => {
  const title = path.basename(file, '.md');
  const indent = '  '.repeat(file.split('/').length - 1);
  return `${indent}- [${title}](./${file})`;
}).join('\n');

// 将新的链接追加到 "## 目录" 部分的末尾
const updatedContent = originalContent.replace(
  /(## 目录\n)/,
  `$1${newLinksMarkdown}\n`
);

fs.writeFileSync(readmePath, updatedContent, 'utf8');

console.log(`成功在 "${readmePath}" 中添加了 ${newFiles.length} 个新链接。`);

