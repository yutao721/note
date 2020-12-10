## webpack性能优化之dllPlugin

### 认识DLL

在介绍 [DllPlugin](https://webpack.js.org/plugins/dll-plugin/) 前先给大家介绍下 DLL。 用过 Windows 系统的人应该会经常看到以 `.dll` 为后缀的文件，这些文件称为**动态链接库**，在一个动态链接库中可以包含给其他模块调用的函数和数据。

要给 Web 项目构建接入动态链接库的思想，需要完成以下事情：

- 把网页依赖的基础模块抽离出来，打包到一个个单独的动态链接库中去。一个动态链接库中可以包含多个模块。
- 当需要导入的模块存在于某个动态链接库中时，这个模块不能被再次被打包，而是去动态链接库中获取。
- 页面依赖的所有动态链接库需要被加载。

为什么给 Web 项目构建接入动态链接库的思想后，会大大提升构建速度呢？ 原因在于包含大量复用模块的动态链接库只需要编译一次，在之后的构建过程中被动态链接库包含的模块将不会在重新编译，而是直接使用动态链接库中的代码。 由于动态链接库中大多数包含的是常用的第三方模块，例如 react、react-dom，只要不升级这些模块的版本，动态链接库就不用重新编译。

### 为什么要使用DllPlugin

通常来说，我们的代码都可以至少简单区分成**业务代码**和**第三方库**。如果不做处理，每次构建时都需要把所有的代码重新构建一次，耗费大量的时间。然后大部分情况下，很多第三方库的代码并不会发生变更（除非是版本升级），这时就可以用到dll：**把复用性较高的第三方模块打包到动态链接库中，在不升级这些库的情况下，动态库不需要重新打包，每次构建只重新打包业务代码**

### 基本用法

使用dll时，可以把构建过程分成dll构建过程和主构建过程（实质也就是如此），所以需要两个构建配置文件，例如叫做`webpack.config.js`和`webpack.dll.config.js`。

#### 1. 使用`DLLPlugin`打包需要分离到动态库的模块

Webpack 已经内置了对动态链接库的支持，需要通过2个内置的插件接入，它们分别是：

- DllPlugin 插件：用于打包出一个个单独的动态链接库文件。
- DllReferencePlugin 插件：用于在主要配置文件中去引入 DllPlugin 插件打包好的动态链接库文件。

配置`webpack.dll.config.js`文件：

```js
const path = require('path');
const DllPlugin = require('webpack/lib/DllPlugin');
module.exports = {
  mode: 'development',
  devtool: false,
  entry: { utils: ['isarray', 'is-promise'] },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'utils.dll.js',//打包后的文件名
    library: '_dll_utils'//打包后的变量名 var _dll_utils = ?
  },
  plugins: [
    new DllPlugin({
      name: '_dll_utils', // 需要和library保持一直
      path: path.join(__dirname, 'dist', 'utils.manifest.json') //描述动态链接库的 manifest.json 文件输出时的文件名称
    })
  ]
}
```

packjson 增加 script 脚本

```json
"scripts": {
  "dll": "webpack --config webpack.dll.config.js"
},
```

执行`npm run dll`，然后到指定的文件夹看输出：

1. `utils.dll.js`文件里是使用数组保存的模块，索引值就作为id；
2. `utils.manifest.json`文件里，是用来描述对应的dll文件里保存的模块

先来看下`utils.manifest.json`文件：

```json
{
  "name": "_dll_utils",
  "content": {
    "./node_modules/is-promise/index.js": {
      "id": "./node_modules/is-promise/index.js",
      "buildMeta": {
        "providedExports": true
      }
    },
    "./node_modules/isarray/index.js": {
      "id": "./node_modules/isarray/index.js",
      "buildMeta": {
        "providedExports": true
      }
    }
  }
}
```

其中name就对应了`webpack.dll.config.js`文件中的output.library字段，content中的id就对应了dll文件中模块的id。

utils.dll.js文件格式化之后的代码：

```js
var _dll_utils =
  (function(modules) {
    var installedModules = {};

    function __webpack_require__(moduleId) {
      if (installedModules[moduleId]) {
        return installedModules[moduleId].exports;
      }
      var module = installedModules[moduleId] = {
        i: moduleId,
        l: false,
        exports: {}
      };
      modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
      module.l = true;
      return module.exports;
    }

    return __webpack_require__(0);
  })
  ({
    './node_modules/_is-promise@4.0.0@is-promise/index.js':
      (function(module, exports) {
        module.exports = isPromise;
        module.exports.default = isPromise;

        function isPromise(obj) {
          return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
        }
      }),
    './node_modules/_isarray@2.0.5@isarray/index.js':
      (function(module, exports) {
        var toString = {}.toString;
        module.exports = Array.isArray || function(arr) {
          return toString.call(arr) == '[object Array]';
        };
      }),
    0:
      (function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__;
      })
  });
```

#### 2. 在主构建配置文件使用动态库文件

在`webpack.config`中使用dll要用到`DllReferencePlugin`,这个插件通过引用 dll 的 manifest 文件来把依赖的名称映射到模块的 id 上，之后再在需要的时候通过内置的 **webpack_require** 函数来 require 他们.

```js
const path = require('path');
const DllReferencePlugin = require('webpack/lib/DllReferencePlugin');
module.exports = {
    mode:'development',
    devtool:false,
    entry:'./src/index.js',
    output:{
        path:path.resolve(__dirname,'dist'),//输出目录
        filename:'bundle.js'               //打包后的文件名
    },
    plugins:[
        new DllReferencePlugin({
            manifest:require('./dist/utils.manifest.json')
        })
    ]
}
```

第一步产出的`manifest`文件就用在这里，给主构建流程作为查找dll的依据：**DllReferencePlugin去 manifest.json 文件读取 name 字段的值，把值的内容作为在从全局变量中获取动态链接库中内容时的全局变量名**，因此：在 webpack_dll.config.js 文件中，DllPlugin 中的 name 参数必须和 output.library 中保持一致。

#### 3. 在入口文件引入dll文件

生成的dll暴露出的是全局函数，因此还需要在入口文件里面引入对应的dll文件。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script src="utils.dll.js"></script>
    <script src="bundle.js"></script>
</body>
</html>
```

在使用isarray，is-promise方法的时候，require('isarray')的时候就会默认去找dll文件中对应的模块。

### 作用

首先从前面的介绍，至少可以看出dll的两个作用

1. 分离代码，业务代码和第三方模块可以被打包到不同的文件里，这个有几个好处：
   - 避免打包出单个文件的大小太大，不利于调试
   - 将单个大文件拆成多个小文件之后，一定情况下有利于加载（不超出浏览器一次性请求的文件数情况下，并行下载肯定比串行快）
2. 提升构建速度。第三方库没有变更时，由于我们只构建业务相关代码，相比全部重新构建自然要快的多。

## 注意事项

从前面可以看到dll带来的优点，但**并不意味着我们就应该把除业务代码外的所有代码全部都丢到dll中**，举一个例子：
1.对于`lodash`这种第三方库，正确的用法是只去`import`所需的函数（用什么引什么），例如：

```
// 正确用法
import isPlainObject from 'lodash/isPlainObject'

//错误用法
import { isPlainObject } from 'lodash'
```

这两种写法的差别在于，打包时webpack会根据引用去打包依赖的内容，所以第一种写法，webpack只会打包lodash的isPlainObject库，第二种写法却会打包整个`lodash`。现在假设在项目中只是用到不同模块对lodash里的某几个函数并且没有对于某个函数重复使用非常多次，那么这时候把`lodash`添加到dll中，带来的收益就并不明显，反而导致2个问题：

1. 由于打包了整个`lodash`，而导致打包后的文件**总大小**（注意是总大小）比原先还要大
2. 在dll打包太多内容也需要耗费时间，虽然我们一般只在第三方模块更新之后才进行重新预编译（就是dll打包的过程），但是如果这个时间太长的话体验也不好。

### dllPlugin实现

既然是一个插件，就按照webpack插件的写法去写就好了

```js

let DllEntryPlugin = require('./DllEntryPlugin');
const LibManifestPlugin = require('./LibManifestPlugin');
class DllPlugin {
    constructor(options){
        this.options = options;
    }
    //注册插件
    apply(compiler){
        //配置入口的
        //context项目的根目录  entry入口文件的路径={utils:['isarray','is-promise']}
        compiler.hooks.entryOption.tap('DllPlugin',(context,entry)=>{
            Object.keys(entry).forEach(name=>{
                //context根目录 entry[name]=['isarray','is-promise']  name=utils
                new DllEntryPlugin(context,entry[name],name).apply(compiler)
            });
            //此处一定要返回true,因为entryOption是一个SyncBailHook
            return true;
        });
        new LibManifestPlugin(this.options).apply(compiler);
    }
}
module.exports = DllPlugin;
```

`entryOption`是一个SyncBailHook，其参数有2个context,entry，具体查看 [entryoption](https://webpack.js.org/api/compiler-hooks/#entryoption)

DllPlugin其实处理了以下操作

- `DllEntryPlugin` 对入口文件进行劫持拦截