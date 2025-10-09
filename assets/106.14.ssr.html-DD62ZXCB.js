import{_ as n,c as a,a as e,o as p}from"./app-CD1YpnS1.js";const t={};function l(i,s){return p(),a("div",null,[...s[0]||(s[0]=[e(`<h2 id="_1-渲染模式" tabindex="-1"><a class="header-anchor" href="#_1-渲染模式"><span>1.渲染模式</span></a></h2><h3 id="_1-1-服务器渲染" tabindex="-1"><a class="header-anchor" href="#_1-1-服务器渲染"><span>1.1 服务器渲染</span></a></h3><ul><li>页面上的内容是由服务器生产的</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">npm install express --save</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>render\\client.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">let</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string"></span>
<span class="line">        &lt;html&gt;</span>
<span class="line">          &lt;body&gt;</span>
<span class="line">            &lt;div id=&quot;root&quot;&gt;hello&lt;/div&gt;</span>
<span class="line">          &lt;/body&gt;</span>
<span class="line">        &lt;/html&gt;</span>
<span class="line">    </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">8080</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-客户端渲染" tabindex="-1"><a class="header-anchor" href="#_1-2-客户端渲染"><span>1.2 客户端渲染</span></a></h3><ul><li>页面上的内容由于浏览器运行JS脚本而渲染到页面上的 <ul><li>浏览器访问服务器</li><li>服务器返回一个空的HTML页面，里面有一个JS资源链接，比如<code>client</code></li><li>浏览器下载JS代码并在浏览器中运行</li><li>内容呈现在页面上</li></ul></li></ul><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">let</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string"></span>
<span class="line">        &lt;html&gt;</span>
<span class="line">          &lt;body&gt;</span>
<span class="line">            &lt;div id=&quot;root&quot;&gt;&lt;/div&gt;</span>
<span class="line">            &lt;script&gt;root.innerHTML = &#39;hello&#39;&lt;/script&gt;</span>
<span class="line">          &lt;/body&gt;</span>
<span class="line">        &lt;/html&gt;</span>
<span class="line">    </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">8090</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3-为什么ssr" tabindex="-1"><a class="header-anchor" href="#_1-3-为什么ssr"><span>1.3 为什么SSR</span></a></h3><ul><li>首屏等待 在客户端渲染的模式下，所有的数据请求和DOM渲染都在浏览器端完成,所以第一次访问页面时，可能会出现白屏，而服务器端渲染会在服务器端进行数据请求和DOM渲染，浏览器收到的完整的内容，可以渲染页面</li><li>SEO SPA对搜索引擎不够友好</li></ul><h2 id="_2-ssr-spa同构" tabindex="-1"><a class="header-anchor" href="#_2-ssr-spa同构"><span>2.SSR+SPA同构</span></a></h2><ul><li>第一次访问页面是SSR，后面的访问是SPA，而且支持SEO</li><li>客户端和服务器端同构可以实现(尽可能复用代码)</li><li>工作流程 <ul><li>服务器端运行React代码渲染出HTML字符串</li><li>服务器把渲染出的HTML页面发送给了浏览器</li><li>浏览器接受到HTML会渲染到页面上</li><li>浏览器发现页面引用的<code>client.js</code>文件会去下载</li><li>浏览器下载得到的<code>client.js</code>文件并在浏览器端执行</li><li>浏览器中的代码接管了页面的所有内容，后面和客户端渲染是一样的</li></ul></li></ul><h3 id="_2-1-安装" tabindex="-1"><a class="header-anchor" href="#_2-1-安装"><span>2.1 安装</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">npm install react react-dom --save</span>
<span class="line">npm install webpack webpack-cli source-map-loader babel-loader @babel/preset-env @babel/preset-react webpack-merge webpack-node-externals npm-run-all nodemon  --save-dev</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-webpack-config-base-js" tabindex="-1"><a class="header-anchor" href="#_2-2-webpack-config-base-js"><span>2.2 webpack.config.base.js</span></a></h3><p>webpack.config.base.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;development&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token string-property property">&#39;@&#39;</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;src&#39;</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">                <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token literal-property property">enforce</span><span class="token operator">:</span> <span class="token string">&#39;pre&#39;</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;source-map-loader&#39;</span><span class="token punctuation">]</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">                <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;babel-loader&#39;</span><span class="token punctuation">,</span></span>
<span class="line">                    <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">                        <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">                            <span class="token string">&quot;@babel/preset-env&quot;</span><span class="token punctuation">,</span></span>
<span class="line">                            <span class="token string">&quot;@babel/preset-react&quot;</span></span>
<span class="line">                        <span class="token punctuation">]</span></span>
<span class="line">                    <span class="token punctuation">}</span></span>
<span class="line">                <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-webpack-config-client-js" tabindex="-1"><a class="header-anchor" href="#_2-3-webpack-config-client-js"><span>2.3 webpack.config.client.js</span></a></h3><p>webpack.config.client.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span> merge <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;webpack-merge&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> base <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./webpack.config.base&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token function">merge</span><span class="token punctuation">(</span>base<span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&#39;web&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&#39;./src/client/index.js&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;public&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;client.js&#39;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> config<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-webpack-config-server-js" tabindex="-1"><a class="header-anchor" href="#_2-4-webpack-config-server-js"><span>2.4 webpack.config.server.js</span></a></h3><p>webpack.config.server.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span> merge <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;webpack-merge&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> webpackNodeExternals <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;webpack-node-externals&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> base <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./webpack.config.base&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">merge</span><span class="token punctuation">(</span>base<span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&#39;node&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&#39;./src/server/index.js&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;build&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;server.js&#39;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">externals</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">webpackNodeExternals</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-5-counter-js" tabindex="-1"><a class="header-anchor" href="#_2-5-counter-js"><span>2.5 Counter.js</span></a></h3><p>src\\routes\\Counter.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">Counter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> <span class="token punctuation">[</span>number<span class="token punctuation">,</span> setNumber<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">        <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span></span>
<span class="line">            <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span><span class="token punctuation">{</span>number<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span></span>
<span class="line">            <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">setNumber</span><span class="token punctuation">(</span>number <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token operator">+</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span></span>
<span class="line">        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> Counter<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-6-src-server-index-js" tabindex="-1"><a class="header-anchor" href="#_2-6-src-server-index-js"><span>2.6 src\\server\\index.js</span></a></h3><p>src\\server\\index.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> renderToString <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-dom/server&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> Counter <span class="token keyword">from</span> <span class="token string">&#39;../routes/Counter&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>express<span class="token punctuation">.</span><span class="token function">static</span><span class="token punctuation">(</span><span class="token string">&#39;public&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;*&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> html <span class="token operator">=</span> <span class="token function">renderToString</span><span class="token punctuation">(</span></span>
<span class="line">    <span class="token operator">&lt;</span>Counter <span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line">  <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string"></span>
<span class="line">      &lt;html&gt;</span>
<span class="line">        &lt;head&gt;</span>
<span class="line">          &lt;meta charset=&quot;UTF-8&quot;&gt;</span>
<span class="line">          &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;</span>
<span class="line">          &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;ie=edge&quot;&gt;</span>
<span class="line">          &lt;title&gt;ssr&lt;/title&gt;</span>
<span class="line">        &lt;/head&gt;</span>
<span class="line">        &lt;body&gt;</span>
<span class="line">        &lt;div id=&quot;root&quot;&gt;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>html<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/div&gt;</span>
<span class="line">        &lt;script src=&quot;/client.js&quot;&gt;&lt;/script&gt;</span>
<span class="line">      &lt;/body&gt;</span>
<span class="line">      &lt;/html&gt;</span>
<span class="line">  </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;server started on 3000&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-7-src-client-index-js" tabindex="-1"><a class="header-anchor" href="#_2-7-src-client-index-js"><span>2.7 src\\client\\index.js</span></a></h3><p>src\\client\\index.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> hydrateRoot <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-dom/client&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> Counter <span class="token keyword">from</span> <span class="token string">&#39;../routes/Counter&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> root <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">hydrateRoot</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> <span class="token operator">&lt;</span>Counter <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-8-package-json" tabindex="-1"><a class="header-anchor" href="#_2-8-package-json"><span>2.8 package.json</span></a></h3><p>package.json</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">&quot;start&quot;</span><span class="token operator">:</span> <span class="token string">&quot;nodemon build/server.js&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;npm-run-all --parallel build:**&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">&quot;build:server&quot;</span><span class="token operator">:</span> <span class="token string">&quot;webpack --config webpack.config.server.js --watch&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">&quot;build:client&quot;</span><span class="token operator">:</span> <span class="token string">&quot;webpack --config webpack.config.client.js --watch&quot;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-使用路由" tabindex="-1"><a class="header-anchor" href="#_3-使用路由"><span>3.使用路由</span></a></h2><h3 id="_3-1-安装" tabindex="-1"><a class="header-anchor" href="#_3-1-安装"><span>3.1 安装</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">npm install react-router-dom --save</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_3-2-客户端路由" tabindex="-1"><a class="header-anchor" href="#_3-2-客户端路由"><span>3.2 客户端路由</span></a></h3><ul><li>客户端请求服务器</li><li>服务器返回HTML给浏览器，浏览器渲染显示页面</li><li>浏览器发现需要外链JS资源，加载JS资源</li><li>加载好的JS资源在浏览器端执行</li><li>JS中的React代码开始实现路由功能</li><li>路由代码首先获取地址栏中的地址，然后根据不同的地址根据路由配置渲染对应内容</li></ul><h3 id="_3-3-routesconfig-js" tabindex="-1"><a class="header-anchor" href="#_3-3-routesconfig-js"><span>3.3 routesConfig.js</span></a></h3><p>src\\routesConfig.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> Home <span class="token keyword">from</span> <span class="token string">&#39;./routes/Home&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> Counter <span class="token keyword">from</span> <span class="token string">&#39;./routes/Counter&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">element</span><span class="token operator">:</span> <span class="token operator">&lt;</span>Home <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">index</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/counter&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">element</span><span class="token operator">:</span> <span class="token operator">&lt;</span>Counter <span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-4-app-js" tabindex="-1"><a class="header-anchor" href="#_3-4-app-js"><span>3.4 App.js</span></a></h3><p>src\\App.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useRoutes <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-router-dom&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> routesConfig <span class="token keyword">from</span> <span class="token string">&#39;./routesConfig&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token function">useRoutes</span><span class="token punctuation">(</span>routesConfig<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-5-server-index-js" tabindex="-1"><a class="header-anchor" href="#_3-5-server-index-js"><span>3.5 server\\index.js</span></a></h3><p>src\\server\\index.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React from &#39;react&#39;;</span>
<span class="line">import { renderToString } from &#39;react-dom/server&#39;;</span>
<span class="line">+import routesConfig from &#39;../routesConfig&#39;;</span>
<span class="line">+import { StaticRouter } from &quot;react-router-dom/server&quot;;</span>
<span class="line">+import { matchRoutes } from &#39;react-router-dom&#39;;</span>
<span class="line">+import App from &#39;../App&#39;;</span>
<span class="line">const express = require(&#39;express&#39;);</span>
<span class="line">const app = express();</span>
<span class="line">app.use(express.static(&#39;public&#39;));</span>
<span class="line">app.get(&#39;*&#39;, (req, res) =&gt; {</span>
<span class="line">   const html = renderToString(</span>
<span class="line">+     &lt;StaticRouter location={req.url}&gt;</span>
<span class="line">+       &lt;App /&gt;</span>
<span class="line">     &lt;/StaticRouter&gt;</span>
<span class="line">   );</span>
<span class="line">    res.send(\`</span>
<span class="line">      &lt;html&gt;</span>
<span class="line">        &lt;head&gt;</span>
<span class="line">          &lt;meta charset=&quot;UTF-8&quot;&gt;</span>
<span class="line">          &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;</span>
<span class="line">          &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;ie=edge&quot;&gt;</span>
<span class="line">          &lt;title&gt;ssr&lt;/title&gt;</span>
<span class="line">        &lt;/head&gt;</span>
<span class="line">        &lt;body&gt;</span>
<span class="line">        &lt;div id=&quot;root&quot;&gt;\${html}&lt;/div&gt;</span>
<span class="line">        &lt;script src=&quot;/client.js&quot;&gt;&lt;/script&gt;</span>
<span class="line">      &lt;/body&gt;</span>
<span class="line">      &lt;/html&gt;</span>
<span class="line">  \`);</span>
<span class="line">});</span>
<span class="line">app.listen(3000, () =&gt; console.log(&quot;server started on 3000&quot;));</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-6-src-client-index-js" tabindex="-1"><a class="header-anchor" href="#_3-6-src-client-index-js"><span>3.6 src\\client\\index.js</span></a></h3><p>src\\client\\index.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React from &#39;react&#39;;</span>
<span class="line">import { hydrateRoot } from &#39;react-dom/client&#39;;</span>
<span class="line">+import { BrowserRouter } from &#39;react-router-dom&#39;;</span>
<span class="line">+import App from &#39;../App&#39;;</span>
<span class="line">const root = document.getElementById(&#39;root&#39;);</span>
<span class="line">hydrateRoot(root,</span>
<span class="line">+  &lt;BrowserRouter&gt;</span>
<span class="line">+    &lt;App /&gt;</span>
<span class="line">+  &lt;/BrowserRouter&gt;);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-7-src-routes-home-js" tabindex="-1"><a class="header-anchor" href="#_3-7-src-routes-home-js"><span>3.7 src\\routes\\Home.js</span></a></h3><p>src\\routes\\Home.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">Home</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span></span>
<span class="line">      Home</span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> Home<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-头部导航" tabindex="-1"><a class="header-anchor" href="#_4-头部导航"><span>4. 头部导航</span></a></h2><h3 id="_4-1-header-index-js" tabindex="-1"><a class="header-anchor" href="#_4-1-header-index-js"><span>4.1 Header\\index.js</span></a></h3><p>src\\components\\Header\\index.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Link <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-router-dom&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">Header</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token operator">&lt;</span>ul<span class="token operator">&gt;</span></span>
<span class="line">      <span class="token operator">&lt;</span>li<span class="token operator">&gt;</span><span class="token operator">&lt;</span>Link to<span class="token operator">=</span><span class="token string">&quot;/&quot;</span><span class="token operator">&gt;</span>Home<span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span></span>
<span class="line">      <span class="token operator">&lt;</span>li<span class="token operator">&gt;</span><span class="token operator">&lt;</span>Link to<span class="token operator">=</span><span class="token string">&quot;/counter&quot;</span><span class="token operator">&gt;</span>Counter<span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> Header</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-app-js" tabindex="-1"><a class="header-anchor" href="#_4-2-app-js"><span>4.2 App.js</span></a></h3><p>src\\App.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React from &#39;react&#39;;</span>
<span class="line">import { useRoutes } from &#39;react-router-dom&#39;;</span>
<span class="line">import routesConfig from &#39;./routesConfig&#39;;</span>
<span class="line">+import Header from &#39;./components/Header&#39;;</span>
<span class="line">function App() {</span>
<span class="line">  return (</span>
<span class="line">+   &lt;&gt;</span>
<span class="line">+    &lt;Header /&gt;</span>
<span class="line">     {useRoutes(routesConfig)}</span>
<span class="line">+   &lt;/&gt;</span>
<span class="line">  )</span>
<span class="line">}</span>
<span class="line">export default App;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-集成redux" tabindex="-1"><a class="header-anchor" href="#_5-集成redux"><span>5. 集成redux</span></a></h2><h3 id="_5-1-安装" tabindex="-1"><a class="header-anchor" href="#_5-1-安装"><span>5.1 安装</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">npm install redux react-redux redux-thunk redux-promise redux-logger --save</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_5-2-store-index-js" tabindex="-1"><a class="header-anchor" href="#_5-2-store-index-js"><span>5.2 store\\index.js</span></a></h3><p>src\\store\\index.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createStore<span class="token punctuation">,</span> combineReducers<span class="token punctuation">,</span> applyMiddleware <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;redux&#39;</span></span>
<span class="line"><span class="token keyword">import</span> thunk <span class="token keyword">from</span> <span class="token string">&#39;redux-thunk&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> promise <span class="token keyword">from</span> <span class="token string">&#39;redux-promise&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> logger <span class="token keyword">from</span> <span class="token string">&#39;redux-logger&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> counter <span class="token keyword">from</span> <span class="token string">&#39;./reducers/counter&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">getStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> reducers <span class="token operator">=</span> <span class="token punctuation">{</span> counter <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">const</span> combinedReducer <span class="token operator">=</span> <span class="token function">combineReducers</span><span class="token punctuation">(</span>reducers<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">applyMiddleware</span><span class="token punctuation">(</span>thunk<span class="token punctuation">,</span> promise<span class="token punctuation">,</span>logger<span class="token punctuation">)</span><span class="token punctuation">(</span>createStore<span class="token punctuation">)</span><span class="token punctuation">(</span>combinedReducer<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> store</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-3-action-types-js" tabindex="-1"><a class="header-anchor" href="#_5-3-action-types-js"><span>5.3 action-types.js</span></a></h3><p>src\\store\\action-types.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">ADD</span> <span class="token operator">=</span> <span class="token string">&#39;ADD&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_5-4-counter-js" tabindex="-1"><a class="header-anchor" href="#_5-4-counter-js"><span>5.4 counter.js</span></a></h3><p>src\\store\\reducers\\counter.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">ADD</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../action-types&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> initialState <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">number</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">counter</span><span class="token punctuation">(</span><span class="token parameter">state <span class="token operator">=</span> initialState<span class="token punctuation">,</span> action</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">switch</span> <span class="token punctuation">(</span>action<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">case</span> <span class="token constant">ADD</span><span class="token operator">:</span></span>
<span class="line">      <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">number</span><span class="token operator">:</span> state<span class="token punctuation">.</span>number <span class="token operator">+</span> <span class="token number">1</span> <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">default</span><span class="token operator">:</span></span>
<span class="line">      <span class="token keyword">return</span> state<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> counter<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-5-counter-js" tabindex="-1"><a class="header-anchor" href="#_5-5-counter-js"><span>5.5 counter.js</span></a></h3><p>src\\store\\actionCreators\\counter.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">ADD</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/store/action-types&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> actionCreators <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token constant">ADD</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> actionCreators<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-6-src-routes-counter-js" tabindex="-1"><a class="header-anchor" href="#_5-6-src-routes-counter-js"><span>5.6 src\\routes\\Counter.js</span></a></h3><p>src\\routes\\Counter.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React from &#39;react&#39;;</span>
<span class="line">+import { useDispatch, useSelector } from &#39;react-redux&#39;;</span>
<span class="line">+import actionCreators from &#39;@/store/actionCreators/counter&#39;;</span>
<span class="line">function Counter() {</span>
<span class="line">+    const number = useSelector(state =&gt; state.counter.number);</span>
<span class="line">+    const dispatch = useDispatch();</span>
<span class="line">    return (</span>
<span class="line">        &lt;div&gt;</span>
<span class="line">            &lt;p&gt;{number}&lt;/p&gt;</span>
<span class="line">+           &lt;button onClick={() =&gt; dispatch(actionCreators.add())}&gt;+&lt;/button&gt;</span>
<span class="line">        &lt;/div&gt;</span>
<span class="line">    )</span>
<span class="line">}</span>
<span class="line">export default Counter;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-7-src-app-js" tabindex="-1"><a class="header-anchor" href="#_5-7-src-app-js"><span>5.7 src\\App.js</span></a></h3><p>src\\App.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React from &#39;react&#39;;</span>
<span class="line">import { useRoutes } from &#39;react-router-dom&#39;;</span>
<span class="line">import routesConfig from &#39;./routesConfig&#39;;</span>
<span class="line">import Header from &#39;./components/Header&#39;;</span>
<span class="line">+import { Provider } from &#39;react-redux&#39;;</span>
<span class="line">+import { getStore } from &#39;./store&#39;;</span>
<span class="line">const store = getStore();</span>
<span class="line">function App() {</span>
<span class="line">  return (</span>
<span class="line">+    &lt;Provider store={store}&gt;</span>
<span class="line">      &lt;Header /&gt;</span>
<span class="line">      {useRoutes(routesConfig)}</span>
<span class="line">+    &lt;/Provider&gt;</span>
<span class="line">  )</span>
<span class="line">}</span>
<span class="line">export default App;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-子路由并调用接口" tabindex="-1"><a class="header-anchor" href="#_6-子路由并调用接口"><span>6. 子路由并调用接口</span></a></h2><h3 id="_6-1-安装" tabindex="-1"><a class="header-anchor" href="#_6-1-安装"><span>6.1 安装</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">npm install cors axios --save-dev</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_6-2-api-js" tabindex="-1"><a class="header-anchor" href="#_6-2-api-js"><span>6.2 api.js</span></a></h3><p>api.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> cors <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;cors&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">cors</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> users <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;zhufeng1&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;zhufeng2&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;zhufeng3&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/api/users&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">success</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">data</span><span class="token operator">:</span> users</span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">5000</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;api server started on port 5000&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-3-action-types-js" tabindex="-1"><a class="header-anchor" href="#_6-3-action-types-js"><span>6.3 action-types.js</span></a></h3><p>src\\store\\action-types.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">export const ADD = &#39;ADD&#39;;</span>
<span class="line">+export const SET_USER_LIST = &#39;SET_USER_LIST&#39;;</span>
<span class="line">+export const ADD_USER = &#39;ADD_USER&#39;;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-4-user-js" tabindex="-1"><a class="header-anchor" href="#_6-4-user-js"><span>6.4 user.js</span></a></h3><p>src\\store\\reducers\\user.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">ADD_USER</span><span class="token punctuation">,</span> <span class="token constant">SET_USER_LIST</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../action-types&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> initialState <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">list</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">counter</span><span class="token punctuation">(</span><span class="token parameter">state <span class="token operator">=</span> initialState<span class="token punctuation">,</span> action</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">switch</span> <span class="token punctuation">(</span>action<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">case</span> <span class="token constant">SET_USER_LIST</span><span class="token operator">:</span></span>
<span class="line">      <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">list</span><span class="token operator">:</span> action<span class="token punctuation">.</span>payload <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">case</span> <span class="token constant">ADD_USER</span><span class="token operator">:</span></span>
<span class="line">      <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">list</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token operator">...</span>state<span class="token punctuation">.</span>list<span class="token punctuation">,</span> action<span class="token punctuation">.</span>payload<span class="token punctuation">]</span> <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">default</span><span class="token operator">:</span></span>
<span class="line">      <span class="token keyword">return</span> state<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> counter<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-5-user-js" tabindex="-1"><a class="header-anchor" href="#_6-5-user-js"><span>6.5 user.js</span></a></h3><p>src\\store\\actionCreators\\user.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">SET_USER_LIST</span><span class="token punctuation">,</span> <span class="token constant">ADD_USER</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../action-types&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&#39;axios&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> actions <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">getUserList</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">dispatch<span class="token punctuation">,</span> getState</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">return</span> axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;http://localhost:5000/api/users&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">const</span> <span class="token punctuation">{</span> data <span class="token punctuation">}</span> <span class="token operator">=</span> response<span class="token punctuation">.</span>data<span class="token punctuation">;</span></span>
<span class="line">        <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">          <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token constant">SET_USER_LIST</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token literal-property property">payload</span><span class="token operator">:</span> data</span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function">addUser</span><span class="token punctuation">(</span><span class="token parameter">user</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token constant">ADD_USER</span><span class="token punctuation">,</span> <span class="token literal-property property">payload</span><span class="token operator">:</span> user <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> actions<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-6-src-store-index-js" tabindex="-1"><a class="header-anchor" href="#_6-6-src-store-index-js"><span>6.6 src\\store\\index.js</span></a></h3><p>src\\store\\index.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import { createStore, combineReducers, applyMiddleware } from &#39;redux&#39;</span>
<span class="line">import thunk from &#39;redux-thunk&#39;;</span>
<span class="line">import promise from &#39;redux-promise&#39;;</span>
<span class="line">import logger from &#39;redux-logger&#39;;</span>
<span class="line">import counter from &#39;./reducers/counter&#39;;</span>
<span class="line">+import user from &#39;./reducers/user&#39;;</span>
<span class="line">export function getStore() {</span>
<span class="line">+   const reducers = { counter, user }</span>
<span class="line">    const combinedReducer = combineReducers(reducers);</span>
<span class="line">    const store = applyMiddleware(thunk, promise, logger)(createStore)(combinedReducer);</span>
<span class="line">    return store</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-7-src-routesconfig-js" tabindex="-1"><a class="header-anchor" href="#_6-7-src-routesconfig-js"><span>6.7 src\\routesConfig.js</span></a></h3><p>src\\routesConfig.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React from &#39;react&#39;;</span>
<span class="line">import Home from &#39;./routes/Home&#39;;</span>
<span class="line">import Counter from &#39;./routes/Counter&#39;;</span>
<span class="line">+import User from &#39;./routes/User&#39;;</span>
<span class="line">+import UserAdd from &#39;./routes/UserAdd&#39;;</span>
<span class="line">+import UserList from &#39;./routes/UserList&#39;;</span>
<span class="line">export default [</span>
<span class="line">  {</span>
<span class="line">    path: &#39;/&#39;,</span>
<span class="line">    element: &lt;Home /&gt;,</span>
<span class="line">    index: true</span>
<span class="line">  },</span>
<span class="line">  {</span>
<span class="line">    path: &#39;/counter&#39;,</span>
<span class="line">    element: &lt;Counter /&gt;</span>
<span class="line">  },</span>
<span class="line">+ {</span>
<span class="line">+   path: &#39;/user&#39;,</span>
<span class="line">+   element: &lt;User /&gt;,</span>
<span class="line">+   children: [</span>
<span class="line">+     {</span>
<span class="line">+       path: &#39;/user/List&#39;,</span>
<span class="line">+       element: &lt;UserList /&gt;,</span>
<span class="line">+       index: true</span>
<span class="line">+     },</span>
<span class="line">+     {</span>
<span class="line">+       path: &#39;/user/Add&#39;,</span>
<span class="line">+       element: &lt;UserAdd /&gt;</span>
<span class="line">+     }</span>
<span class="line">+   ]</span>
<span class="line">+ }</span>
<span class="line">]</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-8-user-js" tabindex="-1"><a class="header-anchor" href="#_6-8-user-js"><span>6.8 User.js</span></a></h3><p>src\\routes\\User.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Link<span class="token punctuation">,</span> Outlet <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-router-dom&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">        <span class="token operator">&lt;</span><span class="token operator">&gt;</span></span>
<span class="line">            <span class="token operator">&lt;</span>ul<span class="token operator">&gt;</span></span>
<span class="line">                <span class="token operator">&lt;</span>li<span class="token operator">&gt;</span><span class="token operator">&lt;</span>Link to<span class="token operator">=</span><span class="token string">&quot;/user/add&quot;</span><span class="token operator">&gt;</span>UserAdd<span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span></span>
<span class="line">                <span class="token operator">&lt;</span>li<span class="token operator">&gt;</span><span class="token operator">&lt;</span>Link to<span class="token operator">=</span><span class="token string">&quot;/user/list&quot;</span><span class="token operator">&gt;</span>UserList<span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span></span>
<span class="line">            <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">&gt;</span></span>
<span class="line">            <span class="token operator">&lt;</span>Outlet <span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line">        <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line">    <span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> User<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-9-useradd-js" tabindex="-1"><a class="header-anchor" href="#_6-9-useradd-js"><span>6.9 UserAdd.js</span></a></h3><p>src\\routes\\UserAdd.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useDispatch<span class="token punctuation">,</span> useSelector <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-redux&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useNavigate <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-router-dom&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> actionCreators <span class="token keyword">from</span> <span class="token string">&#39;@/store/actionCreators/user&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">UserAdd</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> list <span class="token operator">=</span> <span class="token function">useSelector</span><span class="token punctuation">(</span><span class="token parameter">state</span> <span class="token operator">=&gt;</span> state<span class="token punctuation">.</span>user<span class="token punctuation">.</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">const</span> nameRef <span class="token operator">=</span> <span class="token function">useRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">const</span> navigate <span class="token operator">=</span> <span class="token function">useNavigate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">const</span> dispatch <span class="token operator">=</span> <span class="token function">useDispatch</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">const</span> <span class="token function-variable function">handleSubmit</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">        event<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">const</span> name <span class="token operator">=</span> nameRef<span class="token punctuation">.</span>current<span class="token punctuation">.</span>value<span class="token punctuation">;</span></span>
<span class="line">        <span class="token function">dispatch</span><span class="token punctuation">(</span>actionCreators<span class="token punctuation">.</span><span class="token function">addUser</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> name <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token function">navigate</span><span class="token punctuation">(</span><span class="token string">&#39;/User/List&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">        <span class="token operator">&lt;</span>form onSubmit<span class="token operator">=</span><span class="token punctuation">{</span>handleSubmit<span class="token punctuation">}</span><span class="token operator">&gt;</span></span>
<span class="line">            用户名 <span class="token operator">&lt;</span>input ref<span class="token operator">=</span><span class="token punctuation">{</span>nameRef<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line">            <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">&quot;submit&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>input<span class="token operator">&gt;</span></span>
<span class="line">        <span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> UserAdd<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-10-src-routes-userlist-js" tabindex="-1"><a class="header-anchor" href="#_6-10-src-routes-userlist-js"><span>6.10 src\\routes\\UserList.js</span></a></h3><p>src\\routes\\UserList.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useEffect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useDispatch<span class="token punctuation">,</span> useSelector <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-redux&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> actionCreators <span class="token keyword">from</span> <span class="token string">&#39;@/store/actionCreators/user&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">UserList</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> list <span class="token operator">=</span> <span class="token function">useSelector</span><span class="token punctuation">(</span><span class="token parameter">state</span> <span class="token operator">=&gt;</span> state<span class="token punctuation">.</span>user<span class="token punctuation">.</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">const</span> dispatch <span class="token operator">=</span> <span class="token function">useDispatch</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>list<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token function">dispatch</span><span class="token punctuation">(</span>actionCreators<span class="token punctuation">.</span><span class="token function">getUserList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">        <span class="token operator">&lt;</span>ul<span class="token operator">&gt;</span></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">                list<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">user</span> <span class="token operator">=&gt;</span> <span class="token operator">&lt;</span>li key<span class="token operator">=</span><span class="token punctuation">{</span>user<span class="token punctuation">.</span>id<span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">{</span>user<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> UserList<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-11-header-index-js" tabindex="-1"><a class="header-anchor" href="#_6-11-header-index-js"><span>6.11 Header\\index.js</span></a></h3><p>src\\components\\Header\\index.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React from &#39;react&#39;;</span>
<span class="line">import { Link } from &#39;react-router-dom&#39;;</span>
<span class="line">function Header() {</span>
<span class="line">  return (</span>
<span class="line">    &lt;ul&gt;</span>
<span class="line">      &lt;li&gt;&lt;Link to=&quot;/&quot;&gt;Home&lt;/Link&gt;&lt;/li&gt;</span>
<span class="line">      &lt;li&gt;&lt;Link to=&quot;/counter&quot;&gt;Counter&lt;/Link&gt;&lt;/li&gt;</span>
<span class="line">+     &lt;li&gt;&lt;Link to=&quot;/user/list&quot;&gt;User&lt;/Link&gt;&lt;/li&gt;</span>
<span class="line">    &lt;/ul&gt;</span>
<span class="line">  )</span>
<span class="line">}</span>
<span class="line">export default Header</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-代理接口和服务器加载数据" tabindex="-1"><a class="header-anchor" href="#_7-代理接口和服务器加载数据"><span>7. 代理接口和服务器加载数据</span></a></h2><ul><li><a href="https://github.com/reduxjs/redux/blob/master/src/createStore.ts" target="_blank" rel="noopener noreferrer">createStore.ts</a></li><li><a href="https://github.com/reduxjs/redux-thunk/blob/master/src/index.ts" target="_blank" rel="noopener noreferrer">redux-thunk</a></li></ul><h3 id="_7-1-安装" tabindex="-1"><a class="header-anchor" href="#_7-1-安装"><span>7.1 安装</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">npm install express-http-proxy --save</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_7-2-src-server-index-js" tabindex="-1"><a class="header-anchor" href="#_7-2-src-server-index-js"><span>7.2 src\\server\\index.js</span></a></h3><p>src\\server\\index.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React from &#39;react&#39;;</span>
<span class="line">import { renderToString } from &#39;react-dom/server&#39;;</span>
<span class="line">import { StaticRouter } from &quot;react-router-dom/server&quot;;</span>
<span class="line">+import proxy from &#39;express-http-proxy&#39;;</span>
<span class="line">import App from &#39;../App&#39;;</span>
<span class="line">+import { getServerStore } from &#39;../store&#39;;</span>
<span class="line">+import { matchRoutes } from &#39;react-router-dom&#39;;</span>
<span class="line">+import routesConfig from &#39;../routesConfig&#39;;</span>
<span class="line">const express = require(&#39;express&#39;);</span>
<span class="line">const app = express();</span>
<span class="line">app.use(express.static(&#39;public&#39;));</span>
<span class="line">+app.use(&#39;/api&#39;, proxy(&#39;http://localhost:5000&#39;, {</span>
<span class="line">+  proxyReqPathResolver(req) {</span>
<span class="line">+    return \`/api\${req.url}\`;</span>
<span class="line">+  }</span>
<span class="line">+}));</span>
<span class="line">app.get(&#39;*&#39;, (req, res) =&gt; {</span>
<span class="line">+ const routeMatches = matchRoutes(routesConfig, { pathname: req.url });</span>
<span class="line">+  if (routeMatches) {</span>
<span class="line">+   const store = getServerStore();</span>
<span class="line">+   const promises = routeMatches</span>
<span class="line">+     .map(({ route }) =&gt; route.element.type.loadData &amp;&amp; route.element.type.loadData(store).then(data =&gt; data, error =&gt; error))</span>
<span class="line">+     .concat(App.loadData &amp;&amp; App.loadData(store))</span>
<span class="line">+     .filter(Boolean)</span>
<span class="line">+   Promise.all(promises).then(() =&gt; {</span>
<span class="line">+     const html = renderToString(</span>
<span class="line">+       &lt;StaticRouter location={req.url}&gt;</span>
<span class="line">+         &lt;App store={store} /&gt;</span>
<span class="line">+       &lt;/StaticRouter&gt;</span>
<span class="line">+     );</span>
<span class="line">      res.send(\`</span>
<span class="line">      &lt;html&gt;</span>
<span class="line">        &lt;head&gt;</span>
<span class="line">          &lt;meta charset=&quot;UTF-8&quot;&gt;</span>
<span class="line">          &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;</span>
<span class="line">          &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;ie=edge&quot;&gt;</span>
<span class="line">          &lt;title&gt;ssr&lt;/title&gt;</span>
<span class="line">        &lt;/head&gt;</span>
<span class="line">        &lt;body&gt;</span>
<span class="line">        &lt;div id=&quot;root&quot;&gt;\${html}&lt;/div&gt;</span>
<span class="line">+       &lt;script&gt;</span>
<span class="line">+         var context = {</span>
<span class="line">+          state:\${JSON.stringify(store.getState())}</span>
<span class="line">+         }</span>
<span class="line">+       &lt;/script&gt;</span>
<span class="line">        &lt;script src=&quot;/client.js&quot;&gt;&lt;/script&gt;</span>
<span class="line">      &lt;/body&gt;</span>
<span class="line">      &lt;/html&gt;</span>
<span class="line">  \`);</span>
<span class="line">    })</span>
<span class="line">+ } else {</span>
<span class="line">+   res.sendStatus(404);</span>
<span class="line">+ }</span>
<span class="line">});</span>
<span class="line">app.listen(3000, () =&gt; console.log(&quot;server started on 3000&quot;));</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-3-src-client-index-js" tabindex="-1"><a class="header-anchor" href="#_7-3-src-client-index-js"><span>7.3 src\\client\\index.js</span></a></h3><p>src\\client\\index.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React from &#39;react&#39;;</span>
<span class="line">import { hydrateRoot } from &#39;react-dom/client&#39;;</span>
<span class="line">import { BrowserRouter } from &#39;react-router-dom&#39;;</span>
<span class="line">import { getClientStore } from &#39;../store&#39;;</span>
<span class="line">import App from &#39;../App&#39;;</span>
<span class="line">const root = document.getElementById(&#39;root&#39;);</span>
<span class="line">+const store = getClientStore();</span>
<span class="line">hydrateRoot(root,</span>
<span class="line">  &lt;BrowserRouter&gt;</span>
<span class="line">+   &lt;App store={store} /&gt;</span>
<span class="line">  &lt;/BrowserRouter&gt;);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-4-request-js" tabindex="-1"><a class="header-anchor" href="#_7-4-request-js"><span>7.4 request.js</span></a></h3><p>src\\server\\request.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&#39;axios&#39;</span></span>
<span class="line"><span class="token keyword">const</span> request <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">baseURL</span><span class="token operator">:</span> <span class="token string">&#39;http://localhost:5000/&#39;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> request</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-5-request-js" tabindex="-1"><a class="header-anchor" href="#_7-5-request-js"><span>7.5 request.js</span></a></h3><p>src\\client\\request.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&#39;axios&#39;</span></span>
<span class="line"><span class="token keyword">const</span> request <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">baseURI</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> request</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-6-userlist-js" tabindex="-1"><a class="header-anchor" href="#_7-6-userlist-js"><span>7.6 UserList.js</span></a></h3><p>src\\routes\\UserList.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useEffect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useDispatch<span class="token punctuation">,</span> useSelector <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-redux&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> actionCreators <span class="token keyword">from</span> <span class="token string">&#39;@/store/actionCreators/user&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">UserList</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> list <span class="token operator">=</span> <span class="token function">useSelector</span><span class="token punctuation">(</span><span class="token parameter">state</span> <span class="token operator">=&gt;</span> state<span class="token punctuation">.</span>user<span class="token punctuation">.</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">const</span> dispatch <span class="token operator">=</span> <span class="token function">useDispatch</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>list<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token function">dispatch</span><span class="token punctuation">(</span>actionCreators<span class="token punctuation">.</span><span class="token function">getUserList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">        <span class="token operator">&lt;</span>ul<span class="token operator">&gt;</span></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">                list<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">user</span> <span class="token operator">=&gt;</span> <span class="token operator">&lt;</span>li key<span class="token operator">=</span><span class="token punctuation">{</span>user<span class="token punctuation">.</span>id<span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">{</span>user<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">+</span>UserList<span class="token punctuation">.</span><span class="token function-variable function">loadData</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">store</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>    <span class="token keyword">return</span> store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span>actionCreators<span class="token punctuation">.</span><span class="token function">getUserList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> UserList<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-7-src-store-actioncreators-user-js" tabindex="-1"><a class="header-anchor" href="#_7-7-src-store-actioncreators-user-js"><span>7.7 src\\store\\actionCreators\\user.js</span></a></h3><p>src\\store\\actionCreators\\user.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import { SET_USER_LIST, ADD_USER } from &#39;../action-types&#39;;</span>
<span class="line">const actions = {</span>
<span class="line">  getUserList() {</span>
<span class="line">+   return function (dispatch, getState, request) {</span>
<span class="line">+      return request.get(&#39;/api/users&#39;).then((response) =&gt; {</span>
<span class="line">        const { data } = response.data;</span>
<span class="line">        dispatch({</span>
<span class="line">          type: SET_USER_LIST,</span>
<span class="line">          payload: data</span>
<span class="line">        });</span>
<span class="line">      });</span>
<span class="line">    }</span>
<span class="line">  },</span>
<span class="line">  addUser(user) {</span>
<span class="line">    return { type: ADD_USER, payload: user }</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line">export default actions;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-8-src-app-js" tabindex="-1"><a class="header-anchor" href="#_7-8-src-app-js"><span>7.8 src\\App.js</span></a></h3><p>src\\App.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React from &#39;react&#39;;</span>
<span class="line">import { useRoutes } from &#39;react-router-dom&#39;;</span>
<span class="line">import routesConfig from &#39;./routesConfig&#39;;</span>
<span class="line">import Header from &#39;./components/Header&#39;;</span>
<span class="line">import { Provider } from &#39;react-redux&#39;;</span>
<span class="line">+function App({ store }) {</span>
<span class="line">  return (</span>
<span class="line">    &lt;Provider store={store}&gt;</span>
<span class="line">      &lt;Header /&gt;</span>
<span class="line">      {useRoutes(routesConfig)}</span>
<span class="line">    &lt;/Provider&gt;</span>
<span class="line">  )</span>
<span class="line">}</span>
<span class="line">export default App;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-9-src-store-index-js" tabindex="-1"><a class="header-anchor" href="#_7-9-src-store-index-js"><span>7.9 src\\store\\index.js</span></a></h3><p>src\\store\\index.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import { createStore, combineReducers, applyMiddleware } from &#39;redux&#39;</span>
<span class="line">import thunk from &#39;redux-thunk&#39;;</span>
<span class="line">import promise from &#39;redux-promise&#39;;</span>
<span class="line">import logger from &#39;redux-logger&#39;;</span>
<span class="line">import counter from &#39;./reducers/counter&#39;;</span>
<span class="line">import user from &#39;./reducers/user&#39;;</span>
<span class="line">+import clientRequest from &#39;@/client/request&#39;;</span>
<span class="line">+import serverRequest from &#39;@/server/request&#39;;</span>
<span class="line">+const clientThunk = thunk.withExtraArgument(clientRequest);</span>
<span class="line">+const serverThunk = thunk.withExtraArgument(serverRequest);</span>
<span class="line">+const reducers = { counter, user }</span>
<span class="line">+const combinedReducer = combineReducers(reducers);</span>
<span class="line">+export function getClientStore() {</span>
<span class="line">+    const initialState = window.context.state;</span>
<span class="line">+    return applyMiddleware(clientThunk, promise, logger)(createStore)(combinedReducer, initialState);</span>
<span class="line">+}</span>
<span class="line">+export function getServerStore() {</span>
<span class="line">+    return applyMiddleware(serverThunk, promise, logger)(createStore)(combinedReducer);</span>
<span class="line">+}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-登录和权限" tabindex="-1"><a class="header-anchor" href="#_8-登录和权限"><span>8. 登录和权限</span></a></h2><h3 id="_8-1-安装" tabindex="-1"><a class="header-anchor" href="#_8-1-安装"><span>8.1 安装</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">npm install express-session --save</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_8-2-api-js" tabindex="-1"><a class="header-anchor" href="#_8-2-api-js"><span>8.2 api.js</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">const express = require(&#39;express&#39;)</span>
<span class="line">const cors = require(&#39;cors&#39;);</span>
<span class="line">+const session = require(&#39;express-session&#39;);</span>
<span class="line">+const app = express();</span>
<span class="line">+app.use(cors());</span>
<span class="line">+app.use(session({</span>
<span class="line">+  saveUninitialized: true,</span>
<span class="line">+  resave: true,</span>
<span class="line">+  secret: &#39;zhufeng&#39;</span>
<span class="line">+}))</span>
<span class="line">+app.use(express.json());</span>
<span class="line">+app.use(express.urlencoded({ extended: true }));</span>
<span class="line">const users = [{ id: 1, name: &#39;zhufeng1&#39; }, { id: 2, name: &#39;zhufeng2&#39; }, { id: 3, name: &#39;zhufeng3&#39; }];</span>
<span class="line">app.get(&#39;/api/users&#39;, (req, res) =&gt; {</span>
<span class="line">  res.json({</span>
<span class="line">    success: true,</span>
<span class="line">    data: users</span>
<span class="line">  });</span>
<span class="line">});</span>
<span class="line">+app.post(&#39;/api/login&#39;, (req, res) =&gt; {</span>
<span class="line">+  const user = req.body;</span>
<span class="line">+  req.session.user = user;</span>
<span class="line">+  res.json({</span>
<span class="line">+    success: true,</span>
<span class="line">+    data: user</span>
<span class="line">+  });</span>
<span class="line">+});</span>
<span class="line">+app.get(&#39;/api/logout&#39;, (req, res) =&gt; {</span>
<span class="line">+  req.session.user = null;</span>
<span class="line">+  res.json({</span>
<span class="line">+    success: true</span>
<span class="line">+  });</span>
<span class="line">+});</span>
<span class="line">+app.get(&#39;/api/user&#39;, (req, res) =&gt; {</span>
<span class="line">+  const user = req.session.user;</span>
<span class="line">+  if (user) {</span>
<span class="line">+    res.json({</span>
<span class="line">+      success: true,</span>
<span class="line">+      data: user</span>
<span class="line">+    });</span>
<span class="line">+  } else {</span>
<span class="line">+    res.json({</span>
<span class="line">+      success: false,</span>
<span class="line">+      error: &#39;用户未登录&#39;</span>
<span class="line">+    });</span>
<span class="line">+  }</span>
<span class="line">+});</span>
<span class="line">app.listen(5000, () =&gt; console.log(&#39;api server started on port 5000&#39;));</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-3-src-routesconfig-js" tabindex="-1"><a class="header-anchor" href="#_8-3-src-routesconfig-js"><span>8.3 src\\routesConfig.js</span></a></h3><p>src\\routesConfig.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React from &#39;react&#39;;</span>
<span class="line">import Home from &#39;./routes/Home&#39;;</span>
<span class="line">import Counter from &#39;./routes/Counter&#39;;</span>
<span class="line">import User from &#39;./routes/User&#39;;</span>
<span class="line">import UserAdd from &#39;./routes/UserAdd&#39;;</span>
<span class="line">import UserList from &#39;./routes/UserList&#39;;</span>
<span class="line">+import Login from &#39;./routes/Login&#39;;</span>
<span class="line">+import Logout from &#39;./routes/Logout&#39;;</span>
<span class="line">+import Profile from &#39;./routes/Profile&#39;;</span>
<span class="line">export default [</span>
<span class="line">  {</span>
<span class="line">    path: &#39;/&#39;,</span>
<span class="line">    element: &lt;Home /&gt;,</span>
<span class="line">    index: true</span>
<span class="line">  },</span>
<span class="line">  {</span>
<span class="line">    path: &#39;/counter&#39;,</span>
<span class="line">    element: &lt;Counter /&gt;</span>
<span class="line">  },</span>
<span class="line">  {</span>
<span class="line">    path: &#39;/user&#39;,</span>
<span class="line">    element: &lt;User /&gt;,</span>
<span class="line">    children: [</span>
<span class="line">      {</span>
<span class="line">        path: &#39;/user/List&#39;,</span>
<span class="line">        element: &lt;UserList /&gt;,</span>
<span class="line">        index: true</span>
<span class="line">      },</span>
<span class="line">      {</span>
<span class="line">        path: &#39;/user/Add&#39;,</span>
<span class="line">        element: &lt;UserAdd /&gt;</span>
<span class="line">      }</span>
<span class="line">    ]</span>
<span class="line">  },</span>
<span class="line">+ {</span>
<span class="line">+   path: &#39;/login&#39;,</span>
<span class="line">+   element: &lt;Login /&gt;</span>
<span class="line">+ },</span>
<span class="line">+ {</span>
<span class="line">+   path: &#39;/logout&#39;,</span>
<span class="line">+   element: &lt;Logout /&gt;</span>
<span class="line">+ },</span>
<span class="line">+ {</span>
<span class="line">+   path: &#39;/profile&#39;,</span>
<span class="line">+   element: &lt;Profile /&gt;</span>
<span class="line">+ },</span>
<span class="line">]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-4-login-js" tabindex="-1"><a class="header-anchor" href="#_8-4-login-js"><span>8.4 Login.js</span></a></h3><p>src\\routes\\Login.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useDispatch<span class="token punctuation">,</span> useSelector <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-redux&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> actionCreators <span class="token keyword">from</span> <span class="token string">&#39;@/store/actionCreators/auth&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">Login</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> list <span class="token operator">=</span> <span class="token function">useSelector</span><span class="token punctuation">(</span><span class="token parameter">state</span> <span class="token operator">=&gt;</span> state<span class="token punctuation">.</span>user<span class="token punctuation">.</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">const</span> dispatch <span class="token operator">=</span> <span class="token function">useDispatch</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">const</span> nameRef <span class="token operator">=</span> <span class="token function">useRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token function-variable function">handleSubmit</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    event<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">const</span> name <span class="token operator">=</span> nameRef<span class="token punctuation">.</span>current<span class="token punctuation">.</span>value<span class="token punctuation">;</span></span>
<span class="line">    <span class="token function">dispatch</span><span class="token punctuation">(</span>actionCreators<span class="token punctuation">.</span><span class="token function">login</span><span class="token punctuation">(</span><span class="token punctuation">{</span> name <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token operator">&lt;</span>form onSubmit<span class="token operator">=</span><span class="token punctuation">{</span>handleSubmit<span class="token punctuation">}</span><span class="token operator">&gt;</span></span>
<span class="line">      用户名 <span class="token operator">&lt;</span>input ref<span class="token operator">=</span><span class="token punctuation">{</span>nameRef<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line">      <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">&quot;submit&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>input<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> Login<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-5-logout-js" tabindex="-1"><a class="header-anchor" href="#_8-5-logout-js"><span>8.5 Logout.js</span></a></h3><p>src\\routes\\Logout.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useDispatch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-redux&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> actionCreators <span class="token keyword">from</span> <span class="token string">&#39;@/store/actionCreators/auth&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">Logout</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> dispatch <span class="token operator">=</span> <span class="token function">useDispatch</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">dispatch</span><span class="token punctuation">(</span>actionCreators<span class="token punctuation">.</span><span class="token function">logout</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>退出<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> Logout<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-6-profile-js" tabindex="-1"><a class="header-anchor" href="#_8-6-profile-js"><span>8.6 Profile.js</span></a></h3><p>src\\routes\\Profile.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useEffect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useSelector <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-redux&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useNavigate <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-router-dom&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">Profile</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token function">useSelector</span><span class="token punctuation">(</span><span class="token parameter">state</span> <span class="token operator">=&gt;</span> state<span class="token punctuation">.</span>auth<span class="token punctuation">.</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">const</span> navigate <span class="token operator">=</span> <span class="token function">useNavigate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>user<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">navigate</span><span class="token punctuation">(</span><span class="token string">&#39;/login&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>用户名<span class="token operator">:</span><span class="token punctuation">{</span>user <span class="token operator">&amp;&amp;</span> user<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> Profile<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-7-action-types-js" tabindex="-1"><a class="header-anchor" href="#_8-7-action-types-js"><span>8.7 action-types.js</span></a></h3><p>src\\store\\action-types.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">export const ADD = &#39;ADD&#39;;</span>
<span class="line"></span>
<span class="line">export const SET_USER_LIST = &#39;SET_USER_LIST&#39;;</span>
<span class="line">export const ADD_USER = &#39;ADD_USER&#39;;</span>
<span class="line"></span>
<span class="line">+export const LOGIN_SUCCESS = &#39;LOGIN_SUCCESS&#39;;</span>
<span class="line">+export const LOGIN_ERROR = &#39;LOGIN_ERROR&#39;;</span>
<span class="line">+export const LOGOUT_SUCCESS = &#39;LOGOUT_SUCCESS&#39;;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-8-auth-js" tabindex="-1"><a class="header-anchor" href="#_8-8-auth-js"><span>8.8 auth.js</span></a></h3><p>src\\store\\reducers\\auth.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">LOGIN_ERROR</span><span class="token punctuation">,</span> <span class="token constant">LOGIN_SUCCESS</span><span class="token punctuation">,</span> <span class="token constant">LOGOUT_SUCCESS</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../action-types&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> initialState <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">user</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token literal-property property">error</span><span class="token operator">:</span> <span class="token keyword">null</span> <span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">auth</span><span class="token punctuation">(</span><span class="token parameter">state <span class="token operator">=</span> initialState<span class="token punctuation">,</span> action</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">switch</span> <span class="token punctuation">(</span>action<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">case</span> <span class="token constant">LOGIN_SUCCESS</span><span class="token operator">:</span></span>
<span class="line">      <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">user</span><span class="token operator">:</span> action<span class="token punctuation">.</span>payload<span class="token punctuation">,</span> <span class="token literal-property property">error</span><span class="token operator">:</span> <span class="token keyword">null</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">case</span> <span class="token constant">LOGIN_ERROR</span><span class="token operator">:</span></span>
<span class="line">      <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">user</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token literal-property property">error</span><span class="token operator">:</span> action<span class="token punctuation">.</span>payload <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">case</span> <span class="token constant">LOGOUT_SUCCESS</span><span class="token operator">:</span></span>
<span class="line">      <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">user</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token literal-property property">error</span><span class="token operator">:</span> <span class="token keyword">null</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">default</span><span class="token operator">:</span></span>
<span class="line">      <span class="token keyword">return</span> state<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> auth<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-9-auth-js" tabindex="-1"><a class="header-anchor" href="#_8-9-auth-js"><span>8.9 auth.js</span></a></h3><p>src\\store\\actionCreators\\auth.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">LOGIN_ERROR</span><span class="token punctuation">,</span> <span class="token constant">LOGIN_SUCCESS</span><span class="token punctuation">,</span> <span class="token constant">LOGOUT_SUCCESS</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../action-types&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> push <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;redux-first-history&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> actionCreators <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">login</span><span class="token punctuation">(</span><span class="token parameter">user</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">dispatch<span class="token punctuation">,</span> getState<span class="token punctuation">,</span> request</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">return</span> request<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&#39;/api/login&#39;</span><span class="token punctuation">,</span> user<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">const</span> <span class="token punctuation">{</span> success<span class="token punctuation">,</span> data<span class="token punctuation">,</span> error <span class="token punctuation">}</span> <span class="token operator">=</span> res<span class="token punctuation">.</span>data<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>success<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token constant">LOGIN_SUCCESS</span><span class="token punctuation">,</span> <span class="token literal-property property">payload</span><span class="token operator">:</span> data <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">          <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&#39;/profile&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token constant">LOGIN_ERROR</span><span class="token punctuation">,</span> <span class="token literal-property property">payload</span><span class="token operator">:</span> error <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function">logout</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">dispatch<span class="token punctuation">,</span> getState<span class="token punctuation">,</span> request</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">return</span> request<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/api/logout&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">const</span> <span class="token punctuation">{</span> success <span class="token punctuation">}</span> <span class="token operator">=</span> res<span class="token punctuation">.</span>data<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>success<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token constant">LOGOUT_SUCCESS</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">          <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&#39;/login&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function">validate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">dispatch<span class="token punctuation">,</span> getState<span class="token punctuation">,</span> request</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">return</span> request<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/api/validate&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">const</span> <span class="token punctuation">{</span> success<span class="token punctuation">,</span> data <span class="token punctuation">}</span> <span class="token operator">=</span> res<span class="token punctuation">.</span>data<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>success<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token constant">LOGIN_SUCCESS</span><span class="token punctuation">,</span> <span class="token literal-property property">payload</span><span class="token operator">:</span> data <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> actionCreators<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-10-src-store-index-js" tabindex="-1"><a class="header-anchor" href="#_8-10-src-store-index-js"><span>8.10 src\\store\\index.js</span></a></h3><p>src\\store\\index.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import { createStore, combineReducers, applyMiddleware } from &#39;redux&#39;;</span>
<span class="line">import thunk from &#39;redux-thunk&#39;;</span>
<span class="line">import promise from &#39;redux-promise&#39;;</span>
<span class="line">import logger from &#39;redux-logger&#39;</span>
<span class="line">import counter from &#39;./reducers/counter&#39;;</span>
<span class="line">import user from &#39;./reducers/user&#39;;</span>
<span class="line">+import auth from &#39;./reducers/auth&#39;;</span>
<span class="line">import clientRequest from &#39;@/client/request&#39;;</span>
<span class="line">import serverRequest from &#39;@/server/request&#39;;</span>
<span class="line">+import { createBrowserHistory, createMemoryHistory } from &#39;history&#39;</span>
<span class="line">+import { createReduxHistoryContext } from &#39;redux-first-history&#39;;</span>
<span class="line">export function getClientStore() {</span>
<span class="line">  const initialState = window.context.state;</span>
<span class="line">+  const { createReduxHistory, routerMiddleware, routerReducer } = createReduxHistoryContext({</span>
<span class="line">+    history: createBrowserHistory()</span>
<span class="line">+  });</span>
<span class="line">+  const reducers = { counter, user, auth, router: routerReducer };</span>
<span class="line">+  const combinedReducer = combineReducers(reducers);</span>
<span class="line">+  const store = applyMiddleware(thunk.withExtraArgument(clientRequest), promise, routerMiddleware, logger)</span>
<span class="line">+    (createStore)</span>
<span class="line">+    (combinedReducer, initialState);</span>
<span class="line">+  const history = createReduxHistory(store);</span>
<span class="line">+  return { store, history }</span>
<span class="line">}</span>
<span class="line">export function getServerStore(req) {</span>
<span class="line">+ const { createReduxHistory, routerMiddleware, routerReducer } = createReduxHistoryContext({</span>
<span class="line">+   history: createMemoryHistory()</span>
<span class="line">+ });</span>
<span class="line">+ const reducers = { counter, user, auth, router: routerReducer };</span>
<span class="line">+ const combinedReducer = combineReducers(reducers);</span>
<span class="line">+ const store = applyMiddleware(thunk.withExtraArgument(serverRequest(req)), promise, routerMiddleware, logger)(createStore)(combinedReducer);</span>
<span class="line">+  const history = createReduxHistory(store);</span>
<span class="line">+  return { store, history }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-11-src-app-js" tabindex="-1"><a class="header-anchor" href="#_8-11-src-app-js"><span>8.11 src\\App.js</span></a></h3><p>src\\App.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React from &#39;react&#39;;</span>
<span class="line">import { useRoutes } from &#39;react-router-dom&#39;;</span>
<span class="line">import routesConfig from &#39;./routesConfig&#39;;</span>
<span class="line">import Header from &#39;./components/Header&#39;;</span>
<span class="line">import { Provider } from &#39;react-redux&#39;;</span>
<span class="line">+import actionCreators from &#39;./store/actionCreators/auth&#39;;</span>
<span class="line">function App({ store }) {</span>
<span class="line">  return (</span>
<span class="line">    &lt;Provider store={store}&gt;</span>
<span class="line">      &lt;Header /&gt;</span>
<span class="line">      {useRoutes(routesConfig)}</span>
<span class="line">    &lt;/Provider&gt;</span>
<span class="line">  )</span>
<span class="line">}</span>
<span class="line">+App.loadData = (store) =&gt; {</span>
<span class="line">+  return store.dispatch(actionCreators.validate())</span>
<span class="line">+}</span>
<span class="line">export default App;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-12-server-index-js" tabindex="-1"><a class="header-anchor" href="#_8-12-server-index-js"><span>8.12 server\\index.js</span></a></h3><p>src\\server\\index.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">app.get(&#39;*&#39;, (req, res) =&gt; {</span>
<span class="line">  const routeMatches = matchRoutes(routesConfig, { pathname: req.url });</span>
<span class="line">  if (routeMatches) {</span>
<span class="line">+   const store = getServerStore(req);</span>
<span class="line">    const promises = routeMatches</span>
<span class="line">      .map(({ route }) =&gt; route.element.type.loadData &amp;&amp; route.element.type.loadData(store).then(data =&gt; data, error =&gt; error))</span>
<span class="line">      .concat(App.loadData &amp;&amp; App.loadData(store))</span>
<span class="line">      .filter(Boolean)</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-13-request-js" tabindex="-1"><a class="header-anchor" href="#_8-13-request-js"><span>8.13 request.js</span></a></h3><p>src\\server\\request.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import axios from &#39;axios&#39;</span>
<span class="line">const request = (req) =&gt; axios.create({</span>
<span class="line">  baseURL: &#39;http://localhost:5000/&#39;,</span>
<span class="line">+ headers: {</span>
<span class="line">+   cookie: req.get(&#39;cookie&#39;) || &#39;&#39;</span>
<span class="line">+ }</span>
<span class="line">});</span>
<span class="line">export default request</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-14-src-components-header-index-js" tabindex="-1"><a class="header-anchor" href="#_8-14-src-components-header-index-js"><span>8.14 src\\components\\Header\\index.js</span></a></h3><p>src\\components\\Header\\index.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React from &#39;react&#39;;</span>
<span class="line">import { Link } from &#39;react-router-dom&#39;;</span>
<span class="line">+import { useSelector } from &#39;react-redux&#39;;</span>
<span class="line">function Header() {</span>
<span class="line">+ const { user } = useSelector(state =&gt; state.auth)</span>
<span class="line">  return (</span>
<span class="line">    &lt;ul&gt;</span>
<span class="line">      &lt;li&gt;&lt;Link to=&quot;/&quot;&gt;Home&lt;/Link&gt;&lt;/li&gt;</span>
<span class="line">      &lt;li&gt;&lt;Link to=&quot;/counter&quot;&gt;Counter&lt;/Link&gt;&lt;/li&gt;</span>
<span class="line">      &lt;li&gt;&lt;Link to=&quot;/user/list&quot;&gt;User&lt;/Link&gt;&lt;/li&gt;</span>
<span class="line">+     {</span>
<span class="line">+       user ? (</span>
<span class="line">+         &lt;&gt;</span>
<span class="line">+           &lt;li&gt;&lt;Link to=&quot;/profile&quot;&gt;个人中心&lt;/Link&gt;&lt;/li&gt;</span>
<span class="line">+           &lt;li&gt;&lt;Link to=&quot;/logout&quot;&gt;退出&lt;/Link&gt;&lt;/li&gt;</span>
<span class="line">+         &lt;/&gt;</span>
<span class="line">+       ) : &lt;li&gt;&lt;Link to=&quot;/login&quot;&gt;登录&lt;/Link&gt;&lt;/li&gt;</span>
<span class="line">+     }</span>
<span class="line">    &lt;/ul&gt;</span>
<span class="line">  )</span>
<span class="line">}</span>
<span class="line">export default Header</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-15-client-index-js" tabindex="-1"><a class="header-anchor" href="#_8-15-client-index-js"><span>8.15 client\\index.js</span></a></h3><p>src\\client\\index.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React from &#39;react&#39;;</span>
<span class="line">import { hydrateRoot } from &#39;react-dom/client&#39;;</span>
<span class="line">+import { HistoryRouter as Router } from &quot;redux-first-history/rr6&quot;;</span>
<span class="line">import App from &#39;@/App&#39;;</span>
<span class="line">import { getClientStore } from &#39;../store&#39;;</span>
<span class="line">const root = document.getElementById(&#39;root&#39;);</span>
<span class="line">const { store, history } = getClientStore();</span>
<span class="line">hydrateRoot(root,</span>
<span class="line">+ &lt;Router history={history}&gt;</span>
<span class="line">    &lt;App store={store} /&gt;</span>
<span class="line">+ &lt;/Router&gt;</span>
<span class="line">);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-状态码301和404" tabindex="-1"><a class="header-anchor" href="#_9-状态码301和404"><span>9. 状态码301和404</span></a></h2><h3 id="_9-1-notfound-js" tabindex="-1"><a class="header-anchor" href="#_9-1-notfound-js"><span>9.1 NotFound.js</span></a></h3><p>src\\routes\\NotFound.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">NotFound</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">        <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>NotFound<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> NotFound<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-2-src-routesconfig-js" tabindex="-1"><a class="header-anchor" href="#_9-2-src-routesconfig-js"><span>9.2 src\\routesConfig.js</span></a></h3><p>src\\routesConfig.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React from &#39;react&#39;;</span>
<span class="line">import Home from &#39;./routes/Home&#39;;</span>
<span class="line">import Counter from &#39;./routes/Counter&#39;;</span>
<span class="line">import User from &#39;./routes/User&#39;;</span>
<span class="line">import UserAdd from &#39;./routes/UserAdd&#39;;</span>
<span class="line">import UserList from &#39;./routes/UserList&#39;;</span>
<span class="line">import Login from &#39;./routes/Login&#39;;</span>
<span class="line">import Logout from &#39;./routes/Logout&#39;;</span>
<span class="line">import Profile from &#39;./routes/Profile&#39;;</span>
<span class="line">+import NotFound from &#39;./routes/NotFound&#39;;</span>
<span class="line">export default [</span>
<span class="line">  {</span>
<span class="line">    path: &#39;/&#39;,</span>
<span class="line">    element: &lt;Home /&gt;,</span>
<span class="line">    index: true</span>
<span class="line">  },</span>
<span class="line">  {</span>
<span class="line">    path: &#39;/counter&#39;,</span>
<span class="line">    element: &lt;Counter /&gt;</span>
<span class="line">  },</span>
<span class="line">  {</span>
<span class="line">    path: &#39;/user&#39;,</span>
<span class="line">    element: &lt;User /&gt;,</span>
<span class="line">    children: [</span>
<span class="line">      {</span>
<span class="line">        path: &#39;/user/List&#39;,</span>
<span class="line">        element: &lt;UserList /&gt;,</span>
<span class="line">        index: true</span>
<span class="line">      },</span>
<span class="line">      {</span>
<span class="line">        path: &#39;/user/Add&#39;,</span>
<span class="line">        element: &lt;UserAdd /&gt;</span>
<span class="line">      }</span>
<span class="line">    ]</span>
<span class="line">  },</span>
<span class="line">  {</span>
<span class="line">    path: &#39;/login&#39;,</span>
<span class="line">    element: &lt;Login /&gt;</span>
<span class="line">  },</span>
<span class="line">  {</span>
<span class="line">    path: &#39;/logout&#39;,</span>
<span class="line">    element: &lt;Logout /&gt;</span>
<span class="line">  },</span>
<span class="line">  {</span>
<span class="line">    path: &#39;/profile&#39;,</span>
<span class="line">    element: &lt;Profile /&gt;</span>
<span class="line">  },</span>
<span class="line">+ {</span>
<span class="line">+   path: &#39;*&#39;,</span>
<span class="line">+   element: &lt;NotFound /&gt;</span>
<span class="line">+ }</span>
<span class="line">]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-3-src-server-index-js" tabindex="-1"><a class="header-anchor" href="#_9-3-src-server-index-js"><span>9.3 src\\server\\index.js</span></a></h3><p>src\\server\\index.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React from &#39;react&#39;;</span>
<span class="line">import { renderToString } from &#39;react-dom/server&#39;;</span>
<span class="line">import { StaticRouter } from &quot;react-router-dom/server&quot;;</span>
<span class="line">import proxy from &#39;express-http-proxy&#39;;</span>
<span class="line">import App from &#39;../App&#39;;</span>
<span class="line">import { getServerStore } from &#39;../store&#39;;</span>
<span class="line">import { matchRoutes } from &#39;react-router-dom&#39;;</span>
<span class="line">import routesConfig from &#39;../routesConfig&#39;;</span>
<span class="line">const express = require(&#39;express&#39;);</span>
<span class="line">const app = express();</span>
<span class="line">app.use(express.static(&#39;public&#39;));</span>
<span class="line">app.use(&#39;/api&#39;, proxy(&#39;http://localhost:5000&#39;, {</span>
<span class="line">  proxyReqPathResolver(req) {</span>
<span class="line">    return \`/api\${req.url}\`;</span>
<span class="line">  }</span>
<span class="line">}));</span>
<span class="line">app.get(&#39;*&#39;, (req, res) =&gt; {</span>
<span class="line">  const routeMatches = matchRoutes(routesConfig, { pathname: req.url });</span>
<span class="line">  if (routeMatches) {</span>
<span class="line">    const store = getServerStore(req);</span>
<span class="line">    const promises = routeMatches</span>
<span class="line">      .map(({ route }) =&gt; route.element.type.loadData &amp;&amp; route.element.type.loadData(store).then(data =&gt; data, error =&gt; error))</span>
<span class="line">      .concat(App.loadData &amp;&amp; App.loadData(store))</span>
<span class="line">      .filter(Boolean)</span>
<span class="line">    Promise.all(promises).then(() =&gt; {</span>
<span class="line">+     if (req.url === &#39;/profile&#39; &amp;&amp; (!(store.getState().auth.user))) {</span>
<span class="line">+       return res.redirect(&#39;/login&#39;);</span>
<span class="line">+     } else if (routeMatches[routeMatches.length - 1].route.path === &#39;*&#39;) {</span>
<span class="line">+       res.statusCode = 404;</span>
<span class="line">+     }</span>
<span class="line">      const html = renderToString(</span>
<span class="line">        &lt;StaticRouter location={req.url}&gt;</span>
<span class="line">          &lt;App store={store} /&gt;</span>
<span class="line">        &lt;/StaticRouter&gt;</span>
<span class="line">      );</span>
<span class="line">      res.send(\`</span>
<span class="line">      &lt;html&gt;</span>
<span class="line">        &lt;head&gt;</span>
<span class="line">          &lt;meta charset=&quot;UTF-8&quot;&gt;</span>
<span class="line">          &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;</span>
<span class="line">          &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;ie=edge&quot;&gt;</span>
<span class="line">          &lt;title&gt;ssr&lt;/title&gt;</span>
<span class="line">        &lt;/head&gt;</span>
<span class="line">        &lt;body&gt;</span>
<span class="line">        &lt;div id=&quot;root&quot;&gt;\${html}&lt;/div&gt;</span>
<span class="line">        &lt;script&gt;</span>
<span class="line">          var context = {</span>
<span class="line">           state:\${JSON.stringify(store.getState())}</span>
<span class="line">          }</span>
<span class="line">        &lt;/script&gt;</span>
<span class="line">        &lt;script src=&quot;/client.js&quot;&gt;&lt;/script&gt;</span>
<span class="line">      &lt;/body&gt;</span>
<span class="line">      &lt;/html&gt;</span>
<span class="line">  \`);</span>
<span class="line">    })</span>
<span class="line">  } else {</span>
<span class="line">    res.sendStatus(404);</span>
<span class="line">  }</span>
<span class="line">});</span>
<span class="line">app.listen(3000, () =&gt; console.log(&quot;server started on 3000&quot;));</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_10-支持css" tabindex="-1"><a class="header-anchor" href="#_10-支持css"><span>10. 支持CSS</span></a></h2><h3 id="_10-1-安装" tabindex="-1"><a class="header-anchor" href="#_10-1-安装"><span>10.1 安装</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">npm install css-loader isomorphic-style-loader-react18 --save</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_10-2-src-app-css" tabindex="-1"><a class="header-anchor" href="#_10-2-src-app-css"><span>10.2 src\\App.css</span></a></h3><p>src\\App.css</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">.color {</span>
<span class="line">  color: red</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10-3-src-app-js" tabindex="-1"><a class="header-anchor" href="#_10-3-src-app-js"><span>10.3 src\\App.js</span></a></h3><p>src\\App.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React from &#39;react&#39;;</span>
<span class="line">import { useRoutes } from &#39;react-router-dom&#39;;</span>
<span class="line">import routesConfig from &#39;./routesConfig&#39;;</span>
<span class="line">import Header from &#39;./components/Header&#39;;</span>
<span class="line">import { Provider } from &#39;react-redux&#39;;</span>
<span class="line">import actionCreators from &#39;./store/actionCreators/auth&#39;;</span>
<span class="line">+import useStyles from &#39;isomorphic-style-loader-react18/useStyles&#39;</span>
<span class="line">+import styles from &#39;./App.css&#39;</span>
<span class="line">function App({ store }) {</span>
<span class="line">+ useStyles(styles);</span>
<span class="line">  return (</span>
<span class="line">    &lt;Provider store={store}&gt;</span>
<span class="line">      &lt;Header /&gt;</span>
<span class="line">      {useRoutes(routesConfig)}</span>
<span class="line">+     &lt;div className={styles.color}&gt;red&lt;/div&gt;</span>
<span class="line">    &lt;/Provider&gt;</span>
<span class="line">  )</span>
<span class="line">}</span>
<span class="line">App.loadData = (store) =&gt; {</span>
<span class="line">  return store.dispatch(actionCreators.validate())</span>
<span class="line">}</span>
<span class="line">export default App;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10-4-webpack-config-base-js" tabindex="-1"><a class="header-anchor" href="#_10-4-webpack-config-base-js"><span>10.4 webpack.config.base.js</span></a></h3><p>webpack.config.base.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">const path = require(&#39;path&#39;);</span>
<span class="line">module.exports = {</span>
<span class="line">    mode: &#39;development&#39;,</span>
<span class="line">    resolve: {</span>
<span class="line">        alias: {</span>
<span class="line">            &#39;@&#39;: path.resolve(__dirname, &#39;src&#39;)</span>
<span class="line">        }</span>
<span class="line">    },</span>
<span class="line">    module: {</span>
<span class="line">        rules: [</span>
<span class="line">            {</span>
<span class="line">                test: /\\.js$/,</span>
<span class="line">                enforce: &#39;pre&#39;,</span>
<span class="line">                use: [&#39;source-map-loader&#39;]</span>
<span class="line">            },</span>
<span class="line">            {</span>
<span class="line">                test: /\\.js/,</span>
<span class="line">                use: {</span>
<span class="line">                    loader: &#39;babel-loader&#39;,</span>
<span class="line">                    options: {</span>
<span class="line">                        presets: [</span>
<span class="line">                            &quot;@babel/preset-env&quot;,</span>
<span class="line">                            &quot;@babel/preset-react&quot;</span>
<span class="line">                        ]</span>
<span class="line">                    }</span>
<span class="line">                },</span>
<span class="line">                exclude: /node_modules/</span>
<span class="line">            },</span>
<span class="line">+           {</span>
<span class="line">+               test: /\\.css$/,</span>
<span class="line">+               use: [</span>
<span class="line">+                   {</span>
<span class="line">+                       loader: &#39;isomorphic-style-loader-react18&#39;</span>
<span class="line">+                   },</span>
<span class="line">+                   {</span>
<span class="line">+                       loader: &#39;css-loader&#39;,</span>
<span class="line">+                       options: {</span>
<span class="line">+                           modules: true</span>
<span class="line">+                       }</span>
<span class="line">+                   }</span>
<span class="line">+               ]</span>
<span class="line">+           }</span>
<span class="line">+       ]</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10-5-src-server-index-js" tabindex="-1"><a class="header-anchor" href="#_10-5-src-server-index-js"><span>10.5 src\\server\\index.js</span></a></h3><p>src\\server\\index.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> renderToString <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-dom/server&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> StaticRouter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react-router-dom/server&quot;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> proxy <span class="token keyword">from</span> <span class="token string">&#39;express-http-proxy&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span><span class="token keyword">import</span> StyleContext <span class="token keyword">from</span> <span class="token string">&#39;isomorphic-style-loader-react18/StyleContext&#39;</span></span>
<span class="line"><span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;../App&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> getServerStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../store&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> matchRoutes <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-router-dom&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> routesConfig <span class="token keyword">from</span> <span class="token string">&#39;../routesConfig&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>express<span class="token punctuation">.</span><span class="token function">static</span><span class="token punctuation">(</span><span class="token string">&#39;public&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">&#39;/api&#39;</span><span class="token punctuation">,</span> <span class="token function">proxy</span><span class="token punctuation">(</span><span class="token string">&#39;http://localhost:5000&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">proxyReqPathResolver</span><span class="token punctuation">(</span><span class="token parameter">req</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">/api</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>req<span class="token punctuation">.</span>url<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;*&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> routeMatches <span class="token operator">=</span> <span class="token function">matchRoutes</span><span class="token punctuation">(</span>routesConfig<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">pathname</span><span class="token operator">:</span> req<span class="token punctuation">.</span>url <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>routeMatches<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">getServerStore</span><span class="token punctuation">(</span>req<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">const</span> promises <span class="token operator">=</span> routeMatches</span>
<span class="line">      <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> route <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> route<span class="token punctuation">.</span>element<span class="token punctuation">.</span>type<span class="token punctuation">.</span>loadData <span class="token operator">&amp;&amp;</span> route<span class="token punctuation">.</span>element<span class="token punctuation">.</span>type<span class="token punctuation">.</span><span class="token function">loadData</span><span class="token punctuation">(</span>store<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">data</span> <span class="token operator">=&gt;</span> data<span class="token punctuation">,</span> <span class="token parameter">error</span> <span class="token operator">=&gt;</span> error<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>App<span class="token punctuation">.</span>loadData <span class="token operator">&amp;&amp;</span> App<span class="token punctuation">.</span><span class="token function">loadData</span><span class="token punctuation">(</span>store<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>Boolean<span class="token punctuation">)</span></span>
<span class="line">    Promise<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span>promises<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span>req<span class="token punctuation">.</span>url <span class="token operator">===</span> <span class="token string">&#39;/profile&#39;</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token punctuation">(</span>store<span class="token punctuation">.</span><span class="token function">getState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>auth<span class="token punctuation">.</span>user<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> res<span class="token punctuation">.</span><span class="token function">redirect</span><span class="token punctuation">(</span><span class="token string">&#39;/login&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>routeMatches<span class="token punctuation">[</span>routeMatches<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>route<span class="token punctuation">.</span>path <span class="token operator">===</span> <span class="token string">&#39;*&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        res<span class="token punctuation">.</span>statusCode <span class="token operator">=</span> <span class="token number">404</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">+</span>     <span class="token keyword">const</span> css <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token operator">+</span>     <span class="token keyword">const</span> <span class="token function-variable function">insertCss</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>styles</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> styles<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">style</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>       css<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>style<span class="token punctuation">.</span><span class="token function">_getCss</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token operator">+</span>     <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token keyword">const</span> html <span class="token operator">=</span> <span class="token function">renderToString</span><span class="token punctuation">(</span></span>
<span class="line">        <span class="token operator">&lt;</span>StaticRouter location<span class="token operator">=</span><span class="token punctuation">{</span>req<span class="token punctuation">.</span>url<span class="token punctuation">}</span><span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">+</span>         <span class="token operator">&lt;</span>StyleContext<span class="token punctuation">.</span>Provider value<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> insertCss <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&gt;</span></span>
<span class="line">            <span class="token operator">&lt;</span>App store<span class="token operator">=</span><span class="token punctuation">{</span>store<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">+</span>         <span class="token operator">&lt;</span><span class="token operator">/</span>StyleContext<span class="token punctuation">.</span>Provider<span class="token operator">&gt;</span></span>
<span class="line">        <span class="token operator">&lt;</span><span class="token operator">/</span>StaticRouter<span class="token operator">&gt;</span></span>
<span class="line">      <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string"></span>
<span class="line">      &lt;html&gt;</span>
<span class="line">        &lt;head&gt;</span>
<span class="line">          &lt;meta charset=&quot;UTF-8&quot;&gt;</span>
<span class="line">          &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;</span>
<span class="line">          &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;ie=edge&quot;&gt;</span>
<span class="line">          &lt;title&gt;ssr&lt;/title&gt;</span>
<span class="line">+         &lt;style&gt;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token punctuation">[</span><span class="token operator">...</span>css<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/style&gt;</span>
<span class="line">        &lt;/head&gt;</span>
<span class="line">        &lt;body&gt;</span>
<span class="line">        &lt;div id=&quot;root&quot;&gt;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>html<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/div&gt;</span>
<span class="line">        &lt;script&gt;</span>
<span class="line">          var context = {</span>
<span class="line">           state:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>store<span class="token punctuation">.</span><span class="token function">getState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"></span>
<span class="line">          }</span>
<span class="line">        &lt;/script&gt;</span>
<span class="line">        &lt;script src=&quot;/client.js&quot;&gt;&lt;/script&gt;</span>
<span class="line">      &lt;/body&gt;</span>
<span class="line">      &lt;/html&gt;</span>
<span class="line">  </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">    res<span class="token punctuation">.</span><span class="token function">sendStatus</span><span class="token punctuation">(</span><span class="token number">404</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;server started on 3000&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10-6-src-client-index-js" tabindex="-1"><a class="header-anchor" href="#_10-6-src-client-index-js"><span>10.6 src\\client\\index.js</span></a></h3><p>src\\client\\index.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React from &#39;react&#39;;</span>
<span class="line">import { hydrateRoot } from &#39;react-dom/client&#39;;</span>
<span class="line">import { BrowserRouter } from &#39;react-router-dom&#39;;</span>
<span class="line">+import StyleContext from &#39;isomorphic-style-loader-react18/StyleContext&#39;</span>
<span class="line">import { getClientStore } from &#39;../store&#39;;</span>
<span class="line">import App from &#39;../App&#39;;</span>
<span class="line">const root = document.getElementById(&#39;root&#39;);</span>
<span class="line">const store = getClientStore();</span>
<span class="line">+const insertCss = (...styles) =&gt; {</span>
<span class="line">+  const removeCss = styles.map(style =&gt; style._insertCss())</span>
<span class="line">+  return () =&gt; removeCss.forEach(dispose =&gt; dispose())</span>
<span class="line">+}</span>
<span class="line">hydrateRoot(root,</span>
<span class="line">  &lt;BrowserRouter&gt;</span>
<span class="line">+   &lt;StyleContext.Provider value={{ insertCss }}&gt;</span>
<span class="line">+     &lt;App store={store} /&gt;</span>
<span class="line">+   &lt;/StyleContext.Provider&gt;</span>
<span class="line">  &lt;/BrowserRouter&gt;);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_11-seo" tabindex="-1"><a class="header-anchor" href="#_11-seo"><span>11. SEO</span></a></h2><h3 id="_11-1-安装" tabindex="-1"><a class="header-anchor" href="#_11-1-安装"><span>11.1 安装</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">npm install react-helmet --save</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_11-2-src-routes-home-js" tabindex="-1"><a class="header-anchor" href="#_11-2-src-routes-home-js"><span>11.2 src\\routes\\Home.js</span></a></h3><p>src\\routes\\Home.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Helmet <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-helmet&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">Home</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">&gt;</span></span>
<span class="line">      <span class="token operator">&lt;</span>Helmet<span class="token operator">&gt;</span></span>
<span class="line">        <span class="token operator">&lt;</span>title<span class="token operator">&gt;</span>首页标题<span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">&gt;</span></span>
<span class="line">        <span class="token operator">&lt;</span>meta name<span class="token operator">=</span><span class="token string">&quot;description&quot;</span> content<span class="token operator">=</span><span class="token string">&quot;首页描述&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>meta<span class="token operator">&gt;</span></span>
<span class="line">      <span class="token operator">&lt;</span><span class="token operator">/</span>Helmet<span class="token operator">&gt;</span></span>
<span class="line">      <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span></span>
<span class="line">        Home</span>
<span class="line">      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line">  <span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> Home<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_11-3-src-server-index-js" tabindex="-1"><a class="header-anchor" href="#_11-3-src-server-index-js"><span>11.3 src\\server\\index.js</span></a></h3><p>src\\server\\index.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> renderToString <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-dom/server&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> StaticRouter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react-router-dom/server&quot;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> proxy <span class="token keyword">from</span> <span class="token string">&#39;express-http-proxy&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> StyleContext <span class="token keyword">from</span> <span class="token string">&#39;isomorphic-style-loader-react18/StyleContext&#39;</span></span>
<span class="line"><span class="token operator">+</span><span class="token keyword">import</span> <span class="token punctuation">{</span> Helmet <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-helmet&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;../App&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> getServerStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../store&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> matchRoutes <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-router-dom&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> routesConfig <span class="token keyword">from</span> <span class="token string">&#39;../routesConfig&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>express<span class="token punctuation">.</span><span class="token function">static</span><span class="token punctuation">(</span><span class="token string">&#39;public&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">&#39;/api&#39;</span><span class="token punctuation">,</span> <span class="token function">proxy</span><span class="token punctuation">(</span><span class="token string">&#39;http://localhost:5000&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">proxyReqPathResolver</span><span class="token punctuation">(</span><span class="token parameter">req</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">/api</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>req<span class="token punctuation">.</span>url<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;*&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> routeMatches <span class="token operator">=</span> <span class="token function">matchRoutes</span><span class="token punctuation">(</span>routesConfig<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">pathname</span><span class="token operator">:</span> req<span class="token punctuation">.</span>url <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>routeMatches<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">getServerStore</span><span class="token punctuation">(</span>req<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">const</span> promises <span class="token operator">=</span> routeMatches</span>
<span class="line">      <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> route <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> route<span class="token punctuation">.</span>element<span class="token punctuation">.</span>type<span class="token punctuation">.</span>loadData <span class="token operator">&amp;&amp;</span> route<span class="token punctuation">.</span>element<span class="token punctuation">.</span>type<span class="token punctuation">.</span><span class="token function">loadData</span><span class="token punctuation">(</span>store<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">data</span> <span class="token operator">=&gt;</span> data<span class="token punctuation">,</span> <span class="token parameter">error</span> <span class="token operator">=&gt;</span> error<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>App<span class="token punctuation">.</span>loadData <span class="token operator">&amp;&amp;</span> App<span class="token punctuation">.</span><span class="token function">loadData</span><span class="token punctuation">(</span>store<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>Boolean<span class="token punctuation">)</span></span>
<span class="line">    Promise<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span>promises<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span>req<span class="token punctuation">.</span>url <span class="token operator">===</span> <span class="token string">&#39;/profile&#39;</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token punctuation">(</span>store<span class="token punctuation">.</span><span class="token function">getState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>auth<span class="token punctuation">.</span>user<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> res<span class="token punctuation">.</span><span class="token function">redirect</span><span class="token punctuation">(</span><span class="token string">&#39;/login&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>routeMatches<span class="token punctuation">[</span>routeMatches<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>route<span class="token punctuation">.</span>path <span class="token operator">===</span> <span class="token string">&#39;*&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        res<span class="token punctuation">.</span>statusCode <span class="token operator">=</span> <span class="token number">404</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">      <span class="token keyword">const</span> css <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token keyword">const</span> <span class="token function-variable function">insertCss</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>styles</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> styles<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">style</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">        css<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>style<span class="token punctuation">.</span><span class="token function">_getCss</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token operator">+</span>     <span class="token keyword">let</span> helmet <span class="token operator">=</span> Helmet<span class="token punctuation">.</span><span class="token function">renderStatic</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">const</span> html <span class="token operator">=</span> <span class="token function">renderToString</span><span class="token punctuation">(</span></span>
<span class="line">        <span class="token operator">&lt;</span>StaticRouter location<span class="token operator">=</span><span class="token punctuation">{</span>req<span class="token punctuation">.</span>url<span class="token punctuation">}</span><span class="token operator">&gt;</span></span>
<span class="line">          <span class="token operator">&lt;</span>StyleContext<span class="token punctuation">.</span>Provider value<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> insertCss <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&gt;</span></span>
<span class="line">            <span class="token operator">&lt;</span>App store<span class="token operator">=</span><span class="token punctuation">{</span>store<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line">          <span class="token operator">&lt;</span><span class="token operator">/</span>StyleContext<span class="token punctuation">.</span>Provider<span class="token operator">&gt;</span></span>
<span class="line">        <span class="token operator">&lt;</span><span class="token operator">/</span>StaticRouter<span class="token operator">&gt;</span></span>
<span class="line">      <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">      res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string"></span>
<span class="line">      &lt;html&gt;</span>
<span class="line">        &lt;head&gt;</span>
<span class="line">          &lt;meta charset=&quot;UTF-8&quot;&gt;</span>
<span class="line">          &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;</span>
<span class="line">          &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;ie=edge&quot;&gt;</span>
<span class="line">+         </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>helmet<span class="token punctuation">.</span>title<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"></span>
<span class="line">+         </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>helmet<span class="token punctuation">.</span>meta<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"></span>
<span class="line">          &lt;style&gt;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token punctuation">[</span><span class="token operator">...</span>css<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/style&gt;</span>
<span class="line">        &lt;/head&gt;</span>
<span class="line">        &lt;body&gt;</span>
<span class="line">        &lt;div id=&quot;root&quot;&gt;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>html<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/div&gt;</span>
<span class="line">        &lt;script&gt;</span>
<span class="line">          var context = {</span>
<span class="line">           state:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>store<span class="token punctuation">.</span><span class="token function">getState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"></span>
<span class="line">          }</span>
<span class="line">        &lt;/script&gt;</span>
<span class="line">        &lt;script src=&quot;/client.js&quot;&gt;&lt;/script&gt;</span>
<span class="line">      &lt;/body&gt;</span>
<span class="line">      &lt;/html&gt;</span>
<span class="line">  </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">    res<span class="token punctuation">.</span><span class="token function">sendStatus</span><span class="token punctuation">(</span><span class="token number">404</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;server started on 3000&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_12-流式ssr" tabindex="-1"><a class="header-anchor" href="#_12-流式ssr"><span>12. 流式SSR</span></a></h2><h3 id="_12-1-user-js" tabindex="-1"><a class="header-anchor" href="#_12-1-user-js"><span>12.1 user.js</span></a></h3><p>src\\store\\actionCreators\\user.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import { SET_USER_LIST, ADD_USER } from &#39;../action-types&#39;;</span>
<span class="line">const actions = {</span>
<span class="line">  getUserList() {</span>
<span class="line">    return function (dispatch, getState, request) {</span>
<span class="line">      return request.get(&#39;/api/users&#39;).then((response) =&gt; {</span>
<span class="line">        const { data } = response.data;</span>
<span class="line">        dispatch({</span>
<span class="line">          type: SET_USER_LIST,</span>
<span class="line">          payload: data</span>
<span class="line">        });</span>
<span class="line">+       return getState().user.list;</span>
<span class="line">      });</span>
<span class="line">    }</span>
<span class="line">  },</span>
<span class="line">  addUser(user) {</span>
<span class="line">    return { type: ADD_USER, payload: user }</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line">export default actions;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_12-2-server-index-js" tabindex="-1"><a class="header-anchor" href="#_12-2-server-index-js"><span>12.2 server\\index.js</span></a></h3><p>src\\server\\index.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span><span class="token keyword">import</span> <span class="token punctuation">{</span> renderToPipeableStream <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-dom/server&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> StaticRouter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react-router-dom/server&quot;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> proxy <span class="token keyword">from</span> <span class="token string">&#39;express-http-proxy&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> StyleContext <span class="token keyword">from</span> <span class="token string">&#39;isomorphic-style-loader-react18/StyleContext&#39;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Helmet <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-helmet&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;../App&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> getServerStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../store&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> matchRoutes <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-router-dom&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> routesConfig <span class="token keyword">from</span> <span class="token string">&#39;../routesConfig&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>express<span class="token punctuation">.</span><span class="token function">static</span><span class="token punctuation">(</span><span class="token string">&#39;public&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">&#39;/api&#39;</span><span class="token punctuation">,</span> <span class="token function">proxy</span><span class="token punctuation">(</span><span class="token string">&#39;http://localhost:5000&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">proxyReqPathResolver</span><span class="token punctuation">(</span><span class="token parameter">req</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">/api</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>req<span class="token punctuation">.</span>url<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;*&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> routeMatches <span class="token operator">=</span> <span class="token function">matchRoutes</span><span class="token punctuation">(</span>routesConfig<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">pathname</span><span class="token operator">:</span> req<span class="token punctuation">.</span>url <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>routeMatches<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">getServerStore</span><span class="token punctuation">(</span>req<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">const</span> promises <span class="token operator">=</span> routeMatches</span>
<span class="line">      <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> route <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> route<span class="token punctuation">.</span>element<span class="token punctuation">.</span>type<span class="token punctuation">.</span>loadData <span class="token operator">&amp;&amp;</span> route<span class="token punctuation">.</span>element<span class="token punctuation">.</span>type<span class="token punctuation">.</span><span class="token function">loadData</span><span class="token punctuation">(</span>store<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">data</span> <span class="token operator">=&gt;</span> data<span class="token punctuation">,</span> <span class="token parameter">error</span> <span class="token operator">=&gt;</span> error<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>App<span class="token punctuation">.</span>loadData <span class="token operator">&amp;&amp;</span> App<span class="token punctuation">.</span><span class="token function">loadData</span><span class="token punctuation">(</span>store<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>Boolean<span class="token punctuation">)</span></span>
<span class="line">    Promise<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span>promises<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span>req<span class="token punctuation">.</span>url <span class="token operator">===</span> <span class="token string">&#39;/profile&#39;</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token punctuation">(</span>store<span class="token punctuation">.</span><span class="token function">getState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>auth<span class="token punctuation">.</span>user<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> res<span class="token punctuation">.</span><span class="token function">redirect</span><span class="token punctuation">(</span><span class="token string">&#39;/login&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>routeMatches<span class="token punctuation">[</span>routeMatches<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>route<span class="token punctuation">.</span>path <span class="token operator">===</span> <span class="token string">&#39;*&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        res<span class="token punctuation">.</span>statusCode <span class="token operator">=</span> <span class="token number">404</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">      <span class="token keyword">const</span> css <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token keyword">const</span> <span class="token function-variable function">insertCss</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>styles</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> styles<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">style</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">        css<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>style<span class="token punctuation">.</span><span class="token function">_getCss</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token keyword">let</span> helmet <span class="token operator">=</span> Helmet<span class="token punctuation">.</span><span class="token function">renderStatic</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>     <span class="token keyword">const</span> <span class="token punctuation">{</span> pipe <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">renderToPipeableStream</span><span class="token punctuation">(</span></span>
<span class="line">        <span class="token operator">&lt;</span>StaticRouter location<span class="token operator">=</span><span class="token punctuation">{</span>req<span class="token punctuation">.</span>url<span class="token punctuation">}</span><span class="token operator">&gt;</span></span>
<span class="line">          <span class="token operator">&lt;</span>StyleContext<span class="token punctuation">.</span>Provider value<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> insertCss <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&gt;</span></span>
<span class="line">            <span class="token operator">&lt;</span>App store<span class="token operator">=</span><span class="token punctuation">{</span>store<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line">          <span class="token operator">&lt;</span><span class="token operator">/</span>StyleContext<span class="token punctuation">.</span>Provider<span class="token operator">&gt;</span></span>
<span class="line">        <span class="token operator">&lt;</span><span class="token operator">/</span>StaticRouter<span class="token operator">&gt;</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token operator">+</span>        <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>          <span class="token function">onShellReady</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>            res<span class="token punctuation">.</span>statusCode <span class="token operator">=</span> <span class="token number">200</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>            res<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">&#39;Content-type&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;text/html;charset=utf8&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>            res<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string"></span>
<span class="line">+            &lt;html&gt;</span>
<span class="line">+            &lt;head&gt;</span>
<span class="line">+              &lt;title&gt;ssr&lt;/title/&gt;</span>
<span class="line">+                </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>helmet<span class="token punctuation">.</span>title<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"></span>
<span class="line">+                </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>helmet<span class="token punctuation">.</span>meta<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"></span>
<span class="line">+              &lt;style&gt;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token punctuation">[</span><span class="token operator">...</span>css<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/style&gt;</span>
<span class="line">+            &lt;/head&gt;</span>
<span class="line">+            &lt;body&gt;</span>
<span class="line">+            &lt;div id=&quot;root&quot;&gt;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>            <span class="token function">pipe</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>            res<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;/div&gt;</span>
<span class="line">+            &lt;script&gt;</span>
<span class="line">+              var context = {</span>
<span class="line">+              state:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>store<span class="token punctuation">.</span><span class="token function">getState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"></span>
<span class="line">+              }</span>
<span class="line">+            &lt;/script&gt;</span>
<span class="line">+            &lt;script src=&quot;/client.js&quot;&gt;&lt;/script&gt;</span>
<span class="line">+          &lt;/body&gt;</span>
<span class="line">+          &lt;/html&gt;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">    res<span class="token punctuation">.</span><span class="token function">sendStatus</span><span class="token punctuation">(</span><span class="token number">404</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;server started on 3000&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_12-3-src-routes-userlist-js" tabindex="-1"><a class="header-anchor" href="#_12-3-src-routes-userlist-js"><span>12.3 src\\routes\\UserList.js</span></a></h3><p>src\\routes\\UserList.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">+import React, { Suspense, useRef } from &#39;react&#39;;</span>
<span class="line">import { useDispatch, useSelector } from &#39;react-redux&#39;;</span>
<span class="line">import actionCreators from &#39;@/store/actionCreators/user&#39;;</span>
<span class="line">function UserList() {</span>
<span class="line">+   const dispatch = useDispatch();</span>
<span class="line">+   const resourceRef = useRef();</span>
<span class="line">+   if (!resourceRef.current) {</span>
<span class="line">+       const promise = dispatch(actionCreators.getUserList());</span>
<span class="line">+       const resource = wrapPromise(promise);</span>
<span class="line">+       resourceRef.current = resource;</span>
<span class="line">+   }</span>
<span class="line">+   return (</span>
<span class="line">+       &lt;Suspense fallback={&lt;div&gt;loading...&lt;/div&gt;}&gt;</span>
<span class="line">+           &lt;LazyList resource={resourceRef.current} /&gt;</span>
<span class="line">+       &lt;/Suspense&gt;</span>
<span class="line">+   )</span>
<span class="line">}</span>
<span class="line">+function LazyList({ resource }) {</span>
<span class="line">+    const userList = resource.read();</span>
<span class="line">+    return (</span>
<span class="line">+        &lt;ul&gt;</span>
<span class="line">+            {</span>
<span class="line">+                userList.map(item =&gt; &lt;li key={item.id}&gt;{item.name}&lt;/li&gt;)</span>
<span class="line">+            }</span>
<span class="line">+        &lt;/ul&gt;</span>
<span class="line">+    )</span>
<span class="line">+}</span>
<span class="line">+/* </span>
<span class="line">+const promise = getUserList()</span>
<span class="line">+const resource = wrapPromise(promise);</span>
<span class="line">+function getUserList() {</span>
<span class="line">+    return new Promise((resolve) =&gt; {</span>
<span class="line">+        setTimeout(() =&gt; {</span>
<span class="line">+            resolve([</span>
<span class="line">+                { id: 1, name: &#39;zhufeng1&#39; },</span>
<span class="line">+                { id: 2, name: &#39;zhufeng2&#39; },</span>
<span class="line">+                { id: 3, name: &#39;zhufeng3&#39; }</span>
<span class="line">+            ])</span>
<span class="line">+        }, 5000)</span>
<span class="line">+    });</span>
<span class="line">+} </span>
<span class="line">+*/</span>
<span class="line">+function wrapPromise(promise) {</span>
<span class="line">+    let status = &quot;pending&quot;;</span>
<span class="line">+    let result;</span>
<span class="line">+    let suspender = promise.then(</span>
<span class="line">+        (r) =&gt; {</span>
<span class="line">+            status = &quot;success&quot;;</span>
<span class="line">+            result = r;</span>
<span class="line">+        },</span>
<span class="line">+        (e) =&gt; {</span>
<span class="line">+            status = &quot;error&quot;;</span>
<span class="line">+            result = e;</span>
<span class="line">+        }</span>
<span class="line">+    );</span>
<span class="line">+    return {</span>
<span class="line">+        read() {</span>
<span class="line">+            if (status === &quot;pending&quot;) {</span>
<span class="line">+                throw suspender;</span>
<span class="line">+            } else if (status === &quot;error&quot;) {</span>
<span class="line">+                throw result;</span>
<span class="line">+            } else if (status === &quot;success&quot;) {</span>
<span class="line">+                return result;</span>
<span class="line">+            }</span>
<span class="line">+        }</span>
<span class="line">+    };</span>
<span class="line">+}</span>
<span class="line">export default UserList;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_12-4-api-js" tabindex="-1"><a class="header-anchor" href="#_12-4-api-js"><span>12.4 api.js</span></a></h3><p>api.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">const express = require(&#39;express&#39;)</span>
<span class="line">const cors = require(&#39;cors&#39;);</span>
<span class="line">const session = require(&#39;express-session&#39;);</span>
<span class="line">const app = express();</span>
<span class="line">app.use(cors());</span>
<span class="line">app.use(session({</span>
<span class="line">  saveUninitialized: true,</span>
<span class="line">  resave: true,</span>
<span class="line">  secret: &#39;zhufeng&#39;</span>
<span class="line">}))</span>
<span class="line">app.use(express.json());</span>
<span class="line">app.use(express.urlencoded({ extended: true }));</span>
<span class="line">const users = [{ id: 1, name: &#39;zhufeng1&#39; }, { id: 2, name: &#39;zhufeng2&#39; }, { id: 3, name: &#39;zhufeng3&#39; }];</span>
<span class="line">app.get(&#39;/api/users&#39;, (req, res) =&gt; {</span>
<span class="line">+ setTimeout(() =&gt; {</span>
<span class="line">+   res.json({</span>
<span class="line">+     success: true,</span>
<span class="line">+     data: users</span>
<span class="line">+   });</span>
<span class="line">+ }, 5000);</span>
<span class="line">});</span>
<span class="line">app.post(&#39;/api/login&#39;, (req, res) =&gt; {</span>
<span class="line">  const user = req.body;</span>
<span class="line">  req.session.user = user;</span>
<span class="line">  res.json({</span>
<span class="line">    success: true,</span>
<span class="line">    data: user</span>
<span class="line">  });</span>
<span class="line">});</span>
<span class="line">app.get(&#39;/api/logout&#39;, (req, res) =&gt; {</span>
<span class="line">  req.session.user = null;</span>
<span class="line">  res.json({</span>
<span class="line">    success: true</span>
<span class="line">  });</span>
<span class="line">});</span>
<span class="line">app.get(&#39;/api/user&#39;, (req, res) =&gt; {</span>
<span class="line">  const user = req.session.user;</span>
<span class="line">  if (user) {</span>
<span class="line">    res.json({</span>
<span class="line">      success: true,</span>
<span class="line">      data: user</span>
<span class="line">    });</span>
<span class="line">  } else {</span>
<span class="line">    res.json({</span>
<span class="line">      success: false,</span>
<span class="line">      error: &#39;用户未登录&#39;</span>
<span class="line">    });</span>
<span class="line">  }</span>
<span class="line">});</span>
<span class="line">app.listen(5000, () =&gt; console.log(&#39;api server started on port 5000&#39;));</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_13-参考" tabindex="-1"><a class="header-anchor" href="#_13-参考"><span>13.参考</span></a></h2><h3 id="_13-1-源码参考" tabindex="-1"><a class="header-anchor" href="#_13-1-源码参考"><span>13.1 源码参考</span></a></h3><ul><li><a href="https://zh-hans.reactjs.org/docs/react-dom-server.html" target="_blank" rel="noopener noreferrer">react-dom-server</a></li><li><a href="https://github.com/reduxjs/redux/blob/master/src/createStore.ts" target="_blank" rel="noopener noreferrer">createStore.ts</a></li><li><a href="https://github.com/reduxjs/redux-thunk/blob/master/src/index.ts" target="_blank" rel="noopener noreferrer">redux-thunk</a></li></ul><h3 id="_13-2-水合" tabindex="-1"><a class="header-anchor" href="#_13-2-水合"><span>13.2 水合</span></a></h3><ul><li>水合反应（ hydrated reaction），也叫作水化</li><li>是指物质溶解在水里时，与水发生的化学作用,水合分子的过程</li><li>组件在服务器端拉取数据(水)，并在服务器端首次渲染</li><li>脱水: 对组件进行脱水，变成HTML字符串，脱去动态数据，成为风干标本快照</li><li>注水：发送到客户端后，重新注入数据(水)，重新变成可交互组件</li></ul><p><img src="https://static.zhufengpeixun.com/huoyiner_1644572048109.jfif" alt=""><br><img src="https://static.zhufengpeixun.com/saiyiner_1644571994221.jfif" alt=""><br><img src="https://static.zhufengpeixun.com/paofayiner_1644572007011.jpeg" alt=""></p>`,245)])])}const o=n(t,[["render",l]]),r=JSON.parse('{"path":"/strong/106.14.ssr.html","title":"","lang":"en-US","frontmatter":{},"git":{"updatedTime":1681290319000,"contributors":[{"name":"yutao","username":"yutao","email":"642231346@qq.com","commits":1,"url":"https://github.com/yutao"}],"changelog":[{"hash":"f5ab8c9d34991ec274f7f652439afe5b2afb6147","time":1681290319000,"email":"642231346@qq.com","author":"yutao","message":"modify"}]},"filePathRelative":"strong/106.14.ssr.md"}');export{o as comp,r as data};
