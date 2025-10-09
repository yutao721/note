import{_ as n,c as a,a as e,o as i}from"./app-CD1YpnS1.js";const l={};function t(p,s){return i(),a("div",null,[...s[0]||(s[0]=[e(`<h3 id="_1-长列表渲染" tabindex="-1"><a class="header-anchor" href="#_1-长列表渲染"><span>1. 长列表渲染</span></a></h3><ul><li>如果有海量数据在浏览器里一次性渲染会有以下问题 <ul><li>计算时间过长，用户需要长时间等待，体验差</li><li>CPU处理时间过长，滑动过程中可能卡顿</li><li>GPU负载过高，渲染不过来会出现闪动</li><li>内存占用过多，严重会引起浏览器卡死和崩溃</li></ul></li><li>优化方法 <ul><li>下拉底部加载更多实现懒加载，此方法随着内容越来越多，会引起大量的重排和重绘，依赖可能会卡顿</li><li>虚拟列表 其实我们的屏幕可视区域是有限的，能看到的数据也是有限的,所以可以在用户滚动时，只渲染可视区域内的内容即可,不可见区域用空白占位填充, 这样的话页面中的DOM元素少，CPU、GPU和内存负载小</li></ul></li></ul><h3 id="_2-长列表组件" tabindex="-1"><a class="header-anchor" href="#_2-长列表组件"><span>2.长列表组件</span></a></h3><ul><li><a href="https://github.com/bvaughn/react-virtualized" target="_blank" rel="noopener noreferrer">react-virtualized</a></li><li><a href="https://github.com/bvaughn/react-window" target="_blank" rel="noopener noreferrer">react-window</a></li><li>[react-window.vercel.app](https://react-window.vercel.app/</li></ul><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line">npm i react<span class="token operator">-</span>window <span class="token operator">--</span>save</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="_3-固定高度列表实战" tabindex="-1"><a class="header-anchor" href="#_3-固定高度列表实战"><span>3. 固定高度列表实战</span></a></h2><h3 id="_3-1-src-index-js" tabindex="-1"><a class="header-anchor" href="#_3-1-src-index-js"><span>3.1 src\\index.js</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> ReactDOM <span class="token keyword">from</span> <span class="token string">&#39;react-dom/client&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> FixedSizeList <span class="token keyword">from</span> <span class="token string">&#39;./fixed-size-list&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> root <span class="token operator">=</span> ReactDOM<span class="token punctuation">.</span><span class="token function">createRoot</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">root<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>FixedSizeList <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-fixed-size-list-js" tabindex="-1"><a class="header-anchor" href="#_3-2-fixed-size-list-js"><span>3.2 fixed-size-list.js</span></a></h3><p>src\\fixed-size-list.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span>FixedSizeList<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-window&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token string">&#39;./fixed-size-list.css&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">Row</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>index<span class="token punctuation">,</span>style<span class="token punctuation">}</span></span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">(</span></span>
<span class="line">    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token punctuation">{</span>index <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">?</span> <span class="token string">&#39;ListItemOdd&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;ListItemEven&#39;</span><span class="token punctuation">}</span> style<span class="token operator">=</span><span class="token punctuation">{</span>style<span class="token punctuation">}</span><span class="token operator">&gt;</span>Row<span class="token punctuation">{</span>index<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line"><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">        <span class="token operator">&lt;</span>FixedSizeList</span>
<span class="line">          className<span class="token operator">=</span><span class="token string">&#39;List&#39;</span></span>
<span class="line">          height<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">200</span><span class="token punctuation">}</span></span>
<span class="line">          width<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">200</span><span class="token punctuation">}</span></span>
<span class="line">          itemSize<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">50</span><span class="token punctuation">}</span></span>
<span class="line">          itemCount<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">1000</span><span class="token punctuation">}</span></span>
<span class="line">        <span class="token operator">&gt;</span></span>
<span class="line">            <span class="token punctuation">{</span>Row<span class="token punctuation">}</span></span>
<span class="line">        <span class="token operator">&lt;</span><span class="token operator">/</span>FixedSizeList<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-fixed-size-list-css" tabindex="-1"><a class="header-anchor" href="#_3-3-fixed-size-list-css"><span>3.3 fixed-size-list.css</span></a></h3><p>src\\fixed-size-list.css</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token punctuation">.</span>List <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">border</span><span class="token operator">:</span> 1px solid gray<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">.</span>ListItemEven<span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">.</span>ListItemOdd <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span></span>
<span class="line">    align<span class="token operator">-</span>items<span class="token operator">:</span> center<span class="token punctuation">;</span></span>
<span class="line">    justify<span class="token operator">-</span>content<span class="token operator">:</span> center<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">.</span>ListItemOdd <span class="token punctuation">{</span></span>
<span class="line">    background<span class="token operator">-</span>color<span class="token operator">:</span> lightcoral<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">.</span>ListItemEven <span class="token punctuation">{</span></span>
<span class="line">    background<span class="token operator">-</span>color<span class="token operator">:</span> lightblue<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-全部渲染" tabindex="-1"><a class="header-anchor" href="#_4-全部渲染"><span>4. 全部渲染</span></a></h2><p><img src="https://static.zhufengpeixun.com/reactwindowfixed_1651225094542.jpg" alt="原理"></p><h3 id="_4-1-fixed-size-list-js" tabindex="-1"><a class="header-anchor" href="#_4-1-fixed-size-list-js"><span>4.1 fixed-size-list.js</span></a></h3><p>src\\fixed-size-list.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import {FixedSizeList} from &#39;./react-window&#39;;</span>
<span class="line">import &#39;./fixed-size-list.css&#39;;</span>
<span class="line">const Row = ({index,style})=&gt;(</span>
<span class="line">    &lt;div className={index % 2 ? &#39;ListItemOdd&#39; : &#39;ListItemEven&#39;} style={style}&gt;Row{index}&lt;/div&gt;</span>
<span class="line">)</span>
<span class="line">function App(){</span>
<span class="line">    return (</span>
<span class="line">        &lt;FixedSizeList</span>
<span class="line">          className=&#39;List&#39;</span>
<span class="line">          height={200}</span>
<span class="line">          width={200}</span>
<span class="line">          itemSize={50}</span>
<span class="line">          itemCount={1000}</span>
<span class="line">        &gt;</span>
<span class="line">            {Row}</span>
<span class="line">        &lt;/FixedSizeList&gt;</span>
<span class="line">    )</span>
<span class="line">}</span>
<span class="line">export default App;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-react-window-index-js" tabindex="-1"><a class="header-anchor" href="#_4-2-react-window-index-js"><span>4.2 react-window\\index.js</span></a></h3><p>src\\react-window\\index.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">export</span> <span class="token punctuation">{</span> <span class="token keyword">default</span> <span class="token keyword">as</span> FixedSizeList <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./FixedSizeList&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_4-3-fixedsizelist-js" tabindex="-1"><a class="header-anchor" href="#_4-3-fixedsizelist-js"><span>4.3 FixedSizeList.js</span></a></h3><p>src\\react-window\\FixedSizeList.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> createListComponent <span class="token keyword">from</span> <span class="token string">&#39;./createListComponent&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> FixedSizeList <span class="token operator">=</span> <span class="token function">createListComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token function-variable function">getItemSize</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> itemSize <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> itemSize<span class="token punctuation">,</span><span class="token comment">//每个条目的高度</span></span>
<span class="line">    <span class="token function-variable function">getEstimatedTotalSize</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> itemSize<span class="token punctuation">,</span> itemCount <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> itemSize <span class="token operator">*</span> itemCount<span class="token punctuation">,</span> <span class="token comment">//获取预计的总高度</span></span>
<span class="line">    <span class="token function-variable function">getItemOffset</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> itemSize <span class="token punctuation">}</span><span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> itemSize <span class="token operator">*</span> index <span class="token comment">//获取每个条目的偏移量</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> FixedSizeList<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-4-createlistcomponent-js" tabindex="-1"><a class="header-anchor" href="#_4-4-createlistcomponent-js"><span>4.4 createListComponent.js</span></a></h3><p>src\\react-window\\createListComponent.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">createListComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    getEstimatedTotalSize<span class="token punctuation">,</span><span class="token comment">//获取预计的总高度</span></span>
<span class="line">    getItemSize<span class="token punctuation">,</span><span class="token comment">//每个条目的高度</span></span>
<span class="line">    getItemOffset<span class="token comment">//获取每个条目的偏移量</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token keyword">class</span> <span class="token class-name">extends</span> React<span class="token punctuation">.</span>Component <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">const</span> <span class="token punctuation">{</span>width<span class="token punctuation">,</span>height<span class="token punctuation">,</span>itemCount<span class="token punctuation">,</span><span class="token literal-property property">children</span><span class="token operator">:</span>ComponentType<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">const</span> containerStyle <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">position</span><span class="token operator">:</span><span class="token string">&#39;relative&#39;</span><span class="token punctuation">,</span>width<span class="token punctuation">,</span>height<span class="token punctuation">,</span><span class="token literal-property property">overflow</span><span class="token operator">:</span><span class="token string">&#39;auto&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">willChange</span><span class="token operator">:</span> <span class="token string">&#39;transform&#39;</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">const</span> contentStyle <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">height</span><span class="token operator">:</span><span class="token function">getEstimatedTotalSize</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token literal-property property">width</span><span class="token operator">:</span><span class="token string">&#39;100%&#39;</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">const</span> items <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">if</span><span class="token punctuation">(</span>itemCount<span class="token operator">&gt;</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>index<span class="token operator">&lt;</span>itemCount<span class="token punctuation">;</span>index<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                    items<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span></span>
<span class="line">                        <span class="token operator">&lt;</span>ComponentType key<span class="token operator">=</span><span class="token punctuation">{</span>index<span class="token punctuation">}</span> index<span class="token operator">=</span><span class="token punctuation">{</span>index<span class="token punctuation">}</span> style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_getItemStyle</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line">                    <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">                <span class="token operator">&lt;</span>div style<span class="token operator">=</span><span class="token punctuation">{</span>containerStyle<span class="token punctuation">}</span><span class="token operator">&gt;</span></span>
<span class="line">                    <span class="token operator">&lt;</span>div style<span class="token operator">=</span><span class="token punctuation">{</span>contentStyle<span class="token punctuation">}</span><span class="token operator">&gt;</span></span>
<span class="line">                        <span class="token punctuation">{</span>items<span class="token punctuation">}</span></span>
<span class="line">                    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line">                <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line">            <span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token function-variable function">_getItemStyle</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token parameter">index</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">const</span> style <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token literal-property property">position</span><span class="token operator">:</span><span class="token string">&#39;absolute&#39;</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token literal-property property">width</span><span class="token operator">:</span><span class="token string">&#39;100%&#39;</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token literal-property property">height</span><span class="token operator">:</span><span class="token function">getItemSize</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token literal-property property">top</span><span class="token operator">:</span><span class="token function">getItemOffset</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">,</span>index<span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">return</span> style<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-渲染首屏" tabindex="-1"><a class="header-anchor" href="#_5-渲染首屏"><span>5. 渲染首屏</span></a></h2><h3 id="_5-1-fixedsizelist-js" tabindex="-1"><a class="header-anchor" href="#_5-1-fixedsizelist-js"><span>5.1 FixedSizeList.js</span></a></h3><p>src\\react-window\\FixedSizeList.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import createListComponent from &#39;./createListComponent&#39;;</span>
<span class="line">const FixedSizeList = createListComponent({</span>
<span class="line">    getItemSize: ({ itemSize }) =&gt; itemSize,//每个条目的高度</span>
<span class="line">    getEstimatedTotalSize: ({ itemSize, itemCount }) =&gt; itemSize * itemCount, //获取预计的总高度</span>
<span class="line">    getItemOffset: ({ itemSize }, index) =&gt; itemSize * index, //获取每个条目的偏移量</span>
<span class="line">+   getStartIndexForOffset: ({ itemSize }, offset) =&gt; Math.floor(offset / itemSize),//获取起始索引</span>
<span class="line">+   getStopIndexForStartIndex: ({ height, itemSize }, startIndex) =&gt; {//获取结束索引</span>
<span class="line">+       const numVisibleItems = Math.ceil(height / itemSize);</span>
<span class="line">+       return startIndex + numVisibleItems - 1;</span>
<span class="line">    }</span>
<span class="line">});</span>
<span class="line">export default FixedSizeList;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-2-createlistcomponent-js" tabindex="-1"><a class="header-anchor" href="#_5-2-createlistcomponent-js"><span>5.2 createListComponent.js</span></a></h3><p>src\\react-window\\createListComponent.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React from &#39;react&#39;;</span>
<span class="line">export default function createListComponent({</span>
<span class="line">    getEstimatedTotalSize,//获取预计的总高度</span>
<span class="line">    getItemSize,//每个条目的高度</span>
<span class="line">    getItemOffset,//获取每个条目的偏移量</span>
<span class="line">+   getStartIndexForOffset,</span>
<span class="line">+   getStopIndexForStartIndex</span>
<span class="line">}) {</span>
<span class="line">    return class extends React.Component {</span>
<span class="line">+       state = { scrollOffset: 0 }</span>
<span class="line">        render() {</span>
<span class="line">            const { width, height, itemCount, children: ComponentType } = this.props;</span>
<span class="line">            const containerStyle = { position: &#39;relative&#39;, width, height, overflow: &#39;auto&#39;, willChange: &#39;transform&#39; };</span>
<span class="line">            const contentStyle = { height: getEstimatedTotalSize(this.props), width: &#39;100%&#39; };</span>
<span class="line">            const items = [];</span>
<span class="line">            if (itemCount &gt; 0) {</span>
<span class="line">+               const [startIndex, stopIndex] = this._getRangeToRender();</span>
<span class="line">+               for (let index = startIndex; index &lt;= stopIndex; index++) {</span>
<span class="line">                    items.push(</span>
<span class="line">                        &lt;ComponentType key={index} index={index} style={this._getItemStyle(index)} /&gt;</span>
<span class="line">                    );</span>
<span class="line">                }</span>
<span class="line">            }</span>
<span class="line">            return (</span>
<span class="line">                &lt;div style={containerStyle}&gt;</span>
<span class="line">                    &lt;div style={contentStyle}&gt;</span>
<span class="line">                        {items}</span>
<span class="line">                    &lt;/div&gt;</span>
<span class="line">                &lt;/div&gt;</span>
<span class="line">            )</span>
<span class="line">        }</span>
<span class="line">        _getItemStyle = (index) =&gt; {</span>
<span class="line">            const style = {</span>
<span class="line">                position: &#39;absolute&#39;,</span>
<span class="line">                width: &#39;100%&#39;,</span>
<span class="line">                height: getItemSize(this.props),</span>
<span class="line">                top: getItemOffset(this.props, index)</span>
<span class="line">            };</span>
<span class="line">            return style;</span>
<span class="line">        }</span>
<span class="line">+       _getRangeToRender = () =&gt; {</span>
<span class="line">+           const { scrollOffset } = this.state;</span>
<span class="line">+           const startIndex = getStartIndexForOffset(this.props, scrollOffset);</span>
<span class="line">+           const stopIndex = getStopIndexForStartIndex(this.props, startIndex);</span>
<span class="line">+           return [startIndex, stopIndex];</span>
<span class="line">+       }</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-监听滚动" tabindex="-1"><a class="header-anchor" href="#_5-监听滚动"><span>5. 监听滚动</span></a></h2><h3 id="_5-1-createlistcomponent-js" tabindex="-1"><a class="header-anchor" href="#_5-1-createlistcomponent-js"><span>5.1 createListComponent.js</span></a></h3><p>src\\react-window\\createListComponent.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React from &#39;react&#39;;</span>
<span class="line">export default function createListComponent({</span>
<span class="line">    getEstimatedTotalSize,//获取预计的总高度</span>
<span class="line">    getItemSize,//每个条目的高度</span>
<span class="line">    getItemOffset,//获取每个条目的偏移量</span>
<span class="line">    getStartIndexForOffset,</span>
<span class="line">    getStopIndexForStartIndex</span>
<span class="line">}) {</span>
<span class="line">    return class extends React.Component {</span>
<span class="line">        state = { scrollOffset: 0 }</span>
<span class="line">        render() {</span>
<span class="line">            const { width, height, itemCount, children: ComponentType } = this.props;</span>
<span class="line">            const containerStyle = { position: &#39;relative&#39;, width, height, overflow: &#39;auto&#39;, willChange: &#39;transform&#39; };</span>
<span class="line">            const contentStyle = { height: getEstimatedTotalSize(this.props), width: &#39;100%&#39; };</span>
<span class="line">            const items = [];</span>
<span class="line">            if (itemCount &gt; 0) {</span>
<span class="line">                const [startIndex, stopIndex] = this._getRangeToRender();</span>
<span class="line">                for (let index = startIndex; index &lt;= stopIndex; index++) {</span>
<span class="line">                    items.push(</span>
<span class="line">                        &lt;ComponentType key={index} index={index} style={this._getItemStyle(index)} /&gt;</span>
<span class="line">                    );</span>
<span class="line">                }</span>
<span class="line">            }</span>
<span class="line">            return (</span>
<span class="line">+               &lt;div style={containerStyle} onScroll={this.onScroll}&gt;</span>
<span class="line">                    &lt;div style={contentStyle}&gt;</span>
<span class="line">                        {items}</span>
<span class="line">                    &lt;/div&gt;</span>
<span class="line">                &lt;/div&gt;</span>
<span class="line">            )</span>
<span class="line">        }</span>
<span class="line">+       onScroll = event =&gt; {</span>
<span class="line">+           const { scrollTop } = event.currentTarget;</span>
<span class="line">+           this.setState({ scrollOffset: scrollTop });</span>
<span class="line">+       }</span>
<span class="line">        _getItemStyle = (index) =&gt; {</span>
<span class="line">            const style = {</span>
<span class="line">                position: &#39;absolute&#39;,</span>
<span class="line">                width: &#39;100%&#39;,</span>
<span class="line">                height: getItemSize(this.props),</span>
<span class="line">                top: getItemOffset(this.props, index)</span>
<span class="line">            };</span>
<span class="line">            return style;</span>
<span class="line">        }</span>
<span class="line">        _getRangeToRender = () =&gt; {</span>
<span class="line">            const { scrollOffset } = this.state;</span>
<span class="line">            const startIndex = getStartIndexForOffset(this.props, scrollOffset);</span>
<span class="line">            const stopIndex = getStopIndexForStartIndex(this.props, startIndex);</span>
<span class="line">            return [startIndex, stopIndex]</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-overscan" tabindex="-1"><a class="header-anchor" href="#_6-overscan"><span>6. overscan</span></a></h2><ul><li>过扫描实质上是切断图片的边缘，以确保所有重要的东西显示在屏幕上 <img src="https://static.zhufengpeixun.com/Overscan_1651392914894.png" alt=""></li></ul><h3 id="_6-1-createlistcomponent-js" tabindex="-1"><a class="header-anchor" href="#_6-1-createlistcomponent-js"><span>6.1 createListComponent.js</span></a></h3><p>src\\react-window\\createListComponent.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React from &#39;react&#39;;</span>
<span class="line">export default function createListComponent({</span>
<span class="line">    getEstimatedTotalSize,//获取预计的总高度</span>
<span class="line">    getItemSize,//每个条目的高度</span>
<span class="line">    getItemOffset,//获取每个条目的偏移量</span>
<span class="line">    getStartIndexForOffset,</span>
<span class="line">    getStopIndexForStartIndex</span>
<span class="line">}) {</span>
<span class="line">    return class extends React.Component {</span>
<span class="line">+       static defaultProps = {</span>
<span class="line">+           overscanCount: 2</span>
<span class="line">+       }</span>
<span class="line">        state = { scrollOffset: 0 }</span>
<span class="line">        render() {</span>
<span class="line">            const { width, height, itemCount, children: ComponentType } = this.props;</span>
<span class="line">            const containerStyle = { position: &#39;relative&#39;, width, height, overflow: &#39;auto&#39;, willChange: &#39;transform&#39; };</span>
<span class="line">            const contentStyle = { height: getEstimatedTotalSize(this.props), width: &#39;100%&#39; };</span>
<span class="line">            const items = [];</span>
<span class="line">            if (itemCount &gt; 0) {</span>
<span class="line">                const [startIndex, stopIndex] = this._getRangeToRender();</span>
<span class="line">                for (let index = startIndex; index &lt;= stopIndex; index++) {</span>
<span class="line">                    items.push(</span>
<span class="line">                        &lt;ComponentType key={index} index={index} style={this._getItemStyle(index)} /&gt;</span>
<span class="line">                    );</span>
<span class="line">                }</span>
<span class="line">            }</span>
<span class="line">            return (</span>
<span class="line">                &lt;div style={containerStyle} onScroll={this.onScroll}&gt;</span>
<span class="line">                    &lt;div style={contentStyle}&gt;</span>
<span class="line">                        {items}</span>
<span class="line">                    &lt;/div&gt;</span>
<span class="line">                &lt;/div&gt;</span>
<span class="line">            )</span>
<span class="line">        }</span>
<span class="line">        onScroll = event =&gt; {</span>
<span class="line">            const { scrollTop } = event.currentTarget;</span>
<span class="line">            this.setState({ scrollOffset: scrollTop });</span>
<span class="line">        }</span>
<span class="line">        _getItemStyle = (index) =&gt; {</span>
<span class="line">            const style = {</span>
<span class="line">                position: &#39;absolute&#39;,</span>
<span class="line">                width: &#39;100%&#39;,</span>
<span class="line">                height: getItemSize(this.props),</span>
<span class="line">                top: getItemOffset(this.props, index)</span>
<span class="line">            };</span>
<span class="line">            return style;</span>
<span class="line">        }</span>
<span class="line">        _getRangeToRender = () =&gt; {</span>
<span class="line">            const { scrollOffset } = this.state;</span>
<span class="line">+           const { itemCount, overscanCount } = this.props;</span>
<span class="line">            const startIndex = getStartIndexForOffset(this.props, scrollOffset);</span>
<span class="line">            const stopIndex = getStopIndexForStartIndex(this.props, startIndex);</span>
<span class="line">            return [</span>
<span class="line">+               Math.max(0, startIndex - overscanCount),</span>
<span class="line">+               Math.max(0, Math.min(itemCount - 1, stopIndex + overscanCount)),</span>
<span class="line">                startIndex, stopIndex]</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-variablesizelist实战" tabindex="-1"><a class="header-anchor" href="#_7-variablesizelist实战"><span>7. VariableSizeList实战</span></a></h2><h3 id="_7-1-src-index-js" tabindex="-1"><a class="header-anchor" href="#_7-1-src-index-js"><span>7.1 src\\index.js</span></a></h3><p>src\\index.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React from &#39;react&#39;;</span>
<span class="line">import ReactDOM from &#39;react-dom/client&#39;;</span>
<span class="line">import FixedSizeList from &#39;./fixed-size-list&#39;;</span>
<span class="line">+import VariableSizeList from &#39;./variable-size-list&#39;;</span>
<span class="line">const root = ReactDOM.createRoot(document.getElementById(&#39;root&#39;));</span>
<span class="line">+root.render(&lt;VariableSizeList /&gt;);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-2-variable-size-list-js" tabindex="-1"><a class="header-anchor" href="#_7-2-variable-size-list-js"><span>7.2 variable-size-list.js</span></a></h3><p>src\\variable-size-list.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> VariableSizeList <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-window&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token string">&#39;./variable-size-list.css&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> rowSizes <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token number">25</span> <span class="token operator">+</span> Math<span class="token punctuation">.</span><span class="token function">round</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">getItemSize</span> <span class="token operator">=</span> <span class="token parameter">index</span> <span class="token operator">=&gt;</span> rowSizes<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">Row</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> index<span class="token punctuation">,</span> style <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token punctuation">{</span>index <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">?</span> <span class="token string">&#39;ListItemOdd&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;ListItemEven&#39;</span><span class="token punctuation">}</span> style<span class="token operator">=</span><span class="token punctuation">{</span>style<span class="token punctuation">}</span><span class="token operator">&gt;</span></span>
<span class="line">        Row <span class="token punctuation">{</span>index<span class="token punctuation">}</span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line"><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">        <span class="token operator">&lt;</span>VariableSizeList</span>
<span class="line">            className<span class="token operator">=</span><span class="token string">&#39;List&#39;</span></span>
<span class="line">            height<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">200</span><span class="token punctuation">}</span></span>
<span class="line">            width<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">200</span><span class="token punctuation">}</span></span>
<span class="line">            itemSize<span class="token operator">=</span><span class="token punctuation">{</span>getItemSize<span class="token punctuation">}</span></span>
<span class="line">            itemCount<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">1000</span><span class="token punctuation">}</span></span>
<span class="line">        <span class="token operator">&gt;</span></span>
<span class="line">            <span class="token punctuation">{</span>Row<span class="token punctuation">}</span></span>
<span class="line">        <span class="token operator">&lt;</span><span class="token operator">/</span>VariableSizeList<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-3-variable-size-list-css" tabindex="-1"><a class="header-anchor" href="#_7-3-variable-size-list-css"><span>7.3 variable-size-list.css</span></a></h3><p>src\\variable-size-list.css</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token punctuation">.</span>List <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">border</span><span class="token operator">:</span> 1px solid gray<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">.</span>ListItemEven<span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">.</span>ListItemOdd <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span></span>
<span class="line">    align<span class="token operator">-</span>items<span class="token operator">:</span> center<span class="token punctuation">;</span></span>
<span class="line">    justify<span class="token operator">-</span>content<span class="token operator">:</span> center<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">.</span>ListItemOdd <span class="token punctuation">{</span></span>
<span class="line">    background<span class="token operator">-</span>color<span class="token operator">:</span> lightcoral<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">.</span>ListItemEven <span class="token punctuation">{</span></span>
<span class="line">    background<span class="token operator">-</span>color<span class="token operator">:</span> lightblue<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-initinstanceprops" tabindex="-1"><a class="header-anchor" href="#_8-initinstanceprops"><span>8. initInstanceProps</span></a></h2><h3 id="_8-1-variable-size-list-js" tabindex="-1"><a class="header-anchor" href="#_8-1-variable-size-list-js"><span>8.1 variable-size-list.js</span></a></h3><p>src\\variable-size-list.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React from &#39;react&#39;;</span>
<span class="line">+import { VariableSizeList } from &#39;./react-window&#39;;</span>
<span class="line">import &#39;./variable-size-list.css&#39;;</span>
<span class="line"></span>
<span class="line">const rowSizes = new Array(1000)</span>
<span class="line">    .fill(true)</span>
<span class="line">    .map(() =&gt; 25 + Math.round(Math.random() * 50));</span>
<span class="line"></span>
<span class="line">const getItemSize = index =&gt; rowSizes[index];</span>
<span class="line"></span>
<span class="line">const Row = ({ index, style }) =&gt; (</span>
<span class="line">    &lt;div className={index % 2 ? &#39;ListItemOdd&#39; : &#39;ListItemEven&#39;} style={style}&gt;</span>
<span class="line">        Row {index}</span>
<span class="line">    &lt;/div&gt;</span>
<span class="line">)</span>
<span class="line">const App = () =&gt; {</span>
<span class="line">    return (</span>
<span class="line">        &lt;VariableSizeList</span>
<span class="line">            className=&#39;List&#39;</span>
<span class="line">            height={200}</span>
<span class="line">            width={200}</span>
<span class="line">            itemSize={getItemSize}</span>
<span class="line">            itemCount={1000}</span>
<span class="line">        &gt;</span>
<span class="line">            {Row}</span>
<span class="line">        &lt;/VariableSizeList&gt;</span>
<span class="line">    )</span>
<span class="line">}</span>
<span class="line">export default App;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-2-src-react-window-index-js" tabindex="-1"><a class="header-anchor" href="#_8-2-src-react-window-index-js"><span>8.2 src\\react-window\\index.js</span></a></h3><p>src\\react-window\\index.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">export { default as FixedSizeList } from &#39;./FixedSizeList&#39;;</span>
<span class="line">+export { default as VariableSizeList } from &#39;./VariableSizeList&#39;;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-3-variablesizelist-js" tabindex="-1"><a class="header-anchor" href="#_8-3-variablesizelist-js"><span>8.3 VariableSizeList.js</span></a></h3><p>src\\react-window\\VariableSizeList.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> createListComponent <span class="token keyword">from</span> <span class="token string">&#39;./createListComponent&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span><span class="token keyword">const</span> <span class="token constant">DEFAULT_ESTIMATED_SIZE</span> <span class="token operator">=</span> <span class="token number">50</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span><span class="token keyword">const</span> <span class="token function-variable function">getEstimatedTotalSize</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">+</span><span class="token keyword">const</span> VariableSizeList <span class="token operator">=</span> <span class="token function">createListComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    getEstimatedTotalSize<span class="token punctuation">,</span></span>
<span class="line">    <span class="token function-variable function">getStartIndexForOffset</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function-variable function">getStopIndexForStartIndex</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function-variable function">getItemSize</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function-variable function">getItemOffset</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token operator">+</span>   <span class="token function">initInstanceProps</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>       <span class="token keyword">const</span> <span class="token punctuation">{</span> estimatedItemSize <span class="token punctuation">}</span> <span class="token operator">=</span> props<span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>       <span class="token keyword">const</span> instanceProps <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>           estimatedItemSize<span class="token operator">:</span> estimatedItemSize <span class="token operator">||</span> <span class="token constant">DEFAULT_ESTIMATED_SIZE</span></span>
<span class="line"><span class="token operator">+</span>       <span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">+</span>       <span class="token keyword">return</span> instanceProps<span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>   <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span><span class="token keyword">export</span> <span class="token keyword">default</span> VariableSizeList<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-4-createlistcomponent-js" tabindex="-1"><a class="header-anchor" href="#_8-4-createlistcomponent-js"><span>8.4 createListComponent.js</span></a></h3><p>src\\react-window\\createListComponent.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React from &#39;react&#39;;</span>
<span class="line">export default function createListComponent({</span>
<span class="line">    getEstimatedTotalSize,//获取预计的总高度</span>
<span class="line">    getItemSize,//每个条目的高度</span>
<span class="line">    getItemOffset,//获取每个条目的偏移量</span>
<span class="line">    getStartIndexForOffset,</span>
<span class="line">    getStopIndexForStartIndex,</span>
<span class="line">+   initInstanceProps</span>
<span class="line">}) {</span>
<span class="line">    return class extends React.Component {</span>
<span class="line">+       instanceProps = initInstanceProps&amp;&amp;initInstanceProps(this.props)</span>
<span class="line">        static defaultProps = {</span>
<span class="line">            overscanCount: 2</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-预估总高度" tabindex="-1"><a class="header-anchor" href="#_9-预估总高度"><span>9. 预估总高度</span></a></h2><h3 id="_9-1-src-react-window-variablesizelist-js" tabindex="-1"><a class="header-anchor" href="#_9-1-src-react-window-variablesizelist-js"><span>9.1 src\\react-window\\VariableSizeList.js</span></a></h3><p>src\\react-window\\VariableSizeList.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> createListComponent <span class="token keyword">from</span> <span class="token string">&#39;./createListComponent&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token constant">DEFAULT_ESTIMATED_SIZE</span> <span class="token operator">=</span> <span class="token number">50</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span><span class="token keyword">const</span> <span class="token function-variable function">getEstimatedTotalSize</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> itemCount <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> estimatedItemSize <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>    <span class="token keyword">const</span> numUnmeasuredItems <span class="token operator">=</span> itemCount<span class="token punctuation">;</span><span class="token comment">//未测量的条目</span></span>
<span class="line"><span class="token operator">+</span>    <span class="token keyword">const</span> totalSizeOfUnmeasuredItems <span class="token operator">=</span> numUnmeasuredItems <span class="token operator">*</span> estimatedItemSize<span class="token punctuation">;</span><span class="token comment">//未测量条目的总高度</span></span>
<span class="line"><span class="token operator">+</span>    <span class="token keyword">return</span> totalSizeOfUnmeasuredItems<span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">const</span> VariableSizeList <span class="token operator">=</span> <span class="token function">createListComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    getEstimatedTotalSize<span class="token punctuation">,</span></span>
<span class="line">    <span class="token function-variable function">getStartIndexForOffset</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function-variable function">getStopIndexForStartIndex</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function-variable function">getItemSize</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function-variable function">getItemOffset</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function">initInstanceProps</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">const</span> <span class="token punctuation">{</span> estimatedItemSize <span class="token punctuation">}</span> <span class="token operator">=</span> props<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">const</span> instanceProps <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token literal-property property">estimatedItemSize</span><span class="token operator">:</span> estimatedItemSize <span class="token operator">||</span> <span class="token constant">DEFAULT_ESTIMATED_SIZE</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token keyword">return</span> instanceProps<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> VariableSizeList<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-2-src-react-window-createlistcomponent-js" tabindex="-1"><a class="header-anchor" href="#_9-2-src-react-window-createlistcomponent-js"><span>9.2 src\\react-window\\createListComponent.js</span></a></h3><p>src\\react-window\\createListComponent.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React from &#39;react&#39;;</span>
<span class="line">export default function createListComponent({</span>
<span class="line">    getEstimatedTotalSize,//获取预计的总高度</span>
<span class="line">    //......</span>
<span class="line">}) {</span>
<span class="line">    return class extends React.Component {</span>
<span class="line">        render() {</span>
<span class="line">            const { width, height, itemCount, children: ComponentType } = this.props;</span>
<span class="line">            const containerStyle = { position: &#39;relative&#39;, width, height, overflow: &#39;auto&#39;, willChange: &#39;transform&#39; };</span>
<span class="line">+           const contentStyle = { height: getEstimatedTotalSize(this.props, this.instanceProps), width: &#39;100%&#39; };</span>
<span class="line">            const items = [];</span>
<span class="line">            if (itemCount &gt; 0) {</span>
<span class="line">                const [startIndex, stopIndex] = this._getRangeToRender();</span>
<span class="line">                for (let index = startIndex; index &lt;= stopIndex; index++) {</span>
<span class="line">                    items.push(</span>
<span class="line">                        &lt;ComponentType key={index} index={index} style={this._getItemStyle(index)} /&gt;</span>
<span class="line">                    );</span>
<span class="line">                }</span>
<span class="line">            }</span>
<span class="line">            return (</span>
<span class="line">                &lt;div style={containerStyle} onScroll={this.onScroll}&gt;</span>
<span class="line">                    &lt;div style={contentStyle}&gt;</span>
<span class="line">                        {items}</span>
<span class="line">                    &lt;/div&gt;</span>
<span class="line">                &lt;/div&gt;</span>
<span class="line">            )</span>
<span class="line">        }</span>
<span class="line">        //......</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_10-动态计算高度" tabindex="-1"><a class="header-anchor" href="#_10-动态计算高度"><span>10. 动态计算高度</span></a></h2><ul><li>lastMeasuredIndex 上次测试过高度的最大索引</li></ul><h3 id="_10-1-variablesizelist-js" tabindex="-1"><a class="header-anchor" href="#_10-1-variablesizelist-js"><span>10.1 VariableSizeList.js</span></a></h3><p>src\\react-window\\VariableSizeList.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import createListComponent from &#39;./createListComponent&#39;;</span>
<span class="line">const DEFAULT_ESTIMATED_SIZE = 50;</span>
<span class="line">+const getEstimatedTotalSize = ({ itemCount }, { estimatedItemSize, lastMeasuredIndex, itemMetadataMap }) =&gt; {</span>
<span class="line">+   let totalSizeOfMeasuredItems = 0;//计算过的条目总大小</span>
<span class="line">+   if (lastMeasuredIndex &gt;= 0) {</span>
<span class="line">+       const itemMetadata = itemMetadataMap[lastMeasuredIndex];</span>
<span class="line">+       totalSizeOfMeasuredItems = itemMetadata.offset + itemMetadata.size;//测试过的总大小</span>
<span class="line">+   }</span>
<span class="line">+   const numUnmeasuredItems = itemCount - lastMeasuredIndex - 1;//未测量的条目</span>
<span class="line">    const totalSizeOfUnmeasuredItems = numUnmeasuredItems * estimatedItemSize;//未测量条目的总高度</span>
<span class="line">    return totalSizeOfMeasuredItems + totalSizeOfUnmeasuredItems;</span>
<span class="line">}</span>
<span class="line">+function findNearestItem(props, instanceProps, offset) {</span>
<span class="line">+    const { lastMeasuredIndex } = instanceProps;</span>
<span class="line">+    for (let index = 0; index &lt;= lastMeasuredIndex; index++) {</span>
<span class="line">+        const currentOffset = getItemMetadata(props, index, instanceProps).offset;</span>
<span class="line">+        if (currentOffset &gt;= offset) {</span>
<span class="line">+            return index;</span>
<span class="line">+        }</span>
<span class="line">+    }</span>
<span class="line">+    return 0;</span>
<span class="line">+}</span>
<span class="line">+function getItemMetadata(props, index, instanceProps) {</span>
<span class="line">+    const { itemSize } = props;</span>
<span class="line">+    const { itemMetadataMap, lastMeasuredIndex } = instanceProps;</span>
<span class="line">+    if (index &gt; lastMeasuredIndex) {</span>
<span class="line">+        let offset = 0;//先计算上一个测试过的条目的下一个offset</span>
<span class="line">+        if (lastMeasuredIndex &gt;= 0) {</span>
<span class="line">+            const itemMetadata = itemMetadataMap[lastMeasuredIndex];</span>
<span class="line">+            offset = itemMetadata.offset + itemMetadata.size;</span>
<span class="line">+        }</span>
<span class="line">+        //计算从上一个条目到本次索引的offset和size</span>
<span class="line">+        for (let i = lastMeasuredIndex + 1; i &lt;= index; i++) {</span>
<span class="line">+            let size = itemSize(i);</span>
<span class="line">+            itemMetadataMap[i] = { offset, size };</span>
<span class="line">+            offset += size;</span>
<span class="line">+        }</span>
<span class="line">+        instanceProps.lastMeasuredIndex = index;</span>
<span class="line">+    }</span>
<span class="line">+    return itemMetadataMap[index];</span>
<span class="line">+}</span>
<span class="line">const VariableSizeList = createListComponent({</span>
<span class="line">    getEstimatedTotalSize,</span>
<span class="line">+   getStartIndexForOffset: (props, offset, instanceProps) =&gt; findNearestItem(props, instanceProps, offset),</span>
<span class="line">+   getStopIndexForStartIndex: (props, startIndex, scrollOffset, instanceProps) =&gt; {</span>
<span class="line">+       const { itemCount, height } = props;</span>
<span class="line">+       const itemMetadata = getItemMetadata(props, startIndex, instanceProps);</span>
<span class="line">+       const maxOffset = scrollOffset + height;</span>
<span class="line">+       let offset = itemMetadata.offset + itemMetadata.size;</span>
<span class="line">+       let stopIndex = startIndex;</span>
<span class="line">+       while (stopIndex &lt; itemCount - 1 &amp;&amp; offset &lt; maxOffset) {</span>
<span class="line">+           stopIndex++;</span>
<span class="line">+           offset += getItemMetadata(props, stopIndex, instanceProps).size;</span>
<span class="line">+       }</span>
<span class="line">+       return stopIndex;</span>
<span class="line">+   },</span>
<span class="line">+   getItemSize: (props, index, instanceProps) =&gt; getItemMetadata(props, index, instanceProps).size,</span>
<span class="line">+   getItemOffset: (props, index, instanceProps) =&gt; getItemMetadata(props, index, instanceProps).offset,</span>
<span class="line">    initInstanceProps(props) {</span>
<span class="line">        const { estimatedItemSize } = props;</span>
<span class="line">        const instanceProps = {</span>
<span class="line">            estimatedItemSize: estimatedItemSize || DEFAULT_ESTIMATED_SIZE,</span>
<span class="line">+           itemMetadataMap: {},//存放每个条目的高度和偏移量</span>
<span class="line">+           lastMeasuredIndex: -1//最后一个测量高度的索引</span>
<span class="line">        }</span>
<span class="line">        return instanceProps;</span>
<span class="line">    }</span>
<span class="line">});</span>
<span class="line">export default VariableSizeList;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10-2-createlistcomponent-js" tabindex="-1"><a class="header-anchor" href="#_10-2-createlistcomponent-js"><span>10.2 createListComponent.js</span></a></h3><p>src\\react-window\\createListComponent.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React from &#39;react&#39;;</span>
<span class="line">export default function createListComponent({}) {</span>
<span class="line">    return class extends React.Component {</span>
<span class="line">        _getItemStyle = (index) =&gt; {</span>
<span class="line">            const style = {</span>
<span class="line">                position: &#39;absolute&#39;,</span>
<span class="line">                width: &#39;100%&#39;,</span>
<span class="line">+               height: getItemSize(this.props, index, this.instanceProps),</span>
<span class="line">+               top: getItemOffset(this.props, index, this.instanceProps)</span>
<span class="line">            };</span>
<span class="line">            return style;</span>
<span class="line">        }</span>
<span class="line">        _getRangeToRender = () =&gt; {</span>
<span class="line">            const { scrollOffset } = this.state;</span>
<span class="line">            const { itemCount, overscanCount } = this.props;</span>
<span class="line">+           const startIndex = getStartIndexForOffset(this.props, scrollOffset, this.instanceProps);</span>
<span class="line">+           const stopIndex = getStopIndexForStartIndex(this.props, startIndex, scrollOffset, this.instanceProps);</span>
<span class="line">            return [</span>
<span class="line">                Math.max(0, startIndex - overscanCount),</span>
<span class="line">                Math.max(0, Math.min(itemCount - 1, stopIndex + overscanCount)),</span>
<span class="line">                startIndex, stopIndex]</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_11-优化方案" tabindex="-1"><a class="header-anchor" href="#_11-优化方案"><span>11. 优化方案</span></a></h2><h3 id="_11-1-缓存样式" tabindex="-1"><a class="header-anchor" href="#_11-1-缓存样式"><span>11.1 缓存样式</span></a></h3><h4 id="_11-1-1-createlistcomponent-js" tabindex="-1"><a class="header-anchor" href="#_11-1-1-createlistcomponent-js"><span>11.1.1 createListComponent.js</span></a></h4><p>src\\react-window\\createListComponent.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">    return class extends React.Component {</span>
<span class="line">+       itemStyleCache = new Map()</span>
<span class="line">        instanceProps = initInstanceProps&amp;&amp;initInstanceProps(this.props)</span>
<span class="line">        _getItemStyle = (index) =&gt; {</span>
<span class="line">+           let style;</span>
<span class="line">+           if (this.itemStyleCache.has(index)) {</span>
<span class="line">+               style = this.itemStyleCache.get(index);</span>
<span class="line">+           } else {</span>
<span class="line">                style = {</span>
<span class="line">                    position: &#39;absolute&#39;,</span>
<span class="line">                    width: &#39;100%&#39;,</span>
<span class="line">                    height: getItemSize(this.props, index, this.instanceProps),</span>
<span class="line">                    top: getItemOffset(this.props, index, this.instanceProps)</span>
<span class="line">                };</span>
<span class="line">+               this.itemStyleCache.set(index, style);</span>
<span class="line">+           }</span>
<span class="line">            return style;</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_11-2-二分查找和指数扩充" tabindex="-1"><a class="header-anchor" href="#_11-2-二分查找和指数扩充"><span>11.2 二分查找和指数扩充</span></a></h3><h4 id="_11-2-1-variablesizelist-js" tabindex="-1"><a class="header-anchor" href="#_11-2-1-variablesizelist-js"><span>11.2.1 VariableSizeList.js</span></a></h4><p>src\\react-window\\VariableSizeList.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">+function findNearestItem(props, instanceProps, offset) {</span>
<span class="line">+  const { itemMetadataMap, lastMeasuredIndex } = instanceProps;</span>
<span class="line">+  const lastMeasuredItemOffset =</span>
<span class="line">+    lastMeasuredIndex &gt; 0 ? itemMetadataMap[lastMeasuredIndex].offset : 0;</span>
<span class="line">+  if (lastMeasuredItemOffset &gt;= offset) {</span>
<span class="line">+    return findNearestItemBinarySearch(props, instanceProps, lastMeasuredIndex, 0, offset);</span>
<span class="line">+  } else {</span>
<span class="line">+    return findNearestItemExponentialSearch(</span>
<span class="line">+      props,</span>
<span class="line">+      instanceProps,</span>
<span class="line">+      Math.max(0, lastMeasuredIndex),</span>
<span class="line">+      offset</span>
<span class="line">+    );</span>
<span class="line">+  }</span>
<span class="line">+  //return findNearestItemBinarySearch(props, instanceProps, lastMeasuredIndex, 0, offset);</span>
<span class="line">+  //在源码里此处用的是二分查找，把时间复杂度从N=&gt;logN</span>
<span class="line">+  /* for (let index = 0; index &lt;= lastMeasuredIndex; index++) {</span>
<span class="line">+    const currentOffset = getItemMetadata(props, index, instanceProps).offset;</span>
<span class="line">+    //currentOffset=当前条目的offset offset=当前容器向上卷去的高度</span>
<span class="line">+    if (currentOffset &gt;= offset) {</span>
<span class="line">+      return index;</span>
<span class="line">+    }</span>
<span class="line">+  }</span>
<span class="line">+  return 0; */</span>
<span class="line">+}</span>
<span class="line">+function findNearestItemExponentialSearch(props, instanceProps, index, offset) {</span>
<span class="line">+  const { itemCount } = props;</span>
<span class="line">+  let interval = 1;</span>
<span class="line">+  while (</span>
<span class="line">+    index &lt; itemCount &amp;&amp;</span>
<span class="line">+    getItemMetadata(props, index, instanceProps).offset &lt; offset</span>
<span class="line">+  ) {</span>
<span class="line">+    index += interval;</span>
<span class="line">+    interval *= 2;</span>
<span class="line">+  }</span>
<span class="line">+  return findNearestItemBinarySearch(props, instanceProps, Math.min(index, itemCount - 1), Math.floor(index / 2), offset);</span>
<span class="line">+}</span>
<span class="line">+const findNearestItemBinarySearch = (</span>
<span class="line">+  props,</span>
<span class="line">+  instanceProps,</span>
<span class="line">+  high,</span>
<span class="line">+  low,</span>
<span class="line">+  offset</span>
<span class="line">+) =&gt; {</span>
<span class="line">+  while (low &lt;= high) {</span>
<span class="line">+    const middle = low + Math.floor((high - low) / 2);</span>
<span class="line">+    const currentOffset = getItemMetadata(props, middle, instanceProps).offset;</span>
<span class="line">+    if (currentOffset === offset) {</span>
<span class="line">+      return middle;</span>
<span class="line">+    } else if (currentOffset &lt; offset) {</span>
<span class="line">+      low = middle + 1;</span>
<span class="line">+    } else if (currentOffset &gt; offset) {</span>
<span class="line">+      high = middle - 1;</span>
<span class="line">+    }</span>
<span class="line">+  }</span>
<span class="line">+  if (low &gt; 0) {</span>
<span class="line">+    return low - 1;</span>
<span class="line">+  } else {</span>
<span class="line">+    return 0;</span>
<span class="line">+  }</span>
<span class="line">+};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_11-3-intersectionobserver" tabindex="-1"><a class="header-anchor" href="#_11-3-intersectionobserver"><span>11.3 IntersectionObserver</span></a></h3><ul><li><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/IntersectionObserver" target="_blank" rel="noopener noreferrer">IntersectionObserver</a>接口(从属于Intersection Observer API)为开发者提供了一种可以异步监听目标元素与其祖先或视窗(viewport)交叉状态的手段。祖先元素与视窗(viewport)被称为根(root)</li><li>网页开发时，常常需要判断某个元素是否进入了视口(viewport,即用户能不能看到它，然后执行相应的逻辑</li><li>常见的方法是监听<code>scroll</code>事件，调用元素的<code>getBoundingClientRect</code>方法，得到它对应于视口左上角的坐标，再判断是否在视口之内。这种方法的缺点是，由于scroll事件密集发生，计算量很大，容易造成性能问题</li></ul><h4 id="_11-3-1-createlistcomponent-js" tabindex="-1"><a class="header-anchor" href="#_11-3-1-createlistcomponent-js"><span>11.3.1 createListComponent.js</span></a></h4><p>src\\react-window\\createListComponent.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line"></span>
<span class="line">function createListComponent({</span>
<span class="line">  getEstimatedTotalSize,</span>
<span class="line">  getItemSize,</span>
<span class="line">  getItemOffset,</span>
<span class="line">  getStartIndexForOffset,//根据向上卷去的高度计算开始索引</span>
<span class="line">  getStopIndexForStartIndex,//根据开始索引和容器的高度计算结束索引</span>
<span class="line">  initInstanceProps</span>
<span class="line">}) {</span>
<span class="line">  return class extends React.Component {</span>
<span class="line">    constructor(props) {</span>
<span class="line">      super(props);</span>
<span class="line">      this.instanceProps = initInstanceProps &amp;&amp; initInstanceProps(this.props)</span>
<span class="line">      this.state = { scrollOffset: 0 }</span>
<span class="line">+     this.outerRef = React.createRef();</span>
<span class="line">+     this.oldFirstRef = React.createRef();</span>
<span class="line">+     this.oldLastRef = React.createRef();</span>
<span class="line">+     this.firstRef = React.createRef();</span>
<span class="line">+     this.lastRef = React.createRef();</span>
<span class="line">    }</span>
<span class="line">    static defaultProps = {</span>
<span class="line">      overscanCount: 2</span>
<span class="line">    }</span>
<span class="line">+   componentDidMount() {</span>
<span class="line">+     this.observe(this.oldFirstRef.current = this.firstRef.current);</span>
<span class="line">+     this.observe(this.oldLastRef.current = this.lastRef.current);</span>
<span class="line">+   }</span>
<span class="line">+   componentDidUpdate() {</span>
<span class="line">+     if (this.oldFirstRef.current !== this.firstRef.current) {</span>
<span class="line">+       this.oldFirstRef.current = this.firstRef.current;</span>
<span class="line">+       this.observe(this.firstRef.current);</span>
<span class="line">+     }</span>
<span class="line">+     if (this.oldLastRef.current !== this.lastRef.current) {</span>
<span class="line">+       this.oldLastRef.current = this.lastRef.current;</span>
<span class="line">+       this.observe(this.lastRef.current);</span>
<span class="line">+     }</span>
<span class="line">+   }</span>
<span class="line">+   observe = (dom) =&gt; {</span>
<span class="line">+     let io = new IntersectionObserver((entries) =&gt; {</span>
<span class="line">+       entries.forEach(this.onScroll);</span>
<span class="line">+     }, { root: this.outerRef.current })</span>
<span class="line">+     io.observe(dom);</span>
<span class="line">+   }</span>
<span class="line">    render() {</span>
<span class="line">      const { width, height, children: Row } = this.props;</span>
<span class="line">      const containerStyle = { position: &#39;relative&#39;, width, height, overflow: &#39;auto&#39;, willChange: &#39;transform&#39; };</span>
<span class="line">      const contentStyle = { width: &#39;100%&#39;, height: getEstimatedTotalSize(this.props, this.instanceProps) };</span>
<span class="line">      const items = [];</span>
<span class="line">+     const [startIndex, stopIndex, originStartIndex, originStopIndex] = this.getRangeToRender();</span>
<span class="line">      for (let index = startIndex; index &lt;= stopIndex; index++) {</span>
<span class="line">+       const style = this.getItemStyle(index);</span>
<span class="line">+       if (index === originStartIndex) {</span>
<span class="line">+         items.push(</span>
<span class="line">+           &lt;Row key={index} index={index} style={style} forwardRef={this.firstRef} /&gt;</span>
<span class="line">+         );</span>
<span class="line">+         continue;</span>
<span class="line">+       } else if (index === originStopIndex) {</span>
<span class="line">+         items.push(</span>
<span class="line">+           &lt;Row key={index} index={index} style={style} forwardRef={this.lastRef} /&gt;</span>
<span class="line">+         );</span>
<span class="line">+         continue;</span>
<span class="line">+       }</span>
<span class="line">        items.push(</span>
<span class="line">          &lt;Row key={index} index={index} style={style} /&gt;</span>
<span class="line">        );</span>
<span class="line">      }</span>
<span class="line">      return (</span>
<span class="line">+      &lt;div style={containerStyle} ref={this.outerRef} &gt;</span>
<span class="line">          &lt;div style={contentStyle} &gt;</span>
<span class="line">            {items}</span>
<span class="line">          &lt;/div&gt;</span>
<span class="line">        &lt;/div&gt;</span>
<span class="line">      )</span>
<span class="line">    }</span>
<span class="line">    onScroll = () =&gt; {</span>
<span class="line">      const { scrollTop } = this.outerRef.current;</span>
<span class="line">      this.setState({ scrollOffset: scrollTop })</span>
<span class="line">    }</span>
<span class="line">    getRangeToRender = () =&gt; {</span>
<span class="line">      const { scrollOffset } = this.state;</span>
<span class="line">      const { itemCount, overscanCount } = this.props;</span>
<span class="line">      const startIndex = getStartIndexForOffset(this.props, scrollOffset, this.instanceProps);</span>
<span class="line">      const stopIndex = getStopIndexForStartIndex(this.props, startIndex, scrollOffset, this.instanceProps);</span>
<span class="line">      return [</span>
<span class="line">        Math.max(0, startIndex - overscanCount),</span>
<span class="line">        Math.min(itemCount - 1, stopIndex + overscanCount),</span>
<span class="line">        startIndex, stopIndex];</span>
<span class="line">    }</span>
<span class="line">    getItemStyle = (index) =&gt; {</span>
<span class="line">      const style = {</span>
<span class="line">        position: &#39;absolute&#39;,</span>
<span class="line">        width: &#39;100%&#39;,</span>
<span class="line">        height: getItemSize(this.props, index, this.instanceProps),</span>
<span class="line">        top: getItemOffset(this.props, index, this.instanceProps)</span>
<span class="line">      }</span>
<span class="line">      return style;</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_13-动态高度列表" tabindex="-1"><a class="header-anchor" href="#_13-动态高度列表"><span>13. 动态高度列表</span></a></h2><ul><li><a href="https://github.com/bvaughn/react-window/issues/6" target="_blank" rel="noopener noreferrer">react-window</a></li><li>[dynamic-size](https://react-window-next.vercel.app/</li><li><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/ResizeObserver/ResizeObserver" target="_blank" rel="noopener noreferrer">ResizeObserver</a></li><li><a href="https://github.com/TanStack/react-virtual" target="_blank" rel="noopener noreferrer">react-virtual</a></li><li><a href="https://virtuoso.dev/" target="_blank" rel="noopener noreferrer">virtuoso</a></li></ul><h3 id="_13-1-src-index-js" tabindex="-1"><a class="header-anchor" href="#_13-1-src-index-js"><span>13.1 src\\index.js</span></a></h3><p>src\\index.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React from &#39;react&#39;;</span>
<span class="line">import ReactDOM from &#39;react-dom/client&#39;;</span>
<span class="line">import FixedSizeList from &#39;./fixed-size-list&#39;;</span>
<span class="line">import VariableSizeList from &#39;./variable-size-list&#39;;</span>
<span class="line">+import DynamicSizeList from &#39;./dynamic-size-list&#39;</span>
<span class="line">const root = ReactDOM.createRoot(document.getElementById(&#39;root&#39;));</span>
<span class="line">+root.render(&lt;DynamicSizeList /&gt;);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_13-2-dynamic-size-list-js" tabindex="-1"><a class="header-anchor" href="#_13-2-dynamic-size-list-js"><span>13.2 dynamic-size-list.js</span></a></h3><p>src\\dynamic-size-list.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> VariableSizeList <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./react-window&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> items <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">1000</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> height <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">30</span> <span class="token operator">+</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39;px&#39;</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">const</span> style <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">        height<span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">100%</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> i <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">?</span> <span class="token string">&#39;green&#39;</span> <span class="token operator">:</span> <span class="token string">&quot;orange&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">display</span><span class="token operator">:</span> <span class="token string">&#39;flex&#39;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">alignItems</span><span class="token operator">:</span> <span class="token string">&#39;center&#39;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">justifyContent</span><span class="token operator">:</span> <span class="token string">&#39;center&#39;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    items<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>div style<span class="token operator">=</span><span class="token punctuation">{</span>style<span class="token punctuation">}</span><span class="token operator">&gt;</span>Row <span class="token punctuation">{</span>i<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">Row</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> index <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> items<span class="token punctuation">[</span>index<span class="token punctuation">]</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">        <span class="token operator">&lt;</span>VariableSizeList</span>
<span class="line">            isDynamic<span class="token operator">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span></span>
<span class="line">            className<span class="token operator">=</span><span class="token string">&#39;List&#39;</span></span>
<span class="line">            height<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">200</span><span class="token punctuation">}</span></span>
<span class="line">            width<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">200</span><span class="token punctuation">}</span></span>
<span class="line">            itemCount<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">1000</span><span class="token punctuation">}</span></span>
<span class="line">        <span class="token operator">&gt;</span></span>
<span class="line">            <span class="token punctuation">{</span>Row<span class="token punctuation">}</span></span>
<span class="line">        <span class="token operator">&lt;</span><span class="token operator">/</span>VariableSizeList<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> App</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_13-4-variablesizelist-js" tabindex="-1"><a class="header-anchor" href="#_13-4-variablesizelist-js"><span>13.4 VariableSizeList.js</span></a></h3><p>src\\react-window\\VariableSizeList.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">function getItemMetadata(props, index, instanceProps) {</span>
<span class="line">    const { itemSize } = props;</span>
<span class="line">    const { itemMetadataMap, lastMeasuredIndex } = instanceProps;</span>
<span class="line">    if (index &gt; lastMeasuredIndex) {</span>
<span class="line">        let offset = 0;//先计算上一个测试过的条目的下一个offset</span>
<span class="line">        if (lastMeasuredIndex &gt;= 0) {</span>
<span class="line">            const itemMetadata = itemMetadataMap[lastMeasuredIndex];</span>
<span class="line">            offset = itemMetadata.offset + itemMetadata.size;</span>
<span class="line">        }</span>
<span class="line">        //计算从上一个条目到本次索引的offset和size</span>
<span class="line">        for (let i = lastMeasuredIndex + 1; i &lt;= index; i++) {</span>
<span class="line">+           let size = itemSize ? itemSize(i) : DEFAULT_ESTIMATED_SIZE;</span>
<span class="line">            itemMetadataMap[i] = { offset, size };</span>
<span class="line">            offset += size;</span>
<span class="line">        }</span>
<span class="line">        instanceProps.lastMeasuredIndex = index;</span>
<span class="line">    }</span>
<span class="line">    return itemMetadataMap[index];</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_13-5-createlistcomponent-js" tabindex="-1"><a class="header-anchor" href="#_13-5-createlistcomponent-js"><span>13.5 createListComponent.js</span></a></h3><p>src\\react-window\\createListComponent.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React from &#39;react&#39;;</span>
<span class="line"></span>
<span class="line">+class ListItem extends React.Component {</span>
<span class="line">+    constructor(props) {</span>
<span class="line">+        super(props);</span>
<span class="line">+        this.domRef = React.createRef();</span>
<span class="line">+        this.resizeObserver = null;</span>
<span class="line">+    }</span>
<span class="line">+    componentDidMount() {</span>
<span class="line">+        if (this.domRef.current) {</span>
<span class="line">+            const node = this.domRef.current.firstChild;</span>
<span class="line">+            const { index, onSizeChange } = this.props;</span>
<span class="line">+            this.resizeObserver = new ResizeObserver(() =&gt; {</span>
<span class="line">+                onSizeChange(index, node);</span>
<span class="line">+            });</span>
<span class="line">+            this.resizeObserver.observe(node);</span>
<span class="line">+        }</span>
<span class="line">+    }</span>
<span class="line">+    componentWillUnmount() {</span>
<span class="line">+        if (this.resizeObserver &amp;&amp; this.domRef.current.firstChild) {</span>
<span class="line">+            this.resizeObserver.unobserve(this.domRef.current.firstChild);</span>
<span class="line">+        }</span>
<span class="line">+    }</span>
<span class="line">+    render() {</span>
<span class="line">+        const { index, style, ComponentType } = this.props;</span>
<span class="line">+        return (</span>
<span class="line">+            &lt;div style={style} ref={this.domRef}&gt;</span>
<span class="line">+                &lt;ComponentType index={index} /&gt;</span>
<span class="line">+            &lt;/div&gt;</span>
<span class="line">+        )</span>
<span class="line">+    }</span>
<span class="line">+}</span>
<span class="line">export default function createListComponent({</span>
<span class="line">    getEstimatedTotalSize,//获取预计的总高度</span>
<span class="line">    getItemSize,//每个条目的高度</span>
<span class="line">    getItemOffset,//获取每个条目的偏移量</span>
<span class="line">    getStartIndexForOffset,</span>
<span class="line">    getStopIndexForStartIndex,</span>
<span class="line">    initInstanceProps</span>
<span class="line">}) {</span>
<span class="line">    return class extends React.Component {</span>
<span class="line">        itemStyleCache = new Map()</span>
<span class="line">        instanceProps = initInstanceProps&amp;&amp;initInstanceProps(this.props)</span>
<span class="line">        static defaultProps = {</span>
<span class="line">            overscanCount: 2</span>
<span class="line">        }</span>
<span class="line">        state = { scrollOffset: 0 }</span>
<span class="line">+       onSizeChange = (index, node) =&gt; {</span>
<span class="line">+           const height = node.offsetHeight;</span>
<span class="line">+           const { itemMetadataMap, lastMeasuredIndex } = this.instanceProps;</span>
<span class="line">+           const itemMetadata = itemMetadataMap[index];</span>
<span class="line">+           itemMetadata.size = height;</span>
<span class="line">+           let offset = 0;</span>
<span class="line">+           for (let i = 0; i &lt;= lastMeasuredIndex; i++) {</span>
<span class="line">+               const itemMetadata = itemMetadataMap[i];</span>
<span class="line">+               itemMetadata.offset = offset;</span>
<span class="line">+               offset = offset + itemMetadata.size;</span>
<span class="line">+           }</span>
<span class="line">+           this.itemStyleCache.clear();</span>
<span class="line">+           this.forceUpdate();</span>
<span class="line">+       }</span>
<span class="line">        render() {</span>
<span class="line">+           const { width, height, itemCount, children: ComponentType, isDynamic } = this.props;</span>
<span class="line">            const containerStyle = { position: &#39;relative&#39;, width, height, overflow: &#39;auto&#39;, willChange: &#39;transform&#39; };</span>
<span class="line">            const contentStyle = { height: getEstimatedTotalSize(this.props, this.instanceProps), width: &#39;100%&#39; };</span>
<span class="line">            const items = [];</span>
<span class="line">            if (itemCount &gt; 0) {</span>
<span class="line">                const [startIndex, stopIndex] = this._getRangeToRender();</span>
<span class="line">                for (let index = startIndex; index &lt;= stopIndex; index++) {</span>
<span class="line">+                   if (isDynamic) {</span>
<span class="line">+                       items.push(</span>
<span class="line">+                           &lt;ListItem</span>
<span class="line">+                               key={index} index={index}</span>
<span class="line">+                               style={this._getItemStyle(index)}</span>
<span class="line">+                               ComponentType={ComponentType}</span>
<span class="line">+                               onSizeChange={this.onSizeChange}</span>
<span class="line">+                           /&gt;</span>
<span class="line">+                       );</span>
<span class="line">+                   } else {</span>
<span class="line">+                       items.push(</span>
<span class="line">+                           &lt;ComponentType</span>
<span class="line">+                               key={index} index={index}</span>
<span class="line">+                               style={this._getItemStyle(index)}</span>
<span class="line">+                           /&gt;</span>
<span class="line">+                       );</span>
<span class="line">+                   }</span>
<span class="line">               }</span>
<span class="line">            }</span>
<span class="line">            return (</span>
<span class="line">                &lt;div style={containerStyle} onScroll={this.onScroll}&gt;</span>
<span class="line">                    &lt;div style={contentStyle}&gt;</span>
<span class="line">                        {items}</span>
<span class="line">                    &lt;/div&gt;</span>
<span class="line">                &lt;/div&gt;</span>
<span class="line">            )</span>
<span class="line">        }</span>
<span class="line">        onScroll = event =&gt; {</span>
<span class="line">            const { scrollTop } = event.currentTarget;</span>
<span class="line">            this.setState({ scrollOffset: scrollTop });</span>
<span class="line">        }</span>
<span class="line">        _getItemStyle = (index) =&gt; {</span>
<span class="line">            let style;</span>
<span class="line">            if (this.itemStyleCache.has(index)) {</span>
<span class="line">                style = this.itemStyleCache.get(index);</span>
<span class="line">            } else {</span>
<span class="line">                style = {</span>
<span class="line">                    position: &#39;absolute&#39;,</span>
<span class="line">                    width: &#39;100%&#39;,</span>
<span class="line">                    height: getItemSize(this.props, index, this.instanceProps),</span>
<span class="line">                    top: getItemOffset(this.props, index, this.instanceProps)</span>
<span class="line">                };</span>
<span class="line">                this.itemStyleCache.set(index, style);</span>
<span class="line">            }</span>
<span class="line">            return style;</span>
<span class="line">        }</span>
<span class="line">        _getRangeToRender = () =&gt; {</span>
<span class="line">            const { scrollOffset } = this.state;</span>
<span class="line">            const { itemCount, overscanCount } = this.props;</span>
<span class="line">            const startIndex = getStartIndexForOffset(this.props, scrollOffset, this.instanceProps);</span>
<span class="line">            const stopIndex = getStopIndexForStartIndex(this.props, startIndex, scrollOffset, this.instanceProps);</span>
<span class="line">            return [</span>
<span class="line">                Math.max(0, startIndex - overscanCount),</span>
<span class="line">                Math.max(0, Math.min(itemCount - 1, stopIndex + overscanCount)),</span>
<span class="line">                startIndex, stopIndex]</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_14-滚动状态" tabindex="-1"><a class="header-anchor" href="#_14-滚动状态"><span>14. 滚动状态</span></a></h2><h3 id="_14-1-src-index-js" tabindex="-1"><a class="header-anchor" href="#_14-1-src-index-js"><span>14.1 src\\index.js</span></a></h3><p>src\\index.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React from &#39;react&#39;;</span>
<span class="line">import ReactDOM from &#39;react-dom/client&#39;;</span>
<span class="line">import FixedSizeList from &#39;./fixed-size-list&#39;;</span>
<span class="line">import VariableSizeList from &#39;./variable-size-list&#39;;</span>
<span class="line">import DynamicSizeList from &#39;./dynamic-size-list&#39;</span>
<span class="line">const root = ReactDOM.createRoot(document.getElementById(&#39;root&#39;));</span>
<span class="line">+root.render(&lt;FixedSizeList /&gt;);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_14-2-fixed-size-list-js" tabindex="-1"><a class="header-anchor" href="#_14-2-fixed-size-list-js"><span>14.2 fixed-size-list.js</span></a></h3><p>src\\fixed-size-list.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import { FixedSizeList } from &#39;./react-window&#39;;</span>
<span class="line">import &#39;./fixed-size-list.css&#39;;</span>
<span class="line">+const Row = ({ index, style, isScrolling }) =&gt; (</span>
<span class="line">+    &lt;div className={index % 2 ? &#39;ListItemOdd&#39; : &#39;ListItemEven&#39;} style={style}&gt;</span>
<span class="line">+        {isScrolling ? &#39;Scrolling&#39; : \`Row \${index}\`}</span>
<span class="line">+    &lt;/div&gt;</span>
<span class="line">+)</span>
<span class="line"></span>
<span class="line">function App() {</span>
<span class="line">    return (</span>
<span class="line">        &lt;FixedSizeList</span>
<span class="line">            className=&#39;List&#39;</span>
<span class="line">            height={200}</span>
<span class="line">            width={200}</span>
<span class="line">            itemSize={50}</span>
<span class="line">            itemCount={1000}</span>
<span class="line">+           useIsScrolling</span>
<span class="line">        &gt;</span>
<span class="line">            {Row}</span>
<span class="line">        &lt;/FixedSizeList&gt;</span>
<span class="line">    )</span>
<span class="line">}</span>
<span class="line">export default App;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_14-3-src-react-window-createlistcomponent-js" tabindex="-1"><a class="header-anchor" href="#_14-3-src-react-window-createlistcomponent-js"><span>14.3 src\\react-window\\createListComponent.js</span></a></h3><p>src\\react-window\\createListComponent.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React from &#39;react&#39;;</span>
<span class="line">+import { requestTimeout, cancelTimeout } from &#39;./timer&#39;;</span>
<span class="line">+const IS_SCROLLING_DEBOUNCE_INTERVAL = 150;</span>
<span class="line">class ListItem extends React.Component {</span>
<span class="line">    constructor(props) {</span>
<span class="line">        super(props);</span>
<span class="line">        this.domRef = React.createRef();</span>
<span class="line">        this.resizeObserver = null;</span>
<span class="line">    }</span>
<span class="line">    componentDidMount() {</span>
<span class="line">        if (this.domRef.current) {</span>
<span class="line">            const node = this.domRef.current.firstChild;</span>
<span class="line">            const { index, onSizeChange } = this.props;</span>
<span class="line">            this.resizeObserver = new ResizeObserver(() =&gt; {</span>
<span class="line">                onSizeChange(index, node);</span>
<span class="line">            });</span>
<span class="line">            this.resizeObserver.observe(node);</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">    componentWillUnmount() {</span>
<span class="line">        if (this.resizeObserver &amp;&amp; this.domRef.current.firstChild) {</span>
<span class="line">            this.resizeObserver.unobserve(this.domRef.current.firstChild);</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">    render() {</span>
<span class="line">        const { index, style, ComponentType } = this.props;</span>
<span class="line">        return (</span>
<span class="line">            &lt;div style={style} ref={this.domRef}&gt;</span>
<span class="line">                &lt;ComponentType index={index} /&gt;</span>
<span class="line">            &lt;/div&gt;</span>
<span class="line">        )</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line">export default function createListComponent({</span>
<span class="line">    getEstimatedTotalSize,//获取预计的总高度</span>
<span class="line">    getItemSize,//每个条目的高度</span>
<span class="line">    getItemOffset,//获取每个条目的偏移量</span>
<span class="line">    getStartIndexForOffset,</span>
<span class="line">    getStopIndexForStartIndex,</span>
<span class="line">    initInstanceProps</span>
<span class="line">}) {</span>
<span class="line">    return class extends React.Component {</span>
<span class="line">        itemStyleCache = new Map()</span>
<span class="line">        instanceProps = initInstanceProps &amp;&amp; initInstanceProps(this.props)</span>
<span class="line">        static defaultProps = {</span>
<span class="line">            overscanCount: 2,</span>
<span class="line">+           useIsScrolling: false</span>
<span class="line">        }</span>
<span class="line">+       state = { scrollOffset: 0, isScrolling: false }</span>
<span class="line">        onSizeChange = (index, node) =&gt; {</span>
<span class="line">            const height = node.offsetHeight;</span>
<span class="line">            const { itemMetadataMap, lastMeasuredIndex } = this.instanceProps;</span>
<span class="line">            const itemMetadata = itemMetadataMap[index];</span>
<span class="line">            itemMetadata.size = height;</span>
<span class="line">            let offset = 0;</span>
<span class="line">            for (let i = 0; i &lt;= lastMeasuredIndex; i++) {</span>
<span class="line">                const itemMetadata = itemMetadataMap[i];</span>
<span class="line">                itemMetadata.offset = offset;</span>
<span class="line">                offset = offset + itemMetadata.size;</span>
<span class="line">            }</span>
<span class="line">            this.itemStyleCache.clear();</span>
<span class="line">            this.forceUpdate();</span>
<span class="line">        }</span>
<span class="line">        render() {</span>
<span class="line">+           const { width, height, itemCount, children: ComponentType, isDynamic, useIsScrolling } = this.props;</span>
<span class="line">+           const { isScrolling } = this.state;</span>
<span class="line">            const containerStyle = { position: &#39;relative&#39;, width, height, overflow: &#39;auto&#39;, willChange: &#39;transform&#39; };</span>
<span class="line">            const contentStyle = { height: getEstimatedTotalSize(this.props, this.instanceProps), width: &#39;100%&#39; };</span>
<span class="line">            const items = [];</span>
<span class="line">            if (itemCount &gt; 0) {</span>
<span class="line">                const [startIndex, stopIndex] = this._getRangeToRender();</span>
<span class="line">                for (let index = startIndex; index &lt;= stopIndex; index++) {</span>
<span class="line">                    if (isDynamic) {</span>
<span class="line">                        items.push(</span>
<span class="line">                            &lt;ListItem</span>
<span class="line">                                key={index} index={index}</span>
<span class="line">                                style={this._getItemStyle(index)}</span>
<span class="line">                                ComponentType={ComponentType}</span>
<span class="line">                                onSizeChange={this.onSizeChange}</span>
<span class="line">+                               isScrolling={useIsScrolling &amp;&amp; isScrolling}</span>
<span class="line">                            /&gt;</span>
<span class="line">                        );</span>
<span class="line">                    } else {</span>
<span class="line">                        items.push(</span>
<span class="line">                            &lt;ComponentType</span>
<span class="line">                                key={index} index={index}</span>
<span class="line">                                style={this._getItemStyle(index)}</span>
<span class="line">+                               isScrolling={useIsScrolling &amp;&amp; isScrolling}</span>
<span class="line">                            /&gt;</span>
<span class="line">                        );</span>
<span class="line">                    }</span>
<span class="line">                }</span>
<span class="line">            }</span>
<span class="line">            return (</span>
<span class="line">                &lt;div style={containerStyle} onScroll={this.onScroll}&gt;</span>
<span class="line">                    &lt;div style={contentStyle}&gt;</span>
<span class="line">                        {items}</span>
<span class="line">                    &lt;/div&gt;</span>
<span class="line">                &lt;/div&gt;</span>
<span class="line">            )</span>
<span class="line">        }</span>
<span class="line">        onScroll = event =&gt; {</span>
<span class="line">            const { scrollTop } = event.currentTarget;</span>
<span class="line">+           this.setState({ scrollOffset: scrollTop, isScrolling: true }, this._resetIsScrollingDebounced);</span>
<span class="line">        }</span>
<span class="line">+       _resetIsScrollingDebounced = () =&gt; {</span>
<span class="line">+           if (this._resetIsScrollingTimeoutId) {</span>
<span class="line">+               cancelTimeout(this._resetIsScrollingTimeoutId);</span>
<span class="line">+           }</span>
<span class="line">+           this._resetIsScrollingTimeoutId = requestTimeout(</span>
<span class="line">+               this._resetIsScrolling,</span>
<span class="line">+               IS_SCROLLING_DEBOUNCE_INTERVAL</span>
<span class="line">+           );</span>
<span class="line">+       };</span>
<span class="line">+       _resetIsScrolling = () =&gt; {</span>
<span class="line">+           this._resetIsScrollingTimeoutId = null;</span>
<span class="line">+           this.setState({ isScrolling: false });</span>
<span class="line">+       }</span>
<span class="line">        _getItemStyle = (index) =&gt; {</span>
<span class="line">            let style;</span>
<span class="line">            if (this.itemStyleCache.has(index)) {</span>
<span class="line">                style = this.itemStyleCache.get(index);</span>
<span class="line">            } else {</span>
<span class="line">                style = {</span>
<span class="line">                    position: &#39;absolute&#39;,</span>
<span class="line">                    width: &#39;100%&#39;,</span>
<span class="line">                    height: getItemSize(this.props, index, this.instanceProps),</span>
<span class="line">                    top: getItemOffset(this.props, index, this.instanceProps)</span>
<span class="line">                };</span>
<span class="line">                this.itemStyleCache.set(index, style);</span>
<span class="line">            }</span>
<span class="line">            return style;</span>
<span class="line">        }</span>
<span class="line">        _getRangeToRender = () =&gt; {</span>
<span class="line">            const { scrollOffset } = this.state;</span>
<span class="line">            const { itemCount, overscanCount } = this.props;</span>
<span class="line">            const startIndex = getStartIndexForOffset(this.props, scrollOffset, this.instanceProps);</span>
<span class="line">            const stopIndex = getStopIndexForStartIndex(this.props, startIndex, scrollOffset, this.instanceProps);</span>
<span class="line">            return [</span>
<span class="line">                Math.max(0, startIndex - overscanCount),</span>
<span class="line">                Math.max(0, Math.min(itemCount - 1, stopIndex + overscanCount)),</span>
<span class="line">                startIndex, stopIndex]</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_15-滚动到指定条目" tabindex="-1"><a class="header-anchor" href="#_15-滚动到指定条目"><span>15. 滚动到指定条目</span></a></h2><h3 id="_15-1-src-fixed-size-list-js" tabindex="-1"><a class="header-anchor" href="#_15-1-src-fixed-size-list-js"><span>15.1 src\\fixed-size-list.js</span></a></h3><p>src\\fixed-size-list.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React from &#39;react&#39;;</span>
<span class="line">import { FixedSizeList } from &#39;./react-window&#39;;</span>
<span class="line">import &#39;./fixed-size-list.css&#39;;</span>
<span class="line">const Row = ({ index, style, isScrolling }) =&gt; (</span>
<span class="line">    &lt;div className={index % 2 ? &#39;ListItemOdd&#39; : &#39;ListItemEven&#39;} style={style}&gt;</span>
<span class="line">        {isScrolling ? &#39;Scrolling&#39; : \`Row \${index}\`}</span>
<span class="line">    &lt;/div&gt;</span>
<span class="line">)</span>
<span class="line"></span>
<span class="line">function App() {</span>
<span class="line">+   const listRef = React.useRef();</span>
<span class="line">    return (</span>
<span class="line">+       &lt;&gt;</span>
<span class="line">+           &lt;button onClick={() =&gt; listRef.current.scrollToItem(50)}&gt;滚动到50&lt;/button&gt;</span>
<span class="line">            &lt;FixedSizeList</span>
<span class="line">                className=&#39;List&#39;</span>
<span class="line">                height={200}</span>
<span class="line">                width={200}</span>
<span class="line">                itemSize={50}</span>
<span class="line">                itemCount={1000}</span>
<span class="line">                useIsScrolling</span>
<span class="line">+               ref={listRef}</span>
<span class="line">            &gt;</span>
<span class="line">                {Row}</span>
<span class="line">            &lt;/FixedSizeList&gt;</span>
<span class="line">+       &lt;/&gt;</span>
<span class="line">    )</span>
<span class="line">}</span>
<span class="line">export default App;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_15-2-fixedsizelist-js" tabindex="-1"><a class="header-anchor" href="#_15-2-fixedsizelist-js"><span>15.2 FixedSizeList.js</span></a></h3><p>src\\react-window\\FixedSizeList.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> createListComponent <span class="token keyword">from</span> <span class="token string">&#39;./createListComponent&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> FixedSizeList <span class="token operator">=</span> <span class="token function">createListComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token function-variable function">getItemSize</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> itemSize <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> itemSize<span class="token punctuation">,</span><span class="token comment">//每个条目的高度</span></span>
<span class="line">    <span class="token function-variable function">getEstimatedTotalSize</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> itemSize<span class="token punctuation">,</span> itemCount <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> itemSize <span class="token operator">*</span> itemCount<span class="token punctuation">,</span> <span class="token comment">//获取预计的总高度</span></span>
<span class="line">    <span class="token function-variable function">getItemOffset</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> itemSize <span class="token punctuation">}</span><span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> itemSize <span class="token operator">*</span> index<span class="token punctuation">,</span> <span class="token comment">//获取每个条目的偏移量</span></span>
<span class="line">    <span class="token function-variable function">getStartIndexForOffset</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> itemSize <span class="token punctuation">}</span><span class="token punctuation">,</span> offset</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>offset <span class="token operator">/</span> itemSize<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token comment">//获取起始索引</span></span>
<span class="line">    <span class="token function-variable function">getStopIndexForStartIndex</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> height<span class="token punctuation">,</span> itemSize <span class="token punctuation">}</span><span class="token punctuation">,</span> startIndex</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token comment">//获取结束索引</span></span>
<span class="line">        <span class="token keyword">const</span> numVisibleItems <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">ceil</span><span class="token punctuation">(</span>height <span class="token operator">/</span> itemSize<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span> startIndex <span class="token operator">+</span> numVisibleItems <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token operator">+</span>   <span class="token function-variable function">getOffsetForIndex</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>       <span class="token keyword">const</span> <span class="token punctuation">{</span> itemSize <span class="token punctuation">}</span> <span class="token operator">=</span> props<span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>       <span class="token keyword">return</span> itemSize <span class="token operator">*</span> index<span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>   <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> FixedSizeList<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_15-3-src-react-window-createlistcomponent-js" tabindex="-1"><a class="header-anchor" href="#_15-3-src-react-window-createlistcomponent-js"><span>15.3 src\\react-window\\createListComponent.js</span></a></h3><p>src\\react-window\\createListComponent.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React from &#39;react&#39;;</span>
<span class="line">import { requestTimeout, cancelTimeout } from &#39;./timer&#39;;</span>
<span class="line">const IS_SCROLLING_DEBOUNCE_INTERVAL = 150;</span>
<span class="line">class ListItem extends React.Component {</span>
<span class="line">    constructor(props) {</span>
<span class="line">        super(props);</span>
<span class="line">        this.domRef = React.createRef();</span>
<span class="line">        this.resizeObserver = null;</span>
<span class="line">    }</span>
<span class="line">    componentDidMount() {</span>
<span class="line">        if (this.domRef.current) {</span>
<span class="line">            const node = this.domRef.current.firstChild;</span>
<span class="line">            const { index, onSizeChange } = this.props;</span>
<span class="line">            this.resizeObserver = new ResizeObserver(() =&gt; {</span>
<span class="line">                onSizeChange(index, node);</span>
<span class="line">            });</span>
<span class="line">            this.resizeObserver.observe(node);</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">    componentWillUnmount() {</span>
<span class="line">        if (this.resizeObserver &amp;&amp; this.domRef.current.firstChild) {</span>
<span class="line">            this.resizeObserver.unobserve(this.domRef.current.firstChild);</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">    render() {</span>
<span class="line">        const { index, style, ComponentType } = this.props;</span>
<span class="line">        return (</span>
<span class="line">            &lt;div style={style} ref={this.domRef}&gt;</span>
<span class="line">                &lt;ComponentType index={index} /&gt;</span>
<span class="line">            &lt;/div&gt;</span>
<span class="line">        )</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line">export default function createListComponent({</span>
<span class="line">    getEstimatedTotalSize,//获取预计的总高度</span>
<span class="line">    getItemSize,//每个条目的高度</span>
<span class="line">    getItemOffset,//获取每个条目的偏移量</span>
<span class="line">    getStartIndexForOffset,</span>
<span class="line">    getStopIndexForStartIndex,</span>
<span class="line">    initInstanceProps,</span>
<span class="line">+   getOffsetForIndex</span>
<span class="line">}) {</span>
<span class="line">    return class extends React.Component {</span>
<span class="line">+       outerRef = React.createRef();</span>
<span class="line">        itemStyleCache = new Map()</span>
<span class="line">        instanceProps = initInstanceProps &amp;&amp; initInstanceProps(this.props)</span>
<span class="line">        static defaultProps = {</span>
<span class="line">            overscanCount: 2,</span>
<span class="line">            useIsScrolling: false</span>
<span class="line">        }</span>
<span class="line">+       scrollTo = (scrollOffset) =&gt; {</span>
<span class="line">+           this.setState({ scrollOffset: Math.max(0, scrollOffset) });</span>
<span class="line">+       }</span>
<span class="line">+       scrollToItem = (index) =&gt; {</span>
<span class="line">+           const { itemCount } = this.props;</span>
<span class="line">+           index = Math.max(0, Math.min(index, itemCount - 1))</span>
<span class="line">+           this.scrollTo(</span>
<span class="line">+               getOffsetForIndex(this.props, index)</span>
<span class="line">+           )</span>
<span class="line">+       }</span>
<span class="line">+       componentDidUpdate() {</span>
<span class="line">+           const { scrollOffset } = this.state;</span>
<span class="line">+           this.outerRef.current.scrollTop = scrollOffset;</span>
<span class="line">+       }</span>
<span class="line">        state = { scrollOffset: 0, isScrolling: false }</span>
<span class="line">        onSizeChange = (index, node) =&gt; {</span>
<span class="line">            const height = node.offsetHeight;</span>
<span class="line">            const { itemMetadataMap, lastMeasuredIndex } = this.instanceProps;</span>
<span class="line">            const itemMetadata = itemMetadataMap[index];</span>
<span class="line">            itemMetadata.size = height;</span>
<span class="line">            let offset = 0;</span>
<span class="line">            for (let i = 0; i &lt;= lastMeasuredIndex; i++) {</span>
<span class="line">                const itemMetadata = itemMetadataMap[i];</span>
<span class="line">                itemMetadata.offset = offset;</span>
<span class="line">                offset = offset + itemMetadata.size;</span>
<span class="line">            }</span>
<span class="line">            this.itemStyleCache.clear();</span>
<span class="line">            this.forceUpdate();</span>
<span class="line">        }</span>
<span class="line">        render() {</span>
<span class="line">            const { width, height, itemCount, children: ComponentType, isDynamic, useIsScrolling } = this.props;</span>
<span class="line">            const { isScrolling } = this.state;</span>
<span class="line">            const containerStyle = { position: &#39;relative&#39;, width, height, overflow: &#39;auto&#39;, willChange: &#39;transform&#39; };</span>
<span class="line">            const contentStyle = { height: getEstimatedTotalSize(this.props, this.instanceProps), width: &#39;100%&#39; };</span>
<span class="line">            const items = [];</span>
<span class="line">            if (itemCount &gt; 0) {</span>
<span class="line">                const [startIndex, stopIndex] = this._getRangeToRender();</span>
<span class="line">                for (let index = startIndex; index &lt;= stopIndex; index++) {</span>
<span class="line">                    if (isDynamic) {</span>
<span class="line">                        items.push(</span>
<span class="line">                            &lt;ListItem</span>
<span class="line">                                key={index} index={index}</span>
<span class="line">                                style={this._getItemStyle(index)}</span>
<span class="line">                                ComponentType={ComponentType}</span>
<span class="line">                                onSizeChange={this.onSizeChange}</span>
<span class="line">                                isScrolling={useIsScrolling &amp;&amp; isScrolling}</span>
<span class="line">                            /&gt;</span>
<span class="line">                        );</span>
<span class="line">                    } else {</span>
<span class="line">                        items.push(</span>
<span class="line">                            &lt;ComponentType</span>
<span class="line">                                key={index} index={index}</span>
<span class="line">                                style={this._getItemStyle(index)}</span>
<span class="line">                                isScrolling={useIsScrolling &amp;&amp; isScrolling}</span>
<span class="line">                            /&gt;</span>
<span class="line">                        );</span>
<span class="line">                    }</span>
<span class="line">                }</span>
<span class="line">            }</span>
<span class="line">            return (</span>
<span class="line">+               &lt;div style={containerStyle} onScroll={this.onScroll} ref={this.outerRef}&gt;</span>
<span class="line">                    &lt;div style={contentStyle}&gt;</span>
<span class="line">                        {items}</span>
<span class="line">                    &lt;/div&gt;</span>
<span class="line">                &lt;/div&gt;</span>
<span class="line">            )</span>
<span class="line">        }</span>
<span class="line">        onScroll = event =&gt; {</span>
<span class="line">            const { scrollTop } = event.currentTarget;</span>
<span class="line">            this.setState({ scrollOffset: scrollTop, isScrolling: true }, this._resetIsScrollingDebounced);</span>
<span class="line">        }</span>
<span class="line">        _resetIsScrollingDebounced = () =&gt; {</span>
<span class="line">            if (this._resetIsScrollingTimeoutId) {</span>
<span class="line">                cancelTimeout(this._resetIsScrollingTimeoutId);</span>
<span class="line">            }</span>
<span class="line">            this._resetIsScrollingTimeoutId = requestTimeout(</span>
<span class="line">                this._resetIsScrolling,</span>
<span class="line">                IS_SCROLLING_DEBOUNCE_INTERVAL</span>
<span class="line">            );</span>
<span class="line">        };</span>
<span class="line">        _resetIsScrolling = () =&gt; {</span>
<span class="line">            this._resetIsScrollingTimeoutId = null;</span>
<span class="line">            this.setState({ isScrolling: false });</span>
<span class="line">        }</span>
<span class="line">        _getItemStyle = (index) =&gt; {</span>
<span class="line">            let style;</span>
<span class="line">            if (this.itemStyleCache.has(index)) {</span>
<span class="line">                style = this.itemStyleCache.get(index);</span>
<span class="line">            } else {</span>
<span class="line">                style = {</span>
<span class="line">                    position: &#39;absolute&#39;,</span>
<span class="line">                    width: &#39;100%&#39;,</span>
<span class="line">                    height: getItemSize(this.props, index, this.instanceProps),</span>
<span class="line">                    top: getItemOffset(this.props, index, this.instanceProps)</span>
<span class="line">                };</span>
<span class="line">                this.itemStyleCache.set(index, style);</span>
<span class="line">            }</span>
<span class="line">            return style;</span>
<span class="line">        }</span>
<span class="line">        _getRangeToRender = () =&gt; {</span>
<span class="line">            const { scrollOffset } = this.state;</span>
<span class="line">            const { itemCount, overscanCount } = this.props;</span>
<span class="line">            const startIndex = getStartIndexForOffset(this.props, scrollOffset, this.instanceProps);</span>
<span class="line">            const stopIndex = getStopIndexForStartIndex(this.props, startIndex, scrollOffset, this.instanceProps);</span>
<span class="line">            return [</span>
<span class="line">                Math.max(0, startIndex - overscanCount),</span>
<span class="line">                Math.max(0, Math.min(itemCount - 1, stopIndex + overscanCount)),</span>
<span class="line">                startIndex, stopIndex]</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_16-其它方案" tabindex="-1"><a class="header-anchor" href="#_16-其它方案"><span>16.其它方案</span></a></h2><ul><li><a href="https://github.com/TanStack/react-virtual" target="_blank" rel="noopener noreferrer">react-virtual</a></li><li><a href="https://virtuoso.dev/" target="_blank" rel="noopener noreferrer">virtuoso</a></li></ul><h3 id="_16-1-src-index-js" tabindex="-1"><a class="header-anchor" href="#_16-1-src-index-js"><span>16.1 src\\index.js</span></a></h3><p>src\\index.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React from &#39;react&#39;;</span>
<span class="line">import ReactDOM from &#39;react-dom/client&#39;;</span>
<span class="line">import FixedSizeList from &#39;./fixed-size-list&#39;;</span>
<span class="line">import VariableSizeList from &#39;./variable-size-list&#39;;</span>
<span class="line">import DynamicSizeList from &#39;./dynamic-size-list&#39;</span>
<span class="line">+import Virtuoso from &#39;./Virtuoso&#39;</span>
<span class="line">const root = ReactDOM.createRoot(document.getElementById(&#39;root&#39;));</span>
<span class="line">+root.render(&lt;DynamicSizeList /&gt;);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_16-2-src-virtuoso-js" tabindex="-1"><a class="header-anchor" href="#_16-2-src-virtuoso-js"><span>16.2 src\\Virtuoso.js</span></a></h3><p>src\\Virtuoso.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Virtuoso <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-virtuoso&#39;</span></span>
<span class="line"><span class="token keyword">const</span> items <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">200</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> height <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">30</span><span class="token operator">+</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">20</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39;px&#39;</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">const</span> style <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    height<span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">100%</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span>i<span class="token operator">%</span><span class="token number">2</span><span class="token operator">?</span><span class="token string">&#39;green&#39;</span><span class="token operator">:</span><span class="token string">&quot;orange&quot;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  items<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>div style<span class="token operator">=</span><span class="token punctuation">{</span> style <span class="token punctuation">}</span><span class="token operator">&gt;</span>Row <span class="token punctuation">{</span>i<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token operator">&lt;</span>Virtuoso</span>
<span class="line">        style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">&#39;200px&#39;</span><span class="token punctuation">,</span><span class="token literal-property property">width</span><span class="token operator">:</span><span class="token string">&#39;200px&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
<span class="line">        totalCount<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">200</span><span class="token punctuation">}</span></span>
<span class="line">        itemContent<span class="token operator">=</span><span class="token punctuation">{</span><span class="token parameter">index</span> <span class="token operator">=&gt;</span> items<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">}</span></span>
<span class="line">    <span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line"><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_16-3-resizeobserver" tabindex="-1"><a class="header-anchor" href="#_16-3-resizeobserver"><span>16.3 ResizeObserver</span></a></h4><ul><li><ul><li><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/ResizeObserver/ResizeObserver" target="_blank" rel="noopener noreferrer">ResizeObserver</a></li></ul></li></ul><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token constant">DOCTYPE</span> html<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span>html lang<span class="token operator">=</span><span class="token string">&quot;en&quot;</span><span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line"><span class="token operator">&lt;</span>head<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span>meta charset<span class="token operator">=</span><span class="token string">&quot;UTF-8&quot;</span><span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span>meta http<span class="token operator">-</span>equiv<span class="token operator">=</span><span class="token string">&quot;X-UA-Compatible&quot;</span> content<span class="token operator">=</span><span class="token string">&quot;IE=edge&quot;</span><span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span>meta name<span class="token operator">=</span><span class="token string">&quot;viewport&quot;</span> content<span class="token operator">=</span><span class="token string">&quot;width=device-width, initial-scale=1.0&quot;</span><span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span>title<span class="token operator">&gt;</span>ResizeObserver<span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line"><span class="token operator">&lt;</span>body<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span>img id<span class="token operator">=</span><span class="token string">&quot;logo&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span>script<span class="token operator">&gt;</span></span>
<span class="line">        <span class="token keyword">let</span> logo <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;logo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>logo<span class="token punctuation">.</span>offsetHeight<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">const</span> resizeObserver <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ResizeObserver</span><span class="token punctuation">(</span><span class="token parameter">entries</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>logo<span class="token punctuation">.</span>offsetHeight<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        resizeObserver<span class="token punctuation">.</span><span class="token function">observe</span><span class="token punctuation">(</span>logo<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">            logo<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token string">&#39;https://img.zhufengpeixun.com/zfjglogo.png&#39;</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,141)])])}const o=n(l,[["render",t]]),r=JSON.parse('{"path":"/strong/150.react-window.html","title":"","lang":"en-US","frontmatter":{},"git":{"updatedTime":1681290319000,"contributors":[{"name":"yutao","username":"yutao","email":"642231346@qq.com","commits":1,"url":"https://github.com/yutao"}],"changelog":[{"hash":"f5ab8c9d34991ec274f7f652439afe5b2afb6147","time":1681290319000,"email":"642231346@qq.com","author":"yutao","message":"modify"}]},"filePathRelative":"strong/150.react-window.md"}');export{o as comp,r as data};
