import{_ as n,c as a,a as e,o as l}from"./app-CD1YpnS1.js";const i={};function p(t,s){return l(),a("div",null,[...s[0]||(s[0]=[e(`<h2 id="_1-什么是gulp" tabindex="-1"><a class="header-anchor" href="#_1-什么是gulp"><span>1.什么是gulp</span></a></h2><ul><li><a href="https://gulpjs.com/" target="_blank" rel="noopener noreferrer">gulp</a>是可以自动化执行任务的工具 在平时开发的流程里面,一定有一些任务需要手工重复得执行，比如: <ul><li>把文件从开发目录拷贝到生产目录</li><li>把多个 JS 或者 CSS 文件合并成一个文件</li><li>对JS文件和CSS进行压缩</li><li>把sass或者less文件编译成CSS</li><li>压缩图像文件</li><li>创建一个可以实时刷新页面内容的本地服务器 <blockquote><p>只要你觉得有些动作是要重复去做的,就可以把这些动作创建成一个gulp任务,然后在指定的条件下自动执行</p></blockquote></li></ul></li></ul><h2 id="_2-gulp特点" tabindex="-1"><a class="header-anchor" href="#_2-gulp特点"><span>2. gulp特点</span></a></h2><ul><li>易于使用 通过代码优于配置的策略,Gulp 让简单的任务简单，复杂的任务可管理</li><li>快速构建 利用 node.js 流的威力,你可以快速构建项目并减少频繁的 IO 操作</li><li>高质量的插件 Gulp 严格的插件指南确保插件如你期望的那样简洁地工作</li><li>易于学习 通过最少的 API，掌握 gulp 毫不费力，构建工作尽在掌握</li></ul><h2 id="_3-安装gulp" tabindex="-1"><a class="header-anchor" href="#_3-安装gulp"><span>3. 安装gulp</span></a></h2><ul><li><a href="https://gulpjs.com/docs/en/getting-started/quick-start" target="_blank" rel="noopener noreferrer">quick-start</a></li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">npm install --g gulp-cli</span>
<span class="line">npm install --save-dev gulp</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-异步任务和组合任务" tabindex="-1"><a class="header-anchor" href="#_4-异步任务和组合任务"><span>4. 异步任务和组合任务</span></a></h2><p>gulpfile.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> through <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;through2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span> series<span class="token punctuation">,</span> parallel <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;gulp&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">callbackTask</span><span class="token punctuation">(</span><span class="token parameter">done</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;callbackTask&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token function">done</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">promiseTask</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;promiseTask&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">asyncTask</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">await</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;asyncTask&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">streamTask</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> fs<span class="token punctuation">.</span><span class="token function">createReadStream</span><span class="token punctuation">(</span><span class="token string">&#39;input.txt&#39;</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span><span class="token function">through</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">chunk<span class="token punctuation">,</span> encoding<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token function">next</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> chunk<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>fs<span class="token punctuation">.</span><span class="token function">createWriteStream</span><span class="token punctuation">(</span><span class="token string">&#39;output.txt&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> parallelTask <span class="token operator">=</span> <span class="token function">parallel</span><span class="token punctuation">(</span>callbackTask<span class="token punctuation">,</span> promiseTask<span class="token punctuation">,</span> asyncTask<span class="token punctuation">,</span> streamTask<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> seriesTask <span class="token operator">=</span> <span class="token function">series</span><span class="token punctuation">(</span>callbackTask<span class="token punctuation">,</span> promiseTask<span class="token punctuation">,</span> asyncTask<span class="token punctuation">,</span> streamTask<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">exports<span class="token punctuation">.</span>callback <span class="token operator">=</span> callbackTask</span>
<span class="line">exports<span class="token punctuation">.</span>promise <span class="token operator">=</span> promiseTask</span>
<span class="line">exports<span class="token punctuation">.</span>async <span class="token operator">=</span> asyncTask</span>
<span class="line">exports<span class="token punctuation">.</span>stream <span class="token operator">=</span> streamTask</span>
<span class="line">exports<span class="token punctuation">.</span>parallel <span class="token operator">=</span> parallelTask</span>
<span class="line">exports<span class="token punctuation">.</span>series <span class="token operator">=</span> seriesTask</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-gulp核心api" tabindex="-1"><a class="header-anchor" href="#_5-gulp核心api"><span>5. gulp核心API</span></a></h2><h3 id="_5-1-gulp-src" tabindex="-1"><a class="header-anchor" href="#_5-1-gulp-src"><span>5.1 gulp.src()</span></a></h3><ul><li><code>gulp.src()</code>方法正是用来获取流的</li><li>注意这个流里的内容不是原始的文件流,而是一个虚拟文件对象流</li><li><code>globs</code> 参数是文件匹配模式(类似正则表达式)，用来匹配文件路径(包括文件名)，当然这里也可以直接指定某个具体的文件路径。当有多个匹配模式时，该参数可以为一个数组</li><li>options 为可选参数</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">gulp.src(globs[, options])</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_5-2-gulp-dest" tabindex="-1"><a class="header-anchor" href="#_5-2-gulp-dest"><span>5.2 gulp.dest()</span></a></h3><ul><li><code>gulp.dest()</code>是用来向硬盘写入文件的 <ul><li>path 为写入文件的路径</li><li>options 为一个可选的参数对象</li></ul></li><li><code>gulp.dest()</code>传入的路径参数只能用来指定要生成的文件的目录,而不能指定生成文件的文件名 它生成文件的文件名使用的是导入到它的文件流自身的文件名 所以生成的文件名是由导入到它的文件流决定的</li><li><code>gulp.dest(path)</code>生成的文件路径是我们传入的<code>path</code>参数后面再加上<code>gulp.src()</code>中有通配符开始出现的那部分路径</li><li>通过指定<code>gulp.src()</code>方法配置参数中的<code>base</code>属性，我们可以更灵活的来改变<code>gulp.dest()</code>生成的文件路径</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">gulp.dest(path[,options])</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_5-3-pipe" tabindex="-1"><a class="header-anchor" href="#_5-3-pipe"><span>5.3 pipe</span></a></h3><p>gulpfile.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span> src<span class="token punctuation">,</span> dest <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;gulp&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">copyTask</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;执行拷贝任务&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token function">src</span><span class="token punctuation">(</span><span class="token string">&#39;src/**/*.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span><span class="token function">dest</span><span class="token punctuation">(</span><span class="token string">&#39;dist&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">exports<span class="token punctuation">.</span>default <span class="token operator">=</span> copyTask<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-gulp实战" tabindex="-1"><a class="header-anchor" href="#_6-gulp实战"><span>6. gulp实战</span></a></h2><h3 id="_6-1-安装" tabindex="-1"><a class="header-anchor" href="#_6-1-安装"><span>6.1 安装</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line">cnpm install @babel<span class="token operator">/</span>core @babel<span class="token operator">/</span>preset<span class="token operator">-</span>env browser<span class="token operator">-</span>sync gulp gulp<span class="token operator">-</span>babel gulp<span class="token operator">-</span>clean gulp<span class="token operator">-</span>clean<span class="token operator">-</span>css gulp<span class="token operator">-</span>ejs gulp<span class="token operator">-</span>htmlmin gulp<span class="token operator">-</span><span class="token keyword">if</span> gulp<span class="token operator">-</span>imagemin gulp<span class="token operator">-</span>less gulp<span class="token operator">-</span>load<span class="token operator">-</span>plugins gulp<span class="token operator">-</span>uglify gulp<span class="token operator">-</span>useref gulp<span class="token operator">-</span>watch map<span class="token operator">-</span>stream bootstrap jquery <span class="token operator">--</span>save</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_6-2-编译样式" tabindex="-1"><a class="header-anchor" href="#_6-2-编译样式"><span>6.2 编译样式</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">const { src, dest } = require(&#39;gulp&#39;);</span>
<span class="line">const less = require(&#39;gulp-less&#39;);</span>
<span class="line">const styles = () =&gt; {</span>
<span class="line">    return src(&quot;src/styles/*.less&quot;, { base: &#39;src&#39; })</span>
<span class="line">        .pipe(less())</span>
<span class="line">        .pipe(dest(&#39;dist&#39;))</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">exports.styles = styles;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-3-编译脚本" tabindex="-1"><a class="header-anchor" href="#_6-3-编译脚本"><span>6.3 编译脚本</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">const { src, dest } = require(&#39;gulp&#39;);</span>
<span class="line">const less = require(&#39;gulp-less&#39;);</span>
<span class="line">const babel = require(&#39;gulp-babel&#39;);</span>
<span class="line">const styles = () =&gt; {</span>
<span class="line">    return src(&quot;src/styles/*.less&quot;, { base: &#39;src&#39; })</span>
<span class="line">        .pipe(less())</span>
<span class="line">        .pipe(dest(&#39;dist&#39;))</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">+const scripts = () =&gt; {</span>
<span class="line">+    return src(&quot;src/scripts/*.js&quot;, { base: &#39;src&#39; })</span>
<span class="line">+        .pipe(babel({</span>
<span class="line">+            presets: [&quot;@babel/preset-env&quot;]</span>
<span class="line">+        }))</span>
<span class="line">+        .pipe(dest(&#39;dist&#39;))</span>
<span class="line">+}</span>
<span class="line"></span>
<span class="line">exports.styles = styles;</span>
<span class="line">+exports.scripts = scripts;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-4-编译html" tabindex="-1"><a class="header-anchor" href="#_6-4-编译html"><span>6.4 编译html</span></a></h3><h4 id="_6-4-1-src-index-html" tabindex="-1"><a class="header-anchor" href="#_6-4-1-src-index-html"><span>6.4.1 src\\index.html</span></a></h4><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token constant">DOCTYPE</span> html<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span>html lang<span class="token operator">=</span><span class="token string">&quot;en&quot;</span><span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span>head<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span>meta charset<span class="token operator">=</span><span class="token string">&quot;UTF-8&quot;</span><span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span>meta http<span class="token operator">-</span>equiv<span class="token operator">=</span><span class="token string">&quot;X-UA-Compatible&quot;</span> content<span class="token operator">=</span><span class="token string">&quot;IE=edge&quot;</span><span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span>meta name<span class="token operator">=</span><span class="token string">&quot;viewport&quot;</span> content<span class="token operator">=</span><span class="token string">&quot;width=device-width, initial-scale=1.0&quot;</span><span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span>title<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">%=</span>title<span class="token operator">%</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">&gt;</span></span>
<span class="line">        <span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">&quot;stylesheet&quot;</span> href<span class="token operator">=</span><span class="token string">&quot;node_modules/bootstrap/dist/css/bootstrap.css&quot;</span><span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">&quot;stylesheet&quot;</span> href<span class="token operator">=</span><span class="token string">&quot;styles/main.css&quot;</span><span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span>body<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span>button <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;btn btn-danger&quot;</span><span class="token operator">&gt;</span>按钮<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span>img src<span class="token operator">=</span><span class="token string">&quot;assets/images/circle.svg&quot;</span><span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span>img src<span class="token operator">=</span><span class="token string">&quot;rect.svg&quot;</span><span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">&quot;node_modules/jquery/dist/jquery.js&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">&quot;scripts/main.js&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_6-4-2-circle-svg" tabindex="-1"><a class="header-anchor" href="#_6-4-2-circle-svg"><span>6.4.2 circle.svg</span></a></h4><p>src\\assets\\images\\circle.svg</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token operator">&lt;</span><span class="token operator">?</span>xml version<span class="token operator">=</span><span class="token string">&quot;1.0&quot;</span> standalone<span class="token operator">=</span><span class="token string">&quot;no&quot;</span><span class="token operator">?</span><span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token constant">DOCTYPE</span> svg <span class="token constant">PUBLIC</span> <span class="token string">&quot;-//W3C//DTD SVG 1.1//EN&quot;</span> <span class="token string">&quot;http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd&quot;</span><span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span>svg width<span class="token operator">=</span><span class="token string">&quot;100&quot;</span> height<span class="token operator">=</span><span class="token string">&quot;100&quot;</span> version<span class="token operator">=</span><span class="token string">&quot;1.1&quot;</span> xmlns<span class="token operator">=</span><span class="token string">&quot;http://www.w3.org/2000/svg&quot;</span><span class="token operator">&gt;</span></span>
<span class="line"> <span class="token operator">&lt;</span>circle cx<span class="token operator">=</span><span class="token string">&quot;50&quot;</span> cy<span class="token operator">=</span><span class="token string">&quot;50&quot;</span> r<span class="token operator">=</span><span class="token string">&quot;50&quot;</span>  fill<span class="token operator">=</span><span class="token string">&quot;red&quot;</span><span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>svg<span class="token operator">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_6-4-3-static-rect-svg" tabindex="-1"><a class="header-anchor" href="#_6-4-3-static-rect-svg"><span>6.4.3 static\\rect.svg</span></a></h4><p>static\\rect.svg</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token operator">&lt;</span><span class="token operator">?</span>xml version<span class="token operator">=</span><span class="token string">&quot;1.0&quot;</span> standalone<span class="token operator">=</span><span class="token string">&quot;no&quot;</span><span class="token operator">?</span><span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token constant">DOCTYPE</span> svg <span class="token constant">PUBLIC</span> <span class="token string">&quot;-//W3C//DTD SVG 1.1//EN&quot;</span> <span class="token string">&quot;http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd&quot;</span><span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span>svg width<span class="token operator">=</span><span class="token string">&quot;100&quot;</span> height<span class="token operator">=</span><span class="token string">&quot;100&quot;</span> version<span class="token operator">=</span><span class="token string">&quot;1.1&quot;</span> xmlns<span class="token operator">=</span><span class="token string">&quot;http://www.w3.org/2000/svg&quot;</span><span class="token operator">&gt;</span></span>
<span class="line"> <span class="token operator">&lt;</span>rect  width<span class="token operator">=</span><span class="token string">&quot;100&quot;</span> height<span class="token operator">=</span><span class="token string">&quot;100&quot;</span> style<span class="token operator">=</span><span class="token string">&quot;fill:red;&quot;</span><span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>svg<span class="token operator">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_6-4-4-gulpfile-js" tabindex="-1"><a class="header-anchor" href="#_6-4-4-gulpfile-js"><span>6.4.4 gulpfile.js</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">const { src, dest, parallel } = require(&#39;gulp&#39;);</span>
<span class="line">const less = require(&#39;gulp-less&#39;);</span>
<span class="line">const babel = require(&#39;gulp-babel&#39;);</span>
<span class="line">const ejs = require(&#39;gulp-ejs&#39;);</span>
<span class="line">const styles = () =&gt; {</span>
<span class="line">    return src(&quot;src/styles/*.less&quot;, { base: &#39;src&#39; })</span>
<span class="line">        .pipe(less())</span>
<span class="line">        .pipe(dest(&#39;dist&#39;))</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">const scripts = () =&gt; {</span>
<span class="line">    return src(&quot;src/scripts/*.js&quot;, { base: &#39;src&#39; })</span>
<span class="line">        .pipe(babel({</span>
<span class="line">            presets: [&quot;@babel/preset-env&quot;]</span>
<span class="line">        }))</span>
<span class="line">        .pipe(dest(&#39;dist&#39;))</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">+const html = () =&gt; {</span>
<span class="line">+    return src(&quot;src/*.html&quot;, { base: &#39;src&#39; })</span>
<span class="line">+        .pipe(ejs({ title: &#39;gulp&#39; }))</span>
<span class="line">+        .pipe(dest(&#39;dist&#39;))</span>
<span class="line">+}</span>
<span class="line">exports.styles = styles;</span>
<span class="line">exports.scripts = scripts;</span>
<span class="line">+exports.html = html;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-5-编译任务" tabindex="-1"><a class="header-anchor" href="#_6-5-编译任务"><span>6.5 编译任务</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">const { src, dest, parallel } = require(&#39;gulp&#39;);</span>
<span class="line">const less = require(&#39;gulp-less&#39;);</span>
<span class="line">const babel = require(&#39;gulp-babel&#39;);</span>
<span class="line">const ejs = require(&#39;gulp-ejs&#39;);</span>
<span class="line">const styles = () =&gt; {</span>
<span class="line">    return src(&quot;src/styles/*.less&quot;, { base: &#39;src&#39; })</span>
<span class="line">        .pipe(less())</span>
<span class="line">        .pipe(dest(&#39;dist&#39;))</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">const scripts = () =&gt; {</span>
<span class="line">    return src(&quot;src/scripts/*.js&quot;, { base: &#39;src&#39; })</span>
<span class="line">        .pipe(babel({</span>
<span class="line">            presets: [&quot;@babel/preset-env&quot;]</span>
<span class="line">        }))</span>
<span class="line">        .pipe(dest(&#39;dist&#39;))</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">const html = () =&gt; {</span>
<span class="line">    return src(&quot;src/*.html&quot;, { base: &#39;src&#39; })</span>
<span class="line">        .pipe(ejs({ title: &#39;gulp&#39; }))</span>
<span class="line">        .pipe(dest(&#39;dist&#39;))</span>
<span class="line">}</span>
<span class="line">+const compile = parallel(styles, scripts, html);</span>
<span class="line">exports.styles = styles;</span>
<span class="line">exports.scripts = scripts;</span>
<span class="line">exports.html = html;</span>
<span class="line">+exports.compile = compile;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-6-压缩图片" tabindex="-1"><a class="header-anchor" href="#_6-6-压缩图片"><span>6.6 压缩图片</span></a></h3><h4 id="_6-6-1-安装" tabindex="-1"><a class="header-anchor" href="#_6-6-1-安装"><span>6.6.1 安装</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">npm install gulp-imagemin --save-dev</span>
<span class="line">npm install imagemin-jpegtran imagemin-svgo imagemin-gifsicle imagemin-optipng --save-dev</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_6-6-2-gulpfile-js" tabindex="-1"><a class="header-anchor" href="#_6-6-2-gulpfile-js"><span>6.6.2 gulpfile.js</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">const { src, dest, parallel } = require(&#39;gulp&#39;);</span>
<span class="line">const less = require(&#39;gulp-less&#39;);</span>
<span class="line">const babel = require(&#39;gulp-babel&#39;);</span>
<span class="line">const ejs = require(&#39;gulp-ejs&#39;);</span>
<span class="line">const styles = () =&gt; {</span>
<span class="line">    return src(&quot;src/styles/*.less&quot;, { base: &#39;src&#39; })</span>
<span class="line">        .pipe(less())</span>
<span class="line">        .pipe(dest(&#39;dist&#39;))</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">const scripts = () =&gt; {</span>
<span class="line">    return src(&quot;src/scripts/*.js&quot;, { base: &#39;src&#39; })</span>
<span class="line">        .pipe(babel({</span>
<span class="line">            presets: [&quot;@babel/preset-env&quot;]</span>
<span class="line">        }))</span>
<span class="line">        .pipe(dest(&#39;dist&#39;))</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">const html = () =&gt; {</span>
<span class="line">    return src(&quot;src/*.html&quot;, { base: &#39;src&#39; })</span>
<span class="line">        .pipe(ejs({ title: &#39;gulp&#39; }))</span>
<span class="line">        .pipe(dest(&#39;dist&#39;))</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">+const images = async () =&gt; {</span>
<span class="line">+    let imagemin = await import(&#39;gulp-imagemin&#39;);</span>
<span class="line">+    return src(&quot;src/assets/images/**/*.@(jpg|png|gif|svg)&quot;, { base: &#39;src&#39; })</span>
<span class="line">+        .pipe(imagemin.default())</span>
<span class="line">+        .pipe(dest(&#39;dist&#39;))</span>
<span class="line">+}</span>
<span class="line"></span>
<span class="line">const compile = parallel(styles, scripts, html);</span>
<span class="line">exports.styles = styles;</span>
<span class="line">exports.scripts = scripts;</span>
<span class="line">exports.html = html;</span>
<span class="line">exports.compile = compile;</span>
<span class="line">+exports.images = images;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-7-拷贝静态文件" tabindex="-1"><a class="header-anchor" href="#_6-7-拷贝静态文件"><span>6.7 拷贝静态文件</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">const { src, dest, parallel } = require(&#39;gulp&#39;);</span>
<span class="line">const less = require(&#39;gulp-less&#39;);</span>
<span class="line">const babel = require(&#39;gulp-babel&#39;);</span>
<span class="line">const ejs = require(&#39;gulp-ejs&#39;);</span>
<span class="line">const styles = () =&gt; {</span>
<span class="line">    return src(&quot;src/styles/*.less&quot;, { base: &#39;src&#39; })</span>
<span class="line">        .pipe(less())</span>
<span class="line">        .pipe(dest(&#39;dist&#39;))</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">const scripts = () =&gt; {</span>
<span class="line">    return src(&quot;src/scripts/*.js&quot;, { base: &#39;src&#39; })</span>
<span class="line">        .pipe(babel({</span>
<span class="line">            presets: [&quot;@babel/preset-env&quot;]</span>
<span class="line">        }))</span>
<span class="line">        .pipe(dest(&#39;dist&#39;))</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">const html = () =&gt; {</span>
<span class="line">    return src(&quot;src/*.html&quot;, { base: &#39;src&#39; })</span>
<span class="line">        .pipe(ejs({ title: &#39;gulp&#39; }))</span>
<span class="line">        .pipe(dest(&#39;dist&#39;))</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">const images = async () =&gt; {</span>
<span class="line">    let imagemin = await import(&#39;gulp-imagemin&#39;);</span>
<span class="line">    return src(&quot;src/assets/images/**/*.@(jpg|png|gif|svg)&quot;, { base: &#39;src&#39; })</span>
<span class="line">        .pipe(imagemin.default())</span>
<span class="line">        .pipe(dest(&#39;dist&#39;))</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">+const static = async () =&gt; {</span>
<span class="line">+    return src(&quot;static/**&quot;, { base: &#39;static&#39; })</span>
<span class="line">+        .pipe(dest(&#39;dist&#39;))</span>
<span class="line">+}</span>
<span class="line"></span>
<span class="line">const compile = parallel(styles, scripts, html);</span>
<span class="line">+const build = parallel(compile, static)</span>
<span class="line">exports.styles = styles;</span>
<span class="line">exports.scripts = scripts;</span>
<span class="line">exports.html = html;</span>
<span class="line">exports.compile = compile;</span>
<span class="line">exports.images = images;</span>
<span class="line">+exports.static = static;</span>
<span class="line">+exports.build = build;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-8-删除输出目录" tabindex="-1"><a class="header-anchor" href="#_6-8-删除输出目录"><span>6.8 删除输出目录</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">const { src, dest, parallel, series } = require(&#39;gulp&#39;);</span>
<span class="line">const less = require(&#39;gulp-less&#39;);</span>
<span class="line">const babel = require(&#39;gulp-babel&#39;);</span>
<span class="line">const ejs = require(&#39;gulp-ejs&#39;);</span>
<span class="line">+const gulpClean = require(&#39;gulp-clean&#39;);</span>
<span class="line">const styles = () =&gt; {</span>
<span class="line">    return src(&quot;src/styles/*.less&quot;, { base: &#39;src&#39; })</span>
<span class="line">        .pipe(less())</span>
<span class="line">        .pipe(dest(&#39;dist&#39;))</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">const scripts = () =&gt; {</span>
<span class="line">    return src(&quot;src/scripts/*.js&quot;, { base: &#39;src&#39; })</span>
<span class="line">        .pipe(babel({</span>
<span class="line">            presets: [&quot;@babel/preset-env&quot;]</span>
<span class="line">        }))</span>
<span class="line">        .pipe(dest(&#39;dist&#39;))</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">const html = () =&gt; {</span>
<span class="line">    return src(&quot;src/*.html&quot;, { base: &#39;src&#39; })</span>
<span class="line">        .pipe(ejs({ title: &#39;gulp&#39; }))</span>
<span class="line">        .pipe(dest(&#39;dist&#39;))</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">const images = async () =&gt; {</span>
<span class="line">    let imagemin = await import(&#39;gulp-imagemin&#39;);</span>
<span class="line">    return src(&quot;src/assets/images/**/*.@(jpg|png|gif|svg)&quot;, { base: &#39;src&#39; })</span>
<span class="line">        .pipe(imagemin.default())</span>
<span class="line">        .pipe(dest(&#39;dist&#39;))</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">const static = async () =&gt; {</span>
<span class="line">    return src(&quot;static/**&quot;, { base: &#39;static&#39; })</span>
<span class="line">        .pipe(dest(&#39;dist&#39;))</span>
<span class="line">}</span>
<span class="line">+const clean =  () =&gt; {</span>
<span class="line">+    return src(&quot;dist/**&quot;, { read: false })</span>
<span class="line">+        .pipe(gulpClean())</span>
<span class="line">+}</span>
<span class="line">const compile = parallel(styles, scripts, html);</span>
<span class="line">+const build = series(clean, parallel(compile, static));</span>
<span class="line">exports.styles = styles;</span>
<span class="line">exports.scripts = scripts;</span>
<span class="line">exports.html = html;</span>
<span class="line">exports.compile = compile;</span>
<span class="line">exports.images = images;</span>
<span class="line">exports.static = static;</span>
<span class="line">exports.build = build;</span>
<span class="line">+exports.clean = clean;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-9-自动加载插件" tabindex="-1"><a class="header-anchor" href="#_6-9-自动加载插件"><span>6.9 自动加载插件</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">const { src, dest, parallel, series } = require(&#39;gulp&#39;);</span>
<span class="line">-const less = require(&#39;gulp-less&#39;);</span>
<span class="line">-const babel = require(&#39;gulp-babel&#39;);</span>
<span class="line">-const ejs = require(&#39;gulp-ejs&#39;);</span>
<span class="line">-const gulpClean = require(&#39;gulp-clean&#39;);</span>
<span class="line">+const plugins = require(&#39;gulp-load-plugins&#39;)();</span>
<span class="line">const styles = () =&gt; {</span>
<span class="line">    return src(&quot;src/styles/*.less&quot;, { base: &#39;src&#39; })</span>
<span class="line">+       .pipe(plugins.less())</span>
<span class="line">        .pipe(dest(&#39;dist&#39;))</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">const scripts = () =&gt; {</span>
<span class="line">    return src(&quot;src/scripts/*.js&quot;, { base: &#39;src&#39; })</span>
<span class="line">+       .pipe(plugins.babel({</span>
<span class="line">            presets: [&quot;@babel/preset-env&quot;]</span>
<span class="line">        }))</span>
<span class="line">        .pipe(dest(&#39;dist&#39;))</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">const html = () =&gt; {</span>
<span class="line">    return src(&quot;src/*.html&quot;, { base: &#39;src&#39; })</span>
<span class="line">+       .pipe(plugins.ejs({ title: &#39;gulp&#39; }))</span>
<span class="line">        .pipe(dest(&#39;dist&#39;))</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">const images = async () =&gt; {</span>
<span class="line">     let imagemin = await import(&#39;gulp-imagemin&#39;);</span>
<span class="line">    return src(&quot;src/assets/images/**/*.@(jpg|png|gif|svg)&quot;, { base: &#39;src&#39; })</span>
<span class="line">        .pipe(imagemin.default())</span>
<span class="line">        .pipe(dest(&#39;dist&#39;))</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">const static = async () =&gt; {</span>
<span class="line">    return src(&quot;static/**&quot;, { base: &#39;static&#39; })</span>
<span class="line">        .pipe(dest(&#39;dist&#39;))</span>
<span class="line">}</span>
<span class="line">const clean =  () =&gt; {</span>
<span class="line">    return src(&quot;dist/**&quot;, { read: false })</span>
<span class="line">+       .pipe(plugins.clean())</span>
<span class="line">}</span>
<span class="line">const compile = parallel(styles, scripts, html);</span>
<span class="line">const build = series(clean, parallel(compile, static));</span>
<span class="line">exports.styles = styles;</span>
<span class="line">exports.scripts = scripts;</span>
<span class="line">exports.html = html;</span>
<span class="line">exports.compile = compile;</span>
<span class="line">exports.images = images;</span>
<span class="line">exports.static = static;</span>
<span class="line">exports.build = build;</span>
<span class="line">exports.clean = clean;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-10-开发服务器" tabindex="-1"><a class="header-anchor" href="#_6-10-开发服务器"><span>6.10 开发服务器</span></a></h3><h4 id="_6-10-1-gulpfile-js" tabindex="-1"><a class="header-anchor" href="#_6-10-1-gulpfile-js"><span>6.10.1 gulpfile.js</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">const { src, dest, parallel, series } = require(&#39;gulp&#39;);</span>
<span class="line">const plugins = require(&#39;gulp-load-plugins&#39;)();</span>
<span class="line">+const browserSync = require(&#39;browser-sync&#39;);</span>
<span class="line">+const path = require(&#39;path&#39;);</span>
<span class="line">const styles = () =&gt; {</span>
<span class="line">    return src(&quot;src/styles/*.less&quot;, { base: &#39;src&#39; })</span>
<span class="line">        .pipe(plugins.less())</span>
<span class="line">        .pipe(dest(&#39;dist&#39;))</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">const scripts = () =&gt; {</span>
<span class="line">    return src(&quot;src/scripts/*.js&quot;, { base: &#39;src&#39; })</span>
<span class="line">        .pipe(plugins.babel({</span>
<span class="line">            presets: [&quot;@babel/preset-env&quot;]</span>
<span class="line">        }))</span>
<span class="line">        .pipe(dest(&#39;dist&#39;))</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">const html = () =&gt; {</span>
<span class="line">    return src(&quot;src/*.html&quot;, { base: &#39;src&#39; })</span>
<span class="line">        .pipe(plugins.ejs({ title: &#39;gulp&#39; }))</span>
<span class="line">        .pipe(dest(&#39;dist&#39;))</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">const images = async () =&gt; {</span>
<span class="line">    let imagemin = await import(&#39;gulp-imagemin&#39;);</span>
<span class="line">    return src(&quot;src/assets/images/**/*.@(jpg|png|gif|svg)&quot;, { base: &#39;src&#39; })</span>
<span class="line">        .pipe(imagemin.default())</span>
<span class="line">        .pipe(dest(&#39;dist&#39;))</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">const static = async () =&gt; {</span>
<span class="line">    return src(&quot;static/**&quot;, { base: &#39;static&#39; })</span>
<span class="line">        .pipe(dest(&#39;dist&#39;))</span>
<span class="line">}</span>
<span class="line">const clean = () =&gt; {</span>
<span class="line">    return src(&quot;dist/**&quot;, { read: false })</span>
<span class="line">        .pipe(plugins.clean())</span>
<span class="line">}</span>
<span class="line">+const serve = () =&gt; {</span>
<span class="line">+    return browserSync.create().init({</span>
<span class="line">+        notify: false,</span>
<span class="line">+        server: {</span>
<span class="line">+            baseDir: &#39;dist&#39;,</span>
<span class="line">+            routes: {</span>
<span class="line">+                &#39;/node_modules&#39;: path.resolve(&#39;node_modules&#39;)</span>
<span class="line">+            }</span>
<span class="line">+        }</span>
<span class="line">+    });</span>
<span class="line">+}</span>
<span class="line">const compile = parallel(styles, scripts, html);</span>
<span class="line">const build = series(clean, parallel(compile, static));</span>
<span class="line">exports.styles = styles;</span>
<span class="line">exports.scripts = scripts;</span>
<span class="line">exports.html = html;</span>
<span class="line">exports.compile = compile;</span>
<span class="line">exports.images = images;</span>
<span class="line">exports.static = static;</span>
<span class="line">exports.build = build;</span>
<span class="line">exports.clean = clean;</span>
<span class="line">+exports.serve = serve;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_6-10-2-main-js" tabindex="-1"><a class="header-anchor" href="#_6-10-2-main-js"><span>6.10.2 main.js</span></a></h4><p>src\\scripts\\main.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">let sum = (a, b) =&gt; a + b;</span>
<span class="line">sum(1, 3)</span>
<span class="line">+$(() =&gt; {</span>
<span class="line">+    console.log(&#39;jquery&#39;);</span>
<span class="line">+});</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-11-监听文件变化" tabindex="-1"><a class="header-anchor" href="#_6-11-监听文件变化"><span>6.11 监听文件变化</span></a></h3><h4 id="_6-11-1-gulpfile-js" tabindex="-1"><a class="header-anchor" href="#_6-11-1-gulpfile-js"><span>6.11.1 gulpfile.js</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">const { src, dest, parallel, series, watch } = require(&#39;gulp&#39;);</span>
<span class="line">const plugins = require(&#39;gulp-load-plugins&#39;)();</span>
<span class="line">const browserSync = require(&#39;browser-sync&#39;);</span>
<span class="line">const path = require(&#39;path&#39;);</span>
<span class="line">+const browserServer = browserSync.create();</span>
<span class="line">const styles = () =&gt; {</span>
<span class="line">    return src(&quot;src/styles/*.less&quot;, { base: &#39;src&#39; })</span>
<span class="line">        .pipe(plugins.less())</span>
<span class="line">        .pipe(dest(&#39;dist&#39;))</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">const scripts = () =&gt; {</span>
<span class="line">    return src(&quot;src/scripts/*.js&quot;, { base: &#39;src&#39; })</span>
<span class="line">        .pipe(plugins.babel({</span>
<span class="line">            presets: [&quot;@babel/preset-env&quot;]</span>
<span class="line">        }))</span>
<span class="line">        .pipe(dest(&#39;dist&#39;))</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">const html = () =&gt; {</span>
<span class="line">    return src(&quot;src/*.html&quot;, { base: &#39;src&#39; })</span>
<span class="line">+       .pipe(plugins.ejs({ title: &#39;gulp&#39; }, { cache: false }))</span>
<span class="line">        .pipe(dest(&#39;dist&#39;))</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">const images = async () =&gt; {</span>
<span class="line">    let imagemin = await import(&#39;gulp-imagemin&#39;);</span>
<span class="line">    return src(&quot;src/assets/images/**/*.@(jpg|png|gif|svg)&quot;, { base: &#39;src&#39; })</span>
<span class="line">        .pipe(imagemin.default())</span>
<span class="line">        .pipe(dest(&#39;dist&#39;))</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">const static = async () =&gt; {</span>
<span class="line">    return src(&quot;static/**&quot;, { base: &#39;static&#39; })</span>
<span class="line">        .pipe(dest(&#39;dist&#39;))</span>
<span class="line">}</span>
<span class="line">const clean = () =&gt; {</span>
<span class="line">    return src(&quot;dist/**&quot;, { read: false })</span>
<span class="line">        .pipe(plugins.clean())</span>
<span class="line">}</span>
<span class="line">const serve = () =&gt; {</span>
<span class="line">+   watch(&quot;src/styles/*.less&quot;, styles);</span>
<span class="line">+   watch(&quot;src/scripts/*.js&quot;, scripts);</span>
<span class="line">+   watch(&quot;src/*.html&quot;, html);</span>
<span class="line">+   watch([</span>
<span class="line">+       &quot;src/assets/images/**/*.@(jpg|png|gif|svg)&quot;,</span>
<span class="line">+       &quot;static/**&quot;</span>
<span class="line">+   ], browserServer.reload);</span>
<span class="line">    return browserServer.init({</span>
<span class="line">        notify: false,</span>
<span class="line">+       files: [&#39;dist/**&#39;],</span>
<span class="line">        server: {</span>
<span class="line">+           baseDir: [&#39;dist&#39;, &#39;src&#39;, &#39;static&#39;],</span>
<span class="line">            routes: {</span>
<span class="line">                &#39;/node_modules&#39;: path.resolve(&#39;node_modules&#39;)</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">    });</span>
<span class="line">}</span>
<span class="line">const compile = parallel(styles, scripts, html);</span>
<span class="line">+const build = series(clean, parallel(compile, images, static));</span>
<span class="line">+const dev = series(clean, compile, serve);</span>
<span class="line">exports.styles = styles;</span>
<span class="line">exports.scripts = scripts;</span>
<span class="line">exports.html = html;</span>
<span class="line">exports.compile = compile;</span>
<span class="line">exports.images = images;</span>
<span class="line">exports.static = static;</span>
<span class="line">exports.clean = clean;</span>
<span class="line">exports.serve = serve;</span>
<span class="line">+exports.build = build;</span>
<span class="line">+exports.dev = dev;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-12-合并和压缩" tabindex="-1"><a class="header-anchor" href="#_6-12-合并和压缩"><span>6.12. 合并和压缩</span></a></h3><h4 id="_6-12-1-src-index-html" tabindex="-1"><a class="header-anchor" href="#_6-12-1-src-index-html"><span>6.12.1 src\\index.html</span></a></h4><p>src\\index.html</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;!DOCTYPE html&gt;</span>
<span class="line">&lt;html lang=&quot;en&quot;&gt;</span>
<span class="line">&lt;head&gt;</span>
<span class="line">    &lt;meta charset=&quot;UTF-8&quot;&gt;</span>
<span class="line">    &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot;&gt;</span>
<span class="line">    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;</span>
<span class="line">    &lt;title&gt;&lt;%=title%&gt;&lt;/title&gt;</span>
<span class="line">+   &lt;!-- build:css styles/dist.css  --&gt;</span>
<span class="line">    &lt;link rel=&quot;stylesheet&quot; href=&quot;node_modules/bootstrap/dist/css/bootstrap.css&quot;/&gt;</span>
<span class="line">    &lt;link rel=&quot;stylesheet&quot; href=&quot;styles/main.css&quot;/&gt;</span>
<span class="line">+   &lt;!-- endbuild --&gt;</span>
<span class="line">&lt;/head&gt;</span>
<span class="line">&lt;body&gt;</span>
<span class="line">    &lt;button class=&quot;btn btn-danger&quot;&gt;按钮&lt;/button&gt;</span>
<span class="line">    &lt;img src=&quot;assets/images/circle.svg&quot;/&gt;</span>
<span class="line">    &lt;img src=&quot;rect.svg&quot;/&gt;</span>
<span class="line">+   &lt;!-- build:js scripts/dist.js  --&gt;</span>
<span class="line">    &lt;script src=&quot;node_modules/jquery/dist/jquery.js&quot;&gt;&lt;/script&gt;</span>
<span class="line">    &lt;script src=&quot;scripts/main.js&quot;&gt;&lt;/script&gt;</span>
<span class="line">+   &lt;!-- endbuild --&gt;</span>
<span class="line">&lt;/body&gt;</span>
<span class="line">&lt;/html&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_6-12-2-gulpfile-js" tabindex="-1"><a class="header-anchor" href="#_6-12-2-gulpfile-js"><span>6.12.2 gulpfile.js</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">const { src, dest, parallel, series, watch } = require(&#39;gulp&#39;);</span>
<span class="line">const plugins = require(&#39;gulp-load-plugins&#39;)();</span>
<span class="line">const browserSync = require(&#39;browser-sync&#39;);</span>
<span class="line">const path = require(&#39;path&#39;);</span>
<span class="line">const browserServer = browserSync.create();</span>
<span class="line">const styles = () =&gt; {</span>
<span class="line">    return src(&quot;src/styles/*.less&quot;, { base: &#39;src&#39; })</span>
<span class="line">        .pipe(plugins.less())</span>
<span class="line">+       .pipe(dest(&#39;temp&#39;))</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">const scripts = () =&gt; {</span>
<span class="line">    return src(&quot;src/scripts/*.js&quot;, { base: &#39;src&#39; })</span>
<span class="line">        .pipe(plugins.babel({</span>
<span class="line">            presets: [&quot;@babel/preset-env&quot;]</span>
<span class="line">        }))</span>
<span class="line">+       .pipe(dest(&#39;temp&#39;))</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">const html = () =&gt; {</span>
<span class="line">    return src(&quot;src/*.html&quot;, { base: &#39;src&#39; })</span>
<span class="line">        .pipe(plugins.ejs({ title: &#39;gulp&#39; }, { cache: false }))</span>
<span class="line">+       .pipe(dest(&#39;temp&#39;))</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">const images = async () =&gt; {</span>
<span class="line">    let imagemin = await import(&#39;gulp-imagemin&#39;);</span>
<span class="line">    return src(&quot;src/assets/images/**/*.@(jpg|png|gif|svg)&quot;, { base: &#39;src&#39; })</span>
<span class="line">        .pipe(imagemin.default())</span>
<span class="line">        .pipe(dest(&#39;dist&#39;))</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">const static = async () =&gt; {</span>
<span class="line">    return src(&quot;static/**&quot;, { base: &#39;static&#39; })</span>
<span class="line">        .pipe(dest(&#39;dist&#39;))</span>
<span class="line">}</span>
<span class="line">const clean = () =&gt; {</span>
<span class="line">+   return src([&quot;dist/**&quot;, &quot;temp/**&quot;], { read: false })</span>
<span class="line">+       .pipe(plugins.clean({ allowEmpty: true }));</span>
<span class="line">}</span>
<span class="line">const serve = () =&gt; {</span>
<span class="line">    watch(&quot;src/styles/*.less&quot;, styles);</span>
<span class="line">    watch(&quot;src/scripts/*.js&quot;, scripts);</span>
<span class="line">    watch(&quot;src/*.html&quot;, html);</span>
<span class="line">    watch([</span>
<span class="line">        &quot;src/assets/images/**/*.@(jpg|png|gif|svg)&quot;,</span>
<span class="line">        &quot;static/**&quot;</span>
<span class="line">    ], browserServer.reload);</span>
<span class="line">    return browserServer.init({</span>
<span class="line">        notify: false,</span>
<span class="line">        files: [&#39;dist/**&#39;],</span>
<span class="line">        server: {</span>
<span class="line">+           baseDir: [&#39;temp&#39;, &#39;src&#39;, &#39;static&#39;],</span>
<span class="line">            routes: {</span>
<span class="line">                &#39;/node_modules&#39;: path.resolve(&#39;node_modules&#39;)</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">    });</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">+const concat = () =&gt; {</span>
<span class="line">+    return src(&#39;temp/*.html&#39;, { base: &#39;temp&#39; })</span>
<span class="line">+        .pipe(plugins.useref({</span>
<span class="line">+            searchPath: [&#39;temp&#39;, &#39;.&#39;]</span>
<span class="line">+        }))</span>
<span class="line">+        .pipe(plugins.if(&#39;*.html&#39;, plugins.htmlmin({</span>
<span class="line">+            collapseWhitespace: true,</span>
<span class="line">+            minifyCSS: true,</span>
<span class="line">+            minifyJS: true</span>
<span class="line">+        })))</span>
<span class="line">+        .pipe(plugins.if(&#39;*.js&#39;, plugins.uglify()))</span>
<span class="line">+        .pipe(plugins.if(&#39;*.css&#39;, plugins.cleanCss()))</span>
<span class="line">+        .pipe(dest(&#39;dist&#39;));</span>
<span class="line">+}</span>
<span class="line"></span>
<span class="line">const compile = parallel(styles, scripts, html);</span>
<span class="line">+const build = series(clean, parallel(series(compile, concat), images, static));</span>
<span class="line">const dev = series(clean, compile, serve);</span>
<span class="line">-exports.styles = styles;</span>
<span class="line">-exports.scripts = scripts;</span>
<span class="line">-exports.html = html;</span>
<span class="line">-exports.compile = compile;</span>
<span class="line">-exports.images = images;</span>
<span class="line">-exports.static = static;</span>
<span class="line">-exports.serve = serve;</span>
<span class="line">-exports.concat = concat;</span>
<span class="line">-exports.clean = clean;</span>
<span class="line">-exports.build = build;</span>
<span class="line">-exports.dev = dev;</span>
<span class="line"></span>
<span class="line">+module.exports = {</span>
<span class="line">+    clean,</span>
<span class="line">+    build,</span>
<span class="line">+    dev</span>
<span class="line">+}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-参考知识" tabindex="-1"><a class="header-anchor" href="#_7-参考知识"><span>7. 参考知识</span></a></h2><h3 id="_7-1-glob" tabindex="-1"><a class="header-anchor" href="#_7-1-glob"><span>7.1 glob</span></a></h3><ul><li>gulp内部使用了node-glob模块来实现其文件匹配功能</li></ul><h4 id="_7-1-1-glob规则" tabindex="-1"><a class="header-anchor" href="#_7-1-1-glob规则"><span>7.1.1 glob规则</span></a></h4><table><thead><tr><th style="text-align:left;">匹配符</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">*</td><td style="text-align:left;">匹配文件路径中的0个或多个字符，但不会匹配路径分隔符</td></tr><tr><td style="text-align:left;">**</td><td style="text-align:left;">匹配路径中的0个或多个目录及其子目录</td></tr><tr><td style="text-align:left;">?</td><td style="text-align:left;">匹配文件路径中的一个字符(不会匹配路径分隔符)</td></tr><tr><td style="text-align:left;">[...]</td><td style="text-align:left;">匹配方括号中出现的字符中的任意一个，当方括号中第一个字符为^或!时，则表示不匹配方括号中出现的其他字符中的任意一个</td></tr><tr><td style="text-align:left;">!(pattern1</td><td style="text-align:left;">pattern2</td></tr><tr><td style="text-align:left;">?(pattern1</td><td style="text-align:left;">pattern2</td></tr><tr><td style="text-align:left;">+(pattern1</td><td style="text-align:left;">patter2n</td></tr><tr><td style="text-align:left;">(pattern1</td><td style="text-align:left;">pattern2</td></tr><tr><td style="text-align:left;">@(pattern1</td><td style="text-align:left;">pattern2</td></tr></tbody></table><h4 id="_7-1-2-glob示例" tabindex="-1"><a class="header-anchor" href="#_7-1-2-glob示例"><span>7.1.2 glob示例</span></a></h4><table><thead><tr><th style="text-align:left;">glob</th><th style="text-align:left;">匹配</th></tr></thead><tbody><tr><td style="text-align:left;">*</td><td style="text-align:left;">能匹配 a.js,x.y,abc,abc/,但不能匹配a/b.js</td></tr><tr><td style="text-align:left;"><em>.</em></td><td style="text-align:left;">a.js,style.css,a.b,x.y</td></tr><tr><td style="text-align:left;"><em>/</em>/*.js</td><td style="text-align:left;">能匹配 a/b/c.js,x/y/z.js,不能匹配a/b.js,a/b/c/d.js</td></tr><tr><td style="text-align:left;">**</td><td style="text-align:left;">能匹配 abc,a/b.js,a/b/c.js,x/y/z,x/y/z/a.b,能用来匹配所有的目录和文件</td></tr><tr><td style="text-align:left;">a/**/z</td><td style="text-align:left;">能匹配 a/z,a/b/z,a/b/c/z,a/d/g/h/j/k/z</td></tr><tr><td style="text-align:left;">a/**b/z</td><td style="text-align:left;">能匹配 a/b/z,a/sb/z,但不能匹配a/x/sb/z,因为只有单**单独出现才能匹配多级目录</td></tr><tr><td style="text-align:left;">?.js</td><td style="text-align:left;">能匹配 a.js,b.js,c.js</td></tr><tr><td style="text-align:left;">a??</td><td style="text-align:left;">能匹配 a.b,abc,但不能匹配ab/,因为它不会匹配路径分隔符</td></tr><tr><td style="text-align:left;">[xyz].js</td><td style="text-align:left;">只能匹配 x.js,y.js,z.js,不会匹配xy.js,xyz.js等,整个中括号只代表一个字符</td></tr><tr><td style="text-align:left;">[^xyz].js</td><td style="text-align:left;">能匹配 a.js,b.js,c.js等,不能匹配x.js,y.js,z.js</td></tr></tbody></table>`,73)])])}const r=n(i,[["render",p]]),d=JSON.parse('{"path":"/strong/143.1.gulp.html","title":"","lang":"en-US","frontmatter":{},"git":{"updatedTime":1681290319000,"contributors":[{"name":"yutao","username":"yutao","email":"642231346@qq.com","commits":1,"url":"https://github.com/yutao"}],"changelog":[{"hash":"f5ab8c9d34991ec274f7f652439afe5b2afb6147","time":1681290319000,"email":"642231346@qq.com","author":"yutao","message":"modify"}]},"filePathRelative":"strong/143.1.gulp.md"}');export{r as comp,d as data};
