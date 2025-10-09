import{_ as s,c as a,a as p,o as e}from"./app-CD1YpnS1.js";const t={};function l(c,n){return e(),a("div",null,[...n[0]||(n[0]=[p(`<h2 id="_1-dva介绍" tabindex="-1"><a class="header-anchor" href="#_1-dva介绍"><span>1.dva介绍</span></a></h2><ul><li><a href="https://github.com/dvajs/dva" target="_blank" rel="noopener noreferrer">dva</a>首先是一个基于 <code>redux</code> 和 <code>redux-saga</code> 的数据流方案，然后为了简化开发体验,dva 还额外内置了 <code>react-router</code> 和 <code>fetch</code>,所以也可以理解为一个轻量级的应用框架</li></ul><p><img src="https://zos.alipayobjects.com/rmsportal/PPrerEAKbIoDZYr.png" alt="dva"></p><h3 id="_1-1-前置知识" tabindex="-1"><a class="header-anchor" href="#_1-1-前置知识"><span>1.1 前置知识</span></a></h3><ul><li>react</li><li>react-router-dom</li><li>redux</li><li>react-redux</li><li>react-saga</li><li>redux-first-history</li></ul><h2 id="_2-初始化项目" tabindex="-1"><a class="header-anchor" href="#_2-初始化项目"><span>2. 初始化项目</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">create-react-app zhufeng-dva-source</span>
<span class="line">cd  zhufeng-dva-source</span>
<span class="line">npm install dva  </span>
<span class="line">npm install  redux react-redux redux-saga react-router-dom redux-first-history  --save</span>
<span class="line">npm start</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-基本计数器" tabindex="-1"><a class="header-anchor" href="#_3-基本计数器"><span>3. 基本计数器</span></a></h2><h3 id="_3-1-使用" tabindex="-1"><a class="header-anchor" href="#_3-1-使用"><span>3.1 使用</span></a></h3><h4 id="_3-1-1-index-js" tabindex="-1"><a class="header-anchor" href="#_3-1-1-index-js"><span>3.1.1 index.js</span></a></h4><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> dva<span class="token punctuation">,</span> <span class="token punctuation">{</span> connect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./dva&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">dva</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">model</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">namespace</span><span class="token operator">:</span> <span class="token string">&#39;counter&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">number</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">reducers</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">number</span><span class="token operator">:</span> state<span class="token punctuation">.</span>number <span class="token operator">+</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> actionCreator <span class="token operator">=</span> app<span class="token punctuation">.</span><span class="token function">createAction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">Counter</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">        <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span></span>
<span class="line">            <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>number<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span></span>
<span class="line">            <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> props<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;counter/add&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token operator">+</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span></span>
<span class="line">        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">const</span> ConnectedCounter <span class="token operator">=</span> <span class="token function">connect</span><span class="token punctuation">(</span></span>
<span class="line">    <span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> state<span class="token punctuation">.</span>counter</span>
<span class="line"><span class="token punctuation">)</span><span class="token punctuation">(</span>Counter</span>
<span class="line"><span class="token comment">//,actionCreator</span></span>
<span class="line"><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">router</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token operator">&lt;</span>ConnectedCounter <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"> app<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span>&#39;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-实现" tabindex="-1"><a class="header-anchor" href="#_3-2-实现"><span>3.2 实现</span></a></h3><h4 id="_3-2-1-dva-index-js" tabindex="-1"><a class="header-anchor" href="#_3-2-1-dva-index-js"><span>3.2.1 dva\\index.js</span></a></h4><p>src\\dva\\index.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> ReactDOM <span class="token keyword">from</span> <span class="token string">&#39;react-dom&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createStore<span class="token punctuation">,</span> combineReducers <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;redux&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> connect<span class="token punctuation">,</span> Provider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-redux&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> prefixNamespace <span class="token keyword">from</span> <span class="token string">&#39;./prefixNamespace&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token punctuation">{</span> connect <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">dva</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">_models</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">        model<span class="token punctuation">,</span></span>
<span class="line">        router<span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">_router</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span></span>
<span class="line">        start<span class="token punctuation">,</span></span>
<span class="line">        createAction</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">const</span> initialReducers <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">model</span><span class="token punctuation">(</span><span class="token parameter">model</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">const</span> prefixedModel <span class="token operator">=</span> <span class="token function">prefixNamespace</span><span class="token punctuation">(</span>model<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        app<span class="token punctuation">.</span>_models<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>prefixedModel<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span> prefixedModel<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">router</span><span class="token punctuation">(</span><span class="token parameter">router</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        app<span class="token punctuation">.</span>_router <span class="token operator">=</span> router<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">createAction</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">let</span> actionCreators <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> model <span class="token keyword">of</span> app<span class="token punctuation">.</span>_models<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">let</span> <span class="token punctuation">{</span> reducers <span class="token punctuation">}</span> <span class="token operator">=</span> model<span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> reducers<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token comment">// counter/add =&gt;  action {type:&#39;counter/add&#39;}</span></span>
<span class="line">                actionCreators<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> key <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token keyword">return</span> actionCreators<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">start</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> model <span class="token keyword">of</span> app<span class="token punctuation">.</span>_models<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            initialReducers<span class="token punctuation">[</span>model<span class="token punctuation">.</span>namespace<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">getReducer</span><span class="token punctuation">(</span>model<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token keyword">let</span> rootReducer <span class="token operator">=</span> <span class="token function">createReducer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">let</span> store <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span>rootReducer<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>Provider store<span class="token operator">=</span><span class="token punctuation">{</span>store<span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">{</span>app<span class="token punctuation">.</span><span class="token function">_router</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>Provider<span class="token operator">&gt;</span><span class="token punctuation">,</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">function</span> <span class="token function">createReducer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token function">combineReducers</span><span class="token punctuation">(</span>initialReducers<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">return</span> app<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">getReducer</span><span class="token punctuation">(</span><span class="token parameter">model</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> <span class="token punctuation">{</span> reducers<span class="token punctuation">,</span> <span class="token literal-property property">state</span><span class="token operator">:</span> defaultState <span class="token punctuation">}</span> <span class="token operator">=</span> model<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">let</span> <span class="token function-variable function">reducer</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">state <span class="token operator">=</span> defaultState<span class="token punctuation">,</span> action</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">let</span> reducer <span class="token operator">=</span> reducers<span class="token punctuation">[</span>action<span class="token punctuation">.</span>type<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>reducer<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token function">reducer</span><span class="token punctuation">(</span>state<span class="token punctuation">,</span> action<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token keyword">return</span> state<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">return</span> reducer<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> dva<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-2-2-prefixnamespace-js" tabindex="-1"><a class="header-anchor" href="#_3-2-2-prefixnamespace-js"><span>3.2.2 prefixNamespace.js</span></a></h4><p>src\\dva\\prefixNamespace.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">function</span> <span class="token function">prefix</span><span class="token punctuation">(</span><span class="token parameter">obj<span class="token punctuation">,</span> namespace</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">memo<span class="token punctuation">,</span> key</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">const</span> newKey <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>namespace<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span></span>
<span class="line">        memo<span class="token punctuation">[</span>newKey<span class="token punctuation">]</span> <span class="token operator">=</span> obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span> memo<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">prefixNamespace</span><span class="token punctuation">(</span><span class="token parameter">model</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>model<span class="token punctuation">.</span>reducers<span class="token punctuation">)</span></span>
<span class="line">        model<span class="token punctuation">.</span>reducers <span class="token operator">=</span> <span class="token function">prefix</span><span class="token punctuation">(</span>model<span class="token punctuation">.</span>reducers<span class="token punctuation">,</span> model<span class="token punctuation">.</span>namespace<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> model<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-支持effects" tabindex="-1"><a class="header-anchor" href="#_4-支持effects"><span>4. 支持effects</span></a></h2><h3 id="_4-1-使用" tabindex="-1"><a class="header-anchor" href="#_4-1-使用"><span>4.1 使用</span></a></h3><h4 id="_4-1-1-src-index-js" tabindex="-1"><a class="header-anchor" href="#_4-1-1-src-index-js"><span>4.1.1 src\\index.js</span></a></h4><p>src\\index.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React from &#39;react&#39;;</span>
<span class="line">import dva, { connect } from &#39;./dva&#39;;</span>
<span class="line">const app = dva();</span>
<span class="line">app.model({</span>
<span class="line">    namespace: &#39;counter&#39;,</span>
<span class="line">    state: { number: 0 },</span>
<span class="line">    reducers: {</span>
<span class="line">        add(state) {</span>
<span class="line">            return { number: state.number + 1 };</span>
<span class="line">        }</span>
<span class="line">    },</span>
<span class="line">+    effects: {</span>
<span class="line">+        *asyncAdd(action, { call, put }) {</span>
<span class="line">+            yield call(delay, 1000);</span>
<span class="line">+            yield put({ type: &#39;counter/add&#39; });</span>
<span class="line">+        }</span>
<span class="line">+    }</span>
<span class="line">});</span>
<span class="line">function Counter(props) {</span>
<span class="line">    return (</span>
<span class="line">        &lt;div&gt;</span>
<span class="line">            &lt;p&gt;{props.number}&lt;/p&gt;</span>
<span class="line">            &lt;button onClick={() =&gt; props.dispatch({ type: &quot;counter/add&quot; })}&gt;+&lt;/button&gt;</span>
<span class="line">+            &lt;button onClick={() =&gt; props.dispatch({ type: &quot;counter/asyncAdd&quot; })}&gt;异步+&lt;/button&gt;</span>
<span class="line">        &lt;/div&gt;</span>
<span class="line">    )</span>
<span class="line">}</span>
<span class="line">const ConnectedCounter = connect(</span>
<span class="line">    (state) =&gt; state.counter</span>
<span class="line">)(Counter);</span>
<span class="line">app.router(() =&gt; &lt;ConnectedCounter /&gt;);</span>
<span class="line"> app.start(&#39;</span>
<span class="line"></span>
<span class="line">+function delay(ms) {</span>
<span class="line">+    return new Promise((resolve) =&gt; {</span>
<span class="line">+        setTimeout(function () {</span>
<span class="line">+            resolve();</span>
<span class="line">+        }, ms);</span>
<span class="line">+    });</span>
<span class="line">+}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-实现" tabindex="-1"><a class="header-anchor" href="#_4-2-实现"><span>4.2 实现</span></a></h3><h4 id="_4-2-1-dva-index-js" tabindex="-1"><a class="header-anchor" href="#_4-2-1-dva-index-js"><span>4.2.1 dva\\index.js</span></a></h4><p>src\\dva\\index.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React from &#39;react&#39;;</span>
<span class="line">import ReactDOM from &#39;react-dom&#39;;</span>
<span class="line">+import { createStore, combineReducers, applyMiddleware } from &#39;redux&#39;;</span>
<span class="line">+import createSagaMiddleware from &#39;redux-saga&#39;;</span>
<span class="line">+import * as sagaEffects from &#39;redux-saga/effects&#39;;</span>
<span class="line">import { connect, Provider } from &#39;react-redux&#39;;</span>
<span class="line">import prefixNamespace from &#39;./prefixNamespace&#39;;</span>
<span class="line">export { connect };</span>
<span class="line"></span>
<span class="line">function dva() {</span>
<span class="line">    const app = {</span>
<span class="line">        _models: [],</span>
<span class="line">        model,</span>
<span class="line">        router,</span>
<span class="line">        _router: null,</span>
<span class="line">        start</span>
<span class="line">    }</span>
<span class="line">    const initialReducers = {};</span>
<span class="line">    function model(model) {</span>
<span class="line">        const prefixedModel = prefixNamespace(model);</span>
<span class="line">        app._models.push(prefixedModel);</span>
<span class="line">        return prefixedModel;</span>
<span class="line">    }</span>
<span class="line">    function router(router) {</span>
<span class="line">        app._router = router;</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    function start(root) {</span>
<span class="line">        for (const model of app._models) {</span>
<span class="line">            initialReducers[model.namespace] = getReducer(model);</span>
<span class="line">        }</span>
<span class="line">        let rootReducer = createReducer();</span>
<span class="line">+        const sagas = getSagas(app);</span>
<span class="line">+        const sagaMiddleware = createSagaMiddleware();</span>
<span class="line">+        let store = createStore(rootReducer, applyMiddleware(sagaMiddleware));</span>
<span class="line">+        sagas.forEach(saga =&gt; sagaMiddleware.run(saga));</span>
<span class="line">        ReactDOM.render(&lt;Provider store={store}&gt;{app._router()}&lt;/Provider&gt;, document.querySelector(root));</span>
<span class="line">        function createReducer() {</span>
<span class="line">            return combineReducers(initialReducers);</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">+    function getSagas(app) {</span>
<span class="line">+        let sagas = [];</span>
<span class="line">+        for (const model of app._models) {</span>
<span class="line">+            sagas.push(getSaga(model));</span>
<span class="line">+        }</span>
<span class="line">+        return sagas;</span>
<span class="line">+    }</span>
<span class="line">    return app;</span>
<span class="line">}</span>
<span class="line">+function getSaga(model) {</span>
<span class="line">+    const { effects } = model;</span>
<span class="line">+    return function* () {</span>
<span class="line">+        for (const key in effects) {//key=asyncAdd</span>
<span class="line">+            yield sagaEffects.takeEvery(key, function* (action) {</span>
<span class="line">+                yield effects[key](action, {</span>
<span class="line">+                    ...sagaEffects, put: action =&gt; sagaEffects.put(</span>
<span class="line">+                        { ...action, type: prefixType(action.type, model.namespace) })</span>
<span class="line">+                });</span>
<span class="line">+            });</span>
<span class="line">+        }</span>
<span class="line">+    }</span>
<span class="line">+}</span>
<span class="line">+function prefixType(type, model) {</span>
<span class="line">+    if (type.indexOf(&#39;/&#39;) === -1) {</span>
<span class="line">+        return \`\${model.namespace}/\${type}\`;</span>
<span class="line">+    }</span>
<span class="line">+    return type;</span>
<span class="line">+}</span>
<span class="line">function getReducer(model) {</span>
<span class="line">    let { reducers, state: defaultState } = model;</span>
<span class="line">    let reducer = (state = defaultState, action) =&gt; {</span>
<span class="line">        let reducer = reducers[action.type];</span>
<span class="line">        if (reducer) {</span>
<span class="line">            return reducer(state, action);</span>
<span class="line">        }</span>
<span class="line">        return state;</span>
<span class="line">    }</span>
<span class="line">    return reducer;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">export default dva;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-2-2-prefixnamespace-js" tabindex="-1"><a class="header-anchor" href="#_4-2-2-prefixnamespace-js"><span>4.2.2 prefixNamespace.js</span></a></h4><p>src\\dva\\prefixNamespace.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import { NAMESPACE_SEP } from &#39;./constants&#39;;</span>
<span class="line">function prefix(obj, namespace) {</span>
<span class="line">    return Object.keys(obj).reduce((memo, key) =&gt; {</span>
<span class="line">        const newKey = \`\${namespace}\${NAMESPACE_SEP}\${key}\`;</span>
<span class="line">        memo[newKey] = obj[key];</span>
<span class="line">        return memo;</span>
<span class="line">    }, {});</span>
<span class="line">}</span>
<span class="line">export default function prefixNamespace(model) {</span>
<span class="line">    if (model.reducers)</span>
<span class="line">        model.reducers = prefix(model.reducers, model.namespace);</span>
<span class="line">+    if (model.effects) {</span>
<span class="line">+       model.effects = prefix(model.effects, model.namespace);</span>
<span class="line">+    }    </span>
<span class="line">    return model;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-支持路由" tabindex="-1"><a class="header-anchor" href="#_5-支持路由"><span>5. 支持路由</span></a></h2><h3 id="_5-1-使用" tabindex="-1"><a class="header-anchor" href="#_5-1-使用"><span>5.1 使用</span></a></h3><h4 id="_5-1-1-src-index-js" tabindex="-1"><a class="header-anchor" href="#_5-1-1-src-index-js"><span>5.1.1 src\\index.js</span></a></h4><p>src\\index.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React from &#39;react&#39;;</span>
<span class="line">import dva, { connect } from &#39;./dva&#39;;</span>
<span class="line">+import { Router, Route,Link } from &#39;./dva/router&#39;;</span>
<span class="line">const app = dva();</span>
<span class="line">app.model({</span>
<span class="line">    namespace: &#39;counter&#39;,</span>
<span class="line">    state: { number: 0 },</span>
<span class="line">    reducers: {</span>
<span class="line">        add(state) {</span>
<span class="line">            return { number: state.number + 1 };</span>
<span class="line">        }</span>
<span class="line">    },</span>
<span class="line">    effects: {</span>
<span class="line">        *asyncAdd(action, { call, put }) {</span>
<span class="line">            yield call(delay, 1000);</span>
<span class="line">            yield put({ type: &#39;counter/add&#39; });</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">});</span>
<span class="line">function Counter(props) {</span>
<span class="line">    return (</span>
<span class="line">        &lt;div&gt;</span>
<span class="line">            &lt;p&gt;{props.number}&lt;/p&gt;</span>
<span class="line">            &lt;button onClick={() =&gt; props.dispatch({ type: &quot;counter/add&quot; })}&gt;+&lt;/button&gt;</span>
<span class="line">            &lt;button onClick={() =&gt; props.dispatch({ type: &quot;counter/asyncAdd&quot; })}&gt;异步+&lt;/button&gt;</span>
<span class="line">        &lt;/div&gt;</span>
<span class="line">    )</span>
<span class="line">}</span>
<span class="line">const ConnectedCounter = connect(</span>
<span class="line">    (state) =&gt; state.counter</span>
<span class="line">)(Counter);</span>
<span class="line">+const Home = () =&gt; &lt;div&gt;Home&lt;/div&gt;</span>
<span class="line">+app.router(() =&gt; (</span>
<span class="line">+        &lt;&gt;</span>
<span class="line">+          &lt;Link to=&quot;/&quot;&gt;Home&lt;/Link&gt;</span>
<span class="line">+          &lt;Link to=&quot;/counter&quot;&gt;Counter&lt;/Link&gt;</span>
<span class="line">+          &lt;Routes&gt;</span>
<span class="line">+            &lt;Route path=&quot;/&quot; exact={true} element={&lt;Home /&gt;} /&gt;</span>
<span class="line">+            &lt;Route path=&quot;/counter&quot; element={&lt;ConnectedCounter /&gt;} /&gt;</span>
<span class="line">+          &lt;/Routes&gt;</span>
<span class="line">+        &lt;/&gt;</span>
<span class="line">+));</span>
<span class="line"> app.start(&#39;</span>
<span class="line"></span>
<span class="line">function delay(ms) {</span>
<span class="line">    return new Promise((resolve) =&gt; {</span>
<span class="line">        setTimeout(function () {</span>
<span class="line">            resolve();</span>
<span class="line">        }, ms);</span>
<span class="line">    });</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-2-实现" tabindex="-1"><a class="header-anchor" href="#_5-2-实现"><span>5.2 实现</span></a></h3><h4 id="_5-2-1-dva-index-js" tabindex="-1"><a class="header-anchor" href="#_5-2-1-dva-index-js"><span>5.2.1 dva\\index.js</span></a></h4><p>src\\dva\\index.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> ReactDOM <span class="token keyword">from</span> <span class="token string">&#39;react-dom&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createStore<span class="token punctuation">,</span> combineReducers<span class="token punctuation">,</span> applyMiddleware <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;redux&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> createSagaMiddleware <span class="token keyword">from</span> <span class="token string">&#39;redux-saga&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> sagaEffects <span class="token keyword">from</span> <span class="token string">&#39;redux-saga/effects&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">NAMESPACE_SEP</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./constants&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> connect<span class="token punctuation">,</span> Provider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-redux&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> prefixNamespace <span class="token keyword">from</span> <span class="token string">&#39;./prefixNamespace&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> BrowserRouter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-router-dom&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token punctuation">{</span> connect <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">dva</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">_models</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">        model<span class="token punctuation">,</span></span>
<span class="line">        router<span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">_router</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span></span>
<span class="line">        start</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">const</span> initialReducers <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">model</span><span class="token punctuation">(</span><span class="token parameter">model</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">const</span> prefixedModel <span class="token operator">=</span> <span class="token function">prefixNamespace</span><span class="token punctuation">(</span>model<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        app<span class="token punctuation">.</span>_models<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>prefixedModel<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span> prefixedModel<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">router</span><span class="token punctuation">(</span><span class="token parameter">router</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        app<span class="token punctuation">.</span>_router <span class="token operator">=</span> router<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">start</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> model <span class="token keyword">of</span> app<span class="token punctuation">.</span>_models<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            initialReducers<span class="token punctuation">[</span>model<span class="token punctuation">.</span>namespace<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">getReducer</span><span class="token punctuation">(</span>model<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token keyword">let</span> rootReducer <span class="token operator">=</span> <span class="token function">createReducer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">const</span> sagas <span class="token operator">=</span> <span class="token function">getSagas</span><span class="token punctuation">(</span>app<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">const</span> sagaMiddleware <span class="token operator">=</span> <span class="token function">createSagaMiddleware</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">let</span> store <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span>rootReducer<span class="token punctuation">,</span> <span class="token function">applyMiddleware</span><span class="token punctuation">(</span>sagaMiddleware<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        sagas<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">saga</span> <span class="token operator">=&gt;</span> sagaMiddleware<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span>saga<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span></span>
<span class="line"><span class="token operator">+</span>           <span class="token operator">&lt;</span>Provider store<span class="token operator">=</span><span class="token punctuation">{</span>store<span class="token punctuation">}</span><span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">+</span>             <span class="token operator">&lt;</span>BrowserRouter<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">+</span>                <span class="token punctuation">{</span>app<span class="token punctuation">.</span><span class="token function">_router</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">+</span>              <span class="token operator">&lt;</span><span class="token operator">/</span>BrowserRouter<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">+</span>            <span class="token operator">&lt;</span><span class="token operator">/</span>Provider<span class="token operator">&gt;</span><span class="token punctuation">,</span> </span>
<span class="line">        document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">function</span> <span class="token function">createReducer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token function">combineReducers</span><span class="token punctuation">(</span>initialReducers<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">getSagas</span><span class="token punctuation">(</span><span class="token parameter">app</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">let</span> sagas <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> model <span class="token keyword">of</span> app<span class="token punctuation">.</span>_models<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            sagas<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token function">getSaga</span><span class="token punctuation">(</span>model<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token keyword">return</span> sagas<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">return</span> app<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">getSaga</span><span class="token punctuation">(</span><span class="token parameter">model</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> <span class="token punctuation">{</span> effects <span class="token punctuation">}</span> <span class="token operator">=</span> model<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token operator">*</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> key <span class="token keyword">in</span> effects<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">//key=asyncAdd</span></span>
<span class="line">            <span class="token keyword">yield</span> sagaEffects<span class="token punctuation">.</span><span class="token function">takeEvery</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token operator">*</span> <span class="token punctuation">(</span>action<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token keyword">yield</span> effects<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">(</span>action<span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token operator">...</span>sagaEffects<span class="token punctuation">,</span> <span class="token function-variable function">put</span><span class="token operator">:</span> <span class="token parameter">action</span> <span class="token operator">=&gt;</span> sagaEffects<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span></span>
<span class="line">                        <span class="token punctuation">{</span> <span class="token operator">...</span>action<span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token function">prefixType</span><span class="token punctuation">(</span>action<span class="token punctuation">.</span>type<span class="token punctuation">,</span> model<span class="token punctuation">.</span>namespace<span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">prefixType</span><span class="token punctuation">(</span><span class="token parameter">type<span class="token punctuation">,</span> model</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>type<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>model<span class="token punctuation">.</span>namespace<span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token constant">NAMESPACE_SEP</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>type<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">return</span> type<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">getReducer</span><span class="token punctuation">(</span><span class="token parameter">model</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> <span class="token punctuation">{</span> reducers<span class="token punctuation">,</span> <span class="token literal-property property">state</span><span class="token operator">:</span> defaultState <span class="token punctuation">}</span> <span class="token operator">=</span> model<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">let</span> <span class="token function-variable function">reducer</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">state <span class="token operator">=</span> defaultState<span class="token punctuation">,</span> action</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">let</span> reducer <span class="token operator">=</span> reducers<span class="token punctuation">[</span>action<span class="token punctuation">.</span>type<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>reducer<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token function">reducer</span><span class="token punctuation">(</span>state<span class="token punctuation">,</span> action<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token keyword">return</span> state<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">return</span> reducer<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> dva<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-2-2-router-js" tabindex="-1"><a class="header-anchor" href="#_5-2-2-router-js"><span>5.2.2 router.js</span></a></h4><p>src\\dva\\router.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">export * from &#39;react-router-dom&#39;;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="_6-跳转路径" tabindex="-1"><a class="header-anchor" href="#_6-跳转路径"><span>6. 跳转路径</span></a></h2><h3 id="_6-1-使用" tabindex="-1"><a class="header-anchor" href="#_6-1-使用"><span>6.1 使用</span></a></h3><h4 id="_6-1-1-src-index-js" tabindex="-1"><a class="header-anchor" href="#_6-1-1-src-index-js"><span>6.1.1 src\\index.js</span></a></h4><p>src\\index.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React from &#39;react&#39;;</span>
<span class="line">import dva, { connect } from &#39;./dva&#39;;</span>
<span class="line">+import { Router, Route,Link,routerRedux } from &#39;./dva/router&#39;;</span>
<span class="line">const app = dva();</span>
<span class="line">app.model({</span>
<span class="line">    namespace: &#39;counter&#39;,</span>
<span class="line">    state: { number: 0 },</span>
<span class="line">    reducers: {</span>
<span class="line">        add(state) {</span>
<span class="line">            return { number: state.number + 1 };</span>
<span class="line">        }</span>
<span class="line">    },</span>
<span class="line">    effects: {</span>
<span class="line">        *asyncAdd(action, { call, put }) {</span>
<span class="line">            yield call(delay, 1000);</span>
<span class="line">            yield put({ type: &#39;counter/add&#39; });</span>
<span class="line">        },</span>
<span class="line">+       *goto({ to }, { put }) {</span>
<span class="line">+          yield put(routerRedux.push(to));</span>
<span class="line">+       }</span>
<span class="line">    }</span>
<span class="line">});</span>
<span class="line">function Counter(props) {</span>
<span class="line">    return (</span>
<span class="line">        &lt;div&gt;</span>
<span class="line">            &lt;p&gt;{props.number}&lt;/p&gt;</span>
<span class="line">            &lt;button onClick={() =&gt; props.dispatch({ type: &quot;counter/add&quot; })}&gt;+&lt;/button&gt;</span>
<span class="line">            &lt;button onClick={() =&gt; props.dispatch({ type: &quot;counter/asyncAdd&quot; })}&gt;异步+&lt;/button&gt;</span>
<span class="line">+            &lt;button onClick={() =&gt; props.dispatch({ type: &quot;counter/goto&quot;, to: &#39;/&#39; })}&gt;跳转到/&lt;/button&gt;</span>
<span class="line">        &lt;/div&gt;</span>
<span class="line">    )</span>
<span class="line">}</span>
<span class="line">const ConnectedCounter = connect(</span>
<span class="line">    (state) =&gt; state.counter</span>
<span class="line">)(Counter);</span>
<span class="line">const Home = () =&gt; &lt;div&gt;Home&lt;/div&gt;</span>
<span class="line">app.router(() =&gt; (</span>
<span class="line">        &lt;&gt;</span>
<span class="line">            &lt;Link to=&quot;/&quot;&gt;Home&lt;/Link&gt;</span>
<span class="line">            &lt;Link to=&quot;/counter&quot;&gt;Counter&lt;/Link&gt;</span>
<span class="line">            &lt;Route path=&quot;/&quot; exact={true} component={Home} /&gt;</span>
<span class="line">            &lt;Route path=&quot;/counter&quot; component={ConnectedCounter} /&gt;</span>
<span class="line">        &lt;/&gt;</span>
<span class="line">));</span>
<span class="line"> app.start(&#39;</span>
<span class="line"></span>
<span class="line">function delay(ms) {</span>
<span class="line">    return new Promise((resolve) =&gt; {</span>
<span class="line">        setTimeout(function () {</span>
<span class="line">            resolve();</span>
<span class="line">        }, ms);</span>
<span class="line">    });</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-2-实现" tabindex="-1"><a class="header-anchor" href="#_6-2-实现"><span>6.2 实现</span></a></h3><h4 id="_6-2-1-dva-index-js" tabindex="-1"><a class="header-anchor" href="#_6-2-1-dva-index-js"><span>6.2.1 dva\\index.js</span></a></h4><p>src\\dva\\index.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> ReactDOM <span class="token keyword">from</span> <span class="token string">&#39;react-dom&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createStore<span class="token punctuation">,</span> combineReducers<span class="token punctuation">,</span> applyMiddleware <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;redux&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> createSagaMiddleware <span class="token keyword">from</span> <span class="token string">&#39;redux-saga&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> sagaEffects <span class="token keyword">from</span> <span class="token string">&#39;redux-saga/effects&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">NAMESPACE_SEP</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./constants&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> connect<span class="token punctuation">,</span> Provider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-redux&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> prefixNamespace <span class="token keyword">from</span> <span class="token string">&#39;./prefixNamespace&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span><span class="token keyword">import</span> <span class="token punctuation">{</span> createBrowserHistory <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;history&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span><span class="token keyword">import</span> <span class="token punctuation">{</span> HistoryRouter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;redux-first-history/rr6&quot;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span><span class="token keyword">import</span> <span class="token punctuation">{</span> createReduxHistoryContext <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;redux-first-history&quot;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span><span class="token keyword">const</span> <span class="token punctuation">{</span> routerReducer<span class="token punctuation">,</span> routerMiddleware<span class="token punctuation">,</span> createReduxHistory <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">createReduxHistoryContext</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">history</span><span class="token operator">:</span> <span class="token function">createBrowserHistory</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token punctuation">{</span> connect <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">dva</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">_models</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">        model<span class="token punctuation">,</span></span>
<span class="line">        router<span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">_router</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span></span>
<span class="line">        start</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">+</span>   <span class="token keyword">const</span> initialReducers <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">router</span><span class="token operator">:</span> routerReducer <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">model</span><span class="token punctuation">(</span><span class="token parameter">model</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">const</span> prefixedModel <span class="token operator">=</span> <span class="token function">prefixNamespace</span><span class="token punctuation">(</span>model<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        app<span class="token punctuation">.</span>_models<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>prefixedModel<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span> prefixedModel<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">router</span><span class="token punctuation">(</span><span class="token parameter">router</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        app<span class="token punctuation">.</span>_router <span class="token operator">=</span> router<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">start</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> model <span class="token keyword">of</span> app<span class="token punctuation">.</span>_models<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            initialReducers<span class="token punctuation">[</span>model<span class="token punctuation">.</span>namespace<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">getReducer</span><span class="token punctuation">(</span>model<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token keyword">let</span> rootReducer <span class="token operator">=</span> <span class="token function">createReducer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">const</span> sagas <span class="token operator">=</span> <span class="token function">getSagas</span><span class="token punctuation">(</span>app<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">const</span> sagaMiddleware <span class="token operator">=</span> <span class="token function">createSagaMiddleware</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>       <span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span>rootReducer<span class="token punctuation">,</span> <span class="token function">applyMiddleware</span><span class="token punctuation">(</span>routerMiddleware<span class="token punctuation">,</span> sagaMiddleware<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        sagas<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">saga</span> <span class="token operator">=&gt;</span> sagaMiddleware<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span>saga<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span></span>
<span class="line">            <span class="token operator">&lt;</span>Provider store<span class="token operator">=</span><span class="token punctuation">{</span>store<span class="token punctuation">}</span><span class="token operator">&gt;</span></span>
<span class="line">             <span class="token operator">&lt;</span>HistoryRouter history<span class="token operator">=</span><span class="token punctuation">{</span><span class="token function">createReduxHistory</span><span class="token punctuation">(</span>store<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&gt;</span></span>
<span class="line">                <span class="token punctuation">{</span>app<span class="token punctuation">.</span><span class="token function">_router</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
<span class="line">             <span class="token operator">&lt;</span><span class="token operator">/</span>HistoryRouter<span class="token operator">&gt;</span></span>
<span class="line">            <span class="token operator">&lt;</span><span class="token operator">/</span>Provider<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>Provider<span class="token operator">&gt;</span><span class="token punctuation">,</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">function</span> <span class="token function">createReducer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token function">combineReducers</span><span class="token punctuation">(</span>initialReducers<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">getSagas</span><span class="token punctuation">(</span><span class="token parameter">app</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">let</span> sagas <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> model <span class="token keyword">of</span> app<span class="token punctuation">.</span>_models<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            sagas<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token function">getSaga</span><span class="token punctuation">(</span>model<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token keyword">return</span> sagas<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">return</span> app<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">getSaga</span><span class="token punctuation">(</span><span class="token parameter">model</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> <span class="token punctuation">{</span> effects <span class="token punctuation">}</span> <span class="token operator">=</span> model<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token operator">*</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> key <span class="token keyword">in</span> effects<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">yield</span> sagaEffects<span class="token punctuation">.</span><span class="token function">takeEvery</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token operator">*</span> <span class="token punctuation">(</span>action<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token keyword">yield</span> effects<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">(</span>action<span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token operator">...</span>sagaEffects<span class="token punctuation">,</span> <span class="token function-variable function">put</span><span class="token operator">:</span> <span class="token parameter">action</span> <span class="token operator">=&gt;</span> sagaEffects<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span></span>
<span class="line">                        <span class="token punctuation">{</span> <span class="token operator">...</span>action<span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token function">prefixType</span><span class="token punctuation">(</span>action<span class="token punctuation">.</span>type<span class="token punctuation">,</span> model<span class="token punctuation">.</span>namespace<span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">prefixType</span><span class="token punctuation">(</span><span class="token parameter">type<span class="token punctuation">,</span> model</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>type<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>model<span class="token punctuation">.</span>namespace<span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token constant">NAMESPACE_SEP</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>type<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">return</span> type<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">getReducer</span><span class="token punctuation">(</span><span class="token parameter">model</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> <span class="token punctuation">{</span> reducers<span class="token punctuation">,</span> <span class="token literal-property property">state</span><span class="token operator">:</span> defaultState <span class="token punctuation">}</span> <span class="token operator">=</span> model<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">let</span> <span class="token function-variable function">reducer</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">state <span class="token operator">=</span> defaultState<span class="token punctuation">,</span> action</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">let</span> reducer <span class="token operator">=</span> reducers<span class="token punctuation">[</span>action<span class="token punctuation">.</span>type<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>reducer<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token function">reducer</span><span class="token punctuation">(</span>state<span class="token punctuation">,</span> action<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token keyword">return</span> state<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">return</span> reducer<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> dva<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_6-2-2-src-dva-router-js" tabindex="-1"><a class="header-anchor" href="#_6-2-2-src-dva-router-js"><span>6.2.2 src\\dva\\router.js</span></a></h4><p>src\\dva\\router.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import * as routerRedux from &#39;redux-first-history&#39;;</span>
<span class="line">export * from &#39;react-router-dom&#39;;</span>
<span class="line">export {</span>
<span class="line">    routerRedux</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,54)])])}const o=s(t,[["render",l]]),u=JSON.parse('{"path":"/strong/106.8.dva.html","title":"","lang":"en-US","frontmatter":{},"git":{"updatedTime":1681290319000,"contributors":[{"name":"yutao","username":"yutao","email":"642231346@qq.com","commits":1,"url":"https://github.com/yutao"}],"changelog":[{"hash":"f5ab8c9d34991ec274f7f652439afe5b2afb6147","time":1681290319000,"email":"642231346@qq.com","author":"yutao","message":"modify"}]},"filePathRelative":"strong/106.8.dva.md"}');export{o as comp,u as data};
