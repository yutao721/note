import{_ as n,c as a,a as e,o as l}from"./app-CD1YpnS1.js";const p={};function t(i,s){return l(),a("div",null,[...s[0]||(s[0]=[e(`<h2 id="_1-课程大纲" tabindex="-1"><a class="header-anchor" href="#_1-课程大纲"><span>1.课程大纲</span></a></h2><h3 id="_1-1-mobx实战篇" tabindex="-1"><a class="header-anchor" href="#_1-1-mobx实战篇"><span>1.1 mobx实战篇</span></a></h3><ul><li>observable、makeObservable、makeAutoObservable</li><li>Autorun、computed、action、flow、bound、Reaction、When、runInAction</li><li>mobx+mobx-react综合案例</li></ul><h3 id="_1-2-mobx源码篇" tabindex="-1"><a class="header-anchor" href="#_1-2-mobx源码篇"><span>1.2 mobx源码篇</span></a></h3><ul><li>实现observable、reaction、autorun、action</li><li>实现observer、useObserver、Observer、useLocalObservable</li></ul><h2 id="_2-mobx" tabindex="-1"><a class="header-anchor" href="#_2-mobx"><span>2.Mobx</span></a></h2><ul><li><a href="https://mobx.js.org/README.html" target="_blank" rel="noopener noreferrer">mobx</a></li><li><a href="https://zh.mobx.js.org/README.html" target="_blank" rel="noopener noreferrer">中文</a></li><li>任何可以从应用状态中派生出来的值都应该被自动派生出来</li><li>MobX 是一个身经百战的库，它通过运用透明的函数式响应编程使状态管理变得简单和可扩展</li></ul><p><img src="https://static.zhufengpeixun.com/zhflow_1659261254516.png" alt=""></p><h3 id="_2-1-安装" tabindex="-1"><a class="header-anchor" href="#_2-1-安装"><span>2.1 安装</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line">pnpm create vite</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-src-main-tsx" tabindex="-1"><a class="header-anchor" href="#_2-4-src-main-tsx"><span>2.4 src\\main.tsx</span></a></h3><p>src\\main.tsx</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span>observable<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;mobx&#39;</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>observable<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-mobx" tabindex="-1"><a class="header-anchor" href="#_3-mobx"><span>3.mobx</span></a></h2><h3 id="_3-1-创建可观察对象" tabindex="-1"><a class="header-anchor" href="#_3-1-创建可观察对象"><span>3.1 创建可观察对象</span></a></h3><ul><li>[创建可观察状态](https://zh.mobx.js.org/observable-state.html</li><li>属性，完整的对象，数组，Maps 和 Sets 都可以被转化为可观察对象。 使得对象可观察的基本方法是使用 <code>makeObservable</code>为每个属性指定一个注解。 最重要的注解如下： <ul><li><code>observable</code> 定义一个存储 state 的可追踪字段。</li><li><code>action</code> 将一个方法标记为可以修改 state 的 action。</li><li><code>computed</code> 标记一个可以由 state 派生出新的值并且缓存其输出的 getter。</li></ul></li><li>像数组，Maps 和 Sets 这样的集合都将被自动转化为可观察对象。</li></ul><h3 id="_3-2-observable" tabindex="-1"><a class="header-anchor" href="#_3-2-observable"><span>3.2 observable</span></a></h3><ul><li>用法: <code>observable(source, overrides?, options?)</code></li><li>[observable](https://zh.mobx.js.org/observable-state.html</li><li>由 <code>observable</code> 返回的对象将会使用 Proxy 包装，这意味着之后被添加到这个对象中的属性也将被侦测并使其转化为可观察对象</li></ul><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span>observable<span class="token punctuation">,</span>reaction<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;mobx&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">let</span> proxyObj <span class="token operator">=</span> <span class="token function">observable</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>proxyObj<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-reactions" tabindex="-1"><a class="header-anchor" href="#_3-3-reactions"><span>3.3 reactions</span></a></h3><ul><li>[reactions](https://zh.mobx.js.org/reactions.html</li><li><code>reactions</code>的目的是对自动发生的副作用进行建模。 它们的意义在于为你的可观察状态创建消费者，以及每当关联的值发生变化时，自动运行副作用</li></ul><h3 id="_3-4-autorun" tabindex="-1"><a class="header-anchor" href="#_3-4-autorun"><span>3.4 Autorun</span></a></h3><ul><li>用法： <code>autorun(effect: (reaction) =&gt; void)</code></li><li>[Autorun](https://zh.mobx.js.org/reactions.html</li><li><code>Autorun</code>通过在响应式上下文运行 <code>effect</code>来工作。在给定的函数执行期间，MobX 会持续跟踪被 effect 直接或间接读取过的所有可观察对象和计算值。 一旦函数执行完毕，MobX 将收集并订阅所有被读取过的可观察对象，并等待其中任意一个再次发生改变。 一旦有改变发生，autorun 将会再次触发，重复整个过程</li></ul><p><img src="https://static.zhufengpeixun.com/autorun_1659261925166.png" alt=""></p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span>observable<span class="token punctuation">,</span>autorun<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;mobx&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">let</span> proxyObj <span class="token operator">=</span> <span class="token function">observable</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">autorun</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>proxyObj<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">proxyObj<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;2&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-5-makeobservable" tabindex="-1"><a class="header-anchor" href="#_3-5-makeobservable"><span>3.5 makeObservable</span></a></h3><ul><li>用法: <code>makeObservable(target, annotations?, options?)</code></li><li>[makeObservable](https://zh.mobx.js.org/observable-state.html</li></ul><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span>observable<span class="token punctuation">,</span>makeObservable<span class="token punctuation">,</span>autorun<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;mobx&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Doubler</span> <span class="token punctuation">{</span></span>
<span class="line">    value</span>
<span class="line">    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">makeObservable</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token literal-property property">value</span><span class="token operator">:</span> observable<span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> value</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">const</span> doubler <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Doubler</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">autorun</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>doubler<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">doubler<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-6-computed" tabindex="-1"><a class="header-anchor" href="#_3-6-computed"><span>3.6 computed</span></a></h3><ul><li>[computed](https://zh.mobx.js.org/computeds.html</li><li>计算值可以用来从其他可观察对象中派生信息。 计算值采用惰性求值，会缓存其输出，并且只有当其依赖的可观察对象被改变时才会重新计算。 它们在不被任何值观察时会被暂时停用</li><li>计算值可以通过在 <code>JavaScript getters</code> 上添加 <code>computed</code> 注解来创建。 使用 <code>makeObservable</code> 将 getter 声明为 <code>computed</code>。或者如果你希望所有的 getters 被自动声明为 computed，可以使用 <code>makeAutoObservable</code></li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">+import {observable,makeObservable,autorun,computed} from &#39;mobx&#39;;</span>
<span class="line">class Doubler {</span>
<span class="line">    value</span>
<span class="line">    constructor(value) {</span>
<span class="line">        makeObservable(this, {</span>
<span class="line">            value: observable,</span>
<span class="line">+           double: computed,</span>
<span class="line">        })</span>
<span class="line">        this.value = value</span>
<span class="line">    }</span>
<span class="line">+   get double() {</span>
<span class="line">+       return this.value * 2</span>
<span class="line">+   }</span>
<span class="line">}</span>
<span class="line">const doubler = new Doubler(1);</span>
<span class="line">autorun(()=&gt;{</span>
<span class="line">    console.log(doubler.value);</span>
<span class="line">+   console.log(doubler.double);</span>
<span class="line">});</span>
<span class="line">doubler.value = 2;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-7-action" tabindex="-1"><a class="header-anchor" href="#_3-7-action"><span>3.7 action</span></a></h3><ul><li>[actions](https://zh.mobx.js.org/actions.html</li><li>所有的应用程序都有 actions。action 就是任意一段修改 state 的代码。原则上，actions 总会为了对一个事件做出响应而发生。例如，点击了一个按钮，一些输入被改变了，一个 websocket 消息被送达了，等等</li><li>尽管 makeAutoObservable 可以自动帮你声明一部分 actions，但是 MobX 还是要求你声明你的 actions。Actions 可以帮助你更好的组织你的代码并提供以下性能优势： <ul><li>它们在 transactions 内部运行。任何可观察对象在最外层的 action 完成之前都不会被更新，这一点保证了在 action 完成之前，action 执行期间生成的中间值或不完整的值对应用程序的其余部分都是不可见的</li><li>默认情况下，不允许在 actions 之外改变 state。这有助于在代码中清楚地对状态更新发生的位置进行定位</li></ul></li><li>action 注解应该仅用于会修改 state 的函数。派生其他信息（执行查询或者过滤数据）的函数不应该被标记为 actions，以便 MobX 可以对它们的调用进行跟踪</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">+import {observable,makeObservable,autorun,computed,action} from &#39;mobx&#39;;</span>
<span class="line">class Doubler {</span>
<span class="line">    value</span>
<span class="line">    constructor(value) {</span>
<span class="line">        makeObservable(this, {</span>
<span class="line">            value: observable,</span>
<span class="line">            double: computed,</span>
<span class="line">+           increment: action</span>
<span class="line">        })</span>
<span class="line">        this.value = value</span>
<span class="line">    }</span>
<span class="line">    get double() {</span>
<span class="line">        return this.value * 2</span>
<span class="line">    }</span>
<span class="line">+   increment() {</span>
<span class="line">+       this.value++</span>
<span class="line">+       this.value++</span>
<span class="line">+   }</span>
<span class="line">}</span>
<span class="line">const doubler = new Doubler(1);</span>
<span class="line">autorun(()=&gt;{</span>
<span class="line">    console.log(doubler.value);</span>
<span class="line">    console.log(doubler.double);</span>
<span class="line">});</span>
<span class="line">+doubler.increment();</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-8-flow" tabindex="-1"><a class="header-anchor" href="#_3-8-flow"><span>3.8 flow</span></a></h3><ul><li>[flow](https://zh.mobx.js.org/actions.html</li><li>flow 将一个 generator 函数 作为唯一输入。 在 generator 内部，你可以使用 yield 串联 Promise（使用 yield somePromise 代替 await somePromise）。 flow 机制将会确保 generator 在 Promise resolve 之后继续运行或者抛出错误。</li><li>所以 flow 是 async / await 的一个替代方案，不需要再用 action 进行包装。它可以按照下面的方式使用： <ul><li>使用 flow 包装你的异步函数</li><li>使用 function * 代替 async</li><li>使用 yield 代替 await</li></ul></li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">+import {observable,makeObservable,autorun,computed,flow,action} from &#39;mobx&#39;;</span>
<span class="line">class Doubler {</span>
<span class="line">    value</span>
<span class="line">    constructor(value) {</span>
<span class="line">        makeObservable(this, {</span>
<span class="line">            value: observable,</span>
<span class="line">            double: computed,</span>
<span class="line">            increment: action,</span>
<span class="line">+           fetch: flow</span>
<span class="line">        })</span>
<span class="line">        this.value = value</span>
<span class="line">    }</span>
<span class="line">    get double() {</span>
<span class="line">        return this.value * 2</span>
<span class="line">    }</span>
<span class="line">    increment() {</span>
<span class="line">        this.value++</span>
<span class="line">        this.value++</span>
<span class="line">    }</span>
<span class="line">+   *fetch() {</span>
<span class="line">+       const response = yield new Promise((resolve)=&gt;setTimeout(()=&gt;resolve(5),1000))</span>
<span class="line">+       this.value = response;</span>
<span class="line">+   }</span>
<span class="line">}</span>
<span class="line">const doubler = new Doubler(1);</span>
<span class="line">autorun(()=&gt;{</span>
<span class="line">    console.log(doubler.value);</span>
<span class="line">    console.log(doubler.double);</span>
<span class="line">});</span>
<span class="line">doubler.increment();</span>
<span class="line">+doubler.fetch();</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-9-bound" tabindex="-1"><a class="header-anchor" href="#_3-9-bound"><span>3.9 bound</span></a></h3><ul><li>[flow.bound](https://zh.mobx.js.org/actions.html</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import {observable,makeObservable,autorun,computed,flow,action} from &#39;mobx&#39;;</span>
<span class="line">class Doubler {</span>
<span class="line">    value</span>
<span class="line">    constructor(value) {</span>
<span class="line">        makeObservable(this, {</span>
<span class="line">            value: observable,</span>
<span class="line">            double: computed,</span>
<span class="line">+           increment: action.bound,</span>
<span class="line">+           fetch: flow.bound</span>
<span class="line">        })</span>
<span class="line">        this.value = value</span>
<span class="line">    }</span>
<span class="line">    get double() {</span>
<span class="line">        return this.value * 2</span>
<span class="line">    }</span>
<span class="line">    increment() {</span>
<span class="line">        this.value++</span>
<span class="line">        this.value++</span>
<span class="line">    }</span>
<span class="line">    *fetch() {</span>
<span class="line">        const response = yield new Promise((resolve)=&gt;setTimeout(()=&gt;resolve(5),1000))</span>
<span class="line">        this.value = response;</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line">const doubler = new Doubler(1);</span>
<span class="line">autorun(()=&gt;{</span>
<span class="line">    console.log(doubler.value);</span>
<span class="line">    console.log(doubler.double);</span>
<span class="line">});</span>
<span class="line">+const increment = doubler.increment;</span>
<span class="line">+increment();</span>
<span class="line">+const fetch = doubler.fetch;</span>
<span class="line">+fetch();</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-10-makeautoobservable" tabindex="-1"><a class="header-anchor" href="#_3-10-makeautoobservable"><span>3.10 makeAutoObservable</span></a></h3><ul><li>使用 <code>makeAutoObservable(target, overrides?, options?)</code></li><li>[makeAutoObservable](https://zh.mobx.js.org/observable-state.html</li><li>与使用 makeObservable 相比，makeAutoObservable 函数更紧凑，也更容易维护，因为新成员不需要显式地提及。 然而，makeAutoObservable 不能被用于带有 super 的类或 子类</li><li>推断规则： <ul><li>所有 自有 属性都成为 observable</li><li>所有 getters 都成为 computed</li><li>所有 setters 都成为 action</li><li>所有 prototype 中的 functions 都成为 autoAction</li><li>所有 prototype 中的 generator functions 都成为 flow</li><li>在 overrides 参数中标记为 false 的成员将不会被添加注解。例如，将其用于像标识符这样的只读字段</li></ul></li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">+import {observable,makeObservable,autorun,computed,flow,action,makeAutoObservable} from &#39;mobx&#39;;</span>
<span class="line">class Doubler {</span>
<span class="line">+   PI=3.14</span>
<span class="line">    value</span>
<span class="line">    constructor(value) {</span>
<span class="line">+       makeAutoObservable(this,{PI:false},{autoBind:true})</span>
<span class="line">        this.value = value</span>
<span class="line">    }</span>
<span class="line">    get double() {</span>
<span class="line">        return this.value * 2</span>
<span class="line">    }</span>
<span class="line">    increment() {</span>
<span class="line">        this.value++</span>
<span class="line">        this.value++</span>
<span class="line">    }</span>
<span class="line">    *fetch() {</span>
<span class="line">        const response = yield new Promise((resolve)=&gt;setTimeout(()=&gt;resolve(5),1000))</span>
<span class="line">        this.value = response;</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line">const doubler = new Doubler(1);</span>
<span class="line">+autorun(()=&gt;{</span>
<span class="line">+    console.log(doubler.PI);</span>
<span class="line">+});</span>
<span class="line">autorun(()=&gt;{</span>
<span class="line">    console.log(doubler.value);</span>
<span class="line">    console.log(doubler.double);</span>
<span class="line">});</span>
<span class="line">const increment = doubler.increment;</span>
<span class="line">increment();</span>
<span class="line">const fetch = doubler.fetch;</span>
<span class="line">fetch();</span>
<span class="line">+doubler.PI=3.15;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-11-reaction" tabindex="-1"><a class="header-anchor" href="#_3-11-reaction"><span>3.11 Reaction</span></a></h3><ul><li>使用<code>reaction(() =&gt; value, (value, previousValue, reaction) =&gt; { sideEffect }, options?).</code></li><li>[Reaction](https://zh.mobx.js.org/reactions.html</li><li>一般的模式是在 data 函数中返回你在副作用中需要的所有数据， 并以这种方式更精确地控制副作用触发的时机。 与 autorun 不同，副作用在初始化时不会自动运行，而只会在 data 表达式首次返回新值之后运行</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">+import {makeAutoObservable,reaction} from &#39;mobx&#39;;</span>
<span class="line">class Doubler {</span>
<span class="line">    PI=3.14</span>
<span class="line">    value</span>
<span class="line">    constructor(value) {</span>
<span class="line">        makeAutoObservable(this,{PI:false},{autoBind:true})</span>
<span class="line">        this.value = value</span>
<span class="line">    }</span>
<span class="line">    get double() {</span>
<span class="line">        return this.value * 2</span>
<span class="line">    }</span>
<span class="line">    increment() {</span>
<span class="line">        this.value++</span>
<span class="line">        this.value++</span>
<span class="line">    }</span>
<span class="line">    *fetch() {</span>
<span class="line">        const response = yield new Promise((resolve)=&gt;setTimeout(()=&gt;resolve(5),1000))</span>
<span class="line">        this.value = response;</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line">const doubler = new Doubler(1);</span>
<span class="line">+reaction(</span>
<span class="line">+    () =&gt; doubler.value,</span>
<span class="line">+    value =&gt; {</span>
<span class="line">+        console.log(&#39;value&#39;,value);</span>
<span class="line">+    }</span>
<span class="line">+)</span>
<span class="line">+doubler.value=2;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-12-when" tabindex="-1"><a class="header-anchor" href="#_3-12-when"><span>3.12 When</span></a></h3><ul><li>使用方式 <code>when(predicate: () =&gt; boolean, effect?: () =&gt; void, options?)</code></li><li>[when](https://zh.mobx.js.org/reactions.html</li><li>如果你没有传入 effect 函数，when 函数返回一个 Promise 类型的 disposer，并允许你手动取消</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">+import {makeAutoObservable,reaction,when} from &#39;mobx&#39;;</span>
<span class="line">class Doubler {</span>
<span class="line">    PI=3.14</span>
<span class="line">    value</span>
<span class="line">    constructor(value) {</span>
<span class="line">        makeAutoObservable(this,{PI:false},{autoBind:true})</span>
<span class="line">        this.value = value</span>
<span class="line">    }</span>
<span class="line">    get double() {</span>
<span class="line">        return this.value * 2</span>
<span class="line">    }</span>
<span class="line">    increment() {</span>
<span class="line">        this.value++</span>
<span class="line">        this.value++</span>
<span class="line">    }</span>
<span class="line">    *fetch() {</span>
<span class="line">        const response = yield new Promise((resolve)=&gt;setTimeout(()=&gt;resolve(5),1000))</span>
<span class="line">        this.value = response;</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line">const doubler = new Doubler(1);</span>
<span class="line">+when(</span>
<span class="line">+    () =&gt; doubler.value === 3,</span>
<span class="line">+    () =&gt; {</span>
<span class="line">+        console.log(&#39;value&#39;,doubler.value);</span>
<span class="line">+    }</span>
<span class="line">+)</span>
<span class="line">+doubler.value++;</span>
<span class="line">+doubler.value++;</span>
<span class="line">+doubler.value++;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-13-runinaction" tabindex="-1"><a class="header-anchor" href="#_3-13-runinaction"><span>3.13 runInAction</span></a></h3><ul><li>使用方式 <code>runInAction(fn)</code></li><li>使用[runInAction](https://mobx.js.org/actions.html</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import {makeAutoObservable,reaction,when,autorun,runInAction} from &#39;mobx&#39;;</span>
<span class="line">class Doubler {</span>
<span class="line">    PI=3.14</span>
<span class="line">    value</span>
<span class="line">    constructor(value) {</span>
<span class="line">        makeAutoObservable(this,{PI:false},{autoBind:true})</span>
<span class="line">        this.value = value</span>
<span class="line">    }</span>
<span class="line">    get double() {</span>
<span class="line">        return this.value * 2</span>
<span class="line">    }</span>
<span class="line">    increment() {</span>
<span class="line">        this.value++</span>
<span class="line">        this.value++</span>
<span class="line">    }</span>
<span class="line">    *fetch() {</span>
<span class="line">        const response = yield new Promise((resolve)=&gt;setTimeout(()=&gt;resolve(5),1000))</span>
<span class="line">        this.value = response;</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line">const doubler = new Doubler(1);</span>
<span class="line">+autorun(()=&gt;console.log(doubler.value));</span>
<span class="line">+runInAction(()=&gt;{</span>
<span class="line">+    doubler.value++;</span>
<span class="line">+    doubler.value++;</span>
<span class="line">+    doubler.value++;</span>
<span class="line">+});</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-mobx-react" tabindex="-1"><a class="header-anchor" href="#_4-mobx-react"><span>4.mobx-react</span></a></h2><ul><li><a href="https://github.com/mobxjs/mobx/tree/main/packages/mobx-react" target="_blank" rel="noopener noreferrer">mobx-react</a></li><li><a href="https://github.com/mobxjs/mobx/tree/main/packages/mobx-react-lite" target="_blank" rel="noopener noreferrer">mobx-react-lite</a></li></ul><h3 id="_4-1-observer" tabindex="-1"><a class="header-anchor" href="#_4-1-observer"><span>4.1 observer</span></a></h3><h4 id="_4-1-1-main-jsx" tabindex="-1"><a class="header-anchor" href="#_4-1-1-main-jsx"><span>4.1.1 main.jsx</span></a></h4><p>src\\main.jsx</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createRoot <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react-dom/client&quot;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> Counter <span class="token keyword">from</span> <span class="token string">&quot;./Counter&quot;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> rootElement <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;root&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> root <span class="token operator">=</span> <span class="token function">createRoot</span><span class="token punctuation">(</span>rootElement<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">root<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>Counter<span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-1-2-observer" tabindex="-1"><a class="header-anchor" href="#_4-1-2-observer"><span>4.1.2 observer</span></a></h4><ul><li>使用<code>observer&lt;P&gt;(baseComponent: FunctionComponent&lt;P&gt;): FunctionComponent&lt;P&gt;</code></li><li>将React组件、React类组件或独立渲染函数转换为React组件的函数。转换后的组件将跟踪其有效渲染使用的观察值，并在其中一个值更改时自动重新渲染组件</li><li><code>React.memo</code>自动应用于提供给观察者的功能组件</li><li>当使用React类组件时，<code>this.props</code>和<code>this.state</code>变得可观察，因此组件将对渲染使用的属性和状态的所有更改作出反应</li></ul><p>src\\Counter.jsx</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span>makeAutoObservable<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;mobx&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span>observer<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;mobx-react&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Store</span> <span class="token punctuation">{</span></span>
<span class="line">    number<span class="token operator">=</span><span class="token number">1</span></span>
<span class="line">    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">makeAutoObservable</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">autoBind</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>number<span class="token operator">++</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">let</span> store<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Store</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">observer</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">        <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span></span>
<span class="line">            <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span><span class="token punctuation">{</span>store<span class="token punctuation">.</span>number<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span></span>
<span class="line">            <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>store<span class="token punctuation">.</span>add<span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token operator">+</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span></span>
<span class="line">        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-observer-class" tabindex="-1"><a class="header-anchor" href="#_4-2-observer-class"><span>4.2 observer class</span></a></h3><h4 id="_4-2-1-counter-jsx" tabindex="-1"><a class="header-anchor" href="#_4-2-1-counter-jsx"><span>4.2.1 Counter.jsx</span></a></h4><p>src\\Counter.jsx</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React from &#39;react&#39;;</span>
<span class="line">import {makeAutoObservable} from &#39;mobx&#39;;</span>
<span class="line">import {observer} from &#39;mobx-react&#39;;</span>
<span class="line">class Store {</span>
<span class="line">    number=1</span>
<span class="line">    constructor(){</span>
<span class="line">        makeAutoObservable(this,{},{autoBind:true});</span>
<span class="line">    }</span>
<span class="line">    add(){</span>
<span class="line">        this.number++;</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line">let store=new Store();</span>
<span class="line">+@observer</span>
<span class="line">+export default class Counter extends React.Component{</span>
<span class="line">  render(){</span>
<span class="line">    return (</span>
<span class="line">        &lt;div&gt;</span>
<span class="line">            &lt;p&gt;{store.number}&lt;/p&gt;</span>
<span class="line">            &lt;button onClick={store.add}&gt;+&lt;/button&gt;</span>
<span class="line">        &lt;/div&gt;</span>
<span class="line">    )</span>
<span class="line">  }</span>
<span class="line">+}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-observer" tabindex="-1"><a class="header-anchor" href="#_4-3-observer"><span>4.3 Observer</span></a></h3><ul><li>使用 <code>&lt;Observer&gt;{renderFn}&lt;/Observer&gt;</code></li><li>[Observer](https://github.com/mobxjs/mobx/tree/main/packages/mobx-react</li><li><code>Observer</code>是一个React组件，它将观察者应用于组件中的匿名区域。它将单个无参数函数作为子函数，该函数应只返回一个React组件。将跟踪函数中的渲染，并在需要时自动重新渲染</li></ul><h4 id="_4-3-1-counter-jsx" tabindex="-1"><a class="header-anchor" href="#_4-3-1-counter-jsx"><span>4.3.1 Counter.jsx</span></a></h4><p>src\\Counter.jsx</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React from &#39;react&#39;;</span>
<span class="line">import {makeAutoObservable} from &#39;mobx&#39;;</span>
<span class="line">+import {observer,Observer} from &#39;mobx-react&#39;;</span>
<span class="line">class Store {</span>
<span class="line">    number=1</span>
<span class="line">    constructor(){</span>
<span class="line">        makeAutoObservable(this,{},{autoBind:true});</span>
<span class="line">    }</span>
<span class="line">    add(){</span>
<span class="line">        this.number++;</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line">let store=new Store();</span>
<span class="line">export default function () {</span>
<span class="line">    return (</span>
<span class="line">+       &lt;Observer&gt;</span>
<span class="line">            {</span>
<span class="line">                ()=&gt;(</span>
<span class="line">                  &lt;&gt;</span>
<span class="line">                    &lt;p&gt;{store.number}&lt;/p&gt;</span>
<span class="line">                    &lt;button onClick={store.add}&gt;+&lt;/button&gt;</span>
<span class="line">                  &lt;/&gt;</span>
<span class="line">                )</span>
<span class="line">            }</span>
<span class="line">+      &lt;/Observer&gt;</span>
<span class="line">    )</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-4-useobserver" tabindex="-1"><a class="header-anchor" href="#_4-4-useobserver"><span>4.4 useObserver</span></a></h3><ul><li>[useObserver](https://github.com/mobxjs/mobx/tree/main/packages/mobx-react-lite</li></ul><h4 id="_4-4-1-counter-jsx" tabindex="-1"><a class="header-anchor" href="#_4-4-1-counter-jsx"><span>4.4.1 Counter.jsx</span></a></h4><p>src\\Counter.jsx</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React from &#39;react&#39;;</span>
<span class="line">import {makeAutoObservable} from &#39;mobx&#39;;</span>
<span class="line">import {observer,Observer,useObserver} from &#39;mobx-react&#39;;</span>
<span class="line">class Store {</span>
<span class="line">    number=1</span>
<span class="line">    constructor(){</span>
<span class="line">        makeAutoObservable(this,{},{autoBind:true});</span>
<span class="line">    }</span>
<span class="line">    add(){</span>
<span class="line">        this.number++;</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line">let store=new Store();</span>
<span class="line">export default function () {</span>
<span class="line">+    return useObserver(()=&gt;(</span>
<span class="line">        &lt;&gt;</span>
<span class="line">          &lt;p&gt;{store.number}&lt;/p&gt;</span>
<span class="line">          &lt;button onClick={store.add}&gt;+&lt;/button&gt;</span>
<span class="line">        &lt;/&gt;</span>
<span class="line">+     ));</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-5-uselocalobservable" tabindex="-1"><a class="header-anchor" href="#_4-5-uselocalobservable"><span>4.5 useLocalObservable</span></a></h3><ul><li>使用 <code>useLocalObservable&lt;T&gt;(initializer: () =&gt; T, annotations?: AnnotationsMap&lt;T&gt;): T</code></li><li>当使用[useLocalObservable](https://github.com/mobxjs/mobx/tree/main/packages/mobx-react-lite</li></ul><h4 id="_4-5-1-counter-jsx" tabindex="-1"><a class="header-anchor" href="#_4-5-1-counter-jsx"><span>4.5.1 Counter.jsx</span></a></h4><p>src\\Counter.jsx</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React from &#39;react&#39;;</span>
<span class="line">import {makeAutoObservable} from &#39;mobx&#39;;</span>
<span class="line">import {observer,Observer,useObserver,useLocalObservable} from &#39;mobx-react&#39;;</span>
<span class="line">export default function () {</span>
<span class="line">+   const store = useLocalObservable(()=&gt;({</span>
<span class="line">+       number:1,</span>
<span class="line">+       add(){</span>
<span class="line">+           this.number++;</span>
<span class="line">+       }</span>
<span class="line">+   }));</span>
<span class="line">    return useObserver(()=&gt;(</span>
<span class="line">        &lt;&gt;</span>
<span class="line">          &lt;p&gt;{store.number}&lt;/p&gt;</span>
<span class="line">          &lt;button onClick={store.add}&gt;+&lt;/button&gt;</span>
<span class="line">        &lt;/&gt;</span>
<span class="line">      ));</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-6-todos" tabindex="-1"><a class="header-anchor" href="#_4-6-todos"><span>4.6 todos</span></a></h3><h4 id="_4-6-1-main-jsx" tabindex="-1"><a class="header-anchor" href="#_4-6-1-main-jsx"><span>4.6.1 main.jsx</span></a></h4><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createRoot <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react-dom/client&quot;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&quot;./App&quot;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> rootElement <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;root&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> root <span class="token operator">=</span> <span class="token function">createRoot</span><span class="token punctuation">(</span>rootElement<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">root<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>App<span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-6-2-app-jsx" tabindex="-1"><a class="header-anchor" href="#_4-6-2-app-jsx"><span>4.6.2 App.jsx</span></a></h4><p>src\\App.jsx</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">&quot;./store&quot;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> StoreContext <span class="token keyword">from</span> <span class="token string">&#39;./context&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> Todos <span class="token keyword">from</span> <span class="token string">&#39;./Todos&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> User <span class="token keyword">from</span> <span class="token string">&#39;./User&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token operator">&lt;</span>StoreContext<span class="token punctuation">.</span>Provider value<span class="token operator">=</span><span class="token punctuation">{</span>store<span class="token punctuation">}</span><span class="token operator">&gt;</span></span>
<span class="line">      <span class="token operator">&lt;</span>User <span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line">      <span class="token operator">&lt;</span>hr <span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line">      <span class="token operator">&lt;</span>Todos<span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">/</span>StoreContext<span class="token punctuation">.</span>Provider<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-6-3-context-jsx" tabindex="-1"><a class="header-anchor" href="#_4-6-3-context-jsx"><span>4.6.3 context.jsx</span></a></h4><p>src\\context.jsx</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> StoreContext <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> StoreContext<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-6-4-user-jsx" tabindex="-1"><a class="header-anchor" href="#_4-6-4-user-jsx"><span>4.6.4 User.jsx</span></a></h4><p>src\\User.jsx</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import { useContext,useRef } from &#39;react&#39;;</span>
<span class="line">import StoreContext from &#39;./context&#39;;</span>
<span class="line">import { observer } from &quot;mobx-react&quot;;</span>
<span class="line">const User = observer(function () {</span>
<span class="line">  const { userStore } = useContext(StoreContext);</span>
<span class="line">  const ref = useRef(null);</span>
<span class="line">  return (</span>
<span class="line">    &lt;div&gt;</span>
<span class="line">     {userStore.isLogin?(</span>
<span class="line">      &lt;&gt;</span>
<span class="line">      {userStore.username}&lt;button onClick={() =&gt; userStore.logout()}&gt;退出&lt;/button&gt;</span>
<span class="line">      &lt;/&gt;</span>
<span class="line">     ):(</span>
<span class="line">      &lt;&gt;</span>
<span class="line">      &lt;input ref={ref} type=&quot;text&quot; /&gt;</span>
<span class="line">      &lt;button onClick={() =&gt; userStore.login(ref.current.value)}&gt;登录&lt;/button&gt;</span>
<span class="line">      &lt;/&gt;</span>
<span class="line">     )}</span>
<span class="line">    &lt;/div&gt;</span>
<span class="line">  );</span>
<span class="line">});</span>
<span class="line">export default User;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-6-5-todos-jsx" tabindex="-1"><a class="header-anchor" href="#_4-6-5-todos-jsx"><span>4.6.5 Todos.jsx</span></a></h4><p>src\\Todos.jsx</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useContext <span class="token punctuation">,</span>useRef<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> StoreContext <span class="token keyword">from</span> <span class="token string">&#39;./context&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> observer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;mobx-react&quot;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span>TodoStore<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./store&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> Todo <span class="token operator">=</span> <span class="token function">observer</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>todo<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token operator">&lt;</span>li<span class="token operator">&gt;</span></span>
<span class="line">      <span class="token operator">&lt;</span>input</span>
<span class="line">        type<span class="token operator">=</span><span class="token string">&quot;checkbox&quot;</span></span>
<span class="line">        checked<span class="token operator">=</span><span class="token punctuation">{</span>todo<span class="token punctuation">.</span>completed<span class="token punctuation">}</span></span>
<span class="line">        onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> todo<span class="token punctuation">.</span><span class="token function">toggle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
<span class="line">      <span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line">      <span class="token punctuation">{</span>todo<span class="token punctuation">.</span>text<span class="token punctuation">}</span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> TodoList <span class="token operator">=</span> <span class="token function">observer</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token punctuation">{</span> todoStore <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useContext</span><span class="token punctuation">(</span>StoreContext<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span></span>
<span class="line">      <span class="token operator">&lt;</span>ul<span class="token operator">&gt;</span></span>
<span class="line">        <span class="token punctuation">{</span>todoStore<span class="token punctuation">.</span>list<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">todo<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span></span>
<span class="line">          <span class="token operator">&lt;</span>Todo todo<span class="token operator">=</span><span class="token punctuation">{</span>todo<span class="token punctuation">}</span> key<span class="token operator">=</span><span class="token punctuation">{</span>index<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line">        <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
<span class="line">      <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> TodoLeft <span class="token operator">=</span> <span class="token function">observer</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token punctuation">{</span> todoStore <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useContext</span><span class="token punctuation">(</span>StoreContext<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token operator">&lt;</span><span class="token operator">&gt;</span>未完成<span class="token operator">:</span> <span class="token punctuation">{</span>todoStore<span class="token punctuation">.</span>unCompletedCount<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> AddTodo <span class="token operator">=</span> <span class="token function">observer</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">AddTodo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token punctuation">{</span> todoStore <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useContext</span><span class="token punctuation">(</span>StoreContext<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">const</span> ref <span class="token operator">=</span> <span class="token function">useRef</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">&gt;</span></span>
<span class="line">      <span class="token operator">&lt;</span>input ref<span class="token operator">=</span><span class="token punctuation">{</span>ref<span class="token punctuation">}</span> type<span class="token operator">=</span><span class="token string">&quot;text&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line">      <span class="token operator">&lt;</span>button</span>
<span class="line">        onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token keyword">const</span> item <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TodoStore</span><span class="token punctuation">(</span>ref<span class="token punctuation">.</span>current<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">          todoStore<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">          ref<span class="token punctuation">.</span>current<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
<span class="line">      <span class="token operator">&gt;</span>新增<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line">  <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">observer</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">&gt;</span></span>
<span class="line">      <span class="token operator">&lt;</span>AddTodo <span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line">      <span class="token operator">&lt;</span>TodoList <span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line">      <span class="token operator">&lt;</span>TodoLeft <span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line">  <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-6-6-user-index-jsx" tabindex="-1"><a class="header-anchor" href="#_4-6-6-user-index-jsx"><span>4.6.6 user\\index.jsx</span></a></h4><p>src\\store\\user\\index.jsx</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> makeAutoObservable <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;mobx&quot;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">UserStore</span> <span class="token punctuation">{</span></span>
<span class="line">  username<span class="token operator">=</span><span class="token string">&#39;&#39;</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">makeAutoObservable</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">autoBind</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">get</span> <span class="token function">isLogin</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>username<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token function">login</span><span class="token punctuation">(</span><span class="token parameter">username</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>username <span class="token operator">=</span> username<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token function">logout</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>username <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">const</span> userStore <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">UserStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> userStore<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-6-7-todos-index-jsx" tabindex="-1"><a class="header-anchor" href="#_4-6-7-todos-index-jsx"><span>4.6.7 todos\\index.jsx</span></a></h4><p>src\\store\\todos\\index.jsx</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> makeAutoObservable <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;mobx&quot;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">TodoStore</span> <span class="token punctuation">{</span></span>
<span class="line">  list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">get</span> <span class="token function">unCompletedCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>list<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">todo</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token operator">!</span>todo<span class="token punctuation">.</span>completed<span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">makeAutoObservable</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">autoBind</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">todo</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>list<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>todo<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">const</span> todoStore <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TodoStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> todoStore<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-6-8-todo-jsx" tabindex="-1"><a class="header-anchor" href="#_4-6-8-todo-jsx"><span>4.6.8 todo.jsx</span></a></h4><p>src\\store\\todos\\todo.jsx</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> makeAutoObservable <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;mobx&quot;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">TodoStore</span> <span class="token punctuation">{</span></span>
<span class="line">  text <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span></span>
<span class="line">  completed <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">text</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">makeAutoObservable</span><span class="token punctuation">(</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">autoBind</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>text <span class="token operator">=</span> text<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token function">toggle</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>completed <span class="token operator">=</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>completed<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-6-9-store-index-jsx" tabindex="-1"><a class="header-anchor" href="#_4-6-9-store-index-jsx"><span>4.6.9 store\\index.jsx</span></a></h4><p>src\\store\\index.jsx</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> todoStore <span class="token keyword">from</span> <span class="token string">&quot;./todos&quot;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> userStore <span class="token keyword">from</span> <span class="token string">&quot;./user&quot;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token punctuation">{</span> todoStore<span class="token punctuation">,</span> userStore <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token punctuation">{</span> TodoStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./todos/todo&quot;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> store<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,114)])])}const c=n(p,[["render",t]]),r=JSON.parse('{"path":"/strong/155.3.1.mobx.usage.html","title":"","lang":"en-US","frontmatter":{},"git":{"updatedTime":1681290319000,"contributors":[{"name":"yutao","username":"yutao","email":"642231346@qq.com","commits":1,"url":"https://github.com/yutao"}],"changelog":[{"hash":"f5ab8c9d34991ec274f7f652439afe5b2afb6147","time":1681290319000,"email":"642231346@qq.com","author":"yutao","message":"modify"}]},"filePathRelative":"strong/155.3.1.mobx.usage.md"}');export{c as comp,r as data};
