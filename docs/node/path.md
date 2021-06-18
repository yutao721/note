## 前言

**path**模块是Node的核心模块之一，特别是在前端项目构建，打包等操作中，是使用比较频繁的API。

## node 中的路径分类

node 中的路径大致分 5 类，`__dirname`,`__filename`,`process.cwd()`,`./`,`../`,其中`__dirname`,`__filename`,`process.cwd()`绝对路径

- `__dirname`： 获得当前执行文件所在目录的完整目录名
- `__filename`： 获得当前执行文件的带有完整绝对路径的文件名
- `process.cwd()`：获得当前执行node命令时候的文件夹目录名
- `./`： 不使用require时候，`./`与`process.cwd()`一样，使用`require`时候，与`__dirname`一样

> 那么关于 `./`的结论是：
>
> 在 `require()`中使用是跟`__dirname` 的效果相同，不会因为启动脚本的目录不一样而改变，在其他情况下跟 `process.cwd()` 效果相同，是相对于启动脚本所在目录的路径。
>
> 只有在 require() 时才使用相对路径(./, ../) 的写法，其他地方一律使用绝对路径，如下：

```javascript
// 当前目录下
path.dirname(__filename) + '/path.js'
// 相邻目录下
path.resolve(__dirname, '../regx/regx.js')
```

前面讲解了路径的相关比较，接下来单独聊聊 path 这个模块，这个模块在很多地方比较常用，所以，对于我们来说，掌握他，对我们以后的发展更有利，不用每次看 webpack 的配置文件还要去查询一下这个 api 是干什么用的，很影响我们的效率。

## path.dirname

`path.dirname(path)` 方法返回 `path` 的目录名，类似于 Unix `dirname` 命令,尾随的目录分隔符被忽略。

```js
path.dirname('/foo/bar/baz/asdf/quux');
// 返回: '/foo/bar/baz/asdf'
```

## path.extname

`path.extname(path)` 方法返回 `path` 的扩展名，即 `path` 的最后一部分中从最后一次出现的 `.`（句点）字符到字符串的结尾。 如果 `path` 的最后一部分中没有 `.`，或者除了 `path` 的基本名称的第一个字符之外没有 `.` 个字符，则返回空字符串。

```js
path.extname('index.html');
// 返回: '.html'

path.extname('index.coffee.md');
// 返回: '.md'

path.extname('index.');
// 返回: '.'

path.extname('index');
// 返回: ''

path.extname('.index');
// 返回: ''

path.extname('.index.md');
// 返回: '.md'
```

## path.basename

path.basename(path[, ext])方法返回 `path` 的最后一部分,接收两个参数，第一个是`path`，第二个是`ext`(可选参数)，当输入第二个参数的时候，打印结果不出现后缀名。

```js
path.basename('/foo/bar/baz/asdf/quux.html');
// 返回: 'quux.html'

path.basename('/foo/bar/baz/asdf/quux.html', '.html');
// 返回: 'quux'
```

尽管 Windows 通常以不区分大小写的方式处理文件名（包括文件扩展名），但此函数不会。 例如，`C:\\foo.html` 和 `C:\\foo.HTML` 指的是同一个文件，但 `basename` 将扩展名视为区分大小写的字符串：

```js
path.win32.basename('C:\\foo.html', '.html');
// 返回: 'foo'

path.win32.basename('C:\\foo.HTML', '.html');
// 返回: 'foo.HTML'
```

##  path.normalize

规范化路径，把不规范的路径规范化

```js
path.normalize('/path///example/index.js') //  /path/example/index.js
```

## path.isAbsolute

`path.isAbsolute()` 方法确定 `path` 是否为绝对路径。

```js
path.isAbsolute('/foo/bar'); // true
path.isAbsolute('/baz/..');  // true
path.isAbsolute('qux/');     // false
path.isAbsolute('.');        // false
```

## path.parse

path.parse(path)返回的是一个对象.

```js
path.parse('/path/example/index.js')

/*
 { root: '/',
  dir: '/path/example',
  base: 'index.js',
  ext: '.js',
  name: 'index' }
*/

```

- root：代表根目录
- dir：代表文件所在的文件夹
- base：代表整一个文件
- name：代表文件名
- ext: 代表文件的后缀名

## path.format

`path.format()` 方法从对象返回路径字符串。 这与 `path.parse()` 相反

```js
path.format({
  root: '/',
  dir: '/path/example',
  base: 'index.js',
  ext: '.js',
  name: 'index'
}) // /path/example/index.js

```

## path.join

path.join([...paths])，传入的参数是字符串的路径片段，可以是一个，也可以是多个。返回的是一个拼接好的路径，但是根据平台的不同，他会对路径进行不同的规范化，举个例子，`Unix`系统是`/`，`Windows`系统是`\`，那么你在两个系统下看到的返回结果就不一样。如果返回的路径字符串长度为零，那么他会返回一个`.`，代表当前的文件夹。如果传入的参数中有不是字符串的，那就直接会报错

```js
path.join('/path', 'example', './index.js') // /path/example/index.js
```

## path.resolve

path.resolve([...paths])

```js
const path = require('path')
console.log(path.resolve('/foo/bar', '/bar/faa', '..', 'a/../c'))
// /bar/c
```

path.resolve 就相当于是 shell 下面的`cd`操作，从左到右运行一遍`cd path`命令，最终获取的绝对路径/文件名，这个接口所返回的结果了。但是`resolve`操作和`cd`操作还是有区别的，`resolve`的路径可以没有，而且最后进入的可以是文件。具体`cd`步骤如下

```js
cd /foo/bar/    //这是第一步, 现在的位置是/foo/bar/
cd /bar/faa     //这是第二步，这里和第一步有区别，他是从/进入的，也就时候根目录，现在的位置是/bar/faa
cd ..       //第三步，从faa退出来，现在的位置是 /bar
cd a/../c   //第四步，进入a，然后在推出，在进入c，最后位置是/bar/c

```

**如果没有传入 `path` 片段，则 `path.resolve()` 将返回当前工作目录的绝对路径**

## path.relative

path.relative(from, to) 获取 from 到 to 的相对路径。,如果 from、to 指向同个路径，那么，返回空字符串,如果 from、to 中任一者为空，那么，返回当前工作路径.

```js
path.relative('/path/example/index.js', '/path') // ../..
```

## 总结

关于路径的知识就说到这里，基础很重要的，既能节约开发时间，又能减少报错。