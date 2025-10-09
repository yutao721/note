import{_ as s,c as a,a as e,o as p}from"./app-CD1YpnS1.js";const l={};function t(i,n){return p(),a("div",null,[...n[0]||(n[0]=[e(`<h2 id="_1-搭建开发环境" tabindex="-1"><a class="header-anchor" href="#_1-搭建开发环境"><span>1. 搭建开发环境</span></a></h2><h3 id="_1-1-安装依赖包" tabindex="-1"><a class="header-anchor" href="#_1-1-安装依赖包"><span>1.1 安装依赖包</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">$ cnpm i webpack webpack-cli webpack-dev-server -D</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_1-2-package-json" tabindex="-1"><a class="header-anchor" href="#_1-2-package-json"><span>1.2 package.json</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">+  &quot;scripts&quot;: {</span>
<span class="line">+    &quot;build&quot;: &quot;webpack --mode=development&quot;,</span>
<span class="line">+    &quot;dev&quot;: &quot;webpack-dev-server --mode=development --contentBase=./dist&quot;</span>
<span class="line">+  },</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-实现虚拟dom" tabindex="-1"><a class="header-anchor" href="#_2-实现虚拟dom"><span>2. 实现虚拟DOM</span></a></h2><p><img src="http://img.zhufengpeixun.cn/2.virutaldom.png" alt="virutaldom"></p><h3 id="_2-1-src-index-js" tabindex="-1"><a class="header-anchor" href="#_2-1-src-index-js"><span>2.1 src\\index.js</span></a></h3><p>src\\index.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> h <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./vdom&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> root <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> oldVnode <span class="token operator">=</span> <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;container&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;span&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;red&#39;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">&#39;world&#39;</span></span>
<span class="line"><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>oldVnode<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-vdom-index-js" tabindex="-1"><a class="header-anchor" href="#_2-2-vdom-index-js"><span>2.2 vdom\\index.js</span></a></h3><p>src\\vdom\\index.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> h <span class="token keyword">from</span> <span class="token string">&#39;./h&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token punctuation">{</span></span>
<span class="line">    h</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-vdom-h-js" tabindex="-1"><a class="header-anchor" href="#_2-3-vdom-h-js"><span>2.3 vdom\\h.js</span></a></h3><p>src\\vdom\\h.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> vnode <span class="token keyword">from</span> <span class="token string">&#39;./vnode&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> hasOwnProperty <span class="token operator">=</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>hasOwnProperty<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token constant">RESERVED_PROPS</span> <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">h</span><span class="token punctuation">(</span><span class="token parameter">type<span class="token punctuation">,</span> config<span class="token punctuation">,</span> <span class="token operator">...</span>children</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">let</span> key <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>config<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>config<span class="token punctuation">.</span>key<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            key <span class="token operator">=</span> config<span class="token punctuation">.</span>key<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> propName <span class="token keyword">in</span> config<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">hasOwnProperty</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>config<span class="token punctuation">,</span> propName<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token constant">RESERVED_PROPS</span><span class="token punctuation">[</span>propName<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                props<span class="token punctuation">[</span>propName<span class="token punctuation">]</span> <span class="token operator">=</span> config<span class="token punctuation">[</span>propName<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token function">vnode</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span> key<span class="token punctuation">,</span> props<span class="token punctuation">,</span> children<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">child<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token keyword">typeof</span> child <span class="token operator">==</span> <span class="token string">&#39;number&#39;</span> <span class="token operator">||</span> <span class="token keyword">typeof</span> child <span class="token operator">==</span> <span class="token string">&#39;string&#39;</span> <span class="token operator">?</span> <span class="token function">vnode</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> child<span class="token punctuation">)</span> <span class="token operator">:</span> child<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> h<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-vdom-vnode-js" tabindex="-1"><a class="header-anchor" href="#_2-4-vdom-vnode-js"><span>2.4 vdom\\vnode.js</span></a></h3><p>src\\vdom\\vnode.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token constant">VNODE_TYPE</span> <span class="token operator">=</span> <span class="token string">&#39;VNODE_TYPE&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">vnode</span><span class="token punctuation">(</span><span class="token parameter">type<span class="token punctuation">,</span> key<span class="token punctuation">,</span> props <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> children<span class="token punctuation">,</span> text<span class="token punctuation">,</span> DOMElement</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">_type</span><span class="token operator">:</span> <span class="token constant">VNODE_TYPE</span><span class="token punctuation">,</span></span>
<span class="line">        type<span class="token punctuation">,</span> key<span class="token punctuation">,</span> props<span class="token punctuation">,</span> children<span class="token punctuation">,</span> text<span class="token punctuation">,</span> DOMElement</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> vnode<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-初次渲染" tabindex="-1"><a class="header-anchor" href="#_3-初次渲染"><span>3.初次渲染</span></a></h2><p><img src="http://img.zhufengpeixun.cn/2.virutaldomhtml.png" alt="virutaldomhtml"></p><h3 id="_3-1-src-index-js" tabindex="-1"><a class="header-anchor" href="#_3-1-src-index-js"><span>3.1 src\\index.js</span></a></h3><p>src\\index.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> h<span class="token punctuation">,</span> mount <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./vdom&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> root <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> oldVnode <span class="token operator">=</span> <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;container&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;span&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;red&#39;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">&#39;world&#39;</span></span>
<span class="line"><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>oldVnode<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">mount</span><span class="token punctuation">(</span>oldVnode<span class="token punctuation">,</span> root<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-vdom-index-js" tabindex="-1"><a class="header-anchor" href="#_3-2-vdom-index-js"><span>3.2 vdom\\index.js</span></a></h3><p>src\\vdom\\index.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> h <span class="token keyword">from</span> <span class="token string">&#39;./h&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> mount <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./patch&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token punctuation">{</span></span>
<span class="line">    h<span class="token punctuation">,</span></span>
<span class="line">    mount</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-vdom-vnode-js" tabindex="-1"><a class="header-anchor" href="#_3-3-vdom-vnode-js"><span>3.3 vdom\\vnode.js</span></a></h3><p>src\\vdom\\vnode.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">const VNODE_TYPE = &#39;VNODE_TYPE&#39;;</span>
<span class="line">//创建虚拟DOM节点</span>
<span class="line">function vnode(type, key, props = {}, children, text, DOMElement) {</span>
<span class="line">    return {</span>
<span class="line">        _type: VNODE_TYPE,</span>
<span class="line">        type, key, props, children, text, DOMElement</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line">+//是否是一个虚拟DOM节点</span>
<span class="line">+export function isVnode(vnode) {</span>
<span class="line">+    return vnode &amp;&amp; vnode._type === VNODE_TYPE;</span>
<span class="line">+}</span>
<span class="line">+//是否是相同的节点 类型相同并且key相同 key可能为null</span>
<span class="line">+export  function isSameVnode(oldVnode, newVnode) {</span>
<span class="line">+    return oldVnode.key === newVnode.key &amp;&amp; oldVnode.type === newVnode.type;</span>
<span class="line">+}</span>
<span class="line">export default vnode;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-4-vdom-patch-js" tabindex="-1"><a class="header-anchor" href="#_3-4-vdom-patch-js"><span>3.4 vdom\\patch.js</span></a></h3><p>src\\vdom\\patch.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> vnode<span class="token punctuation">,</span> <span class="token punctuation">{</span> isVnode<span class="token punctuation">,</span> isSameVnode <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./vnode&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//把虚拟DOM节点封装成一个真实DOM节点</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">createDOMElementFromVnode</span><span class="token punctuation">(</span><span class="token parameter">vnode</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> children <span class="token operator">=</span> vnode<span class="token punctuation">.</span>children<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">let</span> type <span class="token operator">=</span> vnode<span class="token punctuation">.</span>type<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">let</span> props <span class="token operator">=</span> vnode<span class="token punctuation">.</span>props<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">let</span> domElement <span class="token operator">=</span> vnode<span class="token punctuation">.</span>domElement <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token function">updateProperties</span><span class="token punctuation">(</span>vnode<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>children<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            children<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">childVnode</span> <span class="token operator">=&gt;</span> domElement<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span><span class="token function">createDOMElementFromVnode</span><span class="token punctuation">(</span>childVnode<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">        vnode<span class="token punctuation">.</span>domElement <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createTextNode</span><span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>text<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">return</span> vnode<span class="token punctuation">.</span>domElement<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">mount</span><span class="token punctuation">(</span><span class="token parameter">vnode<span class="token punctuation">,</span> root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> newDOMElement <span class="token operator">=</span> <span class="token function">createDOMElementFromVnode</span><span class="token punctuation">(</span>vnode<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    root<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>newDOMElement<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">updateProperties</span><span class="token punctuation">(</span><span class="token parameter">vnode<span class="token punctuation">,</span> oldProps <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> domElement <span class="token operator">=</span> vnode<span class="token punctuation">.</span>domElement<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">let</span> newProps <span class="token operator">=</span> vnode<span class="token punctuation">.</span>props<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">let</span> oldStyle <span class="token operator">=</span> oldProps<span class="token punctuation">.</span>style <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">let</span> newStyle <span class="token operator">=</span> newProps<span class="token punctuation">.</span>style <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> oldAttrName <span class="token keyword">in</span> oldStyle<span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>newStyle<span class="token punctuation">[</span>oldAttrName<span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">            domElement<span class="token punctuation">.</span>style<span class="token punctuation">[</span>oldAttrName<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> oldPropName <span class="token keyword">in</span> oldProps<span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>newProps<span class="token punctuation">[</span>oldPropName<span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token keyword">delete</span> domElement<span class="token punctuation">[</span>oldPropName<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> propName <span class="token keyword">in</span> newProps<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>propName <span class="token operator">==</span> <span class="token string">&#39;style&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">let</span> styleObject <span class="token operator">=</span> newProps<span class="token punctuation">[</span>propName<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> attr <span class="token keyword">in</span> styleObject<span class="token punctuation">)</span></span>
<span class="line">                domElement<span class="token punctuation">.</span>style<span class="token punctuation">[</span>attr<span class="token punctuation">]</span> <span class="token operator">=</span> styleObject<span class="token punctuation">[</span>attr<span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token comment">//更新行内样式</span></span>
<span class="line">        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">            domElement<span class="token punctuation">[</span>propName<span class="token punctuation">]</span> <span class="token operator">=</span> newProps<span class="token punctuation">[</span>propName<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-替换成不同类型" tabindex="-1"><a class="header-anchor" href="#_4-替换成不同类型"><span>4.替换成不同类型</span></a></h2><h3 id="_4-1-index-html" tabindex="-1"><a class="header-anchor" href="#_4-1-index-html"><span>4.1 index.html</span></a></h3><p>dist\\index.html</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;head&gt;</span>
<span class="line">    &lt;meta charset=&quot;UTF-8&quot;&gt;</span>
<span class="line">    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;</span>
<span class="line">    &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;ie=edge&quot;&gt;</span>
<span class="line">    &lt;title&gt;虚拟DOM和DOMDIFF&lt;/title&gt;</span>
<span class="line">+    &lt;style&gt;</span>
<span class="line">+        li {</span>
<span class="line">+            width: 100px;</span>
<span class="line"> +            color: </span>
<span class="line">+            text-align: center;</span>
<span class="line">+            transition: all 1s;</span>
<span class="line">+        }</span>
<span class="line">    &lt;/style&gt;</span>
<span class="line">&lt;/head&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-src-index-js" tabindex="-1"><a class="header-anchor" href="#_4-2-src-index-js"><span>4.2 src\\index.js</span></a></h3><p>src\\index.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> vnode<span class="token punctuation">,</span> h<span class="token punctuation">,</span> mount<span class="token punctuation">,</span> patch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./vdom&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> root <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> oldVnode <span class="token operator">=</span> <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;ul&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;container&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">     <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;li&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> &#39;</span>
<span class="line">     <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;li&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> &#39;</span>
<span class="line">     <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;li&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> &#39;</span>
<span class="line">     <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;li&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> &#39;</span>
<span class="line"><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">mount</span><span class="token punctuation">(</span>oldVnode<span class="token punctuation">,</span> root<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//const newVnode = vnode(undefined, undefined, undefined, undefined, &#39;新的文本&#39;);</span></span>
<span class="line"><span class="token keyword">const</span> newVnode <span class="token operator">=</span> <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;container&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">&#39;新的文本&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">patch</span><span class="token punctuation">(</span>oldVnode<span class="token punctuation">,</span> newVnode<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-vdom-index-js" tabindex="-1"><a class="header-anchor" href="#_4-3-vdom-index-js"><span>4.3 vdom\\index.js</span></a></h3><p>src\\vdom\\index.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import h from &#39;./h&#39;;</span>
<span class="line">+import vnode from &#39;./vnode&#39;;</span>
<span class="line">+import { mount, patch } from &#39;./patch&#39;;</span>
<span class="line">export {</span>
<span class="line">    h,</span>
<span class="line">+    vnode,</span>
<span class="line">    mount,</span>
<span class="line">+    patch</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-4-patch-js" tabindex="-1"><a class="header-anchor" href="#_4-4-patch-js"><span>4.4 patch.js</span></a></h3><p>src\\vdom\\patch.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import vnode, { isVnode, isSameVnode } from &#39;./vnode&#39;;</span>
<span class="line"></span>
<span class="line">//把虚拟DOM节点封装成一个真实DOM节点</span>
<span class="line">function createDOMElementFromVnode(vnode) {</span>
<span class="line">    let children = vnode.children;</span>
<span class="line">    let type = vnode.type;</span>
<span class="line">    let props = vnode.props;</span>
<span class="line">    if (type) {</span>
<span class="line">        let domElement = vnode.domElement = document.createElement(type);</span>
<span class="line">        updateProperties(vnode);</span>
<span class="line">        if (Array.isArray(children)) {</span>
<span class="line">            children.forEach(childVnode =&gt; domElement.appendChild(createDOMElementFromVnode(childVnode)));</span>
<span class="line">        }</span>
<span class="line">    } else {</span>
<span class="line">        vnode.domElement = document.createTextNode(vnode.text);</span>
<span class="line">    }</span>
<span class="line">    return vnode.domElement;</span>
<span class="line">}</span>
<span class="line">export function mount(vnode, root) {</span>
<span class="line">    let newDOMElement = createDOMElementFromVnode(vnode);</span>
<span class="line">    root.appendChild(newDOMElement);</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">+export function patch(oldVnode, newVnode) {</span>
<span class="line">+    if (oldVnode.type != newVnode.type) {</span>
<span class="line">+        return oldVnode.domElement.parentNode.replaceChild(createDOMElementFromVnode(newVnode), oldVnode.domElement);</span>
<span class="line">+    }</span>
<span class="line">+}</span>
<span class="line">function updateProperties(vnode, oldProps = {}) {</span>
<span class="line">    let domElement = vnode.domElement;</span>
<span class="line">    let newProps = vnode.props;</span>
<span class="line"></span>
<span class="line">    let oldStyle = oldProps.style || {};</span>
<span class="line">    let newStyle = newProps.style || {};</span>
<span class="line">    for (let oldAttrName in oldStyle)</span>
<span class="line">        if (!newStyle[oldAttrName])</span>
<span class="line">            domElement.style[oldAttrName] = &quot;&quot;;</span>
<span class="line"></span>
<span class="line">    for (let oldPropName in oldProps)</span>
<span class="line">        if (!newProps[oldPropName])</span>
<span class="line">            delete domElement[oldPropName];</span>
<span class="line"></span>
<span class="line">    for (let propName in newProps) {</span>
<span class="line">        if (propName == &#39;style&#39;) {</span>
<span class="line">            let styleObject = newProps[propName];</span>
<span class="line">            for (let attr in styleObject)</span>
<span class="line">                domElement.style[attr] = styleObject[attr];//更新行内样式</span>
<span class="line">        } else {</span>
<span class="line">            domElement[propName] = newProps[propName];</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-一方有儿子" tabindex="-1"><a class="header-anchor" href="#_5-一方有儿子"><span>5.一方有儿子</span></a></h2><h3 id="_5-1-src-index-js" tabindex="-1"><a class="header-anchor" href="#_5-1-src-index-js"><span>5.1 src\\index.js</span></a></h3><p>src\\index.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> vnode<span class="token punctuation">,</span> h<span class="token punctuation">,</span> mount<span class="token punctuation">,</span> patch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./vdom&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> root <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">/* const oldVnode = h(&#39;ul&#39;, { id: &#39;container&#39; },</span>
<span class="line">     h(&#39;li&#39;, { style: { backgroundColor: &#39;</span>
<span class="line">     h(&#39;li&#39;, { style: { backgroundColor: &#39;</span>
<span class="line">     h(&#39;li&#39;, { style: { backgroundColor: &#39;</span>
<span class="line">     h(&#39;li&#39;, { style: { backgroundColor: &#39;</span>
<span class="line">);</span>
<span class="line">mount(oldVnode, root);</span>
<span class="line">const newVnode = h(&#39;ul&#39;, { id: &#39;newContainer&#39;, style: { border: &#39;1px solid red&#39;, height: &#39;10px&#39; } }); */</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> oldVnode <span class="token operator">=</span> <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;ul&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;container&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">border</span><span class="token operator">:</span> <span class="token string">&#39;1px solid red&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">&#39;10px&#39;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> newVnode <span class="token operator">=</span> <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;ul&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;newContainer&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">     <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;li&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> &#39;</span>
<span class="line">     <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;li&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> &#39;</span>
<span class="line">     <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;li&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> &#39;</span>
<span class="line">     <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;li&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> &#39;</span>
<span class="line"><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">mount</span><span class="token punctuation">(</span>oldVnode<span class="token punctuation">,</span> root<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">patch</span><span class="token punctuation">(</span>oldVnode<span class="token punctuation">,</span> newVnode<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-2-vdom-patch-js" tabindex="-1"><a class="header-anchor" href="#_5-2-vdom-patch-js"><span>5.2 vdom\\patch.js</span></a></h3><p>src\\vdom\\patch.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import vnode, { isVnode, isSameVnode } from &#39;./vnode&#39;;</span>
<span class="line"></span>
<span class="line">//把虚拟DOM节点封装成一个真实DOM节点</span>
<span class="line">function createDOMElementFromVnode(vnode) {</span>
<span class="line">    let children = vnode.children;</span>
<span class="line">    let type = vnode.type;</span>
<span class="line">    let props = vnode.props;</span>
<span class="line">    if (type) {</span>
<span class="line">        let domElement = vnode.domElement = document.createElement(type);</span>
<span class="line">        updateProperties(vnode);</span>
<span class="line">        if (Array.isArray(children)) {</span>
<span class="line">            children.forEach(childVnode =&gt; domElement.appendChild(createDOMElementFromVnode(childVnode)));</span>
<span class="line">        }</span>
<span class="line">    } else {</span>
<span class="line">        vnode.domElement = document.createTextNode(vnode.text);</span>
<span class="line">    }</span>
<span class="line">    return vnode.domElement;</span>
<span class="line">}</span>
<span class="line">export function mount(vnode, root) {</span>
<span class="line">    let newDOMElement = createDOMElementFromVnode(vnode);</span>
<span class="line">    root.appendChild(newDOMElement);</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">export function patch(oldVnode, newVnode) {</span>
<span class="line">    if (oldVnode.type != newVnode.type) {</span>
<span class="line">        return oldVnode.domElement.parentNode.replaceChild(createDOMElementFromVnode(newVnode), oldVnode.domElement);</span>
<span class="line">    }</span>
<span class="line">+    let domElement = newVnode.domElement = oldVnode.domElement;</span>
<span class="line">+    updateProperties(newVnode, oldVnode.props);</span>
<span class="line">+    let oldChildren = oldVnode.children;</span>
<span class="line">+    let newChildren = newVnode.children;</span>
<span class="line">+    if (oldChildren.length &gt; 0 &amp;&amp; newChildren.length &gt; 0) {</span>
<span class="line">+</span>
<span class="line">+    } else if (oldChildren.length &gt; 0) {//老的有儿子,新的没儿子</span>
<span class="line">+        for (let i = 0; i &lt; oldChildren.length; i++) {</span>
<span class="line">+            oldVnode.domElement.innerHTML = &#39;&#39;;</span>
<span class="line">+        }</span>
<span class="line">+    } else if (newChildren.length &gt; 0) {//新的有儿子,老的没儿子</span>
<span class="line">+        for (let i = 0; i &lt; newChildren.length; i++) {</span>
<span class="line">+            oldVnode.domElement.appendChild(createDOMElementFromVnode(newChildren[i]));</span>
<span class="line">+        }</span>
<span class="line">+    }</span>
<span class="line">}</span>
<span class="line">function updateProperties(vnode, oldProps = {}) {</span>
<span class="line">    let domElement = vnode.domElement;</span>
<span class="line">    let newProps = vnode.props;</span>
<span class="line"></span>
<span class="line">    let oldStyle = oldProps.style || {};</span>
<span class="line">    let newStyle = newProps.style || {};</span>
<span class="line">    for (let oldAttrName in oldStyle)</span>
<span class="line">        if (!newStyle[oldAttrName])</span>
<span class="line">            domElement.style[oldAttrName] = &quot;&quot;;</span>
<span class="line"></span>
<span class="line">    for (let oldPropName in oldProps)</span>
<span class="line">        if (!newProps[oldPropName])</span>
<span class="line">            delete domElement[oldPropName];</span>
<span class="line"></span>
<span class="line">    for (let propName in newProps) {</span>
<span class="line">        if (propName == &#39;style&#39;) {</span>
<span class="line">            let styleObject = newProps[propName];</span>
<span class="line">            for (let attr in styleObject)</span>
<span class="line">                domElement.style[attr] = styleObject[attr];//更新行内样式</span>
<span class="line">        } else {</span>
<span class="line">            domElement[propName] = newProps[propName];</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-前面或后面新增加元素" tabindex="-1"><a class="header-anchor" href="#_6-前面或后面新增加元素"><span>6.前面或后面新增加元素</span></a></h2><ul><li>前面后面添加元素 <code>ABCD=&gt;ABCDEF\`\`ABCD=&gt;EFABCD</code></li><li>前面后面删除元素 <code>ABCD=&gt;ABC\`\`ABCD=&gt;BCD</code></li></ul><h3 id="_6-1-src-index-js" tabindex="-1"><a class="header-anchor" href="#_6-1-src-index-js"><span>6.1 src\\index.js</span></a></h3><p>src\\index.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> vnode<span class="token punctuation">,</span> h<span class="token punctuation">,</span> mount<span class="token punctuation">,</span> patch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./vdom&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> root <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> oldVnode <span class="token operator">=</span> <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;ul&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;container&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">     <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;li&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> &#39;</span>
<span class="line">     <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;li&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> &#39;</span>
<span class="line">     <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;li&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> &#39;</span>
<span class="line">     <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;li&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> &#39;</span>
<span class="line"><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> newVnode <span class="token operator">=</span> <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;ul&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;newContainer&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">     <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;li&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> &#39;</span>
<span class="line">     <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;li&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> &#39;</span>
<span class="line">     <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;li&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> &#39;</span>
<span class="line">     <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;li&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> &#39;</span>
<span class="line"></span>
<span class="line"><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">mount</span><span class="token punctuation">(</span>oldVnode<span class="token punctuation">,</span> root<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">patch</span><span class="token punctuation">(</span>oldVnode<span class="token punctuation">,</span> newVnode<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-2-vdom-patch-js" tabindex="-1"><a class="header-anchor" href="#_6-2-vdom-patch-js"><span>6.2 vdom\\patch.js</span></a></h3><p>src\\vdom\\patch.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import vnode, { isVnode, isSameVnode } from &#39;./vnode&#39;;</span>
<span class="line"></span>
<span class="line">//把虚拟DOM节点封装成一个真实DOM节点</span>
<span class="line">function createDOMElementFromVnode(vnode) {</span>
<span class="line">    let children = vnode.children;</span>
<span class="line">    let type = vnode.type;</span>
<span class="line">    let props = vnode.props;</span>
<span class="line">    if (type) {</span>
<span class="line">        let domElement = vnode.domElement = document.createElement(type);</span>
<span class="line">        updateProperties(vnode);</span>
<span class="line">        if (Array.isArray(children)) {</span>
<span class="line">            children.forEach(childVnode =&gt; domElement.appendChild(createDOMElementFromVnode(childVnode)));</span>
<span class="line">        }</span>
<span class="line">    } else {</span>
<span class="line">        vnode.domElement = document.createTextNode(vnode.text);</span>
<span class="line">    }</span>
<span class="line">    return vnode.domElement;</span>
<span class="line">}</span>
<span class="line">export function mount(vnode, root) {</span>
<span class="line">    let newDOMElement = createDOMElementFromVnode(vnode);</span>
<span class="line">    root.appendChild(newDOMElement);</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">export function patch(oldVnode, newVnode) {</span>
<span class="line">    if (oldVnode.type != newVnode.type) {</span>
<span class="line">        return oldVnode.domElement.parentNode.replaceChild(createDOMElementFromVnode(newVnode), oldVnode.domElement);</span>
<span class="line">    }</span>
<span class="line">+    //如果新节点是文本节点，那么直接修改文本内容</span>
<span class="line">+    if (typeof newVnode.text !== &#39;undefined&#39;) {</span>
<span class="line">+        return oldVnode.domElement.textContent = newVnode.text;</span>
<span class="line">+    }</span>
<span class="line">    let domElement = newVnode.domElement = oldVnode.domElement;</span>
<span class="line"></span>
<span class="line">    updateProperties(newVnode, oldVnode.props);</span>
<span class="line">    let oldChildren = oldVnode.children;</span>
<span class="line">    let newChildren = newVnode.children;</span>
<span class="line">    if (oldChildren.length &gt; 0 &amp;&amp; newChildren.length &gt; 0) {</span>
<span class="line">+       updateChildren(domElement, oldChildren, newChildren);</span>
<span class="line">    } else if (oldChildren.length &gt; 0) {//老的有儿子,新的没儿子</span>
<span class="line">        for (let i = 0; i &lt; oldChildren.length; i++) {</span>
<span class="line">            oldVnode.domElement.innerHTML = &#39;&#39;;</span>
<span class="line">        }</span>
<span class="line">    } else if (newChildren.length &gt; 0) {//新的有儿子,老的没儿子</span>
<span class="line">        for (let i = 0; i &lt; newChildren.length; i++) {</span>
<span class="line">            oldVnode.domElement.appendChild(createDOMElementFromVnode(newChildren[i]));</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line">+function updateChildren(parentDOMElement, oldChildren, newChildren) {</span>
<span class="line">+    let oldStartIndex = 0, oldStartVnode = oldChildren[0];</span>
<span class="line">+    let oldEndIndex = oldChildren.length - 1, oldEndVnode = oldChildren[oldEndIndex];</span>
<span class="line"></span>
<span class="line">+    let newStartIndex = 0, newStartVnode = newChildren[0];</span>
<span class="line">+    let newEndIndex = newChildren.length - 1, newEndVnode = newChildren[newEndIndex];</span>
<span class="line">+    while (oldStartIndex &lt;= oldEndIndex &amp;&amp; newStartIndex &lt;= newEndIndex) {</span>
<span class="line">+        if (isSameVnode(oldStartVnode, newStartVnode)) {//顺序不变，顺序遍历完成</span>
<span class="line">+            patch(oldStartVnode, newStartVnode);</span>
<span class="line">+            oldStartVnode = oldChildren[++oldStartIndex];</span>
<span class="line">+            newStartVnode = newChildren[++newStartIndex];</span>
<span class="line">+        } else if (isSameVnode(oldEndVnode, newEndVnode)) {</span>
<span class="line">+            patch(oldEndVnode, newEndVnode);</span>
<span class="line">+            oldEndVnode = oldChildren[--oldEndIndex];</span>
<span class="line">+            newEndVnode = newChildren[--newEndIndex];</span>
<span class="line">+        }</span>
<span class="line">+    }</span>
<span class="line">+    if (newStartIndex &lt;= newEndIndex) {//把没处理的新节点处理完 ABCD=&gt;ABCDEF或ABCD=&gt;EFABCD</span>
<span class="line">+        let beforeDOMElement = newChildren[newEndIndex + 1] == null ? null : newChildren[newEndIndex + 1].domElement;</span>
<span class="line">+        for (let i = newStartIndex; i &lt;= newEndIndex; i++) {</span>
<span class="line">+            parentDOMElement.insertBefore(createDOMElementFromVnode(newChildren[i]), beforeDOMElement);</span>
<span class="line">+        }</span>
<span class="line">+    }</span>
<span class="line">+     if (oldStartIndex &lt;= oldEndIndex) {</span>
<span class="line">+        for (let i = oldStartIndex; i &lt;= oldEndIndex; i++) {</span>
<span class="line">+            if (oldChildren[i])</span>
<span class="line">+                parentDOMElement.removeChild(oldChildren[i].domElement);</span>
<span class="line">+        }</span>
<span class="line">+    }</span>
<span class="line">+}</span>
<span class="line">function updateProperties(vnode, oldProps = {}) {</span>
<span class="line">    let domElement = vnode.domElement;</span>
<span class="line">    let newProps = vnode.props;</span>
<span class="line"></span>
<span class="line">    let oldStyle = oldProps.style || {};</span>
<span class="line">    let newStyle = newProps.style || {};</span>
<span class="line">    for (let oldAttrName in oldStyle)</span>
<span class="line">        if (!newStyle[oldAttrName])</span>
<span class="line">            domElement.style[oldAttrName] = &quot;&quot;;</span>
<span class="line"></span>
<span class="line">    for (let oldPropName in oldProps)</span>
<span class="line">        if (!newProps[oldPropName])</span>
<span class="line">            delete domElement[oldPropName];</span>
<span class="line"></span>
<span class="line">    for (let propName in newProps) {</span>
<span class="line">        if (propName == &#39;style&#39;) {</span>
<span class="line">            let styleObject = newProps[propName];</span>
<span class="line">            for (let attr in styleObject)</span>
<span class="line">                domElement.style[attr] = styleObject[attr];//更新行内样式</span>
<span class="line">        } else {</span>
<span class="line">            domElement[propName] = newProps[propName];</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-头移尾和尾移头" tabindex="-1"><a class="header-anchor" href="#_7-头移尾和尾移头"><span>7.头移尾和尾移头</span></a></h2><ul><li>头部移动到尾部 <code>ABCD=&gt;BCDA</code></li><li>尾部移动到头部 <code>ABCD=&gt;DABC</code></li></ul><h3 id="_7-1-src-index-js" tabindex="-1"><a class="header-anchor" href="#_7-1-src-index-js"><span>7.1 src\\index.js</span></a></h3><p>src\\index.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> vnode<span class="token punctuation">,</span> h<span class="token punctuation">,</span> mount<span class="token punctuation">,</span> patch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./vdom&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> root <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line">1. 前面后面添加元素 \`ABCD=&gt;ABCDEF\` \`ABCD=&gt;EFABCD\`</span>
<span class="line">2. 前面后面删除元素 \`ABCD=&gt;ABC\` \`ABCD=&gt;BCD\`</span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">const</span> oldVnode <span class="token operator">=</span> <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;ul&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;container&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">     <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;li&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> &#39;</span>
<span class="line">     <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;li&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> &#39;</span>
<span class="line">     <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;li&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> &#39;</span>
<span class="line">     <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;li&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> &#39;</span>
<span class="line"><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> newVnode <span class="token operator">=</span> <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;ul&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;newContainer&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">     <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;li&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> &#39;</span>
<span class="line">     <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;li&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> &#39;</span>
<span class="line">     <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;li&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> &#39;</span>
<span class="line">     <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;li&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> &#39;</span>
<span class="line"><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">mount</span><span class="token punctuation">(</span>oldVnode<span class="token punctuation">,</span> root<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">patch</span><span class="token punctuation">(</span>oldVnode<span class="token punctuation">,</span> newVnode<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-2-vdom-patch-js" tabindex="-1"><a class="header-anchor" href="#_7-2-vdom-patch-js"><span>7.2 vdom\\patch.js</span></a></h3><p>src\\vdom\\patch.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import vnode, { isVnode, isSameVnode } from &#39;./vnode&#39;;</span>
<span class="line"></span>
<span class="line">//把虚拟DOM节点封装成一个真实DOM节点</span>
<span class="line">function createDOMElementFromVnode(vnode) {</span>
<span class="line">    let children = vnode.children;</span>
<span class="line">    let type = vnode.type;</span>
<span class="line">    let props = vnode.props;</span>
<span class="line">    if (type) {</span>
<span class="line">        let domElement = vnode.domElement = document.createElement(type);</span>
<span class="line">        updateProperties(vnode);</span>
<span class="line">        if (Array.isArray(children)) {</span>
<span class="line">            children.forEach(childVnode =&gt; domElement.appendChild(createDOMElementFromVnode(childVnode)));</span>
<span class="line">        }</span>
<span class="line">    } else {</span>
<span class="line">        vnode.domElement = document.createTextNode(vnode.text);</span>
<span class="line">    }</span>
<span class="line">    return vnode.domElement;</span>
<span class="line">}</span>
<span class="line">export function mount(vnode, root) {</span>
<span class="line">    let newDOMElement = createDOMElementFromVnode(vnode);</span>
<span class="line">    root.appendChild(newDOMElement);</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">export function patch(oldVnode, newVnode) {</span>
<span class="line">    if (oldVnode.type != newVnode.type) {</span>
<span class="line">        return oldVnode.domElement.parentNode.replaceChild(createDOMElementFromVnode(newVnode), oldVnode.domElement);</span>
<span class="line">    }</span>
<span class="line">    //如果新节点是文本节点，那么直接修改文本内容</span>
<span class="line">    if (typeof newVnode.text !== &#39;undefined&#39;) {</span>
<span class="line">        return oldVnode.domElement.textContent = newVnode.text;</span>
<span class="line">    }</span>
<span class="line">    let domElement = newVnode.domElement = oldVnode.domElement;</span>
<span class="line"></span>
<span class="line">    updateProperties(newVnode, oldVnode.props);</span>
<span class="line">    let oldChildren = oldVnode.children;</span>
<span class="line">    let newChildren = newVnode.children;</span>
<span class="line">    if (oldChildren.length &gt; 0 &amp;&amp; newChildren.length &gt; 0) {</span>
<span class="line">        updateChildren(domElement, oldChildren, newChildren);</span>
<span class="line">    } else if (oldChildren.length &gt; 0) {//老的有儿子,新的没儿子</span>
<span class="line">        for (let i = 0; i &lt; oldChildren.length; i++) {</span>
<span class="line">            oldVnode.domElement.innerHTML = &#39;&#39;;</span>
<span class="line">        }</span>
<span class="line">    } else if (newChildren.length &gt; 0) {//新的有儿子,老的没儿子</span>
<span class="line">        for (let i = 0; i &lt; newChildren.length; i++) {</span>
<span class="line">            oldVnode.domElement.appendChild(createDOMElementFromVnode(newChildren[i]));</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line">function updateChildren(parentDOMElement, oldChildren, newChildren) {</span>
<span class="line">    let oldStartIndex = 0, oldStartVnode = oldChildren[0];</span>
<span class="line">    let oldEndIndex = oldChildren.length - 1, oldEndVnode = oldChildren[oldEndIndex];</span>
<span class="line"></span>
<span class="line">    let newStartIndex = 0, newStartVnode = newChildren[0];</span>
<span class="line">    let newEndIndex = newChildren.length - 1, newEndVnode = newChildren[newEndIndex];</span>
<span class="line">    while (oldStartIndex &lt;= oldEndIndex &amp;&amp; newStartIndex &lt;= newEndIndex) {</span>
<span class="line">        if (isSameVnode(oldStartVnode, newStartVnode)) {//顺序不变，顺序遍历完成</span>
<span class="line">            patch(oldStartVnode, newStartVnode);</span>
<span class="line">            oldStartVnode = oldChildren[++oldStartIndex];</span>
<span class="line">            newStartVnode = newChildren[++newStartIndex];</span>
<span class="line">        } else if (isSameVnode(oldEndVnode, newEndVnode)) {</span>
<span class="line">            patch(oldEndVnode, newEndVnode);</span>
<span class="line">            oldEndVnode = oldChildren[--oldEndIndex];</span>
<span class="line">            newEndVnode = newChildren[--newEndIndex];</span>
<span class="line">+        } else if (isSameVnode(oldStartVnode, newEndVnode)) {</span>
<span class="line">+            patch(oldStartVnode, newEndVnode);</span>
<span class="line">+            parentDOMElement.insertBefore(oldStartVnode.domElement, oldEndVnode.domElement.nextSibling);</span>
<span class="line">+            oldStartVnode = oldChildren[++oldStartIndex];</span>
<span class="line">+            newEndVnode = newChildren[--newEndIndex];</span>
<span class="line">+        } else if (isSameVnode(oldEndVnode, newStartVnode)) {</span>
<span class="line">+            patch(oldEndVnode, newStartVnode);</span>
<span class="line">+            parentDOMElement.insertBefore(oldEndVnode.domElement, oldStartVnode.domElement);</span>
<span class="line">+            oldEndVnode = oldChildren[--oldEndIndex];</span>
<span class="line">+            newStartVnode = newChildren[++newStartIndex];</span>
<span class="line">+        }</span>
<span class="line">    }</span>
<span class="line">    if (newStartIndex &lt;= newEndIndex) {//把没处理的新节点处理完</span>
<span class="line">        let beforeDOMElement = newChildren[newEndIndex + 1] == null ? null : newChildren[newEndIndex + 1].domElement;</span>
<span class="line">        for (let i = newStartIndex; i &lt;= newEndIndex; i++) {</span>
<span class="line">            parentDOMElement.insertBefore(createDOMElementFromVnode(newChildren[i]), beforeDOMElement);</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">    if (oldStartIndex &lt;= oldEndIndex) {</span>
<span class="line">        for (let i = oldStartIndex; i &lt;= oldEndIndex; i++) {</span>
<span class="line">            if (oldChildren[i])</span>
<span class="line">                parentDOMElement.removeChild(oldChildren[i].domElement);</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line">function updateProperties(vnode, oldProps = {}) {</span>
<span class="line">    let domElement = vnode.domElement;</span>
<span class="line">    let newProps = vnode.props;</span>
<span class="line"></span>
<span class="line">    let oldStyle = oldProps.style || {};</span>
<span class="line">    let newStyle = newProps.style || {};</span>
<span class="line">    for (let oldAttrName in oldStyle)</span>
<span class="line">        if (!newStyle[oldAttrName])</span>
<span class="line">            domElement.style[oldAttrName] = &quot;&quot;;</span>
<span class="line"></span>
<span class="line">    for (let oldPropName in oldProps)</span>
<span class="line">        if (!newProps[oldPropName])</span>
<span class="line">            delete domElement[oldPropName];</span>
<span class="line"></span>
<span class="line">    for (let propName in newProps) {</span>
<span class="line">        if (propName == &#39;style&#39;) {</span>
<span class="line">            let styleObject = newProps[propName];</span>
<span class="line">            for (let attr in styleObject)</span>
<span class="line">                domElement.style[attr] = styleObject[attr];//更新行内样式</span>
<span class="line">        } else {</span>
<span class="line">            domElement[propName] = newProps[propName];</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-有key的其它情况" tabindex="-1"><a class="header-anchor" href="#_8-有key的其它情况"><span>8.有key的其它情况</span></a></h2><ul><li>ABCD=&gt;EBADF</li><li>插入E=&gt;把B插入到A前面=&gt;直接跳到 C=&gt;插入F=&gt;删除老节点剩下的C</li></ul><h3 id="_8-1-src-index-js" tabindex="-1"><a class="header-anchor" href="#_8-1-src-index-js"><span>8.1 src\\index.js</span></a></h3><p>src\\index.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> vnode<span class="token punctuation">,</span> h<span class="token punctuation">,</span> mount<span class="token punctuation">,</span> patch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./vdom&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> root <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line">1. 前面后面添加元素 \`ABCD=&gt;ABCDEF\` \`ABCD=&gt;EFABCD\`</span>
<span class="line">2. 前面后面删除元素 \`ABCD=&gt;ABC\` \`ABCD=&gt;BCD\`</span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">const</span> oldVnode <span class="token operator">=</span> <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;ul&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;container&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">     <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;li&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> &#39;</span>
<span class="line">     <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;li&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> &#39;</span>
<span class="line">     <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;li&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> &#39;</span>
<span class="line">     <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;li&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> &#39;</span>
<span class="line"><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> newVnode <span class="token operator">=</span> <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;ul&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;newContainer&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">     <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;li&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> &#39;</span>
<span class="line">     <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;li&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> &#39;</span>
<span class="line">     <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;li&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> &#39;</span>
<span class="line">     <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;li&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> &#39;</span>
<span class="line">     <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;li&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> &#39;</span>
<span class="line"><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">mount</span><span class="token punctuation">(</span>oldVnode<span class="token punctuation">,</span> root<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">patch</span><span class="token punctuation">(</span>oldVnode<span class="token punctuation">,</span> newVnode<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line">插入E</span>
<span class="line">把B插入到A前面</span>
<span class="line">直接跳到 C</span>
<span class="line">插入F</span>
<span class="line">删除老节点剩下的C</span>
<span class="line">*/</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-2-vdom-patch-js" tabindex="-1"><a class="header-anchor" href="#_8-2-vdom-patch-js"><span>8.2 vdom\\patch.js</span></a></h3><p>src\\vdom\\patch.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import vnode, { isVnode, isSameVnode } from &#39;./vnode&#39;;</span>
<span class="line"></span>
<span class="line">//把虚拟DOM节点封装成一个真实DOM节点</span>
<span class="line">function createDOMElementFromVnode(vnode) {</span>
<span class="line">    let children = vnode.children;</span>
<span class="line">    let type = vnode.type;</span>
<span class="line">    let props = vnode.props;</span>
<span class="line">    if (type) {</span>
<span class="line">        let domElement = vnode.domElement = document.createElement(type);</span>
<span class="line">        updateProperties(vnode);</span>
<span class="line">        if (Array.isArray(children)) {</span>
<span class="line">            children.forEach(childVnode =&gt; domElement.appendChild(createDOMElementFromVnode(childVnode)));</span>
<span class="line">        }</span>
<span class="line">    } else {</span>
<span class="line">        vnode.domElement = document.createTextNode(vnode.text);</span>
<span class="line">    }</span>
<span class="line">    return vnode.domElement;</span>
<span class="line">}</span>
<span class="line">export function mount(vnode, root) {</span>
<span class="line">    let newDOMElement = createDOMElementFromVnode(vnode);</span>
<span class="line">    root.appendChild(newDOMElement);</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">export function patch(oldVnode, newVnode) {</span>
<span class="line">    if (oldVnode.type != newVnode.type) {</span>
<span class="line">        return oldVnode.domElement.parentNode.replaceChild(createDOMElementFromVnode(newVnode), oldVnode.domElement);</span>
<span class="line">    }</span>
<span class="line">    //如果新节点是文本节点，那么直接修改文本内容</span>
<span class="line">    if (typeof newVnode.text !== &#39;undefined&#39;) {</span>
<span class="line">        return oldVnode.domElement.textContent = newVnode.text;</span>
<span class="line">    }</span>
<span class="line">    let domElement = newVnode.domElement = oldVnode.domElement;</span>
<span class="line"></span>
<span class="line">    updateProperties(newVnode, oldVnode.props);</span>
<span class="line">    let oldChildren = oldVnode.children;</span>
<span class="line">    let newChildren = newVnode.children;</span>
<span class="line">    if (oldChildren.length &gt; 0 &amp;&amp; newChildren.length &gt; 0) {</span>
<span class="line">        updateChildren(domElement, oldChildren, newChildren);</span>
<span class="line">    } else if (oldChildren.length &gt; 0) {//老的有儿子,新的没儿子</span>
<span class="line">        for (let i = 0; i &lt; oldChildren.length; i++) {</span>
<span class="line">            oldVnode.domElement.innerHTML = &#39;&#39;;</span>
<span class="line">        }</span>
<span class="line">    } else if (newChildren.length &gt; 0) {//新的有儿子,老的没儿子</span>
<span class="line">        for (let i = 0; i &lt; newChildren.length; i++) {</span>
<span class="line">            oldVnode.domElement.appendChild(createDOMElementFromVnode(newChildren[i]));</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line">+function createKeyToIndexMap(children) {</span>
<span class="line">+    let map = {};</span>
<span class="line">+    for (let i = 0; i &lt; children.length; i++) {</span>
<span class="line">+        let key = children[i].key;</span>
<span class="line">+        if (key) map[key] = i;</span>
<span class="line">+    }</span>
<span class="line">+    return map;</span>
<span class="line">+}</span>
<span class="line">function updateChildren(parentDOMElement, oldChildren, newChildren) {</span>
<span class="line">    let oldStartIndex = 0, oldStartVnode = oldChildren[0];</span>
<span class="line">    let oldEndIndex = oldChildren.length - 1, oldEndVnode = oldChildren[oldEndIndex];</span>
<span class="line"></span>
<span class="line">    let newStartIndex = 0, newStartVnode = newChildren[0];</span>
<span class="line">    let newEndIndex = newChildren.length - 1, newEndVnode = newChildren[newEndIndex];</span>
<span class="line">+    let oldKeyToIndexMap = createKeyToIndexMap(oldChildren);</span>
<span class="line">    while (oldStartIndex &lt;= oldEndIndex &amp;&amp; newStartIndex &lt;= newEndIndex) {</span>
<span class="line">+        if (!oldStartVnode) {</span>
<span class="line">+            oldStartVnode = oldChildren[++oldStartIndex];</span>
<span class="line">+            oldStartVnode.key &amp;&amp; console.log(\`直接跳到\`, oldStartVnode.key);</span>
<span class="line">+        } else if (!oldEndVnode) {</span>
<span class="line">+            oldEndVnode = oldChildren[--oldEndIndex];</span>
<span class="line">+            oldEndVnode.key &amp;&amp; console.log(\`直接跳到\`, oldEndVnode.key);</span>
<span class="line">        } else if (isSameVnode(oldStartVnode, newStartVnode)) {//顺序不变，顺序遍历完成</span>
<span class="line">            patch(oldStartVnode, newStartVnode);</span>
<span class="line">            oldStartVnode = oldChildren[++oldStartIndex];</span>
<span class="line">            newStartVnode = newChildren[++newStartIndex];</span>
<span class="line">        } else if (isSameVnode(oldEndVnode, newEndVnode)) {</span>
<span class="line">            patch(oldEndVnode, newEndVnode);</span>
<span class="line">            oldEndVnode = oldChildren[--oldEndIndex];</span>
<span class="line">            newEndVnode = newChildren[--newEndIndex];</span>
<span class="line">        } else if (isSameVnode(oldStartVnode, newEndVnode)) {</span>
<span class="line">            patch(oldStartVnode, newEndVnode);</span>
<span class="line">            parentDOMElement.insertBefore(oldStartVnode.domElement, oldEndVnode.domElement.nextSibling);</span>
<span class="line">            oldStartVnode = oldChildren[++oldStartIndex];</span>
<span class="line">            newEndVnode = newChildren[--newEndIndex];</span>
<span class="line">        } else if (isSameVnode(oldEndVnode, newStartVnode)) {</span>
<span class="line">            patch(oldEndVnode, newStartVnode);</span>
<span class="line">            parentDOMElement.insertBefore(oldEndVnode.domElement, oldStartVnode.domElement);</span>
<span class="line">            oldEndVnode = oldChildren[--oldEndIndex];</span>
<span class="line">            newStartVnode = newChildren[++newStartIndex];</span>
<span class="line">+        } else {// ABCD=&gt;EBADF</span>
<span class="line">+            let oldIndexByKey = oldKeyToIndexMap[newStartVnode.key];</span>
<span class="line">+            if (oldIndexByKey == null) {</span>
<span class="line">+                console.log(\`插入\${newStartVnode.key}\`);</span>
<span class="line">+                parentDOMElement.insertBefore(createDOMElementFromVnode(newStartVnode), oldStartVnode.domElement);</span>
<span class="line">+                newStartVnode = newChildren[++newStartIndex];</span>
<span class="line">+            } else {</span>
<span class="line">+               let oldVnodeToMove = oldChildren[oldIndexByKey];</span>
<span class="line">+                if (oldVnodeToMove.type !== newStartVnode.type) {</span>
<span class="line">+                    console.log(\`key一样,type不一样，删除重建\`);</span>
<span class="line">+                    parentDOMElement.insertBefore(createDOMElementFromVnode(newStartVnode), oldStartVnode.domElement);</span>
<span class="line">+                } else {</span>
<span class="line">+                    patch(oldVnodeToMove, newStartVnode);</span>
<span class="line">+                    oldChildren[oldIndexByKey] = undefined;//设置为undefined,后面遇到了绕过去</span>
<span class="line">+                    console.log(\`把老\${oldVnodeToMove.key}插入到\${oldStartVnode.key}前面\`, oldStartVnode);</span>
<span class="line">+                    parentDOMElement.insertBefore(oldVnodeToMove.domElement, oldStartVnode.domElement);</span>
<span class="line">+                }</span>
<span class="line">+                newStartVnode = newChildren[++newStartIndex];</span>
<span class="line">+            }</span>
<span class="line">+        }</span>
<span class="line">    }</span>
<span class="line">    if (newStartIndex &lt;= newEndIndex) {//把没处理的新节点处理完</span>
<span class="line">        let beforeDOMElement = newChildren[newEndIndex + 1] == null ? null : newChildren[newEndIndex + 1].domElement;</span>
<span class="line">        for (let i = newStartIndex; i &lt;= newEndIndex; i++) {</span>
<span class="line">+            console.log(\`插入新节点剩下的\${newChildren[i].key}\`);</span>
<span class="line">            parentDOMElement.insertBefore(createDOMElementFromVnode(newChildren[i]), beforeDOMElement);</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">    if (oldStartIndex &lt;= oldEndIndex) {</span>
<span class="line">        for (let i = oldStartIndex; i &lt;= oldEndIndex; i++) {</span>
<span class="line">            if (oldChildren[i]) {</span>
<span class="line">+                console.log(\`删除老节点剩下的\${oldChildren[i].key}\`);</span>
<span class="line">                parentDOMElement.removeChild(oldChildren[i].domElement);</span>
<span class="line">            }</span>
<span class="line"></span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line">function updateProperties(vnode, oldProps = {}) {</span>
<span class="line">    let domElement = vnode.domElement;</span>
<span class="line">    let newProps = vnode.props;</span>
<span class="line"></span>
<span class="line">    let oldStyle = oldProps.style || {};</span>
<span class="line">    let newStyle = newProps.style || {};</span>
<span class="line">    for (let oldAttrName in oldStyle)</span>
<span class="line">        if (!newStyle[oldAttrName])</span>
<span class="line">            domElement.style[oldAttrName] = &quot;&quot;;</span>
<span class="line"></span>
<span class="line">    for (let oldPropName in oldProps)</span>
<span class="line">        if (!newProps[oldPropName])</span>
<span class="line">            delete domElement[oldPropName];</span>
<span class="line"></span>
<span class="line">    for (let propName in newProps) {</span>
<span class="line">        if (propName == &#39;style&#39;) {</span>
<span class="line">            let styleObject = newProps[propName];</span>
<span class="line">            for (let attr in styleObject)</span>
<span class="line">                domElement.style[attr] = styleObject[attr];//更新行内样式</span>
<span class="line">        } else {</span>
<span class="line">            domElement[propName] = newProps[propName];</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-key可有可无" tabindex="-1"><a class="header-anchor" href="#_9-key可有可无"><span>9.key可有可无</span></a></h2><p>src\\index.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> vnode<span class="token punctuation">,</span> h<span class="token punctuation">,</span> mount<span class="token punctuation">,</span> patch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./vdom&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> root <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> oldVnode <span class="token operator">=</span> <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;ul&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;container&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">     <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;li&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> &#39;</span>
<span class="line">     <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;li&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> &#39;</span>
<span class="line">     <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;li&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> &#39;</span>
<span class="line">     <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;li&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> &#39;</span>
<span class="line"><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> newVnode <span class="token operator">=</span> <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;ul&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;newContainer&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">     <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> &#39;</span>
<span class="line">     <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;span&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> &#39;</span>
<span class="line">     <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> &#39;</span>
<span class="line">     <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> &#39;</span>
<span class="line">     <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> &#39;</span>
<span class="line">     <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;li&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> &#39;</span>
<span class="line"><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">mount</span><span class="token punctuation">(</span>oldVnode<span class="token punctuation">,</span> root<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">patch</span><span class="token punctuation">(</span>oldVnode<span class="token punctuation">,</span> newVnode<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_10-默认key" tabindex="-1"><a class="header-anchor" href="#_10-默认key"><span>10.默认key</span></a></h2><p>src\\index.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> vnode<span class="token punctuation">,</span> h<span class="token punctuation">,</span> mount<span class="token punctuation">,</span> patch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./vdom&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> root <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> oldVnode <span class="token operator">=</span> <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;ul&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;container&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">     <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;li&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> &#39;</span>
<span class="line">     <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;li&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> &#39;</span>
<span class="line">     <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;li&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> &#39;</span>
<span class="line">     <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;li&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> &#39;</span>
<span class="line"><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> newVnode <span class="token operator">=</span> <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;ul&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;newContainer&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">     <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;li&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> &#39;</span>
<span class="line">     <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;li&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> &#39;</span>
<span class="line">     <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;li&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> &#39;</span>
<span class="line">     <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;li&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> &#39;</span>
<span class="line"><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">mount</span><span class="token punctuation">(</span>oldVnode<span class="token punctuation">,</span> root<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">patch</span><span class="token punctuation">(</span>oldVnode<span class="token punctuation">,</span> newVnode<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,83)])])}const c=s(l,[["render",t]]),d=JSON.parse('{"path":"/strong/78.vue-domdiff.html","title":"","lang":"en-US","frontmatter":{},"git":{"updatedTime":1681290319000,"contributors":[{"name":"yutao","username":"yutao","email":"642231346@qq.com","commits":1,"url":"https://github.com/yutao"}],"changelog":[{"hash":"f5ab8c9d34991ec274f7f652439afe5b2afb6147","time":1681290319000,"email":"642231346@qq.com","author":"yutao","message":"modify"}]},"filePathRelative":"strong/78.vue-domdiff.md"}');export{c as comp,d as data};
