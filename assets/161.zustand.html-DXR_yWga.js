import{_ as s,c as a,a as e,o as p}from"./app-CD1YpnS1.js";const t={};function l(i,n){return p(),a("div",null,[...n[0]||(n[0]=[e(`<h2 id="_1-前言" tabindex="-1"><a class="header-anchor" href="#_1-前言"><span>1.前言</span></a></h2><h3 id="_1-1-什么是zustand" tabindex="-1"><a class="header-anchor" href="#_1-1-什么是zustand"><span>1.1 什么是zustand</span></a></h3><ul><li><a href="http://www.godic.net/dicts/de/Zustand" target="_blank" rel="noopener noreferrer">Zustand</a>是一个德语单词，表示状态</li><li><a href="https://github.com/pmndrs/zustand" target="_blank" rel="noopener noreferrer">Zustand</a>是一个轻量级的<code>JavaScript</code>状态管理库，用于在React应用程序中管理状态</li><li><code>zustand</code>使用高阶函数和<code>hooks</code>来管理状态，具有极高的灵活性和易用性，使开发人员可以快速、方便地开发React应用程序</li><li><code>zustand</code>被称为当下复杂状态管理的最佳选择</li></ul><h3 id="_1-2-zustand和其他状态管理库的比较" tabindex="-1"><a class="header-anchor" href="#_1-2-zustand和其他状态管理库的比较"><span>1.2 zustand和其他状态管理库的比较</span></a></h3><ul><li>简洁易用：<code>zustand</code>具有简洁的API，不需要过多的配置，易于使用。它不需要学习复杂的概念和语法，可以快速上手</li><li>高效：<code>zustand</code>使用了高阶函数和hooks来管理状态，具有极高的效率和性能</li><li>灵活：<code>zustand</code>的灵活性极高，可以满足不同的业务需求。开发人员可以根据自己的需求来定制自己的状态管理方案</li><li>易于集成：<code>zustand</code>可以快速集成到现有的React项目中，不需要对现有代码进行大量的改动</li></ul><h3 id="_1-3-usesyncexternalstore" tabindex="-1"><a class="header-anchor" href="#_1-3-usesyncexternalstore"><span>1.3 useSyncExternalStore</span></a></h3><ul><li><a href="https://beta.reactjs.org/reference/react/useSyncExternalStore" target="_blank" rel="noopener noreferrer">useSyncExternalStore</a>是一个自定义 Hook，它提供了一种简单的方法来订阅外部状态管理器，并将其状态同步到 React 组件中</li><li><code>useSyncExternalStore</code>函数的第一个参数是一个订阅函数，它接收一个回调函数作为参数，当状态发生变化时，该回调函数将被调用。该回调函数接收两个参数：当前的状态值和上一个状态值</li><li><code>useSyncExternalStore</code>函数的第二个参数是一个获取状态值的函数。当组件需要获取当前状态值时，它将调用该函数并返回当前状态值</li><li><code>useSyncExternalStore</code> 函数返回一个状态值，该值表示当前的状态。当外部状态管理器更新状态时，组件将自动更新状态</li></ul><h3 id="_1-4-immer" tabindex="-1"><a class="header-anchor" href="#_1-4-immer"><span>1.4 immer</span></a></h3><ul><li>在React应用中我们不希望修改状态对象，但如果每次都创建新对象又会带来额外的性能开销</li><li>不可变数据结构可以每次都返回一个新的对象，又可以共享未修改的部分</li><li><a href="https://github.com/immerjs/immer" target="_blank" rel="noopener noreferrer">immer</a>以最小的成本实现了不可变数据结构</li><li>对 <code>draftState</code> 的修改都会反应到 <code>nextState</code> 上</li><li>而 <code>Immer</code> 使用的结构是共享的，<code>nextState</code> 在结构上又与 <code>currentState</code> 共享未修改的部分</li></ul><p><img src="https://img.zhufengpeixun.com/immergraph.gif" alt="immergraph.gif"></p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> produce <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;immer&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> baseState <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">ids</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">pos</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">1</span> </span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> nextState <span class="token operator">=</span> <span class="token function">produce</span><span class="token punctuation">(</span>baseState<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">draft</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  draft<span class="token punctuation">.</span>ids<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>baseState<span class="token punctuation">.</span>ids <span class="token operator">===</span> nextState<span class="token punctuation">.</span>ids<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//false</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>baseState<span class="token punctuation">.</span>pos <span class="token operator">===</span> nextState<span class="token punctuation">.</span>pos<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//true</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> produce <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;immer&#39;</span></span>
<span class="line"><span class="token keyword">const</span> baseState <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">list</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;2&#39;</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">produce</span><span class="token punctuation">(</span>baseState<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">draft</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  draft<span class="token punctuation">.</span>list<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&#39;3&#39;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>baseState<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-安装" tabindex="-1"><a class="header-anchor" href="#_2-安装"><span>2.安装</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">npm install zustand immer --save</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="_3-使用状态管理器" tabindex="-1"><a class="header-anchor" href="#_3-使用状态管理器"><span>3.使用状态管理器</span></a></h2><h3 id="_3-1-定义状态管理器" tabindex="-1"><a class="header-anchor" href="#_3-1-定义状态管理器"><span>3.1 定义状态管理器</span></a></h3><p>src\\App.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token comment">// 引入 zustand 库中的 create 函数</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> create <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./zustand&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * 定义了一个名为 useStore 的状态管理器，状态管理器有三个属性：number，add，minus</span>
<span class="line"> * number 属性代表状态管理器中的状态，add 和 minus 函数分别是更新 number 属性的方法</span>
<span class="line"> */</span></span>
<span class="line"><span class="token comment">// 创建一个名为 useStore 的状态管理器</span></span>
<span class="line"><span class="token comment">// 参数是一个createState方法，用来返回管理的状态</span></span>
<span class="line"><span class="token comment">// useStore也是一个函数，可以通过调用它返回管理的状态</span></span>
<span class="line"><span class="token keyword">const</span> useStore <span class="token operator">=</span> <span class="token function">create</span><span class="token punctuation">(</span><span class="token parameter"><span class="token keyword">set</span></span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 定义 number 属性，初始值为 0</span></span>
<span class="line">    <span class="token literal-property property">number</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">// 定义 name 属性，初始值为 Number</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Number&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">// 定义 add 函数，通过 set 函数更新状态</span></span>
<span class="line">    <span class="token function-variable function">add</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">set</span><span class="token punctuation">(</span><span class="token parameter">state</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">number</span><span class="token operator">:</span> state<span class="token punctuation">.</span>number <span class="token operator">+</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">// 定义 minus 函数，通过 set 函数更新状态</span></span>
<span class="line">    <span class="token function-variable function">minus</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">set</span><span class="token punctuation">(</span><span class="token parameter">state</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">number</span><span class="token operator">:</span> state<span class="token punctuation">.</span>number <span class="token operator">-</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-使用状态" tabindex="-1"><a class="header-anchor" href="#_3-2-使用状态"><span>3.2 使用状态</span></a></h3><p>src\\App.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">// 引入 zustand 库中的 create 函数</span>
<span class="line">import { create } from &#39;./zustand&#39;;</span>
<span class="line">/**</span>
<span class="line"> * 定义了一个名为 useStore 的状态管理器，状态管理器有三个属性：number，add，minus</span>
<span class="line"> * number 属性代表状态管理器中的状态，add 和 minus 函数分别是更新 number 属性的方法</span>
<span class="line"> */</span>
<span class="line">// 创建一个名为 useStore 的状态管理器</span>
<span class="line">const useStore = create(set =&gt; ({</span>
<span class="line">    // 定义 number 属性，初始值为 0</span>
<span class="line">    number: 0,</span>
<span class="line">    // 定义 name 属性，初始值为 Number</span>
<span class="line">    name: &#39;Number&#39;,</span>
<span class="line">    // 定义 add 函数，通过 set 函数更新状态</span>
<span class="line">    add: () =&gt; set(state =&gt; ({ number: state.number + 1 })),</span>
<span class="line">    // 定义 minus 函数，通过 set 函数更新状态</span>
<span class="line">    minus: () =&gt; set(state =&gt; ({ number: state.number - 1 }))</span>
<span class="line">}));</span>
<span class="line">// React组件展示了如何使用状态管理器中的状态和方法</span>
<span class="line">function App() {</span>
<span class="line">+    // 从useStore状态管理器中解构出了四个状态：name，number，add，minus</span>
<span class="line">+    const { name, number, add, minus } = useStore();</span>
<span class="line">+    return (</span>
<span class="line">+        &lt;div&gt;</span>
<span class="line">+            &lt;p&gt;{name}: {number}&lt;/p&gt;</span>
<span class="line">+            &lt;button onClick={add}&gt;+&lt;/button&gt;</span>
<span class="line">+            &lt;button onClick={minus}&gt;-&lt;/button&gt;</span>
<span class="line">+        &lt;/div&gt;</span>
<span class="line">+    );</span>
<span class="line">}</span>
<span class="line">export default App;</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-读取状态" tabindex="-1"><a class="header-anchor" href="#_4-读取状态"><span>4.读取状态</span></a></h2><h3 id="_4-1-zustand-index-js" tabindex="-1"><a class="header-anchor" href="#_4-1-zustand-index-js"><span>4.1 zustand\\index.js</span></a></h3><p>src\\zustand\\index.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">export</span> <span class="token operator">*</span> <span class="token keyword">from</span> <span class="token string">&#39;./react&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_4-2-react-js" tabindex="-1"><a class="header-anchor" href="#_4-2-react-js"><span>4.2 react.js</span></a></h3><p>src\\zustand\\react.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./vanilla&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">useStore</span><span class="token punctuation">(</span><span class="token parameter">api</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> api<span class="token punctuation">.</span><span class="token function">getState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">createImpl</span> <span class="token operator">=</span> <span class="token parameter">createState</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> api <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span>createState<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">useStore</span><span class="token punctuation">(</span>api<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">create</span> <span class="token operator">=</span> <span class="token parameter">createState</span> <span class="token operator">=&gt;</span> <span class="token function">createImpl</span><span class="token punctuation">(</span>createState<span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> create<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-vanilla-js" tabindex="-1"><a class="header-anchor" href="#_4-3-vanilla-js"><span>4.3 vanilla.js</span></a></h3><p>src\\zustand\\vanilla.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">const</span> <span class="token function-variable function">createStoreImpl</span> <span class="token operator">=</span> <span class="token parameter">createState</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> state<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">const</span> <span class="token function-variable function">getState</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> state<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">const</span> <span class="token function-variable function">setState</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">partial</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">const</span> nextState <span class="token operator">=</span> <span class="token keyword">typeof</span> partial <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span> <span class="token operator">?</span> <span class="token function">partial</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span> <span class="token operator">:</span> partial<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>Object<span class="token punctuation">.</span><span class="token function">is</span><span class="token punctuation">(</span>nextState<span class="token punctuation">,</span> state<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">const</span> previousState <span class="token operator">=</span> state<span class="token punctuation">;</span></span>
<span class="line">            state <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> state<span class="token punctuation">,</span> nextState<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">const</span> api <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">        getState<span class="token punctuation">,</span></span>
<span class="line">        setState</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    state <span class="token operator">=</span> <span class="token function">createState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> api<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">createStore</span> <span class="token operator">=</span> <span class="token parameter">createState</span> <span class="token operator">=&gt;</span> <span class="token function">createStoreImpl</span><span class="token punctuation">(</span>createState<span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> createStore<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-修改状态" tabindex="-1"><a class="header-anchor" href="#_5-修改状态"><span>5.修改状态</span></a></h2><h3 id="_5-1-vanilla-js" tabindex="-1"><a class="header-anchor" href="#_5-1-vanilla-js"><span>5.1 vanilla.js</span></a></h3><p>src\\zustand\\vanilla.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token comment">// 定义 createStoreImpl 函数，接收 createState 函数作为参数</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">createStoreImpl</span> <span class="token operator">=</span> <span class="token parameter">createState</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 定义变量 state 和 listeners</span></span>
<span class="line">    <span class="token keyword">let</span> state<span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>    <span class="token keyword">let</span> listeners <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// 定义函数 getState，返回 state 的值</span></span>
<span class="line">    <span class="token keyword">const</span> <span class="token function-variable function">getState</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> state<span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// 定义函数 setState，接收 partial 作为参数</span></span>
<span class="line">    <span class="token keyword">const</span> <span class="token function-variable function">setState</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">partial</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 根据 partial 的类型，判断 nextState 的值</span></span>
<span class="line">        <span class="token keyword">const</span> nextState <span class="token operator">=</span> <span class="token keyword">typeof</span> partial <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span> <span class="token operator">?</span> <span class="token function">partial</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span> <span class="token operator">:</span> partial<span class="token punctuation">;</span></span>
<span class="line">        <span class="token comment">// 如果 nextState 和 state 的值不同</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>Object<span class="token punctuation">.</span><span class="token function">is</span><span class="token punctuation">(</span>nextState<span class="token punctuation">,</span> state<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">// 记录上一个状态</span></span>
<span class="line">            <span class="token keyword">const</span> previousState <span class="token operator">=</span> state<span class="token punctuation">;</span></span>
<span class="line">            <span class="token comment">// 将 state 更新为 nextState</span></span>
<span class="line">            state <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> state<span class="token punctuation">,</span> nextState<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token comment">// 遍历 listeners，执行每个监听器的回调函数</span></span>
<span class="line"><span class="token operator">+</span>            listeners<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">listener</span> <span class="token operator">=&gt;</span> <span class="token function">listener</span><span class="token punctuation">(</span>state<span class="token punctuation">,</span> previousState<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">+</span>    <span class="token comment">// 定义函数 subscribe，接收 listener 作为参数</span></span>
<span class="line"><span class="token operator">+</span>    <span class="token keyword">const</span> <span class="token function-variable function">subscribe</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">listener</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>        <span class="token comment">// 将 listener 添加到 listeners 中</span></span>
<span class="line"><span class="token operator">+</span>        listeners<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>listener<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>        <span class="token comment">// 返回一个函数，用于从 listeners 中删除 listener</span></span>
<span class="line"><span class="token operator">+</span>        <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> listeners<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>listener<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token comment">// 定义变量 api，包含 getState、setState 和 subscribe 函数</span></span>
<span class="line">    <span class="token keyword">const</span> api <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">        getState<span class="token punctuation">,</span></span>
<span class="line">        setState<span class="token punctuation">,</span></span>
<span class="line"><span class="token operator">+</span>        subscribe</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token comment">// 调用 createState 函数，初始化 state 的值</span></span>
<span class="line"><span class="token operator">+</span>    state <span class="token operator">=</span> <span class="token function">createState</span><span class="token punctuation">(</span>setState<span class="token punctuation">,</span> getState<span class="token punctuation">,</span> api<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// 返回 api</span></span>
<span class="line">    <span class="token keyword">return</span> api<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 定义 createStore 函数，接收 createState 函数作为参数，返回 createStoreImpl(createState)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">createStore</span> <span class="token operator">=</span> <span class="token parameter">createState</span> <span class="token operator">=&gt;</span> <span class="token function">createStoreImpl</span><span class="token punctuation">(</span>createState<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 默认导出 createStore 函数</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> createStore<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-2-react-js" tabindex="-1"><a class="header-anchor" href="#_5-2-react-js"><span>5.2 react.js</span></a></h3><p>src\\zustand\\react.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">// 导入 createStore 函数</span>
<span class="line">import { createStore } from &#39;./vanilla&#39;;</span>
<span class="line">// 导入 useSyncExternalStore 函数</span>
<span class="line">+import { useSyncExternalStore } from &#39;react&#39;;</span>
<span class="line"></span>
<span class="line">// 定义 useStore 函数，接收 api 对象作为参数</span>
<span class="line">export function useStore(api) {</span>
<span class="line">    // 使用 useSyncExternalStore 函数从 api 中获取状态值</span>
<span class="line">+    let value = useSyncExternalStore(api.subscribe, api.getState);</span>
<span class="line">+    return value;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">// 定义 createImpl 函数，接收 createState 函数作为参数</span>
<span class="line">const createImpl = createState =&gt; {</span>
<span class="line">    // 调用 createStore 函数创建状态管理器</span>
<span class="line">    const api = createStore(createState);</span>
<span class="line">    // 返回一个函数，该函数将 api 对象传递给 useStore 函数</span>
<span class="line">    return () =&gt; useStore(api)</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">// 定义 create 函数，接收 createState 函数作为参数，返回 createImpl 函数的调用结果</span>
<span class="line">export const create = createState =&gt; createImpl(createState);</span>
<span class="line"></span>
<span class="line">// 默认导出 create 函数</span>
<span class="line">export default create;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-异步" tabindex="-1"><a class="header-anchor" href="#_6-异步"><span>6.异步</span></a></h2><ul><li>当你准备好时只需调用 <code>set</code>，<code>zustand</code> 不关心你的操作是否是异步的</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">// 引入 zustand 库中的 create 函数</span>
<span class="line">import { create } from &#39;./zustand&#39;;</span>
<span class="line">/**</span>
<span class="line"> * 定义了一个名为 useStore 的状态管理器，状态管理器有三个属性：number，add，minus</span>
<span class="line"> * number 属性代表状态管理器中的状态，add 和 minus 函数分别是更新 number 属性的方法</span>
<span class="line"> */</span>
<span class="line">// 创建一个名为 useStore 的状态管理器</span>
<span class="line">const useStore = create(set =&gt; ({</span>
<span class="line">    // 定义 number 属性，初始值为 0</span>
<span class="line">    number: 0,</span>
<span class="line">    // 定义 name 属性，初始值为 Number</span>
<span class="line">    name: &#39;Number&#39;,</span>
<span class="line">    // 定义 add 函数，通过 set 函数更新状态</span>
<span class="line">    add: () =&gt; set(state =&gt; ({ number: state.number + 1 })),</span>
<span class="line">    // 定义 minus 函数，通过 set 函数更新状态</span>
<span class="line">    minus: () =&gt; set(state =&gt; ({ number: state.number - 1 })),</span>
<span class="line">+ asyncAdd: () =&gt; {</span>
<span class="line">+     setTimeout(() =&gt; {</span>
<span class="line">+         set(state =&gt; ({ number: state.number + 1 }));</span>
<span class="line">+     }, 1000);</span>
<span class="line">+ }</span>
<span class="line">}));</span>
<span class="line">// React组件展示了如何使用状态管理器中的状态和方法</span>
<span class="line">function App() {</span>
<span class="line">    // 从useStore状态管理器中解构出了四个状态：name，number，add，minus</span>
<span class="line">+    const { name, number, add, minus, asyncAdd } = useStore();</span>
<span class="line">    return (</span>
<span class="line">        &lt;div&gt;</span>
<span class="line">            &lt;p&gt;{name}: {number}&lt;/p&gt;</span>
<span class="line">            &lt;button onClick={add}&gt;+&lt;/button&gt;</span>
<span class="line">            &lt;button onClick={minus}&gt;-&lt;/button&gt;</span>
<span class="line">+         &lt;button onClick={asyncAdd}&gt;async +&lt;/button&gt;</span>
<span class="line">        &lt;/div&gt;</span>
<span class="line">    );</span>
<span class="line">}</span>
<span class="line">export default App;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-日志中间件" tabindex="-1"><a class="header-anchor" href="#_7-日志中间件"><span>7.日志中间件</span></a></h2><ul><li>中间件是一个函数，用于增强store（即状态管理器）的功能</li><li>中间件可以截获<code>store</code>中的<code>set</code>方法调用并进行一些操作，例如日志记录、性能跟踪、异常处理等等</li><li>中间件提供了一种灵活且可扩展的方式来修改或增强store的行为，同时保持了store的独立性和可测试性</li><li>日志中间件是一个函数，它可以用作<code>store</code>的中间件来记录状态的变化和相关信息，例如时间戳、新旧状态等</li></ul><h3 id="_7-1-src-app-js" tabindex="-1"><a class="header-anchor" href="#_7-1-src-app-js"><span>7.1 src\\App.js</span></a></h3><p>src\\App.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import { create } from &#39;./zustand&#39;; // 导入 create 函数从 &#39;./zustand&#39; 模块中</span>
<span class="line">+import logger from &#39;./zustand/middleware/logger&#39;; // 导入 logger 中间件从 &#39;./zustand/middleware/logger&#39; 模块中</span>
<span class="line"></span>
<span class="line">// 创建一个名为 useStore 的状态钩子</span>
<span class="line">// 该状态钩子使用 logger 中间件</span>
<span class="line">// 该状态钩子的状态有 number, name, add, minus, asyncAdd 五个属性</span>
<span class="line">+const useStore = create(logger((set) =&gt; {</span>
<span class="line">    return {</span>
<span class="line">        number: 0,</span>
<span class="line">        name: &#39;Number&#39;,</span>
<span class="line">        add: () =&gt; set(state =&gt; ({ number: state.number + 1 })),</span>
<span class="line">        minus: () =&gt; set(state =&gt; ({ number: state.number - 1 })),</span>
<span class="line">        asyncAdd: () =&gt; {</span>
<span class="line">            setTimeout(() =&gt; {</span>
<span class="line">                set(state =&gt; ({ number: state.number + 1 }));</span>
<span class="line">            }, 1000);</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">}));</span>
<span class="line"></span>
<span class="line">// 定义一个函数组件 App</span>
<span class="line">// 该组件使用 useStore 状态钩子，解构出其状态对象的 number、name、add、minus 和 asyncAdd 属性</span>
<span class="line">// 在组件渲染时展示 number 和 name 属性值，并提供三个按钮：add、minus 和 asyncAdd，分别调用对应的函数</span>
<span class="line">function App() {</span>
<span class="line">    const { number, name, add, minus, asyncAdd } = useStore();</span>
<span class="line">    return (</span>
<span class="line">        &lt;div&gt;</span>
<span class="line">            &lt;p&gt;{name}:{number}&lt;/p&gt;</span>
<span class="line">            &lt;button onClick={add}&gt;+&lt;/button&gt;</span>
<span class="line">            &lt;button onClick={minus}&gt;-&lt;/button&gt;</span>
<span class="line">            &lt;button onClick={asyncAdd}&gt;async +&lt;/button&gt;</span>
<span class="line">        &lt;/div&gt;</span>
<span class="line">    );</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">export default App; // 导出 App 组件作为默认导出</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-2-logger-js" tabindex="-1"><a class="header-anchor" href="#_7-2-logger-js"><span>7.2 logger.js</span></a></h3><p>src\\zustand\\middleware\\logger.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token comment">// 定义了一个名为 logger 的函数，它是一个高阶函数，因为它接收了一个函数作为参数并返回了一个新的函数</span></span>
<span class="line"><span class="token comment">// 定义一个名为 logger 的常量，该常量是一个高阶函数，它接收一个名为 createState 的参数</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">logger</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">createState</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span></span>
<span class="line">    <span class="token comment">// 返回一个新的函数，该函数接收三个参数：set，get，api</span></span>
<span class="line">    <span class="token punctuation">(</span><span class="token parameter">set<span class="token punctuation">,</span> get<span class="token punctuation">,</span> api</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span></span>
<span class="line">        <span class="token comment">// 调用 createState 函数，并将三个参数作为它的参数</span></span>
<span class="line">        <span class="token function">createState</span><span class="token punctuation">(</span></span>
<span class="line">            <span class="token comment">// 返回一个函数，该函数接收任意数量的参数，并执行以下操作：</span></span>
<span class="line">            <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token comment">// 在控制台输出旧状态</span></span>
<span class="line">                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">old state:</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">                <span class="token comment">// 调用 set 函数，并将 args 作为它的参数</span></span>
<span class="line">                <span class="token function">set</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span></span>
<span class="line">                <span class="token comment">// 在控制台输出新状态</span></span>
<span class="line">                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">new state</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token comment">// 将 get 作为参数传递给 createState</span></span>
<span class="line">            get<span class="token punctuation">,</span></span>
<span class="line">            <span class="token comment">// 将 api 作为参数传递给 createState</span></span>
<span class="line">            api</span>
<span class="line">        <span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> logger<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-状态分片" tabindex="-1"><a class="header-anchor" href="#_8-状态分片"><span>8.状态分片</span></a></h2><ul><li>状态分片是将整个应用程序的状态(state)拆分为不同的部分，每个部分被称为状态分片(slice)</li><li>这样可以将状态(state)和状态更新的逻辑细分为多个独立的模块，从而使应用程序的状态管理更加清晰和可维护</li></ul><h3 id="_8-1-app-js" tabindex="-1"><a class="header-anchor" href="#_8-1-app-js"><span>8.1 App.js</span></a></h3><p>src\\App.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import { create } from &#39;./zustand&#39;; // 导入 create 函数从 &#39;./zustand&#39; 模块中</span>
<span class="line">import logger from &#39;./zustand/middleware/logger&#39;; // 导入 logger 中间件从 &#39;./zustand/middleware/logger&#39; 模块中</span>
<span class="line"></span>
<span class="line">// 创建一个名为 useStore 的状态钩子</span>
<span class="line">// 该状态钩子使用 logger 中间件</span>
<span class="line">// 该状态钩子的状态有 number, name, add, minus, asyncAdd 五个属性</span>
<span class="line">const useStore = create(logger((set) =&gt; {</span>
<span class="line">    return {</span>
<span class="line">        number: 0,</span>
<span class="line">        name: &#39;Number&#39;,</span>
<span class="line">        add: () =&gt; set(state =&gt; ({ number: state.number + 1 })),</span>
<span class="line">        minus: () =&gt; set(state =&gt; ({ number: state.number - 1 })),</span>
<span class="line">        asyncAdd: () =&gt; {</span>
<span class="line">            setTimeout(() =&gt; {</span>
<span class="line">                set(state =&gt; ({ number: state.number + 1 }));</span>
<span class="line">            }, 1000);</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">}));</span>
<span class="line"></span>
<span class="line">// 定义一个函数组件 App</span>
<span class="line">// 该组件使用 useStore 状态钩子，解构出其状态对象的 number、name、add、minus 和 asyncAdd 属性</span>
<span class="line">// 在组件渲染时展示 number 和 name 属性值，并提供三个按钮：add、minus 和 asyncAdd，分别调用对应的函数</span>
<span class="line">function App() {</span>
<span class="line">+    const { number, name, add, minus, asyncAdd } = useStore(state =&gt; (</span>
<span class="line">+        {</span>
<span class="line">+            number: state.number,</span>
<span class="line">+            add: state.add,</span>
<span class="line">+            minus: state.minus,</span>
<span class="line">+            asyncAdd: state.asyncAdd</span>
<span class="line">+        }));</span>
<span class="line">    return (</span>
<span class="line">        &lt;div&gt;</span>
<span class="line">            &lt;p&gt;{name}:{number}&lt;/p&gt;</span>
<span class="line">            &lt;button onClick={add}&gt;+&lt;/button&gt;</span>
<span class="line">            &lt;button onClick={minus}&gt;-&lt;/button&gt;</span>
<span class="line">            &lt;button onClick={asyncAdd}&gt;async +&lt;/button&gt;</span>
<span class="line">        &lt;/div&gt;</span>
<span class="line">    );</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">export default App; // 导出 App 组件作为默认导出</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-2-react-js" tabindex="-1"><a class="header-anchor" href="#_8-2-react-js"><span>8.2 react.js</span></a></h3><p>src\\zustand\\react.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">// 导入 createStore 函数</span>
<span class="line">import { createStore } from &#39;./vanilla&#39;;</span>
<span class="line">// 导入 useSyncExternalStore 函数</span>
<span class="line">+import { useSyncExternalStore, useRef, useCallback } from &#39;react&#39;;</span>
<span class="line">// 定义 useStore 函数，接收 api 对象作为参数</span>
<span class="line">+export function useStore(api, selector) {</span>
<span class="line">+    const lastSnapshotRef = useRef(null);</span>
<span class="line">+    const lastSelectionRef = useRef(null);</span>
<span class="line">+    const getSelection = useCallback(() =&gt; {</span>
<span class="line">+        let lastSelection = lastSelectionRef.current;</span>
<span class="line">+        if (lastSelection === null) {</span>
<span class="line">+            const nextSnapShot = api.getState();</span>
<span class="line">+            lastSelection = selector(nextSnapShot);</span>
<span class="line">+            lastSnapshotRef.current = nextSnapShot;</span>
<span class="line">+            lastSelectionRef.current = lastSelection;</span>
<span class="line">+            return lastSelection;</span>
<span class="line">+        }</span>
<span class="line">+        const lastSnapshot = lastSnapshotRef.current;</span>
<span class="line">+        const nextSnapShot = api.getState();</span>
<span class="line">+        if (Object.is(lastSnapshot, nextSnapShot)) {</span>
<span class="line">+            return lastSelection;</span>
<span class="line">+        }</span>
<span class="line">+        const nextSelection = selector(nextSnapShot);</span>
<span class="line">+        lastSnapshotRef.current = nextSnapShot;</span>
<span class="line">+        lastSelectionRef.current = nextSelection;</span>
<span class="line">+        return nextSelection;</span>
<span class="line">+    }, []);</span>
<span class="line">    // 使用 useSyncExternalStore 函数从 api 中获取状态值</span>
<span class="line">+    let value = useSyncExternalStore(api.subscribe, getSelection);</span>
<span class="line">    return value;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">// 定义 createImpl 函数，接收 createState 函数作为参数</span>
<span class="line">const createImpl = createState =&gt; {</span>
<span class="line">    // 调用 createStore 函数创建状态管理器</span>
<span class="line">    const api = createStore(createState);</span>
<span class="line">    // 返回一个函数，该函数将 api 对象传递给 useStore 函数</span>
<span class="line">+    return (getSelection) =&gt; useStore(api, getSelection)</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">// 定义 create 函数，接收 createState 函数作为参数，返回 createImpl 函数的调用结果</span>
<span class="line">export const create = createState =&gt; createImpl(createState);</span>
<span class="line"></span>
<span class="line">// 默认导出 create 函数</span>
<span class="line">export default create;</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-persist中间件" tabindex="-1"><a class="header-anchor" href="#_9-persist中间件"><span>9. Persist中间件</span></a></h2><h3 id="_9-1-src-app-js" tabindex="-1"><a class="header-anchor" href="#_9-1-src-app-js"><span>9.1 src\\App.js</span></a></h3><p>src\\App.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import { create } from &#39;./zustand&#39;; // 导入 create 函数从 &#39;./zustand&#39; 模块中</span>
<span class="line">import logger from &#39;./zustand/middleware/logger&#39;; // 导入 logger 中间件从 &#39;./zustand/middleware/logger&#39; 模块中</span>
<span class="line">+import { persist, createJSONStorage } from &#39;./zustand/middleware/persist&#39;</span>
<span class="line">// 创建一个名为 useStore 的状态钩子</span>
<span class="line">// 该状态钩子使用 logger 中间件</span>
<span class="line">// 该状态钩子的状态有 number, name, add, minus, asyncAdd 五个属性</span>
<span class="line">+const useStore = create(persist((set) =&gt; {</span>
<span class="line">    return {</span>
<span class="line">        number: 0,</span>
<span class="line">        name: &#39;Number&#39;,</span>
<span class="line">        add: () =&gt; set(state =&gt; ({ number: state.number + 1 })),</span>
<span class="line">        minus: () =&gt; set(state =&gt; ({ number: state.number - 1 })),</span>
<span class="line">        asyncAdd: () =&gt; {</span>
<span class="line">            setTimeout(() =&gt; {</span>
<span class="line">                set(state =&gt; ({ number: state.number + 1 }));</span>
<span class="line">            }, 1000);</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">+}, {</span>
<span class="line">+    name: &#39;counter&#39;, // unique name</span>
<span class="line">+    storage: createJSONStorage(sessionStorage)</span>
<span class="line">+}));</span>
<span class="line">// 定义一个函数组件 App</span>
<span class="line">// 该组件使用 useStore 状态钩子，解构出其状态对象的 number、name、add、minus 和 asyncAdd 属性</span>
<span class="line">// 在组件渲染时展示 number 和 name 属性值，并提供三个按钮：add、minus 和 asyncAdd，分别调用对应的函数</span>
<span class="line">function App() {</span>
<span class="line">    const { number, name, add, minus, asyncAdd } = useStore(state =&gt; (</span>
<span class="line">        {</span>
<span class="line">            number: state.number,</span>
<span class="line">            name: state.name,</span>
<span class="line">            add: state.add,</span>
<span class="line">            minus: state.minus,</span>
<span class="line">            asyncAdd: state.asyncAdd</span>
<span class="line">        }));</span>
<span class="line">    return (</span>
<span class="line">        &lt;div&gt;</span>
<span class="line">            &lt;p&gt;{name}:{number}&lt;/p&gt;</span>
<span class="line">            &lt;button onClick={add}&gt;+&lt;/button&gt;</span>
<span class="line">            &lt;button onClick={minus}&gt;-&lt;/button&gt;</span>
<span class="line">            &lt;button onClick={asyncAdd}&gt;async +&lt;/button&gt;</span>
<span class="line">        &lt;/div&gt;</span>
<span class="line">    );</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">export default App; // 导出 App 组件作为默认导出</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-2-persist-js" tabindex="-1"><a class="header-anchor" href="#_9-2-persist-js"><span>9.2 persist.js</span></a></h3><p>src\\zustand\\middleware\\persist.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">createJSONStorage</span><span class="token punctuation">(</span><span class="token parameter">storage</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> persistStorage <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function-variable function">getItem</span><span class="token operator">:</span> <span class="token parameter">name</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">const</span> str <span class="token operator">=</span> storage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">return</span> str <span class="token operator">?</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token function-variable function">setItem</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> newValue</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> storage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> persistStorage<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">persist</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">createState<span class="token punctuation">,</span> <span class="token punctuation">{</span> name<span class="token punctuation">,</span> storage <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token parameter">set<span class="token punctuation">,</span> get<span class="token punctuation">,</span> api</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">createState</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token function">set</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            storage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span> get<span class="token punctuation">,</span> api<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token function">queueMicrotask</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token function">set</span><span class="token punctuation">(</span>storage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span> result<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_10-immer中间件" tabindex="-1"><a class="header-anchor" href="#_10-immer中间件"><span>10. immer中间件</span></a></h2><h3 id="_10-1-src-app-js" tabindex="-1"><a class="header-anchor" href="#_10-1-src-app-js"><span>10.1 src\\App.js</span></a></h3><p>src\\App.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import { create } from &#39;./zustand&#39;; // 导入 create 函数从 &#39;./zustand&#39; 模块中</span>
<span class="line">import logger from &#39;./zustand/middleware/logger&#39;; // 导入 logger 中间件从 &#39;./zustand/middleware/logger&#39; 模块中</span>
<span class="line">import { persist, createJSONStorage } from &#39;./zustand/middleware/persist&#39;</span>
<span class="line">+import { immer } from &#39;./zustand/middleware/immer&#39;</span>
<span class="line">// 创建一个名为 useStore 的状态钩子</span>
<span class="line">// 该状态钩子使用 logger 中间件</span>
<span class="line">// 该状态钩子的状态有 number, name, add, minus, asyncAdd 五个属性</span>
<span class="line">+const useStore = create(immer((set) =&gt; {</span>
<span class="line">    return {</span>
<span class="line">        number: 0,</span>
<span class="line">        name: &#39;Number&#39;,</span>
<span class="line">+        add: () =&gt; set(state =&gt; { state.number += 1 }),</span>
<span class="line">+        minus: () =&gt; set(state =&gt; { state.number -= 1 }),</span>
<span class="line">        asyncAdd: () =&gt; {</span>
<span class="line">            setTimeout(() =&gt; {</span>
<span class="line">                set(state =&gt; ({ number: state.number + 1 }));</span>
<span class="line">            }, 1000);</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">}));</span>
<span class="line">// 定义一个函数组件 App</span>
<span class="line">// 该组件使用 useStore 状态钩子，解构出其状态对象的 number、name、add、minus 和 asyncAdd 属性</span>
<span class="line">// 在组件渲染时展示 number 和 name 属性值，并提供三个按钮：add、minus 和 asyncAdd，分别调用对应的函数</span>
<span class="line">function App() {</span>
<span class="line">    const { number, name, add, minus, asyncAdd } = useStore(state =&gt; (</span>
<span class="line">        {</span>
<span class="line">            number: state.number,</span>
<span class="line">            name: state.name,</span>
<span class="line">            add: state.add,</span>
<span class="line">            minus: state.minus,</span>
<span class="line">            asyncAdd: state.asyncAdd</span>
<span class="line">        }));</span>
<span class="line">    return (</span>
<span class="line">        &lt;div&gt;</span>
<span class="line">            &lt;p&gt;{name}:{number}&lt;/p&gt;</span>
<span class="line">            &lt;button onClick={add}&gt;+&lt;/button&gt;</span>
<span class="line">            &lt;button onClick={minus}&gt;-&lt;/button&gt;</span>
<span class="line">            &lt;button onClick={asyncAdd}&gt;async +&lt;/button&gt;</span>
<span class="line">        &lt;/div&gt;</span>
<span class="line">    );</span>
<span class="line">}</span>
<span class="line">export default App; // 导出 App 组件作为默认导出</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10-2-immer-js" tabindex="-1"><a class="header-anchor" href="#_10-2-immer-js"><span>10.2 immer.js</span></a></h3><p>src\\zustand\\middleware\\immer.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> produce <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;immer&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">immer</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">initializer</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token parameter">set<span class="token punctuation">,</span> get<span class="token punctuation">,</span> store</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    store<span class="token punctuation">.</span><span class="token function-variable function">setState</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">updater</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">const</span> nextState <span class="token operator">=</span> <span class="token function">produce</span><span class="token punctuation">(</span>updater<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token function">set</span><span class="token punctuation">(</span>nextState<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token function">initializer</span><span class="token punctuation">(</span>store<span class="token punctuation">.</span>setState<span class="token punctuation">,</span> get<span class="token punctuation">,</span> store<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token punctuation">{</span> immer <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,71)])])}const o=s(t,[["render",l]]),r=JSON.parse('{"path":"/strong/161.zustand.html","title":"","lang":"en-US","frontmatter":{},"git":{"updatedTime":1681290319000,"contributors":[{"name":"yutao","username":"yutao","email":"642231346@qq.com","commits":1,"url":"https://github.com/yutao"}],"changelog":[{"hash":"f5ab8c9d34991ec274f7f652439afe5b2afb6147","time":1681290319000,"email":"642231346@qq.com","author":"yutao","message":"modify"}]},"filePathRelative":"strong/161.zustand.md"}');export{o as comp,r as data};
