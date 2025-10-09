import{_ as i,c,a as p,b as s,e as a,d as t,w as l,r as o,o as u}from"./app-CD1YpnS1.js";const r={},d={style:{"text-align":"left"}},k={style:{"text-align":"left"}};function v(m,n){const e=o("name");return u(),c("div",null,[n[7]||(n[7]=p(`<h2 id="内容大纲" tabindex="-1"><a class="header-anchor" href="#内容大纲"><span>内容大纲</span></a></h2><ul><li>路由基本原理</li><li>路由实战</li><li>实现history</li><li>path-to-regexp</li><li>路径参数</li><li>Link导航</li><li>支持嵌套路由和Outlet</li><li>实现NavLink</li><li>跳转和重定向</li><li>受保护路由</li><li>配置式路由和懒加载</li></ul><h2 id="_1-react路由原理" tabindex="-1"><a class="header-anchor" href="#_1-react路由原理"><span>1. React路由原理</span></a></h2><ul><li>不同的路径渲染不同的组件</li><li>有两种实现方式 <ul><li>HashRouter:利用hash实现路由切换</li><li>BrowserRouter:实现h5 Api实现路由的切换</li></ul></li></ul><h3 id="_1-1-hashrouter" tabindex="-1"><a class="header-anchor" href="#_1-1-hashrouter"><span>1.1 HashRouter</span></a></h3><ul><li>利用hash实现路由切换</li></ul><p>public\\index.html</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;!DOCTYPE html&gt;</span>
<span class="line">&lt;html lang=&quot;en&quot;&gt;</span>
<span class="line">&lt;head&gt;</span>
<span class="line">    &lt;meta charset=&quot;UTF-8&quot;&gt;</span>
<span class="line">    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;</span>
<span class="line">    &lt;title&gt;Document&lt;/title&gt;</span>
<span class="line">    &lt;style&gt;</span>
<span class="line">         </span>
<span class="line">            border:1px solid red;</span>
<span class="line">        }</span>
<span class="line">    &lt;/style&gt;</span>
<span class="line">&lt;/head&gt;</span>
<span class="line">&lt;body&gt;</span>
<span class="line">    &lt;div id=&quot;root&quot;&gt;&lt;/div&gt;</span>
<span class="line">    &lt;ul&gt;</span>
<span class="line">         &lt;li&gt;&lt;a href=&quot;</span>
<span class="line">         &lt;li&gt;&lt;a href=&quot;</span>
<span class="line">    &lt;/ul&gt;</span>
<span class="line">    &lt;script&gt;</span>
<span class="line">        window.addEventListener(&#39;hashchange&#39;,()=&gt;{</span>
<span class="line">            console.log(window.location.hash);</span>
<span class="line">             let pathname = window.location.hash.slice(1);//把最前面的那个</span>
<span class="line">            root.innerHTML = pathname;</span>
<span class="line">        });</span>
<span class="line"></span>
<span class="line">    &lt;/script&gt;</span>
<span class="line">&lt;/body&gt;</span>
<span class="line">&lt;/html&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-browserrouter" tabindex="-1"><a class="header-anchor" href="#_1-2-browserrouter"><span>1.2 BrowserRouter</span></a></h3><ul><li>利用h5 Api实现路由的切换</li></ul><h4 id="_1-2-1-history" tabindex="-1"><a class="header-anchor" href="#_1-2-1-history"><span>1.2.1 history</span></a></h4><ul><li>HTML5规范给我们提供了一个<a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Window/history" target="_blank" rel="noopener noreferrer">history</a>接口</li><li>HTML5 History API包括2个方法：<code>history.pushState()</code>和<code>history.replaceState()</code>，和1个事件<code>window.onpopstate</code></li></ul><h5 id="_1-2-1-1-pushstate" tabindex="-1"><a class="header-anchor" href="#_1-2-1-1-pushstate"><span>1.2.1.1 pushState</span></a></h5><ul><li>history.pushState(stateObject, title, url)，包括三个参数 <ul><li>第一个参数用于存储该url对应的状态对象，该对象可在onpopstate事件中获取，也可在history对象中获取</li><li>第二个参数是标题，目前浏览器并未实现</li><li>第三个参数则是设定的url</li></ul></li><li>pushState函数向浏览器的历史堆栈压入一个url为设定值的记录，并改变历史堆栈的当前指针至栈顶</li></ul><h5 id="_1-2-1-2-replacestate" tabindex="-1"><a class="header-anchor" href="#_1-2-1-2-replacestate"><span>1.2.1.2 replaceState</span></a></h5><ul><li>该接口与pushState参数相同，含义也相同</li><li>唯一的区别在于<code>replaceState</code>是替换浏览器历史堆栈的当前历史记录为设定的url</li><li>需要注意的是<code>replaceState</code>不会改动浏览器历史堆栈的当前指针</li></ul><h5 id="_1-2-1-3-onpopstate" tabindex="-1"><a class="header-anchor" href="#_1-2-1-3-onpopstate"><span>1.2.1.3 onpopstate</span></a></h5><ul><li>该事件是window的属性</li><li>该事件会在调用浏览器的前进、后退以及执行<code>history.forward</code>、<code>history.back</code>、和<code>history.go</code>触发，因为这些操作有一个共性，即修改了历史堆栈的当前指针</li><li>在不改变document的前提下，一旦当前指针改变则会触发<code>onpopstate</code>事件</li></ul><h5 id="_1-2-1-4-案例" tabindex="-1"><a class="header-anchor" href="#_1-2-1-4-案例"><span>1.2.1.4 案例</span></a></h5><ul><li>浏览器针对每个页面维护一个<code>History</code>栈,执行<code>pushState</code>函数可压入设定的<code>url</code>至栈顶,同时修改当前指针</li><li>当执行<code>back</code>和<code>forward</code>操作时，history栈大小并不会改变（history.length不变），仅仅移动当前指针的位置</li><li>若当前指针在history栈的中间位置(非栈顶)，此时执行pushState会在指针当前的位置添加此条目,并成为新的栈顶</li></ul><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token constant">DOCTYPE</span> html<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span>html lang<span class="token operator">=</span><span class="token string">&quot;en&quot;</span><span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line"><span class="token operator">&lt;</span>head<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span>meta charset<span class="token operator">=</span><span class="token string">&quot;UTF-8&quot;</span><span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span>meta http<span class="token operator">-</span>equiv<span class="token operator">=</span><span class="token string">&quot;X-UA-Compatible&quot;</span> content<span class="token operator">=</span><span class="token string">&quot;IE=edge&quot;</span><span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span>meta name<span class="token operator">=</span><span class="token string">&quot;viewport&quot;</span> content<span class="token operator">=</span><span class="token string">&quot;width=device-width, initial-scale=1.0&quot;</span><span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span>title<span class="token operator">&gt;</span>hash路由<span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line"><span class="token operator">&lt;</span>body<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">&quot;root&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span>ul<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span>li<span class="token operator">&gt;</span><span class="token operator">&lt;</span>a onclick<span class="token operator">=</span><span class="token string">&quot;go(&#39;/a&#39;)&quot;</span><span class="token operator">&gt;</span><span class="token operator">/</span>a<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span>li<span class="token operator">&gt;</span><span class="token operator">&lt;</span>a onclick<span class="token operator">=</span><span class="token string">&quot;go(&#39;/b&#39;)&quot;</span><span class="token operator">&gt;</span><span class="token operator">/</span>b<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span>li<span class="token operator">&gt;</span><span class="token operator">&lt;</span>a onclick<span class="token operator">=</span><span class="token string">&quot;go(&#39;/c&#39;)&quot;</span><span class="token operator">&gt;</span><span class="token operator">/</span>c<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span>li<span class="token operator">&gt;</span><span class="token operator">&lt;</span>a onclick<span class="token operator">=</span><span class="token string">&quot;forward()&quot;</span><span class="token operator">&gt;</span>前进<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span>li<span class="token operator">&gt;</span><span class="token operator">&lt;</span>a onclick<span class="token operator">=</span><span class="token string">&quot;back()&quot;</span><span class="token operator">&gt;</span>后退<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span>script<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      root<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>pathname<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token comment">//只有当你前进后退的时候会触发，pushState不会触发</span></span>
<span class="line">    window<span class="token punctuation">.</span>onpopstate <span class="token operator">=</span> render<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">let</span> historyObj <span class="token operator">=</span> window<span class="token punctuation">.</span>history<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">let</span> oldPushState <span class="token operator">=</span> historyObj<span class="token punctuation">.</span>pushState<span class="token punctuation">;</span></span>
<span class="line">    historyObj<span class="token punctuation">.</span><span class="token function-variable function">pushState</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> title<span class="token punctuation">,</span> url</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">oldPushState</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>history<span class="token punctuation">,</span> arguments<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">go</span><span class="token punctuation">(</span><span class="token parameter">path</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      historyObj<span class="token punctuation">.</span><span class="token function">pushState</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> path<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">forward</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      historyObj<span class="token punctuation">.</span><span class="token function">go</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token comment">//historyObj.forward();</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">back</span><span class="token punctuation">(</span><span class="token parameter">path</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      historyObj<span class="token punctuation">.</span><span class="token function">go</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token comment">//historyObj.back();</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-使用基本路由" tabindex="-1"><a class="header-anchor" href="#_2-使用基本路由"><span>2.使用基本路由</span></a></h2><ul><li><a href="https://create-react-app.dev" target="_blank" rel="noopener noreferrer">https://create-react-app.dev</a></li><li><a href="https://reactrouter.com/docs/en/v6" target="_blank" rel="noopener noreferrer">https://reactrouter.com/docs/en/v6</a></li><li><a href="https://github.com/remix-run/react-router" target="_blank" rel="noopener noreferrer">https://github.com/remix-run/react-router</a></li></ul><h3 id="_2-1-安装" tabindex="-1"><a class="header-anchor" href="#_2-1-安装"><span>2.1 安装</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">npm i react-router-dom --save</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_2-2-src-index-js" tabindex="-1"><a class="header-anchor" href="#_2-2-src-index-js"><span>2.2 src\\index.js</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> ReactDOM <span class="token keyword">from</span> <span class="token string">&#39;react-dom&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> HashRouter<span class="token punctuation">,</span> BrowserRouter<span class="token punctuation">,</span> Routes<span class="token punctuation">,</span> Route <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-router-dom&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> Home <span class="token keyword">from</span> <span class="token string">&#39;./components/Home&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> User <span class="token keyword">from</span> <span class="token string">&#39;./components/User&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> Profile <span class="token keyword">from</span> <span class="token string">&#39;./components/Profile&#39;</span><span class="token punctuation">;</span></span>
<span class="line">ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span></span>
<span class="line">  <span class="token operator">&lt;</span>HashRouter<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span>Routes<span class="token operator">&gt;</span></span>
<span class="line">      <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">&quot;/&quot;</span> element<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>Home <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line">      <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">&quot;/user&quot;</span> element<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>User <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line">      <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">&quot;/profile&quot;</span> element<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>Profile <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">/</span>Routes<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span><span class="token operator">/</span>HashRouter<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token punctuation">,</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-home-js" tabindex="-1"><a class="header-anchor" href="#_2-3-home-js"><span>2.3 Home.js</span></a></h3><p>src\\components\\Home.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">Home</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">        <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>Home<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> Home<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-user-js" tabindex="-1"><a class="header-anchor" href="#_2-4-user-js"><span>2.4 User.js</span></a></h3><p>src\\components\\User.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">        <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>User<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> User<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-5-profile-js" tabindex="-1"><a class="header-anchor" href="#_2-5-profile-js"><span>2.5 Profile.js</span></a></h3><p>src\\components\\Profile.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">Profile</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">        <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>Profile<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> Profile<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-实现基本路由" tabindex="-1"><a class="header-anchor" href="#_3-实现基本路由"><span>3.实现基本路由</span></a></h2><h3 id="_3-1-react-router-dom-index-js" tabindex="-1"><a class="header-anchor" href="#_3-1-react-router-dom-index-js"><span>3.1 react-router-dom\\index.js</span></a></h3><p>src\\react-router-dom\\index.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Router <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../react-router&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createHashHistory<span class="token punctuation">,</span> createBrowserHistory <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;history&quot;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token operator">*</span> <span class="token keyword">from</span> <span class="token string">&#39;../react-router&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">HashRouter</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> children <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> historyRef <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>historyRef<span class="token punctuation">.</span>current <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        historyRef<span class="token punctuation">.</span>current <span class="token operator">=</span> <span class="token function">createHashHistory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">let</span> history <span class="token operator">=</span> historyRef<span class="token punctuation">.</span>current<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">let</span> <span class="token punctuation">[</span>state<span class="token punctuation">,</span> setState<span class="token punctuation">]</span> <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">action</span><span class="token operator">:</span> history<span class="token punctuation">.</span>action<span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">location</span><span class="token operator">:</span> history<span class="token punctuation">.</span>location</span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    React<span class="token punctuation">.</span><span class="token function">useLayoutEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> history<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span>setState<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>history<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">        <span class="token operator">&lt;</span>Router</span>
<span class="line">            children<span class="token operator">=</span><span class="token punctuation">{</span>children<span class="token punctuation">}</span></span>
<span class="line">            location<span class="token operator">=</span><span class="token punctuation">{</span>state<span class="token punctuation">.</span>location<span class="token punctuation">}</span></span>
<span class="line">            navigationType<span class="token operator">=</span><span class="token punctuation">{</span>state<span class="token punctuation">.</span>action<span class="token punctuation">}</span></span>
<span class="line">            navigator<span class="token operator">=</span><span class="token punctuation">{</span>history<span class="token punctuation">}</span></span>
<span class="line">        <span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line">    <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">BrowserRouter</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> children <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> historyRef <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>historyRef<span class="token punctuation">.</span>current <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        historyRef<span class="token punctuation">.</span>current <span class="token operator">=</span> <span class="token function">createBrowserHistory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">let</span> history <span class="token operator">=</span> historyRef<span class="token punctuation">.</span>current<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">let</span> <span class="token punctuation">[</span>state<span class="token punctuation">,</span> setState<span class="token punctuation">]</span> <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">action</span><span class="token operator">:</span> history<span class="token punctuation">.</span>action<span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">location</span><span class="token operator">:</span> history<span class="token punctuation">.</span>location</span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    React<span class="token punctuation">.</span><span class="token function">useLayoutEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> history<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span>setState<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>history<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">        <span class="token operator">&lt;</span>Router</span>
<span class="line">            children<span class="token operator">=</span><span class="token punctuation">{</span>children<span class="token punctuation">}</span></span>
<span class="line">            location<span class="token operator">=</span><span class="token punctuation">{</span>state<span class="token punctuation">.</span>location<span class="token punctuation">}</span></span>
<span class="line">            navigationType<span class="token operator">=</span><span class="token punctuation">{</span>state<span class="token punctuation">.</span>action<span class="token punctuation">}</span></span>
<span class="line">            navigator<span class="token operator">=</span><span class="token punctuation">{</span>history<span class="token punctuation">}</span></span>
<span class="line">        <span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line">    <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-src-react-router-index-js" tabindex="-1"><a class="header-anchor" href="#_3-2-src-react-router-index-js"><span>3.2 src\\react-router\\index.js</span></a></h3><p>src\\react-router\\index.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//导航上下文</span></span>
<span class="line"><span class="token keyword">const</span> NavigationContext <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createContext</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//路径上下文</span></span>
<span class="line"><span class="token keyword">const</span> LocationContext <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createContext</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token punctuation">{</span></span>
<span class="line">    NavigationContext<span class="token punctuation">,</span></span>
<span class="line">    LocationContext</span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">Router</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> children<span class="token punctuation">,</span> location<span class="token punctuation">,</span> navigator <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> navigationContext <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useMemo</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> navigator <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>navigator<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">const</span> locationContext <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useMemo</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> location <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>location<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token operator">&lt;</span>NavigationContext<span class="token punctuation">.</span>Provider value<span class="token operator">=</span><span class="token punctuation">{</span>navigationContext<span class="token punctuation">}</span><span class="token operator">&gt;</span></span>
<span class="line">      <span class="token operator">&lt;</span>LocationContext<span class="token punctuation">.</span>Provider value<span class="token operator">=</span><span class="token punctuation">{</span>locationContext<span class="token punctuation">}</span> children<span class="token operator">=</span><span class="token punctuation">{</span>children<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">/</span>NavigationContext<span class="token punctuation">.</span>Provider<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">Routes</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> children <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token function">useRoutes</span><span class="token punctuation">(</span><span class="token function">createRoutesFromChildren</span><span class="token punctuation">(</span>children<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">useLocation</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> React<span class="token punctuation">.</span><span class="token function">useContext</span><span class="token punctuation">(</span>LocationContext<span class="token punctuation">)</span><span class="token punctuation">.</span>location<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">useSearchParams</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> location <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useContext</span><span class="token punctuation">(</span>LocationContext<span class="token punctuation">)</span><span class="token punctuation">.</span>location<span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">const</span> pathname <span class="token operator">=</span> location<span class="token punctuation">.</span>pathname<span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">URLSearchParams</span><span class="token punctuation">(</span>pathname<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;?&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">useRoutes</span><span class="token punctuation">(</span><span class="token parameter">routes</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> location <span class="token operator">=</span> <span class="token function">useLocation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//当前的路径对象</span></span>
<span class="line">    <span class="token keyword">let</span> pathname <span class="token operator">=</span> location<span class="token punctuation">.</span>pathname <span class="token operator">||</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">;</span><span class="token comment">//当前的路径</span></span>
<span class="line">    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> routes<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">let</span> <span class="token punctuation">{</span> path<span class="token punctuation">,</span> element <span class="token punctuation">}</span> <span class="token operator">=</span> routes<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">let</span> match <span class="token operator">=</span> <span class="token function">matchPath</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span> pathname<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>match<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">return</span> element<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">createRoutesFromChildren</span><span class="token punctuation">(</span><span class="token parameter">children</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">    React<span class="token punctuation">.</span>Children<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>children<span class="token punctuation">,</span> <span class="token parameter">element</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">let</span> route <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token literal-property property">path</span><span class="token operator">:</span> element<span class="token punctuation">.</span>props<span class="token punctuation">.</span>path<span class="token punctuation">,</span></span>
<span class="line">            <span class="token literal-property property">element</span><span class="token operator">:</span> element<span class="token punctuation">.</span>props<span class="token punctuation">.</span>element</span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">        routes<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>route<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> routes<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">Route</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">compilePath</span><span class="token punctuation">(</span><span class="token parameter">path</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> regexpSource <span class="token operator">=</span> <span class="token string">&quot;^&quot;</span> <span class="token operator">+</span> path<span class="token punctuation">;</span></span>
<span class="line">    regexpSource <span class="token operator">+=</span> <span class="token string">&quot;$&quot;</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">let</span> matcher <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span>regexpSource<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> matcher<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">matchPath</span><span class="token punctuation">(</span><span class="token parameter">path<span class="token punctuation">,</span> pathname</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> matcher <span class="token operator">=</span> <span class="token function">compilePath</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">let</span> match <span class="token operator">=</span> pathname<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>matcher<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>match<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> match<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-实现history" tabindex="-1"><a class="header-anchor" href="#_4-实现history"><span>4.实现history</span></a></h2><h3 id="_4-1-createbrowserhistory-js" tabindex="-1"><a class="header-anchor" href="#_4-1-createbrowserhistory-js"><span>4.1 createBrowserHistory.js</span></a></h3><p>src\\history\\createBrowserHistory.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">function</span> <span class="token function">createBrowserHistory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> globalHistory <span class="token operator">=</span> window<span class="token punctuation">.</span>history<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">let</span> listeners <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token comment">//存放所有的监听函数</span></span>
<span class="line">    <span class="token keyword">let</span> state<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">listen</span><span class="token punctuation">(</span><span class="token parameter">listener</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        listeners<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>listener<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">            listeners <span class="token operator">=</span> listeners<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token operator">=&gt;</span>item<span class="token operator">!=</span>listener<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">go</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        globalHistory<span class="token punctuation">.</span><span class="token function">go</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;popstate&#39;</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">let</span> location <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">state</span><span class="token operator">:</span>globalHistory<span class="token punctuation">.</span>state<span class="token punctuation">,</span><span class="token literal-property property">pathname</span><span class="token operator">:</span>window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>pathname<span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token comment">//当路径改变之后应该让history的监听函数执行，重新刷新组件</span></span>
<span class="line">        <span class="token function">notify</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">action</span><span class="token operator">:</span><span class="token string">&quot;POP&quot;</span><span class="token punctuation">,</span>location<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">goBack</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">go</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">goForward</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">go</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">notify</span><span class="token punctuation">(</span><span class="token parameter">newState</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">//把newState上的属性赋值到history对象上</span></span>
<span class="line">        Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>history<span class="token punctuation">,</span>newState<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        history<span class="token punctuation">.</span>length <span class="token operator">=</span> globalHistory<span class="token punctuation">.</span>length<span class="token punctuation">;</span><span class="token comment">//路由历史栈中历史条目的长度</span></span>
<span class="line">         listeners<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">listener</span> <span class="token operator">=&gt;</span> <span class="token function">listener</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">location</span><span class="token operator">:</span> history<span class="token punctuation">.</span>location <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">push</span><span class="token punctuation">(</span><span class="token parameter">pathname<span class="token punctuation">,</span>nextState</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">const</span> action <span class="token operator">=</span> <span class="token string">&#39;PUSH&#39;</span><span class="token punctuation">;</span><span class="token comment">//action表示是由于什么样的动作引起了路径的变更</span></span>
<span class="line">        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> pathname <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">            state <span class="token operator">=</span> pathname<span class="token punctuation">.</span>state<span class="token punctuation">;</span></span>
<span class="line">            pathname <span class="token operator">=</span> pathname<span class="token punctuation">.</span>pathname<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span></span>
<span class="line">            state<span class="token operator">=</span>nextState<span class="token punctuation">;</span> </span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        globalHistory<span class="token punctuation">.</span><span class="token function">pushState</span><span class="token punctuation">(</span>state<span class="token punctuation">,</span><span class="token keyword">null</span><span class="token punctuation">,</span>pathname<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//我们已经 跳转路径</span></span>
<span class="line">        <span class="token keyword">let</span> location <span class="token operator">=</span> <span class="token punctuation">{</span>state<span class="token punctuation">,</span>pathname<span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token function">notify</span><span class="token punctuation">(</span><span class="token punctuation">{</span>action<span class="token punctuation">,</span>location<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">const</span> history <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">action</span><span class="token operator">:</span><span class="token string">&#39;POP&#39;</span><span class="token punctuation">,</span></span>
<span class="line">        go<span class="token punctuation">,</span></span>
<span class="line">        goBack<span class="token punctuation">,</span></span>
<span class="line">        goForward<span class="token punctuation">,</span></span>
<span class="line">        push<span class="token punctuation">,</span></span>
<span class="line">        listen<span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">location</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">pathname</span><span class="token operator">:</span>window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>pathname<span class="token punctuation">,</span><span class="token literal-property property">state</span><span class="token operator">:</span>window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>state<span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">return</span> history<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> createBrowserHistory<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-createhashhistory-js" tabindex="-1"><a class="header-anchor" href="#_4-2-createhashhistory-js"><span>4.2 createHashHistory.js</span></a></h3><p>src\\history\\createHashHistory.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * hash不能使用 浏览器的history对象了</span>
<span class="line"> * <span class="token keyword">@returns</span> </span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">createHashHistory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token comment">//类似于历史栈 里面存放都是路径</span></span>
<span class="line">    <span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span><span class="token comment">//栈的指针，默认是-1</span></span>
<span class="line">    <span class="token keyword">let</span> action <span class="token operator">=</span> <span class="token string">&#39;POP&#39;</span><span class="token punctuation">;</span><span class="token comment">//动作</span></span>
<span class="line">    <span class="token keyword">let</span> state <span class="token punctuation">;</span><span class="token comment">//最新的状态 </span></span>
<span class="line">    <span class="token keyword">let</span> listeners <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token comment">//监听函数的数组</span></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">listen</span><span class="token punctuation">(</span><span class="token parameter">listener</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        listeners<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>listener<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">            listeners <span class="token operator">=</span> listeners<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token operator">=&gt;</span>item<span class="token operator">!=</span>listener<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">go</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        action <span class="token operator">=</span> <span class="token string">&#39;POP&#39;</span><span class="token punctuation">;</span></span>
<span class="line">        index<span class="token operator">+=</span>n<span class="token punctuation">;</span><span class="token comment">//更改栈顶的指针</span></span>
<span class="line">        <span class="token keyword">let</span> nextLocation <span class="token operator">=</span> stack<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token comment">//取出指定索引对应的路径对象</span></span>
<span class="line">        state<span class="token operator">=</span> nextLocation<span class="token punctuation">.</span>state<span class="token punctuation">;</span><span class="token comment">//取出此location对应的状态 </span></span>
<span class="line">        window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>hash <span class="token operator">=</span> nextLocation<span class="token punctuation">.</span>pathname<span class="token punctuation">;</span><span class="token comment">//修改hash值 ，从而修改当前的路径</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">let</span> <span class="token function-variable function">hashChangeHandler</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">         <span class="token keyword">let</span> pathname <span class="token operator">=</span> window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>hash<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//取出最新的hash值对应的路径  </span></span>
<span class="line">        Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>history<span class="token punctuation">,</span><span class="token punctuation">{</span>action<span class="token punctuation">,</span><span class="token literal-property property">location</span><span class="token operator">:</span><span class="token punctuation">{</span>pathname<span class="token punctuation">,</span>state<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">if</span><span class="token punctuation">(</span>action <span class="token operator">===</span> <span class="token string">&#39;PUSH&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//说明是调用push方法，需要往历史栈中添加新的条目 </span></span>
<span class="line">            stack<span class="token punctuation">[</span><span class="token operator">++</span>index<span class="token punctuation">]</span><span class="token operator">=</span>history<span class="token punctuation">.</span>location<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">         listeners<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">listener</span> <span class="token operator">=&gt;</span> <span class="token function">listener</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">location</span><span class="token operator">:</span> history<span class="token punctuation">.</span>location <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">push</span><span class="token punctuation">(</span><span class="token parameter">pathname<span class="token punctuation">,</span>nextState</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        action <span class="token operator">=</span> <span class="token string">&#39;PUSH&#39;</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> pathname <span class="token operator">===</span><span class="token string">&#39;object&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">            state <span class="token operator">=</span> pathname<span class="token punctuation">.</span>state<span class="token punctuation">;</span></span>
<span class="line">            pathname <span class="token operator">=</span> pathname<span class="token punctuation">.</span>pathname</span>
<span class="line">        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span></span>
<span class="line">            state <span class="token operator">=</span> nextState<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>hash <span class="token operator">=</span> pathname<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token comment">//当hash发生变化的话，会执行回调</span></span>
<span class="line">    window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;hashchange&#39;</span><span class="token punctuation">,</span>hashChangeHandler<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">goBack</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">go</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">goForward</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">go</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">const</span> history <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">action</span><span class="token operator">:</span><span class="token string">&#39;POP&#39;</span><span class="token punctuation">,</span></span>
<span class="line">        go<span class="token punctuation">,</span></span>
<span class="line">        goBack<span class="token punctuation">,</span></span>
<span class="line">        goForward<span class="token punctuation">,</span></span>
<span class="line">        push<span class="token punctuation">,</span></span>
<span class="line">        listen<span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">location</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">location</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">pathname</span><span class="token operator">:</span>window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>hash <span class="token operator">?</span> window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>hash<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span><span class="token literal-property property">state</span><span class="token operator">:</span><span class="token keyword">undefined</span><span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">if</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>hash<span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//如果初始的情况下，如果hash是有值的</span></span>
<span class="line">        action <span class="token operator">=</span> <span class="token string">&#39;PUSH&#39;</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token function">hashChangeHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span></span>
<span class="line">        window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>hash <span class="token operator">=</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">return</span> history<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> createHashHistory<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-history-index-js" tabindex="-1"><a class="header-anchor" href="#_4-3-history-index-js"><span>4.3 history\\index.js</span></a></h3><p>src\\history\\index.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">export</span> <span class="token punctuation">{</span><span class="token keyword">default</span> <span class="token keyword">as</span> createBrowserHistory<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./createBrowserHistory&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token punctuation">{</span><span class="token keyword">default</span> <span class="token keyword">as</span> createHashHistory<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./createHashHistory&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-4-react-router-dom-index-js" tabindex="-1"><a class="header-anchor" href="#_4-4-react-router-dom-index-js"><span>4.4 react-router-dom\\index.js</span></a></h3><p>src\\react-router-dom\\index.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React from &#39;react&#39;</span>
<span class="line">import { Router } from &#39;../react-router&#39;;</span>
<span class="line">+import { createHashHistory, createBrowserHistory } from &quot;../history&quot;;</span>
<span class="line">export * from &#39;../react-router&#39;;</span>
<span class="line"></span>
<span class="line">export function HashRouter({ children }) {</span>
<span class="line">    let historyRef = React.useRef();</span>
<span class="line">    if (historyRef.current == null) {</span>
<span class="line">        historyRef.current = createHashHistory();</span>
<span class="line">    }</span>
<span class="line">    let history = historyRef.current;</span>
<span class="line">    let [state, setState] = React.useState({</span>
<span class="line">        action: history.action,</span>
<span class="line">        location: history.location</span>
<span class="line">    });</span>
<span class="line">    React.useLayoutEffect(() =&gt; history.listen(setState), [history]);</span>
<span class="line">    return (</span>
<span class="line">        &lt;Router</span>
<span class="line">            children={children}</span>
<span class="line">            location={state.location}</span>
<span class="line">            navigationType={state.action}</span>
<span class="line">            navigator={history}</span>
<span class="line">        /&gt;</span>
<span class="line">    );</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">export function BrowserRouter({ children }) {</span>
<span class="line">    let historyRef = React.useRef();</span>
<span class="line">    if (historyRef.current == null) {</span>
<span class="line">        historyRef.current = createBrowserHistory();</span>
<span class="line">    }</span>
<span class="line">    let history = historyRef.current;</span>
<span class="line">    let [state, setState] = React.useState({</span>
<span class="line">        action: history.action,</span>
<span class="line">        location: history.location</span>
<span class="line">    });</span>
<span class="line">    React.useLayoutEffect(() =&gt; history.listen(setState), [history]);</span>
<span class="line">    return (</span>
<span class="line">        &lt;Router</span>
<span class="line">            children={children}</span>
<span class="line">            location={state.location}</span>
<span class="line">            navigationType={state.action}</span>
<span class="line">            navigator={history}</span>
<span class="line">        /&gt;</span>
<span class="line">    );</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-path-to-regexp" tabindex="-1"><a class="header-anchor" href="#_5-path-to-regexp"><span>5. path-to-regexp</span></a></h2><ul><li><p><a href="https://jex.im/regulex" target="_blank" rel="noopener noreferrer">regulex</a></p></li><li><p><a href="https://www.npmjs.com/package/path-to-regexp" target="_blank" rel="noopener noreferrer">path-to-regexp</a></p><ul><li>sensitive 是否大小写敏感 (默认值: false)</li><li>strict 是否允许结尾有一个可选的/ (默认值: false)</li><li>end 是否匹配整个字符串 (默认值: true)</li></ul></li></ul><h3 id="_5-1-home结束" tabindex="-1"><a class="header-anchor" href="#_5-1-home结束"><span>5.1 /home结束</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">let</span> pathToRegExp <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path-to-regexp&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> regxp <span class="token operator">=</span> <span class="token function">pathToRegExp</span><span class="token punctuation">(</span><span class="token string">&#39;/home&#39;</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">end</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>regxp<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//   /^\\/home\\/?$/i</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>regxp<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;/home&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>regxp<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;/home/2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="http://img.zhufengpeixun.cn/homereg.png" alt="homereg"></p><h3 id="_5-2-home非结束" tabindex="-1"><a class="header-anchor" href="#_5-2-home非结束"><span>5.2 /home非结束</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">let</span> pathToRegExp <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path-to-regexp&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> regExp <span class="token operator">=</span> <span class="token function">pathToRegExp</span><span class="token punctuation">(</span><span class="token string">&#39;/home&#39;</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">end</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>regExp<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//   /^\\/home\\/?(?=\\/|$)/i</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>regExp<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;/home&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>regExp<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;/home/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>regExp<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;/home//&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>regExp<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;/home/2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="http://img.zhufengpeixun.cn/homereg2.png" alt="homereg2"></p><h3 id="_5-3-路径参数" tabindex="-1"><a class="header-anchor" href="#_5-3-路径参数"><span>5.3 路径参数</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">let</span> params <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> regExp <span class="token operator">=</span> <span class="token function">pathToRegExp</span><span class="token punctuation">(</span><span class="token string">&#39;/user/:id&#39;</span><span class="token punctuation">,</span>params<span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">end</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>regExp<span class="token punctuation">,</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line">/^\\/user\\/(?:([^\\/]+?))\\/?$/i</span>
<span class="line">[ <span class="token punctuation">{</span> name: &#39;id&#39;, optional: false, offset: 7 <span class="token punctuation">}</span> ]</span>
<span class="line">**/</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="http://img.zhufengpeixun.cn/uerreg.png" alt="uerreg"></p><h3 id="_5-4-正则匹配" tabindex="-1"><a class="header-anchor" href="#_5-4-正则匹配"><span>5.4 正则匹配</span></a></h3><ul><li>是否捕获</li></ul>`,69)),s("table",null,[n[6]||(n[6]=s("thead",null,[s("tr",null,[s("th",{style:{"text-align":"left"}},"表达式"),s("th",{style:{"text-align":"left"}},"含义")])],-1)),s("tbody",null,[n[4]||(n[4]=s("tr",null,[s("td",{style:{"text-align":"left"}},"()"),s("td",{style:{"text-align":"left"}},"表示捕获分组，()会把每个分组里的匹配的值保存起来，使用$n(n是一个数字，表示第n个捕获组的内容)")],-1)),n[5]||(n[5]=s("tr",null,[s("td",{style:{"text-align":"left"}},"(?😃"),s("td",{style:{"text-align":"left"}},"表示非捕获分组，和捕获分组唯一的区别在于，非捕获分组匹配的值不会保存起来")],-1)),s("tr",null,[s("td",d,[n[1]||(n[1]=a("(?",-1)),t(e,null,{default:l(()=>[...n[0]||(n[0]=[a("...)",-1)])]),_:1})]),s("td",k,[n[3]||(n[3]=a("表示命名捕获分组,反向引用一个命名分组的语法是 \\k",-1)),t(e,null,{default:l(()=>[...n[2]||(n[2]=[a(",在 replace() 方法的替换字符串中反向引用是用 $",-1)])]),_:1})])])])]),n[8]||(n[8]=p(`<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token comment">//分组获取</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;1ab&#39;</span><span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">1[a-z]([b-c])</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//分组不捕获</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;1ab&#39;</span><span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">1[a-z](?:[a-z])</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//?&lt;x&gt; 表示命名捕获分组</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;11-22&#39;</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(?&lt;x&gt;\\d{2})-(?&lt;y&gt;\\d{2})</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span><span class="token string">&quot;$&lt;y&gt;-$&lt;x&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>前瞻和后顾</li></ul><table><thead><tr><th style="text-align:left;">表达式</th><th style="text-align:left;">含义</th></tr></thead><tbody><tr><td style="text-align:left;">(?=pattern)</td><td style="text-align:left;">正向肯定查找(前瞻),后面必须跟着什么</td></tr><tr><td style="text-align:left;">(?!pattern)</td><td style="text-align:left;">正向否定查找(前瞻)，后面不能跟着什么</td></tr><tr><td style="text-align:left;">(?&lt;=pattern)</td><td style="text-align:left;">反向肯定条件查找(后顾),不捕获</td></tr><tr><td style="text-align:left;">(?&lt;!pattern)</td><td style="text-align:left;">反向否定条件查找（后顾）</td></tr></tbody></table><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token comment">//会消耗掉字符的</span></span>
<span class="line"><span class="token comment">//console.log(&#39;1a&#39;.match(/\\d[a-z][a-z]/));</span></span>
<span class="line"><span class="token comment">//?= 正向肯定查找 不消费字符 正向前瞻</span></span>
<span class="line"><span class="token comment">//console.log(&#39;1a&#39;.match(/\\d(?=[a-z])[a-z]/));</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//正向肯定前瞻</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;1a&#39;</span><span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\d(?=[a-z])[a-z]</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//正向否定前瞻</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;1a&#39;</span><span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\d(?![A-Z])[a-z]</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//反向肯定前瞻</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;1a&#39;</span><span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(?&lt;=[a-z])\\d[a-z]</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//反向否定前瞻</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;1a&#39;</span><span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(?&lt;![A-Z])\\d[a-z]</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> array <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;1ab&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">array<span class="token punctuation">.</span>index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">array<span class="token punctuation">.</span>input <span class="token operator">=</span> <span class="token string">&#39;1ab&#39;</span><span class="token punctuation">;</span></span>
<span class="line">array<span class="token punctuation">.</span>groups <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>array<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-路径参数" tabindex="-1"><a class="header-anchor" href="#_6-路径参数"><span>6. 路径参数</span></a></h2><h3 id="_6-1-src-index-js" tabindex="-1"><a class="header-anchor" href="#_6-1-src-index-js"><span>6.1 src\\index.js</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React from &#39;react&#39;;</span>
<span class="line">import ReactDOM from &#39;react-dom&#39;;</span>
<span class="line">import { HashRouter, BrowserRouter, Routes, Route } from &#39;./react-router-dom&#39;;</span>
<span class="line">import Home from &#39;./components/Home&#39;;</span>
<span class="line">import User from &#39;./components/User&#39;;</span>
<span class="line">import Profile from &#39;./components/Profile&#39;;</span>
<span class="line">import Post from &#39;./components/Post&#39;;</span>
<span class="line">ReactDOM.render(</span>
<span class="line">  &lt;BrowserRouter&gt;</span>
<span class="line">    &lt;Routes&gt;</span>
<span class="line">      &lt;Route path=&quot;/&quot; element={&lt;Home /&gt;} /&gt;</span>
<span class="line">      &lt;Route path=&quot;/user&quot; element={&lt;User /&gt;} /&gt;</span>
<span class="line">      &lt;Route path=&quot;/profile&quot; element={&lt;Profile /&gt;} /&gt;</span>
<span class="line">+     &lt;Route path=&quot;/post/:id&quot; element={&lt;Post /&gt;} /&gt;</span>
<span class="line">    &lt;/Routes&gt;</span>
<span class="line">  &lt;/BrowserRouter&gt;</span>
<span class="line">  , document.getElementById(&#39;root&#39;));</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-2-src-react-router-index-js" tabindex="-1"><a class="header-anchor" href="#_6-2-src-react-router-index-js"><span>6.2 src\\react-router\\index.js</span></a></h3><p>src\\react-router\\index.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React from &#39;react&#39;;</span>
<span class="line">//导航上下文</span>
<span class="line">const NavigationContext = React.createContext({});</span>
<span class="line">//路径上下文</span>
<span class="line">const LocationContext = React.createContext({});</span>
<span class="line"></span>
<span class="line">export {</span>
<span class="line">    NavigationContext,</span>
<span class="line">    LocationContext,</span>
<span class="line">};</span>
<span class="line">export function Router({ children, location, navigator }) {</span>
<span class="line">    let navigationContext = React.useMemo(</span>
<span class="line">        () =&gt; ({ navigator }),</span>
<span class="line">        [navigator]</span>
<span class="line">    );</span>
<span class="line">    return (</span>
<span class="line">        &lt;NavigationContext.Provider value={navigationContext}&gt;</span>
<span class="line">            &lt;LocationContext.Provider</span>
<span class="line">                children={children}</span>
<span class="line">                value={{ location }}</span>
<span class="line">            /&gt;</span>
<span class="line">        &lt;/NavigationContext.Provider&gt;</span>
<span class="line">    );</span>
<span class="line">}</span>
<span class="line">export function Routes({ children }) {</span>
<span class="line">    return useRoutes(createRoutesFromChildren(children));</span>
<span class="line">}</span>
<span class="line">export function useLocation() {</span>
<span class="line">    return React.useContext(LocationContext).location;</span>
<span class="line">}</span>
<span class="line">export function useRoutes(routes) {</span>
<span class="line">    let location = useLocation();//当前的路径对象</span>
<span class="line">    let pathname = location.pathname || &quot;/&quot;;//当前的路径</span>
<span class="line">    for (let i = 0; i &lt; routes.length; i++) {</span>
<span class="line">        let { path, element } = routes[i];</span>
<span class="line">        let match = matchPath(path, pathname);</span>
<span class="line">        return match;</span>
<span class="line">    }</span>
<span class="line">    return null;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">export function createRoutesFromChildren(children) {</span>
<span class="line">    let routes = [];</span>
<span class="line">    React.Children.forEach(children, element =&gt; {</span>
<span class="line">        let route = {</span>
<span class="line">            path: element.props.path,</span>
<span class="line">            element: element.props.element</span>
<span class="line">        };</span>
<span class="line">        routes.push(route);</span>
<span class="line">    });</span>
<span class="line">    return routes;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">export function Route(props) {</span>
<span class="line"></span>
<span class="line">}</span>
<span class="line">function compilePath(path) {</span>
<span class="line">+   let paramNames = [];</span>
<span class="line">+   let regexpSource = &quot;^&quot; + path</span>
<span class="line">+       .replace(/:(\\w+)/g, (_, key) =&gt; {</span>
<span class="line">+           paramNames.push(key);</span>
<span class="line">+           return &quot;([^\\\\/]+)&quot;;</span>
<span class="line">+       });</span>
<span class="line">+    regexpSource += &quot;$&quot;;</span>
<span class="line">    let matcher = new RegExp(regexpSource);</span>
<span class="line">+   return [matcher, paramNames];</span>
<span class="line">}</span>
<span class="line">export function matchPath(path, pathname) {</span>
<span class="line">+   let [matcher, paramNames] = compilePath(path);</span>
<span class="line">    let match = pathname.match(matcher);</span>
<span class="line">    if (!match) return null;</span>
<span class="line">+   let matchedPathname = match[0];</span>
<span class="line">+   let values = match.slice(1);</span>
<span class="line">+   let params = paramNames.reduce(</span>
<span class="line">+       (memo, paramName, index) =&gt; {</span>
<span class="line">+           memo[paramName] = values[index];</span>
<span class="line">+           return memo;</span>
<span class="line">+       },</span>
<span class="line">+       {}</span>
<span class="line">+   );</span>
<span class="line">+   return { params, pathname: matchedPathname, path };</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-3-post-js" tabindex="-1"><a class="header-anchor" href="#_6-3-post-js"><span>6.3 Post.js</span></a></h3><p>src\\components\\Post.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">Post</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">        <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>Post<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> Post<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-link导航" tabindex="-1"><a class="header-anchor" href="#_7-link导航"><span>7. Link导航</span></a></h2><h3 id="_7-1-src-index-js" tabindex="-1"><a class="header-anchor" href="#_7-1-src-index-js"><span>7.1 src\\index.js</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React from &#39;react&#39;;</span>
<span class="line">import ReactDOM from &#39;react-dom&#39;;</span>
<span class="line">+import { HashRouter, BrowserRouter, Routes, Route, Link } from &#39;./react-router-dom&#39;;</span>
<span class="line">import Home from &#39;./components/Home&#39;;</span>
<span class="line">import User from &#39;./components/User&#39;;</span>
<span class="line">import Profile from &#39;./components/Profile&#39;;</span>
<span class="line">import Post from &#39;./components/Post&#39;;</span>
<span class="line">ReactDOM.render(</span>
<span class="line">  &lt;BrowserRouter&gt;</span>
<span class="line">+   &lt;ul&gt;</span>
<span class="line">+     &lt;li&gt;&lt;Link to=&quot;/&quot;&gt;首页&lt;/Link&gt;&lt;/li&gt;</span>
<span class="line">+     &lt;li&gt;&lt;Link to=&quot;/user&quot; &gt;用户管理&lt;/Link&gt;&lt;/li&gt;</span>
<span class="line">+     &lt;li&gt;&lt;Link to=&quot;/profile&quot; &gt;个人中心&lt;/Link&gt;&lt;/li&gt;</span>
<span class="line">+   &lt;/ul&gt;</span>
<span class="line">    &lt;Routes&gt;</span>
<span class="line">      &lt;Route path=&quot;/&quot; element={&lt;Home /&gt;} /&gt;</span>
<span class="line">      &lt;Route path=&quot;/user&quot; element={&lt;User /&gt;} /&gt;</span>
<span class="line">      &lt;Route path=&quot;/profile&quot; element={&lt;Profile /&gt;} /&gt;</span>
<span class="line">      &lt;Route path=&quot;/post/:id&quot; element={&lt;Post /&gt;} /&gt;</span>
<span class="line">    &lt;/Routes&gt;</span>
<span class="line">  &lt;/BrowserRouter&gt;</span>
<span class="line">  , document.getElementById(&#39;root&#39;));</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-2-react-router-dom-index-js" tabindex="-1"><a class="header-anchor" href="#_7-2-react-router-dom-index-js"><span>7.2 react-router-dom\\index.js</span></a></h3><p>src\\react-router-dom\\index.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React from &#39;react&#39;</span>
<span class="line">+import { Router, useNavigate } from &#39;../react-router&#39;;</span>
<span class="line">import { createHashHistory, createBrowserHistory } from &quot;../history&quot;;</span>
<span class="line">export * from &#39;../react-router&#39;;</span>
<span class="line"></span>
<span class="line">export function HashRouter({ children }) {</span>
<span class="line">    let historyRef = React.useRef();</span>
<span class="line">    if (historyRef.current == null) {</span>
<span class="line">        historyRef.current = createHashHistory();</span>
<span class="line">    }</span>
<span class="line">    let history = historyRef.current;</span>
<span class="line">    let [state, setState] = React.useState({</span>
<span class="line">        action: history.action,</span>
<span class="line">        location: history.location</span>
<span class="line">    });</span>
<span class="line">    React.useLayoutEffect(() =&gt; history.listen(setState), [history]);</span>
<span class="line">    return (</span>
<span class="line">        &lt;Router</span>
<span class="line">            children={children}</span>
<span class="line">            location={state.location}</span>
<span class="line">            navigationType={state.action}</span>
<span class="line">            navigator={history}</span>
<span class="line">        /&gt;</span>
<span class="line">    );</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">export function BrowserRouter({ children }) {</span>
<span class="line">    let historyRef = React.useRef();</span>
<span class="line">    if (historyRef.current == null) {</span>
<span class="line">        historyRef.current = createBrowserHistory();</span>
<span class="line">    }</span>
<span class="line">    let history = historyRef.current;</span>
<span class="line">    let [state, setState] = React.useState({</span>
<span class="line">        action: history.action,</span>
<span class="line">        location: history.location</span>
<span class="line">    });</span>
<span class="line">    React.useLayoutEffect(() =&gt; history.listen(setState), [history]);</span>
<span class="line">    return (</span>
<span class="line">        &lt;Router</span>
<span class="line">            children={children}</span>
<span class="line">            location={state.location}</span>
<span class="line">            navigationType={state.action}</span>
<span class="line">            navigator={history}</span>
<span class="line">        /&gt;</span>
<span class="line">    );</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">+export function Link({ to, children }) {</span>
<span class="line">+  const navigate = useNavigate();//是一个跳转路径的方法</span>
<span class="line">+  return (</span>
<span class="line">+    &lt;a href={to} onClick={(event) =&gt; {</span>
<span class="line">+      event.preventDefault();</span>
<span class="line">+      navigate(to);</span>
<span class="line">+    }} &gt;{children}&lt;/a&gt;</span>
<span class="line">+  )</span>
<span class="line">+}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-3-react-router-index-js" tabindex="-1"><a class="header-anchor" href="#_7-3-react-router-index-js"><span>7.3 react-router\\index.js</span></a></h3><p>src\\react-router\\index.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React from &#39;react&#39;;</span>
<span class="line">//导航上下文</span>
<span class="line">const NavigationContext = React.createContext({});</span>
<span class="line">//路径上下文</span>
<span class="line">const LocationContext = React.createContext({});</span>
<span class="line"></span>
<span class="line">export {</span>
<span class="line">    NavigationContext,</span>
<span class="line">    LocationContext</span>
<span class="line">};</span>
<span class="line">export function Router({ children, location, navigator }) {</span>
<span class="line">    let navigationContext = React.useMemo(</span>
<span class="line">        () =&gt; ({ navigator }),</span>
<span class="line">        [navigator]</span>
<span class="line">    );</span>
<span class="line">    return (</span>
<span class="line">        &lt;NavigationContext.Provider value={navigationContext}&gt;</span>
<span class="line">            &lt;LocationContext.Provider</span>
<span class="line">                children={children}</span>
<span class="line">                value={{ location }}</span>
<span class="line">            /&gt;</span>
<span class="line">        &lt;/NavigationContext.Provider&gt;</span>
<span class="line">    );</span>
<span class="line">}</span>
<span class="line">export function Routes({ children }) {</span>
<span class="line">    return useRoutes(createRoutesFromChildren(children));</span>
<span class="line">}</span>
<span class="line">export function useLocation() {</span>
<span class="line">    return React.useContext(LocationContext).location;</span>
<span class="line">}</span>
<span class="line">export function useRoutes(routes) {</span>
<span class="line">    let location = useLocation();//当前的路径对象</span>
<span class="line">    let pathname = location.pathname || &quot;/&quot;;//当前的路径</span>
<span class="line">    for (let i = 0; i &lt; routes.length; i++) {</span>
<span class="line">        let { path, element } = routes[i];</span>
<span class="line">        let match = matchPath(path, pathname);</span>
<span class="line">        if (match) {</span>
<span class="line">            return React.cloneElement(element, { ...element.props, match });</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">    return null;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">export function createRoutesFromChildren(children) {</span>
<span class="line">    let routes = [];</span>
<span class="line">    React.Children.forEach(children, element =&gt; {</span>
<span class="line">        let route = {</span>
<span class="line">            path: element.props.path,</span>
<span class="line">            element: element.props.element</span>
<span class="line">        };</span>
<span class="line">        routes.push(route);</span>
<span class="line">    });</span>
<span class="line">    return routes;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">export function Route(props) {</span>
<span class="line"></span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">function compilePath(path) {</span>
<span class="line">    let paramNames = [];</span>
<span class="line">    let regexpSource = &quot;^&quot; + path</span>
<span class="line">        .replace(/:(\\w+)/g, (_, key) =&gt; {</span>
<span class="line">            paramNames.push(key);</span>
<span class="line">            return &quot;([^\\\\/]+)&quot;;</span>
<span class="line">        });</span>
<span class="line">    regexpSource += &quot;$&quot;;</span>
<span class="line">    let matcher = new RegExp(regexpSource);</span>
<span class="line">    return [matcher, paramNames];</span>
<span class="line">}</span>
<span class="line">export function matchPath(path, pathname) {</span>
<span class="line">    let [matcher, paramNames] = compilePath(path);</span>
<span class="line">    let match = pathname.match(matcher);</span>
<span class="line">    if (!match) return null;</span>
<span class="line">    let matchedPathname = match[0];</span>
<span class="line">    let values = match.slice(1);</span>
<span class="line">    let params = paramNames.reduce(</span>
<span class="line">        (memo, paramName, index) =&gt; {</span>
<span class="line">            memo[paramName] = values[index];</span>
<span class="line">            return memo;</span>
<span class="line">        },</span>
<span class="line">        {}</span>
<span class="line">    );</span>
<span class="line">    return { params, pathname: matchedPathname, path };</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">+export function useNavigate() {</span>
<span class="line">+    let { navigator } = React.useContext(NavigationContext);</span>
<span class="line">+    let navigate = React.useCallback((to) =&gt; {</span>
<span class="line">+        navigator.push(to);</span>
<span class="line">+    }, [navigator]);</span>
<span class="line">+    return navigate;</span>
<span class="line">+}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-支持嵌套路由和outlet" tabindex="-1"><a class="header-anchor" href="#_8-支持嵌套路由和outlet"><span>8. 支持嵌套路由和Outlet</span></a></h2><ul><li><a href="https://www.processon.com/diagraming/624525f95653bb072bcea329" target="_blank" rel="noopener noreferrer">processon</a></li></ul><p><img src="https://static.zhufengpeixun.com/reactrouter2_1648701102872.jpg" alt=""></p><h3 id="_8-1-数据结构" tabindex="-1"><a class="header-anchor" href="#_8-1-数据结构"><span>8.1 数据结构</span></a></h3><h4 id="_8-1-1-routes" tabindex="-1"><a class="header-anchor" href="#_8-1-1-routes"><span>8.1.1 routes</span></a></h4><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/user/*&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">&quot;element&quot;</span><span class="token operator">:</span> <span class="token string">&quot;element&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">&quot;children&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string-property property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;add&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">&quot;element&quot;</span><span class="token operator">:</span> <span class="token string">&quot;element&quot;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_8-1-2-branches" tabindex="-1"><a class="header-anchor" href="#_8-1-2-branches"><span>8.1.2 branches</span></a></h4><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token punctuation">{</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/user/*&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">&quot;routesMeta&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string-property property">&quot;relativePath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/user/*&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">&quot;route&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string-property property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/user/*&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">&quot;element&quot;</span><span class="token operator">:</span> <span class="token string">&quot;element&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">&quot;children&quot;</span><span class="token operator">:</span> <span class="token string">&quot;children&quot;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/user/*/add&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">&quot;routesMeta&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string-property property">&quot;relativePath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/user/*&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">&quot;route&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string-property property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/user/*&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">&quot;element&quot;</span><span class="token operator">:</span> <span class="token string">&quot;element&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">&quot;children&quot;</span><span class="token operator">:</span> <span class="token string">&quot;children&quot;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string-property property">&quot;relativePath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;add&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">&quot;route&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string-property property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;add&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">&quot;element&quot;</span><span class="token operator">:</span> <span class="token string">&quot;element&quot;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">const</span> branches<span class="token operator">=</span><span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span><span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">&#39;/user/*/add&#39;</span><span class="token punctuation">,</span><span class="token literal-property property">routesMeta</span><span class="token operator">:</span><span class="token punctuation">[</span>user<span class="token operator">*</span>Meta<span class="token punctuation">,</span>addMeta<span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span><span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">&#39;/user/*/list&#39;</span><span class="token punctuation">,</span><span class="token literal-property property">routesMeta</span><span class="token operator">:</span><span class="token punctuation">[</span>user<span class="token operator">*</span>Meta<span class="token punctuation">,</span>listMeta<span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span><span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">&#39;/user/*/detail&#39;</span><span class="token punctuation">,</span><span class="token literal-property property">routesMeta</span><span class="token operator">:</span><span class="token punctuation">[</span>user<span class="token operator">*</span>Meta<span class="token punctuation">,</span>detailMeta<span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span><span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">&#39;/user/*&#39;</span><span class="token punctuation">,</span><span class="token literal-property property">routesMeta</span><span class="token operator">:</span><span class="token punctuation">[</span>user<span class="token operator">*</span>Meta<span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_8-1-3-flattenroutes" tabindex="-1"><a class="header-anchor" href="#_8-1-3-flattenroutes"><span>8.1.3 flattenRoutes</span></a></h4><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">function</span> <span class="token function">flattenRoutes</span><span class="token punctuation">(</span><span class="token parameter">routes<span class="token punctuation">,</span> branches <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    routes<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">route</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>route<span class="token punctuation">.</span>children <span class="token operator">&amp;&amp;</span> route<span class="token punctuation">.</span>children<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token function">flattenRoutes</span><span class="token punctuation">(</span>route<span class="token punctuation">.</span>children<span class="token punctuation">,</span> branches<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        branches<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> route<span class="token punctuation">.</span>name <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> branches<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">let</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;A&#39;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">                <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;B&#39;</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">                    <span class="token punctuation">{</span></span>
<span class="line">                        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;C&#39;</span></span>
<span class="line">                    <span class="token punctuation">}</span></span>
<span class="line">                <span class="token punctuation">]</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">]</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">flattenRoutes</span><span class="token punctuation">(</span>routes<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_8-1-4-remainingpathname" tabindex="-1"><a class="header-anchor" href="#_8-1-4-remainingpathname"><span>8.1.4 remainingPathname</span></a></h4><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">let</span> pathname <span class="token operator">=</span> <span class="token string">&#39;/user/add&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> meta <span class="token operator">=</span> <span class="token string">&#39;/user&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> remainingPathname <span class="token operator">=</span> pathname<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>meta<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">///add</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_8-1-5-replace" tabindex="-1"><a class="header-anchor" href="#_8-1-5-replace"><span>8.1.5 replace</span></a></h4><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">&#39;/user///add&#39;</span><span class="token punctuation">;</span></span>
<span class="line">str <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\/\\/+</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_8-1-6-regexpsource" tabindex="-1"><a class="header-anchor" href="#_8-1-6-regexpsource"><span>8.1.6 regexpSource</span></a></h4><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">let</span> paramNames <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> path <span class="token operator">=</span> <span class="token string">&#39;/user&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> end <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> regexpSource <span class="token operator">=</span> <span class="token string">&quot;^&quot;</span> <span class="token operator">+</span> path</span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\/*\\*?$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 把结尾 的 /*替换 为空   /user*  /user/* /user//* /user//**</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\\/*</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span> <span class="token comment">//把开始的任意多个星转成一个/    //add=&gt;/add</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">:(\\w+)</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">_<span class="token punctuation">,</span> key</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">        paramNames<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token string">&#39;([^\\\\/]+)&#39;</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">endsWith</span><span class="token punctuation">(</span><span class="token string">&#39;*&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">// /user/*</span></span>
<span class="line">    paramNames<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&#39;*&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//代表后面的内容可以是任意多个/也可以是/任意内容</span></span>
<span class="line">    regexpSource <span class="token operator">+=</span> <span class="token string">&quot;(?:\\\\/(.+)|\\\\/*)$&quot;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">    regexpSource <span class="token operator">+=</span> end <span class="token operator">?</span> <span class="token string">&quot;\\\\/*$&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;(?:\\\\b|\\\\/|$)&quot;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">let</span> matcher <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span>regexpSource<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>matcher<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>paramNames<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> pathname <span class="token operator">=</span> <span class="token string">&#39;/user/add&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> match <span class="token operator">=</span> pathname<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>matcher<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>match<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//^\\/user\\/[^\\/]+(?:\\/(.+)|\\/*)$</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> matchedPathname <span class="token operator">=</span> <span class="token string">&#39;/user/add/&#39;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;matchedPathname&#39;</span><span class="token punctuation">,</span> matchedPathname<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//其实就是把结尾的/去掉</span></span>
<span class="line"><span class="token comment">//(.)就是第1个分组</span></span>
<span class="line"><span class="token keyword">let</span> pathnameBase <span class="token operator">=</span> matchedPathname<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(.)\\/+$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">&#39;$1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;pathnameBase&#39;</span><span class="token punctuation">,</span> pathnameBase<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// /user/add/xx/yy</span></span>
<span class="line"><span class="token comment">// * /add/xx/yy</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_8-1-7-pathnamebase" tabindex="-1"><a class="header-anchor" href="#_8-1-7-pathnamebase"><span>8.1.7 pathnameBase</span></a></h4><ul><li><p>因为*能匹配所有的内容，所以需要重新计算<code>pathnameBase</code></p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">let</span> path <span class="token operator">=</span> <span class="token string">&#39;/user/*&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> pathname <span class="token operator">=</span> <span class="token string">&#39;/user/100/detail&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> pathRegexp <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\\/user(?:\\/(.+)|\\/*)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> match <span class="token operator">=</span> pathname<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>pathRegexp<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>match<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> matchedPathname <span class="token operator">=</span> match<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> starValue <span class="token operator">=</span> match<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;starValue&#39;</span><span class="token punctuation">,</span> starValue<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// /user/add</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;matchedPathname&#39;</span><span class="token punctuation">,</span> matchedPathname<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// /user/add</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;matchedPathname.length&#39;</span><span class="token punctuation">,</span> matchedPathname<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//9</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;value.length&#39;</span><span class="token punctuation">,</span> starValue<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//3</span></span>
<span class="line"><span class="token keyword">let</span> pathnameBase <span class="token operator">=</span> matchedPathname<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> matchedPathname<span class="token punctuation">.</span>length <span class="token operator">-</span> starValue<span class="token punctuation">.</span>length<span class="token punctuation">)</span></span>
<span class="line">pathnameBase <span class="token operator">=</span> matchedPathname<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// /user/</span></span>
<span class="line">pathnameBase <span class="token operator">=</span> pathnameBase<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(.)\\/+$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">&#39;$1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;pathnameBase&#39;</span><span class="token punctuation">,</span> pathnameBase<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// pathnameBase  /user</span></span>
<span class="line"><span class="token comment">// /user/add</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h4 id="_8-1-8-computescore" tabindex="-1"><a class="header-anchor" href="#_8-1-8-computescore"><span>8.1.8 computeScore</span></a></h4><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token comment">//如果路径中有*就减少2</span></span>
<span class="line"><span class="token keyword">const</span> splatPenalty <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> indexRouteValue <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> paramRegexp <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^:\\w+$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> dynamicSegmentValue <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> emptySegmentValue <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> staticSegmentValue <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">isSplat</span> <span class="token operator">=</span> <span class="token parameter">s</span> <span class="token operator">=&gt;</span> s <span class="token operator">===</span> <span class="token string">&#39;*&#39;</span><span class="token punctuation">;</span><span class="token comment">//console.log(computeScore(&#39;/user/*&#39;, 1));</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">computeScore</span><span class="token punctuation">(</span><span class="token parameter">path<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// /user/add</span></span>
<span class="line">    <span class="token keyword">let</span> segments <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//[&#39;&#39;,&#39;user&#39;,&#39;*&#39;]//3</span></span>
<span class="line">    <span class="token keyword">let</span> initialScore <span class="token operator">=</span> segments<span class="token punctuation">.</span>length<span class="token punctuation">;</span><span class="token comment">//3</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>segments<span class="token punctuation">.</span><span class="token function">some</span><span class="token punctuation">(</span>isSplat<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        initialScore <span class="token operator">+=</span> splatPenalty<span class="token punctuation">;</span><span class="token comment">//1</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> index <span class="token operator">!==</span> <span class="token string">&#39;undefined&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        initialScore <span class="token operator">+=</span> indexRouteValue<span class="token punctuation">;</span><span class="token comment">//3</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token comment">//[&#39;&#39;,&#39;user&#39;,&#39;*&#39;]=&gt;[&#39;&#39;,&#39;user&#39;]</span></span>
<span class="line">    <span class="token keyword">return</span> segments<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">s</span> <span class="token operator">=&gt;</span> <span class="token operator">!</span><span class="token function">isSplat</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">score<span class="token punctuation">,</span> segment</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">let</span> currentScope <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token comment">//如果这个片断是路径参数的话 :id</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>paramRegexp<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>segment<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            currentScope <span class="token operator">+=</span> dynamicSegmentValue<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">if</span> <span class="token punctuation">(</span>segment <span class="token operator">===</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                currentScope <span class="token operator">+=</span> emptySegmentValue<span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">                currentScope <span class="token operator">+=</span> staticSegmentValue<span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        score <span class="token operator">+=</span> currentScope<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span> score<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span> initialScore<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">computeScore</span><span class="token punctuation">(</span><span class="token string">&#39;/user/*&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_8-1-9-compareindexes" tabindex="-1"><a class="header-anchor" href="#_8-1-9-compareindexes"><span>8.1.9 compareIndexes</span></a></h4><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">function</span> <span class="token function">compareIndexes</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">//如果a的长度和B的长度是一样的话，并且a的每一项和b的每一项都相同的话，说明a和b是兄弟</span></span>
<span class="line">    <span class="token keyword">let</span> siblings <span class="token operator">=</span> a<span class="token punctuation">.</span>length <span class="token operator">===</span> b<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> a<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">every</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">n<span class="token punctuation">,</span> i</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> n <span class="token operator">===</span> b<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">//如果是兄弟的话就比较 最后一级 </span></span>
<span class="line">    <span class="token keyword">return</span> siblings <span class="token operator">?</span> a<span class="token punctuation">[</span>a<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">-</span> b<span class="token punctuation">[</span>b<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">compareIndexes</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-2-src-index-js" tabindex="-1"><a class="header-anchor" href="#_8-2-src-index-js"><span>8.2 src\\index.js</span></a></h3><p>src\\index.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React from &#39;react&#39;;</span>
<span class="line">import ReactDOM from &#39;react-dom&#39;;</span>
<span class="line">+import { BrowserRouter, Routes, Route, Link } from &#39;./react-router-dom&#39;;</span>
<span class="line">import Home from &#39;./components/Home&#39;;</span>
<span class="line">import User from &#39;./components/User&#39;;</span>
<span class="line">+import UserAdd from &#39;./components/UserAdd&#39;;</span>
<span class="line">+import UserList from &#39;./components/UserList&#39;;</span>
<span class="line">+import UserDetail from &#39;./components/UserDetail&#39;;</span>
<span class="line">import Profile from &#39;./components/Profile&#39;;</span>
<span class="line">import Post from &#39;./components/Post&#39;;</span>
<span class="line">ReactDOM.render(</span>
<span class="line">    &lt;BrowserRouter&gt;</span>
<span class="line">        &lt;ul&gt;</span>
<span class="line">            &lt;li&gt;&lt;Link to=&quot;/&quot;&gt;首页&lt;/Link&gt;&lt;/li&gt;</span>
<span class="line">            &lt;li&gt;&lt;Link to=&quot;/user&quot; &gt;用户管理&lt;/Link&gt;&lt;/li&gt;</span>
<span class="line">            &lt;li&gt;&lt;Link to=&quot;/profile&quot; &gt;个人中心&lt;/Link&gt;&lt;/li&gt;</span>
<span class="line">        &lt;/ul&gt;</span>
<span class="line">        &lt;Routes&gt;</span>
<span class="line">            &lt;Route path=&quot;/&quot; element={&lt;Home /&gt;} /&gt;</span>
<span class="line">+           &lt;Route path=&quot;/user/*&quot; element={&lt;User /&gt;} &gt;</span>
<span class="line">+               &lt;Route path=&quot;add&quot; element={&lt;UserAdd /&gt;} /&gt;</span>
<span class="line">+               &lt;Route path=&quot;list&quot; element={&lt;UserList /&gt;} /&gt;</span>
<span class="line">+               &lt;Route path=&quot;detail/:id&quot; element={&lt;UserDetail /&gt;} /&gt;</span>
<span class="line">+           &lt;/Route&gt;</span>
<span class="line">            &lt;Route path=&quot;/profile&quot; element={&lt;Profile /&gt;} /&gt;</span>
<span class="line">            &lt;Route path=&quot;/post/:id&quot; element={&lt;Post /&gt;} /&gt;</span>
<span class="line">        &lt;/Routes&gt;</span>
<span class="line">    &lt;/BrowserRouter&gt;</span>
<span class="line">    , document.getElementById(&#39;root&#39;));</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-3-user-js" tabindex="-1"><a class="header-anchor" href="#_8-3-user-js"><span>8.3 User.js</span></a></h3><p>src\\components\\User.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React from &#39;react&#39;;</span>
<span class="line">+import { Link, Outlet } from &#39;../react-router-dom&#39;;</span>
<span class="line">function User() {</span>
<span class="line">    return (</span>
<span class="line">+       &lt;div&gt;</span>
<span class="line">+           &lt;ul&gt;</span>
<span class="line">+               &lt;li&gt;&lt;Link to=&quot;/user/list&quot;&gt;用户列表&lt;/Link&gt;&lt;/li&gt;</span>
<span class="line">+               &lt;li&gt;&lt;Link to=&quot;/user/add&quot;&gt;添加用户&lt;/Link&gt;&lt;/li&gt;</span>
<span class="line">+           &lt;/ul&gt;</span>
<span class="line">+           &lt;div&gt;</span>
<span class="line">+               &lt;Outlet /&gt;</span>
<span class="line">+           &lt;/div&gt;</span>
<span class="line">+       &lt;/div&gt;</span>
<span class="line">    )</span>
<span class="line">}</span>
<span class="line">export default User;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-4-src-utils-js" tabindex="-1"><a class="header-anchor" href="#_8-4-src-utils-js"><span>8.4 src\\utils.js</span></a></h3><p>src\\utils.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> UserAPI <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">list</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">let</span> usersStr <span class="token operator">=</span> localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">&#39;users&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">let</span> users <span class="token operator">=</span> usersStr <span class="token operator">?</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>usersStr<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span> users<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">user</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">let</span> users <span class="token operator">=</span> UserAPI<span class="token punctuation">.</span><span class="token function">list</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        users<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">&#39;users&#39;</span><span class="token punctuation">,</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>users<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function">find</span><span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">let</span> users <span class="token operator">=</span> UserAPI<span class="token punctuation">.</span><span class="token function">list</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span> users<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">user</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> user<span class="token punctuation">.</span>id <span class="token operator">===</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-5-useradd-js" tabindex="-1"><a class="header-anchor" href="#_8-5-useradd-js"><span>8.5 UserAdd.js</span></a></h3><p>src\\components\\UserAdd.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useNavigate <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-router-dom&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> UserAPI <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../utils&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">UserAdd</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> navigate <span class="token operator">=</span> <span class="token function">useNavigate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">const</span> nameRef <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token function-variable function">handleSubmit</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    event<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">let</span> name <span class="token operator">=</span> nameRef<span class="token punctuation">.</span>current<span class="token punctuation">.</span>value<span class="token punctuation">;</span></span>
<span class="line">    UserAPI<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> name <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token function">navigate</span><span class="token punctuation">(</span><span class="token string">&#39;/user/list&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token operator">&lt;</span>form onSubmit<span class="token operator">=</span><span class="token punctuation">{</span>handleSubmit<span class="token punctuation">}</span><span class="token operator">&gt;</span></span>
<span class="line">      <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">&quot;text&quot;</span> ref<span class="token operator">=</span><span class="token punctuation">{</span>nameRef<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line">      <span class="token operator">&lt;</span>button type<span class="token operator">=</span><span class="token string">&quot;submit&quot;</span><span class="token operator">&gt;</span>添加<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-6-userdetail-js" tabindex="-1"><a class="header-anchor" href="#_8-6-userdetail-js"><span>8.6 UserDetail.js</span></a></h3><p>src\\components\\UserDetail.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useLocation<span class="token punctuation">,</span> useParams <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-router-dom&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> UserAPI <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../utils&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">UserDetail</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> location <span class="token operator">=</span> <span class="token function">useLocation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token punctuation">{</span> id <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useParams</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token punctuation">[</span>user<span class="token punctuation">,</span> setUser<span class="token punctuation">]</span> <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  React<span class="token punctuation">.</span><span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> user <span class="token operator">=</span> location<span class="token punctuation">.</span>state<span class="token punctuation">;</span><span class="token comment">//首先取路径对象的状态</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>user<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span>id<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        user <span class="token operator">=</span> UserAPI<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>user<span class="token punctuation">)</span> <span class="token function">setUser</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span></span>
<span class="line">      <span class="token punctuation">{</span>user<span class="token punctuation">.</span>id<span class="token punctuation">}</span><span class="token operator">:</span><span class="token punctuation">{</span>user<span class="token punctuation">.</span>name<span class="token punctuation">}</span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-7-userlist-js" tabindex="-1"><a class="header-anchor" href="#_8-7-userlist-js"><span>8.7 UserList.js</span></a></h3><p>src\\components\\UserList.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Link <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-router-dom&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> UserAPI <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../utils&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token punctuation">[</span>users<span class="token punctuation">,</span> setUsers<span class="token punctuation">]</span> <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  React<span class="token punctuation">.</span><span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> users <span class="token operator">=</span> UserAPI<span class="token punctuation">.</span><span class="token function">list</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token function">setUsers</span><span class="token punctuation">(</span>users<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token operator">&lt;</span>ul<span class="token operator">&gt;</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        users<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">user<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span></span>
<span class="line">          <span class="token operator">&lt;</span>li key<span class="token operator">=</span><span class="token punctuation">{</span>index<span class="token punctuation">}</span><span class="token operator">&gt;</span></span>
<span class="line">            <span class="token operator">&lt;</span>Link to<span class="token operator">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">/user/detail/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>user<span class="token punctuation">.</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">}</span> state<span class="token operator">=</span><span class="token punctuation">{</span>user<span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">{</span>user<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">&gt;</span></span>
<span class="line">          <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span></span>
<span class="line">        <span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-8-react-router-index-js" tabindex="-1"><a class="header-anchor" href="#_8-8-react-router-index-js"><span>8.8 react-router\\index.js</span></a></h3><p>src\\react-router\\index.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React, { memo } from &#39;react&#39;;</span>
<span class="line">//导航上下文</span>
<span class="line">const NavigationContext = React.createContext();</span>
<span class="line">//路径上下文</span>
<span class="line">const LocationContext = React.createContext();</span>
<span class="line">+//路由上下文</span>
<span class="line">+const RouteContext = React.createContext();</span>
<span class="line">+export { NavigationContext, LocationContext, RouteContext }</span>
<span class="line">+export function Outlet() {</span>
<span class="line">+  return useOutlet();</span>
<span class="line">+}</span>
<span class="line">+function useOutlet() {</span>
<span class="line">+  let { outlet } = React.useContext(RouteContext);</span>
<span class="line">+  return outlet;</span>
<span class="line">+}</span>
<span class="line">+export function useParams() {</span>
<span class="line">+  let { matches } = React.useContext(RouteContext);</span>
<span class="line">+  let routeMatch = matches[matches.length - 1];</span>
<span class="line">+  return routeMatch ? routeMatch.params : {};</span>
<span class="line">+}</span>
<span class="line">/**</span>
<span class="line"> * </span>
<span class="line"> * @param {*} children 子组件</span>
<span class="line"> * @param {*} location 当前的路径对象</span>
<span class="line"> * @param {*} navigator history对象 go back forward push....</span>
<span class="line"> */</span>
<span class="line">export function Router({ children, location, navigator }) {</span>
<span class="line">  const navigationContext = React.useMemo(() =&gt; ({ navigator }), [navigator]);</span>
<span class="line">  const locationContext = React.useMemo(() =&gt; ({ location }), [location]);</span>
<span class="line">  return (</span>
<span class="line">    &lt;NavigationContext.Provider value={navigationContext}&gt;</span>
<span class="line">      &lt;LocationContext.Provider value={locationContext} children={children} /&gt;</span>
<span class="line">    &lt;/NavigationContext.Provider&gt;</span>
<span class="line">  )</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">export function Routes({ children }) {</span>
<span class="line">  const routes = createRoutesFromChildren(children);</span>
<span class="line">  return useRoutes(routes)</span>
<span class="line">}</span>
<span class="line">//</span>
<span class="line">export function Route() { }</span>
<span class="line">export function useLocation() {</span>
<span class="line">  return React.useContext(LocationContext).location;</span>
<span class="line">}</span>
<span class="line">/**</span>
<span class="line"> * 把此路由配置数组渲染成真正的组件</span>
<span class="line"> * @param {*} routes 路由配置数组</span>
<span class="line"> */</span>
<span class="line">export function useRoutes(routes) {</span>
<span class="line">+ //当前的路径对象</span>
<span class="line">+ let location = useLocation();</span>
<span class="line">+ //当前的路径字符串  /user/add</span>
<span class="line">+ let pathname = location.pathname;</span>
<span class="line">+ //用当前的地址栏中的路径和路由进行匹配</span>
<span class="line">+ let matches = matchRoutes(routes, { pathname });</span>
<span class="line">+ //渲染匹配的结果</span>
<span class="line">+ return _renderMatches(matches);</span>
<span class="line">}</span>
<span class="line">+function _renderMatches(matches) {</span>
<span class="line">+  if (!matches) return null;</span>
<span class="line">+  //渲染结果的时候是从右向左执行的</span>
<span class="line">+  //matches=[{route:{element:User}},{route:{element:UserAdd]}}]</span>
<span class="line">+  return matches.reduceRight((outlet, match, index) =&gt; {</span>
<span class="line">+    return (</span>
<span class="line">+      &lt;RouteContext.Provider value={{ outlet, matches: matches.slice(0, index + 1) }}&gt;</span>
<span class="line">+        {match.route.element}</span>
<span class="line">+      &lt;/RouteContext.Provider&gt;</span>
<span class="line">+    )</span>
<span class="line">+  }, null);</span>
<span class="line">+}</span>
<span class="line">/**</span>
<span class="line"> * 用当前路径和路由配置进行匹配,获取匹配的结果 </span>
<span class="line"> * @param {*} routes 路由配置</span>
<span class="line"> * @param {*} location 当前路径</span>
<span class="line"> */</span>
<span class="line">+function matchRoutes(routes, location) {</span>
<span class="line">+  //获取路径名</span>
<span class="line">+  let pathname = location.pathname;</span>
<span class="line">+  //打平所有的分支路径</span>
<span class="line">+  let branches = flattenRoutes(routes);</span>
<span class="line">+  rankRouteBranches(branches);</span>
<span class="line">+  console.log(branches);</span>
<span class="line">+  //匹配的结果</span>
<span class="line">+  let matches = null;</span>
<span class="line">+  //按分支顺序依次进行匹配，如果匹配上了，直接退出循环，不再进行后续的匹配</span>
<span class="line">+  for (let i = 0; matches == null &amp;&amp; i &lt; branches.length; i++) {</span>
<span class="line">+    matches = matchRouteBranch(branches[i], pathname);</span>
<span class="line">+  }</span>
<span class="line">+  return matches;</span>
<span class="line">+}</span>
<span class="line">+function rankRouteBranches(branches) {</span>
<span class="line">+  branches.sort((a, b) =&gt; {</span>
<span class="line">+    //如果分数不一样，按分数倒序排列 </span>
<span class="line">+    //如果分数一样，只能比过索引</span>
<span class="line">+    return a.score !== b.score ? b.score - a.score : compareIndexes(</span>
<span class="line">+      a.routesMeta.map(meta =&gt; meta.childrenIndex),</span>
<span class="line">+      b.routesMeta.map(meta =&gt; meta.childrenIndex)</span>
<span class="line">+    );</span>
<span class="line">+  });</span>
<span class="line">+}</span>
<span class="line">+/**</span>
<span class="line">+ * /user/add   routesMeta=[userMeta,addMeta]=&gt;[2,0]</span>
<span class="line">+ * /user/list  routesMeta = [userMeta,listMeta]=&gt;[2,1];</span>
<span class="line">+ */</span>
<span class="line">+function compareIndexes(a, b) {</span>
<span class="line">+  //如果级别数量相等，并且父亲都 一样，说是他们是兄弟 </span>
<span class="line">+  let sibling = a.length === b.length &amp;&amp; a.slice(0, -1).every((n, i) =&gt; n === b[i])</span>
<span class="line">+  //如果是兄弟的话，那和比索引，索引越小级别越高，索引越大，级别越低</span>
<span class="line">+  //如果不是兄弟，那就认为相等的</span>
<span class="line">+  return sibling ? a[a.length - 1] - b[b.length - 1] : 0;</span>
<span class="line">+}</span>
<span class="line">+/**</span>
<span class="line">+ * 用分支的路径匹配地址栏的路径名</span>
<span class="line">+ * @param {*} branch </span>
<span class="line">+ * @param {*} pathname 完整路径</span>
<span class="line">+ */</span>
<span class="line">+function matchRouteBranch(branch, pathname) {</span>
<span class="line">+  let { routesMeta } = branch;</span>
<span class="line">+  //此分支路径参数对象  path =/:a/:b/:c  pathname=/vA/vB/vC</span>
<span class="line">+  let matchesParams = {};//{a:vA,b:vB,c:vC}</span>
<span class="line">+  let matchedPathname = &quot;/&quot;;</span>
<span class="line">+  let matches = [];</span>
<span class="line">+  for (let i = 0; i &lt; routesMeta.length; i++) {</span>
<span class="line">+    //获取当前的meta</span>
<span class="line">+    let meta = routesMeta[i];</span>
<span class="line">+    //判断是否是最后一个meta</span>
<span class="line">+    let end = i === routesMeta.length - 1;</span>
<span class="line">+    //获取剩下的的将要匹配的路径</span>
<span class="line">+    let remainingPathname = matchedPathname === &quot;/&quot; ? pathname : pathname.slice(matchedPathname.length);</span>
<span class="line">+    let match = matchPath({ path: meta.relativePath, end }, remainingPathname);</span>
<span class="line">+    //如果没有匹配上，那就表示匹配失败了</span>
<span class="line">+    if (!match) {</span>
<span class="line">+      return null;</span>
<span class="line">+    }</span>
<span class="line">+    Object.assign(matchesParams, match.params);</span>
<span class="line">+    let route = meta.route;</span>
<span class="line">+    matches.push({</span>
<span class="line">+      params: matchesParams,</span>
<span class="line">+      pathname: joinPaths([matchedPathname, match.pathname]),</span>
<span class="line">+      pathnameBase: joinPaths([matchedPathname, match.pathnameBase]),</span>
<span class="line">+      route</span>
<span class="line">+    });</span>
<span class="line">+    if (match.pathnameBase !== &#39;/&#39;) {</span>
<span class="line">+      matchedPathname = joinPaths([matchedPathname, match.pathnameBase]);</span>
<span class="line">+    }</span>
<span class="line">+  }</span>
<span class="line">+  return matches;</span>
<span class="line">+}</span>
<span class="line">+/**</span>
<span class="line">+ * 匹配路径</span>
<span class="line">+ * @param {*} path 路由的路径</span>
<span class="line">+ * @param {*} pathname 当前地址栏中的路径</span>
<span class="line">+ */</span>
<span class="line">+export function matchPath({ path, end }, pathname) {</span>
<span class="line">+  //把路径编译 成正则</span>
<span class="line">+  let [matcher, paramNames] = compilePath(path, end);</span>
<span class="line">+  //匹配结果  </span>
<span class="line">+  let match = pathname.match(matcher);</span>
<span class="line">+  //如果没有匹配上结束 </span>
<span class="line">+  if (!match) {</span>
<span class="line">+    return null;</span>
<span class="line">+  }</span>
<span class="line">+  //获取匹配的路径</span>
<span class="line">+  let matchedPathname = match[0]; //  /user//</span>
<span class="line">+  //base就是基本路径 /user/  =&gt; /user  把结束的一个/或多个/去掉 </span>
<span class="line">+  let pathnameBase = matchedPathname.replace(/(.)\\/+$/, &#39;$1&#39;);</span>
<span class="line">+  //拼出paramNames</span>
<span class="line">+  let values = match.slice(1);</span>
<span class="line">+  let captureGroups = match.slice(1);</span>
<span class="line">+  let params = paramNames.reduce((memo, paramName, index) =&gt; {</span>
<span class="line">+    //  /user/*</span>
<span class="line">+    if (paramName === &#39;*&#39;) {</span>
<span class="line">+      let splatValue = captureGroups[index] || &#39;&#39;;//后面的内容  pathname=/user/add</span>
<span class="line">+      //pathnameBase=matchedPathname=/user/add</span>
<span class="line">+      //重写pathnameBase == /user/add  slice=/user/ /user  截取*之前的串作为后续匹配的父串 </span>
<span class="line">+      pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\\/+/, +&#39;$1&#39;);</span>
<span class="line">+    }</span>
<span class="line">+    memo[paramName] = values[index];</span>
<span class="line">+    return memo;</span>
<span class="line">+  }, {});</span>
<span class="line">+  return {</span>
<span class="line">+    params,</span>
<span class="line">+    pathname: matchedPathname,//user/add</span>
<span class="line">+    pathnameBase // /user</span>
<span class="line">+  }</span>
<span class="line">+}</span>
<span class="line">function compilePath(path, end) {</span>
<span class="line">  //路径参数的参数名数组 /post/:id paramNames=[&quot;id&quot;]</span>
<span class="line">  let paramNames = [];</span>
<span class="line">  let regexpSource = &#39;^&#39; + path</span>
<span class="line">+   .replace(/\\/*\\*?$/, &#39;&#39;) //的 /*或者//* 或者 * 全部转为空  /user/* /user* /user//* /user 在转正则的时候是等价的</span>
<span class="line">+   .replace(/^\\/*/, &#39;/&#39;)//把开始多个/或者说没有/转成一个/   /user 不变 //user 变/user  user /user</span>
<span class="line">    .replace(</span>
<span class="line">      /:(\\w+)/g, (_, key) =&gt; {</span>
<span class="line">        paramNames.push(key);</span>
<span class="line">        return &quot;([^\\\\/]+?)&quot;;</span>
<span class="line">      }</span>
<span class="line">    )</span>
<span class="line">+ if (path.endsWith(&#39;*&#39;)) {</span>
<span class="line">+   paramNames.push(&#39;*&#39;);</span>
<span class="line">+   regexpSource += path === &quot;*&quot; || path === &quot;/*&quot; ? &quot;(.*)$&quot;</span>
<span class="line">+     : &quot;(?:\\\\/(.+)|\\\\/*)$&quot;;</span>
<span class="line">+   //regexpSource += &quot;(?:\\\\/(.+)|\\\\/*)$&quot;;</span>
<span class="line">+ } else {</span>
<span class="line">+   regexpSource += end ? &quot;\\\\/*$&quot; : &quot;(?:\\b|\\\\/|$)&quot;;</span>
<span class="line">+ }</span>
<span class="line">  let matcher = new RegExp(regexpSource);</span>
<span class="line">  return [matcher, paramNames];</span>
<span class="line">}</span>
<span class="line">+const isSplat = s =&gt; s === &#39;*&#39;;</span>
<span class="line">+const splatPenalty = -2;</span>
<span class="line">+const indexRouteValue = 2;</span>
<span class="line">+const paramRe = /^:\\w+$/;</span>
<span class="line">+const dynamicSegmentValue = 3;</span>
<span class="line">+const emptySegmentValue = 1;</span>
<span class="line">+const staticSegmentValue = 10;</span>
<span class="line">+function computeScore(path, index) {</span>
<span class="line">+  let segments = path.split(&#39;/&#39;); // /user/add   =&gt; [&#39;user&#39;,&#39;add&#39;]</span>
<span class="line">+  let initialScore = segments.length;//分片的长度就是基础分数</span>
<span class="line">+  if (segments.some(isSplat)) {//  /user/* 有星说是通配，分数分降低</span>
<span class="line">+    initialScore += splatPenalty;</span>
<span class="line">+  }</span>
<span class="line">+  if (index) {</span>
<span class="line">+    initialScore += indexRouteValue;</span>
<span class="line">+  }</span>
<span class="line">+ return segments.filter(s =&gt; !isSplat(s)).reduce((score, segment) =&gt; {</span>
<span class="line">+   return score + (paramRe.test(segment) ? dynamicSegmentValue : segment === &#39;&#39; ? emptySegmentValue : staticSegmentValue);</span>
<span class="line">+ }, initialScore);</span>
<span class="line">}</span>
<span class="line">+/**</span>
<span class="line">+ * 打平所有的分支</span>
<span class="line">+ * @param {*} routes 路由配置 </span>
<span class="line">+ */</span>
<span class="line">+function flattenRoutes(routes, branches = [], parentsMeta = [], parentPath = &quot;&quot;) {</span>
<span class="line">+  routes.forEach((route, index) =&gt; {</span>
<span class="line">+    //定义一个路由元数据</span>
<span class="line">+    let meta = {</span>
<span class="line">+      relativePath: route.path || &quot;&quot;,//路径相对父路径的路径 UserAdd relativePath=add</span>
<span class="line">+      route, //路由对象</span>
<span class="line">+      childrenIndex: index,</span>
<span class="line">+    }</span>
<span class="line">+    //现在我们的routes其实只有一个元素,/user/*  parentPath=&#39;&#39;  relativePath=/user/*</span>
<span class="line">+    //path=/user/*</span>
<span class="line">+    //把父路径加上自己的相对路径构建成匹配的完整路径</span>
<span class="line">+    let path = joinPaths([parentPath, meta.relativePath]);</span>
<span class="line">+    //在父meta数组中添加自己这个meta</span>
<span class="line">+    let routesMeta = parentsMeta.concat(meta);</span>
<span class="line">+    //如果有子路由的话，递归添加到 branches分支数组中</span>
<span class="line">+    if (route.children &amp;&amp; route.children.length &gt; 0) {</span>
<span class="line">+      flattenRoutes(route.children, branches, routesMeta, path);</span>
<span class="line">+    }</span>
<span class="line">+    branches.push({</span>
<span class="line">+      path,</span>
<span class="line">+      routesMeta,</span>
<span class="line">+      score: computeScore(path, route.index)</span>
<span class="line">+    });</span>
<span class="line">+  });</span>
<span class="line">+  return branches;</span>
<span class="line">+}</span>
<span class="line">+function joinPaths(paths) {</span>
<span class="line">+  // [&#39;/user/*/&#39;,&#39;/add&#39;]=&gt; /user/*/add</span>
<span class="line">+  return paths.join(&#39;/&#39;).replace(/\\/\\/+/g, &#39;/&#39;);</span>
<span class="line">+}</span>
<span class="line"></span>
<span class="line">export function createRoutesFromChildren(children) {</span>
<span class="line">  let routes = [];</span>
<span class="line">  React.Children.forEach(children, (element) =&gt; {</span>
<span class="line">    let route = {</span>
<span class="line">      path: element.props.path,//       /user 此路由对应的路径</span>
<span class="line">      element: element.props.element // &lt;User/&gt; 此路由对应的元素</span>
<span class="line">    }</span>
<span class="line">+   if (element.props.children) {</span>
<span class="line">+     route.children = createRoutesFromChildren(element.props.children);</span>
<span class="line">+   }</span>
<span class="line">    routes.push(route);</span>
<span class="line">  });</span>
<span class="line">  return routes;</span>
<span class="line">}</span>
<span class="line">export function useNavigate() {</span>
<span class="line">  const { navigator } = React.useContext(NavigationContext);</span>
<span class="line">  const navigate = React.useCallback((to) =&gt; navigator.push(to), [navigator]);</span>
<span class="line">  return navigate;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-实现navlink" tabindex="-1"><a class="header-anchor" href="#_9-实现navlink"><span>9. 实现NavLink</span></a></h2><h3 id="_9-1-public-index-html" tabindex="-1"><a class="header-anchor" href="#_9-1-public-index-html"><span>9.1 public\\index.html</span></a></h3><p>public\\index.html</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;!DOCTYPE html&gt;</span>
<span class="line">&lt;html lang=&quot;en&quot;&gt;</span>
<span class="line">&lt;head&gt;</span>
<span class="line">  &lt;meta charset=&quot;utf-8&quot; /&gt;</span>
<span class="line">  &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1&quot; /&gt;</span>
<span class="line">   &lt;meta name=&quot;theme-color&quot; content=&quot;</span>
<span class="line">  &lt;meta name=&quot;description&quot; content=&quot;Web site created using create-react-app&quot; /&gt;</span>
<span class="line">  &lt;title&gt;React App&lt;/title&gt;</span>
<span class="line">+ &lt;style&gt;</span>
<span class="line">+   .active {</span>
<span class="line">+      color: red;</span>
<span class="line">+   }</span>
<span class="line">+ &lt;/style&gt;</span>
<span class="line">&lt;/head&gt;</span>
<span class="line"></span>
<span class="line">&lt;body&gt;</span>
<span class="line">  &lt;div id=&quot;root&quot;&gt;&lt;/div&gt;</span>
<span class="line">&lt;/body&gt;</span>
<span class="line"></span>
<span class="line">&lt;/html&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-2-src-index-js" tabindex="-1"><a class="header-anchor" href="#_9-2-src-index-js"><span>9.2 src\\index.js</span></a></h3><p>src\\index.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React from &#39;react&#39;;</span>
<span class="line">import ReactDOM from &#39;react-dom&#39;;</span>
<span class="line">+import { BrowserRouter, Routes, Route, NavLink } from &#39;./react-router-dom&#39;;</span>
<span class="line">import Home from &#39;./components/Home&#39;;</span>
<span class="line">import User from &#39;./components/User&#39;;</span>
<span class="line">import UserAdd from &#39;./components/UserAdd&#39;;</span>
<span class="line">import UserList from &#39;./components/UserList&#39;;</span>
<span class="line">import UserDetail from &#39;./components/UserDetail&#39;;</span>
<span class="line">import Profile from &#39;./components/Profile&#39;;</span>
<span class="line">import Post from &#39;./components/Post&#39;;</span>
<span class="line">+const activeStyle = { backgroundColor: &#39;green&#39; };</span>
<span class="line">+const activeClassName = &#39;active&#39;;</span>
<span class="line">+const activeNavProps = {</span>
<span class="line">+  style: ({ isActive }) =&gt; isActive ? activeStyle : {},</span>
<span class="line">+  className: ({ isActive }) =&gt; isActive ? activeClassName : &#39;&#39;</span>
<span class="line">+}</span>
<span class="line">ReactDOM.render(</span>
<span class="line">    &lt;BrowserRouter&gt;</span>
<span class="line">        &lt;ul&gt;</span>
<span class="line">+         &lt;li&gt;&lt;NavLink end={true} to=&quot;/&quot; {...activeNavProps}&gt;首页&lt;/NavLink&gt;&lt;/li&gt;</span>
<span class="line">+         &lt;li&gt;&lt;NavLink to=&quot;/user/list&quot; {...activeNavProps}&gt;用户管理&lt;/NavLink&gt;&lt;/li&gt;</span>
<span class="line">+         &lt;li&gt;&lt;NavLink to=&quot;/profile&quot; {...activeNavProps}&gt;个人中心&lt;/NavLink&gt;&lt;/li&gt;</span>
<span class="line">        &lt;/ul&gt;</span>
<span class="line">        &lt;Routes&gt;</span>
<span class="line">            &lt;Route path=&quot;/&quot; element={&lt;Home /&gt;} /&gt;</span>
<span class="line">            &lt;Route path=&quot;/user/*&quot; element={&lt;User /&gt;} &gt;</span>
<span class="line">                &lt;Route path=&quot;add&quot; element={&lt;UserAdd /&gt;} /&gt;</span>
<span class="line">                &lt;Route path=&quot;list&quot; element={&lt;UserList /&gt;} /&gt;</span>
<span class="line">                &lt;Route path=&quot;detail/:id&quot; element={&lt;UserDetail /&gt;} /&gt;</span>
<span class="line">            &lt;/Route&gt;</span>
<span class="line">            &lt;Route path=&quot;/profile&quot; element={&lt;Profile /&gt;} /&gt;</span>
<span class="line">            &lt;Route path=&quot;/post/:id&quot; element={&lt;Post /&gt;} /&gt;</span>
<span class="line">        &lt;/Routes&gt;</span>
<span class="line">    &lt;/BrowserRouter&gt;</span>
<span class="line">    , document.getElementById(&#39;root&#39;));</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-3-src-react-router-dom-index-js" tabindex="-1"><a class="header-anchor" href="#_9-3-src-react-router-dom-index-js"><span>9.3 src\\react-router-dom\\index.js</span></a></h3><p>src\\react-router-dom\\index.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React from &#39;react&#39;</span>
<span class="line">+import { Router, useNavigate, useLocation } from &#39;../react-router&#39;;</span>
<span class="line">import { createHashHistory, createBrowserHistory } from &quot;../history&quot;;</span>
<span class="line">export * from &#39;../react-router&#39;;</span>
<span class="line"></span>
<span class="line">export function HashRouter({ children }) {</span>
<span class="line">    let historyRef = React.useRef();</span>
<span class="line">    if (historyRef.current == null) {</span>
<span class="line">        historyRef.current = createHashHistory();</span>
<span class="line">    }</span>
<span class="line">    let history = historyRef.current;</span>
<span class="line">    let [state, setState] = React.useState({</span>
<span class="line">        action: history.action,</span>
<span class="line">        location: history.location</span>
<span class="line">    });</span>
<span class="line">    React.useLayoutEffect(() =&gt; history.listen(setState), [history]);</span>
<span class="line">    return (</span>
<span class="line">        &lt;Router</span>
<span class="line">            children={children}</span>
<span class="line">            location={state.location}</span>
<span class="line">            navigationType={state.action}</span>
<span class="line">            navigator={history}</span>
<span class="line">        /&gt;</span>
<span class="line">    );</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">export function BrowserRouter({ children }) {</span>
<span class="line">    let historyRef = React.useRef();</span>
<span class="line">    if (historyRef.current == null) {</span>
<span class="line">        historyRef.current = createBrowserHistory();</span>
<span class="line">    }</span>
<span class="line">    let history = historyRef.current;</span>
<span class="line">    let [state, setState] = React.useState({</span>
<span class="line">        action: history.action,</span>
<span class="line">        location: history.location</span>
<span class="line">    });</span>
<span class="line">    React.useLayoutEffect(() =&gt; history.listen(setState), [history]);</span>
<span class="line">    return (</span>
<span class="line">        &lt;Router</span>
<span class="line">            children={children}</span>
<span class="line">            location={state.location}</span>
<span class="line">            navigationType={state.action}</span>
<span class="line">            navigator={history}</span>
<span class="line">        /&gt;</span>
<span class="line">    );</span>
<span class="line">}</span>
<span class="line">export function Link({ to, ...rest }) {</span>
<span class="line">    let navigate = useNavigate();</span>
<span class="line">    function handleClick() {</span>
<span class="line">        navigate(to);</span>
<span class="line">    }</span>
<span class="line">    return (</span>
<span class="line">        &lt;a</span>
<span class="line">            {...rest}</span>
<span class="line">            href={to}</span>
<span class="line">            onClick={handleClick}</span>
<span class="line">        /&gt;</span>
<span class="line">    );</span>
<span class="line">}</span>
<span class="line">+/**</span>
<span class="line">+ * </span>
<span class="line">+ * @param {*} className 类名 可以是固定的字符串，也可以是一个函数，函数的参数是isActive</span>
<span class="line">+ * @param {*} end 是否结束</span>
<span class="line">+ * @param {*} style 行内样式 可以是固定的字符串，也可以是一个函数，函数的参数是isActive</span>
<span class="line">+ * @param {*} to 点击导航跳转的路径</span>
<span class="line">+ * @param {*} children 子组件</span>
<span class="line">+ */</span>
<span class="line">+export function NavLink({ className: classNameProp = &#39;&#39;, end = false, style: styleProp = {}, to, children, ...+rest }) {</span>
<span class="line">+  let location = useLocation();</span>
<span class="line">+  let path = { pathname: to };</span>
<span class="line">+  let locationPathname = location.pathname;//当前的路径</span>
<span class="line">+  let toPathname = path.pathname;//当前导航想要跳转的路径</span>
<span class="line">+  //如果路径一样，或者 不结束，并且当前的路径是以to开头的，并且下一个字符/，也就是路径路径分隔符</span>
<span class="line">+  let isActive = locationPathname === toPathname</span>
<span class="line">+    || (!end &amp;&amp; locationPathname.startsWith(toPathname) &amp;&amp; locationPathname.charAt(toPathname.length) === &#39;/&#39;)</span>
<span class="line">+  let className;</span>
<span class="line">+  if (typeof classNameProp === &#39;function&#39;) {</span>
<span class="line">+    className = classNameProp({</span>
<span class="line">+      isActive</span>
<span class="line">+    });</span>
<span class="line">+  }</span>
<span class="line">+  let style;</span>
<span class="line">+  if (typeof styleProp === &#39;function&#39;) {</span>
<span class="line">+    style = styleProp({</span>
<span class="line">+      isActive</span>
<span class="line">+    });</span>
<span class="line">+  }</span>
<span class="line">+  return (</span>
<span class="line">+    &lt;Link {...rest} to={to} className={className} style={style}&gt;{children}&lt;/Link&gt;</span>
<span class="line">+  )</span>
<span class="line">+}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_10-跳转和重定向" tabindex="-1"><a class="header-anchor" href="#_10-跳转和重定向"><span>10. 跳转和重定向</span></a></h2><h3 id="_10-1-src-index-js" tabindex="-1"><a class="header-anchor" href="#_10-1-src-index-js"><span>10.1 src\\index.js</span></a></h3><p>src\\index.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React from &#39;react&#39;;</span>
<span class="line">import ReactDOM from &#39;react-dom&#39;;</span>
<span class="line">+import { BrowserRouter, Routes, Route, NavLink, Navigate } from &#39;./react-router-dom&#39;;</span>
<span class="line">import Home from &#39;./components/Home&#39;;</span>
<span class="line">import User from &#39;./components/User&#39;;</span>
<span class="line">import UserAdd from &#39;./components/UserAdd&#39;;</span>
<span class="line">import UserList from &#39;./components/UserList&#39;;</span>
<span class="line">import UserDetail from &#39;./components/UserDetail&#39;;</span>
<span class="line">import Profile from &#39;./components/Profile&#39;;</span>
<span class="line">import Post from &#39;./components/Post&#39;;</span>
<span class="line">const activeStyle = { backgroundColor: &#39;green&#39; };</span>
<span class="line">const activeClassName = &#39;active&#39;;</span>
<span class="line">const activeNavProps = {</span>
<span class="line">  style: ({ isActive }) =&gt; isActive ? activeStyle : {},</span>
<span class="line">  className: ({ isActive }) =&gt; isActive ? activeClassName : &#39;&#39;</span>
<span class="line">}</span>
<span class="line">ReactDOM.render(</span>
<span class="line">    &lt;BrowserRouter&gt;</span>
<span class="line">        &lt;ul&gt;</span>
<span class="line">          &lt;li&gt;&lt;NavLink end={true} to=&quot;/&quot; {...activeNavProps}&gt;首页&lt;/NavLink&gt;&lt;/li&gt;</span>
<span class="line">          &lt;li&gt;&lt;NavLink to=&quot;/user/list&quot; {...activeNavProps}&gt;用户管理&lt;/NavLink&gt;&lt;/li&gt;</span>
<span class="line">          &lt;li&gt;&lt;NavLink to=&quot;/profile&quot; {...activeNavProps}&gt;个人中心&lt;/NavLink&gt;&lt;/li&gt;</span>
<span class="line">        &lt;/ul&gt;</span>
<span class="line">        &lt;Routes&gt;</span>
<span class="line">            &lt;Route path=&quot;/&quot; element={&lt;Home /&gt;} /&gt;</span>
<span class="line">            &lt;Route path=&quot;/user/*&quot; element={&lt;User /&gt;} &gt;</span>
<span class="line">                &lt;Route path=&quot;add&quot; element={&lt;UserAdd /&gt;} /&gt;</span>
<span class="line">                &lt;Route path=&quot;list&quot; element={&lt;UserList /&gt;} /&gt;</span>
<span class="line">                &lt;Route path=&quot;detail/:id&quot; element={&lt;UserDetail /&gt;} /&gt;</span>
<span class="line">            &lt;/Route&gt;</span>
<span class="line">            &lt;Route path=&quot;/profile&quot; element={&lt;Profile /&gt;} /&gt;</span>
<span class="line">            &lt;Route path=&quot;/post/:id&quot; element={&lt;Post /&gt;} /&gt;</span>
<span class="line">+           &lt;Route path=&quot;*&quot; element={&lt;Navigate to=&quot;/&quot; /&gt;} /&gt;</span>
<span class="line">        &lt;/Routes&gt;</span>
<span class="line">    &lt;/BrowserRouter&gt;</span>
<span class="line">    , document.getElementById(&#39;root&#39;));</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10-2-home-js" tabindex="-1"><a class="header-anchor" href="#_10-2-home-js"><span>10.2 Home.js</span></a></h3><p>src\\components\\Home.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React from &#39;react&#39;;</span>
<span class="line">+import { useNavigate } from &#39;../react-router-dom&#39;;</span>
<span class="line">function Home(props) {</span>
<span class="line">+   let navigate = useNavigate();</span>
<span class="line">+   function navigateTo() {</span>
<span class="line">+       navigate(&#39;/profile&#39;);</span>
<span class="line">+   };</span>
<span class="line">    return (</span>
<span class="line">        &lt;div&gt;</span>
<span class="line">            &lt;p&gt;Home&lt;/p&gt;</span>
<span class="line">+           &lt;button onClick={navigateTo}&gt;跳转到/profile&lt;/button&gt;</span>
<span class="line">        &lt;/div&gt;</span>
<span class="line">    )</span>
<span class="line">}</span>
<span class="line">export default Home;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10-3-react-router-index-js" tabindex="-1"><a class="header-anchor" href="#_10-3-react-router-index-js"><span>10.3 react-router\\index.js</span></a></h3><p>src\\react-router\\index.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> memo <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//导航上下文</span></span>
<span class="line"><span class="token keyword">const</span> NavigationContext <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//路径上下文</span></span>
<span class="line"><span class="token keyword">const</span> LocationContext <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//路由上下文</span></span>
<span class="line"><span class="token keyword">const</span> RouteContext <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token punctuation">{</span> NavigationContext<span class="token punctuation">,</span> LocationContext<span class="token punctuation">,</span> RouteContext <span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">Outlet</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token function">useOutlet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">useOutlet</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> <span class="token punctuation">{</span> outlet <span class="token punctuation">}</span> <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useContext</span><span class="token punctuation">(</span>RouteContext<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">return</span> outlet<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">useParams</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> <span class="token punctuation">{</span> matches <span class="token punctuation">}</span> <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useContext</span><span class="token punctuation">(</span>RouteContext<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">let</span> routeMatch <span class="token operator">=</span> matches<span class="token punctuation">[</span>matches<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">return</span> routeMatch <span class="token operator">?</span> routeMatch<span class="token punctuation">.</span>params <span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * </span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">children</span> 子组件</span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">location</span> 当前的路径对象</span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">navigator</span> history对象 go back forward push....</span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">Router</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> children<span class="token punctuation">,</span> location<span class="token punctuation">,</span> navigator <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> navigationContext <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useMemo</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> navigator <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>navigator<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">const</span> locationContext <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useMemo</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> location <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>location<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token operator">&lt;</span>NavigationContext<span class="token punctuation">.</span>Provider value<span class="token operator">=</span><span class="token punctuation">{</span>navigationContext<span class="token punctuation">}</span><span class="token operator">&gt;</span></span>
<span class="line">      <span class="token operator">&lt;</span>LocationContext<span class="token punctuation">.</span>Provider value<span class="token operator">=</span><span class="token punctuation">{</span>locationContext<span class="token punctuation">}</span> children<span class="token operator">=</span><span class="token punctuation">{</span>children<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">/</span>NavigationContext<span class="token punctuation">.</span>Provider<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">Routes</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> children <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token function">createRoutesFromChildren</span><span class="token punctuation">(</span>children<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token function">useRoutes</span><span class="token punctuation">(</span>routes<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">//</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">Route</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">useLocation</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> React<span class="token punctuation">.</span><span class="token function">useContext</span><span class="token punctuation">(</span>LocationContext<span class="token punctuation">)</span><span class="token punctuation">.</span>location<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * 把此路由配置数组渲染成真正的组件</span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">routes</span> 路由配置数组</span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">useRoutes</span><span class="token punctuation">(</span><span class="token parameter">routes</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">//当前的路径对象</span></span>
<span class="line">  <span class="token keyword">let</span> location <span class="token operator">=</span> <span class="token function">useLocation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token comment">//当前的路径字符串  /user/add</span></span>
<span class="line">  <span class="token keyword">let</span> pathname <span class="token operator">=</span> location<span class="token punctuation">.</span>pathname<span class="token punctuation">;</span></span>
<span class="line">  <span class="token comment">//用当前的地址栏中的路径和路由进行匹配</span></span>
<span class="line">  <span class="token keyword">let</span> matches <span class="token operator">=</span> <span class="token function">matchRoutes</span><span class="token punctuation">(</span>routes<span class="token punctuation">,</span> <span class="token punctuation">{</span> pathname <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token comment">//渲染匹配的结果</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token function">_renderMatches</span><span class="token punctuation">(</span>matches<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">_renderMatches</span><span class="token punctuation">(</span><span class="token parameter">matches</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>matches<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token comment">//渲染结果的时候是从右向左执行的</span></span>
<span class="line">  <span class="token comment">//matches=[{route:{element:User}},{route:{element:UserAdd]}}]</span></span>
<span class="line">  <span class="token keyword">return</span> matches<span class="token punctuation">.</span><span class="token function">reduceRight</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">outlet<span class="token punctuation">,</span> match<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">      <span class="token operator">&lt;</span>RouteContext<span class="token punctuation">.</span>Provider value<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> outlet<span class="token punctuation">,</span> <span class="token literal-property property">matches</span><span class="token operator">:</span> matches<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&gt;</span></span>
<span class="line">        <span class="token punctuation">{</span>match<span class="token punctuation">.</span>route<span class="token punctuation">.</span>element<span class="token punctuation">}</span></span>
<span class="line">      <span class="token operator">&lt;</span><span class="token operator">/</span>RouteContext<span class="token punctuation">.</span>Provider<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * 用当前路径和路由配置进行匹配,获取匹配的结果 </span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">routes</span> 路由配置</span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">location</span> 当前路径</span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">matchRoutes</span><span class="token punctuation">(</span><span class="token parameter">routes<span class="token punctuation">,</span> location</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">//获取路径名</span></span>
<span class="line">  <span class="token keyword">let</span> pathname <span class="token operator">=</span> location<span class="token punctuation">.</span>pathname<span class="token punctuation">;</span></span>
<span class="line">  <span class="token comment">//打平所有的分支路径</span></span>
<span class="line">  <span class="token keyword">let</span> branches <span class="token operator">=</span> <span class="token function">flattenRoutes</span><span class="token punctuation">(</span>routes<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token function">rankRouteBranches</span><span class="token punctuation">(</span>branches<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>branches<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token comment">//匹配的结果</span></span>
<span class="line">  <span class="token keyword">let</span> matches <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token comment">//按分支顺序依次进行匹配，如果匹配上了，直接退出循环，不再进行后续的匹配</span></span>
<span class="line">  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> matches <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> i <span class="token operator">&lt;</span> branches<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    matches <span class="token operator">=</span> <span class="token function">matchRouteBranch</span><span class="token punctuation">(</span>branches<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> pathname<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">return</span> matches<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">rankRouteBranches</span><span class="token punctuation">(</span><span class="token parameter">branches</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  branches<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">//如果分数不一样，按分数倒序排列 </span></span>
<span class="line">    <span class="token comment">//如果分数一样，只能比过索引</span></span>
<span class="line">    <span class="token keyword">return</span> a<span class="token punctuation">.</span>score <span class="token operator">!==</span> b<span class="token punctuation">.</span>score <span class="token operator">?</span> b<span class="token punctuation">.</span>score <span class="token operator">-</span> a<span class="token punctuation">.</span>score <span class="token operator">:</span> <span class="token function">compareIndexes</span><span class="token punctuation">(</span></span>
<span class="line">      a<span class="token punctuation">.</span>routesMeta<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">meta</span> <span class="token operator">=&gt;</span> meta<span class="token punctuation">.</span>childrenIndex<span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">      b<span class="token punctuation">.</span>routesMeta<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">meta</span> <span class="token operator">=&gt;</span> meta<span class="token punctuation">.</span>childrenIndex<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * /user/add   routesMeta=[userMeta,addMeta]=&gt;[2,0]</span>
<span class="line"> * /user/list  routesMeta = [userMeta,listMeta]=&gt;[2,1];</span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">compareIndexes</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">//如果级别数量相等，并且父亲都 一样，说是他们是兄弟 </span></span>
<span class="line">  <span class="token keyword">let</span> sibling <span class="token operator">=</span> a<span class="token punctuation">.</span>length <span class="token operator">===</span> b<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> a<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">every</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">n<span class="token punctuation">,</span> i</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> n <span class="token operator">===</span> b<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token comment">//如果是兄弟的话，那和比索引，索引越小级别越高，索引越大，级别越低</span></span>
<span class="line">  <span class="token comment">//如果不是兄弟，那就认为相等的</span></span>
<span class="line">  <span class="token keyword">return</span> sibling <span class="token operator">?</span> a<span class="token punctuation">[</span>a<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">-</span> b<span class="token punctuation">[</span>b<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * 用分支的路径匹配地址栏的路径名</span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">branch</span> </span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">pathname</span> 完整路径</span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">matchRouteBranch</span><span class="token punctuation">(</span><span class="token parameter">branch<span class="token punctuation">,</span> pathname</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> <span class="token punctuation">{</span> routesMeta <span class="token punctuation">}</span> <span class="token operator">=</span> branch<span class="token punctuation">;</span></span>
<span class="line">  <span class="token comment">//此分支路径参数对象  path =/:a/:b/:c  pathname=/vA/vB/vC</span></span>
<span class="line">  <span class="token keyword">let</span> matchesParams <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span><span class="token comment">//{a:vA,b:vB,c:vC}</span></span>
<span class="line">  <span class="token keyword">let</span> matchedPathname <span class="token operator">=</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">let</span> matches <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> routesMeta<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">//获取当前的meta</span></span>
<span class="line">    <span class="token keyword">let</span> meta <span class="token operator">=</span> routesMeta<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">//判断是否是最后一个meta</span></span>
<span class="line">    <span class="token keyword">let</span> end <span class="token operator">=</span> i <span class="token operator">===</span> routesMeta<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">//获取剩下的的将要匹配的路径</span></span>
<span class="line">    <span class="token keyword">let</span> remainingPathname <span class="token operator">=</span> matchedPathname <span class="token operator">===</span> <span class="token string">&quot;/&quot;</span> <span class="token operator">?</span> pathname <span class="token operator">:</span> pathname<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>matchedPathname<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">let</span> match <span class="token operator">=</span> <span class="token function">matchPath</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> meta<span class="token punctuation">.</span>relativePath<span class="token punctuation">,</span> end <span class="token punctuation">}</span><span class="token punctuation">,</span> remainingPathname<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">//如果没有匹配上，那就表示匹配失败了</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>match<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>matchesParams<span class="token punctuation">,</span> match<span class="token punctuation">.</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">let</span> route <span class="token operator">=</span> meta<span class="token punctuation">.</span>route<span class="token punctuation">;</span></span>
<span class="line">    matches<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">params</span><span class="token operator">:</span> matchesParams<span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">pathname</span><span class="token operator">:</span> <span class="token function">joinPaths</span><span class="token punctuation">(</span><span class="token punctuation">[</span>matchedPathname<span class="token punctuation">,</span> match<span class="token punctuation">.</span>pathname<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">pathnameBase</span><span class="token operator">:</span> <span class="token function">joinPaths</span><span class="token punctuation">(</span><span class="token punctuation">[</span>matchedPathname<span class="token punctuation">,</span> match<span class="token punctuation">.</span>pathnameBase<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">      route</span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>match<span class="token punctuation">.</span>pathnameBase <span class="token operator">!==</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      matchedPathname <span class="token operator">=</span> <span class="token function">joinPaths</span><span class="token punctuation">(</span><span class="token punctuation">[</span>matchedPathname<span class="token punctuation">,</span> match<span class="token punctuation">.</span>pathnameBase<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">return</span> matches<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * 匹配路径</span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">path</span> 路由的路径</span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">pathname</span> 当前地址栏中的路径</span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">matchPath</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> path<span class="token punctuation">,</span> end <span class="token punctuation">}</span><span class="token punctuation">,</span> pathname</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">//把路径编译 成正则</span></span>
<span class="line">  <span class="token keyword">let</span> <span class="token punctuation">[</span>matcher<span class="token punctuation">,</span> paramNames<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">compilePath</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span> end<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token comment">//匹配结果  </span></span>
<span class="line">  <span class="token keyword">let</span> match <span class="token operator">=</span> pathname<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>matcher<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token comment">//如果没有匹配上结束 </span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>match<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token comment">//获取匹配的路径</span></span>
<span class="line">  <span class="token keyword">let</span> matchedPathname <span class="token operator">=</span> match<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">//  /user//</span></span>
<span class="line">  <span class="token comment">//base就是基本路径 /user/  =&gt; /user  把结束的一个/或多个/去掉 </span></span>
<span class="line">  <span class="token keyword">let</span> pathnameBase <span class="token operator">=</span> matchedPathname<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(.)\\/+$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">&#39;$1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token comment">//拼出paramNames</span></span>
<span class="line">  <span class="token keyword">let</span> values <span class="token operator">=</span> match<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">let</span> captureGroups <span class="token operator">=</span> match<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">let</span> params <span class="token operator">=</span> paramNames<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">memo<span class="token punctuation">,</span> paramName<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">//  /user/*</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>paramName <span class="token operator">===</span> <span class="token string">&#39;*&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">let</span> splatValue <span class="token operator">=</span> captureGroups<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span><span class="token comment">//后面的内容  pathname=/user/add</span></span>
<span class="line">      <span class="token comment">//pathnameBase=matchedPathname=/user/add</span></span>
<span class="line">      <span class="token comment">//重写pathnameBase == /user/add  slice=/user/ /user  截取*之前的串作为后续匹配的父串 </span></span>
<span class="line">      pathnameBase <span class="token operator">=</span> matchedPathname<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> matchedPathname<span class="token punctuation">.</span>length <span class="token operator">-</span> splatValue<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(.)\\/+</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">&#39;$1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    memo<span class="token punctuation">[</span>paramName<span class="token punctuation">]</span> <span class="token operator">=</span> values<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> memo<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">    params<span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">pathname</span><span class="token operator">:</span> matchedPathname<span class="token punctuation">,</span><span class="token comment">//user/add</span></span>
<span class="line">    pathnameBase <span class="token comment">// /user</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">compilePath</span><span class="token punctuation">(</span><span class="token parameter">path<span class="token punctuation">,</span> end</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">//路径参数的参数名数组 /post/:id paramNames=[&quot;id&quot;]</span></span>
<span class="line">  <span class="token keyword">let</span> paramNames <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">let</span> regexpSource <span class="token operator">=</span> <span class="token string">&#39;^&#39;</span> <span class="token operator">+</span> path</span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\/*\\*?$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span> <span class="token comment">//的 /*或者//* 或者 * 全部转为空  /user/* /user* /user//* /user 在转正则的时候是等价的</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\\/*</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span><span class="token comment">//把开始多个/或者说没有/转成一个/   /user 不变 //user 变/user  user /user</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span></span>
<span class="line">      <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">:(\\w+)</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">_<span class="token punctuation">,</span> key</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">        paramNames<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token string">&quot;([^\\\\/]+?)&quot;</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">endsWith</span><span class="token punctuation">(</span><span class="token string">&#39;*&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    paramNames<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&#39;*&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// Already matched the initial /, just match the rest</span></span>
<span class="line">    regexpSource <span class="token operator">+=</span> path <span class="token operator">===</span> <span class="token string">&quot;*&quot;</span> <span class="token operator">||</span> path <span class="token operator">===</span> <span class="token string">&quot;/*&quot;</span> <span class="token operator">?</span> <span class="token string">&quot;(.*)$&quot;</span></span>
<span class="line">      <span class="token operator">:</span> <span class="token string">&quot;(?:\\\\/(.+)|\\\\/*)$&quot;</span><span class="token punctuation">;</span> <span class="token comment">// Don&#39;t include the / in params[&quot;*&quot;]</span></span>
<span class="line">    <span class="token comment">//regexpSource += &quot;(?:\\\\/(.+)|\\\\/*)$&quot;;</span></span>
<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">    regexpSource <span class="token operator">+=</span> end <span class="token operator">?</span> <span class="token string">&quot;\\\\/*$&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;(?:\\b|\\\\/|$)&quot;</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">let</span> matcher <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span>regexpSource<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">[</span>matcher<span class="token punctuation">,</span> paramNames<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">isSplat</span> <span class="token operator">=</span> <span class="token parameter">s</span> <span class="token operator">=&gt;</span> s <span class="token operator">===</span> <span class="token string">&#39;*&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> splatPenalty <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> indexRouteValue <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> paramRe <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^:\\w+$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> dynamicSegmentValue <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> emptySegmentValue <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> staticSegmentValue <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">computeScore</span><span class="token punctuation">(</span><span class="token parameter">path<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> segments <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// /user/add   =&gt; [&#39;user&#39;,&#39;add&#39;]</span></span>
<span class="line">  <span class="token keyword">let</span> initialScore <span class="token operator">=</span> segments<span class="token punctuation">.</span>length<span class="token punctuation">;</span><span class="token comment">//分片的长度就是基础分数</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>segments<span class="token punctuation">.</span><span class="token function">some</span><span class="token punctuation">(</span>isSplat<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">//  /user/* 有星说是通配，分数分降低</span></span>
<span class="line">    initialScore <span class="token operator">+=</span> splatPenalty<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>index<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    initialScore <span class="token operator">+=</span> indexRouteValue<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token comment">//1.过滤*</span></span>
<span class="line">  <span class="token comment">//</span></span>
<span class="line">  <span class="token keyword">return</span> segments<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">s</span> <span class="token operator">=&gt;</span> <span class="token operator">!</span><span class="token function">isSplat</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">score<span class="token punctuation">,</span> segment</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> score <span class="token operator">+</span> <span class="token punctuation">(</span>paramRe<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>segment<span class="token punctuation">)</span> <span class="token operator">?</span> dynamicSegmentValue <span class="token operator">:</span> segment <span class="token operator">===</span> <span class="token string">&#39;&#39;</span> <span class="token operator">?</span> emptySegmentValue <span class="token operator">:</span> staticSegmentValue<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span> initialScore<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * 打平所有的分支</span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">routes</span> 路由配置 </span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">flattenRoutes</span><span class="token punctuation">(</span>routes<span class="token punctuation">,</span> branches <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> parentsMeta <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> parentPath <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  routes<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">route<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">//定义一个路由元数据</span></span>
<span class="line">    <span class="token keyword">let</span> meta <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">relativePath</span><span class="token operator">:</span> route<span class="token punctuation">.</span>path <span class="token operator">||</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span><span class="token comment">//路径相对父路径的路径 UserAdd relativePath=add</span></span>
<span class="line">      route<span class="token punctuation">,</span> <span class="token comment">//路由对象</span></span>
<span class="line">      <span class="token literal-property property">childrenIndex</span><span class="token operator">:</span> index<span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token comment">//现在我们的routes其实只有一个元素,/user/*  parentPath=&#39;&#39;  relativePath=/user/*</span></span>
<span class="line">    <span class="token comment">//path=/user/*</span></span>
<span class="line">    <span class="token comment">//把父路径加上自己的相对路径构建成匹配的完整路径</span></span>
<span class="line">    <span class="token keyword">let</span> path <span class="token operator">=</span> <span class="token function">joinPaths</span><span class="token punctuation">(</span><span class="token punctuation">[</span>parentPath<span class="token punctuation">,</span> meta<span class="token punctuation">.</span>relativePath<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">//在父meta数组中添加自己这个meta</span></span>
<span class="line">    <span class="token keyword">let</span> routesMeta <span class="token operator">=</span> parentsMeta<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>meta<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">//如果有子路由的话，递归添加到 branches分支数组中</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>route<span class="token punctuation">.</span>children <span class="token operator">&amp;&amp;</span> route<span class="token punctuation">.</span>children<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">flattenRoutes</span><span class="token punctuation">(</span>route<span class="token punctuation">.</span>children<span class="token punctuation">,</span> branches<span class="token punctuation">,</span> routesMeta<span class="token punctuation">,</span> path<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    branches<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      path<span class="token punctuation">,</span></span>
<span class="line">      routesMeta<span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">score</span><span class="token operator">:</span> <span class="token function">computeScore</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span> route<span class="token punctuation">.</span>index<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">return</span> branches<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">joinPaths</span><span class="token punctuation">(</span><span class="token parameter">paths</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// [&#39;/user/*/&#39;,&#39;/add&#39;]=&gt; /user/*/add</span></span>
<span class="line">  <span class="token keyword">return</span> paths<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\/\\/+</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">createRoutesFromChildren</span><span class="token punctuation">(</span><span class="token parameter">children</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">  React<span class="token punctuation">.</span>Children<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>children<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">element</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> route <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">path</span><span class="token operator">:</span> element<span class="token punctuation">.</span>props<span class="token punctuation">.</span>path<span class="token punctuation">,</span><span class="token comment">//       /user 此路由对应的路径</span></span>
<span class="line">      <span class="token literal-property property">element</span><span class="token operator">:</span> element<span class="token punctuation">.</span>props<span class="token punctuation">.</span>element <span class="token comment">// &lt;User/&gt; 此路由对应的元素</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>element<span class="token punctuation">.</span>props<span class="token punctuation">.</span>children<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      route<span class="token punctuation">.</span>children <span class="token operator">=</span> <span class="token function">createRoutesFromChildren</span><span class="token punctuation">(</span>element<span class="token punctuation">.</span>props<span class="token punctuation">.</span>children<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    routes<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>route<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">return</span> routes<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">useNavigate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// navigator history</span></span>
<span class="line">  <span class="token comment">// Navigate动词表示导航 或者叫跳转</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token punctuation">{</span> navigator <span class="token punctuation">}</span> <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useContext</span><span class="token punctuation">(</span>NavigationContext<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">const</span> navigate <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useCallback</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">to</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> navigator<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>to<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>navigator<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">return</span> navigate<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">+</span><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">Navigate</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> to <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>  <span class="token keyword">let</span> navigate <span class="token operator">=</span> <span class="token function">useNavigate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>  React<span class="token punctuation">.</span><span class="token function">useLayoutEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>    <span class="token function">navigate</span><span class="token punctuation">(</span>to<span class="token punctuation">)</span></span>
<span class="line"><span class="token operator">+</span>  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>  <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_11-受保护路由" tabindex="-1"><a class="header-anchor" href="#_11-受保护路由"><span>11. 受保护路由</span></a></h2><h3 id="_11-1-src-index-js" tabindex="-1"><a class="header-anchor" href="#_11-1-src-index-js"><span>11.1 src\\index.js</span></a></h3><p>src\\index.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React from &#39;react&#39;;</span>
<span class="line">import ReactDOM from &#39;react-dom&#39;;</span>
<span class="line">import { BrowserRouter, Routes, Route, NavLink, Navigate } from &#39;./react-router-dom&#39;;</span>
<span class="line">import Home from &#39;./components/Home&#39;;</span>
<span class="line">import User from &#39;./components/User&#39;;</span>
<span class="line">import UserAdd from &#39;./components/UserAdd&#39;;</span>
<span class="line">import UserList from &#39;./components/UserList&#39;;</span>
<span class="line">import UserDetail from &#39;./components/UserDetail&#39;;</span>
<span class="line">import Profile from &#39;./components/Profile&#39;;</span>
<span class="line">import Post from &#39;./components/Post&#39;;</span>
<span class="line">+import Protected from &#39;./components/Protected&#39;;</span>
<span class="line">+import Login from &#39;./components/Login&#39;;</span>
<span class="line">const activeStyle = { backgroundColor: &#39;green&#39; };</span>
<span class="line">const activeClassName = &#39;active&#39;;</span>
<span class="line">const activeNavProps = {</span>
<span class="line">  style: ({ isActive }) =&gt; isActive ? activeStyle : {},</span>
<span class="line">  className: ({ isActive }) =&gt; isActive ? activeClassName : &#39;&#39;</span>
<span class="line">}</span>
<span class="line">ReactDOM.render(</span>
<span class="line">    &lt;BrowserRouter&gt;</span>
<span class="line">        &lt;ul&gt;</span>
<span class="line">          &lt;li&gt;&lt;NavLink end={true} to=&quot;/&quot; {...activeNavProps}&gt;首页&lt;/NavLink&gt;&lt;/li&gt;</span>
<span class="line">          &lt;li&gt;&lt;NavLink to=&quot;/user/list&quot; {...activeNavProps}&gt;用户管理&lt;/NavLink&gt;&lt;/li&gt;</span>
<span class="line">          &lt;li&gt;&lt;NavLink to=&quot;/profile&quot; {...activeNavProps}&gt;个人中心&lt;/NavLink&gt;&lt;/li&gt;</span>
<span class="line">        &lt;/ul&gt;</span>
<span class="line">        &lt;Routes&gt;</span>
<span class="line">            &lt;Route path=&quot;/&quot; element={&lt;Home /&gt;} /&gt;</span>
<span class="line">            &lt;Route path=&quot;/user/*&quot; element={&lt;User /&gt;} &gt;</span>
<span class="line">                &lt;Route path=&quot;add&quot; element={&lt;UserAdd /&gt;} /&gt;</span>
<span class="line">                &lt;Route path=&quot;list&quot; element={&lt;UserList /&gt;} /&gt;</span>
<span class="line">                &lt;Route path=&quot;detail/:id&quot; element={&lt;UserDetail /&gt;} /&gt;</span>
<span class="line">            &lt;/Route&gt;</span>
<span class="line">            &lt;Route path=&quot;/post/:id&quot; element={&lt;Post /&gt;} /&gt;</span>
<span class="line">+           &lt;Route path=&quot;/profile&quot; element={&lt;Protected component={Profile} path=&quot;/profile&quot;/&gt;} /&gt;</span>
<span class="line">+           &lt;Route path=&quot;/login&quot; element={&lt;Login /&gt;} /&gt;</span>
<span class="line">            &lt;Route path=&quot;*&quot; element={&lt;Navigate to=&quot;/&quot; /&gt;} /&gt;</span>
<span class="line">        &lt;/Routes&gt;</span>
<span class="line">    &lt;/BrowserRouter&gt;</span>
<span class="line">    , document.getElementById(&#39;root&#39;));</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_11-2-login-js" tabindex="-1"><a class="header-anchor" href="#_11-2-login-js"><span>11.2 Login.js</span></a></h3><p>src\\components\\Login.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useNavigate<span class="token punctuation">,</span> useLocation <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../react-router-dom&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">Login</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> navigation <span class="token operator">=</span> <span class="token function">useNavigate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">let</span> location <span class="token operator">=</span> <span class="token function">useLocation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">const</span> <span class="token function-variable function">login</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">        localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">&#39;login&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;true&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">let</span> to <span class="token operator">=</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>location<span class="token punctuation">.</span>state<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            to <span class="token operator">=</span> location<span class="token punctuation">.</span>state<span class="token punctuation">.</span>from <span class="token operator">||</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token function">navigation</span><span class="token punctuation">(</span>to<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">        <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>login<span class="token punctuation">}</span><span class="token operator">&gt;</span>登录<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> Login<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_11-3-protected-js" tabindex="-1"><a class="header-anchor" href="#_11-3-protected-js"><span>11.3 Protected.js</span></a></h3><p>src\\components\\Protected.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Navigate <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../react-router-dom&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">Protected</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> <span class="token punctuation">{</span> <span class="token literal-property property">component</span><span class="token operator">:</span> RouteComponent<span class="token punctuation">,</span> path <span class="token punctuation">}</span> <span class="token operator">=</span> props<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">&#39;login&#39;</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token operator">&lt;</span>RouteComponent <span class="token operator">/</span><span class="token operator">&gt;</span> <span class="token operator">:</span></span>
<span class="line">        <span class="token operator">&lt;</span>Navigate to<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">pathname</span><span class="token operator">:</span> <span class="token string">&#39;/login&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">from</span><span class="token operator">:</span> path <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> Protected<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_12-配置式路由和懒加载" tabindex="-1"><a class="header-anchor" href="#_12-配置式路由和懒加载"><span>12. 配置式路由和懒加载</span></a></h2><h3 id="_12-1-src-index-js" tabindex="-1"><a class="header-anchor" href="#_12-1-src-index-js"><span>12.1 src\\index.js</span></a></h3><p>src\\index.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React from &#39;react&#39;;</span>
<span class="line">import ReactDOM from &#39;react-dom&#39;;</span>
<span class="line">import { BrowserRouter, Routes, Route, NavLink, Navigate, useRoutes } from &#39;./react-router-dom&#39;;</span>
<span class="line">const activeStyle = { backgroundColor: &#39;green&#39; };</span>
<span class="line">const activeClassName = &#39;active&#39;;</span>
<span class="line">const activeNavProps = {</span>
<span class="line">  style: ({ isActive }) =&gt; isActive ? activeStyle : {},</span>
<span class="line">  className: ({ isActive }) =&gt; isActive ? activeClassName : &#39;&#39;</span>
<span class="line">}</span>
<span class="line">+import routesConfig from &#39;./routesConfig&#39;;</span>
<span class="line">+const LazyPost = React.lazy(() =&gt; import(&#39;./components/Post&#39;));</span>
<span class="line">+function App() {</span>
<span class="line">+    let [routes, setRoutes] = React.useState(routesConfig);</span>
<span class="line">+    const addRoute = () =&gt; {</span>
<span class="line">+        setRoutes([...routes, {</span>
<span class="line">+            path: &#39;/foo&#39;, element: (</span>
<span class="line">+                &lt;React.Suspense fallback={&lt;div&gt;loading...&lt;/div&gt;}&gt;</span>
<span class="line">+                    &lt;LazyPost /&gt;</span>
<span class="line">+                &lt;/React.Suspense&gt;</span>
<span class="line">+            )</span>
<span class="line">+        }]);</span>
<span class="line">+    }</span>
<span class="line">+    return (</span>
<span class="line">+        &lt;div&gt;</span>
<span class="line">+            {useRoutes(routes)}</span>
<span class="line">+            &lt;button onClick={addRoute}&gt;addRoute&lt;/button&gt;</span>
<span class="line">+        &lt;/div&gt;</span>
<span class="line">+    )</span>
<span class="line">+}</span>
<span class="line">ReactDOM.render(</span>
<span class="line">    &lt;BrowserRouter&gt;</span>
<span class="line">        &lt;ul&gt;</span>
<span class="line">            &lt;li&gt;&lt;NavLink end={true} to=&quot;/&quot; {...activeNavProps}&gt;首页&lt;/NavLink&gt;&lt;/li&gt;</span>
<span class="line">            &lt;li&gt;&lt;NavLink to=&quot;/user/list&quot; {...activeNavProps}&gt;用户管理&lt;/NavLink&gt;&lt;/li&gt;</span>
<span class="line">            &lt;li&gt;&lt;NavLink to=&quot;/profile&quot; {...activeNavProps}&gt;个人中心&lt;/NavLink&gt;&lt;/li&gt;</span>
<span class="line">            &lt;li&gt;&lt;NavLink to=&quot;/foo&quot; {...activeNavProps}&gt;foo&lt;/NavLink&gt;&lt;/li&gt;</span>
<span class="line">        &lt;/ul&gt;</span>
<span class="line">+       &lt;App /&gt;</span>
<span class="line">    &lt;/BrowserRouter&gt;</span>
<span class="line">    , document.getElementById(&#39;root&#39;));</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_12-2-src-routesconfig-js" tabindex="-1"><a class="header-anchor" href="#_12-2-src-routesconfig-js"><span>12.2 src\\routesConfig.js</span></a></h3><p>src\\routesConfig.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> Home <span class="token keyword">from</span> <span class="token string">&#39;./components/Home&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> User <span class="token keyword">from</span> <span class="token string">&#39;./components/User&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> Profile <span class="token keyword">from</span> <span class="token string">&#39;./components/Profile&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> UserAdd <span class="token keyword">from</span> <span class="token string">&#39;./components/UserAdd&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> UserDetail <span class="token keyword">from</span> <span class="token string">&#39;./components/UserDetail&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> UserList <span class="token keyword">from</span> <span class="token string">&#39;./components/UserList&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> NotFound <span class="token keyword">from</span> <span class="token string">&#39;./components/NotFound&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> Login <span class="token keyword">from</span> <span class="token string">&#39;./components/Login&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> Protected <span class="token keyword">from</span> <span class="token string">&#39;./components/Protected&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">element</span><span class="token operator">:</span> <span class="token operator">&lt;</span>Home <span class="token operator">/</span><span class="token operator">&gt;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/profile&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">element</span><span class="token operator">:</span> <span class="token operator">&lt;</span>Profile <span class="token operator">/</span><span class="token operator">&gt;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;user&#39;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">element</span><span class="token operator">:</span> <span class="token operator">&lt;</span>User <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">            <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;add&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">element</span><span class="token operator">:</span> <span class="token operator">&lt;</span>UserAdd <span class="token operator">/</span><span class="token operator">&gt;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;list&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">element</span><span class="token operator">:</span> <span class="token operator">&lt;</span>UserList <span class="token operator">/</span><span class="token operator">&gt;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;detail/:id&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">element</span><span class="token operator">:</span> <span class="token operator">&lt;</span>UserDetail <span class="token operator">/</span><span class="token operator">&gt;</span> <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/profile&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">element</span><span class="token operator">:</span> <span class="token operator">&lt;</span>Protected component<span class="token operator">=</span><span class="token punctuation">{</span>Profile<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/login&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">element</span><span class="token operator">:</span> <span class="token operator">&lt;</span>Login <span class="token operator">/</span><span class="token operator">&gt;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;*&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">element</span><span class="token operator">:</span> <span class="token operator">&lt;</span>NotFound <span class="token operator">/</span><span class="token operator">&gt;</span> <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> routes<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_12-3-notfound-js" tabindex="-1"><a class="header-anchor" href="#_12-3-notfound-js"><span>12.3 NotFound.js</span></a></h3><p>src\\components\\NotFound.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">NotFound</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">        <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>NotFound<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> NotFound<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,106))])}const h=i(r,[["render",v]]),g=JSON.parse('{"path":"/strong/106.13.router-6.html","title":"","lang":"en-US","frontmatter":{},"git":{"updatedTime":1681290319000,"contributors":[{"name":"yutao","username":"yutao","email":"642231346@qq.com","commits":1,"url":"https://github.com/yutao"}],"changelog":[{"hash":"f5ab8c9d34991ec274f7f652439afe5b2afb6147","time":1681290319000,"email":"642231346@qq.com","author":"yutao","message":"modify"}]},"filePathRelative":"strong/106.13.router-6.md"}');export{h as comp,g as data};
