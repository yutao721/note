import{_ as n,c as a,a as e,o as l}from"./app-CD1YpnS1.js";const i={};function p(t,s){return l(),a("div",null,[...s[0]||(s[0]=[e(`<h2 id="_1-webpack介绍" tabindex="-1"><a class="header-anchor" href="#_1-webpack介绍"><span>1. webpack介绍</span></a></h2><ul><li><a href="https://webpack.js.org" target="_blank" rel="noopener noreferrer">webpack</a>是一个JavaScript 应用程序的静态模块打包工具</li></ul><p><img src="https://static.zhufengpeixun.com/webpack_1637747011610.gif" alt="webpack"></p><h3 id="_1-1-安装" tabindex="-1"><a class="header-anchor" href="#_1-1-安装"><span>1.1 安装</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">npm install  webpack webpack-cli --save-dev</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_1-2-入口-entry" tabindex="-1"><a class="header-anchor" href="#_1-2-入口-entry"><span>1.2 入口(entry)</span></a></h3><ul><li>入口起点(entry point)指示 webpack 应该使用哪个模块，来作为构建其内部 依赖图(dependency graph) 的开始。进入入口起点后，webpack 会找出有哪些模块和库是入口起点（直接和间接）依赖的</li><li>默认值是 <code>./src/index.js</code>，但你可以通过在 <code>webpack configuration</code> 中配置 <code>entry</code> 属性，来指定一个（或多个）不同的入口起点</li></ul><h4 id="_1-2-1-src-index-js" tabindex="-1"><a class="header-anchor" href="#_1-2-1-src-index-js"><span>1.2.1 src\\index.js</span></a></h4><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token string">&#39;./index.css&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="_1-2-2-index-css" tabindex="-1"><a class="header-anchor" href="#_1-2-2-index-css"><span>1.2.2 index.css</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">body{</span>
<span class="line">  background-color:green;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-2-3-webpack-config-js" tabindex="-1"><a class="header-anchor" href="#_1-2-3-webpack-config-js"><span>1.2.3 webpack.config.js</span></a></h4><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&#39;./src/index.js&#39;</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3-输出-output" tabindex="-1"><a class="header-anchor" href="#_1-3-输出-output"><span>1.3 输出(output)</span></a></h3><ul><li><code>output</code> 属性告诉 webpack 在哪里输出它所创建的 bundle，以及如何命名这些文件</li><li>主要输出文件的默认值是 <code>./dist/main.js</code>，其他生成文件默认放置在 <code>./dist</code> 文件夹中。</li></ul><p>webpack.config.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">const path = require(&#39;path&#39;);</span>
<span class="line">module.exports = {</span>
<span class="line">  entry: &#39;./src/index.js&#39;,</span>
<span class="line">+  output: {</span>
<span class="line">+    path: path.resolve(__dirname, &#39;dist&#39;),</span>
<span class="line">+    filename: &#39;main.js&#39;</span>
<span class="line">+  }</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-4-loader" tabindex="-1"><a class="header-anchor" href="#_1-4-loader"><span>1.4 loader</span></a></h3><ul><li>webpack 只能理解 <code>JavaScript</code> 和 <code>JSON</code> 文件</li><li>loader 让 <code>webpack</code> 能够去处理其他类型的文件，并将它们转换为有效模块，以供应用程序使用，以及被添加到依赖图中</li></ul><p>webpack.config.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">const path = require(&#39;path&#39;);</span>
<span class="line">module.exports = {</span>
<span class="line">  mode: &#39;development&#39;,</span>
<span class="line">  devtool:false,</span>
<span class="line">  entry: &#39;./src/index.js&#39;,</span>
<span class="line">  output: {</span>
<span class="line">    path: path.resolve(__dirname, &#39;dist&#39;),</span>
<span class="line">    filename: &#39;main.js&#39;</span>
<span class="line">  },</span>
<span class="line">+  module: {</span>
<span class="line">+    rules: [</span>
<span class="line">+      { test: /\\.css$/, use: [&#39;style-loader&#39;,&#39;css-loader&#39;]}</span>
<span class="line">+    ]</span>
<span class="line">+  }</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-5-插件-plugin" tabindex="-1"><a class="header-anchor" href="#_1-5-插件-plugin"><span>1.5 插件(plugin)</span></a></h3><ul><li>loader 用于转换某些类型的模块，而插件则可以用于执行范围更广的任务。包括：打包优化，资源管理，注入环境变量</li></ul><h4 id="_1-5-1-src-index-html" tabindex="-1"><a class="header-anchor" href="#_1-5-1-src-index-html"><span>1.5.1 src\\index.html</span></a></h4><p>src\\index.html</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token constant">DOCTYPE</span> html<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span>html lang<span class="token operator">=</span><span class="token string">&quot;en&quot;</span><span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span>head<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span>meta charset<span class="token operator">=</span><span class="token string">&quot;UTF-8&quot;</span><span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span>meta name<span class="token operator">=</span><span class="token string">&quot;viewport&quot;</span> content<span class="token operator">=</span><span class="token string">&quot;width=device-width, initial-scale=1.0&quot;</span><span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span>title<span class="token operator">&gt;</span>webpack5<span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span>body<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-5-2-webpack-config-js" tabindex="-1"><a class="header-anchor" href="#_1-5-2-webpack-config-js"><span>1.5.2 webpack.config.js</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">const path = require(&#39;path&#39;);</span>
<span class="line">+const HtmlWebpackPlugin = require(&#39;html-webpack-plugin&#39;);</span>
<span class="line">module.exports = {</span>
<span class="line">  mode: &#39;development&#39;,</span>
<span class="line">  devtool:false,</span>
<span class="line">  entry: &#39;./src/index.js&#39;,</span>
<span class="line">  output: {</span>
<span class="line">    path: path.resolve(__dirname, &#39;dist&#39;),</span>
<span class="line">    filename: &#39;main.js&#39;</span>
<span class="line">  },</span>
<span class="line">  module: {</span>
<span class="line">    rules: [</span>
<span class="line">      { test: /\\.css$/, use: [&#39;style-loader&#39;,&#39;css-loader&#39;]}</span>
<span class="line">    ]</span>
<span class="line">  },</span>
<span class="line">+  plugins: [</span>
<span class="line">+    new HtmlWebpackPlugin({template: &#39;./src/index.html&#39;})</span>
<span class="line">+  ]</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-6-模式-mode" tabindex="-1"><a class="header-anchor" href="#_1-6-模式-mode"><span>1.6 模式(mode)</span></a></h3><ul><li>webpack 4.x 版本引入了 <a href="https://webpack.docschina.org/configuration/mode/" target="_blank" rel="noopener noreferrer">mode</a> 的概念</li></ul><h4 id="_1-6-1-环境差异" tabindex="-1"><a class="header-anchor" href="#_1-6-1-环境差异"><span>1.6.1 环境差异</span></a></h4><ul><li>开发环境 <ul><li>需要生成 sourcemap 文件</li><li>需要打印 debug 信息</li><li>需要 live reload 或者 hot reload 的功能</li></ul></li><li>生产环境 <ul><li>可能需要分离 CSS 成单独的文件，以便多个页面共享同一个 CSS 文件</li><li>需要压缩 HTML/CSS/JS 代码</li><li>需要压缩图片</li></ul></li><li>其默认值为 production</li></ul><h4 id="_1-6-2-区分环境" tabindex="-1"><a class="header-anchor" href="#_1-6-2-区分环境"><span>1.6.2 区分环境</span></a></h4><ul><li><code>--mode</code>用来设置模块内的<code>process.env.NODE_ENV</code></li><li><code>cross-env</code>用来设置node环境的<code>process.env.NODE_ENV</code></li><li><code>DefinePlugin</code>用来设置模块内的全局变量</li></ul><h5 id="_1-6-2-1-命令行配置" tabindex="-1"><a class="header-anchor" href="#_1-6-2-1-命令行配置"><span>1.6.2.1 命令行配置</span></a></h5><ul><li>webpack的mode默认为<code>production</code></li><li><code>webpack serve</code>的mode默认为<code>development</code></li><li>可以在模块内通过<code>process.env.NODE_ENV</code>获取当前的环境变量,无法在webpack配置文件中获取此变量</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">  &quot;scripts&quot;: {</span>
<span class="line">    &quot;build&quot;: &quot;webpack&quot;,</span>
<span class="line">    &quot;dev&quot;: &quot;webpack serve&quot;</span>
<span class="line">  },</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>index.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// development | production</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>webpack.config.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;NODE_ENV&#39;</span><span class="token punctuation">,</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// undefined</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h5 id="_1-6-2-2-命令行配置" tabindex="-1"><a class="header-anchor" href="#_1-6-2-2-命令行配置"><span>1.6.2.2 命令行配置</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">  &quot;scripts&quot;: {</span>
<span class="line">    &quot;build&quot;: &quot;webpack --mode=production&quot;,</span>
<span class="line">    &quot;dev&quot;: &quot;webpack --mode=development serve&quot;</span>
<span class="line">  },</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_1-6-2-3-mode配置" tabindex="-1"><a class="header-anchor" href="#_1-6-2-3-mode配置"><span>1.6.2.3 mode配置</span></a></h5><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;development&#39;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_1-6-2-4-defineplugin" tabindex="-1"><a class="header-anchor" href="#_1-6-2-4-defineplugin"><span>1.6.2.4 DefinePlugin</span></a></h5><ul><li>可以在任意模块内通过 <code>process.env.NODE_ENV</code> 获取当前的环境变量</li><li>但无法在<code>node环境</code>(webpack 配置文件中)下获取当前的环境变量</li></ul><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token literal-property property">plugins</span><span class="token operator">:</span><span class="token punctuation">[</span></span>
<span class="line">   <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>DefinePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token string-property property">&#39;process.env.NODE_ENV&#39;</span><span class="token operator">:</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span><span class="token punctuation">)</span></span>
<span class="line">   <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">]</span>   </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>index.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">NODE_ENV</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//  production</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>webpack.config.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;process.env.NODE_ENV&#39;</span><span class="token punctuation">,</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// undefined</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;NODE_ENV&#39;</span><span class="token punctuation">,</span><span class="token constant">NODE_ENV</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// error ！！！</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_1-6-2-5-cross-env" tabindex="-1"><a class="header-anchor" href="#_1-6-2-5-cross-env"><span>1.6.2.5 cross-env</span></a></h5><ul><li>只能设置<code>node环境</code>下的变量NODE_ENV</li></ul><p>package.json</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&quot;scripts&quot;: {</span>
<span class="line">  &quot;build&quot;: &quot;cross-env NODE_ENV=development webpack&quot;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>webpack.config.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;process.env.NODE_ENV&#39;</span><span class="token punctuation">,</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// development</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="_2-开发服务器" tabindex="-1"><a class="header-anchor" href="#_2-开发服务器"><span>2 开发服务器</span></a></h2><h3 id="_2-1-安装服务器" tabindex="-1"><a class="header-anchor" href="#_2-1-安装服务器"><span>2.1 安装服务器</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">npm install webpack-dev-server --save-dev</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_2-2-webpack-config-js" tabindex="-1"><a class="header-anchor" href="#_2-2-webpack-config-js"><span>2.2 webpack.config.js</span></a></h3><table><thead><tr><th style="text-align:left;">类别</th><th style="text-align:left;">配置名称</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">output</td><td style="text-align:left;">path</td><td style="text-align:left;">指定输出到硬盘上的目录</td></tr><tr><td style="text-align:left;">output</td><td style="text-align:left;">publicPath</td><td style="text-align:left;">表示的是打包生成的index.html文件里面引用资源的前缀</td></tr><tr><td style="text-align:left;">devServer</td><td style="text-align:left;">publicPath</td><td style="text-align:left;">表示的是打包生成的静态文件所在的位置(若是devServer里面的publicPath没有设置，则会认为是output里面设置的publicPath的值)</td></tr><tr><td style="text-align:left;">devServer</td><td style="text-align:left;">static</td><td style="text-align:left;">用于配置提供额外静态文件内容的目录</td></tr></tbody></table><h3 id="_2-3-webpack-config-js" tabindex="-1"><a class="header-anchor" href="#_2-3-webpack-config-js"><span>2.3 webpack.config.js</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">static</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;public&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">8080</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">open</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-package-json" tabindex="-1"><a class="header-anchor" href="#_2-4-package-json"><span>2.4 package.json</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">  &quot;scripts&quot;: {</span>
<span class="line">    &quot;build&quot;: &quot;webpack&quot;,</span>
<span class="line">+   &quot;dev&quot;: &quot;webpack serve&quot;</span>
<span class="line">  }</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-支持css" tabindex="-1"><a class="header-anchor" href="#_3-支持css"><span>3. 支持CSS</span></a></h2><ul><li><a href="https://www.npmjs.com/package/css-loader" target="_blank" rel="noopener noreferrer">css-loader</a>用来翻译处理@import和url()</li><li><a href="https://www.npmjs.com/package/style-loader" target="_blank" rel="noopener noreferrer">style-loader</a>可以把CSS插入DOM中</li></ul><h3 id="_3-1-安装模块" tabindex="-1"><a class="header-anchor" href="#_3-1-安装模块"><span>3.1 安装模块</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">npm i style-loader css-loader -D</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_3-2-webpack-config-js" tabindex="-1"><a class="header-anchor" href="#_3-2-webpack-config-js"><span>3.2 webpack.config.js</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">const path = require(&#39;path&#39;);</span>
<span class="line">const HtmlWebpackPlugin = require(&#39;html-webpack-plugin&#39;);</span>
<span class="line">module.exports = {</span>
<span class="line">  mode: &#39;development&#39;,</span>
<span class="line">  devtool:false,</span>
<span class="line">  entry: &#39;./src/index.js&#39;,</span>
<span class="line">  output: {</span>
<span class="line">    path: path.resolve(__dirname, &#39;dist&#39;),</span>
<span class="line">    filename: &#39;[name].js&#39;</span>
<span class="line">  },</span>
<span class="line">  module: {</span>
<span class="line">    rules: [</span>
<span class="line">     { test: /\\.css$/, use: [&#39;style-loader&#39;,&#39;css-loader&#39;] }</span>
<span class="line">    ]</span>
<span class="line">  },</span>
<span class="line">  plugins: [</span>
<span class="line">    new HtmlWebpackPlugin({template: &#39;./src/index.html&#39;})</span>
<span class="line">  ]</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-src-bg-css" tabindex="-1"><a class="header-anchor" href="#_3-3-src-bg-css"><span>3.3 src\\bg.css</span></a></h3><p>src\\bg.css</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">body{</span>
<span class="line">    background-color: green;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-4-src-index-css" tabindex="-1"><a class="header-anchor" href="#_3-4-src-index-css"><span>3.4 src\\index.css</span></a></h3><p>src\\index.css</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line">@<span class="token keyword">import</span> <span class="token string">&quot;./bg.css&quot;</span><span class="token punctuation">;</span></span>
<span class="line">body<span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">color</span><span class="token operator">:</span>red<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-5-src-index-js" tabindex="-1"><a class="header-anchor" href="#_3-5-src-index-js"><span>3.5 src\\index.js</span></a></h3><p>src\\index.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">+import &#39;./index.css&#39;;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="_4-支持less和sass" tabindex="-1"><a class="header-anchor" href="#_4-支持less和sass"><span>4. 支持less和sass</span></a></h2><ul><li><a href="https://www.npmjs.com/package/node-sass" target="_blank" rel="noopener noreferrer">node-sass</a></li></ul><h3 id="_4-1-安装" tabindex="-1"><a class="header-anchor" href="#_4-1-安装"><span>4.1 安装</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">npm i less less-loader -D</span>
<span class="line">npm i node-sass sass-loader -D</span>
<span class="line">npm rebuild node-sass</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-webpack-config-js" tabindex="-1"><a class="header-anchor" href="#_4-2-webpack-config-js"><span>4.2 webpack.config.js</span></a></h3><p>webpack.config.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">const path = require(&#39;path&#39;);</span>
<span class="line">const HtmlWebpackPlugin = require(&#39;html-webpack-plugin&#39;);</span>
<span class="line">module.exports = {</span>
<span class="line">  mode: &#39;development&#39;,</span>
<span class="line">  devtool: false,</span>
<span class="line">  entry: &#39;./src/index.js&#39;,</span>
<span class="line">  output: {</span>
<span class="line">    path: path.resolve(__dirname, &#39;dist&#39;),</span>
<span class="line">    filename: &#39;[name].js&#39;</span>
<span class="line">  },</span>
<span class="line">  module: {</span>
<span class="line">    rules: [</span>
<span class="line">      { test: /\\.css$/, use: [&#39;style-loader&#39;, &#39;css-loader&#39;] },</span>
<span class="line">+     { test: /\\.less$/, use: [&#39;style-loader&#39;,&#39;css-loader&#39;, &#39;less-loader&#39;] },</span>
<span class="line">+     { test: /\\.scss$/, use: [&#39;style-loader&#39;,&#39;css-loader&#39;, &#39;sass-loader&#39;] }</span>
<span class="line">    ]</span>
<span class="line">  },</span>
<span class="line">  plugins: [</span>
<span class="line">    new HtmlWebpackPlugin({ template: &#39;./src/index.html&#39; })</span>
<span class="line">  ]</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-src-index-html" tabindex="-1"><a class="header-anchor" href="#_4-3-src-index-html"><span>4.3 src\\index.html</span></a></h3><p>src\\index.html</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;!DOCTYPE html&gt;</span>
<span class="line">&lt;html lang=&quot;en&quot;&gt;</span>
<span class="line">&lt;head&gt;</span>
<span class="line">    &lt;meta charset=&quot;UTF-8&quot;&gt;</span>
<span class="line">    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;</span>
<span class="line">    &lt;title&gt;webpack5&lt;/title&gt;</span>
<span class="line">&lt;/head&gt;</span>
<span class="line">&lt;body&gt;</span>
<span class="line">+  &lt;div id=&quot;less-container&quot;&gt;less-container&lt;/div&gt;</span>
<span class="line">+  &lt;div id=&quot;sass-container&quot;&gt;sass-container&lt;/div&gt;</span>
<span class="line">&lt;/body&gt;</span>
<span class="line">&lt;/html&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-4-src-index-js" tabindex="-1"><a class="header-anchor" href="#_4-4-src-index-js"><span>4.4 src\\index.js</span></a></h3><p>src\\index.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import &#39;./index.css&#39;;</span>
<span class="line">+import &#39;./less.less&#39;;</span>
<span class="line">+import &#39;./sass.scss&#39;;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-5-src-less-less" tabindex="-1"><a class="header-anchor" href="#_4-5-src-less-less"><span>4.5 src\\less.less</span></a></h3><p>src\\less.less</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">@color:blue;</span>
<span class="line"> </span>
<span class="line">    color:@color;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-6-src-sass-scss" tabindex="-1"><a class="header-anchor" href="#_4-6-src-sass-scss"><span>4.6 src\\sass.scss</span></a></h3><p>src\\sass.scss</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">$color:orange;</span>
<span class="line"> </span>
<span class="line">    color:$color;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-css兼容性" tabindex="-1"><a class="header-anchor" href="#_5-css兼容性"><span>5. CSS兼容性</span></a></h2><ul><li>为了浏览器的兼容性，有时候我们必须加入-webkit,-ms,-o,-moz这些前缀 <ul><li>Trident内核：主要代表为IE浏览器, 前缀为-ms</li><li>Gecko内核：主要代表为Firefox, 前缀为-moz</li><li>Presto内核：主要代表为Opera, 前缀为-o</li><li>Webkit内核：产要代表为Chrome和Safari, 前缀为-webkit</li></ul></li><li>伪元素<code>::placeholder</code>可以选择一个表单元素的占位文本，它允许开发者和设计师自定义占位文本的样式。</li></ul><h3 id="_5-1-安装" tabindex="-1"><a class="header-anchor" href="#_5-1-安装"><span>5.1 安装</span></a></h3><ul><li><a href="https://caniuse.com/" target="_blank" rel="noopener noreferrer">https://caniuse.com/</a></li><li><a href="https://github.com/webpack-contrib/postcss-loader" target="_blank" rel="noopener noreferrer">postcss-loader</a>可以使用PostCSS处理CSS</li><li><a href="https://github.com/csstools/postcss-preset-env" target="_blank" rel="noopener noreferrer">postcss-preset-env</a>把现代的CSS转换成大多数浏览器能理解的</li><li>PostCSS Preset Env已经包含了<code>autoprefixer</code>和<code>browsers</code>选项</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">npm i postcss-loader postcss-preset-env -D</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_5-2-postcss-config-js" tabindex="-1"><a class="header-anchor" href="#_5-2-postcss-config-js"><span>5.2 postcss.config.js</span></a></h3><p>postcss.config.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">let</span> postcssPresetEnv <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;postcss-preset-env&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">module<span class="token punctuation">.</span>exports<span class="token operator">=</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">plugins</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token function">postcssPresetEnv</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">browsers</span><span class="token operator">:</span> <span class="token string">&#39;last 5 version&#39;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-3-webpack-config-js" tabindex="-1"><a class="header-anchor" href="#_5-3-webpack-config-js"><span>5.3 webpack.config.js</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">const path = require(&#39;path&#39;);</span>
<span class="line">const HtmlWebpackPlugin = require(&#39;html-webpack-plugin&#39;);</span>
<span class="line">module.exports = {</span>
<span class="line">  mode: &#39;development&#39;,</span>
<span class="line">  devtool: false,</span>
<span class="line">  entry: &#39;./src/index.js&#39;,</span>
<span class="line">  output: {</span>
<span class="line">    path: path.resolve(__dirname, &#39;dist&#39;),</span>
<span class="line">    filename: &#39;[name].js&#39;</span>
<span class="line">  },</span>
<span class="line">  module: {</span>
<span class="line">    rules: [</span>
<span class="line">+     { test: /\\.css$/, use: [&#39;style-loader&#39;, &#39;css-loader&#39;,&#39;postcss-loader&#39;] },</span>
<span class="line">+     { test: /\\.less$/, use: [&#39;style-loader&#39;,&#39;css-loader&#39;,&#39;postcss-loader&#39;,&#39;less-loader&#39;] },</span>
<span class="line">+     { test: /\\.scss$/, use: [&#39;style-loader&#39;,&#39;css-loader&#39;,&#39;postcss-loader&#39;,&#39;sass-loader&#39;] }</span>
<span class="line">    ]</span>
<span class="line">  },</span>
<span class="line">  plugins: [</span>
<span class="line">    new HtmlWebpackPlugin({ template: &#39;./src/index.html&#39; })</span>
<span class="line">  ]</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-4-src-index-css" tabindex="-1"><a class="header-anchor" href="#_5-4-src-index-css"><span>5.4 src\\index.css</span></a></h3><p>src\\index.css</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">@import &quot;./bg.css&quot;;</span>
<span class="line">body{</span>
<span class="line">    color:red;</span>
<span class="line">}</span>
<span class="line"> +</span>
<span class="line">+    background-color: red;</span>
<span class="line">+    width: 100px;</span>
<span class="line">+    height: 10px;</span>
<span class="line">+    transform: rotate(10deg);</span>
<span class="line">+}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-5-src-index-html" tabindex="-1"><a class="header-anchor" href="#_5-5-src-index-html"><span>5.5 src\\index.html</span></a></h3><p>src\\index.html</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;!DOCTYPE html&gt;</span>
<span class="line">&lt;html lang=&quot;en&quot;&gt;</span>
<span class="line">&lt;head&gt;</span>
<span class="line">    &lt;meta charset=&quot;UTF-8&quot;&gt;</span>
<span class="line">    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;</span>
<span class="line">    &lt;title&gt;webpack5&lt;/title&gt;</span>
<span class="line">&lt;/head&gt;</span>
<span class="line">&lt;body&gt;</span>
<span class="line">  &lt;div id=&quot;less-container&quot;&gt;less-container&lt;/div&gt;</span>
<span class="line">  &lt;div id=&quot;sass-container&quot;&gt;sass-container&lt;/div&gt;</span>
<span class="line">+ &lt;div id=&quot;root&quot;&gt;&lt;/div&gt;</span>
<span class="line">&lt;/body&gt;</span>
<span class="line">&lt;/html&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-6-package-json" tabindex="-1"><a class="header-anchor" href="#_5-6-package-json"><span>5.6 package.json</span></a></h3><ul><li><a href="https://github.com/browserslist/browserslist" target="_blank" rel="noopener noreferrer">browserslist</a></li><li><a href="https://github.com/browserslist/browserslist-example" target="_blank" rel="noopener noreferrer">browserslist-example</a></li><li>.browserslistrc</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">{</span>
<span class="line">+  &quot;browserslist&quot;: {</span>
<span class="line">+    &quot;development&quot;: [</span>
<span class="line">+      &quot;last 1 chrome version&quot;,</span>
<span class="line">+      &quot;last 1 firefox version&quot;,</span>
<span class="line">+      &quot;last 1 safari version&quot;</span>
<span class="line">+    ],</span>
<span class="line">+    &quot;production&quot;: [</span>
<span class="line">+      &quot;&gt;0.2%&quot;</span>
<span class="line">+    ]</span>
<span class="line">+  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-资源模块" tabindex="-1"><a class="header-anchor" href="#_6-资源模块"><span>6 资源模块</span></a></h2><ul><li>资源模块是一种模块类型，它允许使用资源文件（字体，图标等）而无需配置额外 loader</li><li><code>raw-loader</code> =&gt; <code>asset/source</code> 导出资源的源代码</li><li><code>file-loader</code> =&gt; <code>asset/resource</code> 发送一个单独的文件并导出 URL</li><li><code>url-loader</code> =&gt; <code>asset/inline</code> 导出一个资源的 data URI</li><li>asset 在导出一个 data URI 和发送一个单独的文件之间自动选择。之前通过使用 <code>url-loader</code>，并且配置资源体积限制实现</li><li>[Rule.type](https://webpack.js.org/configuration/module/</li><li><a href="https://webpack.js.org/guides/asset-modules/" target="_blank" rel="noopener noreferrer">asset-modules</a></li></ul><h3 id="_6-1-webpack-config-js" tabindex="-1"><a class="header-anchor" href="#_6-1-webpack-config-js"><span>6.1 webpack.config.js</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">module.exports = {</span>
<span class="line">    module:{</span>
<span class="line">        rules: [</span>
<span class="line">            {</span>
<span class="line">                test: /\\.js$/,</span>
<span class="line">                use: [</span>
<span class="line">                    {</span>
<span class="line">                        loader: &#39;babel-loader&#39;,</span>
<span class="line">                        options: {</span>
<span class="line">                            presets: [</span>
<span class="line">                                &quot;@babel/preset-react&quot;</span>
<span class="line">                            ]</span>
<span class="line">                        },</span>
<span class="line"></span>
<span class="line">                    }</span>
<span class="line">                ],</span>
<span class="line">                exclude:/node_modules/</span>
<span class="line">            },</span>
<span class="line">+           {</span>
<span class="line">+               test: /\\.png$/,</span>
<span class="line">+               type: &#39;asset/resource&#39;</span>
<span class="line">+           },</span>
<span class="line">+           {</span>
<span class="line">+               test: /\\.ico$/,</span>
<span class="line">+               type: &#39;asset/inline&#39;</span>
<span class="line">+           },</span>
<span class="line">+           {</span>
<span class="line">+               test: /\\.txt$/,</span>
<span class="line">+               type: &#39;asset/source&#39;</span>
<span class="line">+           },</span>
<span class="line">+           {</span>
<span class="line">+               test: /\\.jpg$/,</span>
<span class="line">+               type: &#39;asset&#39;,</span>
<span class="line">+               parser: {</span>
<span class="line">+                   dataUrlCondition: {</span>
<span class="line">+                     maxSize: 4 * 1024 // 4kb</span>
<span class="line">+                   }</span>
<span class="line">+               }</span>
<span class="line">+           }</span>
<span class="line">        ]</span>
<span class="line">    },</span>
<span class="line">  experiments: {</span>
<span class="line">    asset: true</span>
<span class="line">  },</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-2-src-index-js" tabindex="-1"><a class="header-anchor" href="#_6-2-src-index-js"><span>6.2 src\\index.js</span></a></h3><p>src\\index.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">+ import png from &#39;./assets/logo.png&#39;;</span>
<span class="line">+ import ico from &#39;./assets/logo.ico&#39;;</span>
<span class="line">+ import jpg from &#39;./assets/logo.jpg&#39;;</span>
<span class="line">+ import txt from &#39;./assets/logo.txt&#39;;</span>
<span class="line">+ console.log(png,ico,jpg,txt);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-js兼容性处理" tabindex="-1"><a class="header-anchor" href="#_7-js兼容性处理"><span>7 JS兼容性处理</span></a></h2><ul><li>Babel其实是一个编译JavaScript的平台,可以把ES6/ES7,React的JSX转义为ES5</li></ul><h3 id="_7-1-babel-preset-env" tabindex="-1"><a class="header-anchor" href="#_7-1-babel-preset-env"><span>7.1 @babel/preset-env</span></a></h3><ul><li>Babel默认只转换新的最新ES语法,比如箭头函数</li></ul><h3 id="_7-1-1-安装依赖" tabindex="-1"><a class="header-anchor" href="#_7-1-1-安装依赖"><span>7.1.1 安装依赖</span></a></h3><ul><li><a href="https://www.npmjs.com/package/babel-loader" target="_blank" rel="noopener noreferrer">babel-loader</a>使用Babel和webpack转译JavaScript文件</li><li><a href="https://www.npmjs.com/package/@babel/core" target="_blank" rel="noopener noreferrer">@babel/@babel/core</a>Babel编译的核心包</li><li><a href="https://www.babeljs.cn/docs/babel-preset-env" target="_blank" rel="noopener noreferrer">babel-preset-env</a></li><li><a href="https://www.npmjs.com/package/@babel/preset-react" target="_blank" rel="noopener noreferrer">@babel/@babel/preset-react</a>React插件的Babel预设</li><li><a href="https://babeljs.io/docs/en/babel-plugin-proposal-decorators" target="_blank" rel="noopener noreferrer">@babel/plugin-proposal-decorators</a>把类和对象装饰器编译成ES5</li><li><a href="https://babeljs.io/docs/en/babel-plugin-proposal-class-properties" target="_blank" rel="noopener noreferrer">@babel/plugin-proposal-class-properties</a>转换静态类属性以及使用属性初始值化语法声明的属性</li></ul><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line">npm i babel<span class="token operator">-</span>loader @babel<span class="token operator">/</span>core @babel<span class="token operator">/</span>preset<span class="token operator">-</span>env @babel<span class="token operator">/</span>preset<span class="token operator">-</span>react  <span class="token operator">-</span><span class="token constant">D</span></span>
<span class="line">npm i @babel<span class="token operator">/</span>plugin<span class="token operator">-</span>proposal<span class="token operator">-</span>decorators @babel<span class="token operator">/</span>plugin<span class="token operator">-</span>proposal<span class="token operator">-</span><span class="token keyword">class</span><span class="token operator">-</span>properties @babel<span class="token operator">/</span>plugin<span class="token operator">-</span>proposal<span class="token operator">-</span><span class="token keyword">private</span><span class="token operator">-</span>property<span class="token operator">-</span><span class="token keyword">in</span><span class="token operator">-</span>object  @babel<span class="token operator">/</span>plugin<span class="token operator">-</span>proposal<span class="token operator">-</span><span class="token keyword">private</span><span class="token operator">-</span>methods <span class="token operator">-</span><span class="token constant">D</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-1-2-webpack-config-js" tabindex="-1"><a class="header-anchor" href="#_7-1-2-webpack-config-js"><span>7.1.2 webpack.config.js</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">const path = require(&#39;path&#39;);</span>
<span class="line">const HtmlWebpackPlugin = require(&#39;html-webpack-plugin&#39;);</span>
<span class="line">const MiniCssExtractPlugin = require(&#39;mini-css-extract-plugin&#39;);</span>
<span class="line">module.exports = {</span>
<span class="line">  mode: &#39;development&#39;,</span>
<span class="line">  devtool: false,</span>
<span class="line">  entry: &#39;./src/index.js&#39;,</span>
<span class="line">  output: {</span>
<span class="line">    path: path.resolve(__dirname, &#39;dist&#39;),</span>
<span class="line">    filename: &#39;main.js&#39;,</span>
<span class="line">  },</span>
<span class="line">  module: {</span>
<span class="line">    rules: [</span>
<span class="line">+      {</span>
<span class="line">+        test: /\\.jsx?$/,</span>
<span class="line">+        use: {</span>
<span class="line">+          loader: &#39;babel-loader&#39;,</span>
<span class="line">+          options: {</span>
<span class="line">+            presets: [&quot;@babel/preset-env&quot;, &#39;@babel/preset-react&#39;],</span>
<span class="line">+            plugins: [</span>
<span class="line">+              [&quot;@babel/plugin-proposal-decorators&quot;, { legacy: true }],</span>
<span class="line">+              [&quot;@babel/plugin-proposal-private-property-in-object&quot;, { &quot;loose&quot;: true }],</span>
<span class="line">+              [&quot;@babel/plugin-proposal-private-methods&quot;, { &quot;loose&quot;: true }],</span>
<span class="line">+              [&quot;@babel/plugin-proposal-class-properties&quot;, { loose: true }],</span>
<span class="line">+            ],</span>
<span class="line">+          },</span>
<span class="line">+        },</span>
<span class="line">+      },</span>
<span class="line">      { test: /\\.css$/, use: [&#39;style-loader&#39;, &#39;css-loader&#39;, &#39;postcss-loader&#39;] },</span>
<span class="line">      { test: /\\.less$/, use: [&#39;style-loader&#39;, &#39;css-loader&#39;,&#39;postcss-loader&#39;, &#39;less-loader&#39;] },</span>
<span class="line">      { test: /\\.scss$/, use: [&#39;style-loader&#39;, &#39;css-loader&#39;, &#39;postcss-loader&#39;,&#39;sass-loader&#39;] },</span>
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
<span class="line">    new HtmlWebpackPlugin({ template: &#39;./src/index.html&#39; })</span>
<span class="line">  ]</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-1-3-src-index-js" tabindex="-1"><a class="header-anchor" href="#_7-1-3-src-index-js"><span>7.1.3 src\\index.js</span></a></h3><p>src\\index.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">+function readonly(target,key,descriptor) {</span>
<span class="line">+    descriptor.writable=false;</span>
<span class="line">+}</span>
<span class="line">+</span>
<span class="line">+class Person{</span>
<span class="line">+    @readonly PI=3.14;</span>
<span class="line">+}</span>
<span class="line">+let p1=new Person();</span>
<span class="line">+p1.PI=3.15;</span>
<span class="line">+console.log(p1)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-1-4-jsconfig-json" tabindex="-1"><a class="header-anchor" href="#_7-1-4-jsconfig-json"><span>7.1.4 jsconfig.json</span></a></h3><ul><li><a href="https://code.visualstudio.com/docs/languages/jsconfig" target="_blank" rel="noopener noreferrer">jsconfig</a></li></ul><p>jsconfig.json</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string-property property">&quot;experimentalDecorators&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-eslint代码校验" tabindex="-1"><a class="header-anchor" href="#_8-eslint代码校验"><span>8. ESLint代码校验</span></a></h2><h3 id="_8-1-安装" tabindex="-1"><a class="header-anchor" href="#_8-1-安装"><span>8.1 安装</span></a></h3><ul><li>[eslint](https://eslint.org/docs/developer-guide/nodejs-api</li><li><a href="https://www.npmjs.com/package/eslint-loader" target="_blank" rel="noopener noreferrer">eslint-loader</a></li><li><a href="https://eslint.org/docs/user-guide/configuring" target="_blank" rel="noopener noreferrer">configuring</a></li><li><a href="https://www.npmjs.com/package/babel-eslint" target="_blank" rel="noopener noreferrer">babel-eslint</a></li><li><a href="https://cloud.tencent.com/developer/chapter/12618" target="_blank" rel="noopener noreferrer">Rules</a></li><li><a href="https://segmentfault.com/a/1190000008742240" target="_blank" rel="noopener noreferrer">ESlint 语法检测配置说明</a></li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">npm install eslint eslint-loader babel-eslint --D</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_8-2-webpack-config-js" tabindex="-1"><a class="header-anchor" href="#_8-2-webpack-config-js"><span>8.2 webpack.config.js</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">const path = require(&#39;path&#39;);</span>
<span class="line">const HtmlWebpackPlugin = require(&#39;html-webpack-plugin&#39;);</span>
<span class="line">const MiniCssExtractPlugin = require(&#39;mini-css-extract-plugin&#39;);</span>
<span class="line">module.exports = {</span>
<span class="line">  mode: &#39;development&#39;,</span>
<span class="line">  devtool: false,</span>
<span class="line">  entry: &#39;./src/index.js&#39;,</span>
<span class="line">  output: {</span>
<span class="line">    path: path.resolve(__dirname, &#39;dist&#39;),</span>
<span class="line">    filename: &#39;[name].js&#39;,</span>
<span class="line">  },</span>
<span class="line">  module: {</span>
<span class="line">    rules: [</span>
<span class="line">+      {</span>
<span class="line">+        test: /\\.jsx?$/,</span>
<span class="line">+        loader: &#39;eslint-loader&#39;,</span>
<span class="line">+        enforce: &#39;pre&#39;,</span>
<span class="line">+        options: { fix: true },</span>
<span class="line">+        exclude: /node_modules/,</span>
<span class="line">+      },</span>
<span class="line">      {</span>
<span class="line">        test: /\\.jsx?$/,</span>
<span class="line">        use: {</span>
<span class="line">          loader: &#39;babel-loader&#39;,</span>
<span class="line">          options: {</span>
<span class="line">            &quot;presets&quot;: [&quot;@babel/preset-env&quot;],</span>
<span class="line">            &quot;plugins&quot;: [</span>
<span class="line">              [&quot;@babel/plugin-proposal-decorators&quot;, { legacy: true }],</span>
<span class="line">              [&quot;@babel/plugin-proposal-private-property-in-object&quot;, { &quot;loose&quot;: true }],</span>
<span class="line">              [&quot;@babel/plugin-proposal-private-methods&quot;, { &quot;loose&quot;: true }],</span>
<span class="line">              [&quot;@babel/plugin-proposal-class-properties&quot;, { loose: true }],</span>
<span class="line">            ]</span>
<span class="line">          }</span>
<span class="line">        },</span>
<span class="line">        include: path.join(__dirname, &#39;src&#39;),</span>
<span class="line">        exclude: /node_modules/</span>
<span class="line">      },</span>
<span class="line">      { test: /\\.css$/, use: [&#39;style-loader&#39;, &#39;css-loader&#39;, &#39;postcss-loader&#39;] },</span>
<span class="line">      { test: /\\.less$/, use: [&#39;style-loader&#39;, &#39;css-loader&#39;,&#39;postcss-loader&#39;, &#39;less-loader&#39;] },</span>
<span class="line">      { test: /\\.scss$/, use: [&#39;style-loader&#39;, &#39;css-loader&#39;, &#39;postcss-loader&#39;,&#39;sass-loader&#39;] },</span>
<span class="line">      {</span>
<span class="line">        test: /\\.(jpg|png|bmp|gif|svg)$/, use: [{</span>
<span class="line">          loader: &#39;url-loader&#39;, options: {</span>
<span class="line">            limit: 10</span>
<span class="line">          }</span>
<span class="line">        }]</span>
<span class="line">      }</span>
<span class="line">    ]</span>
<span class="line">  },</span>
<span class="line">  plugins: [</span>
<span class="line">    new HtmlWebpackPlugin({ template: &#39;./src/index.html&#39; })</span>
<span class="line">  ]</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-3-src-index-html" tabindex="-1"><a class="header-anchor" href="#_8-3-src-index-html"><span>8.3 src\\index.html</span></a></h3><p>src\\index.html</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;!DOCTYPE html&gt;</span>
<span class="line">&lt;html lang=&quot;en&quot;&gt;</span>
<span class="line">&lt;head&gt;</span>
<span class="line">    &lt;meta charset=&quot;UTF-8&quot;&gt;</span>
<span class="line">    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;</span>
<span class="line">    &lt;title&gt;webpack5&lt;/title&gt;</span>
<span class="line">&lt;/head&gt;</span>
<span class="line">&lt;body&gt;</span>
<span class="line">+  &lt;div id=&quot;root&quot;&gt;&lt;/div&gt;</span>
<span class="line">&lt;/body&gt;</span>
<span class="line">&lt;/html&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-4-src-index-js" tabindex="-1"><a class="header-anchor" href="#_8-4-src-index-js"><span>8.4 src\\index.js</span></a></h3><p>src\\index.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">+import React from &quot;react&quot;;</span>
<span class="line">+import ReactDOM from &quot;react-dom&quot;;</span>
<span class="line">+ReactDOM.render(&quot;hello&quot;,document.getElementById(&quot;root&quot;));</span>
<span class="line">+</span>
<span class="line">+function readonly(target,key,descriptor) {</span>
<span class="line">+    descriptor.writable=false;</span>
<span class="line">+}</span>
<span class="line">+</span>
<span class="line">+class Person{</span>
<span class="line">+    @readonly PI=3.14;</span>
<span class="line">+}</span>
<span class="line">+let p1=new Person();</span>
<span class="line">+p1.PI=3.15;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-5-eslintrc-js" tabindex="-1"><a class="header-anchor" href="#_8-5-eslintrc-js"><span>8.5 .eslintrc.js</span></a></h3><p>.eslintrc.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">root</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">parser</span><span class="token operator">:</span><span class="token string">&quot;babel-eslint&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">//指定解析器选项</span></span>
<span class="line">    <span class="token literal-property property">parserOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">sourceType</span><span class="token operator">:</span> <span class="token string">&quot;module&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">ecmaVersion</span><span class="token operator">:</span> <span class="token number">2015</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">//指定脚本的运行环境</span></span>
<span class="line">    <span class="token literal-property property">env</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">browser</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">// 启用的规则及其各自的错误级别</span></span>
<span class="line">    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string-property property">&quot;indent&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span><span class="token comment">//缩进风格</span></span>
<span class="line">        <span class="token string-property property">&quot;quotes&quot;</span><span class="token operator">:</span>  <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span><span class="token comment">//引号类型 </span></span>
<span class="line">        <span class="token string-property property">&quot;no-console&quot;</span><span class="token operator">:</span> <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span><span class="token comment">//禁止使用console</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-6-airbnb" tabindex="-1"><a class="header-anchor" href="#_8-6-airbnb"><span>8.6 airbnb</span></a></h3><ul><li><a href="https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb" target="_blank" rel="noopener noreferrer">eslint-config-airbnb</a></li></ul><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line">npm i eslint<span class="token operator">-</span>config<span class="token operator">-</span>airbnb eslint<span class="token operator">-</span>loader eslint eslint<span class="token operator">-</span>plugin<span class="token operator">-</span><span class="token keyword">import</span> eslint<span class="token operator">-</span>plugin<span class="token operator">-</span>react eslint<span class="token operator">-</span>plugin<span class="token operator">-</span>react<span class="token operator">-</span>hooks and eslint<span class="token operator">-</span>plugin<span class="token operator">-</span>jsx<span class="token operator">-</span>a11y <span class="token operator">-</span><span class="token constant">D</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>eslintrc.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">&quot;parser&quot;</span><span class="token operator">:</span><span class="token string">&quot;babel-eslint&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">&quot;extends&quot;</span><span class="token operator">:</span><span class="token string">&quot;airbnb&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">&quot;rules&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token string-property property">&quot;semi&quot;</span><span class="token operator">:</span><span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">&quot;no-console&quot;</span><span class="token operator">:</span><span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">&quot;linebreak-style&quot;</span><span class="token operator">:</span><span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">&quot;eol-last&quot;</span><span class="token operator">:</span><span class="token string">&quot;off&quot;</span></span>
<span class="line">        <span class="token comment">//&quot;indent&quot;:[&quot;error&quot;,2]</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">&quot;env&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token string-property property">&quot;browser&quot;</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">&quot;node&quot;</span><span class="token operator">:</span><span class="token boolean">true</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-7-自动修复" tabindex="-1"><a class="header-anchor" href="#_8-7-自动修复"><span>8.7 自动修复</span></a></h3><ul><li>安装vscode的<a href="https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint" target="_blank" rel="noopener noreferrer">eslint</a>插件</li><li>配置自动修复参数</li></ul><p>.vscode\\settings.json</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">&quot;eslint.validate&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token string">&quot;javascript&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&quot;javascriptreact&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&quot;typescript&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&quot;typescriptreact&quot;</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">&quot;editor.codeActionsOnSave&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string-property property">&quot;source.fixAll.eslint&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-服务器代理" tabindex="-1"><a class="header-anchor" href="#_9-服务器代理"><span>9. 服务器代理</span></a></h2><p>如果你有单独的后端开发服务器 API，并且希望在同域名下发送 API 请求 ，那么代理某些 URL 会很有用。</p><h3 id="_9-1-不修改路径" tabindex="-1"><a class="header-anchor" href="#_9-1-不修改路径"><span>9.1 不修改路径</span></a></h3><ul><li>请求到 /api/users 现在会被代理到请求 <a href="http://localhost:3000/api/users%E3%80%82" target="_blank" rel="noopener noreferrer">http://localhost:3000/api/users。</a></li></ul><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">&quot;/api&quot;</span><span class="token operator">:</span> <span class="token string">&#39;http://localhost:3000&#39;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-2-修改路径" tabindex="-1"><a class="header-anchor" href="#_9-2-修改路径"><span>9.2 修改路径</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string-property property">&quot;/api&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">       <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&#39;http://localhost:3000&#39;</span><span class="token punctuation">,</span></span>
<span class="line">       <span class="token literal-property property">pathRewrite</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token string-property property">&quot;^/api&quot;</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">}</span>        </span>
<span class="line">      <span class="token punctuation">}</span>            </span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-3-onbeforesetupmiddleware" tabindex="-1"><a class="header-anchor" href="#_9-3-onbeforesetupmiddleware"><span>9.3 onBeforeSetupMiddleware</span></a></h3><ul><li>onBeforeSetupMiddleware 在 webpack-dev-server 静态资源中间件处理之前，可以用于拦截部分请求返回特定内容，或者实现简单的数据 mock。<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token function">onBeforeSetupMiddleware</span><span class="token punctuation">(</span><span class="token parameter">devServer</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">// express()</span></span>
<span class="line">    devServer<span class="token punctuation">.</span>app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/api/users&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">      res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="_9-4-webpack-dev-middleware" tabindex="-1"><a class="header-anchor" href="#_9-4-webpack-dev-middleware"><span>9.4 webpack-dev-middleware</span></a></h3><p><a href="https://www.npmjs.com/package/" target="_blank" rel="noopener noreferrer">webpack-dev-middleware</a>就是在 Express 中提供 <code>webpack-dev-server</code> 静态服务能力的一个中间件</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">npm install webpack-dev-middleware --save-dev</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> webpack <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;webpack&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> webpackDevMiddleware <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;webpack-dev-middleware&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> webpackOptions <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./webpack.config&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">webpackOptions<span class="token punctuation">.</span>mode <span class="token operator">=</span> <span class="token string">&#39;development&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> compiler <span class="token operator">=</span> <span class="token function">webpack</span><span class="token punctuation">(</span>webpackOptions<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">webpackDevMiddleware</span><span class="token punctuation">(</span>compiler<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>webpack-dev-server 的好处是相对简单，直接安装依赖后执行命令即可</li><li>而使用<code>webpack-dev-middleware</code>的好处是可以在既有的 Express 代码基础上快速添加 webpack-dev-server 的功能，同时利用 Express 来根据需要添加更多的功能，如 mock 服务、代理 API 请求等</li></ul>`,181)])])}const r=n(i,[["render",p]]),o=JSON.parse('{"path":"/strong/103.1.webpack-usage.html","title":"","lang":"en-US","frontmatter":{},"git":{"updatedTime":1681290319000,"contributors":[{"name":"yutao","username":"yutao","email":"642231346@qq.com","commits":1,"url":"https://github.com/yutao"}],"changelog":[{"hash":"f5ab8c9d34991ec274f7f652439afe5b2afb6147","time":1681290319000,"email":"642231346@qq.com","author":"yutao","message":"modify"}]},"filePathRelative":"strong/103.1.webpack-usage.md"}');export{r as comp,o as data};
