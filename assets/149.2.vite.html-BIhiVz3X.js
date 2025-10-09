import{_ as n,c as a,a as e,o as p}from"./app-CD1YpnS1.js";const t={};function l(i,s){return p(),a("div",null,[...s[0]||(s[0]=[e(`<h2 id="课程大纲" tabindex="-1"><a class="header-anchor" href="#课程大纲"><span>课程大纲</span></a></h2><ul><li>单元测试和E2E测试</li><li>SSR服务器端渲染</li><li>静态化</li><li>HMR 热更新</li></ul><h2 id="_1-测试" tabindex="-1"><a class="header-anchor" href="#_1-测试"><span>1.测试</span></a></h2><ul><li><a href="https://vitejs.cn/" target="_blank" rel="noopener noreferrer">vitejs</a></li><li><a href="https://www.tslang.cn/" target="_blank" rel="noopener noreferrer">tslang</a></li></ul><h3 id="_1-1-初始化" tabindex="-1"><a class="header-anchor" href="#_1-1-初始化"><span>1.1 初始化</span></a></h3><h4 id="_1-1-1-安装" tabindex="-1"><a class="header-anchor" href="#_1-1-1-安装"><span>1.1.1 安装</span></a></h4><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line">mkdir <span class="token number">1</span><span class="token punctuation">.</span>test</span>
<span class="line">cd <span class="token number">1</span><span class="token punctuation">.</span>test</span>
<span class="line">npm init <span class="token operator">-</span>y</span>
<span class="line"></span>
<span class="line">pnpm install vue </span>
<span class="line">pnpm i vite @vitejs<span class="token operator">/</span>plugin<span class="token operator">-</span>vue <span class="token operator">-</span><span class="token constant">D</span></span>
<span class="line">pnpm install @babel<span class="token operator">/</span>core @babel<span class="token operator">/</span>preset<span class="token operator">-</span>env  typescript @babel<span class="token operator">/</span>preset<span class="token operator">-</span>typescript  <span class="token operator">-</span><span class="token constant">D</span></span>
<span class="line">pnpm install jest ts<span class="token operator">-</span>jest ts<span class="token operator">-</span>node @types<span class="token operator">/</span>node @types<span class="token operator">/</span>jest babel<span class="token operator">-</span>jest @vue<span class="token operator">/</span>vue3<span class="token operator">-</span>jest <span class="token operator">-</span><span class="token constant">D</span></span>
<span class="line">pnpm install  @vue<span class="token operator">/</span>test<span class="token operator">-</span>utils@next jest<span class="token operator">-</span>transform<span class="token operator">-</span>stub <span class="token operator">-</span><span class="token constant">D</span></span>
<span class="line">echo done</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-1-2-tsconfig-node-json" tabindex="-1"><a class="header-anchor" href="#_1-1-2-tsconfig-node-json"><span>1.1.2 tsconfig.node.json</span></a></h4><ul><li><a href="https://www.typescriptlang.org/docs/handbook/project-references.html" target="_blank" rel="noopener noreferrer">compiler-options</a></li></ul><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">&quot;composite&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">&quot;module&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esnext&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">&quot;moduleResolution&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">&quot;skipLibCheck&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">&quot;include&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;vite.config.ts&quot;</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-2-3-tsconfig-json" tabindex="-1"><a class="header-anchor" href="#_1-2-3-tsconfig-json"><span>1.2.3 tsconfig.json</span></a></h4><p>tsconfig.json</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">{</span>
<span class="line">  &quot;compilerOptions&quot;: {</span>
<span class="line">    &quot;target&quot;: &quot;esnext&quot;,</span>
<span class="line">    &quot;useDefineForClassFields&quot;: true,</span>
<span class="line">    &quot;module&quot;: &quot;esnext&quot;,</span>
<span class="line">    &quot;moduleResolution&quot;: &quot;node&quot;,</span>
<span class="line">    &quot;strict&quot;: true,</span>
<span class="line">    &quot;jsx&quot;: &quot;preserve&quot;,</span>
<span class="line">    &quot;sourceMap&quot;: true,</span>
<span class="line">    &quot;resolveJsonModule&quot;: true,</span>
<span class="line">    &quot;esModuleInterop&quot;: true,</span>
<span class="line">    &quot;lib&quot;: [&quot;esnext&quot;, &quot;dom&quot;],</span>
<span class="line">    &quot;skipLibCheck&quot;: true,</span>
<span class="line">    &quot;strictNullChecks&quot;:true,</span>
<span class="line">    &quot;noEmit&quot;:true,</span>
<span class="line">    &quot;noEmitOnError:true, </span>
<span class="line">    &quot;baseUrl&quot;: &quot;.&quot;,</span>
<span class="line">    &quot;paths&quot;: {</span>
<span class="line">     &quot;@/*&quot;: [&quot;src/*&quot;]</span>
<span class="line">    }</span>
<span class="line">  },</span>
<span class="line">  &quot;include&quot;: [&quot;src/**/*.ts&quot;, &quot;src/**/*.d.ts&quot;, &quot;src/**/*.tsx&quot;, &quot;src/**/*.vue&quot;],</span>
<span class="line">  &quot;references&quot;: [{ &quot;path&quot;: &quot;./tsconfig.node.json&quot; }]</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-1-4-vite-config-ts" tabindex="-1"><a class="header-anchor" href="#_1-1-4-vite-config-ts"><span>1.1.4 vite.config.ts</span></a></h4><ul><li><a href="https://vitejs.cn/config/" target="_blank" rel="noopener noreferrer">config</a></li></ul><p>vite.config.ts</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite&#39;</span></span>
<span class="line"><span class="token keyword">import</span> vue <span class="token keyword">from</span> <span class="token string">&#39;@vitejs/plugin-vue&#39;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> resolve <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;path&quot;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">   <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">     <span class="token string-property property">&quot;@&quot;</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&quot;src&quot;</span><span class="token punctuation">)</span></span>
<span class="line">   <span class="token punctuation">}</span></span>
<span class="line"> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-1-5-package-json" tabindex="-1"><a class="header-anchor" href="#_1-1-5-package-json"><span>1.1.5 package.json</span></a></h4><p>package.json</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">&quot;dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vite&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vite build&quot;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-1-6-index-html" tabindex="-1"><a class="header-anchor" href="#_1-1-6-index-html"><span>1.1.6 index.html</span></a></h4><p>index.html</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token constant">DOCTYPE</span> html<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span>html lang<span class="token operator">=</span><span class="token string">&quot;en&quot;</span><span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line"><span class="token operator">&lt;</span>head<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span>meta charset<span class="token operator">=</span><span class="token string">&quot;UTF-8&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span>meta name<span class="token operator">=</span><span class="token string">&quot;viewport&quot;</span> content<span class="token operator">=</span><span class="token string">&quot;width=device-width, initial-scale=1.0&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span>title<span class="token operator">&gt;</span>Vite App<span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line"><span class="token operator">&lt;</span>body<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">&quot;app&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span>script type<span class="token operator">=</span><span class="token string">&quot;module&quot;</span> src<span class="token operator">=</span><span class="token string">&quot;/src/main.ts&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-1-7-gitignore" tabindex="-1"><a class="header-anchor" href="#_1-1-7-gitignore"><span>1.1.7 .gitignore</span></a></h4><p>.gitignore</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line"> </span>
<span class="line">logs</span>
<span class="line">*.log</span>
<span class="line">npm-debug.log*</span>
<span class="line">yarn-debug.log*</span>
<span class="line">yarn-error.log*</span>
<span class="line">pnpm-debug.log*</span>
<span class="line">lerna-debug.log*</span>
<span class="line"></span>
<span class="line">node_modules</span>
<span class="line">dist</span>
<span class="line">dist-ssr</span>
<span class="line">*.local</span>
<span class="line"></span>
<span class="line"> </span>
<span class="line">.vscode/*</span>
<span class="line">!.vscode/extensions.json</span>
<span class="line">.idea</span>
<span class="line">.DS_Store</span>
<span class="line">*.suo</span>
<span class="line">*.ntvs*</span>
<span class="line">*.njsproj</span>
<span class="line">*.sln</span>
<span class="line">*.sw?</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-1-8-src-main-ts" tabindex="-1"><a class="header-anchor" href="#_1-1-8-src-main-ts"><span>1.1.8 src\\main.ts</span></a></h4><p>src\\main.ts</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span></span>
<span class="line"><span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span></span>
<span class="line"></span>
<span class="line"> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span>&#39;</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-1-9-src-env-d-ts" tabindex="-1"><a class="header-anchor" href="#_1-1-9-src-env-d-ts"><span>1.1.9 src\\env.d.ts</span></a></h4><p>src\\env.d.ts</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token comment">/// &lt;reference types=&quot;vite/client&quot; /&gt;</span></span>
<span class="line"></span>
<span class="line">declare module <span class="token string">&#39;*.vue&#39;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">import</span> type <span class="token punctuation">{</span> DefineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span></span>
<span class="line">  <span class="token comment">// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token literal-property property">component</span><span class="token operator">:</span> DefineComponent<span class="token operator">&lt;</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> any<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token keyword">export</span> <span class="token keyword">default</span> component</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-1-10-src-app-vue" tabindex="-1"><a class="header-anchor" href="#_1-1-10-src-app-vue"><span>1.1.10 src\\App.vue</span></a></h4><p>src\\App.vue</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;script setup lang=&quot;ts&quot;&gt;</span>
<span class="line">import TodoApp from &#39;./components/TodoApp.vue&#39;</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;template&gt;</span>
<span class="line">  &lt;TodoApp/&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span>
<span class="line">&lt;style&gt;&lt;/style&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-1-11-todoapp-vue" tabindex="-1"><a class="header-anchor" href="#_1-1-11-todoapp-vue"><span>1.1.11 TodoApp.vue</span></a></h4><p>src\\components\\TodoApp.vue</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;template&gt;</span>
<span class="line">  &lt;img :src=&quot;logoUrl&quot;/&gt;</span>
<span class="line">  &lt;input data-test=&quot;newTodo&quot;   /&gt;</span>
<span class="line">  &lt;button data-test=&quot;addTodo&quot;&gt;addTodo&lt;/button&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line">&lt;script setup lang=&quot;ts&quot;&gt;</span>
<span class="line">import logoUrl from &quot;@/assets/logo.png&quot;</span>
<span class="line">&lt;/script&gt;</span>
<span class="line">&lt;style scoped&gt;</span>
<span class="line">img{</span>
<span class="line">  width:50px;</span>
<span class="line">}</span>
<span class="line">&lt;/style&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-添加单元测试" tabindex="-1"><a class="header-anchor" href="#_1-2-添加单元测试"><span>1.2 添加单元测试</span></a></h3><ul><li><a href="https://www.jestjs.cn/" target="_blank" rel="noopener noreferrer">jestjs</a></li></ul><h4 id="_1-2-1-package-json" tabindex="-1"><a class="header-anchor" href="#_1-2-1-package-json"><span>1.2.1 package.json</span></a></h4><p>package.json</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">{</span>
<span class="line">    &quot;scripts&quot;: {</span>
<span class="line">    &quot;dev&quot;: &quot;vite&quot;,</span>
<span class="line">    &quot;build&quot;: &quot;vite build&quot;,</span>
<span class="line">+   &quot;test&quot;: &quot;jest&quot;</span>
<span class="line">  },</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-2-2-src-sum-ts" tabindex="-1"><a class="header-anchor" href="#_1-2-2-src-sum-ts"><span>1.2.2 src\\sum.ts</span></a></h4><p>src\\sum.ts</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">a</span><span class="token operator">:</span>number<span class="token punctuation">,</span><span class="token literal-property property">b</span><span class="token operator">:</span>number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-2-3-sum-spec-ts" tabindex="-1"><a class="header-anchor" href="#_1-2-3-sum-spec-ts"><span>1.2.3 sum.spec.ts</span></a></h4><p>src\\sum.spec.ts</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> sum <span class="token keyword">from</span> <span class="token string">&#39;./sum&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">it</span><span class="token punctuation">(</span><span class="token string">&#39;test sum&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">expect</span><span class="token punctuation">(</span><span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-2-4-babel-config-ts" tabindex="-1"><a class="header-anchor" href="#_1-2-4-babel-config-ts"><span>1.2.4 babel.config.ts</span></a></h4><p>babel.config.ts</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span>  <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token string">&quot;@babel/preset-env&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">&#39;@babel/preset-typescript&#39;</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-2-5-jest-config-ts" tabindex="-1"><a class="header-anchor" href="#_1-2-5-jest-config-ts"><span>1.2.5 jest.config.ts</span></a></h4><ul><li><a href="https://www.jestjs.cn/docs/configuration" target="_blank" rel="noopener noreferrer">configuration</a></li></ul><p>jest.config.ts</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> type <span class="token punctuation">{</span> Config <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@jest/types&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token literal-property property">config</span><span class="token operator">:</span> Config<span class="token punctuation">.</span>InitialOptions <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">   <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">&quot;^.+\\\\.js$&quot;</span><span class="token operator">:</span> <span class="token string">&quot;babel-jest&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">&quot;^.+\\\\.ts$&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ts-jest&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">testMatch</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;&lt;rootDir&gt;/src/**/*.spec.(t|j)s&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">testEnvironment</span><span class="token operator">:</span> <span class="token string">&quot;jsdom&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">transformIgnorePatterns</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;/node_modules/&quot;</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> config<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3-测试组件" tabindex="-1"><a class="header-anchor" href="#_1-3-测试组件"><span>1.3 测试组件</span></a></h3><h4 id="_1-3-1-todoapp-spec-ts" tabindex="-1"><a class="header-anchor" href="#_1-3-1-todoapp-spec-ts"><span>1.3.1 TodoApp.spec.ts</span></a></h4><ul><li><a href="https://www.jestjs.cn/docs/expect" target="_blank" rel="noopener noreferrer">expect</a></li></ul><p>src\\components\\TodoApp.spec.ts</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> mount <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vue/test-utils&#39;</span></span>
<span class="line"><span class="token keyword">import</span> TodoApp <span class="token keyword">from</span> <span class="token string">&#39;./TodoApp.vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;render todoApp&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">   <span class="token keyword">const</span> wrapper <span class="token operator">=</span> <span class="token function">mount</span><span class="token punctuation">(</span>TodoApp<span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">const</span> addTodo <span class="token operator">=</span> wrapper<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;[data-test=&quot;addTodo&quot;]&#39;</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token function">expect</span><span class="token punctuation">(</span>addTodo<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token string">&#39;addTodo&#39;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-3-1-jest-config-ts" tabindex="-1"><a class="header-anchor" href="#_1-3-1-jest-config-ts"><span>1.3.1 jest.config.ts</span></a></h4><p>jest.config.ts</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import type { Config } from &#39;@jest/types&#39;;</span>
<span class="line">const config: Config.InitialOptions = {</span>
<span class="line">   transform: {</span>
<span class="line">    &quot;^.+\\\\.js$&quot;: &quot;babel-jest&quot;,</span>
<span class="line">    &quot;^.+\\\\.ts$&quot;: &quot;ts-jest&quot;,</span>
<span class="line">+   &quot;^.+\\\\.vue$&quot;: &quot;@vue/vue3-jest&quot;,</span>
<span class="line">+   &quot;.+\\\\.(css|scss|png|jpg|svg)$&quot;: &quot;jest-transform-stub&quot;</span>
<span class="line">  },</span>
<span class="line">+ moduleNameMapper: {</span>
<span class="line">+   &quot;^@/(.*)$&quot;: &quot;&lt;rootDir&gt;/src/$1&quot;</span>
<span class="line">+ },</span>
<span class="line">  testMatch: [&quot;&lt;rootDir&gt;/src/**/*.spec.(t|j)s&quot;],</span>
<span class="line">  testEnvironment: &quot;jsdom&quot;,</span>
<span class="line">  transformIgnorePatterns: [&quot;/node_modules/&quot;]</span>
<span class="line">};</span>
<span class="line">export default config;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-4-代码覆盖率" tabindex="-1"><a class="header-anchor" href="#_1-4-代码覆盖率"><span>1.4 代码覆盖率</span></a></h3><h4 id="_1-4-1-package-json" tabindex="-1"><a class="header-anchor" href="#_1-4-1-package-json"><span>1.4.1 package.json</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">{</span>
<span class="line">    &quot;scripts&quot;: {</span>
<span class="line">    &quot;dev&quot;: &quot;vite&quot;,</span>
<span class="line">    &quot;build&quot;: &quot;vite build&quot;,</span>
<span class="line">    &quot;test&quot;: &quot;jest&quot;,</span>
<span class="line">+   &quot;test:coverage&quot;: &quot;jest --coverage&quot;</span>
<span class="line">  },</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-4-2-jest-config-ts" tabindex="-1"><a class="header-anchor" href="#_1-4-2-jest-config-ts"><span>1.4.2 jest.config.ts</span></a></h4><p>jest.config.ts</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import type { Config } from &#39;@jest/types&#39;;</span>
<span class="line">const config: Config.InitialOptions = {</span>
<span class="line">  transform: {</span>
<span class="line">    &quot;^.+\\\\.js$&quot;: &quot;babel-jest&quot;,</span>
<span class="line">    &quot;^.+\\\\.ts$&quot;: &quot;ts-jest&quot;,</span>
<span class="line">    &quot;^.+\\\\.vue$&quot;: &quot;@vue/vue3-jest&quot;,</span>
<span class="line">    &quot;.+\\\\.(css|scss|png|jpg|svg)$&quot;: &quot;jest-transform-stub&quot;</span>
<span class="line">  },</span>
<span class="line">  moduleNameMapper: {</span>
<span class="line">    &quot;^@/(.*)$&quot;: &quot;&lt;rootDir&gt;/src/$1&quot;</span>
<span class="line">  },</span>
<span class="line">  testMatch: [&quot;&lt;rootDir&gt;/src/**/*.spec.(t|j)s&quot;],</span>
<span class="line">  testEnvironment: &quot;jsdom&quot;,</span>
<span class="line">+ transformIgnorePatterns: [&quot;/node_modules/&quot;],</span>
<span class="line">+ coverageDirectory: &quot;coverage&quot;,</span>
<span class="line">+ coverageProvider: &quot;v8&quot;,</span>
<span class="line">+ collectCoverageFrom: [&quot;src/**/*.{js,vue}&quot;, &quot;!src/main.ts&quot;, &quot;!src/App.vue&quot;],</span>
<span class="line">+ coverageThreshold: {</span>
<span class="line">+   global: {</span>
<span class="line">+     branches: 40,</span>
<span class="line">+     functions: 80,</span>
<span class="line">+     lines: 90,</span>
<span class="line">+     statements: 80</span>
<span class="line">+   }</span>
<span class="line">+ }</span>
<span class="line">};</span>
<span class="line">export default config;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-5-e2e测试" tabindex="-1"><a class="header-anchor" href="#_1-5-e2e测试"><span>1.5 E2E测试</span></a></h3><ul><li><a href="https://docs.cypress.io/" target="_blank" rel="noopener noreferrer">cypress</a></li><li>[Clashing-types-with-Jest](https://docs.cypress.io/guides/tooling/typescript-support</li><li><a href="https://www.npmjs.com/package/patch-package" target="_blank" rel="noopener noreferrer">patch-package</a></li></ul><h4 id="_1-5-1-安装" tabindex="-1"><a class="header-anchor" href="#_1-5-1-安装"><span>1.5.1 安装</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">pnpm install cypress -D</span>
<span class="line">pnpm install @cypress/vue@next @cypress/vite-dev-server -D</span>
<span class="line">echo done</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-5-2-todoapp-vue" tabindex="-1"><a class="header-anchor" href="#_1-5-2-todoapp-vue"><span>1.5.2 TodoApp.vue</span></a></h4><p>src\\components\\TodoApp.vue</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;template&gt;</span>
<span class="line">+ &lt;input data-test=&quot;newTodo&quot; v-model=&quot;newTodo&quot; /&gt;</span>
<span class="line">+ &lt;button data-test=&quot;addTodo&quot; @click=&quot;addTodo&quot;&gt;addTodo&lt;/button&gt;</span>
<span class="line">+ &lt;ul class=&quot;todo-list&quot;&gt;</span>
<span class="line">+   &lt;li v-for=&quot;todo in todos&quot;&gt;{{ todo.text }}&lt;/li&gt;</span>
<span class="line">+ &lt;/ul&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line">&lt;script setup lang=&quot;ts&quot;&gt;</span>
<span class="line">+import { ref, reactive } from &#39;vue&#39;;</span>
<span class="line">+interface Todo {</span>
<span class="line">+  text: string;</span>
<span class="line">+}</span>
<span class="line">+const newTodo = ref(&#39;&#39;);</span>
<span class="line">+const todos = reactive&lt;Array&lt;Todo&gt;&gt;([]);</span>
<span class="line">+const addTodo = () =&gt; {</span>
<span class="line">+  todos.push({ text: newTodo.value });</span>
<span class="line">+  newTodo.value = &#39;&#39;;</span>
<span class="line">+}</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-5-3-todoapp-cy-ts" tabindex="-1"><a class="header-anchor" href="#_1-5-3-todoapp-cy-ts"><span>1.5.3 TodoApp.cy.ts</span></a></h4><p>src\\components\\TodoApp.cy.ts</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> mount <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@cypress/vue&#39;</span></span>
<span class="line"><span class="token keyword">import</span> TodoApp <span class="token keyword">from</span> <span class="token string">&#39;./TodoApp.vue&#39;</span></span>
<span class="line"><span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">&#39;TodoApp&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">&#39;render TodoApp&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">mount</span><span class="token punctuation">(</span>TodoApp<span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">const</span> text <span class="token operator">=</span> <span class="token string">&#39;play&#39;</span><span class="token punctuation">;</span></span>
<span class="line">    cy<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;[data-test=&quot;newTodo&quot;]&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">type</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span></span>
<span class="line">    cy<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;[data-test=&quot;addTodo&quot;]&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    cy<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;.todo-list li&#39;</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token punctuation">.</span><span class="token function">should</span><span class="token punctuation">(</span><span class="token string">&#39;have.length&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token punctuation">.</span><span class="token function">last</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token punctuation">.</span><span class="token function">should</span><span class="token punctuation">(</span><span class="token string">&#39;have.text&#39;</span><span class="token punctuation">,</span> text<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-5-4-todoapp-spec-js" tabindex="-1"><a class="header-anchor" href="#_1-5-4-todoapp-spec-js"><span>1.5.4 todoApp.spec.js</span></a></h4><ul><li><a href="https://docs.cypress.io/api/commands/get" target="_blank" rel="noopener noreferrer">get</a></li></ul><p>cypress\\integration\\1-getting-started\\todoApp.spec.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token comment">/// &lt;reference types=&quot;cypress&quot; /&gt;</span></span>
<span class="line"><span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">&#39;TodoApp&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    cy<span class="token punctuation">.</span><span class="token function">visit</span><span class="token punctuation">(</span><span class="token string">&#39;http://127.0.0.1:3000&#39;</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">&#39;can add new todo items&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> text <span class="token operator">=</span> <span class="token string">&#39;play&#39;</span><span class="token punctuation">;</span></span>
<span class="line">    cy<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;[data-test=&quot;newTodo&quot;]&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">type</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span></span>
<span class="line">    cy<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;[data-test=&quot;addTodo&quot;]&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    cy<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;.todo-list li&#39;</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token punctuation">.</span><span class="token function">should</span><span class="token punctuation">(</span><span class="token string">&#39;have.length&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token punctuation">.</span><span class="token function">last</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token punctuation">.</span><span class="token function">should</span><span class="token punctuation">(</span><span class="token string">&#39;have.text&#39;</span><span class="token punctuation">,</span> text<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-5-5-plugins-index-js" tabindex="-1"><a class="header-anchor" href="#_1-5-5-plugins-index-js"><span>1.5.5 plugins\\index.js</span></a></h4><ul><li>[dev-server:start](https://www.cypress.io/blog/2021/04/06/getting-start-with-cypress-component-testing-vue-2-3/</li></ul><p>cypress\\plugins\\index.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span> startDevServer <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@cypress/vite-dev-server&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">on<span class="token punctuation">,</span> config</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;dev-server:start&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">startDevServer</span><span class="token punctuation">(</span><span class="token punctuation">{</span> options <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-5-6-cypress-json" tabindex="-1"><a class="header-anchor" href="#_1-5-6-cypress-json"><span>1.5.6 cypress.json</span></a></h4><p>cypress.json</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">&quot;component&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">&quot;testFiles&quot;</span><span class="token operator">:</span> <span class="token string">&quot;**/*.cy.{js,ts,jsx,tsx}&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">&quot;componentFolder&quot;</span><span class="token operator">:</span> <span class="token string">&quot;src&quot;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-5-7-package-json" tabindex="-1"><a class="header-anchor" href="#_1-5-7-package-json"><span>1.5.7 package.json</span></a></h4><p>package.json</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">{</span>
<span class="line">  &quot;scripts&quot;: {</span>
<span class="line">    &quot;dev&quot;: &quot;vite&quot;,</span>
<span class="line">    &quot;build&quot;: &quot;vite build&quot;,</span>
<span class="line">    &quot;test&quot;: &quot;jest&quot;,</span>
<span class="line">    &quot;test:coverage&quot;: &quot;jest --coverage&quot;,</span>
<span class="line">+   &quot;test:e2e&quot;: &quot;cypress open&quot;,</span>
<span class="line">+   &quot;test:ct&quot;: &quot;cypress open-ct&quot;</span>
<span class="line">  },</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-5-8-index-d-ts" tabindex="-1"><a class="header-anchor" href="#_1-5-8-index-d-ts"><span>1.5.8 index.d.ts</span></a></h4><p>node_modules\\cypress\\types\\index.d.ts</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token comment">// &lt;reference path=&quot;./cypress-expect.d.ts&quot; /&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="_1-5-9-cypress-expect-d-ts" tabindex="-1"><a class="header-anchor" href="#_1-5-9-cypress-expect-d-ts"><span>1.5.9 cypress-expect.d.ts</span></a></h4><p>node_modules\\cypress\\types\\cypress-expect.d.ts</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token comment">//declare const expect: Chai.ExpectStatic</span></span>
<span class="line"><span class="token comment">//declare const assert: Chai.AssertStatic</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-ssr服务器端渲染" tabindex="-1"><a class="header-anchor" href="#_2-ssr服务器端渲染"><span>2. SSR服务器端渲染</span></a></h2><h3 id="_2-1-搭建项目" tabindex="-1"><a class="header-anchor" href="#_2-1-搭建项目"><span>2.1 搭建项目</span></a></h3><h4 id="_2-1-1-安装" tabindex="-1"><a class="header-anchor" href="#_2-1-1-安装"><span>2.1.1 安装</span></a></h4><ul><li><p><a href="https://www.typescriptlang.org/docs/handbook/project-references.html" target="_blank" rel="noopener noreferrer">project-references</a></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">pnpm install react react-dom  react-router-dom</span>
<span class="line">pnpm install @types/react @types/react-dom @vitejs/plugin-react typescript vite @types/node fs-extra @types/fs-extra -D</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h4 id="_2-1-2-tsconfig-node-json" tabindex="-1"><a class="header-anchor" href="#_2-1-2-tsconfig-node-json"><span>2.1.2 tsconfig.node.json</span></a></h4><p>tsconfig.node.json</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">&quot;composite&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">&quot;module&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esnext&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">&quot;moduleResolution&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node&quot;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">&quot;include&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;vite.config.ts&quot;</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-1-3-vite-config-ts" tabindex="-1"><a class="header-anchor" href="#_2-1-3-vite-config-ts"><span>2.1.3 vite.config.ts</span></a></h4><p>vite.config.ts</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite&#39;</span></span>
<span class="line"><span class="token keyword">import</span> react <span class="token keyword">from</span> <span class="token string">&#39;@vitejs/plugin-react&#39;</span></span>
<span class="line"><span class="token comment">// https://vitejs.dev/config/</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">react</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-1-4-tsconfig-json" tabindex="-1"><a class="header-anchor" href="#_2-1-4-tsconfig-json"><span>2.1.4 tsconfig.json</span></a></h4><p>tsconfig.json</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ESNext&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">&quot;useDefineForClassFields&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">&quot;lib&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;DOM&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;DOM.Iterable&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;ESNext&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">&quot;allowJs&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">&quot;skipLibCheck&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">&quot;esModuleInterop&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">&quot;allowSyntheticDefaultImports&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">&quot;strict&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">&quot;forceConsistentCasingInFileNames&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">&quot;module&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ESNext&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">&quot;moduleResolution&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Node&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">&quot;resolveJsonModule&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">&quot;isolatedModules&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">&quot;noEmit&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">&quot;noEmitOnError&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">&quot;jsx&quot;</span><span class="token operator">:</span> <span class="token string">&quot;react-jsx&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">&quot;types&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;vite/client&quot;</span><span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">&quot;include&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;src&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">&quot;references&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token string-property property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./tsconfig.node.json&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-1-5-vite-env-d-ts" tabindex="-1"><a class="header-anchor" href="#_2-1-5-vite-env-d-ts"><span>2.1.5 vite-env.d.ts</span></a></h4><p>src\\vite-env.d.ts</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token comment">/// &lt;reference types=&quot;vite/client&quot; /&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="_2-1-6-index-html" tabindex="-1"><a class="header-anchor" href="#_2-1-6-index-html"><span>2.1.6 index.html</span></a></h4><p>index.html</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token constant">DOCTYPE</span> html<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span>html lang<span class="token operator">=</span><span class="token string">&quot;en&quot;</span><span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span>head<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span>meta charset<span class="token operator">=</span><span class="token string">&quot;UTF-8&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span>meta name<span class="token operator">=</span><span class="token string">&quot;viewport&quot;</span> content<span class="token operator">=</span><span class="token string">&quot;width=device-width, initial-scale=1.0&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span>title<span class="token operator">&gt;</span>Vite App<span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span>body<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">&quot;root&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span>script type<span class="token operator">=</span><span class="token string">&quot;module&quot;</span> src<span class="token operator">=</span><span class="token string">&quot;/src/main.tsx&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-1-7-src-main-tsx" tabindex="-1"><a class="header-anchor" href="#_2-1-7-src-main-tsx"><span>2.1.7 src\\main.tsx</span></a></h4><p>src\\main.tsx</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span></span>
<span class="line"><span class="token keyword">import</span> ReactDOM <span class="token keyword">from</span> <span class="token string">&#39;react-dom&#39;</span></span>
<span class="line"></span>
<span class="line">ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span></span>
<span class="line">  <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span>hello<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span><span class="token punctuation">,</span></span>
<span class="line">  document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-1-8-gitignore" tabindex="-1"><a class="header-anchor" href="#_2-1-8-gitignore"><span>2.1.8 .gitignore</span></a></h4><p>.gitignore</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line"> </span>
<span class="line">logs</span>
<span class="line">*.log</span>
<span class="line">npm-debug.log*</span>
<span class="line">yarn-debug.log*</span>
<span class="line">yarn-error.log*</span>
<span class="line">pnpm-debug.log*</span>
<span class="line">lerna-debug.log*</span>
<span class="line"></span>
<span class="line">node_modules</span>
<span class="line">dist</span>
<span class="line">dist-ssr</span>
<span class="line">*.local</span>
<span class="line"></span>
<span class="line"> </span>
<span class="line">.vscode/*</span>
<span class="line">!.vscode/extensions.json</span>
<span class="line">.idea</span>
<span class="line">.DS_Store</span>
<span class="line">*.suo</span>
<span class="line">*.ntvs*</span>
<span class="line">*.njsproj</span>
<span class="line">*.sln</span>
<span class="line">*.sw?</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-1-9-package-json" tabindex="-1"><a class="header-anchor" href="#_2-1-9-package-json"><span>2.1.9 package.json</span></a></h4><p>package.json</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token punctuation">{</span></span>
<span class="line">   <span class="token string-property property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">&quot;dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vite&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tsc &amp;&amp; vite build&quot;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-声明式路由" tabindex="-1"><a class="header-anchor" href="#_2-2-声明式路由"><span>2.2.声明式路由</span></a></h3><h4 id="_2-2-1-src-main-tsx" tabindex="-1"><a class="header-anchor" href="#_2-2-1-src-main-tsx"><span>2.2.1 src\\main.tsx</span></a></h4><p>src\\main.tsx</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React from &#39;react&#39;</span>
<span class="line">import ReactDOM from &#39;react-dom&#39;</span>
<span class="line">+import { BrowserRouter, Routes, Route,Link } from &#39;react-router-dom&#39;;</span>
<span class="line">+import Home from &#39;./routes/Home&#39;;</span>
<span class="line">+import User from &#39;./routes/User&#39;;</span>
<span class="line">+import Profile from &#39;./routes/Profile&#39;;</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">ReactDOM.render(</span>
<span class="line">+  &lt;BrowserRouter&gt;</span>
<span class="line">+    &lt;Link to=&quot;/&quot;&gt;首页&lt;/Link&gt;</span>
<span class="line">+    &lt;Link to=&quot;/user&quot;&gt;用户管理&lt;/Link&gt;</span>
<span class="line">+    &lt;Link to=&quot;/profile&quot;&gt;个人中心&lt;/Link&gt;</span>
<span class="line">+    &lt;Routes&gt;</span>
<span class="line">+      &lt;Route path=&quot;/&quot; element={&lt;Home /&gt;} /&gt;</span>
<span class="line">+      &lt;Route path=&quot;/user&quot; element={&lt;User /&gt;} /&gt;</span>
<span class="line">+      &lt;Route path=&quot;/profile&quot; element={&lt;Profile /&gt;} /&gt;</span>
<span class="line">+    &lt;/Routes&gt;</span>
<span class="line">+  &lt;/BrowserRouter&gt;,</span>
<span class="line">  document.getElementById(&#39;root&#39;)</span>
<span class="line">)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-2-2-home-tsx" tabindex="-1"><a class="header-anchor" href="#_2-2-2-home-tsx"><span>2.2.2 Home.tsx</span></a></h4><p>src\\routes\\Home.tsx</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>Home<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-2-3-user-tsx" tabindex="-1"><a class="header-anchor" href="#_2-2-3-user-tsx"><span>2.2.3 User.tsx</span></a></h4><p>src\\routes\\User.tsx</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>User<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-2-3-profile-tsx" tabindex="-1"><a class="header-anchor" href="#_2-2-3-profile-tsx"><span>2.2.3 Profile.tsx</span></a></h4><p>src\\routes\\Profile.tsx</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>Profile<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-配置式路由" tabindex="-1"><a class="header-anchor" href="#_2-3-配置式路由"><span>2.3.配置式路由</span></a></h3><h4 id="_2-3-1-src-main-tsx" tabindex="-1"><a class="header-anchor" href="#_2-3-1-src-main-tsx"><span>2.3.1 src\\main.tsx</span></a></h4><p>src\\main.tsx</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React from &#39;react&#39;</span>
<span class="line">import ReactDOM from &#39;react-dom&#39;</span>
<span class="line">import { BrowserRouter} from &#39;react-router-dom&#39;;</span>
<span class="line">+import App from &#39;./App&#39;;</span>
<span class="line">ReactDOM.render(</span>
<span class="line">  &lt;BrowserRouter&gt;</span>
<span class="line">+   &lt;App/&gt;</span>
<span class="line">  &lt;/BrowserRouter&gt;,</span>
<span class="line">  document.getElementById(&#39;root&#39;)</span>
<span class="line">)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-3-2-src-app-tsx" tabindex="-1"><a class="header-anchor" href="#_2-3-2-src-app-tsx"><span>2.3.2 src\\App.tsx</span></a></h4><p>src\\App.tsx</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span>Link<span class="token punctuation">,</span> useRoutes <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-router-dom&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> routesConfig <span class="token keyword">from</span> <span class="token string">&#39;./routeConfig&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">&gt;</span></span>
<span class="line">      <span class="token operator">&lt;</span>Link to<span class="token operator">=</span><span class="token string">&quot;/&quot;</span><span class="token operator">&gt;</span>首页<span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">&gt;</span></span>
<span class="line">      <span class="token operator">&lt;</span>Link to<span class="token operator">=</span><span class="token string">&quot;/user&quot;</span><span class="token operator">&gt;</span>用户管理<span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">&gt;</span></span>
<span class="line">      <span class="token operator">&lt;</span>Link to<span class="token operator">=</span><span class="token string">&quot;/profile&quot;</span><span class="token operator">&gt;</span>个人中心<span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">&gt;</span></span>
<span class="line">      <span class="token punctuation">{</span><span class="token function">useRoutes</span><span class="token punctuation">(</span>routesConfig<span class="token punctuation">)</span><span class="token punctuation">}</span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line">  <span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-3-3-routeconfig-tsx" tabindex="-1"><a class="header-anchor" href="#_2-3-3-routeconfig-tsx"><span>2.3.3 routeConfig.tsx</span></a></h4><p>src\\routeConfig.tsx</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">const</span> routesModules <span class="token operator">=</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span><span class="token function">globEager</span><span class="token punctuation">(</span><span class="token string">&quot;./routes/*.tsx&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> routesConfig <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>routesModules<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">url</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> name <span class="token operator">=</span> url<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.\\/routes\\/(.+)\\.tsx$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token operator">!</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">const</span> Component <span class="token operator">=</span> routesModules<span class="token punctuation">[</span>url<span class="token punctuation">]</span><span class="token punctuation">.</span>default<span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">path</span><span class="token operator">:</span> name <span class="token operator">===</span> <span class="token string">&#39;home&#39;</span> <span class="token operator">?</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">/</span><span class="token template-punctuation string">\`</span></span> <span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">/</span><span class="token template-punctuation string">\`</span></span> <span class="token operator">+</span> name<span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">element</span><span class="token operator">:</span> <span class="token operator">&lt;</span>Component <span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> routesConfig<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-ssr服务器端渲染" tabindex="-1"><a class="header-anchor" href="#_2-4-ssr服务器端渲染"><span>2.4.SSR服务器端渲染</span></a></h3><h4 id="_2-4-1-安装" tabindex="-1"><a class="header-anchor" href="#_2-4-1-安装"><span>2.4.1 安装</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">pnpm install express  morgan</span>
<span class="line">pnpm install @types/node @types/express @types/morgan cross-env -D</span>
<span class="line">pnpm install ts-node-dev -g </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-4-2-tsconfig-json" tabindex="-1"><a class="header-anchor" href="#_2-4-2-tsconfig-json"><span>2.4.2 tsconfig.json</span></a></h4><p>tsconfig.json</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">{</span>
<span class="line">  &quot;compilerOptions&quot;: {</span>
<span class="line">    &quot;target&quot;: &quot;ESNext&quot;,</span>
<span class="line">    &quot;useDefineForClassFields&quot;: true,</span>
<span class="line">    &quot;lib&quot;: [&quot;DOM&quot;, &quot;DOM.Iterable&quot;, &quot;ESNext&quot;],</span>
<span class="line">    &quot;allowJs&quot;: false,</span>
<span class="line">    &quot;skipLibCheck&quot;: false,</span>
<span class="line">    &quot;esModuleInterop&quot;: true,</span>
<span class="line">    &quot;allowSyntheticDefaultImports&quot;: true,</span>
<span class="line">    &quot;strict&quot;: true,</span>
<span class="line">    &quot;forceConsistentCasingInFileNames&quot;: true,</span>
<span class="line">    &quot;module&quot;: &quot;ESNext&quot;,</span>
<span class="line">    &quot;moduleResolution&quot;: &quot;Node&quot;,</span>
<span class="line">    &quot;resolveJsonModule&quot;: true,</span>
<span class="line">    &quot;isolatedModules&quot;: true,</span>
<span class="line">    &quot;noEmit&quot;: true,</span>
<span class="line">    &quot;noEmitOnError&quot;: true,</span>
<span class="line">    &quot;jsx&quot;: &quot;react-jsx&quot;,</span>
<span class="line">    &quot;types&quot;: [&quot;vite/client&quot;]</span>
<span class="line">  },</span>
<span class="line">+  &quot;ts-node&quot;: {</span>
<span class="line">+   &quot;compilerOptions&quot;: {</span>
<span class="line">+     &quot;module&quot;: &quot;commonjs&quot;,</span>
<span class="line">+     &quot;esModuleInterop&quot;:true</span>
<span class="line">+   }</span>
<span class="line">+ },</span>
<span class="line">  &quot;include&quot;: [&quot;src&quot;],</span>
<span class="line">  &quot;references&quot;: [{ &quot;path&quot;: &quot;./tsconfig.node.json&quot; }]</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-4-3-tsconfig-node-json" tabindex="-1"><a class="header-anchor" href="#_2-4-3-tsconfig-node-json"><span>2.4.3 tsconfig.node.json</span></a></h4><p>tsconfig.node.json</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">{</span>
<span class="line">  &quot;compilerOptions&quot;: {</span>
<span class="line">    &quot;composite&quot;: true,</span>
<span class="line">    &quot;module&quot;: &quot;esnext&quot;,</span>
<span class="line">    &quot;moduleResolution&quot;: &quot;node&quot;，</span>
<span class="line">    &quot;esModuleInterop&quot;: true</span>
<span class="line">  }, </span>
<span class="line">+  &quot;include&quot;: [&quot;vite.config.ts&quot;,&quot;ssr-entry.ts&quot;]</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-4-4-package-json" tabindex="-1"><a class="header-anchor" href="#_2-4-4-package-json"><span>2.4.4 package.json</span></a></h4><p>package.json</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">{</span>
<span class="line">  &quot;scripts&quot;: {</span>
<span class="line">    &quot;dev&quot;: &quot;vite&quot;,</span>
<span class="line">    &quot;build&quot;: &quot;tsc &amp;&amp; vite build&quot;,</span>
<span class="line">+   &quot;ssr&quot;: &quot;ts-node-dev --respawn ssr.ts&quot;</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-4-5-ssr-entry-ts" tabindex="-1"><a class="header-anchor" href="#_2-4-5-ssr-entry-ts"><span>2.4.5 ssr-entry.ts</span></a></h4><p>ssr-entry.ts</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> express<span class="token punctuation">,</span> <span class="token punctuation">{</span> Express <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;express&quot;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createServer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite&#39;</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token literal-property property">app</span><span class="token operator">:</span> Express <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">;</span> <span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> vite <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">createServer</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">server</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">middlewareMode</span><span class="token operator">:</span><span class="token string">&#39;html&#39;</span></span>
<span class="line">   <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>vite<span class="token punctuation">.</span>middlewares<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">8000</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;ssr server started on 8000&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-5-开发环境ssr" tabindex="-1"><a class="header-anchor" href="#_2-5-开发环境ssr"><span>2.5.开发环境SSR</span></a></h3><h4 id="_2-5-1-ssr-entry-ts" tabindex="-1"><a class="header-anchor" href="#_2-5-1-ssr-entry-ts"><span>2.5.1 ssr-entry.ts</span></a></h4><p>ssr-entry.ts</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import express, { Express,Request,Response } from &quot;express&quot;;</span>
<span class="line">+import logger from &#39;morgan&#39;;</span>
<span class="line">import { createServer } from &#39;vite&#39;</span>
<span class="line">+import fs from &#39;fs-extra&#39;;</span>
<span class="line">+import path from &#39;path&#39;;</span>
<span class="line">const app: Express = express();</span>
<span class="line"></span>
<span class="line">; (async function () {</span>
<span class="line">  const vite = await createServer({</span>
<span class="line">    server: {</span>
<span class="line">+      middlewareMode: &#39;ssr&#39;</span>
<span class="line">    }</span>
<span class="line">  })</span>
<span class="line">  app.use(vite.middlewares);</span>
<span class="line">+ app.use(logger(&#39;dev&#39;));</span>
<span class="line">+ app.get(&#39;*&#39;, async (req:Request, res:Response) =&gt; {</span>
<span class="line">+   const indexPath = path.join(__dirname, &#39;index.html&#39;);</span>
<span class="line">+   let originHtml = await fs.readFile(indexPath, &#39;utf8&#39;);</span>
<span class="line">+   originHtml = await vite.transformIndexHtml(req.url, originHtml);</span>
<span class="line">+   const { render } = await vite.ssrLoadModule(&#39;/src/server-entry.tsx&#39;);</span>
<span class="line">+   const renderHtml = await render(req.url);</span>
<span class="line">+   originHtml = originHtml.replace(&#39;&lt;!--placeholder--&gt;&#39;, renderHtml);</span>
<span class="line">+   res.set(&#39;Content-Type&#39;, &quot;text/html;charset=utf-8&quot;);</span>
<span class="line">+   res.send(originHtml);</span>
<span class="line">+ });</span>
<span class="line">  app.listen(8000, () =&gt; console.log(&#39;ssr server started on 8000&#39;))</span>
<span class="line">})();</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-5-2-server-entry-tsx" tabindex="-1"><a class="header-anchor" href="#_2-5-2-server-entry-tsx"><span>2.5.2 server-entry.tsx</span></a></h4><p>src\\server-entry.tsx</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span></span>
<span class="line"><span class="token keyword">import</span> ReactDOMServer <span class="token keyword">from</span> <span class="token string">&#39;react-dom/server&#39;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> StaticRouter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-router-dom/server&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">url</span><span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">context</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> ReactDOMServer<span class="token punctuation">.</span><span class="token function">renderToString</span><span class="token punctuation">(</span></span>
<span class="line">    <span class="token operator">&lt;</span>StaticRouter location<span class="token operator">=</span><span class="token punctuation">{</span>url<span class="token punctuation">}</span><span class="token operator">&gt;</span></span>
<span class="line">      <span class="token operator">&lt;</span>App <span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">/</span>StaticRouter<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-5-3-client-entry-tsx" tabindex="-1"><a class="header-anchor" href="#_2-5-3-client-entry-tsx"><span>2.5.3 client-entry.tsx</span></a></h4><p>src\\client-entry.tsx</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React from &#39;react&#39;</span>
<span class="line">import ReactDOM from &#39;react-dom&#39;</span>
<span class="line">import { BrowserRouter } from &#39;react-router-dom&#39;;</span>
<span class="line">import App from &#39;./App&#39;;</span>
<span class="line">+ReactDOM.hydrate(</span>
<span class="line">  &lt;BrowserRouter&gt;</span>
<span class="line">    &lt;App /&gt;</span>
<span class="line">  &lt;/BrowserRouter&gt;,</span>
<span class="line">  document.getElementById(&#39;root&#39;)</span>
<span class="line">)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-5-4-index-html" tabindex="-1"><a class="header-anchor" href="#_2-5-4-index-html"><span>2.5.4 index.html</span></a></h4><p>index.html</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;!DOCTYPE html&gt;</span>
<span class="line">&lt;html lang=&quot;en&quot;&gt;</span>
<span class="line"></span>
<span class="line">&lt;head&gt;</span>
<span class="line">  &lt;meta charset=&quot;UTF-8&quot; /&gt;</span>
<span class="line">  &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot; /&gt;</span>
<span class="line">  &lt;title&gt;Vite App&lt;/title&gt;</span>
<span class="line">&lt;/head&gt;</span>
<span class="line"></span>
<span class="line">&lt;body&gt;</span>
<span class="line">  &lt;div id=&quot;root&quot;&gt;</span>
<span class="line">+    &lt;!--placeholder--&gt;</span>
<span class="line">  &lt;/div&gt;</span>
<span class="line">+ &lt;script type=&quot;module&quot; src=&quot;/src/client-entry.tsx&quot;&gt;&lt;/script&gt;</span>
<span class="line">&lt;/body&gt;</span>
<span class="line"></span>
<span class="line">&lt;/html&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-6-生产环境" tabindex="-1"><a class="header-anchor" href="#_2-6-生产环境"><span>2.6.生产环境</span></a></h3><h4 id="_2-6-2-package-json" tabindex="-1"><a class="header-anchor" href="#_2-6-2-package-json"><span>2.6.2 package.json</span></a></h4><p>package.json</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">{</span>
<span class="line">  &quot;scripts&quot;: {</span>
<span class="line">    &quot;dev&quot;: &quot;vite&quot;,</span>
<span class="line">    &quot;build&quot;: &quot;tsc &amp;&amp; vite build&quot;,</span>
<span class="line">    &quot;dev:ssr&quot;: &quot;ts-node-dev --respawn ssr-entry.ts&quot;,</span>
<span class="line">+    &quot;build:ssr&quot;: &quot;cross-env NODE_ENV=production &amp;&amp; npm run build:client &amp;&amp; npm run build:server &amp;&amp; npm run build:ssr-entry&quot;,</span>
<span class="line">+   &quot;build:client&quot;: &quot;tsc &amp;&amp; vite build  --outDir dist/client&quot;,</span>
<span class="line">+   &quot;build:server&quot;: &quot;tsc &amp;&amp; vite build --outDir dist/server --ssr src/server-entry.tsx&quot;,</span>
<span class="line">+   &quot;build:ssr-entry&quot;: &quot;tsc --esModuleInterop true --outDir dist ssr-entry.ts&quot;,</span>
<span class="line">+   &quot;start:ssr&quot;: &quot;pm2 start ./dist/ssr-entry.js&quot;</span>
<span class="line">  },</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-6-3-ssr-entry-ts" tabindex="-1"><a class="header-anchor" href="#_2-6-3-ssr-entry-ts"><span>2.6.3 ssr-entry.ts</span></a></h4><p>ssr-entry.ts</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import express, { Express,Request,Response } from &quot;express&quot;;</span>
<span class="line">import logger from &#39;morgan&#39;;</span>
<span class="line">import { createServer } from &#39;vite&#39;</span>
<span class="line">import fs from &#39;fs-extra&#39;;</span>
<span class="line">import path from &#39;path&#39;;</span>
<span class="line">const app: Express = express();</span>
<span class="line">+const NODE_ENV = process.env.NODE_ENV;</span>
<span class="line">; (async function () {</span>
<span class="line">  const indexPath = path.join(__dirname, &#39;client/index.html&#39;);</span>
<span class="line">  let originHtml = await fs.readFile(indexPath, &#39;utf8&#39;);</span>
<span class="line">+  if (NODE_ENV === &#39;development&#39;) {</span>
<span class="line">    const vite = await createServer({</span>
<span class="line">      server: {</span>
<span class="line">        middlewareMode: &#39;ssr&#39;</span>
<span class="line">      }</span>
<span class="line">    })</span>
<span class="line">    app.use(vite.middlewares);</span>
<span class="line">    app.use(logger(&#39;dev&#39;));</span>
<span class="line">    app.get(&#39;*&#39;, async (req:Request, res:Response) =&gt; {</span>
<span class="line">      originHtml = await vite.transformIndexHtml(req.url, originHtml);</span>
<span class="line">      const { render } = await vite.ssrLoadModule(&#39;/src/server-entry.tsx&#39;);</span>
<span class="line">      const renderHtml = await render(req.url);</span>
<span class="line">      originHtml = originHtml.replace(&#39;&lt;!--placeholder--&gt;&#39;, renderHtml);</span>
<span class="line">      res.set(&#39;Content-Type&#39;, &quot;text/html;charset=utf-8&quot;);</span>
<span class="line">      res.send(originHtml);</span>
<span class="line">    });</span>
<span class="line">+ } else {</span>
<span class="line">+   app.get(&#39;*.html&#39;, async (req: Request, res: Response) =&gt; {</span>
<span class="line">+     serve(req, res)</span>
<span class="line">+   })</span>
<span class="line">+   app.use(express.static(path.resolve(__dirname, &#39;client&#39;)));</span>
<span class="line">+   app.get(&#39;*&#39;, async (req: Request, res: Response) =&gt; {</span>
<span class="line">+     serve(req, res)</span>
<span class="line">+   })</span>
<span class="line">+ }</span>
<span class="line">+ async function serve(req: Request, res: Response) {</span>
<span class="line">+     const { render } = require(&#39;./server/server.js&#39;);</span>
<span class="line">+     const renderHtml = await render(req.url);</span>
<span class="line">+     originHtml = originHtml.replace(&#39;&lt;!--placeholder--&gt;&#39;, renderHtml);</span>
<span class="line">+     res.set(&#39;Content-Type&#39;, &quot;text/html;charset=utf-8&quot;);</span>
<span class="line">+     res.send(originHtml);</span>
<span class="line">+   }</span>
<span class="line">  app.listen(8000, () =&gt; console.log(&#39;ssr server started on 8000&#39;))</span>
<span class="line">})();</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-7-静态化" tabindex="-1"><a class="header-anchor" href="#_2-7-静态化"><span>2.7.静态化</span></a></h3><h4 id="_2-7-1-package-json" tabindex="-1"><a class="header-anchor" href="#_2-7-1-package-json"><span>2.7.1 package.json</span></a></h4><p>package.json</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">{</span>
<span class="line">  &quot;scripts&quot;: {</span>
<span class="line">    &quot;dev&quot;: &quot;vite&quot;,</span>
<span class="line">    &quot;build&quot;: &quot;tsc &amp;&amp; vite build&quot;,</span>
<span class="line">    &quot;dev:ssr&quot;: &quot;ts-node-dev --respawn ssr-entry.ts&quot;,</span>
<span class="line">    &quot;build:ssr&quot;: &quot;cross-env NODE_ENV=production &amp;&amp; npm run build:client &amp;&amp; npm run build:server &amp;&amp; npm run build:ssr-entry&quot;,</span>
<span class="line">    &quot;build:client&quot;: &quot;tsc &amp;&amp; vite build  --outDir dist/client&quot;,</span>
<span class="line">    &quot;build:server&quot;: &quot;tsc &amp;&amp; vite build --outDir dist/server --ssr src/server-entry.tsx&quot;,</span>
<span class="line">    &quot;build:ssr-entry&quot;: &quot;tsc --esModuleInterop true --outDir dist ssr-entry.ts&quot;,</span>
<span class="line">    &quot;start:ssr&quot;: &quot;pm2 start ./dist/ssr-entry.js&quot;,</span>
<span class="line">+   &quot;static&quot;: &quot;ts-node  static.ts&quot;</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-7-2-static-ts" tabindex="-1"><a class="header-anchor" href="#_2-7-2-static-ts"><span>2.7.2 static.ts</span></a></h4><p>static.ts</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> path <span class="token keyword">from</span> <span class="token string">&#39;path&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> fs <span class="token keyword">from</span> <span class="token string">&#39;fs-extra&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> indexPath <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;dist/client/index.html&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">let</span> originHtml <span class="token operator">=</span> <span class="token keyword">await</span> fs<span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span>indexPath<span class="token punctuation">,</span> <span class="token string">&#39;utf8&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">let</span> routes <span class="token operator">=</span> <span class="token keyword">await</span> fs<span class="token punctuation">.</span><span class="token function">readdir</span><span class="token punctuation">(</span><span class="token string">&#39;./src/routes&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  routes <span class="token operator">=</span> routes<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">route</span><span class="token operator">:</span>string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    route <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">basename</span><span class="token punctuation">(</span>route<span class="token punctuation">,</span> <span class="token string">&#39;.tsx&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> route<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token punctuation">{</span> render <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./dist/server/server-entry.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">const</span> staticDir <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;dist/static&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">await</span> fs<span class="token punctuation">.</span><span class="token function">ensureDir</span><span class="token punctuation">(</span>staticDir<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> route <span class="token keyword">of</span> routes<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> renderHtml <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token operator">+</span><span class="token punctuation">(</span>route<span class="token operator">===</span><span class="token string">&#39;home&#39;</span><span class="token operator">?</span><span class="token string">&#39;&#39;</span><span class="token operator">:</span>route<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">let</span> routeHtml <span class="token operator">=</span> originHtml<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">&#39;&lt;!--placeholder--&gt;&#39;</span><span class="token punctuation">,</span> renderHtml<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>route <span class="token operator">===</span> <span class="token string">&#39;home&#39;</span><span class="token punctuation">)</span> route <span class="token operator">=</span> <span class="token string">&#39;index&#39;</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">await</span> fs<span class="token punctuation">.</span><span class="token function">writeFile</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;dist/static&#39;</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>route<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.html</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span> routeHtml<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">await</span> fs<span class="token punctuation">.</span><span class="token function">copy</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;dist/client/assets&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;dist/static/assets&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-7-3-tsconfig-node-json" tabindex="-1"><a class="header-anchor" href="#_2-7-3-tsconfig-node-json"><span>2.7.3 tsconfig.node.json</span></a></h4><p>tsconfig.node.json</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">{</span>
<span class="line">  &quot;compilerOptions&quot;: {</span>
<span class="line">    &quot;composite&quot;: true,</span>
<span class="line">    &quot;module&quot;: &quot;esnext&quot;,</span>
<span class="line">    &quot;moduleResolution&quot;: &quot;node&quot;,</span>
<span class="line">    &quot;esModuleInterop&quot;: true</span>
<span class="line">  },</span>
<span class="line">+  &quot;include&quot;: [&quot;vite.config.ts&quot;,&quot;ssr-entry.ts&quot;,&quot;static.ts&quot;]</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-hmr" tabindex="-1"><a class="header-anchor" href="#_3-hmr"><span>3.HMR</span></a></h2><h3 id="_3-1-创建项目" tabindex="-1"><a class="header-anchor" href="#_3-1-创建项目"><span>3.1.创建项目</span></a></h3><h4 id="_3-1-1-安装" tabindex="-1"><a class="header-anchor" href="#_3-1-1-安装"><span>3.1.1 安装</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">pnpm install vite -D</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="_3-1-2-package-json" tabindex="-1"><a class="header-anchor" href="#_3-1-2-package-json"><span>3.1.2.package.json</span></a></h4><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">&quot;dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vite&quot;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-1-3-src-main-js" tabindex="-1"><a class="header-anchor" href="#_3-1-3-src-main-js"><span>3.1.3.src\\main.js</span></a></h4><p>src\\main.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  app<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">&#39;title&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>hot<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>hot<span class="token punctuation">.</span><span class="token function">accept</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">newModule</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    newModule<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-1-4-index-html" tabindex="-1"><a class="header-anchor" href="#_3-1-4-index-html"><span>3.1.4.index.html</span></a></h4><p>index.html</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token constant">DOCTYPE</span> html<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span>html lang<span class="token operator">=</span><span class="token string">&quot;en&quot;</span><span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line"><span class="token operator">&lt;</span>head<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span>meta charset<span class="token operator">=</span><span class="token string">&quot;UTF-8&quot;</span><span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span>meta http<span class="token operator">-</span>equiv<span class="token operator">=</span><span class="token string">&quot;X-UA-Compatible&quot;</span> content<span class="token operator">=</span><span class="token string">&quot;IE=edge&quot;</span><span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span>meta name<span class="token operator">=</span><span class="token string">&quot;viewport&quot;</span> content<span class="token operator">=</span><span class="token string">&quot;width=device-width, initial-scale=1.0&quot;</span><span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span>title<span class="token operator">&gt;</span>hmr<span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line"><span class="token operator">&lt;</span>body<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">&quot;app&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span>script type<span class="token operator">=</span><span class="token string">&quot;module&quot;</span> src<span class="token operator">=</span><span class="token string">&quot;/src/main.js&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-封装模块" tabindex="-1"><a class="header-anchor" href="#_3-2-封装模块"><span>3.2.封装模块</span></a></h3><h4 id="_3-2-1-src-render-js" tabindex="-1"><a class="header-anchor" href="#_3-2-1-src-render-js"><span>3.2.1 src\\render.js</span></a></h4><p>src\\render.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  app<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">&#39;title5&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-2-2-src-main-js" tabindex="-1"><a class="header-anchor" href="#_3-2-2-src-main-js"><span>3.2.2 src\\main.js</span></a></h4><p>src\\main.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> render <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./render&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>hot<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>hot<span class="token punctuation">.</span><span class="token function">accept</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;./render&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">[</span>renderMod<span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    renderMod<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-销毁副作用" tabindex="-1"><a class="header-anchor" href="#_3-3-销毁副作用"><span>3.3.销毁副作用</span></a></h3><h4 id="_3-3-1-render-js" tabindex="-1"><a class="header-anchor" href="#_3-3-1-render-js"><span>3.3.1 render.js</span></a></h4><p>src\\render.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">+let counter = { number: 0 };</span>
<span class="line">+let timer = setInterval(() =&gt; {</span>
<span class="line">+  console.log(counter.number++);</span>
<span class="line">+}, 1000);</span>
<span class="line"></span>
<span class="line">export function render() {</span>
<span class="line">  app.innerHTML = &#39;title&#39;;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">+if (import.meta.hot) {</span>
<span class="line">+  import.meta.hot.dispose(() =&gt; {</span>
<span class="line">+    console.log(&#39;dispose render.js&#39;);</span>
<span class="line">+    clearInterval(timer);</span>
<span class="line">+  });</span>
<span class="line">+}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-4-保留状态" tabindex="-1"><a class="header-anchor" href="#_3-4-保留状态"><span>3.4.保留状态</span></a></h3><h4 id="_3-4-1-render-js" tabindex="-1"><a class="header-anchor" href="#_3-4-1-render-js"><span>3.4.1 render.js</span></a></h4><p>src\\render.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">+let counter = import.meta.hot.data.counter || { number: 0 };</span>
<span class="line">let timer;</span>
<span class="line"></span>
<span class="line">export function render() {</span>
<span class="line">  timer = setInterval(() =&gt; {</span>
<span class="line">    app.innerHTML = counter.number++;</span>
<span class="line">  }, 1000);</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">if (import.meta.hot) {</span>
<span class="line">//每个模块有一个data属性,保存热更新前的状态  </span>
<span class="line">+ import.meta.hot.data.counter = counter;</span>
<span class="line">  import.meta.hot.dispose(() =&gt; {</span>
<span class="line">    console.log(&#39;dispose render.js&#39;);</span>
<span class="line">    clearInterval(timer);</span>
<span class="line">  });</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-5-拒绝更新" tabindex="-1"><a class="header-anchor" href="#_3-5-拒绝更新"><span>3.5.拒绝更新</span></a></h3><h4 id="_3-5-1-render-js" tabindex="-1"><a class="header-anchor" href="#_3-5-1-render-js"><span>3.5.1 render.js</span></a></h4><p>src\\render.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">+export let counter = import.meta.hot.data.counter || { number: 0 };</span>
<span class="line">let timer;</span>
<span class="line"></span>
<span class="line">export function render() {</span>
<span class="line">  timer = setInterval(() =&gt; {</span>
<span class="line">    app.innerHTML = counter.number++;</span>
<span class="line">  }, 1000);</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">if (import.meta.hot) {</span>
<span class="line">  import.meta.hot.data.counter = counter;</span>
<span class="line">  import.meta.hot.dispose(() =&gt; {</span>
<span class="line">    console.log(&#39;dispose render.js&#39;);</span>
<span class="line">    clearInterval(timer);</span>
<span class="line">  });</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-5-2-src-main-js" tabindex="-1"><a class="header-anchor" href="#_3-5-2-src-main-js"><span>3.5.2 src\\main.js</span></a></h4><p>src\\main.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import { render } from &#39;./render&#39;;</span>
<span class="line">render();</span>
<span class="line">if (import.meta.hot) {</span>
<span class="line">  import.meta.hot.accept([&#39;./render&#39;], ([renderMod]) =&gt; {</span>
<span class="line">+    if (renderMod.counter.number &lt; 10) {</span>
<span class="line">+      renderMod.render();</span>
<span class="line">+    } else {</span>
<span class="line">+      //强制刷新</span>
<span class="line">+      import.meta.hot.invalidate();</span>
<span class="line">    }</span>
<span class="line">  });</span>
<span class="line">+  //import.meta.hot.accept();</span>
<span class="line">+  import.meta.hot.decline();</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,230)])])}const c=n(t,[["render",l]]),r=JSON.parse('{"path":"/strong/149.2.vite.html","title":"","lang":"en-US","frontmatter":{},"git":{"updatedTime":1681290319000,"contributors":[{"name":"yutao","username":"yutao","email":"642231346@qq.com","commits":1,"url":"https://github.com/yutao"}],"changelog":[{"hash":"f5ab8c9d34991ec274f7f652439afe5b2afb6147","time":1681290319000,"email":"642231346@qq.com","author":"yutao","message":"modify"}]},"filePathRelative":"strong/149.2.vite.md"}');export{c as comp,r as data};
