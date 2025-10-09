import{_ as n,c as a,a as e,o as l}from"./app-CD1YpnS1.js";const i={};function t(p,s){return l(),a("div",null,[...s[0]||(s[0]=[e(`<h2 id="_1-课程大纲" tabindex="-1"><a class="header-anchor" href="#_1-课程大纲"><span>1.课程大纲</span></a></h2><h3 id="_1-1-vite2-vue3-typescript-搭建开发环境" tabindex="-1"><a class="header-anchor" href="#_1-1-vite2-vue3-typescript-搭建开发环境"><span>1.1 Vite2+Vue3+Typescript 搭建开发环境</span></a></h3><ul><li>安装使用vite2</li><li>支持vue3</li><li>支持typescript</li><li>支持eslint、prettier和editorconfig</li><li>git hooks</li><li>别名</li><li>样式</li><li>静态资源</li><li>mock</li><li>axios请求封装</li><li>pinia状态管理</li><li>路由</li><li>NaïveUI组件库</li><li>环境变量和模式</li></ul><h3 id="_1-2-rollup和vite2插件系统和自定义插件" tabindex="-1"><a class="header-anchor" href="#_1-2-rollup和vite2插件系统和自定义插件"><span>1.2 rollup和vite2插件系统和自定义插件</span></a></h3><h3 id="_1-3-从零实现vite2" tabindex="-1"><a class="header-anchor" href="#_1-3-从零实现vite2"><span>1.3 从零实现vite2</span></a></h3><h2 id="_2-安装-vite" tabindex="-1"><a class="header-anchor" href="#_2-安装-vite"><span>2.安装 vite</span></a></h2><h3 id="_2-1-vite-介绍" tabindex="-1"><a class="header-anchor" href="#_2-1-vite-介绍"><span>2.1 vite 介绍</span></a></h3><ul><li>Vite (法语意为 &quot;快速的&quot;，发音 /vit/) 是下一代前端开发与构建工具</li><li>💡 极速的服务启动 使用原生 ESM 文件，无需打包!</li><li>⚡️ 轻量快速的热重载 无论应用程序大小如何，都始终极快的模块热重载（HMR）</li><li>🛠️ 丰富的功能 对 TypeScript、JSX、CSS 等支持开箱即用。</li><li>📦 优化的构建 可选 “多页应用” 或 “库” 模式的预配置 Rollup 构建</li><li>🔩 通用的插件 在开发和构建之间共享 Rollup-superset 插件接口。</li><li>🔑 完全类型化的 API 灵活的 API 和完整 TypeScript</li></ul><h3 id="_2-2-vite-安装" tabindex="-1"><a class="header-anchor" href="#_2-2-vite-安装"><span>2.2 vite 安装</span></a></h3><ul><li><a href="https://pnpm.io/" target="_blank" rel="noopener noreferrer">pnpm</a></li><li><a href="https://vitejs.dev/config" target="_blank" rel="noopener noreferrer">https://vitejs.dev/config</a></li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">pnpm install vite -D</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="_3-启动-vite" tabindex="-1"><a class="header-anchor" href="#_3-启动-vite"><span>3.启动 vite</span></a></h2><ul><li><a href="https://esbuild.github.io" target="_blank" rel="noopener noreferrer">https://esbuild.github.io</a></li><li>Vite 主要由两部分组成 <ul><li>一个开发服务器，它基于 原生 ES 模块 提供了 丰富的内建功能，如速度快到惊人的 模块热更新（HMR）,Vite 将会使用 <code>esbuild</code> 预构建依赖。<code>Esbuild</code> 使用 <code>Go</code> 编写，并且比以 JavaScript 编写的打包器预构建依赖快 10-100 倍</li><li>一套构建指令，它使用 Rollup 打包你的代码，并且它是预配置的，可输出用于生产环境的高度优化过的静态资源</li></ul></li></ul><p><img src="https://static.zhufengpeixun.com/websocket_1645812565010.png" alt=""> <img src="https://static.zhufengpeixun.com/validtejs_1645813926867.png" alt=""></p><h3 id="_3-1-package-json" tabindex="-1"><a class="header-anchor" href="#_3-1-package-json"><span>3.1 package.json</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">&quot;dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vite&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vite build&quot;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-vite-config-js" tabindex="-1"><a class="header-anchor" href="#_3-2-vite-config-js"><span>3.2 vite.config.js</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vite&quot;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-index-html" tabindex="-1"><a class="header-anchor" href="#_3-3-index-html"><span>3.3 index.html</span></a></h3><p>index.html</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token constant">DOCTYPE</span> html<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span>html lang<span class="token operator">=</span><span class="token string">&quot;en&quot;</span><span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span>head<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span>meta charset<span class="token operator">=</span><span class="token string">&quot;UTF-8&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span>meta name<span class="token operator">=</span><span class="token string">&quot;viewport&quot;</span> content<span class="token operator">=</span><span class="token string">&quot;width=device-width, initial-scale=1.0&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span>title<span class="token operator">&gt;</span>Vite App<span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line">  <span class="token operator">&lt;</span>body<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">&quot;app&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span>script type<span class="token operator">=</span><span class="token string">&quot;module&quot;</span> src<span class="token operator">=</span><span class="token string">&quot;/src/main.ts&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-4-src-env-d-ts" tabindex="-1"><a class="header-anchor" href="#_3-4-src-env-d-ts"><span>3.4 src\\env.d.ts</span></a></h3><ul><li>Vite 默认的类型定义是写给它的 Node.js API 的,要将其补充到一个 Vite 应用的客户端代码环境中</li><li>[客户端类型](https://vitejs.cn/guide/features.html</li><li>如果你的库依赖于某个全局库 <ul><li>使用<code>///</code> 指令</li><li>三斜线指令仅可放在包含它的文件的最顶端</li><li>三斜线引用告诉编译器在编译过程中要引入的额外的文件</li></ul></li></ul><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token comment">/// &lt;reference types=&quot;vite/client&quot; /&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_3-5-src-main-ts" tabindex="-1"><a class="header-anchor" href="#_3-5-src-main-ts"><span>3.5 src\\main.ts</span></a></h3><p>src\\main.ts</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;app&quot;</span><span class="token punctuation">)</span><span class="token operator">!</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">&quot;main&quot;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>hot<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>hot<span class="token punctuation">.</span><span class="token function">accept</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">updatedModule</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> updatedModule<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-6-tsconfig-json" tabindex="-1"><a class="header-anchor" href="#_3-6-tsconfig-json"><span>3.6 tsconfig.json</span></a></h3><p>tsconfig.json</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esnext&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">&quot;module&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esnext&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">&quot;moduleResolution&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">&quot;strict&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">&quot;jsx&quot;</span><span class="token operator">:</span> <span class="token string">&quot;preserve&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">&quot;sourceMap&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">&quot;esModuleInterop&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">&quot;lib&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;esnext&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;dom&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;es2018.promise&quot;</span><span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">&quot;include&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;src/**/*.ts&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;src/**/*.d.ts&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;src/**/*.tsx&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;src/**/*.vue&quot;</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">解释</th></tr></thead><tbody><tr><td style="text-align:left;">target</td><td style="text-align:left;">用于指定编译之后的版本目标</td></tr><tr><td style="text-align:left;">module</td><td style="text-align:left;">生成的模块形式：none、commonjs、amd、system、umd、es6、es2015 或 esnext 只有 amd 和 system 能和 outFile 一起使用 target 为 es5 或更低时可用 es6 和 es2015</td></tr><tr><td style="text-align:left;">moduleResolution</td><td style="text-align:left;">选择模块解析策略，有 node 和 classic 两种类型 <a href="https://www.typescriptlang.org/docs/handbook/module-resolution.html" target="_blank" rel="noopener noreferrer">module-resolution</a></td></tr><tr><td style="text-align:left;">strict</td><td style="text-align:left;">是否启动所有类型检查</td></tr><tr><td style="text-align:left;">jsx</td><td style="text-align:left;">react 模式会生成 React.createElement，在使用前不需要再进行转换操作了，输出文件的扩展名为.js</td></tr><tr><td style="text-align:left;">sourceMap</td><td style="text-align:left;">把 ts 文件编译成 js 文件的时候，同时生成对应的 sourceMap 文件</td></tr><tr><td style="text-align:left;">esModuleInterop</td><td style="text-align:left;">为导入内容创建命名空间,实现 CommonJS 和 ES 模块之间的互相访问</td></tr><tr><td style="text-align:left;">lib</td><td style="text-align:left;">编译时引入的 ES 功能库，包括：es5 、es6、es7、dom 等。如果未设置，则默认为： target 为 es5 时: [&quot;dom&quot;, &quot;es5&quot;, &quot;scripthost&quot;] target 为 es6 时: [&quot;dom&quot;, &quot;es6&quot;, &quot;dom.iterable&quot;, &quot;scripthost&quot;]</td></tr><tr><td style="text-align:left;">include</td><td style="text-align:left;">include 也可以指定要编译的路径列表，但是和 files 的区别在于，这里的路径可以是文件夹，也可以是文件</td></tr></tbody></table><h3 id="_3-7-gitignore" tabindex="-1"><a class="header-anchor" href="#_3-7-gitignore"><span>3.7 .gitignore</span></a></h3><p>.gitignore</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">node_modules</span>
<span class="line">pnpm-debug.log*</span>
<span class="line">.vscode/*</span>
<span class="line">sh.exe.stackdump</span>
<span class="line">dist</span>
<span class="line">coverage</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-支持-vue3" tabindex="-1"><a class="header-anchor" href="#_4-支持-vue3"><span>4.支持 vue3</span></a></h2><h3 id="_4-1-安装-vue" tabindex="-1"><a class="header-anchor" href="#_4-1-安装-vue"><span>4.1 安装 vue</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">pnpm install vue</span>
<span class="line">pnpm install @vitejs/plugin-vue -D</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-vite-config-ts" tabindex="-1"><a class="header-anchor" href="#_4-2-vite-config-ts"><span>4.2 vite.config.ts</span></a></h3><p>vite.config.ts</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import { defineConfig } from &#39;vite&#39;</span>
<span class="line">+import vue from &quot;@vitejs/plugin-vue&quot;;</span>
<span class="line">export default defineConfig({</span>
<span class="line">+ plugins: [vue()]</span>
<span class="line">})</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-src-env-d-ts" tabindex="-1"><a class="header-anchor" href="#_4-3-src-env-d-ts"><span>4.3 src\\env.d.ts</span></a></h3><p>src\\env.d.ts</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">/// &lt;reference types=&quot;vite/client&quot; /&gt;</span>
<span class="line">+declare module &quot;*.vue&quot; {</span>
<span class="line">+  import type { DefineComponent } from &quot;vue&quot;;</span>
<span class="line">+  const component: DefineComponent&lt;{}, {}, any&gt;;</span>
<span class="line">+  export default component;</span>
<span class="line">+}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-4-src-main-ts" tabindex="-1"><a class="header-anchor" href="#_4-4-src-main-ts"><span>4.4 src\\main.ts</span></a></h3><p>src\\main.ts</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">+import { createApp } from &quot;vue&quot;;</span>
<span class="line">+import App from &quot;./App.vue&quot;;</span>
<span class="line">+const app = createApp(App)</span>
<span class="line"> +app.mount(&quot;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-5-src-app-vue" tabindex="-1"><a class="header-anchor" href="#_4-5-src-app-vue"><span>4.5 src\\App.vue</span></a></h3><p>src\\App.vue</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;script setup lang=&quot;ts&quot;&gt;</span>
<span class="line">import HelloWorld from &#39;./components/HelloWorld.vue&#39;</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;template&gt;</span>
<span class="line">  &lt;HelloWorld msg=&quot;Vue3 + TypeScript + Vite2&quot; /&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span>
<span class="line">&lt;style&gt;&lt;/style&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-6-helloworld-vue" tabindex="-1"><a class="header-anchor" href="#_4-6-helloworld-vue"><span>4.6 HelloWorld.vue</span></a></h3><p>src\\components\\HelloWorld.vue</p><ul><li>[单文件组件 <code>&lt;script setup&gt;</code>](https://v3.cn.vuejs.org/api/sfc-script-setup.html</li><li>[lang](https://v3.cn.vuejs.org/api/sfc-spec.html</li><li>[<code>ref</code>](https://v3.cn.vuejs.org/api/refs-api.html</li><li>在 <code>&lt;script setup&gt;</code> 中必须使用 [defineProps](https://v3.cn.vuejs.org/api/sfc-script-setup.html</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;script setup lang=&quot;ts&quot;&gt;</span>
<span class="line">import { ref } from &#39;vue&#39;</span>
<span class="line">import logoUrl from &#39;../assets/logo.png&#39;</span>
<span class="line">defineProps&lt;{ msg: string }&gt;()</span>
<span class="line">const count = ref(0)</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;template&gt;</span>
<span class="line">  &lt;h1&gt;{{ msg }}&lt;/h1&gt;</span>
<span class="line">  &lt;img :src=&quot;logoUrl&quot; /&gt;</span>
<span class="line">  &lt;div&gt;</span>
<span class="line">    &lt;button type=&quot;button&quot; @click=&quot;count++&quot;&gt;count is: {{ count }}&lt;/button&gt;</span>
<span class="line">  &lt;/div&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span>
<span class="line">&lt;style scoped&gt;</span>
<span class="line">img {</span>
<span class="line">  width: 100px;</span>
<span class="line">  height: 100px;</span>
<span class="line">}</span>
<span class="line">&lt;/style&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-支持-typescript" tabindex="-1"><a class="header-anchor" href="#_5-支持-typescript"><span>5.支持 typescript</span></a></h2><ul><li>只编译不校验</li></ul><h3 id="_5-1-安装" tabindex="-1"><a class="header-anchor" href="#_5-1-安装"><span>5.1 安装</span></a></h3><ul><li><a href="https://www.npmjs.com/package/typescript" target="_blank" rel="noopener noreferrer">typescript</a>是一种基于 JavaScript 的强类型编程语言</li><li><a href="https://www.npmjs.com/package/vue-tsc" target="_blank" rel="noopener noreferrer">vue-tsc</a>可以对 Vue3 进行 Typescript 类型较验</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">pnpm install typescript vue-tsc  -D</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_5-2-package-json" tabindex="-1"><a class="header-anchor" href="#_5-2-package-json"><span>5.2 package.json</span></a></h3><p>package.json</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">{</span>
<span class="line">  &quot;scripts&quot;: {</span>
<span class="line">    &quot;dev&quot;: &quot;vite&quot;,</span>
<span class="line">+   &quot;build&quot;: &quot;vue-tsc --noEmit &amp;&amp; vite build&quot;</span>
<span class="line">  },</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-3-msg-ts" tabindex="-1"><a class="header-anchor" href="#_5-3-msg-ts"><span>5.3 msg.ts</span></a></h3><p>src\\msg.ts</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">interface</span> <span class="token class-name">Msg</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">text</span><span class="token operator">:</span> string<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token literal-property property">msg</span><span class="token operator">:</span> Msg <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;zhufeng&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">13</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> msg</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-4-app-vue" tabindex="-1"><a class="header-anchor" href="#_5-4-app-vue"><span>5.4 App.vue</span></a></h3><p>src\\App.vue</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;script setup lang=&quot;ts&quot;&gt;</span>
<span class="line">import HelloWorld from &#39;./components/HelloWorld.vue&#39;</span>
<span class="line">+import msg from &quot;./msg&quot;</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;template&gt;</span>
<span class="line">+  &lt;HelloWorld :msg=&quot;msg.text&quot; /&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span>
<span class="line">&lt;style&gt;&lt;/style&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-eslint" tabindex="-1"><a class="header-anchor" href="#_6-eslint"><span>6.ESLint</span></a></h2><ul><li>ESLint<a href="https://eslint.bootcss.com/" target="_blank" rel="noopener noreferrer">eslint</a> 是一个插件化并且可配置的 JavaScript 语法规则和代码风格的检查工具 <ul><li>代码质量问题：使用方式有可能有问题</li><li>代码风格问题：风格不符合一定规则</li></ul></li></ul><h3 id="_6-1-安装" tabindex="-1"><a class="header-anchor" href="#_6-1-安装"><span>6.1 安装</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">pnpm install eslint eslint-plugin-vue  @typescript-eslint/parser @typescript-eslint/eslint-plugin @vue/eslint-config-typescript   -D</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><table><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">eslint</td><td style="text-align:left;">ESLint 是一个用于识别和报告在 ECMAScript/JavaScript 代码中发现的模式的工具</td></tr><tr><td style="text-align:left;">eslint-plugin-vue</td><td style="text-align:left;">Vue 的官方 ESLint 插件</td></tr><tr><td style="text-align:left;">@typescript-eslint/parser</td><td style="text-align:left;">一个 ESLint 解析器，它利用 TypeScript-ESTree 允许 ESLint 检查 TypeScript 源代码</td></tr><tr><td style="text-align:left;">@typescript-eslint/eslint-plugin</td><td style="text-align:left;">一个 ESLint 插件，为 TypeScript 代码库提供 lint 规则</td></tr><tr><td style="text-align:left;">@vue/eslint-config-typescript</td><td style="text-align:left;">Vue 的 eslint-config-typescript</td></tr></tbody></table><h3 id="_6-2-eslintrc-js" tabindex="-1"><a class="header-anchor" href="#_6-2-eslintrc-js"><span>6.2 .eslintrc.js</span></a></h3><p>.eslintrc.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">root</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">env</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">browser</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">es2021</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">node</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token string">&quot;plugin:vue/vue3-recommended&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">&quot;eslint:recommended&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">&quot;@vue/typescript/recommended&quot;</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">parserOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">parser</span><span class="token operator">:</span> <span class="token string">&quot;@typescript-eslint/parser&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">ecmaVersion</span><span class="token operator">:</span> <span class="token number">2021</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">&quot;no-unused-vars&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">&quot;vue/no-unused-vars&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">&quot;@typescript-eslint/no-unused-vars&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">globals</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">defineProps</span><span class="token operator">:</span> <span class="token string">&quot;readonly&quot;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-3-eslintignore" tabindex="-1"><a class="header-anchor" href="#_6-3-eslintignore"><span>6.3 .eslintignore</span></a></h3><p>.eslintignore</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">node_modules</span>
<span class="line">dist</span>
<span class="line">*.css</span>
<span class="line">*.jpg</span>
<span class="line">*.jpeg</span>
<span class="line">*.png</span>
<span class="line">*.gif</span>
<span class="line">*.d.ts</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-4-package-json" tabindex="-1"><a class="header-anchor" href="#_6-4-package-json"><span>6.4 package.json</span></a></h3><p>package.json</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">{</span>
<span class="line">    &quot;scripts&quot;: {</span>
<span class="line">     &quot;dev&quot;: &quot;vite&quot;,</span>
<span class="line">     &quot;build&quot;: &quot;vue-tsc --noEmit &amp;&amp; vite build&quot;,</span>
<span class="line">+    &quot;lint&quot;: &quot;eslint --ext .ts,.tsx,vue src/** --no-error-on-unmatched-pattern --quiet&quot;,</span>
<span class="line">+    &quot;lint:fix&quot;: &quot;eslint --ext .ts,.tsx,vue src/** --no-error-on-unmatched-pattern --quiet --fix&quot;</span>
<span class="line">  },</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-prettier" tabindex="-1"><a class="header-anchor" href="#_7-prettier"><span>7.Prettier</span></a></h2><ul><li><p>ESLint 主要解决的是代码质量问题</p></li><li><p><a href="https://eslint.bootcss.com/docs/rules/" target="_blank" rel="noopener noreferrer">代码质量规则</a></p><ul><li>no-unused-vars 禁止出现未使用过的变量</li><li>no-implicit-globals 禁止在全局范围内使用变量声明和 function 声明</li><li>prefer-promise-reject-errors 要求使用 Error 对象作为 Promise 拒绝的原因</li></ul></li><li><p><a href="https://prettier.io/" target="_blank" rel="noopener noreferrer">prettier</a>主要解决的是代码风格问题</p><ul><li>max-len 最大长度</li><li>no-mixed-spaces-and-tabs 不允许空格和 tab 混合</li><li>keyword-spacing 关键字的空</li><li>comma-style 冒号风格</li></ul></li></ul><h3 id="_7-1-安装" tabindex="-1"><a class="header-anchor" href="#_7-1-安装"><span>7.1 安装</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">pnpm install prettier eslint-plugin-prettier  @vue/eslint-config-prettier -D</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><table><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">prettier</td><td style="text-align:left;">代码格式化</td></tr><tr><td style="text-align:left;">eslint-plugin-prettier</td><td style="text-align:left;">作为 ESLint 规则运行得 prettier</td></tr><tr><td style="text-align:left;">@vue/eslint-config-prettier</td><td style="text-align:left;">Vue 的 eslint-config-prettier</td></tr></tbody></table><h3 id="_7-2-eslintrc-js" tabindex="-1"><a class="header-anchor" href="#_7-2-eslintrc-js"><span>7.2 .eslintrc.js</span></a></h3><p>.eslintrc.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">module.exports = {</span>
<span class="line">  root: true,</span>
<span class="line">  env: {</span>
<span class="line">    browser: true,</span>
<span class="line">    es2021: true,</span>
<span class="line">    node: true</span>
<span class="line">  },</span>
<span class="line"></span>
<span class="line">  extends: [</span>
<span class="line">    &quot;plugin:vue/vue3-recommended&quot;,</span>
<span class="line">    &quot;eslint:recommended&quot;,</span>
<span class="line">    &quot;@vue/typescript/recommended&quot;,</span>
<span class="line">+   &quot;prettier&quot;,</span>
<span class="line">+   &quot;@vue/eslint-config-prettier&quot;</span>
<span class="line">  ],</span>
<span class="line">  parserOptions: {</span>
<span class="line">    parser: &quot;@typescript-eslint/parser&quot;,</span>
<span class="line">    ecmaVersion: 2021</span>
<span class="line">  },</span>
<span class="line">  rules: {</span>
<span class="line">+   &quot;prettier/prettier&quot;: [</span>
<span class="line">+     &quot;error&quot;,</span>
<span class="line">+     {</span>
<span class="line">+       singleQuote: false,</span>
<span class="line">+       tabWidth: 2,</span>
<span class="line">+       indent: 2,</span>
<span class="line">+       semi: false,</span>
<span class="line">+       trailingComma: &quot;none&quot;,</span>
<span class="line">+       endOfLine: &quot;auto&quot;</span>
<span class="line">+     }</span>
<span class="line">+   ],</span>
<span class="line">+   &quot;no-unused-vars&quot;: &quot;off&quot;,</span>
<span class="line">+   &quot;vue/no-unused-vars&quot;: &quot;off&quot;,</span>
<span class="line">+   &quot;@typescript-eslint/no-unused-vars&quot;: &quot;off&quot;</span>
<span class="line">+ },</span>
<span class="line">  globals: {</span>
<span class="line">    defineProps: &quot;readonly&quot;</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-3-prettierrc-js" tabindex="-1"><a class="header-anchor" href="#_7-3-prettierrc-js"><span>7.3 .prettierrc.js</span></a></h3><p>.prettierrc.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">singleQuote</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">//使用单引号</span></span>
<span class="line">  <span class="token literal-property property">semi</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">////末尾添加分号</span></span>
<span class="line">  <span class="token literal-property property">tabWidth</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">trailingComma</span><span class="token operator">:</span> <span class="token string">&quot;none&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">useTabs</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">endOfLine</span><span class="token operator">:</span> <span class="token string">&quot;auto&quot;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-4-prettierignore" tabindex="-1"><a class="header-anchor" href="#_7-4-prettierignore"><span>7.4 .prettierignore</span></a></h3><p>.prettierignore</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">node_modules</span>
<span class="line">dist</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-5-editorconfig" tabindex="-1"><a class="header-anchor" href="#_7-5-editorconfig"><span>7.5 editorconfig</span></a></h3><ul><li><a href="https://editorconfig.org/" target="_blank" rel="noopener noreferrer">editorconfig</a>帮助开发人员在不同的编辑器和 IDE 之间定义和维护一致的编码样式</li><li>不同的开发人员，不同的编辑器，有不同的编码风格，而 EditorConfig 就是用来协同团队开发人员之间的代码的风格及样式规范化的一个工具，而.editorconfig 正是它的默认配置文件</li><li><a href="https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig" target="_blank" rel="noopener noreferrer">EditorConfig</a></li><li>vscode 这类编辑器，需要自行安装 editorconfig 插件</li></ul><h4 id="_7-5-1-editorconfig" tabindex="-1"><a class="header-anchor" href="#_7-5-1-editorconfig"><span>7.5.1 .editorconfig</span></a></h4><ul><li>Unix 系统里，每行结尾只有换行,即<code>\\n</code> LF(Line Feed)</li><li>Windows 系统里面，每行结尾是<code>换行 回车</code>，即<code>\\r\\n</code> CR/LF</li><li>Mac 系统里，每行结尾是<code>回车</code>，即<code>\\r</code> CR(Carriage Return)</li></ul><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line">root <span class="token operator">=</span> <span class="token boolean">true</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">[</span><span class="token operator">*</span><span class="token punctuation">]</span></span>
<span class="line">charset <span class="token operator">=</span> utf<span class="token operator">-</span><span class="token number">8</span></span>
<span class="line">indent_style <span class="token operator">=</span> space</span>
<span class="line">indent_size <span class="token operator">=</span> <span class="token number">2</span></span>
<span class="line">end_of_line <span class="token operator">=</span> lf</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-6-自动格式化" tabindex="-1"><a class="header-anchor" href="#_7-6-自动格式化"><span>7.6 自动格式化</span></a></h3><p><img src="https://static.zhufengpeixun.com/formatonsave_1645855381499.png" alt=""></p><p><img src="https://static.zhufengpeixun.com/formatter_1645855386534.png" alt=""></p><h2 id="_8-git-hooks" tabindex="-1"><a class="header-anchor" href="#_8-git-hooks"><span>8.git hooks</span></a></h2><ul><li>可以在<code>git commit</code>之前检查代码，保证所有提交到版本库中的代码都是符合规范的</li><li>可以在<code>git push</code>之前执行单元测试,保证所有的提交的代码经过的单元测试</li><li><a href="https://typicode.github.io/husky" target="_blank" rel="noopener noreferrer">husky</a>可以让我们向项目中方便添加<code>git hooks</code>,它会自动在仓库中的 <code>.git/</code> 目录下增加相应的钩子,比如 <code>pre-commit</code> 钩子就会在你执行 <code>git commit</code>命令的时候的触发</li><li><a href="https://www.npmjs.com/package/lint-staged" target="_blank" rel="noopener noreferrer">lint-staged</a>用于实现每次提交只检查本次提交所修改的文件</li><li><a href="https://www.npmjs.com/package/mrm" target="_blank" rel="noopener noreferrer">mrm</a>可以根据<code>package.json</code>依赖项中的代码质量工具来安装和配置 <code>husky</code> 和 <code>lint-staged</code></li><li>Commitlint 可以规范<code>git commit -m &quot;&quot;</code>中的描述信息</li></ul><h3 id="_8-1-lint-staged" tabindex="-1"><a class="header-anchor" href="#_8-1-lint-staged"><span>8.1 lint-staged</span></a></h3><h4 id="_8-1-1-安装" tabindex="-1"><a class="header-anchor" href="#_8-1-1-安装"><span>8.1.1 安装</span></a></h4><ul><li><code>mrm</code>安装<code>lint-staged</code>的同时会安装<code>husky</code></li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">pnpm install mrm  -D</span>
<span class="line">npx mrm lint-staged</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_8-1-2-package-json" tabindex="-1"><a class="header-anchor" href="#_8-1-2-package-json"><span>8.1.2 package.json</span></a></h4><p>package.json</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">{</span>
<span class="line">  &quot;name&quot;: &quot;vite2vue3ts-prepare&quot;,</span>
<span class="line">  &quot;version&quot;: &quot;1.0.0&quot;,</span>
<span class="line">  &quot;description&quot;: &quot;&quot;,</span>
<span class="line">  &quot;main&quot;: &quot;index.js&quot;,</span>
<span class="line">  &quot;scripts&quot;: {</span>
<span class="line">    &quot;dev&quot;: &quot;vite&quot;,</span>
<span class="line">    &quot;build&quot;: &quot;vue-tsc --noEmit &amp;&amp; vite build&quot;,</span>
<span class="line">    &quot;lint&quot;: &quot;eslint --ext .ts,vue src/** --no-error-on-unmatched-pattern --quiet&quot;,</span>
<span class="line">    &quot;lint:fix&quot;: &quot;eslint --ext .ts,vue src/** --no-error-on-unmatched-pattern --fix&quot;,</span>
<span class="line">+   &quot;prepare&quot;: &quot;husky install&quot;</span>
<span class="line">  },</span>
<span class="line">  &quot;keywords&quot;: [],</span>
<span class="line">  &quot;author&quot;: &quot;&quot;,</span>
<span class="line">  &quot;license&quot;: &quot;ISC&quot;,</span>
<span class="line">  &quot;dependencies&quot;: {</span>
<span class="line">    &quot;vue&quot;: &quot;^3.2.31&quot;</span>
<span class="line">  },</span>
<span class="line">  &quot;devDependencies&quot;: {</span>
<span class="line">    &quot;@typescript-eslint/eslint-plugin&quot;: &quot;^5.12.1&quot;,</span>
<span class="line">    &quot;@typescript-eslint/parser&quot;: &quot;^5.12.1&quot;,</span>
<span class="line">    &quot;@vitejs/plugin-vue&quot;: &quot;^2.2.2&quot;,</span>
<span class="line">    &quot;@vue/eslint-config-prettier&quot;: &quot;^7.0.0&quot;,</span>
<span class="line">    &quot;@vue/eslint-config-typescript&quot;: &quot;^10.0.0&quot;,</span>
<span class="line">    &quot;eslint&quot;: &quot;^8.10.0&quot;,</span>
<span class="line">    &quot;eslint-plugin-prettier&quot;: &quot;^4.0.0&quot;,</span>
<span class="line">    &quot;eslint-plugin-vue&quot;: &quot;^8.5.0&quot;,</span>
<span class="line">+   &quot;husky&quot;: &quot;^7.0.0&quot;,</span>
<span class="line">+   &quot;lint-staged&quot;: &quot;^12.3.4&quot;,</span>
<span class="line">+   &quot;mrm&quot;: &quot;^3.0.10&quot;,</span>
<span class="line">    &quot;prettier&quot;: &quot;^2.5.1&quot;,</span>
<span class="line">    &quot;typescript&quot;: &quot;^4.5.5&quot;,</span>
<span class="line">    &quot;vite&quot;: &quot;^2.8.4&quot;,</span>
<span class="line">    &quot;vue-tsc&quot;: &quot;^0.32.0&quot;</span>
<span class="line">  },</span>
<span class="line">+ &quot;lint-staged&quot;: {</span>
<span class="line">+   &quot;*.{ts,vue}&quot;: &quot;eslint --cache --fix&quot;</span>
<span class="line">+ }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-2-commitlint" tabindex="-1"><a class="header-anchor" href="#_8-2-commitlint"><span>8.2 commitlint</span></a></h3><ul><li><p><a href="https://www.npmjs.com/package/@commitlint/cli" target="_blank" rel="noopener noreferrer">commitlint</a>推荐我们使用<a href="https://www.npmjs.com/package/@commitlint/config-conventional" target="_blank" rel="noopener noreferrer">onfig-conventional</a>配置去写 <code>commit</code></p></li><li><p>提交格式 <code>git commit -m &lt;type&gt;[optional scope]: &lt;description&gt;</code></p><ul><li><code>type</code> ：用于表明我们这次提交的改动类型，是新增了功能？还是修改了测试代码？又或者是更新了文档？</li><li><code>optional scope</code>：一个可选的修改范围。用于标识此次提交主要涉及到代码中哪个模块</li><li><code>description</code>：一句话描述此次提交的主要内容，做到言简意赅</li></ul></li></ul><h4 id="_8-2-1-type" tabindex="-1"><a class="header-anchor" href="#_8-2-1-type"><span>8.2.1 type</span></a></h4><table><thead><tr><th style="text-align:left;">类型</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">build</td><td style="text-align:left;">编译相关的修改，例如发布版本、对项目构建或者依赖的改动</td></tr><tr><td style="text-align:left;">chore</td><td style="text-align:left;">其他修改, 比如改变构建流程、或者增加依赖库、工具等</td></tr><tr><td style="text-align:left;">ci</td><td style="text-align:left;">持续集成修改</td></tr><tr><td style="text-align:left;">docs</td><td style="text-align:left;">文档修改</td></tr><tr><td style="text-align:left;">feature</td><td style="text-align:left;">新特性、新功能</td></tr><tr><td style="text-align:left;">fix</td><td style="text-align:left;">修改 bug</td></tr><tr><td style="text-align:left;">perf</td><td style="text-align:left;">优化相关，比如提升性能、体验</td></tr><tr><td style="text-align:left;">refactor</td><td style="text-align:left;">代码重构</td></tr><tr><td style="text-align:left;">revert</td><td style="text-align:left;">回滚到上一个版本</td></tr><tr><td style="text-align:left;">style</td><td style="text-align:left;">代码格式修改</td></tr><tr><td style="text-align:left;">test</td><td style="text-align:left;">测试用例修改</td></tr></tbody></table><h4 id="_8-2-2-安装" tabindex="-1"><a class="header-anchor" href="#_8-2-2-安装"><span>8.2.2 安装</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">pnpm install @commitlint/cli @commitlint/config-conventional -D</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="_8-2-3-配置" tabindex="-1"><a class="header-anchor" href="#_8-2-3-配置"><span>8.2.3 配置</span></a></h4><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line">npx husky add <span class="token punctuation">.</span>husky<span class="token operator">/</span>commit<span class="token operator">-</span>msg <span class="token string">&quot;npx --no-install commitlint --edit $1&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="_8-2-4-commitlint-config-js" tabindex="-1"><a class="header-anchor" href="#_8-2-4-commitlint-config-js"><span>8.2.4 commitlint.config.js</span></a></h4><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;@commitlint/config-conventional&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">&quot;type-enum&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token number">2</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string">&quot;always&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">[</span></span>
<span class="line">        <span class="token string">&quot;build&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&quot;chore&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&quot;ci&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&quot;docs&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&quot;feature&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&quot;fix&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&quot;perf&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&quot;refactor&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&quot;revert&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&quot;style&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&quot;test&quot;</span></span>
<span class="line">      <span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-配置别名" tabindex="-1"><a class="header-anchor" href="#_9-配置别名"><span>9.配置别名</span></a></h2><h3 id="_9-1-vite-config-ts" tabindex="-1"><a class="header-anchor" href="#_9-1-vite-config-ts"><span>9.1 vite.config.ts</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import { defineConfig } from &quot;vite&quot;</span>
<span class="line">+import { resolve } from &quot;path&quot;</span>
<span class="line">import vue from &quot;@vitejs/plugin-vue&quot;</span>
<span class="line">export default defineConfig({</span>
<span class="line">+ resolve: {</span>
<span class="line">+   alias: {</span>
<span class="line">+     &quot;@&quot;: resolve(&quot;src&quot;)</span>
<span class="line">+   }</span>
<span class="line">+ },</span>
<span class="line">  plugins: [vue()]</span>
<span class="line">})</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-2-tsconfig-json" tabindex="-1"><a class="header-anchor" href="#_9-2-tsconfig-json"><span>9.2 tsconfig.json</span></a></h3><p>tsconfig.json</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">{</span>
<span class="line">  &quot;compilerOptions&quot;: {</span>
<span class="line">    &quot;target&quot;: &quot;esnext&quot;,</span>
<span class="line">    &quot;module&quot;: &quot;esnext&quot;,</span>
<span class="line">    &quot;moduleResolution&quot;: &quot;node&quot;,</span>
<span class="line">    &quot;strict&quot;: true,</span>
<span class="line">    &quot;jsx&quot;: &quot;preserve&quot;,</span>
<span class="line">    &quot;sourceMap&quot;: true,</span>
<span class="line">    &quot;esModuleInterop&quot;: true,</span>
<span class="line">    &quot;lib&quot;: [&quot;esnext&quot;, &quot;dom&quot;, &quot;es2018.promise&quot;],</span>
<span class="line">+   &quot;baseUrl&quot;: &quot;.&quot;,</span>
<span class="line">+   &quot;paths&quot;: {</span>
<span class="line">+     &quot;@/*&quot;: [&quot;src/*&quot;]</span>
<span class="line">+   }</span>
<span class="line">  },</span>
<span class="line">  &quot;include&quot;: [&quot;src/**/*.ts&quot;, &quot;src/**/*.d.ts&quot;, &quot;src/**/*.tsx&quot;, &quot;src/**/*.vue&quot;]</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-3-app-vue" tabindex="-1"><a class="header-anchor" href="#_9-3-app-vue"><span>9.3 App.vue</span></a></h3><p>src\\App.vue</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;script setup lang=&quot;ts&quot;&gt;</span>
<span class="line">+import HelloWorld from &quot;@/components/HelloWorld.vue&quot;</span>
<span class="line">import msg from &quot;./msg&quot;</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;template&gt;</span>
<span class="line">  &lt;HelloWorld :msg=&quot;msg.text&quot; /&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span>
<span class="line">&lt;style&gt;&lt;/style&gt;</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_10-样式处理" tabindex="-1"><a class="header-anchor" href="#_10-样式处理"><span>10.样式处理</span></a></h2><h3 id="_10-1-全局样式" tabindex="-1"><a class="header-anchor" href="#_10-1-全局样式"><span>10.1 全局样式</span></a></h3><h4 id="_10-1-1-src-global-css" tabindex="-1"><a class="header-anchor" href="#_10-1-1-src-global-css"><span>10.1.1 src\\global.css</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line"> </span>
<span class="line">  background-color: lightgrey;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_10-1-2-src-main-ts" tabindex="-1"><a class="header-anchor" href="#_10-1-2-src-main-ts"><span>10.1.2 src\\main.ts</span></a></h4><p>src\\main.ts</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import { createApp } from &quot;vue&quot;</span>
<span class="line">import App from &quot;./App.vue&quot;</span>
<span class="line">+import &quot;./global.css&quot;</span>
<span class="line">const app = createApp(App)</span>
<span class="line"> app.mount(&quot;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10-2-局部样式" tabindex="-1"><a class="header-anchor" href="#_10-2-局部样式"><span>10.2 局部样式</span></a></h3><ul><li>当 <code>style</code>标签有 <code>scoped</code> 属性时，它的 <code>CSS</code> 只作用于当前组件中的元素</li><li>它使用了 <code>data-v-hash</code> 的方式来使 css 有了它对应模块的标识</li></ul><h4 id="_10-2-1-helloworld-vue" tabindex="-1"><a class="header-anchor" href="#_10-2-1-helloworld-vue"><span>10.2.1 HelloWorld.vue</span></a></h4><p>src\\components\\HelloWorld.vue</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;script setup lang=&quot;ts&quot;&gt;</span>
<span class="line">import { ref } from &quot;vue&quot;</span>
<span class="line">import logoUrl from &quot;../assets/logo.png&quot;</span>
<span class="line">defineProps&lt;{ msg: string }&gt;()</span>
<span class="line">const count = ref(0)</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;template&gt;</span>
<span class="line">  &lt;h1&gt;{{ msg }}&lt;/h1&gt;</span>
<span class="line">  &lt;img :src=&quot;logoUrl&quot; /&gt;</span>
<span class="line">  &lt;div&gt;</span>
<span class="line">    &lt;button type=&quot;button&quot; @click=&quot;count++&quot;&gt;count is: {{ count }}&lt;/button&gt;</span>
<span class="line">  &lt;/div&gt;</span>
<span class="line">+ &lt;a&gt;超链接&lt;/a&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span>
<span class="line">&lt;style scoped&gt;</span>
<span class="line">img {</span>
<span class="line">  width: 100px;</span>
<span class="line">  height: 100px;</span>
<span class="line">}</span>
<span class="line">+a {</span>
<span class="line">+  color: red;</span>
<span class="line">+}</span>
<span class="line">&lt;/style&gt;</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10-3-css-modules" tabindex="-1"><a class="header-anchor" href="#_10-3-css-modules"><span>10.3 CSS Modules</span></a></h3><ul><li>通过 <code>module</code> 作用的 <code>style</code> 都被保存到<code>$style</code> 对象中</li></ul><h4 id="_10-3-1-内联" tabindex="-1"><a class="header-anchor" href="#_10-3-1-内联"><span>10.3.1 内联</span></a></h4><h5 id="_10-3-1-1-helloworld-vue" tabindex="-1"><a class="header-anchor" href="#_10-3-1-1-helloworld-vue"><span>10.3.1.1 HelloWorld.vue</span></a></h5><p>src\\components\\HelloWorld.vue</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;script setup lang=&quot;ts&quot;&gt;</span>
<span class="line">import { ref } from &quot;vue&quot;</span>
<span class="line">import logoUrl from &quot;../assets/logo.png&quot;</span>
<span class="line">defineProps&lt;{ msg: string }&gt;()</span>
<span class="line">const count = ref(0)</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;template&gt;</span>
<span class="line">  &lt;h1&gt;{{ msg }}&lt;/h1&gt;</span>
<span class="line">  &lt;img :src=&quot;logoUrl&quot; /&gt;</span>
<span class="line">  &lt;div&gt;</span>
<span class="line">    &lt;button type=&quot;button&quot; @click=&quot;count++&quot;&gt;count is: {{ count }}&lt;/button&gt;</span>
<span class="line">  &lt;/div&gt;</span>
<span class="line">+ &lt;a :class=&quot;$style.link&quot;&gt;超链接&lt;/a&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span>
<span class="line">&lt;style scoped&gt;</span>
<span class="line">img {</span>
<span class="line">  width: 100px;</span>
<span class="line">  height: 100px;</span>
<span class="line">}</span>
<span class="line">&lt;/style&gt;</span>
<span class="line">+&lt;style module&gt;</span>
<span class="line">+.link {</span>
<span class="line">+  color: red;</span>
<span class="line">+}</span>
<span class="line">+&lt;/style&gt;</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_10-3-2-外联" tabindex="-1"><a class="header-anchor" href="#_10-3-2-外联"><span>10.3.2 外联</span></a></h4><ul><li>任何以 <code>.module.css</code> 为后缀名的 CSS 文件都被认为是一个 <code>CSS modules</code> 文件</li><li>导入这样的文件会返回一个相应的模块对象</li></ul><h5 id="_10-3-2-1-helloworld-module-css" tabindex="-1"><a class="header-anchor" href="#_10-3-2-1-helloworld-module-css"><span>10.3.2.1 HelloWorld.module.css</span></a></h5><p>src\\components\\HelloWorld.module.css</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">.link {</span>
<span class="line">    color: red;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_10-3-2-2-helloworld-vue" tabindex="-1"><a class="header-anchor" href="#_10-3-2-2-helloworld-vue"><span>10.3.2.2 HelloWorld.vue</span></a></h5><p>src\\components\\HelloWorld.vue</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;script setup lang=&quot;ts&quot;&gt;</span>
<span class="line">import { ref } from &quot;vue&quot;</span>
<span class="line">import logoUrl from &quot;../assets/logo.png&quot;</span>
<span class="line">+import style from &quot;./HelloWorld.module.css&quot;</span>
<span class="line">defineProps&lt;{ msg: string }&gt;()</span>
<span class="line">const count = ref(0)</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;template&gt;</span>
<span class="line">  &lt;h1&gt;{{ msg }}&lt;/h1&gt;</span>
<span class="line">  &lt;img :src=&quot;logoUrl&quot; /&gt;</span>
<span class="line">  &lt;div&gt;</span>
<span class="line">    &lt;button type=&quot;button&quot; @click=&quot;count++&quot;&gt;count is: {{ count }}&lt;/button&gt;</span>
<span class="line">  &lt;/div&gt;</span>
<span class="line">+ &lt;a :class=&quot;style.link&quot;&gt;超链接&lt;/a&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span>
<span class="line">&lt;style scoped&gt;</span>
<span class="line">img {</span>
<span class="line">  width: 100px;</span>
<span class="line">  height: 100px;</span>
<span class="line">}</span>
<span class="line">&lt;/style&gt;</span>
<span class="line">-&lt;style module&gt;</span>
<span class="line">-.link {</span>
<span class="line">-  color: red;</span>
<span class="line">-}</span>
<span class="line">-&lt;/style&gt;</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10-4-预处理器" tabindex="-1"><a class="header-anchor" href="#_10-4-预处理器"><span>10.4 预处理器</span></a></h3><ul><li>Vite 也同时提供了对[.scss, .sass, .less, .styl 和 stylus](https://cn.vitejs.dev/guide/features.html</li><li>没有必要为它们安装特定的 Vite 插件，但必须安装相应的预处理器依赖</li><li><code>Vite</code>为<code>Sass</code>和<code>Less</code>改进了<code>@import</code>解析，以保证<code>Vite</code>别名也能被使用</li></ul><h4 id="_10-4-1-安装" tabindex="-1"><a class="header-anchor" href="#_10-4-1-安装"><span>10.4.1 安装</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">pnpm install sass less -D</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="_10-4-2-src-components-helloworld-vue" tabindex="-1"><a class="header-anchor" href="#_10-4-2-src-components-helloworld-vue"><span>10.4.2 src\\components\\HelloWorld.vue</span></a></h4><p>src\\components\\HelloWorld.vue</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;script setup lang=&quot;ts&quot;&gt;</span>
<span class="line">import { ref } from &quot;vue&quot;</span>
<span class="line">import logoUrl from &quot;../assets/logo.png&quot;</span>
<span class="line">import style from &quot;./HelloWorld.module.css&quot;</span>
<span class="line">defineProps&lt;{ msg: string }&gt;()</span>
<span class="line">const count = ref(0)</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;template&gt;</span>
<span class="line">  &lt;h1&gt;{{ msg }}&lt;/h1&gt;</span>
<span class="line">  &lt;img :src=&quot;logoUrl&quot; /&gt;</span>
<span class="line">  &lt;div&gt;</span>
<span class="line">    &lt;button type=&quot;button&quot; @click=&quot;count++&quot;&gt;count is: {{ count }}&lt;/button&gt;</span>
<span class="line">  &lt;/div&gt;</span>
<span class="line">  &lt;a :class=&quot;style.link&quot;&gt;超链接&lt;/a&gt;</span>
<span class="line">  &lt;h2&gt;less&lt;/h2&gt;</span>
<span class="line">  &lt;h3&gt;sass&lt;/h3&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span>
<span class="line">&lt;style scoped&gt;</span>
<span class="line">img {</span>
<span class="line">  width: 100px;</span>
<span class="line">  height: 100px;</span>
<span class="line">}</span>
<span class="line">&lt;/style&gt;</span>
<span class="line">&lt;style module&gt;</span>
<span class="line">.link {</span>
<span class="line">  color: red;</span>
<span class="line">}</span>
<span class="line">&lt;/style&gt;</span>
<span class="line">+&lt;style scoped lang=&quot;less&quot;&gt;</span>
<span class="line">+@color: red;</span>
<span class="line">+h2 {</span>
<span class="line">+  color: @color;</span>
<span class="line">+}</span>
<span class="line">+&lt;/style&gt;</span>
<span class="line">+&lt;style scoped lang=&quot;scss&quot;&gt;</span>
<span class="line">+$color: green;</span>
<span class="line">+h3 {</span>
<span class="line">+  color: $color;</span>
<span class="line">+}</span>
<span class="line">+&lt;/style&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10-5-全局注入" tabindex="-1"><a class="header-anchor" href="#_10-5-全局注入"><span>10.5 全局注入</span></a></h3><ul><li>可以把全局样式文件全局注入到项目中</li></ul><h4 id="_10-5-1-vite-config-ts" tabindex="-1"><a class="header-anchor" href="#_10-5-1-vite-config-ts"><span>10.5.1 vite.config.ts</span></a></h4><p>vite.config.ts</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import { defineConfig } from &quot;vite&quot;</span>
<span class="line">import { resolve } from &quot;path&quot;</span>
<span class="line">import vue from &quot;@vitejs/plugin-vue&quot;</span>
<span class="line">export default defineConfig({</span>
<span class="line">  resolve: {</span>
<span class="line">    alias: {</span>
<span class="line">      &quot;@&quot;: resolve(&quot;src&quot;)</span>
<span class="line">    }</span>
<span class="line">  },</span>
<span class="line">  plugins: [vue()],</span>
<span class="line">+ css: {</span>
<span class="line">+   preprocessorOptions: {</span>
<span class="line">+     scss: {</span>
<span class="line">+       additionalData: &#39;@import &quot;@/styles/theme.scss&quot;;&#39;</span>
<span class="line">+     },</span>
<span class="line">+     less: {</span>
<span class="line">+       additionalData: &#39;@import &quot;@/styles/theme.less&quot;;&#39;</span>
<span class="line">+     }</span>
<span class="line">+   }</span>
<span class="line">+ }</span>
<span class="line">})</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_10-5-2-src-styles-theme-less" tabindex="-1"><a class="header-anchor" href="#_10-5-2-src-styles-theme-less"><span>10.5.2 src\\styles\\theme.less</span></a></h4><p>src\\styles\\theme.less</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">@color: red;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="_10-5-3-src-styles-theme-scss" tabindex="-1"><a class="header-anchor" href="#_10-5-3-src-styles-theme-scss"><span>10.5.3 src\\styles\\theme.scss</span></a></h4><p>src\\styles\\theme.scss</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">$color: green;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="_10-5-4-src-components-helloworld-vue" tabindex="-1"><a class="header-anchor" href="#_10-5-4-src-components-helloworld-vue"><span>10.5.4 src\\components\\HelloWorld.vue</span></a></h4><p>src\\components\\HelloWorld.vue</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;script setup lang=&quot;ts&quot;&gt;</span>
<span class="line">import { ref } from &quot;vue&quot;</span>
<span class="line">import logoUrl from &quot;../assets/logo.png&quot;</span>
<span class="line">import style from &quot;./HelloWorld.module.css&quot;</span>
<span class="line">defineProps&lt;{ msg: string }&gt;()</span>
<span class="line">const count = ref(0)</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;template&gt;</span>
<span class="line">  &lt;h1&gt;{{ msg }}&lt;/h1&gt;</span>
<span class="line">  &lt;img :src=&quot;logoUrl&quot; /&gt;</span>
<span class="line">  &lt;div&gt;</span>
<span class="line">    &lt;button type=&quot;button&quot; @click=&quot;count++&quot;&gt;count is: {{ count }}&lt;/button&gt;</span>
<span class="line">  &lt;/div&gt;</span>
<span class="line">  &lt;a :class=&quot;style.link&quot;&gt;超链接&lt;/a&gt;</span>
<span class="line">  &lt;h2&gt;less&lt;/h2&gt;</span>
<span class="line">  &lt;h3&gt;sass&lt;/h3&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span>
<span class="line">&lt;style scoped&gt;</span>
<span class="line">img {</span>
<span class="line">  width: 100px;</span>
<span class="line">  height: 100px;</span>
<span class="line">}</span>
<span class="line">&lt;/style&gt;</span>
<span class="line">&lt;style module&gt;</span>
<span class="line">.link {</span>
<span class="line">  color: red;</span>
<span class="line">}</span>
<span class="line">&lt;/style&gt;</span>
<span class="line">&lt;style scoped lang=&quot;less&quot;&gt;</span>
<span class="line">-@color: red;</span>
<span class="line">h2 {</span>
<span class="line">  color: @color;</span>
<span class="line">}</span>
<span class="line">&lt;/style&gt;</span>
<span class="line">&lt;style scoped lang=&quot;scss&quot;&gt;</span>
<span class="line">-$color: green;</span>
<span class="line">h3 {</span>
<span class="line">  color: $color;</span>
<span class="line">}</span>
<span class="line">&lt;/style&gt;</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10-6-postcss" tabindex="-1"><a class="header-anchor" href="#_10-6-postcss"><span>10.6 PostCSS</span></a></h3><ul><li>为了浏览器的兼容性，有时候我们必须加入-webkit,-ms,-o,-moz 这些前缀 <ul><li>Trident 内核：主要代表为 IE 浏览器, 前缀为-ms</li><li>Gecko 内核：主要代表为 Firefox, 前缀为-moz</li><li>Presto 内核：主要代表为 Opera, 前缀为-o</li><li>Webkit 内核：产要代表为 Chrome 和 Safari, 前缀为-webkit</li></ul></li><li>如果项目包含有效的 PostCSS 配置，它将会自动应用于所有已导入的 CSS</li></ul><h4 id="_10-6-1-安装" tabindex="-1"><a class="header-anchor" href="#_10-6-1-安装"><span>10.6.1 安装</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">pnpm install autoprefixer  -D</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="_10-6-2-postcss-config-js" tabindex="-1"><a class="header-anchor" href="#_10-6-2-postcss-config-js"><span>10.6.2 postcss.config.js</span></a></h4><p>postcss.config.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;autoprefixer&quot;</span><span class="token punctuation">)</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_10-6-3-browserslistrc" tabindex="-1"><a class="header-anchor" href="#_10-6-3-browserslistrc"><span>10.6.3 .browserslistrc</span></a></h4><p>.browserslistrc</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token operator">&gt;</span><span class="token number">0.2</span><span class="token operator">%</span></span>
<span class="line">not dead</span>
<span class="line">not op_mini all</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_10-6-4-helloworld-vue" tabindex="-1"><a class="header-anchor" href="#_10-6-4-helloworld-vue"><span>10.6.4 HelloWorld.vue</span></a></h4><p>src\\components\\HelloWorld.vue</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;script setup lang=&quot;ts&quot;&gt;</span>
<span class="line">import { ref } from &quot;vue&quot;</span>
<span class="line">import logoUrl from &quot;../assets/logo.png&quot;</span>
<span class="line">import style from &quot;./HelloWorld.module.css&quot;</span>
<span class="line">defineProps&lt;{ msg: string }&gt;()</span>
<span class="line">const count = ref(0)</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;template&gt;</span>
<span class="line">  &lt;h1&gt;{{ msg }}&lt;/h1&gt;</span>
<span class="line">  &lt;img :src=&quot;logoUrl&quot; /&gt;</span>
<span class="line">  &lt;div&gt;</span>
<span class="line">    &lt;button type=&quot;button&quot; @click=&quot;count++&quot;&gt;count is: {{ count }}&lt;/button&gt;</span>
<span class="line">  &lt;/div&gt;</span>
<span class="line">  &lt;a :class=&quot;style.link&quot;&gt;超链接&lt;/a&gt;</span>
<span class="line">  &lt;h2&gt;less&lt;/h2&gt;</span>
<span class="line">  &lt;h3&gt;sass&lt;/h3&gt;</span>
<span class="line">+ &lt;div class=&quot;postcss&quot;&gt;&lt;/div&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span>
<span class="line">&lt;style scoped&gt;</span>
<span class="line">img {</span>
<span class="line">  width: 100px;</span>
<span class="line">  height: 100px;</span>
<span class="line">}</span>
<span class="line">&lt;/style&gt;</span>
<span class="line">&lt;style module&gt;</span>
<span class="line">.link {</span>
<span class="line">  color: red;</span>
<span class="line">}</span>
<span class="line">&lt;/style&gt;</span>
<span class="line">&lt;style scoped lang=&quot;less&quot;&gt;</span>
<span class="line">@color: red;</span>
<span class="line">h2 {</span>
<span class="line">  color: @color;</span>
<span class="line">}</span>
<span class="line">&lt;/style&gt;</span>
<span class="line">&lt;style scoped lang=&quot;scss&quot;&gt;</span>
<span class="line">$color: green;</span>
<span class="line">h3 {</span>
<span class="line">  color: $color;</span>
<span class="line">}</span>
<span class="line">&lt;/style&gt;</span>
<span class="line">+&lt;style scoped&gt;</span>
<span class="line">+.postcss {</span>
<span class="line">+  height: 30px;</span>
<span class="line">+  width: 60px;</span>
<span class="line">+  background-color: orange;</span>
<span class="line">+  transform: rotate(25deg);</span>
<span class="line">+}</span>
<span class="line">+&lt;/style&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_11-静态资源处理" tabindex="-1"><a class="header-anchor" href="#_11-静态资源处理"><span>11.静态资源处理</span></a></h2><ul><li><a href="https://cn.vitejs.dev/guide/assets.html" target="_blank" rel="noopener noreferrer">assets</a></li><li>服务时引入一个静态资源会返回解析后的公共路径</li></ul><h3 id="_11-1-模板引入" tabindex="-1"><a class="header-anchor" href="#_11-1-模板引入"><span>11.1 模板引入</span></a></h3><p>src\\components\\HelloWorld.vue</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;template&gt;</span>
<span class="line">+ &lt;img src=&quot;@/assets/logo.png&quot; style=&quot;width: 50px&quot; /&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_11-2-js-中引入" tabindex="-1"><a class="header-anchor" href="#_11-2-js-中引入"><span>11.2 JS 中引入</span></a></h3><p>src\\components\\HelloWorld.vue</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;script setup lang=&quot;ts&quot;&gt;</span>
<span class="line">+import logoUrl from &quot;@/assets/logo.png&quot;</span>
<span class="line">&lt;/script&gt;</span>
<span class="line">&lt;template&gt;</span>
<span class="line">+ &lt;img :src=&quot;logoUrl&quot; style=&quot;width: 50px&quot; /&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_11-3-css-引入" tabindex="-1"><a class="header-anchor" href="#_11-3-css-引入"><span>11.3 CSS 引入</span></a></h3><p>src\\components\\HelloWorld.vue</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;template&gt;</span>
<span class="line">+ &lt;div class=&quot;logo&quot;&gt;&lt;/div&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line">&lt;style scoped&gt;</span>
<span class="line">.logo {</span>
<span class="line">  width: 50px;</span>
<span class="line">  height: 50px;</span>
<span class="line">  background-image: url(@/assets/logo.png);</span>
<span class="line">  background-size: contain;</span>
<span class="line">}</span>
<span class="line">&lt;/style&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_11-4-public-目录" tabindex="-1"><a class="header-anchor" href="#_11-4-public-目录"><span>11.4 public 目录</span></a></h3><ul><li>[public 目录](https://cn.vitejs.dev/guide/assets.html</li><li>如果有以下需求 <ul><li>这些资源不会被源码引用（例如 robots.txt）</li><li>这些资源必须保持原有文件名（没有经过 hash）</li><li>那么你可以将该资源放在指定的 public 目录中，它应位于你的项目根目录</li><li>该目录中的资源在开发时能直接通过 / 根路径访问到，并且打包时会被完整复制到目标目录的根目录下</li></ul></li></ul><p>index.html</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token operator">&lt;</span>body<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span>img src<span class="token operator">=</span><span class="token string">&quot;/logo.png&quot;</span> style<span class="token operator">=</span><span class="token string">&quot;width:50px&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_12-mock" tabindex="-1"><a class="header-anchor" href="#_12-mock"><span>12. mock</span></a></h2><ul><li><a href="https://github.com/vbenjs/vite-plugin-mock/blob/HEAD/README.zh_CN.md" target="_blank" rel="noopener noreferrer">vite-plugin-mock</a>提供本地和生产模拟服务</li><li>vite 的数据模拟插件，是基于 vite.js 开发的。 并同时支持本地环境和生产环境</li></ul><h3 id="_12-1-安装" tabindex="-1"><a class="header-anchor" href="#_12-1-安装"><span>12.1 安装</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">pnpm install mockjs  vite-plugin-mock -D</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_12-2-vite-config-ts" tabindex="-1"><a class="header-anchor" href="#_12-2-vite-config-ts"><span>12.2 vite.config.ts</span></a></h3><p>vite.config.ts</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import { defineConfig } from &quot;vite&quot;</span>
<span class="line">import { resolve } from &quot;path&quot;</span>
<span class="line">import vue from &quot;@vitejs/plugin-vue&quot;</span>
<span class="line">+import { viteMockServe } from &quot;vite-plugin-mock&quot;</span>
<span class="line">export default defineConfig({</span>
<span class="line">  resolve: {</span>
<span class="line">    alias: {</span>
<span class="line">      &quot;@&quot;: resolve(&quot;src&quot;)</span>
<span class="line">    }</span>
<span class="line">  },</span>
<span class="line">+ plugins: [vue(), viteMockServe()],</span>
<span class="line">  css: {</span>
<span class="line">    preprocessorOptions: {</span>
<span class="line">      scss: {</span>
<span class="line">        additionalData: &#39;@import &quot;@/styles/theme.scss&quot;;&#39;</span>
<span class="line">      },</span>
<span class="line">      less: {</span>
<span class="line">        additionalData: &#39;@import &quot;@/styles/theme.less&quot;;&#39;</span>
<span class="line">      }</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">})</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_12-3-mock-auth-ts" tabindex="-1"><a class="header-anchor" href="#_12-3-mock-auth-ts"><span>12.3 mock\\auth.ts</span></a></h3><p>mock\\auth.ts</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> MockMethod <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vite-plugin-mock&quot;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&quot;/api/currentUser&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&quot;get&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function-variable function">response</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> query <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">code</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token string">&quot;zhufeng&quot;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">]</span> <span class="token keyword">as</span> MockMethod<span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_13-封装请求" tabindex="-1"><a class="header-anchor" href="#_13-封装请求"><span>13. 封装请求</span></a></h2><ul><li><a href="https://www.attojs.com/" target="_blank" rel="noopener noreferrer">VueRequest</a></li></ul><h3 id="_13-1-安装" tabindex="-1"><a class="header-anchor" href="#_13-1-安装"><span>13.1 安装</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">pnpm install axios</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_13-2-mock-auth-ts" tabindex="-1"><a class="header-anchor" href="#_13-2-mock-auth-ts"><span>13.2 mock\\auth.ts</span></a></h3><p>mock\\auth.ts</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import { MockMethod } from &quot;vite-plugin-mock&quot;</span>
<span class="line">export default [</span>
<span class="line">+ {</span>
<span class="line">+   url: &quot;/api/currentUser&quot;,</span>
<span class="line">+   method: &quot;get&quot;,</span>
<span class="line">+   response: ({ headers }) =&gt; {</span>
<span class="line">+     const { token } = headers</span>
<span class="line">+     return {</span>
<span class="line">+       code: 0,</span>
<span class="line">+       data: token</span>
<span class="line">+     }</span>
<span class="line">+   }</span>
<span class="line">+ },</span>
<span class="line">+ {</span>
<span class="line">+   url: &quot;/api/login&quot;,</span>
<span class="line">+   method: &quot;post&quot;,</span>
<span class="line">+   response: ({ body }) =&gt; {</span>
<span class="line">+     //url body,query headers</span>
<span class="line">+     return {</span>
<span class="line">+       code: 0,</span>
<span class="line">+       data: \`\${body.username}-token\`</span>
<span class="line">+     }</span>
<span class="line">+   }</span>
<span class="line">+ }</span>
<span class="line">] as MockMethod[]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_13-3-http-ts" tabindex="-1"><a class="header-anchor" href="#_13-3-http-ts"><span>13.3 http.ts</span></a></h3><p>src\\api\\http.ts</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> axios<span class="token punctuation">,</span> <span class="token punctuation">{</span> AxiosRequestConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;axios&quot;</span></span>
<span class="line">axios<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>baseURL <span class="token operator">=</span> <span class="token string">&quot;/api&quot;</span></span>
<span class="line">axios<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>timeout <span class="token operator">=</span> <span class="token number">10000</span></span>
<span class="line">axios<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>post<span class="token punctuation">[</span><span class="token string">&quot;Content-Type&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;application/json;charset=UTF-8&quot;</span></span>
<span class="line">axios<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span></span>
<span class="line">  <span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token parameter">AxiosRequestConfig</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> token <span class="token operator">=</span> window<span class="token punctuation">.</span>sessionStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">&quot;token&quot;</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>token<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token punctuation">;</span><span class="token punctuation">(</span>config<span class="token punctuation">.</span>headers <span class="token operator">=</span> config<span class="token punctuation">.</span>headers <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>token <span class="token operator">=</span> token</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">return</span> config</span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">throw</span> error</span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// 响应拦截</span></span>
<span class="line">axios<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> res<span class="token punctuation">.</span>data</span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> axios</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_13-4-src-api-auth-ts" tabindex="-1"><a class="header-anchor" href="#_13-4-src-api-auth-ts"><span>13.4 src\\api\\auth.ts</span></a></h3><p>src\\api\\auth.ts</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> http <span class="token keyword">from</span> <span class="token string">&quot;./http&quot;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> LoginParams <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@/typings/auth&quot;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">login</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">loginParams</span><span class="token operator">:</span> LoginParams</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> http<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&quot;/login&quot;</span><span class="token punctuation">,</span> loginParams<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">getCurrentUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> http<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;/currentUser&quot;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_13-5-auth-ts" tabindex="-1"><a class="header-anchor" href="#_13-5-auth-ts"><span>13.5 auth.ts</span></a></h3><p>src\\typings\\auth.ts</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">LoginParams</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">username</span><span class="token operator">:</span> string</span>
<span class="line">  <span class="token literal-property property">password</span><span class="token operator">:</span> string</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">Response</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">code</span><span class="token operator">:</span> number</span>
<span class="line">  <span class="token literal-property property">data</span><span class="token operator">:</span> any</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_13-6-src-request-ts" tabindex="-1"><a class="header-anchor" href="#_13-6-src-request-ts"><span>13.6 src\\request.ts</span></a></h3><p>src\\request.ts</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> LoginParams<span class="token punctuation">,</span> Response <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@/typings/auth&quot;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> login<span class="token punctuation">,</span> getCurrentUser <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@/api/auth&quot;</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token literal-property property">loginParams</span><span class="token operator">:</span> LoginParams <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">&quot;zhufeng&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token string">&quot;123456&quot;</span> <span class="token punctuation">}</span></span>
<span class="line"><span class="token function">login</span><span class="token punctuation">(</span>loginParams<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">result</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> token <span class="token operator">=</span> result<span class="token punctuation">.</span>data</span>
<span class="line">  window<span class="token punctuation">.</span>sessionStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">&quot;token&quot;</span><span class="token punctuation">,</span> token<span class="token punctuation">)</span></span>
<span class="line">  <span class="token function">getCurrentUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">result</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">.</span>data<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_13-7-main-ts" tabindex="-1"><a class="header-anchor" href="#_13-7-main-ts"><span>13.7 main.ts</span></a></h3><p>src\\main.ts</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import { createApp } from &quot;vue&quot;</span>
<span class="line">import App from &quot;./App.vue&quot;</span>
<span class="line">import &quot;./global.css&quot;</span>
<span class="line">+import &quot;@/request&quot;</span>
<span class="line">const app = createApp(App)</span>
<span class="line"> app.mount(&quot;</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_14-状态管理" tabindex="-1"><a class="header-anchor" href="#_14-状态管理"><span>14. 状态管理</span></a></h2><ul><li><p><a href="https://devtools.vuejs.org/" target="_blank" rel="noopener noreferrer">devtools</a></p></li><li><p><a href="https://pinia.vuejs.org/introduction.html" target="_blank" rel="noopener noreferrer">pinia</a></p><ul><li>支持 Vue3</li><li>抛弃 Mutations，只有 state、getters 和 actions</li></ul></li></ul><h3 id="_14-1-安装" tabindex="-1"><a class="header-anchor" href="#_14-1-安装"><span>14.1 安装</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">pnpm install pinia</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_14-2-src-main-ts" tabindex="-1"><a class="header-anchor" href="#_14-2-src-main-ts"><span>14.2 src\\main.ts</span></a></h3><p>src\\main.ts</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import { createApp } from &quot;vue&quot;</span>
<span class="line">import App from &quot;./App.vue&quot;</span>
<span class="line">import &quot;./global.css&quot;</span>
<span class="line">import &quot;@/request&quot;</span>
<span class="line">+import { createPinia } from &quot;pinia&quot;</span>
<span class="line">const app = createApp(App)</span>
<span class="line">+app.use(createPinia())</span>
<span class="line"> app.mount(&quot;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_14-3-store-index-ts" tabindex="-1"><a class="header-anchor" href="#_14-3-store-index-ts"><span>14.3 store\\index.ts</span></a></h3><p>src\\store\\index.ts</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;pinia&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> useMainStore <span class="token operator">=</span> <span class="token function">defineStore</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&quot;main&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function-variable function">state</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">firstName</span><span class="token operator">:</span> <span class="token string">&quot;张&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">lastName</span><span class="token operator">:</span> <span class="token string">&quot;三&quot;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">//计算属性</span></span>
<span class="line">  <span class="token literal-property property">getters</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function-variable function">name</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> state<span class="token punctuation">.</span>firstName <span class="token operator">+</span> state<span class="token punctuation">.</span>lastName</span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">async</span> <span class="token function">addAmount</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">amount</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span>count <span class="token operator">+=</span> amount</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_14-4-helloworld-vue" tabindex="-1"><a class="header-anchor" href="#_14-4-helloworld-vue"><span>14.4 HelloWorld.vue</span></a></h3><p>src\\components\\HelloWorld.vue</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;script setup lang=&quot;ts&quot;&gt;</span>
<span class="line">import { ref } from &quot;vue&quot;</span>
<span class="line">import logoUrl from &quot;../assets/logo.png&quot;</span>
<span class="line">import style from &quot;./HelloWorld.module.css&quot;</span>
<span class="line">+import { useMainStore } from &quot;@/store&quot;</span>
<span class="line">+import { storeToRefs } from &quot;pinia&quot;</span>
<span class="line">+defineProps&lt;{ msg: string }&gt;()</span>
<span class="line">+const count = ref(0)</span>
<span class="line">+const mainStore = useMainStore()</span>
<span class="line">+//const storeCount = mainStore.count</span>
<span class="line">+const { count: storeCount } = storeToRefs(mainStore)</span>
<span class="line"></span>
<span class="line">+const add = () =&gt; {</span>
<span class="line">+  //适合多字段改变</span>
<span class="line">+  mainStore.$patch({</span>
<span class="line">+    name: &quot;arch&quot;,</span>
<span class="line">+    count: mainStore.count + 1</span>
<span class="line">+  })</span>
<span class="line">+}</span>
<span class="line">+const add2 = () =&gt; {</span>
<span class="line">+  //适合多字段改变</span>
<span class="line">+  mainStore.$patch((state) =&gt; ({</span>
<span class="line">+    name: &quot;arch2&quot;,</span>
<span class="line">+    count: mainStore.count + 2</span>
<span class="line">+  }))</span>
<span class="line">+}</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;template&gt;</span>
<span class="line">  &lt;h1&gt;{{ msg }}&lt;/h1&gt;</span>
<span class="line">  &lt;img :src=&quot;logoUrl&quot; /&gt;</span>
<span class="line">  &lt;div&gt;</span>
<span class="line">    &lt;button type=&quot;button&quot; @click=&quot;count++&quot;&gt;count is: {{ count }}&lt;/button&gt;</span>
<span class="line">  &lt;/div&gt;</span>
<span class="line">  &lt;a :class=&quot;style.link&quot;&gt;超链接&lt;/a&gt;</span>
<span class="line">  &lt;h2&gt;less&lt;/h2&gt;</span>
<span class="line">  &lt;h3&gt;sass&lt;/h3&gt;</span>
<span class="line">  &lt;div class=&quot;postcss&quot;&gt;&lt;/div&gt;</span>
<span class="line">+ &lt;div&gt;</span>
<span class="line">+   &lt;p&gt;name:{{ mainStore.name }}&lt;/p&gt;</span>
<span class="line">+   &lt;p&gt;count:{{ mainStore.count }}&lt;/p&gt;</span>
<span class="line">+   &lt;p&gt;count:{{ storeCount }}&lt;/p&gt;</span>
<span class="line">+   &lt;button @click=&quot;mainStore.count++&quot;&gt;mainStore.count++&lt;/button&gt;</span>
<span class="line">+   &lt;button @click=&quot;add()&quot;&gt;add()&lt;/button&gt;</span>
<span class="line">+   &lt;button @click=&quot;add2()&quot;&gt;add2()&lt;/button&gt;</span>
<span class="line">+   &lt;button @click=&quot;mainStore.addAmount(3)&quot;&gt;mainStore.addAmount(3)&lt;/button&gt;</span>
<span class="line">+   &lt;p&gt;name:{{ mainStore.name }}&lt;/p&gt;</span>
<span class="line">+ &lt;/div&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span>
<span class="line">&lt;style scoped&gt;</span>
<span class="line">img {</span>
<span class="line">  width: 100px;</span>
<span class="line">  height: 100px;</span>
<span class="line">}</span>
<span class="line">&lt;/style&gt;</span>
<span class="line">&lt;style module&gt;</span>
<span class="line">.link {</span>
<span class="line">  color: red;</span>
<span class="line">}</span>
<span class="line">&lt;/style&gt;</span>
<span class="line">&lt;style scoped lang=&quot;less&quot;&gt;</span>
<span class="line">@color: red;</span>
<span class="line">h2 {</span>
<span class="line">  color: @color;</span>
<span class="line">}</span>
<span class="line">&lt;/style&gt;</span>
<span class="line">&lt;style scoped lang=&quot;scss&quot;&gt;</span>
<span class="line">$color: green;</span>
<span class="line">h3 {</span>
<span class="line">  color: $color;</span>
<span class="line">}</span>
<span class="line">&lt;/style&gt;</span>
<span class="line">&lt;style scoped&gt;</span>
<span class="line">.postcss {</span>
<span class="line">  height: 30px;</span>
<span class="line">  width: 60px;</span>
<span class="line">  background-color: orange;</span>
<span class="line">  transform: rotate(25deg);</span>
<span class="line">}</span>
<span class="line">&lt;/style&gt;</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_15-路由" tabindex="-1"><a class="header-anchor" href="#_15-路由"><span>15. 路由</span></a></h2><ul><li><a href="https://next.router.vuejs.org/zh/guide/" target="_blank" rel="noopener noreferrer">router</a></li></ul><h3 id="_15-1-安装" tabindex="-1"><a class="header-anchor" href="#_15-1-安装"><span>15.1 安装</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">pnpm install vue-router</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_15-2-router-index-ts" tabindex="-1"><a class="header-anchor" href="#_15-2-router-index-ts"><span>15.2 router\\index.ts</span></a></h3><p>src\\router\\index.ts</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createRouter<span class="token punctuation">,</span> createWebHistory<span class="token punctuation">,</span> RouteRecordRaw <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue-router&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token literal-property property">routes</span><span class="token operator">:</span> RouteRecordRaw<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;home&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&quot;@/pages/HomePage.vue&quot;</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&quot;/login&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;login&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&quot;@/pages/LoginPage.vue&quot;</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">history</span><span class="token operator">:</span> <span class="token function">createWebHistory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  routes</span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> router</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_15-3-homepage-vue" tabindex="-1"><a class="header-anchor" href="#_15-3-homepage-vue"><span>15.3 HomePage.vue</span></a></h3><p>src\\pages\\HomePage.vue</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;template&gt;</span>
<span class="line">  &lt;h1&gt;Home&lt;/h1&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_15-4-loginpage-vue" tabindex="-1"><a class="header-anchor" href="#_15-4-loginpage-vue"><span>15.4 LoginPage.vue</span></a></h3><p>src\\pages\\LoginPage.vue</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;template&gt;</span>
<span class="line">  &lt;form&gt;</span>
<span class="line">    用户名 &lt;input /&gt;</span>
<span class="line">  &lt;/form&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_15-5-src-main-ts" tabindex="-1"><a class="header-anchor" href="#_15-5-src-main-ts"><span>15.5 src\\main.ts</span></a></h3><p>src\\main.ts</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span></span>
<span class="line"><span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&quot;./App.vue&quot;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token string">&quot;./global.css&quot;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token string">&quot;@/request&quot;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createPinia <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;pinia&quot;</span></span>
<span class="line"><span class="token operator">+</span><span class="token keyword">import</span> router <span class="token keyword">from</span> <span class="token string">&quot;./router&quot;</span></span>
<span class="line"><span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">createPinia</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token operator">+</span>app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>router<span class="token punctuation">)</span></span>
<span class="line"> app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span>&quot;</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_15-6-app-vue" tabindex="-1"><a class="header-anchor" href="#_15-6-app-vue"><span>15.6 App.vue</span></a></h3><p>src\\App.vue</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;script setup lang=&quot;ts&quot;&gt;</span>
<span class="line">import HelloWorld from &quot;@/components/HelloWorld.vue&quot;</span>
<span class="line">import msg from &quot;./msg&quot;</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;template&gt;</span>
<span class="line">+  &lt;router-view&gt;&lt;/router-view&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span>
<span class="line">&lt;style&gt;&lt;/style&gt;</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_16-ui-组件库" tabindex="-1"><a class="header-anchor" href="#_16-ui-组件库"><span>16. UI 组件库</span></a></h2><ul><li><a href="https://www.naiveui.com/zh-CN/os-theme" target="_blank" rel="noopener noreferrer">Naïve UI</a>是一个 Vue 3 组件库</li><li>[h](https://v3.cn.vuejs.org/api/global-api.html</li><li><a href="https://www.naiveui.com/zh-CN/os-theme/components/menu" target="_blank" rel="noopener noreferrer">menu</a></li></ul><h3 id="_16-1-安装" tabindex="-1"><a class="header-anchor" href="#_16-1-安装"><span>16.1 安装</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">pnpm install naive-ui vfonts @vicons/ionicons5</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_16-2-src-app-vue" tabindex="-1"><a class="header-anchor" href="#_16-2-src-app-vue"><span>16.2 src\\App.vue</span></a></h3><ul><li>Non-function value encountered for default slot. Prefer function slots for better performance. src\\App.vue</li><li>[slot](https://v3.cn.vuejs.org/api/built-in-components.html</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;script setup lang=&quot;ts&quot;&gt;</span>
<span class="line">import HelloWorld from &quot;@/components/HelloWorld.vue&quot;</span>
<span class="line">import msg from &quot;./msg&quot;</span>
<span class="line">+import { h, Component } from &quot;vue&quot;</span>
<span class="line">+import { NIcon, NMenu } from &quot;naive-ui&quot;</span>
<span class="line">+import type { MenuOption } from &quot;naive-ui&quot;</span>
<span class="line">+import { RouterLink } from &quot;vue-router&quot;</span>
<span class="line">+import { HomeOutline, LogInOutline } from &quot;@vicons/ionicons5&quot;</span>
<span class="line">+const menuOptions: MenuOption[] = [</span>
<span class="line">+  {</span>
<span class="line">+    label: () =&gt;</span>
<span class="line">+      h(RouterLink, { to: { name: &quot;home&quot; } }, { default: () =&gt; &quot;首页&quot; }),</span>
<span class="line">+    key: &quot;home&quot;,</span>
<span class="line">+    icon: () =&gt; h(NIcon, null, { default: () =&gt; h(HomeOutline) }) //带有插槽的对象</span>
<span class="line">+  },</span>
<span class="line">+  {</span>
<span class="line">+    label: () =&gt;</span>
<span class="line">+      h(RouterLink, { to: { name: &quot;login&quot; } }, { default: () =&gt; &quot;登录&quot; }),</span>
<span class="line">+    key: &quot;login&quot;,</span>
<span class="line">+    icon: () =&gt; h(NIcon, null, { default: () =&gt; h(LogInOutline) })</span>
<span class="line">+  }</span>
<span class="line">+]</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;template&gt;</span>
<span class="line">+  &lt;n-menu :options=&quot;menuOptions&quot; /&gt;</span>
<span class="line">  &lt;router-view&gt;&lt;/router-view&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span>
<span class="line">&lt;style&gt;&lt;/style&gt;</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_17-环境变量和模式" tabindex="-1"><a class="header-anchor" href="#_17-环境变量和模式"><span>17. 环境变量和模式</span></a></h2><ul><li><p>Vite 在一个特殊的 import.meta.env 对象上暴露<a href="https://vitejs.cn/guide/env-and-mode.html" target="_blank" rel="noopener noreferrer">环境变量</a></p><ul><li>import.meta.env.MODE: {string} 应用运行的模式</li><li>import.meta.env.BASE_URL: {string} 部署应用时的基本 URL。他由 base 配置项决定</li><li>import.meta.env.PROD: {boolean} 应用是否运行在生产环境</li><li>import.meta.env.DEV: {boolean} 应用是否运行在开发环境 (永远与 import.meta.env.PROD 相反)</li></ul></li></ul><h3 id="_17-1-env-development" tabindex="-1"><a class="header-anchor" href="#_17-1-env-development"><span>17.1 .env.development</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token constant">VITE_APP_WEB_URL</span> <span class="token operator">=</span> <span class="token string">&quot;/dev&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_17-2-env-production" tabindex="-1"><a class="header-anchor" href="#_17-2-env-production"><span>17.2 .env.production</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token constant">VITE_APP_WEB_URL</span> <span class="token operator">=</span> <span class="token string">&quot;/prod&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_17-3-src-main-ts" tabindex="-1"><a class="header-anchor" href="#_17-3-src-main-ts"><span>17.3 src\\main.ts</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">+console.log(import.meta.env)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_17-4-package-json" tabindex="-1"><a class="header-anchor" href="#_17-4-package-json"><span>17.4 package.json</span></a></h3><p>package.json</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">{</span>
<span class="line">  &quot;scripts&quot;: {</span>
<span class="line">+    &quot;build:dev&quot;: &quot;vue-tsc --noEmit &amp;&amp; vite build --mode development&quot;,</span>
<span class="line">+    &quot;build:prod&quot;: &quot;vue-tsc --noEmit &amp;&amp; vite build --mode production&quot;,</span>
<span class="line">  },</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,288)])])}const o=n(i,[["render",t]]),r=JSON.parse('{"path":"/strong/149.1.vite.html","title":"","lang":"en-US","frontmatter":{},"git":{"updatedTime":1681290319000,"contributors":[{"name":"yutao","username":"yutao","email":"642231346@qq.com","commits":1,"url":"https://github.com/yutao"}],"changelog":[{"hash":"f5ab8c9d34991ec274f7f652439afe5b2afb6147","time":1681290319000,"email":"642231346@qq.com","author":"yutao","message":"modify"}]},"filePathRelative":"strong/149.1.vite.md"}');export{o as comp,r as data};
