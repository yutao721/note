
>rollup（下一代ES模块捆绑器）是什么请查看[官网介绍]([rollupjs.org/guide/en/](http://rollupjs.org/guide/en/))

>注意不要看Rollup.js [中文网](https://www.rollupjs.com/)，因为这是别人翻译的，不是实时更新的，我之前看这个老是安装出错

**之前在网络上查找过相关的rollup使用，有些文章很概念不易理解，没有具体步骤；有些文章步骤不够详细，没有来龙去脉。所以打算整理个文章给后来者减少弯路。我保证此文真的是手把手教学，很接地气，因为我是边建工程边使用边写文章，不是某个项目里的代码，所以代码清晰，没有冗余。**

# 为什么不用webpack

一说到打包工具大家都想到webpack，因为我们用到的vue，react脚手架都是基于webpack的，他有各种loader，帮助我们解决各种问题，这针对于开发项目是很有效的，但是他生成代码有很多不是我们所写的逻辑代码, 比如一些他自有的模块加载功能:

![](https://gitee.com/yutao618/images/raw/master/images/ThirdPartyImage16196034788090.png)

如果你要开发js库，那webpack的繁琐和打包后的文件体积就不太适用了。有需求就有工具，所以rollup的产生就是针对开发js库的。

rollup生成代码只是把我们的代码转码成目标js并无其他,同时如果需要,他可以同时帮我们生成支持umd/commonjs/es的js代码,vue/react/angular都在用他作为打包工具。查看他们的官网代码都可以看到rollup的影子。

# 快速入门

## 1.新建工程

新建一个空文件夹，比如rollupDemo,执行项目初始化

```shell
npm init -y
```



## 2.安装rollup

用vscode打开这个工程，执行命令安装

```shell
npm install rollup --save-dev
```

执行后我们发现项目自动生产了一些文件，并看到package包里有了rollup。

### 添加gitignore，忽略不用上传的文件

```
.DS_Store
node_modules
/dist


# local env files
.env.local
.env.*.local

# Log files
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*

# Editor directories and files
.idea
.vscode
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?

```



## 3.创建rollup.config.js

>我们也可以不用配置文件直接用cli命令来打包，但是如果添加更多的选项，这种命令行的方式就显得麻烦。为此，我们可以创建配置文件来囊括所需的选项。配置文件由 JavaScript 写成，比 CLI 更加灵活。（cli命令打包请看官网介绍）

配置文件是一个ES6模块，它对外暴露一个对象，这个对象包含了一些Rollup需要的一些选项。通常，我们把这个配置文件叫做`rollup.config.js`，它通常位于项目的根目录,下面是一些配置选项

```
// rollup.config.js
export default {
  // 核心选项
  input,     // 必须
  external,
  plugins,

  // 额外选项
  onwarn,

  // danger zone
  acorn,
  context,
  moduleContext,
  legacy

  output: {  // 必须 (如果要输出多个，可以是一个数组)
    // 核心选项
    file,    // 必须
    format,  // 必须
    name,
    globals,

    // 额外选项
    paths,
    banner,
    footer,
    intro,
    outro,
    sourcemap,
    sourcemapFile,
    interop,

    // 高危选项
    exports,
    amd,
    indent
    strict
  },
};
```

rollup.config.js当前配置

```js
export default {
  input:'./src/main.js',//入口文件
  output:{
    file:'./dist/bundle.js',//打包后的存放文件
    format:'cjs',//输出格式 amd es6 iife umd cjs
    name:'bundleName'//如果iife,umd需要指定一个全局变量
  },
  plugins:[
    resolve(),
    commonjs()
  ]
}
```



## 4.编写要打包的文件

### 1.新建src文件夹，并新建main.js(应用程序入口)

```js
import { name } from './modules/myModole';
console.log('hello' + name);
```



### 2.新建modules文件夹（代表模块文件）

>modules的作用的区分模块和主入口，modules中可根据你自己的js库设计文件目录结构。

modules/myModole 文件内容

```js
export const name = 'jiaHang'
export const age = 18

```



## 5.编写package.json中的打包命令

在package.json中加一条script语句

```json
{
  "name": "rollupDemo",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "build": "rollup --config"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "rollup": "^2.45.2",
  }
}

```



## 6.执行npm run build 查看文件输出结果

```js
'use strict';

const name = 'jiaHang';

console.log('hello' + name);

```



>我们看到输出的结果十分的清晰，没有像webpack那样多余的代码，而且myMoudule中的有没有被打包过来，这就是rollup最大的亮点tree-shaking,这个我们稍后再说。

## 7.使用打包后的文件

在src下面新建一个index.html,并引入打包之后的bundle.js就可以看到控制台中打印的log



>打开这个网页后我们看到弹窗内容Hello from Rollup

# 常用配置

## 1.input

入口文件地址

## 2.output

```
output:{
    file:'bundle.js', // 输出文件
    format: 'cjs,  //  五种输出格式：amd /  es6 / iife / umd / cjs
    name:'A',  //当format为iife和umd时必须提供，将作为全局变量挂在window(浏览器环境)下：window.A=...
    sourcemap:true  //生成bundle.map.js文件，方便调试
}
```

## 3.plugins

各种插件使用的配置

## 4.external

```
external:['lodash'] //告诉rollup不要将此lodash打包，而作为外部依赖
```

## 5.global

```
global:{
    'jquery':'$' //告诉rollup 全局变量$即是jquery
}
```

# 深入使用

## 1.使用Babel

>为了正确解析我们的模块并使其与旧版浏览器兼容，我们应该包括babel来编译输出。许多开发人员在他们的项目中使用 Babel ，以便他们可以使用未被浏览器和 Node.js 支持的将来版本的 JavaScript 特性。

### 1.1 安装 rollup-plugin-babel

```
npm install rollup-plugin-babel --save-dev
```

### 1.2 配置rollup.config.js

```js
import babel from 'rollup-plugin-babel'

export default {
  input: './src/main',
  output: {
    file: './dist/bundle.js',
    format: 'cjs',
    name: 'bundleName'
  },
  plugins: [
    babel({
      exclude: 'node_modules/**'
    })
  ]
}
```

### 1.3 添加Babel配置文件.babelrc

>在src文件夹下添加.babelrc

```json
{
  "presets": [
    [
      "@babel/env",
      {
        "modules": false // 设置为false,否则babel会在rollup有机会执行其操作之前导致我们的模块转化为commonjs
      }
    ]
  ]
}

```

这个设置有一些不寻常的地方。

>首先，我们设置 "modules": false ，否则 Babel 会在 Rollup 有机会做处理之前，将我们的模块转成 CommonJS ，导致 Rollup 的一些处理失败。

>第二，我们将 .babelrc 文件放在 src 中，而不是根目录下。 这允许我们对于不同的任务有不同的 .babelrc 配置，比如像测试，如果我们以后需要的话 - 通常为单独的任务单独配置会更好。

### 1.4 安装@babel/core 和 @babel/preset-env

>@babel/core是babel的核心，我们看到babelrc配置了 preset env，所以要安装这两个插件

```
npm install @babel/core @babel/preset-env --save-dev
```

**最后运行npm run build,我们看到打包后出来的文件内容经过babel转换后有es6语法变成了es5语法**

```js
'use strict';

var name = 'jiaHang';

console.log('hello' + name);
```

## 2.node模块的引用

>在某些时候，您的项目可能取决于从NPM安装到node_modules文件夹中的软件包。

与Webpack和Browserify等其他捆绑软件不同，Rollup不知道如何``开箱即用''如何处理这些依赖项-我们需要添加一些插件配置。

>rollup.js编译源码中的模块引用默认只支持 ES6+的模块方式import/export。然而大量的npm模块是基于CommonJS模块方式，这就导致了大量 npm 模块不能直接编译使用。所以辅助rollup.js编译支持 npm模块和CommonJS模块方式的插件就应运而生。

*  rollup-plugin-node-resolve 插件允许我们加载第三方模块
*  @rollup/plugin-commons 插件将它们转换为ES6版本

### 2.1 安装@rollup/plugin-node-resolve和@rollup/plugin-commonjs

```
npm install @rollup/plugin-node-resolve @rollup/plugin-commonjs --save-dev
```

### 2.2 配置rollup.config.js



### 2.3 使用一个第三方库lodash

```
npm install lodash --save-dev
```

>打开src/main.js使用lodash

```js
import { name } from './modules/myModole';
import _ from 'lodash'
console.log('hello' + name);
const arr = _.concat([1, 2], 3, 4, [5]);
console.log(arr);

```



执行npm run build 后我们看打包后的文件多了很多内容，这些代码就是lodash的代码，被我们打包整合进来了。



### 2.4 额外补充

>如果你不想第三方库被打包进来，而可以在外面引入，配合使用的话，可以在rollup.config.js中配置external

```js
import babel from 'rollup-plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-typescript'

export default {
  input: './src/main',
  output: {
    file: './dist/bundle.js',
    format: 'cjs',
    name: 'bundleName'
  },
  plugins: [
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**'
    })
  ],
  external: ['lodash']
}

```



>执行npm run build 后发现打包出来的内容变少了

​		

```js
'use strict';

var _ = require('lodash');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var ___default = /*#__PURE__*/_interopDefaultLegacy(_);

var name = 'jiaHang';

console.log('hello' + name);

var arr = ___default['default'].concat([1, 2], 3, 4, [5]);

console.log(arr);

```



>然后页面里使用也稍作修改，script引入lodash，使用iife打包出来的文件（因为我们这里使用页面引用的方式），查看页面可以正常输出。



## 3.使用typescript

>我们在开发大型项目时，一般都会使用typescript来增强代码的可维护性。所以在rollup中使用typescript也是必不可少的。

### 3.1 安装@rollup/plugin-typescript

>我之前使用的时候用的是rollup-plugin-typescript，今天写这篇文章时发现此插件不维护更新了，模块移植到了@rollup/plugin-typescript

```
npm install @rollup/plugin-typescript --save-dev
```

>安装后发现有报错,提示我们要安装tslib和typescript

### 3.2 安装tslib 和 typescript

```
npm install tslib typescript --save-dev
```



### 3.3 配置rollup.config.js

>引入使用插件

```js
import babel from 'rollup-plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-typescript'
import typescript from '@rollup/plugin-commonjs'

export default {
  input: './src/main',
  output: {
    file: './dist/bundle.js',
    format: 'cjs',
    name: 'bundleName'
  },
  plugins: [
    typescript(),
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**'
    })
  ],
  external: ['lodash']
}
```



### 3.4 配置tsconfig.json

>如果不配置直接运行npm run build 会有提示让我们新建tsconfig配置,简单配置下tsconfig

```json
{
  "compilerOptions": {
    "lib": [
      "es6"
    ],
    "module": "ESNext",
    "allowJs": true
  },
  "exclude": [
    "node_modules"
  ],
  "include": [
    "src/**/*"
  ]
}

```



### 3.5 编写ts文件

Greeter.ts

```js
class Greeter {
  greeter: string;

  constructor(message: string) {
    this.greeter = message
  }

  greet() {
    console.log('hello ts');
  }
}

export default Greeter
```

main.js

```
import { name } from './modules/myModole';
import Greeter from './modules/Greeter';
import _ from 'lodash';

const a = new Greeter('ss');
a.greet()
console.log('hello' + name);
const arr = _.concat([1, 2], 3, 4, [5]);
console.log(arr);

```



## 4.压缩代码

>为了时代码体积更小，我们都会使用代码压缩插件

### 4.1 安装rollup-plugin-terser

>terser是什么，它是适用于ES6 +的JavaScript解析器，mangler和压缩器工具包

>我们比较熟悉的是uglify，因为我们在webpack中使用过，rollup中也有rollup-plugin-uglify插件

![](https://gitee.com/yutao618/images/raw/master/images/ThirdPartyImage161960347880930.png)

>我们看到 注意：uglify-js只能翻译es5语法。如果要转译es6+语法，请改用terser

>所以我们使用rollup-plugin-terser

```
npm install rollup-plugin-terser --save-dev
```

### 4.2 配置rollup.config.js

```js
import babel from 'rollup-plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-typescript'
import typescript from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'

export default {
  input: './src/main',
  output: {
    file: './dist/bundle.js',
    format: 'cjs',
    name: 'bundleName'
  },
  plugins: [
    typescript(),
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**'
    })
    terser()
  ],
  external: ['lodash']
}
```



## 5.编译css

>开发项目我们用webpack，开发js类库，rollup比webpack强。开发js类库一般是不写css，如果你要写大量的css，那可能你开发的是项目，优先选择webpack，webpack里也有开发library的配置。

>如果你的js类库里还是必不可少要写些css的话，rollup也是有插件编译css的

### 5.1 安装rollup-plugin-postcss

```
npm install rollup-plugin-postcss --save-dev
```

### 5.2 配置rollup.config.js

>引入postcss插件并使用，先注释掉压缩插件，让我们能看看打包出来的css会是什么样的。

```

import babel from 'rollup-plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-typescript'
import typescript from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import postcss from 'rollup-plugin-postcss'

export default {
  input: './src/main',
  output: {
    file: './dist/bundle.js',
    format: 'cjs',
    name: 'bundleName'
  },
  plugins: [
    typescript(),
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**'
    }),
    // terser(),
    postcss()
  ],
  external: ['lodash']
}

```



### 5.3 编写使用css

>1.在src目录下写入style.css文件

![](https://gitee.com/yutao618/images/raw/master/images/ThirdPartyImage161960347880934.png)

>2.main.js中写入相关的css使用代码

![](https://gitee.com/yutao618/images/raw/master/images/ThirdPartyImage161960347880935.png)

>3.执行npm run build 查看打包后的文件内容。我们看到css通过这块代码动态引入了

![](https://gitee.com/yutao618/images/raw/master/images/ThirdPartyImage161960347880936.png)

>4.打开页面查看html代码

![](https://gitee.com/yutao618/images/raw/master/images/ThirdPartyImage161960347880937.png)

>使用less等预编译也是可以的，如有需要，向我提问我再更新。

## 6.开启本地服务器

>在实际开发过程中，我们肯定要运行代码，查看页面，这时有个本地服务器就很重要，这样可以调试代码。

### 6.1 安装rollup-plugin-serve

```
npm install rollup-plugin-serve --save-dev
```

### 6.2 配置rollup.config.js

记得配置sourcemap: true,这样调试代码方便。

```js
import babel from 'rollup-plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-typescript'
import typescript from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import postcss from 'rollup-plugin-postcss'
import serve from 'rollup-plugin-serve'

export default {
  input: './src/main',
  output: {
    file: './dist/bundle.js',
    format: 'cjs',
    name: 'bundleName',
    sourcemap: true
  },
  plugins: [
    typescript(),
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**'
    }),
    terser(),
    postcss(),
    serve({
      open: true,
      contentBase: 'dist'
    })
  ],
  external: ['lodash']
}

```



## 7.开启热更新

>现在本地服务器有了，但是每次修改代码，还要重新启动才能生效，很不方便，所以需要热更新。

### 7.1 安装rollup-plugin-livereload

```
npm install rollup-plugin-livereload --save-dev
```

### 7.2 配置rollup.config.js

```js
import babel from 'rollup-plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-typescript'
import typescript from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import postcss from 'rollup-plugin-postcss'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'

export default {
  input: './src/main',
  output: {
    file: './dist/bundle.js',
    format: 'cjs',
    name: 'bundleName',
    sourcemap: true
  },
  plugins: [
    typescript(),
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**'
    }),
    terser(),
    postcss(),
    livereload(),
    serve({
      open: true,
      contentBase: 'dist'
    })
  ],
  external: ['lodash']
}
```

### 7.3增加script语句

```json
{
  "name": "rollupDemo",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "build": "rollup --config",
    "dev": "rollup --config -w"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@babel/core": "^7.13.16",
    "@babel/preset-env": "^7.13.15",
    "@rollup/plugin-commonjs": "^18.0.0",
    "@rollup/plugin-node-resolve": "^11.2.1",
    "@rollup/plugin-typescript": "^8.2.1",
    "lodash": "^4.17.21",
    "postcss": "^8.2.13",
    "rollup": "^2.45.2",
    "rollup-plugin-babel": "^4.4.0",
    "rollup-plugin-livereload": "^2.0.0",
    "rollup-plugin-postcss": "^4.0.0",
    "rollup-plugin-serve": "^1.1.0",
    "rollup-plugin-terser": "^7.0.2",
    "tslib": "^2.2.0",
    "typescript": "^4.2.4"
  }
}
```

## 8.区分开发环境和生产环境

>在开发环境我们需要sourcemap开启，配置热更新和本地服务，在生产环境我们需要sourcemap关闭，不需要热更新和本地服务，需要代码压缩等，所以需要区分。

将rollup.config.js拆分成两个rollup.config.dev.js和rollup.config.build.js,再结合我们项目实际情况来编写配置文件。



## 9.相关rollup插件地址

- [awesome](https://github.com/rollup/awesome)
- [https://github.com/rollup/plugins](https://github.com/rollup/plugins)

# 总结

rollup基本使用差不多都是这样了，有很多插件都能解决相关配置需求，具体可以参考下文档，接下来我们就需要深入的去理解rollup的打包机制是怎么样。