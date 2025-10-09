import{_ as s,c as a,a as e,o as p}from"./app-CD1YpnS1.js";const l={};function i(t,n){return p(),a("div",null,[...n[0]||(n[0]=[e(`<h2 id="_1-闭包" tabindex="-1"><a class="header-anchor" href="#_1-闭包"><span>1.闭包</span></a></h2><h3 id="_1-1-定义" tabindex="-1"><a class="header-anchor" href="#_1-1-定义"><span>1.1 定义</span></a></h3><ul><li><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Closures" target="_blank" rel="noopener noreferrer">Closures</a></li><li>一个函数和对其周围状态(lexical environment，词法环境)的引用捆绑在一起(或者说函数被引用包围),这样的组合就是闭包（closure）</li><li>也就是说，闭包让你可以在一个内层函数中访问到其外层函数的作用域</li><li>在 JavaScript 中，每当创建一个函数，闭包就会在函数创建的同时被创建出来</li></ul><h3 id="_1-2-规范" tabindex="-1"><a class="header-anchor" href="#_1-2-规范"><span>1.2 规范</span></a></h3><ul><li><a href="https://262.ecma-international.org/5.1/" target="_blank" rel="noopener noreferrer">https://262.ecma-international.org/5.1</a></li><li><a href="http://es5.github.io" target="_blank" rel="noopener noreferrer">http://es5.github.io</a></li><li><a href="https://static.zhufengpeixun.com/ECMAScript51_gui_fan_zhong_wen_ban_1639732357672.pdf" target="_blank" rel="noopener noreferrer">ECMAScript5.1_CN</a></li><li>[https://262.ecma-international.org/6.0](https://262.ecma-international.org/6.0/</li><li><a href="https://static.zhufengpeixun.com/Ecma2626_1639732488710.pdf" target="_blank" rel="noopener noreferrer">Ecma-262-6</a></li></ul><h2 id="_2-可执行代码与执行环境" tabindex="-1"><a class="header-anchor" href="#_2-可执行代码与执行环境"><span>2.可执行代码与执行环境</span></a></h2><h3 id="_2-1-main-js" tabindex="-1"><a class="header-anchor" href="#_2-1-main-js"><span>2.1 main.js</span></a></h3><ul><li><a href="https://www.processon.com/diagraming/61bcc05c7d9c087834ef1a64" target="_blank" rel="noopener noreferrer">可执行代码与执行环境</a></li></ul><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">one</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token function">one</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://static.zhufengpeixun.com/1_ke_zhi_xing_dai_ma_yu_zhi_xing_huan_jing_33_1639760710714.jpg" alt=""></p><h3 id="_2-2-src-index-js" tabindex="-1"><a class="header-anchor" href="#_2-2-src-index-js"><span>2.2 src\\index.js</span></a></h3><p>src\\index.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">const</span> ObjectEnvironmentRecords <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./ObjectEnvironmentRecords&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> LexicalEnvironment <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./LexicalEnvironment&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> ExecutionContext <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./ExecutionContext&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> ExecutionContexts <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./ExecutionContexts&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> FunctionInstance <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./FunctionInstance&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//创建执行上下文栈</span></span>
<span class="line"><span class="token keyword">const</span> ECStack <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ExecutionContexts</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//创建全局环境记录对象</span></span>
<span class="line"><span class="token keyword">const</span> globalEnvironmentRecord <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ObjectEnvironmentRecords</span><span class="token punctuation">(</span>global<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//创建全局环境</span></span>
<span class="line"><span class="token keyword">const</span> globalLexicalEnvironment <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LexicalEnvironment</span><span class="token punctuation">(</span>globalEnvironmentRecord<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//创建全局执行上下文</span></span>
<span class="line"><span class="token keyword">let</span> globalExecutionContext <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ExecutionContext</span><span class="token punctuation">(</span>globalLexicalEnvironment<span class="token punctuation">,</span> global<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//把全局执行上下文放入执行上下文栈</span></span>
<span class="line">ECStack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>globalExecutionContext<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//创建a变量并初始化为undefined</span></span>
<span class="line">ECStack<span class="token punctuation">.</span>current<span class="token punctuation">.</span>lexicalEnvironment<span class="token punctuation">.</span><span class="token function">createBinding</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">ECStack<span class="token punctuation">.</span>current<span class="token punctuation">.</span>lexicalEnvironment<span class="token punctuation">.</span><span class="token function">setBinding</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//创建fn变量并赋值为函数</span></span>
<span class="line"><span class="token keyword">let</span> oneFn <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FunctionInstance</span><span class="token punctuation">(</span><span class="token string">&#39;one&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;var b = 2;\\nconsole.log(a, b);&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    ECStack<span class="token punctuation">.</span>current<span class="token punctuation">.</span>lexicalEnvironment<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">ECStack<span class="token punctuation">.</span>current<span class="token punctuation">.</span>lexicalEnvironment<span class="token punctuation">.</span><span class="token function">createBinding</span><span class="token punctuation">(</span><span class="token string">&#39;one&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">ECStack<span class="token punctuation">.</span>current<span class="token punctuation">.</span>lexicalEnvironment<span class="token punctuation">.</span><span class="token function">setBinding</span><span class="token punctuation">(</span><span class="token string">&#39;one&#39;</span><span class="token punctuation">,</span> oneFn<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//开始执行代码,给a变量赋值为1</span></span>
<span class="line">ECStack<span class="token punctuation">.</span>current<span class="token punctuation">.</span>lexicalEnvironment<span class="token punctuation">.</span><span class="token function">setBinding</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//遇到函数则创建一个新的词法环境</span></span>
<span class="line"><span class="token keyword">let</span> oneLexicalEnvironment <span class="token operator">=</span> LexicalEnvironment<span class="token punctuation">.</span><span class="token function">NewDeclarativeEnvironment</span><span class="token punctuation">(</span>oneFn<span class="token punctuation">.</span>scope<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//创建one函数执行上下文</span></span>
<span class="line"><span class="token keyword">let</span> oneExecutionContext <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ExecutionContext</span><span class="token punctuation">(</span>oneLexicalEnvironment<span class="token punctuation">,</span> global<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//把one函数执行上下文推入执行上下文栈并成为最新的执行上下文</span></span>
<span class="line">ECStack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>oneExecutionContext<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//创建并绑定变量b,执行变量提升</span></span>
<span class="line">ECStack<span class="token punctuation">.</span>current<span class="token punctuation">.</span>lexicalEnvironment<span class="token punctuation">.</span><span class="token function">createBinding</span><span class="token punctuation">(</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">ECStack<span class="token punctuation">.</span>current<span class="token punctuation">.</span>lexicalEnvironment<span class="token punctuation">.</span><span class="token function">setBinding</span><span class="token punctuation">(</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//开始执行函数代码，给变量b赋值为2</span></span>
<span class="line">ECStack<span class="token punctuation">.</span>current<span class="token punctuation">.</span>lexicalEnvironment<span class="token punctuation">.</span><span class="token function">setBinding</span><span class="token punctuation">(</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//按作用域链查找a和b变量的值并打印</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ECStack<span class="token punctuation">.</span>current<span class="token punctuation">.</span>lexicalEnvironment<span class="token punctuation">.</span><span class="token function">getIdentifierReference</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">,</span> ECStack<span class="token punctuation">.</span>current<span class="token punctuation">.</span>lexicalEnvironment<span class="token punctuation">.</span><span class="token function">getIdentifierReference</span><span class="token punctuation">(</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//弹出one执行上下文，回到全局执行上下文，one执行上下文销毁</span></span>
<span class="line">ECStack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-objectenvironmentrecords-js" tabindex="-1"><a class="header-anchor" href="#_2-3-objectenvironmentrecords-js"><span>2.3 ObjectEnvironmentRecords.js</span></a></h3><p>src\\ObjectEnvironmentRecords.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">const</span> EnvironmentRecord <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./EnvironmentRecord&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">ObjectEnvironmentRecords</span> <span class="token keyword">extends</span> <span class="token class-name">EnvironmentRecord</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> ObjectEnvironmentRecords<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-declarativeenvironmentrecords-js" tabindex="-1"><a class="header-anchor" href="#_2-4-declarativeenvironmentrecords-js"><span>2.4 DeclarativeEnvironmentRecords.js</span></a></h3><p>src\\DeclarativeEnvironmentRecords.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">const</span> EnvironmentRecord <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./EnvironmentRecord&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">DeclarativeEnvironmentRecords</span> <span class="token keyword">extends</span> <span class="token class-name">EnvironmentRecord</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> DeclarativeEnvironmentRecords<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-5-environmentrecord-js" tabindex="-1"><a class="header-anchor" href="#_2-5-environmentrecord-js"><span>2.5 EnvironmentRecord.js</span></a></h3><p>src\\EnvironmentRecord.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">class</span> <span class="token class-name">EnvironmentRecord</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">bindings</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>bindings <span class="token operator">=</span> bindings <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * 创建变量</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">N</span> 名称</span>
<span class="line">     */</span></span>
<span class="line">    <span class="token function">createBinding</span><span class="token punctuation">(</span><span class="token parameter"><span class="token constant">N</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>bindings<span class="token punctuation">[</span><span class="token constant">N</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * 给N设置值V</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">N</span> 名称</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">V</span> 值</span>
<span class="line">     */</span></span>
<span class="line">    <span class="token function">setBinding</span><span class="token punctuation">(</span><span class="token parameter"><span class="token constant">N</span><span class="token punctuation">,</span> <span class="token constant">V</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>bindings<span class="token punctuation">[</span><span class="token constant">N</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token constant">V</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * 是否绑定一个变量</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">N</span> 名称</span>
<span class="line">     */</span></span>
<span class="line">    <span class="token function">hasBinding</span><span class="token punctuation">(</span><span class="token parameter"><span class="token constant">N</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token constant">N</span> <span class="token keyword">in</span> <span class="token keyword">this</span><span class="token punctuation">.</span>bindings<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * 获取N的值</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">N</span>   名称</span>
<span class="line">     */</span></span>
<span class="line">    <span class="token function">getBindingValue</span><span class="token punctuation">(</span><span class="token parameter"><span class="token constant">N</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>bindings<span class="token punctuation">[</span><span class="token constant">N</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> EnvironmentRecord<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-6-lexicalenvironment-js" tabindex="-1"><a class="header-anchor" href="#_2-6-lexicalenvironment-js"><span>2.6 LexicalEnvironment.js</span></a></h3><p>src\\LexicalEnvironment.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">const</span> DeclarativeEnvironmentRecords <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;./DeclarativeEnvironmentRecords&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> ObjectEnvironmentRecords <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;./ObjectEnvironmentRecords&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">LexicalEnvironment</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">environmentRecord<span class="token punctuation">,</span> outer</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>environmentRecord <span class="token operator">=</span> environmentRecord<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>outer <span class="token operator">=</span> outer<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * 创建变量</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">N</span> 名称</span>
<span class="line">     */</span></span>
<span class="line">    <span class="token function">createBinding</span><span class="token punctuation">(</span><span class="token parameter"><span class="token constant">N</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>environmentRecord<span class="token punctuation">.</span><span class="token function">createBinding</span><span class="token punctuation">(</span><span class="token constant">N</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * 给N设置值V</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">N</span> 名称</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">V</span> 值</span>
<span class="line">     */</span></span>
<span class="line">    <span class="token function">setBinding</span><span class="token punctuation">(</span><span class="token parameter"><span class="token constant">N</span><span class="token punctuation">,</span> <span class="token constant">V</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>environmentRecord<span class="token punctuation">.</span><span class="token function">setBinding</span><span class="token punctuation">(</span><span class="token constant">N</span><span class="token punctuation">,</span> <span class="token constant">V</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * 是否绑定一个变量</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">N</span> 名称</span>
<span class="line">     */</span></span>
<span class="line">    <span class="token function">hasBinding</span><span class="token punctuation">(</span><span class="token parameter"><span class="token constant">N</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>environmentRecord<span class="token punctuation">.</span><span class="token function">hasBinding</span><span class="token punctuation">(</span><span class="token constant">N</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * 获取N的值</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">N</span>   名称</span>
<span class="line">     */</span></span>
<span class="line">    <span class="token function">getBindingValue</span><span class="token punctuation">(</span><span class="token parameter"><span class="token constant">N</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>environmentRecord<span class="token punctuation">.</span><span class="token function">getBindingValue</span><span class="token punctuation">(</span><span class="token constant">N</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * 返回此词法环境下name的值</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">name</span> </span>
<span class="line">     */</span></span>
<span class="line">    <span class="token function">getIdentifierReference</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">let</span> lexicalEnvironment <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">do</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">let</span> exists <span class="token operator">=</span> lexicalEnvironment<span class="token punctuation">.</span><span class="token function">hasBinding</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">if</span> <span class="token punctuation">(</span>exists<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token keyword">return</span> lexicalEnvironment<span class="token punctuation">.</span><span class="token function">getBindingValue</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">                lexicalEnvironment <span class="token operator">=</span> lexicalEnvironment<span class="token punctuation">.</span>outer<span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span>lexicalEnvironment<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * 创建新的声明式词法环境</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">lexicalEnvironment</span> 父词法环境</span>
<span class="line">     * <span class="token keyword">@returns</span> </span>
<span class="line">     */</span></span>
<span class="line">    <span class="token keyword">static</span> <span class="token function">NewDeclarativeEnvironment</span><span class="token punctuation">(</span><span class="token parameter">lexicalEnvironment</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">let</span> envRec <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DeclarativeEnvironmentRecords</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">let</span> env <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LexicalEnvironment</span><span class="token punctuation">(</span>envRec<span class="token punctuation">,</span> lexicalEnvironment<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span> env<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * 创建新的对象式词法环境</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">lexicalEnvironment</span> 父词法环境</span>
<span class="line">     * <span class="token keyword">@returns</span> </span>
<span class="line">     */</span></span>
<span class="line">    <span class="token keyword">static</span> <span class="token function">NewObjectEnvironment</span><span class="token punctuation">(</span><span class="token parameter">object<span class="token punctuation">,</span> lexicalEnvironment</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">let</span> envRec <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ObjectEnvironmentRecords</span><span class="token punctuation">(</span>object<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">let</span> env <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LexicalEnvironment</span><span class="token punctuation">(</span>envRec<span class="token punctuation">,</span> lexicalEnvironment<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span> env<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> LexicalEnvironment<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-7-executioncontexts-js" tabindex="-1"><a class="header-anchor" href="#_2-7-executioncontexts-js"><span>2.7 ExecutionContexts.js</span></a></h3><p>src\\ExecutionContexts.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">class</span> <span class="token class-name">ExecutionContexts</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>executionContexts <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token function">push</span><span class="token punctuation">(</span><span class="token parameter">executionContext</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>executionContexts<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>executionContext<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">get</span> <span class="token function">current</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>executionContexts<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>executionContexts<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>executionContexts<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> ExecutionContexts<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-8-executioncontext-js" tabindex="-1"><a class="header-anchor" href="#_2-8-executioncontext-js"><span>2.8 ExecutionContext.js</span></a></h3><p>src\\ExecutionContext.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">class</span> <span class="token class-name">ExecutionContext</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">lexicalEnvironment<span class="token punctuation">,</span> thisBinding</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>lexicalEnvironment <span class="token operator">=</span> lexicalEnvironment<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>thisBinding <span class="token operator">=</span> thisBinding<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> ExecutionContext<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-9-functioninstance-js" tabindex="-1"><a class="header-anchor" href="#_2-9-functioninstance-js"><span>2.9 FunctionInstance.js</span></a></h3><p>src\\FunctionInstance.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">class</span> <span class="token class-name">FunctionInstance</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> code<span class="token punctuation">,</span> scope</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>code <span class="token operator">=</span> code<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>scope <span class="token operator">=</span> scope<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> FunctionInstance<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-支持块级作用域" tabindex="-1"><a class="header-anchor" href="#_3-支持块级作用域"><span>3.支持块级作用域</span></a></h2><ul><li><a href="https://www.processon.com/diagraming/61beb9795653bb5a3e2b12fa" target="_blank" rel="noopener noreferrer">支持块级作用域</a></li></ul><p><img src="https://static.zhufengpeixun.com/2_zhi_chi_kuai_ji_zuo_yong_yu_1_1639913302206.jpg" alt=""></p><h3 id="_3-1-main-js" tabindex="-1"><a class="header-anchor" href="#_3-1-main-js"><span>3.1 main.js</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">var a = 1;</span>
<span class="line">function one() {</span>
<span class="line">    var b = 2;</span>
<span class="line">+   {</span>
<span class="line">+       let c = 3;</span>
<span class="line">+       console.log(a, b, c);</span>
<span class="line">+   }</span>
<span class="line">+   {</span>
<span class="line">+       let c = 4;</span>
<span class="line">+       console.log(a, b, c);</span>
<span class="line">+   }</span>
<span class="line">}</span>
<span class="line">one();</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-environmentrecord-js" tabindex="-1"><a class="header-anchor" href="#_3-2-environmentrecord-js"><span>3.2 EnvironmentRecord.js</span></a></h3><p>src\\EnvironmentRecord.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">class EnvironmentRecord {</span>
<span class="line">    constructor(bindings) {</span>
<span class="line">        this.bindings = bindings || {};</span>
<span class="line">    }</span>
<span class="line">    /**</span>
<span class="line">     * 创建变量</span>
<span class="line">     * @param {*} N 名称</span>
<span class="line">     */</span>
<span class="line">    createBinding(N) {</span>
<span class="line">        this.bindings[N] = undefined;</span>
<span class="line">    }</span>
<span class="line">    /**</span>
<span class="line">     * 给N设置值V</span>
<span class="line">     * @param {*} N 名称</span>
<span class="line">     * @param {*} V 值</span>
<span class="line">     */</span>
<span class="line">    setBinding(N, V) {</span>
<span class="line">        this.bindings[N] = V;</span>
<span class="line">    }</span>
<span class="line">    /**</span>
<span class="line">     * 是否绑定一个变量</span>
<span class="line">     * @param {*} N 名称</span>
<span class="line">     */</span>
<span class="line">    hasBinding(N) {</span>
<span class="line">        return N in this.bindings;</span>
<span class="line">    }</span>
<span class="line">    /**</span>
<span class="line">     * 获取N的值</span>
<span class="line">     * @param {*} N   名称</span>
<span class="line">     */</span>
<span class="line">    getBindingValue(N) {</span>
<span class="line">+       let value = this.bindings[N];</span>
<span class="line">+       if (value.type === &#39;let&#39; &amp;&amp; value.uninitialized) {</span>
<span class="line">+           throw new Error(\`ReferenceError: Cannot access &#39;\${N}&#39; before initialization\`);</span>
<span class="line">+       }</span>
<span class="line">+       return value;</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line">module.exports = EnvironmentRecord;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-executioncontext-js" tabindex="-1"><a class="header-anchor" href="#_3-3-executioncontext-js"><span>3.3 ExecutionContext.js</span></a></h3><p>src\\ExecutionContext.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">class ExecutionContext {</span>
<span class="line">    constructor(lexicalEnvironment, thisBinding) {</span>
<span class="line">+       this.variableEnvironment = this.lexicalEnvironment = lexicalEnvironment;</span>
<span class="line">        this.thisBinding = thisBinding;</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line">module.exports = ExecutionContext;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-4-src-index-js" tabindex="-1"><a class="header-anchor" href="#_3-4-src-index-js"><span>3.4 src\\index.js</span></a></h3><p>src\\index.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">const ObjectEnvironmentRecords = require(&#39;./ObjectEnvironmentRecords&#39;);</span>
<span class="line">const LexicalEnvironment = require(&#39;./LexicalEnvironment&#39;);</span>
<span class="line">const ExecutionContext = require(&#39;./ExecutionContext&#39;);</span>
<span class="line">const ExecutionContexts = require(&#39;./ExecutionContexts&#39;);</span>
<span class="line">const FunctionInstance = require(&#39;./FunctionInstance&#39;);</span>
<span class="line"></span>
<span class="line">//创建执行上下文栈</span>
<span class="line">const ECStack = new ExecutionContexts();</span>
<span class="line">//创建全局环境记录对象</span>
<span class="line">const globalEnvironmentRecord = new ObjectEnvironmentRecords(global);</span>
<span class="line">//创建全局环境</span>
<span class="line">const globalLexicalEnvironment = new LexicalEnvironment(globalEnvironmentRecord, null);</span>
<span class="line">//创建全局执行上下文</span>
<span class="line">let globalExecutionContext = new ExecutionContext(globalLexicalEnvironment, global);</span>
<span class="line">//把全局执行上下文放入执行上下文栈</span>
<span class="line">ECStack.push(globalExecutionContext);</span>
<span class="line"></span>
<span class="line">//创建a变量并初始化为undefined</span>
<span class="line">+ECStack.current.variableEnvironment.createBinding(&#39;a&#39;);</span>
<span class="line">+ECStack.current.variableEnvironment.setBinding(&#39;a&#39;, undefined);</span>
<span class="line">//创建fn变量并赋值为函数</span>
<span class="line">let oneFn = new FunctionInstance(&#39;one&#39;, &#39;var b = 2;\\nconsole.log(a, b);&#39;,</span>
<span class="line">    ECStack.current.lexicalEnvironment);</span>
<span class="line">+ECStack.current.variableEnvironment.createBinding(&#39;one&#39;);</span>
<span class="line">+ECStack.current.variableEnvironment.setBinding(&#39;one&#39;, oneFn);</span>
<span class="line"></span>
<span class="line">//开始执行代码,给a变量赋值为1</span>
<span class="line">+ECStack.current.variableEnvironment.setBinding(&#39;a&#39;, 1);</span>
<span class="line">//遇到函数则创建一个新的词法环境</span>
<span class="line">let oneLexicalEnvironment = LexicalEnvironment.NewDeclarativeEnvironment(oneFn.scope);</span>
<span class="line">//创建one函数执行上下文</span>
<span class="line">let oneExecutionContext = new ExecutionContext(oneLexicalEnvironment, global);</span>
<span class="line">//把one函数执行上下文推入执行上下文栈并成为最新的执行上下文</span>
<span class="line">ECStack.push(oneExecutionContext);</span>
<span class="line"></span>
<span class="line">//创建并绑定变量b,执行变量提升</span>
<span class="line">+ECStack.current.variableEnvironment.createBinding(&#39;b&#39;);</span>
<span class="line">+ECStack.current.variableEnvironment.setBinding(&#39;b&#39;, undefined);</span>
<span class="line">//开始执行函数代码，给变量b赋值为2</span>
<span class="line">+ECStack.current.variableEnvironment.setBinding(&#39;b&#39;, 2);</span>
<span class="line">+//备份当前的词法作用域</span>
<span class="line">+let oldEnv = ECStack.current.lexicalEnvironment;</span>
<span class="line">+//创建新的词法环境</span>
<span class="line">+let blockEnv = LexicalEnvironment.NewDeclarativeEnvironment(oldEnv);</span>
<span class="line">+blockEnv.createBinding(&#39;c&#39;);</span>
<span class="line">+blockEnv.setBinding(&#39;c&#39;, { type: &#39;let&#39;, uninitialized: true });</span>
<span class="line">+//让blockEnv成为当前执行上下文的词法环境</span>
<span class="line">+ECStack.current.lexicalEnvironment = blockEnv;</span>
<span class="line">+//开始执行块级作用域中的代码</span>
<span class="line">+ECStack.current.lexicalEnvironment.setBinding(&#39;c&#39;, 3);</span>
<span class="line">+console.log(</span>
<span class="line">+    ECStack.current.lexicalEnvironment.getIdentifierReference(&#39;a&#39;)</span>
<span class="line">+    , ECStack.current.lexicalEnvironment.getIdentifierReference(&#39;b&#39;)</span>
<span class="line">+    , ECStack.current.lexicalEnvironment.getIdentifierReference(&#39;c&#39;));</span>
<span class="line">+ECStack.current.lexicalEnvironment = oldEnv;</span>
<span class="line">+//备份当前的词法作用域</span>
<span class="line">+oldEnv = ECStack.current.lexicalEnvironment;</span>
<span class="line">+//创建新的词法环境</span>
<span class="line">+blockEnv = LexicalEnvironment.NewDeclarativeEnvironment(oldEnv);</span>
<span class="line">+blockEnv.createBinding(&#39;c&#39;);</span>
<span class="line">+blockEnv.setBinding(&#39;c&#39;, { type: &#39;let&#39;, uninitialized: true });</span>
<span class="line">+//让blockEnv成为当前执行上下文的词法环境</span>
<span class="line">+ECStack.current.lexicalEnvironment = blockEnv;</span>
<span class="line">+//开始执行块级作用域中的代码</span>
<span class="line">+ECStack.current.lexicalEnvironment.setBinding(&#39;c&#39;, 4);</span>
<span class="line">+console.log(</span>
<span class="line">+    ECStack.current.lexicalEnvironment.getIdentifierReference(&#39;a&#39;)</span>
<span class="line">+    , ECStack.current.lexicalEnvironment.getIdentifierReference(&#39;b&#39;)</span>
<span class="line">+    , ECStack.current.lexicalEnvironment.getIdentifierReference(&#39;c&#39;));</span>
<span class="line">+ECStack.current.lexicalEnvironment = oldEnv;</span>
<span class="line">ECStack.pop();</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-标准闭包" tabindex="-1"><a class="header-anchor" href="#_4-标准闭包"><span>4.标准闭包</span></a></h2><ul><li><a href="https://www.processon.com/diagraming/61bebb770e3e74525cd0137b" target="_blank" rel="noopener noreferrer">标准闭包</a></li></ul><p><img src="https://static.zhufengpeixun.com/3_biao_zhun_bi_bao_2_1639913560606.jpg" alt=""></p><h3 id="_4-1-main-js" tabindex="-1"><a class="header-anchor" href="#_4-1-main-js"><span>4.1 main.js</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">var a = 1;</span>
<span class="line">function one() {</span>
<span class="line">    var b = 2;</span>
<span class="line">+   return function two() {</span>
<span class="line">+       console.log(a, b);</span>
<span class="line">+   }</span>
<span class="line">}</span>
<span class="line">+let two = one();</span>
<span class="line">+two();</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-src-index-js" tabindex="-1"><a class="header-anchor" href="#_4-2-src-index-js"><span>4.2 src\\index.js</span></a></h3><p>src\\index.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">const ObjectEnvironmentRecords = require(&#39;./ObjectEnvironmentRecords&#39;);</span>
<span class="line">const LexicalEnvironment = require(&#39;./LexicalEnvironment&#39;);</span>
<span class="line">const ExecutionContext = require(&#39;./ExecutionContext&#39;);</span>
<span class="line">const ExecutionContexts = require(&#39;./ExecutionContexts&#39;);</span>
<span class="line">const FunctionInstance = require(&#39;./FunctionInstance&#39;);</span>
<span class="line"></span>
<span class="line">//创建执行上下文栈</span>
<span class="line">const ECStack = new ExecutionContexts();</span>
<span class="line">//创建全局环境记录对象</span>
<span class="line">const globalEnvironmentRecord = new ObjectEnvironmentRecords(global);</span>
<span class="line">//创建全局环境</span>
<span class="line">const globalLexicalEnvironment = new LexicalEnvironment(globalEnvironmentRecord, null);</span>
<span class="line">//创建全局执行上下文</span>
<span class="line">let globalExecutionContext = new ExecutionContext(globalLexicalEnvironment, global);</span>
<span class="line">//把全局执行上下文放入执行上下文栈</span>
<span class="line">ECStack.push(globalExecutionContext);</span>
<span class="line"></span>
<span class="line">//创建a变量并初始化为undefined</span>
<span class="line">ECStack.current.variableEnvironment.createBinding(&#39;a&#39;);</span>
<span class="line">ECStack.current.variableEnvironment.setBinding(&#39;a&#39;, undefined);</span>
<span class="line">//创建fn变量并赋值为函数</span>
<span class="line">let oneFn = new FunctionInstance(&#39;one&#39;, &#39;var b = 2;\\nconsole.log(a, b);&#39;,</span>
<span class="line">    ECStack.current.lexicalEnvironment);</span>
<span class="line">ECStack.current.variableEnvironment.createBinding(&#39;one&#39;);</span>
<span class="line">ECStack.current.variableEnvironment.setBinding(&#39;one&#39;, oneFn);</span>
<span class="line"></span>
<span class="line">//开始执行代码,给a变量赋值为1</span>
<span class="line">ECStack.current.variableEnvironment.setBinding(&#39;a&#39;, 1);</span>
<span class="line">//遇到函数则创建一个新的词法环境</span>
<span class="line">let oneLexicalEnvironment = LexicalEnvironment.NewDeclarativeEnvironment(oneFn.scope);</span>
<span class="line">//创建one函数执行上下文</span>
<span class="line">let oneExecutionContext = new ExecutionContext(oneLexicalEnvironment, global);</span>
<span class="line">//把one函数执行上下文推入执行上下文栈并成为最新的执行上下文</span>
<span class="line">ECStack.push(oneExecutionContext);</span>
<span class="line"></span>
<span class="line">//创建并绑定变量b,执行变量提升</span>
<span class="line">ECStack.current.variableEnvironment.createBinding(&#39;b&#39;);</span>
<span class="line">ECStack.current.variableEnvironment.setBinding(&#39;b&#39;, undefined);</span>
<span class="line">+ECStack.current.variableEnvironment.createBinding(&#39;two&#39;);</span>
<span class="line">+let twoFn = new FunctionInstance(&#39;two&#39;, &#39;console.log(a, b);&#39;, ECStack.current.lexicalEnvironment);</span>
<span class="line">+ECStack.current.variableEnvironment.setBinding(&#39;two&#39;, twoFn);</span>
<span class="line"></span>
<span class="line">//开始执行函数代码，给变量b赋值为2</span>
<span class="line">ECStack.current.variableEnvironment.setBinding(&#39;b&#39;, 2);</span>
<span class="line">+//退出one的执行上下文</span>
<span class="line">+ECStack.pop();</span>
<span class="line">+//回到全局执行上下文下执行two函数</span>
<span class="line">+let twoVariableEnvironment = LexicalEnvironment.NewDeclarativeEnvironment(twoFn.scope);</span>
<span class="line">+//创建one函数执行上下文并设置词法环境为 localEnv</span>
<span class="line">+let twoExecutionContext = new ExecutionContext(twoVariableEnvironment, global);</span>
<span class="line">+//把one执行上下语言推入执行上下文栈并成为最新的执行上下文</span>
<span class="line">+ECStack.push(twoExecutionContext);</span>
<span class="line">+console.log(</span>
<span class="line">+    ECStack.current.lexicalEnvironment.getIdentifierReference(&#39;a&#39;)</span>
<span class="line">+    , ECStack.current.lexicalEnvironment.getIdentifierReference(&#39;b&#39;))</span>
<span class="line">+//退出two的执行上下文</span>
<span class="line">+ECStack.pop();</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-v8中的闭包优化" tabindex="-1"><a class="header-anchor" href="#_4-3-v8中的闭包优化"><span>4.3 V8中的闭包优化</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token constant">DOCTYPE</span> html<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span>html lang<span class="token operator">=</span><span class="token string">&quot;en&quot;</span><span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span>head<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span>meta charset<span class="token operator">=</span><span class="token string">&quot;UTF-8&quot;</span><span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span>meta http<span class="token operator">-</span>equiv<span class="token operator">=</span><span class="token string">&quot;X-UA-Compatible&quot;</span> content<span class="token operator">=</span><span class="token string">&quot;IE=edge&quot;</span><span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span>meta name<span class="token operator">=</span><span class="token string">&quot;viewport&quot;</span> content<span class="token operator">=</span><span class="token string">&quot;width=device-width, initial-scale=1.0&quot;</span><span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span>title<span class="token operator">&gt;</span>Document<span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span>body<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span>script<span class="token operator">&gt;</span></span>
<span class="line">        <span class="token keyword">function</span> <span class="token constant">A1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">var</span> a1 <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;a1&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">var</span> a2 <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;a2&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token constant">A2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a1<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token keyword">debugger</span></span>
<span class="line">        <span class="token keyword">let</span> <span class="token constant">A2</span> <span class="token operator">=</span> <span class="token constant">A1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token constant">A2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,58)])])}const o=s(l,[["render",i]]),r=JSON.parse('{"path":"/strong/144.1.closure.html","title":"","lang":"en-US","frontmatter":{},"git":{"updatedTime":1681290319000,"contributors":[{"name":"yutao","username":"yutao","email":"642231346@qq.com","commits":1,"url":"https://github.com/yutao"}],"changelog":[{"hash":"f5ab8c9d34991ec274f7f652439afe5b2afb6147","time":1681290319000,"email":"642231346@qq.com","author":"yutao","message":"modify"}]},"filePathRelative":"strong/144.1.closure.md"}');export{o as comp,r as data};
