import{_ as s,c as a,a as e,o as l}from"./app-CD1YpnS1.js";const p={};function i(c,n){return l(),a("div",null,[...n[0]||(n[0]=[e(`<h2 id="_1-规范" tabindex="-1"><a class="header-anchor" href="#_1-规范"><span>1. 规范</span></a></h2><ul><li><a href="http://es5.github.io" target="_blank" rel="noopener noreferrer">ES5英文版</a></li><li><a href="http://yanhaijing.com/es5" target="_blank" rel="noopener noreferrer">ES5中文版</a></li><li><a href="https://262.ecma-international.org/6.0" target="_blank" rel="noopener noreferrer">ES6英文版</a></li></ul><h2 id="_2-进入全局代码" tabindex="-1"><a class="header-anchor" href="#_2-进入全局代码"><span>2. 进入全局代码</span></a></h2><ul><li><a href="https://www.processon.com/diagraming/61bcc05c7d9c087834ef1a64" target="_blank" rel="noopener noreferrer">执行全局代码</a></li></ul><p><img src="https://static.zhufengpeixun.com/1_ke_zhi_xing_dai_ma_yu_zhi_xing_huan_jing_34_1642175955533.jpg" alt=""></p><h3 id="_2-1-1-global-js" tabindex="-1"><a class="header-anchor" href="#_2-1-1-global-js"><span>2.1 1.global.js</span></a></h3><p>src\\1.global.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">one</span><span class="token punctuation">(</span><span class="token parameter">c</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token function">one</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-1-global-run-js" tabindex="-1"><a class="header-anchor" href="#_2-2-1-global-run-js"><span>2.2 1.global.run.js</span></a></h3><p>src\\1.global.run.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token doc-comment comment">/**</span>
<span class="line">var a = 1;</span>
<span class="line">function one(c) <span class="token punctuation">{</span></span>
<span class="line">    var b = 2;</span>
<span class="line">    console.log(a, b, c);</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">one(3);</span>
<span class="line">*/</span></span>
<span class="line"><span class="token keyword">const</span> LexicalEnvironment <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./LexicalEnvironment&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> ExecutionContext <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./ExecutionContext&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> ECStack <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./ECStack&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//1.将变量环境设置为全局环境 2.将词法环境设置为 全局环境</span></span>
<span class="line"><span class="token keyword">const</span> globalLexicalEnvironment <span class="token operator">=</span> LexicalEnvironment<span class="token punctuation">.</span><span class="token function">NewObjectEnvironment</span><span class="token punctuation">(</span>global<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> globalEC <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ExecutionContext</span><span class="token punctuation">(</span>globalLexicalEnvironment<span class="token punctuation">,</span> global<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">ECStack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>globalEC<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//令 env 为当前运行的执行环境的环境变量的 环境记录</span></span>
<span class="line"><span class="token keyword">let</span> env <span class="token operator">=</span> ECStack<span class="token punctuation">.</span>current<span class="token punctuation">.</span>lexicalEnvironment<span class="token punctuation">.</span>environmentRecord<span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//如果 code 是 eval 代码 ，则令 configurableBindings 为 true，否则令 configurableBindings 为 false。</span></span>
<span class="line"><span class="token keyword">let</span> configurableBindings <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//如果代码是 严格模式下的代码 ，则令 strict 为 true，否则令 strict 为 false。</span></span>
<span class="line"><span class="token keyword">let</span> strict <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//按源码顺序遍历 code，对于每一个 VariableDeclaration 和 VariableDeclarationNoIn 表达式：</span></span>
<span class="line"><span class="token comment">//令 dn 为 d 中的标识符。</span></span>
<span class="line"><span class="token keyword">let</span> dn <span class="token operator">=</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//以 dn 为参数，调用 env 的 HasBinding 具体方法，并令 varAlreadyDeclared 为调用的结果</span></span>
<span class="line"><span class="token keyword">let</span> varAlreadyDeclared <span class="token operator">=</span> env<span class="token punctuation">.</span><span class="token function">HasBinding</span><span class="token punctuation">(</span>dn<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//如果 varAlreadyDeclared 为 false，则：</span></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>varAlreadyDeclared<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">//以 dn 和 configurableBindings 为参数，调用 env 的 CreateMutableBinding 具体方法。</span></span>
<span class="line">    env<span class="token punctuation">.</span><span class="token function">CreateMutableBinding</span><span class="token punctuation">(</span>dn<span class="token punctuation">,</span> configurableBindings<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">//以 dn、undefined 和 strict 为参数，调用 env 的 SetMutableBinding 具体方法。</span></span>
<span class="line">    env<span class="token punctuation">.</span><span class="token function">SetMutableBinding</span><span class="token punctuation">(</span>dn<span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> strict<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>env<span class="token punctuation">.</span><span class="token function">GetBindingValue</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-lexicalenvironment-js" tabindex="-1"><a class="header-anchor" href="#_2-3-lexicalenvironment-js"><span>2.3 LexicalEnvironment.js</span></a></h3><p>src\\LexicalEnvironment.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">const</span> DeclarativeEnvironmentRecords <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;./DeclarativeEnvironmentRecords&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> ObjectEnvironmentRecords <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;./ObjectEnvironmentRecords&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">LexicalEnvironment</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">    * 当调用 GetIdentifierReference 抽象运算时</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">lex</span> 词法环境</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">name</span>  标识符字符串</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">strict</span>  布尔型标识</span>
<span class="line">    */</span></span>
<span class="line">   <span class="token keyword">static</span> <span class="token function">GetIdentifierReference</span><span class="token punctuation">(</span><span class="token parameter">lex<span class="token punctuation">,</span> name<span class="token punctuation">,</span> strict</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">//if (!lex) return { name: undefined };</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>lex<span class="token punctuation">)</span> <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">ReferenceError: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> is not defined</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">let</span> envRec <span class="token operator">=</span> lex<span class="token punctuation">.</span>environmentRecord<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">let</span> exists <span class="token operator">=</span> envRec<span class="token punctuation">.</span><span class="token function">HasBinding</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>exists<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">const</span> value <span class="token operator">=</span> envRec<span class="token punctuation">.</span><span class="token function">GetBindingValue</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> value <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">            lex <span class="token operator">=</span> lex<span class="token punctuation">.</span>outer<span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">return</span> LexicalEnvironment<span class="token punctuation">.</span><span class="token function">GetIdentifierReference</span><span class="token punctuation">(</span>lex<span class="token punctuation">,</span> name<span class="token punctuation">,</span> strict<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * 创建新的声明式词法环境</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">lexicalEnvironment</span> 父词法环境</span>
<span class="line">     * <span class="token keyword">@returns</span> </span>
<span class="line">     */</span></span>
<span class="line">    <span class="token keyword">static</span> <span class="token function">NewDeclarativeEnvironment</span><span class="token punctuation">(</span><span class="token parameter">lexicalEnvironment</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">let</span> env <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LexicalEnvironment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">let</span> envRec <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DeclarativeEnvironmentRecords</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        env<span class="token punctuation">.</span>environmentRecord <span class="token operator">=</span> envRec<span class="token punctuation">;</span></span>
<span class="line">        env<span class="token punctuation">.</span>outer <span class="token operator">=</span> lexicalEnvironment<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span> env<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * 创建新的对象式词法环境</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">lexicalEnvironment</span> 父词法环境</span>
<span class="line">     * <span class="token keyword">@returns</span> </span>
<span class="line">     */</span></span>
<span class="line">    <span class="token keyword">static</span> <span class="token function">NewObjectEnvironment</span><span class="token punctuation">(</span><span class="token parameter">object<span class="token punctuation">,</span> lexicalEnvironment</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">let</span> env <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LexicalEnvironment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">let</span> envRec <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ObjectEnvironmentRecords</span><span class="token punctuation">(</span>object<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        env<span class="token punctuation">.</span>environmentRecord <span class="token operator">=</span> envRec<span class="token punctuation">;</span></span>
<span class="line">        env<span class="token punctuation">.</span>outer <span class="token operator">=</span> lexicalEnvironment<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span> env<span class="token punctuation">;</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> LexicalEnvironment<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-declarativeenvironmentrecords-js" tabindex="-1"><a class="header-anchor" href="#_2-4-declarativeenvironmentrecords-js"><span>2.4 DeclarativeEnvironmentRecords.js</span></a></h3><p>src\\DeclarativeEnvironmentRecords.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">const</span> EnvironmentRecord <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./EnvironmentRecord&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">DeclarativeEnvironmentRecords</span> <span class="token keyword">extends</span> <span class="token class-name">EnvironmentRecord</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * 判断环境记录项是否包含对某个标识符的绑定</span>
<span class="line">     * 如果包含该绑定则返回 true，反之返回 false。其中字符串 N 是标识符文本。</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">N</span> 名称</span>
<span class="line">     */</span></span>
<span class="line">    <span class="token function">HasBinding</span><span class="token punctuation">(</span><span class="token parameter"><span class="token constant">N</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">let</span> envRec <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token constant">N</span> <span class="token keyword">in</span> envRec<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * 在环境记录项中创建一个新的可变绑定</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">N</span>  绑定名称</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">D</span>  可选参数 D 的值为true，则该绑定在后续操作中可以被删除</span>
<span class="line">     */</span></span>
<span class="line">    <span class="token function">CreateMutableBinding</span><span class="token punctuation">(</span><span class="token parameter"><span class="token constant">N</span><span class="token punctuation">,</span> <span class="token constant">D</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">//令 envRec 为函数调用时对应的声明式环境记录项</span></span>
<span class="line">        <span class="token keyword">let</span> envRec <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token comment">//执行断言：envRec 没有 N 的绑定。</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">assert</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">HasBinding</span><span class="token punctuation">(</span><span class="token constant">N</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token comment">//在 envRec 中为 N 创建一个可变绑定,并将绑定的值设置为 undefined</span></span>
<span class="line">        <span class="token comment">//如果 D 为 true 则新创建的绑定可在后续操作中通过调用 DeleteBinding 删除</span></span>
<span class="line">        Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>envRec<span class="token punctuation">,</span> <span class="token constant">N</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token literal-property property">writable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token literal-property property">configurable</span><span class="token operator">:</span> <span class="token constant">D</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * 环境记录项中设置一个已经存在的绑定的值</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">N</span> 绑定名称</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">V</span> 绑定的值</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">S</span> S 用于指定是否为严格模式 当 S 为 true 并且该绑定不允许赋值时，则抛出一个 TypeError 异常</span>
<span class="line">     */</span></span>
<span class="line">    <span class="token function">SetMutableBinding</span><span class="token punctuation">(</span><span class="token parameter"><span class="token constant">N</span><span class="token punctuation">,</span> <span class="token constant">V</span><span class="token punctuation">,</span> <span class="token constant">S</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">//令 envRec 为函数调用时对应的声明式环境记录项</span></span>
<span class="line">        <span class="token keyword">let</span> envRec <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token comment">//执行断言：envRec 必须有 N 的绑定。</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">assert</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">HasBinding</span><span class="token punctuation">(</span><span class="token constant">N</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token comment">//否则该操作会尝试修改一个不可变绑定的值，因此如果 S 的值为 true，则抛出一个 TypeError 异常。</span></span>
<span class="line">        <span class="token keyword">const</span> propertyDescriptor <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyDescriptor</span><span class="token punctuation">(</span>envRec<span class="token punctuation">,</span> <span class="token constant">N</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token constant">S</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>propertyDescriptor<span class="token punctuation">.</span>writable<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&quot;TypeError: Assignment to constant variable.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token comment">//如果 envRec 中 N 的绑定为可变绑定，则将其值修改为 V</span></span>
<span class="line">        envRec<span class="token punctuation">[</span><span class="token constant">N</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token constant">V</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * 返回环境记录项中一个已经存在的绑定的值</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">N</span> 绑定的名称</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">S</span> 用于指定是否为严格模式 如果 S 的值为 true 并且该绑定不存在或未初始化，则抛出一个 ReferenceError 异常</span>
<span class="line">     */</span></span>
<span class="line">    <span class="token function">GetBindingValue</span><span class="token punctuation">(</span><span class="token parameter"><span class="token constant">N</span><span class="token punctuation">,</span> <span class="token constant">S</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">//令 envRec 为函数调用时对应的声明式环境记录项</span></span>
<span class="line">        <span class="token keyword">let</span> envRec <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token comment">//执行断言：envRec 必须有 N 的绑定。</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">assert</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">HasBinding</span><span class="token punctuation">(</span><span class="token constant">N</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token comment">//如果 envRec 中 N 的绑定是一个未初始化的不可变绑定，则如果 S 为 false，返回 undefined，否则抛出一个 ReferenceError 异常。</span></span>
<span class="line">        <span class="token keyword">const</span> <span class="token constant">V</span> <span class="token operator">=</span> envRec<span class="token punctuation">[</span><span class="token constant">N</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">const</span> propertyDescriptor <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyDescriptor</span><span class="token punctuation">(</span>envRec<span class="token punctuation">,</span> <span class="token constant">N</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>propertyDescriptor<span class="token punctuation">.</span>uninitialized<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token constant">S</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token constant">V</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">ReferenceError: Cannot access &#39;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token constant">N</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&#39; before initialization</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token comment">//否则返回 envRec 中与 N 绑定的值</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token constant">V</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * 从环境记录项中删除一个绑定</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">N</span> 绑定的名称 如果 N 指定的绑定存在，将其删除并返回 true。如果绑定存在但无法删除则返回false。如果绑定不存在则返回 true</span>
<span class="line">     */</span></span>
<span class="line">    <span class="token function">DeleteBinding</span><span class="token punctuation">(</span><span class="token parameter"><span class="token constant">N</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">//令 envRec 为函数调用时对应的声明式环境记录项</span></span>
<span class="line">        <span class="token keyword">let</span> envRec <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">HasBinding</span><span class="token punctuation">(</span><span class="token constant">N</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token keyword">const</span> propertyDescriptor <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyDescriptor</span><span class="token punctuation">(</span>envRec<span class="token punctuation">,</span> <span class="token constant">N</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>propertyDescriptor<span class="token punctuation">.</span>configurable<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token keyword">delete</span> envRec<span class="token punctuation">[</span><span class="token constant">N</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * 当从该环境记录项的绑定中获取一个函数对象并且调用时，该方法返回该函数对象使用的 this 对象的值。</span>
<span class="line">     */</span></span>
<span class="line">    <span class="token function">ImplicitThisValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">    * 创建一个不可变绑定</span>
<span class="line">    * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">N</span> 名称</span>
<span class="line">    */</span></span>
<span class="line">    <span class="token function">CreateImmutableBinding</span><span class="token punctuation">(</span><span class="token parameter"><span class="token constant">N</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">//令 envRec 为函数调用时对应的声明式环境记录项</span></span>
<span class="line">        <span class="token keyword">let</span> envRec <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token comment">//执行断言：envRec 没有 N 的绑定。</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">assert</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">HasBinding</span><span class="token punctuation">(</span><span class="token constant">N</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token comment">//在 envRec 中为 N 创建一个不可变绑定，并记录为未初始化</span></span>
<span class="line">        Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>envRec<span class="token punctuation">,</span> <span class="token constant">N</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token literal-property property">uninitialized</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * 将当前名称为参数 N 的绑定的值修改为参数 V 指定的值</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">N</span> 当前名称</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">V</span> 绑定的值</span>
<span class="line">     */</span></span>
<span class="line">    <span class="token function">InitializeImmutableBinding</span><span class="token punctuation">(</span><span class="token parameter"><span class="token constant">N</span><span class="token punctuation">,</span> <span class="token constant">V</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">//令 envRec 为函数调用时对应的声明式环境记录项</span></span>
<span class="line">        <span class="token keyword">let</span> envRec <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token comment">//执行断言：envRec 没有 N 的绑定</span></span>
<span class="line">        <span class="token keyword">const</span> propertyDescriptor <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyDescriptor</span><span class="token punctuation">(</span>envRec<span class="token punctuation">,</span> <span class="token constant">N</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">assert</span><span class="token punctuation">(</span>propertyDescriptor <span class="token operator">&amp;&amp;</span> propertyDescriptor<span class="token punctuation">.</span>uninitialized<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        envRec<span class="token punctuation">[</span><span class="token constant">N</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token constant">V</span><span class="token punctuation">;</span></span>
<span class="line">        propertyDescriptor<span class="token punctuation">.</span>uninitialized <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> DeclarativeEnvironmentRecords<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-5-environmentrecord-js" tabindex="-1"><a class="header-anchor" href="#_2-5-environmentrecord-js"><span>2.5 EnvironmentRecord.js</span></a></h3><p>src\\EnvironmentRecord.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">class</span> <span class="token class-name">EnvironmentRecord</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> EnvironmentRecord<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-6-objectenvironmentrecords-js" tabindex="-1"><a class="header-anchor" href="#_2-6-objectenvironmentrecords-js"><span>2.6 ObjectEnvironmentRecords.js</span></a></h3><p>src\\ObjectEnvironmentRecords.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">const</span> EnvironmentRecord <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./EnvironmentRecord&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">ObjectEnvironmentRecords</span> <span class="token keyword">extends</span> <span class="token class-name">EnvironmentRecord</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">bindings</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>bindings <span class="token operator">=</span> bindings<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>provideThis <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * 判断其关联的绑定对象是否有名为 N 的属性</span>
<span class="line">     * 如果包含该绑定则返回 true，反之返回 false。其中字符串 N 是标识符文本。</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">N</span> 名称</span>
<span class="line">     */</span></span>
<span class="line">    <span class="token function">HasBinding</span><span class="token punctuation">(</span><span class="token parameter"><span class="token constant">N</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">const</span> envRec <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">const</span> bindings <span class="token operator">=</span> envRec<span class="token punctuation">.</span>bindings<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span> bindings<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span><span class="token constant">N</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">    * 会在其关联的绑定对象上创建一个名称为 N 的属性</span>
<span class="line">    * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">N</span>  绑定名称</span>
<span class="line">    * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">D</span>  可选参数 D 的值为true，则该绑定在后续操作中可以被删除</span>
<span class="line">    */</span></span>
<span class="line">    <span class="token function">CreateMutableBinding</span><span class="token punctuation">(</span><span class="token parameter"><span class="token constant">N</span><span class="token punctuation">,</span> <span class="token constant">D</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">//令 envRec 为函数调用时对应的声明式环境记录项</span></span>
<span class="line">        <span class="token keyword">const</span> envRec <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">const</span> bindings <span class="token operator">=</span> envRec<span class="token punctuation">.</span>bindings<span class="token punctuation">;</span></span>
<span class="line">        <span class="token comment">//执行断言：envRec 没有 N 的绑定。</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">assert</span><span class="token punctuation">(</span><span class="token operator">!</span>bindings<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span><span class="token constant">N</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">const</span> configValue <span class="token operator">=</span> <span class="token constant">D</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token comment">//在 envRec 中为 N 创建一个可变绑定,并将绑定的值设置为 undefined</span></span>
<span class="line">        <span class="token comment">//如果 D 为 true 则新创建的绑定可在后续操作中通过调用 DeleteBinding 删除</span></span>
<span class="line">        Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>bindings<span class="token punctuation">,</span> <span class="token constant">N</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token literal-property property">configurable</span><span class="token operator">:</span> configValue<span class="token punctuation">,</span></span>
<span class="line">            <span class="token literal-property property">writable</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * 尝试设置其关联的绑定对象中名为 N 的属性的值为 V</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">N</span> 绑定名称</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">V</span> 绑定的值</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">S</span> S 用于指定是否为严格模式 当 S 为 true 并且该绑定不允许赋值时，则抛出一个 TypeError 异常</span>
<span class="line">     */</span></span>
<span class="line">    <span class="token function">SetMutableBinding</span><span class="token punctuation">(</span><span class="token parameter"><span class="token constant">N</span><span class="token punctuation">,</span> <span class="token constant">V</span><span class="token punctuation">,</span> <span class="token constant">S</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">//令 envRec 为函数调用时对应的声明式环境记录项</span></span>
<span class="line">        <span class="token keyword">const</span> envRec <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">const</span> bindings <span class="token operator">=</span> envRec<span class="token punctuation">.</span>bindings<span class="token punctuation">;</span></span>
<span class="line">        <span class="token comment">//执行断言：envRec 必须有 N 的绑定。</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">assert</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">HasBinding</span><span class="token punctuation">(</span><span class="token constant">N</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token comment">//否则该操作会尝试修改一个不可变绑定的值，因此如果 S 的值为 true，则抛出一个 TypeError 异常。</span></span>
<span class="line">        <span class="token keyword">const</span> propertyDescriptor <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyDescriptor</span><span class="token punctuation">(</span>bindings<span class="token punctuation">,</span> <span class="token constant">N</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token constant">S</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>propertyDescriptor<span class="token punctuation">.</span>writable<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&quot;TypeError: Assignment to constant variable.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token comment">//如果 envRec 中 N 的绑定为可变绑定，则将其值修改为 V</span></span>
<span class="line">        bindings<span class="token punctuation">[</span><span class="token constant">N</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token constant">V</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     *返回其关联的绑定对象中名为 N 的属性的值</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">N</span> 绑定的名称</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">S</span> 用于指定是否为严格模式 如果 S 的值为 true 并且该绑定不存在或未初始化，则抛出一个 ReferenceError 异常</span>
<span class="line">     */</span></span>
<span class="line">    <span class="token function">GetBindingValue</span><span class="token punctuation">(</span><span class="token parameter"><span class="token constant">N</span><span class="token punctuation">,</span> <span class="token constant">S</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">//令 envRec 为函数调用时对应的声明式环境记录项</span></span>
<span class="line">        <span class="token keyword">const</span> envRec <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">const</span> bindings <span class="token operator">=</span> envRec<span class="token punctuation">.</span>bindings<span class="token punctuation">;</span></span>
<span class="line">        <span class="token comment">//执行断言：envRec 必须有 N 的绑定。</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">assert</span><span class="token punctuation">(</span>bindings<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span><span class="token constant">N</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">变量</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token constant">N</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">尚未定义</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token comment">//如果 envRec 中 N 的绑定是一个未初始化的不可变绑定，则如果 S 为 false，返回 undefined，否则抛出一个 ReferenceError 异常。</span></span>
<span class="line">        <span class="token keyword">const</span> <span class="token constant">V</span> <span class="token operator">=</span> bindings<span class="token punctuation">[</span><span class="token constant">N</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">const</span> propertyDescriptor <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyDescriptor</span><span class="token punctuation">(</span>bindings<span class="token punctuation">,</span> <span class="token constant">N</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>propertyDescriptor<span class="token punctuation">.</span>uninitialized<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token constant">S</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token constant">V</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">ReferenceError: Cannot access &#39;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token constant">N</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&#39; before initialization</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token comment">//否则返回 envRec 中与 N 绑定的值</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token constant">V</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">    * 删除其关联的绑定对象上 [[Configurable]] 特性的值为 true 的属性所对应的绑定</span>
<span class="line">    * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">N</span> 绑定的名称 如果 N 指定的绑定存在，将其删除并返回 true。如果绑定存在但无法删除则返回false。如果绑定不存在则返回 true</span>
<span class="line">    */</span></span>
<span class="line">    <span class="token function">DeleteBinding</span><span class="token punctuation">(</span><span class="token parameter"><span class="token constant">N</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">//令 envRec 为函数调用时对应的声明式环境记录项</span></span>
<span class="line">        <span class="token keyword">const</span> envRec <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">const</span> bindings <span class="token operator">=</span> envRec<span class="token punctuation">.</span>bindings<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>bindings<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span><span class="token constant">N</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token keyword">const</span> propertyDescriptor <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyDescriptor</span><span class="token punctuation">(</span>bindings<span class="token punctuation">,</span> <span class="token constant">N</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>propertyDescriptor<span class="token punctuation">.</span>configurable<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token keyword">delete</span> bindings<span class="token punctuation">[</span><span class="token constant">N</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * 返回 undefined，除非其 provideThis 标识的值为 true。</span>
<span class="line">     */</span></span>
<span class="line">    <span class="token function">ImplicitThisValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">const</span> envRec <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>provideThis<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">return</span> envRec<span class="token punctuation">.</span>bindings<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> ObjectEnvironmentRecords<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-7-executioncontext-js" tabindex="-1"><a class="header-anchor" href="#_2-7-executioncontext-js"><span>2.7 ExecutionContext.js</span></a></h3><p>src\\ExecutionContext.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">class</span> <span class="token class-name">ExecutionContext</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">lexicalEnvironment<span class="token punctuation">,</span> thisBinding</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>variableEnvironment <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>lexicalEnvironment <span class="token operator">=</span> lexicalEnvironment<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>thisBinding <span class="token operator">=</span> thisBinding<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> ExecutionContext<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-8-ecstack-js" tabindex="-1"><a class="header-anchor" href="#_2-8-ecstack-js"><span>2.8 ECStack.js</span></a></h3><p>src\\ECStack.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">class</span> <span class="token class-name">ECStack</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>contexts <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token function">push</span><span class="token punctuation">(</span><span class="token parameter"><span class="token constant">EC</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>contexts<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token constant">EC</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">get</span> <span class="token function">current</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>contexts<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>contexts<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>contexts<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ECStack</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-注册函数" tabindex="-1"><a class="header-anchor" href="#_3-注册函数"><span>3. 注册函数</span></a></h2><h3 id="_3-1-functiondeclaration-js" tabindex="-1"><a class="header-anchor" href="#_3-1-functiondeclaration-js"><span>3.1 FunctionDeclaration.js</span></a></h3><p>src/FunctionDeclaration.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">class</span> <span class="token class-name">FunctionDeclaration</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">static</span> <span class="token function">createInstance</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> FormalParameterList<span class="token punctuation">,</span> FunctionBody<span class="token punctuation">,</span> Scope</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">//Strict 为布尔标记</span></span>
<span class="line">        <span class="token keyword">let</span> Strict <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token comment">//按照如下步骤构建函数对象</span></span>
<span class="line">        <span class="token comment">//创建一个新的 ECMAScript 原生对象，令 F 为此对象</span></span>
<span class="line">        <span class="token keyword">let</span> <span class="token constant">F</span> <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> fn <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token comment">//依照 8.12 描述设定 F 的除 [[Get]] 以外的所有内部方法</span></span>
<span class="line">        <span class="token comment">//设定 F 的 [[Class]] 内部属性为 &quot;Function&quot;。</span></span>
<span class="line">        <span class="token constant">F</span><span class="token punctuation">[</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string"> [[Class]]</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">]</span> <span class="token operator">=</span> Function<span class="token punctuation">;</span></span>
<span class="line">        <span class="token comment">//设定 F 的 [[Prototype]] 内部属性为 15.3.3.1 指定的标准内置 Function 对象的 prototype 属性</span></span>
<span class="line">        <span class="token comment">//F.__proto__=Function.prototype</span></span>
<span class="line">        <span class="token constant">F</span><span class="token punctuation">[</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">[[Prototype]]</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">;</span></span>
<span class="line">        <span class="token comment">//依照 15.3.5.4 描述，设定 F 的[[Get]] 内部属性</span></span>
<span class="line">        <span class="token comment">//依照 13.2.1 描述，设定 F 的[[Call]] 内部属性</span></span>
<span class="line">        <span class="token comment">//依照 13.2.2 描述，设定 F 的[[Construct]] 内部属性</span></span>
<span class="line">        <span class="token comment">//依照 15.3.5.3 描述，设定 F 的[[HasInstance]] 内部属性</span></span>
<span class="line">        <span class="token comment">//设定 F 的[[Scope]] 内部属性为 Scope 的值</span></span>
<span class="line">        <span class="token constant">F</span><span class="token punctuation">[</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">[[Scope]]</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">]</span> <span class="token operator">=</span> Scope<span class="token punctuation">;</span></span>
<span class="line">        <span class="token comment">//令 names 为一个列表容器，其中元素是以从左到右的文本顺序对应 FormalParameterList 的标识符的字符串。</span></span>
<span class="line">        <span class="token keyword">let</span> names <span class="token operator">=</span> FormalParameterList<span class="token punctuation">;</span></span>
<span class="line">        <span class="token comment">//设定 F 的 [[FormalParameters]] 内部属性为 names</span></span>
<span class="line">        <span class="token constant">F</span><span class="token punctuation">[</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">[[FormalParameters]]</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">]</span> <span class="token operator">=</span> names<span class="token punctuation">;</span></span>
<span class="line">        <span class="token comment">//设定 F 的 [[Code]] 内部属性为 FunctionBody</span></span>
<span class="line">        <span class="token constant">F</span><span class="token punctuation">[</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">[[Code]]</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">]</span> <span class="token operator">=</span> FunctionBody<span class="token punctuation">;</span></span>
<span class="line">        <span class="token comment">//设定 F 的 [[Extensible]] 内部属性为 true。</span></span>
<span class="line">        <span class="token constant">F</span><span class="token punctuation">[</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">[[Extensible]]</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token comment">//令 len 为 FormalParameterList 指定的形式参数的个数。如果没有指定参数，则令 len 为 0。</span></span>
<span class="line">        <span class="token keyword">let</span> len <span class="token operator">=</span> FormalParameterList<span class="token punctuation">.</span>length<span class="token punctuation">;</span></span>
<span class="line">        <span class="token comment">//以参数 &quot;length&quot;，属性描述符 {[[Value]]: len, [[Writable]]: false, [[Enumerable]]: false, [[Configurable]]: false}，false 调用 F 的 [[DefineOwnProperty]] 内部方法</span></span>
<span class="line">        Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span><span class="token constant">F</span><span class="token punctuation">,</span> <span class="token string">&#39;length&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> len<span class="token punctuation">,</span> <span class="token literal-property property">writable</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token literal-property property">configurable</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token comment">//令 proto 为仿佛使用 new Object() 表达式创建新对象的结果，其中 Object 是标准内置构造器名</span></span>
<span class="line">        <span class="token keyword">let</span> proto <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token comment">//以参数 &quot;constructor&quot;, 属性描述符 {[[Value]]: F, { [[Writable]]: true, [[Enumerable]]: false, [[Configurable]]: true}, false 调用 proto 的 [[DefineOwnProperty]] 内部方法。</span></span>
<span class="line">        Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>proto<span class="token punctuation">,</span> <span class="token string">&#39;constructor&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token constant">F</span><span class="token punctuation">,</span> <span class="token literal-property property">writable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token literal-property property">configurable</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token comment">//以参数 &quot;prototype&quot;, 属性描述符 {[[Value]]: proto, { [[Writable]]: true, [[Enumerable]]: false, [[Configurable]]: false}, false 调用 F 的 [[DefineOwnProperty]] 内部方法。</span></span>
<span class="line">        <span class="token comment">//每个函数都会自动创建一个 prototype 属性，以满足函数会被当作构造器的可能性</span></span>
<span class="line">        Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span><span class="token constant">F</span><span class="token punctuation">,</span> <span class="token string">&#39;prototype&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> proto<span class="token punctuation">,</span> <span class="token literal-property property">writable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token literal-property property">configurable</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token constant">F</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> FunctionDeclaration<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-global-run-js" tabindex="-1"><a class="header-anchor" href="#_3-2-global-run-js"><span>3.2 global.run.js</span></a></h3><p>src\\1.global.run.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">/**</span>
<span class="line">var a = 1;</span>
<span class="line">function one(c) {</span>
<span class="line">    var b = 2;</span>
<span class="line">    console.log(a, b,c);</span>
<span class="line">}</span>
<span class="line">one();</span>
<span class="line">*/</span>
<span class="line">const LexicalEnvironment = require(&#39;./LexicalEnvironment&#39;);</span>
<span class="line">const ExecutionContext = require(&#39;./ExecutionContext&#39;);</span>
<span class="line">const ECStack = require(&#39;./ECStack&#39;);</span>
<span class="line">+const FunctionDeclaration = require(&#39;./FunctionDeclaration&#39;);</span>
<span class="line"></span>
<span class="line">//1.将变量环境设置为全局环境 2.将词法环境设置为 全局环境</span>
<span class="line">const globalLexicalEnvironment = LexicalEnvironment.NewObjectEnvironment(global, null);</span>
<span class="line">const globalEC = new ExecutionContext(globalLexicalEnvironment, global);</span>
<span class="line">ECStack.push(globalEC);</span>
<span class="line"></span>
<span class="line">//令 env 为当前运行的执行环境的环境变量的 环境记录</span>
<span class="line">let env = ECStack.current.lexicalEnvironment.environmentRecord;</span>
<span class="line">//如果 code 是 eval 代码 ，则令 configurableBindings 为 true，否则令 configurableBindings 为 false。</span>
<span class="line">let configurableBindings = false;</span>
<span class="line">//如果代码是 严格模式下的代码 ，则令 strict 为 true，否则令 strict 为 false。</span>
<span class="line">let strict = false;</span>
<span class="line">//按源码顺序遍历 code，对于每一个 VariableDeclaration 和 VariableDeclarationNoIn 表达式：</span>
<span class="line">//令 dn 为 d 中的标识符。</span>
<span class="line">let dn = &#39;a&#39;;</span>
<span class="line">//以 dn 为参数，调用 env 的 HasBinding 具体方法，并令 varAlreadyDeclared 为调用的结果</span>
<span class="line">let varAlreadyDeclared = env.HasBinding(dn);</span>
<span class="line">//如果 varAlreadyDeclared 为 false，则：</span>
<span class="line">if (!varAlreadyDeclared) {</span>
<span class="line">    //以 dn 和 configurableBindings 为参数，调用 env 的 CreateMutableBinding 具体方法。</span>
<span class="line">    env.CreateMutableBinding(dn, configurableBindings);</span>
<span class="line">    //以 dn、undefined 和 strict 为参数，调用 env 的 SetMutableBinding 具体方法。</span>
<span class="line">    env.SetMutableBinding(dn, undefined, strict);</span>
<span class="line">}</span>
<span class="line">console.log(env.GetBindingValue(&#39;a&#39;));</span>
<span class="line"></span>
<span class="line">+//按源码顺序遍历 code，对于每一个 FunctionDeclaration 表达式 f：</span>
<span class="line">+//令 fn 为 FunctionDeclaration 表达式 f 中的 标识符</span>
<span class="line">+let fn = &#39;one&#39;;</span>
<span class="line">+//创建函数对象</span>
<span class="line">+//指定 FormalParameterList 为可选参数列表</span>
<span class="line">+let FormalParameterList = [&#39;c&#39;];</span>
<span class="line">+//指定 FunctionBody 为函数体</span>
<span class="line">+let FunctionBody = \`</span>
<span class="line">+    var b = 2;</span>
<span class="line">+    console.log(a, b);</span>
<span class="line">+\`;</span>
<span class="line">+//指定 Scope 为 词法环境</span>
<span class="line">+let Scope = ECStack.current.lexicalEnvironment;</span>
<span class="line">+//按 第 13 章 中所述的步骤初始化 FunctionDeclaration 表达式 ，并令 fo 为初始化的结果。</span>
<span class="line">+let fo = FunctionDeclaration.createInstance(fn, FormalParameterList, FunctionBody, Scope);</span>
<span class="line">+//以 fn 为参数，调用 env 的 HasBinding 具体方法，并令 argAlreadyDeclared 为调用的结果。</span>
<span class="line">+let argAlreadyDeclared = env.HasBinding(fn);</span>
<span class="line">+if (!argAlreadyDeclared) {</span>
<span class="line">+    env.CreateMutableBinding(fn, configurableBindings);</span>
<span class="line">+} else {</span>
<span class="line">+    //否则如果 env 是全局环境的 环境记录 对象，则</span>
<span class="line">+    //令 go 为全局对象。</span>
<span class="line">+    let go = global;</span>
<span class="line">+    //以 fn 为参数，调用 go 和 [[GetProperty]] 内部方法，并令 existingProp 为调用的结果。</span>
<span class="line">+    let existingProp = Object.getOwnPropertyDescriptor(go, fn);</span>
<span class="line">+    if (existingProp.configurable) {</span>
<span class="line">+        Object.defineProperty(go, fn, { value: undefined, writable: true, enumerable: true, configurable: +configurableBindings });</span>
<span class="line">+        if (!existingProp.writable) {</span>
<span class="line">+            throw new Error(\`TypeError\`);</span>
<span class="line">+        }</span>
<span class="line">+    }</span>
<span class="line">+}</span>
<span class="line">+env.SetMutableBinding(fn, fo, strict);</span>
<span class="line">+console.log(env.GetBindingValue(&#39;one&#39;));</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-执行全局代码和函数" tabindex="-1"><a class="header-anchor" href="#_4-执行全局代码和函数"><span>4. 执行全局代码和函数</span></a></h2><h3 id="_4-1-createargumentsobject-js" tabindex="-1"><a class="header-anchor" href="#_4-1-createargumentsobject-js"><span>4.1 CreateArgumentsObject.js</span></a></h3><p>src\\CreateArgumentsObject.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * Arguments 对象通过调用抽象方法 CreateArgumentsObject 创建，</span>
<span class="line"> * 调用时将以下参数传入：func, names, args, env, strict。</span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">func</span>  将要执行的函数对象作为 func 参数</span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">names</span>  将该函数的所有形参名加入一个 List 列表，作为 names 参数</span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">args</span> 将所有传给内部方法 [[Call]] 的实际参数作为 args 参数</span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">env</span> 将该函数代码的环境变量作为 env 参数</span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">strict</span> 将该函数代码是否为严格代码作为strict 参数</span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">CreateArgumentsObject</span><span class="token punctuation">(</span><span class="token parameter">func<span class="token punctuation">,</span> names<span class="token punctuation">,</span> args<span class="token punctuation">,</span> env<span class="token punctuation">,</span> strict</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">//令 len 为参数 args 的元素个数</span></span>
<span class="line">    <span class="token keyword">let</span> len <span class="token operator">=</span> args<span class="token punctuation">.</span>length<span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">//令 obj 为一个新建的 ECMAScript 对象</span></span>
<span class="line">    <span class="token comment">//按照 8.12 章节中的规范去设定 obj 对象的所有内部方法</span></span>
<span class="line">    <span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">//将 obj 对象的内部属性 [[Class]] 设置为 &quot;Arguments&quot;</span></span>
<span class="line">    obj<span class="token punctuation">[</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">[[Class]]</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;Arguments&#39;</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">//令 Object 为标准的内置对象的构造函数 (15.2.2)</span></span>
<span class="line">    obj<span class="token punctuation">.</span>constructor <span class="token operator">=</span> Object<span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">//将 obj 对象的内部属性 [[Prototype]] 设置为标准的内置对象的原型对象</span></span>
<span class="line">    obj<span class="token punctuation">[</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">[[Prototype]]</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">//调用 obj 的内部方法 [[DefineOwnProperty]]，将 &quot;length&quot; 传递进去，属性描述符为：{[[Value]]: len, [[Writable]]: true, [[Enumerable]]: false, [[Configurable]]: true}，参数为 false</span></span>
<span class="line">    Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">&#39;length&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">value</span><span class="token operator">:</span> len<span class="token punctuation">,</span> <span class="token literal-property property">writable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token literal-property property">configurable</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">let</span> indx <span class="token operator">=</span> len <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">while</span> <span class="token punctuation">(</span>indx <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">let</span> val <span class="token operator">=</span> args<span class="token punctuation">[</span>indx<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">        Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> indx<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> val<span class="token punctuation">,</span> <span class="token literal-property property">writable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">configurable</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        indx <span class="token operator">=</span> indx <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">return</span> obj<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> CreateArgumentsObject<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-global-run-js" tabindex="-1"><a class="header-anchor" href="#_4-2-global-run-js"><span>4.2 global.run.js</span></a></h3><p>src\\1.global.run.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">/**</span>
<span class="line">var a = 1;</span>
<span class="line">function one(c) {</span>
<span class="line">    var b = 2;</span>
<span class="line">    console.log(a, b,c);</span>
<span class="line">}</span>
<span class="line">one();</span>
<span class="line">*/</span>
<span class="line">const LexicalEnvironment = require(&#39;./LexicalEnvironment&#39;);</span>
<span class="line">const ExecutionContext = require(&#39;./ExecutionContext&#39;);</span>
<span class="line">const ECStack = require(&#39;./ECStack&#39;);</span>
<span class="line">const FunctionDeclaration = require(&#39;./FunctionDeclaration&#39;);</span>
<span class="line">+const CreateArgumentsObject = require(&#39;./CreateArgumentsObject&#39;);</span>
<span class="line"></span>
<span class="line">//1.将变量环境设置为全局环境 2.将词法环境设置为 全局环境</span>
<span class="line">const globalLexicalEnvironment = LexicalEnvironment.NewObjectEnvironment(global, null);</span>
<span class="line">const globalEC = new ExecutionContext(globalLexicalEnvironment, global);</span>
<span class="line">ECStack.push(globalEC);</span>
<span class="line"></span>
<span class="line">//令 env 为当前运行的执行环境的环境变量的 环境记录</span>
<span class="line">let env = ECStack.current.lexicalEnvironment.environmentRecord;</span>
<span class="line">//如果 code 是 eval 代码 ，则令 configurableBindings 为 true，否则令 configurableBindings 为 false。</span>
<span class="line">let configurableBindings = false;</span>
<span class="line">//如果代码是 严格模式下的代码 ，则令 strict 为 true，否则令 strict 为 false。</span>
<span class="line">let strict = false;</span>
<span class="line">//按源码顺序遍历 code，对于每一个 VariableDeclaration 和 VariableDeclarationNoIn 表达式：</span>
<span class="line">//令 dn 为 d 中的标识符。</span>
<span class="line">let dn = &#39;a&#39;;</span>
<span class="line">//以 dn 为参数，调用 env 的 HasBinding 具体方法，并令 varAlreadyDeclared 为调用的结果</span>
<span class="line">let varAlreadyDeclared = env.HasBinding(dn);</span>
<span class="line">//如果 varAlreadyDeclared 为 false，则：</span>
<span class="line">if (!varAlreadyDeclared) {</span>
<span class="line">    //以 dn 和 configurableBindings 为参数，调用 env 的 CreateMutableBinding 具体方法。</span>
<span class="line">    env.CreateMutableBinding(dn, configurableBindings);</span>
<span class="line">    //以 dn、undefined 和 strict 为参数，调用 env 的 SetMutableBinding 具体方法。</span>
<span class="line">    env.SetMutableBinding(dn, undefined, strict);</span>
<span class="line">}</span>
<span class="line">console.log(env.GetBindingValue(&#39;a&#39;));//undefined</span>
<span class="line"></span>
<span class="line">//按源码顺序遍历 code，对于每一个 FunctionDeclaration 表达式 f：</span>
<span class="line">//令 fn 为 FunctionDeclaration 表达式 f 中的 标识符</span>
<span class="line">let fn = &#39;one&#39;;</span>
<span class="line">//创建函数对象</span>
<span class="line">//指定 FormalParameterList 为可选参数列表</span>
<span class="line">let FormalParameterList = [&#39;c&#39;];</span>
<span class="line">//指定 FunctionBody 为函数体</span>
<span class="line">let FunctionBody = \`</span>
<span class="line">    var b = 2;</span>
<span class="line">    console.log(a, b);</span>
<span class="line">\`;</span>
<span class="line">//指定 Scope 为 词法环境</span>
<span class="line">let Scope = ECStack.current.lexicalEnvironment;</span>
<span class="line">//按 第 13 章 中所述的步骤初始化 FunctionDeclaration 表达式 ，并令 fo 为初始化的结果。</span>
<span class="line">let fo = FunctionDeclaration.createInstance(fn, FormalParameterList, FunctionBody, Scope);</span>
<span class="line">//以 fn 为参数，调用 env 的 HasBinding 具体方法，并令 argAlreadyDeclared 为调用的结果。</span>
<span class="line">let argAlreadyDeclared = env.HasBinding(fn);</span>
<span class="line">if (!argAlreadyDeclared) {</span>
<span class="line">    env.CreateMutableBinding(fn, configurableBindings);</span>
<span class="line">} else {</span>
<span class="line">    //否则如果 env 是全局环境的 环境记录 对象，则</span>
<span class="line">    //令 go 为全局对象。</span>
<span class="line">    let go = global;</span>
<span class="line">    //以 fn 为参数，调用 go 和 [[GetProperty]] 内部方法，并令 existingProp 为调用的结果。</span>
<span class="line">    let existingProp = Object.getOwnPropertyDescriptor(go, fn);</span>
<span class="line">    if (existingProp.configurable) {</span>
<span class="line">        Object.defineProperty(go, fn, { value: undefined, writable: true, enumerable: true, configurable: configurableBindings });</span>
<span class="line">        if (!existingProp.writable) {</span>
<span class="line">            throw new Error(\`TypeError\`);</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line">env.SetMutableBinding(fn, fo, strict);</span>
<span class="line">//console.log(env.GetBindingValue(&#39;one&#39;));//1</span>
<span class="line"></span>
<span class="line">+// 给a赋值为1</span>
<span class="line">+env.SetMutableBinding(&#39;a&#39;, 1);</span>
<span class="line">+console.log(env.GetBindingValue(&#39;a&#39;));//1</span>
<span class="line">+//进入函数代码</span>
<span class="line">+//当控制流根据一个函数对象 F、调用者提供的 thisArg 以及调用者提供的 argumentList，进入 函数代码 的执行环境时，执行以下步+骤：</span>
<span class="line">+let thisArg = global;</span>
<span class="line">+let argumentList = [3];</span>
<span class="line">+//以 F 的 [[Scope]] 内部属性为参数调用 NewDeclarativeEnvironment，并令 localEnv 为调用的结果</span>
<span class="line">+let localEnv = LexicalEnvironment.NewDeclarativeEnvironment(fo[\`[[Scope]]\`]);</span>
<span class="line">+//设词法环境为 localEnv 设变量环境为 localEnv</span>
<span class="line">+let oneExecutionContext = new ExecutionContext(localEnv, thisArg);</span>
<span class="line">+ECStack.push(oneExecutionContext);</span>
<span class="line"> +//按 [10.5](</span>
<span class="line">+env = ECStack.current.lexicalEnvironment.environmentRecord;</span>
<span class="line">+configurableBindings = false;</span>
<span class="line">+strict = false;</span>
<span class="line">+//令 func 为通过 [[Call]] 内部属性初始化 code 的执行的函数对象</span>
<span class="line">+let func = fo;</span>
<span class="line">+//令 code 为 F 的 [[Code]] 内部属性的值。</span>
<span class="line">+let code = func[\`[[Code]]\`];</span>
<span class="line">+//令 names 为 func 的 [[FormalParameters]] 内部属性。</span>
<span class="line">+names = func[\`[[FormalParameters]]\`];</span>
<span class="line">+let args = [3];</span>
<span class="line">+//令 argCount 为 args 中元素的数量</span>
<span class="line">+let argCount = args.length;</span>
<span class="line">+let n = 0;</span>
<span class="line">+names.forEach(argName =&gt; {</span>
<span class="line">+    n += 1;</span>
<span class="line">+    let v = n &gt; argCount ? undefined : args[n - 1];</span>
<span class="line">+    //以 argName 为参数，调用 env 的 HasBinding 具体方法，并令 argAlreadyDeclared 为调用的结果。</span>
<span class="line">+    argAlreadyDeclared = env.HasBinding(argName);</span>
<span class="line">+    if (!argAlreadyDeclared) {</span>
<span class="line">+        env.CreateMutableBinding(argName);</span>
<span class="line">+    }</span>
<span class="line">+    env.SetMutableBinding(argName, v, strict);</span>
<span class="line">+});</span>
<span class="line">+let argumentsAlreadyDeclared = env.HasBinding(&#39;arguments&#39;);</span>
<span class="line">+if (!argumentsAlreadyDeclared) {</span>
<span class="line">+    let argsObj = CreateArgumentsObject(func, names, args, env, strict);</span>
<span class="line">+    env.CreateMutableBinding(&#39;arguments&#39;);</span>
<span class="line">+    env.SetMutableBinding(&#39;arguments&#39;, argsObj);</span>
<span class="line">+}</span>
<span class="line">+</span>
<span class="line">+dn = &#39;b&#39;;</span>
<span class="line">+//以 dn 为参数，调用 env 的 HasBinding 具体方法，并令 varAlreadyDeclared 为调用的结果</span>
<span class="line">+varAlreadyDeclared = env.HasBinding(dn);</span>
<span class="line">+//如果 varAlreadyDeclared 为 false，则：</span>
<span class="line">+if (!varAlreadyDeclared) {</span>
<span class="line">+    //以 dn 和 configurableBindings 为参数，调用 env 的 CreateMutableBinding 具体方法。</span>
<span class="line">+    env.CreateMutableBinding(dn, configurableBindings);</span>
<span class="line">+    //以 dn、undefined 和 strict 为参数，调用 env 的 SetMutableBinding 具体方法。</span>
<span class="line">+    env.SetMutableBinding(dn, undefined, strict);</span>
<span class="line">+}</span>
<span class="line">+env.SetMutableBinding(dn, 2);</span>
<span class="line">+</span>
<span class="line">+console.log(env.GetBindingValue(&#39;arguments&#39;));//[&#39;3&#39;]</span>
<span class="line">+</span>
<span class="line">+console.log(</span>
<span class="line">+    LexicalEnvironment.GetIdentifierReference(ECStack.current.lexicalEnvironment, &#39;a&#39;),</span>
<span class="line">+    LexicalEnvironment.GetIdentifierReference(ECStack.current.lexicalEnvironment, &#39;b&#39;),</span>
<span class="line">+    LexicalEnvironment.GetIdentifierReference(ECStack.current.lexicalEnvironment, &#39;c&#39;)</span>
<span class="line">+);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-块级作用域" tabindex="-1"><a class="header-anchor" href="#_5-块级作用域"><span>5. 块级作用域</span></a></h2><ul><li><a href="https://www.processon.com/diagraming/61beb9795653bb5a3e2b12fa" target="_blank" rel="noopener noreferrer">块级作用域</a></li></ul><p><img src="https://static.zhufengpeixun.com/2_zhi_chi_kuai_ji_zuo_yong_yu_3_1642179970127.jpg" alt=""></p><h3 id="_5-1-block-js" tabindex="-1"><a class="header-anchor" href="#_5-1-block-js"><span>5.1 block.js</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">one</span><span class="token punctuation">(</span><span class="token parameter">c</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">,</span> e <span class="token doc-comment comment">/**,f*/</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">let</span> d <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">let</span> d <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">var</span> e <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">let</span> f <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">;</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">,</span> d<span class="token punctuation">,</span> e<span class="token punctuation">,</span> f<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token function">one</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-2-block-run-js" tabindex="-1"><a class="header-anchor" href="#_5-2-block-run-js"><span>5.2 block.run.js</span></a></h3><p>src\\block.run.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">/**</span>
<span class="line">var a = 1;</span>
<span class="line">function one(c) {</span>
<span class="line">    var b = 2;</span>
<span class="line">    console.log(a, b, c, e);</span>
<span class="line">    let d = 4;</span>
<span class="line">    {</span>
<span class="line">        let d = 5;</span>
<span class="line">        var e = 6;</span>
<span class="line">        console.log(a, b, c, d, e);</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line">one(3);</span>
<span class="line">*/</span>
<span class="line">const LexicalEnvironment = require(&#39;./LexicalEnvironment&#39;);</span>
<span class="line">const ExecutionContext = require(&#39;./ExecutionContext&#39;);</span>
<span class="line">const ECStack = require(&#39;./ECStack&#39;);</span>
<span class="line">const FunctionDeclaration = require(&#39;./FunctionDeclaration&#39;);</span>
<span class="line">const CreateArgumentsObject = require(&#39;./CreateArgumentsObject&#39;);</span>
<span class="line"></span>
<span class="line">//1.将变量环境设置为全局环境 2.将词法环境设置为 全局环境</span>
<span class="line">const globalLexicalEnvironment = LexicalEnvironment.NewObjectEnvironment(global, null);</span>
<span class="line">const globalEC = new ExecutionContext(globalLexicalEnvironment, global);</span>
<span class="line">ECStack.push(globalEC);</span>
<span class="line"></span>
<span class="line">//令 env 为当前运行的执行环境的环境变量的 环境记录</span>
<span class="line">let env = ECStack.current.lexicalEnvironment.environmentRecord;</span>
<span class="line">//如果 code 是 eval 代码 ，则令 configurableBindings 为 true，否则令 configurableBindings 为 false。</span>
<span class="line">let configurableBindings = false;</span>
<span class="line">//如果代码是 严格模式下的代码 ，则令 strict 为 true，否则令 strict 为 false。</span>
<span class="line">let strict = false;</span>
<span class="line">//按源码顺序遍历 code，对于每一个 VariableDeclaration 和 VariableDeclarationNoIn 表达式：</span>
<span class="line">//令 dn 为 d 中的标识符。</span>
<span class="line">let dn = &#39;a&#39;;</span>
<span class="line">//以 dn 为参数，调用 env 的 HasBinding 具体方法，并令 varAlreadyDeclared 为调用的结果</span>
<span class="line">let varAlreadyDeclared = env.HasBinding(dn);</span>
<span class="line">//如果 varAlreadyDeclared 为 false，则：</span>
<span class="line">if (!varAlreadyDeclared) {</span>
<span class="line">    //以 dn 和 configurableBindings 为参数，调用 env 的 CreateMutableBinding 具体方法。</span>
<span class="line">    env.CreateMutableBinding(dn, configurableBindings);</span>
<span class="line">    //以 dn、undefined 和 strict 为参数，调用 env 的 SetMutableBinding 具体方法。</span>
<span class="line">    env.SetMutableBinding(dn, undefined, strict);</span>
<span class="line">}</span>
<span class="line">console.log(env.GetBindingValue(&#39;a&#39;));//undefined</span>
<span class="line"></span>
<span class="line">//按源码顺序遍历 code，对于每一个 FunctionDeclaration 表达式 f：</span>
<span class="line">//令 fn 为 FunctionDeclaration 表达式 f 中的 标识符</span>
<span class="line">let fn = &#39;one&#39;;</span>
<span class="line">//创建函数对象</span>
<span class="line">//指定 FormalParameterList 为可选参数列表</span>
<span class="line">let FormalParameterList = [&#39;c&#39;];</span>
<span class="line">//指定 FunctionBody 为函数体</span>
<span class="line">let FunctionBody = \`</span>
<span class="line">    var b = 2;</span>
<span class="line">    console.log(a, b);</span>
<span class="line">\`;</span>
<span class="line">//指定 Scope 为 词法环境</span>
<span class="line">let Scope = ECStack.current.lexicalEnvironment;</span>
<span class="line">//按 第 13 章 中所述的步骤初始化 FunctionDeclaration 表达式 ，并令 fo 为初始化的结果。</span>
<span class="line">let fo = FunctionDeclaration.createInstance(fn, FormalParameterList, FunctionBody, Scope);</span>
<span class="line">//以 fn 为参数，调用 env 的 HasBinding 具体方法，并令 argAlreadyDeclared 为调用的结果。</span>
<span class="line">let argAlreadyDeclared = env.HasBinding(fn);</span>
<span class="line">if (!argAlreadyDeclared) {</span>
<span class="line">    env.CreateMutableBinding(fn, configurableBindings);</span>
<span class="line">} else {</span>
<span class="line">    //否则如果 env 是全局环境的 环境记录 对象，则</span>
<span class="line">    //令 go 为全局对象。</span>
<span class="line">    let go = global;</span>
<span class="line">    //以 fn 为参数，调用 go 和 [[GetProperty]] 内部方法，并令 existingProp 为调用的结果。</span>
<span class="line">    let existingProp = Object.getOwnPropertyDescriptor(go, fn);</span>
<span class="line">    if (existingProp.configurable) {</span>
<span class="line">        Object.defineProperty(go, fn, { value: undefined, writable: true, enumerable: true, configurable: configurableBindings });</span>
<span class="line">        if (!existingProp.writable) {</span>
<span class="line">            throw new Error(\`TypeError\`);</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line">env.SetMutableBinding(fn, fo, strict);</span>
<span class="line">//console.log(env.GetBindingValue(&#39;one&#39;));//1</span>
<span class="line"></span>
<span class="line">// 给a赋值为1</span>
<span class="line">env.SetMutableBinding(&#39;a&#39;, 1);</span>
<span class="line">console.log(env.GetBindingValue(&#39;a&#39;));//1</span>
<span class="line">//进入函数代码</span>
<span class="line">//当控制流根据一个函数对象 F、调用者提供的 thisArg 以及调用者提供的 argumentList，进入 函数代码 的执行环境时，执行以下步骤：</span>
<span class="line">let thisArg = global;</span>
<span class="line">let argumentList = [3];</span>
<span class="line">//以 F 的 [[Scope]] 内部属性为参数调用 NewDeclarativeEnvironment，并令 localEnv 为调用的结果</span>
<span class="line">let localEnv = LexicalEnvironment.NewDeclarativeEnvironment(fo[\`[[Scope]]\`]);</span>
<span class="line">//设词法环境为 localEnv 设变量环境为 localEnv</span>
<span class="line">let oneExecutionContext = new ExecutionContext(localEnv, thisArg);</span>
<span class="line">ECStack.push(oneExecutionContext);</span>
<span class="line"> //按 [10.5](</span>
<span class="line">env = ECStack.current.lexicalEnvironment.environmentRecord;</span>
<span class="line">configurableBindings = false;</span>
<span class="line">strict = false;</span>
<span class="line">//令 func 为通过 [[Call]] 内部属性初始化 code 的执行的函数对象</span>
<span class="line">let func = fo;</span>
<span class="line">//令 code 为 F 的 [[Code]] 内部属性的值。</span>
<span class="line">let code = func[\`[[Code]]\`];</span>
<span class="line">//令 names 为 func 的 [[FormalParameters]] 内部属性。</span>
<span class="line">names = func[\`[[FormalParameters]]\`];</span>
<span class="line">let args = [3];</span>
<span class="line">//令 argCount 为 args 中元素的数量</span>
<span class="line">let argCount = args.length;</span>
<span class="line">let n = 0;</span>
<span class="line">names.forEach(argName =&gt; {</span>
<span class="line">    n += 1;</span>
<span class="line">    let v = n &gt; argCount ? undefined : args[n - 1];</span>
<span class="line">    //以 argName 为参数，调用 env 的 HasBinding 具体方法，并令 argAlreadyDeclared 为调用的结果。</span>
<span class="line">    argAlreadyDeclared = env.HasBinding(argName);</span>
<span class="line">    if (!argAlreadyDeclared) {</span>
<span class="line">        env.CreateMutableBinding(argName);</span>
<span class="line">    }</span>
<span class="line">    env.SetMutableBinding(argName, v, strict);</span>
<span class="line">});</span>
<span class="line">let argumentsAlreadyDeclared = env.HasBinding(&#39;arguments&#39;);</span>
<span class="line">if (!argumentsAlreadyDeclared) {</span>
<span class="line">    let argsObj = CreateArgumentsObject(func, names, args, env, strict);</span>
<span class="line">    env.CreateMutableBinding(&#39;arguments&#39;);</span>
<span class="line">    env.SetMutableBinding(&#39;arguments&#39;, argsObj);</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">dn = &#39;b&#39;;</span>
<span class="line">//以 dn 为参数，调用 env 的 HasBinding 具体方法，并令 varAlreadyDeclared 为调用的结果</span>
<span class="line">varAlreadyDeclared = env.HasBinding(dn);</span>
<span class="line">//如果 varAlreadyDeclared 为 false，则：</span>
<span class="line">if (!varAlreadyDeclared) {</span>
<span class="line">    //以 dn 和 configurableBindings 为参数，调用 env 的 CreateMutableBinding 具体方法。</span>
<span class="line">    env.CreateMutableBinding(dn, configurableBindings);</span>
<span class="line">    //以 dn、undefined 和 strict 为参数，调用 env 的 SetMutableBinding 具体方法。</span>
<span class="line">    env.SetMutableBinding(dn, undefined, strict);</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">+dn = &#39;e&#39;;</span>
<span class="line">+//以 dn 为参数，调用 env 的 HasBinding 具体方法，并令 varAlreadyDeclared 为调用的结果</span>
<span class="line">+varAlreadyDeclared = env.HasBinding(dn);</span>
<span class="line">+//如果 varAlreadyDeclared 为 false，则：</span>
<span class="line">+if (!varAlreadyDeclared) {</span>
<span class="line">+    //以 dn 和 configurableBindings 为参数，调用 env 的 CreateMutableBinding 具体方法。</span>
<span class="line">+    env.CreateMutableBinding(dn, configurableBindings);</span>
<span class="line">+    //以 dn、undefined 和 strict 为参数，调用 env 的 SetMutableBinding 具体方法。</span>
<span class="line">+    env.SetMutableBinding(dn, undefined, strict);</span>
<span class="line">+}</span>
<span class="line">+</span>
<span class="line">+localEnv = LexicalEnvironment.NewDeclarativeEnvironment(ECStack.current.variableEnvironment);</span>
<span class="line">+env = localEnv.environmentRecord;</span>
<span class="line">+dn = &#39;d&#39;;</span>
<span class="line">+//以 dn 为参数，调用 env 的 HasBinding 具体方法，并令 varAlreadyDeclared 为调用的结果</span>
<span class="line">+varAlreadyDeclared = env.HasBinding(dn);</span>
<span class="line">+//如果 varAlreadyDeclared 为 false，则：</span>
<span class="line">+if (!varAlreadyDeclared) {</span>
<span class="line">+    //以 dn 和 configurableBindings 为参数，调用 env 的 CreateMutableBinding 具体方法。</span>
<span class="line">+    env.CreateMutableBinding(dn, configurableBindings);</span>
<span class="line">+    //以 dn、undefined 和 strict 为参数，调用 env 的 SetMutableBinding 具体方法。</span>
<span class="line">+    env.SetMutableBinding(dn, undefined, strict);</span>
<span class="line">+}</span>
<span class="line">+ECStack.current.lexicalEnvironment = localEnv;</span>
<span class="line">+//开始执行one</span>
<span class="line">+ECStack.current.variableEnvironment.environmentRecord.SetMutableBinding(&#39;b&#39;, 2);</span>
<span class="line">+console.log(</span>
<span class="line">+    &#39;a=&#39; + LexicalEnvironment.GetIdentifierReference(ECStack.current.lexicalEnvironment, &#39;a&#39;).name,</span>
<span class="line">+    &#39;b=&#39; + LexicalEnvironment.GetIdentifierReference(ECStack.current.lexicalEnvironment, &#39;b&#39;).name,</span>
<span class="line">+    &#39;c=&#39; + LexicalEnvironment.GetIdentifierReference(ECStack.current.lexicalEnvironment, &#39;c&#39;).name,</span>
<span class="line">+    &#39;e=&#39; + LexicalEnvironment.GetIdentifierReference(ECStack.current.lexicalEnvironment, &#39;e&#39;).name,</span>
<span class="line">+    //LexicalEnvironment.GetIdentifierReference(ECStack.current.lexicalEnvironment, &#39;f&#39;)</span>
<span class="line">+);</span>
<span class="line">+ECStack.current.variableEnvironment.environmentRecord.SetMutableBinding(&#39;d&#39;, 4);</span>
<span class="line">+</span>
<span class="line">+localEnv = LexicalEnvironment.NewDeclarativeEnvironment(ECStack.current.variableEnvironment);</span>
<span class="line">+ECStack.current.lexicalEnvironment = localEnv;</span>
<span class="line">+env = localEnv.environmentRecord;</span>
<span class="line">+dn = &#39;d&#39;;</span>
<span class="line">+//以 dn 为参数，调用 env 的 HasBinding 具体方法，并令 varAlreadyDeclared 为调用的结果</span>
<span class="line">+varAlreadyDeclared = env.HasBinding(dn);</span>
<span class="line">+//如果 varAlreadyDeclared 为 false，则：</span>
<span class="line">+if (!varAlreadyDeclared) {</span>
<span class="line">+    //以 dn 和 configurableBindings 为参数，调用 env 的 CreateMutableBinding 具体方法。</span>
<span class="line">+    env.CreateMutableBinding(dn, configurableBindings);</span>
<span class="line">+    //以 dn、undefined 和 strict 为参数，调用 env 的 SetMutableBinding 具体方法。</span>
<span class="line">+    env.SetMutableBinding(dn, undefined, strict);</span>
<span class="line">+}</span>
<span class="line">+dn = &#39;f&#39;;</span>
<span class="line">+//以 dn 为参数，调用 env 的 HasBinding 具体方法，并令 varAlreadyDeclared 为调用的结果</span>
<span class="line">+varAlreadyDeclared = env.HasBinding(dn);</span>
<span class="line">+//如果 varAlreadyDeclared 为 false，则：</span>
<span class="line">+if (!varAlreadyDeclared) {</span>
<span class="line">+    //以 dn 和 configurableBindings 为参数，调用 env 的 CreateMutableBinding 具体方法。</span>
<span class="line">+    env.CreateMutableBinding(dn, configurableBindings);</span>
<span class="line">+    //以 dn、undefined 和 strict 为参数，调用 env 的 SetMutableBinding 具体方法。</span>
<span class="line">+    env.SetMutableBinding(dn, undefined, strict);</span>
<span class="line">+}</span>
<span class="line">+ECStack.current.lexicalEnvironment.environmentRecord.SetMutableBinding(&#39;d&#39;, 5);</span>
<span class="line">+ECStack.current.variableEnvironment.environmentRecord.SetMutableBinding(&#39;e&#39;, 6);</span>
<span class="line">+ECStack.current.lexicalEnvironment.environmentRecord.SetMutableBinding(&#39;f&#39;, 7);</span>
<span class="line">+console.log(</span>
<span class="line">+    &#39;a=&#39; + LexicalEnvironment.GetIdentifierReference(ECStack.current.lexicalEnvironment, &#39;a&#39;).name,</span>
<span class="line">+    &#39;b=&#39; + LexicalEnvironment.GetIdentifierReference(ECStack.current.lexicalEnvironment, &#39;b&#39;).name,</span>
<span class="line">+    &#39;c=&#39; + LexicalEnvironment.GetIdentifierReference(ECStack.current.lexicalEnvironment, &#39;c&#39;).name,</span>
<span class="line">+    &#39;d=&#39; + LexicalEnvironment.GetIdentifierReference(ECStack.current.lexicalEnvironment, &#39;d&#39;).name,</span>
<span class="line">+    &#39;e=&#39; + LexicalEnvironment.GetIdentifierReference(ECStack.current.lexicalEnvironment, &#39;e&#39;).name,</span>
<span class="line">+    &#39;f=&#39; + LexicalEnvironment.GetIdentifierReference(ECStack.current.lexicalEnvironment, &#39;f&#39;).name</span>
<span class="line">+);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-闭包" tabindex="-1"><a class="header-anchor" href="#_6-闭包"><span>6. 闭包</span></a></h2><ul><li><a href="https://www.processon.com/diagraming/61bebb770e3e74525cd0137b" target="_blank" rel="noopener noreferrer">闭包</a></li></ul><p><img src="https://static.zhufengpeixun.com/3_biao_zhun_bi_bao_3_1642179702731.jpg" alt=""></p><h3 id="_6-1-closure-js" tabindex="-1"><a class="header-anchor" href="#_6-1-closure-js"><span>6.1 closure.js</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">one</span><span class="token punctuation">(</span><span class="token parameter">c</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span></span>
<span class="line">   <span class="token keyword">function</span> <span class="token function">two</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">       console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>b<span class="token punctuation">,</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">   <span class="token punctuation">}</span></span>
<span class="line">   <span class="token keyword">return</span> two<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">var</span> two <span class="token operator">=</span> <span class="token function">one</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">two</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-2-closure-run-js" tabindex="-1"><a class="header-anchor" href="#_6-2-closure-run-js"><span>6.2 closure.run.js</span></a></h3><p>closure.run.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">/**</span>
<span class="line">var a = 1;</span>
<span class="line">function one(c) {</span>
<span class="line">    var b = 2;</span>
<span class="line">    return function two() {</span>
<span class="line">        console.log(a, b, c);</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line">var two = one(3);</span>
<span class="line">two();</span>
<span class="line">*/</span>
<span class="line">const LexicalEnvironment = require(&#39;./LexicalEnvironment&#39;);</span>
<span class="line">const ExecutionContext = require(&#39;./ExecutionContext&#39;);</span>
<span class="line">const ECStack = require(&#39;./ECStack&#39;);</span>
<span class="line">const FunctionDeclaration = require(&#39;./FunctionDeclaration&#39;);</span>
<span class="line">const CreateArgumentsObject = require(&#39;./CreateArgumentsObject&#39;);</span>
<span class="line"></span>
<span class="line">//1.将变量环境设置为全局环境 2.将词法环境设置为 全局环境</span>
<span class="line">const globalLexicalEnvironment = LexicalEnvironment.NewObjectEnvironment(global, null);</span>
<span class="line">const globalEC = new ExecutionContext(globalLexicalEnvironment, global);</span>
<span class="line">ECStack.push(globalEC);</span>
<span class="line"></span>
<span class="line">//令 env 为当前运行的执行环境的环境变量的 环境记录</span>
<span class="line">let env = ECStack.current.lexicalEnvironment.environmentRecord;</span>
<span class="line">//如果 code 是 eval 代码 ，则令 configurableBindings 为 true，否则令 configurableBindings 为 false。</span>
<span class="line">let configurableBindings = false;</span>
<span class="line">//如果代码是 严格模式下的代码 ，则令 strict 为 true，否则令 strict 为 false。</span>
<span class="line">let strict = false;</span>
<span class="line">//按源码顺序遍历 code，对于每一个 VariableDeclaration 和 VariableDeclarationNoIn 表达式：</span>
<span class="line">//令 dn 为 d 中的标识符。</span>
<span class="line">let dn = &#39;a&#39;;</span>
<span class="line">//以 dn 为参数，调用 env 的 HasBinding 具体方法，并令 varAlreadyDeclared 为调用的结果</span>
<span class="line">let varAlreadyDeclared = env.HasBinding(dn);</span>
<span class="line">//如果 varAlreadyDeclared 为 false，则：</span>
<span class="line">if (!varAlreadyDeclared) {</span>
<span class="line">    //以 dn 和 configurableBindings 为参数，调用 env 的 CreateMutableBinding 具体方法。</span>
<span class="line">    env.CreateMutableBinding(dn, configurableBindings);</span>
<span class="line">    //以 dn、undefined 和 strict 为参数，调用 env 的 SetMutableBinding 具体方法。</span>
<span class="line">    env.SetMutableBinding(dn, undefined, strict);</span>
<span class="line">}</span>
<span class="line">//console.log(env.GetBindingValue(&#39;a&#39;));//undefined</span>
<span class="line">+dn = &#39;two&#39;;</span>
<span class="line">+//以 dn 为参数，调用 env 的 HasBinding 具体方法，并令 varAlreadyDeclared 为调用的结果</span>
<span class="line">+varAlreadyDeclared = env.HasBinding(dn);</span>
<span class="line">+//如果 varAlreadyDeclared 为 false，则：</span>
<span class="line">+if (!varAlreadyDeclared) {</span>
<span class="line">+    //以 dn 和 configurableBindings 为参数，调用 env 的 CreateMutableBinding 具体方法。</span>
<span class="line">+    env.CreateMutableBinding(dn, configurableBindings);</span>
<span class="line">+    //以 dn、undefined 和 strict 为参数，调用 env 的 SetMutableBinding 具体方法。</span>
<span class="line">+    env.SetMutableBinding(dn, undefined, strict);</span>
<span class="line">+}</span>
<span class="line">//console.log(env.GetBindingValue(dn));//undefined</span>
<span class="line"></span>
<span class="line">//按源码顺序遍历 code，对于每一个 FunctionDeclaration 表达式 f：</span>
<span class="line">//令 fn 为 FunctionDeclaration 表达式 f 中的 标识符</span>
<span class="line">let fn = &#39;one&#39;;</span>
<span class="line">//创建函数对象</span>
<span class="line">//指定 FormalParameterList 为可选参数列表</span>
<span class="line">let FormalParameterList = [&#39;c&#39;];</span>
<span class="line">//指定 FunctionBody 为函数体</span>
<span class="line">let FunctionBody = \`</span>
<span class="line">    var b = 2;</span>
<span class="line">    console.log(a, b);</span>
<span class="line">\`;</span>
<span class="line">//指定 Scope 为 词法环境</span>
<span class="line">let Scope = ECStack.current.lexicalEnvironment;</span>
<span class="line">//按 第 13 章 中所述的步骤初始化 FunctionDeclaration 表达式 ，并令 fo 为初始化的结果。</span>
<span class="line">let fo = FunctionDeclaration.createInstance(fn, FormalParameterList, FunctionBody, Scope);</span>
<span class="line">//以 fn 为参数，调用 env 的 HasBinding 具体方法，并令 argAlreadyDeclared 为调用的结果。</span>
<span class="line">let argAlreadyDeclared = env.HasBinding(fn);</span>
<span class="line">if (!argAlreadyDeclared) {</span>
<span class="line">    env.CreateMutableBinding(fn, configurableBindings);</span>
<span class="line">} else {</span>
<span class="line">    //否则如果 env 是全局环境的 环境记录 对象，则</span>
<span class="line">    //令 go 为全局对象。</span>
<span class="line">    let go = global;</span>
<span class="line">    //以 fn 为参数，调用 go 和 [[GetProperty]] 内部方法，并令 existingProp 为调用的结果。</span>
<span class="line">    let existingProp = Object.getOwnPropertyDescriptor(go, fn);</span>
<span class="line">    if (existingProp.configurable) {</span>
<span class="line">        Object.defineProperty(go, fn, { value: undefined, writable: true, enumerable: true, configurable: configurableBindings });</span>
<span class="line">        if (!existingProp.writable) {</span>
<span class="line">            throw new Error(\`TypeError\`);</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line">env.SetMutableBinding(fn, fo, strict);</span>
<span class="line">//console.log(env.GetBindingValue(&#39;one&#39;));//1</span>
<span class="line"></span>
<span class="line">// 给a赋值为1</span>
<span class="line">env.SetMutableBinding(&#39;a&#39;, 1);</span>
<span class="line">//进入函数one代码</span>
<span class="line">//当控制流根据一个函数对象 F、调用者提供的 thisArg 以及调用者提供的 argumentList，进入 函数代码 的执行环境时，执行以下步骤：</span>
<span class="line">let thisArg = global;</span>
<span class="line">//以 F 的 [[Scope]] 内部属性为参数调用 NewDeclarativeEnvironment，并令 localEnv 为调用的结果</span>
<span class="line">let localEnv = LexicalEnvironment.NewDeclarativeEnvironment(fo[\`[[Scope]]\`]);</span>
<span class="line">//设词法环境为 localEnv 设变量环境为 localEnv</span>
<span class="line">let oneExecutionContext = new ExecutionContext(localEnv, thisArg);</span>
<span class="line">ECStack.push(oneExecutionContext);</span>
<span class="line"> //按 [10.5](</span>
<span class="line">env = ECStack.current.lexicalEnvironment.environmentRecord;</span>
<span class="line">configurableBindings = false;</span>
<span class="line">strict = false;</span>
<span class="line">//令 func 为通过 [[Call]] 内部属性初始化 code 的执行的函数对象</span>
<span class="line">let func = fo;</span>
<span class="line">//令 code 为 F 的 [[Code]] 内部属性的值。</span>
<span class="line">let code = func[\`[[Code]]\`];</span>
<span class="line">//令 names 为 func 的 [[FormalParameters]] 内部属性。</span>
<span class="line">names = func[\`[[FormalParameters]]\`];</span>
<span class="line">let args = [3];</span>
<span class="line">//令 argCount 为 args 中元素的数量</span>
<span class="line">let argCount = args.length;</span>
<span class="line">let n = 0;</span>
<span class="line">names.forEach(argName =&gt; {</span>
<span class="line">    n += 1;</span>
<span class="line">    let v = n &gt; argCount ? undefined : args[n - 1];</span>
<span class="line">    //以 argName 为参数，调用 env 的 HasBinding 具体方法，并令 argAlreadyDeclared 为调用的结果。</span>
<span class="line">    argAlreadyDeclared = env.HasBinding(argName);</span>
<span class="line">    if (!argAlreadyDeclared) {</span>
<span class="line">        env.CreateMutableBinding(argName);</span>
<span class="line">    }</span>
<span class="line">    env.SetMutableBinding(argName, v, strict);</span>
<span class="line">});</span>
<span class="line">let argumentsAlreadyDeclared = env.HasBinding(&#39;arguments&#39;);</span>
<span class="line">if (!argumentsAlreadyDeclared) {</span>
<span class="line">    let argsObj = CreateArgumentsObject(func, names, args, env, strict);</span>
<span class="line">    env.CreateMutableBinding(&#39;arguments&#39;);</span>
<span class="line">    env.SetMutableBinding(&#39;arguments&#39;, argsObj);</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">dn = &#39;b&#39;;</span>
<span class="line">//以 dn 为参数，调用 env 的 HasBinding 具体方法，并令 varAlreadyDeclared 为调用的结果</span>
<span class="line">varAlreadyDeclared = env.HasBinding(dn);</span>
<span class="line">//如果 varAlreadyDeclared 为 false，则：</span>
<span class="line">if (!varAlreadyDeclared) {</span>
<span class="line">    //以 dn 和 configurableBindings 为参数，调用 env 的 CreateMutableBinding 具体方法。</span>
<span class="line">    env.CreateMutableBinding(dn, configurableBindings);</span>
<span class="line">    //以 dn、undefined 和 strict 为参数，调用 env 的 SetMutableBinding 具体方法。</span>
<span class="line">    env.SetMutableBinding(dn, undefined, strict);</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">//开始执行</span>
<span class="line">env.SetMutableBinding(dn, 2);</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">+//按源码顺序遍历 code，对于每一个 FunctionDeclaration 表达式 f：</span>
<span class="line">+//令 fn 为 FunctionDeclaration 表达式 f 中的 标识符</span>
<span class="line">+fn = &#39;two&#39;;</span>
<span class="line">+//创建函数对象</span>
<span class="line">+//指定 FormalParameterList 为可选参数列表</span>
<span class="line">+FormalParameterList = [];</span>
<span class="line">+//指定 FunctionBody 为函数体</span>
<span class="line">+FunctionBody = \`</span>
<span class="line">+    console.log(a, b, c);</span>
<span class="line">+\`;</span>
<span class="line">+//指定 Scope 为 词法环境</span>
<span class="line">+Scope = ECStack.current.lexicalEnvironment;</span>
<span class="line">+//按 第 13 章 中所述的步骤初始化 FunctionDeclaration 表达式 ，并令 fo 为初始化的结果。</span>
<span class="line">+fo = FunctionDeclaration.createInstance(fn, FormalParameterList, FunctionBody, Scope);</span>
<span class="line">+//退出one</span>
<span class="line">+ECStack.pop();</span>
<span class="line">+env = ECStack.current.lexicalEnvironment.environmentRecord;</span>
<span class="line">+//以 fn 为参数，调用 env 的 HasBinding 具体方法，并令 argAlreadyDeclared 为调用的结果。</span>
<span class="line">+argAlreadyDeclared = env.HasBinding(fn);</span>
<span class="line">+if (!argAlreadyDeclared) {</span>
<span class="line">+    env.CreateMutableBinding(fn, configurableBindings);</span>
<span class="line">+} else {</span>
<span class="line">+    //否则如果 env 是全局环境的 环境记录 对象，则</span>
<span class="line">+    //令 go 为全局对象。</span>
<span class="line">+    let go = global;</span>
<span class="line">+    //以 fn 为参数，调用 go 和 [[GetProperty]] 内部方法，并令 existingProp 为调用的结果。</span>
<span class="line">+    let existingProp = Object.getOwnPropertyDescriptor(go, fn);</span>
<span class="line">+    if (existingProp.configurable) {</span>
<span class="line">+        Object.defineProperty(go, fn, { value: undefined, writable: true, enumerable: true, configurable: +configurableBindings });</span>
<span class="line">+        if (!existingProp.writable) {</span>
<span class="line">+            throw new Error(\`TypeError\`);</span>
<span class="line">+        }</span>
<span class="line">+    }</span>
<span class="line">+}</span>
<span class="line">+env.SetMutableBinding(fn, fo, strict);</span>
<span class="line">+//执行two</span>
<span class="line">+//当控制流根据一个函数对象 F、调用者提供的 thisArg 以及调用者提供的 argumentList，进入 函数代码 的执行环境时，执行以下步+骤：</span>
<span class="line">+thisArg = global;</span>
<span class="line">+//以 F 的 [[Scope]] 内部属性为参数调用 NewDeclarativeEnvironment，并令 localEnv 为调用的结果</span>
<span class="line">+localEnv = LexicalEnvironment.NewDeclarativeEnvironment(fo[\`[[Scope]]\`]);</span>
<span class="line">+//设词法环境为 localEnv 设变量环境为 localEnv</span>
<span class="line">+oneExecutionContext = new ExecutionContext(localEnv, thisArg);</span>
<span class="line">+ECStack.push(oneExecutionContext);</span>
<span class="line"> +//按 [10.5](</span>
<span class="line">+env = ECStack.current.lexicalEnvironment.environmentRecord;</span>
<span class="line">+configurableBindings = false;</span>
<span class="line">+strict = false;</span>
<span class="line">+//令 func 为通过 [[Call]] 内部属性初始化 code 的执行的函数对象</span>
<span class="line">+func = fo;</span>
<span class="line">+//令 code 为 F 的 [[Code]] 内部属性的值。</span>
<span class="line">+code = func[\`[[Code]]\`];</span>
<span class="line">+//令 names 为 func 的 [[FormalParameters]] 内部属性。</span>
<span class="line">+names = func[\`[[FormalParameters]]\`];</span>
<span class="line">+args = [3];</span>
<span class="line">+//令 argCount 为 args 中元素的数量</span>
<span class="line">+argCount = args.length;</span>
<span class="line">+n = 0;</span>
<span class="line">+names.forEach(argName =&gt; {</span>
<span class="line">+    n += 1;</span>
<span class="line">+    let v = n &gt; argCount ? undefined : args[n - 1];</span>
<span class="line">+    //以 argName 为参数，调用 env 的 HasBinding 具体方法，并令 argAlreadyDeclared 为调用的结果。</span>
<span class="line">+    argAlreadyDeclared = env.HasBinding(argName);</span>
<span class="line">+    if (!argAlreadyDeclared) {</span>
<span class="line">+        env.CreateMutableBinding(argName);</span>
<span class="line">+    }</span>
<span class="line">+    env.SetMutableBinding(argName, v, strict);</span>
<span class="line">+});</span>
<span class="line">+argumentsAlreadyDeclared = env.HasBinding(&#39;arguments&#39;);</span>
<span class="line">+if (!argumentsAlreadyDeclared) {</span>
<span class="line">+    let argsObj = CreateArgumentsObject(func, names, args, env, strict);</span>
<span class="line">+    env.CreateMutableBinding(&#39;arguments&#39;);</span>
<span class="line">+    env.SetMutableBinding(&#39;arguments&#39;, argsObj);</span>
<span class="line">+}</span>
<span class="line">+console.log(</span>
<span class="line">+    &#39;a=&#39; + LexicalEnvironment.GetIdentifierReference(ECStack.current.lexicalEnvironment, &#39;a&#39;).name,</span>
<span class="line">+    &#39;b=&#39; + LexicalEnvironment.GetIdentifierReference(ECStack.current.lexicalEnvironment, &#39;b&#39;).name,</span>
<span class="line">+    &#39;c=&#39; + LexicalEnvironment.GetIdentifierReference(ECStack.current.lexicalEnvironment, &#39;c&#39;).name</span>
<span class="line">+);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_10-可执行代码与执行环境" tabindex="-1"><a class="header-anchor" href="#_10-可执行代码与执行环境"><span>10. 可执行代码与执行环境</span></a></h2><h3 id="_10-1-可执行代码类型" tabindex="-1"><a class="header-anchor" href="#_10-1-可执行代码类型"><span>10.1 可执行代码类型</span></a></h3><h4 id="_10-1-1-全局代码" tabindex="-1"><a class="header-anchor" href="#_10-1-1-全局代码"><span>10.1.1 全局代码</span></a></h4><ul><li>全局代码 是指被作为 ECMA 脚本 程序 处理的源代码文本</li></ul><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;global&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="_10-1-2-eval-代码" tabindex="-1"><a class="header-anchor" href="#_10-1-2-eval-代码"><span>10.1.2 Eval 代码</span></a></h4><ul><li>Eval 代码 是指提供给 eval 内置函数的源代码文本</li></ul><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token function">eval</span><span class="token punctuation">(</span><span class="token string">&#39;console.log(&quot;hello&quot;)&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="_10-1-3-函数代码" tabindex="-1"><a class="header-anchor" href="#_10-1-3-函数代码"><span>10.1.3 函数代码</span></a></h4><ul><li>函数代码 是指作为 函数体 被解析的源代码文本</li><li>函数代码 同时还特指 以构造器方式调用 Function 内置对象 时所提供的源代码文本</li></ul><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">one</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;one&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token function">one</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> sum <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Function</span><span class="token punctuation">(</span><span class="token string">&quot;a,b&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;return a+b&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10-2-词法环境" tabindex="-1"><a class="header-anchor" href="#_10-2-词法环境"><span>10.2 词法环境</span></a></h3><ul><li>词法环境 是一个用于定义特定变量和函数标识符在 ECMAScript 代码的词法嵌套结构上关联关系的规范类型</li><li>一个词法环境由一个环境记录项和可能为空的外部词法环境引用构成</li><li>通常词法环境会与特定的 ECMAScript 代码诸如 <code>FunctionDeclaration</code>,<code>WithStatement</code> 或者 <code>TryStatement</code> 的 <code>Catch</code> 块这样的语法结构相联系，且类似代码每次执行都会有一个新的语法环境被创建出来</li><li>环境记录项记录了在它的关联词法环境域内创建的标识符绑定情形</li><li>外部词法环境引用用于表示词法环境的逻辑嵌套关系模型</li><li>（内部）词法环境的外部引用是逻辑上包含内部词法环境的词法环境</li><li>外部词法环境自然也可能有多个内部词法环境</li><li>词法环境和环境记录项是纯粹的规范机制，而不需要 ECMAScript 的实现保持一致。ECMAScript 程序不可能直接访问或者更改这些值</li></ul><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">one</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;wrong&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">with</span> <span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span></span>
<span class="line">            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token function">one</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_10-2-1-环境记录项" tabindex="-1"><a class="header-anchor" href="#_10-2-1-环境记录项"><span>10.2.1 环境记录项</span></a></h4><ul><li>在本标准中，共有 2 类环境记录项： <code>声明式环境记录项</code> 和 <code>对象式环境记录项</code></li><li>声明式环境记录项用于定义那些将 标识符 与语言值直接绑定的 ECMA 脚本语法元素，例如 函数定义 ， 变量定义 以及 Catch 语句</li><li>对象式环境记录项用于定义那些将 标识符 与具体对象的属性绑定的 ECMA 脚本元素，例如 程序 以及 With 表达式</li><li>出于标准规范的目的，可以将环境记录项理解为面向对象中的一个简单继承结构，其中环境记录项是一个抽象类,它有 2 个具体实现类，分别为声明式环境记录项和对象式环境记录项</li></ul><h5 id="_10-2-1-1-声明式环境记录项" tabindex="-1"><a class="header-anchor" href="#_10-2-1-1-声明式环境记录项"><span>10.2.1.1 声明式环境记录项</span></a></h5><ul><li>每个声明式环境记录项都与一个包含变量和（或）函数声明的 ECMA 脚本的程序作用域相关联</li><li>声明式环境记录项用于绑定作用域内定义的一系列标识符</li><li>除了所有环境记录项都支持的可变绑定外，声明式环境记录项还提供不可变绑定</li><li>在不可变绑定中，一个标识符与它的值之间的关联关系建立之后，就无法改变</li><li>创建和初始化不可变绑定是两个独立的过程，因此类似的绑定可以处在已初始化阶段或者未初始化阶段</li></ul><h5 id="_10-2-1-2-对象式环境记录项" tabindex="-1"><a class="header-anchor" href="#_10-2-1-2-对象式环境记录项"><span>10.2.1.2 对象式环境记录项</span></a></h5><ul><li>每一个对象式环境记录项都有一个关联的对象，这个对象被称作 绑定对象</li><li>对象式环境记录项直接将一系列标识符与其绑定对象的属性名称建立一一对应关系</li><li>不符合IdentifierName 的属性名不会作为绑定的标识符使用</li><li>无论是对象自身的，还是继承的属性都会作为绑定,无论该属性的 [[Enumerable]] 特性的值是什么</li><li>由于对象的属性可以动态的增减，因此对象式环境记录项所绑定的标识符集合也会隐匿地变化，这是增减绑定对象的属性而产生的副作用</li><li>通过以上描述的副作用而建立的绑定，均被视为可变绑定，即使该绑定对应的属性的 Writable 特性的值为 false</li><li>对象式环境记录项没有不可变绑定</li></ul><h4 id="_10-2-2-词法环境的运算" tabindex="-1"><a class="header-anchor" href="#_10-2-2-词法环境的运算"><span>10.2.2 词法环境的运算</span></a></h4><ul><li>GetIdentifierReference (lex, name, strict)</li><li>NewDeclarativeEnvironment (E)</li><li>NewObjectEnvironment (O, E)</li></ul><h4 id="_10-2-3-全局环境" tabindex="-1"><a class="header-anchor" href="#_10-2-3-全局环境"><span>10.2.3 全局环境</span></a></h4><ul><li>全局环境 是一个唯一的词法环境 ，它在任何 ECMA 脚本的代码执行前创建</li><li>全局环境的 环境数据 是一个<code>object-environment-record</code>对象环境数据</li><li>该环境数据使用 全局对象作为 绑定对象</li><li>全局环境的 外部环境引用 为 null</li><li>在 ECMA 脚本的代码执行过程中，可能会向 全局对象 添加额外的属性，也可能修改其初始属性的值</li></ul><h5 id="_10-2-3-1-全局对象" tabindex="-1"><a class="header-anchor" href="#_10-2-3-1-全局对象"><span>10.2.3.1 全局对象</span></a></h5><ul><li>唯一的全局对象建立在控制进入任何执行环境之前</li><li>全局对象的标准内置属性拥有特性 {[[Writable]]: true, [[Enumerable]]: false, [[Configurable]]: true}</li><li>全局对象没有 [[Construct]] 内部属性 ; 全局对象不可能当做构造器用 new 运算符调用</li><li>全局对象没有 [[Call]] 内部属性，全局对象不可能当做函数来调用</li><li>全局对象的 [[Prototype]] 和 [[Class]] 内部属性值是依赖于实现的</li><li>除了本规范定义的属性之外，全局对象还可以拥有额外的宿主定义的属性 全局对象可包含一个值是全局对象自身的属性；例如，在 HTML 文档对象模型中全局对象的 window 属性是全局对象自身</li></ul><h3 id="_10-3-执行环境" tabindex="-1"><a class="header-anchor" href="#_10-3-执行环境"><span>10.3 执行环境</span></a></h3><ul><li>当控制器转入 ECMA 脚本的可执行代码时，控制器会进入一个执行环境</li><li>当前活动的多个执行环境在逻辑上形成一个栈结构</li><li>该逻辑栈的最顶层的执行环境称为当前运行的执行环境</li><li>任何时候，当控制器从当前运行的执行环境相关的可执行代码转入与该执行环境无关的可执行代码时，会创建一个新的执行环境</li><li>新建的这个执行环境会推入栈中，成为当前运行的执行环境</li><li>执行环境包含所有用于追踪与其相关的代码的执行进度的状态</li></ul><table><thead><tr><th style="text-align:left;">组件</th><th style="text-align:left;">作用目的</th></tr></thead><tbody><tr><td style="text-align:left;">词法环境</td><td style="text-align:left;">指定一个词法环境对象，用于解析该执行环境内的代码创建的标识符引用</td></tr><tr><td style="text-align:left;">变量环境</td><td style="text-align:left;">指定一个词法环境对象，其环境数据用于保存由该执行环境内的代码通过变量表达式和函数表达式创建的绑定</td></tr><tr><td style="text-align:left;">This绑定</td><td style="text-align:left;">指定该执行环境内的 ECMA 脚本代码中 this 关键字所关联的值</td></tr></tbody></table><ul><li>执行环境的词法环境和变量环境组件始终为 <code>词法环境</code> 对象</li><li>当创建一个执行环境时，其词法环境组件和变量环境组件最初是同一个值</li><li>在该执行环境相关联的代码的执行过程中，变量环境组件永远不变，而词法环境组件有可能改变</li><li>在本标准中，通常情况下，只有正在运行的执行环境（执行环境栈里的最顶层对象）会被算法直接修改</li><li>因此当遇到<code>词法环境</code>，<code>变量环境</code>和<code>This 绑定</code>这三个术语时，指的是正在运行的执行环境的对应组件</li><li>执行环境是一个纯粹的标准机制，并不代表任何<code>ECMA</code>脚本实现的工件。在<code>ECMA</code>脚本程序中是不可能访问到执行环境的</li></ul><h4 id="_10-3-1-标识符解析" tabindex="-1"><a class="header-anchor" href="#_10-3-1-标识符解析"><span>10.3.1 标识符解析</span></a></h4><ul><li>标识符解析是指使用正在运行的执行环境中的词法环境,通过一个标识符获得其对应的绑定的过程</li><li>解释执行一个标识符得到的结果必定是 引用 类型的对象，且其引用名属性的值与<code>Identifier</code>字符串相等</li></ul><h3 id="_10-4-建立执行环境" tabindex="-1"><a class="header-anchor" href="#_10-4-建立执行环境"><span>10.4 建立执行环境</span></a></h3><ul><li>解释执行全局代码或使用<code>eval</code>函数输入的代码会创建并进入一个新的执行环境</li><li>每次调用 ECMA 脚本代码定义的函数也会建立并进入一个新的执行环境，即便函数是自身递归调用的</li><li>每一次 return 都会退出一个执行环境</li><li>抛出异常也可退出一个或多个执行环境</li><li>当控制流进入一个执行环境时，会设置该执行环境的<code>this</code>绑定，定义变量环境和初始词法环境，并执行定义绑定初始化过程</li></ul><h4 id="_10-4-1-进入全局代码" tabindex="-1"><a class="header-anchor" href="#_10-4-1-进入全局代码"><span>10.4.1 进入全局代码</span></a></h4><ul><li>按 10.4.1.1 描述的方案，使用 全局代码 初始化执行环境</li><li>按 10.5 描述的方案，使用 全局代码 执行定义绑定初始化步骤。</li></ul><h5 id="_10-4-1-1-初始化全局执行环境" tabindex="-1"><a class="header-anchor" href="#_10-4-1-1-初始化全局执行环境"><span>10.4.1.1 初始化全局执行环境</span></a></h5><ul><li>将变量环境设置为 全局环境</li><li>将词法环境设置为 全局环境</li><li>将 this 绑定设置为 全局对象</li></ul><h3 id="_10-5-定义绑定初始化" tabindex="-1"><a class="header-anchor" href="#_10-5-定义绑定初始化"><span>10.5 定义绑定初始化</span></a></h3><ul><li>每个执行环境都有一个关联的变量环境</li><li>当在一个执行环境下执行一段ECMA脚本时，变量和函数定义会以绑定的形式添加到这个变量环境的环境记录中</li><li>对于函数函数代码，参数也同样会以绑定的形式添加到这个变量环境的环境记录中</li><li>选择使用哪一个、哪一类型的 环境记录 来绑定定义，是由执行环境下执行的 ECMA 脚本的类型决定的</li></ul>`,99)])])}const o=s(p,[["render",i]]),r=JSON.parse('{"path":"/strong/148.1.basic.html","title":"","lang":"en-US","frontmatter":{},"git":{"updatedTime":1681290319000,"contributors":[{"name":"yutao","username":"yutao","email":"642231346@qq.com","commits":1,"url":"https://github.com/yutao"}],"changelog":[{"hash":"f5ab8c9d34991ec274f7f652439afe5b2afb6147","time":1681290319000,"email":"642231346@qq.com","author":"yutao","message":"modify"}]},"filePathRelative":"strong/148.1.basic.md"}');export{o as comp,r as data};
