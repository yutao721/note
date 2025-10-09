import{_ as s,c as a,a as e,o as p}from"./app-CD1YpnS1.js";const l={};function i(t,n){return p(),a("div",null,[...n[0]||(n[0]=[e(`<h2 id="_1-基础知识" tabindex="-1"><a class="header-anchor" href="#_1-基础知识"><span>1.基础知识</span></a></h2><h3 id="_1-1-最小堆" tabindex="-1"><a class="header-anchor" href="#_1-1-最小堆"><span>1.1 最小堆</span></a></h3><p><img src="https://static.zhufengpeixun.com/xiao_ding_dui_1643273795848.png" alt=""></p><h4 id="_1-1-1-二叉树" tabindex="-1"><a class="header-anchor" href="#_1-1-1-二叉树"><span>1.1.1 二叉树</span></a></h4><ul><li>每个节点最多有两个子节点</li></ul><p><img src="https://static.zhufengpeixun.com/er_cha_shu_1643273951562.jpg" alt=""></p><h4 id="_1-1-2-满二叉树" tabindex="-1"><a class="header-anchor" href="#_1-1-2-满二叉树"><span>1.1.2 满二叉树</span></a></h4><ul><li>除最后一层无任何子节点外，每一层上的所有结点都有两个子结点的二叉树</li></ul><p><img src="https://static.zhufengpeixun.com/man_er_cha_shu_1643274395792.jpg" alt=""></p><h4 id="_1-1-3-完全二叉树" tabindex="-1"><a class="header-anchor" href="#_1-1-3-完全二叉树"><span>1.1.3 完全二叉树</span></a></h4><ul><li>叶子结点只能出现在最下层和次下层</li><li>且最下层的叶子结点集中在树的左部</li></ul><p><img src="https://static.zhufengpeixun.com/wan_quan_er_cha_shu_1643274486956.jpg" alt=""></p><h4 id="_1-1-4-最小堆" tabindex="-1"><a class="header-anchor" href="#_1-1-4-最小堆"><span>1.1.4 最小堆</span></a></h4><ul><li><a href="https://www.processon.com/diagraming/61f26156e0b34d06c3b5bf48" target="_blank" rel="noopener noreferrer">processon</a></li><li>最小堆是一种经过排序的完全二叉树</li><li>其中任一非终端节点的数据值均不大于其左子节点和右子节点的值</li><li>根结点值是所有堆结点值中最小者</li><li>编号关系 <ul><li>左子节点编号=父节点编号<em>2 1</em>2=2</li><li>右子节点编号=左子节点编号+1</li><li>父节点编号=子节点编号/2 2/2=1</li></ul></li><li>索引关系 <ul><li>左子节点索引=(父节点索引+1)*2-1 (0+1)*2-1=1</li><li>右子节点索引=左子节点索引+1</li><li>父节点索引=(子节点索引-1)/2 (1-1)/2=0</li></ul></li><li><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift" target="_blank" rel="noopener noreferrer">Unsigned_right_shift</a></li></ul><p><img src="https://static.zhufengpeixun.com/zui_xiao_dui_1_1643275468911.jpg" alt=""></p><p>react\\packages\\scheduler\\src\\SchedulerMinHeap.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">push</span><span class="token punctuation">(</span><span class="token parameter">heap<span class="token punctuation">,</span> node</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> index <span class="token operator">=</span> heap<span class="token punctuation">.</span>length<span class="token punctuation">;</span></span>
<span class="line">  heap<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token function">siftUp</span><span class="token punctuation">(</span>heap<span class="token punctuation">,</span> node<span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">peek</span><span class="token punctuation">(</span><span class="token parameter">heap</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> first <span class="token operator">=</span> heap<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">return</span> first <span class="token operator">===</span> <span class="token keyword">undefined</span> <span class="token operator">?</span> <span class="token keyword">null</span> <span class="token operator">:</span> first<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">pop</span><span class="token punctuation">(</span><span class="token parameter">heap</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> first <span class="token operator">=</span> heap<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>first <span class="token operator">!==</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> last <span class="token operator">=</span> heap<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>last <span class="token operator">!==</span> first<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      heap<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> last<span class="token punctuation">;</span></span>
<span class="line">      <span class="token function">siftDown</span><span class="token punctuation">(</span>heap<span class="token punctuation">,</span> last<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">return</span> first<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">siftUp</span><span class="token punctuation">(</span><span class="token parameter">heap<span class="token punctuation">,</span> node<span class="token punctuation">,</span> i</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> index <span class="token operator">=</span> i<span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> parentIndex <span class="token operator">=</span> index <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">&gt;&gt;&gt;</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">const</span> parent <span class="token operator">=</span> heap<span class="token punctuation">[</span>parentIndex<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>parent <span class="token operator">!==</span> <span class="token keyword">undefined</span> <span class="token operator">&amp;&amp;</span> <span class="token function">compare</span><span class="token punctuation">(</span>parent<span class="token punctuation">,</span> node<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      heap<span class="token punctuation">[</span>parentIndex<span class="token punctuation">]</span> <span class="token operator">=</span> node<span class="token punctuation">;</span></span>
<span class="line">      heap<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> parent<span class="token punctuation">;</span></span>
<span class="line">      index <span class="token operator">=</span> parentIndex<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">      <span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">siftDown</span><span class="token punctuation">(</span><span class="token parameter">heap<span class="token punctuation">,</span> node<span class="token punctuation">,</span> i</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> index <span class="token operator">=</span> i<span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">const</span> length <span class="token operator">=</span> heap<span class="token punctuation">.</span>length<span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">while</span> <span class="token punctuation">(</span>index <span class="token operator">&lt;</span> length<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> leftIndex <span class="token operator">=</span> <span class="token punctuation">(</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">2</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">const</span> left <span class="token operator">=</span> heap<span class="token punctuation">[</span>leftIndex<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">const</span> rightIndex <span class="token operator">=</span> leftIndex <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">const</span> right <span class="token operator">=</span> heap<span class="token punctuation">[</span>rightIndex<span class="token punctuation">]</span><span class="token punctuation">;</span> </span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>left <span class="token operator">!==</span> <span class="token keyword">undefined</span> <span class="token operator">&amp;&amp;</span> <span class="token function">compare</span><span class="token punctuation">(</span>left<span class="token punctuation">,</span> node<span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span>right <span class="token operator">!==</span> <span class="token keyword">undefined</span> <span class="token operator">&amp;&amp;</span> <span class="token function">compare</span><span class="token punctuation">(</span>right<span class="token punctuation">,</span> left<span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        heap<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> right<span class="token punctuation">;</span></span>
<span class="line">        heap<span class="token punctuation">[</span>rightIndex<span class="token punctuation">]</span> <span class="token operator">=</span> node<span class="token punctuation">;</span></span>
<span class="line">        index <span class="token operator">=</span> rightIndex<span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">        heap<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> left<span class="token punctuation">;</span></span>
<span class="line">        heap<span class="token punctuation">[</span>leftIndex<span class="token punctuation">]</span> <span class="token operator">=</span> node<span class="token punctuation">;</span></span>
<span class="line">        index <span class="token operator">=</span> leftIndex<span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>right <span class="token operator">!==</span> <span class="token keyword">undefined</span> <span class="token operator">&amp;&amp;</span> <span class="token function">compare</span><span class="token punctuation">(</span>right<span class="token punctuation">,</span> node<span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      heap<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> right<span class="token punctuation">;</span></span>
<span class="line">      heap<span class="token punctuation">[</span>rightIndex<span class="token punctuation">]</span> <span class="token operator">=</span> node<span class="token punctuation">;</span></span>
<span class="line">      index <span class="token operator">=</span> rightIndex<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">compare</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> diff <span class="token operator">=</span> a<span class="token punctuation">.</span>sortIndex <span class="token operator">-</span> b<span class="token punctuation">.</span>sortIndex<span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">return</span> diff <span class="token operator">!==</span> <span class="token number">0</span> <span class="token operator">?</span> diff <span class="token operator">:</span> a<span class="token punctuation">.</span>id <span class="token operator">-</span> b<span class="token punctuation">.</span>id<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-messagechannel" tabindex="-1"><a class="header-anchor" href="#_1-2-messagechannel"><span>1.2 MessageChannel</span></a></h3><ul><li>目前 <code>requestIdleCallback</code> 目前只有Chrome支持</li><li>所以目前 React利用 <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/MessageChannel" target="_blank" rel="noopener noreferrer">MessageChannel</a>模拟了requestIdleCallback，将回调延迟到绘制操作之后执行</li><li>MessageChannel API允许我们创建一个新的消息通道，并通过它的两个MessagePort属性发送数据</li><li>MessageChannel创建了一个通信的管道，这个管道有两个端口，每个端口都可以通过postMessage发送数据，而一个端口只要绑定了onmessage回调方法，就可以接收从另一个端口传过来的数据</li><li>MessageChannel是一个宏任务</li></ul><p><img src="https://static.zhufengpeixun.com/liu_lan_qi_zhen_1643277067067.jpg" alt=""></p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">var</span> channel <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MessageChannel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//channel.port1</span></span>
<span class="line"><span class="token comment">//channel.port2</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">var</span> channel <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MessageChannel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> port1 <span class="token operator">=</span> channel<span class="token punctuation">.</span>port1<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> port2 <span class="token operator">=</span> channel<span class="token punctuation">.</span>port2<span class="token punctuation">;</span></span>
<span class="line">port1<span class="token punctuation">.</span><span class="token function-variable function">onmessage</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;port1收到来自port2的数据：&quot;</span> <span class="token operator">+</span> event<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">port2<span class="token punctuation">.</span><span class="token function-variable function">onmessage</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;port2收到来自port1的数据：&quot;</span> <span class="token operator">+</span> event<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">port1<span class="token punctuation">.</span><span class="token function">postMessage</span><span class="token punctuation">(</span><span class="token string">&quot;发送给port2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">port2<span class="token punctuation">.</span><span class="token function">postMessage</span><span class="token punctuation">(</span><span class="token string">&quot;发送给port1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-实现基本任务调度" tabindex="-1"><a class="header-anchor" href="#_2-实现基本任务调度"><span>2.实现基本任务调度</span></a></h2><h3 id="_2-1-src-index-js" tabindex="-1"><a class="header-anchor" href="#_2-1-src-index-js"><span>2.1 src\\index.js</span></a></h3><p>src\\index.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> scheduleCallback <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./scheduler&quot;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">calculate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">100000000</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">//8个0</span></span>
<span class="line">    result <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token function">scheduleCallback</span><span class="token punctuation">(</span>calculate<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-scheduler-index-js" tabindex="-1"><a class="header-anchor" href="#_2-2-scheduler-index-js"><span>2.2 scheduler\\index.js</span></a></h3><p>src\\scheduler\\index.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">export</span> <span class="token operator">*</span> <span class="token keyword">from</span> <span class="token string">&#39;./src/Scheduler&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_2-3-scheduler-js" tabindex="-1"><a class="header-anchor" href="#_2-3-scheduler-js"><span>2.3 Scheduler.js</span></a></h3><p>src\\scheduler\\src\\Scheduler.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * 调度一个工作</span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">callback</span> 要执行的工作</span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">scheduleCallback</span><span class="token punctuation">(</span><span class="token parameter">callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">//执行工作</span></span>
<span class="line">    <span class="token function">callback</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token punctuation">{</span></span>
<span class="line">    scheduleCallback</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-实现时间切片" tabindex="-1"><a class="header-anchor" href="#_3-实现时间切片"><span>3.实现时间切片</span></a></h2><ul><li>任务执行和用户交互是互斥的，如果任务执行时间过长会引起页面卡顿</li><li>可以把任务的执行时间切成多个时间片，每个帧最大执行时间为5ms</li><li>如果任务执行超过时间分片，则会任务会暂停执行，等下一帧的时间再执行</li></ul><p><img src="https://static.zhufengpeixun.com/shi_jian_qie_pian_diao_du_1643278352662.jpg" alt=""></p><h3 id="_3-1-src-index-js" tabindex="-1"><a class="header-anchor" href="#_3-1-src-index-js"><span>3.1 src\\index.js</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">+import { scheduleCallback, shouldYield } from &quot;./scheduler&quot;;</span>
<span class="line">let result = 0;</span>
<span class="line">let i = 0;</span>
<span class="line">/**</span>
<span class="line"> * 总任务</span>
<span class="line"> * @returns </span>
<span class="line"> */</span>
<span class="line">function calculate() {</span>
<span class="line">+  for (; i &lt; 10000000 &amp;&amp; (!shouldYield()); i++) {//7个0</span>
<span class="line">+    result += 1;</span>
<span class="line">+  }</span>
<span class="line">+  if (result &lt; 10000000) {</span>
<span class="line">+    return calculate;</span>
<span class="line">+  } else {</span>
<span class="line">+    console.log(&#39;result&#39;, result);</span>
<span class="line">+    return null;</span>
<span class="line">+  }</span>
<span class="line">}</span>
<span class="line">scheduleCallback(calculate);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-scheduler-js" tabindex="-1"><a class="header-anchor" href="#_3-2-scheduler-js"><span>3.2 Scheduler.js</span></a></h3><p>src\\scheduler\\src\\Scheduler.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">+import { requestHostCallback, shouldYieldToHost } from &#39;./SchedulerHostConfig&#39;;</span>
<span class="line">/**</span>
<span class="line"> * 调度一个工作</span>
<span class="line"> * @param {*} callback 要执行的工作</span>
<span class="line"> */</span>
<span class="line">function scheduleCallback(callback) {</span>
<span class="line">    //执行工作</span>
<span class="line">+   requestHostCallback(callback);</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">export {</span>
<span class="line">    scheduleCallback,</span>
<span class="line">+   shouldYieldToHost as shouldYield</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-schedulerhostconfig-js" tabindex="-1"><a class="header-anchor" href="#_3-3-schedulerhostconfig-js"><span>3.3 SchedulerHostConfig.js</span></a></h3><p>src\\scheduler\\src\\SchedulerHostConfig.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token comment">//截止时间</span></span>
<span class="line"><span class="token keyword">let</span> deadline <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//当前正在调度执行的工作</span></span>
<span class="line"><span class="token keyword">let</span> scheduledHostCallback <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//每帧的时间片</span></span>
<span class="line"><span class="token keyword">let</span> yieldInterval <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> channel <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MessageChannel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">channel<span class="token punctuation">.</span>port1<span class="token punctuation">.</span>onmessage <span class="token operator">=</span> performWorkUntilDeadline<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * 获取当前的时间戳</span>
<span class="line"> * <span class="token keyword">@returns</span> 当前的时间戳</span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">getCurrentTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> performance<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * 判断是否到达了本帧的截止时间</span>
<span class="line"> * <span class="token keyword">@returns</span> 是否需要暂停执行</span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">shouldYieldToHost</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> currentTime <span class="token operator">=</span> <span class="token function">getCurrentTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> currentTime <span class="token operator">&gt;=</span> deadline<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * 执行工作直到截止时间</span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">performWorkUntilDeadline</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> currentTime <span class="token operator">=</span> <span class="token function">getCurrentTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">//计算截止时间</span></span>
<span class="line">    deadline <span class="token operator">=</span> currentTime <span class="token operator">+</span> yieldInterval<span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">//执行工作</span></span>
<span class="line">    <span class="token keyword">const</span> hasMoreWork <span class="token operator">=</span> <span class="token function">scheduledHostCallback</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">//如果此工作还没有执行完，则再次调度</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>hasMoreWork<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        channel<span class="token punctuation">.</span>port2<span class="token punctuation">.</span><span class="token function">postMessage</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * 请求宿主的回调函数执行</span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">callback</span> </span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">requestHostCallback</span><span class="token punctuation">(</span><span class="token parameter">callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    scheduledHostCallback <span class="token operator">=</span> callback<span class="token punctuation">;</span></span>
<span class="line">    channel<span class="token punctuation">.</span>port2<span class="token punctuation">.</span><span class="token function">postMessage</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-调度多个任务" tabindex="-1"><a class="header-anchor" href="#_4-调度多个任务"><span>4.调度多个任务</span></a></h2><ul><li>如果同时调度多个任务需要保证任务有序执行</li></ul><p><img src="https://static.zhufengpeixun.com/duo_ge_ren_wu_1643279818108.jpg" alt=""></p><h3 id="_4-1-src-index-js" tabindex="-1"><a class="header-anchor" href="#_4-1-src-index-js"><span>4.1 src\\index.js</span></a></h3><p>src\\index.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import { scheduleCallback, shouldYield } from &quot;./scheduler&quot;;</span>
<span class="line">let result = 0;</span>
<span class="line">let i = 0;</span>
<span class="line">/**</span>
<span class="line"> * 总任务</span>
<span class="line"> * @returns </span>
<span class="line"> */</span>
<span class="line">function calculate() {</span>
<span class="line">  for (; i &lt; 10000000 &amp;&amp; (!shouldYield()); i++) {//7个0</span>
<span class="line">    result += 1;</span>
<span class="line">  }</span>
<span class="line">  if (result &lt; 10000000) {</span>
<span class="line">    return calculate;</span>
<span class="line">  } else {</span>
<span class="line">    console.log(&#39;result&#39;, result);</span>
<span class="line">    return null;</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line">+let result2 = 0;</span>
<span class="line">+let i2 = 0;</span>
<span class="line">+/**</span>
<span class="line">+ * 总任务</span>
<span class="line">+ * @returns </span>
<span class="line">+ */</span>
<span class="line">+function calculate2() {</span>
<span class="line">+  for (; i2 &lt; 10000000 &amp;&amp; (!shouldYield()); i2++) {</span>
<span class="line">+    result2 += 1;</span>
<span class="line">+  }</span>
<span class="line">+  if (result2 &lt; 10000000) {</span>
<span class="line">+    return calculate;</span>
<span class="line">+  } else {</span>
<span class="line">+    console.log(&#39;result2&#39;, result2);</span>
<span class="line">+    return null;</span>
<span class="line">+  }</span>
<span class="line">+}</span>
<span class="line">scheduleCallback(calculate);</span>
<span class="line">+scheduleCallback(calculate2);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-scheduler-js" tabindex="-1"><a class="header-anchor" href="#_4-2-scheduler-js"><span>4.2 Scheduler.js</span></a></h3><p>src\\scheduler\\src\\Scheduler.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">+import { requestHostCallback, shouldYieldToHost as shouldYield } from &#39;./SchedulerHostConfig&#39;;</span>
<span class="line">+//任务队列</span>
<span class="line">+let taskQueue = [];</span>
<span class="line">+let currentTask;</span>
<span class="line">/**</span>
<span class="line"> * 调度一个工作</span>
<span class="line"> * @param {*} callback 要执行的工作</span>
<span class="line"> */</span>
<span class="line">function scheduleCallback(callback) {</span>
<span class="line">+   //把此工作添加到任务队列中</span>
<span class="line">+   taskQueue.push(callback);</span>
<span class="line">+   //开始调度flushWork</span>
<span class="line">+   requestHostCallback(flushWork);</span>
<span class="line">}</span>
<span class="line">+/**</span>
<span class="line">+ * 清空任务队列</span>
<span class="line">+ * @returns 队列中是否还有任务</span>
<span class="line">+ */</span>
<span class="line">+function flushWork() {</span>
<span class="line">+    return workLoop();</span>
<span class="line">+}</span>
<span class="line">+/**</span>
<span class="line">+ * 清空任务队列</span>
<span class="line">+ * @returns 队列中是否还有任务</span>
<span class="line">+ */</span>
<span class="line">+function workLoop() {</span>
<span class="line">+    //取出第一个任务</span>
<span class="line">+    currentTask = taskQueue[0];</span>
<span class="line">+    //如果任务存在</span>
<span class="line">+    while (currentTask) {</span>
<span class="line">+        //如果当前的时间片到期了,退出工作循环</span>
<span class="line">+        if (shouldYield()) {</span>
<span class="line">+            break;</span>
<span class="line">+        }</span>
<span class="line">+        //执行当前的工作</span>
<span class="line">+        const continuationCallback = currentTask();</span>
<span class="line">+        //如果返回函数说明任务尚未结束,下次还执行它</span>
<span class="line">+        if (typeof continuationCallback === &#39;function&#39;) {</span>
<span class="line">+            currentTask = continuationCallback;</span>
<span class="line">+        } else {</span>
<span class="line">+            //否则表示此任务执行结束，可以把此任务移除队列</span>
<span class="line">+            taskQueue.shift();</span>
<span class="line">+        }</span>
<span class="line">+        //还取第一个任务</span>
<span class="line">+        currentTask = taskQueue[0];</span>
<span class="line">+    }</span>
<span class="line">+    return currentTask;</span>
<span class="line">+}</span>
<span class="line">+</span>
<span class="line">+export {</span>
<span class="line">+    scheduleCallback,</span>
<span class="line">+    shouldYield</span>
<span class="line">+}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-任务优先级" tabindex="-1"><a class="header-anchor" href="#_5-任务优先级"><span>5.任务优先级</span></a></h2><ul><li>如果想后开始的任务先执行就需要增加任务优先级</li></ul><h3 id="_5-1-src-index-js" tabindex="-1"><a class="header-anchor" href="#_5-1-src-index-js"><span>5.1 src\\index.js</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import {</span>
<span class="line">  scheduleCallback,</span>
<span class="line">  shouldYield,</span>
<span class="line">+ ImmediatePriority,//-1</span>
<span class="line">+ UserBlockingPriority,//250</span>
<span class="line">+ NormalPriority,//5000</span>
<span class="line">+ LowPriority,//10000</span>
<span class="line">+ IdlePriority,//1073741823</span>
<span class="line">} from &quot;./scheduler&quot;;</span>
<span class="line">let result = 0;</span>
<span class="line">let i = 0;</span>
<span class="line">/**</span>
<span class="line"> * 总任务</span>
<span class="line"> * @returns </span>
<span class="line"> */</span>
<span class="line">+function calculate(didTimeout) {</span>
<span class="line">+ for (; i &lt; 10000000 &amp;&amp; (!shouldYield() || didTimeout); i++) {//7个0</span>
<span class="line">    result += 1;</span>
<span class="line">  }</span>
<span class="line">  if (result &lt; 10000000) {</span>
<span class="line">    return calculate;</span>
<span class="line">  } else {</span>
<span class="line">    console.log(&#39;result&#39;, result);</span>
<span class="line">    return null;</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">let result2 = 0;</span>
<span class="line">let i2 = 0;</span>
<span class="line">+function calculate2(didTimeout) {</span>
<span class="line">+  for (; i2 &lt; 10000000 &amp;&amp; (!shouldYield() || didTimeout); i2++) {</span>
<span class="line">    result2 += 1;</span>
<span class="line">  }</span>
<span class="line">  if (result2 &lt; 10000000) {</span>
<span class="line">    return calculate2;</span>
<span class="line">  } else {</span>
<span class="line">    console.log(&#39;result2&#39;, result2);</span>
<span class="line">    return null;</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line">+let result3 = 0;</span>
<span class="line">+let i3 = 0;</span>
<span class="line">+function calculate3(didTimeout) {</span>
<span class="line">+  for (; i3 &lt; 10000000 &amp;&amp; (!shouldYield() || didTimeout); i3++) {</span>
<span class="line">+    result3 += 1;</span>
<span class="line">+  }</span>
<span class="line">+  if (result3 &lt; 10000000) {</span>
<span class="line">+    return calculate3;</span>
<span class="line">+  } else {</span>
<span class="line">+    console.log(&#39;result3&#39;, result3);</span>
<span class="line">+    return null;</span>
<span class="line">+  }</span>
<span class="line">+}</span>
<span class="line">+scheduleCallback(ImmediatePriority, calculate);//-1</span>
<span class="line">+scheduleCallback(LowPriority, calculate2);//10000</span>
<span class="line">+scheduleCallback(UserBlockingPriority, calculate3);//250</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-2-schedulerhostconfig-js" tabindex="-1"><a class="header-anchor" href="#_5-2-schedulerhostconfig-js"><span>5.2 SchedulerHostConfig.js</span></a></h3><p>src\\scheduler\\src\\SchedulerHostConfig.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">//截止时间</span>
<span class="line">let deadline = 0;</span>
<span class="line">//当前正在调度执行的工作</span>
<span class="line">let scheduledHostCallback = null;</span>
<span class="line">//每帧的时间片</span>
<span class="line">let yieldInterval = 5;</span>
<span class="line"></span>
<span class="line">const channel = new MessageChannel();</span>
<span class="line">channel.port1.onmessage = performWorkUntilDeadline;</span>
<span class="line"></span>
<span class="line">/**</span>
<span class="line"> * 获取当前的时间戳</span>
<span class="line"> * @returns 当前的时间戳</span>
<span class="line"> */</span>
<span class="line">export function getCurrentTime() {</span>
<span class="line">    return performance.now();</span>
<span class="line">}</span>
<span class="line">/**</span>
<span class="line"> * 判断是否到达了本帧的截止时间</span>
<span class="line"> * @returns 是否需要暂停执行</span>
<span class="line"> */</span>
<span class="line">export function shouldYieldToHost() {</span>
<span class="line">    const currentTime = getCurrentTime();</span>
<span class="line">    return currentTime &gt;= deadline;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line">/**</span>
<span class="line"> * 执行工作直到截止时间</span>
<span class="line"> */</span>
<span class="line">export function performWorkUntilDeadline() {</span>
<span class="line">    const currentTime = getCurrentTime();</span>
<span class="line">    //计算截止时间</span>
<span class="line">    deadline = currentTime + yieldInterval;</span>
<span class="line">    //执行工作</span>
<span class="line">+   const hasMoreWork = scheduledHostCallback(currentTime);</span>
<span class="line">    //如果此工作还没有执行完，则再次调度</span>
<span class="line">    if (hasMoreWork) {</span>
<span class="line">        channel.port2.postMessage(null);</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">/**</span>
<span class="line"> * 请求宿主的回调函数执行</span>
<span class="line"> * @param {*} callback </span>
<span class="line"> */</span>
<span class="line">export function requestHostCallback(callback) {</span>
<span class="line">    scheduledHostCallback = callback;</span>
<span class="line">    channel.port2.postMessage(null);</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-3-scheduler-js" tabindex="-1"><a class="header-anchor" href="#_5-3-scheduler-js"><span>5.3 Scheduler.js</span></a></h3><p>src\\scheduler\\src\\Scheduler.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">+import { requestHostCallback, shouldYieldToHost as shouldYield, getCurrentTime } from &#39;./+SchedulerHostConfig&#39;;</span>
<span class="line">+import { push, pop, peek } from &#39;./SchedulerMinHeap&#39;;</span>
<span class="line">+import { ImmediatePriority, UserBlockingPriority, NormalPriority, LowPriority, IdlePriority } from &#39;./SchedulerPriorities&#39;;</span>
<span class="line">+// 不同优先级对应的不同的任务过期时间间隔</span>
<span class="line">+let maxSigned31BitInt = 1073741823;</span>
<span class="line">+let IMMEDIATE_PRIORITY_TIMEOUT = -1;//立即执行的优先级，级别最高</span>
<span class="line">+let USER_BLOCKING_PRIORITY_TIMEOUT = 250;//用户阻塞级别的优先级</span>
<span class="line">+let NORMAL_PRIORITY_TIMEOUT = 5000;//正常的优先级</span>
<span class="line">+let LOW_PRIORITY_TIMEOUT = 10000;//较低的优先级</span>
<span class="line">+let IDLE_PRIORITY_TIMEOUT = maxSigned31BitInt;//优先级最低，表示任务可以闲置</span>
<span class="line">//任务队列</span>
<span class="line">let taskQueue = [];</span>
<span class="line">let currentTask;</span>
<span class="line">+//下一个任务ID编号</span>
<span class="line">+let taskIdCounter = 1;</span>
<span class="line">/**</span>
<span class="line"> * 调度一个工作</span>
<span class="line"> * @param {*} callback 要执行的工作</span>
<span class="line"> */</span>
<span class="line">+function scheduleCallback(priorityLevel, callback) {</span>
<span class="line">+    // 获取当前时间，它是计算任务开始时间、过期时间和判断任务是否过期的依据</span>
<span class="line">+    let currentTime = getCurrentTime();</span>
<span class="line">+    // 确定任务开始时间</span>
<span class="line">+    let startTime = currentTime;</span>
<span class="line">+    // 计算过期时间</span>
<span class="line">+    let timeout;</span>
<span class="line">+    switch (priorityLevel) {</span>
<span class="line">+        case ImmediatePriority://1</span>
<span class="line">+            timeout = IMMEDIATE_PRIORITY_TIMEOUT;//-1</span>
<span class="line">+            break;</span>
<span class="line">+        case UserBlockingPriority://2</span>
<span class="line">+            timeout = USER_BLOCKING_PRIORITY_TIMEOUT;//250</span>
<span class="line">+            break;</span>
<span class="line">+        case IdlePriority://5</span>
<span class="line">+            timeout = IDLE_PRIORITY_TIMEOUT;//1073741823</span>
<span class="line">+            break;</span>
<span class="line">+        case LowPriority://4</span>
<span class="line">+            timeout = LOW_PRIORITY_TIMEOUT;//10000</span>
<span class="line">+            break;</span>
<span class="line">+        case NormalPriority://3</span>
<span class="line">+        default:</span>
<span class="line">+            timeout = NORMAL_PRIORITY_TIMEOUT;//5000</span>
<span class="line">+            break;</span>
<span class="line">+    }</span>
<span class="line">+    //计算超时时间</span>
<span class="line">+    let expirationTime = startTime + timeout;</span>
<span class="line">+    //创建新任务</span>
<span class="line">+    let newTask = {</span>
<span class="line">+        id: taskIdCounter++,//任务ID</span>
<span class="line">+        callback,//真正的任务函数</span>
<span class="line">+        priorityLevel,//任务优先级，参与计算任务过期时间</span>
<span class="line">+        expirationTime,//表示任务何时过期，影响它在taskQueue中的排序</span>
<span class="line">+        //为小顶堆的队列提供排序依据</span>
<span class="line">+        sortIndex: -1</span>
<span class="line">+    };</span>
<span class="line">+    newTask.sortIndex = expirationTime;</span>
<span class="line">+    //把此工作添加到任务队列中</span>
<span class="line">+    push(taskQueue, newTask);</span>
<span class="line">+    //开始调度flushWork</span>
<span class="line">+    requestHostCallback(flushWork);</span>
<span class="line">+}</span>
<span class="line">/**</span>
<span class="line"> * 清空任务队列</span>
<span class="line"> * @returns 队列中是否还有任务</span>
<span class="line"> */</span>
<span class="line">+function flushWork(initialTime) {</span>
<span class="line">+    return workLoop(initialTime);</span>
<span class="line">+}</span>
<span class="line">/**</span>
<span class="line"> * 清空任务队列</span>
<span class="line"> * @returns 队列中是否还有任务</span>
<span class="line"> */</span>
<span class="line">+function workLoop(initialTime) {</span>
<span class="line">+    //当前时间</span>
<span class="line">+    let currentTime = initialTime;</span>
<span class="line">+    //取出第一个任务</span>
<span class="line">+    currentTask = peek(taskQueue);</span>
<span class="line">+    //如果任务存在</span>
<span class="line">+    while (currentTask) {</span>
<span class="line">+        //如果当前任务的过期时间大于当前时间,并且当前的时间片到期了,退出工作循环</span>
<span class="line">+        if (currentTask.expirationTime &gt; currentTime &amp;&amp; shouldYield()) {</span>
<span class="line">+            break;</span>
<span class="line">+        }</span>
<span class="line">+        //执行当前的工作</span>
<span class="line">+        //const continuationCallback = currentTask();</span>
<span class="line">+        const callback = currentTask.callback;</span>
<span class="line">+        if (typeof callback === &#39;function&#39;) {</span>
<span class="line">+            currentTask.callback = null;</span>
<span class="line">+            const didUserCallbackTimeout = currentTask.expirationTime &lt;= currentTime;</span>
<span class="line">+            const continuationCallback = callback(didUserCallbackTimeout);</span>
<span class="line">+            //如果返回函数说明任务尚未结束,下次还执行它</span>
<span class="line">+            if (typeof continuationCallback === &#39;function&#39;) {</span>
<span class="line">+                //currentTask = continuationCallback;</span>
<span class="line">+                currentTask.callback = continuationCallback;</span>
<span class="line">+            } else {</span>
<span class="line">+                //否则表示此任务执行结束，可以把此任务移除队列</span>
<span class="line">+                //taskQueue.shift();</span>
<span class="line">+                pop(taskQueue);</span>
<span class="line">+            }</span>
<span class="line">+        } else {</span>
<span class="line">+            pop(taskQueue);</span>
<span class="line">+        }</span>
<span class="line">+        //还取第一个任务</span>
<span class="line">+        currentTask = peek(taskQueue);</span>
<span class="line">+    }</span>
<span class="line">+    return currentTask;</span>
<span class="line">+}</span>
<span class="line"></span>
<span class="line">export {</span>
<span class="line">    scheduleCallback,</span>
<span class="line">    shouldYield,</span>
<span class="line">+   ImmediatePriority,</span>
<span class="line">+   UserBlockingPriority,</span>
<span class="line">+   NormalPriority,</span>
<span class="line">+   IdlePriority,</span>
<span class="line">+   LowPriority</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-4-schedulerpriorities-js" tabindex="-1"><a class="header-anchor" href="#_5-4-schedulerpriorities-js"><span>5.4 SchedulerPriorities.js</span></a></h3><p>src\\scheduler\\src\\SchedulerPriorities.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> NoPriority <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>           <span class="token comment">// 没有任何优先级</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> ImmediatePriority <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>    <span class="token comment">// 立即执行的优先级，级别最高</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> UserBlockingPriority <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">// 用户阻塞级别的优先级</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> NormalPriority <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>       <span class="token comment">// 正常的优先级</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> LowPriority <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>          <span class="token comment">// 较低的优先级</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> IdlePriority <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>         <span class="token comment">// 优先级最低，表示任务可以闲置</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-5-schedulerminheap-js" tabindex="-1"><a class="header-anchor" href="#_5-5-schedulerminheap-js"><span>5.5 SchedulerMinHeap.js</span></a></h3><p>src\\scheduler\\src\\SchedulerMinHeap.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">push</span><span class="token punctuation">(</span><span class="token parameter">heap<span class="token punctuation">,</span> node</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> index <span class="token operator">=</span> heap<span class="token punctuation">.</span>length<span class="token punctuation">;</span></span>
<span class="line">    heap<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token function">siftUp</span><span class="token punctuation">(</span>heap<span class="token punctuation">,</span> node<span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">peek</span><span class="token punctuation">(</span><span class="token parameter">heap</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> first <span class="token operator">=</span> heap<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> first <span class="token operator">===</span> <span class="token keyword">undefined</span> <span class="token operator">?</span> <span class="token keyword">null</span> <span class="token operator">:</span> first<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">pop</span><span class="token punctuation">(</span><span class="token parameter">heap</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> first <span class="token operator">=</span> heap<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>first <span class="token operator">!==</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">const</span> last <span class="token operator">=</span> heap<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>last <span class="token operator">!==</span> first<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            heap<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> last<span class="token punctuation">;</span></span>
<span class="line">            <span class="token function">siftDown</span><span class="token punctuation">(</span>heap<span class="token punctuation">,</span> last<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token keyword">return</span> first<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">siftUp</span><span class="token punctuation">(</span><span class="token parameter">heap<span class="token punctuation">,</span> node<span class="token punctuation">,</span> i</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> index <span class="token operator">=</span> i<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">const</span> parentIndex <span class="token operator">=</span> index <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">&gt;&gt;&gt;</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">const</span> parent <span class="token operator">=</span> heap<span class="token punctuation">[</span>parentIndex<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>parent <span class="token operator">!==</span> <span class="token keyword">undefined</span> <span class="token operator">&amp;&amp;</span> <span class="token function">compare</span><span class="token punctuation">(</span>parent<span class="token punctuation">,</span> node<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            heap<span class="token punctuation">[</span>parentIndex<span class="token punctuation">]</span> <span class="token operator">=</span> node<span class="token punctuation">;</span></span>
<span class="line">            heap<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> parent<span class="token punctuation">;</span></span>
<span class="line">            index <span class="token operator">=</span> parentIndex<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">            <span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">siftDown</span><span class="token punctuation">(</span><span class="token parameter">heap<span class="token punctuation">,</span> node<span class="token punctuation">,</span> i</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> index <span class="token operator">=</span> i<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">const</span> length <span class="token operator">=</span> heap<span class="token punctuation">.</span>length<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">while</span> <span class="token punctuation">(</span>index <span class="token operator">&lt;</span> length<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">const</span> leftIndex <span class="token operator">=</span> <span class="token punctuation">(</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">2</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">const</span> left <span class="token operator">=</span> heap<span class="token punctuation">[</span>leftIndex<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">const</span> rightIndex <span class="token operator">=</span> leftIndex <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">const</span> right <span class="token operator">=</span> heap<span class="token punctuation">[</span>rightIndex<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>left <span class="token operator">!==</span> <span class="token keyword">undefined</span> <span class="token operator">&amp;&amp;</span> <span class="token function">compare</span><span class="token punctuation">(</span>left<span class="token punctuation">,</span> node<span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">if</span> <span class="token punctuation">(</span>right <span class="token operator">!==</span> <span class="token keyword">undefined</span> <span class="token operator">&amp;&amp;</span> <span class="token function">compare</span><span class="token punctuation">(</span>right<span class="token punctuation">,</span> left<span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                heap<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> right<span class="token punctuation">;</span></span>
<span class="line">                heap<span class="token punctuation">[</span>rightIndex<span class="token punctuation">]</span> <span class="token operator">=</span> node<span class="token punctuation">;</span></span>
<span class="line">                index <span class="token operator">=</span> rightIndex<span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">                heap<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> left<span class="token punctuation">;</span></span>
<span class="line">                heap<span class="token punctuation">[</span>leftIndex<span class="token punctuation">]</span> <span class="token operator">=</span> node<span class="token punctuation">;</span></span>
<span class="line">                index <span class="token operator">=</span> leftIndex<span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>right <span class="token operator">!==</span> <span class="token keyword">undefined</span> <span class="token operator">&amp;&amp;</span> <span class="token function">compare</span><span class="token punctuation">(</span>right<span class="token punctuation">,</span> node<span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            heap<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> right<span class="token punctuation">;</span></span>
<span class="line">            heap<span class="token punctuation">[</span>rightIndex<span class="token punctuation">]</span> <span class="token operator">=</span> node<span class="token punctuation">;</span></span>
<span class="line">            index <span class="token operator">=</span> rightIndex<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">compare</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> diff <span class="token operator">=</span> a<span class="token punctuation">.</span>sortIndex <span class="token operator">-</span> b<span class="token punctuation">.</span>sortIndex<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> diff <span class="token operator">!==</span> <span class="token number">0</span> <span class="token operator">?</span> diff <span class="token operator">:</span> a<span class="token punctuation">.</span>id <span class="token operator">-</span> b<span class="token punctuation">.</span>id<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-延迟任务" tabindex="-1"><a class="header-anchor" href="#_6-延迟任务"><span>6.延迟任务</span></a></h2><h3 id="_6-1-src-index-js" tabindex="-1"><a class="header-anchor" href="#_6-1-src-index-js"><span>6.1 src\\index.js</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import {</span>
<span class="line">  scheduleCallback,</span>
<span class="line">  shouldYield,</span>
<span class="line">  ImmediatePriority,//-1</span>
<span class="line">  UserBlockingPriority,//250</span>
<span class="line">  NormalPriority,//5000</span>
<span class="line">  LowPriority,//10000</span>
<span class="line">  IdlePriority,//1073741823</span>
<span class="line">} from &quot;./scheduler&quot;;</span>
<span class="line">let result = 0;</span>
<span class="line">let i = 0;</span>
<span class="line">/**</span>
<span class="line"> * 总任务</span>
<span class="line"> * @returns </span>
<span class="line"> */</span>
<span class="line">function calculate(didTimeout) {</span>
<span class="line">  for (; i &lt; 10000000 &amp;&amp; (!shouldYield() || didTimeout); i++) {//7个0</span>
<span class="line">    result += 1;</span>
<span class="line">  }</span>
<span class="line">  if (result &lt; 10000000) {</span>
<span class="line">    return calculate;</span>
<span class="line">  } else {</span>
<span class="line">    console.log(&#39;result&#39;, result);</span>
<span class="line">    return null;</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">let result2 = 0;</span>
<span class="line">let i2 = 0;</span>
<span class="line">+console.time(&#39;cost&#39;);</span>
<span class="line">function calculate2(didTimeout) {</span>
<span class="line">+ if (i2 === 0)</span>
<span class="line">+   console.timeEnd(&#39;cost&#39;);</span>
<span class="line">  for (; i2 &lt; 10000000 &amp;&amp; (!shouldYield() || didTimeout); i2++) {</span>
<span class="line">    result2 += 1;</span>
<span class="line">  }</span>
<span class="line">  if (result2 &lt; 10000000) {</span>
<span class="line">    return calculate2;</span>
<span class="line">  } else {</span>
<span class="line">    console.log(&#39;result2&#39;, result2);</span>
<span class="line">    return null;</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">scheduleCallback(ImmediatePriority, calculate);//-1</span>
<span class="line">+scheduleCallback(LowPriority, calculate2, { delay: 10000 });//10000</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-2-schedulerhostconfig-js" tabindex="-1"><a class="header-anchor" href="#_6-2-schedulerhostconfig-js"><span>6.2 SchedulerHostConfig.js</span></a></h3><p>src\\scheduler\\src\\SchedulerHostConfig.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">//截止时间</span>
<span class="line">let deadline = 0;</span>
<span class="line">//当前正在调度执行的工作</span>
<span class="line">let scheduledHostCallback = null;</span>
<span class="line">//每帧的时间片</span>
<span class="line">let yieldInterval = 5;</span>
<span class="line">+let taskTimeoutID = -1;</span>
<span class="line">const channel = new MessageChannel();</span>
<span class="line">channel.port1.onmessage = performWorkUntilDeadline;</span>
<span class="line"></span>
<span class="line">/**</span>
<span class="line"> * 获取当前的时间戳</span>
<span class="line"> * @returns 当前的时间戳</span>
<span class="line"> */</span>
<span class="line">export function getCurrentTime() {</span>
<span class="line">    return performance.now();</span>
<span class="line">}</span>
<span class="line">/**</span>
<span class="line"> * 判断是否到达了本帧的截止时间</span>
<span class="line"> * @returns 是否需要暂停执行</span>
<span class="line"> */</span>
<span class="line">export function shouldYieldToHost() {</span>
<span class="line">    const currentTime = getCurrentTime();</span>
<span class="line">    return currentTime &gt;= deadline;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line">/**</span>
<span class="line"> * 执行工作直到截止时间</span>
<span class="line"> */</span>
<span class="line">export function performWorkUntilDeadline() {</span>
<span class="line">    const currentTime = getCurrentTime();</span>
<span class="line">    //计算截止时间</span>
<span class="line">    deadline = currentTime + yieldInterval;</span>
<span class="line">    //执行工作</span>
<span class="line">    const hasMoreWork = scheduledHostCallback(currentTime);</span>
<span class="line">    //如果此工作还没有执行完，则再次调度</span>
<span class="line">    if (hasMoreWork) {</span>
<span class="line">        channel.port2.postMessage(null);</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">/**</span>
<span class="line"> * 请求宿主的回调函数执行</span>
<span class="line"> * @param {*} callback </span>
<span class="line"> */</span>
<span class="line">export function requestHostCallback(callback) {</span>
<span class="line">    scheduledHostCallback = callback;</span>
<span class="line">    channel.port2.postMessage(null);</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line">+export function requestHostTimeout(callback, ms) {</span>
<span class="line">+    taskTimeoutID = setTimeout(() =&gt; {</span>
<span class="line">+        callback(getCurrentTime());</span>
<span class="line">+    }, ms);</span>
<span class="line">+};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-3-scheduler-js" tabindex="-1"><a class="header-anchor" href="#_6-3-scheduler-js"><span>6.3 Scheduler.js</span></a></h3><p>src\\scheduler\\src\\Scheduler.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token operator">+</span><span class="token keyword">import</span> <span class="token punctuation">{</span> requestHostCallback<span class="token punctuation">,</span> shouldYieldToHost <span class="token keyword">as</span> shouldYield<span class="token punctuation">,</span> getCurrentTime<span class="token punctuation">,</span> requestHostTimeout <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./SchedulerHostConfig&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> push<span class="token punctuation">,</span> pop<span class="token punctuation">,</span> peek <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./SchedulerMinHeap&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> ImmediatePriority<span class="token punctuation">,</span> UserBlockingPriority<span class="token punctuation">,</span> NormalPriority<span class="token punctuation">,</span> LowPriority<span class="token punctuation">,</span> IdlePriority <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./SchedulerPriorities&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// 不同优先级对应的不同的任务过期时间间隔</span></span>
<span class="line"><span class="token keyword">let</span> maxSigned31BitInt <span class="token operator">=</span> <span class="token number">1073741823</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> <span class="token constant">IMMEDIATE_PRIORITY_TIMEOUT</span> <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span><span class="token comment">//立即执行的优先级，级别最高</span></span>
<span class="line"><span class="token keyword">let</span> <span class="token constant">USER_BLOCKING_PRIORITY_TIMEOUT</span> <span class="token operator">=</span> <span class="token number">250</span><span class="token punctuation">;</span><span class="token comment">//用户阻塞级别的优先级</span></span>
<span class="line"><span class="token keyword">let</span> <span class="token constant">NORMAL_PRIORITY_TIMEOUT</span> <span class="token operator">=</span> <span class="token number">5000</span><span class="token punctuation">;</span><span class="token comment">//正常的优先级</span></span>
<span class="line"><span class="token keyword">let</span> <span class="token constant">LOW_PRIORITY_TIMEOUT</span> <span class="token operator">=</span> <span class="token number">10000</span><span class="token punctuation">;</span><span class="token comment">//较低的优先级</span></span>
<span class="line"><span class="token keyword">let</span> <span class="token constant">IDLE_PRIORITY_TIMEOUT</span> <span class="token operator">=</span> maxSigned31BitInt<span class="token punctuation">;</span><span class="token comment">//优先级最低，表示任务可以闲置</span></span>
<span class="line"><span class="token comment">//已经可以开始执行队列</span></span>
<span class="line"><span class="token keyword">let</span> taskQueue <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span><span class="token comment">//尚未可以开始执行队列</span></span>
<span class="line"><span class="token operator">+</span><span class="token keyword">let</span> timerQueue <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> currentTask<span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//下一个任务ID编号</span></span>
<span class="line"><span class="token keyword">let</span> taskIdCounter <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * 调度一个工作</span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">callback</span> 要执行的工作</span>
<span class="line"> */</span></span>
<span class="line"><span class="token operator">+</span><span class="token keyword">function</span> <span class="token function">scheduleCallback</span><span class="token punctuation">(</span><span class="token parameter">priorityLevel<span class="token punctuation">,</span> callback<span class="token punctuation">,</span> options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 获取当前时间，它是计算任务开始时间、过期时间和判断任务是否过期的依据</span></span>
<span class="line">    <span class="token keyword">let</span> currentTime <span class="token operator">=</span> <span class="token function">getCurrentTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// 确定任务开始时间</span></span>
<span class="line"><span class="token operator">+</span>   <span class="token keyword">let</span> startTime<span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>   <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> options <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span> <span class="token operator">&amp;&amp;</span> options <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>       <span class="token keyword">var</span> delay <span class="token operator">=</span> options<span class="token punctuation">.</span>delay<span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>       <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> delay <span class="token operator">===</span> <span class="token string">&#39;number&#39;</span> <span class="token operator">&amp;&amp;</span> delay <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>           startTime <span class="token operator">=</span> currentTime <span class="token operator">+</span> delay<span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>       <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>           startTime <span class="token operator">=</span> currentTime<span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>       <span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">+</span>   <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>       startTime <span class="token operator">=</span> currentTime<span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>   <span class="token punctuation">}</span></span>
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
<span class="line"><span class="token operator">+</span>       startTime<span class="token punctuation">,</span></span>
<span class="line">        expirationTime<span class="token punctuation">,</span><span class="token comment">//表示任务何时过期，影响它在taskQueue中的排序</span></span>
<span class="line">        <span class="token comment">//为小顶堆的队列提供排序依据</span></span>
<span class="line">        <span class="token literal-property property">sortIndex</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>   <span class="token keyword">if</span> <span class="token punctuation">(</span>startTime <span class="token operator">&gt;</span> currentTime<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>       newTask<span class="token punctuation">.</span>sortIndex <span class="token operator">=</span> startTime<span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>       <span class="token function">push</span><span class="token punctuation">(</span>timerQueue<span class="token punctuation">,</span> newTask<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>       <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">peek</span><span class="token punctuation">(</span>taskQueue<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> newTask <span class="token operator">===</span> <span class="token function">peek</span><span class="token punctuation">(</span>timerQueue<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>           <span class="token function">requestHostTimeout</span><span class="token punctuation">(</span>handleTimeout<span class="token punctuation">,</span> startTime <span class="token operator">-</span> currentTime<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>       <span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">+</span>   <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">        newTask<span class="token punctuation">.</span>sortIndex <span class="token operator">=</span> expirationTime<span class="token punctuation">;</span></span>
<span class="line">        <span class="token comment">//把此工作添加到任务队列中</span></span>
<span class="line">        <span class="token function">push</span><span class="token punctuation">(</span>taskQueue<span class="token punctuation">,</span> newTask<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token comment">//开始调度flushWork</span></span>
<span class="line">        <span class="token function">requestHostCallback</span><span class="token punctuation">(</span>flushWork<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>   <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">+</span><span class="token doc-comment comment">/**</span>
<span class="line">+ * 处理超时任务</span>
<span class="line">+ * @param <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">currentTime</span> </span>
<span class="line">+ */</span></span>
<span class="line"><span class="token operator">+</span><span class="token keyword">function</span> <span class="token function">handleTimeout</span><span class="token punctuation">(</span><span class="token parameter">currentTime</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>    <span class="token function">advanceTimers</span><span class="token punctuation">(</span>currentTime<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">peek</span><span class="token punctuation">(</span>taskQueue<span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>        <span class="token function">requestHostCallback</span><span class="token punctuation">(</span>flushWork<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>        <span class="token keyword">const</span> firstTimer <span class="token operator">=</span> <span class="token function">peek</span><span class="token punctuation">(</span>timerQueue<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>        <span class="token keyword">if</span> <span class="token punctuation">(</span>firstTimer <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>            <span class="token function">requestHostTimeout</span><span class="token punctuation">(</span>handleTimeout<span class="token punctuation">,</span> firstTimer<span class="token punctuation">.</span>startTime <span class="token operator">-</span> currentTime<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>        <span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">+</span>    <span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">+</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">+</span><span class="token keyword">function</span> <span class="token function">advanceTimers</span><span class="token punctuation">(</span><span class="token parameter">currentTime</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>    <span class="token keyword">let</span> timer <span class="token operator">=</span> <span class="token function">peek</span><span class="token punctuation">(</span>timerQueue<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>    <span class="token keyword">while</span> <span class="token punctuation">(</span>timer <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>        <span class="token keyword">if</span> <span class="token punctuation">(</span>timer<span class="token punctuation">.</span>callback <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>            <span class="token function">pop</span><span class="token punctuation">(</span>timerQueue<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>timer<span class="token punctuation">.</span>startTime <span class="token operator">&lt;=</span> currentTime<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>            <span class="token function">pop</span><span class="token punctuation">(</span>timerQueue<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>            timer<span class="token punctuation">.</span>sortIndex <span class="token operator">=</span> timer<span class="token punctuation">.</span>expirationTime<span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>            <span class="token function">push</span><span class="token punctuation">(</span>taskQueue<span class="token punctuation">,</span> timer<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>            <span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>        <span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">+</span>        timer <span class="token operator">=</span> <span class="token function">peek</span><span class="token punctuation">(</span>timerQueue<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>    <span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">+</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * 清空任务队列</span>
<span class="line"> * <span class="token keyword">@returns</span> 队列中是否还有任务</span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">flushWork</span><span class="token punctuation">(</span><span class="token parameter">initialTime</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token function">workLoop</span><span class="token punctuation">(</span>initialTime<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * 清空任务队列</span>
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
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>currentTask<span class="token punctuation">.</span>expirationTime <span class="token operator">&gt;</span> currentTime <span class="token operator">&amp;&amp;</span> <span class="token function">shouldYield</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token comment">//执行当前的工作</span></span>
<span class="line">        <span class="token comment">//const continuationCallback = currentTask();</span></span>
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
<span class="line">                <span class="token comment">//taskQueue.shift();</span></span>
<span class="line">                <span class="token function">pop</span><span class="token punctuation">(</span>taskQueue<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token function">pop</span><span class="token punctuation">(</span>taskQueue<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token comment">//还取第一个任务</span></span>
<span class="line">        currentTask <span class="token operator">=</span> <span class="token function">peek</span><span class="token punctuation">(</span>taskQueue<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">+</span>   <span class="token keyword">if</span> <span class="token punctuation">(</span>currentTask <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>       <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>   <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>       <span class="token keyword">const</span> firstTimer <span class="token operator">=</span> <span class="token function">peek</span><span class="token punctuation">(</span>timerQueue<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>       <span class="token keyword">if</span> <span class="token punctuation">(</span>firstTimer <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>           <span class="token function">requestHostTimeout</span><span class="token punctuation">(</span>handleTimeout<span class="token punctuation">,</span> firstTimer<span class="token punctuation">.</span>startTime <span class="token operator">-</span> currentTime<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>       <span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">+</span>       <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>   <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token punctuation">{</span></span>
<span class="line">    scheduleCallback<span class="token punctuation">,</span></span>
<span class="line">    shouldYield<span class="token punctuation">,</span></span>
<span class="line">    ImmediatePriority<span class="token punctuation">,</span></span>
<span class="line">    UserBlockingPriority<span class="token punctuation">,</span></span>
<span class="line">    NormalPriority<span class="token punctuation">,</span></span>
<span class="line">    IdlePriority<span class="token punctuation">,</span></span>
<span class="line">    LowPriority</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-取消任务" tabindex="-1"><a class="header-anchor" href="#_7-取消任务"><span>7.取消任务</span></a></h2><h3 id="_7-1-src-index-js" tabindex="-1"><a class="header-anchor" href="#_7-1-src-index-js"><span>7.1 src\\index.js</span></a></h3><p>src\\index.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span></span>
<span class="line">  scheduleCallback<span class="token punctuation">,</span></span>
<span class="line">  shouldYield<span class="token punctuation">,</span></span>
<span class="line">  ImmediatePriority<span class="token punctuation">,</span><span class="token comment">//-1</span></span>
<span class="line">  UserBlockingPriority<span class="token punctuation">,</span><span class="token comment">//250</span></span>
<span class="line">  NormalPriority<span class="token punctuation">,</span><span class="token comment">//5000</span></span>
<span class="line">  LowPriority<span class="token punctuation">,</span><span class="token comment">//10000</span></span>
<span class="line">  IdlePriority<span class="token punctuation">,</span><span class="token comment">//1073741823</span></span>
<span class="line"><span class="token operator">+</span> cancelCallback</span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./scheduler&quot;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * 总任务</span>
<span class="line"> * <span class="token keyword">@returns</span> </span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">calculate</span><span class="token punctuation">(</span><span class="token parameter">didTimeout</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10000000</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">shouldYield</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">||</span> didTimeout<span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">//7个0</span></span>
<span class="line">    result <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>result <span class="token operator">&lt;</span> <span class="token number">10000000</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> calculate<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;result&#39;</span><span class="token punctuation">,</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> result2 <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> i2 <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">time</span><span class="token punctuation">(</span><span class="token string">&#39;cost&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">calculate2</span><span class="token punctuation">(</span><span class="token parameter">didTimeout</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>i2 <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">timeEnd</span><span class="token punctuation">(</span><span class="token string">&#39;cost&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token punctuation">;</span> i2 <span class="token operator">&lt;</span> <span class="token number">10000000</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">shouldYield</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">||</span> didTimeout<span class="token punctuation">)</span><span class="token punctuation">;</span> i2<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    result2 <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>result2 <span class="token operator">&lt;</span> <span class="token number">10000000</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> calculate2<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;result2&#39;</span><span class="token punctuation">,</span> result2<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token function">scheduleCallback</span><span class="token punctuation">(</span>ImmediatePriority<span class="token punctuation">,</span> calculate<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//-1</span></span>
<span class="line"><span class="token operator">+</span><span class="token keyword">const</span> task <span class="token operator">=</span> <span class="token function">scheduleCallback</span><span class="token punctuation">(</span>LowPriority<span class="token punctuation">,</span> calculate2<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">delay</span><span class="token operator">:</span> <span class="token number">10000</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//10000</span></span>
<span class="line"><span class="token operator">+</span><span class="token function">cancelCallback</span><span class="token punctuation">(</span>task<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-2-scheduler-js" tabindex="-1"><a class="header-anchor" href="#_7-2-scheduler-js"><span>7.2 Scheduler.js</span></a></h3><p>src\\scheduler\\src\\Scheduler.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> requestHostCallback<span class="token punctuation">,</span> shouldYieldToHost <span class="token keyword">as</span> shouldYield<span class="token punctuation">,</span> getCurrentTime<span class="token punctuation">,</span> requestHostTimeout <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./SchedulerHostConfig&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> push<span class="token punctuation">,</span> pop<span class="token punctuation">,</span> peek <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./SchedulerMinHeap&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> ImmediatePriority<span class="token punctuation">,</span> UserBlockingPriority<span class="token punctuation">,</span> NormalPriority<span class="token punctuation">,</span> LowPriority<span class="token punctuation">,</span> IdlePriority <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./SchedulerPriorities&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// 不同优先级对应的不同的任务过期时间间隔</span></span>
<span class="line"><span class="token keyword">let</span> maxSigned31BitInt <span class="token operator">=</span> <span class="token number">1073741823</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> <span class="token constant">IMMEDIATE_PRIORITY_TIMEOUT</span> <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span><span class="token comment">//立即执行的优先级，级别最高</span></span>
<span class="line"><span class="token keyword">let</span> <span class="token constant">USER_BLOCKING_PRIORITY_TIMEOUT</span> <span class="token operator">=</span> <span class="token number">250</span><span class="token punctuation">;</span><span class="token comment">//用户阻塞级别的优先级</span></span>
<span class="line"><span class="token keyword">let</span> <span class="token constant">NORMAL_PRIORITY_TIMEOUT</span> <span class="token operator">=</span> <span class="token number">5000</span><span class="token punctuation">;</span><span class="token comment">//正常的优先级</span></span>
<span class="line"><span class="token keyword">let</span> <span class="token constant">LOW_PRIORITY_TIMEOUT</span> <span class="token operator">=</span> <span class="token number">10000</span><span class="token punctuation">;</span><span class="token comment">//较低的优先级</span></span>
<span class="line"><span class="token keyword">let</span> <span class="token constant">IDLE_PRIORITY_TIMEOUT</span> <span class="token operator">=</span> maxSigned31BitInt<span class="token punctuation">;</span><span class="token comment">//优先级最低，表示任务可以闲置</span></span>
<span class="line"><span class="token comment">//已经可以开始执行队列</span></span>
<span class="line"><span class="token keyword">let</span> taskQueue <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//尚未可以开始执行队列</span></span>
<span class="line"><span class="token keyword">let</span> timerQueue <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> currentTask<span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//下一个任务ID编号</span></span>
<span class="line"><span class="token keyword">let</span> taskIdCounter <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * 调度一个工作</span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">callback</span> 要执行的工作</span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">scheduleCallback</span><span class="token punctuation">(</span><span class="token parameter">priorityLevel<span class="token punctuation">,</span> callback<span class="token punctuation">,</span> options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
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
<span class="line">        <span class="token comment">//开始调度flushWork</span></span>
<span class="line">        <span class="token function">requestHostCallback</span><span class="token punctuation">(</span>flushWork<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">+</span>   <span class="token keyword">return</span> newTask<span class="token punctuation">;</span></span>
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
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>currentTask<span class="token punctuation">.</span>expirationTime <span class="token operator">&gt;</span> currentTime <span class="token operator">&amp;&amp;</span> <span class="token function">shouldYield</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token comment">//执行当前的工作</span></span>
<span class="line">        <span class="token comment">//const continuationCallback = currentTask();</span></span>
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
<span class="line">                <span class="token comment">//taskQueue.shift();</span></span>
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
<span class="line"><span class="token operator">+</span><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">cancelCallback</span><span class="token punctuation">(</span><span class="token parameter">task</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>    <span class="token comment">//清空回调以表示任务已取消</span></span>
<span class="line"><span class="token operator">+</span>    <span class="token comment">//无法从队列中删除，因为无法从基于数组的堆中删除任意节点，只能删除第一个节点</span></span>
<span class="line"><span class="token operator">+</span>    task<span class="token punctuation">.</span>callback <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token punctuation">{</span></span>
<span class="line">    scheduleCallback<span class="token punctuation">,</span></span>
<span class="line">    shouldYield<span class="token punctuation">,</span></span>
<span class="line">    ImmediatePriority<span class="token punctuation">,</span></span>
<span class="line">    UserBlockingPriority<span class="token punctuation">,</span></span>
<span class="line">    NormalPriority<span class="token punctuation">,</span></span>
<span class="line">    IdlePriority<span class="token punctuation">,</span></span>
<span class="line">    LowPriority<span class="token punctuation">,</span></span>
<span class="line"><span class="token operator">+</span>   cancelCallback</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,84)])])}const o=s(l,[["render",i]]),u=JSON.parse('{"path":"/strong/126.12.react-6.html","title":"","lang":"en-US","frontmatter":{},"git":{"updatedTime":1681290319000,"contributors":[{"name":"yutao","username":"yutao","email":"642231346@qq.com","commits":1,"url":"https://github.com/yutao"}],"changelog":[{"hash":"f5ab8c9d34991ec274f7f652439afe5b2afb6147","time":1681290319000,"email":"642231346@qq.com","author":"yutao","message":"modify"}]},"filePathRelative":"strong/126.12.react-6.md"}');export{o as comp,u as data};
