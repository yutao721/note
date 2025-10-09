import{_ as n,c as a,a as e,o as p}from"./app-CD1YpnS1.js";const t={};function l(c,s){return p(),a("div",null,[...s[0]||(s[0]=[e(`<h2 id="_1-初始化项目" tabindex="-1"><a class="header-anchor" href="#_1-初始化项目"><span>1.初始化项目</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">create-react-app zhufeng-keepalive</span>
<span class="line">cd zhufeng-keepalive</span>
<span class="line">npm install react-router-dom keepalive-react-component --save</span>
<span class="line">npm start</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-跑通路由" tabindex="-1"><a class="header-anchor" href="#_2-跑通路由"><span>2.跑通路由</span></a></h2><h3 id="_2-1-src-index-js" tabindex="-1"><a class="header-anchor" href="#_2-1-src-index-js"><span>2.1 src\\index.js</span></a></h3><p>src\\index.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> ReactDOM <span class="token keyword">from</span> <span class="token string">&#39;react-dom&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> BrowserRouter <span class="token keyword">as</span> Router<span class="token punctuation">,</span> Route<span class="token punctuation">,</span> Link<span class="token punctuation">,</span> Switch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-router-dom&#39;</span></span>
<span class="line"><span class="token keyword">import</span> Home <span class="token keyword">from</span> <span class="token string">&#39;./components/Home&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> UserList <span class="token keyword">from</span> <span class="token string">&#39;./components/UserList&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> UserAdd <span class="token keyword">from</span> <span class="token string">&#39;./components/UserAdd&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token operator">&lt;</span>Router  <span class="token operator">&gt;</span></span>
<span class="line">      <span class="token operator">&lt;</span>ul<span class="token operator">&gt;</span></span>
<span class="line">        <span class="token operator">&lt;</span>li<span class="token operator">&gt;</span><span class="token operator">&lt;</span>Link to<span class="token operator">=</span><span class="token string">&quot;/&quot;</span><span class="token operator">&gt;</span>首页<span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span></span>
<span class="line">        <span class="token operator">&lt;</span>li<span class="token operator">&gt;</span><span class="token operator">&lt;</span>Link to<span class="token operator">=</span><span class="token string">&quot;/list&quot;</span><span class="token operator">&gt;</span>用户列表<span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span></span>
<span class="line">        <span class="token operator">&lt;</span>li<span class="token operator">&gt;</span><span class="token operator">&lt;</span>Link to<span class="token operator">=</span><span class="token string">&quot;/add&quot;</span><span class="token operator">&gt;</span>添加用户<span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span></span>
<span class="line">      <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">&gt;</span></span>
<span class="line">      <span class="token operator">&lt;</span>Switch<span class="token operator">&gt;</span></span>
<span class="line">        <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">}</span> component<span class="token operator">=</span><span class="token punctuation">{</span>Home<span class="token punctuation">}</span> exact <span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line">        <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&#39;/list&#39;</span><span class="token punctuation">}</span> component<span class="token operator">=</span><span class="token punctuation">{</span>UserList<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line">        <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&#39;/add&#39;</span><span class="token punctuation">}</span> component<span class="token operator">=</span><span class="token punctuation">{</span>UserAdd<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line">      <span class="token operator">&lt;</span><span class="token operator">/</span>Switch<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">/</span>Router<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>App<span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-home-js" tabindex="-1"><a class="header-anchor" href="#_2-2-home-js"><span>2.2 Home.js</span></a></h3><p>src\\components\\Home.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">Home</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">        <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span></span>
<span class="line">            <span class="token operator">&lt;</span>button <span class="token operator">&gt;</span>重置UserAdd<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span></span>
<span class="line">            <span class="token operator">&lt;</span>button <span class="token operator">&gt;</span>重置UserList<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span></span>
<span class="line">        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> Home<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-useradd-js" tabindex="-1"><a class="header-anchor" href="#_2-3-useradd-js"><span>2.3 UserAdd.js</span></a></h3><p>src\\components\\UserAdd.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">UserAdd</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> <span class="token punctuation">[</span>number<span class="token punctuation">,</span>setNumber<span class="token punctuation">]</span><span class="token operator">=</span>React<span class="token punctuation">.</span><span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">        <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span></span>
<span class="line">            <span class="token literal-property property">用户名</span><span class="token operator">:</span><span class="token operator">&lt;</span>input<span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line">            <span class="token operator">&lt;</span>hr<span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line">            <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token function">setNumber</span><span class="token punctuation">(</span><span class="token parameter">number</span><span class="token operator">=&gt;</span>number<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">{</span>number<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span></span>
<span class="line">        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> UserAdd<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-userlist-js" tabindex="-1"><a class="header-anchor" href="#_2-4-userlist-js"><span>2.4 UserList.js</span></a></h3><p>src\\components\\UserList.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span>Link<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-router-dom&#39;</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">UserList</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> users <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">        <span class="token operator">&lt;</span>ul style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token literal-property property">height</span><span class="token operator">:</span><span class="token string">&#39;200px&#39;</span><span class="token punctuation">,</span><span class="token literal-property property">overflow</span><span class="token operator">:</span><span class="token string">&#39;scroll&#39;</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&gt;</span></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">                users<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span>index</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">(</span></span>
<span class="line">                    <span class="token operator">&lt;</span>li key<span class="token operator">=</span><span class="token punctuation">{</span>index<span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span>Link to<span class="token operator">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">/detail/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>index<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">{</span>index<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span></span>
<span class="line">                <span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> UserList<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-实现keep-alive" tabindex="-1"><a class="header-anchor" href="#_3-实现keep-alive"><span>3.实现keep-alive</span></a></h2><h3 id="_3-1-src-index-js" tabindex="-1"><a class="header-anchor" href="#_3-1-src-index-js"><span>3.1 src\\index.js</span></a></h3><p>src\\index.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React from &#39;react&#39;;</span>
<span class="line">import ReactDOM from &#39;react-dom&#39;;</span>
<span class="line">import { BrowserRouter as Router, Route, Link, Switch } from &#39;react-router-dom&#39;</span>
<span class="line">import Home from &#39;./components/Home&#39;;</span>
<span class="line">import UserList from &#39;./components/UserList&#39;;</span>
<span class="line">import UserAdd from &#39;./components/UserAdd&#39;;</span>
<span class="line">+import { KeepAliveProvider, withKeepAlive } from &#39;./keepalive-react-component&#39;;</span>
<span class="line">+let KeepAliveHome = withKeepAlive(Home, { cacheId: &#39;Home&#39;});</span>
<span class="line">+let KeepAliveUserList = withKeepAlive(UserList, { cacheId: &#39;UserList&#39;});</span>
<span class="line">+let KeepAliveUserAdd = withKeepAlive(UserAdd, { cacheId: &#39;UserAdd&#39; });</span>
<span class="line">const App = () =&gt; {</span>
<span class="line">  return (</span>
<span class="line">    &lt;Router  &gt;</span>
<span class="line">+     &lt;KeepAliveProvider&gt;</span>
<span class="line">        &lt;ul&gt;</span>
<span class="line">          &lt;li&gt;&lt;Link to=&quot;/&quot;&gt;首页&lt;/Link&gt;&lt;/li&gt;</span>
<span class="line">          &lt;li&gt;&lt;Link to=&quot;/list&quot;&gt;用户列表&lt;/Link&gt;&lt;/li&gt;</span>
<span class="line">          &lt;li&gt;&lt;Link to=&quot;/add&quot;&gt;添加用户&lt;/Link&gt;&lt;/li&gt;</span>
<span class="line">        &lt;/ul&gt;</span>
<span class="line">        &lt;Switch&gt;</span>
<span class="line">+          &lt;Route path={&#39;/&#39;} component={KeepAliveHome} exact /&gt;</span>
<span class="line">+          &lt;Route path={&#39;/list&#39;} component={KeepAliveUserList} /&gt;</span>
<span class="line">+          &lt;Route path={&#39;/add&#39;} component={KeepAliveUserAdd} /&gt;</span>
<span class="line">        &lt;/Switch&gt;</span>
<span class="line">+     &lt;/KeepAliveProvider&gt;</span>
<span class="line">    &lt;/Router&gt;</span>
<span class="line">  )</span>
<span class="line">}</span>
<span class="line">ReactDOM.render(&lt;App/&gt;, document.getElementById(&#39;root&#39;));</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-keepalive-react-component-index-js" tabindex="-1"><a class="header-anchor" href="#_3-2-keepalive-react-component-index-js"><span>3.2 keepalive-react-component\\index.js</span></a></h3><p>src\\keepalive-react-component\\index.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">export</span> <span class="token punctuation">{</span><span class="token keyword">default</span> <span class="token keyword">as</span> KeepAliveProvider<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./KeepAliveProvider&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token punctuation">{</span><span class="token keyword">default</span> <span class="token keyword">as</span> withKeepAlive<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./withKeepAlive&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-cache-types-js" tabindex="-1"><a class="header-anchor" href="#_3-3-cache-types-js"><span>3.3 cache-types.js</span></a></h3><p>src\\keepalive-react-component\\cache-types.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">CREATE</span> <span class="token operator">=</span> <span class="token string">&#39;CREATE&#39;</span><span class="token punctuation">;</span>        <span class="token comment">//创建</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">CREATED</span> <span class="token operator">=</span> <span class="token string">&#39;CREATED&#39;</span><span class="token punctuation">;</span>      <span class="token comment">//创建成功</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">ACTIVE</span> <span class="token operator">=</span> <span class="token string">&#39;ACTIVE&#39;</span><span class="token punctuation">;</span>        <span class="token comment">//激活</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-4-cachereducer-js" tabindex="-1"><a class="header-anchor" href="#_3-4-cachereducer-js"><span>3.4 cacheReducer.js</span></a></h3><p>src\\keepalive-react-component\\cacheReducer.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token operator">*</span>  <span class="token keyword">as</span> cacheTypes <span class="token keyword">from</span> <span class="token string">&#39;./cache-types&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">cacheReducer</span><span class="token punctuation">(</span><span class="token parameter">cacheStates <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> type<span class="token punctuation">,</span> payload <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">switch</span> <span class="token punctuation">(</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">case</span> cacheTypes<span class="token punctuation">.</span><span class="token constant">CREATE</span><span class="token operator">:</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token operator">...</span>cacheStates<span class="token punctuation">,</span></span>
<span class="line">                <span class="token punctuation">[</span>payload<span class="token punctuation">.</span>cacheId<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token literal-property property">cacheId</span><span class="token operator">:</span>payload<span class="token punctuation">.</span>cacheId<span class="token punctuation">,</span></span>
<span class="line">                    <span class="token literal-property property">element</span><span class="token operator">:</span>payload<span class="token punctuation">.</span>element<span class="token punctuation">,</span></span>
<span class="line">                    <span class="token literal-property property">status</span><span class="token operator">:</span>cacheTypes<span class="token punctuation">.</span><span class="token constant">CREATE</span></span>
<span class="line">                <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">case</span> cacheTypes<span class="token punctuation">.</span><span class="token constant">CREATED</span><span class="token operator">:</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token operator">...</span>cacheStates<span class="token punctuation">,</span></span>
<span class="line">                <span class="token punctuation">[</span>payload<span class="token punctuation">.</span>cacheId<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token operator">...</span>cacheStates<span class="token punctuation">[</span>payload<span class="token punctuation">.</span>cacheId<span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">                    <span class="token literal-property property">doms</span><span class="token operator">:</span>payload<span class="token punctuation">.</span>doms<span class="token punctuation">,</span></span>
<span class="line">                    <span class="token literal-property property">status</span><span class="token operator">:</span>cacheTypes<span class="token punctuation">.</span><span class="token constant">CREATED</span></span>
<span class="line">                <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>   </span>
<span class="line">        <span class="token keyword">case</span> cacheTypes<span class="token punctuation">.</span><span class="token constant">ACTIVE</span><span class="token operator">:</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token operator">...</span>cacheStates<span class="token punctuation">,</span></span>
<span class="line">                <span class="token punctuation">[</span>payload<span class="token punctuation">.</span>cacheId<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token operator">...</span>cacheStates<span class="token punctuation">[</span>payload<span class="token punctuation">.</span>cacheId<span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">                    <span class="token literal-property property">status</span><span class="token operator">:</span>cacheTypes<span class="token punctuation">.</span><span class="token constant">ACTIVE</span></span>
<span class="line">                <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>                </span>
<span class="line">        <span class="token keyword">default</span><span class="token operator">:</span></span>
<span class="line">            <span class="token keyword">return</span> cacheStates<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> cacheReducer<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-5-cachecontext-js" tabindex="-1"><a class="header-anchor" href="#_3-5-cachecontext-js"><span>3.5 CacheContext.js</span></a></h3><p>src\\keepalive-react-component\\CacheContext.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> CacheContext <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> CacheContext<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-6-keepaliveprovider-js" tabindex="-1"><a class="header-anchor" href="#_3-6-keepaliveprovider-js"><span>3.6 KeepAliveProvider.js</span></a></h3><p>src\\keepalive-react-component\\KeepAliveProvider.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useReducer<span class="token punctuation">,</span> useCallback <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> CacheContext <span class="token keyword">from</span> <span class="token string">&#39;./CacheContext&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> cacheReducer <span class="token keyword">from</span> <span class="token string">&#39;./cacheReducer&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> cacheTypes <span class="token keyword">from</span> <span class="token string">&#39;./cache-types&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">KeepAliveProvider</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> <span class="token punctuation">[</span>cacheStates<span class="token punctuation">,</span> dispatch<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useReducer</span><span class="token punctuation">(</span>cacheReducer<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">const</span> mount <span class="token operator">=</span> <span class="token function">useCallback</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> cacheId<span class="token punctuation">,</span> element <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>cacheStates<span class="token punctuation">[</span>cacheId<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> cacheTypes<span class="token punctuation">.</span><span class="token constant">CREATE</span><span class="token punctuation">,</span> <span class="token literal-property property">payload</span><span class="token operator">:</span> <span class="token punctuation">{</span> cacheId<span class="token punctuation">,</span> element <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>cacheStates<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">        <span class="token operator">&lt;</span>CacheContext<span class="token punctuation">.</span>Provider value<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> mount<span class="token punctuation">,</span> cacheStates<span class="token punctuation">,</span> dispatch <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&gt;</span></span>
<span class="line">            <span class="token punctuation">{</span>props<span class="token punctuation">.</span>children<span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">{</span>Object<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span>cacheStates<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> cacheId<span class="token punctuation">,</span> element <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span></span>
<span class="line">                <span class="token operator">&lt;</span>div</span>
<span class="line">                    id<span class="token operator">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">cache_</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>cacheId<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">}</span></span>
<span class="line">                    key<span class="token operator">=</span><span class="token punctuation">{</span>cacheId<span class="token punctuation">}</span></span>
<span class="line">                    ref<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">dom</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">                        <span class="token keyword">let</span> cacheState <span class="token operator">=</span> cacheStates<span class="token punctuation">[</span>cacheId<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">                        <span class="token keyword">if</span> <span class="token punctuation">(</span>dom <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span><span class="token operator">!</span>cacheState<span class="token punctuation">.</span>doms<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                            <span class="token keyword">let</span> doms <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>dom<span class="token punctuation">.</span>childNodes<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                            <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> cacheTypes<span class="token punctuation">.</span><span class="token constant">CREATED</span><span class="token punctuation">,</span> <span class="token literal-property property">payload</span><span class="token operator">:</span> <span class="token punctuation">{</span> cacheId<span class="token punctuation">,</span> doms <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                        <span class="token punctuation">}</span></span>
<span class="line">                    <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
<span class="line">                <span class="token operator">&gt;</span><span class="token punctuation">{</span>element<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line">            <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
<span class="line">        <span class="token operator">&lt;</span><span class="token operator">/</span>CacheContext<span class="token punctuation">.</span>Provider<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> KeepAliveProvider<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-7-withkeepalive-js" tabindex="-1"><a class="header-anchor" href="#_3-7-withkeepalive-js"><span>3.7 withKeepAlive.js</span></a></h3><p>src\\keepalive-react-component\\withKeepAlive.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useContext<span class="token punctuation">,</span> useRef<span class="token punctuation">,</span>useEffect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> CacheContext <span class="token keyword">from</span> <span class="token string">&#39;./CacheContext&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">withKeepAlive</span><span class="token punctuation">(</span><span class="token parameter">OldComponent<span class="token punctuation">,</span> <span class="token punctuation">{</span> cacheId <span class="token operator">=</span> window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>pathname <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">const</span> <span class="token punctuation">{</span>mount<span class="token punctuation">,</span> cacheStates<span class="token punctuation">,</span>dispatch <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useContext</span><span class="token punctuation">(</span>CacheContext<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">const</span> ref <span class="token operator">=</span> <span class="token function">useRef</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">let</span> cacheState <span class="token operator">=</span> cacheStates<span class="token punctuation">[</span>cacheId<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">if</span><span class="token punctuation">(</span>cacheState<span class="token operator">&amp;&amp;</span>cacheState<span class="token punctuation">.</span>doms<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                 <span class="token keyword">let</span> doms <span class="token operator">=</span> cacheState<span class="token punctuation">.</span>doms<span class="token punctuation">;</span></span>
<span class="line">                 doms<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">dom</span><span class="token operator">=&gt;</span>ref<span class="token punctuation">.</span>current<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>dom<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span></span>
<span class="line">                <span class="token function">mount</span><span class="token punctuation">(</span><span class="token punctuation">{</span> cacheId<span class="token punctuation">,</span> <span class="token literal-property property">element</span><span class="token operator">:</span> <span class="token operator">&lt;</span>OldComponent <span class="token punctuation">{</span><span class="token operator">...</span>props<span class="token punctuation">}</span> dispatch<span class="token operator">=</span><span class="token punctuation">{</span>dispatch<span class="token punctuation">}</span><span class="token operator">/</span><span class="token operator">&gt;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>cacheStates<span class="token punctuation">,</span> dispatch<span class="token punctuation">,</span> mount<span class="token punctuation">,</span> props<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">keepalive_</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>cacheId<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">}</span> ref<span class="token operator">=</span><span class="token punctuation">{</span>ref<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> withKeepAlive<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-保持滚动状态" tabindex="-1"><a class="header-anchor" href="#_4-保持滚动状态"><span>4.保持滚动状态</span></a></h2><h3 id="_4-1-src-index-js" tabindex="-1"><a class="header-anchor" href="#_4-1-src-index-js"><span>4.1 src\\index.js</span></a></h3><p>src\\index.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React from &#39;react&#39;;</span>
<span class="line">import ReactDOM from &#39;react-dom&#39;;</span>
<span class="line">import { BrowserRouter as Router, Route, Link, Switch } from &#39;react-router-dom&#39;</span>
<span class="line">import Home from &#39;./components/Home&#39;;</span>
<span class="line">import UserList from &#39;./components/UserList&#39;;</span>
<span class="line">import UserAdd from &#39;./components/UserAdd&#39;;</span>
<span class="line">import { KeepAliveProvider, withKeepAlive } from &#39;./keepalive-react-component&#39;;</span>
<span class="line">let KeepAliveHome = withKeepAlive(Home, { cacheId: &#39;Home&#39;});</span>
<span class="line">+let KeepAliveUserList = withKeepAlive(UserList, { cacheId: &#39;UserList&#39;,scroll:true});</span>
<span class="line">let KeepAliveUserAdd = withKeepAlive(UserAdd, { cacheId: &#39;UserAdd&#39; });</span>
<span class="line">const App = () =&gt; {</span>
<span class="line">  return (</span>
<span class="line">    &lt;Router  &gt;</span>
<span class="line">      &lt;KeepAliveProvider&gt;</span>
<span class="line">        &lt;ul&gt;</span>
<span class="line">          &lt;li&gt;&lt;Link to=&quot;/&quot;&gt;首页&lt;/Link&gt;&lt;/li&gt;</span>
<span class="line">          &lt;li&gt;&lt;Link to=&quot;/list&quot;&gt;用户列表&lt;/Link&gt;&lt;/li&gt;</span>
<span class="line">          &lt;li&gt;&lt;Link to=&quot;/add&quot;&gt;添加用户&lt;/Link&gt;&lt;/li&gt;</span>
<span class="line">        &lt;/ul&gt;</span>
<span class="line">        &lt;Switch&gt;</span>
<span class="line">          &lt;Route path={&#39;/&#39;} component={KeepAliveHome} exact /&gt;</span>
<span class="line">          &lt;Route path={&#39;/list&#39;} component={KeepAliveUserList} /&gt;</span>
<span class="line">          &lt;Route path={&#39;/add&#39;} component={KeepAliveUserAdd} /&gt;</span>
<span class="line">        &lt;/Switch&gt;</span>
<span class="line">      &lt;/KeepAliveProvider&gt;</span>
<span class="line">    &lt;/Router&gt;</span>
<span class="line">  )</span>
<span class="line">}</span>
<span class="line">ReactDOM.render(&lt;App/&gt;, document.getElementById(&#39;root&#39;));</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-cachereducer-js" tabindex="-1"><a class="header-anchor" href="#_4-2-cachereducer-js"><span>4.2 cacheReducer.js</span></a></h3><p>src\\keepalive-react-component\\cacheReducer.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import *  as cacheTypes from &#39;./cache-types&#39;;</span>
<span class="line">function cacheReducer(cacheStates = {}, { type, payload }) {</span>
<span class="line">    switch (type) {</span>
<span class="line">        case cacheTypes.CREATE:</span>
<span class="line">            return { ...cacheStates,</span>
<span class="line">                [payload.cacheId]: {</span>
<span class="line">+                   scrolls:{},</span>
<span class="line">                    cacheId:payload.cacheId,</span>
<span class="line">                    element:payload.element,</span>
<span class="line">                    status:cacheTypes.CREATE</span>
<span class="line">                } };</span>
<span class="line">        case cacheTypes.CREATED:</span>
<span class="line">            return { ...cacheStates,</span>
<span class="line">                [payload.cacheId]: {</span>
<span class="line">                    ...cacheStates[payload.cacheId],</span>
<span class="line">                    doms:payload.doms,</span>
<span class="line">                    status:cacheTypes.CREATED</span>
<span class="line">                } };   </span>
<span class="line">        case cacheTypes.ACTIVE:</span>
<span class="line">            return { ...cacheStates,</span>
<span class="line">                [payload.cacheId]: {</span>
<span class="line">                    ...cacheStates[payload.cacheId],</span>
<span class="line">                    status:cacheTypes.ACTIVE</span>
<span class="line">                } };                </span>
<span class="line">        default:</span>
<span class="line">            return cacheStates;</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line">export default cacheReducer;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-keepaliveprovider-js" tabindex="-1"><a class="header-anchor" href="#_4-3-keepaliveprovider-js"><span>4.3 KeepAliveProvider.js</span></a></h3><p>src\\keepalive-react-component\\KeepAliveProvider.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React, { useReducer, useCallback } from &quot;react&quot;;</span>
<span class="line">import CacheContext from &#39;./CacheContext&#39;;</span>
<span class="line">import cacheReducer from &#39;./cacheReducer&#39;;</span>
<span class="line">import * as cacheTypes from &#39;./cache-types&#39;;</span>
<span class="line">function KeepAliveProvider(props) {</span>
<span class="line">    let [cacheStates, dispatch] = useReducer(cacheReducer, {});</span>
<span class="line">    const mount = useCallback(({ cacheId, element }) =&gt; {</span>
<span class="line">        if(!cacheStates[cacheId]){</span>
<span class="line">            dispatch({ type: cacheTypes.CREATE, payload: { cacheId, element } });</span>
<span class="line">        }</span>
<span class="line">    }, [cacheStates]);</span>
<span class="line">+   let handleScroll = useCallback((cacheId, {target}) =&gt; {</span>
<span class="line">+       if(cacheStates[cacheId]){</span>
<span class="line">+           let scrolls = cacheStates[cacheId].scrolls;</span>
<span class="line">+           scrolls[target] = target.scrollTop;</span>
<span class="line">+       }</span>
<span class="line">+   }, [cacheStates]);</span>
<span class="line">    return (</span>
<span class="line">+       &lt;CacheContext.Provider value={{ mount, cacheStates, dispatch,handleScroll }}&gt;</span>
<span class="line">            {props.children}</span>
<span class="line">            {Object.values(cacheStates).map(({ cacheId, element }) =&gt; (</span>
<span class="line">                &lt;div</span>
<span class="line">                    id={\`cache_\${cacheId}\`}</span>
<span class="line">                    key={cacheId}</span>
<span class="line">                    ref={(dom) =&gt; {</span>
<span class="line">                        let cacheState = cacheStates[cacheId];</span>
<span class="line">                        if (dom &amp;&amp; (!cacheState.doms)) {</span>
<span class="line">                            let doms = Array.from(dom.childNodes);</span>
<span class="line">                            dispatch({ type: cacheTypes.CREATED, payload: { cacheId, doms } });</span>
<span class="line">                        }</span>
<span class="line">                    }}</span>
<span class="line">                &gt;{element}&lt;/div&gt;</span>
<span class="line">            ))}</span>
<span class="line">        &lt;/CacheContext.Provider&gt;</span>
<span class="line">    );</span>
<span class="line">}</span>
<span class="line">export default KeepAliveProvider;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-4-withkeepalive-js" tabindex="-1"><a class="header-anchor" href="#_4-4-withkeepalive-js"><span>4.4 withKeepAlive.js</span></a></h3><p>src\\keepalive-react-component\\withKeepAlive.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React, { useContext, useRef,useEffect } from &quot;react&quot;;</span>
<span class="line">import CacheContext from &#39;./CacheContext&#39;;</span>
<span class="line">+function withKeepAlive(OldComponent, { cacheId = window.location.pathname,scroll=false }) {</span>
<span class="line">    return function (props) {</span>
<span class="line">+       const {mount, cacheStates,dispatch,handleScroll } = useContext(CacheContext);</span>
<span class="line">        const ref = useRef(null);</span>
<span class="line">+       useEffect(()=&gt;{</span>
<span class="line">+           if(scroll){</span>
<span class="line">+               ref.current.addEventListener(&#39;scroll&#39;, handleScroll.bind(null, cacheId),true);</span>
<span class="line">+           }</span>
<span class="line">+       },[handleScroll]);</span>
<span class="line">        useEffect(() =&gt; {</span>
<span class="line">            let cacheState = cacheStates[cacheId];</span>
<span class="line">            if(cacheState&amp;&amp;cacheState.doms){</span>
<span class="line">                let doms = cacheState.doms;</span>
<span class="line">                doms.forEach(dom=&gt;ref.current.appendChild(dom));</span>
<span class="line">+               if(scroll){</span>
<span class="line">+                  doms.forEach(dom=&gt;{</span>
<span class="line">+                      if (cacheState.scrolls[dom])</span>
<span class="line">+                        dom.scrollTop = cacheState.scrolls[dom];</span>
<span class="line">+                  });</span>
<span class="line">+                 }</span>
<span class="line">            }else{</span>
<span class="line">                mount({ cacheId, element: &lt;OldComponent {...props} dispatch={dispatch}/&gt; })</span>
<span class="line">            }</span>
<span class="line">        }, [cacheStates, dispatch, mount, props]);</span>
<span class="line">        return &lt;div id={\`keepalive_\${cacheId}\`} ref={ref} /&gt;;</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line">export default withKeepAlive;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-销毁缓存" tabindex="-1"><a class="header-anchor" href="#_5-销毁缓存"><span>5.销毁缓存</span></a></h2><h3 id="_5-1-home-js" tabindex="-1"><a class="header-anchor" href="#_5-1-home-js"><span>5.1 Home.js</span></a></h3><p>src\\components\\Home.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React from &#39;react&#39;;</span>
<span class="line">const Home = (props) =&gt; {</span>
<span class="line">    return (</span>
<span class="line">        &lt;div&gt;</span>
<span class="line">+            &lt;button onClick={() =&gt; props.dispatch({ type: &#39;DESTROY&#39;, payload: { cacheId: &#39;UserAdd&#39; } })}&gt;重置UserAdd&lt;/button&gt;</span>
<span class="line">+            &lt;button onClick={() =&gt; props.dispatch({ type: &#39;DESTROY&#39;, payload: { cacheId: &#39;UserList&#39; } })}&gt;重置UserList&lt;/button&gt;</span>
<span class="line">        &lt;/div&gt;</span>
<span class="line">    )</span>
<span class="line">}</span>
<span class="line">export default Home;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-2-cache-types-js" tabindex="-1"><a class="header-anchor" href="#_5-2-cache-types-js"><span>5.2 cache-types.js</span></a></h3><p>src\\keepalive-react-component\\cache-types.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">export const CREATE = &#39;CREATE&#39;;        //创建</span>
<span class="line">export const CREATED = &#39;CREATED&#39;;      //创建成功</span>
<span class="line">export const ACTIVE = &#39;ACTIVE&#39;;        //激活</span>
<span class="line">+export const DESTROY = &#39;DESTROY&#39;;     //销毁</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-3-cachereducer-js" tabindex="-1"><a class="header-anchor" href="#_5-3-cachereducer-js"><span>5.3 cacheReducer.js</span></a></h3><p>src\\keepalive-react-component\\cacheReducer.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import *  as cacheTypes from &#39;./cache-types&#39;;</span>
<span class="line">function cacheReducer(cacheStates = {}, { type, payload }) {</span>
<span class="line">    switch (type) {</span>
<span class="line">        case cacheTypes.CREATE:</span>
<span class="line">            return { ...cacheStates,</span>
<span class="line">                [payload.cacheId]: {</span>
<span class="line">                    scrolls:{},</span>
<span class="line">                    cacheId:payload.cacheId,</span>
<span class="line">                    element:payload.element,</span>
<span class="line">                    status:cacheTypes.CREATE</span>
<span class="line">                } };</span>
<span class="line">        case cacheTypes.CREATED:</span>
<span class="line">            return { ...cacheStates,</span>
<span class="line">                [payload.cacheId]: {</span>
<span class="line">                    ...cacheStates[payload.cacheId],</span>
<span class="line">                    doms:payload.doms,</span>
<span class="line">                    status:cacheTypes.CREATED</span>
<span class="line">                } };   </span>
<span class="line">        case cacheTypes.ACTIVE:</span>
<span class="line">            return { ...cacheStates,</span>
<span class="line">                [payload.cacheId]: {</span>
<span class="line">                    ...cacheStates[payload.cacheId],</span>
<span class="line">                    status:cacheTypes.ACTIVE</span>
<span class="line">                } };           </span>
<span class="line">+       case cacheTypes.DESTROY:</span>
<span class="line">+           return { ...cacheStates,</span>
<span class="line">+               [payload.cacheId]:{</span>
<span class="line">+                   ...cacheStates[payload.cacheId],</span>
<span class="line">+                   status:cacheTypes.DESTROY</span>
<span class="line">+               }};              </span>
<span class="line">        default:</span>
<span class="line">            return cacheStates;</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line">export default cacheReducer;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-4-keepaliveprovider-js" tabindex="-1"><a class="header-anchor" href="#_5-4-keepaliveprovider-js"><span>5.4 KeepAliveProvider.js</span></a></h3><p>src\\keepalive-react-component\\KeepAliveProvider.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React, { useReducer, useCallback } from &quot;react&quot;;</span>
<span class="line">import CacheContext from &#39;./CacheContext&#39;;</span>
<span class="line">import cacheReducer from &#39;./cacheReducer&#39;;</span>
<span class="line">import * as cacheTypes from &#39;./cache-types&#39;;</span>
<span class="line">function KeepAliveProvider(props) {</span>
<span class="line">    let [cacheStates, dispatch] = useReducer(cacheReducer, {});</span>
<span class="line">    const mount = useCallback(({ cacheId, element }) =&gt; {</span>
<span class="line">+      if(cacheStates[cacheId]){</span>
<span class="line">+          let cacheState = cacheStates[cacheId];</span>
<span class="line">+          if(cacheState.status === cacheTypes.DESTROY){</span>
<span class="line">+              let doms = cacheState.doms;</span>
<span class="line">+              doms.forEach(dom=&gt;dom.parentNode.removeChild(dom));</span>
<span class="line">+              dispatch({ type: cacheTypes.CREATE, payload: { cacheId, element } });</span>
<span class="line">+          }</span>
<span class="line">+      }else{</span>
<span class="line">           dispatch({ type: cacheTypes.CREATE, payload: { cacheId, element } });</span>
<span class="line">+      }</span>
<span class="line">    }, [cacheStates]);</span>
<span class="line">    let handleScroll = useCallback((cacheId, {target}) =&gt; {</span>
<span class="line">        if(cacheStates[cacheId]){</span>
<span class="line">            let scrolls = cacheStates[cacheId].scrolls;</span>
<span class="line">            scrolls[target] = target.scrollTop;</span>
<span class="line">        }</span>
<span class="line">    }, [cacheStates]);</span>
<span class="line">    return (</span>
<span class="line">        &lt;CacheContext.Provider value={{ mount, cacheStates, dispatch,handleScroll }}&gt;</span>
<span class="line">            {props.children}</span>
<span class="line">+           {Object.values(cacheStates).filter(cacheState=&gt;cacheState.status!==cacheTypes.DESTROY).map(({ cacheId, element }) =&gt; (</span>
<span class="line">                &lt;div</span>
<span class="line">                    id={\`cache_\${cacheId}\`}</span>
<span class="line">                    key={cacheId}</span>
<span class="line">                    ref={(dom) =&gt; {</span>
<span class="line">                        let cacheState = cacheStates[cacheId];</span>
<span class="line">+                       if (dom &amp;&amp; (!cacheState.doms || cacheState.status === cacheTypes.DESTROY) ) {</span>
<span class="line">                            let doms = Array.from(dom.childNodes);</span>
<span class="line">                            dispatch({ type: cacheTypes.CREATED, payload: { cacheId, doms } });</span>
<span class="line">                        }</span>
<span class="line">                    }}</span>
<span class="line">                &gt;{element}&lt;/div&gt;</span>
<span class="line">            ))}</span>
<span class="line">        &lt;/CacheContext.Provider&gt;</span>
<span class="line">    );</span>
<span class="line">}</span>
<span class="line">export default KeepAliveProvider;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-5-withkeepalive-js" tabindex="-1"><a class="header-anchor" href="#_5-5-withkeepalive-js"><span>5.5 withKeepAlive.js</span></a></h3><p>src\\keepalive-react-component\\withKeepAlive.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React, { useContext, useRef,useEffect } from &quot;react&quot;;</span>
<span class="line">import CacheContext from &#39;./CacheContext&#39;;</span>
<span class="line">+import * as cacheTypes from &#39;./cache-types&#39;;</span>
<span class="line">function withKeepAlive(OldComponent, { cacheId = window.location.pathname,scroll=false }) {</span>
<span class="line">    return function (props) {</span>
<span class="line">        const {mount, cacheStates,dispatch,handleScroll } = useContext(CacheContext);</span>
<span class="line">        const ref = useRef(null);</span>
<span class="line">        useEffect(()=&gt;{</span>
<span class="line">            if(scroll){</span>
<span class="line">                ref.current.addEventListener(&#39;scroll&#39;, handleScroll.bind(null, cacheId),true);</span>
<span class="line">            }</span>
<span class="line">        },[handleScroll]);</span>
<span class="line">        useEffect(() =&gt; {</span>
<span class="line">            let cacheState = cacheStates[cacheId];</span>
<span class="line">+           if(cacheState&amp;&amp;cacheState.doms &amp;&amp; cacheState.status !== cacheTypes.DESTROY){</span>
<span class="line">                let doms = cacheState.doms;</span>
<span class="line">                doms.forEach(dom=&gt;ref.current.appendChild(dom));</span>
<span class="line">                if(scroll){</span>
<span class="line">                   doms.forEach(dom=&gt;{</span>
<span class="line">                       if (cacheState.scrolls[dom])</span>
<span class="line">                         dom.scrollTop = cacheState.scrolls[dom];</span>
<span class="line">                   });</span>
<span class="line">                  }</span>
<span class="line">            }else{</span>
<span class="line">                mount({ cacheId, element: &lt;OldComponent {...props} dispatch={dispatch}/&gt; })</span>
<span class="line">            }</span>
<span class="line">        }, [cacheStates, dispatch, mount, props]);</span>
<span class="line">        return &lt;div id={\`keepalive_\${cacheId}\`} ref={ref} /&gt;;</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line">export default withKeepAlive;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,66)])])}const o=n(t,[["render",l]]),r=JSON.parse('{"path":"/strong/132.keepalive.html","title":"","lang":"en-US","frontmatter":{},"git":{"updatedTime":1681290319000,"contributors":[{"name":"yutao","username":"yutao","email":"642231346@qq.com","commits":1,"url":"https://github.com/yutao"}],"changelog":[{"hash":"f5ab8c9d34991ec274f7f652439afe5b2afb6147","time":1681290319000,"email":"642231346@qq.com","author":"yutao","message":"modify"}]},"filePathRelative":"strong/132.keepalive.md"}');export{o as comp,r as data};
