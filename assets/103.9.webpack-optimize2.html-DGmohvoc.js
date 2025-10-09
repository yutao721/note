import{_ as n,c as a,a as e,o as l}from"./app-CD1YpnS1.js";const i={};function p(c,s){return l(),a("div",null,[...s[0]||(s[0]=[e(`<h2 id="_1-提取css" tabindex="-1"><a class="header-anchor" href="#_1-提取css"><span>1. 提取CSS</span></a></h2><ul><li>因为CSS的下载和JS可以并行,当一个HTML文件很大的时候，我们可以把CSS单独提取出来加载</li></ul><h3 id="_1-1-安装" tabindex="-1"><a class="header-anchor" href="#_1-1-安装"><span>1.1 安装</span></a></h3><ul><li><a href="https://github.com/webpack-contrib/mini-css-extract-plugin" target="_blank" rel="noopener noreferrer">mini-css-extract-plugin</a></li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">npm install  mini-css-extract-plugin --save-dev</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_1-2-webpack-config-js" tabindex="-1"><a class="header-anchor" href="#_1-2-webpack-config-js"><span>1.2 webpack.config.js</span></a></h3><p>webpack.config.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">const path = require(&#39;path&#39;);</span>
<span class="line">const HtmlWebpackPlugin = require(&#39;html-webpack-plugin&#39;);</span>
<span class="line">+const MiniCssExtractPlugin = require(&#39;mini-css-extract-plugin&#39;);</span>
<span class="line">module.exports = {</span>
<span class="line">  mode: &#39;development&#39;,</span>
<span class="line">  devtool: false,</span>
<span class="line">  entry: &#39;./src/index.js&#39;,</span>
<span class="line">  output: {</span>
<span class="line">    path: path.resolve(__dirname, &#39;dist&#39;),</span>
<span class="line">    filename: &#39;[name].js&#39;,</span>
<span class="line">+    publicPath: &#39;/&#39;</span>
<span class="line">  },</span>
<span class="line">  module: {</span>
<span class="line">    rules: [</span>
<span class="line">      { test: /\\.txt$/, use: &#39;raw-loader&#39; },</span>
<span class="line">+      { test: /\\.css$/, use: [MiniCssExtractPlugin.loader, &#39;css-loader&#39;] },</span>
<span class="line">+      { test: /\\.less$/, use: [MiniCssExtractPlugin.loader, &#39;css-loader&#39;, &#39;less-loader&#39;] },</span>
<span class="line">+      { test: /\\.scss$/, use: [MiniCssExtractPlugin.loader, &#39;css-loader&#39;, &#39;sass-loader&#39;] },</span>
<span class="line">       {</span>
<span class="line">        test: /\\.(jpg|png|gif|bmp|svg)$/,</span>
<span class="line">        type:&#39;asset/resource&#39;,</span>
<span class="line">        generator:{</span>
<span class="line">          filename:&#39;images/[hash][ext]&#39;</span>
<span class="line">        }</span>
<span class="line">      }</span>
<span class="line">    ]</span>
<span class="line">  },</span>
<span class="line">  plugins: [</span>
<span class="line">    new HtmlWebpackPlugin({ template: &#39;./src/index.html&#39; }),</span>
<span class="line">+   new MiniCssExtractPlugin({</span>
<span class="line">+      filename: &#39;[name].css&#39;</span>
<span class="line">+   })</span>
<span class="line">  ]</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-指定图片和css目录" tabindex="-1"><a class="header-anchor" href="#_2-指定图片和css目录"><span>2 指定图片和CSS目录</span></a></h2><h3 id="_2-1-webpack-config-js" tabindex="-1"><a class="header-anchor" href="#_2-1-webpack-config-js"><span>2.1 webpack.config.js</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">const path = require(&#39;path&#39;);</span>
<span class="line">const HtmlWebpackPlugin = require(&#39;html-webpack-plugin&#39;);</span>
<span class="line">const MiniCssExtractPlugin = require(&#39;mini-css-extract-plugin&#39;);</span>
<span class="line">module.exports = {</span>
<span class="line">  mode: &#39;development&#39;,</span>
<span class="line">  devtool: false,</span>
<span class="line">  entry: &#39;./src/index.js&#39;,</span>
<span class="line">  output: {</span>
<span class="line">    path: path.resolve(__dirname, &#39;dist&#39;),</span>
<span class="line">    filename: &#39;[name].js&#39;,</span>
<span class="line">    publicPath: &#39;/&#39;</span>
<span class="line">  },</span>
<span class="line">  module: {</span>
<span class="line">    rules: [</span>
<span class="line">      { test: /\\.txt$/, use: &#39;raw-loader&#39; },</span>
<span class="line">      { test: /\\.css$/, use: [MiniCssExtractPlugin.loader, &#39;css-loader&#39;] },</span>
<span class="line">      { test: /\\.less$/, use: [MiniCssExtractPlugin.loader, &#39;css-loader&#39;, &#39;less-loader&#39;] },</span>
<span class="line">      { test: /\\.scss$/, use: [MiniCssExtractPlugin.loader, &#39;css-loader&#39;, &#39;sass-loader&#39;] },</span>
<span class="line">      {</span>
<span class="line">        test: /\\.(jpg|png|gif|bmp|svg)$/,</span>
<span class="line">        type:&#39;asset/resource&#39;,</span>
<span class="line">        generator:{</span>
<span class="line">          filename:&#39;images/[hash][ext]&#39;</span>
<span class="line">        }</span>
<span class="line">      }</span>
<span class="line">    ]</span>
<span class="line">  },</span>
<span class="line">  plugins: [</span>
<span class="line">    new HtmlWebpackPlugin({ template: &#39;./src/index.html&#39; }),</span>
<span class="line">    new MiniCssExtractPlugin({</span>
<span class="line">+      filename: &#39;css/[name].css&#39;</span>
<span class="line">    }),</span>
<span class="line">  ]</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-压缩js、css和html" tabindex="-1"><a class="header-anchor" href="#_3-压缩js、css和html"><span>3. 压缩JS、CSS和HTML</span></a></h3><ul><li><a href="https://www.npmjs.com/package/optimize-css-assets-webpack-plugin" target="_blank" rel="noopener noreferrer">optimize-css-assets-webpack-plugin</a>是一个优化和压缩CSS资源的插件</li><li><a href="https://www.npmjs.com/package/terser-webpack-plugin" target="_blank" rel="noopener noreferrer">terser-webpack-plugin</a>是一个优化和压缩JS资源的插件</li></ul><p>webpack.config.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">const path = require(&#39;path&#39;);</span>
<span class="line">const HtmlWebpackPlugin = require(&#39;html-webpack-plugin&#39;);</span>
<span class="line">const MiniCssExtractPlugin = require(&#39;mini-css-extract-plugin&#39;);</span>
<span class="line">+const OptimizeCssAssetsWebpackPlugin = require(&#39;optimize-css-assets-webpack-plugin&#39;);</span>
<span class="line">+const TerserPlugin = require(&#39;terser-webpack-plugin&#39;);</span>
<span class="line"></span>
<span class="line">module.exports = {</span>
<span class="line">+  mode: &#39;none&#39;,</span>
<span class="line">  devtool: false,</span>
<span class="line">  entry: &#39;./src/index.js&#39;,</span>
<span class="line">+  optimization: {</span>
<span class="line">+    minimize: true,</span>
<span class="line">+    minimizer: [</span>
<span class="line">+      new TerserPlugin(),</span>
<span class="line">+    ],</span>
<span class="line">+  },</span>
<span class="line">  output: {</span>
<span class="line">    path: path.resolve(__dirname, &#39;dist&#39;),</span>
<span class="line">    filename: &#39;[name].js&#39;,</span>
<span class="line">    publicPath: &#39;/&#39;,</span>
<span class="line">  },</span>
<span class="line">  devServer: {</span>
<span class="line">    contentBase: path.resolve(__dirname, &#39;dist&#39;),</span>
<span class="line">    compress: true,</span>
<span class="line">    port: 8080,</span>
<span class="line">    open: true,</span>
<span class="line">  },</span>
<span class="line">  module: {</span>
<span class="line">    rules: [</span>
<span class="line">      {</span>
<span class="line">        test: /\\.jsx?$/,</span>
<span class="line">        loader: &#39;eslint-loader&#39;,</span>
<span class="line">        enforce: &#39;pre&#39;,</span>
<span class="line">        options: { fix: true },</span>
<span class="line">        exclude: /node_modules/,</span>
<span class="line">      },</span>
<span class="line">      {</span>
<span class="line">        test: /\\.jsx?$/,</span>
<span class="line">        use: {</span>
<span class="line">          loader: &#39;babel-loader&#39;,</span>
<span class="line">          options: {</span>
<span class="line">            presets: [[</span>
<span class="line">              &#39;@babel/preset-env&#39;,</span>
<span class="line">              {</span>
<span class="line">                useBuiltIns: &#39;usage&#39;</span>
<span class="line">                corejs: {</span>
<span class="line">                  version: 3</span>
<span class="line">                },</span>
<span class="line">                targets: {</span>
<span class="line">                  chrome: &#39;60&#39;,</span>
<span class="line">                  firefox: &#39;60&#39;,</span>
<span class="line">                  ie: &#39;9&#39;,</span>
<span class="line">                  safari: &#39;10&#39;,</span>
<span class="line">                  edge: &#39;17&#39;,</span>
<span class="line">                },</span>
<span class="line">              },</span>
<span class="line">            ], &#39;@babel/preset-react&#39;],</span>
<span class="line">            plugins: [</span>
<span class="line">              [&#39;@babel/plugin-proposal-decorators&#39;, { legacy: true }],</span>
<span class="line">              [&#39;@babel/plugin-proposal-class-properties&#39;, { loose: true }],</span>
<span class="line">            ],</span>
<span class="line">          },</span>
<span class="line">        },</span>
<span class="line">        include: path.join(__dirname, &#39;src&#39;),</span>
<span class="line">        exclude: /node_modules/,</span>
<span class="line">      },</span>
<span class="line">      { test: /\\.txt$/, use: &#39;raw-loader&#39; },</span>
<span class="line">      { test: /\\.css$/, use: [MiniCssExtractPlugin.loader, &#39;css-loader&#39;, &#39;postcss-loader&#39;] },</span>
<span class="line">      { test: /\\.less$/, use: [MiniCssExtractPlugin.loader, &#39;css-loader&#39;, &#39;postcss-loader&#39;, &#39;less-loader&#39;] },</span>
<span class="line">      { test: /\\.scss$/, use: [MiniCssExtractPlugin.loader, &#39;css-loader&#39;, &#39;postcss-loader&#39;, &#39;sass-loader&#39;] },</span>
<span class="line">      {</span>
<span class="line">        test: /\\.(jpg|png|gif|bmp|svg)$/,</span>
<span class="line">        type:&#39;asset/resource&#39;,</span>
<span class="line">        generator:{</span>
<span class="line">          filename:&#39;images/[hash][ext]&#39;</span>
<span class="line">        }</span>
<span class="line">      },</span>
<span class="line">      {</span>
<span class="line">        test: /\\.html$/,</span>
<span class="line">        loader: &#39;html-loader&#39;,</span>
<span class="line">      },</span>
<span class="line">    ],</span>
<span class="line">  },</span>
<span class="line">  plugins: [</span>
<span class="line">    new HtmlWebpackPlugin({</span>
<span class="line">    template: &#39;./src/index.html&#39;,</span>
<span class="line">+     minify: {  </span>
<span class="line">+        collapseWhitespace: true,</span>
<span class="line">+        removeComments: true</span>
<span class="line">      }</span>
<span class="line">    }),</span>
<span class="line">    new MiniCssExtractPlugin({</span>
<span class="line">      filename: &#39;css/[name].css&#39;,</span>
<span class="line">    }),</span>
<span class="line">+    new OptimizeCssAssetsWebpackPlugin(),</span>
<span class="line">  ],</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-cdn" tabindex="-1"><a class="header-anchor" href="#_4-cdn"><span>4. CDN</span></a></h2><ul><li><a href="https://www.qiniu.com/" target="_blank" rel="noopener noreferrer">qiniu</a></li><li>CDN 又叫内容分发网络，通过把资源部署到世界各地，用户在访问时按照就近原则从离用户最近的服务器获取资源，从而加速资源的获取速度。</li><li>[public-path](https://webpack.js.org/guides/public-path/</li><li><a href="https://npmmirror.com/package/external-remotes-plugin" target="_blank" rel="noopener noreferrer">external-remotes-plugin</a></li></ul><p><img src="http://img.zhufengpeixun.cn/cdn2.jpg" alt="cdn"></p><h3 id="_4-1-使用缓存" tabindex="-1"><a class="header-anchor" href="#_4-1-使用缓存"><span>4.1 使用缓存</span></a></h3><ul><li>HTML文件不缓存，放在自己的服务器上，关闭自己服务器的缓存，静态资源的URL变成指向CDN服务器的地址</li><li>静态的JavaScript、CSS、图片等文件开启CDN和缓存，并且文件名带上HASH值</li><li>为了并行加载不阻塞，把不同的静态资源分配到不同的CDN服务器上</li></ul><h3 id="_4-2-域名限制" tabindex="-1"><a class="header-anchor" href="#_4-2-域名限制"><span>4.2 域名限制</span></a></h3><ul><li>同一时刻针对同一个域名的资源并行请求是有限制</li><li>可以把这些静态资源分散到不同的 CDN 服务上去</li><li>多个域名后会增加域名解析时间</li><li>可以通过在 HTML HEAD 标签中 加入<code>&lt;link rel=&quot;dns-prefetch&quot; href=&quot;http://img.zhufengpeixun.cn&quot;&gt;</code>去预解析域名，以降低域名解析带来的延迟</li></ul><h3 id="_4-3-文件指纹" tabindex="-1"><a class="header-anchor" href="#_4-3-文件指纹"><span>4.3 文件指纹</span></a></h3><ul><li>打包后输出的文件名和后缀</li><li>hash一般是结合CDN缓存来使用，通过webpack构建之后，生成对应文件名自动带上对应的MD5值。如果文件内容改变的话，那么对应文件哈希值也会改变，对应的HTML引用的URL地址也会改变，触发CDN服务器从源服务器上拉取对应数据，进而更新本地缓存。</li></ul><p>指纹占位符</p><table><thead><tr><th style="text-align:left;">占位符名称</th><th style="text-align:left;">含义</th></tr></thead><tbody><tr><td style="text-align:left;">ext</td><td style="text-align:left;">资源后缀名</td></tr><tr><td style="text-align:left;">name</td><td style="text-align:left;">文件名称</td></tr><tr><td style="text-align:left;">path</td><td style="text-align:left;">文件的相对路径</td></tr><tr><td style="text-align:left;">folder</td><td style="text-align:left;">文件所在的文件夹</td></tr><tr><td style="text-align:left;">hash</td><td style="text-align:left;">每次webpack构建时生成一个唯一的hash值</td></tr><tr><td style="text-align:left;">chunkhash</td><td style="text-align:left;">根据chunk生成hash值，来源于同一个chunk，则hash值就一样</td></tr><tr><td style="text-align:left;">contenthash</td><td style="text-align:left;">根据内容生成hash值，文件内容相同hash值就相同</td></tr></tbody></table><h4 id="_4-3-1-hash" tabindex="-1"><a class="header-anchor" href="#_4-3-1-hash"><span>4.3.1 hash</span></a></h4><ul><li>Hash 是整个项目的hash值，其根据每次编译内容计算得到，每次编译之后都会生成新的hash,即修改任何文件都会导致所有文件的hash发生改变</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">const path = require(&quot;path&quot;);</span>
<span class="line">const glob = require(&quot;glob&quot;);</span>
<span class="line">const PurgecssPlugin = require(&quot;purgecss-webpack-plugin&quot;);</span>
<span class="line">const MiniCssExtractPlugin = require(&#39;mini-css-extract-plugin&#39;);</span>
<span class="line">const PATHS = {</span>
<span class="line">  src: path.join(__dirname, &#39;src&#39;)</span>
<span class="line">}</span>
<span class="line">module.exports = {</span>
<span class="line">  mode: &quot;production&quot;,</span>
<span class="line">+  entry: {</span>
<span class="line">+    main: &#39;./src/index.js&#39;,</span>
<span class="line">+    vender:[&#39;lodash&#39;]</span>
<span class="line">+  },</span>
<span class="line">  output:{</span>
<span class="line">    path:path.resolve(__dirname,&#39;dist&#39;),</span>
<span class="line">+    filename:&#39;[name].[hash].js&#39;</span>
<span class="line">  },</span>
<span class="line">  devServer:{</span>
<span class="line">    hot:false</span>
<span class="line">  },</span>
<span class="line">  module: {</span>
<span class="line">    rules: [</span>
<span class="line">      {</span>
<span class="line">        test: /\\.js/,</span>
<span class="line">        include: path.resolve(__dirname, &quot;src&quot;),</span>
<span class="line">        use: [</span>
<span class="line">          {</span>
<span class="line">            loader:&#39;thread-loader&#39;,</span>
<span class="line">            options:{</span>
<span class="line">              workers:3</span>
<span class="line">            }</span>
<span class="line">          },</span>
<span class="line">          {</span>
<span class="line">            loader: &quot;babel-loader&quot;,</span>
<span class="line">            options: {</span>
<span class="line">              presets: [&quot;@babel/preset-env&quot;, &quot;@babel/preset-react&quot;],</span>
<span class="line">            },</span>
<span class="line">          },</span>
<span class="line">        ],</span>
<span class="line">      },</span>
<span class="line">      {</span>
<span class="line">        test: /\\.css$/,</span>
<span class="line">        include: path.resolve(__dirname, &quot;src&quot;),</span>
<span class="line">        exclude: /node_modules/,</span>
<span class="line">        use: [</span>
<span class="line">          {</span>
<span class="line">            loader: MiniCssExtractPlugin.loader,</span>
<span class="line">          },</span>
<span class="line">          &quot;css-loader&quot;,</span>
<span class="line">        ],</span>
<span class="line">      },</span>
<span class="line">    ],</span>
<span class="line">  },</span>
<span class="line">  plugins: [</span>
<span class="line">    new MiniCssExtractPlugin({</span>
<span class="line">+      filename: &quot;[name].[hash].css&quot;</span>
<span class="line">    }),</span>
<span class="line">    new PurgecssPlugin({</span>
<span class="line">      paths: glob.sync(\`\${PATHS.src}/**/*\`,  { nodir: true }),</span>
<span class="line">    }),</span>
<span class="line">  ],</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-3-2-chunkhash" tabindex="-1"><a class="header-anchor" href="#_4-3-2-chunkhash"><span>4.3.2 chunkhash</span></a></h4><ul><li>chunkhash 采用hash计算的话，每一次构建后生成的哈希值都不一样，即使文件内容压根没有改变。这样子是没办法实现缓存效果，我们需要换另一种哈希值计算方式，即chunkhash,chunkhash和hash不一样，它根据不同的入口文件(Entry)进行依赖文件解析、构建对应的chunk，生成对应的哈希值。我们在生产环境里把一些公共库和程序入口文件区分开，单独打包构建，接着我们采用chunkhash的方式生成哈希值，那么只要我们不改动公共库的代码，就可以保证其哈希值不会受影响</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">const path = require(&quot;path&quot;);</span>
<span class="line">const glob = require(&quot;glob&quot;);</span>
<span class="line">const PurgecssPlugin = require(&quot;purgecss-webpack-plugin&quot;);</span>
<span class="line">const MiniCssExtractPlugin = require(&#39;mini-css-extract-plugin&#39;);</span>
<span class="line">const PATHS = {</span>
<span class="line">  src: path.join(__dirname, &#39;src&#39;)</span>
<span class="line">}</span>
<span class="line">module.exports = {</span>
<span class="line">  mode: &quot;production&quot;,</span>
<span class="line">  entry: {</span>
<span class="line">    main: &#39;./src/index.js&#39;,</span>
<span class="line">    vender:[&#39;lodash&#39;]</span>
<span class="line">  },</span>
<span class="line">  output:{</span>
<span class="line">    path:path.resolve(__dirname,&#39;dist&#39;),</span>
<span class="line">+    filename:&#39;[name].[chunkhash].js&#39;</span>
<span class="line">  },</span>
<span class="line">  devServer:{</span>
<span class="line">    hot:false</span>
<span class="line">  },</span>
<span class="line">  module: {</span>
<span class="line">    rules: [</span>
<span class="line">      {</span>
<span class="line">        test: /\\.js/,</span>
<span class="line">        include: path.resolve(__dirname, &quot;src&quot;),</span>
<span class="line">        use: [</span>
<span class="line">          {</span>
<span class="line">            loader:&#39;thread-loader&#39;,</span>
<span class="line">            options:{</span>
<span class="line">              workers:3</span>
<span class="line">            }</span>
<span class="line">          },</span>
<span class="line">          {</span>
<span class="line">            loader: &quot;babel-loader&quot;,</span>
<span class="line">            options: {</span>
<span class="line">              presets: [&quot;@babel/preset-env&quot;, &quot;@babel/preset-react&quot;],</span>
<span class="line">            },</span>
<span class="line">          },</span>
<span class="line">        ],</span>
<span class="line">      },</span>
<span class="line">      {</span>
<span class="line">        test: /\\.css$/,</span>
<span class="line">        include: path.resolve(__dirname, &quot;src&quot;),</span>
<span class="line">        exclude: /node_modules/,</span>
<span class="line">        use: [</span>
<span class="line">          {</span>
<span class="line">            loader: MiniCssExtractPlugin.loader,</span>
<span class="line">          },</span>
<span class="line">          &quot;css-loader&quot;,</span>
<span class="line">        ],</span>
<span class="line">      },</span>
<span class="line">    ],</span>
<span class="line">  },</span>
<span class="line">  plugins: [</span>
<span class="line">    new MiniCssExtractPlugin({</span>
<span class="line">+      filename: &quot;[name].[chunkhash].css&quot;</span>
<span class="line">    }),</span>
<span class="line">    new PurgecssPlugin({</span>
<span class="line">      paths: glob.sync(\`\${PATHS.src}/**/*\`,  { nodir: true }),</span>
<span class="line">    }),</span>
<span class="line">  ],</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-3-3-contenthash" tabindex="-1"><a class="header-anchor" href="#_4-3-3-contenthash"><span>4.3.3 contenthash</span></a></h4><ul><li>使用chunkhash存在一个问题，就是当在一个JS文件中引入CSS文件，编译后它们的hash是相同的，而且只要js文件发生改变 ，关联的css文件hash也会改变,这个时候可以使用<code>mini-css-extract-plugin</code>里的<code>contenthash</code>值，保证即使css文件所处的模块里就算其他文件内容改变，只要css文件内容不变，那么不会重复构建</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">const path = require(&quot;path&quot;);</span>
<span class="line">const glob = require(&quot;glob&quot;);</span>
<span class="line">const PurgecssPlugin = require(&quot;purgecss-webpack-plugin&quot;);</span>
<span class="line">const MiniCssExtractPlugin = require(&#39;mini-css-extract-plugin&#39;);</span>
<span class="line">const PATHS = {</span>
<span class="line">  src: path.join(__dirname, &#39;src&#39;)</span>
<span class="line">}</span>
<span class="line">module.exports = {</span>
<span class="line">  mode: &quot;production&quot;,</span>
<span class="line">  entry: {</span>
<span class="line">    main: &#39;./src/index.js&#39;,</span>
<span class="line">    vender:[&#39;lodash&#39;]</span>
<span class="line">  },</span>
<span class="line">  output:{</span>
<span class="line">    path:path.resolve(__dirname,&#39;dist&#39;),</span>
<span class="line">    filename:&#39;[name].[chunkhash].js&#39;</span>
<span class="line">  },</span>
<span class="line">  devServer:{</span>
<span class="line">    hot:false</span>
<span class="line">  },</span>
<span class="line">  module: {</span>
<span class="line">    rules: [</span>
<span class="line">      {</span>
<span class="line">        test: /\\.js/,</span>
<span class="line">        include: path.resolve(__dirname, &quot;src&quot;),</span>
<span class="line">        use: [</span>
<span class="line">          {</span>
<span class="line">            loader:&#39;thread-loader&#39;,</span>
<span class="line">            options:{</span>
<span class="line">              workers:3</span>
<span class="line">            }</span>
<span class="line">          },</span>
<span class="line">          {</span>
<span class="line">            loader: &quot;babel-loader&quot;,</span>
<span class="line">            options: {</span>
<span class="line">              presets: [&quot;@babel/preset-env&quot;, &quot;@babel/preset-react&quot;],</span>
<span class="line">            },</span>
<span class="line">          },</span>
<span class="line">        ],</span>
<span class="line">      },</span>
<span class="line">      {</span>
<span class="line">        test: /\\.css$/,</span>
<span class="line">        include: path.resolve(__dirname, &quot;src&quot;),</span>
<span class="line">        exclude: /node_modules/,</span>
<span class="line">        use: [</span>
<span class="line">          {</span>
<span class="line">            loader: MiniCssExtractPlugin.loader,</span>
<span class="line">          },</span>
<span class="line">          &quot;css-loader&quot;,</span>
<span class="line">        ],</span>
<span class="line">      },</span>
<span class="line">    ],</span>
<span class="line">  },</span>
<span class="line">  plugins: [</span>
<span class="line">    new MiniCssExtractPlugin({</span>
<span class="line">+      filename: &quot;[name].[contenthash].css&quot;</span>
<span class="line">    }),</span>
<span class="line">    new PurgecssPlugin({</span>
<span class="line">      paths: glob.sync(\`\${PATHS.src}/**/*\`,  { nodir: true }),</span>
<span class="line">    }),</span>
<span class="line">  ],</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-3-4-hash" tabindex="-1"><a class="header-anchor" href="#_4-3-4-hash"><span>4.3.4 hash</span></a></h4><p><img src="https://img.zhufengpeixun.com/variableHash.jpg" alt="variableHash"></p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">function</span> <span class="token function">createHash</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">   <span class="token keyword">return</span>  <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;crypto&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">createHash</span><span class="token punctuation">(</span><span class="token string">&#39;md5&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">let</span> entry <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">entry1</span><span class="token operator">:</span><span class="token string">&#39;entry1&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">entry2</span><span class="token operator">:</span><span class="token string">&#39;entry2&#39;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">let</span> entry1 <span class="token operator">=</span> <span class="token string">&#39;require depModule1&#39;</span><span class="token punctuation">;</span><span class="token comment">//模块entry1</span></span>
<span class="line"><span class="token keyword">let</span> entry2 <span class="token operator">=</span> <span class="token string">&#39;require depModule2&#39;</span><span class="token punctuation">;</span><span class="token comment">//模块entry2</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> depModule1 <span class="token operator">=</span> <span class="token string">&#39;depModule1&#39;</span><span class="token punctuation">;</span><span class="token comment">//模块depModule1</span></span>
<span class="line"><span class="token keyword">let</span> depModule2 <span class="token operator">=</span> <span class="token string">&#39;depModule2&#39;</span><span class="token punctuation">;</span><span class="token comment">//模块depModule2</span></span>
<span class="line"><span class="token comment">//如果都使用hash的话，因为这是工程级别的，即每次修改任何一个文件，所有文件名的hash至都将改变。所以一旦修改了任何一个文件，整个项目的文件缓存都将失效</span></span>
<span class="line"><span class="token keyword">let</span> hash <span class="token operator">=</span>  <span class="token function">createHash</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>entry1<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>entry2<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>depModule1<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>depModule2<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">.</span><span class="token function">digest</span><span class="token punctuation">(</span><span class="token string">&#39;hex&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;hash&#39;</span><span class="token punctuation">,</span>hash<span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">//chunkhash根据不同的入口文件(Entry)进行依赖文件解析、构建对应的chunk，生成对应的哈希值。</span></span>
<span class="line"><span class="token comment">//在生产环境里把一些公共库和程序入口文件区分开，单独打包构建，接着我们采用chunkhash的方式生成哈希值，那么只要我们不改动公共库的代码，就可以保证其哈希值不会受影响</span></span>
<span class="line"><span class="token keyword">let</span> entry1ChunkHash <span class="token operator">=</span> <span class="token function">createHash</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>entry1<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>depModule1<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">digest</span><span class="token punctuation">(</span><span class="token string">&#39;hex&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;entry1ChunkHash&#39;</span><span class="token punctuation">,</span>entry1ChunkHash<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> entry2ChunkHash <span class="token operator">=</span> <span class="token function">createHash</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>entry2<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>depModule2<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">digest</span><span class="token punctuation">(</span><span class="token string">&#39;hex&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;entry2ChunkHash&#39;</span><span class="token punctuation">,</span>entry2ChunkHash<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> entry1File <span class="token operator">=</span> entry1<span class="token operator">+</span>depModule1<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> entry1ContentHash <span class="token operator">=</span> <span class="token function">createHash</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>entry1File<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">digest</span><span class="token punctuation">(</span><span class="token string">&#39;hex&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;entry1ContentHash&#39;</span><span class="token punctuation">,</span>entry1ContentHash<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> entry2File <span class="token operator">=</span> entry2<span class="token operator">+</span>depModule2<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> entry2ContentHash <span class="token operator">=</span> <span class="token function">createHash</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>entry2File<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">digest</span><span class="token punctuation">(</span><span class="token string">&#39;hex&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;entry2ContentHash&#39;</span><span class="token punctuation">,</span>entry2ContentHash<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-4-hashplugin" tabindex="-1"><a class="header-anchor" href="#_4-4-hashplugin"><span>4.4.HashPlugin</span></a></h3><ul><li>可以自己修改各种hash值</li></ul><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">class</span> <span class="token class-name">HashPlugin</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>options <span class="token operator">=</span> options<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token function">apply</span><span class="token punctuation">(</span><span class="token parameter">compiler</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        compiler<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>compilation<span class="token punctuation">.</span><span class="token function">tap</span><span class="token punctuation">(</span><span class="token string">&#39;HashPlugin&#39;</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">compilation<span class="token punctuation">,</span>params</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">//如果你想改变hash值，可以在hash生成这后修改</span></span>
<span class="line">            compilation<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>afterHash<span class="token punctuation">.</span><span class="token function">tap</span><span class="token punctuation">(</span><span class="token string">&#39;HashPlugin&#39;</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">                <span class="token keyword">let</span> fullhash <span class="token operator">=</span> <span class="token string">&#39;fullhash&#39;</span><span class="token punctuation">;</span><span class="token comment">//时间戳</span></span>
<span class="line">                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;本次编译的compilation.hash&#39;</span><span class="token punctuation">,</span>compilation<span class="token punctuation">.</span>hash<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                compilation<span class="token punctuation">.</span>hash<span class="token operator">=</span> fullhash<span class="token punctuation">;</span><span class="token comment">//output.filename [fullhash]</span></span>
<span class="line">                <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> chunk <span class="token keyword">of</span> compilation<span class="token punctuation">.</span>chunks<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;chunk.hash&#39;</span><span class="token punctuation">,</span>chunk<span class="token punctuation">.</span>hash<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                    chunk<span class="token punctuation">.</span>renderedHash <span class="token operator">=</span> <span class="token string">&#39;chunkHash&#39;</span><span class="token punctuation">;</span><span class="token comment">//可以改变chunkhash</span></span>
<span class="line">                    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;chunk.contentHash&#39;</span><span class="token punctuation">,</span>chunk<span class="token punctuation">.</span>contentHash<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                    chunk<span class="token punctuation">.</span>contentHash<span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">javascript</span><span class="token operator">:</span> <span class="token string">&#39;javascriptContentHash&#39;</span><span class="token punctuation">,</span><span class="token string-property property">&#39;css/mini-extract&#39;</span><span class="token operator">:</span><span class="token string">&#39;cssContentHash&#39;</span> <span class="token punctuation">}</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> HashPlugin<span class="token punctuation">;</span></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * 三种hash</span>
<span class="line"> * 1. hash compilation.hash </span>
<span class="line"> * 2. chunkHash 每个chunk都会有一个hash</span>
<span class="line"> * 3. contentHash 内容hash 每个文件会可能有一个hash值</span>
<span class="line"> */</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>webpack.config.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">const path = require(&#39;path&#39;);</span>
<span class="line">const DonePlugin = require(&#39;./plugins/DonePlugin&#39;);</span>
<span class="line">const AssetPlugin = require(&#39;./plugins/AssetPlugin&#39;);</span>
<span class="line">const ZipPlugin = require(&#39;./plugins/ZipPlugin&#39;);</span>
<span class="line">const HashPlugin = require(&#39;./plugins/HashPlugin&#39;);</span>
<span class="line">const AutoExternalPlugin = require(&#39;./plugins/AutoExternalPlugin&#39;);</span>
<span class="line">const MiniCssExtractPlugin = require(&#39;mini-css-extract-plugin&#39;);</span>
<span class="line">const HtmlWebpackPlugin = require(&#39;html-webpack-plugin&#39;);</span>
<span class="line">module.exports = {</span>
<span class="line">    module: {</span>
<span class="line">        rules: [</span>
<span class="line">            {</span>
<span class="line">                test: /\\.css$/,</span>
<span class="line">                use: [</span>
<span class="line">+                   MiniCssExtractPlugin.loader,</span>
<span class="line">                    &#39;css-loader&#39;</span>
<span class="line">                ]</span>
<span class="line">            }</span>
<span class="line">        ]</span>
<span class="line">    },</span>
<span class="line">    plugins: [</span>
<span class="line">+       new HashPlugin(),</span>
<span class="line">    ]</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-moduleids-chunkids的优化" tabindex="-1"><a class="header-anchor" href="#_5-moduleids-chunkids的优化"><span>5.moduleIds &amp; chunkIds的优化</span></a></h2><h3 id="_5-1-概念和选项" tabindex="-1"><a class="header-anchor" href="#_5-1-概念和选项"><span>5.1 概念和选项</span></a></h3><ul><li>module: 每一个文件其实都可以看成一个 module</li><li>chunk: webpack打包最终生成的代码块，代码块会生成文件，一个文件对应一个chunk</li><li>在webpack5之前，没有从entry打包的chunk文件，都会以1、2、3...的文件命名方式输出,删除某些些文件可能会导致缓存失效</li><li>在生产模式下，默认启用这些功能chunkIds: &quot;deterministic&quot;, moduleIds: &quot;deterministic&quot;，此算法采用<code>确定性</code>的方式将短数字 ID(3 或 4 个字符)短hash值分配给 modules 和 chunks</li><li>chunkId设置为deterministic，则output中chunkFilename里的[name]会被替换成确定性短数字ID</li><li>虽然chunkId不变(不管值是deterministic | natural | named)，但更改chunk内容，chunkhash还是会改变的</li></ul><table><thead><tr><th style="text-align:left;">可选值</th><th style="text-align:left;">含义</th><th style="text-align:left;">示例</th></tr></thead><tbody><tr><td style="text-align:left;">natural</td><td style="text-align:left;">按使用顺序的数字ID</td><td style="text-align:left;">1</td></tr><tr><td style="text-align:left;">named</td><td style="text-align:left;">方便调试的高可读性id</td><td style="text-align:left;">src_two_js.js</td></tr><tr><td style="text-align:left;">deterministic</td><td style="text-align:left;">根据模块名称生成简短的hash值</td><td style="text-align:left;">915</td></tr><tr><td style="text-align:left;">size</td><td style="text-align:left;">根据模块大小生成的数字id</td><td style="text-align:left;">0</td></tr></tbody></table><h3 id="_6-2-webpack-config-js" tabindex="-1"><a class="header-anchor" href="#_6-2-webpack-config-js"><span>6.2 webpack.config.js</span></a></h3><p>webpack.config.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">const path = require(&#39;path&#39;);</span>
<span class="line">module.exports = {</span>
<span class="line">    mode: &#39;development&#39;,</span>
<span class="line">    devtool:false,</span>
<span class="line">+   optimization:{</span>
<span class="line">+       moduleIds:&#39;deterministic&#39;,</span>
<span class="line">+       chunkIds:&#39;deterministic&#39;</span>
<span class="line">+   }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-3-src-index-js" tabindex="-1"><a class="header-anchor" href="#_5-3-src-index-js"><span>5.3 src\\index.js</span></a></h3><p>src\\index.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;./one&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;./two&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;./three&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,53)])])}const d=n(i,[["render",p]]),u=JSON.parse('{"path":"/strong/103.9.webpack-optimize2.html","title":"","lang":"en-US","frontmatter":{},"git":{"updatedTime":1681290319000,"contributors":[{"name":"yutao","username":"yutao","email":"642231346@qq.com","commits":1,"url":"https://github.com/yutao"}],"changelog":[{"hash":"f5ab8c9d34991ec274f7f652439afe5b2afb6147","time":1681290319000,"email":"642231346@qq.com","author":"yutao","message":"modify"}]},"filePathRelative":"strong/103.9.webpack-optimize2.md"}');export{d as comp,u as data};
