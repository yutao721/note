import{_ as n,c as a,a as e,o as l}from"./app-CD1YpnS1.js";const i={};function p(t,s){return l(),a("div",null,[...s[0]||(s[0]=[e(`<h2 id="_1-初始化项目" tabindex="-1"><a class="header-anchor" href="#_1-初始化项目"><span>1. 初始化项目</span></a></h2><ul><li><a href="http://img.zhufengpeixun.cn/tree4.html" target="_blank" rel="noopener noreferrer">项目预览</a></li></ul><h3 id="_1-1-创建项目" tabindex="-1"><a class="header-anchor" href="#_1-1-创建项目"><span>1.1 创建项目</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">mkdir zhufeng_prepare_tree</span>
<span class="line">cd zhufeng_prepare_tree</span>
<span class="line">cnpm init -y</span>
<span class="line">touch .gitignore</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-安装依赖" tabindex="-1"><a class="header-anchor" href="#_1-2-安装依赖"><span>1.2 安装依赖</span></a></h3><ul><li><a href="https://github.com/DefinitelyTyped/DefinitelyTyped" target="_blank" rel="noopener noreferrer">@types</a>开头的包都是typeScript的声明文件，可以进入<code>node_modules/@types/XX/index.d.ts</code>进行查看</li></ul><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line">cnpm i react @types<span class="token operator">/</span>react react<span class="token operator">-</span>dom @types<span class="token operator">/</span>react<span class="token operator">-</span>dom <span class="token operator">-</span><span class="token constant">S</span></span>
<span class="line">cnpm i webpack webpack<span class="token operator">-</span>cli webpack<span class="token operator">-</span>dev<span class="token operator">-</span>server  <span class="token operator">-</span><span class="token constant">D</span></span>
<span class="line">cnpm i typescript ts<span class="token operator">-</span>loader source<span class="token operator">-</span>map<span class="token operator">-</span>loader style<span class="token operator">-</span>loader css<span class="token operator">-</span>loader  less<span class="token operator">-</span>loader  less file<span class="token operator">-</span>loader url<span class="token operator">-</span>loader html<span class="token operator">-</span>webpack<span class="token operator">-</span>plugin <span class="token operator">-</span><span class="token constant">D</span></span>
<span class="line">cnpm i jest @types<span class="token operator">/</span>jest ts<span class="token operator">-</span>jest jest<span class="token operator">-</span>junit enzyme @types<span class="token operator">/</span>enzyme </span>
<span class="line">enzyme<span class="token operator">-</span>adapter<span class="token operator">-</span>react<span class="token operator">-</span><span class="token number">16</span> @types<span class="token operator">/</span>enzyme<span class="token operator">-</span>adapter<span class="token operator">-</span>react<span class="token operator">-</span><span class="token number">16</span> <span class="token operator">-</span><span class="token constant">D</span></span>
<span class="line">cnpm i axios express qs @types<span class="token operator">/</span>qs <span class="token operator">-</span><span class="token constant">D</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th style="text-align:left;">模块名</th><th style="text-align:left;">使用方式</th></tr></thead><tbody><tr><td style="text-align:left;">react</td><td style="text-align:left;">React is a JavaScript library for creating user interfaces.</td></tr><tr><td style="text-align:left;">react-dom</td><td style="text-align:left;">This package serves as the entry point to the DOM and server renderers for React. It is intended to be paired with the generic React package, which is shipped as react to npm.</td></tr><tr><td style="text-align:left;">webpack</td><td style="text-align:left;">webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging just about any resource or asset.</td></tr><tr><td style="text-align:left;">webpack-cli</td><td style="text-align:left;">The official CLI of webpack</td></tr><tr><td style="text-align:left;">webpack-dev-server</td><td style="text-align:left;">Use webpack with a development server that provides live reloading. This should be used for development only.</td></tr><tr><td style="text-align:left;">typescript</td><td style="text-align:left;">TypeScript is a language for application-scale JavaScript.</td></tr><tr><td style="text-align:left;">ts-loader</td><td style="text-align:left;">This is the TypeScript loader for webpack.</td></tr><tr><td style="text-align:left;">source-map-loader</td><td style="text-align:left;">Extracts source maps from existing source files (from their sourceMappingURL).</td></tr><tr><td style="text-align:left;">style-loader</td><td style="text-align:left;">Inject CSS into the DOM.</td></tr><tr><td style="text-align:left;">css-loader</td><td style="text-align:left;">The css-loader interprets @import and url() like import/require() and will resolve them.</td></tr><tr><td style="text-align:left;">less-loader</td><td style="text-align:left;">A Less loader for webpack. Compiles Less to CSS.</td></tr><tr><td style="text-align:left;">less</td><td style="text-align:left;">This is the JavaScript, official, stable version of Less.</td></tr><tr><td style="text-align:left;">file-loader</td><td style="text-align:left;">The file-loader resolves import/require() on a file into a url and emits the file into the output directory.</td></tr><tr><td style="text-align:left;">url-loader</td><td style="text-align:left;">A loader for webpack which transforms files into base64 URIs.</td></tr><tr><td style="text-align:left;">html-webpack-plugin</td><td style="text-align:left;">Plugin that simplifies creation of HTML files to serve your bundles</td></tr><tr><td style="text-align:left;">jest</td><td style="text-align:left;"><a href="https://jestjs.io/" target="_blank" rel="noopener noreferrer">jest</a> is a delightful JavaScript Testing Framework with a focus on simplicity.</td></tr><tr><td style="text-align:left;">jest-junit</td><td style="text-align:left;">A Jest reporter that creates compatible junit xml files</td></tr><tr><td style="text-align:left;">ts-jest</td><td style="text-align:left;">ts-jest is a TypeScript preprocessor with source map support for Jest that lets you use Jest to test projects written in TypeScript.</td></tr><tr><td style="text-align:left;">enzyme</td><td style="text-align:left;">JavaScript Testing utilities for React</td></tr><tr><td style="text-align:left;">enzyme-adapter-react-16</td><td style="text-align:left;">Enzyme is a JavaScript Testing utility for React that makes it easier to test your React Components&#39; output. You can also manipulate, traverse, and in some ways simulate runtime given the output.</td></tr></tbody></table><h3 id="_1-3-支持typescript" tabindex="-1"><a class="header-anchor" href="#_1-3-支持typescript"><span>1.3 支持typescript</span></a></h3><ul><li>首先需要生成一个<code>tsconfig.json</code>文件来告诉<code>ts-loader</code>如何编译代码TypeScript代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">tsc --init</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;es5&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">&quot;module&quot;</span><span class="token operator">:</span> <span class="token string">&quot;commonjs&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">&quot;jsx&quot;</span><span class="token operator">:</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">&quot;outDir&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./dist&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">&quot;rootDir&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./src&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">&quot;noImplicitAny&quot;</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">&quot;esModuleInterop&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">&quot;include&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token string">&quot;./src/**/*&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">&quot;./typings/**/*&quot;</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">含义</th></tr></thead><tbody><tr><td style="text-align:left;">target</td><td style="text-align:left;">转换成es5</td></tr><tr><td style="text-align:left;">module</td><td style="text-align:left;">代码规范</td></tr><tr><td style="text-align:left;">jsx</td><td style="text-align:left;">react模式会生成React.createElement，在使用前不需要再进行转换操作了，输出文件的扩展名为.js</td></tr><tr><td style="text-align:left;">outDir</td><td style="text-align:left;">指定输出目录</td></tr><tr><td style="text-align:left;">rootDir</td><td style="text-align:left;">指定根目录</td></tr><tr><td style="text-align:left;">sourceMap</td><td style="text-align:left;">把 ts 文件编译成 js 文件的时候，同时生成对应的sourceMap文件</td></tr><tr><td style="text-align:left;">noImplicitAny</td><td style="text-align:left;">如果为true的话，TypeScript 编译器无法推断出类型时，它仍然会生成 JS文件，但是它也会报告一个错误</td></tr><tr><td style="text-align:left;">esModuleInterop</td><td style="text-align:left;">是否转译common.js模块</td></tr><tr><td style="text-align:left;">include</td><td style="text-align:left;">需要编译的目录</td></tr></tbody></table><h3 id="_1-4-webpack-config-js" tabindex="-1"><a class="header-anchor" href="#_1-4-webpack-config-js"><span>1.4 webpack.config.js</span></a></h3><p>webpack.config.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">const</span> webpack <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;webpack&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;html-webpack-plugin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;development&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&quot;./src/index.tsx&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;dist&#39;</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">devtool</span><span class="token operator">:</span> <span class="token string">&quot;source-map&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">hot</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">contentBase</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;dist&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">historyApiFallback</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token literal-property property">index</span><span class="token operator">:</span> <span class="token string">&#39;./index.html&#39;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">extensions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;.ts&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;.tsx&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;.js&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;.json&quot;</span><span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">    <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.tsx?$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;ts-loader&quot;</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">            <span class="token literal-property property">enforce</span><span class="token operator">:</span> <span class="token string">&quot;pre&quot;</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.tsx$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;source-map-loader&quot;</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">            <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.less$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;style-loader&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;less-loader&#39;</span><span class="token punctuation">]</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">            <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(jpg|png|gif|svg)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;url-loader&quot;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&#39;./src/index.html&#39;</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>HotModuleReplacementPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-5-src-index-tsx" tabindex="-1"><a class="header-anchor" href="#_1-5-src-index-tsx"><span>1.5 src\\index.tsx</span></a></h3><p>src\\index.tsx</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_1-6-src-index-html" tabindex="-1"><a class="header-anchor" href="#_1-6-src-index-html"><span>1.6 src\\index.html</span></a></h3><p>src\\index.html</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token operator">&lt;</span>body<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">&quot;root&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-7-package-json" tabindex="-1"><a class="header-anchor" href="#_1-7-package-json"><span>1.7 package.json</span></a></h3><p>package.json</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">  &quot;scripts&quot;: {</span>
<span class="line">    &quot;build&quot;: &quot;webpack&quot;,</span>
<span class="line">    &quot;dev&quot;: &quot;webpack-dev-server&quot;,</span>
<span class="line">    &quot;test&quot;: &quot;jest&quot;</span>
<span class="line">  }</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-单元测试" tabindex="-1"><a class="header-anchor" href="#_2-单元测试"><span>2. 单元测试</span></a></h2><h3 id="_2-1-jest-config-js" tabindex="-1"><a class="header-anchor" href="#_2-1-jest-config-js"><span>2.1 jest.config.js</span></a></h3><p>jest.config.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">verbose</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">clearMocks</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">collectCoverage</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">reporters</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;default&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;jest-junit&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">moduleFileExtensions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;js&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;jsx&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;ts&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;tsx&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">moduleDirectories</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;node_modules&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string-property property">&#39;^.+\\\\.tsx?$&#39;</span><span class="token operator">:</span> <span class="token string">&#39;ts-jest&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">moduleNameMapper</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string-property property">&quot;\\\\.(jpg|jpeg|png|gif||svg|ttf|woff|woff2)$&quot;</span><span class="token operator">:</span></span>
<span class="line">            <span class="token string">&quot;&lt;rootDir&gt;/test/__mocks__/file-mock.js&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">&quot;\\\\.(css|less|sass|scss)$&quot;</span><span class="token operator">:</span></span>
<span class="line">            <span class="token string">&quot;&lt;rootDir&gt;/test/__mocks__/object-mock.js&quot;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">testRegex</span><span class="token operator">:</span> <span class="token string">&#39;(/__tests__/.*|(\\\\.|/)(test|spec))\\\\.(jsx|tsx)$&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">moduleFileExtensions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;ts&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;tsx&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;js&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;jsx&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;json&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;node&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">setupFilesAfterEnv</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;&lt;rootDir&gt;/test/setupTests.tsx&#39;</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-src-utils-tsx" tabindex="-1"><a class="header-anchor" href="#_2-2-src-utils-tsx"><span>2.2 src\\utils.tsx</span></a></h3><p>src\\utils.tsx</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">export function sum(a: number, b: number): number {</span>
<span class="line">    return a + b;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-utils-spec-tsx" tabindex="-1"><a class="header-anchor" href="#_2-3-utils-spec-tsx"><span>2.3 utils.spec.tsx</span></a></h3><p>src__tests__\\utils.spec.tsx</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import { sum } from &#39;../utils&#39;;</span>
<span class="line">describe(&#39;sum&#39;, () =&gt; {</span>
<span class="line">    test(&#39;1+1&#39;, () =&gt; {</span>
<span class="line">        expect(sum(1, 1)).toBe(2);</span>
<span class="line">    });</span>
<span class="line">    test(&#39;2+2&#39;, () =&gt; {</span>
<span class="line">        expect(sum(2, 2)).toBe(4);</span>
<span class="line">    });</span>
<span class="line">});</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-mocks-file-mock-js" tabindex="-1"><a class="header-anchor" href="#_2-4-mocks-file-mock-js"><span>2.4 mocks\\file-mock.js</span></a></h3><p>test__mocks__\\file-mock.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">module.exports = &#39;file-stub&#39;;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_2-5-object-mock-js" tabindex="-1"><a class="header-anchor" href="#_2-5-object-mock-js"><span>2.5 object-mock.js</span></a></h3><p>test__mocks__\\object-mock.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">module.exports = {}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="_3-创建树型菜单" tabindex="-1"><a class="header-anchor" href="#_3-创建树型菜单"><span>3. 创建树型菜单</span></a></h2><p><img src="http://img.zhufengpeixun.cn/treecomponent.png" alt="treecomponent"></p><h3 id="_3-1-src-index-tsx" tabindex="-1"><a class="header-anchor" href="#_3-1-src-index-tsx"><span>3.1 src\\index.tsx</span></a></h3><p>src\\index.tsx</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React from &#39;react&#39;;</span>
<span class="line">import ReactDOM from &#39;react-dom&#39;;</span>
<span class="line">import Tree from &#39;./components/tree&#39;;</span>
<span class="line">import data from &#39;./data&#39;;</span>
<span class="line"></span>
<span class="line">ReactDOM.render(&lt;tree&gt;, document.getElementById(&#39;root&#39;));&lt;/tree&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-src-data-tsx" tabindex="-1"><a class="header-anchor" href="#_3-2-src-data-tsx"><span>3.2 src\\data.tsx</span></a></h3><p>src\\data.tsx</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import { TreeData } from &#39;./typings&#39;;</span>
<span class="line">const data: TreeData = {</span>
<span class="line">    name: &#39;父亲&#39;,</span>
<span class="line">    key: &#39;1&#39;,</span>
<span class="line">    type: &#39;folder&#39;,</span>
<span class="line">    collapsed: false,</span>
<span class="line">    children: [</span>
<span class="line">        {</span>
<span class="line">            name: &#39;儿子1&#39;,</span>
<span class="line">            key: &#39;1-1&#39;,</span>
<span class="line">            type: &#39;folder&#39;,</span>
<span class="line">            collapsed: false,</span>
<span class="line">            children: [</span>
<span class="line">                {</span>
<span class="line">                    name: &#39;孙子1&#39;,</span>
<span class="line">                    key: &#39;1-1-1&#39;,</span>
<span class="line">                    type: &#39;folder&#39;,</span>
<span class="line">                    collapsed: false,</span>
<span class="line">                    children: [</span>
<span class="line">                        {</span>
<span class="line">                            name: &#39;重孙1&#39;,</span>
<span class="line">                            key: &#39;1-1-1-1&#39;,</span>
<span class="line">                            type: &#39;file&#39;,</span>
<span class="line">                            collapsed: false,</span>
<span class="line">                            children: []</span>
<span class="line">                        }</span>
<span class="line">                    ]</span>
<span class="line">                }</span>
<span class="line">            ]</span>
<span class="line">        },</span>
<span class="line">        {</span>
<span class="line">            name: &#39;儿子2&#39;,</span>
<span class="line">            key: &#39;1-2&#39;,</span>
<span class="line">            type: &#39;folder&#39;,</span>
<span class="line">            collapsed: true</span>
<span class="line">        }</span>
<span class="line">    ]</span>
<span class="line">}</span>
<span class="line">export default data;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-typings-tsx" tabindex="-1"><a class="header-anchor" href="#_3-3-typings-tsx"><span>3.3 typings.tsx</span></a></h3><p>src\\typings.tsx</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">export interface TreeData {</span>
<span class="line">    name: string;</span>
<span class="line">    key: string;</span>
<span class="line">    type: string;</span>
<span class="line">    collapsed?: boolean;</span>
<span class="line">    children?: Array&lt;treedata&gt;; parent?: TreeData; }&lt;/treedata&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-4-components-tree-tsx" tabindex="-1"><a class="header-anchor" href="#_3-4-components-tree-tsx"><span>3.4 components\\tree.tsx</span></a></h3><p>src\\components\\tree.tsx</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React from &#39;react&#39;;</span>
<span class="line">import &#39;./index.less&#39;;</span>
<span class="line">import { TreeData } from &#39;../typings&#39;;</span>
<span class="line">interface Props {</span>
<span class="line">    data: TreeData</span>
<span class="line">}</span>
<span class="line">class Tree extends React.Component&lt;props&gt;{ render() { return (</span>
<span class="line">Tree</span>
<span class="line">) } } export default Tree;&lt;/props&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-5-index-less" tabindex="-1"><a class="header-anchor" href="#_3-5-index-less"><span>3.5 index.less</span></a></h3><p>src\\components\\index.less</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">.tree{</span>
<span class="line">    position: fixed;</span>
<span class="line">    left:0;</span>
<span class="line">    top:0;</span>
<span class="line">    bottom:0;</span>
<span class="line">    width:80%;</span>
<span class="line">    overflow-x: hidden;</span>
<span class="line">    overflow-y: auto;</span>
<span class="line">     background-color: </span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-渲染树型结构" tabindex="-1"><a class="header-anchor" href="#_4-渲染树型结构"><span>4. 渲染树型结构</span></a></h2><h3 id="_4-1-src-components-tree-tsx" tabindex="-1"><a class="header-anchor" href="#_4-1-src-components-tree-tsx"><span>4.1 src\\components\\tree.tsx</span></a></h3><p>src\\components\\tree.tsx</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React from &#39;react&#39;;</span>
<span class="line">import &#39;./index.less&#39;;</span>
<span class="line">import { TreeData } from &#39;../typings&#39;;</span>
<span class="line">+import TreeNode from &#39;./tree-node&#39;;</span>
<span class="line">interface Props {</span>
<span class="line">    data: TreeData</span>
<span class="line">}</span>
<span class="line">+interface KeyToNodeMap {</span>
<span class="line">+    [key: string]: TreeData</span>
<span class="line">+}</span>
<span class="line">+interface State {</span>
<span class="line">+    data: TreeData</span>
<span class="line">+}</span>
<span class="line">class Tree extends React.Component&lt;Props, State&gt; {</span>
<span class="line">+    data: TreeData;</span>
<span class="line">+    keyToNodeMap: KeyToNodeMap;</span>
<span class="line">+    constructor(props: Props) {</span>
<span class="line">+        super(props);</span>
<span class="line">+        this.data = props.data;</span>
<span class="line">+        this.state={ data: this.props.data };</span>
<span class="line">+        this.buildKeyMap();</span>
<span class="line">+    }</span>
<span class="line">+    buildKeyMap = () =&gt; {</span>
<span class="line">+        let data = this.data;</span>
<span class="line">+        this.keyToNodeMap = {};</span>
<span class="line">+        this.keyToNodeMap[data.key] = data;</span>
<span class="line">+        if (data.children &amp;&amp; data.children.length &gt; 0) {</span>
<span class="line">+            this.walk(data.children, data);</span>
<span class="line">+        }</span>
<span class="line">+    }</span>
<span class="line">+    walk = (children: Array&lt;TreeData&gt;, parent: TreeData): void =&gt; {</span>
<span class="line">+        children.map((item: TreeData) =&gt; {</span>
<span class="line">+            item.parent = parent;</span>
<span class="line">+            this.keyToNodeMap[item.key] = item;</span>
<span class="line">+            if (item.children &amp;&amp; item.children.length &gt; 0) {</span>
<span class="line">+                this.walk(item.children, item);</span>
<span class="line">+            }</span>
<span class="line">+        });</span>
<span class="line">+    }</span>
<span class="line">    render() {</span>
<span class="line">        return (</span>
<span class="line">            &lt;div className=&quot;tree&quot;&gt;</span>
<span class="line">+                &lt;div className=&quot;tree-nodes&quot;&gt;</span>
<span class="line">+                    &lt;TreeNode</span>
<span class="line">+                        data={this.props.data}</span>
<span class="line">+                    /&gt;</span>
<span class="line">+                &lt;/div&gt;</span>
<span class="line">            &lt;/div&gt;</span>
<span class="line">        )</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line">export default Tree;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-index-less" tabindex="-1"><a class="header-anchor" href="#_4-2-index-less"><span>4.2 index.less</span></a></h3><p>src\\components\\index.less</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">.tree{</span>
<span class="line">    position: fixed;</span>
<span class="line">    left:0;</span>
<span class="line">    top:0;</span>
<span class="line">    bottom:0;</span>
<span class="line">    width:80%;</span>
<span class="line">    overflow-x: hidden;</span>
<span class="line">    overflow-y: auto;</span>
<span class="line">     background-color: </span>
<span class="line">+    .tree-nodes{</span>
<span class="line">+        position: relative;</span>
<span class="line">+        overflow:hidden;</span>
<span class="line">+        .tree-node{</span>
<span class="line">+            .inner{</span>
<span class="line"> +                color:</span>
<span class="line">+                font-size:20px;</span>
<span class="line">+                position: relative;</span>
<span class="line">+                cursor:pointer;</span>
<span class="line">+                padding-left:10px;</span>
<span class="line">+                .content{</span>
<span class="line">+                    display: inline-block;</span>
<span class="line">+                    width:100%;</span>
<span class="line">+                    padding:4px 5px;</span>
<span class="line">+                }</span>
<span class="line">+            }</span>
<span class="line">+            .children{</span>
<span class="line">+                padding-left: 20px;</span>
<span class="line">+            }</span>
<span class="line">+        }    </span>
<span class="line">+    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-components-tree-node-tsx" tabindex="-1"><a class="header-anchor" href="#_4-3-components-tree-node-tsx"><span>4.3 components\\tree-node.tsx</span></a></h3><p>src\\components\\tree-node.tsx</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> TreeData <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../typings&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">Props</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">data</span><span class="token operator">:</span> TreeData</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">TreeNode</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span><span class="token operator">&lt;</span>Props<span class="token operator">&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">props</span><span class="token operator">:</span> Props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">let</span> <span class="token punctuation">{</span> <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span> name<span class="token punctuation">,</span> children <span class="token punctuation">}</span> <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">            <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">&quot;tree-node&quot;</span><span class="token operator">&gt;</span></span>
<span class="line">                <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">&quot;inner&quot;</span><span class="token operator">&gt;</span></span>
<span class="line">                    <span class="token operator">&lt;</span>span className<span class="token operator">=</span><span class="token string">&quot;content&quot;</span><span class="token operator">&gt;</span><span class="token punctuation">{</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span></span>
<span class="line">                <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line">                <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token punctuation">(</span>children <span class="token operator">&amp;&amp;</span> children<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span></span>
<span class="line">                        <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">&quot;children&quot;</span><span class="token operator">&gt;</span></span>
<span class="line">                            <span class="token punctuation">{</span></span>
<span class="line">                                children<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">item</span><span class="token operator">:</span> TreeData</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span></span>
<span class="line">                                    <span class="token operator">&lt;</span>TreeNode key<span class="token operator">=</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>key<span class="token punctuation">}</span> data<span class="token operator">=</span><span class="token punctuation">{</span>item<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line">                                <span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">                            <span class="token punctuation">}</span></span>
<span class="line">                        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line">                    <span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">            <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line">        <span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> TreeNode<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-打开关闭功能" tabindex="-1"><a class="header-anchor" href="#_5-打开关闭功能"><span>5. 打开关闭功能</span></a></h2><ul><li><a href="http://img.zhufengpeixun.cn/icons.zip" target="_blank" rel="noopener noreferrer">icons.zip</a></li></ul><h3 id="_5-1-components-tree-tsx" tabindex="-1"><a class="header-anchor" href="#_5-1-components-tree-tsx"><span>5.1 components\\tree.tsx</span></a></h3><p>src\\components\\tree.tsx</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React from &#39;react&#39;;</span>
<span class="line">import &#39;./index.less&#39;;</span>
<span class="line">import { TreeData } from &#39;../typings&#39;;</span>
<span class="line">import TreeNode from &#39;./tree-node&#39;;</span>
<span class="line">interface Props {</span>
<span class="line">    data: TreeData</span>
<span class="line">}</span>
<span class="line">interface KeyToNodeMap {</span>
<span class="line">    [key: string]: TreeData</span>
<span class="line">}</span>
<span class="line">interface State {</span>
<span class="line">    data: TreeData</span>
<span class="line">}</span>
<span class="line">class Tree extends React.Component&lt;Props, State&gt; {</span>
<span class="line">    data: TreeData;</span>
<span class="line">    keyToNodeMap: KeyToNodeMap;</span>
<span class="line">    constructor(props: Props) {</span>
<span class="line">        super(props);</span>
<span class="line">        this.data = props.data;</span>
<span class="line">        this.state={ data: this.props.data };</span>
<span class="line">        this.buildKeyMap();</span>
<span class="line">    }</span>
<span class="line">    buildKeyMap = () =&gt; {</span>
<span class="line">        let data = this.data;</span>
<span class="line">        this.keyToNodeMap = {};</span>
<span class="line">        this.keyToNodeMap[data.key] = data;</span>
<span class="line">        if (data.children &amp;&amp; data.children.length &gt; 0) {</span>
<span class="line">            this.walk(data.children, data);</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">    walk = (children: Array&lt;TreeData&gt;, parent: TreeData): void =&gt; {</span>
<span class="line">        children.map((item: TreeData) =&gt; {</span>
<span class="line">            item.parent = parent;</span>
<span class="line">            this.keyToNodeMap[item.key] = item;</span>
<span class="line">            if (item.children &amp;&amp; item.children.length &gt; 0) {</span>
<span class="line">                this.walk(item.children, item);</span>
<span class="line">            }</span>
<span class="line">        });</span>
<span class="line">    }</span>
<span class="line">+    onCollapse = (key: string) =&gt; {</span>
<span class="line">+        let data = this.keyToNodeMap[key];</span>
<span class="line">+        if (data) {</span>
<span class="line">+            data.collapsed = !data.collapsed;</span>
<span class="line">+            data.children = data.children || [];</span>
<span class="line">+            this.setState({ data: this.state.data });</span>
<span class="line">+        }</span>
<span class="line">+    }</span>
<span class="line">    render() {</span>
<span class="line">        return (</span>
<span class="line">            &lt;div className=&quot;tree&quot;&gt;</span>
<span class="line">                &lt;div className=&quot;tree-nodes&quot;&gt;</span>
<span class="line">                    &lt;TreeNode</span>
<span class="line">                        data={this.props.data}</span>
<span class="line">+                        onCollapse={this.onCollapse}</span>
<span class="line">                    /&gt;</span>
<span class="line">                &lt;/div&gt;</span>
<span class="line">            &lt;/div&gt;</span>
<span class="line">        )</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line">export default Tree;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-2-tree-node-tsx" tabindex="-1"><a class="header-anchor" href="#_5-2-tree-node-tsx"><span>5.2 tree-node.tsx</span></a></h3><p>src\\components\\tree-node.tsx</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React from &#39;react&#39;;</span>
<span class="line">import { TreeData } from &#39;../typings&#39;;</span>
<span class="line">+import file from &#39;../assets/file.png&#39;;</span>
<span class="line">+import closedFolder from &#39;../assets/closed-folder.png&#39;;</span>
<span class="line">+import openedFolder from &#39;../assets/opened-folder.png&#39;;</span>
<span class="line">interface Props {</span>
<span class="line">    data: TreeData,</span>
<span class="line">+    onCollapse: any</span>
<span class="line">}</span>
<span class="line">class TreeNode extends React.Component&lt;Props&gt; {</span>
<span class="line">    constructor(props: Props) {</span>
<span class="line">        super(props);</span>
<span class="line">    }</span>
<span class="line">    render() {</span>
<span class="line">+        let { data: { name, children, collapsed = false, key } } = this.props;</span>
<span class="line">+        let caret, icon;</span>
<span class="line">+        if (children) {</span>
<span class="line">+            if (children.length &gt; 0) {</span>
<span class="line">+                caret = (</span>
<span class="line">+                    &lt;span className={\`collapse \${collapsed ? &#39;caret-right&#39; : &#39;caret-down&#39;}\`}</span>
<span class="line">+                        onClick={() =&gt; this.props.onCollapse(key)}</span>
<span class="line">+                    /&gt;</span>
<span class="line">+                )</span>
<span class="line">+                icon = collapsed ? closedFolder : openedFolder;</span>
<span class="line">+            } else {</span>
<span class="line">+                caret = null;</span>
<span class="line">+                icon = file;</span>
<span class="line">+            }</span>
<span class="line">+        } else {</span>
<span class="line">+            caret = (</span>
<span class="line">+                &lt;span className={\`collapse caret-right\`}</span>
<span class="line">+                    onClick={() =&gt; this.props.onCollapse(key)}</span>
<span class="line">+                /&gt;</span>
<span class="line">+            )</span>
<span class="line">+            icon = closedFolder;</span>
<span class="line">+        }</span>
<span class="line">        return (</span>
<span class="line">            &lt;div className=&quot;tree-node&quot;&gt;</span>
<span class="line">                &lt;div className=&quot;inner&quot;&gt;</span>
<span class="line">+                    {caret}</span>
<span class="line">+                    &lt;span className=&quot;content&quot;&gt;</span>
<span class="line">+                        &lt;img style={{ width: 20 }} src={icon} /&gt;</span>
<span class="line">+                        {name}</span>
<span class="line">+                    &lt;/span&gt;</span>
<span class="line">                &lt;/div&gt;</span>
<span class="line">                {</span>
<span class="line">+                    (children &amp;&amp; children.length &gt; 0 &amp;&amp; !collapsed) &amp;&amp; (</span>
<span class="line">                        &lt;div className=&quot;children&quot;&gt;</span>
<span class="line">                            {</span>
<span class="line">                                children.map((item: TreeData) =&gt; (</span>
<span class="line">                                    &lt;TreeNode</span>
<span class="line">+                                        onCollapse={this.props.onCollapse}</span>
<span class="line">                                        key={item.key}</span>
<span class="line">                                        data={item} /&gt;</span>
<span class="line">                                ))</span>
<span class="line">                            }</span>
<span class="line">                        &lt;/div&gt;</span>
<span class="line">                    )</span>
<span class="line">                }</span>
<span class="line">            &lt;/div&gt;</span>
<span class="line">        )</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line">export default TreeNode;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-3-components-index-less" tabindex="-1"><a class="header-anchor" href="#_5-3-components-index-less"><span>5.3 components\\index.less</span></a></h3><p>src\\components\\index.less</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">.tree{</span>
<span class="line">    position: fixed;</span>
<span class="line">    left:0;</span>
<span class="line">    top:0;</span>
<span class="line">    bottom:0;</span>
<span class="line">    width:80%;</span>
<span class="line">    overflow-x: hidden;</span>
<span class="line">    overflow-y: auto;</span>
<span class="line">     background-color: </span>
<span class="line">    .tree-nodes{</span>
<span class="line">        position: relative;</span>
<span class="line">        overflow:hidden;</span>
<span class="line">        .tree-node{</span>
<span class="line">            .inner{</span>
<span class="line">                 color:</span>
<span class="line">                font-size:20px;</span>
<span class="line">                position: relative;</span>
<span class="line">                cursor:pointer;</span>
<span class="line">                padding-left:10px;</span>
<span class="line">+                .collapse {</span>
<span class="line">+                    position: absolute;</span>
<span class="line">+                    left: 0;</span>
<span class="line">+                    cursor: pointer;</span>
<span class="line">+                }</span>
<span class="line">+                .caret-right:before {</span>
<span class="line">+                    content: &#39;\\25B8&#39;;</span>
<span class="line">+                }</span>
<span class="line">+                .caret-down:before {</span>
<span class="line">+                    content: &#39;\\25BE&#39;;</span>
<span class="line">+                }</span>
<span class="line">                .content{</span>
<span class="line">                    display: inline-block;</span>
<span class="line">                    width:100%;</span>
<span class="line">                    padding:4px 5px;</span>
<span class="line">                }</span>
<span class="line">            }</span>
<span class="line">            .children{</span>
<span class="line">                padding-left: 20px;</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-4-images-d-ts" tabindex="-1"><a class="header-anchor" href="#_5-4-images-d-ts"><span>5.4 images.d.ts</span></a></h3><p>typings\\images.d.ts</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line">declare module <span class="token string">&#39;*.svg&#39;</span><span class="token punctuation">;</span></span>
<span class="line">declare module <span class="token string">&#39;*.png&#39;</span><span class="token punctuation">;</span></span>
<span class="line">declare module <span class="token string">&#39;*.jpg&#39;</span><span class="token punctuation">;</span></span>
<span class="line">declare module <span class="token string">&#39;*.jpeg&#39;</span><span class="token punctuation">;</span></span>
<span class="line">declare module <span class="token string">&#39;*.gif&#39;</span><span class="token punctuation">;</span></span>
<span class="line">declare module <span class="token string">&#39;*.bmp&#39;</span><span class="token punctuation">;</span></span>
<span class="line">declare module <span class="token string">&#39;*.tiff&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-全选和全消功能" tabindex="-1"><a class="header-anchor" href="#_6-全选和全消功能"><span>6. 全选和全消功能</span></a></h2><h3 id="_6-1-src-typings-tsx" tabindex="-1"><a class="header-anchor" href="#_6-1-src-typings-tsx"><span>6.1 src\\typings.tsx</span></a></h3><p>src\\typings.tsx</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">TreeData</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">;</span></span>
<span class="line">    <span class="token literal-property property">key</span><span class="token operator">:</span> string<span class="token punctuation">;</span></span>
<span class="line">    <span class="token literal-property property">type</span><span class="token operator">:</span> string<span class="token punctuation">;</span></span>
<span class="line">    <span class="token literal-property property">collapsed</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span></span>
<span class="line">    children<span class="token operator">?</span><span class="token operator">:</span> Array<span class="token operator">&lt;</span>TreeData<span class="token operator">&gt;</span><span class="token punctuation">;</span></span>
<span class="line">    parent<span class="token operator">?</span><span class="token operator">:</span> TreeData<span class="token punctuation">;</span></span>
<span class="line">    checked<span class="token operator">?</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-2-components-tree-tsx" tabindex="-1"><a class="header-anchor" href="#_6-2-components-tree-tsx"><span>6.2 components\\tree.tsx</span></a></h3><p>src\\components\\tree.tsx</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React from &#39;react&#39;;</span>
<span class="line">import &#39;./index.less&#39;;</span>
<span class="line">import { TreeData } from &#39;../typings&#39;;</span>
<span class="line">import TreeNode from &#39;./tree-node&#39;;</span>
<span class="line">interface Props {</span>
<span class="line">    data: TreeData</span>
<span class="line">}</span>
<span class="line">interface KeyToNodeMap {</span>
<span class="line">    [key: string]: TreeData</span>
<span class="line">}</span>
<span class="line">interface State {</span>
<span class="line">    data: TreeData</span>
<span class="line">}</span>
<span class="line">class Tree extends React.Component&lt;Props, State&gt; {</span>
<span class="line">    data: TreeData;</span>
<span class="line">    keyToNodeMap: KeyToNodeMap;</span>
<span class="line">    constructor(props: Props) {</span>
<span class="line">        super(props);</span>
<span class="line">        this.data = props.data;</span>
<span class="line">        this.state={ data: this.props.data };</span>
<span class="line">        this.buildKeyMap();</span>
<span class="line">    }</span>
<span class="line">    buildKeyMap = () =&gt; {</span>
<span class="line">        let data = this.data;</span>
<span class="line">        this.keyToNodeMap = {};</span>
<span class="line">        this.keyToNodeMap[data.key] = data;</span>
<span class="line">        if (data.children &amp;&amp; data.children.length &gt; 0) {</span>
<span class="line">            this.walk(data.children, data);</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">    walk = (children: Array&lt;TreeData&gt;, parent: TreeData): void =&gt; {</span>
<span class="line">        children.map((item: TreeData) =&gt; {</span>
<span class="line">            item.parent = parent;</span>
<span class="line">            this.keyToNodeMap[item.key] = item;</span>
<span class="line">            if (item.children &amp;&amp; item.children.length &gt; 0) {</span>
<span class="line">                this.walk(item.children, item);</span>
<span class="line">            }</span>
<span class="line">        });</span>
<span class="line">    }</span>
<span class="line">    onCollapse = (key: string) =&gt; {</span>
<span class="line">        let data = this.keyToNodeMap[key];</span>
<span class="line">        if (data) {</span>
<span class="line">            data.collapsed = !data.collapsed;</span>
<span class="line">            data.children = data.children || [];</span>
<span class="line">            this.setState({ data: this.state.data });</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">+    onCheck = (key: string) =&gt; {</span>
<span class="line">+        let data: TreeData = this.keyToNodeMap[key];</span>
<span class="line">+        if (data) {</span>
<span class="line">+            data.checked = !data.checked;</span>
<span class="line">+            if (data.checked) {</span>
<span class="line">+                this.checkChildren(data.children, true);</span>
<span class="line">+                this.checkParentCheckAll(data.parent);</span>
<span class="line">+            } else {</span>
<span class="line">+                this.checkChildren(data.children, false);</span>
<span class="line">+                this.checkParent(data.parent, false);</span>
<span class="line">+            }</span>
<span class="line">+            this.setState({ data: this.state.data });</span>
<span class="line">+        }</span>
<span class="line">+    }</span>
<span class="line">+    checkParentCheckAll = (parent: TreeData) =&gt; {</span>
<span class="line">+        while (parent) {</span>
<span class="line">+            parent.checked = parent.children.every(item =&gt; item.checked);</span>
<span class="line">+            parent = parent.parent;</span>
<span class="line">+        }</span>
<span class="line">+    }</span>
<span class="line">+    checkParent = (parent: TreeData, checked: boolean) =&gt; {</span>
<span class="line">+        while (parent) {</span>
<span class="line">+            parent.checked = checked;</span>
<span class="line">+            parent = parent.parent;</span>
<span class="line">+        }</span>
<span class="line">+    }</span>
<span class="line">+    checkChildren = (children: Array&lt;TreeData&gt; = [], checked: boolean) =&gt; {</span>
<span class="line">+        children.forEach((item: TreeData) =&gt; {</span>
<span class="line">+            item.checked = checked;</span>
<span class="line">+            this.checkChildren(item.children, checked);</span>
<span class="line">+        });</span>
<span class="line">+    }</span>
<span class="line">    render() {</span>
<span class="line">        return (</span>
<span class="line">            &lt;div className=&quot;tree&quot;&gt;</span>
<span class="line">                &lt;div className=&quot;tree-nodes&quot;&gt;</span>
<span class="line">                    &lt;TreeNode</span>
<span class="line">                        data={this.props.data}</span>
<span class="line">                        onCollapse={this.onCollapse}</span>
<span class="line">+                        onCheck={this.onCheck}</span>
<span class="line">                    /&gt;</span>
<span class="line">                &lt;/div&gt;</span>
<span class="line">            &lt;/div&gt;</span>
<span class="line">        )</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line">export default Tree;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-3-tree-node-tsx" tabindex="-1"><a class="header-anchor" href="#_6-3-tree-node-tsx"><span>6.3 tree-node.tsx</span></a></h3><p>src\\components\\tree-node.tsx</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React from &#39;react&#39;;</span>
<span class="line">import { TreeData } from &#39;../typings&#39;;</span>
<span class="line">import file from &#39;../assets/file.png&#39;;</span>
<span class="line">import closedFolder from &#39;../assets/closed-folder.png&#39;;</span>
<span class="line">import openedFolder from &#39;../assets/opened-folder.png&#39;;</span>
<span class="line">interface Props {</span>
<span class="line">    data: TreeData,</span>
<span class="line">    onCollapse: any,</span>
<span class="line">+    onCheck: any</span>
<span class="line">}</span>
<span class="line">class TreeNode extends React.Component&lt;Props&gt; {</span>
<span class="line">    constructor(props: Props) {</span>
<span class="line">        super(props);</span>
<span class="line">    }</span>
<span class="line">    render() {</span>
<span class="line">+        let { data: { name, children, collapsed = false, key, checked = false } } = this.props;</span>
<span class="line">        let caret, icon;</span>
<span class="line">        if (children) {</span>
<span class="line">            if (children.length &gt; 0) {</span>
<span class="line">                caret = (</span>
<span class="line">                    &lt;span className={\`collapse \${collapsed ? &#39;caret-right&#39; : &#39;caret-down&#39;}\`}</span>
<span class="line">                        onClick={() =&gt; this.props.onCollapse(key)}</span>
<span class="line">                    /&gt;</span>
<span class="line">                )</span>
<span class="line">                icon = collapsed ? closedFolder : openedFolder;</span>
<span class="line">            } else {</span>
<span class="line">                caret = null;</span>
<span class="line">                icon = file;</span>
<span class="line">            }</span>
<span class="line">        } else {</span>
<span class="line">            caret = (</span>
<span class="line">                &lt;span className={\`collapse caret-right\`}</span>
<span class="line">                    onClick={() =&gt; this.props.onCollapse(key)}</span>
<span class="line">                /&gt;</span>
<span class="line">            )</span>
<span class="line">            icon = closedFolder;</span>
<span class="line">        }</span>
<span class="line">        return (</span>
<span class="line">            &lt;div className=&quot;tree-node&quot;&gt;</span>
<span class="line">                &lt;div className=&quot;inner&quot;&gt;</span>
<span class="line">                    {caret}</span>
<span class="line">                    &lt;span className=&quot;content&quot;&gt;</span>
<span class="line">+                        &lt;input type=&quot;checkbox&quot; checked={checked} onChange={() =&gt; this.props.onCheck(key)} /&gt;</span>
<span class="line">                        &lt;img style={{ width: 20 }} src={icon} /&gt;</span>
<span class="line">                        {name}</span>
<span class="line">                    &lt;/span&gt;</span>
<span class="line">                &lt;/div&gt;</span>
<span class="line">                {</span>
<span class="line">                    (children &amp;&amp; children.length &gt; 0 &amp;&amp; !collapsed) &amp;&amp; (</span>
<span class="line">                        &lt;div className=&quot;children&quot;&gt;</span>
<span class="line">                            {</span>
<span class="line">                                children.map((item: TreeData) =&gt; (</span>
<span class="line">                                    &lt;TreeNode</span>
<span class="line">                                        onCollapse={this.props.onCollapse}</span>
<span class="line">+                                       onCheck={this.props.onCheck}</span>
<span class="line">                                        key={item.key}</span>
<span class="line">                                        data={item} /&gt;</span>
<span class="line">                                ))</span>
<span class="line">                            }</span>
<span class="line">                        &lt;/div&gt;</span>
<span class="line">                    )</span>
<span class="line">                }</span>
<span class="line">            &lt;/div&gt;</span>
<span class="line">        )</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line">export default TreeNode;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-动态加载数据" tabindex="-1"><a class="header-anchor" href="#_7-动态加载数据"><span>7. 动态加载数据</span></a></h2><h3 id="_7-1-typings-tsx" tabindex="-1"><a class="header-anchor" href="#_7-1-typings-tsx"><span>7.1 typings.tsx</span></a></h3><p>src\\typings.tsx</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">export interface TreeData {</span>
<span class="line">    name: string;</span>
<span class="line">    key: string;</span>
<span class="line">    type: string;</span>
<span class="line">    collapsed: boolean;</span>
<span class="line">    children?: Array&lt;TreeData&gt;;</span>
<span class="line">    parent?: TreeData;</span>
<span class="line">    checked?: boolean;</span>
<span class="line">+   loading?: boolean;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-2-tree-tsx" tabindex="-1"><a class="header-anchor" href="#_7-2-tree-tsx"><span>7.2 tree.tsx</span></a></h3><p>src\\components\\tree.tsx</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React from &#39;react&#39;;</span>
<span class="line">import &#39;./index.less&#39;;</span>
<span class="line">import { TreeData } from &#39;../typings&#39;;</span>
<span class="line">import TreeNode from &#39;./tree-node&#39;;</span>
<span class="line">+import { getChildren } from &#39;../api&#39;;</span>
<span class="line">interface Props {</span>
<span class="line">    data: TreeData</span>
<span class="line">}</span>
<span class="line">interface KeyToNodeMap {</span>
<span class="line">    [key: string]: TreeData</span>
<span class="line">}</span>
<span class="line">interface State {</span>
<span class="line">    data: TreeData</span>
<span class="line">}</span>
<span class="line">class Tree extends React.Component&lt;Props, State&gt; {</span>
<span class="line">    data: TreeData;</span>
<span class="line">    keyToNodeMap: KeyToNodeMap;</span>
<span class="line">    constructor(props: Props) {</span>
<span class="line">        super(props);</span>
<span class="line">        this.data = props.data;</span>
<span class="line">        this.state={ data: this.props.data };</span>
<span class="line">        this.buildKeyMap();</span>
<span class="line">    }</span>
<span class="line">    buildKeyMap = () =&gt; {</span>
<span class="line">        let data = this.data;</span>
<span class="line">        this.keyToNodeMap = {};</span>
<span class="line">        this.keyToNodeMap[data.key] = data;</span>
<span class="line">        if (data.children &amp;&amp; data.children.length &gt; 0) {</span>
<span class="line">            this.walk(data.children, data);</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">    walk = (children: Array&lt;TreeData&gt;, parent: TreeData): void =&gt; {</span>
<span class="line">        children.map((item: TreeData) =&gt; {</span>
<span class="line">            item.parent = parent;</span>
<span class="line">            this.keyToNodeMap[item.key] = item;</span>
<span class="line">            if (item.children &amp;&amp; item.children.length &gt; 0) {</span>
<span class="line">                this.walk(item.children, item);</span>
<span class="line">            }</span>
<span class="line">        });</span>
<span class="line">    }</span>
<span class="line">+    onCollapse = async (key: string) =&gt; {</span>
<span class="line">        let data = this.keyToNodeMap[key];</span>
<span class="line">        if (data) {</span>
<span class="line">+            let { children } = data;</span>
<span class="line">+            if (!children) {</span>
<span class="line">+                data.loading = true;</span>
<span class="line">+                this.setState({ data: this.state.data });</span>
<span class="line">+                let result = await getChildren(data);</span>
<span class="line">+                if (result.code == 0) {</span>
<span class="line">+                    data.children = result.data;</span>
<span class="line">+                    data.collapsed = false;</span>
<span class="line">+                    data.loading = false;</span>
<span class="line">+                    this.buildKeyMap();</span>
<span class="line">+                    this.setState({ data: this.state.data });</span>
<span class="line">+                } else {</span>
<span class="line">+                    alert(&#39;加载失败&#39;);</span>
<span class="line">+                }</span>
<span class="line">+            } else {</span>
<span class="line">+                data.collapsed = !data.collapsed;</span>
<span class="line">+                this.setState({ data: this.state.data });</span>
<span class="line">+            }</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">    onCheck = (key: string) =&gt; {</span>
<span class="line">        let data: TreeData = this.keyToNodeMap[key];</span>
<span class="line">        if (data) {</span>
<span class="line">            data.checked = !data.checked;</span>
<span class="line">            if (data.checked) {</span>
<span class="line">                this.checkChildren(data.children, true);</span>
<span class="line">                this.checkParentCheckAll(data.parent);</span>
<span class="line">            } else {</span>
<span class="line">                this.checkChildren(data.children, false);</span>
<span class="line">                this.checkParent(data.parent, false);</span>
<span class="line">            }</span>
<span class="line">            this.setState({ data: this.state.data });</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">    checkParentCheckAll = (parent: TreeData) =&gt; {</span>
<span class="line">        while (parent) {</span>
<span class="line">            parent.checked = parent.children.every(item =&gt; item.checked);</span>
<span class="line">            parent = parent.parent;</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">    checkParent = (parent: TreeData, checked: boolean) =&gt; {</span>
<span class="line">        while (parent) {</span>
<span class="line">            parent.checked = checked;</span>
<span class="line">            parent = parent.parent;</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">    checkChildren = (children: Array&lt;TreeData&gt; = [], checked: boolean) =&gt; {</span>
<span class="line">        children.forEach((item: TreeData) =&gt; {</span>
<span class="line">            item.checked = checked;</span>
<span class="line">            this.checkChildren(item.children, checked);</span>
<span class="line">        });</span>
<span class="line">    }</span>
<span class="line">    render() {</span>
<span class="line">        return (</span>
<span class="line">            &lt;div className=&quot;tree&quot;&gt;</span>
<span class="line">                &lt;div className=&quot;tree-nodes&quot;&gt;</span>
<span class="line">                    &lt;TreeNode</span>
<span class="line">                        data={this.props.data}</span>
<span class="line">                        onCollapse={this.onCollapse}</span>
<span class="line">                        onCheck={this.onCheck}</span>
<span class="line">                    /&gt;</span>
<span class="line">                &lt;/div&gt;</span>
<span class="line">            &lt;/div&gt;</span>
<span class="line">        )</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line">export default Tree;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-3-tree-node-tsx" tabindex="-1"><a class="header-anchor" href="#_7-3-tree-node-tsx"><span>7.3 tree-node.tsx</span></a></h3><p>src\\components\\tree-node.tsx</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React from &#39;react&#39;;</span>
<span class="line">import { TreeData } from &#39;../typings&#39;;</span>
<span class="line">import file from &#39;../assets/file.png&#39;;</span>
<span class="line">import closedFolder from &#39;../assets/closed-folder.png&#39;;</span>
<span class="line">import openedFolder from &#39;../assets/opened-folder.png&#39;;</span>
<span class="line">+import loadingSrc from &#39;../assets/loading.gif&#39;;</span>
<span class="line">interface Props {</span>
<span class="line">    data: TreeData,</span>
<span class="line">    onCollapse: any,</span>
<span class="line">    onCheck: any</span>
<span class="line">}</span>
<span class="line">class TreeNode extends React.Component&lt;Props&gt; {</span>
<span class="line">    constructor(props: Props) {</span>
<span class="line">        super(props);</span>
<span class="line">    }</span>
<span class="line">    render() {</span>
<span class="line">+        let { data: { name, children, collapsed = false, key, checked = false,loading } } = this.props;</span>
<span class="line">        let caret, icon;</span>
<span class="line">        if (children) {</span>
<span class="line">            if (children.length &gt; 0) {</span>
<span class="line">                caret = (</span>
<span class="line">                    &lt;span className={\`collapse \${collapsed ? &#39;caret-right&#39; : &#39;caret-down&#39;}\`}</span>
<span class="line">                        onClick={() =&gt; this.props.onCollapse(key)}</span>
<span class="line">                    /&gt;</span>
<span class="line">                )</span>
<span class="line">                icon = collapsed ? closedFolder : openedFolder;</span>
<span class="line">            } else {</span>
<span class="line">                caret = null;</span>
<span class="line">                icon = file;</span>
<span class="line">            }</span>
<span class="line">        } else {</span>
<span class="line">+            caret = (</span>
<span class="line">                loading?&lt;img className=&quot;collapse&quot; src={loadingSrc} style={{ width: 14, top: &#39;50%&#39;, marginTop: -7 }}/&gt;:&lt;span className={\`collapse caret-right\`}</span>
<span class="line">                    onClick={() =&gt; this.props.onCollapse(key)}</span>
<span class="line">                /&gt;</span>
<span class="line">            )</span>
<span class="line">            icon = closedFolder;</span>
<span class="line">        }</span>
<span class="line">        return (</span>
<span class="line">            &lt;div className=&quot;tree-node&quot;&gt;</span>
<span class="line">                &lt;div className=&quot;inner&quot;&gt;</span>
<span class="line">                    {caret}</span>
<span class="line">                    &lt;span className=&quot;content&quot;&gt;</span>
<span class="line">                        &lt;input type=&quot;checkbox&quot; checked={checked} onChange={() =&gt; this.props.onCheck(key)} /&gt;</span>
<span class="line">                        &lt;img style={{ width: 20 }} src={icon} /&gt;</span>
<span class="line">                        {name}</span>
<span class="line">                    &lt;/span&gt;</span>
<span class="line">                &lt;/div&gt;</span>
<span class="line">                {</span>
<span class="line">                    (children &amp;&amp; children.length &gt; 0 &amp;&amp; !collapsed) &amp;&amp; (</span>
<span class="line">                        &lt;div className=&quot;children&quot;&gt;</span>
<span class="line">                            {</span>
<span class="line">                                children.map((item: TreeData) =&gt; (</span>
<span class="line">                                    &lt;TreeNode</span>
<span class="line">                                        onCollapse={this.props.onCollapse}</span>
<span class="line">                                        onCheck={this.props.onCheck}</span>
<span class="line">                                        key={item.key}</span>
<span class="line">                                        data={item} /&gt;</span>
<span class="line">                                ))</span>
<span class="line">                            }</span>
<span class="line">                        &lt;/div&gt;</span>
<span class="line">                    )</span>
<span class="line">                }</span>
<span class="line">            &lt;/div&gt;</span>
<span class="line">        )</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line">export default TreeNode;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-4-src-api-tsx" tabindex="-1"><a class="header-anchor" href="#_7-4-src-api-tsx"><span>7.4 src\\api.tsx</span></a></h3><p>src\\api.tsx</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&#39;axios&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> qs <span class="token keyword">from</span> <span class="token string">&#39;qs&#39;</span><span class="token punctuation">;</span></span>
<span class="line">axios<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>baseURL <span class="token operator">=</span> <span class="token string">&#39;http://localhost:3000&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">getChildren</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">data</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">/getChildren?</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>qs<span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">key</span><span class="token operator">:</span> data<span class="token punctuation">.</span>key<span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> data<span class="token punctuation">.</span>name <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> res<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-5-api-js" tabindex="-1"><a class="header-anchor" href="#_7-5-api-js"><span>7.5 api.js</span></a></h3><p>api.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">let</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    res<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">&#39;Access-Control-Allow-Origin&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;*&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>req<span class="token punctuation">.</span>method <span class="token operator">===</span> <span class="token string">&#39;OPTIONS&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> res<span class="token punctuation">.</span><span class="token function">sendStatus</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/getChildren&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> data <span class="token operator">=</span> req<span class="token punctuation">.</span>query<span class="token punctuation">;</span></span>
<span class="line">    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token literal-property property">code</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">                <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token literal-property property">name</span><span class="token operator">:</span> data<span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">&#39;的儿子1&#39;</span><span class="token punctuation">,</span></span>
<span class="line">                    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>data<span class="token punctuation">.</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-1</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span></span>
<span class="line">                    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;folder&#39;</span><span class="token punctuation">,</span></span>
<span class="line">                    <span class="token literal-property property">collapsed</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line">                <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token literal-property property">name</span><span class="token operator">:</span> data<span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">&#39;的儿子2&#39;</span><span class="token punctuation">,</span></span>
<span class="line">                    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>data<span class="token punctuation">.</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-2</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span></span>
<span class="line">                    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;folder&#39;</span><span class="token punctuation">,</span></span>
<span class="line">                    <span class="token literal-property property">collapsed</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">]</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">接口服务器在</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token number">3000</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">上启动</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-拖动排序" tabindex="-1"><a class="header-anchor" href="#_8-拖动排序"><span>8. 拖动排序</span></a></h2><h3 id="_8-1-components-tree-tsx" tabindex="-1"><a class="header-anchor" href="#_8-1-components-tree-tsx"><span>8.1 components\\tree.tsx</span></a></h3><p>src\\components\\tree.tsx</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React from &#39;react&#39;;</span>
<span class="line">import &#39;./index.less&#39;;</span>
<span class="line">import { TreeData } from &#39;../typings&#39;;</span>
<span class="line">import TreeNode from &#39;./tree-node&#39;;</span>
<span class="line">import { getChildren } from &#39;../api&#39;;</span>
<span class="line">interface Props {</span>
<span class="line">    data: TreeData;</span>
<span class="line">}</span>
<span class="line">interface KeyToNodeMap {</span>
<span class="line">    [key: string]: TreeData</span>
<span class="line">}</span>
<span class="line">interface State {</span>
<span class="line">    data: TreeData;</span>
<span class="line">+    fromNode?: TreeData;</span>
<span class="line">}</span>
<span class="line">class Tree extends React.Component&lt;Props, State&gt; {</span>
<span class="line">    data: TreeData;</span>
<span class="line">    keyToNodeMap: KeyToNodeMap;</span>
<span class="line">    constructor(props: Props) {</span>
<span class="line">        super(props);</span>
<span class="line">        this.state = { data: this.props.data };</span>
<span class="line">        this.data = props.data;</span>
<span class="line">        this.buildKeyMap();</span>
<span class="line">    }</span>
<span class="line">    buildKeyMap = () =&gt; {</span>
<span class="line">        let data = this.data;</span>
<span class="line">        this.keyToNodeMap = {};</span>
<span class="line">        this.keyToNodeMap[data.key] = data;</span>
<span class="line">        if (data.children &amp;&amp; data.children.length &gt; 0) {</span>
<span class="line">            this.walk(data.children, data);</span>
<span class="line">        }</span>
<span class="line">        this.setState({ data: this.state.data });</span>
<span class="line">    }</span>
<span class="line">    walk = (children: Array&lt;TreeData&gt;, parent: TreeData): void =&gt; {</span>
<span class="line">        children.map((item: TreeData) =&gt; {</span>
<span class="line">            item.parent = parent;</span>
<span class="line">            this.keyToNodeMap[item.key] = item;</span>
<span class="line">            if (item.children &amp;&amp; item.children.length &gt; 0) {</span>
<span class="line">                this.walk(item.children, item);</span>
<span class="line">            }</span>
<span class="line">        });</span>
<span class="line">    }</span>
<span class="line">    onCollapse = async (key: string) =&gt; {</span>
<span class="line">        let data = this.keyToNodeMap[key];</span>
<span class="line">        if (data) {</span>
<span class="line">            let { children } = data;</span>
<span class="line">            if (!children) {</span>
<span class="line">                data.loading = true;</span>
<span class="line">                this.setState({ data: this.state.data });</span>
<span class="line">                let result = await getChildren(data);</span>
<span class="line">                if (result.code == 0) {</span>
<span class="line">                    data.children = result.data;</span>
<span class="line">                    data.collapsed = false;</span>
<span class="line">                    data.loading = false;</span>
<span class="line">                    this.buildKeyMap();</span>
<span class="line">                } else {</span>
<span class="line">                    alert(&#39;加载失败&#39;);</span>
<span class="line">                }</span>
<span class="line">            } else {</span>
<span class="line">                data.collapsed = !data.collapsed;</span>
<span class="line">                this.setState({ data: this.state.data });</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">    onCheck = (key: string) =&gt; {</span>
<span class="line">        let data: TreeData = this.keyToNodeMap[key];</span>
<span class="line">        if (data) {</span>
<span class="line">            data.checked = !data.checked;</span>
<span class="line">            if (data.checked) {</span>
<span class="line">                this.checkChildren(data.children, true);</span>
<span class="line">                this.checkParentCheckAll(data.parent);</span>
<span class="line">            } else {</span>
<span class="line">                this.checkChildren(data.children, false);</span>
<span class="line">                this.checkParent(data.parent, false);</span>
<span class="line">            }</span>
<span class="line">            this.setState({ data: this.state.data });</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">    checkParentCheckAll = (parent: TreeData) =&gt; {</span>
<span class="line">        while (parent) {</span>
<span class="line">            parent.checked = parent.children.every(item =&gt; item.checked);</span>
<span class="line">            parent = parent.parent;</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">    checkParent = (parent: TreeData, checked: boolean) =&gt; {</span>
<span class="line">        while (parent) {</span>
<span class="line">            parent.checked = checked;</span>
<span class="line">            parent = parent.parent;</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">    checkChildren = (children: Array&lt;TreeData&gt; = [], checked: boolean) =&gt; {</span>
<span class="line">        children.forEach((item: TreeData) =&gt; {</span>
<span class="line">            item.checked = checked;</span>
<span class="line">            this.checkChildren(item.children, checked);</span>
<span class="line">        });</span>
<span class="line">    }</span>
<span class="line">+    setFromNode = (fromNode: TreeData) =&gt; {</span>
<span class="line">+        this.setState({ ...this.state, fromNode });</span>
<span class="line">+    }</span>
<span class="line">+    onMove = (toNode: TreeData) =&gt; {</span>
<span class="line">+        let fromNode = this.state.fromNode;</span>
<span class="line">+        let fromChildren = fromNode.parent.children, toChildren = toNode.parent.children;</span>
<span class="line">+        let fromIndex = fromChildren.findIndex((item: TreeData) =&gt; item === fromNode);</span>
<span class="line">+        let toIndex = toChildren.findIndex(item =&gt; item === toNode);</span>
<span class="line">+        fromChildren.splice(fromIndex, 1, toNode);</span>
<span class="line">+        toChildren.splice(toIndex, 1, fromNode);</span>
<span class="line">+        this.buildKeyMap();</span>
<span class="line">+    }</span>
<span class="line">    render() {</span>
<span class="line">        return (</span>
<span class="line">            &lt;div className=&quot;tree&quot;&gt;</span>
<span class="line">                &lt;div className=&quot;tree-nodes&quot;&gt;</span>
<span class="line">                    &lt;TreeNode</span>
<span class="line">                        data={this.props.data}</span>
<span class="line">                        onCollapse={this.onCollapse}</span>
<span class="line">                        onCheck={this.onCheck}</span>
<span class="line">+                        setFromNode={this.setFromNode}</span>
<span class="line">+                        onMove={this.onMove}</span>
<span class="line">                    /&gt;</span>
<span class="line">                &lt;/div&gt;</span>
<span class="line">            &lt;/div&gt;</span>
<span class="line">        )</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line">export default Tree;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-2-tree-node-tsx" tabindex="-1"><a class="header-anchor" href="#_8-2-tree-node-tsx"><span>8.2 tree-node.tsx</span></a></h3><p>src\\components\\tree-node.tsx</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React from &#39;react&#39;;</span>
<span class="line">import { TreeData } from &#39;../typings&#39;;</span>
<span class="line">import file from &#39;../assets/file.png&#39;;</span>
<span class="line">import closedFolder from &#39;../assets/closed-folder.png&#39;;</span>
<span class="line">import openedFolder from &#39;../assets/opened-folder.png&#39;;</span>
<span class="line">import loadingSrc from &#39;../assets/loading.gif&#39;;</span>
<span class="line">interface Props {</span>
<span class="line">    data: TreeData,</span>
<span class="line">    onCollapse: any,</span>
<span class="line">    onCheck: any;</span>
<span class="line">+   setFromNode: any;</span>
<span class="line">+   onMove: any</span>
<span class="line">}</span>
<span class="line">class TreeNode extends React.Component&lt;Props&gt; {</span>
<span class="line">    treeNodeRef: React.RefObject&lt;HTMLDivElement&gt;;</span>
<span class="line">    constructor(props: Props) {</span>
<span class="line">        super(props);</span>
<span class="line">+        this.treeNodeRef = React.createRef();</span>
<span class="line">    }</span>
<span class="line">+    componentDidMount() {</span>
<span class="line">+        this.treeNodeRef.current.addEventListener(&#39;dragstart&#39;, (event: DragEvent): void =&gt; {</span>
<span class="line">+            this.props.setFromNode(this.props.data);</span>
<span class="line">+            event.stopPropagation();</span>
<span class="line">+        }, false);//useCapture=false</span>
<span class="line">+        this.treeNodeRef.current.addEventListener(&#39;dragenter&#39;, (event: DragEvent) =&gt; {</span>
<span class="line">+            event.preventDefault();</span>
<span class="line">+            event.stopPropagation();</span>
<span class="line">+        }, false);</span>
<span class="line">+        this.treeNodeRef.current.addEventListener(&#39;dragover&#39;, (event: DragEvent) =&gt; {</span>
<span class="line">+            event.preventDefault();</span>
<span class="line">+            event.stopPropagation();</span>
<span class="line">+        }, false);</span>
<span class="line">+        this.treeNodeRef.current.addEventListener(&#39;drop&#39;, (event: DragEvent) =&gt; {</span>
<span class="line">+            event.preventDefault();</span>
<span class="line">+            this.props.onMove(this.props.data);</span>
<span class="line">+            event.stopPropagation();</span>
<span class="line">+        }, false);</span>
<span class="line">+    }</span>
<span class="line">    render() {</span>
<span class="line">        let { data: { name, children, collapsed = false, key, checked = false, loading } } = this.props;</span>
<span class="line">        let caret, icon;</span>
<span class="line">        if (children) {</span>
<span class="line">            if (children.length &gt; 0) {</span>
<span class="line">                caret = (</span>
<span class="line">                    &lt;span className={\`collapse \${collapsed ? &#39;caret-right&#39; : &#39;caret-down&#39;}\`}</span>
<span class="line">                        onClick={() =&gt; this.props.onCollapse(key)}</span>
<span class="line">                    /&gt;</span>
<span class="line">                )</span>
<span class="line">                icon = collapsed ? closedFolder : openedFolder;</span>
<span class="line">            } else {</span>
<span class="line">                caret = null;</span>
<span class="line">                icon = file;</span>
<span class="line">            }</span>
<span class="line">        } else {</span>
<span class="line">            caret = (</span>
<span class="line">                loading ? &lt;img className=&quot;collapse&quot; src={loadingSrc} style={{ width: 14, top: &#39;50%&#39;, marginTop: -7 }} /&gt; : &lt;span className={\`collapse caret-right\`}</span>
<span class="line">                    onClick={() =&gt; this.props.onCollapse(key)}</span>
<span class="line">                /&gt;</span>
<span class="line">            )</span>
<span class="line">            icon = closedFolder;</span>
<span class="line">        }</span>
<span class="line">        return (</span>
<span class="line">            &lt;div className=&quot;tree-node&quot; draggable={true} ref={this.treeNodeRef}&gt;</span>
<span class="line">                &lt;div className=&quot;inner&quot;&gt;</span>
<span class="line">                    {caret}</span>
<span class="line">                    &lt;span className=&quot;content&quot;&gt;</span>
<span class="line">                        &lt;input type=&quot;checkbox&quot; checked={checked} onChange={() =&gt; this.props.onCheck(key)} /&gt;</span>
<span class="line">                        &lt;img style={{ width: 20 }} src={icon} /&gt;</span>
<span class="line">                        {name}</span>
<span class="line">                    &lt;/span&gt;</span>
<span class="line">                &lt;/div&gt;</span>
<span class="line">                {</span>
<span class="line">                    (children &amp;&amp; children.length &gt; 0 &amp;&amp; !collapsed) &amp;&amp; (</span>
<span class="line">                        &lt;div className=&quot;children&quot;&gt;</span>
<span class="line">                            {</span>
<span class="line">                                children.map((item: TreeData) =&gt; (</span>
<span class="line">                                    &lt;TreeNode</span>
<span class="line">                                        onCollapse={this.props.onCollapse}</span>
<span class="line">                                        onCheck={this.props.onCheck}</span>
<span class="line">                                        key={item.key}</span>
<span class="line">+                                        setFromNode={this.props.setFromNode}</span>
<span class="line">+                                        onMove={this.props.onMove}</span>
<span class="line">                                        data={item} /&gt;</span>
<span class="line">                                ))</span>
<span class="line">                            }</span>
<span class="line">                        &lt;/div&gt;</span>
<span class="line">                    )</span>
<span class="line">                }</span>
<span class="line">            &lt;/div&gt;</span>
<span class="line">        )</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line">export default TreeNode;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,115)])])}const r=n(i,[["render",p]]),d=JSON.parse('{"path":"/strong/80.tree.html","title":"","lang":"en-US","frontmatter":{},"git":{"updatedTime":1681290319000,"contributors":[{"name":"yutao","username":"yutao","email":"642231346@qq.com","commits":1,"url":"https://github.com/yutao"}],"changelog":[{"hash":"f5ab8c9d34991ec274f7f652439afe5b2afb6147","time":1681290319000,"email":"642231346@qq.com","author":"yutao","message":"modify"}]},"filePathRelative":"strong/80.tree.md"}');export{r as comp,d as data};
