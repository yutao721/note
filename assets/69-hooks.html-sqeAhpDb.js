import{_ as s,c as a,a as e,o as p}from"./app-CD1YpnS1.js";const t={};function l(c,n){return p(),a("div",null,[...n[0]||(n[0]=[e(`<h2 id="_1-react-hooks" tabindex="-1"><a class="header-anchor" href="#_1-react-hooks"><span>1. React Hooks</span></a></h2><ul><li>Hook可以让你在不编写 <code>class</code>组件 的情况下使用 <code>state</code></li></ul><h2 id="_2-搭建项目" tabindex="-1"><a class="header-anchor" href="#_2-搭建项目"><span>2. 搭建项目</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">npx create-react-app zhufeng_hooks</span>
<span class="line">cd zhufeng_hooks</span>
<span class="line">yarn start</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-usestate" tabindex="-1"><a class="header-anchor" href="#_3-usestate"><span>3. useState</span></a></h2><ul><li><code>useState</code> 会返回一对值: 当前状态和一个让你更新它的函数</li><li><code>useState</code> 唯一的参数就是初始 <code>state</code></li></ul><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">const</span> <span class="token punctuation">[</span>state<span class="token punctuation">,</span> setState<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span>initialState<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_3-1-使用" tabindex="-1"><a class="header-anchor" href="#_3-1-使用"><span>3.1 使用</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> ReactDOM <span class="token keyword">from</span> <span class="token string">&#39;react-dom&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">Counter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> <span class="token punctuation">[</span>number<span class="token punctuation">,</span>setNumber<span class="token punctuation">]</span> <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">        <span class="token operator">&lt;</span><span class="token operator">&gt;</span></span>
<span class="line">            <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span><span class="token punctuation">{</span>number<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span></span>
<span class="line">            <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token function">setNumber</span><span class="token punctuation">(</span>number<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token operator">+</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span></span>
<span class="line">        <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line">    <span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>Counter<span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-实现" tabindex="-1"><a class="header-anchor" href="#_3-2-实现"><span>3.2 实现</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React from &#39;react&#39;;</span>
<span class="line">import ReactDOM from &#39;react-dom&#39;;</span>
<span class="line">+let lastState;</span>
<span class="line">+function useState(initialState){</span>
<span class="line">+    lastState = lastState||initialState;</span>
<span class="line">+    function setState(newState){</span>
<span class="line">+        lastState = newState;</span>
<span class="line">+       render();</span>
<span class="line">+    }</span>
<span class="line">+    return [lastState,setState];</span>
<span class="line">+}</span>
<span class="line"></span>
<span class="line">function Counter(){</span>
<span class="line">    const [number,setNumber] = useState(0);</span>
<span class="line">    return (</span>
<span class="line">        &lt;&gt;</span>
<span class="line">            &lt;p&gt;{number}&lt;/p&gt;</span>
<span class="line">            &lt;button onClick={()=&gt;setNumber(number+1)}&gt;+&lt;/button&gt;</span>
<span class="line">        &lt;/&gt;</span>
<span class="line">    )</span>
<span class="line">}</span>
<span class="line">function render(){</span>
<span class="line">    ReactDOM.render(&lt;Counter/&gt;,document.getElementById(&#39;root&#39;));</span>
<span class="line">}</span>
<span class="line">render();</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-多usestate" tabindex="-1"><a class="header-anchor" href="#_4-多usestate"><span>4. 多useState</span></a></h2><h3 id="_4-1-使用" tabindex="-1"><a class="header-anchor" href="#_4-1-使用"><span>4.1 使用</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> ReactDOM <span class="token keyword">from</span> <span class="token string">&#39;react-dom&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">Counter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> <span class="token punctuation">[</span>number1<span class="token punctuation">,</span>setNumber1<span class="token punctuation">]</span> <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">const</span> <span class="token punctuation">[</span>number2<span class="token punctuation">,</span>setNumber2<span class="token punctuation">]</span> <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">        <span class="token operator">&lt;</span><span class="token operator">&gt;</span></span>
<span class="line">            <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span><span class="token punctuation">{</span>number1<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span></span>
<span class="line">            <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token function">setNumber1</span><span class="token punctuation">(</span>number1<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token operator">+</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span></span>
<span class="line">            <span class="token operator">&lt;</span>hr<span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line">            <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span><span class="token punctuation">{</span>number2<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span></span>
<span class="line">            <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token function">setNumber2</span><span class="token punctuation">(</span>number2<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token operator">+</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span></span>
<span class="line">        <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line">    <span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>Counter<span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-实现" tabindex="-1"><a class="header-anchor" href="#_4-2-实现"><span>4.2 实现</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> ReactDOM <span class="token keyword">from</span> <span class="token string">&#39;react-dom&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> hookStates <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> hookIndex <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token parameter">initialState</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">//如果有老值取老值,没有取默认值</span></span>
<span class="line">    hookStates<span class="token punctuation">[</span>hookIndex<span class="token punctuation">]</span><span class="token operator">=</span>hookStates<span class="token punctuation">[</span>hookIndex<span class="token punctuation">]</span><span class="token operator">||</span>initialState<span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">//暂存索引</span></span>
<span class="line">    <span class="token keyword">let</span> currentIndex <span class="token operator">=</span> hookIndex<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">setState</span><span class="token punctuation">(</span><span class="token parameter">newState</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">      hookStates<span class="token punctuation">[</span>currentIndex<span class="token punctuation">]</span><span class="token operator">=</span>newState<span class="token punctuation">;</span></span>
<span class="line">      <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">[</span>hookStates<span class="token punctuation">[</span>hookIndex<span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">,</span>setState<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> </span>
<span class="line"><span class="token keyword">function</span> <span class="token function">Counter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> <span class="token punctuation">[</span>number1<span class="token punctuation">,</span>setNumber1<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">const</span> <span class="token punctuation">[</span>number2<span class="token punctuation">,</span>setNumber2<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">        <span class="token operator">&lt;</span><span class="token operator">&gt;</span></span>
<span class="line">            <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span><span class="token punctuation">{</span>number1<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span></span>
<span class="line">            <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token function">setNumber1</span><span class="token punctuation">(</span>number1<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token operator">+</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span></span>
<span class="line">            <span class="token operator">&lt;</span>hr<span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line">            <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span><span class="token punctuation">{</span>number2<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span></span>
<span class="line">            <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token function">setNumber2</span><span class="token punctuation">(</span>number2<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token operator">+</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span></span>
<span class="line">        <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line">    <span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    hookIndex <span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">    ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>Counter<span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-优化" tabindex="-1"><a class="header-anchor" href="#_5-优化"><span>5. 优化</span></a></h2><ul><li>我们可以使用<code>useMemo</code>和<code>useCallback</code>来减少渲染</li></ul><h3 id="_5-1-使用" tabindex="-1"><a class="header-anchor" href="#_5-1-使用"><span>5.1 使用</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> ReactDOM <span class="token keyword">from</span> <span class="token string">&#39;react-dom&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span>  <span class="token function-variable function">Child</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> onButtonClick<span class="token punctuation">,</span> data <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Child render&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>onButtonClick<span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">{</span>data<span class="token punctuation">.</span>number<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">Child <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">memo</span><span class="token punctuation">(</span>Child<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> <span class="token punctuation">[</span>number<span class="token punctuation">,</span> setNumber<span class="token punctuation">]</span> <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">const</span> <span class="token punctuation">[</span>name<span class="token punctuation">,</span> setName<span class="token punctuation">]</span> <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">&quot;zhufeng&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">const</span> addClick <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useCallback</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">setNumber</span><span class="token punctuation">(</span>number <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>number<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">const</span> data <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useMemo</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> number <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>number<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">      <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span></span>
<span class="line">        <span class="token operator">&lt;</span>input value<span class="token operator">=</span><span class="token punctuation">{</span>name<span class="token punctuation">}</span> onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">setName</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line">        <span class="token operator">&lt;</span>Child onButtonClick<span class="token operator">=</span><span class="token punctuation">{</span>addClick<span class="token punctuation">}</span> data<span class="token operator">=</span><span class="token punctuation">{</span>data<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line">      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>App <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-2-实现" tabindex="-1"><a class="header-anchor" href="#_5-2-实现"><span>5.2 实现</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React from &#39;react&#39;;</span>
<span class="line">import ReactDOM from &#39;react-dom&#39;;</span>
<span class="line">+let hookStates = [];//放着此组件的所有的hooks数据</span>
<span class="line">+let hookIndex = 0;//代表当前的hooks的索引</span>
<span class="line">+function useState(initialState){</span>
<span class="line">+  //如果有老值取老值,没有取默认值</span>
<span class="line">+  hookStates[hookIndex]=hookStates[hookIndex]||initialState;</span>
<span class="line">+  //暂存索引</span>
<span class="line">+  let currentIndex = hookIndex;</span>
<span class="line">+  function setState(newState){</span>
<span class="line">+    hookStates[currentIndex]=newState;</span>
<span class="line">+    render();</span>
<span class="line">+  }</span>
<span class="line">+  return [hookStates[hookIndex++],setState];</span>
<span class="line">+} </span>
<span class="line">+function useCallback(callback,dependencies){</span>
<span class="line">+  if(hookStates[hookIndex]){</span>
<span class="line">+    let [lastCallback,lastCallbackDeps] = hookStates[hookIndex];</span>
<span class="line">+    let same = dependencies.every((item,index)=&gt;item === lastCallbackDeps[index]);</span>
<span class="line">+    if(same){//如果老依赖和新的依赖都相同,则直接返回老的,如果不一相同,则返回新的</span>
<span class="line">+      hookIndex++;</span>
<span class="line">+      return lastCallback;</span>
<span class="line">+    }else{</span>
<span class="line">+      hookStates[hookIndex++]=[callback,dependencies];</span>
<span class="line">+      return callback;</span>
<span class="line">+    }</span>
<span class="line">+  }else{</span>
<span class="line">+    hookStates[hookIndex++]=[callback,dependencies];</span>
<span class="line">+    return callback;</span>
<span class="line">+  }</span>
<span class="line">+}</span>
<span class="line">+</span>
<span class="line">+function useMemo(factory,dependencies){</span>
<span class="line">+  if(hookStates[hookIndex]){</span>
<span class="line">+    let [memo,lastDeps] = hookStates[hookIndex];</span>
<span class="line">+    let same = dependencies.every((item,index)=&gt;item === lastDeps[index]);</span>
<span class="line">+    if(same){//如果老依赖和新的依赖都相同,则直接返回老的,如果不一相同,则返回新的</span>
<span class="line">+      hookIndex++;</span>
<span class="line">+      return memo;</span>
<span class="line">+    }else{</span>
<span class="line">+      let newMemo = factory();</span>
<span class="line">+      hookStates[hookIndex++]=[newMemo,dependencies];</span>
<span class="line">+      return newMemo;</span>
<span class="line">+    }</span>
<span class="line">+  }else{</span>
<span class="line">+    let newMemo = factory();</span>
<span class="line">+    hookStates[hookIndex++]=[newMemo,dependencies];</span>
<span class="line">+    return newMemo;</span>
<span class="line">+  }</span>
<span class="line">+}</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">let  Child = ({ onButtonClick, data }) =&gt; {</span>
<span class="line">    console.log(&quot;Child render&quot;);</span>
<span class="line">    return &lt;button onClick={onButtonClick}&gt;{data.number}&lt;/button&gt;;</span>
<span class="line">}</span>
<span class="line">Child = React.memo(Child);</span>
<span class="line"></span>
<span class="line">function App() {</span>
<span class="line">    const [number, setNumber] = useState(0);</span>
<span class="line">    const [name, setName] = useState(&quot;zhufeng&quot;);</span>
<span class="line">    const addClick = useCallback(() =&gt; setNumber(number + 1), [number]);</span>
<span class="line">    const data = useMemo(() =&gt; ({ number }), [number]);</span>
<span class="line">    return (</span>
<span class="line">      &lt;div&gt;</span>
<span class="line">        &lt;input value={name} onChange={(e) =&gt; setName(e.target.value)} /&gt;</span>
<span class="line">        &lt;Child onButtonClick={addClick} data={data} /&gt;</span>
<span class="line">      &lt;/div&gt;</span>
<span class="line">    );</span>
<span class="line">}</span>
<span class="line">function render(){</span>
<span class="line">  hookIndex =0;</span>
<span class="line">  ReactDOM.render(&lt;App /&gt;,document.getElementById(&#39;root&#39;));</span>
<span class="line">}</span>
<span class="line">render();</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-useeffect" tabindex="-1"><a class="header-anchor" href="#_6-useeffect"><span>6. useEffect</span></a></h2><ul><li>useEffect 就是一个 Effect Hook，给函数组件增加了操作副作用的能力</li><li>它跟 class 组件中的 <code>componentDidMount</code>、<code>componentDidUpdate</code> 和 <code>componentWillUnmount</code> 具有相同的用途，只不过被合并成了一个 API</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">useEffect(didUpdate)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><img src="http://img.zhufengpeixun.cn/useLayoutEffects.jpg" alt="useLayoutEffects"></p><h3 id="_6-1-使用" tabindex="-1"><a class="header-anchor" href="#_6-1-使用"><span>6.1 使用</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> ReactDOM <span class="token keyword">from</span> <span class="token string">&#39;react-dom&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">Counter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> <span class="token punctuation">[</span>name<span class="token punctuation">,</span>setName<span class="token punctuation">]</span> <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">&#39;珠峰&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">const</span> <span class="token punctuation">[</span>number<span class="token punctuation">,</span>setNumber<span class="token punctuation">]</span> <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    React<span class="token punctuation">.</span><span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>number<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">     <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>number<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">        <span class="token operator">&lt;</span><span class="token operator">&gt;</span></span>
<span class="line">            <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span><span class="token punctuation">{</span>name<span class="token punctuation">}</span><span class="token operator">:</span><span class="token punctuation">{</span>number<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span></span>
<span class="line">             <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&#39;架构&#39;</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>修改名称<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span></span>
<span class="line">            <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token function">setNumber</span><span class="token punctuation">(</span>number<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token operator">+</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span></span>
<span class="line">        <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line">    <span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>Counter<span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-2-实现useeffect" tabindex="-1"><a class="header-anchor" href="#_6-2-实现useeffect"><span>6.2 实现useEffect</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React from &#39;react&#39;;</span>
<span class="line">import ReactDOM from &#39;react-dom&#39;;</span>
<span class="line"></span>
<span class="line">+let hookStates = [];</span>
<span class="line">+let hookIndex = 0;</span>
<span class="line">+function useState(initialState){</span>
<span class="line">+  hookStates[hookIndex]=hookStates[hookIndex]||initialState;</span>
<span class="line">+  let currentIndex = hookIndex;</span>
<span class="line">+  function setState(newState){</span>
<span class="line">+    hookStates[currentIndex]=newState;</span>
<span class="line">+    render();</span>
<span class="line">+  }</span>
<span class="line">+  return [hookStates[hookIndex++],setState];</span>
<span class="line">+} </span>
<span class="line"></span>
<span class="line">+function useEffect(callback,dependencies){</span>
<span class="line">+  if(hookStates[hookIndex]){</span>
<span class="line">+      let lastDeps = hookStates[hookIndex];</span>
<span class="line">+      let same = dependencies.every((item,index)=&gt;item === lastDeps[index]);</span>
<span class="line">+      if(same){</span>
<span class="line">+        hookIndex++;</span>
<span class="line">+      }else{</span>
<span class="line">+        hookStates[hookIndex++]=dependencies;</span>
<span class="line">+         setTimeout(callback);</span>
<span class="line">+      }</span>
<span class="line">+  }else{</span>
<span class="line">+     hookStates[hookIndex++]=dependencies;</span>
<span class="line">+      setTimeout(callback);</span>
<span class="line">+  }</span>
<span class="line">+}</span>
<span class="line"></span>
<span class="line">function Counter(){</span>
<span class="line">    const [name,setName] = useState(&#39;珠峰&#39;);</span>
<span class="line">    const [number,setNumber] = useState(0);</span>
<span class="line">    useEffect(() =&gt; {</span>
<span class="line">        console.log(number);</span>
<span class="line">     }, [number]);</span>
<span class="line">    return (</span>
<span class="line">        &lt;&gt;</span>
<span class="line">            &lt;p&gt;{name}:{number}&lt;/p&gt;</span>
<span class="line">             &lt;button onClick={()=&gt;setName(&#39;架构&#39;)}&gt;修改名称&lt;/button&gt;</span>
<span class="line">            &lt;button onClick={()=&gt;setNumber(number+1)}&gt;+&lt;/button&gt;</span>
<span class="line">        &lt;/&gt;</span>
<span class="line">    )</span>
<span class="line">}</span>
<span class="line">function render(){</span>
<span class="line">  hookIndex=0;</span>
<span class="line">  ReactDOM.render(&lt;Counter/&gt;,document.getElementById(&#39;root&#39;));</span>
<span class="line">}</span>
<span class="line">render();</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-uselayouteffect" tabindex="-1"><a class="header-anchor" href="#_7-uselayouteffect"><span>7. useLayoutEffect</span></a></h2><ul><li>其函数签名与 <code>useEffect</code> 相同，但它会在所有的 <code>DOM</code> 变更之后同步调用 effect</li><li><code>useEffect</code>不会阻塞浏览器渲染，而 <code>useLayoutEffect</code> 会浏览器渲染</li><li><code>useEffect</code>会在浏览器渲染结束后执行,<code>useLayoutEffect</code> 则是在 <code>DOM</code> 更新完成后,浏览器绘制之前执行</li></ul><h3 id="_7-1-使用" tabindex="-1"><a class="header-anchor" href="#_7-1-使用"><span>7.1 使用</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> ReactDOM <span class="token keyword">from</span> <span class="token string">&#39;react-dom&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">Animate</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> red <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">const</span> green <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  React<span class="token punctuation">.</span><span class="token function">useLayoutEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    red<span class="token punctuation">.</span>current<span class="token punctuation">.</span>style<span class="token punctuation">.</span>transform <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">translate(500px)</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span></span>
<span class="line">    red<span class="token punctuation">.</span>current<span class="token punctuation">.</span>style<span class="token punctuation">.</span>transition <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">all 500ms</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  React<span class="token punctuation">.</span><span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    green<span class="token punctuation">.</span>current<span class="token punctuation">.</span>style<span class="token punctuation">.</span>transform <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">translate(500px)</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span></span>
<span class="line">    green<span class="token punctuation">.</span>current<span class="token punctuation">.</span>style<span class="token punctuation">.</span>transition <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">all 500ms</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">let</span> style <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">&#39;100px&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">&#39;100px&#39;</span> <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span></span>
<span class="line">      <span class="token operator">&lt;</span>div style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token operator">...</span>style<span class="token punctuation">,</span> <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">&#39;red&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">}</span> ref<span class="token operator">=</span><span class="token punctuation">{</span>red<span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line">      <span class="token operator">&lt;</span>div style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token operator">...</span>style<span class="token punctuation">,</span> <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">&#39;green&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">}</span> ref<span class="token operator">=</span><span class="token punctuation">{</span>green<span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>Animate <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-2-实现" tabindex="-1"><a class="header-anchor" href="#_7-2-实现"><span>7.2 实现</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React from &#39;react&#39;;</span>
<span class="line">import ReactDOM from &#39;react-dom&#39;;</span>
<span class="line"></span>
<span class="line">+let hookStates = [];</span>
<span class="line">+let hookIndex = 0;</span>
<span class="line">+function useEffect(callback,dependencies){</span>
<span class="line">+  if(hookStates[hookIndex]){</span>
<span class="line">+      let lastDeps = hookStates[hookIndex];</span>
<span class="line">+      let same = dependencies.every((item,index)=&gt;item === lastDeps[index]);</span>
<span class="line">+      if(same){</span>
<span class="line">+        hookIndex++;</span>
<span class="line">+      }else{</span>
<span class="line">+        hookStates[hookIndex++]=dependencies;</span>
<span class="line">+        setTimeout(callback);</span>
<span class="line">+      }</span>
<span class="line">+  }else{</span>
<span class="line">+     hookStates[hookIndex++]=dependencies;</span>
<span class="line">+     setTimeout(callback);</span>
<span class="line">+  }</span>
<span class="line">+}</span>
<span class="line">+function useLayoutEffect(callback,dependencies){</span>
<span class="line">+  if(hookStates[hookIndex]){</span>
<span class="line">+      let lastDeps = hookStates[hookIndex];</span>
<span class="line">+      let same = dependencies.every((item,index)=&gt;item === lastDeps[index]);</span>
<span class="line">+      if(same){</span>
<span class="line">+        hookIndex++;</span>
<span class="line">+      }else{</span>
<span class="line">+        hookStates[hookIndex++]=dependencies;</span>
<span class="line">+        queueMicrotask(callback);</span>
<span class="line">+      }</span>
<span class="line">+  }else{</span>
<span class="line">+     hookStates[hookIndex++]=dependencies;</span>
<span class="line">+     queueMicrotask(callback);</span>
<span class="line">+  }</span>
<span class="line">+}</span>
<span class="line">const Animate = () =&gt; {</span>
<span class="line">  const red = React.useRef();</span>
<span class="line">  const green = React.useRef();</span>
<span class="line">  useLayoutEffect(() =&gt; {</span>
<span class="line">    red.current.style.transform = \`translate(500px)\`;</span>
<span class="line">    red.current.style.transition = \`all 500ms\`;</span>
<span class="line">  });</span>
<span class="line">  useEffect(() =&gt; {</span>
<span class="line">    green.current.style.transform = \`translate(500px)\`;</span>
<span class="line">    green.current.style.transition = \`all 500ms\`;</span>
<span class="line">  });</span>
<span class="line">  let style = { width: &#39;100px&#39;, height: &#39;100px&#39; }</span>
<span class="line">  return (</span>
<span class="line">    &lt;div&gt;</span>
<span class="line">      &lt;div style={{ ...style, backgroundColor: &#39;red&#39; }} ref={red}&gt;&lt;/div&gt;</span>
<span class="line">      &lt;div style={{ ...style, backgroundColor: &#39;green&#39; }} ref={green}&gt;&lt;/div&gt;</span>
<span class="line">    &lt;/div&gt;</span>
<span class="line">  )</span>
<span class="line">}</span>
<span class="line">function render() {</span>
<span class="line">  ReactDOM.render(&lt;Animate /&gt;, document.getElementById(&#39;root&#39;));</span>
<span class="line">}</span>
<span class="line">render();</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-usecontext" tabindex="-1"><a class="header-anchor" href="#_8-usecontext"><span>8. useContext</span></a></h2><ul><li>接收一个 <code>context</code> 对象并返回该 <code>context</code> 的当前值</li></ul><h3 id="_8-1-使用" tabindex="-1"><a class="header-anchor" href="#_8-1-使用"><span>8.1 使用</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> ReactDOM <span class="token keyword">from</span> <span class="token string">&#39;react-dom&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> CounterContext <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">Counter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> <span class="token punctuation">{</span>state<span class="token punctuation">,</span>setState<span class="token punctuation">}</span> <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useContext</span><span class="token punctuation">(</span>CounterContext<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">      <span class="token operator">&lt;</span><span class="token operator">&gt;</span></span>
<span class="line">        <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span><span class="token punctuation">{</span>state<span class="token punctuation">.</span>number<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span></span>
<span class="line">        <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">number</span><span class="token operator">:</span>state<span class="token punctuation">.</span>number<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token operator">+</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span></span>
<span class="line">        <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">number</span><span class="token operator">:</span>state<span class="token punctuation">.</span>number<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token operator">-</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span></span>
<span class="line">      <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line">  <span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> <span class="token punctuation">[</span>state<span class="token punctuation">,</span> setState<span class="token punctuation">]</span> <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">number</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">        <span class="token operator">&lt;</span>CounterContext<span class="token punctuation">.</span>Provider value<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>state<span class="token punctuation">,</span>setState<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&gt;</span></span>
<span class="line">            <span class="token operator">&lt;</span>Counter<span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line">        <span class="token operator">&lt;</span><span class="token operator">/</span>CounterContext<span class="token punctuation">.</span>Provider<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>App<span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-2-实现" tabindex="-1"><a class="header-anchor" href="#_8-2-实现"><span>8.2 实现</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React from &#39;react&#39;;</span>
<span class="line">import ReactDOM from &#39;react-dom&#39;;</span>
<span class="line">const CounterContext = React.createContext();</span>
<span class="line">+function useContext(context){</span>
<span class="line">+  return context._currentValue;</span>
<span class="line">+}</span>
<span class="line">function Counter(){</span>
<span class="line">  let {state,setState} = useContext(CounterContext);</span>
<span class="line">  return (</span>
<span class="line">      &lt;&gt;</span>
<span class="line">        &lt;p&gt;{state.number}&lt;/p&gt;</span>
<span class="line">        &lt;button onClick={() =&gt; setState({number:state.number+1})}&gt;+&lt;/button&gt;</span>
<span class="line">        &lt;button onClick={() =&gt; setState({number:state.number-1})}&gt;-&lt;/button&gt;</span>
<span class="line">      &lt;/&gt;</span>
<span class="line">  )</span>
<span class="line">}</span>
<span class="line">function App(){</span>
<span class="line">    const [state, setState] = React.useState({number:0});</span>
<span class="line">    return (</span>
<span class="line">        &lt;CounterContext.Provider value={{state,setState}}&gt;</span>
<span class="line">            &lt;Counter/&gt;</span>
<span class="line">        &lt;/CounterContext.Provider&gt;</span>
<span class="line">    )</span>
<span class="line">}</span>
<span class="line">function render(){</span>
<span class="line">    ReactDOM.render(&lt;App/&gt;,document.getElementById(&#39;root&#39;));</span>
<span class="line">}</span>
<span class="line">render();</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-usereducer" tabindex="-1"><a class="header-anchor" href="#_9-usereducer"><span>9. useReducer</span></a></h2><ul><li>它接收一个形如 (state, action) =&gt; newState 的 reducer，并返回当前的 state 以及与其配套的 dispatch 方法</li></ul><h3 id="_9-1-使用" tabindex="-1"><a class="header-anchor" href="#_9-1-使用"><span>9.1 使用</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> ReactDOM <span class="token keyword">from</span> <span class="token string">&#39;react-dom&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">reducer</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> action</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">switch</span> <span class="token punctuation">(</span>action<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">case</span> <span class="token string">&#39;increment&#39;</span><span class="token operator">:</span></span>
<span class="line">      <span class="token keyword">return</span> state<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">case</span> <span class="token string">&#39;decrement&#39;</span><span class="token operator">:</span></span>
<span class="line">      <span class="token keyword">return</span> state<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">default</span><span class="token operator">:</span></span>
<span class="line">      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">Counter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> <span class="token punctuation">[</span>state<span class="token punctuation">,</span> dispatch<span class="token punctuation">]</span> <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useReducer</span><span class="token punctuation">(</span>reducer<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">        <span class="token operator">&lt;</span><span class="token operator">&gt;</span></span>
<span class="line">          <span class="token literal-property property">Count</span><span class="token operator">:</span> <span class="token punctuation">{</span>state<span class="token punctuation">}</span></span>
<span class="line">          <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;increment&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token operator">+</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span></span>
<span class="line">          <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;decrement&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token operator">-</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span></span>
<span class="line">        <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line">    <span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>Counter<span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-2-实现" tabindex="-1"><a class="header-anchor" href="#_9-2-实现"><span>9.2 实现</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React from &#39;react&#39;;</span>
<span class="line">import ReactDOM from &#39;react-dom&#39;;</span>
<span class="line">+let hookStates = [];</span>
<span class="line">+let hookIndex = 0;</span>
<span class="line">+function useState(initialState){</span>
<span class="line">+    hookStates[hookIndex]=hookStates[hookIndex]||initialState;</span>
<span class="line">+    let currentIndex = hookIndex;</span>
<span class="line">+    function setState(newState){</span>
<span class="line">+      hookStates[currentIndex]=newState;</span>
<span class="line">+      render();</span>
<span class="line">+    }</span>
<span class="line">+    return [hookStates[hookIndex++],setState];</span>
<span class="line">+} </span>
<span class="line">+function useReducer(reducer, initialState) {</span>
<span class="line">+  hookStates[hookIndex]=hookStates[hookIndex]||initialState;</span>
<span class="line">+  let currentIndex = hookIndex;</span>
<span class="line">+  function dispatch(action) {</span>
<span class="line">+    hookStates[currentIndex]=reducer(hookStates[currentIndex],action);</span>
<span class="line">+    render();</span>
<span class="line">+  }</span>
<span class="line">+  return [hookStates[hookIndex++], dispatch];</span>
<span class="line">+}</span>
<span class="line">const reducer = (state=0,action)=&gt;{</span>
<span class="line">  switch(action.type){</span>
<span class="line">    case &#39;add&#39;:</span>
<span class="line">      return state+1;</span>
<span class="line">    default:</span>
<span class="line">      return state;</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line">function Counter(){</span>
<span class="line">    const [number1,setNumber1] = useState(0);</span>
<span class="line">    const [number2,dispatch] = useReducer(reducer,0);</span>
<span class="line">    return (</span>
<span class="line">        &lt;&gt;</span>
<span class="line">            &lt;p&gt;{number1}&lt;/p&gt;</span>
<span class="line">            &lt;button onClick={()=&gt;setNumber1(number1+1)}&gt;+&lt;/button&gt;</span>
<span class="line">            &lt;hr/&gt;</span>
<span class="line">            &lt;p&gt;{number2}&lt;/p&gt;</span>
<span class="line">            &lt;button onClick={() =&gt; dispatch({type: &#39;add&#39;})}&gt;+&lt;/button&gt;</span>
<span class="line">        &lt;/&gt;</span>
<span class="line">    )</span>
<span class="line">}</span>
<span class="line">function render(){</span>
<span class="line">    hookIndex=0;</span>
<span class="line">    ReactDOM.render(&lt;Counter/&gt;,document.getElementById(&#39;root&#39;));</span>
<span class="line">}</span>
<span class="line">render();</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,48)])])}const i=s(t,[["render",l]]),u=JSON.parse('{"path":"/strong/69-hooks.html","title":"","lang":"en-US","frontmatter":{},"git":{"updatedTime":1681290319000,"contributors":[{"name":"yutao","username":"yutao","email":"642231346@qq.com","commits":1,"url":"https://github.com/yutao"}],"changelog":[{"hash":"f5ab8c9d34991ec274f7f652439afe5b2afb6147","time":1681290319000,"email":"642231346@qq.com","author":"yutao","message":"modify"}]},"filePathRelative":"strong/69-hooks.md"}');export{i as comp,u as data};
