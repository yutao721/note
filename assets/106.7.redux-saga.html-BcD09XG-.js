import{_ as s,c as a,a as e,o as p}from"./app-CD1YpnS1.js";const l={};function t(i,n){return p(),a("div",null,[...n[0]||(n[0]=[e(`<h2 id="_1-redux-saga" tabindex="-1"><a class="header-anchor" href="#_1-redux-saga"><span>1. redux-saga</span></a></h2><ul><li><a href="https://redux-saga-in-chinese.js.org/" target="_blank" rel="noopener noreferrer">redux-saga</a> 是一个 redux 的中间件，而中间件的作用是为 redux 提供额外的功能。</li><li>在 reducers 中的所有操作都是同步的并且是纯粹的，即 reducer 都是纯函数，纯函数是指一个函数的返回结果只依赖于它的参数，并且在执行过程中不会对外部产生副作用，即给它传什么，就吐出什么。</li><li>但是在实际的应用开发中，我们希望做一些异步的（如Ajax请求）且不纯粹的操作（如改变外部的状态），这些在函数式编程范式中被称为“副作用”。</li></ul><blockquote><p>redux-saga 就是用来处理上述副作用（异步任务）的一个中间件。它是一个接收事件，并可能触发新事件的过程管理者，为你的应用管理复杂的流程。</p></blockquote><h2 id="_2-redux-saga工作原理" tabindex="-1"><a class="header-anchor" href="#_2-redux-saga工作原理"><span>2. redux-saga工作原理</span></a></h2><ul><li>sages 采用 Generator 函数来 yield Effects（包含指令的文本对象）</li><li>Generator 函数的作用是可以暂停执行，再次执行的时候从上次暂停的地方继续执行</li><li>Effect 是一个简单的对象，该对象包含了一些给 middleware 解释执行的信息。</li><li>你可以通过使用 effects API 如 fork，call，take，put，cancel 等来创建 Effect。</li></ul><h2 id="_3-redux-saga分类" tabindex="-1"><a class="header-anchor" href="#_3-redux-saga分类"><span>3. redux-saga分类</span></a></h2><ul><li>worker saga 做具体的工作，如调用API，进行异步请求，获取异步封装结果</li><li>watcher saga 监听被dispatch的actions,当接受到action或者知道其被触发时，调用worker执行任务</li><li>root saga 立即启动saga的唯一入口</li></ul><h3 id="_3-1-saga" tabindex="-1"><a class="header-anchor" href="#_3-1-saga"><span>3.1 saga</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"></span>
<span class="line"><span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">rootSaga</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">//每次执行next会产出一个effect(指令对象)</span></span>
<span class="line">    <span class="token comment">//type用来区分不同的指令 ，比如说PUT是表示想向仓库派发一个action </span></span>
<span class="line">    <span class="token keyword">yield</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;PUT&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">action</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;ADD&quot;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">//还可以产出一个promise</span></span>
<span class="line">    <span class="token keyword">yield</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token parameter">resolve</span> <span class="token operator">=&gt;</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> <span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">yield</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;PUT&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">action</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;MINUS&quot;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">runSaga</span><span class="token punctuation">(</span><span class="token parameter">saga</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">//执行生成器，得到迭代器</span></span>
<span class="line">    <span class="token keyword">const</span> it <span class="token operator">=</span> <span class="token function">saga</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">const</span> <span class="token punctuation">{</span> done<span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> effect <span class="token punctuation">}</span> <span class="token operator">=</span> it<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>done<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">if</span> <span class="token punctuation">(</span>effect <span class="token keyword">instanceof</span> <span class="token class-name">Promise</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                effect<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>next<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>effect<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token string">&#39;PUT&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">向仓库派发一个动作</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>effect<span class="token punctuation">.</span>action<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token function">runSaga</span><span class="token punctuation">(</span>rootSaga<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-saga" tabindex="-1"><a class="header-anchor" href="#_3-2-saga"><span>3.2 saga</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">function</span> <span class="token operator">*</span> <span class="token function">gen</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">yield</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">yield</span> <span class="token number">2</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">yield</span> <span class="token number">3</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">let</span> it <span class="token operator">=</span> <span class="token function">gen</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>it<span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span>iterator<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> r1 <span class="token operator">=</span> it<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>r1<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//let r2 = it.next();</span></span>
<span class="line"><span class="token comment">//let r2 = it.throw();</span></span>
<span class="line"><span class="token keyword">let</span> r2 <span class="token operator">=</span> it<span class="token punctuation">.</span><span class="token function">return</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>r2<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> r3 <span class="token operator">=</span> it<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>r3<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> r4 <span class="token operator">=</span> it<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>r4<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-once" tabindex="-1"><a class="header-anchor" href="#_3-3-once"><span>3.3 once</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">let</span> EventEmitter <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;events&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> e <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">EventEmitter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">e<span class="token punctuation">.</span><span class="token function">once</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;clicked&#39;</span><span class="token punctuation">,</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">e<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;data&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">e<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;data&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-计数器" tabindex="-1"><a class="header-anchor" href="#_4-计数器"><span>4. 计数器</span></a></h2><h3 id="_4-1-index-js" tabindex="-1"><a class="header-anchor" href="#_4-1-index-js"><span>4.1 index.js</span></a></h3><p>src/index.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span></span>
<span class="line"><span class="token keyword">import</span> ReactDOM <span class="token keyword">from</span> <span class="token string">&#39;react-dom&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> Counter <span class="token keyword">from</span> <span class="token string">&#39;./components/Counter&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span>Provider<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-redux&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">&#39;./store&#39;</span><span class="token punctuation">;</span></span>
<span class="line">ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>Provider store<span class="token operator">=</span><span class="token punctuation">{</span>store<span class="token punctuation">}</span><span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span>Counter<span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line"> <span class="token operator">&lt;</span><span class="token operator">/</span>Provider<span class="token operator">&gt;</span><span class="token punctuation">,</span>document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span>&#39;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-rootsaga-js" tabindex="-1"><a class="header-anchor" href="#_4-2-rootsaga-js"><span>4.2 rootSaga.js</span></a></h3><p>src\\store\\rootSaga.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span>put<span class="token punctuation">,</span>take<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;redux-saga/effects&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> types <span class="token keyword">from</span> <span class="token string">&#39;./action-types&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">delay</span><span class="token punctuation">(</span><span class="token parameter">ms</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">setTimeout</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> ms<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token operator">*</span> <span class="token function">workerSaga</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">yield</span> <span class="token function">delay</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">yield</span> <span class="token function">put</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">type</span><span class="token operator">:</span>actionTypes<span class="token punctuation">.</span><span class="token constant">ADD</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token operator">*</span> <span class="token function">watcherSaga</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">yield</span> <span class="token function">take</span><span class="token punctuation">(</span>actionTypes<span class="token punctuation">.</span><span class="token constant">ASYNC_ADD</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">yield</span> <span class="token function">workerSaga</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">rootSaga</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">yield</span> <span class="token function">watcherSaga</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-counter-js" tabindex="-1"><a class="header-anchor" href="#_4-3-counter-js"><span>4.3 Counter.js</span></a></h3><p>src/components/Counter.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> actionTypes <span class="token keyword">from</span> <span class="token string">&#39;../store/action-types&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useSelector<span class="token punctuation">,</span> useDispatch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-redux&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">Counter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> number <span class="token operator">=</span> <span class="token function">useSelector</span><span class="token punctuation">(</span><span class="token parameter">state</span> <span class="token operator">=&gt;</span> state<span class="token punctuation">.</span>number<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">const</span> dispatch <span class="token operator">=</span> <span class="token function">useDispatch</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">        <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span></span>
<span class="line">            <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span><span class="token punctuation">{</span>number<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span></span>
<span class="line">            <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> actionTypes<span class="token punctuation">.</span><span class="token constant">ASYNC_ADD</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token operator">+</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span></span>
<span class="line">        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> Counter<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-4-index-js" tabindex="-1"><a class="header-anchor" href="#_4-4-index-js"><span>4.4 index.js</span></a></h3><p>src/store/index.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span>createStore<span class="token punctuation">,</span> applyMiddleware<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;redux&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> reducer <span class="token keyword">from</span> <span class="token string">&#39;./reducer&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> createSagaMiddleware <span class="token keyword">from</span> <span class="token string">&#39;redux-saga&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> rootSaga <span class="token keyword">from</span> <span class="token string">&#39;./sagas&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> sagaMiddleware<span class="token operator">=</span><span class="token function">createSagaMiddleware</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> store<span class="token operator">=</span><span class="token function">applyMiddleware</span><span class="token punctuation">(</span>sagaMiddleware<span class="token punctuation">)</span><span class="token punctuation">(</span>createStore<span class="token punctuation">)</span><span class="token punctuation">(</span>reducer<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">sagaMiddleware<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span>rootSaga<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">window<span class="token punctuation">.</span>store<span class="token operator">=</span>store<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> store<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-5-action-types-js" tabindex="-1"><a class="header-anchor" href="#_4-5-action-types-js"><span>4.5 action-types.js</span></a></h3><p>src/store/action-types.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">ASYNC_ADD</span><span class="token operator">=</span><span class="token string">&#39;ASYNC_ADD&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">ADD</span><span class="token operator">=</span><span class="token string">&#39;ADD&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-6-reducer-js" tabindex="-1"><a class="header-anchor" href="#_4-6-reducer-js"><span>4.6 reducer.js</span></a></h3><p>src/store/reducer.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> types <span class="token keyword">from</span> <span class="token string">&#39;./action-types&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">reducer</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token operator">=</span><span class="token punctuation">{</span><span class="token literal-property property">number</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">,</span>action</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">switch</span><span class="token punctuation">(</span>action<span class="token punctuation">.</span>type<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">case</span> types<span class="token punctuation">.</span><span class="token constant">ADD</span><span class="token operator">:</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token literal-property property">number</span><span class="token operator">:</span> state<span class="token punctuation">.</span>number<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">default</span><span class="token operator">:</span></span>
<span class="line">            <span class="token keyword">return</span> state<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-实现take" tabindex="-1"><a class="header-anchor" href="#_5-实现take"><span>5. 实现take</span></a></h2><ul><li><a href="https://github.com/redux-saga/redux-saga/blob/master/packages/core/src/internal/runSaga.js" target="_blank" rel="noopener noreferrer">runSaga.js</a></li></ul><h3 id="_5-1-effecttypes-js" tabindex="-1"><a class="header-anchor" href="#_5-1-effecttypes-js"><span>5.1 effectTypes.js</span></a></h3><p>src\\redux-saga\\effectTypes.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">TAKE</span> <span class="token operator">=</span> <span class="token string">&#39;TAKE&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">PUT</span> <span class="token operator">=</span> <span class="token string">&#39;PUT&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-2-effects-js" tabindex="-1"><a class="header-anchor" href="#_5-2-effects-js"><span>5.2 effects.js</span></a></h3><p>src\\redux-saga\\effects.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> effectTypes <span class="token keyword">from</span> <span class="token string">&#39;./effectTypes&#39;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">take</span><span class="token punctuation">(</span><span class="token parameter">actionType</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> effectTypes<span class="token punctuation">.</span><span class="token constant">TAKE</span><span class="token punctuation">,</span> actionType<span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">put</span><span class="token punctuation">(</span><span class="token parameter">action</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> effectTypes<span class="token punctuation">.</span><span class="token constant">PUT</span><span class="token punctuation">,</span> action <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-3-runsaga-js" tabindex="-1"><a class="header-anchor" href="#_5-3-runsaga-js"><span>5.3 runSaga.js</span></a></h3><p>src\\redux-saga\\runSaga.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> effectTypes <span class="token keyword">from</span> <span class="token string">&#39;./effectTypes&#39;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">runSaga</span><span class="token punctuation">(</span><span class="token parameter">env<span class="token punctuation">,</span> saga</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> <span class="token punctuation">{</span> channel<span class="token punctuation">,</span> dispatch <span class="token punctuation">}</span> <span class="token operator">=</span> env<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">let</span> it <span class="token operator">=</span> <span class="token keyword">typeof</span> saga <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token operator">?</span><span class="token function">saga</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span>saga<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">let</span> <span class="token punctuation">{</span><span class="token literal-property property">value</span><span class="token operator">:</span>effect<span class="token punctuation">,</span>done<span class="token punctuation">}</span> <span class="token operator">=</span> it<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>done<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> effect<span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span>iterator<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                <span class="token function">runSaga</span><span class="token punctuation">(</span>env<span class="token punctuation">,</span>effect<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//不会阻止当前saga继续向后走</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>effect <span class="token keyword">instanceof</span> <span class="token class-name">Promise</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                effect<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>next<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span></span>
<span class="line">                <span class="token keyword">switch</span> <span class="token punctuation">(</span>effect<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token keyword">case</span> effectTypes<span class="token punctuation">.</span><span class="token constant">TAKE</span><span class="token operator">:</span></span>
<span class="line">                        channel<span class="token punctuation">.</span><span class="token function">once</span><span class="token punctuation">(</span>effect<span class="token punctuation">.</span>actionType<span class="token punctuation">,</span>next<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                        <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line">                    <span class="token keyword">case</span> effectTypes<span class="token punctuation">.</span><span class="token constant">PUT</span><span class="token operator">:</span></span>
<span class="line">                        <span class="token function">dispatch</span><span class="token punctuation">(</span>effect<span class="token punctuation">.</span>action<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                        <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                        <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line">                    <span class="token keyword">default</span><span class="token operator">:</span></span>
<span class="line">                        <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line">               <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-4-index-js" tabindex="-1"><a class="header-anchor" href="#_5-4-index-js"><span>5.4 index.js</span></a></h3><p>redux-saga/index.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> EventEmitter <span class="token keyword">from</span> <span class="token string">&#39;events&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> runSaga <span class="token keyword">from</span> <span class="token string">&#39;./runSaga&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">createSagaMiddleware</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> channel <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">EventEmitter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">let</span> boundRunSaga<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">sagaMiddleware</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>getState<span class="token punctuation">,</span>dispatch<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        boundRunSaga<span class="token operator">=</span><span class="token function">runSaga</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span><span class="token punctuation">{</span>channel<span class="token punctuation">,</span>dispatch<span class="token punctuation">,</span>getState<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">action</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">next</span><span class="token punctuation">(</span>action<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                channel<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span>action<span class="token punctuation">.</span>type<span class="token punctuation">,</span> action<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token keyword">return</span> result<span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    sagaMiddleware<span class="token punctuation">.</span><span class="token function-variable function">run</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">saga</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token function">boundRunSaga</span><span class="token punctuation">(</span>saga<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> sagaMiddleware<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-支持fork" tabindex="-1"><a class="header-anchor" href="#_6-支持fork"><span>6. 支持fork</span></a></h2><h3 id="_6-1-sagas-js" tabindex="-1"><a class="header-anchor" href="#_6-1-sagas-js"><span>6.1 sagas.js</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">+import { put, takeEvery } from &#39;../redux-saga/effects&#39;;</span>
<span class="line">import * as actionTypes from &#39;./action-types&#39;;</span>
<span class="line">+const delay = (ms)=&gt;{</span>
<span class="line">+    return new Promise(resolve=&gt;{</span>
<span class="line">+        setTimeout(resolve,ms);</span>
<span class="line">+    });</span>
<span class="line">+}</span>
<span class="line">+export function* workerSaga() {</span>
<span class="line">+    yield delay(1000);</span>
<span class="line">+    yield put({ type: actionTypes.ADD });</span>
<span class="line">+}</span>
<span class="line">+function * watcherSaga(){</span>
<span class="line">+    const action = yield take(actionTypes.ASYNC_ADD);</span>
<span class="line">+    yield fork(workerSaga);</span>
<span class="line">+}</span>
<span class="line">+export default function* rootSaga() {</span>
<span class="line">+   yield watcherSaga();</span>
<span class="line">+}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-2-effecttypes-js" tabindex="-1"><a class="header-anchor" href="#_6-2-effecttypes-js"><span>6.2 effectTypes.js</span></a></h3><p>src\\redux-saga\\effectTypes.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">export const TAKE = &#39;TAKE&#39;;</span>
<span class="line">export const PUT = &#39;PUT&#39;;</span>
<span class="line">+export const FORK = &#39;FORK&#39;;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-3-effects-js" tabindex="-1"><a class="header-anchor" href="#_6-3-effects-js"><span>6.3 effects.js</span></a></h3><p>src\\redux-saga\\effects.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import * as effectTypes from &#39;./effectTypes&#39;</span>
<span class="line">export function take(actionType) {</span>
<span class="line">    return { type: effectTypes.TAKE, actionType }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">export function put(action) {</span>
<span class="line">    return { type: effectTypes.PUT, action }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">+export function fork(saga) {</span>
<span class="line">+    return { type: effectTypes.FORK, saga };</span>
<span class="line">+}</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-4-runsaga-js" tabindex="-1"><a class="header-anchor" href="#_6-4-runsaga-js"><span>6.4 runSaga.js</span></a></h3><p>src\\redux-saga\\runSaga.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import * as effectTypes from &#39;./effectTypes&#39;</span>
<span class="line">export default function runSaga(env, saga) {</span>
<span class="line">    let { channel, dispatch } = env;</span>
<span class="line">    let it = typeof saga == &#39;function&#39; ? saga() : saga;</span>
<span class="line">    function next(value) {</span>
<span class="line">        let { value: effect, done } = it.next(value);</span>
<span class="line">        if (!done) {</span>
<span class="line">            if (typeof effect[Symbol.iterator] == &#39;function&#39;) {</span>
<span class="line">                runSaga(env,effect);</span>
<span class="line">                next();</span>
<span class="line">            } else {</span>
<span class="line">                switch (effect.type) {</span>
<span class="line">                    case effectTypes.TAKE:</span>
<span class="line">                        channel.take(effect.actionType, next);</span>
<span class="line">                        break;</span>
<span class="line">                    case effectTypes.PUT:</span>
<span class="line">                        dispatch(effect.action);</span>
<span class="line">                        next();</span>
<span class="line">                        break;</span>
<span class="line">+                    case effectTypes.FORK:</span>
<span class="line">+                        runSaga(env,effect.saga);</span>
<span class="line">+                        next();</span>
<span class="line">+                        break;</span>
<span class="line">                    default:</span>
<span class="line">                        break;</span>
<span class="line">                }</span>
<span class="line">            }</span>
<span class="line"></span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">    next();</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-支持takeevery" tabindex="-1"><a class="header-anchor" href="#_7-支持takeevery"><span>7. 支持takeEvery</span></a></h2><ul><li>一个 task 就像是一个在后台运行的进程，在基于redux-saga的应用程序中，可以同时运行多个task</li><li>通过 fork 函数来创建 task</li></ul><h3 id="_7-1-sagas-js" tabindex="-1"><a class="header-anchor" href="#_7-1-sagas-js"><span>7.1 sagas.js</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">+import { put, takeEvery } from &#39;../redux-saga/effects&#39;;</span>
<span class="line">import * as actionTypes from &#39;./action-types&#39;;</span>
<span class="line">export function* add() {</span>
<span class="line">    yield put({ type: actionTypes.ADD });</span>
<span class="line">}</span>
<span class="line">export default function* rootSaga() {</span>
<span class="line">+    yield takeEvery(actionTypes.ASYNC_ADD,add);</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-2-effects-js" tabindex="-1"><a class="header-anchor" href="#_7-2-effects-js"><span>7.2 effects.js</span></a></h3><p>src\\redux-saga\\effects.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import * as effectTypes from &#39;./effectTypes&#39;</span>
<span class="line">export function take(actionType) {</span>
<span class="line">    return { type: effectTypes.TAKE, actionType }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">export function put(action) {</span>
<span class="line">    return { type: effectTypes.PUT, action }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">export function fork(saga) {</span>
<span class="line">    return { type: effectTypes.FORK, saga };</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">+export function takeEvery(actionType, saga) {</span>
<span class="line">+    function* takeEveryHelper() {</span>
<span class="line">+        while (true) {</span>
<span class="line">+            yield take(actionType);</span>
<span class="line">+            yield fork(saga);</span>
<span class="line">+        }</span>
<span class="line">+    }</span>
<span class="line">+    return fork(takeEveryHelper);</span>
<span class="line">+}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-支持-call" tabindex="-1"><a class="header-anchor" href="#_8-支持-call"><span>8. 支持 call</span></a></h2><h3 id="_8-1-sagas-js" tabindex="-1"><a class="header-anchor" href="#_8-1-sagas-js"><span>8.1 sagas.js</span></a></h3><p>src\\store\\sagas.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">+import { put, takeEvery,call } from &#39;../redux-saga/effects&#39;;</span>
<span class="line">import * as actionTypes from &#39;./action-types&#39;;</span>
<span class="line">const delay = ms =&gt; new Promise((resolve, reject) =&gt; {</span>
<span class="line">    setTimeout(() =&gt; {</span>
<span class="line">        resolve();</span>
<span class="line">    }, ms);</span>
<span class="line">});</span>
<span class="line">export function* add() {</span>
<span class="line">+    yield call(delay,1000);</span>
<span class="line">    yield put({ type: actionTypes.ADD });</span>
<span class="line">}</span>
<span class="line">export default function* rootSaga() {</span>
<span class="line">    yield takeEvery(actionTypes.ASYNC_ADD, add);</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-2-effecttypes-js" tabindex="-1"><a class="header-anchor" href="#_8-2-effecttypes-js"><span>8.2 effectTypes.js</span></a></h3><p>src\\redux-saga\\effectTypes.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">export const TAKE = &#39;TAKE&#39;;</span>
<span class="line">export const PUT = &#39;PUT&#39;;</span>
<span class="line">export const FORK = &#39;FORK&#39;;</span>
<span class="line">+export const CALL = &#39;CALL&#39;;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-3-effects-js" tabindex="-1"><a class="header-anchor" href="#_8-3-effects-js"><span>8.3 effects.js</span></a></h3><p>src\\redux-saga\\effects.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import * as effectTypes from &#39;./effectTypes&#39;</span>
<span class="line">export function take(actionType) {</span>
<span class="line">    return { type: effectTypes.TAKE, actionType }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">export function put(action) {</span>
<span class="line">    return { type: effectTypes.PUT, action }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">export function fork(saga) {</span>
<span class="line">    return { type: effectTypes.FORK, saga };</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">export function takeEvery(pattern, saga) {</span>
<span class="line">    function* takeEveryHelper() {</span>
<span class="line">        while (true) {</span>
<span class="line">            yield take(pattern);</span>
<span class="line">            yield fork(saga);</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">    return fork(takeEveryHelper);</span>
<span class="line">}</span>
<span class="line">+export function call(fn, ...args) {</span>
<span class="line">+    return { type: effectTypes.CALL, fn, args };</span>
<span class="line">+}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-4-runsaga-js" tabindex="-1"><a class="header-anchor" href="#_8-4-runsaga-js"><span>8.4 runSaga.js</span></a></h3><p>src\\redux-saga\\runSaga.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import * as effectTypes from &#39;./effectTypes&#39;</span>
<span class="line">export default function runSaga(env, saga) {</span>
<span class="line">    let { channel, dispatch } = env;</span>
<span class="line">    let it = typeof saga == &#39;function&#39; ? saga() : saga;</span>
<span class="line">    function next(value) {</span>
<span class="line">        let { value: effect, done } = it.next(value);</span>
<span class="line">        if (!done) {</span>
<span class="line">            if (typeof effect[Symbol.iterator] == &#39;function&#39;) {</span>
<span class="line">                runSaga(env,effect);</span>
<span class="line">                next();</span>
<span class="line">            }else if(effect.then){</span>
<span class="line">                effect.then(next);</span>
<span class="line">            } else {</span>
<span class="line">                switch (effect.type) {</span>
<span class="line">                    case effectTypes.TAKE:</span>
<span class="line">                        channel.take(effect.actionType, next);</span>
<span class="line">                        break;</span>
<span class="line">                    case effectTypes.PUT:</span>
<span class="line">                        dispatch(effect.action);</span>
<span class="line">                        next();</span>
<span class="line">                        break;</span>
<span class="line">                    case effectTypes.FORK:</span>
<span class="line">                        runSaga(env,effect.saga);</span>
<span class="line">                        next();</span>
<span class="line">                        break;</span>
<span class="line">+                    case effectTypes.CALL:</span>
<span class="line">+                        effect.fn(...effect.args).then(next);</span>
<span class="line">+                        break;</span>
<span class="line">                    default:</span>
<span class="line">                        break;</span>
<span class="line">                }</span>
<span class="line">            }</span>
<span class="line"></span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">    next();</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-支持-cps" tabindex="-1"><a class="header-anchor" href="#_9-支持-cps"><span>9. 支持 cps</span></a></h2><h3 id="_9-1-sagas-js" tabindex="-1"><a class="header-anchor" href="#_9-1-sagas-js"><span>9.1 sagas.js</span></a></h3><p>src\\store\\sagas.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">+import { put, takeEvery,call,cps} from &#39;../redux-saga/effects&#39;;</span>
<span class="line">import * as actionTypes from &#39;./action-types&#39;;</span>
<span class="line">+const delay = (ms,callback)=&gt;{</span>
<span class="line">+    setTimeout(() =&gt; {</span>
<span class="line">+        callback(null,&#39;ok&#39;);</span>
<span class="line">+    },ms);</span>
<span class="line">+}</span>
<span class="line">export function* add() {</span>
<span class="line">+    let data = yield cps(delay,1000);</span>
<span class="line">+    console.log(data);</span>
<span class="line">    yield put({ type: actionTypes.ADD });</span>
<span class="line">}</span>
<span class="line">export default function* rootSaga() {</span>
<span class="line">    yield takeEvery(actionTypes.ASYNC_ADD, add);</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-2-effecttypes-js" tabindex="-1"><a class="header-anchor" href="#_9-2-effecttypes-js"><span>9.2 effectTypes.js</span></a></h3><p>src\\redux-saga\\effectTypes.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">export const TAKE = &#39;TAKE&#39;;</span>
<span class="line">export const PUT = &#39;PUT&#39;;</span>
<span class="line">export const FORK = &#39;FORK&#39;;</span>
<span class="line">export const CALL = &#39;CALL&#39;;</span>
<span class="line">+export const CPS = &#39;CPS&#39;;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-3-effects-js" tabindex="-1"><a class="header-anchor" href="#_9-3-effects-js"><span>9.3 effects.js</span></a></h3><p>src\\redux-saga\\effects.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import * as effectTypes from &#39;./effectTypes&#39;</span>
<span class="line">export function take(actionType) {</span>
<span class="line">    return { type: effectTypes.TAKE, actionType }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">export function put(action) {</span>
<span class="line">    return { type: effectTypes.PUT, action }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">export function fork(saga) {</span>
<span class="line">    return { type: effectTypes.FORK, saga };</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">export function takeEvery(pattern, saga) {</span>
<span class="line">    function* takeEveryHelper() {</span>
<span class="line">        while (true) {</span>
<span class="line">            yield take(pattern);</span>
<span class="line">            yield fork(saga);</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">    return fork(takeEveryHelper);</span>
<span class="line">}</span>
<span class="line">export function call(fn, ...args) {</span>
<span class="line">    return { type: effectTypes.CALL, fn, args };</span>
<span class="line">}</span>
<span class="line">+export function cps(fn, ...args) {</span>
<span class="line">+    return { type: effectTypes.CPS, fn, args };</span>
<span class="line">+}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-4-runsaga-js" tabindex="-1"><a class="header-anchor" href="#_9-4-runsaga-js"><span>9.4 runSaga.js</span></a></h3><p>src\\redux-saga\\runSaga.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import * as effectTypes from &#39;./effectTypes&#39;</span>
<span class="line">export default function runSaga(env, saga) {</span>
<span class="line">    let { channel, dispatch } = env;</span>
<span class="line">    let it = typeof saga == &#39;function&#39; ? saga() : saga;</span>
<span class="line">+    function next(value,isErr) {</span>
<span class="line">+        let result;</span>
<span class="line">+        if (isErr) {</span>
<span class="line">+            result = it.throw(value);</span>
<span class="line">+          } else {</span>
<span class="line">+            result = it.next(value);</span>
<span class="line">+          }</span>
<span class="line">+        let { value: effect, done } = result;</span>
<span class="line">        if (!done) {</span>
<span class="line">            if (typeof effect[Symbol.iterator] == &#39;function&#39;) {</span>
<span class="line">                runSaga(env,effect);</span>
<span class="line">                next();</span>
<span class="line">            }else if(effect.then){</span>
<span class="line">                effect.then(next);</span>
<span class="line">            } else {</span>
<span class="line">                switch (effect.type) {</span>
<span class="line">                    case effectTypes.TAKE:</span>
<span class="line">                        channel.take(effect.actionType, next);</span>
<span class="line">                        break;</span>
<span class="line">                    case effectTypes.PUT:</span>
<span class="line">                        dispatch(effect.action);</span>
<span class="line">                        next();</span>
<span class="line">                        break;</span>
<span class="line">                    case effectTypes.FORK:</span>
<span class="line">                        runSaga(env,effect.saga);</span>
<span class="line">                        next();</span>
<span class="line">                        break;</span>
<span class="line">                    case effectTypes.CALL:</span>
<span class="line">                        effect.fn(...effect.args).then(next);</span>
<span class="line">                        break;</span>
<span class="line">+                    case effectTypes.CPS:</span>
<span class="line">+                        effect.fn(...effect.args,(err,data)=&gt;{</span>
<span class="line">+                            if(err){</span>
<span class="line">+                                next(err,true);</span>
<span class="line">+                            }else{</span>
<span class="line">+                                next(data);</span>
<span class="line">+                            }</span>
<span class="line">+                        });</span>
<span class="line">+                        break;    </span>
<span class="line">                    default:</span>
<span class="line">                        break;</span>
<span class="line">                }</span>
<span class="line">            }</span>
<span class="line"></span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">    next();</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_11-支持all" tabindex="-1"><a class="header-anchor" href="#_11-支持all"><span>11. 支持all</span></a></h2><h3 id="_11-1-saga" tabindex="-1"><a class="header-anchor" href="#_11-1-saga"><span>11.1 saga</span></a></h3><p>src\\store\\sagas.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import { put, takeEvery, call, cps, take,all } from &#39;../redux-saga/effects&#39;;</span>
<span class="line">import * as actionTypes from &#39;./action-types&#39;;</span>
<span class="line">+export function* add1() {</span>
<span class="line">+    for (let i = 0; i &lt; 1; i++) {</span>
<span class="line">+        yield take(actionTypes.ASYNC_ADD);</span>
<span class="line">+        yield put({ type: actionTypes.ADD });</span>
<span class="line">+    }</span>
<span class="line">+    console.log(&#39;add1 done &#39;);</span>
<span class="line">+    return &#39;add1Result&#39;;</span>
<span class="line">+}</span>
<span class="line">+export function* add2() {</span>
<span class="line">+    for (let i = 0; i &lt; 2; i++) {</span>
<span class="line">+        yield take(actionTypes.ASYNC_ADD);</span>
<span class="line">+        yield put({ type: actionTypes.ADD });</span>
<span class="line">+    }</span>
<span class="line">+    console.log(&#39;add2 done &#39;);</span>
<span class="line">+    return &#39;add2Result&#39;;</span>
<span class="line">+}</span>
<span class="line">export default function* rootSaga() {</span>
<span class="line">+    let result = yield all([add1(), add2()]);</span>
<span class="line">+    console.log(&#39;done&#39;, result);</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_11-2-effecttypes-js" tabindex="-1"><a class="header-anchor" href="#_11-2-effecttypes-js"><span>11.2 effectTypes.js</span></a></h3><p>src\\redux-saga\\effectTypes.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">TAKE</span> <span class="token operator">=</span> <span class="token string">&#39;TAKE&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">PUT</span> <span class="token operator">=</span> <span class="token string">&#39;PUT&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">FORK</span> <span class="token operator">=</span> <span class="token string">&#39;FORK&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">CALL</span> <span class="token operator">=</span> <span class="token string">&#39;CALL&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">CPS</span> <span class="token operator">=</span> <span class="token string">&#39;CPS&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">ALL</span> <span class="token operator">=</span> <span class="token string">&#39;ALL&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_11-3-effects-js" tabindex="-1"><a class="header-anchor" href="#_11-3-effects-js"><span>11.3 effects.js</span></a></h3><p>src\\redux-saga\\effects.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import * as effectTypes from &#39;./effectTypes&#39;</span>
<span class="line">export function take(actionType) {</span>
<span class="line">    return { type: effectTypes.TAKE, actionType }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">export function put(action) {</span>
<span class="line">    return { type: effectTypes.PUT, action }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">export function fork(saga) {</span>
<span class="line">    return { type: effectTypes.FORK, saga };</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">export function takeEvery(pattern, saga) {</span>
<span class="line">    function* takeEveryHelper() {</span>
<span class="line">        while (true) {</span>
<span class="line">            yield take(pattern);</span>
<span class="line">            yield fork(saga);</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">    return fork(takeEveryHelper);</span>
<span class="line">}</span>
<span class="line">export function call(fn, ...args) {</span>
<span class="line">    return { type: effectTypes.CALL, fn, args };</span>
<span class="line">}</span>
<span class="line">export function cps(fn, ...args) {</span>
<span class="line">    return { type: effectTypes.CPS, fn, args };</span>
<span class="line">}</span>
<span class="line">+export function all(iterators) {</span>
<span class="line">+    return { type: effectTypes.ALL, iterators };</span>
<span class="line">+}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_11-4-runsaga-js" tabindex="-1"><a class="header-anchor" href="#_11-4-runsaga-js"><span>11.4 runSaga.js</span></a></h3><p>src\\redux-saga\\runSaga.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import * as effectTypes from &#39;./effectTypes&#39;</span>
<span class="line">+export default function runSaga(env, saga,callback) {</span>
<span class="line">    let { channel, dispatch } = env;</span>
<span class="line">    let it = typeof saga == &#39;function&#39; ? saga() : saga;</span>
<span class="line">    function next(value, isErr) {</span>
<span class="line">        let result;</span>
<span class="line">        if (isErr) {</span>
<span class="line">            result = it.throw(value);</span>
<span class="line">        } else {</span>
<span class="line">            result = it.next(value);</span>
<span class="line">        }</span>
<span class="line">        let { value: effect, done } = result;</span>
<span class="line">        if (!done) {</span>
<span class="line">            if (typeof effect[Symbol.iterator] == &#39;function&#39;) {</span>
<span class="line">                runSaga(env, effect);</span>
<span class="line">                next();</span>
<span class="line">            } else if (effect.then) {</span>
<span class="line">                effect.then(next);</span>
<span class="line">            } else {</span>
<span class="line">                switch (effect.type) {</span>
<span class="line">                    case effectTypes.TAKE:</span>
<span class="line">                        channel.take(effect.actionType, next);</span>
<span class="line">                        break;</span>
<span class="line">                    case effectTypes.PUT:</span>
<span class="line">                        dispatch(effect.action);</span>
<span class="line">                        next();</span>
<span class="line">                        break;</span>
<span class="line">                    case effectTypes.FORK:</span>
<span class="line">                        runSaga(env, effect.saga);</span>
<span class="line">                        next();</span>
<span class="line">                        break;</span>
<span class="line">                    case effectTypes.CALL:</span>
<span class="line">                        effect.fn(...effect.args).then(next);</span>
<span class="line">                        break;</span>
<span class="line">                    case effectTypes.CPS:</span>
<span class="line">                        effect.fn(...effect.args, (err, data) =&gt; {</span>
<span class="line">                            if (err) {</span>
<span class="line">                                next(err, true);</span>
<span class="line">                            } else {</span>
<span class="line">                                next(data);</span>
<span class="line">                            }</span>
<span class="line">                        });</span>
<span class="line">                        break;</span>
<span class="line">+                    case effectTypes.ALL:</span>
<span class="line">+                        const { iterators } = effect;</span>
<span class="line">+                        let result = [];</span>
<span class="line">+                        let count = 0;</span>
<span class="line">+                        iterators.forEach((iterator, index) =&gt; {</span>
<span class="line">+                        runSaga(env, iterator, (data) =&gt; {</span>
<span class="line">+                            result[index] = data;</span>
<span class="line">+                            if (++count === iterators.length) {</span>
<span class="line">+                            next(result);</span>
<span class="line">+                            }</span>
<span class="line">+                        });</span>
<span class="line">+                        });</span>
<span class="line">+                        break;</span>
<span class="line">                    default:</span>
<span class="line">                        break;</span>
<span class="line">                }</span>
<span class="line">            }</span>
<span class="line">        } else {</span>
<span class="line">+            callback &amp;&amp; callback(effect);</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">    next();</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_12-取消任务" tabindex="-1"><a class="header-anchor" href="#_12-取消任务"><span>12. 取消任务</span></a></h2><h3 id="_12-1-sagas-js" tabindex="-1"><a class="header-anchor" href="#_12-1-sagas-js"><span>12.1 sagas.js</span></a></h3><p>src\\store\\sagas.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">+import { put, takeEvery, call, cps, all, take, cancel, fork, delay } from &#39;../redux-saga/effects&#39;;</span>
<span class="line">+import * as actionTypes from &#39;./action-types&#39;;</span>
<span class="line">+export function* add() {</span>
<span class="line">+    while (true) {</span>
<span class="line">+        yield delay(1000);</span>
<span class="line">+        yield put({ type: actionTypes.ADD });</span>
<span class="line">+    }</span>
<span class="line">+}</span>
<span class="line">+export function* addWatcher() {</span>
<span class="line">+    const task = yield fork(add);</span>
<span class="line">+    console.log(task);</span>
<span class="line">+    yield take(actionTypes.STOP_ADD);</span>
<span class="line">+    yield cancel(task);</span>
<span class="line">+}</span>
<span class="line">+function* request(action) {</span>
<span class="line">+    let url = action.payload;</span>
<span class="line">+    let promise = fetch(url).then(res =&gt; res.json());;</span>
<span class="line">+    let res = yield promise;</span>
<span class="line">+    console.log(res);</span>
<span class="line">+}</span>
<span class="line">+</span>
<span class="line">+function* requestWatcher() {</span>
<span class="line">+    //action = {type,url}</span>
<span class="line">+    const requestAction = yield take(actionTypes.REQUEST);</span>
<span class="line">+    //开启一个新的子进程发起请求</span>
<span class="line">+    const requestTask = yield fork(request, requestAction);</span>
<span class="line">+    //立刻开始等待停止请求的动作类型</span>
<span class="line">+    const stopAction = yield take(actionTypes.STOP_REQUEST);</span>
<span class="line">+    yield cancel(requestTask);//在axios里，是通过 调用promise的reject方法来实出任务取消</span>
<span class="line">+}</span>
<span class="line">+export default function* rootSaga() {</span>
<span class="line">+    yield addWatcher();</span>
<span class="line">+    yield requestWatcher();</span>
<span class="line">+}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_12-2-effecttypes-js" tabindex="-1"><a class="header-anchor" href="#_12-2-effecttypes-js"><span>12.2 effectTypes.js</span></a></h3><p>src\\redux-saga\\effectTypes.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">export const TAKE = &#39;TAKE&#39;;</span>
<span class="line">export const PUT = &#39;PUT&#39;;</span>
<span class="line">export const FORK = &#39;FORK&#39;;</span>
<span class="line">export const CALL = &#39;CALL&#39;;</span>
<span class="line">export const CPS = &#39;CPS&#39;;</span>
<span class="line">export const ALL = &#39;ALL&#39;;</span>
<span class="line">+export const CANCEL = &#39;CANCEL&#39;;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_12-3-effects-js" tabindex="-1"><a class="header-anchor" href="#_12-3-effects-js"><span>12.3 effects.js</span></a></h3><p>src\\redux-saga\\effects.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import * as effectTypes from &#39;./effectTypes&#39;</span>
<span class="line">export function take(actionType) {</span>
<span class="line">    return { type: effectTypes.TAKE, actionType }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">export function put(action) {</span>
<span class="line">    return { type: effectTypes.PUT, action }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">export function fork(saga) {</span>
<span class="line">    return { type: effectTypes.FORK, saga };</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">export function takeEvery(pattern, saga) {</span>
<span class="line">    function* takeEveryHelper() {</span>
<span class="line">        while (true) {</span>
<span class="line">            yield take(pattern);</span>
<span class="line">            yield fork(saga);</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">    return fork(takeEveryHelper);</span>
<span class="line">}</span>
<span class="line">export function call(fn, ...args) {</span>
<span class="line">    return { type: effectTypes.CALL, fn, args };</span>
<span class="line">}</span>
<span class="line">export function cps(fn, ...args) {</span>
<span class="line">    return { type: effectTypes.CPS, fn, args };</span>
<span class="line">}</span>
<span class="line">export function all(effects) {</span>
<span class="line">    return { type: effectTypes.ALL, effects };</span>
<span class="line">}</span>
<span class="line">+const delayFn = (ms) =&gt; {</span>
<span class="line">+    return new Promise(resolve =&gt; {</span>
<span class="line">+        setTimeout(resolve, ms);</span>
<span class="line">+    })</span>
<span class="line">+}</span>
<span class="line">+export function delay(...args) {</span>
<span class="line">+    return call(delayFn, ...args);</span>
<span class="line">+}</span>
<span class="line">+export function cancel(task) {</span>
<span class="line">+    return { type: effectTypes.CANCEL, task };</span>
<span class="line">+}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_12-4-runsaga-js" tabindex="-1"><a class="header-anchor" href="#_12-4-runsaga-js"><span>12.4 runSaga.js</span></a></h3><p>src\\redux-saga\\runSaga.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> effectTypes <span class="token keyword">from</span> <span class="token string">&#39;./effectTypes&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token constant">CANCEL_TASK</span> <span class="token operator">=</span> <span class="token string">&#39;CANCEL_TASK&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">runSaga</span><span class="token punctuation">(</span><span class="token parameter">env<span class="token punctuation">,</span> saga<span class="token punctuation">,</span>callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>    <span class="token keyword">let</span> task <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token function-variable function">cancel</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token constant">TASK_CANCEL</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">let</span> <span class="token punctuation">{</span> channel<span class="token punctuation">,</span> dispatch <span class="token punctuation">}</span> <span class="token operator">=</span> env<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">let</span> it <span class="token operator">=</span> <span class="token keyword">typeof</span> saga <span class="token operator">==</span> <span class="token string">&#39;function&#39;</span> <span class="token operator">?</span> <span class="token function">saga</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">:</span> saga<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> isErr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">let</span> result<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>isErr<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            result <span class="token operator">=</span> it<span class="token punctuation">.</span><span class="token function">throw</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>value <span class="token operator">===</span> <span class="token constant">TASK_CANCEL</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>            result <span class="token operator">=</span> it<span class="token punctuation">.</span><span class="token function">return</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">            result <span class="token operator">=</span> it<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token keyword">let</span> <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> effect<span class="token punctuation">,</span> done <span class="token punctuation">}</span> <span class="token operator">=</span> result<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>done<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> effect<span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span>iterator<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token function">runSaga</span><span class="token punctuation">(</span>env<span class="token punctuation">,</span> effect<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>effect<span class="token punctuation">.</span>then<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                effect<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>next<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token keyword">switch</span> <span class="token punctuation">(</span>effect<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token keyword">case</span> effectTypes<span class="token punctuation">.</span><span class="token constant">TAKE</span><span class="token operator">:</span></span>
<span class="line">                        channel<span class="token punctuation">.</span><span class="token function">take</span><span class="token punctuation">(</span>effect<span class="token punctuation">.</span>actionType<span class="token punctuation">,</span> next<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                        <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line">                    <span class="token keyword">case</span> effectTypes<span class="token punctuation">.</span><span class="token constant">PUT</span><span class="token operator">:</span></span>
<span class="line">                        <span class="token function">dispatch</span><span class="token punctuation">(</span>effect<span class="token punctuation">.</span>action<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                        <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                        <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line">                    <span class="token keyword">case</span> effectTypes<span class="token punctuation">.</span><span class="token constant">FORK</span><span class="token operator">:</span></span>
<span class="line"><span class="token operator">+</span>                        <span class="token keyword">let</span> forkTask <span class="token operator">=</span> <span class="token function">runSaga</span><span class="token punctuation">(</span>env<span class="token punctuation">,</span> effect<span class="token punctuation">.</span>saga<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>                        <span class="token function">next</span><span class="token punctuation">(</span>forkTask<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                        <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line">                    <span class="token keyword">case</span> effectTypes<span class="token punctuation">.</span><span class="token constant">CALL</span><span class="token operator">:</span></span>
<span class="line">                        effect<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token operator">...</span>effect<span class="token punctuation">.</span>args<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>next<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                        <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line">                    <span class="token keyword">case</span> effectTypes<span class="token punctuation">.</span><span class="token constant">CPS</span><span class="token operator">:</span></span>
<span class="line">                        effect<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token operator">...</span>effect<span class="token punctuation">.</span>args<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">                            <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                                <span class="token function">next</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">                                <span class="token function">next</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                            <span class="token punctuation">}</span></span>
<span class="line">                        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                        <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line">                    <span class="token keyword">case</span> effectTypes<span class="token punctuation">.</span><span class="token constant">ALL</span><span class="token operator">:</span></span>
<span class="line">                        <span class="token keyword">const</span> <span class="token punctuation">{</span> iterators <span class="token punctuation">}</span> <span class="token operator">=</span> effect<span class="token punctuation">;</span></span>
<span class="line">                        <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">                        <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">                        iterators<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">iterator<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">                            <span class="token function">runSaga</span><span class="token punctuation">(</span>env<span class="token punctuation">,</span> iterator<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">                                result<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> data<span class="token punctuation">;</span></span>
<span class="line">                                <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">++</span>count <span class="token operator">===</span> iterators<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                                <span class="token function">next</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                                <span class="token punctuation">}</span></span>
<span class="line">                            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                        <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>                    <span class="token keyword">case</span> effectTypes<span class="token punctuation">.</span><span class="token constant">CANCEL</span><span class="token operator">:</span></span>
<span class="line"><span class="token operator">+</span>                        effect<span class="token punctuation">.</span>task<span class="token punctuation">.</span><span class="token function">cancel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>                        <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>                        <span class="token keyword">break</span><span class="token punctuation">;</span>    </span>
<span class="line">                    <span class="token keyword">default</span><span class="token operator">:</span></span>
<span class="line">                        <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">            callback <span class="token operator">&amp;&amp;</span> <span class="token function">callback</span><span class="token punctuation">(</span>effect<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>    <span class="token keyword">return</span> task<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_12-5-action-types-js" tabindex="-1"><a class="header-anchor" href="#_12-5-action-types-js"><span>12.5 action-types.js</span></a></h3><p>src\\store\\action-types.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">export const ASYNC_ADD=&#39;ASYNC_ADD&#39;;</span>
<span class="line">export const ADD=&#39;ADD&#39;;</span>
<span class="line">+export const STOP=&#39;STOP&#39;;</span>
<span class="line"></span>
<span class="line">+export const REQUEST = &#39;REQUEST&#39;;</span>
<span class="line">+export const STOP_REQUEST = &#39;STOP_REQUEST&#39;;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_12-6-counter-js" tabindex="-1"><a class="header-anchor" href="#_12-6-counter-js"><span>12.6 Counter.js</span></a></h3><p>src\\components\\Counter.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React from &#39;react&#39;;</span>
<span class="line">import * as actionTypes from &#39;../store/action-types&#39;;</span>
<span class="line">import { useSelector, useDispatch } from &#39;react-redux&#39;;</span>
<span class="line">function Counter() {</span>
<span class="line">    const number = useSelector(state =&gt; state.number);</span>
<span class="line">    const dispatch = useDispatch();</span>
<span class="line">    return (</span>
<span class="line">        &lt;div&gt;</span>
<span class="line">            &lt;p&gt;{number}&lt;/p&gt;</span>
<span class="line">+            &lt;button onClick={() =&gt; dispatch({ type: actionTypes.ASYNC_ADD })}&gt;+&lt;/button&gt;</span>
<span class="line">+            &lt;button onClick={() =&gt; dispatch({ type: actionTypes.STOP_ADD })}&gt;stop&lt;/button&gt;</span>
<span class="line">+            &lt;button onClick={() =&gt; dispatch({ type: actionTypes.REQUEST, payload: &#39;/users.json&#39; })}&gt;request&lt;/button&gt;</span>
<span class="line">+            &lt;button onClick={() =&gt; dispatch({ type: actionTypes.STOP_REQUEST })}&gt;stopRequest&lt;/button&gt;</span>
<span class="line">        &lt;/div&gt;</span>
<span class="line">    )</span>
<span class="line">}</span>
<span class="line">export default Counter;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,123)])])}const o=s(l,[["render",t]]),r=JSON.parse('{"path":"/strong/106.7.redux-saga.html","title":"","lang":"en-US","frontmatter":{},"git":{"updatedTime":1681290319000,"contributors":[{"name":"yutao","username":"yutao","email":"642231346@qq.com","commits":1,"url":"https://github.com/yutao"}],"changelog":[{"hash":"f5ab8c9d34991ec274f7f652439afe5b2afb6147","time":1681290319000,"email":"642231346@qq.com","author":"yutao","message":"modify"}]},"filePathRelative":"strong/106.7.redux-saga.md"}');export{o as comp,r as data};
