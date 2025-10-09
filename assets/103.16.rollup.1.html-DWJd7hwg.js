import{_ as n,c as a,a as e,o as l}from"./app-CD1YpnS1.js";const i={};function p(t,s){return l(),a("div",null,[...s[0]||(s[0]=[e(`<h2 id="rollup实战" tabindex="-1"><a class="header-anchor" href="#rollup实战"><span>rollup实战</span></a></h2><ul><li><a href="https://rollupjs.org/guide/en/" target="_blank" rel="noopener noreferrer">rollupjs</a>是下一代ES模块捆绑器</li></ul><h3 id="_1-背景" tabindex="-1"><a class="header-anchor" href="#_1-背景"><span>1 背景</span></a></h3><ul><li>webpack打包非常繁琐，打包体积比较大</li><li>rollup主要是用来打包JS库的</li><li>vue/react/angular都在用rollup作为打包工具</li></ul><h2 id="_2-安装依赖" tabindex="-1"><a class="header-anchor" href="#_2-安装依赖"><span>2. 安装依赖</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">cnpm i @babel/core @babel/preset-env  @rollup/plugin-commonjs @rollup/plugin-node-resolve @rollup/plugin-typescript lodash rollup rollup-plugin-babel postcss rollup-plugin-postcss rollup-plugin-terser tslib typescript rollup-plugin-serve rollup-plugin-livereload -D</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="_3-初次使用" tabindex="-1"><a class="header-anchor" href="#_3-初次使用"><span>3 初次使用</span></a></h2><h3 id="_3-1-rollup-config-js" tabindex="-1"><a class="header-anchor" href="#_3-1-rollup-config-js"><span>3.1 rollup.config.js</span></a></h3><ul><li><code>Asynchronous Module Definition</code>异步模块定义</li><li>ES6 module是es6提出了新的模块化方案</li><li><code>IIFE(Immediately Invoked Function Expression)</code>即立即执行函数表达式，所谓立即执行，就是声明一个函数，声明完了立即执行</li><li>UMD全称为<code>Universal Module Definition</code>,也就是通用模块定义</li><li><code>cjs</code>是nodejs采用的模块化标准，commonjs使用方法<code>require</code>来引入模块,这里<code>require()</code>接收的参数是模块名或者是模块文件的路径</li></ul><p>rollup.config.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">input</span><span class="token operator">:</span><span class="token string">&#39;src/main.js&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">output</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">file</span><span class="token operator">:</span><span class="token string">&#39;dist/bundle.cjs.js&#39;</span><span class="token punctuation">,</span><span class="token comment">//输出文件的路径和名称</span></span>
<span class="line">        <span class="token literal-property property">format</span><span class="token operator">:</span><span class="token string">&#39;cjs&#39;</span><span class="token punctuation">,</span><span class="token comment">//五种输出格式：amd/es6/iife/umd/cjs</span></span>
<span class="line">        <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;bundleName&#39;</span><span class="token comment">//当format为iife和umd时必须提供，将作为全局变量挂在window下</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-src-main-js" tabindex="-1"><a class="header-anchor" href="#_3-2-src-main-js"><span>3.2 src\\main.js</span></a></h3><p>src\\main.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_3-3-package-json" tabindex="-1"><a class="header-anchor" href="#_3-3-package-json"><span>3.3 package.json</span></a></h3><p>package.json</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token punctuation">{</span></span>
<span class="line"> <span class="token string-property property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;rollup --config&quot;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-4-dist-index-html" tabindex="-1"><a class="header-anchor" href="#_3-4-dist-index-html"><span>3.4 dist\\index.html</span></a></h3><p>dist\\index.html</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token constant">DOCTYPE</span> html<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span>html lang<span class="token operator">=</span><span class="token string">&quot;en&quot;</span><span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span>head<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span>meta charset<span class="token operator">=</span><span class="token string">&quot;UTF-8&quot;</span><span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span>meta http<span class="token operator">-</span>equiv<span class="token operator">=</span><span class="token string">&quot;X-UA-Compatible&quot;</span> content<span class="token operator">=</span><span class="token string">&quot;IE=edge&quot;</span><span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span>meta name<span class="token operator">=</span><span class="token string">&quot;viewport&quot;</span> content<span class="token operator">=</span><span class="token string">&quot;width=device-width, initial-scale=1.0&quot;</span><span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span>title<span class="token operator">&gt;</span>rollup<span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span>body<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">&quot;bundle.cjs.js&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-支持babel" tabindex="-1"><a class="header-anchor" href="#_4-支持babel"><span>4 支持babel</span></a></h2><ul><li>为了使用新的语法，可以使用babel来进行编译输出</li></ul><h3 id="_4-1-安装依赖" tabindex="-1"><a class="header-anchor" href="#_4-1-安装依赖"><span>4.1 安装依赖</span></a></h3><ul><li>@babel/core是babel的核心包</li><li>@babel/preset-env是预设</li><li>@rollup/plugin-babel是babel插件</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">cnpm install @rollup/plugin-babel @babel/core @babel/preset-env --save-dev</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_4-2-src-main-js" tabindex="-1"><a class="header-anchor" href="#_4-2-src-main-js"><span>4.2 src\\main.js</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">let</span> <span class="token function-variable function">sum</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span>b</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> a<span class="token operator">+</span>b<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-babelrc" tabindex="-1"><a class="header-anchor" href="#_4-3-babelrc"><span>4.3 .babelrc</span></a></h3><p>.babelrc</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">&quot;presets&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">       <span class="token punctuation">[</span></span>
<span class="line">        <span class="token string">&quot;@babel/env&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">            <span class="token string-property property">&quot;modules&quot;</span><span class="token operator">:</span><span class="token boolean">false</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">       <span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-4-rollup-config-js" tabindex="-1"><a class="header-anchor" href="#_4-4-rollup-config-js"><span>4.4 rollup.config.js</span></a></h3><p>rollup.config.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">+import babel from &#39;@rollup/plugin-babel&#39;;</span>
<span class="line">export default {</span>
<span class="line">    input:&#39;src/main.js&#39;,</span>
<span class="line">    output:{</span>
<span class="line">        file:&#39;dist/bundle.cjs.js&#39;,//输出文件的路径和名称</span>
<span class="line">        format:&#39;cjs&#39;,//五种输出格式：amd/es6/iife/umd/cjs</span>
<span class="line">        name:&#39;bundleName&#39;//当format为iife和umd时必须提供，将作为全局变量挂在window下</span>
<span class="line">    },</span>
<span class="line">+   plugins:[</span>
<span class="line">+       babel({</span>
<span class="line">+           exclude:&quot;node_modules/**&quot;</span>
<span class="line">+       })</span>
<span class="line">+   ]</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-tree-shaking" tabindex="-1"><a class="header-anchor" href="#_5-tree-shaking"><span>5 tree-shaking</span></a></h2><ul><li>Tree-shaking的本质是消除无用的js代码</li><li>rollup只处理函数和顶层的import/export变量</li></ul><h3 id="_5-1-src-main-js" tabindex="-1"><a class="header-anchor" href="#_5-1-src-main-js"><span>5.1 src\\main.js</span></a></h3><p>src\\main.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span>name<span class="token punctuation">,</span>age<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./msg&#39;</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-2-src-msg-js" tabindex="-1"><a class="header-anchor" href="#_5-2-src-msg-js"><span>5.2 src\\msg.js</span></a></h3><p>src\\msg.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">export</span> <span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">&#39;zhufeng&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">var</span> age <span class="token operator">=</span> <span class="token number">12</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-使用第三方模块" tabindex="-1"><a class="header-anchor" href="#_6-使用第三方模块"><span>6 使用第三方模块</span></a></h2><ul><li>rollup.js编译源码中的模块引用默认只支持 ES6+的模块方式<code>import/export</code></li></ul><h3 id="_6-1-安装依赖" tabindex="-1"><a class="header-anchor" href="#_6-1-安装依赖"><span>6.1 安装依赖</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">cnpm install @rollup/plugin-node-resolve @rollup/plugin-commonjs lodash  --save-dev</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_6-2-src-main-js" tabindex="-1"><a class="header-anchor" href="#_6-2-src-main-js"><span>6.2 src\\main.js</span></a></h3><p>src\\main.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> _ <span class="token keyword">from</span> <span class="token string">&#39;lodash&#39;</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>_<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-3-rollup-config-js" tabindex="-1"><a class="header-anchor" href="#_6-3-rollup-config-js"><span>6.3 rollup.config.js</span></a></h3><p>rollup.config.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import babel from &#39;rollup-plugin-babel&#39;;</span>
<span class="line">+import resolve from &#39;@rollup/plugin-node-resolve&#39;;</span>
<span class="line">+import commonjs from &#39;@rollup/plugin-commonjs&#39;;</span>
<span class="line">export default {</span>
<span class="line">    input:&#39;src/main.js&#39;,</span>
<span class="line">    output:{</span>
<span class="line">        file:&#39;dist/bundle.cjs.js&#39;,//输出文件的路径和名称</span>
<span class="line">        format:&#39;cjs&#39;,//五种输出格式：amd/es6/iife/umd/cjs</span>
<span class="line">        name:&#39;bundleName&#39;//当format为iife和umd时必须提供，将作为全局变量挂在window下</span>
<span class="line">    },</span>
<span class="line">    plugins:[</span>
<span class="line">        babel({</span>
<span class="line">            exclude:&quot;node_modules/**&quot;</span>
<span class="line">        }),</span>
<span class="line">+       resolve(),</span>
<span class="line">+       commonjs()</span>
<span class="line">    ]</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-使用cdn" tabindex="-1"><a class="header-anchor" href="#_7-使用cdn"><span>7 使用CDN</span></a></h2><h3 id="_7-1-src-main-js" tabindex="-1"><a class="header-anchor" href="#_7-1-src-main-js"><span>7.1 src\\main.js</span></a></h3><p>src\\main.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> _ <span class="token keyword">from</span> <span class="token string">&#39;lodash&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> $ <span class="token keyword">from</span> <span class="token string">&#39;jquery&#39;</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>_<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>$<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token string">&#39;main&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-2-dist-index-html" tabindex="-1"><a class="header-anchor" href="#_7-2-dist-index-html"><span>7.2 dist\\index.html</span></a></h3><p>dist\\index.html</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token constant">DOCTYPE</span> html<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span>html lang<span class="token operator">=</span><span class="token string">&quot;en&quot;</span><span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span>head<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span>meta charset<span class="token operator">=</span><span class="token string">&quot;UTF-8&quot;</span><span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span>meta http<span class="token operator">-</span>equiv<span class="token operator">=</span><span class="token string">&quot;X-UA-Compatible&quot;</span> content<span class="token operator">=</span><span class="token string">&quot;IE=edge&quot;</span><span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span>meta name<span class="token operator">=</span><span class="token string">&quot;viewport&quot;</span> content<span class="token operator">=</span><span class="token string">&quot;width=device-width, initial-scale=1.0&quot;</span><span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span>title<span class="token operator">&gt;</span>rollup<span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span>body<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">&quot;https://cdn.jsdelivr.net/npm/lodash/lodash.min.js&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">&quot;https://cdn.jsdelivr.net/npm/jquery/jquery.min.js&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">&quot;bundle.cjs.js&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-3-rollup-config-js" tabindex="-1"><a class="header-anchor" href="#_7-3-rollup-config-js"><span>7.3 rollup.config.js</span></a></h3><p>rollup.config.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import babel from &#39;rollup-plugin-babel&#39;;</span>
<span class="line">import resolve from &#39;@rollup/plugin-node-resolve&#39;;</span>
<span class="line">import commonjs from &#39;@rollup/plugin-commonjs&#39;;</span>
<span class="line">export default {</span>
<span class="line">    input:&#39;src/main.js&#39;,</span>
<span class="line">    output:{</span>
<span class="line">        file:&#39;dist/bundle.cjs.js&#39;,//输出文件的路径和名称</span>
<span class="line">+       format:&#39;iife&#39;,//五种输出格式：amd/es6/iife/umd/cjs</span>
<span class="line">+       name:&#39;bundleName&#39;,//当format为iife和umd时必须提供，将作为全局变量挂在window下</span>
<span class="line">+       globals:{</span>
<span class="line">+           lodash:&#39;_&#39;, //告诉rollup全局变量_即是lodash</span>
<span class="line">+           jquery:&#39;$&#39; //告诉rollup全局变量$即是jquery</span>
<span class="line">+       }</span>
<span class="line">    },</span>
<span class="line">    plugins:[</span>
<span class="line">        babel({</span>
<span class="line">            exclude:&quot;node_modules/**&quot;</span>
<span class="line">        }),</span>
<span class="line">        resolve(),</span>
<span class="line">        commonjs()</span>
<span class="line">    ],</span>
<span class="line">+   external:[&#39;lodash&#39;,&#39;jquery&#39;]</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-使用typescript" tabindex="-1"><a class="header-anchor" href="#_8-使用typescript"><span>8 使用typescript</span></a></h2><h3 id="_8-1-安装" tabindex="-1"><a class="header-anchor" href="#_8-1-安装"><span>8.1 安装</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">cnpm install tslib typescript @rollup/plugin-typescript --save-dev</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_8-2-src-main-ts" tabindex="-1"><a class="header-anchor" href="#_8-2-src-main-ts"><span>8.2 src\\main.ts</span></a></h3><p>src\\main.ts</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">let</span> <span class="token literal-property property">myName</span><span class="token operator">:</span>string <span class="token operator">=</span> <span class="token string">&#39;zhufeng&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> <span class="token literal-property property">age</span><span class="token operator">:</span>number<span class="token operator">=</span><span class="token number">12</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>myName<span class="token punctuation">,</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-3-rollup-config-js" tabindex="-1"><a class="header-anchor" href="#_8-3-rollup-config-js"><span>8.3 rollup.config.js</span></a></h3><p>rollup.config.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import babel from &#39;rollup-plugin-babel&#39;;</span>
<span class="line">import resolve from &#39;@rollup/plugin-node-resolve&#39;;</span>
<span class="line">import commonjs from &#39;@rollup/plugin-commonjs&#39;;</span>
<span class="line">+import typescript from &#39;@rollup/plugin-typescript&#39;;</span>
<span class="line">export default {</span>
<span class="line">+   input:&#39;src/main.ts&#39;,</span>
<span class="line">    output:{</span>
<span class="line">        file:&#39;dist/bundle.cjs.js&#39;,//输出文件的路径和名称</span>
<span class="line">        format:&#39;iife&#39;,//五种输出格式：amd/es6/iife/umd/cjs</span>
<span class="line">        name:&#39;bundleName&#39;,//当format为iife和umd时必须提供，将作为全局变量挂在window下</span>
<span class="line">        globals:{</span>
<span class="line">            lodash:&#39;_&#39;, //告诉rollup全局变量_即是lodash</span>
<span class="line">            jquery:&#39;$&#39; //告诉rollup全局变量$即是jquery</span>
<span class="line">        }</span>
<span class="line">    },</span>
<span class="line">    plugins:[</span>
<span class="line">        babel({</span>
<span class="line">            exclude:&quot;node_modules/**&quot;</span>
<span class="line">        }),</span>
<span class="line">        resolve(),</span>
<span class="line">        commonjs(),</span>
<span class="line">+       typescript()</span>
<span class="line">    ],</span>
<span class="line">    external:[&#39;lodash&#39;,&#39;jquery&#39;]</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-4-tsconfig-json" tabindex="-1"><a class="header-anchor" href="#_8-4-tsconfig-json"><span>8.4 tsconfig.json</span></a></h3><p>tsconfig.json</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>  </span>
<span class="line">    <span class="token string-property property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;es5&quot;</span><span class="token punctuation">,</span>                          </span>
<span class="line">    <span class="token string-property property">&quot;module&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ESNext&quot;</span><span class="token punctuation">,</span>                     </span>
<span class="line">    <span class="token string-property property">&quot;strict&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                         </span>
<span class="line">    <span class="token string-property property">&quot;skipLibCheck&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                    </span>
<span class="line">    <span class="token string-property property">&quot;forceConsistentCasingInFileNames&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span> </span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-压缩js" tabindex="-1"><a class="header-anchor" href="#_9-压缩js"><span>9 压缩JS</span></a></h2><ul><li>terser是支持ES6 +的JavaScript压缩器工具包</li></ul><h3 id="_9-1-安装" tabindex="-1"><a class="header-anchor" href="#_9-1-安装"><span>9.1 安装</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">cnpm install rollup-plugin-terser --save-dev</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_9-2-rollup-config-js" tabindex="-1"><a class="header-anchor" href="#_9-2-rollup-config-js"><span>9.2 rollup.config.js</span></a></h3><p>rollup.config.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import babel from &#39;rollup-plugin-babel&#39;;</span>
<span class="line">import resolve from &#39;@rollup/plugin-node-resolve&#39;;</span>
<span class="line">import commonjs from &#39;@rollup/plugin-commonjs&#39;;</span>
<span class="line">import typescript from &#39;@rollup/plugin-typescript&#39;;</span>
<span class="line">+import {terser} from &#39;rollup-plugin-terser&#39;;</span>
<span class="line">export default {</span>
<span class="line">    input:&#39;src/main.ts&#39;,</span>
<span class="line">    output:{</span>
<span class="line">        file:&#39;dist/bundle.cjs.js&#39;,//输出文件的路径和名称</span>
<span class="line">        format:&#39;iife&#39;,//五种输出格式：amd/es6/iife/umd/cjs</span>
<span class="line">        name:&#39;bundleName&#39;,//当format为iife和umd时必须提供，将作为全局变量挂在window下</span>
<span class="line">        globals:{</span>
<span class="line">            lodash:&#39;_&#39;, //告诉rollup全局变量_即是lodash</span>
<span class="line">            jquery:&#39;$&#39; //告诉rollup全局变量$即是jquery</span>
<span class="line">        }</span>
<span class="line">    },</span>
<span class="line">    plugins:[</span>
<span class="line">        babel({</span>
<span class="line">            exclude:&quot;node_modules/**&quot;</span>
<span class="line">        }),</span>
<span class="line">        resolve(),</span>
<span class="line">        commonjs(),</span>
<span class="line">        typescript(),</span>
<span class="line">+       terser(),</span>
<span class="line">    ],</span>
<span class="line">    external:[&#39;lodash&#39;,&#39;jquery&#39;]</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_10-编译css" tabindex="-1"><a class="header-anchor" href="#_10-编译css"><span>10 编译css</span></a></h2><ul><li>terser是支持ES6 +的JavaScript压缩器工具包</li></ul><h3 id="_10-1-安装" tabindex="-1"><a class="header-anchor" href="#_10-1-安装"><span>10.1 安装</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">cnpm install  postcss rollup-plugin-postcss --save-dev</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_10-2-rollup-config-js" tabindex="-1"><a class="header-anchor" href="#_10-2-rollup-config-js"><span>10.2 rollup.config.js</span></a></h3><p>rollup.config.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import babel from &#39;rollup-plugin-babel&#39;;</span>
<span class="line">import resolve from &#39;@rollup/plugin-node-resolve&#39;;</span>
<span class="line">import commonjs from &#39;@rollup/plugin-commonjs&#39;;</span>
<span class="line">import typescript from &#39;@rollup/plugin-typescript&#39;;</span>
<span class="line">import {terser} from &#39;rollup-plugin-terser&#39;;</span>
<span class="line">+import postcss from &#39;rollup-plugin-postcss&#39;;</span>
<span class="line">export default {</span>
<span class="line">    input:&#39;src/main.js&#39;,</span>
<span class="line">    output:{</span>
<span class="line">        file:&#39;dist/bundle.cjs.js&#39;,//输出文件的路径和名称</span>
<span class="line">        format:&#39;iife&#39;,//五种输出格式：amd/es6/iife/umd/cjs</span>
<span class="line">        name:&#39;bundleName&#39;,//当format为iife和umd时必须提供，将作为全局变量挂在window下</span>
<span class="line">        globals:{</span>
<span class="line">            lodash:&#39;_&#39;, //告诉rollup全局变量_即是lodash</span>
<span class="line">            jquery:&#39;$&#39; //告诉rollup全局变量$即是jquery</span>
<span class="line">        }</span>
<span class="line">    },</span>
<span class="line">    plugins:[</span>
<span class="line">        babel({</span>
<span class="line">            exclude:&quot;node_modules/**&quot;</span>
<span class="line">        }),</span>
<span class="line">        resolve(),</span>
<span class="line">        commonjs(),</span>
<span class="line">        typescript(),</span>
<span class="line">        //terser(),</span>
<span class="line">+       postcss()</span>
<span class="line">    ],</span>
<span class="line">    external:[&#39;lodash&#39;,&#39;jquery&#39;]</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10-3-src-main-js" tabindex="-1"><a class="header-anchor" href="#_10-3-src-main-js"><span>10.3 src\\main.js</span></a></h3><p>src\\main.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token string">&#39;./main.css&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_10-4-src-main-css" tabindex="-1"><a class="header-anchor" href="#_10-4-src-main-css"><span>10.4 src\\main.css</span></a></h3><p>src\\main.css</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">body{</span>
<span class="line">    background-color: green;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_11-本地服务器" tabindex="-1"><a class="header-anchor" href="#_11-本地服务器"><span>11 本地服务器</span></a></h2><h3 id="_11-1-安装" tabindex="-1"><a class="header-anchor" href="#_11-1-安装"><span>11.1 安装</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">cnpm install rollup-plugin-serve --save-dev</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_11-2-rollup-config-dev-js" tabindex="-1"><a class="header-anchor" href="#_11-2-rollup-config-dev-js"><span>11.2 rollup.config.dev.js</span></a></h3><p>rollup.config.dev.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import babel from &#39;rollup-plugin-babel&#39;;</span>
<span class="line">import resolve from &#39;@rollup/plugin-node-resolve&#39;;</span>
<span class="line">import commonjs from &#39;@rollup/plugin-commonjs&#39;;</span>
<span class="line">import typescript from &#39;@rollup/plugin-typescript&#39;;</span>
<span class="line">import postcss from &#39;rollup-plugin-postcss&#39;;</span>
<span class="line">+import serve from &#39;rollup-plugin-serve&#39;;</span>
<span class="line">export default {</span>
<span class="line">    input:&#39;src/main.js&#39;,</span>
<span class="line">    output:{</span>
<span class="line">        file:&#39;dist/bundle.cjs.js&#39;,//输出文件的路径和名称</span>
<span class="line">        format:&#39;iife&#39;,//五种输出格式：amd/es6/iife/umd/cjs</span>
<span class="line">        name:&#39;bundleName&#39;,//当format为iife和umd时必须提供，将作为全局变量挂在window下</span>
<span class="line">        sourcemap:true,</span>
<span class="line">        globals:{</span>
<span class="line">            lodash:&#39;_&#39;, //告诉rollup全局变量_即是lodash</span>
<span class="line">            jquery:&#39;$&#39; //告诉rollup全局变量$即是jquery</span>
<span class="line">        }</span>
<span class="line">    },</span>
<span class="line">    plugins:[</span>
<span class="line">        babel({</span>
<span class="line">            exclude:&quot;node_modules/**&quot;</span>
<span class="line">        }),</span>
<span class="line">        resolve(),</span>
<span class="line">        commonjs(),</span>
<span class="line">        typescript(),</span>
<span class="line">        postcss(),</span>
<span class="line">+       serve({</span>
<span class="line">+           open:true,</span>
<span class="line">+           port:8080,</span>
<span class="line">+           contentBase:&#39;./dist&#39;</span>
<span class="line">+       })</span>
<span class="line">    ],</span>
<span class="line">    external:[&#39;lodash&#39;,&#39;jquery&#39;]</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_11-3-package-json" tabindex="-1"><a class="header-anchor" href="#_11-3-package-json"><span>11.3 package.json</span></a></h3><p>package.json</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">{</span>
<span class="line">  &quot;scripts&quot;: {</span>
<span class="line">    &quot;build&quot;: &quot;rollup --config rollup.config.build.js&quot;,</span>
<span class="line">    &quot;dev&quot;: &quot;rollup --config rollup.config.dev.js -w&quot;</span>
<span class="line">  },</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,102)])])}const c=n(i,[["render",p]]),o=JSON.parse('{"path":"/strong/103.16.rollup.1.html","title":"","lang":"en-US","frontmatter":{},"git":{"updatedTime":1681290319000,"contributors":[{"name":"yutao","username":"yutao","email":"642231346@qq.com","commits":1,"url":"https://github.com/yutao"}],"changelog":[{"hash":"f5ab8c9d34991ec274f7f652439afe5b2afb6147","time":1681290319000,"email":"642231346@qq.com","author":"yutao","message":"modify"}]},"filePathRelative":"strong/103.16.rollup.1.md"}');export{c as comp,o as data};
