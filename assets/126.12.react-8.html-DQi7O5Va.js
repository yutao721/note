import{_ as s,c as a,a as e,o as p}from"./app-CD1YpnS1.js";const t={};function l(i,n){return p(),a("div",null,[...n[0]||(n[0]=[e(`<h2 id="_7-初次渲染" tabindex="-1"><a class="header-anchor" href="#_7-初次渲染"><span>7.初次渲染</span></a></h2><h3 id="_7-1-src-index-js" tabindex="-1"><a class="header-anchor" href="#_7-1-src-index-js"><span>7.1 src\\index.js</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> ReactDOM <span class="token keyword">from</span> <span class="token string">&#39;./react-dom&#39;</span><span class="token punctuation">;</span></span>
<span class="line">ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span>hello<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span><span class="token punctuation">,</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-2-src-react-dom-index-js" tabindex="-1"><a class="header-anchor" href="#_7-2-src-react-dom-index-js"><span>7.2 src\\react-dom\\index.js</span></a></h3><p>src\\react-dom\\index.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createFiberRoot <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../react-reconciler/ReactFiberRoot&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> updateContainer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../react-reconciler/ReactFiberReconciler&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token parameter">element<span class="token punctuation">,</span> container</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> fiberRoot <span class="token operator">=</span> <span class="token function">createFiberRoot</span><span class="token punctuation">(</span>container<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token function">updateContainer</span><span class="token punctuation">(</span>element<span class="token punctuation">,</span> fiberRoot<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">const</span> ReactDOM <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    render</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> ReactDOM<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-3-reactfiberroot-js" tabindex="-1"><a class="header-anchor" href="#_7-3-reactfiberroot-js"><span>7.3 ReactFiberRoot.js</span></a></h3><p>src\\react-reconciler\\ReactFiberRoot.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createHostRootFiber <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./ReactFiber&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> initializeUpdateQueue <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./ReactUpdateQueue&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">createFiberRoot</span><span class="token punctuation">(</span><span class="token parameter">containerInfo</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> root <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FiberRootNode</span><span class="token punctuation">(</span>containerInfo<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">const</span> hostRootFiber <span class="token operator">=</span> <span class="token function">createHostRootFiber</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    root<span class="token punctuation">.</span>current <span class="token operator">=</span> hostRootFiber<span class="token punctuation">;</span></span>
<span class="line">    hostRootFiber<span class="token punctuation">.</span>stateNode <span class="token operator">=</span> root<span class="token punctuation">;</span></span>
<span class="line">    <span class="token function">initializeUpdateQueue</span><span class="token punctuation">(</span>hostRootFiber<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> root<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">FiberRootNode</span><span class="token punctuation">(</span><span class="token parameter">containerInfo</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>containerInfo <span class="token operator">=</span> containerInfo<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-4-reactfiber-js" tabindex="-1"><a class="header-anchor" href="#_7-4-reactfiber-js"><span>7.4 ReactFiber.js</span></a></h3><p>src\\react-reconciler\\ReactFiber.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> HostRoot <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./ReactWorkTags&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * 创建根fiber</span>
<span class="line"> * <span class="token keyword">@returns</span> 根fiber</span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">createHostRootFiber</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token function">createFiber</span><span class="token punctuation">(</span>HostRoot<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * 创建fiber</span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">tag</span> fiber类型</span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">pendingProps</span> 新属性对象</span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">key</span> 唯一标识</span>
<span class="line"> * <span class="token keyword">@returns</span> 创建的fiber</span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">createFiber</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">tag<span class="token punctuation">,</span> pendingProps<span class="token punctuation">,</span> key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">FiberNode</span><span class="token punctuation">(</span>tag<span class="token punctuation">,</span> pendingProps<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * fiber构建函数</span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">tag</span> fiber类型</span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">pendingProps</span>  新属性对象</span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">key</span> 唯一标识</span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">FiberNode</span><span class="token punctuation">(</span><span class="token parameter">tag<span class="token punctuation">,</span> pendingProps<span class="token punctuation">,</span> key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>tag <span class="token operator">=</span> tag<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>pendingProps <span class="token operator">=</span> pendingProps<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>key <span class="token operator">=</span> key<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-5-reactupdatequeue-js" tabindex="-1"><a class="header-anchor" href="#_7-5-reactupdatequeue-js"><span>7.5 ReactUpdateQueue.js</span></a></h3><p>src\\react-reconciler\\ReactUpdateQueue.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * 初始化fiber节点上的更新队列 </span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">fiber</span> </span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">initializeUpdateQueue</span><span class="token punctuation">(</span><span class="token parameter">fiber</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> queue <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">//这是一个环状链表，存放着等待生效的更新</span></span>
<span class="line">        <span class="token literal-property property">shared</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token literal-property property">pending</span><span class="token operator">:</span> <span class="token keyword">null</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    fiber<span class="token punctuation">.</span>updateQueue <span class="token operator">=</span> queue<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * 创建更新对象</span>
<span class="line"> * <span class="token keyword">@returns</span> 更新对象</span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">createUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * 把更新对象添加到fiber的更新队列中</span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">fiber</span> fiber节点</span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">update</span> 新的更新对象</span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">enqueueUpdate</span><span class="token punctuation">(</span><span class="token parameter">fiber<span class="token punctuation">,</span> update</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">//取出fiber上的更新队列</span></span>
<span class="line">    <span class="token keyword">const</span> updateQueue <span class="token operator">=</span> fiber<span class="token punctuation">.</span>updateQueue<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">const</span> sharedQueue <span class="token operator">=</span> updateQueue<span class="token punctuation">.</span>shared<span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">//取出等待生效的更新环状链表</span></span>
<span class="line">    <span class="token keyword">const</span> pending <span class="token operator">=</span> sharedQueue<span class="token punctuation">.</span>pending<span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">//如果环状链表为空</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>pending<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">//构建环状链表 </span></span>
<span class="line">        update<span class="token punctuation">.</span>next <span class="token operator">=</span> update<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">//让新的更新的next指向第一个更新</span></span>
<span class="line">        update<span class="token punctuation">.</span>next <span class="token operator">=</span> pending<span class="token punctuation">.</span>next<span class="token punctuation">;</span></span>
<span class="line">        <span class="token comment">//让原来的pending指向新的更新</span></span>
<span class="line">        pending<span class="token punctuation">.</span>next <span class="token operator">=</span> update<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token comment">//sharedQueue的pending指向新的更新</span></span>
<span class="line">    sharedQueue<span class="token punctuation">.</span>pending <span class="token operator">=</span> update<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-6-reactfiberreconciler-js" tabindex="-1"><a class="header-anchor" href="#_7-6-reactfiberreconciler-js"><span>7.6 ReactFiberReconciler.js</span></a></h3><p>src\\react-reconciler\\ReactFiberReconciler.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createUpdate<span class="token punctuation">,</span> enqueueUpdate <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./ReactUpdateQueue&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> scheduleUpdateOnFiber <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./ReactFiberWorkLoop&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * 把element元素渲染到容器中</span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">element</span> 要渲染的虚拟DOM</span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">container</span> 容器</span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">updateContainer</span><span class="token punctuation">(</span><span class="token parameter">element<span class="token punctuation">,</span> container</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">//获取HostRootFiber</span></span>
<span class="line">    <span class="token keyword">const</span> current <span class="token operator">=</span> container<span class="token punctuation">.</span>current<span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">//创建一个更新对象</span></span>
<span class="line">    <span class="token keyword">const</span> update <span class="token operator">=</span> <span class="token function">createUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">//更新对象的payload为{ element }</span></span>
<span class="line">    update<span class="token punctuation">.</span>payload <span class="token operator">=</span> <span class="token punctuation">{</span> element <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">//把更新对象添加到更新队列中</span></span>
<span class="line">    <span class="token function">enqueueUpdate</span><span class="token punctuation">(</span>current<span class="token punctuation">,</span> update<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">//开始从HostRootFiber调度更新</span></span>
<span class="line">    <span class="token function">scheduleUpdateOnFiber</span><span class="token punctuation">(</span>current<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-7-reactfiberworkloop-js" tabindex="-1"><a class="header-anchor" href="#_7-7-reactfiberworkloop-js"><span>7.7 ReactFiberWorkLoop.js</span></a></h3><p>src\\react-reconciler\\ReactFiberWorkLoop.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> HostRoot <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./ReactWorkTags&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * 向上获取HostRoot节点</span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">sourceFiber</span> 更新来源fiber</span>
<span class="line"> * <span class="token keyword">@returns</span> </span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">markUpdateLaneFromFiberToRoot</span><span class="token punctuation">(</span><span class="token parameter">sourceFiber</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> node <span class="token operator">=</span> sourceFiber<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">let</span> parent <span class="token operator">=</span> node<span class="token punctuation">.</span>return<span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">//一直向上找父亲，找不到为止</span></span>
<span class="line">    <span class="token keyword">while</span> <span class="token punctuation">(</span>parent<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        node <span class="token operator">=</span> parent<span class="token punctuation">;</span></span>
<span class="line">        parent <span class="token operator">=</span> parent<span class="token punctuation">.</span>return<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">     <span class="token comment">//如果找到的是HostRoot就返回FiberRootNode,其实就是容器div</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>tag <span class="token operator">===</span> HostRoot<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> node<span class="token punctuation">.</span>stateNode<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">scheduleUpdateOnFiber</span><span class="token punctuation">(</span><span class="token parameter">fiber</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">//向上获取HostRoot节点</span></span>
<span class="line">    <span class="token keyword">const</span> root <span class="token operator">=</span> <span class="token function">markUpdateLaneFromFiberToRoot</span><span class="token punctuation">(</span>fiber<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">//执行HostRoot上的更新</span></span>
<span class="line">    <span class="token function">performSyncWorkOnRoot</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * 开始执行FiberRootNode上的工作</span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">root</span>  FiberRootNode</span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">performSyncWorkOnRoot</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-8-reactworktags-js" tabindex="-1"><a class="header-anchor" href="#_7-8-reactworktags-js"><span>7.8 ReactWorkTags.js</span></a></h3><p>src\\react-reconciler\\ReactWorkTags.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token comment">//根fiber,对应的其实是容器containerInfo</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> HostRoot <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-同步渲染级" tabindex="-1"><a class="header-anchor" href="#_8-同步渲染级"><span>8.同步渲染级</span></a></h2><h3 id="_8-1-reactfiberreconciler-js" tabindex="-1"><a class="header-anchor" href="#_8-1-reactfiberreconciler-js"><span>8.1 ReactFiberReconciler.js</span></a></h3><p>src\\react-reconciler\\ReactFiberReconciler.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import { createUpdate, enqueueUpdate } from &#39;./ReactUpdateQueue&#39;;</span>
<span class="line">+import { scheduleUpdateOnFiber, requestUpdateLane, requestEventTime } from &#39;./ReactFiberWorkLoop&#39;;</span>
<span class="line">/**</span>
<span class="line"> * 把element元素渲染到容器中</span>
<span class="line"> * @param {*} element 要渲染的虚拟DOM</span>
<span class="line"> * @param {*} container 容器</span>
<span class="line"> */</span>
<span class="line">export function updateContainer(element, container) {</span>
<span class="line">    //获取HostRootFiber</span>
<span class="line">    const current = container.current;</span>
<span class="line">+   //获取事件开始时间，一般是performance.now()</span>
<span class="line">+   const eventTime = requestEventTime();</span>
<span class="line">+   //获取更新优先级</span>
<span class="line">+   const lane = requestUpdateLane(current);</span>
<span class="line">    //创建一个更新对象</span>
<span class="line">+   const update = createUpdate(eventTime, lane);</span>
<span class="line">    //更新对象的payload为{ element }</span>
<span class="line">    update.payload = { element };</span>
<span class="line">    //把更新对象添加到更新队列中</span>
<span class="line">    enqueueUpdate(current, update);</span>
<span class="line">    //开始从HostRootFiber调度更新</span>
<span class="line">+   scheduleUpdateOnFiber(current, lane, eventTime);</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-2-reactfiber-js" tabindex="-1"><a class="header-anchor" href="#_8-2-reactfiber-js"><span>8.2 ReactFiber.js</span></a></h3><p>src\\react-reconciler\\ReactFiber.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import { HostRoot } from &#39;./ReactWorkTags&#39;;</span>
<span class="line">/**</span>
<span class="line"> * 创建根fiber</span>
<span class="line"> * @returns 根fiber</span>
<span class="line"> */</span>
<span class="line">export function createHostRootFiber() {</span>
<span class="line">    return createFiber(HostRoot);</span>
<span class="line">}</span>
<span class="line">/**</span>
<span class="line"> * 创建fiber</span>
<span class="line"> * @param {*} tag fiber类型</span>
<span class="line"> * @param {*} pendingProps 新属性对象</span>
<span class="line"> * @param {*} key 唯一标识</span>
<span class="line"> * @returns 创建的fiber</span>
<span class="line"> */</span>
<span class="line">const createFiber = function (tag, pendingProps, key) {</span>
<span class="line">    return new FiberNode(tag, pendingProps, key);</span>
<span class="line">};</span>
<span class="line">/**</span>
<span class="line"> * fiber构建函数</span>
<span class="line"> * @param {*} tag fiber类型</span>
<span class="line"> * @param {*} pendingProps  新属性对象</span>
<span class="line"> * @param {*} key 唯一标识</span>
<span class="line"> */</span>
<span class="line">function FiberNode(tag, pendingProps, key) {</span>
<span class="line">    this.tag = tag;</span>
<span class="line">    this.pendingProps = pendingProps;</span>
<span class="line">    this.key = key;</span>
<span class="line">}</span>
<span class="line">+/**</span>
<span class="line">+ * 基于老的current创建新的workInProgress</span>
<span class="line">+ * @param {*} current 老的fiber</span>
<span class="line">+ * @returns </span>
<span class="line">+*/</span>
<span class="line">+export function createWorkInProgress(current, pendingProps) {</span>
<span class="line">+    let workInProgress = createFiber(current.tag, pendingProps, current.key);</span>
<span class="line">+    workInProgress.childLanes = current.childLanes;</span>
<span class="line">+    workInProgress.lanes = current.lanes;</span>
<span class="line">+    current.alternate = workInProgress;</span>
<span class="line">+    return workInProgress;</span>
<span class="line">+}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-3-reactupdatequeue-js" tabindex="-1"><a class="header-anchor" href="#_8-3-reactupdatequeue-js"><span>8.3 ReactUpdateQueue.js</span></a></h3><p>src\\react-reconciler\\ReactUpdateQueue.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">/**</span>
<span class="line"> * 初始化fiber节点上的更新队列 </span>
<span class="line"> * @param {*} fiber </span>
<span class="line"> */</span>
<span class="line">export function initializeUpdateQueue(fiber) {</span>
<span class="line">    const queue = {</span>
<span class="line">        //这是一个环状链表，存放着等待生效的更新</span>
<span class="line">        shared: {</span>
<span class="line">            pending: null</span>
<span class="line">        }</span>
<span class="line">    };</span>
<span class="line">    fiber.updateQueue = queue;</span>
<span class="line">}</span>
<span class="line">/**</span>
<span class="line"> * 创建更新对象</span>
<span class="line"> * @returns 更新对象</span>
<span class="line"> */</span>
<span class="line">export function createUpdate(eventTime, lane) {</span>
<span class="line">    return {</span>
<span class="line">+       // 任务时间，通过performance.now()获取的毫秒数</span>
<span class="line">+       eventTime,</span>
<span class="line">+       // 更新优先级</span>
<span class="line">+       lane,</span>
<span class="line">+       //更新所携带的状态</span>
<span class="line">+       //根组件中为React.element，即ReactDOM.render的第一个参数</span>
<span class="line">+       payload: null,</span>
<span class="line">+       // 指向下一个update</span>
<span class="line">+       next: null</span>
<span class="line">    };</span>
<span class="line">}</span>
<span class="line">/**</span>
<span class="line"> * 把更新对象添加到fiber的更新队列中</span>
<span class="line"> * @param {*} fiber fiber节点</span>
<span class="line"> * @param {*} update 新的更新对象</span>
<span class="line"> */</span>
<span class="line">export function enqueueUpdate(fiber, update) {</span>
<span class="line">    //取出fiber上的更新队列</span>
<span class="line">    const updateQueue = fiber.updateQueue;</span>
<span class="line">    const sharedQueue = updateQueue.shared;</span>
<span class="line">    //取出等待生效的更新环状链表</span>
<span class="line">    const pending = sharedQueue.pending;</span>
<span class="line">    //如果环状链表为空</span>
<span class="line">    if (!pending) {</span>
<span class="line">        //构建环状链表 </span>
<span class="line">        update.next = update;</span>
<span class="line">    } else {</span>
<span class="line">        //让新的更新的next指向第一个更新</span>
<span class="line">        update.next = pending.next;</span>
<span class="line">        //让原来的pending指向新的更新</span>
<span class="line">        pending.next = update;</span>
<span class="line">    }</span>
<span class="line">    //sharedQueue的pending指向新的更新</span>
<span class="line">    sharedQueue.pending = update;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-4-reactfiberworkloop-js" tabindex="-1"><a class="header-anchor" href="#_8-4-reactfiberworkloop-js"><span>8.4 ReactFiberWorkLoop.js</span></a></h3><p>src\\react-reconciler\\ReactFiberWorkLoop.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> HostRoot <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./ReactWorkTags&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span><span class="token keyword">import</span> <span class="token punctuation">{</span> NoTimestamp<span class="token punctuation">,</span> SyncLane<span class="token punctuation">,</span> mergeLanes<span class="token punctuation">,</span> markRootUpdated<span class="token punctuation">,</span> NoLanes<span class="token punctuation">,</span> getNextLanes<span class="token punctuation">,</span> <span class="token operator">+</span>includesSomeLane <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./ReactFiberLane&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span><span class="token keyword">import</span> <span class="token punctuation">{</span> now <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../scheduler&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span><span class="token keyword">import</span> <span class="token punctuation">{</span> createWorkInProgress <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./ReactFiber&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span><span class="token keyword">let</span> currentEventTime <span class="token operator">=</span> NoTimestamp<span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span><span class="token keyword">let</span> workInProgress <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span><span class="token keyword">export</span> <span class="token keyword">let</span> subtreeRenderLanes <span class="token operator">=</span> NoLanes<span class="token punctuation">;</span></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * 从触发状态更新的fiber通过一直往上找return得到rootFiber</span>
<span class="line"> * 找的过程都会将lane收集到每个parent.childLanes上</span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">sourceFiber</span> 更新来源fiber</span>
<span class="line"> * <span class="token keyword">@returns</span> </span>
<span class="line"> */</span></span>
<span class="line"><span class="token operator">+</span><span class="token keyword">function</span> <span class="token function">markUpdateLaneFromFiberToRoot</span><span class="token punctuation">(</span><span class="token parameter">sourceFiber<span class="token punctuation">,</span> lane</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>   <span class="token comment">//更新现有fiber上的lanes</span></span>
<span class="line"><span class="token operator">+</span>   sourceFiber<span class="token punctuation">.</span>lanes <span class="token operator">=</span> <span class="token function">mergeLanes</span><span class="token punctuation">(</span>sourceFiber<span class="token punctuation">.</span>lanes<span class="token punctuation">,</span> lane<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">let</span> node <span class="token operator">=</span> sourceFiber<span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// 从产生更新的fiber节点开始，向上收集childLanes</span></span>
<span class="line">    <span class="token keyword">let</span> parent <span class="token operator">=</span> node<span class="token punctuation">.</span>return<span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">//到rootFiber，其parent为null，则会跳出while</span></span>
<span class="line">    <span class="token keyword">while</span> <span class="token punctuation">(</span>parent<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>       parent<span class="token punctuation">.</span>childLanes <span class="token operator">=</span> <span class="token function">mergeLanes</span><span class="token punctuation">(</span>parent<span class="token punctuation">.</span>childLanes<span class="token punctuation">,</span> lane<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        node <span class="token operator">=</span> parent<span class="token punctuation">;</span></span>
<span class="line">        parent <span class="token operator">=</span> parent<span class="token punctuation">.</span>return<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">     <span class="token comment">//如果找到的是HostRoot就返回FiberRootNode,其实就是容器div</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>tag <span class="token operator">===</span> HostRoot<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> node<span class="token punctuation">.</span>stateNode<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token operator">+</span><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">scheduleUpdateOnFiber</span><span class="token punctuation">(</span><span class="token parameter">fiber<span class="token punctuation">,</span> lane<span class="token punctuation">,</span> eventTime</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>    <span class="token comment">//向上获取HostRoot节点并向上收集fiber.childLanes</span></span>
<span class="line"><span class="token operator">+</span>    <span class="token keyword">const</span> root <span class="token operator">=</span> <span class="token function">markUpdateLaneFromFiberToRoot</span><span class="token punctuation">(</span>fiber<span class="token punctuation">,</span> lane<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>    <span class="token comment">//在root上标记更新，将update的lane放到root.pendingLane</span></span>
<span class="line"><span class="token operator">+</span>    <span class="token function">markRootUpdated</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> lane<span class="token punctuation">,</span> eventTime<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>    <span class="token keyword">if</span> <span class="token punctuation">(</span>lane <span class="token operator">===</span> SyncLane<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>        <span class="token comment">//执行HostRoot上的更新</span></span>
<span class="line"><span class="token operator">+</span>        <span class="token function">performSyncWorkOnRoot</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>    <span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">+</span><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * 开始执行FiberRootNode上的工作</span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">root</span>  FiberRootNode</span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">performSyncWorkOnRoot</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>   <span class="token keyword">let</span> lanes <span class="token operator">=</span> <span class="token function">getNextLanes</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> NoLanes<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>   <span class="token function">renderRootSync</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> lanes<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">+</span><span class="token doc-comment comment">/**</span>
<span class="line">+ * 刷新栈帧: 重置FiberRoot上的全局属性和fiber树构造循环过程中的全局变量</span>
<span class="line">+ * @param <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">root</span> </span>
<span class="line">+ * @param <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">lanes</span> </span>
<span class="line">+ */</span></span>
<span class="line"><span class="token operator">+</span><span class="token keyword">function</span> <span class="token function">prepareFreshStack</span><span class="token punctuation">(</span><span class="token parameter">root<span class="token punctuation">,</span> lanes</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>    root<span class="token punctuation">.</span>finishedWork <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>    root<span class="token punctuation">.</span>finishedLanes <span class="token operator">=</span> NoLanes<span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>    workInProgress <span class="token operator">=</span> <span class="token function">createWorkInProgress</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>current<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>    subtreeRenderLanes <span class="token operator">=</span> lanes<span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">+</span></span>
<span class="line"><span class="token operator">+</span><span class="token keyword">function</span> <span class="token function">renderRootSync</span><span class="token punctuation">(</span><span class="token parameter">root<span class="token punctuation">,</span> lanes</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>    <span class="token function">prepareFreshStack</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> lanes<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>    <span class="token function">workLoopSync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">+</span><span class="token keyword">function</span> <span class="token function">workLoopSync</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>    <span class="token keyword">while</span> <span class="token punctuation">(</span>workInProgress<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>        <span class="token function">performUnitOfWork</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>    <span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">+</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">+</span><span class="token keyword">function</span> <span class="token function">performUnitOfWork</span><span class="token punctuation">(</span><span class="token parameter">unitOfWork</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">includesSomeLane</span><span class="token punctuation">(</span>subtreeRenderLanes<span class="token punctuation">,</span> unitOfWork<span class="token punctuation">.</span>lanes<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;处理&#39;</span><span class="token punctuation">,</span> unitOfWork<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>        workInProgress <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>        workInProgress <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>    <span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">+</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">+</span><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">requestEventTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>    currentEventTime <span class="token operator">=</span> <span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>    <span class="token keyword">return</span> currentEventTime<span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">+</span></span>
<span class="line"><span class="token operator">+</span><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">requestUpdateLane</span><span class="token punctuation">(</span><span class="token parameter">fiber</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>    <span class="token keyword">return</span> SyncLane<span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-5-reactfiberlane-js" tabindex="-1"><a class="header-anchor" href="#_8-5-reactfiberlane-js"><span>8.5 ReactFiberLane.js</span></a></h3><p>src\\react-reconciler\\ReactFiberLane.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> NoLanePriority <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> DefaultLanePriority <span class="token operator">=</span> <span class="token number">8</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> NoLanes <span class="token operator">=</span> <span class="token number">0b0000000000000000000000000000000</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//同步车道</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> SyncLane <span class="token operator">=</span> <span class="token number">0b0000000000000000000000000000001</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> NoTimestamp <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * 把 a 和 b合并成一个Lanes(优先级分组)</span>
<span class="line"> * 生成一个新的优先级范围</span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">mergeLanes</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> a <span class="token operator">|</span> b<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">markRootUpdated</span><span class="token punctuation">(</span><span class="token parameter">root<span class="token punctuation">,</span> updateLane</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">//将本次更新的lane放入root的pendingLanes</span></span>
<span class="line">    root<span class="token punctuation">.</span>pendingLanes <span class="token operator">|=</span> updateLane<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">getNextLanes</span><span class="token punctuation">(</span><span class="token parameter">root<span class="token punctuation">,</span> wipLanes</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 该函数从root.pendingLanes中找出优先级最高的lane</span></span>
<span class="line">    <span class="token keyword">const</span> pendingLanes <span class="token operator">=</span> root<span class="token punctuation">.</span>pendingLanes<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">let</span> nextLanes <span class="token operator">=</span> NoLanes<span class="token punctuation">;</span></span>
<span class="line">    nextLanes <span class="token operator">=</span> <span class="token function">getHighestPriorityLanes</span><span class="token punctuation">(</span>pendingLanes<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    nextLanes <span class="token operator">=</span> pendingLanes <span class="token operator">&amp;</span> <span class="token function">getEqualOrHigherPriorityLanes</span><span class="token punctuation">(</span>nextLanes<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> nextLanes<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * 找到对应优先级范围内优先级最高的那一批lanes</span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">lanes</span> </span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">getHighestPriorityLanes</span><span class="token punctuation">(</span><span class="token parameter">lanes</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>SyncLane <span class="token operator">&amp;</span> lanes<span class="token punctuation">)</span> <span class="token operator">!==</span> NoLanes<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> SyncLane<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">getEqualOrHigherPriorityLanes</span><span class="token punctuation">(</span><span class="token parameter">lanes</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token function">getLowestPriorityLane</span><span class="token punctuation">(</span>lanes<span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * 找到lanes中优先级最低的那一个lane</span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">lanes</span> </span>
<span class="line"> * <span class="token keyword">@returns</span> </span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">getLowestPriorityLane</span><span class="token punctuation">(</span><span class="token parameter">lanes</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> index <span class="token operator">=</span> <span class="token number">31</span> <span class="token operator">-</span> Math<span class="token punctuation">.</span><span class="token function">clz32</span><span class="token punctuation">(</span>lanes<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> index <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">?</span> NoLanes <span class="token operator">:</span> <span class="token number">1</span> <span class="token operator">&lt;&lt;</span> index<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">includesSomeLane</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">(</span>a <span class="token operator">&amp;</span> b<span class="token punctuation">)</span> <span class="token operator">!==</span> NoLanes<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-异步渲染" tabindex="-1"><a class="header-anchor" href="#_9-异步渲染"><span>9.异步渲染</span></a></h2><h3 id="_9-1-reactfiberworkloop-js" tabindex="-1"><a class="header-anchor" href="#_9-1-reactfiberworkloop-js"><span>9.1 ReactFiberWorkLoop.js</span></a></h3><p>react-reconciler\\ReactFiberWorkLoop.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> HostRoot <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./ReactWorkTags&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span><span class="token keyword">import</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>   NoTimestamp<span class="token punctuation">,</span> SyncLane<span class="token punctuation">,</span> mergeLanes<span class="token punctuation">,</span> markRootUpdated<span class="token punctuation">,</span> NoLanes<span class="token punctuation">,</span> getNextLanes<span class="token punctuation">,</span></span>
<span class="line"><span class="token operator">+</span>   includesSomeLane<span class="token punctuation">,</span> schedulerPriorityToLanePriority<span class="token punctuation">,</span> findUpdateLane<span class="token punctuation">,</span> returnNextLanesPriority<span class="token punctuation">,</span></span>
<span class="line"><span class="token operator">+</span>   lanePriorityToSchedulerPriority<span class="token punctuation">,</span> markStarvedLanesAsExpired<span class="token punctuation">,</span> markRootFinished</span>
<span class="line"><span class="token operator">+</span><span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./ReactFiberLane&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> now <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../scheduler&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createWorkInProgress <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./ReactFiber&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span><span class="token keyword">import</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>    scheduleCallback<span class="token punctuation">,</span> getCurrentPriorityLevel<span class="token punctuation">,</span> shouldYield<span class="token punctuation">,</span></span>
<span class="line"><span class="token operator">+</span>    ImmediatePriority <span class="token keyword">as</span> ImmediateSchedulerPriority<span class="token punctuation">,</span></span>
<span class="line"><span class="token operator">+</span>    runWithPriority</span>
<span class="line"><span class="token operator">+</span><span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./SchedulerWithReactIntegration&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> currentEventTime <span class="token operator">=</span> NoTimestamp<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> workInProgress <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//表示需要更新的fiber节点的lane的集合，在后面更新fiber节点的时候会根据这个值判断是否需要更新</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">let</span> subtreeRenderLanes <span class="token operator">=</span> NoLanes<span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span><span class="token keyword">let</span> currentEventWipLanes <span class="token operator">=</span> NoLanes<span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span><span class="token keyword">let</span> workInProgressRootIncludedLanes <span class="token operator">=</span> NoLanes<span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span><span class="token comment">//是在任务执行阶段赋予的需要更新的fiber节点上的lane的值</span></span>
<span class="line"><span class="token operator">+</span><span class="token comment">//当新的更新任务产生时，workInProgressRootRenderLanes不为空，则表示有任务正在执行</span></span>
<span class="line"><span class="token operator">+</span><span class="token comment">//那么则直接返回这个正在执行的任务的lane，那么当前新的任务则会和现有的任务进行一次批量更新</span></span>
<span class="line"><span class="token operator">+</span><span class="token comment">//表示当前是否有任务正在执行，有值则表示有任务正在执行，反之则没有任务在执行</span></span>
<span class="line"><span class="token operator">+</span><span class="token keyword">let</span> workInProgressRootRenderLanes <span class="token operator">=</span> NoLanes<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * 从触发状态更新的fiber通过一直往上找return得到rootFiber</span>
<span class="line"> * 找的过程都会将lane收集到每个parent.childLanes上</span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">sourceFiber</span> 更新来源fiber</span>
<span class="line"> * <span class="token keyword">@returns</span> </span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">markUpdateLaneFromFiberToRoot</span><span class="token punctuation">(</span><span class="token parameter">sourceFiber<span class="token punctuation">,</span> lane</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">//更新现有fiber上的lanes</span></span>
<span class="line">    sourceFiber<span class="token punctuation">.</span>lanes <span class="token operator">=</span> <span class="token function">mergeLanes</span><span class="token punctuation">(</span>sourceFiber<span class="token punctuation">.</span>lanes<span class="token punctuation">,</span> lane<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">let</span> node <span class="token operator">=</span> sourceFiber<span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// 从产生更新的fiber节点开始，向上收集childLanes</span></span>
<span class="line">    <span class="token keyword">let</span> parent <span class="token operator">=</span> node<span class="token punctuation">.</span>return<span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">//到rootFiber，其parent为null，则会跳出while</span></span>
<span class="line">    <span class="token keyword">while</span> <span class="token punctuation">(</span>parent<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        parent<span class="token punctuation">.</span>childLanes <span class="token operator">=</span> <span class="token function">mergeLanes</span><span class="token punctuation">(</span>parent<span class="token punctuation">.</span>childLanes<span class="token punctuation">,</span> lane<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        node <span class="token operator">=</span> parent<span class="token punctuation">;</span></span>
<span class="line">        parent <span class="token operator">=</span> parent<span class="token punctuation">.</span>return<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">     <span class="token comment">//如果找到的是HostRoot就返回FiberRootNode,其实就是容器div</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>tag <span class="token operator">===</span> HostRoot<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> node<span class="token punctuation">.</span>stateNode<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">scheduleUpdateOnFiber</span><span class="token punctuation">(</span><span class="token parameter">fiber<span class="token punctuation">,</span> lane<span class="token punctuation">,</span> eventTime</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">//向上获取HostRoot节点并向上收集fiber.childLanes</span></span>
<span class="line">    <span class="token keyword">const</span> root <span class="token operator">=</span> <span class="token function">markUpdateLaneFromFiberToRoot</span><span class="token punctuation">(</span>fiber<span class="token punctuation">,</span> lane<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">//在root上标记更新，将update的lane放到root.pendingLane</span></span>
<span class="line">    <span class="token function">markRootUpdated</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> lane<span class="token punctuation">,</span> eventTime<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>lane <span class="token operator">===</span> SyncLane<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">//执行HostRoot上的更新</span></span>
<span class="line">        <span class="token function">performSyncWorkOnRoot</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>   <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>       <span class="token function">ensureRootIsScheduled</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> eventTime<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>   <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token operator">+</span><span class="token keyword">function</span> <span class="token function">ensureRootIsScheduled</span><span class="token punctuation">(</span><span class="token parameter">root<span class="token punctuation">,</span> currentTime</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>    <span class="token comment">//为当前任务根据优先级添加过期时间</span></span>
<span class="line"><span class="token operator">+</span>    <span class="token comment">//并检查未执行的任务中是否有任务过期，有任务过期则expiredLanes中添加该任务的lane</span></span>
<span class="line"><span class="token operator">+</span>    <span class="token comment">//在后续任务执行中以同步模式执行，避免饥饿问题</span></span>
<span class="line"><span class="token operator">+</span>    <span class="token function">markStarvedLanesAsExpired</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> currentTime<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>    <span class="token comment">//获取优先级最高的任务的优先级</span></span>
<span class="line"><span class="token operator">+</span>    <span class="token keyword">const</span> nextLanes <span class="token operator">=</span> <span class="token function">getNextLanes</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> workInProgressRootRenderLanes<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>    <span class="token comment">//如果nextLanes为空则表示没有任务需要执行，则直接中断更新</span></span>
<span class="line"><span class="token operator">+</span>    <span class="token keyword">if</span> <span class="token punctuation">(</span>nextLanes <span class="token operator">===</span> NoLanes<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>        <span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>    <span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">+</span>    <span class="token keyword">const</span> newCallbackPriority <span class="token operator">=</span> <span class="token function">returnNextLanesPriority</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>    <span class="token keyword">const</span> schedulerPriorityLevel <span class="token operator">=</span> <span class="token function">lanePriorityToSchedulerPriority</span><span class="token punctuation">(</span>newCallbackPriority<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>    <span class="token keyword">let</span> newCallbackNode <span class="token operator">=</span> <span class="token function">scheduleCallback</span><span class="token punctuation">(</span>schedulerPriorityLevel<span class="token punctuation">,</span> performConcurrentWorkOnRoot<span class="token punctuation">.</span>bind<span class="token operator">+</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> root<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>    root<span class="token punctuation">.</span>callbackPriority <span class="token operator">=</span> newCallbackPriority<span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>    root<span class="token punctuation">.</span>callbackNode <span class="token operator">=</span> newCallbackNode<span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">+</span><span class="token keyword">function</span> <span class="token function">performConcurrentWorkOnRoot</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>    currentEventTime <span class="token operator">=</span> NoTimestamp<span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>    currentEventWipLanes <span class="token operator">=</span> NoLanes<span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>    <span class="token keyword">const</span> originalCallbackNode <span class="token operator">=</span> root<span class="token punctuation">.</span>callbackNode<span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>    <span class="token comment">//获取本次渲染的优先级</span></span>
<span class="line"><span class="token operator">+</span>    <span class="token keyword">let</span> lanes <span class="token operator">=</span> <span class="token function">getNextLanes</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> workInProgressRootRenderLanes<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>    <span class="token comment">//构造fiber树</span></span>
<span class="line"><span class="token operator">+</span>    <span class="token keyword">let</span> exitStatus <span class="token operator">=</span> <span class="token function">renderRootConcurrent</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> lanes<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>    <span class="token keyword">const</span> finishedWork <span class="token operator">=</span> root<span class="token punctuation">.</span>current<span class="token punctuation">.</span>alternate<span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>    root<span class="token punctuation">.</span>finishedWork <span class="token operator">=</span> finishedWork<span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>    root<span class="token punctuation">.</span>finishedLanes <span class="token operator">=</span> lanes<span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>    <span class="token comment">//渲染fiber树</span></span>
<span class="line"><span class="token operator">+</span>    <span class="token function">finishConcurrentRender</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> exitStatus<span class="token punctuation">,</span> lanes<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>    <span class="token comment">//退出前再次检测, 是否还有其他更新, 是否需要发起新调度</span></span>
<span class="line"><span class="token operator">+</span>    <span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>callbackNode <span class="token operator">===</span> originalCallbackNode<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>        <span class="token comment">//渲染被阻断, 返回一个新的performConcurrentWorkOnRoot函数, 等待下一次调用</span></span>
<span class="line"><span class="token operator">+</span>        <span class="token keyword">return</span> <span class="token function">performConcurrentWorkOnRoot</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> root<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>    <span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">+</span>    <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">+</span><span class="token keyword">function</span> <span class="token function">finishConcurrentRender</span><span class="token punctuation">(</span><span class="token parameter">root<span class="token punctuation">,</span> exitStatus<span class="token punctuation">,</span> lanes</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>    <span class="token function">commitRoot</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">+</span><span class="token keyword">function</span> <span class="token function">commitRoot</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>    <span class="token keyword">const</span> renderPriorityLevel <span class="token operator">=</span> <span class="token function">getCurrentPriorityLevel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>    <span class="token function">runWithPriority</span><span class="token punctuation">(</span>ImmediateSchedulerPriority<span class="token punctuation">,</span> <span class="token function">commitRootImpl</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> root<span class="token punctuation">,</span> renderPriorityLevel<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>    <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">+</span><span class="token keyword">function</span> <span class="token function">commitRootImpl</span><span class="token punctuation">(</span><span class="token parameter">root<span class="token punctuation">,</span> renderPriorityLevel</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>    <span class="token comment">//设置局部变量</span></span>
<span class="line"><span class="token operator">+</span>    <span class="token keyword">const</span> finishedWork <span class="token operator">=</span> root<span class="token punctuation">.</span>finishedWork<span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>    <span class="token keyword">const</span> lanes <span class="token operator">=</span> root<span class="token punctuation">.</span>finishedLanes<span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>    <span class="token comment">//清空FiberRoot对象上的属性</span></span>
<span class="line"><span class="token operator">+</span>    root<span class="token punctuation">.</span>finishedWork <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>    root<span class="token punctuation">.</span>finishedLanes <span class="token operator">=</span> NoLanes<span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>    root<span class="token punctuation">.</span>callbackNode <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>    <span class="token comment">//将finishedWork.lanes和finishedWork.childLanes进行合并操作,获取到剩下还需要做更新的lanes</span></span>
<span class="line"><span class="token operator">+</span>    <span class="token keyword">let</span> remainingLanes <span class="token operator">=</span> <span class="token function">mergeLanes</span><span class="token punctuation">(</span>finishedWork<span class="token punctuation">.</span>lanes<span class="token punctuation">,</span> finishedWork<span class="token punctuation">.</span>childLanes<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>    <span class="token comment">//然后调用markRootFinished清空掉已经执行完成的lanes的数据，将剩下的lanes重新挂载到pendingLanes上，准备下一+次的执行</span></span>
<span class="line"><span class="token operator">+</span>    <span class="token function">markRootFinished</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> remainingLanes<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">+</span><span class="token keyword">function</span> <span class="token function">renderRootConcurrent</span><span class="token punctuation">(</span><span class="token parameter">root<span class="token punctuation">,</span> lanes</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>    <span class="token function">prepareFreshStack</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> lanes<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>    <span class="token function">workLoopConcurrent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">+</span><span class="token keyword">function</span> <span class="token function">workLoopConcurrent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>    <span class="token keyword">while</span> <span class="token punctuation">(</span>workInProgress <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token function">shouldYield</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>        <span class="token function">performUnitOfWork</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>    <span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">+</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">+</span></span>
<span class="line"><span class="token operator">+</span></span>
<span class="line"><span class="token operator">+</span><span class="token doc-comment comment">/**</span>
<span class="line">+ * 开始执行FiberRootNode上的工作</span>
<span class="line">+ * @param <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">root</span>  FiberRootNode</span>
<span class="line">+ */</span></span>
<span class="line"><span class="token operator">+</span><span class="token keyword">function</span> <span class="token function">performSyncWorkOnRoot</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>    <span class="token keyword">let</span> lanes <span class="token operator">=</span> <span class="token function">getNextLanes</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> NoLanes<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>    <span class="token keyword">let</span> exitStatus <span class="token operator">=</span> <span class="token function">renderRootSync</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> lanes<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>    <span class="token keyword">const</span> finishedWork <span class="token operator">=</span> root<span class="token punctuation">.</span>current<span class="token punctuation">.</span>alternate<span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>    root<span class="token punctuation">.</span>finishedWork <span class="token operator">=</span> finishedWork<span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>    root<span class="token punctuation">.</span>finishedLanes <span class="token operator">=</span> lanes<span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>    <span class="token function">commitRoot</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">+</span><span class="token doc-comment comment">/**</span>
<span class="line">+ * 刷新栈帧: 重置FiberRoot上的全局属性和fiber树构造循环过程中的全局变量</span>
<span class="line">+ * @param <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">root</span> </span>
<span class="line">+ * @param <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">lanes</span> </span>
<span class="line">+ */</span></span>
<span class="line"><span class="token operator">+</span><span class="token keyword">function</span> <span class="token function">prepareFreshStack</span><span class="token punctuation">(</span><span class="token parameter">root<span class="token punctuation">,</span> lanes</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>    root<span class="token punctuation">.</span>finishedWork <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>    root<span class="token punctuation">.</span>finishedLanes <span class="token operator">=</span> NoLanes<span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>    workInProgress <span class="token operator">=</span> <span class="token function">createWorkInProgress</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>current<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>    subtreeRenderLanes <span class="token operator">=</span> workInProgressRootIncludedLanes <span class="token operator">=</span> lanes<span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">+</span></span>
<span class="line"><span class="token operator">+</span><span class="token keyword">function</span> <span class="token function">renderRootSync</span><span class="token punctuation">(</span><span class="token parameter">root<span class="token punctuation">,</span> lanes</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>    <span class="token function">prepareFreshStack</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> lanes<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>    <span class="token function">workLoopSync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">+</span><span class="token keyword">function</span> <span class="token function">workLoopSync</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>    <span class="token keyword">while</span> <span class="token punctuation">(</span>workInProgress<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>        <span class="token function">performUnitOfWork</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>    <span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">+</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">+</span><span class="token keyword">function</span> <span class="token function">performUnitOfWork</span><span class="token punctuation">(</span><span class="token parameter">unitOfWork</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">includesSomeLane</span><span class="token punctuation">(</span>subtreeRenderLanes<span class="token punctuation">,</span> unitOfWork<span class="token punctuation">.</span>lanes<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;处理&#39;</span><span class="token punctuation">,</span> unitOfWork<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>        workInProgress <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>        workInProgress <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>    <span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">+</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">+</span><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">requestEventTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>    currentEventTime <span class="token operator">=</span> <span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>    <span class="token keyword">return</span> currentEventTime<span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">+</span></span>
<span class="line"><span class="token operator">+</span><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">requestUpdateLane</span><span class="token punctuation">(</span><span class="token parameter">fiber</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>    <span class="token keyword">if</span> <span class="token punctuation">(</span>currentEventWipLanes <span class="token operator">===</span> NoLanes<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>        currentEventWipLanes <span class="token operator">=</span> workInProgressRootIncludedLanes<span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>    <span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">+</span>    <span class="token keyword">const</span> schedulerPriority <span class="token operator">=</span> <span class="token function">getCurrentPriorityLevel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//97</span></span>
<span class="line"><span class="token operator">+</span>    <span class="token keyword">let</span> lane<span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>    <span class="token keyword">const</span> schedulerLanePriority <span class="token operator">=</span> <span class="token function">schedulerPriorityToLanePriority</span><span class="token punctuation">(</span>schedulerPriority<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//8</span></span>
<span class="line"><span class="token operator">+</span>    lane <span class="token operator">=</span> <span class="token function">findUpdateLane</span><span class="token punctuation">(</span>schedulerLanePriority<span class="token punctuation">,</span> currentEventWipLanes<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>    <span class="token keyword">return</span> lane<span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-2-scheduler-js" tabindex="-1"><a class="header-anchor" href="#_9-2-scheduler-js"><span>9.2 Scheduler.js</span></a></h3><p>src\\scheduler\\src\\Scheduler.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> requestHostCallback<span class="token punctuation">,</span> shouldYieldToHost<span class="token punctuation">,</span> getCurrentTime<span class="token punctuation">,</span> requestHostTimeout <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./SchedulerHostConfig&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> push<span class="token punctuation">,</span> pop<span class="token punctuation">,</span> peek <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./SchedulerMinHeap&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> ImmediatePriority<span class="token punctuation">,</span> UserBlockingPriority<span class="token punctuation">,</span> NormalPriority<span class="token punctuation">,</span> LowPriority<span class="token punctuation">,</span> IdlePriority <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./SchedulerPriorities&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// 不同优先级对应的不同的任务过期时间间隔</span></span>
<span class="line"><span class="token keyword">let</span> maxSigned31BitInt <span class="token operator">=</span> <span class="token number">1073741823</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> <span class="token constant">IMMEDIATE_PRIORITY_TIMEOUT</span> <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span><span class="token comment">//立即执行的优先级，级别最高</span></span>
<span class="line"><span class="token keyword">let</span> <span class="token constant">USER_BLOCKING_PRIORITY_TIMEOUT</span> <span class="token operator">=</span> <span class="token number">250</span><span class="token punctuation">;</span><span class="token comment">//用户阻塞级别的优先级</span></span>
<span class="line"><span class="token keyword">let</span> <span class="token constant">NORMAL_PRIORITY_TIMEOUT</span> <span class="token operator">=</span> <span class="token number">5000</span><span class="token punctuation">;</span><span class="token comment">//正常的优先级</span></span>
<span class="line"><span class="token keyword">let</span> <span class="token constant">LOW_PRIORITY_TIMEOUT</span> <span class="token operator">=</span> <span class="token number">10000</span><span class="token punctuation">;</span><span class="token comment">//较低的优先级</span></span>
<span class="line"><span class="token keyword">let</span> <span class="token constant">IDLE_PRIORITY_TIMEOUT</span> <span class="token operator">=</span> maxSigned31BitInt<span class="token punctuation">;</span><span class="token comment">//优先级最低，表示任务可以闲置</span></span>
<span class="line"><span class="token comment">//下一个任务ID编号</span></span>
<span class="line"><span class="token keyword">let</span> taskIdCounter <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//任务队列</span></span>
<span class="line"><span class="token keyword">let</span> taskQueue <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//延迟队列</span></span>
<span class="line"><span class="token keyword">let</span> timerQueue <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> currentTask<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> currentPriorityLevel <span class="token operator">=</span> NormalPriority<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * 调度一个任务</span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">callback</span> 要执行的任务</span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">scheduleCallback</span><span class="token punctuation">(</span><span class="token parameter">priorityLevel<span class="token punctuation">,</span> callback<span class="token punctuation">,</span> options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 获取当前时间，它是计算任务开始时间、过期时间和判断任务是否过期的依据</span></span>
<span class="line">    <span class="token keyword">let</span> currentTime <span class="token operator">=</span> <span class="token function">getCurrentTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// 确定任务开始时间</span></span>
<span class="line">    <span class="token keyword">let</span> startTime<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> options <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span> <span class="token operator">&amp;&amp;</span> options <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">var</span> delay <span class="token operator">=</span> options<span class="token punctuation">.</span>delay<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> delay <span class="token operator">===</span> <span class="token string">&#39;number&#39;</span> <span class="token operator">&amp;&amp;</span> delay <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            startTime <span class="token operator">=</span> currentTime <span class="token operator">+</span> delay<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">            startTime <span class="token operator">=</span> currentTime<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">        startTime <span class="token operator">=</span> currentTime<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token comment">// 计算过期时间</span></span>
<span class="line">    <span class="token keyword">let</span> timeout<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">switch</span> <span class="token punctuation">(</span>priorityLevel<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">case</span> <span class="token literal-property property">ImmediatePriority</span><span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span><span class="token number">1</span></span>
<span class="line">            timeout <span class="token operator">=</span> <span class="token constant">IMMEDIATE_PRIORITY_TIMEOUT</span><span class="token punctuation">;</span><span class="token comment">//-1</span></span>
<span class="line">            <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">case</span> <span class="token literal-property property">UserBlockingPriority</span><span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span><span class="token number">2</span></span>
<span class="line">            timeout <span class="token operator">=</span> <span class="token constant">USER_BLOCKING_PRIORITY_TIMEOUT</span><span class="token punctuation">;</span><span class="token comment">//250</span></span>
<span class="line">            <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">case</span> <span class="token literal-property property">IdlePriority</span><span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span><span class="token number">5</span></span>
<span class="line">            timeout <span class="token operator">=</span> <span class="token constant">IDLE_PRIORITY_TIMEOUT</span><span class="token punctuation">;</span><span class="token comment">//1073741823</span></span>
<span class="line">            <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">case</span> <span class="token literal-property property">LowPriority</span><span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span><span class="token number">4</span></span>
<span class="line">            timeout <span class="token operator">=</span> <span class="token constant">LOW_PRIORITY_TIMEOUT</span><span class="token punctuation">;</span><span class="token comment">//10000</span></span>
<span class="line">            <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">case</span> <span class="token literal-property property">NormalPriority</span><span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span><span class="token number">3</span></span>
<span class="line">        <span class="token keyword">default</span><span class="token operator">:</span></span>
<span class="line">            timeout <span class="token operator">=</span> <span class="token constant">NORMAL_PRIORITY_TIMEOUT</span><span class="token punctuation">;</span><span class="token comment">//5000</span></span>
<span class="line">            <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token comment">//计算超时时间</span></span>
<span class="line">    <span class="token keyword">let</span> expirationTime <span class="token operator">=</span> startTime <span class="token operator">+</span> timeout<span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">//创建新任务</span></span>
<span class="line">    <span class="token keyword">let</span> newTask <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">id</span><span class="token operator">:</span> taskIdCounter<span class="token operator">++</span><span class="token punctuation">,</span><span class="token comment">//任务ID</span></span>
<span class="line">        callback<span class="token punctuation">,</span><span class="token comment">//真正的任务函数</span></span>
<span class="line">        priorityLevel<span class="token punctuation">,</span><span class="token comment">//任务优先级，参与计算任务过期时间</span></span>
<span class="line">        startTime<span class="token punctuation">,</span></span>
<span class="line">        expirationTime<span class="token punctuation">,</span><span class="token comment">//表示任务何时过期，影响它在taskQueue中的排序</span></span>
<span class="line">        <span class="token comment">//为小顶堆的队列提供排序依据</span></span>
<span class="line">        <span class="token literal-property property">sortIndex</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>startTime <span class="token operator">&gt;</span> currentTime<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        newTask<span class="token punctuation">.</span>sortIndex <span class="token operator">=</span> startTime<span class="token punctuation">;</span></span>
<span class="line">        <span class="token function">push</span><span class="token punctuation">(</span>timerQueue<span class="token punctuation">,</span> newTask<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">peek</span><span class="token punctuation">(</span>taskQueue<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> newTask <span class="token operator">===</span> <span class="token function">peek</span><span class="token punctuation">(</span>timerQueue<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token function">requestHostTimeout</span><span class="token punctuation">(</span>handleTimeout<span class="token punctuation">,</span> startTime <span class="token operator">-</span> currentTime<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">        newTask<span class="token punctuation">.</span>sortIndex <span class="token operator">=</span> expirationTime<span class="token punctuation">;</span></span>
<span class="line">        <span class="token comment">//把此工作添加到任务队列中</span></span>
<span class="line">        <span class="token function">push</span><span class="token punctuation">(</span>taskQueue<span class="token punctuation">,</span> newTask<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token comment">//taskQueue.push(callback);</span></span>
<span class="line">        <span class="token comment">//开始调度flushWork</span></span>
<span class="line">        <span class="token function">requestHostCallback</span><span class="token punctuation">(</span>flushWork<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">return</span> newTask<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * 处理超时任务</span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">currentTime</span> </span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">handleTimeout</span><span class="token punctuation">(</span><span class="token parameter">currentTime</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">advanceTimers</span><span class="token punctuation">(</span>currentTime<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">peek</span><span class="token punctuation">(</span>taskQueue<span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">requestHostCallback</span><span class="token punctuation">(</span>flushWork<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">const</span> firstTimer <span class="token operator">=</span> <span class="token function">peek</span><span class="token punctuation">(</span>timerQueue<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>firstTimer <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token function">requestHostTimeout</span><span class="token punctuation">(</span>handleTimeout<span class="token punctuation">,</span> firstTimer<span class="token punctuation">.</span>startTime <span class="token operator">-</span> currentTime<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">advanceTimers</span><span class="token punctuation">(</span><span class="token parameter">currentTime</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> timer <span class="token operator">=</span> <span class="token function">peek</span><span class="token punctuation">(</span>timerQueue<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">while</span> <span class="token punctuation">(</span>timer <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>timer<span class="token punctuation">.</span>callback <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token function">pop</span><span class="token punctuation">(</span>timerQueue<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>timer<span class="token punctuation">.</span>startTime <span class="token operator">&lt;=</span> currentTime<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token function">pop</span><span class="token punctuation">(</span>timerQueue<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            timer<span class="token punctuation">.</span>sortIndex <span class="token operator">=</span> timer<span class="token punctuation">.</span>expirationTime<span class="token punctuation">;</span></span>
<span class="line">            <span class="token function">push</span><span class="token punctuation">(</span>taskQueue<span class="token punctuation">,</span> timer<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        timer <span class="token operator">=</span> <span class="token function">peek</span><span class="token punctuation">(</span>timerQueue<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * 清空任务队列</span>
<span class="line"> * <span class="token keyword">@returns</span> 队列中是否还有任务</span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">flushWork</span><span class="token punctuation">(</span><span class="token parameter">initialTime</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token function">workLoop</span><span class="token punctuation">(</span>initialTime<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * 清空任务队列</span>
<span class="line"> * workLoop是通过判断任务函数的返回值去识别任务的完成状态的</span>
<span class="line"> * <span class="token keyword">@returns</span> 队列中是否还有任务</span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">workLoop</span><span class="token punctuation">(</span><span class="token parameter">initialTime</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">//当前时间</span></span>
<span class="line">    <span class="token keyword">let</span> currentTime <span class="token operator">=</span> initialTime<span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">//取出第一个任务</span></span>
<span class="line">    currentTask <span class="token operator">=</span> <span class="token function">peek</span><span class="token punctuation">(</span>taskQueue<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">//如果任务存在</span></span>
<span class="line">    <span class="token keyword">while</span> <span class="token punctuation">(</span>currentTask<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">//如果当前任务的过期时间大于当前时间,并且当前的时间片到期了,退出工作循环</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>currentTask<span class="token punctuation">.</span>expirationTime <span class="token operator">&gt;</span> currentTime <span class="token operator">&amp;&amp;</span> <span class="token function">shouldYieldToHost</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token comment">//执行当前的工作</span></span>
<span class="line">        <span class="token keyword">const</span> callback <span class="token operator">=</span> currentTask<span class="token punctuation">.</span>callback<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> callback <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            currentTask<span class="token punctuation">.</span>callback <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">const</span> didUserCallbackTimeout <span class="token operator">=</span> currentTask<span class="token punctuation">.</span>expirationTime <span class="token operator">&lt;=</span> currentTime<span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">const</span> continuationCallback <span class="token operator">=</span> <span class="token function">callback</span><span class="token punctuation">(</span>didUserCallbackTimeout<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token comment">//如果返回函数说明任务尚未结束,下次还执行它</span></span>
<span class="line">            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> continuationCallback <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token comment">//currentTask = continuationCallback;</span></span>
<span class="line">                currentTask<span class="token punctuation">.</span>callback <span class="token operator">=</span> continuationCallback<span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token comment">//否则表示此任务执行结束，可以把此任务移除队列</span></span>
<span class="line">                <span class="token function">pop</span><span class="token punctuation">(</span>taskQueue<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token function">pop</span><span class="token punctuation">(</span>taskQueue<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token comment">//还取第一个任务</span></span>
<span class="line">        currentTask <span class="token operator">=</span> <span class="token function">peek</span><span class="token punctuation">(</span>taskQueue<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>currentTask <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">const</span> firstTimer <span class="token operator">=</span> <span class="token function">peek</span><span class="token punctuation">(</span>timerQueue<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>firstTimer <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token function">requestHostTimeout</span><span class="token punctuation">(</span>handleTimeout<span class="token punctuation">,</span> firstTimer<span class="token punctuation">.</span>startTime <span class="token operator">-</span> currentTime<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">cancelCallback</span><span class="token punctuation">(</span><span class="token parameter">task</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">//清空回调以表示任务已取消</span></span>
<span class="line">    <span class="token comment">//无法从队列中删除，因为无法从基于数组的堆中删除任意节点，只能删除第一个节点</span></span>
<span class="line">    task<span class="token punctuation">.</span>callback <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">+</span><span class="token doc-comment comment">/**</span>
<span class="line">+ * </span>
<span class="line">+ * @param <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">priorityLevel</span> </span>
<span class="line">+ * @param <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">eventHandler</span> </span>
<span class="line">+ * @returns </span>
<span class="line">+ */</span></span>
<span class="line"><span class="token operator">+</span><span class="token keyword">function</span> <span class="token function">runWithPriority</span><span class="token punctuation">(</span><span class="token parameter">priorityLevel<span class="token punctuation">,</span> eventHandler</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>    <span class="token keyword">switch</span> <span class="token punctuation">(</span>priorityLevel<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>        <span class="token keyword">case</span> <span class="token literal-property property">ImmediatePriority</span><span class="token operator">:</span></span>
<span class="line"><span class="token operator">+</span>        <span class="token keyword">case</span> <span class="token literal-property property">UserBlockingPriority</span><span class="token operator">:</span></span>
<span class="line"><span class="token operator">+</span>        <span class="token keyword">case</span> <span class="token literal-property property">NormalPriority</span><span class="token operator">:</span></span>
<span class="line"><span class="token operator">+</span>        <span class="token keyword">case</span> <span class="token literal-property property">LowPriority</span><span class="token operator">:</span></span>
<span class="line"><span class="token operator">+</span>        <span class="token keyword">case</span> <span class="token literal-property property">IdlePriority</span><span class="token operator">:</span></span>
<span class="line"><span class="token operator">+</span>            <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>        <span class="token keyword">default</span><span class="token operator">:</span></span>
<span class="line"><span class="token operator">+</span>            priorityLevel <span class="token operator">=</span> NormalPriority<span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>    <span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">+</span>    <span class="token keyword">var</span> previousPriorityLevel <span class="token operator">=</span> currentPriorityLevel<span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>    currentPriorityLevel <span class="token operator">=</span> priorityLevel<span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>    <span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>        <span class="token keyword">return</span> <span class="token function">eventHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>    <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>        currentPriorityLevel <span class="token operator">=</span> previousPriorityLevel<span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>    <span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">+</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">getCurrentPriorityLevel</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> currentPriorityLevel<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token punctuation">{</span></span>
<span class="line">    shouldYieldToHost <span class="token keyword">as</span> shouldYield<span class="token punctuation">,</span></span>
<span class="line">    ImmediatePriority<span class="token punctuation">,</span></span>
<span class="line">    UserBlockingPriority<span class="token punctuation">,</span></span>
<span class="line">    NormalPriority<span class="token punctuation">,</span></span>
<span class="line">    IdlePriority<span class="token punctuation">,</span></span>
<span class="line">    LowPriority<span class="token punctuation">,</span></span>
<span class="line">    getCurrentTime <span class="token keyword">as</span> now<span class="token punctuation">,</span></span>
<span class="line"><span class="token operator">+</span>   runWithPriority</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-3-reactfiberlane-js" tabindex="-1"><a class="header-anchor" href="#_9-3-reactfiberlane-js"><span>9.3 ReactFiberLane.js</span></a></h3><p>src\\react-reconciler\\ReactFiberLane.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import { ImmediatePriority as ImmediateSchedulerPriority, UserBlockingPriority as UserBlockingSchedulerPriority, NormalPriority as NormalSchedulerPriority, LowPriority as LowSchedulerPriority, IdlePriority as IdleSchedulerPriority, NoPriority as NoSchedulerPriority } from &#39;./SchedulerWithReactIntegration&#39;;</span>
<span class="line">+export const SyncLanePriority = 15;</span>
<span class="line">+export const InputDiscreteLanePriority = 12;</span>
<span class="line">+export const InputContinuousLanePriority = 10;</span>
<span class="line">export const DefaultLanePriority = 8;</span>
<span class="line">+export const TransitionPriority = 6;</span>
<span class="line">+export const IdleLanePriority = 2;</span>
<span class="line">+export const NoLanePriority = 0;</span>
<span class="line"></span>
<span class="line">+//lane使用31位二进制来表示优先级车道共31条, 位数越小(1的位置越靠右)表示优先级越高</span>
<span class="line">+const TotalLanes = 31;</span>
<span class="line">+//没有优先级</span>
<span class="line">export const NoLanes = 0b0000000000000000000000000000000;</span>
<span class="line">+//同步优先级，表示同步的任务一次只能执行一个，例如：用户的交互事件产生的更新任务</span>
<span class="line">export const SyncLane = 0b0000000000000000000000000000001;</span>
<span class="line">+// 连续触发优先级，例如：滚动事件，拖动事件等</span>
<span class="line">+export const InputContinuousHydrationLane = 0b0000000000000000000000000000010;</span>
<span class="line">+export const InputContinuousLane = 0b0000000000000000000000000000100;</span>
<span class="line">+// 默认优先级，例如使用setTimeout，请求数据返回等造成的更新</span>
<span class="line">+export const DefaultLanes = 0b0000000000000000000111000000000;</span>
<span class="line">+const IdleLanes = 0b0110000000000000000000000000000;</span>
<span class="line">+export const NoTimestamp = -1;</span>
<span class="line">+let return_highestLanePriority = DefaultLanePriority;</span>
<span class="line"></span>
<span class="line">/**</span>
<span class="line"> * 把 a 和 b合并成一个Lanes(优先级分组)</span>
<span class="line"> * 生成一个新的优先级范围</span>
<span class="line"> */</span>
<span class="line">export function mergeLanes(a, b) {</span>
<span class="line">    return a | b;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">export function markRootUpdated(root, updateLane) {</span>
<span class="line">    //将本次更新的lane放入root的pendingLanes</span>
<span class="line">    root.pendingLanes |= updateLane;</span>
<span class="line">}</span>
<span class="line">+/**</span>
<span class="line">+ * 获取优先级最高的任务的优先级</span>
<span class="line">+ * @param {*} root </span>
<span class="line">+ * @param {*} wipLanes </span>
<span class="line">+ * @returns </span>
<span class="line">+ */</span>
<span class="line">+export function getNextLanes(root, wipLanes) {</span>
<span class="line">+    // 该函数从root.pendingLanes中找出优先级最高的lane</span>
<span class="line">+    const pendingLanes = root.pendingLanes;</span>
<span class="line">+    let nextLanes = NoLanes;</span>
<span class="line">+    let nextLanePriority = NoLanePriority;</span>
<span class="line">+    const expiredLanes = root.expiredLanes;</span>
<span class="line">+    if (expiredLanes !== NoLanes) {</span>
<span class="line">+        nextLanes = expiredLanes;</span>
<span class="line">+        nextLanePriority = return_highestLanePriority = SyncLanePriority;</span>
<span class="line">+    } else {</span>
<span class="line">+        nextLanes = getHighestPriorityLanes(pendingLanes);</span>
<span class="line">+        nextLanePriority = return_highestLanePriority;</span>
<span class="line">+    }</span>
<span class="line">+    if (nextLanes === NoLanes) {</span>
<span class="line">+        return NoLanes;</span>
<span class="line">+    }</span>
<span class="line">+    nextLanes = pendingLanes &amp; getEqualOrHigherPriorityLanes(nextLanes);</span>
<span class="line">+    return nextLanes;</span>
<span class="line">+}</span>
<span class="line">+/**</span>
<span class="line">+ * 找到对应优先级范围内优先级最高的那一批lanes</span>
<span class="line">+ * @param {*} lanes </span>
<span class="line">+ */</span>
<span class="line">+function getHighestPriorityLanes(lanes) {</span>
<span class="line">+    if ((SyncLane &amp; lanes) !== NoLanes) {</span>
<span class="line">+        return SyncLane;</span>
<span class="line">+    }</span>
<span class="line">+    const defaultLanes = DefaultLanes &amp; lanes;</span>
<span class="line">+    if (defaultLanes !== NoLanes) {</span>
<span class="line">+        return_highestLanePriority = DefaultLanePriority;</span>
<span class="line">+        return defaultLanes;</span>
<span class="line">+    }</span>
<span class="line">+</span>
<span class="line">+    const idleLanes = IdleLanes &amp; lanes;</span>
<span class="line">+</span>
<span class="line">+    if (idleLanes !== NoLanes) {</span>
<span class="line">+        return_highestLanePriority = IdleLanePriority;</span>
<span class="line">+        return idleLanes;</span>
<span class="line">+    }</span>
<span class="line">+    return_highestLanePriority = DefaultLanePriority;</span>
<span class="line">+    return lanes;</span>
<span class="line">+}</span>
<span class="line">+function getHighestPriorityLane(lanes) {</span>
<span class="line">+    return lanes &amp; -lanes;</span>
<span class="line">+}</span>
<span class="line">+</span>
<span class="line">+function getEqualOrHigherPriorityLanes(lanes) {</span>
<span class="line">+    return (getLowestPriorityLane(lanes) &lt;&lt; 1) - 1;</span>
<span class="line">+}</span>
<span class="line">+/**</span>
<span class="line">+ * 找到lanes中优先级最低的那一个lane</span>
<span class="line">+ * @param {*} lanes </span>
<span class="line">+ * @returns </span>
<span class="line">+ */</span>
<span class="line">+function getLowestPriorityLane(lanes) {</span>
<span class="line">+    const index = 31 - Math.clz32(lanes);</span>
<span class="line">+    return index &lt; 0 ? NoLanes : 1 &lt;&lt; index;</span>
<span class="line">+}</span>
<span class="line">+</span>
<span class="line">+export function includesSomeLane(a, b) {</span>
<span class="line">+    return (a &amp; b) !== NoLanes;</span>
<span class="line">+}</span>
<span class="line">+</span>
<span class="line">+export function schedulerPriorityToLanePriority(schedulerPriorityLevel) {</span>
<span class="line">+    switch (schedulerPriorityLevel) {</span>
<span class="line">+        case ImmediateSchedulerPriority:</span>
<span class="line">+            return SyncLanePriority;</span>
<span class="line">+        case UserBlockingSchedulerPriority:</span>
<span class="line">+            return InputContinuousLanePriority;</span>
<span class="line">+        case NormalSchedulerPriority:</span>
<span class="line">+        case LowSchedulerPriority:</span>
<span class="line">+            return DefaultLanePriority;</span>
<span class="line">+        case IdleSchedulerPriority:</span>
<span class="line">+            return IdleLanePriority;</span>
<span class="line">+        default:</span>
<span class="line">+            return NoLanePriority;</span>
<span class="line">+    }</span>
<span class="line">+}</span>
<span class="line">+</span>
<span class="line">+export function findUpdateLane(lanePriority, wipLanes) {</span>
<span class="line">+    switch (lanePriority) {</span>
<span class="line">+        case DefaultLanePriority:</span>
<span class="line">+            {</span>
<span class="line">+                let lane = pickArbitraryLane(DefaultLanes &amp; ~wipLanes);//512</span>
<span class="line">+                return lane;</span>
<span class="line">+            }</span>
<span class="line">+        default:</span>
<span class="line">+            break;</span>
<span class="line">+    }</span>
<span class="line">+}</span>
<span class="line">+export function pickArbitraryLane(lanes) {</span>
<span class="line">+    return getHighestPriorityLane(lanes);</span>
<span class="line">+}</span>
<span class="line">+</span>
<span class="line">+export function markStarvedLanesAsExpired(root, currentTime) {</span>
<span class="line">+    const pendingLanes = root.pendingLanes;</span>
<span class="line">+    const expirationTimes = root.expirationTimes;</span>
<span class="line">+    let lanes = pendingLanes;</span>
<span class="line">+    while (lanes &gt; 0) {</span>
<span class="line">+        const index = pickArbitraryLaneIndex(lanes);</span>
<span class="line">+        const lane = 1 &lt;&lt; index;</span>
<span class="line">+        const expirationTime = expirationTimes[index];</span>
<span class="line">+        if (expirationTime === NoTimestamp) {</span>
<span class="line">+            expirationTimes[index] = computeExpirationTime(lane, currentTime);</span>
<span class="line">+        } else if (expirationTime &lt;= currentTime) {</span>
<span class="line">+            root.expiredLanes |= lane;</span>
<span class="line">+        }</span>
<span class="line">+        lanes &amp;= ~lane;</span>
<span class="line">+    }</span>
<span class="line">+}</span>
<span class="line">+function pickArbitraryLaneIndex(lanes) {</span>
<span class="line">+    return 31 - Math.clz32(lanes);</span>
<span class="line">+}</span>
<span class="line">+</span>
<span class="line">+function computeExpirationTime(lane, currentTime) {</span>
<span class="line">+    getHighestPriorityLanes(lane);</span>
<span class="line">+    const priority = return_highestLanePriority;</span>
<span class="line">+    if (priority &gt;= InputContinuousLanePriority) {</span>
<span class="line">+        return currentTime + 250;</span>
<span class="line">+    } else if (priority &gt;= TransitionPriority) {</span>
<span class="line">+        return currentTime + 5000;</span>
<span class="line">+    } else {</span>
<span class="line">+        return NoTimestamp;</span>
<span class="line">+    }</span>
<span class="line">+}</span>
<span class="line">+export function lanePriorityToSchedulerPriority(lanePriority) {</span>
<span class="line">+    switch (lanePriority) {</span>
<span class="line">+        case SyncLanePriority:</span>
<span class="line">+            return ImmediateSchedulerPriority;</span>
<span class="line">+        case InputDiscreteLanePriority:</span>
<span class="line">+        case InputContinuousLanePriority:</span>
<span class="line">+            return UserBlockingSchedulerPriority;</span>
<span class="line">+        case DefaultLanePriority:</span>
<span class="line">+            return NormalSchedulerPriority;</span>
<span class="line">+        case IdleLanePriority:</span>
<span class="line">+            return IdleSchedulerPriority;</span>
<span class="line">+        case NoLanePriority:</span>
<span class="line">+            return NoSchedulerPriority;</span>
<span class="line">+        default:</span>
<span class="line">+            break;</span>
<span class="line">+    }</span>
<span class="line">+}</span>
<span class="line">+</span>
<span class="line">+export function returnNextLanesPriority() {</span>
<span class="line">+    return return_highestLanePriority;</span>
<span class="line">+}</span>
<span class="line">+</span>
<span class="line">+export function createLaneMap(initial) {</span>
<span class="line">+    const laneMap = [];</span>
<span class="line">+    for (let i = 0; i &lt; TotalLanes; i++) {</span>
<span class="line">+        laneMap.push(initial);</span>
<span class="line">+    }</span>
<span class="line">+    return laneMap;</span>
<span class="line">+}</span>
<span class="line">+export function markRootFinished(root, remainingLanes) {</span>
<span class="line">+    //从pendingLanes中删除还未执行的lanes，那么就找到了已经执行过的lanes</span>
<span class="line">+    const noLongerPendingLanes = root.pendingLanes &amp; ~remainingLanes;</span>
<span class="line">+    // 将剩下的lanes重新挂载到pendingLanes上，准备下一次的执行</span>
<span class="line">+    root.pendingLanes = remainingLanes;</span>
<span class="line">+    // 从expiredLanes中删除掉已经执行的lanes</span>
<span class="line">+    root.expiredLanes &amp;= remainingLanes;</span>
<span class="line">+    const expirationTimes = root.expirationTimes;</span>
<span class="line">+    const eventTimes = root.eventTimes;</span>
<span class="line">+    let lanes = noLongerPendingLanes;</span>
<span class="line">+    //取出已经执行的lane，清空它们所有的数据</span>
<span class="line">+    //eventTimes中的事件触发时间，expirationTimes中的任务过期时间等</span>
<span class="line">+    while (lanes &gt; 0) {</span>
<span class="line">+        const index = pickArbitraryLaneIndex(lanes);</span>
<span class="line">+        const lane = 1 &lt;&lt; index;</span>
<span class="line">+        eventTimes[index] = NoTimestamp;</span>
<span class="line">+        expirationTimes[index] = NoTimestamp;</span>
<span class="line">+        lanes &amp;= ~lane;</span>
<span class="line">+    }</span>
<span class="line">+}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-4-reactfiberroot-js" tabindex="-1"><a class="header-anchor" href="#_9-4-reactfiberroot-js"><span>9.4 ReactFiberRoot.js</span></a></h3><p>src\\react-reconciler\\ReactFiberRoot.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import { createHostRootFiber } from &#39;./ReactFiber&#39;;</span>
<span class="line">import { initializeUpdateQueue } from &#39;./ReactUpdateQueue&#39;;</span>
<span class="line">+import { NoTimestamp, createLaneMap, NoLanes } from &#39;./ReactFiberLane&#39;;</span>
<span class="line">export function createFiberRoot(containerInfo) {</span>
<span class="line">    const root = new FiberRootNode(containerInfo);</span>
<span class="line">    const hostRootFiber = createHostRootFiber();</span>
<span class="line">    root.current = hostRootFiber;</span>
<span class="line">    hostRootFiber.stateNode = root;</span>
<span class="line">    initializeUpdateQueue(hostRootFiber);</span>
<span class="line">    return root;</span>
<span class="line">}</span>
<span class="line">function FiberRootNode(containerInfo) {</span>
<span class="line">    this.containerInfo = containerInfo;</span>
<span class="line">+   this.eventTimes = createLaneMap(NoLanes);</span>
<span class="line">+   this.expirationTimes = createLaneMap(NoTimestamp);</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-5-reacttypes-js" tabindex="-1"><a class="header-anchor" href="#_9-5-reacttypes-js"><span>9.5 ReactTypes.js</span></a></h3><p>src\\react\\shared\\ReactTypes.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> DiscreteEvent <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> UserBlockingEvent <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> ContinuousEvent <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-6-reactdomeventlistener-js" tabindex="-1"><a class="header-anchor" href="#_9-6-reactdomeventlistener-js"><span>9.6 ReactDOMEventListener.js</span></a></h3><p>src\\react-dom\\ReactDOMEventListener.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> Scheduler <span class="token keyword">from</span> <span class="token string">&#39;scheduler&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span> UserBlockingPriority<span class="token punctuation">,</span> runWithPriority <span class="token punctuation">}</span> <span class="token operator">=</span> Scheduler<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">createEventListenerWrapperWithPriority</span><span class="token punctuation">(</span><span class="token parameter">targetContainer<span class="token punctuation">,</span> domEventName<span class="token punctuation">,</span> eventSystemFlags</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> eventPriority <span class="token operator">=</span> <span class="token function">getEventPriorityForPluginSystem</span><span class="token punctuation">(</span>domEventName<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">let</span> listenerWrapper<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">switch</span> <span class="token punctuation">(</span>eventPriority<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">case</span> <span class="token literal-property property">DiscreteEvent</span><span class="token operator">:</span></span>
<span class="line">            listenerWrapper <span class="token operator">=</span> dispatchDiscreteEvent<span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">case</span> <span class="token literal-property property">UserBlockingEvent</span><span class="token operator">:</span></span>
<span class="line">            listenerWrapper <span class="token operator">=</span> dispatchUserBlockingUpdate<span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">case</span> <span class="token literal-property property">ContinuousEvent</span><span class="token operator">:</span></span>
<span class="line">        <span class="token keyword">default</span><span class="token operator">:</span></span>
<span class="line">            listenerWrapper <span class="token operator">=</span> dispatchEvent<span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token function">listenerWrapper</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> domEventName<span class="token punctuation">,</span> eventSystemFlags<span class="token punctuation">,</span> targetContainer<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">dispatchUserBlockingUpdate</span><span class="token punctuation">(</span><span class="token parameter">domEventName<span class="token punctuation">,</span> eventSystemFlags<span class="token punctuation">,</span> container<span class="token punctuation">,</span> nativeEvent</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">runWithPriority</span><span class="token punctuation">(</span>UserBlockingPriority<span class="token punctuation">,</span> <span class="token function">dispatchEvent</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> domEventName<span class="token punctuation">,</span> eventSystemFlags<span class="token punctuation">,</span> container<span class="token punctuation">,</span> nativeEvent<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-7-reactdomeventlistener-js" tabindex="-1"><a class="header-anchor" href="#_9-7-reactdomeventlistener-js"><span>9.7 ReactDOMEventListener.js</span></a></h3><p>src\\react-dom\\ReactDOMEventListener.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> Scheduler <span class="token keyword">from</span> <span class="token string">&#39;scheduler&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span> UserBlockingPriority<span class="token punctuation">,</span> runWithPriority <span class="token punctuation">}</span> <span class="token operator">=</span> Scheduler<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">createEventListenerWrapperWithPriority</span><span class="token punctuation">(</span><span class="token parameter">targetContainer<span class="token punctuation">,</span> domEventName<span class="token punctuation">,</span> eventSystemFlags</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> eventPriority <span class="token operator">=</span> <span class="token function">getEventPriorityForPluginSystem</span><span class="token punctuation">(</span>domEventName<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">let</span> listenerWrapper<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">switch</span> <span class="token punctuation">(</span>eventPriority<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">case</span> <span class="token literal-property property">DiscreteEvent</span><span class="token operator">:</span></span>
<span class="line">            listenerWrapper <span class="token operator">=</span> dispatchDiscreteEvent<span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">case</span> <span class="token literal-property property">UserBlockingEvent</span><span class="token operator">:</span></span>
<span class="line">            listenerWrapper <span class="token operator">=</span> dispatchUserBlockingUpdate<span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">case</span> <span class="token literal-property property">ContinuousEvent</span><span class="token operator">:</span></span>
<span class="line">        <span class="token keyword">default</span><span class="token operator">:</span></span>
<span class="line">            listenerWrapper <span class="token operator">=</span> dispatchEvent<span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token function">listenerWrapper</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> domEventName<span class="token punctuation">,</span> eventSystemFlags<span class="token punctuation">,</span> targetContainer<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">dispatchUserBlockingUpdate</span><span class="token punctuation">(</span><span class="token parameter">domEventName<span class="token punctuation">,</span> eventSystemFlags<span class="token punctuation">,</span> container<span class="token punctuation">,</span> nativeEvent</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">runWithPriority</span><span class="token punctuation">(</span>UserBlockingPriority<span class="token punctuation">,</span> <span class="token function">dispatchEvent</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> domEventName<span class="token punctuation">,</span> eventSystemFlags<span class="token punctuation">,</span> container<span class="token punctuation">,</span> nativeEvent<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-8-schedulerwithreactintegration-js" tabindex="-1"><a class="header-anchor" href="#_9-8-schedulerwithreactintegration-js"><span>9.8 SchedulerWithReactIntegration.js</span></a></h3><p>src\\react-reconciler\\SchedulerWithReactIntegration.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> Scheduler <span class="token keyword">from</span> <span class="token string">&#39;../scheduler&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">getCurrentPriorityLevel</span><span class="token operator">:</span> Scheduler_getCurrentPriorityLevel<span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">ImmediatePriority</span><span class="token operator">:</span> Scheduler_ImmediatePriority<span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">UserBlockingPriority</span><span class="token operator">:</span> Scheduler_UserBlockingPriority<span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">NormalPriority</span><span class="token operator">:</span> Scheduler_NormalPriority<span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">LowPriority</span><span class="token operator">:</span> Scheduler_LowPriority<span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">IdlePriority</span><span class="token operator">:</span> Scheduler_IdlePriority<span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">scheduleCallback</span><span class="token operator">:</span> Scheduler_scheduleCallback<span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">shouldYield</span><span class="token operator">:</span> Scheduler_shouldYield<span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">runWithPriority</span><span class="token operator">:</span> Scheduler_runWithPriority</span>
<span class="line"><span class="token punctuation">}</span> <span class="token operator">=</span> Scheduler<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> ImmediatePriority <span class="token operator">=</span> <span class="token number">99</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> UserBlockingPriority <span class="token operator">=</span> <span class="token number">98</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> NormalPriority <span class="token operator">=</span> <span class="token number">97</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> LowPriority <span class="token operator">=</span> <span class="token number">96</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> IdlePriority <span class="token operator">=</span> <span class="token number">95</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> NoPriority <span class="token operator">=</span> <span class="token number">90</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">getCurrentPriorityLevel</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">switch</span> <span class="token punctuation">(</span><span class="token function">Scheduler_getCurrentPriorityLevel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">case</span> <span class="token literal-property property">Scheduler_ImmediatePriority</span><span class="token operator">:</span></span>
<span class="line">            <span class="token keyword">return</span> ImmediatePriority<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">case</span> <span class="token literal-property property">Scheduler_UserBlockingPriority</span><span class="token operator">:</span></span>
<span class="line">            <span class="token keyword">return</span> UserBlockingPriority<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">case</span> <span class="token literal-property property">Scheduler_NormalPriority</span><span class="token operator">:</span></span>
<span class="line">            <span class="token keyword">return</span> NormalPriority<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">case</span> <span class="token literal-property property">Scheduler_LowPriority</span><span class="token operator">:</span></span>
<span class="line">            <span class="token keyword">return</span> LowPriority<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">case</span> <span class="token literal-property property">Scheduler_IdlePriority</span><span class="token operator">:</span></span>
<span class="line">            <span class="token keyword">return</span> IdlePriority<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">default</span><span class="token operator">:</span></span>
<span class="line">            <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">scheduleCallback</span><span class="token punctuation">(</span><span class="token parameter">reactPriorityLevel<span class="token punctuation">,</span> callback<span class="token punctuation">,</span> options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> priorityLevel <span class="token operator">=</span> <span class="token function">reactPriorityToSchedulerPriority</span><span class="token punctuation">(</span>reactPriorityLevel<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token function">Scheduler_scheduleCallback</span><span class="token punctuation">(</span>priorityLevel<span class="token punctuation">,</span> callback<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">reactPriorityToSchedulerPriority</span><span class="token punctuation">(</span><span class="token parameter">reactPriorityLevel</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">switch</span> <span class="token punctuation">(</span>reactPriorityLevel<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">case</span> <span class="token literal-property property">ImmediatePriority</span><span class="token operator">:</span></span>
<span class="line">            <span class="token keyword">return</span> Scheduler_ImmediatePriority<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">case</span> <span class="token literal-property property">UserBlockingPriority</span><span class="token operator">:</span></span>
<span class="line">            <span class="token keyword">return</span> Scheduler_UserBlockingPriority<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">case</span> <span class="token literal-property property">NormalPriority</span><span class="token operator">:</span></span>
<span class="line">            <span class="token keyword">return</span> Scheduler_NormalPriority<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">case</span> <span class="token literal-property property">LowPriority</span><span class="token operator">:</span></span>
<span class="line">            <span class="token keyword">return</span> Scheduler_LowPriority<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">case</span> <span class="token literal-property property">IdlePriority</span><span class="token operator">:</span></span>
<span class="line">            <span class="token keyword">return</span> Scheduler_IdlePriority<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">default</span><span class="token operator">:</span></span>
<span class="line">            <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">runWithPriority</span><span class="token punctuation">(</span><span class="token parameter">reactPriorityLevel<span class="token punctuation">,</span> fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> priorityLevel <span class="token operator">=</span> <span class="token function">reactPriorityToSchedulerPriority</span><span class="token punctuation">(</span>reactPriorityLevel<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token function">Scheduler_runWithPriority</span><span class="token punctuation">(</span>priorityLevel<span class="token punctuation">,</span> fn<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> shouldYield <span class="token operator">=</span> Scheduler_shouldYield<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,65)])])}const c=s(t,[["render",l]]),r=JSON.parse('{"path":"/strong/126.12.react-8.html","title":"","lang":"en-US","frontmatter":{},"git":{"updatedTime":1681290319000,"contributors":[{"name":"yutao","username":"yutao","email":"642231346@qq.com","commits":1,"url":"https://github.com/yutao"}],"changelog":[{"hash":"f5ab8c9d34991ec274f7f652439afe5b2afb6147","time":1681290319000,"email":"642231346@qq.com","author":"yutao","message":"modify"}]},"filePathRelative":"strong/126.12.react-8.md"}');export{c as comp,r as data};
