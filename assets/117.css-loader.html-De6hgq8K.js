import{_ as n,c as a,a as e,o as p}from"./app-CD1YpnS1.js";const l={};function t(i,s){return p(),a("div",null,[...s[0]||(s[0]=[e(`<h2 id="_1-css-loader" tabindex="-1"><a class="header-anchor" href="#_1-css-loader"><span>1. css-loader</span></a></h2><ul><li><a href="https://www.npmjs.com/package/css-loader" target="_blank" rel="noopener noreferrer">css-loader</a>可以把@import and url()翻译成import/require(),然后可以解析处理它们</li></ul><h3 id="_1-1-安装" tabindex="-1"><a class="header-anchor" href="#_1-1-安装"><span>1.1 安装</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">cnpm i webpack webpack-cli webpack-dev-server html-webpack-plugin css-loader css-selector-tokenizer file-loader less less-loader postcss style-loader to-string-loader -D</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="_2-使用css" tabindex="-1"><a class="header-anchor" href="#_2-使用css"><span>2. 使用CSS</span></a></h2><h3 id="_2-1-webpack-config-js" tabindex="-1"><a class="header-anchor" href="#_2-1-webpack-config-js"><span>2.1 webpack.config.js</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;html-webpack-plugin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">mode</span><span class="token operator">:</span><span class="token string">&#39;development&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">devtool</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">module</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">rules</span><span class="token operator">:</span><span class="token punctuation">[</span></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">                <span class="token literal-property property">test</span><span class="token operator">:</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token literal-property property">use</span><span class="token operator">:</span><span class="token punctuation">[</span></span>
<span class="line">                    <span class="token string">&quot;to-string-loader&quot;</span><span class="token punctuation">,</span></span>
<span class="line">                    <span class="token punctuation">{</span></span>
<span class="line">                        <span class="token literal-property property">loader</span><span class="token operator">:</span><span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">,</span></span>
<span class="line">                        <span class="token literal-property property">options</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">                            <span class="token literal-property property">url</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">                            <span class="token keyword">import</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">                            <span class="token literal-property property">esModule</span><span class="token operator">:</span> <span class="token boolean">false</span></span>
<span class="line">                        <span class="token punctuation">}</span></span>
<span class="line">                    <span class="token punctuation">}</span></span>
<span class="line">                <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token literal-property property">include</span><span class="token operator">:</span>path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;src&#39;</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">plugins</span><span class="token operator">:</span><span class="token punctuation">[</span></span>
<span class="line">        <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">template</span><span class="token operator">:</span><span class="token string">&#39;./src/index.html&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-src-index-js" tabindex="-1"><a class="header-anchor" href="#_2-2-src-index-js"><span>2.2 src\\index.js</span></a></h3><p>src\\index.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">const</span> css <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;./global.css&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>css<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-src-global-css" tabindex="-1"><a class="header-anchor" href="#_2-3-src-global-css"><span>2.3 src\\global.css</span></a></h3><p>src\\global.css</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">body {</span>
<span class="line">    background-color: green;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-dist-main-js" tabindex="-1"><a class="header-anchor" href="#_2-4-dist-main-js"><span>2.4 dist\\main.js</span></a></h3><p>dist\\main.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">var</span> modules <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">&quot;css-loader/dist/cjs.js!./src/global.css&quot;</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">module<span class="token punctuation">,</span> exports<span class="token punctuation">,</span> require</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">var</span> ___CSS_LOADER_API_IMPORT___ <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;css-loader/dist/runtime/api.js&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">var</span> ___CSS_LOADER_EXPORT___ <span class="token operator">=</span> <span class="token function">___CSS_LOADER_API_IMPORT___</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> i<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      ___CSS_LOADER_EXPORT___<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span></span>
<span class="line">        module<span class="token punctuation">.</span>id<span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&quot;body {\\r\\n    background-color: green;\\r\\n  }&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      module<span class="token punctuation">.</span>exports <span class="token operator">=</span> ___CSS_LOADER_EXPORT___<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">&quot;css-loader/dist/runtime/api.js&quot;</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">module</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">      module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">var</span> list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">        list<span class="token punctuation">.</span><span class="token function-variable function">toString</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span> list<span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">&quot;./src/global.css&quot;</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">module<span class="token punctuation">,</span> exports<span class="token punctuation">,</span> require</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;css-loader/dist/cjs.js!./src/global.css&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> result <span class="token operator">===</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        module<span class="token punctuation">.</span>exports <span class="token operator">=</span> result<span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">        module<span class="token punctuation">.</span>exports <span class="token operator">=</span> result<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">var</span> cache <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">function</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token parameter">moduleId</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>cache<span class="token punctuation">[</span>moduleId<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">return</span> cache<span class="token punctuation">[</span>moduleId<span class="token punctuation">]</span><span class="token punctuation">.</span>exports<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">var</span> module <span class="token operator">=</span> <span class="token punctuation">(</span>cache<span class="token punctuation">[</span>moduleId<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">id</span><span class="token operator">:</span> moduleId<span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">exports</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    modules<span class="token punctuation">[</span>moduleId<span class="token punctuation">]</span><span class="token punctuation">(</span>module<span class="token punctuation">,</span> module<span class="token punctuation">.</span>exports<span class="token punctuation">,</span> require<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> module<span class="token punctuation">.</span>exports<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> css <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;./src/global.css&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>css<span class="token punctuation">,</span> css<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-5-实现main-js" tabindex="-1"><a class="header-anchor" href="#_2-5-实现main-js"><span>2.5 实现main.js</span></a></h3><h4 id="_2-5-1-第1版" tabindex="-1"><a class="header-anchor" href="#_2-5-1-第1版"><span>2.5.1 第1版</span></a></h4><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">var</span> modules <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">&quot;./src/global.css&quot;</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">module<span class="token punctuation">,</span> exports<span class="token punctuation">,</span> require</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">      module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token string">&quot;body {\\r\\n    background-color: green;\\r\\n  }&quot;</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">var</span> cache <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">function</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token parameter">moduleId</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>cache<span class="token punctuation">[</span>moduleId<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">return</span> cache<span class="token punctuation">[</span>moduleId<span class="token punctuation">]</span><span class="token punctuation">.</span>exports<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">var</span> module <span class="token operator">=</span> <span class="token punctuation">(</span>cache<span class="token punctuation">[</span>moduleId<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">id</span><span class="token operator">:</span> moduleId<span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">exports</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    modules<span class="token punctuation">[</span>moduleId<span class="token punctuation">]</span><span class="token punctuation">(</span>module<span class="token punctuation">,</span> module<span class="token punctuation">.</span>exports<span class="token punctuation">,</span> require<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> module<span class="token punctuation">.</span>exports<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> css <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;./src/global.css&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>css<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-5-2-第2版" tabindex="-1"><a class="header-anchor" href="#_2-5-2-第2版"><span>2.5.2 第2版</span></a></h4><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">var</span> modules <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">&quot;./src/global.css&quot;</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">module<span class="token punctuation">,</span> exports<span class="token punctuation">,</span> require</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token keyword">debugger</span></span>
<span class="line">      <span class="token keyword">var</span> list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">      list<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span></span>
<span class="line">        module<span class="token punctuation">.</span>id<span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&quot;body {\\r\\n    background-color: green;\\r\\n  }&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">let</span> <span class="token function-variable function">cssWithMappingToString</span> <span class="token operator">=</span> <span class="token parameter">item</span><span class="token operator">=&gt;</span>item<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">let</span> css <span class="token operator">=</span>  list<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token operator">=&gt;</span><span class="token function">cssWithMappingToString</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      module<span class="token punctuation">.</span>exports <span class="token operator">=</span> css<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">var</span> cache <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">function</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token parameter">moduleId</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>cache<span class="token punctuation">[</span>moduleId<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">return</span> cache<span class="token punctuation">[</span>moduleId<span class="token punctuation">]</span><span class="token punctuation">.</span>exports<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">var</span> module <span class="token operator">=</span> <span class="token punctuation">(</span>cache<span class="token punctuation">[</span>moduleId<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">id</span><span class="token operator">:</span> moduleId<span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">exports</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    modules<span class="token punctuation">[</span>moduleId<span class="token punctuation">]</span><span class="token punctuation">(</span>module<span class="token punctuation">,</span> module<span class="token punctuation">.</span>exports<span class="token punctuation">,</span> require<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> module<span class="token punctuation">.</span>exports<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> css <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;./src/global.css&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>css<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-5-3-第3版" tabindex="-1"><a class="header-anchor" href="#_2-5-3-第3版"><span>2.5.3 第3版</span></a></h4><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">var</span> modules <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">&quot;css-loader.js!./src/global.css&quot;</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">module<span class="token punctuation">,</span> exports<span class="token punctuation">,</span> require</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">var</span> api <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;api.js&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">var</span> <span class="token constant">EXPORT</span> <span class="token operator">=</span> <span class="token function">api</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> item<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token constant">EXPORT</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span></span>
<span class="line">        module<span class="token punctuation">.</span>id<span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&quot;body {\\r\\n    background-color: green;\\r\\n}&quot;</span></span>
<span class="line">      <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token constant">EXPORT</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">&quot;api.js&quot;</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">module</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">      module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">cssWithMappingToString</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">var</span> list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">        list<span class="token punctuation">.</span><span class="token function-variable function">toString</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">var</span> content <span class="token operator">=</span> <span class="token function">cssWithMappingToString</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">return</span> content<span class="token punctuation">;</span></span>
<span class="line">          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span> list<span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">&quot;./src/global.css&quot;</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">module<span class="token punctuation">,</span> exports<span class="token punctuation">,</span> require</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;css-loader.js!./src/global.css&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      module<span class="token punctuation">.</span>exports <span class="token operator">=</span> result<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">var</span> cache <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">function</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token parameter">moduleId</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>cache<span class="token punctuation">[</span>moduleId<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">return</span> cache<span class="token punctuation">[</span>moduleId<span class="token punctuation">]</span><span class="token punctuation">.</span>exports<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">var</span> module <span class="token operator">=</span> <span class="token punctuation">(</span>cache<span class="token punctuation">[</span>moduleId<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">id</span><span class="token operator">:</span> moduleId<span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">exports</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    modules<span class="token punctuation">[</span>moduleId<span class="token punctuation">]</span><span class="token punctuation">(</span>module<span class="token punctuation">,</span> module<span class="token punctuation">.</span>exports<span class="token punctuation">,</span> require<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> module<span class="token punctuation">.</span>exports<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> css <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;./src/global.css&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>css<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-import" tabindex="-1"><a class="header-anchor" href="#_3-import"><span>3. @import</span></a></h2><h3 id="_3-1-src-index-js" tabindex="-1"><a class="header-anchor" href="#_3-1-src-index-js"><span>3.1 src\\index.js</span></a></h3><p>src\\index.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token comment">//const css = require(&quot;./index.css&quot;);</span></span>
<span class="line"><span class="token keyword">const</span> css <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;./index.less&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>css<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-src-index-css" tabindex="-1"><a class="header-anchor" href="#_3-2-src-index-css"><span>3.2 src\\index.css</span></a></h3><p>src\\index.css</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line">@<span class="token keyword">import</span> <span class="token string">&quot;./global.css&quot;</span><span class="token punctuation">;</span></span>
<span class="line">body <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">color</span><span class="token operator">:</span> red<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-src-global-css" tabindex="-1"><a class="header-anchor" href="#_3-3-src-global-css"><span>3.3 src\\global.css</span></a></h3><p>src\\global.css</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">body {</span>
<span class="line">    background-color: green;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-4-src-index-less" tabindex="-1"><a class="header-anchor" href="#_3-4-src-index-less"><span>3.4 src\\index.less</span></a></h3><p>src\\index.less</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line">@<span class="token keyword">import</span> <span class="token string">&quot;./global.less&quot;</span><span class="token punctuation">;</span></span>
<span class="line">body <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">color</span><span class="token operator">:</span> red<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-5-src-global-less" tabindex="-1"><a class="header-anchor" href="#_3-5-src-global-less"><span>3.5 src\\global.less</span></a></h3><p>src\\global.less</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">body {</span>
<span class="line">    background-color: green;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-6-webpack-config-js" tabindex="-1"><a class="header-anchor" href="#_3-6-webpack-config-js"><span>3.6 webpack.config.js</span></a></h3><p>webpack.config.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">module.exports = {</span>
<span class="line">+    resolveLoader:{</span>
<span class="line">+        alias:{</span>
<span class="line">+            &#39;css-loader&#39;:path.resolve(__dirname,&#39;loaders&#39;,&#39;css-loader.js&#39;)</span>
<span class="line">+        }</span>
<span class="line">+    },</span>
<span class="line">+    module:{</span>
<span class="line">+        rules:[</span>
<span class="line">+            {</span>
<span class="line">+                test:/\\.css$/,</span>
<span class="line">+                use:[</span>
<span class="line">+                    &quot;to-string-loader&quot;,</span>
<span class="line">+                    {</span>
<span class="line">+                        loader:&#39;css-loader&#39;,</span>
<span class="line">+                        options:{</span>
<span class="line">+                            url:false,</span>
<span class="line">+                            import:true,</span>
<span class="line">+                            esModule: false</span>
<span class="line">+                        }</span>
<span class="line">+                    }</span>
<span class="line">+                ],</span>
<span class="line">+                include:path.resolve(&#39;src&#39;)</span>
<span class="line">+            },</span>
<span class="line">+            {</span>
<span class="line">+                test:/\\.less$/,</span>
<span class="line">+                use:[</span>
<span class="line">+                    &quot;to-string-loader&quot;,</span>
<span class="line">+                    {</span>
<span class="line">+                        loader:&#39;css-loader&#39;,</span>
<span class="line">+                        options:{</span>
<span class="line">+                            import:true,</span>
<span class="line">+                            url:false,</span>
<span class="line">+                            esModule: false,</span>
<span class="line">+                            importLoaders:1</span>
<span class="line">+                        }</span>
<span class="line">+                    },</span>
<span class="line">+                    {</span>
<span class="line">+                        loader:&#39;less-loader&#39;</span>
<span class="line">+                    }</span>
<span class="line">+                ],</span>
<span class="line">+                include:path.resolve(&#39;src&#39;)</span>
<span class="line">+            },</span>
<span class="line">+        ]</span>
<span class="line">+    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-7-dist-main-js" tabindex="-1"><a class="header-anchor" href="#_3-7-dist-main-js"><span>3.7 dist\\main.js</span></a></h3><p>dist\\main.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">(() =&gt; {</span>
<span class="line">  var modules = {</span>
<span class="line">    &quot;css-loader.js!./src/global.css&quot;: (module, exports, require) =&gt; {</span>
<span class="line">      var api = require(&quot;api.js&quot;);</span>
<span class="line">      var EXPORT = api(function (i) {</span>
<span class="line">        return i[1];</span>
<span class="line">      });</span>
<span class="line">      EXPORT.push([</span>
<span class="line">        module.id,</span>
<span class="line">        &quot;body {\\r\\n    background-color: green;\\r\\n}\\r\\n&quot;,</span>
<span class="line">        &quot;&quot;,</span>
<span class="line">      ]);</span>
<span class="line">      module.exports = EXPORT;</span>
<span class="line">    },</span>
<span class="line">    &quot;css-loader.js!./src/index.css&quot;: (module, exports, require) =&gt; {</span>
<span class="line">      var api = require(&quot;api.js&quot;);</span>
<span class="line">+     var GLOBAL_CSS = require(&quot;css-loader.js!./src/global.css&quot;);</span>
<span class="line">      var EXPORT = api(function (item) {</span>
<span class="line">        return item[1];</span>
<span class="line">      });</span>
<span class="line">+     EXPORT.i(GLOBAL_CSS);</span>
<span class="line">      EXPORT.push([</span>
<span class="line">        module.id,</span>
<span class="line">        &quot;body {\\r\\n    color: red;\\r\\n}&quot;,</span>
<span class="line">        &quot;&quot;,</span>
<span class="line">      ]);</span>
<span class="line">      module.exports = EXPORT;</span>
<span class="line">    },</span>
<span class="line">    &quot;api.js&quot;: (module) =&gt; {</span>
<span class="line">      module.exports = function (cssWithMappingToString) {</span>
<span class="line">        var list = [];</span>
<span class="line">        list.toString = function toString() {</span>
<span class="line">          return this.map(function (item) {</span>
<span class="line">            var content = cssWithMappingToString(item);</span>
<span class="line">            return content;</span>
<span class="line">          }).join(&quot;&quot;);</span>
<span class="line">        };</span>
<span class="line">+        list.i = function (modules) {</span>
<span class="line">+          for (var i = 0; i &lt; modules.length; i++) {</span>
<span class="line">+            list.push(modules[i]);</span>
<span class="line">+          }</span>
<span class="line">+        };</span>
<span class="line">        return list;</span>
<span class="line">      };</span>
<span class="line">    },</span>
<span class="line">    &quot;./src/index.css&quot;: (module, exports, require) =&gt; {</span>
<span class="line">      var result = require(&quot;css-loader.js!./src/index.css&quot;);</span>
<span class="line">      module.exports = result.toString();</span>
<span class="line">    },</span>
<span class="line">  };</span>
<span class="line">  var cache = {};</span>
<span class="line">  function require(moduleId) {</span>
<span class="line">    if (cache[moduleId]) {</span>
<span class="line">      return cache[moduleId].exports;</span>
<span class="line">    }</span>
<span class="line">    var module = (cache[moduleId] = {</span>
<span class="line">      id: moduleId,</span>
<span class="line">      exports: {},</span>
<span class="line">    });</span>
<span class="line">    modules[moduleId](module, module.exports, require);</span>
<span class="line">    return module.exports;</span>
<span class="line">  }</span>
<span class="line">  (() =&gt; {</span>
<span class="line">    const index = require(&quot;./src/index.css&quot;);</span>
<span class="line">    console.log(index);</span>
<span class="line">  })();</span>
<span class="line">})();</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-8-loaders-to-string-loader-js" tabindex="-1"><a class="header-anchor" href="#_3-8-loaders-to-string-loader-js"><span>3.8 loaders\\to-string-loader.js</span></a></h3><p>loaders\\to-string-loader.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">var</span> loaderUtils <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;loader-utils&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line">module<span class="token punctuation">.</span>exports<span class="token punctuation">.</span><span class="token function-variable function">pitch</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">remainingRequest</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string"></span>
<span class="line">        var result = require(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>loaderUtils<span class="token punctuation">.</span><span class="token function">stringifyRequest</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token string">&quot;!!&quot;</span> <span class="token operator">+</span> remainingRequest<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">);</span>
<span class="line">        if (result &amp;&amp; result.__esModule) {</span>
<span class="line">            result = result.default;</span>
<span class="line">        }</span>
<span class="line">        if (typeof result === &quot;string&quot;) {</span>
<span class="line">            module.exports = result;</span>
<span class="line">        } else {</span>
<span class="line">            module.exports = result.toString();</span>
<span class="line">        }</span>
<span class="line">    </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-9-loaders-css-loader-js" tabindex="-1"><a class="header-anchor" href="#_3-9-loaders-css-loader-js"><span>3.9 loaders\\css-loader.js</span></a></h3><ul><li><a href="https://github.com/webpack/loader-utils" target="_blank" rel="noopener noreferrer">loader-utils stringifyRequest</a></li></ul><p>loaders\\css-loader.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">var</span> postcss <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;postcss&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> loaderUtils <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;loader-utils&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> Tokenizer <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;css-selector-tokenizer&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span> getOptions <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;loader-utils&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">cssLoader</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">inputSource</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> loaderOptions <span class="token operator">=</span> <span class="token function">getOptions</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token function-variable function">cssPlugin</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">      root<span class="token punctuation">.</span><span class="token function">walkAtRules</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^import$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">rule</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">        rule<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        options<span class="token punctuation">.</span>imports<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>rule<span class="token punctuation">.</span>params<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">let</span> callback <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">async</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">let</span> options <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">imports</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">let</span> pipeline <span class="token operator">=</span> <span class="token function">postcss</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token function">cssPlugin</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  pipeline<span class="token punctuation">.</span><span class="token function">process</span><span class="token punctuation">(</span>inputSource<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">result</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> <span class="token punctuation">{</span> loaders<span class="token punctuation">,</span> loaderIndex <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">let</span> <span class="token punctuation">{</span>importLoaders<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">}</span> <span class="token operator">=</span> loaderOptions<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">const</span> loadersRequest <span class="token operator">=</span> loaders</span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span></span>
<span class="line">      loaderIndex<span class="token punctuation">,</span></span>
<span class="line">      loaderIndex <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> importLoaders <span class="token operator">!==</span> <span class="token string">&quot;number&quot;</span> <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> importLoaders<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> x<span class="token punctuation">.</span>request<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&quot;!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">let</span> importCss <span class="token operator">=</span> options<span class="token punctuation">.</span>imports</span>
<span class="line">      <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">url</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">list.push(...require(</span><span class="token template-punctuation string">\`</span></span><span class="token operator">+</span>loaderUtils<span class="token punctuation">.</span><span class="token function">stringifyRequest</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">-!</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>loadersRequest<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">!</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>url<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">));</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&quot;\\r\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">let</span> script <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string"></span>
<span class="line">      var list = [];</span>
<span class="line">      list.toString = function () {return this.join(&#39;&#39;)}</span>
<span class="line">      </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>importCss<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"></span>
<span class="line">      list.push(\\\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>result<span class="token punctuation">.</span>css<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\\\`);</span>
<span class="line">      module.exports = list;</span>
<span class="line">    </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>     </span>
<span class="line">    <span class="token function">callback</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> script<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> cssLoader<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-url" tabindex="-1"><a class="header-anchor" href="#_4-url"><span>4.@url</span></a></h2><h3 id="_4-1-webpack-config-js" tabindex="-1"><a class="header-anchor" href="#_4-1-webpack-config-js"><span>4.1 webpack.config.js</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">module.exports = {</span>
<span class="line">    mode:&#39;development&#39;,</span>
<span class="line">    devtool:false,</span>
<span class="line">    resolveLoader:{</span>
<span class="line">        alias:{</span>
<span class="line">            &#39;css-loader&#39;:path.resolve(__dirname,&#39;loaders&#39;,&#39;css-loader.js&#39;)</span>
<span class="line">        },</span>
<span class="line">         modules:[path.resolve(__dirname,&#39;loaders&#39;),&#39;node_modules&#39;]</span>
<span class="line">    },</span>
<span class="line">    module:{</span>
<span class="line">        rules:[</span>
<span class="line">            {</span>
<span class="line">                test:/\\.css$/,</span>
<span class="line">                use:[</span>
<span class="line">                    &quot;to-string-loader&quot;,</span>
<span class="line">                    {</span>
<span class="line">                        loader:&#39;css-loader&#39;,</span>
<span class="line">                        options:{</span>
<span class="line">                            url:true,</span>
<span class="line">                            import:true,</span>
<span class="line">                            esModule: false</span>
<span class="line">                        }</span>
<span class="line">                    },</span>
<span class="line">                    &quot;logger1-loader&quot;,</span>
<span class="line">                    &quot;logger2-loader&quot;</span>
<span class="line">                ],</span>
<span class="line">                include:path.resolve(&#39;src&#39;)</span>
<span class="line">            },</span>
<span class="line">            {</span>
<span class="line">                test:/\\.less$/,</span>
<span class="line">                use:[</span>
<span class="line">                    &quot;to-string-loader&quot;,</span>
<span class="line">                    {</span>
<span class="line">                        loader:&#39;css-loader&#39;,</span>
<span class="line">                        options:{</span>
<span class="line">                            import:true,</span>
<span class="line">+                            url:true,</span>
<span class="line">                            esModule: false,</span>
<span class="line">                            importLoaders:1</span>
<span class="line">                        }</span>
<span class="line">                    },</span>
<span class="line">                    {</span>
<span class="line">                        loader:&#39;less-loader&#39;</span>
<span class="line">                    }</span>
<span class="line">                ],</span>
<span class="line">                include:path.resolve(&#39;src&#39;)</span>
<span class="line">            },</span>
<span class="line">+            {</span>
<span class="line">+                 test:/\\.jpg/,</span>
<span class="line">+                 use:[{</span>
<span class="line">+                     loader:&#39;file-loader&#39;,</span>
<span class="line">+                     options:{</span>
<span class="line">+                         esModule:false</span>
<span class="line">+                     }</span>
<span class="line">+                 }]</span>
<span class="line">+             }</span>
<span class="line">        ]</span>
<span class="line">    },</span>
<span class="line">    plugins:[</span>
<span class="line">        new HtmlWebpackPlugin({template:&#39;./src/index.html&#39;}),</span>
<span class="line">    ]</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-src-index-css" tabindex="-1"><a class="header-anchor" href="#_4-2-src-index-css"><span>4.2 src\\index.css</span></a></h3><p>src\\index.css</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">body {</span>
<span class="line">    color: red;</span>
<span class="line">}</span>
<span class="line"> +</span>
<span class="line">+    background-image: url(./images/kf.jpg);</span>
<span class="line">+    width:100px;</span>
<span class="line">+    height:100px;</span>
<span class="line">+}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-dist-main-js" tabindex="-1"><a class="header-anchor" href="#_4-3-dist-main-js"><span>4.3 dist\\main.js</span></a></h3><p>dist\\main.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">(() =&gt; {</span>
<span class="line">  var modules = {</span>
<span class="line">    &quot;css-loader.js!./src/index.css&quot;: (module, exports, require) =&gt; {</span>
<span class="line">      var api = require(&quot;api.js&quot;);</span>
<span class="line">      var EXPORT = api(function (i) {</span>
<span class="line">        return i[1];</span>
<span class="line">      });</span>
<span class="line">      EXPORT.push([</span>
<span class="line">        module.id,</span>
<span class="line"> +        &quot;body {\\r\\ncolor: red;\\r\\n}\\r\\n</span>
<span class="line">      ]);</span>
<span class="line">      module.exports = EXPORT;</span>
<span class="line">    },</span>
<span class="line">    &quot;api.js&quot;: (module) =&gt; {</span>
<span class="line">      module.exports = function (cssWithMappingToString) {</span>
<span class="line">        var list = [];</span>
<span class="line">        list.toString = function toString() {</span>
<span class="line">          return this.map(function (item) {</span>
<span class="line">            var content = cssWithMappingToString(item);</span>
<span class="line">            return content;</span>
<span class="line">          }).join(&quot;&quot;);</span>
<span class="line">        };</span>
<span class="line">        list.i = function (modules) {</span>
<span class="line">          for (var i = 0; i &lt; modules.length; i++) {</span>
<span class="line">            list.push(modules[i]);</span>
<span class="line">          }</span>
<span class="line">        };</span>
<span class="line">        return list;</span>
<span class="line">      };</span>
<span class="line">    },</span>
<span class="line">    &quot;./src/images/kf.jpg&quot;: (module, exports, require) =&gt; {</span>
<span class="line">      module.exports = require.p + &quot;4a783413fe7beffd284711d5fdfd1549.jpg&quot;;</span>
<span class="line">    },</span>
<span class="line">    &quot;./src/index.css&quot;: (module, exports, require) =&gt; {</span>
<span class="line">      var result = require(&quot;css-loader.js!./src/index.css&quot;);</span>
<span class="line">      module.exports = result.toString();</span>
<span class="line">    },</span>
<span class="line">  };</span>
<span class="line">  var cache = {};</span>
<span class="line">  function require(moduleId) {</span>
<span class="line">    if (cache[moduleId]) {</span>
<span class="line">      return cache[moduleId].exports;</span>
<span class="line">    }</span>
<span class="line">    var module = (cache[moduleId] = {</span>
<span class="line">      id: moduleId,</span>
<span class="line">      exports: {},</span>
<span class="line">    });</span>
<span class="line">    modules[moduleId](module, module.exports, require);</span>
<span class="line">    return module.exports;</span>
<span class="line">  }</span>
<span class="line">  require.p=&quot;&quot;;</span>
<span class="line">  const index = require(&quot;./src/index.css&quot;);</span>
<span class="line">  console.log(index);</span>
<span class="line">})();</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-4-loaders-css-loader-js" tabindex="-1"><a class="header-anchor" href="#_4-4-loaders-css-loader-js"><span>4.4 loaders\\css-loader.js</span></a></h3><p>loaders\\css-loader.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">var postcss = require(&quot;postcss&quot;);</span>
<span class="line">var loaderUtils = require(&quot;loader-utils&quot;);</span>
<span class="line">var Tokenizer = require(&quot;css-selector-tokenizer&quot;);</span>
<span class="line">const { getOptions } = require(&quot;loader-utils&quot;);</span>
<span class="line">const cssLoader = function (inputSource) {</span>
<span class="line">  let loaderOptions = getOptions(this) || {};</span>
<span class="line">  const cssPlugin = (options) =&gt; {</span>
<span class="line">    return (root) =&gt; {</span>
<span class="line">      root.walkAtRules(/^import$/i, (rule) =&gt; {</span>
<span class="line">        rule.remove();</span>
<span class="line">        options.imports.push(rule.params.slice(1, -1));</span>
<span class="line">      });</span>
<span class="line">+      root.walkDecls((decl) =&gt; {</span>
<span class="line">+          var values = Tokenizer.parseValues(decl.value);</span>
<span class="line">+          values.nodes.forEach(function (value) {</span>
<span class="line">+            value.nodes.forEach((item) =&gt; {</span>
<span class="line">+              if (item.type === &quot;url&quot;) {</span>
<span class="line">+               let url = loaderUtils.stringifyRequest(this, item.url);</span>
<span class="line">+               item.stringType = &quot;&#39;&quot;;</span>
<span class="line">+               item.url =&quot;\`+require(&quot;+url+&quot;)+\`&quot;;</span>
<span class="line">+              }</span>
<span class="line">+            });</span>
<span class="line">+          });</span>
<span class="line">+          let value = Tokenizer.stringifyValues(values);</span>
<span class="line">+          decl.value = value;</span>
<span class="line">+      });</span>
<span class="line">    };</span>
<span class="line">  };</span>
<span class="line"></span>
<span class="line">  let callback = this.async();</span>
<span class="line">  let options = { imports: [] };</span>
<span class="line">  let pipeline = postcss([cssPlugin(options)]);</span>
<span class="line">  pipeline.process(inputSource).then((result) =&gt; {</span>
<span class="line">    let { loaders, loaderIndex } = this;</span>
<span class="line">    let {importLoaders=0} = loaderOptions;</span>
<span class="line">    const loadersRequest = loaders</span>
<span class="line">    .slice(</span>
<span class="line">      loaderIndex,</span>
<span class="line">      loaderIndex + 1 + (typeof importLoaders !== &quot;number&quot; ? 0 : importLoaders)</span>
<span class="line">    )</span>
<span class="line">    .map((x) =&gt; x.request)</span>
<span class="line">    .join(&quot;!&quot;);</span>
<span class="line">    let importCss = options.imports</span>
<span class="line">      .map((url) =&gt;\`list.push(...require(\`+loaderUtils.stringifyRequest(this, \`-!\${loadersRequest}!\${url}\`)+\`));\`).join(&quot;\\r\\n&quot;);</span>
<span class="line">    let script = \`</span>
<span class="line">      var list = [];</span>
<span class="line">      list.toString = function () {return this.join(&#39;&#39;)}</span>
<span class="line">      \${importCss}</span>
<span class="line">      list.push(\\\`\${result.css}\\\`);</span>
<span class="line">      module.exports = list;</span>
<span class="line">    \`;     </span>
<span class="line">    callback(null, script);</span>
<span class="line">  });</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line">module.exports = cssLoader;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-style-loader" tabindex="-1"><a class="header-anchor" href="#_5-style-loader"><span>5.style-loader</span></a></h2><h3 id="_5-1-webpack-config-js" tabindex="-1"><a class="header-anchor" href="#_5-1-webpack-config-js"><span>5.1 webpack.config.js</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">const path = require(&#39;path&#39;);</span>
<span class="line">const HtmlWebpackPlugin = require(&#39;html-webpack-plugin&#39;);</span>
<span class="line">module.exports = {</span>
<span class="line">    mode:&#39;development&#39;,</span>
<span class="line">    devtool:false,</span>
<span class="line">    resolveLoader:{</span>
<span class="line">        alias:{</span>
<span class="line">            &#39;css-loader&#39;:path.resolve(__dirname,&#39;loaders&#39;,&#39;css-loader.js&#39;),</span>
<span class="line">+            &#39;style-loader&#39;:path.resolve(__dirname,&#39;loaders&#39;,&#39;style-loader.js&#39;)</span>
<span class="line">        }</span>
<span class="line">    },</span>
<span class="line">    module:{</span>
<span class="line">        rules:[</span>
<span class="line">            {</span>
<span class="line">                test:/\\.css$/,</span>
<span class="line">                use:[</span>
<span class="line">+                    &quot;style-loader&quot;,</span>
<span class="line">                    {</span>
<span class="line">                        loader:&#39;css-loader&#39;,</span>
<span class="line">                        options:{</span>
<span class="line">                            url:true,</span>
<span class="line">                            import:true,</span>
<span class="line">                            esModule: false</span>
<span class="line">                        }</span>
<span class="line">                    }</span>
<span class="line">                ],</span>
<span class="line">                include:path.resolve(&#39;src&#39;)</span>
<span class="line">            },</span>
<span class="line">            {</span>
<span class="line">                test:/\\.less$/,</span>
<span class="line">                use:[</span>
<span class="line">+                    &quot;style-loader&quot;,</span>
<span class="line">                    {</span>
<span class="line">                        loader:&#39;css-loader&#39;,</span>
<span class="line">                        options:{</span>
<span class="line">                            import:true,</span>
<span class="line">                            url:true,</span>
<span class="line">                            esModule: false,</span>
<span class="line">                            importLoaders:1</span>
<span class="line">                        }</span>
<span class="line">                    },</span>
<span class="line">                    {</span>
<span class="line">                        loader:&#39;less-loader&#39;</span>
<span class="line">                    }</span>
<span class="line">                ],</span>
<span class="line">                include:path.resolve(&#39;src&#39;)</span>
<span class="line">            },</span>
<span class="line">            {</span>
<span class="line">                 test:/\\.jpg/,</span>
<span class="line">                 use:[{</span>
<span class="line">                     loader:&#39;file-loader&#39;,</span>
<span class="line">                     options:{</span>
<span class="line">                         esModule:false</span>
<span class="line">                     }</span>
<span class="line">                 }]</span>
<span class="line">             }</span>
<span class="line">        ]</span>
<span class="line">    },</span>
<span class="line">    plugins:[</span>
<span class="line">        new HtmlWebpackPlugin({template:&#39;./src/index.html&#39;}),</span>
<span class="line">    ]</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-2-style-loader-js" tabindex="-1"><a class="header-anchor" href="#_5-2-style-loader-js"><span>5.2 style-loader.js</span></a></h3><p>loaders\\style-loader.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">let</span> loaderUtils <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;loader-utils&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">loader</span><span class="token punctuation">(</span><span class="token parameter">source</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">loader<span class="token punctuation">.</span><span class="token function-variable function">pitch</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">remainingRequest<span class="token punctuation">,</span> previousRequest<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token keyword">let</span> style <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string"></span>
<span class="line">    var style = document.createElement(&quot;style&quot;);</span>
<span class="line">    style.innerHTML = require(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>loaderUtils<span class="token punctuation">.</span><span class="token function">stringifyRequest</span><span class="token punctuation">(</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string">&quot;!!&quot;</span> <span class="token operator">+</span> remainingRequest</span>
<span class="line">    <span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">);</span>
<span class="line">    document.head.appendChild(style);</span>
<span class="line"> </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">return</span> style<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> loader<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-3-src-index-html" tabindex="-1"><a class="header-anchor" href="#_5-3-src-index-html"><span>5.3 src\\index.html</span></a></h3><p>src\\index.html</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;!DOCTYPE html&gt;</span>
<span class="line">&lt;html lang=&quot;en&quot;&gt;</span>
<span class="line">&lt;head&gt;</span>
<span class="line">    &lt;meta charset=&quot;UTF-8&quot;&gt;</span>
<span class="line">    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;</span>
<span class="line">    &lt;title&gt;css-loader&lt;/title&gt;</span>
<span class="line">&lt;/head&gt;</span>
<span class="line">&lt;body&gt;</span>
<span class="line">+    &lt;div id=&quot;root&quot;&gt;root&lt;/div&gt;</span>
<span class="line">&lt;/body&gt;</span>
<span class="line">&lt;/html&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-postcss" tabindex="-1"><a class="header-anchor" href="#_7-postcss"><span>7. PostCSS</span></a></h2><ul><li><a href="https://www.postcss.com.cn/" target="_blank" rel="noopener noreferrer">PostCSS</a>是一个用 JavaScript 工具和插件转换 CSS 代码的工具</li><li><a href="http://api.postcss.org" target="_blank" rel="noopener noreferrer">PostCSS Api</a></li><li>[Astexplorer](https://astexplorer.net/</li></ul><h3 id="_7-1-类型" tabindex="-1"><a class="header-anchor" href="#_7-1-类型"><span>7.1 类型</span></a></h3><ul><li>CSS AST主要有3种父类型 <ul><li><code>AtRule</code> @xxx的这种类型，如@screen</li><li><code>Comment</code> 注释</li><li><code>Rule</code> 普通的css规则</li></ul></li><li>子类型 <ul><li><code>decl</code> 指的是每条具体的css规则</li><li><code>rule</code> 作用于某个选择器上的css规则集合</li></ul></li></ul><h3 id="_7-2-ast节点" tabindex="-1"><a class="header-anchor" href="#_7-2-ast节点"><span>7.2 AST节点</span></a></h3><ul><li>nodes: CSS规则的节点信息集合 <ul><li>decl: 每条css规则的节点信息</li><li>prop: 样式名,如width</li><li>value: 样式值,如10px</li></ul></li><li>type: 类型</li><li>source: 包括start和end的位置信息，start和end里都有line和column表示行和列</li><li>selector: type为rule时的选择器</li><li>name: type为atRule时@紧接rule名，譬如@import &#39;xxx.css&#39;中的import</li><li>params: type为atRule时@紧接rule名后的值，譬如@import &#39;xxx.css&#39;中的xxx.css</li><li>text: type为comment时的注释内容</li></ul><h3 id="_7-3-操作" tabindex="-1"><a class="header-anchor" href="#_7-3-操作"><span>7.3 操作</span></a></h3><ul><li>walk: 遍历所有节点信息，无论是atRule、rule、comment的父类型，还是rule、 decl的子类型 <ul><li>walkAtRules：遍历所有的AtRules</li><li>walkComments 遍历所有的Comments</li><li>walkDecls 遍历所有的Decls</li><li>walkRules 遍历所有的Rules</li></ul></li><li>postCss给出了很多<a href="%5BAtRule%5D(http://api.postcss.org/AtRule.html)">操作CSS</a>的方法 <ul><li>postcss插件如同babel插件一样，有固定的格式</li><li>注册个插件名，并获取插件配置参数<code>opts</code></li><li>返回值是个函数，这个函数主体是你的处理逻辑,第一个参数是AST的根节点</li></ul></li></ul><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">var</span> postcss <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;postcss&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">cssPlugin</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token parameter">root<span class="token punctuation">,</span>result</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">      root<span class="token punctuation">.</span><span class="token function">walkAtRules</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//遍历所有的＠Rule @import</span></span>
<span class="line">      root<span class="token punctuation">.</span><span class="token function">walkDecls</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">decl</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">if</span><span class="token punctuation">(</span>decl<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">endsWith</span><span class="token punctuation">(</span><span class="token string">&#39;px&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">            decl<span class="token punctuation">.</span>value<span class="token operator">=</span><span class="token function">parseFloat</span><span class="token punctuation">(</span>decl<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">75</span><span class="token operator">+</span><span class="token string">&#39;rem&#39;</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> options <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> pipeline <span class="token operator">=</span> <span class="token function">postcss</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token function">cssPlugin</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> inputSource <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string"></span>
<span class="line"> </span>
<span class="line">    width:750px;</span>
<span class="line">}</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span></span>
<span class="line">pipeline<span class="token punctuation">.</span><span class="token function">process</span><span class="token punctuation">(</span>inputSource<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">result</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">.</span>css<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,82)])])}const o=n(l,[["render",t]]),u=JSON.parse('{"path":"/strong/117.css-loader.html","title":"","lang":"en-US","frontmatter":{},"git":{"updatedTime":1681290319000,"contributors":[{"name":"yutao","username":"yutao","email":"642231346@qq.com","commits":1,"url":"https://github.com/yutao"}],"changelog":[{"hash":"f5ab8c9d34991ec274f7f652439afe5b2afb6147","time":1681290319000,"email":"642231346@qq.com","author":"yutao","message":"modify"}]},"filePathRelative":"strong/117.css-loader.md"}');export{o as comp,u as data};
