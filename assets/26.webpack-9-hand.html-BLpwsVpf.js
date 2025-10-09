import{_ as s,c as a,a as e,o as p}from"./app-CD1YpnS1.js";const l={};function i(t,n){return p(),a("div",null,[...n[0]||(n[0]=[e(`<h2 id="_1-跑通webpack" tabindex="-1"><a class="header-anchor" href="#_1-跑通webpack"><span>1. 跑通webpack</span></a></h2><h3 id="_1-1-webpack-config-js" tabindex="-1"><a class="header-anchor" href="#_1-1-webpack-config-js"><span>1.1 webpack.config.js</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">context</span><span class="token operator">:</span>process<span class="token punctuation">.</span><span class="token function">cwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">mode</span><span class="token operator">:</span><span class="token string">&#39;development&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">devtool</span><span class="token operator">:</span><span class="token string">&#39;none&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">entry</span><span class="token operator">:</span><span class="token string">&#39;./src/index.js&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">output</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">path</span><span class="token operator">:</span>path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span><span class="token string">&#39;dist&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">filename</span><span class="token operator">:</span><span class="token string">&#39;[name].js&#39;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-cli-js" tabindex="-1"><a class="header-anchor" href="#_1-2-cli-js"><span>1.2 cli.js</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">const</span> webpack <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;webpack&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> webpackOptions <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;./webpack.config&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> compiler <span class="token operator">=</span> <span class="token function">webpack</span><span class="token punctuation">(</span>webpackOptions<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">compiler<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> stats</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span></span>
<span class="line">    stats<span class="token punctuation">.</span><span class="token function">toJson</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">entries</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">chunks</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">_modules</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">assets</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3-index-js" tabindex="-1"><a class="header-anchor" href="#_1-3-index-js"><span>1.3 index.js</span></a></h3><p>src\\index.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">let</span> title <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./title&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>title<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-4-title-js" tabindex="-1"><a class="header-anchor" href="#_1-4-title-js"><span>1.4 title.js</span></a></h3><p>src\\title.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_1-5-main-js" tabindex="-1"><a class="header-anchor" href="#_1-5-main-js"><span>1.5 main.js</span></a></h3><p>dist\\main.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">modules</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// webpackBootstrap</span></span>
<span class="line">    <span class="token comment">// The module cache</span></span>
<span class="line">    <span class="token keyword">var</span> installedModules <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// The require function</span></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">__webpack_require__</span><span class="token punctuation">(</span><span class="token parameter">moduleId</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// Check if module is in cache</span></span>
<span class="line">        <span class="token keyword">if</span><span class="token punctuation">(</span>installedModules<span class="token punctuation">[</span>moduleId<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">return</span> installedModules<span class="token punctuation">[</span>moduleId<span class="token punctuation">]</span><span class="token punctuation">.</span>exports<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token comment">// Create a new module (and put it into the cache)</span></span>
<span class="line">        <span class="token keyword">var</span> module <span class="token operator">=</span> installedModules<span class="token punctuation">[</span>moduleId<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token literal-property property">i</span><span class="token operator">:</span> moduleId<span class="token punctuation">,</span></span>
<span class="line">            <span class="token literal-property property">l</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token literal-property property">exports</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// Execute the module function</span></span>
<span class="line">        modules<span class="token punctuation">[</span>moduleId<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>module<span class="token punctuation">.</span>exports<span class="token punctuation">,</span> module<span class="token punctuation">,</span> module<span class="token punctuation">.</span>exports<span class="token punctuation">,</span> __webpack_require__<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// Flag the module as loaded</span></span>
<span class="line">        module<span class="token punctuation">.</span>l <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// Return the exports of the module</span></span>
<span class="line">        <span class="token keyword">return</span> module<span class="token punctuation">.</span>exports<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// expose the modules object (__webpack_modules__)</span></span>
<span class="line">    __webpack_require__<span class="token punctuation">.</span>m <span class="token operator">=</span> modules<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// expose the module cache</span></span>
<span class="line">    __webpack_require__<span class="token punctuation">.</span>c <span class="token operator">=</span> installedModules<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// define getter function for harmony exports</span></span>
<span class="line">    __webpack_require__<span class="token punctuation">.</span><span class="token function-variable function">d</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">exports<span class="token punctuation">,</span> name<span class="token punctuation">,</span> getter</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>__webpack_require__<span class="token punctuation">.</span><span class="token function">o</span><span class="token punctuation">(</span>exports<span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>exports<span class="token punctuation">,</span> name<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">get</span><span class="token operator">:</span> getter <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// define __esModule on exports</span></span>
<span class="line">    __webpack_require__<span class="token punctuation">.</span><span class="token function-variable function">r</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">exports</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> Symbol <span class="token operator">!==</span> <span class="token string">&#39;undefined&#39;</span> <span class="token operator">&amp;&amp;</span> Symbol<span class="token punctuation">.</span>toStringTag<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>exports<span class="token punctuation">,</span> Symbol<span class="token punctuation">.</span>toStringTag<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;Module&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>exports<span class="token punctuation">,</span> <span class="token string">&#39;__esModule&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// create a fake namespace object</span></span>
<span class="line">    <span class="token comment">// mode &amp; 1: value is a module id, require it</span></span>
<span class="line">    <span class="token comment">// mode &amp; 2: merge all properties of value into the ns</span></span>
<span class="line">    <span class="token comment">// mode &amp; 4: return value when already ns object</span></span>
<span class="line">    <span class="token comment">// mode &amp; 8|1: behave like require</span></span>
<span class="line">    __webpack_require__<span class="token punctuation">.</span><span class="token function-variable function">t</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> mode</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">if</span><span class="token punctuation">(</span>mode <span class="token operator">&amp;</span> <span class="token number">1</span><span class="token punctuation">)</span> value <span class="token operator">=</span> <span class="token function">__webpack_require__</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">if</span><span class="token punctuation">(</span>mode <span class="token operator">&amp;</span> <span class="token number">8</span><span class="token punctuation">)</span> <span class="token keyword">return</span> value<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token punctuation">(</span>mode <span class="token operator">&amp;</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> value <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span> <span class="token operator">&amp;&amp;</span> value <span class="token operator">&amp;&amp;</span> value<span class="token punctuation">.</span>__esModule<span class="token punctuation">)</span> <span class="token keyword">return</span> value<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">var</span> ns <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        __webpack_require__<span class="token punctuation">.</span><span class="token function">r</span><span class="token punctuation">(</span>ns<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>ns<span class="token punctuation">,</span> <span class="token string">&#39;default&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> value <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">if</span><span class="token punctuation">(</span>mode <span class="token operator">&amp;</span> <span class="token number">2</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> value <span class="token operator">!=</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">)</span> <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> key <span class="token keyword">in</span> value<span class="token punctuation">)</span> __webpack_require__<span class="token punctuation">.</span><span class="token function">d</span><span class="token punctuation">(</span>ns<span class="token punctuation">,</span> key<span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> value<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span> ns<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// getDefaultExport function for compatibility with non-harmony modules</span></span>
<span class="line">    __webpack_require__<span class="token punctuation">.</span><span class="token function-variable function">n</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">module</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">var</span> getter <span class="token operator">=</span> module <span class="token operator">&amp;&amp;</span> module<span class="token punctuation">.</span>__esModule <span class="token operator">?</span></span>
<span class="line">            <span class="token keyword">function</span> <span class="token function">getDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> module<span class="token punctuation">[</span><span class="token string">&#39;default&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">}</span> <span class="token operator">:</span></span>
<span class="line">            <span class="token keyword">function</span> <span class="token function">getModuleExports</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> module<span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">        __webpack_require__<span class="token punctuation">.</span><span class="token function">d</span><span class="token punctuation">(</span>getter<span class="token punctuation">,</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> getter<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span> getter<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// Object.prototype.hasOwnProperty.call</span></span>
<span class="line">    __webpack_require__<span class="token punctuation">.</span><span class="token function-variable function">o</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">object<span class="token punctuation">,</span> property</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>object<span class="token punctuation">,</span> property<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// __webpack_public_path__</span></span>
<span class="line">    __webpack_require__<span class="token punctuation">.</span>p <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// Load entry module and return exports</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token function">__webpack_require__</span><span class="token punctuation">(</span>__webpack_require__<span class="token punctuation">.</span>s <span class="token operator">=</span> <span class="token string">&quot;./src/index.js&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line"> <span class="token string-property property">&quot;./src/index.js&quot;</span><span class="token operator">:</span></span>
<span class="line"> <span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">module<span class="token punctuation">,</span> exports<span class="token punctuation">,</span> __webpack_require__</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> title <span class="token operator">=</span> <span class="token function">__webpack_require__</span><span class="token punctuation">(</span><span class="token comment">/*! ./title */</span> <span class="token string">&quot;./src/title.js&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>title<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"> <span class="token string-property property">&quot;./src/title.js&quot;</span><span class="token operator">:</span></span>
<span class="line"> <span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">module<span class="token punctuation">,</span> exports</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">   module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token string">&quot;title&quot;</span><span class="token punctuation">;</span></span>
<span class="line"> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-创建compiler-js" tabindex="-1"><a class="header-anchor" href="#_2-创建compiler-js"><span>2. 创建Compiler.js</span></a></h2><h3 id="_2-1-webpack-index-js" tabindex="-1"><a class="header-anchor" href="#_2-1-webpack-index-js"><span>2.1 webpack\\index.js</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">const</span> NodeEnvironmentPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;./plugins/NodeEnvironmentPlugin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> WebpackOptionsApply <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;./WebpackOptionsApply&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> Compiler <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;./Compiler&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">webpack</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  options<span class="token punctuation">.</span>context <span class="token operator">=</span> options<span class="token punctuation">.</span>context <span class="token operator">||</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span><span class="token function">cwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token comment">//创建compiler</span></span>
<span class="line">  <span class="token keyword">let</span> compiler <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Compiler</span><span class="token punctuation">(</span>options<span class="token punctuation">.</span>context<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token comment">//给compiler指定options</span></span>
<span class="line">  compiler<span class="token punctuation">.</span>options <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>compiler<span class="token punctuation">.</span>options<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token comment">//设置读写文件的API</span></span>
<span class="line">  <span class="token keyword">new</span> <span class="token class-name">NodeEnvironmentPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>compiler<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token comment">//调用配置文件里配置的插件并依次调用</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>options<span class="token punctuation">.</span>plugins <span class="token operator">&amp;&amp;</span> Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>options<span class="token punctuation">.</span>plugins<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> plugin <span class="token keyword">of</span> options<span class="token punctuation">.</span>plugins<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">plugin</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>compiler<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  compiler<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span><span class="token function">environment</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//设置变量</span></span>
<span class="line">  compiler<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span><span class="token function">afterEnvironment</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//设置变量完成后</span></span>
<span class="line">  <span class="token keyword">new</span> <span class="token class-name">WebpackOptionsApply</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">process</span><span class="token punctuation">(</span>options<span class="token punctuation">,</span> compiler<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//处理参数</span></span>
<span class="line">  <span class="token keyword">return</span> compiler<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> webpack<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-compiler-js" tabindex="-1"><a class="header-anchor" href="#_2-2-compiler-js"><span>2.2 Compiler.js</span></a></h3><p>webpack\\Compiler.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span></span>
<span class="line">  Tapable<span class="token punctuation">,</span></span>
<span class="line">  SyncHook<span class="token punctuation">,</span></span>
<span class="line">  SyncBailHook<span class="token punctuation">,</span></span>
<span class="line">  AsyncSeriesHook<span class="token punctuation">,</span></span>
<span class="line">  AsyncParallelHook</span>
<span class="line"><span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;tapable&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Compiler</span> <span class="token keyword">extends</span> <span class="token class-name">Tapable</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>hooks <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">environment</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">SyncHook</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">afterEnvironment</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">SyncHook</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">afterPlugins</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">SyncHook</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;compiler&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>options <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>context <span class="token operator">=</span> context<span class="token punctuation">;</span> <span class="token comment">//设置上下文路径</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;开始编译&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> Compiler<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-nodeenvironmentplugin-js" tabindex="-1"><a class="header-anchor" href="#_2-3-nodeenvironmentplugin-js"><span>2.3 NodeEnvironmentPlugin.js</span></a></h3><p>webpack\\plugins\\NodeEnvironmentPlugin.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;fs&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">NodeEnvironmentPlugin</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">apply</span><span class="token punctuation">(</span><span class="token parameter">compiler</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    compiler<span class="token punctuation">.</span>inputFileSystem <span class="token operator">=</span> fs<span class="token punctuation">;</span> <span class="token comment">//设置读文件的模块</span></span>
<span class="line">    compiler<span class="token punctuation">.</span>outputFileSystem <span class="token operator">=</span> fs<span class="token punctuation">;</span> <span class="token comment">//设置写文件的模块</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> NodeEnvironmentPlugin<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-webpackoptionsapply-js" tabindex="-1"><a class="header-anchor" href="#_2-4-webpackoptionsapply-js"><span>2.4 WebpackOptionsApply.js</span></a></h3><p>webpack\\WebpackOptionsApply.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token keyword">class</span> <span class="token class-name">WebpackOptionsApply</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">process</span><span class="token punctuation">(</span><span class="token parameter">options<span class="token punctuation">,</span> compiler</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">//插件绑定结束</span></span>
<span class="line">    compiler<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span><span class="token function">afterPlugins</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>compiler<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-监听make事件" tabindex="-1"><a class="header-anchor" href="#_3-监听make事件"><span>3. 监听make事件</span></a></h2><h3 id="_3-1-webpackoptionsapply-js" tabindex="-1"><a class="header-anchor" href="#_3-1-webpackoptionsapply-js"><span>3.1 WebpackOptionsApply.js</span></a></h3><p>webpack\\WebpackOptionsApply.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">+const EntryOptionPlugin = require(&quot;./plugins/EntryOptionPlugin&quot;);</span>
<span class="line">module.exports = class WebpackOptionsApply {</span>
<span class="line">  process(options, compiler) {</span>
<span class="line">     //挂载入口文件插件</span>
<span class="line">+    new EntryOptionPlugin().apply(compiler);</span>
<span class="line">    //触发entryOption事件执行</span>
<span class="line">+    compiler.hooks.entryOption.call(options.context, options.entry);</span>
<span class="line">    //插件绑定结束</span>
<span class="line">    compiler.hooks.afterPlugins.call(compiler);</span>
<span class="line">  }</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-entryoptionplugin-js" tabindex="-1"><a class="header-anchor" href="#_3-2-entryoptionplugin-js"><span>3.2 EntryOptionPlugin.js</span></a></h3><p>webpack\\plugins\\EntryOptionPlugin.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">const</span> SingleEntryPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;./SingleEntryPlugin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">EntryOptionPlugin</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">apply</span><span class="token punctuation">(</span><span class="token parameter">compiler</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    compiler<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>entryOption<span class="token punctuation">.</span><span class="token function">tap</span><span class="token punctuation">(</span><span class="token string">&quot;EntryOptionPlugin&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">context<span class="token punctuation">,</span> entry</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">new</span> <span class="token class-name">SingleEntryPlugin</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> entry<span class="token punctuation">,</span> <span class="token string">&quot;main&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>compiler<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> EntryOptionPlugin<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-singleentryplugin-js" tabindex="-1"><a class="header-anchor" href="#_3-3-singleentryplugin-js"><span>3.3 SingleEntryPlugin.js</span></a></h3><p>webpack\\plugins\\SingleEntryPlugin.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token keyword">class</span> <span class="token class-name">EntryOptionPlugin</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">context<span class="token punctuation">,</span> entry<span class="token punctuation">,</span> name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>context <span class="token operator">=</span> context<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>entry <span class="token operator">=</span> entry<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token function">apply</span><span class="token punctuation">(</span><span class="token parameter">compiler</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    compiler<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>make<span class="token punctuation">.</span><span class="token function">tapAsync</span><span class="token punctuation">(</span></span>
<span class="line">      <span class="token string">&quot;SingleEntryPlugin&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">(</span><span class="token parameter">compilation<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token comment">//入口文件 代码块的名称 context上下文绝对路径</span></span>
<span class="line">        <span class="token keyword">const</span> <span class="token punctuation">{</span> entry<span class="token punctuation">,</span> name<span class="token punctuation">,</span> context <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span></span>
<span class="line">        compilation<span class="token punctuation">.</span><span class="token function">addEntry</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> entry<span class="token punctuation">,</span> name<span class="token punctuation">,</span> callback<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-make" tabindex="-1"><a class="header-anchor" href="#_4-make"><span>4. make</span></a></h2><h3 id="_4-1-webpack-compiler-js" tabindex="-1"><a class="header-anchor" href="#_4-1-webpack-compiler-js"><span>4.1 webpack\\Compiler.js</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">+const {Tapable,SyncHook,SyncBailHook,AsyncSeriesHook,AsyncParallelHook} = require(&quot;tapable&quot;);</span>
<span class="line">+const Compilation  = require(&#39;./Compilation&#39;);</span>
<span class="line">class Compiler extends Tapable {</span>
<span class="line">  constructor(context) {</span>
<span class="line">    super();</span>
<span class="line">    this.hooks = {</span>
<span class="line">      environment: new SyncHook([]),</span>
<span class="line">      afterEnvironment: new SyncHook([]),</span>
<span class="line">      afterPlugins: new SyncHook([&quot;compiler&quot;]),</span>
<span class="line">      entryOption: new SyncBailHook([&quot;context&quot;, &quot;entry&quot;]),</span>
<span class="line">+      beforeRun: new AsyncSeriesHook([&quot;compiler&quot;]),</span>
<span class="line">+      run: new AsyncSeriesHook([&quot;compiler&quot;]),</span>
<span class="line">+      beforeCompile: new AsyncSeriesHook([&quot;params&quot;]),</span>
<span class="line">+      compile: new SyncHook([&quot;params&quot;]),</span>
<span class="line">+      make: new AsyncParallelHook([&quot;compilation&quot;]),</span>
<span class="line">+      thisCompilation: new SyncHook([&quot;compilation&quot;, &quot;params&quot;]),</span>
<span class="line">+      compilation: new SyncHook([&quot;compilation&quot;, &quot;params&quot;]),</span>
<span class="line">+      done: new AsyncSeriesHook([&quot;stats&quot;])</span>
<span class="line">    };</span>
<span class="line">    this.options = {};</span>
<span class="line">    this.context = context; //设置上下文路径</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">+  run(finalCallback) {</span>
<span class="line">+    //编译完成后的回调</span>
<span class="line">+    const onCompiled = (err, compilation) =&gt; {</span>
<span class="line">+     </span>
<span class="line">+    };</span>
<span class="line">+    //准备运行编译</span>
<span class="line">+    this.hooks.beforeRun.callAsync(this, err =&gt; {</span>
<span class="line">+      //运行</span>
<span class="line">+      this.hooks.run.callAsync(this, err =&gt; {</span>
<span class="line">+        //开始编译,编译完成后执行conCompiled回调</span>
<span class="line">+        this.compile(onCompiled);</span>
<span class="line">+      });</span>
<span class="line">+    });</span>
<span class="line">+  }</span>
<span class="line">+  newCompilation(params){</span>
<span class="line">+    const compilation = new Compilation(this);</span>
<span class="line">+    this.hooks.thisCompilation.call(compilation, params);</span>
<span class="line">+      this.hooks.compilation.call(compilation, params);</span>
<span class="line">+    return compilation;</span>
<span class="line">+  }</span>
<span class="line">+  compile(onCompiled){</span>
<span class="line">+    this.hooks.beforeCompile.callAsync({}, err =&gt; {</span>
<span class="line">+      this.hooks.compile.call();</span>
<span class="line">+      const compilation = this.newCompilation();</span>
<span class="line">+      this.hooks.make.callAsync(compilation, err =&gt; {</span>
<span class="line">+          console.log(err,&#39;make完成&#39;)</span>
<span class="line">+      });</span>
<span class="line">+    });</span>
<span class="line">+  }</span>
<span class="line">}</span>
<span class="line">module.exports = Compiler;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-compilation-js" tabindex="-1"><a class="header-anchor" href="#_4-2-compilation-js"><span>4.2 Compilation.js</span></a></h3><p>webpack\\Compilation.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">const</span> normalModuleFactory <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./NormalModuleFactory&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span>Tapable<span class="token punctuation">,</span>SyncHook<span class="token punctuation">,</span>SyncBailHook<span class="token punctuation">,</span>AsyncSeriesHook<span class="token punctuation">,</span>AsyncParallelHook<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;tapable&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Compilation</span> <span class="token keyword">extends</span> <span class="token class-name">Tapable</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">compiler</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>compiler <span class="token operator">=</span> compiler<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>options <span class="token operator">=</span> compiler<span class="token punctuation">.</span>options<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>context <span class="token operator">=</span> compiler<span class="token punctuation">.</span>context<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>inputFileSystem <span class="token operator">=</span> compiler<span class="token punctuation">.</span>inputFileSystem<span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">this</span><span class="token punctuation">.</span>outputFileSystem <span class="token operator">=</span> compiler<span class="token punctuation">.</span>outputFileSystem<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>hooks <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token literal-property property">addEntry</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">SyncHook</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;entry&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>entries<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token comment">//context ./src/index.js main callback(终级回调)</span></span>
<span class="line">    <span class="token function">addEntry</span><span class="token punctuation">(</span><span class="token parameter">context<span class="token punctuation">,</span> entry<span class="token punctuation">,</span> name<span class="token punctuation">,</span> finallyCallback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span>hooks<span class="token punctuation">.</span><span class="token function">addEntry</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>entry<span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//开始增加入口</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_addModuleChain</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span>entry<span class="token punctuation">,</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token function">finallyCallback</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">   <span class="token punctuation">}</span></span>
<span class="line">   <span class="token function">_addModuleChain</span><span class="token punctuation">(</span><span class="token parameter">context<span class="token punctuation">,</span>entry<span class="token punctuation">,</span>name</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">     <span class="token keyword">let</span> module <span class="token operator">=</span> normalModuleFactory<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span></span>
<span class="line">         <span class="token punctuation">{</span>name<span class="token punctuation">,</span>  <span class="token comment">//模块所属的代码块的名称</span></span>
<span class="line">         <span class="token literal-property property">context</span><span class="token operator">:</span><span class="token keyword">this</span><span class="token punctuation">.</span>context<span class="token punctuation">,</span><span class="token comment">//上下文</span></span>
<span class="line">         <span class="token literal-property property">request</span><span class="token operator">:</span>path<span class="token punctuation">.</span>posix<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span>entry<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//模块完整路径</span></span>
<span class="line">     module<span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//开始编译模块</span></span>
<span class="line">     <span class="token keyword">this</span><span class="token punctuation">.</span>entries<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>module<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//把编译好的模块添加到入口列表里面</span></span>
<span class="line">   <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> Compilation<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-normalmodulefactory-js" tabindex="-1"><a class="header-anchor" href="#_4-3-normalmodulefactory-js"><span>4.3 NormalModuleFactory.js</span></a></h3><p>webpack\\NormalModuleFactory.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;path&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> NormalModule <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./NormalModule&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">NormalModuleFactory</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">create</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">NormalModule</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">NormalModuleFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-4-normalmodule-js" tabindex="-1"><a class="header-anchor" href="#_4-4-normalmodule-js"><span>4.4 NormalModule.js</span></a></h3><p>webpack\\NormalModule.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">class</span> <span class="token class-name">NormalModule</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>name<span class="token punctuation">,</span>context<span class="token punctuation">,</span>request<span class="token punctuation">}</span></span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span>context <span class="token operator">=</span> context<span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span>request <span class="token operator">=</span> request<span class="token punctuation">;</span>  </span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token function">build</span><span class="token punctuation">(</span><span class="token parameter">compilation</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;开始编译入口模块&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> NormalModule<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-build" tabindex="-1"><a class="header-anchor" href="#_5-build"><span>5. build</span></a></h2><h3 id="_5-1-compilation-js" tabindex="-1"><a class="header-anchor" href="#_5-1-compilation-js"><span>5.1 Compilation.js</span></a></h3><p>webpack\\Compilation.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">const normalModuleFactory = require(&#39;./NormalModuleFactory&#39;);</span>
<span class="line">const {Tapable,SyncHook,SyncBailHook,AsyncSeriesHook,AsyncParallelHook} = require(&quot;tapable&quot;);</span>
<span class="line">const path = require(&#39;path&#39;);</span>
<span class="line">class Compilation extends Tapable {</span>
<span class="line">    constructor(compiler) {</span>
<span class="line">        super();</span>
<span class="line">        this.compiler = compiler;</span>
<span class="line">        this.options = compiler.options;</span>
<span class="line">        this.context = compiler.context;</span>
<span class="line">        this.inputFileSystem = compiler.inputFileSystem;</span>
<span class="line">            this.outputFileSystem = compiler.outputFileSystem;</span>
<span class="line">        this.hooks = {</span>
<span class="line">          addEntry: new SyncHook([&quot;entry&quot;, &quot;name&quot;])</span>
<span class="line">        }</span>
<span class="line">+        this.entries=[];</span>
<span class="line">+        this._modules = {}; //模块代码</span>
<span class="line">+        this.modules=[];</span>
<span class="line">    }</span>
<span class="line">    //context ./src/index.js main callback(终级回调)</span>
<span class="line">    addEntry(context, entry, name, finallyCallback) {</span>
<span class="line">      this.hooks.addEntry.call(entry, name);//开始增加入口</span>
<span class="line">      this._addModuleChain(context,entry,name);</span>
<span class="line">+      console.log(&#39;编译完成&#39;);</span>
<span class="line">+      console.log(this);</span>
<span class="line">      finallyCallback();</span>
<span class="line">   }</span>
<span class="line">   //增加模块链</span>
<span class="line">   _addModuleChain(context,entry,name){</span>
<span class="line">     let module = normalModuleFactory.create(</span>
<span class="line">         {name,  //模块所属的代码块的名称</span>
<span class="line">         context:this.context,//上下文</span>
<span class="line">         request:path.posix.join(context,entry)});//模块完整路径</span>
<span class="line">     module.build(this);//开始编译模块</span>
<span class="line">     this.entries.push(module);//把编译好的模块添加到入口列表里面</span>
<span class="line">   }</span>
<span class="line">   //编译依赖的模块</span>
<span class="line">+   buildDependencies(module,dependencies){</span>
<span class="line">+    module.dependencies = dependencies.map(data =&gt;{//映射老模块到新的模块</span>
<span class="line">+       let module = normalModuleFactory.create(data);//创建新的模块</span>
<span class="line">+       return module.build(this);//编译模块并返回自己</span>
<span class="line">+    });</span>
<span class="line">+  }</span>
<span class="line">}</span>
<span class="line">module.exports = Compilation;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-2-normalmodule-js" tabindex="-1"><a class="header-anchor" href="#_5-2-normalmodule-js"><span>5.2 NormalModule.js</span></a></h3><p>webpack\\NormalModule.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">+const fs = require(&#39;fs&#39;);</span>
<span class="line">+const ejs = require(&#39;ejs&#39;);</span>
<span class="line">+const path = require(&#39;path&#39;);</span>
<span class="line">+const babylon = require(&#39;babylon&#39;);</span>
<span class="line">+const t = require(&#39;babel-types&#39;);</span>
<span class="line">+const generate = require(&#39;babel-generator&#39;).default;</span>
<span class="line">+const traverse = require(&#39;babel-traverse&#39;).default;</span>
<span class="line">class NormalModule{</span>
<span class="line">    constructor({name,context,request}){</span>
<span class="line">      this.name = name;</span>
<span class="line">      this.context = context;</span>
<span class="line">      this.request = request;  </span>
<span class="line">+      this.dependencies = [];</span>
<span class="line">+      this.moduleId;</span>
<span class="line">+      this._ast;</span>
<span class="line">+      this._source;</span>
<span class="line">    }</span>
<span class="line">    build(compilation){</span>
<span class="line">+        let originalSource = compilation.inputFileSystem.readFileSync(this.request,&#39;utf8&#39;);</span>
<span class="line">+        const ast = babylon.parse(originalSource);</span>
<span class="line">+        let dependencies = [];</span>
<span class="line">+        traverse(ast,{</span>
<span class="line">+            CallExpression:(nodePath)=&gt;{</span>
<span class="line">+                if (nodePath.node.callee.name == &#39;require&#39;) {</span>
<span class="line">+                    //获取当前节点</span>
<span class="line">+                    let node = nodePath.node;</span>
<span class="line">+                    //修改require为__webpack_require__</span>
<span class="line">+                    node.callee.name = &#39;__webpack_require__&#39;;</span>
<span class="line">+                    //获取要加载的模块ID</span>
<span class="line">+                    let moduleName = node.arguments[0].value;</span>
<span class="line">+                    let extension = moduleName.split(path.posix.sep).pop().indexOf(&#39;.&#39;)==-1?&#39;.js&#39;:&#39;&#39;;</span>
<span class="line">+                    //获取依赖模块的绝对路径</span>
<span class="line">+                    let dependencyRequest = path.posix.join(path.posix.dirname(this.request),moduleName+extension);</span>
<span class="line">+                    //获取依赖模块的模块ID</span>
<span class="line">+                    let dependencyModuleId = &#39;./&#39;+path.posix.relative(this.context,dependencyRequest);</span>
<span class="line">+                    //把依赖对象添加到依赖列表里</span>
<span class="line">+                    dependencies.push({name:this.name,context:this.context,request:dependencyRequest});</span>
<span class="line">+                    //修改加载的模块ID名称</span>
<span class="line">+                    node.arguments = [t.stringLiteral(dependencyModuleId)];</span>
<span class="line">+                }</span>
<span class="line">+            }</span>
<span class="line">+        });</span>
<span class="line">+        //生成新的代码</span>
<span class="line">+        let {code} = generate(ast);</span>
<span class="line">+        //获取模块的来源代码</span>
<span class="line">+        this._source = code;</span>
<span class="line">+        //获得语法树</span>
<span class="line">+        this._ast = ast;</span>
<span class="line">+        //获取模块ID</span>
<span class="line">+        this.moduleId = &#39;./&#39;+path.posix.relative(this.context,this.request);</span>
<span class="line">+        //添加到模块数组里</span>
<span class="line">+        compilation.modules.push(this);</span>
<span class="line">+        //KEY为模块的绝对路径 值为模块转译后的代码</span>
<span class="line">+        compilation._modules[this.request] = code;</span>
<span class="line">+        //编译依赖项</span>
<span class="line">+        compilation.buildDependencies(this,dependencies);</span>
<span class="line">+        return this;</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line">module.exports = NormalModule;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-seal封装chunk" tabindex="-1"><a class="header-anchor" href="#_6-seal封装chunk"><span>6. seal封装chunk</span></a></h2><h3 id="_6-1-compiler-js" tabindex="-1"><a class="header-anchor" href="#_6-1-compiler-js"><span>6.1 Compiler.js</span></a></h3><p>webpack\\Compiler.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">this.hooks = {</span>
<span class="line">      compilation: new SyncHook([&quot;compilation&quot;, &quot;params&quot;]),</span>
<span class="line">+      afterCompile:new SyncHook([&quot;params&quot;]),</span>
<span class="line">      done: new AsyncSeriesHook([&quot;stats&quot;])</span>
<span class="line">    };</span>
<span class="line"></span>
<span class="line">compile(onCompiled){</span>
<span class="line">    this.hooks.beforeCompile.callAsync({}, err =&gt; {</span>
<span class="line">      this.hooks.compile.call();</span>
<span class="line">      const compilation = this.newCompilation();</span>
<span class="line">      this.hooks.make.callAsync(compilation, err =&gt; {</span>
<span class="line">+         compilation.seal(err =&gt; {</span>
<span class="line">+           this.hooks.afterCompile.callAsync(compilation, err =&gt; {</span>
<span class="line">+              return onCompiled(null, compilation);</span>
<span class="line">+           });</span>
<span class="line">+         });</span>
<span class="line">      });</span>
<span class="line">    });</span>
<span class="line">  }</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-2-compilation-js" tabindex="-1"><a class="header-anchor" href="#_6-2-compilation-js"><span>6.2 Compilation.js</span></a></h3><p>webpack\\Compilation.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">+ let Chunk = require(&#39;./Chunk&#39;);</span>
<span class="line">class Compilation extends Tapable {</span>
<span class="line">    constructor(compiler) {</span>
<span class="line">        super();</span>
<span class="line">        this.hooks = {</span>
<span class="line">          addEntry: new SyncHook([&quot;entry&quot;, &quot;name&quot;]),</span>
<span class="line">+          seal: new SyncHook([]),</span>
<span class="line">+                beforeChunks: new SyncHook([]),</span>
<span class="line">+                afterChunks: new SyncHook([&quot;chunks&quot;])</span>
<span class="line">        }</span>
<span class="line">        this.entries=[];    //入口模块</span>
<span class="line">        this._modules = {}; //模块代码</span>
<span class="line">        this.modules=[];    //所有模块</span>
<span class="line">+        this.chunks = [];   //代码块</span>
<span class="line">    }</span>
<span class="line">    //context ./src/index.js main callback(终级回调)</span>
<span class="line">    addEntry(context, entry, name, finallyCallback) {</span>
<span class="line">      this.hooks.addEntry.call(entry, name);//开始增加入口</span>
<span class="line">      this._addModuleChain(context,entry,name);</span>
<span class="line">      finallyCallback();</span>
<span class="line">   }</span>
<span class="line"></span>
<span class="line">+  seal(callback){</span>
<span class="line">+    this.hooks.seal.call();</span>
<span class="line">+    this.hooks.beforeChunks.call();//生成代码块之前</span>
<span class="line">+    for (const module of this.entries) {//循环入口模块</span>
<span class="line">+      const chunk = new Chunk(module);//创建代码块</span>
<span class="line">+          this.chunks.push(chunk);//把代码块添加到代码块数组中</span>
<span class="line">+      //把代码块的模块添加到代码块中</span>
<span class="line">+      chunk.modules = this.modules.filter(module=&gt;module.name == chunk.name);</span>
<span class="line">+    }</span>
<span class="line">+    this.hooks.afterChunks.call(this.chunks);//生成代码块之后</span>
<span class="line">+    callback();//封装结束</span>
<span class="line">+  }</span>
<span class="line">}</span>
<span class="line">module.exports = Compilation;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-emit" tabindex="-1"><a class="header-anchor" href="#_7-emit"><span>7. emit</span></a></h2><h3 id="_7-1-compiler-js" tabindex="-1"><a class="header-anchor" href="#_7-1-compiler-js"><span>7.1 Compiler.js</span></a></h3><p>webpack\\Compiler.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">const {Tapable,SyncHook,SyncBailHook,AsyncSeriesHook,AsyncParallelHook} = require(&quot;tapable&quot;);</span>
<span class="line">const Compilation  = require(&#39;./Compilation&#39;);</span>
<span class="line">+ const Stats = require(&#39;./Stats&#39;);</span>
<span class="line">+ const mkdirp = require(&#39;mkdirp&#39;);</span>
<span class="line">+ const path = require(&#39;path&#39;);</span>
<span class="line">class Compiler extends Tapable {</span>
<span class="line">  constructor(context) {</span>
<span class="line">    super();</span>
<span class="line">    this.hooks = {</span>
<span class="line">      environment: new SyncHook([]),</span>
<span class="line">      afterEnvironment: new SyncHook([]),</span>
<span class="line">      afterPlugins: new SyncHook([&quot;compiler&quot;]),</span>
<span class="line">      entryOption: new SyncBailHook([&quot;context&quot;, &quot;entry&quot;]),</span>
<span class="line">      beforeRun: new AsyncSeriesHook([&quot;compiler&quot;]),</span>
<span class="line">      run: new AsyncSeriesHook([&quot;compiler&quot;]),</span>
<span class="line">      beforeCompile: new AsyncSeriesHook([&quot;params&quot;]),</span>
<span class="line">      compile: new SyncHook([&quot;params&quot;]),</span>
<span class="line">      make: new AsyncParallelHook([&quot;compilation&quot;]),</span>
<span class="line">      thisCompilation: new SyncHook([&quot;compilation&quot;, &quot;params&quot;]),</span>
<span class="line">      compilation: new SyncHook([&quot;compilation&quot;, &quot;params&quot;]),</span>
<span class="line">      afterCompile:new SyncHook([&quot;params&quot;]),</span>
<span class="line">+       emit: new AsyncSeriesHook([&quot;compilation&quot;]),</span>
<span class="line">      done: new AsyncSeriesHook([&quot;stats&quot;])</span>
<span class="line">    };</span>
<span class="line">    this.options = {};</span>
<span class="line">    this.context = context; //设置上下文路径</span>
<span class="line">  }</span>
<span class="line">+   emitAssets(compilation,callback){</span>
<span class="line">+     const emitFiles = err =&gt; {</span>
<span class="line">+       let assets = compilation.assets;</span>
<span class="line">+       for(let file in assets){</span>
<span class="line">+         let source = assets[file];</span>
<span class="line">+         const targetPath = path.posix.join(this.options.output.path,file);</span>
<span class="line">+         let content = source;</span>
<span class="line">+         this.outputFileSystem.writeFileSync(targetPath, content);</span>
<span class="line">+       }</span>
<span class="line">+       callback();</span>
<span class="line">+     }</span>
<span class="line">    this.hooks.emit.callAsync(compilation, err =&gt; {</span>
<span class="line">            mkdirp(this.options.output.path, emitFiles);</span>
<span class="line">        });</span>
<span class="line">  }</span>
<span class="line">  run(finalCallback) {</span>
<span class="line">    //编译完成后的回调</span>
<span class="line">    const onCompiled = (err, compilation) =&gt; {</span>
<span class="line">+       this.emitAssets(compilation, err =&gt; {</span>
<span class="line">+         const stats = new Stats(compilation);</span>
<span class="line">+         this.hooks.done.callAsync(stats, err =&gt; {</span>
<span class="line">+            return finalCallback(null, stats);</span>
<span class="line">+         });</span>
<span class="line">+       })</span>
<span class="line">    };</span>
<span class="line">    //准备运行编译</span>
<span class="line">    this.hooks.beforeRun.callAsync(this, err =&gt; {</span>
<span class="line">      //运行</span>
<span class="line">      this.hooks.run.callAsync(this, err =&gt; {</span>
<span class="line">        //开始编译,编译完成后执行conCompiled回调</span>
<span class="line">        this.compile(onCompiled);</span>
<span class="line">      });</span>
<span class="line">    });</span>
<span class="line">  }</span>
<span class="line">  newCompilation(params){</span>
<span class="line">    const compilation = new Compilation(this);</span>
<span class="line">    this.hooks.thisCompilation.call(compilation, params);</span>
<span class="line">      this.hooks.compilation.call(compilation, params);</span>
<span class="line">    return compilation;</span>
<span class="line">  }</span>
<span class="line">  compile(onCompiled){</span>
<span class="line">    this.hooks.beforeCompile.callAsync({}, err =&gt; {</span>
<span class="line">      this.hooks.compile.call();</span>
<span class="line">      const compilation = this.newCompilation();</span>
<span class="line">      this.hooks.make.callAsync(compilation, err =&gt; {</span>
<span class="line">          compilation.seal(err =&gt; {</span>
<span class="line">            this.hooks.afterCompile.callAsync(compilation, err =&gt; {</span>
<span class="line">              return onCompiled(null, compilation);</span>
<span class="line">            });</span>
<span class="line">          });</span>
<span class="line">      });</span>
<span class="line">    });</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line">module.exports = Compiler;</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-2-compilation-js" tabindex="-1"><a class="header-anchor" href="#_7-2-compilation-js"><span>7.2 Compilation.js</span></a></h3><p>webpack\\Compilation.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">const normalModuleFactory = require(&#39;./NormalModuleFactory&#39;);</span>
<span class="line">const {Tapable,SyncHook,SyncBailHook,AsyncSeriesHook,AsyncParallelHook} = require(&quot;tapable&quot;);</span>
<span class="line">const path = require(&#39;path&#39;);</span>
<span class="line">+ const Chunk = require(&#39;./Chunk&#39;);</span>
<span class="line">+ const fs = require(&#39;fs&#39;);</span>
<span class="line">+ const ejs = require(&#39;ejs&#39;);</span>
<span class="line">+ const mainTemplate = fs.readFileSync(path.join(__dirname, &#39;main.ejs&#39;), &#39;utf8&#39;);</span>
<span class="line">+ const mainRender = ejs.compile(mainTemplate);</span>
<span class="line">class Compilation extends Tapable {</span>
<span class="line">    constructor(compiler) {</span>
<span class="line">        super();</span>
<span class="line">        this.compiler = compiler;</span>
<span class="line">        this.options = compiler.options;</span>
<span class="line">        this.context = compiler.context;</span>
<span class="line">        this.inputFileSystem = compiler.inputFileSystem;</span>
<span class="line">            this.outputFileSystem = compiler.outputFileSystem;</span>
<span class="line">        this.hooks = {</span>
<span class="line">          addEntry: new SyncHook([&quot;entry&quot;, &quot;name&quot;]),</span>
<span class="line">          seal: new SyncHook([]),</span>
<span class="line">                beforeChunks: new SyncHook([]),</span>
<span class="line">                afterChunks: new SyncHook([&quot;chunks&quot;])</span>
<span class="line">        }</span>
<span class="line">        this.entries=[];    //入口模块</span>
<span class="line">        this._modules = {}; //模块代码</span>
<span class="line">        this.modules=[];    //所有模块</span>
<span class="line">        this.chunks = [];   //代码块</span>
<span class="line">+       this.files=[];</span>
<span class="line">+       this.assets = {};   //资源 </span>
<span class="line">    }</span>
<span class="line">    //context ./src/index.js main callback(终级回调)</span>
<span class="line">    addEntry(context, entry, name, finallyCallback) {</span>
<span class="line">      this.hooks.addEntry.call(entry, name);//开始增加入口</span>
<span class="line">      this._addModuleChain(context,entry,name);</span>
<span class="line">      finallyCallback();</span>
<span class="line">   }</span>
<span class="line">   //增加模块链</span>
<span class="line">   _addModuleChain(context,entry,name){</span>
<span class="line">     let module = normalModuleFactory.create(</span>
<span class="line">         {name,  //模块所属的代码块的名称</span>
<span class="line">         context:this.context,//上下文</span>
<span class="line">         request:path.posix.join(context,entry)});//模块完整路径</span>
<span class="line">     module.build(this);//开始编译模块</span>
<span class="line">     this.entries.push(module);//把编译好的模块添加到入口列表里面</span>
<span class="line">   }</span>
<span class="line">   //编译依赖的模块</span>
<span class="line">   buildDependencies(module,dependencies){</span>
<span class="line">    module.dependencies = dependencies.map(data =&gt;{//映射老模块到新的模块</span>
<span class="line">       let module = normalModuleFactory.create(data);//创建新的模块</span>
<span class="line">       return module.build(this);//编译模块并返回自己</span>
<span class="line">    });</span>
<span class="line">  }</span>
<span class="line">  seal(callback){</span>
<span class="line">    this.hooks.seal.call();</span>
<span class="line">    this.hooks.beforeChunks.call();//生成代码块之前</span>
<span class="line">    for (const module of this.entries) {//循环入口模块</span>
<span class="line">      const chunk = new Chunk(module);//创建代码块</span>
<span class="line">          this.chunks.push(chunk);//把代码块添加到代码块数组中</span>
<span class="line">      //把代码块的模块添加到代码块中</span>
<span class="line">      chunk.modules = this.modules.filter(module=&gt;module.name == chunk.name);</span>
<span class="line">    }</span>
<span class="line">    this.hooks.afterChunks.call(this.chunks);//生成代码块之后</span>
<span class="line">+     this.createChunkAssets();</span>
<span class="line">    callback();//封装结束</span>
<span class="line">  }</span>
<span class="line">+   createChunkAssets(){</span>
<span class="line">+     for (let i = 0; i &lt; this.chunks.length; i++) {</span>
<span class="line">+       const chunk = this.chunks[i];</span>
<span class="line">+       chunk.files = [];</span>
<span class="line">+             const file = chunk.name+&#39;.js&#39;;</span>
<span class="line">+       const source = mainRender({ entryId:chunk.entryModule.moduleId, modules:chunk.modules});</span>
<span class="line">+       chunk.files.push(file);</span>
<span class="line">+       this.emitAsset(file, source);</span>
<span class="line">+     }</span>
<span class="line">+   }</span>
<span class="line">+   emitAsset(file, source){</span>
<span class="line">+      this.assets[file] = source;</span>
<span class="line">+      this.files.push(file);</span>
<span class="line">+   }</span>
<span class="line">}</span>
<span class="line">module.exports = Compilation;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-3-main-ejs" tabindex="-1"><a class="header-anchor" href="#_7-3-main-ejs"><span>7.3 main.ejs</span></a></h3><p>webpack\\main.ejs</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">modules</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">var</span> installedModules <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">__webpack_require__</span><span class="token punctuation">(</span><span class="token parameter">moduleId</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span>installedModules<span class="token punctuation">[</span>moduleId<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> installedModules<span class="token punctuation">[</span>moduleId<span class="token punctuation">]</span><span class="token punctuation">.</span>exports<span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">      <span class="token keyword">var</span> module <span class="token operator">=</span> installedModules<span class="token punctuation">[</span>moduleId<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">i</span><span class="token operator">:</span> moduleId<span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">l</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">exports</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">      modules<span class="token punctuation">[</span>moduleId<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>module<span class="token punctuation">.</span>exports<span class="token punctuation">,</span> module<span class="token punctuation">,</span> module<span class="token punctuation">.</span>exports<span class="token punctuation">,</span> __webpack_require__<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      module<span class="token punctuation">.</span>l <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">return</span> module<span class="token punctuation">.</span>exports<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token function">__webpack_require__</span><span class="token punctuation">(</span>__webpack_require__<span class="token punctuation">.</span>s <span class="token operator">=</span> <span class="token string">&quot;&lt;%-entryId%&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token operator">&lt;</span><span class="token operator">%</span></span>
<span class="line">          <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> id <span class="token keyword">in</span> modules<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">              <span class="token keyword">let</span> <span class="token punctuation">{</span>moduleId<span class="token punctuation">,</span>_source<span class="token punctuation">}</span> <span class="token operator">=</span> modules<span class="token punctuation">[</span>id<span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token operator">%</span><span class="token operator">&gt;</span></span>
<span class="line">              <span class="token string-property property">&quot;&lt;%-moduleId%&gt;&quot;</span><span class="token operator">:</span></span>
<span class="line">              <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">module<span class="token punctuation">,</span> exports<span class="token punctuation">,</span>__webpack_require__</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token operator">&lt;</span><span class="token operator">%</span><span class="token operator">-</span>_source<span class="token operator">%</span><span class="token operator">&gt;</span></span>
<span class="line">              <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">           <span class="token operator">&lt;</span><span class="token operator">%</span><span class="token punctuation">}</span></span>
<span class="line">        <span class="token operator">%</span><span class="token operator">&gt;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-4-stats-js" tabindex="-1"><a class="header-anchor" href="#_7-4-stats-js"><span>7.4 Stats.js</span></a></h3><p>webpack\\Stats.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">class</span> <span class="token class-name">Stats</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">compilation</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>files <span class="token operator">=</span> compilation<span class="token punctuation">.</span>files<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>modules <span class="token operator">=</span> compilation<span class="token punctuation">.</span>modules<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>chunks <span class="token operator">=</span> compilation<span class="token punctuation">.</span>chunks<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> Stats<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-支持loader" tabindex="-1"><a class="header-anchor" href="#_8-支持loader"><span>8. 支持loader</span></a></h2><h3 id="_8-1-normalmodule-js" tabindex="-1"><a class="header-anchor" href="#_8-1-normalmodule-js"><span>8.1 NormalModule.js</span></a></h3><p>webpack\\NormalModule.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">const fs = require(&#39;fs&#39;);</span>
<span class="line">const ejs = require(&#39;ejs&#39;);</span>
<span class="line">const path = require(&#39;path&#39;);</span>
<span class="line">const babylon = require(&#39;babylon&#39;);</span>
<span class="line">const t = require(&#39;babel-types&#39;);</span>
<span class="line">const generate = require(&#39;babel-generator&#39;).default;</span>
<span class="line">const traverse = require(&#39;babel-traverse&#39;).default;</span>
<span class="line">class NormalModule{</span>
<span class="line">    constructor({name,context,request}){</span>
<span class="line">      this.name = name;</span>
<span class="line">      this.context = context;</span>
<span class="line">      this.request = request;  </span>
<span class="line">      this.dependencies = [];</span>
<span class="line">      this.moduleId;</span>
<span class="line">      this._ast;</span>
<span class="line">      this._source;</span>
<span class="line">    }</span>
<span class="line">+    getSource(request,compilation){</span>
<span class="line">+        let source = compilation.inputFileSystem.readFileSync(this.request,&#39;utf8&#39;);</span>
<span class="line">+        let { module: { rules } } = compilation.options;</span>
<span class="line">+        for (let i = 0; i &lt; rules.length; i++) {</span>
<span class="line">+            let rule = rules[i];</span>
<span class="line">+            if (rule.test.test(request)) {</span>
<span class="line">+                let loaders = rule.use;</span>
<span class="line">+                let loaderIndex = loaders.length - 1;</span>
<span class="line">+                let iterateLoaders = ()=&gt;{</span>
<span class="line">+                    let loaderName = loaders[loaderIndex];</span>
<span class="line">+                    let loader = require(path.resolve(this.context, &#39;loaders&#39;, loaderName));</span>
<span class="line">+                    source = loader(source);</span>
<span class="line">+                    if (loaderIndex &gt; 0) {</span>
<span class="line">+                        loaderIndex--;</span>
<span class="line">+                        iterateLoaders();</span>
<span class="line">+                    }</span>
<span class="line">+                }</span>
<span class="line">+                iterateLoaders();</span>
<span class="line">+                break;</span>
<span class="line">+            }</span>
<span class="line">+        }</span>
<span class="line">+        return source;</span>
<span class="line">+    }</span>
<span class="line">    build(compilation){</span>
<span class="line">+        let originalSource = this.getSource(this.request,compilation);</span>
<span class="line">        const ast = babylon.parse(originalSource);</span>
<span class="line">        let dependencies = [];</span>
<span class="line">        traverse(ast,{</span>
<span class="line">            CallExpression:(nodePath)=&gt;{</span>
<span class="line">                if (nodePath.node.callee.name == &#39;require&#39;) {</span>
<span class="line">                    //获取当前节点</span>
<span class="line">                    let node = nodePath.node;</span>
<span class="line">                    //修改require为__webpack_require__</span>
<span class="line">                    node.callee.name = &#39;__webpack_require__&#39;;</span>
<span class="line">                    //获取要加载的模块ID</span>
<span class="line">                    let moduleName = node.arguments[0].value;</span>
<span class="line">                    let extension = moduleName.split(path.posix.sep).pop().indexOf(&#39;.&#39;)==-1?&#39;.js&#39;:&#39;&#39;;</span>
<span class="line">                    //获取依赖模块的绝对路径</span>
<span class="line">                    let dependencyRequest = path.posix.join(path.posix.dirname(this.request),moduleName+extension);</span>
<span class="line">                    //获取依赖模块的模块ID</span>
<span class="line">                    let dependencyModuleId = &#39;./&#39;+path.posix.relative(this.context,dependencyRequest);</span>
<span class="line">                    //把依赖对象添加到依赖列表里</span>
<span class="line">                    dependencies.push({name:this.name,context:this.context,request:dependencyRequest});</span>
<span class="line">                    //修改加载的模块ID名称</span>
<span class="line">                    node.arguments = [t.stringLiteral(dependencyModuleId)];</span>
<span class="line">                }</span>
<span class="line">            }</span>
<span class="line">        });</span>
<span class="line">        //生成新的代码</span>
<span class="line">        let {code} = generate(ast);</span>
<span class="line">        //获取模块的来源代码</span>
<span class="line">        this._source = code;</span>
<span class="line">        //获得语法树</span>
<span class="line">        this._ast = ast;</span>
<span class="line">        //获取模块ID</span>
<span class="line">        this.moduleId = &#39;./&#39;+path.posix.relative(this.context,this.request);</span>
<span class="line">        //添加到模块数组里</span>
<span class="line">        compilation.modules.push(this);</span>
<span class="line">        //KEY为模块的绝对路径 值为模块转译后的代码</span>
<span class="line">        compilation._modules[this.request] = code;</span>
<span class="line">        //编译依赖项</span>
<span class="line">        compilation.buildDependencies(this,dependencies);</span>
<span class="line">        return this;</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line">module.exports = NormalModule;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-2-index-js" tabindex="-1"><a class="header-anchor" href="#_8-2-index-js"><span>8.2 index.js</span></a></h3><p>src\\index.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">+require(&#39;./index.less&#39;);</span>
<span class="line">let title = require(&#39;./title&#39;);</span>
<span class="line">console.log(title);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-3-src-index-less" tabindex="-1"><a class="header-anchor" href="#_8-3-src-index-less"><span>8.3 src\\index.less</span></a></h3><p>index.less</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">@color:red;</span>
<span class="line">body{</span>
<span class="line">    background-color:@color;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-4-less-loader-js" tabindex="-1"><a class="header-anchor" href="#_8-4-less-loader-js"><span>8.4 less-loader.js</span></a></h3><p>loaders\\less-loader.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">var</span> less <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;less&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">source</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> css<span class="token punctuation">;</span></span>
<span class="line">    less<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>source<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> output</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">        css <span class="token operator">=</span> output<span class="token punctuation">.</span>css<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> css<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-5-style-loader-js" tabindex="-1"><a class="header-anchor" href="#_8-5-style-loader-js"><span>8.5 style-loader.js</span></a></h3><p>loaders\\style-loader.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line">module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">source</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string"></span>
<span class="line">      let style = document.createElement(&#39;style&#39;);</span>
<span class="line">      style.innerHTML = </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>source<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">;</span>
<span class="line">      document.head.appendChild(style);</span>
<span class="line">    </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> str<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,91)])])}const o=s(l,[["render",i]]),u=JSON.parse('{"path":"/strong/26.webpack-9-hand.html","title":"","lang":"en-US","frontmatter":{},"git":{"updatedTime":1681290319000,"contributors":[{"name":"yutao","username":"yutao","email":"642231346@qq.com","commits":1,"url":"https://github.com/yutao"}],"changelog":[{"hash":"f5ab8c9d34991ec274f7f652439afe5b2afb6147","time":1681290319000,"email":"642231346@qq.com","author":"yutao","message":"modify"}]},"filePathRelative":"strong/26.webpack-9-hand.md"}');export{o as comp,u as data};
