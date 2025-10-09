import{_ as s,c as a,a as e,o as p}from"./app-CD1YpnS1.js";const t={};function l(i,n){return p(),a("div",null,[...n[0]||(n[0]=[e(`<h2 id="防抖和节流" tabindex="-1"><a class="header-anchor" href="#防抖和节流"><span>防抖和节流</span></a></h2><ul><li><a href="https://underscorejs.net/" target="_blank" rel="noopener noreferrer">Underscore</a>一个JavaScript实用库 <ul><li>[debounce](https://underscorejs.net/</li><li><a href="https://github.com/jashkenas/underscore/blob/master/modules/debounce.js" target="_blank" rel="noopener noreferrer">debounce.js</a></li><li>[throttle](https://underscorejs.net/</li><li><a href="https://github.com/jashkenas/underscore/blob/master/modules/throttle.js" target="_blank" rel="noopener noreferrer">throttle.js</a></li></ul></li><li><a href="https://www.lodashjs.com/" target="_blank" rel="noopener noreferrer">Lodash</a>是一个高性能的JavaScript 实用工具库 <ul><li><a href="https://www.lodashjs.com/docs/lodash.debounce" target="_blank" rel="noopener noreferrer">lodash.debounce</a></li><li><a href="https://github.com/lodash/lodash/blob/master/debounce.js" target="_blank" rel="noopener noreferrer">debounce.js</a></li><li><a href="https://www.lodashjs.com/docs/lodash.throttle" target="_blank" rel="noopener noreferrer">lodash.throttle</a></li><li><a href="https://github.com/lodash/lodash/blob/master/throttle.js" target="_blank" rel="noopener noreferrer">throttle.js</a></li></ul></li></ul><h2 id="_1-防抖" tabindex="-1"><a class="header-anchor" href="#_1-防抖"><span>1.防抖</span></a></h2><h3 id="_1-1-直观感知" tabindex="-1"><a class="header-anchor" href="#_1-1-直观感知"><span>1.1 直观感知</span></a></h3><p><a href="https://static.zhufengpeixun.com/tan_huang_dou_dong_qi_lai_1642683011827.mp4" target="_blank" rel="noopener noreferrer">弹簧</a></p><p><a href="https://static.zhufengpeixun.com/fang_zhi_dou_dong_1642678682223.mp4" target="_blank" rel="noopener noreferrer">说话</a></p><h3 id="_1-2-应用场景" tabindex="-1"><a class="header-anchor" href="#_1-2-应用场景"><span>1.2. 应用场景</span></a></h3><ul><li>输入框搜索</li><li>按钮的重复点击</li><li>上拉滚动加载</li><li>用户的缩放事件</li></ul><h3 id="_1-3-工作原理" tabindex="-1"><a class="header-anchor" href="#_1-3-工作原理"><span>1.3. 工作原理</span></a></h3><ul><li>当事件触发时并不会立即执行回调，而是会等待一段时间</li><li>如果在等待期间再次触发事件，会继续等待</li><li>只有等待期间无新的事件触发才会执行回调</li></ul><p><img src="https://static.zhufengpeixun.com/fang_dou_han_shu_5_1642728870433.jpg" alt=""></p><h3 id="_1-4-代码演示" tabindex="-1"><a class="header-anchor" href="#_1-4-代码演示"><span>1.4 代码演示</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span> debounce <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;lodash&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> start <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">logger</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> start<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39;s&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">const</span> debounced <span class="token operator">=</span> <span class="token function">debounce</span><span class="token punctuation">(</span>logger<span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">debounced</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">debounced</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">debounced</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">debounced</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">4000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">debounced</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">5000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-节流" tabindex="-1"><a class="header-anchor" href="#_2-节流"><span>2.节流</span></a></h2><h3 id="_2-1-直观感知" tabindex="-1"><a class="header-anchor" href="#_2-1-直观感知"><span>2.1. 直观感知</span></a></h3><p><a href="https://static.zhufengpeixun.com/jie_liu_fa_men_1642683062075.mp4" target="_blank" rel="noopener noreferrer">节流阀门</a></p><h3 id="_2-2-应用场景" tabindex="-1"><a class="header-anchor" href="#_2-2-应用场景"><span>2.2. 应用场景</span></a></h3><ul><li>下拉刷新</li><li>鼠标移动</li><li>拖拽组件</li></ul><h3 id="_2-3-工作原理" tabindex="-1"><a class="header-anchor" href="#_2-3-工作原理"><span>2.3. 工作原理</span></a></h3><p><img src="https://static.zhufengpeixun.com/jie_liu_han_shu_4_1642728967332.jpg" alt=""></p><h3 id="_2-4-代码演示" tabindex="-1"><a class="header-anchor" href="#_2-4-代码演示"><span>2.4 代码演示</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span> throttle <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;lodash&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> start <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">logger</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> start<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39;s&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">const</span> throttled <span class="token operator">=</span> <span class="token function">throttle</span><span class="token punctuation">(</span>logger<span class="token punctuation">,</span> <span class="token number">2990</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">throttled</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">throttled</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">throttled</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">throttled</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">4000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">throttled</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">5000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">throttled</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">6000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-实现防抖" tabindex="-1"><a class="header-anchor" href="#_3-实现防抖"><span>3.实现防抖</span></a></h2><h3 id="_3-1-基本防抖功能" tabindex="-1"><a class="header-anchor" href="#_3-1-基本防抖功能"><span>3.1 基本防抖功能</span></a></h3><h4 id="_3-1-1-use-js" tabindex="-1"><a class="header-anchor" href="#_3-1-1-use-js"><span>3.1.1 use.js</span></a></h4><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">let</span> debounce <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./debounce&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> start <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">logger</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> start<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39;s&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">let</span> debounced <span class="token operator">=</span> <span class="token function">debounce</span><span class="token punctuation">(</span>logger<span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">debounced</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">debounced</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">debounced</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">debounced</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">4000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">debounced</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">5000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-1-2-debounce-js" tabindex="-1"><a class="header-anchor" href="#_3-1-2-debounce-js"><span>3.1.2 debounce.js</span></a></h4><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">function</span> <span class="token function">debounce</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> wait</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> timer<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">const</span> <span class="token function-variable function">debouncedFn</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>timer<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            timer <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span>fn<span class="token punctuation">,</span> wait<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">return</span> debouncedFn<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> debounce<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-参数传递" tabindex="-1"><a class="header-anchor" href="#_3-2-参数传递"><span>3.2 参数传递</span></a></h3><h4 id="_3-2-1-use-js" tabindex="-1"><a class="header-anchor" href="#_3-2-1-use-js"><span>3.2.1 use.js</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">let debounce = require(&#39;./debounce&#39;);</span>
<span class="line">const start = Date.now();</span>
<span class="line">+function logger(age) {</span>
<span class="line">    console.log((Math.floor((Date.now() - start) / 1000)) + &#39;s&#39;);</span>
<span class="line">+   console.log(this, age);</span>
<span class="line">}</span>
<span class="line">let debounced = debounce(logger, 2000);</span>
<span class="line">+let obj = {</span>
<span class="line">+    name: &#39;张三&#39;,</span>
<span class="line">+    debounced</span>
<span class="line">+}</span>
<span class="line">setTimeout(() =&gt; {</span>
<span class="line">+   obj.debounced(1000);</span>
<span class="line">}, 1000);</span>
<span class="line">setTimeout(() =&gt; {</span>
<span class="line">+   obj.debounced(2000);</span>
<span class="line">}, 2000);</span>
<span class="line">setTimeout(() =&gt; {</span>
<span class="line">+   obj.debounced(3000);</span>
<span class="line">}, 3000);</span>
<span class="line">setTimeout(() =&gt; {</span>
<span class="line">+   obj.debounced(4000);</span>
<span class="line">}, 4000);</span>
<span class="line">setTimeout(() =&gt; {</span>
<span class="line">+   obj.debounced(5000);</span>
<span class="line">}, 5000);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-2-2-debounce-js" tabindex="-1"><a class="header-anchor" href="#_3-2-2-debounce-js"><span>3.2.2 debounce.js</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">function debounce(fn, wait) {</span>
<span class="line">    let timer;</span>
<span class="line">    const debouncedFn = function (...args) {</span>
<span class="line">        if (timer) {</span>
<span class="line">            clearTimeout(timer);</span>
<span class="line">            timer = null;</span>
<span class="line">        }</span>
<span class="line">+       timer = setTimeout(() =&gt; {</span>
<span class="line">+           fn.apply(this, args);</span>
<span class="line">+       }, wait);</span>
<span class="line">    }</span>
<span class="line">    return debouncedFn;</span>
<span class="line">}</span>
<span class="line">module.exports = debounce;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-立即执行" tabindex="-1"><a class="header-anchor" href="#_3-3-立即执行"><span>3.3 立即执行</span></a></h3><h4 id="_3-3-1-debounce-js" tabindex="-1"><a class="header-anchor" href="#_3-3-1-debounce-js"><span>3.3.1 debounce.js</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">+function debounce(fn, wait, immediate = false) {</span>
<span class="line">    let timer;</span>
<span class="line">+   let immediateInvoked = false;</span>
<span class="line">    const debouncedFn = function (...args) {</span>
<span class="line">        if (timer) {</span>
<span class="line">            clearTimeout(timer);</span>
<span class="line">            timer = null;</span>
<span class="line">        }</span>
<span class="line">+       if (immediate &amp;&amp; !immediateInvoked) {</span>
<span class="line">+           fn.apply(this, args);</span>
<span class="line">+           immediateInvoked = true;</span>
<span class="line">+       } else {</span>
<span class="line">            timer = setTimeout(() =&gt; {</span>
<span class="line">                fn.apply(this, args);</span>
<span class="line">+               immediateInvoked = false;</span>
<span class="line">            }, wait);</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">    return debouncedFn;</span>
<span class="line">}</span>
<span class="line">module.exports = debounce;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-4-取消任务" tabindex="-1"><a class="header-anchor" href="#_3-4-取消任务"><span>3.4 取消任务</span></a></h3><h4 id="_3-4-1-use-js" tabindex="-1"><a class="header-anchor" href="#_3-4-1-use-js"><span>3.4.1 use.js</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">let debounce = require(&#39;./debounce&#39;);</span>
<span class="line">const start = Date.now();</span>
<span class="line">function logger(age) {</span>
<span class="line">    console.log((Math.floor((Date.now() - start) / 1000)) + &#39;s&#39;);</span>
<span class="line">    console.log(this, age);</span>
<span class="line">}</span>
<span class="line">let debounced = debounce(logger, 2000, true);</span>
<span class="line">let obj = {</span>
<span class="line">    name: &#39;张三&#39;,</span>
<span class="line">    debounced</span>
<span class="line">}</span>
<span class="line">setTimeout(() =&gt; {</span>
<span class="line">    obj.debounced(1000);</span>
<span class="line">}, 1000);</span>
<span class="line">setTimeout(() =&gt; {</span>
<span class="line">    obj.debounced(2000);</span>
<span class="line">}, 2000);</span>
<span class="line">setTimeout(() =&gt; {</span>
<span class="line">    obj.debounced(3000);</span>
<span class="line">}, 3000);</span>
<span class="line">setTimeout(() =&gt; {</span>
<span class="line">    obj.debounced(4000);</span>
<span class="line">}, 4000);</span>
<span class="line">setTimeout(() =&gt; {</span>
<span class="line">    obj.debounced(5000);</span>
<span class="line">+   obj.debounced.cancel();</span>
<span class="line">}, 5000);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-4-2-debounce-js" tabindex="-1"><a class="header-anchor" href="#_3-4-2-debounce-js"><span>3.4.2 debounce.js</span></a></h4><p>debounce.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">function debounce(fn, wait, immediate = false) {</span>
<span class="line">    let timer;</span>
<span class="line">    let immediateInvoked = false;</span>
<span class="line">    const debouncedFn = function (...args) {</span>
<span class="line">        if (timer) {</span>
<span class="line">            clearTimeout(timer);</span>
<span class="line">            timer = null;</span>
<span class="line">        }</span>
<span class="line">        if (immediate &amp;&amp; !immediateInvoked) {</span>
<span class="line">            fn.apply(this, args);</span>
<span class="line">            immediateInvoked = true;</span>
<span class="line">        } else {</span>
<span class="line">            timer = setTimeout(() =&gt; {</span>
<span class="line">                fn.apply(this, args);</span>
<span class="line">                immediateInvoked = false;</span>
<span class="line">            }, wait);</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">+   debouncedFn.cancel = function () {</span>
<span class="line">+       if (timer) {</span>
<span class="line">+           clearTimeout(timer);</span>
<span class="line">+           timer = null;</span>
<span class="line">+           immediateInvoked = false;</span>
<span class="line">+       }</span>
<span class="line">+   }</span>
<span class="line">    return debouncedFn;</span>
<span class="line">}</span>
<span class="line">module.exports = debounce;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-5-获取返回值" tabindex="-1"><a class="header-anchor" href="#_3-5-获取返回值"><span>3.5 获取返回值</span></a></h3><h4 id="_3-5-1-use-js" tabindex="-1"><a class="header-anchor" href="#_3-5-1-use-js"><span>3.5.1 use.js</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">let debounce = require(&#39;./debounce&#39;);</span>
<span class="line">const start = Date.now();</span>
<span class="line">function logger(age) {</span>
<span class="line">    console.log((Math.floor((Date.now() - start) / 1000)) + &#39;s&#39;);</span>
<span class="line">    console.log(this, age);</span>
<span class="line">+   return Date.now();</span>
<span class="line">}</span>
<span class="line">+let debounced = debounce(logger, 2000, true, (err, data) =&gt; {</span>
<span class="line">+    console.log(&#39;callback&#39;, data);</span>
<span class="line">+});</span>
<span class="line">let obj = {</span>
<span class="line">    name: &#39;张三&#39;,</span>
<span class="line">    debounced</span>
<span class="line">}</span>
<span class="line">setTimeout(() =&gt; {</span>
<span class="line">    obj.debounced(1000);</span>
<span class="line">}, 1000);</span>
<span class="line">setTimeout(() =&gt; {</span>
<span class="line">    obj.debounced(2000);</span>
<span class="line">}, 2000);</span>
<span class="line">setTimeout(() =&gt; {</span>
<span class="line">    obj.debounced(3000);</span>
<span class="line">}, 3000);</span>
<span class="line">setTimeout(() =&gt; {</span>
<span class="line">    obj.debounced(4000);</span>
<span class="line">}, 4000);</span>
<span class="line">+setTimeout(() =&gt; {</span>
<span class="line">+    obj.debounced(5000).then((data) =&gt; {</span>
<span class="line">+        console.log(&#39;then&#39;, data);</span>
<span class="line">+    });</span>
<span class="line">+    //obj.debounced.cancel();</span>
<span class="line">+}, 5000);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-5-2-debounce-js" tabindex="-1"><a class="header-anchor" href="#_3-5-2-debounce-js"><span>3.5.2 debounce.js</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">+function debounce(fn, wait, immediate = false, callback = () =&gt; { }) {</span>
<span class="line">+   if (typeof immediate === &#39;function&#39;) {</span>
<span class="line">+       callback = immediate;</span>
<span class="line">+       immediate = false;</span>
<span class="line">+   }</span>
<span class="line">    let timer;</span>
<span class="line">    let immediateInvoked = false;</span>
<span class="line">    const debouncedFn = function (...args) {</span>
<span class="line">+       return new Promise((resolve, reject) =&gt; {</span>
<span class="line">            if (timer) {</span>
<span class="line">                clearTimeout(timer);</span>
<span class="line">                timer = null;</span>
<span class="line">            }</span>
<span class="line">            if (immediate &amp;&amp; !immediateInvoked) {</span>
<span class="line">                try {</span>
<span class="line">+                   const result = fn.apply(this, args);</span>
<span class="line">+                   callback(null, result);</span>
<span class="line">+                   resolve(result);</span>
<span class="line">+               } catch (error) {</span>
<span class="line">+                   callback(error);</span>
<span class="line">+                   reject(error);</span>
<span class="line">+               } finally {</span>
<span class="line">+                   immediateInvoked = true;</span>
<span class="line">+               }</span>
<span class="line">            } else {</span>
<span class="line">                timer = setTimeout(() =&gt; {</span>
<span class="line">                    try {</span>
<span class="line">+                       const result = fn.apply(this, args);</span>
<span class="line">+                       callback(null, result);</span>
<span class="line">+                       resolve(result);</span>
<span class="line">+                   } catch (error) {</span>
<span class="line">+                       callback(error);</span>
<span class="line">+                       reject(error);</span>
<span class="line">+                   } finally {</span>
<span class="line">+                       immediateInvoked = false;</span>
<span class="line">+                   }</span>
<span class="line">                }, wait);</span>
<span class="line">            }</span>
<span class="line">+       });</span>
<span class="line"></span>
<span class="line">    }</span>
<span class="line">    debouncedFn.cancel = function () {</span>
<span class="line">        if (timer) {</span>
<span class="line">            clearTimeout(timer);</span>
<span class="line">            timer = null;</span>
<span class="line">            immediateInvoked = false;</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">    return debouncedFn;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">module.exports = debounce;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-实现节流" tabindex="-1"><a class="header-anchor" href="#_4-实现节流"><span>4.实现节流</span></a></h2><h3 id="_4-1-基本节流功能" tabindex="-1"><a class="header-anchor" href="#_4-1-基本节流功能"><span>4.1 基本节流功能</span></a></h3><h4 id="_4-1-1-use-js" tabindex="-1"><a class="header-anchor" href="#_4-1-1-use-js"><span>4.1.1 use.js</span></a></h4><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token comment">//let { throttle } = require(&#39;lodash&#39;);</span></span>
<span class="line"><span class="token keyword">const</span> throttle <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./throttle&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> start <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">logger</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> start<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39;s&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">let</span> throttled <span class="token operator">=</span> <span class="token function">throttle</span><span class="token punctuation">(</span>logger<span class="token punctuation">,</span> <span class="token number">2990</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">throttled</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">throttled</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">throttled</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">throttled</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">4000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">throttled</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">5000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">throttled</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">6000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-1-2-throttle-js" tabindex="-1"><a class="header-anchor" href="#_4-1-2-throttle-js"><span>4.1.2 throttle.js</span></a></h4><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">function</span> <span class="token function">throttle</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> wait</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> lastExecTime <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">const</span> <span class="token function-variable function">throttledFn</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">const</span> currentTime <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">const</span> nextExecTime <span class="token operator">=</span> lastExecTime <span class="token operator">+</span> wait<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>currentTime <span class="token operator">&gt;=</span> nextExecTime<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            lastExecTime <span class="token operator">=</span> currentTime<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">return</span> throttledFn<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> throttle<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-leading" tabindex="-1"><a class="header-anchor" href="#_4-2-leading"><span>4.2 leading</span></a></h3><h4 id="_4-2-1-use-js" tabindex="-1"><a class="header-anchor" href="#_4-2-1-use-js"><span>4.2.1 use.js</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">//let { throttle } = require(&#39;lodash&#39;);</span>
<span class="line">const throttle = require(&#39;./throttle&#39;);</span>
<span class="line">const start = Date.now();</span>
<span class="line">function logger() {</span>
<span class="line">    console.log((Math.floor((Date.now() - start) / 1000)) + &#39;s&#39;);</span>
<span class="line">}</span>
<span class="line">+let throttled = throttle(logger, 2990, false);</span>
<span class="line">setTimeout(() =&gt; {</span>
<span class="line">    throttled();</span>
<span class="line">}, 1000);</span>
<span class="line">setTimeout(() =&gt; {</span>
<span class="line">    throttled();</span>
<span class="line">}, 2000);</span>
<span class="line">setTimeout(() =&gt; {</span>
<span class="line">    throttled();</span>
<span class="line">}, 3000);</span>
<span class="line">setTimeout(() =&gt; {</span>
<span class="line">    throttled();</span>
<span class="line">}, 4000);</span>
<span class="line">setTimeout(() =&gt; {</span>
<span class="line">    throttled();</span>
<span class="line">}, 5000);</span>
<span class="line">setTimeout(() =&gt; {</span>
<span class="line">    throttled();</span>
<span class="line">}, 6000);</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-2-2-throttle-js" tabindex="-1"><a class="header-anchor" href="#_4-2-2-throttle-js"><span>4.2.2 throttle.js</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">function throttle(fn, wait, options = { leading: true }) {</span>
<span class="line">+   const { leading } = options;</span>
<span class="line">    let lastExecTime = 0;</span>
<span class="line">    const throttledFn = function (...args) {</span>
<span class="line">        const currentTime = Date.now();</span>
<span class="line">+       if (lastExecTime === 0 &amp;&amp; !leading) {</span>
<span class="line">+           lastExecTime = currentTime;</span>
<span class="line">+       }</span>
<span class="line">        const nextExecTime = lastExecTime + wait;</span>
<span class="line">        if (currentTime &gt;= nextExecTime) {</span>
<span class="line">            fn.apply(this, args);</span>
<span class="line">            lastExecTime = currentTime;</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">    return throttledFn;</span>
<span class="line">}</span>
<span class="line">module.exports = throttle;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-trailing" tabindex="-1"><a class="header-anchor" href="#_4-3-trailing"><span>4.3 trailing</span></a></h3><h4 id="_4-3-1-use-js" tabindex="-1"><a class="header-anchor" href="#_4-3-1-use-js"><span>4.3.1 use.js</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">//let { throttle } = require(&#39;lodash&#39;);</span>
<span class="line">const throttle = require(&#39;./throttle&#39;);</span>
<span class="line">const start = Date.now();</span>
<span class="line">function logger() {</span>
<span class="line">    console.log((Math.floor((Date.now() - start) / 1000)) + &#39;s&#39;);</span>
<span class="line">}</span>
<span class="line">+let throttled = throttle(logger, 2990, { leading: false, trailing: false });</span>
<span class="line">setTimeout(() =&gt; {</span>
<span class="line">    throttled();</span>
<span class="line">}, 1000);</span>
<span class="line">setTimeout(() =&gt; {</span>
<span class="line">    throttled();</span>
<span class="line">}, 2000);</span>
<span class="line">setTimeout(() =&gt; {</span>
<span class="line">    throttled();</span>
<span class="line">}, 3000);</span>
<span class="line">setTimeout(() =&gt; {</span>
<span class="line">    throttled();</span>
<span class="line">}, 4000);</span>
<span class="line">setTimeout(() =&gt; {</span>
<span class="line">    throttled();</span>
<span class="line">}, 5000);</span>
<span class="line">setTimeout(() =&gt; {</span>
<span class="line">    throttled();</span>
<span class="line">}, 6000);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-3-2-throttle-js" tabindex="-1"><a class="header-anchor" href="#_4-3-2-throttle-js"><span>4.3.2 throttle.js</span></a></h4><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token operator">+</span><span class="token keyword">function</span> <span class="token function">throttle</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> wait<span class="token punctuation">,</span> options <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">leading</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">trailing</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>   <span class="token keyword">const</span> <span class="token punctuation">{</span> leading<span class="token punctuation">,</span> trailing <span class="token punctuation">}</span> <span class="token operator">=</span> options<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">let</span> lastExecTime <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>   <span class="token keyword">let</span> timer<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">const</span> <span class="token function-variable function">throttledFn</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">const</span> currentTime <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">       <span class="token keyword">if</span> <span class="token punctuation">(</span>lastExecTime <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>leading<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            lastExecTime <span class="token operator">=</span> currentTime<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token keyword">const</span> nextExecTime <span class="token operator">=</span> lastExecTime <span class="token operator">+</span> wait<span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>       <span class="token keyword">if</span> <span class="token punctuation">(</span>currentTime <span class="token operator">&gt;=</span> nextExecTime<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>           <span class="token keyword">if</span> <span class="token punctuation">(</span>timer<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span><span class="token punctuation">;</span> timer <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token punctuation">}</span></span>
<span class="line">            <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            lastExecTime <span class="token operator">=</span> currentTime<span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>       <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>           <span class="token keyword">if</span> <span class="token punctuation">(</span>trailing<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>               <span class="token keyword">if</span> <span class="token punctuation">(</span>timer<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span><span class="token punctuation">;</span> timer <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">+</span>               timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>                   <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>                   lastExecTime <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>               <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>nextExecTime <span class="token operator">-</span> currentTime<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>           <span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">+</span>       <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">return</span> throttledFn<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> throttle<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-4-取消和返回值" tabindex="-1"><a class="header-anchor" href="#_4-4-取消和返回值"><span>4.4 取消和返回值</span></a></h3><h4 id="_4-4-1-use-js" tabindex="-1"><a class="header-anchor" href="#_4-4-1-use-js"><span>4.4.1 use.js</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">//let { throttle } = require(&#39;lodash&#39;);</span>
<span class="line">const throttle = require(&#39;./throttle&#39;);</span>
<span class="line">const start = Date.now();</span>
<span class="line">function logger() {</span>
<span class="line">    console.log((Math.floor((Date.now() - start) / 1000)) + &#39;s&#39;);</span>
<span class="line">+   return Date.now();</span>
<span class="line">}</span>
<span class="line">let throttled = throttle(logger, 2990, {</span>
<span class="line">    leading: true,</span>
<span class="line">    trailing: true,</span>
<span class="line">+   callback: (err, data) =&gt; {</span>
<span class="line">+       console.log(&#39;callback&#39;, data);</span>
<span class="line">+   }</span>
<span class="line">});</span>
<span class="line">setTimeout(() =&gt; {</span>
<span class="line">    throttled();</span>
<span class="line">}, 1000);</span>
<span class="line">setTimeout(() =&gt; {</span>
<span class="line">    throttled();</span>
<span class="line">}, 2000);</span>
<span class="line">setTimeout(() =&gt; {</span>
<span class="line">    throttled();</span>
<span class="line">}, 3000);</span>
<span class="line">setTimeout(() =&gt; {</span>
<span class="line">    throttled();</span>
<span class="line">}, 4000);</span>
<span class="line">setTimeout(() =&gt; {</span>
<span class="line">    throttled();</span>
<span class="line">}, 5000);</span>
<span class="line">setTimeout(() =&gt; {</span>
<span class="line">+   throttled().then(data =&gt; {</span>
<span class="line">+       console.log(&#39;promise&#39;, data);</span>
<span class="line">+   });</span>
<span class="line">+   //throttled.cancel();</span>
<span class="line">}, 6000);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-4-2-throttle-js" tabindex="-1"><a class="header-anchor" href="#_4-4-2-throttle-js"><span>4.4.2 throttle.js</span></a></h4><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token operator">+</span><span class="token keyword">function</span> <span class="token function">throttle</span><span class="token punctuation">(</span>fn<span class="token punctuation">,</span> wait<span class="token punctuation">,</span> options <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">leading</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">trailing</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token function-variable function">callback</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>    <span class="token keyword">const</span> <span class="token punctuation">{</span> leading<span class="token punctuation">,</span> trailing<span class="token punctuation">,</span> callback <span class="token punctuation">}</span> <span class="token operator">=</span> options<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">let</span> lastExecTime <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">let</span> timer<span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>   <span class="token keyword">const</span> <span class="token function-variable function">throttledFn</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>       <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">const</span> currentTime <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">if</span> <span class="token punctuation">(</span>lastExecTime <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>leading<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                lastExecTime <span class="token operator">=</span> currentTime<span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">            <span class="token keyword">const</span> nextExecTime <span class="token operator">=</span> lastExecTime <span class="token operator">+</span> wait<span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">if</span> <span class="token punctuation">(</span>currentTime <span class="token operator">&gt;=</span> nextExecTime<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token keyword">if</span> <span class="token punctuation">(</span>timer<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span><span class="token punctuation">;</span> timer <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">+</span>                <span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>                    <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>                    <span class="token function">callback</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>                    <span class="token function">resolve</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>                <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>                    <span class="token function">callback</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>                    <span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span></span>
<span class="line"><span class="token operator">+</span>                <span class="token punctuation">}</span></span>
<span class="line">                lastExecTime <span class="token operator">=</span> currentTime<span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token keyword">if</span> <span class="token punctuation">(</span>trailing<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token keyword">if</span> <span class="token punctuation">(</span>timer<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span><span class="token punctuation">;</span> timer <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token punctuation">}</span></span>
<span class="line">                    timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>                       <span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>                           <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>                           <span class="token function">callback</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>                           <span class="token function">resolve</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>                       <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>                           <span class="token function">callback</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>                           <span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span></span>
<span class="line"><span class="token operator">+</span>                       <span class="token punctuation">}</span></span>
<span class="line">                        lastExecTime <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>nextExecTime <span class="token operator">-</span> currentTime<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">+</span>       <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    throttledFn<span class="token punctuation">.</span><span class="token function-variable function">cancel</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>timer<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            timer <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">return</span> throttledFn<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> throttle<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-lodash" tabindex="-1"><a class="header-anchor" href="#_5-lodash"><span>5.lodash</span></a></h2><h3 id="_5-1-isobject-js" tabindex="-1"><a class="header-anchor" href="#_5-1-isobject-js"><span>5.1 isObject.js</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token comment">// Is a given variable an object?</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">isObject</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">var</span> type <span class="token operator">=</span> <span class="token keyword">typeof</span> obj<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> type <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span> <span class="token operator">||</span> type <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token operator">!</span>obj<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-2-debounce-js" tabindex="-1"><a class="header-anchor" href="#_5-2-debounce-js"><span>5.2 debounce.js</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> isObject <span class="token keyword">from</span> <span class="token string">&#39;./isObject.js&#39;</span></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * Creates a debounced function that delays invoking \`func\` until after \`wait\`</span>
<span class="line"> * milliseconds have elapsed since the last time the debounced function was</span>
<span class="line"> * invoked, or until the next browser frame is drawn. The debounced function</span>
<span class="line"> * comes with a \`cancel\` method to cancel delayed \`func\` invocations and a</span>
<span class="line"> * \`flush\` method to immediately invoke them. Provide \`options\` to indicate</span>
<span class="line"> * whether \`func\` should be invoked on the leading and/or trailing edge of the</span>
<span class="line"> * \`wait\` timeout. The \`func\` is invoked with the last arguments provided to the</span>
<span class="line"> * debounced function. Subsequent calls to the debounced function return the</span>
<span class="line"> * result of the last \`func\` invocation.</span>
<span class="line"> *</span>
<span class="line"> * **Note:** If \`leading\` and \`trailing\` options are \`true\`, \`func\` is</span>
<span class="line"> * invoked on the trailing edge of the timeout only if the debounced function</span>
<span class="line"> * is invoked more than once during the \`wait\` timeout.</span>
<span class="line"> *</span>
<span class="line"> * If \`wait\` is \`0\` and \`leading\` is \`false\`, \`func\` invocation is deferred</span>
<span class="line"> * until the next tick, similar to \`setTimeout\` with a timeout of \`0\`.</span>
<span class="line"> *</span>
<span class="line"> * If \`wait\` is omitted in an environment with \`requestAnimationFrame\`, \`func\`</span>
<span class="line"> * invocation will be deferred until the next frame is drawn (typically about</span>
<span class="line"> * 16ms).</span>
<span class="line"> *</span>
<span class="line"> * See [David Corbacho&#39;s article](https://css-tricks.com/debouncing-throttling-explained-examples/)</span>
<span class="line"> * for details over the differences between \`debounce\` and \`throttle\`.</span>
<span class="line"> *</span>
<span class="line"> * <span class="token keyword">@since</span> 0.1.0</span>
<span class="line"> * <span class="token keyword">@category</span> Function</span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Function<span class="token punctuation">}</span></span> <span class="token parameter">func</span> The function to debounce.</span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token optional-parameter"><span class="token punctuation">[</span><span class="token parameter">wait</span><span class="token punctuation">=</span><span class="token code language-javascript"><span class="token number">0</span></span><span class="token punctuation">]</span></span></span>
<span class="line"> *  The number of milliseconds to delay; if omitted, \`requestAnimationFrame\` is</span>
<span class="line"> *  used (if available).</span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Object<span class="token punctuation">}</span></span> <span class="token optional-parameter"><span class="token punctuation">[</span><span class="token parameter">options</span><span class="token punctuation">=</span><span class="token code language-javascript"><span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">]</span></span> The options object.</span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span> <span class="token optional-parameter"><span class="token punctuation">[</span><span class="token parameter">options<span class="token punctuation">.</span>leading</span><span class="token punctuation">=</span><span class="token code language-javascript"><span class="token boolean">false</span></span><span class="token punctuation">]</span></span></span>
<span class="line"> *  Specify invoking on the leading edge of the timeout.</span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token optional-parameter"><span class="token punctuation">[</span><span class="token parameter">options<span class="token punctuation">.</span>maxWait</span><span class="token punctuation">]</span></span></span>
<span class="line"> *  The maximum time \`func\` is allowed to be delayed before it&#39;s invoked.</span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span> <span class="token optional-parameter"><span class="token punctuation">[</span><span class="token parameter">options<span class="token punctuation">.</span>trailing</span><span class="token punctuation">=</span><span class="token code language-javascript"><span class="token boolean">true</span></span><span class="token punctuation">]</span></span></span>
<span class="line"> *  Specify invoking on the trailing edge of the timeout.</span>
<span class="line"> * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span>Function<span class="token punctuation">}</span></span> Returns the new debounced function.</span>
<span class="line"> * <span class="token keyword">@example</span></span>
<span class="line"> <span class="token example">*</span>
<span class="line"> <span class="token code language-javascript"><span class="token operator">*</span> <span class="token comment">// Avoid costly calculations while the window size is in flux.</span></span></span>
<span class="line"> * <span class="token code language-javascript"><span class="token function">jQuery</span><span class="token punctuation">(</span>window<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;resize&#39;</span><span class="token punctuation">,</span> <span class="token function">debounce</span><span class="token punctuation">(</span>calculateLayout<span class="token punctuation">,</span> <span class="token number">150</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span></span>
<span class="line"> *</span>
<span class="line"> <span class="token code language-javascript"><span class="token operator">*</span> <span class="token comment">// Invoke \`sendMail\` when clicked, debouncing subsequent calls.</span></span></span>
<span class="line"> * <span class="token code language-javascript"><span class="token function">jQuery</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token function">debounce</span><span class="token punctuation">(</span>sendMail<span class="token punctuation">,</span> <span class="token number">300</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span></span>
<span class="line"> *   <span class="token code language-javascript"><span class="token string-property property">&#39;leading&#39;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span></span>
<span class="line"> *   <span class="token code language-javascript"><span class="token string-property property">&#39;trailing&#39;</span><span class="token operator">:</span> <span class="token boolean">false</span></span></span>
<span class="line"> * <span class="token code language-javascript"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span></span>
<span class="line"> *</span>
<span class="line"> <span class="token code language-javascript"><span class="token operator">*</span> <span class="token comment">// Ensure \`batchLog\` is invoked once after 1 second of debounced calls.</span></span></span>
<span class="line"> * <span class="token code language-javascript"><span class="token keyword">const</span> debounced <span class="token operator">=</span> <span class="token function">debounce</span><span class="token punctuation">(</span>batchLog<span class="token punctuation">,</span> <span class="token number">250</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token string-property property">&#39;maxWait&#39;</span><span class="token operator">:</span> <span class="token number">1000</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span></span>
<span class="line"> * <span class="token code language-javascript"><span class="token keyword">const</span> source <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">EventSource</span><span class="token punctuation">(</span><span class="token string">&#39;/stream&#39;</span><span class="token punctuation">)</span></span></span>
<span class="line"> * <span class="token code language-javascript"><span class="token function">jQuery</span><span class="token punctuation">(</span>source<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;message&#39;</span><span class="token punctuation">,</span> debounced<span class="token punctuation">)</span></span></span>
<span class="line"> *</span>
<span class="line"> <span class="token code language-javascript"><span class="token operator">*</span> <span class="token comment">// Cancel the trailing debounced invocation.</span></span></span>
<span class="line"> * <span class="token code language-javascript"><span class="token function">jQuery</span><span class="token punctuation">(</span>window<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;popstate&#39;</span><span class="token punctuation">,</span> debounced<span class="token punctuation">.</span>cancel<span class="token punctuation">)</span></span></span>
<span class="line"> *</span>
<span class="line"> <span class="token code language-javascript"><span class="token operator">*</span> <span class="token comment">// Check for pending invocations.</span></span></span>
<span class="line"> * <span class="token code language-javascript"><span class="token keyword">const</span> status <span class="token operator">=</span> debounced<span class="token punctuation">.</span><span class="token function">pending</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token string">&quot;Pending...&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;Ready&quot;</span></span></span></span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">debounce</span><span class="token punctuation">(</span><span class="token parameter">func<span class="token punctuation">,</span> wait<span class="token punctuation">,</span> options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> lastArgs<span class="token punctuation">,</span></span>
<span class="line">        lastThis<span class="token punctuation">,</span></span>
<span class="line">        maxWait<span class="token punctuation">,</span></span>
<span class="line">        result<span class="token punctuation">,</span></span>
<span class="line">        timerId<span class="token punctuation">,</span></span>
<span class="line">        lastCallTime</span>
<span class="line"></span>
<span class="line">    <span class="token keyword">let</span> lastInvokeTime <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line">    <span class="token keyword">let</span> leading <span class="token operator">=</span> <span class="token boolean">false</span></span>
<span class="line">    <span class="token keyword">let</span> maxing <span class="token operator">=</span> <span class="token boolean">false</span></span>
<span class="line">    <span class="token keyword">let</span> trailing <span class="token operator">=</span> <span class="token boolean">true</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// Bypass \`requestAnimationFrame\` by explicitly setting \`wait=0\`.</span></span>
<span class="line">    <span class="token keyword">const</span> useRAF <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token operator">!</span>wait <span class="token operator">&amp;&amp;</span> wait <span class="token operator">!==</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> requestAnimationFrame <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> func <span class="token operator">!==</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">TypeError</span><span class="token punctuation">(</span><span class="token string">&#39;Expected a function&#39;</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    wait <span class="token operator">=</span> <span class="token operator">+</span>wait <span class="token operator">||</span> <span class="token number">0</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isObject</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        leading <span class="token operator">=</span> <span class="token operator">!</span><span class="token operator">!</span>options<span class="token punctuation">.</span>leading</span>
<span class="line">        maxing <span class="token operator">=</span> <span class="token string">&#39;maxWait&#39;</span> <span class="token keyword">in</span> options</span>
<span class="line">        maxWait <span class="token operator">=</span> maxing <span class="token operator">?</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token operator">+</span>options<span class="token punctuation">.</span>maxWait <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">,</span> wait<span class="token punctuation">)</span> <span class="token operator">:</span> maxWait</span>
<span class="line">        trailing <span class="token operator">=</span> <span class="token string">&#39;trailing&#39;</span> <span class="token keyword">in</span> options <span class="token operator">?</span> <span class="token operator">!</span><span class="token operator">!</span>options<span class="token punctuation">.</span>trailing <span class="token operator">:</span> trailing</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">invokeFunc</span><span class="token punctuation">(</span><span class="token parameter">time</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">const</span> args <span class="token operator">=</span> lastArgs</span>
<span class="line">        <span class="token keyword">const</span> thisArg <span class="token operator">=</span> lastThis</span>
<span class="line"></span>
<span class="line">        lastArgs <span class="token operator">=</span> lastThis <span class="token operator">=</span> <span class="token keyword">undefined</span></span>
<span class="line">        lastInvokeTime <span class="token operator">=</span> time</span>
<span class="line">        result <span class="token operator">=</span> <span class="token function">func</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>thisArg<span class="token punctuation">,</span> args<span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">return</span> result</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">startTimer</span><span class="token punctuation">(</span><span class="token parameter">pendingFunc<span class="token punctuation">,</span> wait</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>useRAF<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token function">cancelAnimationFrame</span><span class="token punctuation">(</span>timerId<span class="token punctuation">)</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token function">requestAnimationFrame</span><span class="token punctuation">(</span>pendingFunc<span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span>pendingFunc<span class="token punctuation">,</span> wait<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">cancelTimer</span><span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>useRAF<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token function">cancelAnimationFrame</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token function">clearTimeout</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">leadingEdge</span><span class="token punctuation">(</span><span class="token parameter">time</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// Reset any \`maxWait\` timer.</span></span>
<span class="line">        lastInvokeTime <span class="token operator">=</span> time</span>
<span class="line">        <span class="token comment">// Start the timer for the trailing edge.</span></span>
<span class="line">        timerId <span class="token operator">=</span> <span class="token function">startTimer</span><span class="token punctuation">(</span>timerExpired<span class="token punctuation">,</span> wait<span class="token punctuation">)</span></span>
<span class="line">        <span class="token comment">// Invoke the leading edge.</span></span>
<span class="line">        <span class="token keyword">return</span> leading <span class="token operator">?</span> <span class="token function">invokeFunc</span><span class="token punctuation">(</span>time<span class="token punctuation">)</span> <span class="token operator">:</span> result</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">remainingWait</span><span class="token punctuation">(</span><span class="token parameter">time</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">const</span> timeSinceLastCall <span class="token operator">=</span> time <span class="token operator">-</span> lastCallTime</span>
<span class="line">        <span class="token keyword">const</span> timeSinceLastInvoke <span class="token operator">=</span> time <span class="token operator">-</span> lastInvokeTime</span>
<span class="line">        <span class="token keyword">const</span> timeWaiting <span class="token operator">=</span> wait <span class="token operator">-</span> timeSinceLastCall</span>
<span class="line"></span>
<span class="line">        <span class="token keyword">return</span> maxing</span>
<span class="line">            <span class="token operator">?</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>timeWaiting<span class="token punctuation">,</span> maxWait <span class="token operator">-</span> timeSinceLastInvoke<span class="token punctuation">)</span></span>
<span class="line">            <span class="token operator">:</span> timeWaiting</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">shouldInvoke</span><span class="token punctuation">(</span><span class="token parameter">time</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">const</span> timeSinceLastCall <span class="token operator">=</span> time <span class="token operator">-</span> lastCallTime</span>
<span class="line">        <span class="token keyword">const</span> timeSinceLastInvoke <span class="token operator">=</span> time <span class="token operator">-</span> lastInvokeTime</span>
<span class="line"></span>
<span class="line">        <span class="token comment">// Either this is the first call, activity has stopped and we&#39;re at the</span></span>
<span class="line">        <span class="token comment">// trailing edge, the system time has gone backwards and we&#39;re treating</span></span>
<span class="line">        <span class="token comment">// it as the trailing edge, or we&#39;ve hit the \`maxWait\` limit.</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token punctuation">(</span>lastCallTime <span class="token operator">===</span> <span class="token keyword">undefined</span> <span class="token operator">||</span> <span class="token punctuation">(</span>timeSinceLastCall <span class="token operator">&gt;=</span> wait<span class="token punctuation">)</span> <span class="token operator">||</span></span>
<span class="line">            <span class="token punctuation">(</span>timeSinceLastCall <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token punctuation">(</span>maxing <span class="token operator">&amp;&amp;</span> timeSinceLastInvoke <span class="token operator">&gt;=</span> maxWait<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">timerExpired</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">const</span> time <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">shouldInvoke</span><span class="token punctuation">(</span>time<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token function">trailingEdge</span><span class="token punctuation">(</span>time<span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token comment">// Restart the timer.</span></span>
<span class="line">        timerId <span class="token operator">=</span> <span class="token function">startTimer</span><span class="token punctuation">(</span>timerExpired<span class="token punctuation">,</span> <span class="token function">remainingWait</span><span class="token punctuation">(</span>time<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">trailingEdge</span><span class="token punctuation">(</span><span class="token parameter">time</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        timerId <span class="token operator">=</span> <span class="token keyword">undefined</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// Only invoke if we have \`lastArgs\` which means \`func\` has been</span></span>
<span class="line">        <span class="token comment">// debounced at least once.</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>trailing <span class="token operator">&amp;&amp;</span> lastArgs<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token function">invokeFunc</span><span class="token punctuation">(</span>time<span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        lastArgs <span class="token operator">=</span> lastThis <span class="token operator">=</span> <span class="token keyword">undefined</span></span>
<span class="line">        <span class="token keyword">return</span> result</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">cancel</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>timerId <span class="token operator">!==</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token function">cancelTimer</span><span class="token punctuation">(</span>timerId<span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        lastInvokeTime <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line">        lastArgs <span class="token operator">=</span> lastCallTime <span class="token operator">=</span> lastThis <span class="token operator">=</span> timerId <span class="token operator">=</span> <span class="token keyword">undefined</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">flush</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> timerId <span class="token operator">===</span> <span class="token keyword">undefined</span> <span class="token operator">?</span> result <span class="token operator">:</span> <span class="token function">trailingEdge</span><span class="token punctuation">(</span>Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">pending</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> timerId <span class="token operator">!==</span> <span class="token keyword">undefined</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">debounced</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">const</span> time <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">const</span> isInvoking <span class="token operator">=</span> <span class="token function">shouldInvoke</span><span class="token punctuation">(</span>time<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">        lastArgs <span class="token operator">=</span> args</span>
<span class="line">        lastThis <span class="token operator">=</span> <span class="token keyword">this</span></span>
<span class="line">        lastCallTime <span class="token operator">=</span> time</span>
<span class="line"></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>isInvoking<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">if</span> <span class="token punctuation">(</span>timerId <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token keyword">return</span> <span class="token function">leadingEdge</span><span class="token punctuation">(</span>lastCallTime<span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">            <span class="token keyword">if</span> <span class="token punctuation">(</span>maxing<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token comment">// Handle invocations in a tight loop.</span></span>
<span class="line">                timerId <span class="token operator">=</span> <span class="token function">startTimer</span><span class="token punctuation">(</span>timerExpired<span class="token punctuation">,</span> wait<span class="token punctuation">)</span></span>
<span class="line">                <span class="token keyword">return</span> <span class="token function">invokeFunc</span><span class="token punctuation">(</span>lastCallTime<span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>timerId <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            timerId <span class="token operator">=</span> <span class="token function">startTimer</span><span class="token punctuation">(</span>timerExpired<span class="token punctuation">,</span> wait<span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token keyword">return</span> result</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    debounced<span class="token punctuation">.</span>cancel <span class="token operator">=</span> cancel</span>
<span class="line">    debounced<span class="token punctuation">.</span>flush <span class="token operator">=</span> flush</span>
<span class="line">    debounced<span class="token punctuation">.</span>pending <span class="token operator">=</span> pending</span>
<span class="line">    <span class="token keyword">return</span> debounced</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> debounce</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-3-throttle-js" tabindex="-1"><a class="header-anchor" href="#_5-3-throttle-js"><span>5.3 throttle.js</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> debounce <span class="token keyword">from</span> <span class="token string">&#39;./debounce.js&#39;</span></span>
<span class="line"><span class="token keyword">import</span> isObject <span class="token keyword">from</span> <span class="token string">&#39;./isObject.js&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * Creates a throttled function that only invokes \`func\` at most once per</span>
<span class="line"> * every \`wait\` milliseconds (or once per browser frame). The throttled function</span>
<span class="line"> * comes with a \`cancel\` method to cancel delayed \`func\` invocations and a</span>
<span class="line"> * \`flush\` method to immediately invoke them. Provide \`options\` to indicate</span>
<span class="line"> * whether \`func\` should be invoked on the leading and/or trailing edge of the</span>
<span class="line"> * \`wait\` timeout. The \`func\` is invoked with the last arguments provided to the</span>
<span class="line"> * throttled function. Subsequent calls to the throttled function return the</span>
<span class="line"> * result of the last \`func\` invocation.</span>
<span class="line"> *</span>
<span class="line"> * **Note:** If \`leading\` and \`trailing\` options are \`true\`, \`func\` is</span>
<span class="line"> * invoked on the trailing edge of the timeout only if the throttled function</span>
<span class="line"> * is invoked more than once during the \`wait\` timeout.</span>
<span class="line"> *</span>
<span class="line"> * If \`wait\` is \`0\` and \`leading\` is \`false\`, \`func\` invocation is deferred</span>
<span class="line"> * until the next tick, similar to \`setTimeout\` with a timeout of \`0\`.</span>
<span class="line"> *</span>
<span class="line"> * If \`wait\` is omitted in an environment with \`requestAnimationFrame\`, \`func\`</span>
<span class="line"> * invocation will be deferred until the next frame is drawn (typically about</span>
<span class="line"> * 16ms).</span>
<span class="line"> *</span>
<span class="line"> * See [David Corbacho&#39;s article](https://css-tricks.com/debouncing-throttling-explained-examples/)</span>
<span class="line"> * for details over the differences between \`throttle\` and \`debounce\`.</span>
<span class="line"> *</span>
<span class="line"> * <span class="token keyword">@since</span> 0.1.0</span>
<span class="line"> * <span class="token keyword">@category</span> Function</span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Function<span class="token punctuation">}</span></span> <span class="token parameter">func</span> The function to throttle.</span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token optional-parameter"><span class="token punctuation">[</span><span class="token parameter">wait</span><span class="token punctuation">=</span><span class="token code language-javascript"><span class="token number">0</span></span><span class="token punctuation">]</span></span></span>
<span class="line"> *  The number of milliseconds to throttle invocations to; if omitted,</span>
<span class="line"> *  \`requestAnimationFrame\` is used (if available).</span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Object<span class="token punctuation">}</span></span> <span class="token optional-parameter"><span class="token punctuation">[</span><span class="token parameter">options</span><span class="token punctuation">=</span><span class="token code language-javascript"><span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">]</span></span> The options object.</span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span> <span class="token optional-parameter"><span class="token punctuation">[</span><span class="token parameter">options<span class="token punctuation">.</span>leading</span><span class="token punctuation">=</span><span class="token code language-javascript"><span class="token boolean">true</span></span><span class="token punctuation">]</span></span></span>
<span class="line"> *  Specify invoking on the leading edge of the timeout.</span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span> <span class="token optional-parameter"><span class="token punctuation">[</span><span class="token parameter">options<span class="token punctuation">.</span>trailing</span><span class="token punctuation">=</span><span class="token code language-javascript"><span class="token boolean">true</span></span><span class="token punctuation">]</span></span></span>
<span class="line"> *  Specify invoking on the trailing edge of the timeout.</span>
<span class="line"> * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span>Function<span class="token punctuation">}</span></span> Returns the new throttled function.</span>
<span class="line"> * <span class="token keyword">@example</span></span>
<span class="line"> <span class="token example">*</span>
<span class="line"> <span class="token code language-javascript"><span class="token operator">*</span> <span class="token comment">// Avoid excessively updating the position while scrolling.</span></span></span>
<span class="line"> * <span class="token code language-javascript"><span class="token function">jQuery</span><span class="token punctuation">(</span>window<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;scroll&#39;</span><span class="token punctuation">,</span> <span class="token function">throttle</span><span class="token punctuation">(</span>updatePosition<span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span></span>
<span class="line"> *</span>
<span class="line"> <span class="token code language-javascript"><span class="token operator">*</span> <span class="token comment">// Invoke \`renewToken\` when the click event is fired, but not more than once every 5 minutes.</span></span></span>
<span class="line"> * <span class="token code language-javascript"><span class="token keyword">const</span> throttled <span class="token operator">=</span> <span class="token function">throttle</span><span class="token punctuation">(</span>renewToken<span class="token punctuation">,</span> <span class="token number">300000</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token string-property property">&#39;trailing&#39;</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span></span>
<span class="line"> * <span class="token code language-javascript"><span class="token function">jQuery</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> throttled<span class="token punctuation">)</span></span></span>
<span class="line"> *</span>
<span class="line"> <span class="token code language-javascript"><span class="token operator">*</span> <span class="token comment">// Cancel the trailing throttled invocation.</span></span></span>
<span class="line"> * <span class="token code language-javascript"><span class="token function">jQuery</span><span class="token punctuation">(</span>window<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;popstate&#39;</span><span class="token punctuation">,</span> throttled<span class="token punctuation">.</span>cancel<span class="token punctuation">)</span></span></span></span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">throttle</span><span class="token punctuation">(</span><span class="token parameter">func<span class="token punctuation">,</span> wait<span class="token punctuation">,</span> options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> leading <span class="token operator">=</span> <span class="token boolean">true</span></span>
<span class="line">    <span class="token keyword">let</span> trailing <span class="token operator">=</span> <span class="token boolean">true</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> func <span class="token operator">!==</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">TypeError</span><span class="token punctuation">(</span><span class="token string">&#39;Expected a function&#39;</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isObject</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        leading <span class="token operator">=</span> <span class="token string">&#39;leading&#39;</span> <span class="token keyword">in</span> options <span class="token operator">?</span> <span class="token operator">!</span><span class="token operator">!</span>options<span class="token punctuation">.</span>leading <span class="token operator">:</span> leading</span>
<span class="line">        trailing <span class="token operator">=</span> <span class="token string">&#39;trailing&#39;</span> <span class="token keyword">in</span> options <span class="token operator">?</span> <span class="token operator">!</span><span class="token operator">!</span>options<span class="token punctuation">.</span>trailing <span class="token operator">:</span> trailing</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token function">debounce</span><span class="token punctuation">(</span>func<span class="token punctuation">,</span> wait<span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">        leading<span class="token punctuation">,</span></span>
<span class="line">        trailing<span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">&#39;maxWait&#39;</span><span class="token operator">:</span> wait</span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> throttle</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,75)])])}const o=s(t,[["render",l]]),u=JSON.parse('{"path":"/strong/148.4.basic.html","title":"","lang":"en-US","frontmatter":{},"git":{"updatedTime":1681290319000,"contributors":[{"name":"yutao","username":"yutao","email":"642231346@qq.com","commits":1,"url":"https://github.com/yutao"}],"changelog":[{"hash":"f5ab8c9d34991ec274f7f652439afe5b2afb6147","time":1681290319000,"email":"642231346@qq.com","author":"yutao","message":"modify"}]},"filePathRelative":"strong/148.4.basic.md"}');export{o as comp,u as data};
