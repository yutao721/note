## Node.js 文件系统

Node.js 提供一组类似 UNIX（POSIX）标准的文件操作API。 Node 导入文件系统模块(fs)语法如下所示：

```js
var fs = require("fs")
```

## 异步和同步

Node.js 文件系统（fs 模块）模块中的方法均有异步和同步版本，例如读取文件内容的函数有异步的 fs.readFile() 和同步的 fs.readFileSync()。

异步的方法函数最后一个参数为回调函数，回调函数的第一个参数包含了错误信息(error)。

建议大家使用异步方法，比起同步，异步方法性能更高，速度更快，而且没有阻塞。

##  权限位 mode

因为 fs 模块需要对文件进行操作，会涉及到操作权限的问题，所以需要先清楚文件权限是什么，都有哪些权限。

文件权限表：

![img](http://img.xiaogangzai.cn/modules_fs_01.jpg)

在上面表格中，我们可以看出系统中针对三种类型进行权限分配，即文件所有者（自己）、文件所属组（家人）和其他用户（陌生人），文件操作权限又分为三种，读、写和执行，数字表示为八进制数，具备权限的八进制数分别为 `4`、`2`、`1`，不具备权限为 0。

为了更容易理解，我们可以随便在一个目录中打开 `Git`，使用 `Linux` 命令 `ls -al` 来查目录中文件和文件夹的权限位

```shell
drwxr-xr-x 1 test 197121 0 Jun 28 14:41 core
-rw-r--r-- 1 test 197121 293 Jun 23 17:44 index.md
```

在上面的目录信息当中，很容易看出用户名、创建时间和文件名等信息，但最重要的是开头第一项（十位的字符）。

第一位代表是文件还是文件夹，`d` 开头代表文件夹，`-` 开头的代表文件，而后面九位就代表当前用户、用户所属组和其他用户的权限位，按每三位划分，分别代表读（r）、写（w）和执行（x），`-` 代表没有当前位对应的权限。

## 标识位 flag

Node.js 中，标识位代表着对文件的操作方式，如可读、可写、即可读又可写等等，在下面用一张表来表示文件操作的标识位和其对应的含义。

| 符号 | 含义                                                     |
| ---- | -------------------------------------------------------- |
| r    | 读取文件，如果文件不存在则抛出异常。                     |
| r+   | 读取并写入文件，如果文件不存在则抛出异常。               |
| rs   | 读取并写入文件，指示操作系统绕开本地文件系统缓存。       |
| w    | 写入文件，文件不存在会被创建，存在则清空后写入。         |
| wx   | 写入文件，排它方式打开。                                 |
| w+   | 读取并写入文件，文件不存在则创建文件，存在则清空后写入。 |
| wx+  | 和 w+ 类似，排他方式打开。                               |
| a    | 追加写入，文件不存在则创建文件。                         |
| ax   | 与 a 类似，排他方式打开。                                |
| a+   | 读取并追加写入，不存在则创建。                           |
| ax+  | 与 a+ 类似，排他方式打开。                               |

上面表格就是这些标识位的具体字符和含义，但是 flag 是不经常使用的，不容易被记住，所以在下面总结了一个加速记忆的方法。

- r：读取
- w：写入
- s：同步
- +：增加相反操作
- x：排他方式

> r+ 和 w+ 的区别，当文件不存在时，r+ 不会创建文件，而会抛出异常，但 w+ 会创建文件；如果文件存在，r+ 不会自动清空文件，但 w+ 会自动把已有文件的内容清空。

## 文件操作

### 文件读取-fs.readFile

fs.readFile(filename,[encoding],[callback(error,data)]

文件读取函数

1. 它接收第一个必选参数 filename，表示读取的文件名。
2. 第二个参数 encoding 是可选的，表示文件字符编码。
3. 第三个参数`callback`是回调函数，用于接收文件的内容。 说明：如果不指定 encoding ，则`callback`就是第二个参数。 回调函数提供两个参数 err 和 data ， err 表示有没有错误发生，data 是文件内容。 如果指定 encoding ， data 是一个解析后的字符串，否则将会以 Buffer 形式表示的二进制数据。

demo:

```js
const fs = require('fs')

// 异步读取
fs.readFile('./input.txt', 'utf8', (err, data) => {
  console.log(data) //  Node模块fs学习
})

// 同步读取
const data = fs.readFileSync('./input.txt', 'utf8')
console.log(data) //  Node模块fs学习

```

### 文件写入 fs.writeFile

fs.writeFile(filename, data, [options], callback)

文件写入操作

1. 第一个必选参数 filename ，表示读取的文件名
2. 第二个参数要写的数据
3. 第三个参数 option 是一个对象，如下

```javascript
encoding {String | null} default='utf-8'
mode {Number} default=438(aka 0666 in Octal)
flag {String} default='w'
```

flag 值，默认为 w,会清空文件，然后再写。flag 值，r 代表读取文件，w 代表写文件，a 代表追加。

demo：

```js
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

```



### 文件追加-appendFile

fs.appendFile(filename, data, [options], callback)

1. 第一个必选参数 filename ，表示读取的文件名
2. 第二个参数 data，data 可以是任意字符串或者缓存
3. 第三个参数 option 是一个对象，与 write 的区别就是[options]的 flag 默认值是”a”，所以它以追加方式写入数据.

说明：该方法以异步的方式将 data 插入到文件里，如果文件不存在会自动创建

demo：

```javascript
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
```

### 拷贝文件-copyFile

fs.copyFile(filenameA, filenameB，callback)

1. 第一个参数原始文件名
2. 第二个参数要拷贝到的文件名

demo:

```js
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

```

###  删除文件-unlink

1. 第一个参数文件路径
2. 第二个回调函数 callback

```js

const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname, 'input.txt')

// -- 异步文件删除
fs.unlink(filePath, function(err) {
  if (err) return
})

// -- 同步删除文件
fs.unlinkSync(filePath)

```

### 指定位置读写文件操作(高级文件操作)

接下来的高级文件操作会与上面有些不同，流程稍微复杂一些，要先用`fs.open`来打开文件，然后才可以用`fs.read`去读，或者用`fs.write`去写文件，最后，你需要用`fs.close`去关掉文件。

> 特殊说明：read 方法与 readFile 不同，一般针对于文件太大，无法一次性读取全部内容到缓存中或文件大小未知的情况，都是多次读取到 Buffer 中。

### 文件打开-fs.open

fs.open(path, flags, [mode], callback)

第一个参数:文件路径 第二个参数:与开篇说的标识符 flag 相同 第三个参数:[mode] 是文件的权限（可选参数，默认值是 0666） 第四个参数:callback 回调函数

```js
const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname, 'input.txt')

fs.open(filePath, 'r', '0666', function(err, fd) {
  console.log('读取成功', fd) //返回的第二个参数为一个整数，表示打开文件返回的文件描述符，window中又称文件句柄
})

```

### 文件读取-fs.read

fs.read(fd, buffer, offset, length, position, callback)

六个参数

1. fd：文件描述符，需要先使用 open 打开，使用`fs.open`打开成功后返回的文件描述符；
2. buffer：一个 Buffer 对象，`v8`引擎分配的一段内存，要将内容读取到的 Buffer；
3. offset：整数，向 Buffer 缓存区写入的初始位置，以字节为单位；
4. length：整数，读取文件的长度；
5. position：整数，读取文件初始位置；文件大小以字节为单位
6. callback：回调函数，有三个参数 err（错误），bytesRead（实际读取的字节数），buffer（被写入的缓存区对象），读取执行完成后执行。

```js

const fs = require('fs')
let buf = Buffer.alloc(6) // 创建6字节长度的buf缓存对象

// 打开文件
fs.open('input.txt', 'r', (err, fd) => {
  // 读取文件
  fs.read(fd, buf, 0, 3, 0, (err, bytesRead, buffer) => {
    console.log(bytesRead)
    console.log(buffer)

    // 继续读取
    fs.read(fd, buf, 3, 3, 3, (err, bytesRead, buffer) => {
      console.log(bytesRead)
      console.log(buffer)
      console.log(buffer.toString())
    })
  })
})

// 3
// <Buffer 4e 6f 64 00 00 00>

// 3
// <Buffer 4e 6f 64 65 0d 0a>
// Node
```

###  文件写入-fs.write

fs.write(fd, buffer, offset, length, position, callback)

六个参数

1. fd：文件描述符，使用`fs.open` 打开成功后返回的；
2. buffer：一个 Buffer 对象，`v8` 引擎分配的一段内存，存储将要写入文件数据的 Buffer；
3. offset：整数，从 Buffer 缓存区读取数据的初始位置，以字节为单位；
4. length：整数，读取 Buffer 数据的字节数；
5. position：整数，写入文件初始位置；
6. callback：写入操作执行完成后回调函数，有三个参数 err（错误），bytesWritten（实际写入的字节数），buffer（被读取的缓存区对象），写入完成后执行。

```js
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
```

### 文件关闭-fs.close

fs.close(fd, callback)

1. 第一个参数：fd 文件`open`时传递的`文件描述符`
2. 第二个参数 callback 回调函数,回调函数有一个参数 err（错误），关闭文件后执行。

```js
const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname, 'input.txt')

fs.open(filePath, 'r', '0666', function(err, fd) {
  fs.close(fd, (err) => {
    console.log('关闭成功') // 关闭成功
  })
})

```

## 目录(文件夹)操作

### fs.mkdir 创建目录

fs.mkdir(path, [options], callback)

1. 第一个参数：path 目录路径
2. 第二个参数[options]，`recursive <boolean>` 默认值: false。 `mode <integer>` Windows 上不支持。默认值: 0o777。 可选的 options 参数可以是指定模式（权限和粘滞位）的整数，也可以是具有 mode 属性和 recursive 属性（指示是否应创建父文件夹）的对象。
3. 第三个参数回调函数,回调函数有一个参数 err（错误），关闭文件后执行。

demo:

```js
const fs = require('fs')

fs.mkdir('./mkdir', function(err) {
  if (err) return
  console.log('创建目录成功')
})

```

### fs.rmdir 删除目录

fs.rmdir(path, callback)

1. 第一个参数：path 目录路径
2. 第三个参数回调函数,回调函数有一个参数 err（错误），关闭文件后执行。

```js
const fs = require('fs')
fs.rmdir('./mkdir', function(err) {
  if (err) return
  console.log('删除目录成功')
})

```

### fs.readdir 读取目录

fs.readdir(path, [options], callback)

1. 第一个参数：path 目录路径
2. 第二个参数[options]可选的 options 参数可以是指定编码的字符串，也可以是具有 encoding 属性的对象，该属性指定用于传给回调的文件名的字符编码。 如果 encoding 设置为 'buffer'，则返回的文件名是 Buffer 对象。 如果 options.withFileTypes 设置为 true，则 files 数组将包含 fs.Dirent 对象。
3. 第三个参数回调函数,回调函数有两个参数，第一个 err（错误），第二个返回 的 data 为一个数组，包含该文件夹的所有文件，是目录中的文件名的数组（不包括 `'.'` 和 `'..'`）。

demo:



```js
const fs = require('fs');
fs.readdir('../fs', function(err, data) {
  if (err) return;
  //data为一个数组
  console.log('读取的数据为：' + data);
});
```

## 实战训练

### fs 模块如何实现文件拷贝

#### 小文件拷贝

```js
// 文件拷贝 将data.txt文件中的内容拷贝到copyData.txt
// 读取文件
const fileName1 = path.resolve(__dirname, 'data.txt')
fs.readFile(fileName1, function (err, data) {
    if (err) {
        // 出错
        console.log(err.message)
        return
    }
    // 得到文件内容
    var dataStr = data.toString()

    // 写入文件
    const fileName2 = path.resolve(__dirname, 'copyData.txt')
    fs.writeFile(fileName2, dataStr, function (err) {
        if (err) {
            // 出错
            console.log(err.message)
            return
        }
        console.log('拷贝成功')
    })
})

```

我们使用 readFile 和 writeFile 实现了一个 copy 函数，那个 copy 函数是将被拷贝文件的数据一次性读取到内存，一次性写入到目标文件中，这种针对小文件还好

#### 大文件拷贝

如果是一个大文件几百 M 一次性读取写入不现实，所以需要多次读取多次写入，接下来使用文件操作的高级方法对大文件和文件大小未知的情况实现一个 copy 函数。当然除了这种方式还有 stream 模块也可以实现，而且性能更好，但是这里就不再说明，本篇主要讲 fs 模块。

```js
// copy 方法
function copy(src, dest, size = 16 * 1024, callback) {
  // 打开源文件
  fs.open(src, 'r', (err, readFd) => {
    // 打开目标文件
    fs.open(dest, 'w', (err, writeFd) => {
      let buf = Buffer.alloc(size);
      let readed = 0; // 下次读取文件的位置
      let writed = 0; // 下次写入文件的位置

      (function next() {
        // 读取
        fs.read(readFd, buf, 0, size, readed, (err, bytesRead) => {
          readed += bytesRead;

          // 如果都不到内容关闭文件
          if (!bytesRead) fs.close(readFd, err => console.log('关闭源文件'));

          // 写入
          fs.write(writeFd, buf, 0, bytesRead, writed, (err, bytesWritten) => {
            // 如果没有内容了同步缓存，并关闭文件后执行回调
            if (!bytesWritten) {
              fs.fsync(writeFd, err => {
                fs.close(writeFd, err => return !err && callback());
              });
            }
            writed += bytesWritten;

            // 继续读取、写入
            next();
          });
        });
      })();
    });
  });
}

```

### 递归文件操作

一个线上库：[mkdirp](https://github.com/substack/node-mkdirp)

递归：要解决我们的问题就要先解决更小的相同的问题。

dir-a
├── dir-b
│   ├── dir-c
│   │   ├── dir-d
│   │   │   └── file-e.png
│   │   └── file-e.png
│   ├── file-c.js
│   └── file-d.txt
├── file-a.js
└── file-b.txt

查找模块：`find /asset/dir-a -name="file.*"`

```js
[
  'dir-a/dir-b/dir-c/dir-d/file-e.png',
  'dir-a/dir-b/dir-c/file-e.png',
  'dir-a/dir-b/file-c.js',
  'dir-a/dir-b/file-d.txt',
  'dir-a/file-a.js',
  'dir-a/file-b.txt',
]

```

```js
const fs = require('fs');
const join = require('path').join;

// 同步查找
exports.findSync = function (nameRe, startPath) {
  const results = [];

  function finder(path) {
    const files = fs.readdirSync(path);

    for (let i = 0; i < files.length; i++) {
      const fpath = join(path, files[i]);
      const stats = fs.statSync(fpath);

      if (stats.isDirectory()) { finder(fpath); }

      if (stats.isFile() && nameRe.test(files[i])) {
        results.push(fpath);
      }
    }
  }

  finder(startPath);
  return results;
};

// 异步查找
exports.find = function (nameRe, startPath, cb) { // cb 可以传入 console.log，灵活
  const results = [];
  let asyncOps = 0; // 2

  function finder(path) {
    asyncOps++;
    fs.readdir(path, function (er, files) {
      if (er) { return cb(er); }

      files.forEach(function (file) {
        const fpath = join(path, file);

        asyncOps++;
        fs.stat(fpath, function (er, stats) {
          if (er) { return cb(er); }

          if (stats.isDirectory()) finder(fpath);

          if (stats.isFile() && nameRe.test(file)) {
            results.push(fpath);
          }

          asyncOps--;
          if (asyncOps == 0) {
            cb(null, results);
          }
        });
      });

      asyncOps--;
      if (asyncOps == 0) {
        cb(null, results);
      }
    });
  }

  finder(startPath);
};

console.log(exports.findSync(/file.*/, `${__dirname}/dir-a`));
console.log(exports.find(/file.*/, `${__dirname}/dir-a`, console.log));

```

