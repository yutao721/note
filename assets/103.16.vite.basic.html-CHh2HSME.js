import{_ as i,c as t,a,b as n,e,d as p,w as c,r as o,o as r}from"./app-CD1YpnS1.js";const u={};function d(v,s){const l=o("reference");return r(),t("div",null,[s[4]||(s[4]=a(`<h2 id="_1-vite" tabindex="-1"><a class="header-anchor" href="#_1-vite"><span>1.Vite</span></a></h2><ul><li><a href="https://cn.vitejs.dev/" target="_blank" rel="noopener noreferrer">Vite (法语意为 &quot;快速的&quot;，发音 /vit/)</a>是下一代前端开发与构建工具</li><li>💡 极速的服务启动 使用原生 ESM 文件，无需打包!</li><li>⚡️ 轻量快速的热重载 无论应用程序大小如何，都始终极快的模块热重载（HMR）</li><li>🛠️ 丰富的功能 对 TypeScript、JSX、CSS 等支持开箱即用。</li><li>📦 优化的构建 可选 “多页应用” 或 “库” 模式的预配置 Rollup 构建</li><li>🔩 通用的插件 在开发和构建之间共享 Rollup-superset 插件接口。</li><li>🔑 完全类型化的API 灵活的 API 和完整 TypeS</li></ul><h2 id="_2-配置开发环境" tabindex="-1"><a class="header-anchor" href="#_2-配置开发环境"><span>2.配置开发环境</span></a></h2><ul><li><a href="https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md" target="_blank" rel="noopener noreferrer">script-setup</a></li></ul><h3 id="_2-1-安装依赖" tabindex="-1"><a class="header-anchor" href="#_2-1-安装依赖"><span>2.1 安装依赖</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">npm install vue  --save</span>
<span class="line">npm install  @vitejs/plugin-vue @vue/compiler-sfc vite --save-dev</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-配置文件" tabindex="-1"><a class="header-anchor" href="#_2-2-配置文件"><span>2.2 配置文件</span></a></h3><p>vite.config.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite&#39;</span></span>
<span class="line"><span class="token keyword">import</span> vue <span class="token keyword">from</span> <span class="token string">&#39;@vitejs/plugin-vue&#39;</span></span>
<span class="line"><span class="token comment">// https://vitejs.dev/config/</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-package-json" tabindex="-1"><a class="header-anchor" href="#_2-3-package-json"><span>2.3 package.json</span></a></h3><p>package.json</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vite2-prepare&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.0.0&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">&quot;dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vite&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vite build&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">&quot;serve&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vite preview&quot;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">&quot;dependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">&quot;vue&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^3.0.5&quot;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">&quot;devDependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">&quot;@vitejs/plugin-vue&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^1.2.4&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">&quot;@vue/compiler-sfc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^3.0.5&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">&quot;vite&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^2.4.0&quot;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-index-html" tabindex="-1"><a class="header-anchor" href="#_2-4-index-html"><span>2.4 index.html</span></a></h3><p>index.html</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token constant">DOCTYPE</span> html<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span>html lang<span class="token operator">=</span><span class="token string">&quot;en&quot;</span><span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span>head<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span>meta charset<span class="token operator">=</span><span class="token string">&quot;UTF-8&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">&quot;icon&quot;</span> href<span class="token operator">=</span><span class="token string">&quot;/favicon.ico&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span>meta name<span class="token operator">=</span><span class="token string">&quot;viewport&quot;</span> content<span class="token operator">=</span><span class="token string">&quot;width=device-width, initial-scale=1.0&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span>title<span class="token operator">&gt;</span>Vite App<span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span>body<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">&quot;app&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span>script type<span class="token operator">=</span><span class="token string">&quot;module&quot;</span> src<span class="token operator">=</span><span class="token string">&quot;/src/main.js&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-5-src-main-js" tabindex="-1"><a class="header-anchor" href="#_2-5-src-main-js"><span>2.5 src\\main.js</span></a></h3><p>src\\main.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span></span>
<span class="line"><span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span></span>
<span class="line"> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span>&#39;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-6-src-app-vue" tabindex="-1"><a class="header-anchor" href="#_2-6-src-app-vue"><span>2.6 src\\App.vue</span></a></h3><p>src\\App.vue</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;template&gt;</span>
<span class="line">  &lt;img src=&quot;./assets/ico.jpg&quot; /&gt;</span>
<span class="line">  &lt;HelloWorld msg=&quot;Vue3 + Vite&quot; /&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span>
<span class="line">&lt;script setup&gt;</span>
<span class="line">//https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md</span>
<span class="line">import HelloWorld from &#39;./components/HelloWorld.vue&#39;</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-7-helloworld-vue" tabindex="-1"><a class="header-anchor" href="#_2-7-helloworld-vue"><span>2.7 HelloWorld.vue</span></a></h3><p>src\\components\\HelloWorld.vue</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;template&gt;</span>
<span class="line">  &lt;h1&gt;{{ msg }}&lt;/h1&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-静态资源处理" tabindex="-1"><a class="header-anchor" href="#_3-静态资源处理"><span>3.静态资源处理</span></a></h2><ul><li><a href="https://cn.vitejs.dev/guide/assets.html" target="_blank" rel="noopener noreferrer">静态资源处理</a></li><li>服务时引入一个静态资源会返回解析后的公共路径</li></ul><h3 id="_3-1-模板中引入" tabindex="-1"><a class="header-anchor" href="#_3-1-模板中引入"><span>3.1 模板中引入</span></a></h3><p>src\\App.vue</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;template&gt;</span>
<span class="line">+  &lt;img  src=&quot;./assets/avatar.jpg&quot; /&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-js中引入" tabindex="-1"><a class="header-anchor" href="#_3-2-js中引入"><span>3.2 JS中引入</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;template&gt;</span>
<span class="line">  &lt;img  src=&quot;./assets/avatar.jpg&quot; /&gt;</span>
<span class="line">+  &lt;img  :src=&quot;imgUrl&quot; /&gt;</span>
<span class="line">  &lt;HelloWorld msg=&quot;Hello Vue 3 + Vite&quot; /&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span>
<span class="line">&lt;script setup&gt;</span>
<span class="line">//https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md</span>
<span class="line">import HelloWorld from &#39;./components/HelloWorld.vue&#39;</span>
<span class="line">+import imgUrl from &#39;./assets/avatar.jpg&#39;</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-css中引入" tabindex="-1"><a class="header-anchor" href="#_3-3-css中引入"><span>3.3 CSS中引入</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;template&gt;</span>
<span class="line">  &lt;img  src=&quot;./assets/avatar.jpg&quot; /&gt;</span>
<span class="line">  &lt;img  :src=&quot;imgUrl&quot; /&gt;</span>
<span class="line">+ &lt;div class=&quot;avatar&quot;&gt;&lt;/div&gt;</span>
<span class="line">  &lt;HelloWorld msg=&quot;Hello Vue 3 + Vite&quot; /&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span>
<span class="line">&lt;script setup&gt;</span>
<span class="line">//https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md</span>
<span class="line">import HelloWorld from &#39;./components/HelloWorld.vue&#39;</span>
<span class="line">import imgUrl from &#39;./assets/avatar.jpg&#39;</span>
<span class="line">&lt;/script&gt;</span>
<span class="line">+&lt;style scoped&gt;</span>
<span class="line">+.avatar{</span>
<span class="line">+  width:200px;</span>
<span class="line">+  height:200px;</span>
<span class="line">+  background-image: url(./assets/avatar.jpg);</span>
<span class="line">+  background-size: contain;</span>
<span class="line">+}</span>
<span class="line">+&lt;/style&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-4-public目录" tabindex="-1"><a class="header-anchor" href="#_3-4-public目录"><span>3.4 public目录</span></a></h3><ul><li>[public目录](https://cn.vitejs.dev/guide/assets.html</li><li>如果有以下需求 <ul><li>这些资源不会被源码引用（例如 robots.txt）</li><li>这些资源必须保持原有文件名（没有经过 hash）</li></ul></li><li>那么你可以将该资源放在指定的 <code>public</code> 目录中，它应位于你的项目根目录</li><li>该目录中的资源在开发时能直接通过 <code>/</code> 根路径访问到，并且打包时会被完整复制到目标目录的根目录下</li></ul><p><code>public\\avatar.jpg</code></p><h2 id="_4-配置别名" tabindex="-1"><a class="header-anchor" href="#_4-配置别名"><span>4.配置别名</span></a></h2><h3 id="_4-1-vite-config-js" tabindex="-1"><a class="header-anchor" href="#_4-1-vite-config-js"><span>4.1 vite.config.js</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import { defineConfig } from &#39;vite&#39;</span>
<span class="line">import vue from &#39;@vitejs/plugin-vue&#39;</span>
<span class="line">+import {resolve} from &#39;path&#39;;</span>
<span class="line"></span>
<span class="line">// https://vitejs.dev/config/</span>
<span class="line">export default defineConfig({</span>
<span class="line">+ resolve:{</span>
<span class="line">+   alias:{</span>
<span class="line">+    &#39;@&#39;:resolve(&#39;src&#39;)</span>
<span class="line">+   }</span>
<span class="line">+ },</span>
<span class="line">  plugins: [vue()]</span>
<span class="line">})</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-app-vue" tabindex="-1"><a class="header-anchor" href="#_4-2-app-vue"><span>4.2 App.vue</span></a></h3><p>src\\App.vue</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;template&gt;</span>
<span class="line">+ &lt;img src=&quot;@/assets/avatar.jpg&quot; /&gt;</span>
<span class="line">  &lt;img :src=&quot;avatarUrl&quot; /&gt;</span>
<span class="line">  &lt;div class=&quot;avatar&quot;&gt;&lt;/div&gt;</span>
<span class="line">  &lt;HelloWorld msg=&quot;Hello Vue 3 + Vite&quot; /&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line">&lt;script setup&gt;</span>
<span class="line">//https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md</span>
<span class="line">+import HelloWorld from &quot;@/components/HelloWorld.vue&quot;;</span>
<span class="line">+import avatarUrl from &quot;@/assets/avatar.jpg&quot;;</span>
<span class="line">&lt;/script&gt;</span>
<span class="line">&lt;style scoped&gt;</span>
<span class="line">.avatar {</span>
<span class="line">  width: 200px;</span>
<span class="line">  height: 200px;</span>
<span class="line">+ background-image: url(@/assets/avatar.jpg);</span>
<span class="line">  background-size: contain;</span>
<span class="line">}</span>
<span class="line">&lt;/style&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-样式处理" tabindex="-1"><a class="header-anchor" href="#_5-样式处理"><span>5.样式处理</span></a></h2><h3 id="_5-1-全局样式" tabindex="-1"><a class="header-anchor" href="#_5-1-全局样式"><span>5.1 全局样式</span></a></h3><p>src\\main.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import { createApp } from &#39;vue&#39;</span>
<span class="line">import App from &#39;./App.vue&#39;</span>
<span class="line">+import &#39;./global.css&#39;</span>
<span class="line"> createApp(App).mount(&#39;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>src\\global.css</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line"> </span>
<span class="line">    background-color: lightgrey;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-2-局部样式" tabindex="-1"><a class="header-anchor" href="#_5-2-局部样式"><span>5.2 局部样式</span></a></h3><h3 id="_5-2-1-scoped" tabindex="-1"><a class="header-anchor" href="#_5-2-1-scoped"><span>5.2.1 scoped</span></a></h3><ul><li>当 <code>&lt;style&gt;</code> 标签有 <code>scoped</code> 属性时，它的 CSS 只作用于当前组件中的元素</li><li>它使用了<code>data-v-hash</code>的方式来使css有了它对应模块的标识</li></ul><p>src\\components\\HelloWorld.vue</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;template&gt;</span>
<span class="line">  &lt;h1&gt;{{ msg }}&lt;/h1&gt;</span>
<span class="line">+  &lt;a&gt;超链接&lt;/a&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line">+&lt;style scoped&gt;</span>
<span class="line">+a {</span>
<span class="line"> +  color: </span>
<span class="line">+}</span>
<span class="line">+&lt;/style&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-2-2-css-modules" tabindex="-1"><a class="header-anchor" href="#_5-2-2-css-modules"><span>5.2.2 CSS Modules</span></a></h3><ul><li>[CSS Modules](https://cn.vitejs.dev/guide/features.html</li><li>通过<code>module</code>作用的<code>style</code>都被保存到<code>$style</code>对象中</li></ul><h3 id="_5-2-2-1-内联" tabindex="-1"><a class="header-anchor" href="#_5-2-2-1-内联"><span>5.2.2.1 内联</span></a></h3><p>src\\components\\HelloWorld.vue</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;template&gt;</span>
<span class="line">  &lt;h1&gt;{{ msg }}&lt;/h1&gt;</span>
<span class="line">+ &lt;a :class=&quot;$style.link&quot;&gt;超链接&lt;/a&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line">+&lt;style module&gt;</span>
<span class="line">+.link {</span>
<span class="line"> +  color: </span>
<span class="line">+}</span>
<span class="line">+&lt;/style&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-2-2-2-外联" tabindex="-1"><a class="header-anchor" href="#_5-2-2-2-外联"><span>5.2.2.2 外联</span></a></h3><ul><li>任何以 .module.css 为后缀名的 CSS 文件都被认为是一个 CSS modules 文件</li><li>导入这样的文件会返回一个相应的模块对象 src\\components\\HelloWorld.vue</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;template&gt;</span>
<span class="line">  &lt;h1&gt;{{ msg }}&lt;/h1&gt;</span>
<span class="line">+ &lt;a :class=&quot;style.link&quot;&gt;超链接&lt;/a&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span>
<span class="line">&lt;script setup&gt;</span>
<span class="line">+import style from &#39;./HelloWorld.module.css&#39;;</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>src\\components\\HelloWorld.module.css</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">.link {</span>
<span class="line">     color: </span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-3-less和sass" tabindex="-1"><a class="header-anchor" href="#_5-3-less和sass"><span>5.3 less和sass</span></a></h3><ul><li>Vite 也同时提供了对 .scss, .sass, .less, .styl 和 .stylus 文件的内置支持。没有必要为它们安装特定的 Vite 插件，但必须安装相应的预处理器依赖</li><li>如果是用的是单文件组件，可以通过 <code>style lang=&quot;sass&quot;</code>（或其他预处理器）自动开启</li></ul><h4 id="_5-3-1-安装" tabindex="-1"><a class="header-anchor" href="#_5-3-1-安装"><span>5.3.1 安装</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">npm i less sass -S</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="_5-3-2-helloworld-vue" tabindex="-1"><a class="header-anchor" href="#_5-3-2-helloworld-vue"><span>5.3.2 HelloWorld.vue</span></a></h4><p>src\\components\\HelloWorld.vue</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;template&gt;</span>
<span class="line">  &lt;h1&gt;{{ msg }}&lt;/h1&gt;</span>
<span class="line">  &lt;a :class=&quot;style.link&quot;&gt;超链接&lt;/a&gt;</span>
<span class="line">+ &lt;h2&gt;less&lt;/h2&gt;</span>
<span class="line">+ &lt;h3&gt;sass&lt;/h3&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span>
<span class="line">&lt;script setup&gt;</span>
<span class="line">import { reactive } from &#39;vue&#39;</span>
<span class="line">import style from &#39;./HelloWorld.module.css&#39;;</span>
<span class="line">&lt;/script&gt;</span>
<span class="line">+&lt;style scoped lang=&quot;less&quot;&gt;</span>
<span class="line">+@color:red;</span>
<span class="line">+h2{</span>
<span class="line">+  color:@color;</span>
<span class="line">+}</span>
<span class="line">+&lt;/style&gt;</span>
<span class="line">+&lt;style scoped lang=&quot;scss&quot;&gt;</span>
<span class="line">+$color:green;</span>
<span class="line">+h3{</span>
<span class="line">+  color:$color;</span>
<span class="line">+}</span>
<span class="line">&lt;/style&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-4-postcss" tabindex="-1"><a class="header-anchor" href="#_5-4-postcss"><span>5.4 PostCSS</span></a></h3><ul><li>[postcss](https://cn.vitejs.dev/guide/features.html</li><li>如果项目包含有效的 PostCSS 配置 (任何受 postcss-load-config 支持的格式，例如 postcss.config.js)，它将会自动应用于所有已导入的 CSS</li></ul><h4 id="_5-4-1-安装" tabindex="-1"><a class="header-anchor" href="#_5-4-1-安装"><span>5.4.1 安装</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">npm install autoprefixer --save</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="_5-4-2-postcss-config-js" tabindex="-1"><a class="header-anchor" href="#_5-4-2-postcss-config-js"><span>5.4.2 postcss.config.js</span></a></h4><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;autoprefixer&#39;</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-4-3-browserslistrc" tabindex="-1"><a class="header-anchor" href="#_5-4-3-browserslistrc"><span>5.4.3 .browserslistrc</span></a></h4><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token operator">&gt;</span><span class="token number">0.2</span><span class="token operator">%</span></span>
<span class="line">not dead</span>
<span class="line">not op_mini all</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-4-4-helloworld-vue" tabindex="-1"><a class="header-anchor" href="#_5-4-4-helloworld-vue"><span>5.4.4 HelloWorld.vue</span></a></h4><p>src\\components\\HelloWorld.vue</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;template&gt;</span>
<span class="line">  &lt;h1&gt;{{ msg }}&lt;/h1&gt;</span>
<span class="line">  &lt;a :class=&quot;style.link&quot;&gt;超链接&lt;/a&gt;</span>
<span class="line">  &lt;h2&gt;less&lt;/h2&gt;</span>
<span class="line">  &lt;h3&gt;sass&lt;/h3&gt;</span>
<span class="line">+ &lt;div class=&quot;postcss&quot;&gt;&lt;/div&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span>
<span class="line">&lt;script setup&gt;</span>
<span class="line">import { reactive } from &#39;vue&#39;</span>
<span class="line">import style from &#39;./HelloWorld.module.css&#39;;</span>
<span class="line">&lt;/script&gt;</span>
<span class="line">&lt;style scoped lang=&quot;less&quot;&gt;</span>
<span class="line">@color:red;</span>
<span class="line">h2{</span>
<span class="line">  color:@color;</span>
<span class="line">}</span>
<span class="line">&lt;/style&gt;</span>
<span class="line"></span>
<span class="line">&lt;style scoped lang=&quot;scss&quot;&gt;</span>
<span class="line">$color:green;</span>
<span class="line">h3{</span>
<span class="line">  color:$color;</span>
<span class="line">}</span>
<span class="line">&lt;/style&gt;</span>
<span class="line">+&lt;style scoped&gt;</span>
<span class="line">+.postcss{</span>
<span class="line">+    height:50px;</span>
<span class="line">+    width:200px;</span>
<span class="line">+    background-color: orange;</span>
<span class="line">+    transform: rotate(90deg);</span>
<span class="line">+}</span>
<span class="line">+&lt;/style&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-typescript" tabindex="-1"><a class="header-anchor" href="#_6-typescript"><span>6.typescript</span></a></h2><h3 id="_6-1-安装" tabindex="-1"><a class="header-anchor" href="#_6-1-安装"><span>6.1 安装</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">cnpm install typescript @babel/core @babel/preset-env  @babel/preset-typescript --save-dev</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_6-2-babelrc" tabindex="-1"><a class="header-anchor" href="#_6-2-babelrc"><span>6.2 .babelrc</span></a></h3><p>.babelrc</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">&quot;presets&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token punctuation">[</span><span class="token string">&quot;@babel/preset-env&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&quot;@babel/preset-typescript&quot;</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-3-tsconfig-json" tabindex="-1"><a class="header-anchor" href="#_6-3-tsconfig-json"><span>6.3 tsconfig.json</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esnext&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">&quot;module&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esnext&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">&quot;moduleResolution&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">&quot;strict&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">&quot;jsx&quot;</span><span class="token operator">:</span> <span class="token string">&quot;preserve&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">&quot;sourceMap&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">&quot;resolveJsonModule&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">&quot;esModuleInterop&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">&quot;lib&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;esnext&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;dom&quot;</span><span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">&quot;include&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;src/**/*.ts&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;src/**/*.d.ts&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;src/**/*.tsx&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;src/**/*.vue&quot;</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-4-helloworld-vue" tabindex="-1"><a class="header-anchor" href="#_6-4-helloworld-vue"><span>6.4 HelloWorld.vue</span></a></h3><p>src\\components\\HelloWorld.vue</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;template&gt;</span>
<span class="line">  &lt;h1&gt;{{ msg }}&lt;/h1&gt;</span>
<span class="line">  &lt;h2&gt;less&lt;/h2&gt;</span>
<span class="line">  &lt;h3&gt;sass&lt;/h3&gt;</span>
<span class="line">  &lt;div class=&quot;postcss&quot;&gt;&lt;/div&gt;</span>
<span class="line">+ &lt;button @click=&quot;handleClick&quot;&gt;{{state.count}}&lt;/button&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span>
<span class="line">&lt;script setup lang=&quot;ts&quot;&gt;</span>
<span class="line">import { reactive,defineProps } from &#39;vue&#39;</span>
<span class="line">+defineProps({</span>
<span class="line">+  msg:String</span>
<span class="line">+})</span>
<span class="line">+interface State {</span>
<span class="line">+  count:number;</span>
<span class="line">+}</span>
<span class="line">+let state = reactive&lt;State&gt;({count:0});</span>
<span class="line">+const handleClick = ()=&gt;{</span>
<span class="line">+  console.log(state.count);</span>
<span class="line">+  state.count++;</span>
<span class="line">+}</span>
<span class="line">&lt;/script&gt;</span>
<span class="line">&lt;style scoped lang=&quot;less&quot;&gt;</span>
<span class="line">@color:red;</span>
<span class="line">h2{</span>
<span class="line">  color:@color;</span>
<span class="line">}</span>
<span class="line">&lt;/style&gt;</span>
<span class="line"></span>
<span class="line">&lt;style scoped lang=&quot;scss&quot;&gt;</span>
<span class="line">$color:green;</span>
<span class="line">h3{</span>
<span class="line">  color:$color;</span>
<span class="line">}</span>
<span class="line">&lt;/style&gt;</span>
<span class="line">&lt;style scoped&gt;</span>
<span class="line">.postcss{</span>
<span class="line">    height:50px;</span>
<span class="line">    width:200px;</span>
<span class="line">    background-color: orange;</span>
<span class="line">    transform: rotate(90deg);</span>
<span class="line">}</span>
<span class="line">&lt;/style&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-5-shims-vue-d-ts" tabindex="-1"><a class="header-anchor" href="#_6-5-shims-vue-d-ts"><span>6.5 shims-vue.d.ts</span></a></h3><ul><li>让typescript识别支持<code>.vue</code>文件</li></ul><p>src\\shims-vue.d.ts</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line">declare module <span class="token string">&#39;*.vue&#39;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">import</span> <span class="token punctuation">{</span> DefineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token literal-property property">component</span><span class="token operator">:</span> DefineComponent<span class="token operator">&lt;</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> any<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token keyword">export</span> <span class="token keyword">default</span> component</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-6-vite-env-d-ts" tabindex="-1"><a class="header-anchor" href="#_6-6-vite-env-d-ts"><span>6.6 vite-env.d.ts</span></a></h3>`,97)),n("ul",null,[n("li",null,[s[1]||(s[1]=e("如果你的库依赖于某个全局库，使用/// ",-1)),p(l,null,{default:c(()=>[...s[0]||(s[0]=[e("指令",-1)])]),_:1})]),s[2]||(s[2]=n("li",null,"三斜线指令仅可放在包含它的文件的最顶端",-1)),s[3]||(s[3]=n("li",null,"三斜线引用告诉编译器在编译过程中要引入的额外的文件",-1))]),s[5]||(s[5]=a(`<p>src\\vite-env.d.ts</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token comment">/// &lt;reference types=&quot;vite/client&quot; /&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="_7-配置代理" tabindex="-1"><a class="header-anchor" href="#_7-配置代理"><span>7.配置代理</span></a></h2><ul><li>[server-proxy](https://cn.vitejs.dev/config/</li><li>为开发服务器配置自定义代理规则</li><li>期望接收一个 { key: options } 对象。如果 key 值以 ^ 开头，将会被解释为 RegExp。configure 可用于访问 proxy 实例。</li></ul><h3 id="_7-1-vite-config-js" tabindex="-1"><a class="header-anchor" href="#_7-1-vite-config-js"><span>7.1 vite.config.js</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import { defineConfig } from &#39;vite&#39;</span>
<span class="line">import vue from &#39;@vitejs/plugin-vue&#39;</span>
<span class="line">import { resolve } from &#39;path&#39;;</span>
<span class="line"></span>
<span class="line">// https://vitejs.dev/config/</span>
<span class="line">export default defineConfig({</span>
<span class="line">  resolve: {</span>
<span class="line">    alias: {</span>
<span class="line">      &#39;@&#39;: resolve(&#39;src&#39;)</span>
<span class="line">    }</span>
<span class="line">  },</span>
<span class="line">+ server: {</span>
<span class="line">+   proxy: {</span>
<span class="line">+     &#39;/api&#39;: {</span>
<span class="line">+       target: &#39;http://jsonplaceholder.typicode.com&#39;,</span>
<span class="line">+       changeOrigin: true,</span>
<span class="line">+       rewrite: (path) =&gt; path.replace(/^\\/api/, &#39;&#39;)</span>
<span class="line">+     }</span>
<span class="line">+   }</span>
<span class="line">+ },</span>
<span class="line">  plugins: [vue()]</span>
<span class="line">})</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-2-src-app-vue" tabindex="-1"><a class="header-anchor" href="#_7-2-src-app-vue"><span>7.2 src\\App.vue</span></a></h3><p>src\\App.vue</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;template&gt;</span>
<span class="line">  &lt;img src=&quot;@/assets/avatar.jpg&quot; /&gt;</span>
<span class="line">  &lt;img :src=&quot;avatarUrl&quot; /&gt;</span>
<span class="line">  &lt;div class=&quot;avatar&quot;&gt;&lt;/div&gt;</span>
<span class="line">  &lt;HelloWorld msg=&quot;Hello Vue 3 + Vite&quot; /&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span>
<span class="line">&lt;script setup&gt;</span>
<span class="line">//https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md</span>
<span class="line">import HelloWorld from &quot;@/components/HelloWorld.vue&quot;;</span>
<span class="line">import avatarUrl from &quot;@/assets/avatar.jpg&quot;;</span>
<span class="line">+fetch(&#39;/api/todos/1&#39;)</span>
<span class="line">+  .then(response =&gt; response.json())</span>
<span class="line">+  .then(json =&gt; console.log(json))</span>
<span class="line">&lt;/script&gt;</span>
<span class="line">&lt;style scoped&gt;</span>
<span class="line">.avatar {</span>
<span class="line">  width: 200px;</span>
<span class="line">  height: 200px;</span>
<span class="line">  background-image: url(@/assets/avatar.jpg);</span>
<span class="line">  background-size: contain;</span>
<span class="line">}</span>
<span class="line">&lt;/style&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-mock" tabindex="-1"><a class="header-anchor" href="#_8-mock"><span>8.mock</span></a></h2><ul><li><a href="https://www.npmjs.com/package/vite-plugin-mock" target="_blank" rel="noopener noreferrer">vite-plugin-mock</a></li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">npm i mockjs vite-plugin-mock -D</span>
<span class="line">node ./node_modules/vite-plugin-mock/node_modules/esbuild/install.js</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-1-vite-config-js" tabindex="-1"><a class="header-anchor" href="#_8-1-vite-config-js"><span>8.1 vite.config.js</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import { defineConfig } from &#39;vite&#39;</span>
<span class="line">import vue from &#39;@vitejs/plugin-vue&#39;</span>
<span class="line">import { resolve } from &#39;path&#39;;</span>
<span class="line">+import { viteMockServe } from &quot;vite-plugin-mock&quot;;</span>
<span class="line">// https://vitejs.dev/config/</span>
<span class="line">export default defineConfig({</span>
<span class="line">  resolve: {</span>
<span class="line">    alias: {</span>
<span class="line">      &#39;@&#39;: resolve(&#39;src&#39;)</span>
<span class="line">    }</span>
<span class="line">  },</span>
<span class="line">  server: {</span>
<span class="line">    proxy: {</span>
<span class="line">      &#39;/api&#39;: {</span>
<span class="line">        target: &#39;http://jsonplaceholder.typicode.com&#39;,</span>
<span class="line">        changeOrigin: true,</span>
<span class="line">        rewrite: (path) =&gt; path.replace(/^\\/api/, &#39;&#39;)</span>
<span class="line">      }</span>
<span class="line">    }</span>
<span class="line">  },</span>
<span class="line">+  plugins: [vue(),viteMockServe({})]</span>
<span class="line">})</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-2-mock-test-ts" tabindex="-1"><a class="header-anchor" href="#_8-2-mock-test-ts"><span>8.2 mock\\test.ts</span></a></h3><p>mock\\test.ts</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> MockMethod <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite-plugin-mock&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;/api/get&#39;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token function-variable function">response</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> query <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token literal-property property">code</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;vben&#39;</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">]</span> <span class="token keyword">as</span> MockMethod<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-eslint" tabindex="-1"><a class="header-anchor" href="#_9-eslint"><span>9.ESLint</span></a></h2><ul><li>ESLint是一个开源的 JavaScript 的 linting 工具 <ul><li>代码质量问题：使用方式有可能有问题</li><li>代码风格问题：风格不符合一定规则</li></ul></li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">npm install eslint eslint-plugin-vue  @vue/eslint-config-typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_9-1-src-components-helloworld-vue" tabindex="-1"><a class="header-anchor" href="#_9-1-src-components-helloworld-vue"><span>9.1 src\\components\\HelloWorld.vue</span></a></h3><p>src\\components\\HelloWorld.vue</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;template&gt;</span>
<span class="line">  &lt;h1&gt;{{ msg }}&lt;/h1&gt;</span>
<span class="line">  &lt;h2&gt;less&lt;/h2&gt;</span>
<span class="line">  &lt;h3&gt;sass&lt;/h3&gt;</span>
<span class="line">  &lt;div class=&quot;postcss&quot; /&gt;</span>
<span class="line">  &lt;button @click=&quot;handleClick&quot;&gt;</span>
<span class="line">    {{ state.count }}</span>
<span class="line">  &lt;/button&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span>
<span class="line">&lt;script setup lang=&quot;ts&quot;&gt;</span>
<span class="line">import { reactive,defineProps } from &#39;vue&#39;</span>
<span class="line">defineProps({</span>
<span class="line">+ msg:{</span>
<span class="line">+   type:String,</span>
<span class="line">+   default:&#39;&#39;</span>
<span class="line">+ }</span>
<span class="line">})</span>
<span class="line">interface State {</span>
<span class="line">  count:number;</span>
<span class="line">}</span>
<span class="line">let state = reactive&lt;State&gt;({count:0});</span>
<span class="line">const handleClick = ()=&gt;{</span>
<span class="line">  console.log(state.count);</span>
<span class="line">  state.count++;</span>
<span class="line">}</span>
<span class="line">&lt;/script&gt;</span>
<span class="line">&lt;style scoped lang=&quot;less&quot;&gt;</span>
<span class="line">@color:red;</span>
<span class="line">h2{</span>
<span class="line">  color:@color;</span>
<span class="line">}</span>
<span class="line">&lt;/style&gt;</span>
<span class="line"></span>
<span class="line">&lt;style scoped lang=&quot;scss&quot;&gt;</span>
<span class="line">$color:green;</span>
<span class="line">h3{</span>
<span class="line">  color:$color;</span>
<span class="line">}</span>
<span class="line">&lt;/style&gt;</span>
<span class="line">&lt;style scoped&gt;</span>
<span class="line">.postcss{</span>
<span class="line">    height:50px;</span>
<span class="line">    width:200px;</span>
<span class="line">    background-color: orange;</span>
<span class="line">    transform: rotate(90deg);</span>
<span class="line">}</span>
<span class="line">&lt;/style&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-2-main-ts" tabindex="-1"><a class="header-anchor" href="#_9-2-main-ts"><span>9.2 main.ts</span></a></h3><p>src\\main.ts</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span></span>
<span class="line"><span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token string">&#39;./global.css&#39;</span></span>
<span class="line"> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span>&#39;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-3-eslintrc-js" tabindex="-1"><a class="header-anchor" href="#_9-3-eslintrc-js"><span>9.3 .eslintrc.js</span></a></h3><p>.eslintrc.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">root</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">env</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">browser</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">es2021</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">node</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token string">&quot;plugin:vue/vue3-recommended&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&quot;eslint:recommended&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&quot;@vue/typescript/recommended&quot;</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">parserOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">ecmaVersion</span><span class="token operator">:</span> <span class="token number">2021</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">       <span class="token string-property property">&quot;no-unused-vars&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span></span>
<span class="line">       <span class="token string-property property">&quot;@typescript-eslint/no-unused-vars&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-4-eslintignore" tabindex="-1"><a class="header-anchor" href="#_9-4-eslintignore"><span>9.4 .eslintignore</span></a></h3><p>.eslintignore</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">*.css</span>
<span class="line">*.jpg</span>
<span class="line">*.jpeg</span>
<span class="line">*.png</span>
<span class="line">*.gif</span>
<span class="line">*.d.ts</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-5-package-json" tabindex="-1"><a class="header-anchor" href="#_9-5-package-json"><span>9.5 package.json</span></a></h3><p>package.json</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">{</span>
<span class="line">  &quot;name&quot;: &quot;zhufeng-vite2-prepare&quot;,</span>
<span class="line">  &quot;version&quot;: &quot;1.0.0&quot;,</span>
<span class="line">  &quot;scripts&quot;: {</span>
<span class="line">    &quot;dev&quot;: &quot;vite&quot;,</span>
<span class="line">    &quot;build&quot;: &quot;vite build&quot;,</span>
<span class="line">    &quot;serve&quot;: &quot;vite preview&quot;,</span>
<span class="line">+   &quot;lint&quot;:&quot;eslint --ext .ts,vue src/** --no-error-on-unmatched-pattern --quiet&quot;,</span>
<span class="line">+   &quot;lint:fix&quot;:&quot;eslint --ext .ts,vue src/** --no-error-on-unmatched-pattern --fix&quot;</span>
<span class="line">  },</span>
<span class="line">  &quot;dependencies&quot;: {</span>
<span class="line">    &quot;less&quot;: &quot;^4.1.1&quot;,</span>
<span class="line">    &quot;sass&quot;: &quot;^1.35.2&quot;,</span>
<span class="line">    &quot;vue&quot;: &quot;^3.0.5&quot;</span>
<span class="line">  },</span>
<span class="line">  &quot;devDependencies&quot;: {</span>
<span class="line">+   &quot;@typescript-eslint/eslint-plugin&quot;: &quot;^4.28.2&quot;,</span>
<span class="line">+   &quot;@typescript-eslint/parser&quot;: &quot;^4.28.2&quot;,</span>
<span class="line">    &quot;@vitejs/plugin-vue&quot;: &quot;^1.2.4&quot;,</span>
<span class="line">    &quot;@vue/compiler-sfc&quot;: &quot;^3.0.5&quot;,</span>
<span class="line">+   &quot;@vue/eslint-config-typescript&quot;: &quot;^7.0.0&quot;,</span>
<span class="line">    &quot;autoprefixer&quot;: &quot;^10.2.6&quot;,</span>
<span class="line">+   &quot;eslint&quot;: &quot;^7.30.0&quot;,</span>
<span class="line">+   &quot;eslint-plugin-vue&quot;: &quot;^7.13.0&quot;,</span>
<span class="line">    &quot;mockjs&quot;: &quot;^1.1.0&quot;,</span>
<span class="line">    &quot;vite&quot;: &quot;^2.4.0&quot;,</span>
<span class="line">    &quot;vite-plugin-mock&quot;: &quot;^2.9.1&quot;</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_10-prettier" tabindex="-1"><a class="header-anchor" href="#_10-prettier"><span>10.Prettier</span></a></h2><ul><li>ESLint 主要解决的是代码质量问题</li><li>代码质量规则 (code-quality rules) <ul><li>no-unused-vars</li><li>no-extra-bind</li><li>no-implicit-globals</li><li>prefer-promise-reject-errors</li></ul></li><li>代码风格规则 (code-formatting rules) <ul><li>max-len</li><li>no-mixed-spaces-and-tabs</li><li>keyword-spacing</li><li>comma-style</li></ul></li><li>代码风格问题需要使用<code>Prettier</code></li><li>Prettier 声称自己是一个有主见的代码格式化工具 (opinionated code formatter)</li></ul><h3 id="_10-1-安装" tabindex="-1"><a class="header-anchor" href="#_10-1-安装"><span>10.1 安装</span></a></h3><ul><li>[eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">npm install prettier eslint-plugin-prettier  @vue/eslint-config-prettier --save-dev</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_10-2-package-json" tabindex="-1"><a class="header-anchor" href="#_10-2-package-json"><span>10.2 package.json</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">{</span>
<span class="line">  &quot;name&quot;: &quot;zhufeng-vite2-prepare&quot;,</span>
<span class="line">  &quot;version&quot;: &quot;1.0.0&quot;,</span>
<span class="line">  &quot;scripts&quot;: {</span>
<span class="line">    &quot;dev&quot;: &quot;vite&quot;,</span>
<span class="line">    &quot;build&quot;: &quot;vite build&quot;,</span>
<span class="line">    &quot;serve&quot;: &quot;vite preview&quot;,</span>
<span class="line">    &quot;lint&quot;: &quot;eslint --ext .ts,vue src/** --no-error-on-unmatched-pattern --quiet&quot;,</span>
<span class="line">    &quot;lint:fix&quot;: &quot;eslint --ext .ts,vue src/** --no-error-on-unmatched-pattern --fix&quot;</span>
<span class="line">  },</span>
<span class="line">  &quot;dependencies&quot;: {</span>
<span class="line">    &quot;less&quot;: &quot;^4.1.1&quot;,</span>
<span class="line">    &quot;sass&quot;: &quot;^1.35.2&quot;,</span>
<span class="line">    &quot;vue&quot;: &quot;^3.0.5&quot;</span>
<span class="line">  },</span>
<span class="line">  &quot;devDependencies&quot;: {</span>
<span class="line">    &quot;@typescript-eslint/eslint-plugin&quot;: &quot;^4.28.2&quot;,</span>
<span class="line">    &quot;@typescript-eslint/parser&quot;: &quot;^4.28.2&quot;,</span>
<span class="line">    &quot;@vitejs/plugin-vue&quot;: &quot;^1.2.4&quot;,</span>
<span class="line">    &quot;@vue/compiler-sfc&quot;: &quot;^3.0.5&quot;,</span>
<span class="line">+   &quot;@vue/eslint-config-prettier&quot;: &quot;^6.0.0&quot;,</span>
<span class="line">    &quot;@vue/eslint-config-typescript&quot;: &quot;^7.0.0&quot;,</span>
<span class="line">    &quot;autoprefixer&quot;: &quot;^10.2.6&quot;,</span>
<span class="line">    &quot;eslint&quot;: &quot;^7.30.0&quot;,</span>
<span class="line">+   &quot;eslint-plugin-prettier&quot;: &quot;^3.4.0&quot;,</span>
<span class="line">    &quot;eslint-plugin-vue&quot;: &quot;^7.13.0&quot;,</span>
<span class="line">    &quot;mockjs&quot;: &quot;^1.1.0&quot;,</span>
<span class="line">+   &quot;prettier&quot;: &quot;^2.3.2&quot;,</span>
<span class="line">    &quot;vite&quot;: &quot;^2.4.0&quot;,</span>
<span class="line">    &quot;vite-plugin-mock&quot;: &quot;^2.9.1&quot;</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10-3-eslintrc-js" tabindex="-1"><a class="header-anchor" href="#_10-3-eslintrc-js"><span>10.3 .eslintrc.js</span></a></h3><p>.eslintrc.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">module.exports = {</span>
<span class="line">  root: true,</span>
<span class="line">  env: {</span>
<span class="line">    browser: true,</span>
<span class="line">    es2021: true,</span>
<span class="line">    node: true,</span>
<span class="line">  },</span>
<span class="line">  extends: [</span>
<span class="line">    &quot;plugin:vue/vue3-recommended&quot;,</span>
<span class="line">    &quot;eslint:recommended&quot;,</span>
<span class="line">    &quot;@vue/typescript/recommended&quot;,</span>
<span class="line">+   &quot;@vue/prettier&quot;,</span>
<span class="line">+   &quot;@vue/prettier/@typescript-eslint&quot;,</span>
<span class="line">  ],</span>
<span class="line">  parserOptions: {</span>
<span class="line">    ecmaVersion: 2021,</span>
<span class="line">  },</span>
<span class="line">  rules: {</span>
<span class="line">    &quot;no-unused-vars&quot;: &quot;off&quot;,</span>
<span class="line">    &quot;@typescript-eslint/no-unused-vars&quot;: &quot;off&quot;,</span>
<span class="line">+   &quot;prettier/prettier&quot;: [&quot;error&quot;, { endOfLine: &quot;auto&quot; }],</span>
<span class="line">  },</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_11-单元测试" tabindex="-1"><a class="header-anchor" href="#_11-单元测试"><span>11.单元测试</span></a></h2><ul><li><a href="https://next.vue-test-utils.vuejs.org/" target="_blank" rel="noopener noreferrer">next.vue-test-utils.vuejs.org</a></li><li><a href="https://github.com/vuejs/vue-jest/tree/v3" target="_blank" rel="noopener noreferrer">vue-jest/tree/v3</a></li><li><a href="https://www.jestjs.cn/docs/getting-started" target="_blank" rel="noopener noreferrer">jestjs</a></li></ul><h3 id="_11-1-安装依赖" tabindex="-1"><a class="header-anchor" href="#_11-1-安装依赖"><span>11.1 安装依赖</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">cnpm i jest@next babel-jest@next @types/jest vue-jest@next ts-jest@next @vue/test-utils@next --save-dev</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_11-2-package-json" tabindex="-1"><a class="header-anchor" href="#_11-2-package-json"><span>11.2 package.json</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">{</span>
<span class="line">  &quot;name&quot;: &quot;zhufeng-vite2-prepare&quot;,</span>
<span class="line">  &quot;version&quot;: &quot;1.0.0&quot;,</span>
<span class="line">  &quot;scripts&quot;: {</span>
<span class="line">    &quot;dev&quot;: &quot;vite&quot;,</span>
<span class="line">    &quot;build&quot;: &quot;vite build&quot;,</span>
<span class="line">    &quot;serve&quot;: &quot;vite preview&quot;,</span>
<span class="line">    &quot;lint&quot;: &quot;eslint --ext .ts,vue src/** --no-error-on-unmatched-pattern --quiet&quot;,</span>
<span class="line">    &quot;lint:fix&quot;: &quot;eslint --ext .ts,vue src/** --no-error-on-unmatched-pattern --fix&quot;</span>
<span class="line">  },</span>
<span class="line">  &quot;dependencies&quot;: {</span>
<span class="line">    &quot;less&quot;: &quot;^4.1.1&quot;,</span>
<span class="line">    &quot;sass&quot;: &quot;^1.35.2&quot;,</span>
<span class="line">    &quot;vue&quot;: &quot;^3.0.5&quot;</span>
<span class="line">  },</span>
<span class="line">  &quot;devDependencies&quot;: {</span>
<span class="line">    &quot;@typescript-eslint/eslint-plugin&quot;: &quot;^4.28.2&quot;,</span>
<span class="line">    &quot;@typescript-eslint/parser&quot;: &quot;^4.28.2&quot;,</span>
<span class="line">    &quot;@vitejs/plugin-vue&quot;: &quot;^1.2.4&quot;,</span>
<span class="line">    &quot;@vue/compiler-sfc&quot;: &quot;^3.0.5&quot;,</span>
<span class="line">    &quot;@vue/eslint-config-prettier&quot;: &quot;^6.0.0&quot;,</span>
<span class="line">    &quot;@vue/eslint-config-typescript&quot;: &quot;^7.0.0&quot;,</span>
<span class="line">    &quot;autoprefixer&quot;: &quot;^10.2.6&quot;,</span>
<span class="line">    &quot;eslint&quot;: &quot;^7.30.0&quot;,</span>
<span class="line">    &quot;eslint-plugin-prettier&quot;: &quot;^3.4.0&quot;,</span>
<span class="line">    &quot;eslint-plugin-vue&quot;: &quot;^7.13.0&quot;,</span>
<span class="line">    &quot;mockjs&quot;: &quot;^1.1.0&quot;,</span>
<span class="line">    &quot;prettier&quot;: &quot;^2.3.2&quot;,</span>
<span class="line">    &quot;vite&quot;: &quot;^2.4.0&quot;,</span>
<span class="line">    &quot;vite-plugin-mock&quot;: &quot;^2.9.1&quot;</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_11-3-jest-config-js" tabindex="-1"><a class="header-anchor" href="#_11-3-jest-config-js"><span>11.3 jest.config.js</span></a></h3><ul><li><a href="https://github.com/vuejs/vue-jest/tree/v3" target="_blank" rel="noopener noreferrer">vue-jest</a>Jest Vue transformer with source map support</li><li><a href="https://www.npmjs.com/package/babel-jest" target="_blank" rel="noopener noreferrer">babel-jest</a>Babel jest plugin</li><li><a href="https://www.npmjs.com/package/ts-jest" target="_blank" rel="noopener noreferrer">ts-jest</a>A Jest transformer with source map support that lets you use Jest to test projects written in TypeScript</li></ul><p>jest.config.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">testEnvironment</span><span class="token operator">:</span> <span class="token string">&quot;jsdom&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">&quot;^.+\\\\.vue$&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue-jest&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">&quot;^.+\\\\.jsx?$&quot;</span><span class="token operator">:</span> <span class="token string">&quot;babel-jest&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">&quot;^.+\\\\.tsx?$&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ts-jest&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">moduleNameMapper</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">&quot;^@/(.*)$&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;rootDir&gt;/src/$1&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">testMatch</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;**/tests/**/*.spec.[jt]s&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_11-4-tests-test-ts" tabindex="-1"><a class="header-anchor" href="#_11-4-tests-test-ts"><span>11.4 tests\\test.ts</span></a></h3><p>tests\\test.ts</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> mount <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vue/test-utils&#39;</span></span>
<span class="line"><span class="token keyword">const</span> MessageComponent <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&#39;&lt;p&gt;{{ msg }}&lt;/p&gt;&#39;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;msg&#39;</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;displays message&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> wrapper <span class="token operator">=</span> <span class="token function">mount</span><span class="token punctuation">(</span>MessageComponent<span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">&#39;Hello world&#39;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token function">expect</span><span class="token punctuation">(</span>wrapper<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toContain</span><span class="token punctuation">(</span><span class="token string">&#39;Hello world&#39;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_11-5-tsconfig-json" tabindex="-1"><a class="header-anchor" href="#_11-5-tsconfig-json"><span>11.5 tsconfig.json</span></a></h3><p>tsconfig.json</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">{</span>
<span class="line">  &quot;compilerOptions&quot;: {</span>
<span class="line">    &quot;target&quot;: &quot;esnext&quot;,</span>
<span class="line">    &quot;module&quot;: &quot;esnext&quot;,</span>
<span class="line">    &quot;moduleResolution&quot;: &quot;node&quot;,</span>
<span class="line">    &quot;strict&quot;: true,</span>
<span class="line">    &quot;jsx&quot;: &quot;preserve&quot;,</span>
<span class="line">    &quot;sourceMap&quot;: true,</span>
<span class="line">    &quot;resolveJsonModule&quot;: true,</span>
<span class="line">    &quot;esModuleInterop&quot;: true,</span>
<span class="line">    &quot;lib&quot;: [&quot;esnext&quot;, &quot;dom&quot;],</span>
<span class="line">+   &quot;types&quot;:[&quot;vite/client&quot;,&quot;jest&quot;],</span>
<span class="line">+   &quot;baseUrl&quot;: &quot;./&quot;,</span>
<span class="line">+   &quot;paths&quot;: {</span>
<span class="line">+     &quot;@&quot;: [&quot;./src&quot;]</span>
<span class="line">+   }</span>
<span class="line">  },</span>
<span class="line">+ &quot;include&quot;: [&quot;src/**/*.ts&quot;, &quot;src/**/*.d.ts&quot;, &quot;src/**/*.tsx&quot;, &quot;src/**/*.vue&quot;,&quot;tests/**/*.spec.ts&quot;, &quot;tests/test.ts&quot;]</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_11-6-package-json" tabindex="-1"><a class="header-anchor" href="#_11-6-package-json"><span>11.6 package.json</span></a></h3><p>package.json</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">{</span>
<span class="line">   &quot;scripts&quot;: {</span>
<span class="line">    &quot;dev&quot;: &quot;vite&quot;,</span>
<span class="line">    &quot;build&quot;: &quot;vite build&quot;,</span>
<span class="line">    &quot;serve&quot;: &quot;vite preview&quot;,</span>
<span class="line">    &quot;lint&quot;: &quot;eslint --ext .ts,vue src/** --no-error-on-unmatched-pattern --quiet&quot;,</span>
<span class="line">    &quot;lint:fix&quot;: &quot;eslint --ext .ts,vue src/** --no-error-on-unmatched-pattern --fix&quot;,</span>
<span class="line">+   &quot;test&quot;: &quot;jest  --passWithNoTests&quot;</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_12-git-hook" tabindex="-1"><a class="header-anchor" href="#_12-git-hook"><span>12.git hook</span></a></h2><ul><li>可以在<code>git commit</code>之前检查代码，保证所有提交到版本库中的代码都是符合规范的</li><li>可以在<code>git push</code>之前执行单元测试,保证所有的提交的代码经过的单元测试</li><li><a href="%5Bhusky%5D(https://www.npmjs.com/package/husky)">husky</a>可以让我们向项目中方便添加git hooks</li><li><a href="https://www.npmjs.com/package/lint-staged" target="_blank" rel="noopener noreferrer">lint-staged</a>用于实现每次提交只检查本次提交所修改的文件</li><li>[lint-staged#configuration](https://github.com/okonet/lint-staged</li><li><a href="">Commitlint</a>可以规范<code>git commit -m &quot;&quot;</code>中的描述信息</li></ul><h3 id="_12-1-注释规范" tabindex="-1"><a class="header-anchor" href="#_12-1-注释规范"><span>12.1 注释规范</span></a></h3><ul><li><p>commitlint 推荐我们使用 config-conventional 配置去写 commit</p></li><li><p>提交格式 <code>git commit -m &lt;type&gt;[optional scope]: &lt;description&gt;</code></p><ul><li>type ：用于表明我们这次提交的改动类型，是新增了功能？还是修改了测试代码？又或者是更新了文档？</li><li>optional scope：一个可选的修改范围。用于标识此次提交主要涉及到代码中哪个模块</li><li>description：一句话描述此次提交的主要内容，做到言简意赅</li></ul></li></ul><h4 id="_12-1-1-type类型" tabindex="-1"><a class="header-anchor" href="#_12-1-1-type类型"><span>12.1.1 type类型</span></a></h4><table><thead><tr><th style="text-align:left;">类型</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">build</td><td style="text-align:left;">编译相关的修改，例如发布版本、对项目构建或者依赖的改动</td></tr><tr><td style="text-align:left;">chore</td><td style="text-align:left;">其他修改, 比如改变构建流程、或者增加依赖库、工具等</td></tr><tr><td style="text-align:left;">ci</td><td style="text-align:left;">持续集成修改</td></tr><tr><td style="text-align:left;">docs</td><td style="text-align:left;">文档修改</td></tr><tr><td style="text-align:left;">feature</td><td style="text-align:left;">新特性、新功能</td></tr><tr><td style="text-align:left;">fix</td><td style="text-align:left;">修改bug</td></tr><tr><td style="text-align:left;">perf</td><td style="text-align:left;">优化相关，比如提升性能、体验</td></tr><tr><td style="text-align:left;">refactor</td><td style="text-align:left;">代码重构</td></tr><tr><td style="text-align:left;">revert</td><td style="text-align:left;">回滚到上一个版本</td></tr><tr><td style="text-align:left;">style</td><td style="text-align:left;">代码格式修改</td></tr><tr><td style="text-align:left;">test</td><td style="text-align:left;">测试用例修改</td></tr></tbody></table><h3 id="_12-2-安装" tabindex="-1"><a class="header-anchor" href="#_12-2-安装"><span>12.2 安装</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">cnpm i husky lint-staged @commitlint/cli @commitlint/config-conventional --save-dev</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_12-3-配置脚本" tabindex="-1"><a class="header-anchor" href="#_12-3-配置脚本"><span>12.3 配置脚本</span></a></h3><ul><li><code>prepare</code>脚本会在<code>npm install</code>(不带参数)之后自动执行</li><li>当我们执行npm install安装完项目依赖后会执行<code>husky install</code>命令，该命令会创建<code>.husky/</code>目录并指定该目录为<code>git hooks</code>所在的目录</li></ul><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line">npm set<span class="token operator">-</span>script prepare <span class="token string">&quot;husky install&quot;</span></span>
<span class="line">npm run prepare</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_12-4-创建hooks" tabindex="-1"><a class="header-anchor" href="#_12-4-创建hooks"><span>12.4 创建hooks</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line">npx husky add <span class="token punctuation">.</span>husky<span class="token operator">/</span>pre<span class="token operator">-</span>commit <span class="token string">&quot;lint-staged&quot;</span></span>
<span class="line">npx husky add <span class="token punctuation">.</span>husky<span class="token operator">/</span>commit<span class="token operator">-</span>msg <span class="token string">&quot;npx --no-install commitlint --edit $1&quot;</span></span>
<span class="line">npx husky add <span class="token punctuation">.</span>husky<span class="token operator">/</span>pre<span class="token operator">-</span>push <span class="token string">&quot;npm run test&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_12-5-commitlint-config-js" tabindex="-1"><a class="header-anchor" href="#_12-5-commitlint-config-js"><span>12.5 commitlint.config.js</span></a></h3><p>commitlint.config.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;@commitlint/config-conventional&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">&quot;type-enum&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token number">2</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string">&quot;always&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">[</span></span>
<span class="line">        <span class="token string">&quot;feature&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&quot;update&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&quot;fixbug&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&quot;refactor&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&quot;optimize&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&quot;style&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&quot;docs&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&quot;chore&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">&quot;type-case&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">&quot;type-empty&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">&quot;scope-empty&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">&quot;scope-case&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">&quot;subject-full-stop&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&quot;never&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">&quot;subject-case&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&quot;never&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">&quot;header-max-length&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&quot;always&quot;</span><span class="token punctuation">,</span> <span class="token number">72</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考"><span>参考</span></a></h2><ul><li><a href="https://zhuanlan.zhihu.com/p/80574300" target="_blank" rel="noopener noreferrer">搞懂 ESLint 和 Prettier</a></li></ul>`,82))])}const b=i(u,[["render",d]]),g=JSON.parse('{"path":"/strong/103.16.vite.basic.html","title":"","lang":"en-US","frontmatter":{},"git":{"updatedTime":1681290319000,"contributors":[{"name":"yutao","username":"yutao","email":"642231346@qq.com","commits":1,"url":"https://github.com/yutao"}],"changelog":[{"hash":"f5ab8c9d34991ec274f7f652439afe5b2afb6147","time":1681290319000,"email":"642231346@qq.com","author":"yutao","message":"modify"}]},"filePathRelative":"strong/103.16.vite.basic.md"}');export{b as comp,g as data};
