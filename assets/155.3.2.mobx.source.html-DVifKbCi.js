import{_ as s,c as a,a as e,o as l}from"./app-CD1YpnS1.js";const i={};function p(t,n){return l(),a("div",null,[...n[0]||(n[0]=[e(`<h2 id="_1-基础知识" tabindex="-1"><a class="header-anchor" href="#_1-基础知识"><span>1.基础知识</span></a></h2><h3 id="_1-1-reflect" tabindex="-1"><a class="header-anchor" href="#_1-1-reflect"><span>1.1 Reflect</span></a></h3><h4 id="_1-1-1-set" tabindex="-1"><a class="header-anchor" href="#_1-1-1-set"><span>1.1.1 set</span></a></h4><ul><li>静态方法 Reflect.set() 工作方式就像在一个对象上设置一个属性<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line">Reflect<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> propertyKey<span class="token punctuation">,</span> value<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li></ul><h4 id="_1-1-2-get" tabindex="-1"><a class="header-anchor" href="#_1-1-2-get"><span>1.1.2 get</span></a></h4><ul><li>Reflect.get()方法与从 对象 (target[propertyKey]) 中读取属性类似，但它是通过一个函数执行来操作的。<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line">Reflect<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> propertyKey<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li></ul><h3 id="_1-2-proxy" tabindex="-1"><a class="header-anchor" href="#_1-2-proxy"><span>1.2 Proxy</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">let</span> obj <span class="token operator">=</span><span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;zhufeng&#39;</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> proxyObj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span>key<span class="token punctuation">,</span>value<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span>key<span class="token punctuation">,</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> Reflect<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span>key<span class="token punctuation">,</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span>key<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">   <span class="token keyword">return</span> Reflect<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>proxyObj<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">proxyObj<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;jiagou&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3-decorator" tabindex="-1"><a class="header-anchor" href="#_1-3-decorator"><span>1.3 decorator</span></a></h3><ul><li>修饰器(Decorator)是一个函数，用来修改类的行为</li></ul><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">function</span> <span class="token function">logger</span><span class="token punctuation">(</span><span class="token parameter">target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">@logger</span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-mobx" tabindex="-1"><a class="header-anchor" href="#_2-mobx"><span>2.Mobx</span></a></h2><ul><li><a href="https://mobx.js.org/README.html" target="_blank" rel="noopener noreferrer">mobx</a></li><li><a href="https://zh.mobx.js.org/README.html" target="_blank" rel="noopener noreferrer">中文</a></li><li>任何可以从应用状态中派生出来的值都应该被自动派生出来</li><li>MobX 是一个身经百战的库，它通过运用透明的函数式响应编程使状态管理变得简单和可扩展</li></ul><h3 id="_2-1-安装" tabindex="-1"><a class="header-anchor" href="#_2-1-安装"><span>2.1 安装</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line">pnpm create vite</span>
<span class="line">pnpm install @babel<span class="token operator">/</span>core @babel<span class="token operator">/</span>plugin<span class="token operator">-</span>proposal<span class="token operator">-</span>decorators @babel<span class="token operator">/</span>plugin<span class="token operator">-</span>proposal<span class="token operator">-</span><span class="token keyword">class</span><span class="token operator">-</span>properties</span>
<span class="line">pnpm install mobx mobx<span class="token operator">-</span>react</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-vite-config-ts" tabindex="-1"><a class="header-anchor" href="#_2-2-vite-config-ts"><span>2.2 vite.config.ts</span></a></h3><p>vite.config.ts</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite&#39;</span></span>
<span class="line"><span class="token keyword">import</span> react <span class="token keyword">from</span> <span class="token string">&#39;@vitejs/plugin-react&#39;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">react</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">babel</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token punctuation">[</span><span class="token string">&quot;@babel/plugin-proposal-decorators&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">legacy</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">[</span><span class="token string">&quot;@babel/plugin-proposal-class-properties&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">loose</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-jsconfig-json" tabindex="-1"><a class="header-anchor" href="#_2-3-jsconfig-json"><span>2.3 jsconfig.json</span></a></h3><p>jsconfig.json</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string-property property">&quot;experimentalDecorators&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-main-tsx" tabindex="-1"><a class="header-anchor" href="#_2-4-main-tsx"><span>2.4 main.tsx</span></a></h3><p>src\\main.tsx</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span>observable<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;mobx&#39;</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>observable<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-observable" tabindex="-1"><a class="header-anchor" href="#_3-observable"><span>3.observable</span></a></h2><h3 id="_3-1-main-jsx" tabindex="-1"><a class="header-anchor" href="#_3-1-main-jsx"><span>3.1 main.jsx</span></a></h3><p>src\\main.jsx</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span>observable<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./mobx&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> proxyObj <span class="token operator">=</span> <span class="token function">observable</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>proxyObj<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-mobx-index-jsx" tabindex="-1"><a class="header-anchor" href="#_3-2-mobx-index-jsx"><span>3.2 mobx\\index.jsx</span></a></h3><p>src\\mobx\\index.jsx</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">export</span> <span class="token punctuation">{</span><span class="token keyword">default</span> <span class="token keyword">as</span> observable<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./observable&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_3-3-observable-jsx" tabindex="-1"><a class="header-anchor" href="#_3-3-observable-jsx"><span>3.3 observable.jsx</span></a></h3><p>src\\mobx\\observable.jsx</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span>isObject<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./utils&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span>object<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./observableobject&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">createObservable</span><span class="token punctuation">(</span><span class="token parameter">v</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isObject</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token function">object</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> createObservable<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-4-observableobject-jsx" tabindex="-1"><a class="header-anchor" href="#_3-4-observableobject-jsx"><span>3.4 observableobject.jsx</span></a></h3><p>src\\mobx\\observableobject.jsx</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">object</span><span class="token punctuation">(</span><span class="token parameter">target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">   <span class="token keyword">return</span> target<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-5-utils-jsx" tabindex="-1"><a class="header-anchor" href="#_3-5-utils-jsx"><span>3.5 utils.jsx</span></a></h3><p>src\\mobx\\utils.jsx</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">isObject</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> value <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> value <span class="token operator">===</span> <span class="token string">&quot;object&quot;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-asdynamicobservableobject" tabindex="-1"><a class="header-anchor" href="#_4-asdynamicobservableobject"><span>4.asDynamicObservableObject</span></a></h2><p><img src="https://static.zhufengpeixun.com/asDynamicObservableObject1_1659416430023.jpg" alt=""></p><h3 id="_4-1-src-mobx-utils-jsx" tabindex="-1"><a class="header-anchor" href="#_4-1-src-mobx-utils-jsx"><span>4.1 src\\mobx\\utils.jsx</span></a></h3><p>src\\mobx\\utils.jsx</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token operator">+</span><span class="token keyword">export</span> <span class="token keyword">const</span> $mobx <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&quot;mobx administration&quot;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token operator">+</span><span class="token keyword">let</span> mobxGuid <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">getNextId</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>    <span class="token keyword">return</span> <span class="token operator">++</span>mobxGuid</span>
<span class="line"><span class="token operator">+</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">+</span></span>
<span class="line"><span class="token operator">+</span><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">addHiddenProp</span><span class="token punctuation">(</span><span class="token parameter">object<span class="token punctuation">,</span> propName<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>    Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>object<span class="token punctuation">,</span> propName<span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>        enumerable<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token operator">+</span>        writable<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token operator">+</span>        configurable<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token operator">+</span>        value</span>
<span class="line"><span class="token operator">+</span>    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token operator">+</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">isObject</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> value <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> value <span class="token operator">===</span> <span class="token string">&quot;object&quot;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">+</span><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">getAdm</span><span class="token punctuation">(</span><span class="token parameter">target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>    <span class="token keyword">return</span> target<span class="token punctuation">[</span>$mobx<span class="token punctuation">]</span></span>
<span class="line"><span class="token operator">+</span><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-observableobject-jsx" tabindex="-1"><a class="header-anchor" href="#_4-2-observableobject-jsx"><span>4.2 observableobject.jsx</span></a></h3><p>src\\mobx\\observableobject.jsx</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">+import { getNextId, addHiddenProp,getAdm ,$mobx} from &#39;./utils&#39;;</span>
<span class="line">+export class ObservableObjectAdministration {</span>
<span class="line">+   constructor(target, values, name) {</span>
<span class="line">+       this.target = target;</span>
<span class="line">+       this.values = values;</span>
<span class="line">+       this.name = name;</span>
<span class="line">+   }</span>
<span class="line">+   get(key) {</span>
<span class="line">+      return this.target[key]</span>
<span class="line">+   }</span>
<span class="line">+   set(key, value) {</span>
<span class="line">+      return this.target[key]=value;</span>
<span class="line">+  }</span>
<span class="line">+}</span>
<span class="line">+export function asObservableObject(target) {</span>
<span class="line">+   const name = \`ObservableObject@\${getNextId()}\`;</span>
<span class="line">+   const adm = new ObservableObjectAdministration(</span>
<span class="line">+      target,</span>
<span class="line">+      new Map(),</span>
<span class="line">+      name</span>
<span class="line">+  )</span>
<span class="line">+  addHiddenProp(target, $mobx, adm)</span>
<span class="line">+  return target;</span>
<span class="line">+}</span>
<span class="line">+const objectProxyTraps = {</span>
<span class="line">+   get(target, name) {</span>
<span class="line">+       return getAdm(target).get(name)</span>
<span class="line">+   },</span>
<span class="line">+   set(target, name, value) {</span>
<span class="line">+       return getAdm(target).set(name, value);</span>
<span class="line">+   }</span>
<span class="line">+}</span>
<span class="line">+export function asDynamicObservableObject(target) {</span>
<span class="line">+   asObservableObject(target);</span>
<span class="line">+   const proxy = new Proxy(target, objectProxyTraps)</span>
<span class="line">+   return proxy;</span>
<span class="line">+}</span>
<span class="line">export function object(target) {</span>
<span class="line">+  const observableObject = asDynamicObservableObject({});</span>
<span class="line">+   console.log(observableObject);</span>
<span class="line">   return target;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-extendobservable" tabindex="-1"><a class="header-anchor" href="#_5-extendobservable"><span>5.extendObservable</span></a></h2><h3 id="_5-1-src-mobx-observableobject-jsx" tabindex="-1"><a class="header-anchor" href="#_5-1-src-mobx-observableobject-jsx"><span>5.1 src\\mobx\\observableobject.jsx</span></a></h3><p>src\\mobx\\observableobject.jsx</p><p><img src="https://static.zhufengpeixun.com/extendObservable_1659418922051.jpg" alt=""></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import { getNextId, addHiddenProp, getAdm, $mobx } from &#39;./utils&#39;;</span>
<span class="line">+export class ObservableValue {</span>
<span class="line">+   constructor(value) {</span>
<span class="line">+      this.value = value;</span>
<span class="line">+   }</span>
<span class="line">+   get() {</span>
<span class="line">+      return this.value;</span>
<span class="line">+   }</span>
<span class="line">+   setNewValue(newValue) {</span>
<span class="line">+      this.value = newValue</span>
<span class="line">+   }</span>
<span class="line">+}</span>
<span class="line">export class ObservableObjectAdministration {</span>
<span class="line">   constructor(target, values, name) {</span>
<span class="line">      this.target = target;</span>
<span class="line">      this.values = values;</span>
<span class="line">      this.name = name;</span>
<span class="line">   }</span>
<span class="line">   get(key) {</span>
<span class="line">      return this.target[key];</span>
<span class="line">   }</span>
<span class="line">   set(key, value) {</span>
<span class="line">      return this.target[key] = value;</span>
<span class="line">   }</span>
<span class="line">+  extend(key, descriptor) {</span>
<span class="line">+     this.defineObservableProperty(key, descriptor.value)</span>
<span class="line">+  }</span>
<span class="line">+  getObservablePropValue(key) {</span>
<span class="line">+     return this.values.get(key).get()</span>
<span class="line">+  }</span>
<span class="line">+  setObservablePropValue(key, newValue) {</span>
<span class="line">+     const observable = this.values.get(key)</span>
<span class="line">+     observable.setNewValue(newValue)</span>
<span class="line">+     return true;</span>
<span class="line">+  }</span>
<span class="line">+  defineObservableProperty(key, value) {</span>
<span class="line">+     const descriptor = {</span>
<span class="line">+        configurable: true,</span>
<span class="line">+        enumerable: true,</span>
<span class="line">+        get() {</span>
<span class="line">+           return this[$mobx].getObservablePropValue(key)</span>
<span class="line">+        },</span>
<span class="line">+        set(value) {</span>
<span class="line">+           return this[$mobx].setObservablePropValue(key, value)</span>
<span class="line">+        }</span>
<span class="line">+     }</span>
<span class="line">+     Object.defineProperty(this.target, key, descriptor)</span>
<span class="line">+     const observable = new ObservableValue(value)</span>
<span class="line">+     this.values.set(key, observable)</span>
<span class="line">+  }</span>
<span class="line">}</span>
<span class="line">export function asObservableObject(target) {</span>
<span class="line">   const name = \`ObservableObject@\${getNextId()}\`;</span>
<span class="line">   const adm = new ObservableObjectAdministration(</span>
<span class="line">      target,</span>
<span class="line">      new Map(),</span>
<span class="line">      name</span>
<span class="line">   )</span>
<span class="line">   addHiddenProp(target, $mobx, adm)</span>
<span class="line">   return target;</span>
<span class="line">}</span>
<span class="line">const objectProxyTraps = {</span>
<span class="line">   get(target, name) {</span>
<span class="line">      return getAdm(target).get(name)</span>
<span class="line">   },</span>
<span class="line">   set(target, name, value) {</span>
<span class="line">      return getAdm(target).set(name, value);</span>
<span class="line">   }</span>
<span class="line">}</span>
<span class="line">export function asDynamicObservableObject(target) {</span>
<span class="line">   asObservableObject(target);</span>
<span class="line">   const proxy = new Proxy(target, objectProxyTraps)</span>
<span class="line">   return proxy;</span>
<span class="line">}</span>
<span class="line">+export function extendObservable(proxyObject, properties) {</span>
<span class="line">+   const descriptors = Object.getOwnPropertyDescriptors(properties)</span>
<span class="line">+   const adm = proxyObject[$mobx]</span>
<span class="line">+   Reflect.ownKeys(descriptors).forEach(key =&gt; {</span>
<span class="line">+      adm.extend(key, descriptors[key])</span>
<span class="line">+   })</span>
<span class="line">+   return proxyObject;</span>
<span class="line">+}</span>
<span class="line">export function object(target) {</span>
<span class="line">   const observableObject = asDynamicObservableObject({});</span>
<span class="line">+  return extendObservable(observableObject, target);</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-autorun" tabindex="-1"><a class="header-anchor" href="#_6-autorun"><span>6.autorun</span></a></h2><h3 id="_6-1-main-jsx" tabindex="-1"><a class="header-anchor" href="#_6-1-main-jsx"><span>6.1 main.jsx</span></a></h3><p>src\\main.jsx</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">+import { observable, autorun } from &#39;./mobx&#39;;</span>
<span class="line">const proxyObj = observable({ name: 1 });</span>
<span class="line">console.log(proxyObj);</span>
<span class="line">+autorun(() =&gt; {</span>
<span class="line">+    console.log(proxyObj.name);</span>
<span class="line">+});</span>
<span class="line">+proxyObj.name=2;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-2-mobx-index-jsx" tabindex="-1"><a class="header-anchor" href="#_6-2-mobx-index-jsx"><span>6.2 mobx\\index.jsx</span></a></h3><p>src\\mobx\\index.jsx</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">export { default as observable } from &#39;./observable&#39;;</span>
<span class="line">+export { default as autorun } from &#39;./autorun&#39;;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-3-utils-jsx" tabindex="-1"><a class="header-anchor" href="#_6-3-utils-jsx"><span>6.3 utils.jsx</span></a></h3><p>src\\mobx\\utils.jsx</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> $mobx <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&quot;mobx administration&quot;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">let</span> mobxGuid <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">getNextId</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token operator">++</span>mobxGuid</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">addHiddenProp</span><span class="token punctuation">(</span><span class="token parameter">object<span class="token punctuation">,</span> propName<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>object<span class="token punctuation">,</span> propName<span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">writable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">configurable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">        value</span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">isObject</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> value <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> value <span class="token operator">===</span> <span class="token string">&quot;object&quot;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">getAdm</span><span class="token punctuation">(</span><span class="token parameter">target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> target<span class="token punctuation">[</span>$mobx<span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">+</span><span class="token keyword">export</span> <span class="token keyword">const</span> globalState <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>    pendingReactions<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token operator">+</span><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-4-autorun-jsx" tabindex="-1"><a class="header-anchor" href="#_6-4-autorun-jsx"><span>6.4 autorun.jsx</span></a></h3><p>src\\mobx\\autorun.jsx</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> getNextId <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./utils&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Reaction <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./reaction&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">autorun</span><span class="token punctuation">(</span><span class="token parameter">view</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">&quot;Autorun@&quot;</span> <span class="token operator">+</span> <span class="token function">getNextId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">const</span> reaction <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Reaction</span><span class="token punctuation">(</span></span>
<span class="line">        name<span class="token punctuation">,</span></span>
<span class="line">        <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token function">view</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">)</span></span>
<span class="line">    reaction<span class="token punctuation">.</span><span class="token function">schedule</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> autorun<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-5-reaction-jsx" tabindex="-1"><a class="header-anchor" href="#_6-5-reaction-jsx"><span>6.5 reaction.jsx</span></a></h3><p>src\\mobx\\reaction.jsx</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> getNextId<span class="token punctuation">,</span> globalState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./utils&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Reaction</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">constructor</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;Reaction@&quot;</span> <span class="token operator">+</span> <span class="token function">getNextId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> onInvalidate<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>onInvalidate <span class="token operator">=</span> onInvalidate<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token function">schedule</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        globalState<span class="token punctuation">.</span>pendingReactions<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token function">runReactions</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token function">runReaction</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">onInvalidate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">runReactions</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> allReactions <span class="token operator">=</span> globalState<span class="token punctuation">.</span>pendingReactions</span>
<span class="line">    <span class="token keyword">let</span> reaction<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">while</span> <span class="token punctuation">(</span>reaction <span class="token operator">=</span> allReactions<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        reaction<span class="token punctuation">.</span><span class="token function">runReaction</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-observing" tabindex="-1"><a class="header-anchor" href="#_7-observing"><span>7.observing</span></a></h2><h3 id="_7-1-src-mobx-autorun-jsx" tabindex="-1"><a class="header-anchor" href="#_7-1-src-mobx-autorun-jsx"><span>7.1 src\\mobx\\autorun.jsx</span></a></h3><p>src\\mobx\\autorun.jsx</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import { getNextId } from &#39;./utils&#39;;</span>
<span class="line">import { Reaction } from &#39;./reaction&#39;;</span>
<span class="line">function autorun(view) {</span>
<span class="line">    const name = &quot;Autorun@&quot; + getNextId();</span>
<span class="line">    const reaction = new Reaction(</span>
<span class="line">        name,</span>
<span class="line">        function () {</span>
<span class="line">+           this.track(view)</span>
<span class="line">        }</span>
<span class="line">    )</span>
<span class="line">    reaction.schedule()</span>
<span class="line">}</span>
<span class="line">export default autorun;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-2-src-mobx-utils-jsx" tabindex="-1"><a class="header-anchor" href="#_7-2-src-mobx-utils-jsx"><span>7.2 src\\mobx\\utils.jsx</span></a></h3><p>src\\mobx\\utils.jsx</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> $mobx <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&quot;mobx administration&quot;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">let</span> mobxGuid <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">getNextId</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token operator">++</span>mobxGuid</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">addHiddenProp</span><span class="token punctuation">(</span><span class="token parameter">object<span class="token punctuation">,</span> propName<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>object<span class="token punctuation">,</span> propName<span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">writable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">configurable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">        value</span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">isObject</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> value <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> value <span class="token operator">===</span> <span class="token string">&quot;object&quot;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">getAdm</span><span class="token punctuation">(</span><span class="token parameter">target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> target<span class="token punctuation">[</span>$mobx<span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> globalState <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">pendingReactions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token operator">+</span>   trackingDerivation<span class="token operator">:</span> <span class="token keyword">null</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-3-src-mobx-reaction-jsx" tabindex="-1"><a class="header-anchor" href="#_7-3-src-mobx-reaction-jsx"><span>7.3 src\\mobx\\reaction.jsx</span></a></h3><p>src\\mobx\\reaction.jsx</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import { getNextId, globalState } from &#39;./utils&#39;;</span>
<span class="line">export class Reaction {</span>
<span class="line">    constructor(name = &quot;Reaction@&quot; + getNextId(), onInvalidate) {</span>
<span class="line">        this.name = name;</span>
<span class="line">        this.onInvalidate = onInvalidate;</span>
<span class="line">+       this.observing = [];</span>
<span class="line">    }</span>
<span class="line">+   track(fn) {</span>
<span class="line">+       globalState.trackingDerivation = this</span>
<span class="line">+       fn.call();</span>
<span class="line">+       globalState.trackingDerivation = null;</span>
<span class="line">+       bindDependencies(this)</span>
<span class="line">+   }</span>
<span class="line">    schedule() {</span>
<span class="line">        globalState.pendingReactions.push(this)</span>
<span class="line">        runReactions()</span>
<span class="line">    }</span>
<span class="line">    runReaction() {</span>
<span class="line">        this.onInvalidate();</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line">+function bindDependencies(derivation) {</span>
<span class="line">+    const { observing } = derivation;</span>
<span class="line">+    observing.forEach(observable =&gt; {</span>
<span class="line">+        observable.observers.add(derivation)</span>
<span class="line">+    });</span>
<span class="line">+}</span>
<span class="line">export function runReactions() {</span>
<span class="line">    const allReactions = globalState.pendingReactions</span>
<span class="line">    let reaction;</span>
<span class="line">    while (reaction = allReactions.shift()) {</span>
<span class="line">        reaction.runReaction()</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-4-observableobject-jsx" tabindex="-1"><a class="header-anchor" href="#_7-4-observableobject-jsx"><span>7.4 observableobject.jsx</span></a></h3><p>src\\mobx\\observableobject.jsx</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import { getNextId, addHiddenProp, getAdm, $mobx, globalState } from &#39;./utils&#39;;</span>
<span class="line">export class ObservableValue {</span>
<span class="line">   constructor(value) {</span>
<span class="line">      this.value = value;</span>
<span class="line">+     this.observers = new Set();</span>
<span class="line">   }</span>
<span class="line">   get() {</span>
<span class="line">+     reportObserved(this)</span>
<span class="line">      return this.value;</span>
<span class="line">   }</span>
<span class="line">   setNewValue(newValue) {</span>
<span class="line">      this.value = newValue;</span>
<span class="line">   }</span>
<span class="line">}</span>
<span class="line">+export function reportObserved(observable) {</span>
<span class="line">+   const derivation = globalState.trackingDerivation</span>
<span class="line">+   if (derivation !== null) {</span>
<span class="line">+      derivation.observing.push(observable);</span>
<span class="line">+   }</span>
<span class="line">+}</span>
<span class="line">export class ObservableObjectAdministration {</span>
<span class="line">   constructor(target, values, name) {</span>
<span class="line">      this.target = target;</span>
<span class="line">      this.values = values;</span>
<span class="line">      this.name = name;</span>
<span class="line">   }</span>
<span class="line">   get(key) {</span>
<span class="line">      return this.target[key];</span>
<span class="line">   }</span>
<span class="line">   set(key, value) {</span>
<span class="line">      return this.target[key] = value;</span>
<span class="line">   }</span>
<span class="line">   extend(key, descriptor) {</span>
<span class="line">      this.defineObservableProperty(key, descriptor.value)</span>
<span class="line">   }</span>
<span class="line">   getObservablePropValue(key) {</span>
<span class="line">      return this.values.get(key).get()</span>
<span class="line">   }</span>
<span class="line">   setObservablePropValue(key, newValue) {</span>
<span class="line">      const observable = this.values.get(key)</span>
<span class="line">      observable.setNewValue(newValue)</span>
<span class="line">      return true;</span>
<span class="line">   }</span>
<span class="line">   defineObservableProperty(key, value) {</span>
<span class="line">      const descriptor = {</span>
<span class="line">         configurable: true,</span>
<span class="line">         enumerable: true,</span>
<span class="line">         get() {</span>
<span class="line">            return this[$mobx].getObservablePropValue(key)</span>
<span class="line">         },</span>
<span class="line">         set(value) {</span>
<span class="line">            return this[$mobx].setObservablePropValue(key, value)</span>
<span class="line">         }</span>
<span class="line">      }</span>
<span class="line">      Object.defineProperty(this.target, key, descriptor)</span>
<span class="line">      const observable = new ObservableValue(value)</span>
<span class="line">      this.values.set(key, observable)</span>
<span class="line">   }</span>
<span class="line">}</span>
<span class="line">export function asObservableObject(target) {</span>
<span class="line">   const name = \`ObservableObject@\${getNextId()}\`;</span>
<span class="line">   const adm = new ObservableObjectAdministration(</span>
<span class="line">      target,</span>
<span class="line">      new Map(),</span>
<span class="line">      name</span>
<span class="line">   )</span>
<span class="line">   addHiddenProp(target, $mobx, adm)</span>
<span class="line">   return target;</span>
<span class="line">}</span>
<span class="line">const objectProxyTraps = {</span>
<span class="line">   get(target, name) {</span>
<span class="line">      return getAdm(target).get(name)</span>
<span class="line">   },</span>
<span class="line">   set(target, name, value) {</span>
<span class="line">      return getAdm(target).set(name, value);</span>
<span class="line">   }</span>
<span class="line">}</span>
<span class="line">export function asDynamicObservableObject(target) {</span>
<span class="line">   asObservableObject(target);</span>
<span class="line">   const proxy = new Proxy(target, objectProxyTraps)</span>
<span class="line">   return proxy;</span>
<span class="line">}</span>
<span class="line">export function extendObservable(proxyObject, properties) {</span>
<span class="line">   const descriptors = Object.getOwnPropertyDescriptors(properties)</span>
<span class="line">   const adm = proxyObject[$mobx]</span>
<span class="line">   Reflect.ownKeys(descriptors).forEach(key =&gt; {</span>
<span class="line">      adm.extend(key, descriptors[key])</span>
<span class="line">   })</span>
<span class="line">   return proxyObject;</span>
<span class="line">}</span>
<span class="line">export function object(target) {</span>
<span class="line">   const observableObject = asDynamicObservableObject({});</span>
<span class="line">   return extendObservable(observableObject, target);</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-propagatechanged" tabindex="-1"><a class="header-anchor" href="#_8-propagatechanged"><span>8. propagateChanged</span></a></h2><h3 id="_8-1-observableobject-jsx" tabindex="-1"><a class="header-anchor" href="#_8-1-observableobject-jsx"><span>8.1 observableobject.jsx</span></a></h3><p>src\\mobx\\observableobject.jsx</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import { getNextId, addHiddenProp, getAdm, $mobx, globalState } from &#39;./utils&#39;;</span>
<span class="line">export class ObservableValue {</span>
<span class="line">   constructor(value) {</span>
<span class="line">      this.value = value;</span>
<span class="line">      this.observers = new Set();</span>
<span class="line">   }</span>
<span class="line">   get() {</span>
<span class="line">      reportObserved(this)</span>
<span class="line">      return this.value;</span>
<span class="line">   }</span>
<span class="line">   setNewValue(newValue) {</span>
<span class="line">      this.value = newValue;</span>
<span class="line">+     propagateChanged(this)</span>
<span class="line">   }</span>
<span class="line">}</span>
<span class="line">+export function propagateChanged(observable) {</span>
<span class="line">+   const observers = observable.observers;</span>
<span class="line">+   observers.forEach(observer =&gt; {</span>
<span class="line">+      observer.onBecomeStale()</span>
<span class="line">+   })</span>
<span class="line">+}</span>
<span class="line">export function reportObserved(observable) {</span>
<span class="line">   const derivation = globalState.trackingDerivation</span>
<span class="line">   if (derivation !== null) {</span>
<span class="line">      derivation.observing.push(observable);</span>
<span class="line">   }</span>
<span class="line">}</span>
<span class="line">export class ObservableObjectAdministration {</span>
<span class="line">   constructor(target, values, name) {</span>
<span class="line">      this.target = target;</span>
<span class="line">      this.values = values;</span>
<span class="line">      this.name = name;</span>
<span class="line">   }</span>
<span class="line">   get(key) {</span>
<span class="line">      return this.target[key];</span>
<span class="line">   }</span>
<span class="line">   set(key, value) {</span>
<span class="line">+     if (this.values.has(key)) {</span>
<span class="line">+        return this.setObservablePropValue(key, value)</span>
<span class="line">+     }</span>
<span class="line">   }</span>
<span class="line">   extend(key, descriptor) {</span>
<span class="line">      this.defineObservableProperty(key, descriptor.value)</span>
<span class="line">   }</span>
<span class="line">   getObservablePropValue(key) {</span>
<span class="line">      return this.values.get(key).get()</span>
<span class="line">   }</span>
<span class="line">   setObservablePropValue(key, newValue) {</span>
<span class="line">      const observable = this.values.get(key)</span>
<span class="line">      observable.setNewValue(newValue)</span>
<span class="line">      return true;</span>
<span class="line">   }</span>
<span class="line">   defineObservableProperty(key, value) {</span>
<span class="line">      const descriptor = {</span>
<span class="line">         configurable: true,</span>
<span class="line">         enumerable: true,</span>
<span class="line">         get() {</span>
<span class="line">            return this[$mobx].getObservablePropValue(key)</span>
<span class="line">         },</span>
<span class="line">         set(value) {</span>
<span class="line">            return this[$mobx].setObservablePropValue(key, value)</span>
<span class="line">         }</span>
<span class="line">      }</span>
<span class="line">      Object.defineProperty(this.target, key, descriptor)</span>
<span class="line">      const observable = new ObservableValue(value)</span>
<span class="line">      this.values.set(key, observable)</span>
<span class="line">   }</span>
<span class="line">}</span>
<span class="line">export function asObservableObject(target) {</span>
<span class="line">   const name = \`ObservableObject@\${getNextId()}\`;</span>
<span class="line">   const adm = new ObservableObjectAdministration(</span>
<span class="line">      target,</span>
<span class="line">      new Map(),</span>
<span class="line">      name</span>
<span class="line">   )</span>
<span class="line">   addHiddenProp(target, $mobx, adm)</span>
<span class="line">   return target;</span>
<span class="line">}</span>
<span class="line">const objectProxyTraps = {</span>
<span class="line">   get(target, name) {</span>
<span class="line">      return getAdm(target).get(name)</span>
<span class="line">   },</span>
<span class="line">   set(target, name, value) {</span>
<span class="line">      return getAdm(target).set(name, value);</span>
<span class="line">   }</span>
<span class="line">}</span>
<span class="line">export function asDynamicObservableObject(target) {</span>
<span class="line">   asObservableObject(target);</span>
<span class="line">   const proxy = new Proxy(target, objectProxyTraps)</span>
<span class="line">   return proxy;</span>
<span class="line">}</span>
<span class="line">export function extendObservable(proxyObject, properties) {</span>
<span class="line">   const descriptors = Object.getOwnPropertyDescriptors(properties)</span>
<span class="line">   const adm = proxyObject[$mobx]</span>
<span class="line">   Reflect.ownKeys(descriptors).forEach(key =&gt; {</span>
<span class="line">      adm.extend(key, descriptors[key])</span>
<span class="line">   })</span>
<span class="line">   return proxyObject;</span>
<span class="line">}</span>
<span class="line">export function object(target) {</span>
<span class="line">   const observableObject = asDynamicObservableObject({});</span>
<span class="line">   return extendObservable(observableObject, target);</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-2-reaction-jsx" tabindex="-1"><a class="header-anchor" href="#_8-2-reaction-jsx"><span>8.2 reaction.jsx</span></a></h3><p>src\\mobx\\reaction.jsx</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import { getNextId, globalState } from &#39;./utils&#39;;</span>
<span class="line">export class Reaction {</span>
<span class="line">    constructor(name = &quot;Reaction@&quot; + getNextId(), onInvalidate) {</span>
<span class="line">        this.name = name;</span>
<span class="line">        this.onInvalidate = onInvalidate;</span>
<span class="line">        this.observing = [];</span>
<span class="line">    }</span>
<span class="line">    track(fn) {</span>
<span class="line">        globalState.trackingDerivation = this</span>
<span class="line">        fn.call();</span>
<span class="line">        globalState.trackingDerivation = null;</span>
<span class="line">        bindDependencies(this)</span>
<span class="line">    }</span>
<span class="line">    schedule() {</span>
<span class="line">        globalState.pendingReactions.push(this)</span>
<span class="line">        runReactions()</span>
<span class="line">    }</span>
<span class="line">    runReaction() {</span>
<span class="line">        this.onInvalidate();</span>
<span class="line">    }</span>
<span class="line">+   onBecomeStale() {</span>
<span class="line">+       this.schedule()</span>
<span class="line">+   }</span>
<span class="line">}</span>
<span class="line">function bindDependencies(derivation) {</span>
<span class="line">    const { observing } = derivation;</span>
<span class="line">    observing.forEach(observable =&gt; {</span>
<span class="line">        observable.observers.add(derivation)</span>
<span class="line">    });</span>
<span class="line">}</span>
<span class="line">export function runReactions() {</span>
<span class="line">    const allReactions = globalState.pendingReactions</span>
<span class="line">    let reaction;</span>
<span class="line">    while (reaction = allReactions.shift()) {</span>
<span class="line">        reaction.runReaction()</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-useobserver" tabindex="-1"><a class="header-anchor" href="#_9-useobserver"><span>9. useObserver</span></a></h2><h3 id="_9-1-main-jsx" tabindex="-1"><a class="header-anchor" href="#_9-1-main-jsx"><span>9.1 main.jsx</span></a></h3><p>src\\main.jsx</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createRoot <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react-dom/client&quot;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> Counter <span class="token keyword">from</span> <span class="token string">&quot;./Counter&quot;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> rootElement <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;root&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> root <span class="token operator">=</span> <span class="token function">createRoot</span><span class="token punctuation">(</span>rootElement<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">root<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>Counter <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-2-counter-jsx" tabindex="-1"><a class="header-anchor" href="#_9-2-counter-jsx"><span>9.2 Counter.jsx</span></a></h3><p>src\\Counter.jsx</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> makeAutoObservable <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;mobx&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useObserver <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;mobx-react&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Store</span> <span class="token punctuation">{</span></span>
<span class="line">    number <span class="token operator">=</span> <span class="token number">1</span></span>
<span class="line">    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">makeAutoObservable</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">autoBind</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>number<span class="token operator">++</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">let</span> store <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Store</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token function">useObserver</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span></span>
<span class="line">        <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span></span>
<span class="line">            <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span><span class="token punctuation">{</span>store<span class="token punctuation">.</span>number<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span></span>
<span class="line">            <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>store<span class="token punctuation">.</span>add<span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token operator">+</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span></span>
<span class="line">        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-3-mobx-react-index-jsx" tabindex="-1"><a class="header-anchor" href="#_9-3-mobx-react-index-jsx"><span>9.3 mobx-react\\index.jsx</span></a></h3><p>src\\mobx-react\\index.jsx</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useEffect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Reaction <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;mobx&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">useObserver</span><span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> <span class="token punctuation">[</span><span class="token punctuation">,</span> setState<span class="token punctuation">]</span> <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">const</span> <span class="token function-variable function">forceUpdate</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">const</span> reactionTrackingRef <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useRef</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>reactionTrackingRef<span class="token punctuation">.</span>current<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">const</span> reaction <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Reaction</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">observer</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token function">forceUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        reactionTrackingRef<span class="token punctuation">.</span>current <span class="token operator">=</span> <span class="token punctuation">{</span> reaction <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">const</span> <span class="token punctuation">{</span> reaction <span class="token punctuation">}</span> <span class="token operator">=</span> reactionTrackingRef<span class="token punctuation">.</span>current<span class="token punctuation">;</span></span>
<span class="line">    <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">            reactionTrackingRef<span class="token punctuation">.</span>current<span class="token punctuation">.</span>reaction<span class="token punctuation">.</span><span class="token function">dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            reactionTrackingRef<span class="token punctuation">.</span>current <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">let</span> rendering<span class="token punctuation">;</span></span>
<span class="line">    reaction<span class="token punctuation">.</span><span class="token function">track</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">        rendering <span class="token operator">=</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> rendering<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-observer" tabindex="-1"><a class="header-anchor" href="#_9-observer"><span>9.Observer</span></a></h2><h3 id="_9-2-counter-jsx-1" tabindex="-1"><a class="header-anchor" href="#_9-2-counter-jsx-1"><span>9.2 Counter.jsx</span></a></h3><p>src\\Counter.jsx</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React from &#39;react&#39;;</span>
<span class="line">import { makeAutoObservable } from &#39;mobx&#39;;</span>
<span class="line">+import { useObserver, Observer } from &#39;mobx-react&#39;;</span>
<span class="line">class Store {</span>
<span class="line">    number = 1</span>
<span class="line">    constructor() {</span>
<span class="line">        makeAutoObservable(this, {}, { autoBind: true });</span>
<span class="line">    }</span>
<span class="line">    add() {</span>
<span class="line">        this.number++;</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line">let store = new Store();</span>
<span class="line">export default function () {</span>
<span class="line">+   return (</span>
<span class="line">+       &lt;Observer&gt;</span>
<span class="line">+           {</span>
<span class="line">+               () =&gt; (</span>
<span class="line">+                   &lt;div&gt;</span>
<span class="line">+                       &lt;p&gt;{store.number}&lt;/p&gt;</span>
<span class="line">+                       &lt;button onClick={store.add}&gt;+&lt;/button&gt;</span>
<span class="line">+                   &lt;/div&gt;</span>
<span class="line">+               )</span>
<span class="line">+           }</span>
<span class="line">+       &lt;/Observer&gt;</span>
<span class="line">+   )</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-3-mobx-react-index-jsx-1" tabindex="-1"><a class="header-anchor" href="#_9-3-mobx-react-index-jsx-1"><span>9.3 mobx-react\\index.jsx</span></a></h3><p>src\\mobx-react\\index.jsx</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React, { useEffect } from &#39;react&#39;;</span>
<span class="line">import { Reaction } from &#39;mobx&#39;;</span>
<span class="line">export function useObserver(fn) {</span>
<span class="line">    const [, setState] = React.useState();</span>
<span class="line">    const forceUpdate = () =&gt; setState({});</span>
<span class="line">    const reactionTrackingRef = React.useRef(null);</span>
<span class="line">    if (!reactionTrackingRef.current) {</span>
<span class="line">        const reaction = new Reaction(\`observer\`, () =&gt; {</span>
<span class="line">            forceUpdate();</span>
<span class="line">        });</span>
<span class="line">        reactionTrackingRef.current = { reaction };</span>
<span class="line">    }</span>
<span class="line">    const { reaction } = reactionTrackingRef.current;</span>
<span class="line">    useEffect(() =&gt; {</span>
<span class="line">        return () =&gt; {</span>
<span class="line">            reactionTrackingRef.current.reaction.dispose();</span>
<span class="line">            reactionTrackingRef.current = null;</span>
<span class="line">        }</span>
<span class="line">    }, []);</span>
<span class="line">    let rendering;</span>
<span class="line">    reaction.track(() =&gt; {</span>
<span class="line">        rendering = fn();</span>
<span class="line">    });</span>
<span class="line">    return rendering;</span>
<span class="line">}</span>
<span class="line">+export function Observer({ children }) {</span>
<span class="line">+    return useObserver(children);</span>
<span class="line">+}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_10-observer" tabindex="-1"><a class="header-anchor" href="#_10-observer"><span>10.observer</span></a></h2><h3 id="_10-1-counter-jsx" tabindex="-1"><a class="header-anchor" href="#_10-1-counter-jsx"><span>10.1 Counter.jsx</span></a></h3><p>src\\Counter.jsx</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React from &#39;react&#39;;</span>
<span class="line">import { makeAutoObservable } from &#39;mobx&#39;;</span>
<span class="line">+import { useObserver, Observer, observer } from &#39;mobx-react&#39;;</span>
<span class="line">class Store {</span>
<span class="line">    number = 1</span>
<span class="line">    constructor() {</span>
<span class="line">        makeAutoObservable(this, {}, { autoBind: true });</span>
<span class="line">    }</span>
<span class="line">    add() {</span>
<span class="line">        this.number++;</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line">let store = new Store();</span>
<span class="line">+export default observer(function () {</span>
<span class="line">+    return (</span>
<span class="line">+        &lt;div&gt;</span>
<span class="line">+            &lt;p&gt;{store.number}&lt;/p&gt;</span>
<span class="line">+            &lt;button onClick={store.add}&gt;+&lt;/button&gt;</span>
<span class="line">+        &lt;/div&gt;</span>
<span class="line">+    )</span>
<span class="line">+}); </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10-2-mobx-react-index-jsx" tabindex="-1"><a class="header-anchor" href="#_10-2-mobx-react-index-jsx"><span>10.2 mobx-react\\index.jsx</span></a></h3><p>src\\mobx-react\\index.jsx</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React, { useEffect } from &#39;react&#39;;</span>
<span class="line">import { Reaction } from &#39;mobx&#39;;</span>
<span class="line">export function useObserver(fn) {</span>
<span class="line">    const [, setState] = React.useState();</span>
<span class="line">    const forceUpdate = () =&gt; setState({});</span>
<span class="line">    const reactionTrackingRef = React.useRef(null);</span>
<span class="line">    if (!reactionTrackingRef.current) {</span>
<span class="line">        const reaction = new Reaction(\`observer\`, () =&gt; {</span>
<span class="line">            forceUpdate();</span>
<span class="line">        });</span>
<span class="line">        reactionTrackingRef.current = { reaction };</span>
<span class="line">    }</span>
<span class="line">    const { reaction } = reactionTrackingRef.current;</span>
<span class="line">    useEffect(() =&gt; {</span>
<span class="line">        return () =&gt; {</span>
<span class="line">            reactionTrackingRef.current.reaction.dispose();</span>
<span class="line">            reactionTrackingRef.current = null;</span>
<span class="line">        }</span>
<span class="line">    }, []);</span>
<span class="line">    let rendering;</span>
<span class="line">    reaction.track(() =&gt; {</span>
<span class="line">        rendering = fn();</span>
<span class="line">    });</span>
<span class="line">    return rendering;</span>
<span class="line">}</span>
<span class="line">export function Observer({ children }) {</span>
<span class="line">    return useObserver(children);</span>
<span class="line">}</span>
<span class="line">+export function observer(baseComponent) {</span>
<span class="line">+    let observerComponent = (props, ref) =&gt; {</span>
<span class="line">+        return useObserver(() =&gt; baseComponent(props, ref));</span>
<span class="line">+    };</span>
<span class="line">+    return observerComponent;</span>
<span class="line">+}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_11-observer-class" tabindex="-1"><a class="header-anchor" href="#_11-observer-class"><span>11.observer class</span></a></h2><h3 id="_11-1-counter-jsx" tabindex="-1"><a class="header-anchor" href="#_11-1-counter-jsx"><span>11.1 Counter.jsx</span></a></h3><p>src\\Counter.jsx</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React from &#39;react&#39;;</span>
<span class="line">import { makeAutoObservable } from &#39;mobx&#39;;</span>
<span class="line">import { useObserver, Observer, observer } from &#39;mobx-react&#39;;</span>
<span class="line">class Store {</span>
<span class="line">    number = 1</span>
<span class="line">    constructor() {</span>
<span class="line">        makeAutoObservable(this, {}, { autoBind: true });</span>
<span class="line">    }</span>
<span class="line">    add() {</span>
<span class="line">        this.number++;</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line">let store = new Store();</span>
<span class="line">+@observer</span>
<span class="line">+class Counter extends React.Component {</span>
<span class="line">+    render() {</span>
<span class="line">+        return (</span>
<span class="line">+            &lt;div&gt;</span>
<span class="line">+                &lt;p&gt;{store.number}&lt;/p&gt;</span>
<span class="line">+                &lt;button onClick={store.add}&gt;+&lt;/button&gt;</span>
<span class="line">+            &lt;/div&gt;</span>
<span class="line">+        )</span>
<span class="line">+    }</span>
<span class="line">+}</span>
<span class="line">+export default Counter;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_11-2-src-mobx-react-index-jsx" tabindex="-1"><a class="header-anchor" href="#_11-2-src-mobx-react-index-jsx"><span>11.2 src\\mobx-react\\index.jsx</span></a></h3><p>src\\mobx-react\\index.jsx</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React, { useEffect } from &#39;react&#39;;</span>
<span class="line">import { Reaction } from &#39;mobx&#39;;</span>
<span class="line">export function useObserver(fn) {</span>
<span class="line">    const [, setState] = React.useState();</span>
<span class="line">    const forceUpdate = () =&gt; setState({});</span>
<span class="line">    const reactionTrackingRef = React.useRef(null);</span>
<span class="line">    if (!reactionTrackingRef.current) {</span>
<span class="line">        const reaction = new Reaction(\`observer\`, () =&gt; {</span>
<span class="line">            forceUpdate();</span>
<span class="line">        });</span>
<span class="line">        reactionTrackingRef.current = { reaction };</span>
<span class="line">    }</span>
<span class="line">    const { reaction } = reactionTrackingRef.current;</span>
<span class="line">    useEffect(() =&gt; {</span>
<span class="line">        return () =&gt; {</span>
<span class="line">            reactionTrackingRef.current.reaction.dispose();</span>
<span class="line">            reactionTrackingRef.current = null;</span>
<span class="line">        }</span>
<span class="line">    }, []);</span>
<span class="line">    let rendering;</span>
<span class="line">    reaction.track(() =&gt; {</span>
<span class="line">        rendering = fn();</span>
<span class="line">    });</span>
<span class="line">    return rendering;</span>
<span class="line">}</span>
<span class="line">export function Observer({ children }) {</span>
<span class="line">    return useObserver(children);</span>
<span class="line">}</span>
<span class="line">export function observer(baseComponent) {</span>
<span class="line">+   if (baseComponent.prototype.isReactComponent) {</span>
<span class="line">+       return makeClassComponentObserver(baseComponent);</span>
<span class="line">+   }</span>
<span class="line">    let observerComponent = (props, ref) =&gt; {</span>
<span class="line">        return useObserver(() =&gt; baseComponent(props, ref));</span>
<span class="line">    };</span>
<span class="line">    return observerComponent;</span>
<span class="line">}</span>
<span class="line">+export function makeClassComponentObserver(componentClass) {</span>
<span class="line">+    const target = componentClass.prototype</span>
<span class="line">+    const originalRender = target.render</span>
<span class="line">+    target.render = function () {</span>
<span class="line">+        const boundOriginalRender = originalRender.bind(this)</span>
<span class="line">+        const reaction = new Reaction(\`render\`, () =&gt; React.Component.prototype.forceUpdate.call(this))</span>
<span class="line">+        let rendering;</span>
<span class="line">+        reaction.track(() =&gt; {</span>
<span class="line">+            rendering = boundOriginalRender();</span>
<span class="line">+        })</span>
<span class="line">+        return rendering</span>
<span class="line">+    }</span>
<span class="line">+    return componentClass</span>
<span class="line">+}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_12-uselocalobservable" tabindex="-1"><a class="header-anchor" href="#_12-uselocalobservable"><span>12.useLocalObservable</span></a></h2><h3 id="_12-1-counter-jsx" tabindex="-1"><a class="header-anchor" href="#_12-1-counter-jsx"><span>12.1 Counter.jsx</span></a></h3><p>src\\Counter.jsx</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React from &#39;react&#39;;</span>
<span class="line">import { useObserver, useLocalObservable } from &#39;mobx-react&#39;;</span>
<span class="line">export default function (props) {</span>
<span class="line">+    const store = useLocalObservable(() =&gt; ({</span>
<span class="line">+        number: 1,</span>
<span class="line">+        add() {</span>
<span class="line">+            this.number++;</span>
<span class="line">+        }</span>
<span class="line">+    }));</span>
<span class="line">    return useObserver(() =&gt; (</span>
<span class="line">        &lt;div&gt;</span>
<span class="line">            &lt;p&gt;{store.number}&lt;/p&gt;</span>
<span class="line">            &lt;button onClick={store.add}&gt;+&lt;/button&gt;</span>
<span class="line">        &lt;/div&gt;</span>
<span class="line">    ));</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_12-2-mobx-react-index-jsx" tabindex="-1"><a class="header-anchor" href="#_12-2-mobx-react-index-jsx"><span>12.2 mobx-react\\index.jsx</span></a></h3><p>src\\mobx-react\\index.jsx</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React, { useEffect, useState } from &#39;react&#39;;</span>
<span class="line">+import { Reaction, observable } from &#39;mobx&#39;;</span>
<span class="line">export function useObserver(fn) {</span>
<span class="line">    const [, setState] = React.useState();</span>
<span class="line">    const forceUpdate = () =&gt; setState({});</span>
<span class="line">    const reactionTrackingRef = React.useRef(null);</span>
<span class="line">    if (!reactionTrackingRef.current) {</span>
<span class="line">        const reaction = new Reaction(\`observer\`, () =&gt; {</span>
<span class="line">            forceUpdate();</span>
<span class="line">        });</span>
<span class="line">        reactionTrackingRef.current = { reaction };</span>
<span class="line">    }</span>
<span class="line">    const { reaction } = reactionTrackingRef.current;</span>
<span class="line">    useEffect(() =&gt; {</span>
<span class="line">        return () =&gt; {</span>
<span class="line">            reactionTrackingRef.current.reaction.dispose();</span>
<span class="line">            reactionTrackingRef.current = null;</span>
<span class="line">        }</span>
<span class="line">    }, []);</span>
<span class="line">    let rendering;</span>
<span class="line">    reaction.track(() =&gt; {</span>
<span class="line">        rendering = fn();</span>
<span class="line">    });</span>
<span class="line">    return rendering;</span>
<span class="line">}</span>
<span class="line">export function Observer({ children }) {</span>
<span class="line">    return useObserver(children);</span>
<span class="line">}</span>
<span class="line">export function observer(baseComponent) {</span>
<span class="line">    if (baseComponent.prototype.isReactComponent) {</span>
<span class="line">        return makeClassComponentObserver(baseComponent);</span>
<span class="line">    }</span>
<span class="line">    let observerComponent = (props, ref) =&gt; {</span>
<span class="line">        return useObserver(() =&gt; baseComponent(props, ref));</span>
<span class="line">    };</span>
<span class="line">    return observerComponent;</span>
<span class="line">}</span>
<span class="line">export function makeClassComponentObserver(componentClass) {</span>
<span class="line">    const target = componentClass.prototype</span>
<span class="line">    const originalRender = target.render</span>
<span class="line">    target.render = function () {</span>
<span class="line">        const boundOriginalRender = originalRender.bind(this)</span>
<span class="line">        const reaction = new Reaction(\`render\`, () =&gt; Component.prototype.forceUpdate.call + (this))</span>
<span class="line">        let rendering;</span>
<span class="line">        reaction.track(() =&gt; {</span>
<span class="line">            rendering = boundOriginalRender();</span>
<span class="line">        })</span>
<span class="line">        return rendering</span>
<span class="line">    }</span>
<span class="line">    return componentClass</span>
<span class="line">}</span>
<span class="line">+export function useLocalObservable(initializer) {</span>
<span class="line">+    return React.useState(() =&gt; observable(initializer(), {}, { autoBind: true }))[0];</span>
<span class="line">+}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,127)])])}const r=s(i,[["render",p]]),o=JSON.parse('{"path":"/strong/155.3.2.mobx.source.html","title":"","lang":"en-US","frontmatter":{},"git":{"updatedTime":1681290319000,"contributors":[{"name":"yutao","username":"yutao","email":"642231346@qq.com","commits":1,"url":"https://github.com/yutao"}],"changelog":[{"hash":"f5ab8c9d34991ec274f7f652439afe5b2afb6147","time":1681290319000,"email":"642231346@qq.com","author":"yutao","message":"modify"}]},"filePathRelative":"strong/155.3.2.mobx.source.md"}');export{r as comp,o as data};
