import{_ as s,c as a,a as e,o as p}from"./app-CD1YpnS1.js";const l={};function t(i,n){return p(),a("div",null,[...n[0]||(n[0]=[e(`<h2 id="_1-userequest" tabindex="-1"><a class="header-anchor" href="#_1-userequest"><span>1.useRequest</span></a></h2><ul><li><a href="https://ahooks.js.org/zh-CN/hooks/use-request/index" target="_blank" rel="noopener noreferrer">useRequest</a>是一个强大的异步数据管理的 <code>Hooks</code>，React 项目中的网络请求场景使用 <code>useRequest</code> 就够了</li><li><code>useRequest</code> 通过插件式组织代码，核心代码极其简单，并且可以很方便的扩展出更高级的功能。目前已有能力包括： <ul><li>自动请求/手动请求</li><li>轮询</li><li>防抖</li><li>节流</li><li>屏幕聚焦重新请求</li><li>错误重试</li><li>loading delay</li><li>SWR(stale-while-revalidate)重新请求的同时使用过期数据</li><li>缓存</li></ul></li></ul><h3 id="_1-1-api" tabindex="-1"><a class="header-anchor" href="#_1-1-api"><span>1.1 API</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span></span>
<span class="line">  loading<span class="token punctuation">,</span></span>
<span class="line">  data<span class="token punctuation">,</span></span>
<span class="line">  error<span class="token punctuation">,</span></span>
<span class="line">  params<span class="token punctuation">,</span></span>
<span class="line">  run<span class="token punctuation">,</span></span>
<span class="line">  runAsync<span class="token punctuation">,</span></span>
<span class="line">  refresh<span class="token punctuation">,</span></span>
<span class="line">  refreshAsync<span class="token punctuation">,</span></span>
<span class="line">  mutate<span class="token punctuation">,</span></span>
<span class="line">  cancel</span>
<span class="line">  <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useRequest</span><span class="token punctuation">(</span>service<span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    manual<span class="token punctuation">,</span></span>
<span class="line">    defaultParams<span class="token punctuation">,</span></span>
<span class="line">    onBefore<span class="token punctuation">,</span></span>
<span class="line">    onSuccess<span class="token punctuation">,</span></span>
<span class="line">    onError<span class="token punctuation">,</span></span>
<span class="line">    onFinally</span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-结果" tabindex="-1"><a class="header-anchor" href="#_1-2-结果"><span>1.2 结果</span></a></h3><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">data</td><td style="text-align:left;">service 返回的数据</td></tr><tr><td style="text-align:left;">error</td><td style="text-align:left;">service 抛出的异常</td></tr><tr><td style="text-align:left;">loading</td><td style="text-align:left;">service 是否正在执行</td></tr><tr><td style="text-align:left;">params</td><td style="text-align:left;">当次执行的 service 的参数数组</td></tr><tr><td style="text-align:left;">run</td><td style="text-align:left;">手动触发 service 执行</td></tr><tr><td style="text-align:left;">runAsync</td><td style="text-align:left;">与 run 用法一致，但返回的是 Promise，需要自行处理异常</td></tr><tr><td style="text-align:left;">refresh</td><td style="text-align:left;">使用上一次的 params，重新调用 run</td></tr><tr><td style="text-align:left;">refreshAsync</td><td style="text-align:left;">使用上一次的 params，重新调用 runAsync</td></tr><tr><td style="text-align:left;">mutate</td><td style="text-align:left;">直接修改 data</td></tr><tr><td style="text-align:left;">cancel</td><td style="text-align:left;">取消当前正在进行的请求</td></tr></tbody></table><h3 id="_1-3-选项" tabindex="-1"><a class="header-anchor" href="#_1-3-选项"><span>1.3 选项</span></a></h3><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">manual</td><td style="text-align:left;">默认 false。 即在初始化时自动执行 service</td></tr><tr><td style="text-align:left;">defaultParams</td><td style="text-align:left;">首次默认执行时，传递给 service 的参数</td></tr><tr><td style="text-align:left;">onBefore</td><td style="text-align:left;">service 执行前触发</td></tr><tr><td style="text-align:left;">onSuccess</td><td style="text-align:left;">service resolve 时触发</td></tr><tr><td style="text-align:left;">onError</td><td style="text-align:left;">service reject 时触发</td></tr><tr><td style="text-align:left;">onFinally</td><td style="text-align:left;">service 执行完成时触发</td></tr></tbody></table><h3 id="_1-4-安装" tabindex="-1"><a class="header-anchor" href="#_1-4-安装"><span>1.4 安装</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">npm install ahooks  --save</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_1-5-依赖hooks" tabindex="-1"><a class="header-anchor" href="#_1-5-依赖hooks"><span>1.5 依赖Hooks</span></a></h3><ul><li><a href="https://ahooks.js.org/zh-CN/hooks/use-request/index" target="_blank" rel="noopener noreferrer">useRequest</a>是一个强大的异步数据管理的 Hooks，React项目中的网络请求场景使用 useRequest 就够了</li><li><a href="https://ahooks.js.org/zh-CN/hooks/use-update-effect" target="_blank" rel="noopener noreferrer">useUpdateEffect</a>用法等同于 useEffect，但是会忽略首次执行，只在依赖更新时执行</li><li><a href="https://ahooks.js.org/zh-CN/hooks/use-creation" target="_blank" rel="noopener noreferrer">useCreation</a> 是 <code>useMemo</code> 或 <code>useRef</code> 的替代品</li><li><a href="https://ahooks.js.org/zh-CN/hooks/use-latest" target="_blank" rel="noopener noreferrer">useLatest</a>返回当前最新值的 Hook，可以避免闭包问题</li><li><a href="https://ahooks.js.org/zh-CN/hooks/use-memoized-fn" target="_blank" rel="noopener noreferrer">useMemoizedFn</a>是持久化 function 的 Hook，理论上，可以使用 useMemoizedFn 完全代替 useCallback</li><li><a href="https://ahooks.js.org/zh-CN/hooks/use-mount" target="_blank" rel="noopener noreferrer">useMount</a>是只在组件初始化时执行的 Hook</li><li><a href="https://ahooks.js.org/zh-CN/hooks/use-unmount" target="_blank" rel="noopener noreferrer">useUnmount</a>是在组件卸载（unmount）时执行的 Hook。</li><li><a href="https://ahooks.js.org/zh-CN/hooks/use-update" target="_blank" rel="noopener noreferrer">useUpdate</a>会返回一个函数，调用该函数会强制组件重新渲染</li></ul><h2 id="_2-自动请求" tabindex="-1"><a class="header-anchor" href="#_2-自动请求"><span>2.自动请求</span></a></h2><ul><li>默认情况下，<code>useRequest</code> 第一个参数是一个异步函数，在组件初始化时，会自动执行该异步函数。同时自动管理该异步函数的 <code>loading</code> , <code>data</code>, <code>error</code> 等状态。</li></ul><h3 id="_2-1-src-index-js" tabindex="-1"><a class="header-anchor" href="#_2-1-src-index-js"><span>2.1 src\\index.js</span></a></h3><p>src\\index.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> ReactDOM <span class="token keyword">from</span> <span class="token string">&#39;react-dom/client&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> root <span class="token operator">=</span> ReactDOM<span class="token punctuation">.</span><span class="token function">createRoot</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">root<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>App <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-app-js" tabindex="-1"><a class="header-anchor" href="#_2-2-app-js"><span>2.2 App.js</span></a></h3><p>src\\App.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useRequest <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./ahooks&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;zhufeng&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token punctuation">{</span> data<span class="token punctuation">,</span> loading <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useRequest</span><span class="token punctuation">(</span>getName<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>loading<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>加载中<span class="token operator">...</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>用户名<span class="token operator">:</span> <span class="token punctuation">{</span>data<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-ahooks-index-js" tabindex="-1"><a class="header-anchor" href="#_2-3-ahooks-index-js"><span>2.3 ahooks\\index.js</span></a></h3><p>src\\ahooks\\index.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> useRequest <span class="token keyword">from</span> <span class="token string">&#39;./useRequest&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token punctuation">{</span></span>
<span class="line">  useRequest</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-userequest-index-js" tabindex="-1"><a class="header-anchor" href="#_2-4-userequest-index-js"><span>2.4 useRequest\\index.js</span></a></h3><p>src\\ahooks\\useRequest\\index.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> useRequest <span class="token keyword">from</span> <span class="token string">&#39;./src/useRequest&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> useRequest<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-5-userequest-js" tabindex="-1"><a class="header-anchor" href="#_2-5-userequest-js"><span>2.5 useRequest.js</span></a></h3><p>src\\ahooks\\useRequest\\src\\useRequest.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> useRequestImplement <span class="token keyword">from</span> <span class="token string">&#39;./useRequestImplement&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">useRequest</span><span class="token punctuation">(</span><span class="token parameter">service</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token function">useRequestImplement</span><span class="token punctuation">(</span>service<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> useRequest<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-6-userequestimplement-js" tabindex="-1"><a class="header-anchor" href="#_2-6-userequestimplement-js"><span>2.6 useRequestImplement.js</span></a></h3><p>src\\ahooks\\useRequest\\src\\useRequestImplement.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> useLatest <span class="token keyword">from</span> <span class="token string">&#39;../../useLatest&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> useUpdate <span class="token keyword">from</span> <span class="token string">&#39;../../useUpdate&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> useCreation <span class="token keyword">from</span> <span class="token string">&#39;../../useCreation&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> useMount <span class="token keyword">from</span> <span class="token string">&#39;../../useMount&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> Fetch <span class="token keyword">from</span> <span class="token string">&#39;./Fetch&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">useRequestImplement</span><span class="token punctuation">(</span><span class="token parameter">service</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> serviceRef <span class="token operator">=</span> <span class="token function">useLatest</span><span class="token punctuation">(</span>service<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">const</span> update <span class="token operator">=</span> <span class="token function">useUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">const</span> fetchInstance <span class="token operator">=</span> <span class="token function">useCreation</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Fetch</span><span class="token punctuation">(</span>serviceRef<span class="token punctuation">,</span> update<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token function">useMount</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    fetchInstance<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">loading</span><span class="token operator">:</span> fetchInstance<span class="token punctuation">.</span>state<span class="token punctuation">.</span>loading<span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">data</span><span class="token operator">:</span> fetchInstance<span class="token punctuation">.</span>state<span class="token punctuation">.</span>data</span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> useRequestImplement<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-7-uselatest-index-js" tabindex="-1"><a class="header-anchor" href="#_2-7-uselatest-index-js"><span>2.7 useLatest\\index.js</span></a></h3><ul><li><a href="https://ahooks.js.org/zh-CN/hooks/use-latest" target="_blank" rel="noopener noreferrer">useLatest</a>返回当前最新值的 Hook，可以避免闭包问题</li></ul><p>src\\ahooks\\useLatest\\index.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">useLatest</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> ref <span class="token operator">=</span> <span class="token function">useRef</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  ref<span class="token punctuation">.</span>current <span class="token operator">=</span> value<span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">return</span> ref<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> useLatest<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-8-useupdate-index-js" tabindex="-1"><a class="header-anchor" href="#_2-8-useupdate-index-js"><span>2.8 useUpdate\\index.js</span></a></h3><ul><li><a href="https://ahooks.js.org/zh-CN/hooks/use-update" target="_blank" rel="noopener noreferrer">useUpdate</a>会返回一个函数，调用该函数会强制组件重新渲染</li></ul><p>src\\ahooks\\useUpdate\\index.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useCallback<span class="token punctuation">,</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">useUpdate</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token punctuation">[</span><span class="token punctuation">,</span> setState<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token function">useCallback</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> useUpdate<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-9-usecreation-index-js" tabindex="-1"><a class="header-anchor" href="#_2-9-usecreation-index-js"><span>2.9 useCreation\\index.js</span></a></h3><ul><li><a href="https://ahooks.js.org/zh-CN/hooks/use-creation" target="_blank" rel="noopener noreferrer">useCreation</a> 是 <code>useMemo</code> 或 <code>useRef</code> 的替代品</li><li>因为 useMemo 不能保证被 memo 的值一定不会被重计算，而 useCreation 可以保证这一点</li></ul><p>src\\ahooks\\useCreation\\index.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> depsAreSame <span class="token keyword">from</span> <span class="token string">&#39;../utils/depsAreSame&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">useCreation</span><span class="token punctuation">(</span><span class="token parameter">factory<span class="token punctuation">,</span> deps</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token punctuation">{</span> current <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useRef</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    deps<span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">obj</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">initialized</span><span class="token operator">:</span> <span class="token boolean">false</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>current<span class="token punctuation">.</span>initialized <span class="token operator">===</span> <span class="token boolean">false</span> <span class="token operator">||</span> <span class="token operator">!</span><span class="token function">depsAreSame</span><span class="token punctuation">(</span>current<span class="token punctuation">.</span>deps<span class="token punctuation">,</span> deps<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    current<span class="token punctuation">.</span>deps <span class="token operator">=</span> deps<span class="token punctuation">;</span></span>
<span class="line">    current<span class="token punctuation">.</span>obj <span class="token operator">=</span> <span class="token function">factory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    current<span class="token punctuation">.</span>initialized <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">return</span> current<span class="token punctuation">.</span>obj<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-10-depsaresame-js" tabindex="-1"><a class="header-anchor" href="#_2-10-depsaresame-js"><span>2.10 depsAreSame.js</span></a></h3><p>src\\ahooks\\utils\\depsAreSame.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">depsAreSame</span><span class="token punctuation">(</span><span class="token parameter">oldDeps<span class="token punctuation">,</span> deps</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>oldDeps <span class="token operator">===</span> deps<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> oldDeps<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>Object<span class="token punctuation">.</span><span class="token function">is</span><span class="token punctuation">(</span>oldDeps<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> deps<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-11-usemount-index-js" tabindex="-1"><a class="header-anchor" href="#_2-11-usemount-index-js"><span>2.11 useMount\\index.js</span></a></h3><ul><li><a href="https://ahooks.js.org/zh-CN/hooks/use-mount" target="_blank" rel="noopener noreferrer">useMount</a>是只在组件初始化时执行的 Hook src\\ahooks\\useMount\\index.js<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useEffect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">useMount</span> <span class="token operator">=</span> <span class="token parameter">fn</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  fn<span class="token operator">?.</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> useMount<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="_2-12-fetch-js" tabindex="-1"><a class="header-anchor" href="#_2-12-fetch-js"><span>2.12 Fetch.js</span></a></h3><p>src\\ahooks\\useRequest\\src\\Fetch.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">class</span> <span class="token class-name">Fetch</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">serviceRef<span class="token punctuation">,</span> subscribe</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>serviceRef <span class="token operator">=</span> serviceRef<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>subscribe <span class="token operator">=</span> subscribe<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">loading</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token keyword">undefined</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token function-variable function">setState</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">s <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">,</span> <span class="token operator">...</span>s <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token function-variable function">runAsync</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">loading</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>serviceRef<span class="token punctuation">.</span><span class="token function">current</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">loading</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token literal-property property">data</span><span class="token operator">:</span> res <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token function-variable function">run</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">runAsync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> Fetch<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-错误处理" tabindex="-1"><a class="header-anchor" href="#_3-错误处理"><span>3.错误处理</span></a></h2><h3 id="_3-1-src-app-js" tabindex="-1"><a class="header-anchor" href="#_3-1-src-app-js"><span>3.1 src\\App.js</span></a></h3><p>src\\App.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import { useRequest } from &#39;./ahooks&#39;;</span>
<span class="line">import React from &#39;react&#39;;</span>
<span class="line"></span>
<span class="line">function getName() {</span>
<span class="line">  return new Promise((resolve, reject) =&gt; {</span>
<span class="line">    setTimeout(() =&gt; {</span>
<span class="line">-     resolve(&#39;zhufeng&#39;);</span>
<span class="line">+     reject(new Error(&#39;获取用户名失败&#39;));</span>
<span class="line">    }, 1000);</span>
<span class="line">  });</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">function App() {</span>
<span class="line">+ const { data, loading, error } = useRequest(getName);</span>
<span class="line">  if (loading) {</span>
<span class="line">    return &lt;div&gt;加载中...&lt;/div&gt;;</span>
<span class="line">  }</span>
<span class="line">+ if (error) {</span>
<span class="line">+   return &lt;div&gt;加载失败&lt;/div&gt;;</span>
<span class="line">+ }</span>
<span class="line">  return &lt;div&gt;用户名: {data}&lt;/div&gt;;</span>
<span class="line">};</span>
<span class="line">export default App;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-userequestimplement-js" tabindex="-1"><a class="header-anchor" href="#_3-2-userequestimplement-js"><span>3.2 useRequestImplement.js</span></a></h3><p>src\\ahooks\\useRequest\\src\\useRequestImplement.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import useCreation from &#39;../../useCreation&#39;;</span>
<span class="line">import useLatest from &#39;../../useLatest&#39;;</span>
<span class="line">import useMount from &#39;../../useMount&#39;;</span>
<span class="line">import useUpdate from &#39;../../useUpdate&#39;;</span>
<span class="line">import Fetch from &#39;./Fetch&#39;;</span>
<span class="line">function useRequestImplement(service) {</span>
<span class="line">  const serviceRef = useLatest(service);</span>
<span class="line">  const update = useUpdate();</span>
<span class="line">  const fetchInstance = useCreation(() =&gt; {</span>
<span class="line">    return new Fetch(serviceRef, update);</span>
<span class="line">  }, []);</span>
<span class="line">  useMount(() =&gt; {</span>
<span class="line">    fetchInstance.run();</span>
<span class="line">  });</span>
<span class="line">  return {</span>
<span class="line">    loading: fetchInstance.state.loading,</span>
<span class="line">    data: fetchInstance.state.data,</span>
<span class="line">+   error: fetchInstance.state.error</span>
<span class="line">  };</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">export default useRequestImplement;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-fetch-js" tabindex="-1"><a class="header-anchor" href="#_3-3-fetch-js"><span>3.3 Fetch.js</span></a></h3><p>src\\ahooks\\useRequest\\src\\Fetch.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">class Fetch {</span>
<span class="line">  constructor(serviceRef, subscribe) {</span>
<span class="line">    this.serviceRef = serviceRef;</span>
<span class="line">    this.subscribe = subscribe;</span>
<span class="line">+   this.state = { loading: false, data: undefined, error: undefined };</span>
<span class="line">  }</span>
<span class="line">  setState = (s = {}) =&gt; {</span>
<span class="line">    this.state = { ...this.state, ...s };</span>
<span class="line">    this.subscribe();</span>
<span class="line">  }</span>
<span class="line">  runAsync = async () =&gt; {</span>
<span class="line">    this.setState({ loading: true });</span>
<span class="line">+   try {</span>
<span class="line">      const res = await this.serviceRef.current();</span>
<span class="line">+     this.setState({ loading: false, data: res, error: undefined });</span>
<span class="line">+   } catch (error) {</span>
<span class="line">+     this.setState({ loading: false, error });</span>
<span class="line">+   }</span>
<span class="line">  }</span>
<span class="line">  run = () =&gt; {</span>
<span class="line">    this.runAsync();</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line">export default Fetch;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-手工触发" tabindex="-1"><a class="header-anchor" href="#_4-手工触发"><span>4.手工触发</span></a></h2><ul><li>[手工触发](https://ahooks.js.org/zh-CN/hooks/use-request/basic</li><li>如果设置了 <code>options.manual = true</code>，则 <code>useRequest</code> 不会默认执行，需要通过 <code>run</code> 或者 <code>runAsync</code> 来触发执行</li><li><code>run</code> 与 <code>runAsync</code> 的区别在于： <ul><li>run 是一个普通的同步函数，我们会自动捕获异常，你可以通过 <code>options.onError</code> 来处理异常时的行为</li><li>runAsync 是一个返回 Promise 的异步函数，如果使用 <code>runAsync</code> 来调用，则意味着你需要自己捕获异常</li></ul></li></ul><h3 id="_4-1-src-app-js" tabindex="-1"><a class="header-anchor" href="#_4-1-src-app-js"><span>4.1 src\\App.js</span></a></h3><p>src\\App.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import { useRequest } from &#39;./ahooks&#39;;</span>
<span class="line">import React from &#39;react&#39;;</span>
<span class="line"></span>
<span class="line">function getName() {</span>
<span class="line">  return new Promise((resolve, reject) =&gt; {</span>
<span class="line">    setTimeout(() =&gt; {</span>
<span class="line">      //resolve(&#39;zhufeng&#39;);</span>
<span class="line">      reject(new Error(&#39;获取用户名失败&#39;));</span>
<span class="line">    }, 1000);</span>
<span class="line">  });</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">function App() {</span>
<span class="line">+ const { data, loading, error, run, runAsync } = useRequest(getName, {</span>
<span class="line">+   manual: true,</span>
<span class="line">+   /* onError(error) {</span>
<span class="line">+     console.error(&#39;onError&#39;, error);</span>
<span class="line">+   } */</span>
<span class="line">+ });</span>
<span class="line">+ return (</span>
<span class="line">+   &lt;&gt;</span>
<span class="line">+     &lt;button disabled={loading} onClick={run}&gt;</span>
<span class="line">+       {loading ? &#39;获取中......&#39; : &#39;run&#39;}</span>
<span class="line">+     &lt;/button&gt;</span>
<span class="line">+     &lt;button disabled={loading} onClick={runAsync}&gt;</span>
<span class="line">+       {loading ? &#39;获取中......&#39; : &#39;runAsync&#39;}</span>
<span class="line">+     &lt;/button&gt;</span>
<span class="line">+     {data &amp;&amp; &lt;div&gt;用户名: {data}&lt;/div&gt;}</span>
<span class="line">+   &lt;/&gt;</span>
<span class="line">  )</span>
<span class="line">};</span>
<span class="line">export default App;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-userequest-js" tabindex="-1"><a class="header-anchor" href="#_4-2-userequest-js"><span>4.2 useRequest.js</span></a></h3><p>src\\ahooks\\useRequest\\src\\useRequest.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import useRequestImplement from &#39;./useRequestImplement&#39;;</span>
<span class="line">+function useRequest(service, options = {}) {</span>
<span class="line">+ return useRequestImplement(service, options);</span>
<span class="line">}</span>
<span class="line">export default useRequest;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-userequestimplement-js" tabindex="-1"><a class="header-anchor" href="#_4-3-userequestimplement-js"><span>4.3 useRequestImplement.js</span></a></h3><p>src\\ahooks\\useRequest\\src\\useRequestImplement.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import useCreation from &#39;../../useCreation&#39;;</span>
<span class="line">import useLatest from &#39;../../useLatest&#39;;</span>
<span class="line">import useMount from &#39;../../useMount&#39;;</span>
<span class="line">import useUpdate from &#39;../../useUpdate&#39;;</span>
<span class="line">import Fetch from &#39;./Fetch&#39;;</span>
<span class="line">+import useMemoizedFn from &#39;../../useMemoizedFn&#39;;</span>
<span class="line">function useRequestImplement(service, options = {}) {</span>
<span class="line">+ const { manual = false, ...rest } = options;</span>
<span class="line">+ const fetchOptions = { manual, ...rest };</span>
<span class="line">  const serviceRef = useLatest(service);</span>
<span class="line">  const update = useUpdate();</span>
<span class="line">  const fetchInstance = useCreation(() =&gt; {</span>
<span class="line">+    return new Fetch(serviceRef, fetchOptions, update);</span>
<span class="line">  }, []);</span>
<span class="line">  useMount(() =&gt; {</span>
<span class="line">+   if (!manual) {</span>
<span class="line">      fetchInstance.run();</span>
<span class="line">+   }</span>
<span class="line">  });</span>
<span class="line">  return {</span>
<span class="line">    loading: fetchInstance.state.loading,</span>
<span class="line">    data: fetchInstance.state.data,</span>
<span class="line">    error: fetchInstance.state.error,</span>
<span class="line">+   run: useMemoizedFn(fetchInstance.run.bind(fetchInstance)),</span>
<span class="line">+   runAsync: useMemoizedFn(fetchInstance.runAsync.bind(fetchInstance))</span>
<span class="line">  };</span>
<span class="line">}</span>
<span class="line">export default useRequestImplement;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-4-usememoizedfn-index-js" tabindex="-1"><a class="header-anchor" href="#_4-4-usememoizedfn-index-js"><span>4.4 useMemoizedFn\\index.js</span></a></h3><ul><li><a href="https://ahooks.js.org/zh-CN/hooks/use-memoized-fn" target="_blank" rel="noopener noreferrer">useMemoizedFn</a>是持久化 function 的 Hook，理论上，可以使用 useMemoizedFn 完全代替 useCallback</li></ul><p>src\\ahooks\\useMemoizedFn\\index.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useMemo<span class="token punctuation">,</span> useRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">useMemoizedFn</span><span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> fnRef <span class="token operator">=</span> <span class="token function">useRef</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  fnRef<span class="token punctuation">.</span>current <span class="token operator">=</span> <span class="token function">useMemo</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> fn<span class="token punctuation">,</span> <span class="token punctuation">[</span>fn<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">const</span> memoizedFn <span class="token operator">=</span> <span class="token function">useRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>memoizedFn<span class="token punctuation">.</span>current<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    memoizedFn<span class="token punctuation">.</span><span class="token function-variable function">current</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">return</span> fnRef<span class="token punctuation">.</span><span class="token function">current</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">return</span> memoizedFn<span class="token punctuation">.</span>current<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> useMemoizedFn<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-5-fetch-js" tabindex="-1"><a class="header-anchor" href="#_4-5-fetch-js"><span>4.5 Fetch.js</span></a></h3><p>src\\ahooks\\useRequest\\src\\Fetch.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">class Fetch {</span>
<span class="line">+ constructor(serviceRef, options, subscribe) {</span>
<span class="line">    this.serviceRef = serviceRef;</span>
<span class="line">+   this.options = options;</span>
<span class="line">    this.subscribe = subscribe;</span>
<span class="line">    this.state = { loading: false, data: undefined, error: undefined };</span>
<span class="line">  }</span>
<span class="line">  setState = (s = {}) =&gt; {</span>
<span class="line">    this.state = { ...this.state, ...s };</span>
<span class="line">    this.subscribe();</span>
<span class="line">  }</span>
<span class="line">  runAsync = async () =&gt; {</span>
<span class="line">    this.setState({ loading: true });</span>
<span class="line">    try {</span>
<span class="line">      const res = await this.serviceRef.current();</span>
<span class="line">      this.setState({ loading: false, data: res, error: undefined });</span>
<span class="line">    } catch (error) {</span>
<span class="line">      this.setState({ loading: false, error });</span>
<span class="line">+     this.options.onError?.(error);</span>
<span class="line">+     throw error;</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">  run = () =&gt; {</span>
<span class="line">+   this.runAsync().catch(error =&gt; {</span>
<span class="line">+     if (!this.options.onError) {</span>
<span class="line">+       console.error(error);</span>
<span class="line">+     }</span>
<span class="line">+   });</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line">export default Fetch;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-传递参数" tabindex="-1"><a class="header-anchor" href="#_5-传递参数"><span>5.传递参数</span></a></h2><h3 id="_5-1-src-app-js" tabindex="-1"><a class="header-anchor" href="#_5-1-src-app-js"><span>5.1 src\\App.js</span></a></h3><p>src\\App.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import { useRequest } from &#39;./ahooks&#39;;</span>
<span class="line">import React from &#39;react&#39;;</span>
<span class="line"></span>
<span class="line">+function getName(xing) {</span>
<span class="line">  return new Promise((resolve, reject) =&gt; {</span>
<span class="line">    setTimeout(() =&gt; {</span>
<span class="line">+     resolve(xing + &#39;三&#39;);</span>
<span class="line">      //reject(new Error(&#39;获取用户名失败&#39;));</span>
<span class="line">    }, 1000);</span>
<span class="line">  });</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">function App() {</span>
<span class="line">  const { data, loading, error, run, runAsync } = useRequest(getName, {</span>
<span class="line">    manual: false,</span>
<span class="line">    defaultParams: [&#39;张&#39;]</span>
<span class="line">    /* onError(error) {</span>
<span class="line">      console.error(&#39;onError&#39;, error);</span>
<span class="line">    } */</span>
<span class="line">  });</span>
<span class="line">  return (</span>
<span class="line">    &lt;&gt;</span>
<span class="line">+     &lt;button disabled={loading} onClick={() =&gt; run(&#39;赵&#39;)}&gt;</span>
<span class="line">        {loading ? &#39;获取中......&#39; : &#39;run&#39;}</span>
<span class="line">      &lt;/button&gt;</span>
<span class="line">+     &lt;button disabled={loading} onClick={() =&gt; runAsync(&#39;钱&#39;)}&gt;</span>
<span class="line">        {loading ? &#39;获取中......&#39; : &#39;runAsync&#39;}</span>
<span class="line">      &lt;/button&gt;</span>
<span class="line">      {data &amp;&amp; &lt;div&gt;用户名: {data}&lt;/div&gt;}</span>
<span class="line">    &lt;/&gt;</span>
<span class="line">  )</span>
<span class="line">};</span>
<span class="line">export default App;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-2-userequestimplement-js" tabindex="-1"><a class="header-anchor" href="#_5-2-userequestimplement-js"><span>5.2 useRequestImplement.js</span></a></h3><p>src\\ahooks\\useRequest\\src\\useRequestImplement.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import useCreation from &#39;../../useCreation&#39;;</span>
<span class="line">import useLatest from &#39;../../useLatest&#39;;</span>
<span class="line">import useMount from &#39;../../useMount&#39;;</span>
<span class="line">import useUpdate from &#39;../../useUpdate&#39;;</span>
<span class="line">import Fetch from &#39;./Fetch&#39;;</span>
<span class="line">import useMemoizedFn from &#39;../../useMemoizedFn&#39;;</span>
<span class="line">function useRequestImplement(service, options = {}) {</span>
<span class="line">  const { manual = false, ...rest } = options;</span>
<span class="line">  const fetchOptions = { manual, ...rest };</span>
<span class="line">  const serviceRef = useLatest(service);</span>
<span class="line">  const update = useUpdate();</span>
<span class="line">  const fetchInstance = useCreation(() =&gt; {</span>
<span class="line">    return new Fetch(serviceRef, fetchOptions, update);</span>
<span class="line">  }, []);</span>
<span class="line">  useMount(() =&gt; {</span>
<span class="line">    if (!manual) {</span>
<span class="line">+     const params = fetchInstance.state.params || options.defaultParams || [];</span>
<span class="line">+     fetchInstance.run(...params);</span>
<span class="line">    }</span>
<span class="line">  });</span>
<span class="line">  return {</span>
<span class="line">    loading: fetchInstance.state.loading,</span>
<span class="line">    data: fetchInstance.state.data,</span>
<span class="line">    error: fetchInstance.state.error,</span>
<span class="line">    run: useMemoizedFn(fetchInstance.run.bind(fetchInstance)),</span>
<span class="line">    runAsync: useMemoizedFn(fetchInstance.runAsync.bind(fetchInstance))</span>
<span class="line">  };</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">export default useRequestImplement;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-3-fetch-js" tabindex="-1"><a class="header-anchor" href="#_5-3-fetch-js"><span>5.3 Fetch.js</span></a></h3><p>src\\ahooks\\useRequest\\src\\Fetch.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">class Fetch {</span>
<span class="line">  constructor(serviceRef, options, subscribe) {</span>
<span class="line">    this.serviceRef = serviceRef;</span>
<span class="line">    this.options = options;</span>
<span class="line">    this.subscribe = subscribe;</span>
<span class="line">+   this.state = { loading: false, data: undefined, error: undefined, params: undefined };</span>
<span class="line">  }</span>
<span class="line">  setState = (s = {}) =&gt; {</span>
<span class="line">    this.state = { ...this.state, ...s };</span>
<span class="line">    this.subscribe();</span>
<span class="line">  }</span>
<span class="line">+ runAsync = async (...params) =&gt; {</span>
<span class="line">+   this.setState({ loading: true, params });</span>
<span class="line">    try {</span>
<span class="line">+     const res = await this.serviceRef.current(...params);</span>
<span class="line">+     this.setState({ loading: false, data: res, error: undefined, params });</span>
<span class="line">    } catch (error) {</span>
<span class="line">+     this.setState({ loading: false, error, params });</span>
<span class="line">+     this.options.onError?.(error, params);</span>
<span class="line">      throw error;</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">+ run = (...params) =&gt; {</span>
<span class="line">+   this.runAsync(...params).catch(error =&gt; {</span>
<span class="line">      if (!this.options.onError) {</span>
<span class="line">        console.error(error);</span>
<span class="line">      }</span>
<span class="line">    });</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line">export default Fetch;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-生命周期" tabindex="-1"><a class="header-anchor" href="#_6-生命周期"><span>6.生命周期</span></a></h2><ul><li>useRequest 提供了以下几个生命周期配置项，供你在异步函数的不同阶段做一些处理 <ul><li><code>onBefore</code>：请求之前触发</li><li><code>onSuccess</code>：请求成功触发</li><li><code>onError</code>：请求失败触发</li><li><code>onFinally</code>：请求完成触发</li></ul></li></ul><h3 id="_6-1-src-app-js" tabindex="-1"><a class="header-anchor" href="#_6-1-src-app-js"><span>6.1 src\\App.js</span></a></h3><p>src\\App.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React, { useState } from &#39;react&#39;;</span>
<span class="line">import { useRequest } from &#39;./ahooks&#39;;</span>
<span class="line">+let success = true;</span>
<span class="line">function getName(userId) {</span>
<span class="line">  return new Promise((resolve, reject) =&gt; {</span>
<span class="line">    setTimeout(() =&gt; {</span>
<span class="line">+     if (success) {</span>
<span class="line">+       resolve(\`name\${userId}\`);</span>
<span class="line">+     } else {</span>
<span class="line">+       reject(new Error(&#39;获取用户名失败&#39;));</span>
<span class="line">+     }</span>
<span class="line">      success = !success;</span>
<span class="line">    }, 1000);</span>
<span class="line">  });</span>
<span class="line">}</span>
<span class="line">+const initialUserId = &#39;1&#39;;</span>
<span class="line">function App() {</span>
<span class="line">+ const [userId, setUserId] = useState(initialUserId);</span>
<span class="line">  const { data, loading, error, run, runAsync } = useRequest(getName, {</span>
<span class="line">    manual: false,</span>
<span class="line">+   defaultParams: [initialUserId],</span>
<span class="line">+   onBefore: (params) =&gt; {</span>
<span class="line">+     console.info(\`开始请求: \${params[0]}\`);</span>
<span class="line">+   },</span>
<span class="line">+   onSuccess: (result, params) =&gt; {</span>
<span class="line">+     console.info(\`请求成功:获取\${params[0]}对应的用户名成功:\${result}&quot;!\`);</span>
<span class="line">+   },</span>
<span class="line">+   onError: (error) =&gt; {</span>
<span class="line">+     console.error(\`请求失败:\${error.message}&quot;!\`);</span>
<span class="line">+   },</span>
<span class="line">+   onFinally: (params, result, error) =&gt; {</span>
<span class="line">+     console.info(\`请求完成\`);</span>
<span class="line">+   },</span>
<span class="line">  });</span>
<span class="line">  return (</span>
<span class="line">    &lt;&gt;</span>
<span class="line">+     &lt;input</span>
<span class="line">+       onChange={(event) =&gt; setUserId(event.target.value)}</span>
<span class="line">+       value={userId}</span>
<span class="line">+       placeholder=&quot;请输入用户ID&quot;</span>
<span class="line">+     /&gt;</span>
<span class="line">+     &lt;button disabled={loading} onClick={() =&gt; run(userId)}&gt;</span>
<span class="line">        {loading ? &#39;获取中......&#39; : &#39;run&#39;}</span>
<span class="line">      &lt;/button&gt;</span>
<span class="line">      {data &amp;&amp; &lt;div&gt;用户名: {data}&lt;/div&gt;}</span>
<span class="line">    &lt;/&gt;</span>
<span class="line">  )</span>
<span class="line">};</span>
<span class="line">export default App;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-2-fetch-js" tabindex="-1"><a class="header-anchor" href="#_6-2-fetch-js"><span>6.2 Fetch.js</span></a></h3><p>src\\ahooks\\useRequest\\src\\Fetch.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">class Fetch {</span>
<span class="line">  constructor(serviceRef, options, subscribe) {</span>
<span class="line">    this.serviceRef = serviceRef;</span>
<span class="line">    this.options = options;</span>
<span class="line">    this.subscribe = subscribe;</span>
<span class="line">    this.state = { loading: false, data: undefined, error: undefined, params: undefined };</span>
<span class="line">  }</span>
<span class="line">  setState = (s = {}) =&gt; {</span>
<span class="line">    this.state = { ...this.state, ...s };</span>
<span class="line">    this.subscribe();</span>
<span class="line">  }</span>
<span class="line">  runAsync = async (...params) =&gt; {</span>
<span class="line">    this.setState({ loading: true, params });</span>
<span class="line">+   this.options.onBefore?.(params);</span>
<span class="line">    try {</span>
<span class="line">      const res = await this.serviceRef.current(...params);</span>
<span class="line">      this.setState({ loading: false, data: res, error: undefined, params });</span>
<span class="line">+     this.options.onSuccess?.(res, params);</span>
<span class="line">+     this.options.onFinally?.(params, res, undefined);</span>
<span class="line">    } catch (error) {</span>
<span class="line">      this.setState({ loading: false, error, params });</span>
<span class="line">+     this.options.onError?.(error, params);</span>
<span class="line">+     this.options.onFinally?.(params, undefined, error);</span>
<span class="line">      throw error;</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">  run = (...params) =&gt; {</span>
<span class="line">    this.runAsync(...params).catch(error =&gt; {</span>
<span class="line">      if (!this.options.onError) {</span>
<span class="line">        console.error(error);</span>
<span class="line">      }</span>
<span class="line">    });</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line">export default Fetch;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-刷新-重复上一次请求" tabindex="-1"><a class="header-anchor" href="#_7-刷新-重复上一次请求"><span>7.刷新(重复上一次请求)</span></a></h2><ul><li><code>useRequest</code> 提供了 <code>refresh</code> 和 <code>refreshAsync</code> 方法，使我们可以使用上一次的参数，重新发起请求</li></ul><h3 id="_7-1-src-app-js" tabindex="-1"><a class="header-anchor" href="#_7-1-src-app-js"><span>7.1 src\\App.js</span></a></h3><p>src\\App.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React, { useState } from &#39;react&#39;;</span>
<span class="line">import { useRequest } from &#39;./ahooks&#39;;</span>
<span class="line">let success = true;</span>
<span class="line">function getName(userId) {</span>
<span class="line">  return new Promise((resolve, reject) =&gt; {</span>
<span class="line">    setTimeout(() =&gt; {</span>
<span class="line">      if (success) {</span>
<span class="line">        resolve(\`name\${userId}\`);</span>
<span class="line">      } else {</span>
<span class="line">        reject(new Error(&#39;获取用户名失败&#39;));</span>
<span class="line">      }</span>
<span class="line">      success = !success;</span>
<span class="line">    }, 1000);</span>
<span class="line">  });</span>
<span class="line">}</span>
<span class="line">const initialUserId = &#39;1&#39;;</span>
<span class="line">function App() {</span>
<span class="line">  const [userId, setUserId] = useState(initialUserId);</span>
<span class="line">+ const { data, loading, error, run, runAsync, refresh, refreshAsync } = useRequest(getName, {</span>
<span class="line">    manual: false,</span>
<span class="line">    defaultParams: [initialUserId],</span>
<span class="line">    onBefore: (params) =&gt; {</span>
<span class="line">      console.info(\`开始请求: \${params[0]}\`);</span>
<span class="line">    },</span>
<span class="line">    onSuccess: (result, params) =&gt; {</span>
<span class="line">      console.info(\`请求成功:获取\${params[0]}对应的用户名成功:\${result}&quot;!\`);</span>
<span class="line">    },</span>
<span class="line">    onError: (error) =&gt; {</span>
<span class="line">      console.error(\`请求失败:\${error.message}&quot;!\`);</span>
<span class="line">    },</span>
<span class="line">    onFinally: (params, result, error) =&gt; {</span>
<span class="line">      console.info(\`请求完成\`);</span>
<span class="line">    },</span>
<span class="line">  });</span>
<span class="line">  return (</span>
<span class="line">    &lt;&gt;</span>
<span class="line">      &lt;input</span>
<span class="line">        onChange={(event) =&gt; setUserId(event.target.value)}</span>
<span class="line">        value={userId}</span>
<span class="line">        placeholder=&quot;请输入用户ID&quot;</span>
<span class="line">      /&gt;</span>
<span class="line">      &lt;button disabled={loading} onClick={() =&gt; run(userId)}&gt;</span>
<span class="line">        {loading ? &#39;获取中......&#39; : &#39;run&#39;}</span>
<span class="line">      &lt;/button&gt;</span>
<span class="line">+     &lt;button onClick={refresh} &gt;</span>
<span class="line">+       refresh</span>
<span class="line">+     &lt;/button&gt;</span>
<span class="line">+     &lt;button onClick={refreshAsync} &gt;</span>
<span class="line">+       refreshAsync</span>
<span class="line">+     &lt;/button&gt;</span>
<span class="line">      {data &amp;&amp; &lt;div&gt;用户名: {data}&lt;/div&gt;}</span>
<span class="line">    &lt;/&gt;</span>
<span class="line">  )</span>
<span class="line">};</span>
<span class="line">export default App;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-2-userequestimplement-js" tabindex="-1"><a class="header-anchor" href="#_7-2-userequestimplement-js"><span>7.2 useRequestImplement.js</span></a></h3><p>src\\ahooks\\useRequest\\src\\useRequestImplement.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import useCreation from &#39;../../useCreation&#39;;</span>
<span class="line">import useLatest from &#39;../../useLatest&#39;;</span>
<span class="line">import useMount from &#39;../../useMount&#39;;</span>
<span class="line">import useUpdate from &#39;../../useUpdate&#39;;</span>
<span class="line">import Fetch from &#39;./Fetch&#39;;</span>
<span class="line">import useMemoizedFn from &#39;../../useMemoizedFn&#39;;</span>
<span class="line">function useRequestImplement(service, options = {}) {</span>
<span class="line">  const { manual = false, ...rest } = options;</span>
<span class="line">  const fetchOptions = { manual, ...rest };</span>
<span class="line">  const serviceRef = useLatest(service);</span>
<span class="line">  const update = useUpdate();</span>
<span class="line">  const fetchInstance = useCreation(() =&gt; {</span>
<span class="line">    return new Fetch(serviceRef, fetchOptions, update);</span>
<span class="line">  }, []);</span>
<span class="line">  useMount(() =&gt; {</span>
<span class="line">    if (!manual) {</span>
<span class="line">      const params = fetchInstance.state.params || options.defaultParams || [];</span>
<span class="line">      fetchInstance.run(...params);</span>
<span class="line">    }</span>
<span class="line">  });</span>
<span class="line">  return {</span>
<span class="line">    loading: fetchInstance.state.loading,</span>
<span class="line">    data: fetchInstance.state.data,</span>
<span class="line">    error: fetchInstance.state.error,</span>
<span class="line">    run: useMemoizedFn(fetchInstance.run.bind(fetchInstance)),</span>
<span class="line">    runAsync: useMemoizedFn(fetchInstance.runAsync.bind(fetchInstance)),</span>
<span class="line">+   refresh: useMemoizedFn(fetchInstance.refresh.bind(fetchInstance)),</span>
<span class="line">+   refreshAsync: useMemoizedFn(fetchInstance.refreshAsync.bind(fetchInstance))</span>
<span class="line">  };</span>
<span class="line">}</span>
<span class="line">export default useRequestImplement;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-3-fetch-js" tabindex="-1"><a class="header-anchor" href="#_7-3-fetch-js"><span>7.3 Fetch.js</span></a></h3><p>src\\ahooks\\useRequest\\src\\Fetch.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">class Fetch {</span>
<span class="line">  constructor(serviceRef, options, subscribe) {</span>
<span class="line">    this.serviceRef = serviceRef;</span>
<span class="line">    this.options = options;</span>
<span class="line">    this.subscribe = subscribe;</span>
<span class="line">    this.state = { loading: false, data: undefined, error: undefined, params: undefined };</span>
<span class="line">  }</span>
<span class="line">  setState = (s = {}) =&gt; {</span>
<span class="line">    this.state = { ...this.state, ...s };</span>
<span class="line">    this.subscribe();</span>
<span class="line">  }</span>
<span class="line">  runAsync = async (...params) =&gt; {</span>
<span class="line">    this.setState({ loading: true, params });</span>
<span class="line">    this.options.onBefore?.(params);</span>
<span class="line">    try {</span>
<span class="line">      const res = await this.serviceRef.current(...params);</span>
<span class="line">      this.setState({ loading: false, data: res, error: undefined, params });</span>
<span class="line">      this.options.onSuccess?.(res, params);</span>
<span class="line">      this.options.onFinally?.(params, res, undefined);</span>
<span class="line">    } catch (error) {</span>
<span class="line">      this.setState({ loading: false, error, params });</span>
<span class="line">      this.options.onError?.(error, params);</span>
<span class="line">      this.options.onFinally?.(params, undefined, error);</span>
<span class="line">      throw error;</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">  run = (...params) =&gt; {</span>
<span class="line">    this.runAsync(...params).catch(error =&gt; {</span>
<span class="line">      if (!this.options.onError) {</span>
<span class="line">        console.error(error);</span>
<span class="line">      }</span>
<span class="line">    });</span>
<span class="line">  }</span>
<span class="line">+ refresh() {</span>
<span class="line">+   this.run(...(this.state.params || []));</span>
<span class="line">+ }</span>
<span class="line">+ refreshAsync() {</span>
<span class="line">+   return this.runAsync(...(this.state.params || []));</span>
<span class="line">+ }</span>
<span class="line">}</span>
<span class="line">export default Fetch;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-立即变更数据" tabindex="-1"><a class="header-anchor" href="#_8-立即变更数据"><span>8.立即变更数据</span></a></h2><ul><li><code>useRequest</code> 提供了<code>mutate</code>, 支持立即修改<code>useRequest</code>返回的<code>data</code>参数</li><li><code>mutate</code>的用法与<code>React.setState</code>一致，支持<code>mutate(newData)</code>和<code>mutate((oldData) =&gt; newData)</code>两种写法</li></ul><h3 id="_8-1-app-js" tabindex="-1"><a class="header-anchor" href="#_8-1-app-js"><span>8.1 App.js</span></a></h3><p>src\\App.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React, { useState, useRef } from &#39;react&#39;;</span>
<span class="line">import { useRequest } from &#39;./ahooks&#39;;</span>
<span class="line">+let success = true;</span>
<span class="line">+function getName() {</span>
<span class="line">+  return new Promise((resolve, reject) =&gt; {</span>
<span class="line">+    setTimeout(() =&gt; {</span>
<span class="line">+      if (success) {</span>
<span class="line">+        resolve(\`zhufeng\`);</span>
<span class="line">+      } else {</span>
<span class="line">+        reject(new Error(&#39;获取用户名失败&#39;));</span>
<span class="line">+      }</span>
<span class="line">+      success = !success;</span>
<span class="line">+    }, 1000);</span>
<span class="line">+  });</span>
<span class="line">+}</span>
<span class="line">+let updateSuccess = true;</span>
<span class="line">+function updateName(username) {</span>
<span class="line">+  return new Promise((resolve, reject) =&gt; {</span>
<span class="line">+    setTimeout(() =&gt; {</span>
<span class="line">+      if (updateSuccess) {</span>
<span class="line">+        resolve(username);</span>
<span class="line">+      } else {</span>
<span class="line">+        reject(new Error(\`修改用户名失败\`));</span>
<span class="line">+      }</span>
<span class="line">+      updateSuccess = !updateSuccess;</span>
<span class="line">+    }, 1000);</span>
<span class="line">+  });</span>
<span class="line">+}</span>
<span class="line">function App() {</span>
<span class="line">+ const lastRef = useRef();</span>
<span class="line">+ const [value, setValue] = useState(&quot;&quot;);</span>
<span class="line">+ const { data: name, mutate } = useRequest(getName);</span>
<span class="line">+ const { run, loading } = useRequest(updateName, {</span>
<span class="line">+   manual: true,</span>
<span class="line">+   onSuccess: (result, params) =&gt; {</span>
<span class="line">+     setValue(&quot;&quot;);</span>
<span class="line">+     console.log(\`用户名成功变更为 &quot;\${params[0]}&quot; !\`);</span>
<span class="line">+   },</span>
<span class="line">+   onError: (error, params) =&gt; {</span>
<span class="line">+     console.error(error.message);</span>
<span class="line">+     mutate(lastRef.current);</span>
<span class="line">+   }</span>
<span class="line">+ });</span>
<span class="line">  return (</span>
<span class="line">    &lt;&gt;</span>
<span class="line">+     {name &amp;&amp; &lt;div&gt;用户名: {name}&lt;/div&gt;}</span>
<span class="line">+     &lt;input</span>
<span class="line">+       onChange={(event) =&gt; setValue(event.target.value)}</span>
<span class="line">+       value={value}</span>
<span class="line">+       placeholder=&quot;请输入用户名&quot;</span>
<span class="line">+     /&gt;</span>
<span class="line">+     &lt;button onClick={() =&gt; {</span>
<span class="line">+       lastRef.current = name;</span>
<span class="line">+       mutate(value);</span>
<span class="line">+       run(value);</span>
<span class="line">+     }} type=&quot;button&quot;&gt;</span>
<span class="line">+       {loading ? &quot;更新中.......&quot; : &#39;更新&#39;}</span>
<span class="line">+     &lt;/button&gt;</span>
<span class="line">    &lt;/&gt;</span>
<span class="line">  )</span>
<span class="line">};</span>
<span class="line">export default App;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-2-userequestimplement-js" tabindex="-1"><a class="header-anchor" href="#_8-2-userequestimplement-js"><span>8.2 useRequestImplement.js</span></a></h3><p>src\\ahooks\\useRequest\\src\\useRequestImplement.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import useCreation from &#39;../../useCreation&#39;;</span>
<span class="line">import useLatest from &#39;../../useLatest&#39;;</span>
<span class="line">import useMount from &#39;../../useMount&#39;;</span>
<span class="line">import useUpdate from &#39;../../useUpdate&#39;;</span>
<span class="line">import Fetch from &#39;./Fetch&#39;;</span>
<span class="line">import useMemoizedFn from &#39;../../useMemoizedFn&#39;;</span>
<span class="line">function useRequestImplement(service, options = {}) {</span>
<span class="line">  const { manual = false, ...rest } = options;</span>
<span class="line">  const fetchOptions = { manual, ...rest };</span>
<span class="line">  const serviceRef = useLatest(service);</span>
<span class="line">  const update = useUpdate();</span>
<span class="line">  const fetchInstance = useCreation(() =&gt; {</span>
<span class="line">    return new Fetch(serviceRef, fetchOptions, update);</span>
<span class="line">  }, []);</span>
<span class="line">  useMount(() =&gt; {</span>
<span class="line">    if (!manual) {</span>
<span class="line">      const params = fetchInstance.state.params || options.defaultParams || [];</span>
<span class="line">      fetchInstance.run(...params);</span>
<span class="line">    }</span>
<span class="line">  });</span>
<span class="line">  return {</span>
<span class="line">    loading: fetchInstance.state.loading,</span>
<span class="line">    data: fetchInstance.state.data,</span>
<span class="line">    error: fetchInstance.state.error,</span>
<span class="line">    run: useMemoizedFn(fetchInstance.run.bind(fetchInstance)),</span>
<span class="line">    runAsync: useMemoizedFn(fetchInstance.runAsync.bind(fetchInstance)),</span>
<span class="line">    refresh: useMemoizedFn(fetchInstance.refresh.bind(fetchInstance)),</span>
<span class="line">    refreshAsync: useMemoizedFn(fetchInstance.refreshAsync.bind(fetchInstance)),</span>
<span class="line">+   mutate: useMemoizedFn(fetchInstance.mutate.bind(fetchInstance))</span>
<span class="line">  };</span>
<span class="line">}</span>
<span class="line">export default useRequestImplement;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-3-fetch-js" tabindex="-1"><a class="header-anchor" href="#_8-3-fetch-js"><span>8.3 Fetch.js</span></a></h3><p>src\\ahooks\\useRequest\\src\\Fetch.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import { isFunction } from &#39;../../utils&#39;;</span>
<span class="line">class Fetch {</span>
<span class="line">  constructor(serviceRef, options, subscribe) {</span>
<span class="line">    this.serviceRef = serviceRef;</span>
<span class="line">    this.options = options;</span>
<span class="line">    this.subscribe = subscribe;</span>
<span class="line">    this.state = { loading: false, data: undefined, error: undefined, params: undefined };</span>
<span class="line">  }</span>
<span class="line">  setState = (s = {}) =&gt; {</span>
<span class="line">    this.state = { ...this.state, ...s };</span>
<span class="line">    this.subscribe();</span>
<span class="line">  }</span>
<span class="line">  runAsync = async (...params) =&gt; {</span>
<span class="line">    this.setState({ loading: true, params });</span>
<span class="line">    this.options.onBefore?.(params);</span>
<span class="line">    try {</span>
<span class="line">      const res = await this.serviceRef.current(...params);</span>
<span class="line">      this.setState({ loading: false, data: res, error: undefined, params });</span>
<span class="line">      this.options.onSuccess?.(res, params);</span>
<span class="line">      this.options.onFinally?.(params, res, undefined);</span>
<span class="line">    } catch (error) {</span>
<span class="line">      this.setState({ loading: false, error, params });</span>
<span class="line">      this.options.onError?.(error, params);</span>
<span class="line">      this.options.onFinally?.(params, undefined, error);</span>
<span class="line">      throw error;</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">  run = (...params) =&gt; {</span>
<span class="line">    this.runAsync(...params).catch(error =&gt; {</span>
<span class="line">      if (!this.options.onError) {</span>
<span class="line">        console.error(error);</span>
<span class="line">      }</span>
<span class="line">    });</span>
<span class="line">  }</span>
<span class="line">  refresh() {</span>
<span class="line">    this.run(...(this.state.params || []));</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  refreshAsync() {</span>
<span class="line">    return this.runAsync(...(this.state.params || []));</span>
<span class="line">  }</span>
<span class="line">+  mutate(data) {</span>
<span class="line">+    let targetData;</span>
<span class="line">+    if (isFunction(data)) {</span>
<span class="line">+      targetData = data(this.state.data);</span>
<span class="line">+    } else {</span>
<span class="line">+      targetData = data;</span>
<span class="line">+    }</span>
<span class="line">+    this.setState({</span>
<span class="line">+      data: targetData</span>
<span class="line">+    });</span>
<span class="line">+  }</span>
<span class="line">}</span>
<span class="line">export default Fetch;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-4-utils-index-js" tabindex="-1"><a class="header-anchor" href="#_8-4-utils-index-js"><span>8.4 utils\\index.js</span></a></h3><p>src\\ahooks\\utils\\index.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">isFunction</span> <span class="token operator">=</span> <span class="token parameter">value</span> <span class="token operator">=&gt;</span> <span class="token keyword">typeof</span> value <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="_9-取消请求" tabindex="-1"><a class="header-anchor" href="#_9-取消请求"><span>9.取消请求</span></a></h2><ul><li>useRequest 提供了 <code>cancel</code> 函数，可以取消当前正在进行的请求。同时 <code>useRequest</code> 会在以下时机自动取消当前请求： <ul><li>组件卸载时，取消正在进行的请求</li><li>竞态取消，当上一次请求还没返回时，又发起了下一次请求，则会取消上一次请求</li></ul></li></ul><h3 id="_9-1-app-js" tabindex="-1"><a class="header-anchor" href="#_9-1-app-js"><span>9.1 App.js</span></a></h3><p>src\\App.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React, { useState, useRef } from &#39;react&#39;;</span>
<span class="line">import { useRequest } from &#39;./ahooks&#39;;</span>
<span class="line">let success = true;</span>
<span class="line">function getName() {</span>
<span class="line">  return new Promise((resolve, reject) =&gt; {</span>
<span class="line">    setTimeout(() =&gt; {</span>
<span class="line">      if (success) {</span>
<span class="line">        resolve(\`zhufeng\`);</span>
<span class="line">      } else {</span>
<span class="line">        reject(new Error(&#39;获取用户名失败&#39;));</span>
<span class="line">      }</span>
<span class="line">      success = !success;</span>
<span class="line">    }, 1000);</span>
<span class="line">  });</span>
<span class="line">}</span>
<span class="line">let updateSuccess = true;</span>
<span class="line">function updateName(username) {</span>
<span class="line">  return new Promise((resolve, reject) =&gt; {</span>
<span class="line">    setTimeout(() =&gt; {</span>
<span class="line">      if (updateSuccess) {</span>
<span class="line">        resolve(username);</span>
<span class="line">      } else {</span>
<span class="line">        reject(new Error(\`修改用户名失败\`));</span>
<span class="line">      }</span>
<span class="line">      updateSuccess = !updateSuccess;</span>
<span class="line">+   }, 3000);</span>
<span class="line">  });</span>
<span class="line">}</span>
<span class="line">function App() {</span>
<span class="line">  const lastRef = useRef();</span>
<span class="line">  const [value, setValue] = useState(&quot;&quot;);</span>
<span class="line">  const { data: name, mutate } = useRequest(getName);</span>
<span class="line">+ const { run, loading, cancel } = useRequest(updateName, {</span>
<span class="line">    manual: true,</span>
<span class="line">    onSuccess: (result, params) =&gt; {</span>
<span class="line">      setValue(&quot;&quot;);</span>
<span class="line">      console.log(\`用户名成功变更为 &quot;\${params[0]}&quot; !\`);</span>
<span class="line">    },</span>
<span class="line">    onError: (error, params) =&gt; {</span>
<span class="line">      console.error(error.message);</span>
<span class="line">      mutate(lastRef.current);</span>
<span class="line">    },</span>
<span class="line">+   onCancel: () =&gt; {</span>
<span class="line">+     mutate(lastRef.current);</span>
<span class="line">+   }</span>
<span class="line">  });</span>
<span class="line">  return (</span>
<span class="line">    &lt;&gt;</span>
<span class="line">      {name &amp;&amp; &lt;div&gt;用户名: {name}&lt;/div&gt;}</span>
<span class="line">      &lt;input</span>
<span class="line">        onChange={(event) =&gt; setValue(event.target.value)}</span>
<span class="line">        value={value}</span>
<span class="line">        placeholder=&quot;请输入用户名&quot;</span>
<span class="line">      /&gt;</span>
<span class="line">      &lt;button onClick={() =&gt; {</span>
<span class="line">        lastRef.current = name;</span>
<span class="line">        mutate(value);</span>
<span class="line">        run(value);</span>
<span class="line">      }} type=&quot;button&quot;&gt;</span>
<span class="line">        {loading ? &quot;更新中.......&quot; : &#39;更新&#39;}</span>
<span class="line">      &lt;/button&gt;</span>
<span class="line">+     &lt;button type=&quot;button&quot; onClick={cancel}&gt;</span>
<span class="line">+       取消</span>
<span class="line">+     &lt;/button&gt;</span>
<span class="line">    &lt;/&gt;</span>
<span class="line">  )</span>
<span class="line">};</span>
<span class="line">export default App;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-2-userequestimplement-js" tabindex="-1"><a class="header-anchor" href="#_9-2-userequestimplement-js"><span>9.2 useRequestImplement.js</span></a></h3><p>src\\ahooks\\useRequest\\src\\useRequestImplement.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import useCreation from &#39;../../useCreation&#39;;</span>
<span class="line">import useLatest from &#39;../../useLatest&#39;;</span>
<span class="line">import useMount from &#39;../../useMount&#39;;</span>
<span class="line">import useUpdate from &#39;../../useUpdate&#39;;</span>
<span class="line">import Fetch from &#39;./Fetch&#39;;</span>
<span class="line">import useMemoizedFn from &#39;../../useMemoizedFn&#39;;</span>
<span class="line">+import useUnmount from &#39;../../useUnmount&#39;;</span>
<span class="line">function useRequestImplement(service, options = {}) {</span>
<span class="line">  const { manual = false, ...rest } = options;</span>
<span class="line">  const fetchOptions = { manual, ...rest };</span>
<span class="line">  const serviceRef = useLatest(service);</span>
<span class="line">  const update = useUpdate();</span>
<span class="line">  const fetchInstance = useCreation(() =&gt; {</span>
<span class="line">    return new Fetch(serviceRef, fetchOptions, update);</span>
<span class="line">  }, []);</span>
<span class="line">  useMount(() =&gt; {</span>
<span class="line">    if (!manual) {</span>
<span class="line">      const params = fetchInstance.state.params || options.defaultParams || [];</span>
<span class="line">      fetchInstance.run(...params);</span>
<span class="line">    }</span>
<span class="line">  });</span>
<span class="line">+ useUnmount(() =&gt; {</span>
<span class="line">+   fetchInstance.cancel();</span>
<span class="line">+ });</span>
<span class="line">  return {</span>
<span class="line">    loading: fetchInstance.state.loading,</span>
<span class="line">    data: fetchInstance.state.data,</span>
<span class="line">    error: fetchInstance.state.error,</span>
<span class="line">    run: useMemoizedFn(fetchInstance.run.bind(fetchInstance)),</span>
<span class="line">    runAsync: useMemoizedFn(fetchInstance.runAsync.bind(fetchInstance)),</span>
<span class="line">    refresh: useMemoizedFn(fetchInstance.refresh.bind(fetchInstance)),</span>
<span class="line">    refreshAsync: useMemoizedFn(fetchInstance.refreshAsync.bind(fetchInstance)),</span>
<span class="line">    mutate: useMemoizedFn(fetchInstance.mutate.bind(fetchInstance)),</span>
<span class="line">+   cancel: useMemoizedFn(fetchInstance.cancel.bind(fetchInstance))</span>
<span class="line">  };</span>
<span class="line">}</span>
<span class="line">export default useRequestImplement;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-3-fetch-js" tabindex="-1"><a class="header-anchor" href="#_9-3-fetch-js"><span>9.3 Fetch.js</span></a></h3><p>src\\ahooks\\useRequest\\src\\Fetch.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import { isFunction } from &#39;../../utils&#39;;</span>
<span class="line">class Fetch {</span>
<span class="line">+ count = 0;</span>
<span class="line">  constructor(serviceRef, options, subscribe) {</span>
<span class="line">    this.serviceRef = serviceRef;</span>
<span class="line">    this.options = options;</span>
<span class="line">    this.subscribe = subscribe;</span>
<span class="line">    this.state = { loading: false, data: undefined, error: undefined, params: undefined };</span>
<span class="line">  }</span>
<span class="line">  setState = (s = {}) =&gt; {</span>
<span class="line">    this.state = { ...this.state, ...s };</span>
<span class="line">    this.subscribe();</span>
<span class="line">  }</span>
<span class="line">  runAsync = async (...params) =&gt; {</span>
<span class="line">+   this.count += 1;</span>
<span class="line">+   const currentCount = this.count;</span>
<span class="line">    this.setState({ loading: true, params });</span>
<span class="line">    this.options.onBefore?.(params);</span>
<span class="line">    try {</span>
<span class="line">      const res = await this.serviceRef.current(...params);</span>
<span class="line">+     if (currentCount !== this.count) {</span>
<span class="line">+       return new Promise(() =&gt; { });</span>
<span class="line">+     }</span>
<span class="line">      this.setState({ loading: false, data: res, error: undefined, params });</span>
<span class="line">      this.options.onSuccess?.(res, params);</span>
<span class="line">      this.options.onFinally?.(params, res, undefined);</span>
<span class="line">    } catch (error) {</span>
<span class="line">+     if (currentCount !== this.count) {</span>
<span class="line">+       return new Promise(() =&gt; { });</span>
<span class="line">+     }</span>
<span class="line">      this.setState({ loading: false, error, params });</span>
<span class="line">      this.options.onError?.(error, params);</span>
<span class="line">      this.options.onFinally?.(params, undefined, error);</span>
<span class="line">      throw error;</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">  run = (...params) =&gt; {</span>
<span class="line">    this.runAsync(...params).catch(error =&gt; {</span>
<span class="line">      if (!this.options.onError) {</span>
<span class="line">        console.error(error);</span>
<span class="line">      }</span>
<span class="line">    });</span>
<span class="line">  }</span>
<span class="line">  refresh() {</span>
<span class="line">    this.run(...(this.state.params || []));</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  refreshAsync() {</span>
<span class="line">    return this.runAsync(...(this.state.params || []));</span>
<span class="line">  }</span>
<span class="line">  mutate(data) {</span>
<span class="line">    let targetData;</span>
<span class="line"></span>
<span class="line">    if (isFunction(data)) {</span>
<span class="line">      targetData = data(this.state.data);</span>
<span class="line">    } else {</span>
<span class="line">      targetData = data;</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    this.setState({</span>
<span class="line">      data: targetData</span>
<span class="line">    });</span>
<span class="line">  }</span>
<span class="line">+ cancel() {</span>
<span class="line">+   this.count += 1;</span>
<span class="line">+   this.setState({</span>
<span class="line">+     loading: false</span>
<span class="line">+   });</span>
<span class="line">+   this.options.onCancel?.();</span>
<span class="line">+ }</span>
<span class="line">}</span>
<span class="line">export default Fetch;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-4-useunmount-index-js" tabindex="-1"><a class="header-anchor" href="#_9-4-useunmount-index-js"><span>9.4 useUnmount\\index.js</span></a></h3><p>src\\ahooks\\useUnmount\\index.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useEffect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> useLatest <span class="token keyword">from</span> <span class="token string">&#39;../useLatest&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">useUnmount</span> <span class="token operator">=</span> <span class="token parameter">fn</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> fnRef <span class="token operator">=</span> <span class="token function">useLatest</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> fnRef<span class="token punctuation">.</span><span class="token function">current</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> useUnmount<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_10-插件系统" tabindex="-1"><a class="header-anchor" href="#_10-插件系统"><span>10.插件系统</span></a></h2><ul><li>useRequest通过插件式组织代码，核心代码极其简单，所有高级功能均是通过插件实现</li><li>在请求过程中会触发各种各样的事件，可以为这些事件编写钩子函数，而插件就是钩子函数的集合</li></ul><table><thead><tr><th style="text-align:left;">钩子</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">onBefore</td><td style="text-align:left;">请求前</td></tr><tr><td style="text-align:left;">onRequest</td><td style="text-align:left;">请求中</td></tr><tr><td style="text-align:left;">onSuccess</td><td style="text-align:left;">请求成功</td></tr><tr><td style="text-align:left;">onError</td><td style="text-align:left;">请求失败</td></tr><tr><td style="text-align:left;">onFinally</td><td style="text-align:left;">请求结束</td></tr><tr><td style="text-align:left;">onCancel</td><td style="text-align:left;">请求取消</td></tr><tr><td style="text-align:left;">onMutate</td><td style="text-align:left;">修改结果数据</td></tr><tr><td style="text-align:left;">onInit</td><td style="text-align:left;">初始化状态</td></tr></tbody></table><h3 id="_10-1-app-js" tabindex="-1"><a class="header-anchor" href="#_10-1-app-js"><span>10.1 App.js</span></a></h3><p>src\\App.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React, { useState, useRef } from &#39;react&#39;;</span>
<span class="line">import { useRequest } from &#39;./ahooks&#39;;</span>
<span class="line">let success = true;</span>
<span class="line">function getName() {</span>
<span class="line">  return new Promise((resolve, reject) =&gt; {</span>
<span class="line">    setTimeout(() =&gt; {</span>
<span class="line">      if (success) {</span>
<span class="line">        resolve(\`zhufeng\`);</span>
<span class="line">      } else {</span>
<span class="line">        reject(new Error(&#39;获取用户名失败&#39;));</span>
<span class="line">      }</span>
<span class="line">      success = !success;</span>
<span class="line">    }, 1000);</span>
<span class="line">  });</span>
<span class="line">}</span>
<span class="line">let updateSuccess = true;</span>
<span class="line">function updateName(username) {</span>
<span class="line">  return new Promise((resolve, reject) =&gt; {</span>
<span class="line">    setTimeout(() =&gt; {</span>
<span class="line">      if (updateSuccess) {</span>
<span class="line">        resolve(username);</span>
<span class="line">      } else {</span>
<span class="line">        reject(new Error(\`修改用户名失败\`));</span>
<span class="line">      }</span>
<span class="line">      updateSuccess = !updateSuccess;</span>
<span class="line">    }, 300);</span>
<span class="line">  });</span>
<span class="line">}</span>
<span class="line">function App() {</span>
<span class="line">  const lastRef = useRef();</span>
<span class="line">  const [value, setValue] = useState(&quot;&quot;);</span>
<span class="line">+ const { data: name, mutate } = useRequest(getName, { name: &#39;getName&#39; });</span>
<span class="line">  const { run, loading, cancel } = useRequest(updateName, {</span>
<span class="line">    manual: true,</span>
<span class="line">+   name: &#39;updateName&#39;,</span>
<span class="line">    onSuccess: (result, params) =&gt; {</span>
<span class="line">      setValue(&quot;&quot;);</span>
<span class="line">      console.log(\`用户名成功变更为 &quot;\${params[0]}&quot; !\`);</span>
<span class="line">    },</span>
<span class="line">    onError: (error, params) =&gt; {</span>
<span class="line">      console.error(error.message);</span>
<span class="line">      mutate(lastRef.current);</span>
<span class="line">    },</span>
<span class="line">    onCancel: () =&gt; {</span>
<span class="line">      mutate(lastRef.current);</span>
<span class="line">    }</span>
<span class="line">  });</span>
<span class="line">  return (</span>
<span class="line">    &lt;&gt;</span>
<span class="line">      {name &amp;&amp; &lt;div&gt;用户名: {name}&lt;/div&gt;}</span>
<span class="line">      &lt;input</span>
<span class="line">        onChange={(event) =&gt; setValue(event.target.value)}</span>
<span class="line">        value={value}</span>
<span class="line">        placeholder=&quot;请输入用户名&quot;</span>
<span class="line">      /&gt;</span>
<span class="line">      &lt;button onClick={() =&gt; {</span>
<span class="line">        lastRef.current = name;</span>
<span class="line">        mutate(value);</span>
<span class="line">        run(value);</span>
<span class="line">      }} type=&quot;button&quot;&gt;</span>
<span class="line">        {loading ? &quot;更新中.......&quot; : &#39;更新&#39;}</span>
<span class="line">      &lt;/button&gt;</span>
<span class="line">      &lt;button type=&quot;button&quot; onClick={cancel}&gt;</span>
<span class="line">        取消</span>
<span class="line">      &lt;/button&gt;</span>
<span class="line">    &lt;/&gt;</span>
<span class="line">  )</span>
<span class="line">};</span>
<span class="line">export default App;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10-2-userequest-js" tabindex="-1"><a class="header-anchor" href="#_10-2-userequest-js"><span>10.2 useRequest.js</span></a></h3><p>src\\ahooks\\useRequest\\src\\useRequest.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import useRequestImplement from &#39;./useRequestImplement&#39;;</span>
<span class="line">+import useLoggerPlugin from &#39;./plugins/useLoggerPlugin&#39;;</span>
<span class="line">+function useRequest(service, options = {}, plugins) {</span>
<span class="line">+ return useRequestImplement(service, options, [...(plugins || []), useLoggerPlugin]);</span>
<span class="line">}</span>
<span class="line">export default useRequest;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10-3-userequestimplement-js" tabindex="-1"><a class="header-anchor" href="#_10-3-userequestimplement-js"><span>10.3 useRequestImplement.js</span></a></h3><p>src\\ahooks\\useRequest\\src\\useRequestImplement.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import useCreation from &#39;../../useCreation&#39;;</span>
<span class="line">import useLatest from &#39;../../useLatest&#39;;</span>
<span class="line">import useMount from &#39;../../useMount&#39;;</span>
<span class="line">import useUpdate from &#39;../../useUpdate&#39;;</span>
<span class="line">import Fetch from &#39;./Fetch&#39;;</span>
<span class="line">import useMemoizedFn from &#39;../../useMemoizedFn&#39;;</span>
<span class="line">import useUnmount from &#39;../../useUnmount&#39;;</span>
<span class="line">+function useRequestImplement(service, options = {}, plugins = []) {</span>
<span class="line">  const { manual = false, ...rest } = options;</span>
<span class="line">  const fetchOptions = { manual, ...rest };</span>
<span class="line">  const serviceRef = useLatest(service);</span>
<span class="line">  const update = useUpdate();</span>
<span class="line">  const fetchInstance = useCreation(() =&gt; {</span>
<span class="line">+   const initState = plugins.map(p =&gt; p?.onInit?.(fetchOptions)).filter(Boolean);</span>
<span class="line">+   return new Fetch(serviceRef, fetchOptions, update, Object.assign({}, ...initState));</span>
<span class="line">  }, []);</span>
<span class="line">+ //fetchInstance.options = fetchOptions;</span>
<span class="line">+ fetchInstance.pluginImpls = plugins.map(p =&gt; p(fetchInstance, fetchOptions));</span>
<span class="line">  useMount(() =&gt; {</span>
<span class="line">    if (!manual) {</span>
<span class="line">      const params = fetchInstance.state.params || options.defaultParams || [];</span>
<span class="line">      fetchInstance.run(...params);</span>
<span class="line">    }</span>
<span class="line">  });</span>
<span class="line">  useUnmount(() =&gt; {</span>
<span class="line">    fetchInstance.cancel();</span>
<span class="line">  });</span>
<span class="line">  return {</span>
<span class="line">    loading: fetchInstance.state.loading,</span>
<span class="line">    data: fetchInstance.state.data,</span>
<span class="line">    error: fetchInstance.state.error,</span>
<span class="line">    run: useMemoizedFn(fetchInstance.run.bind(fetchInstance)),</span>
<span class="line">    runAsync: useMemoizedFn(fetchInstance.runAsync.bind(fetchInstance)),</span>
<span class="line">    refresh: useMemoizedFn(fetchInstance.refresh.bind(fetchInstance)),</span>
<span class="line">    refreshAsync: useMemoizedFn(fetchInstance.refreshAsync.bind(fetchInstance)),</span>
<span class="line">    mutate: useMemoizedFn(fetchInstance.mutate.bind(fetchInstance)),</span>
<span class="line">    cancel: useMemoizedFn(fetchInstance.cancel.bind(fetchInstance))</span>
<span class="line">  };</span>
<span class="line">}</span>
<span class="line">export default useRequestImplement;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10-4-useloggerplugin-js" tabindex="-1"><a class="header-anchor" href="#_10-4-useloggerplugin-js"><span>10.4 useLoggerPlugin.js</span></a></h3><p>src\\ahooks\\useRequest\\src\\plugins\\useLoggerPlugin.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">const</span> <span class="token function-variable function">useLoggerPlugin</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">fetchInstance<span class="token punctuation">,</span> <span class="token punctuation">{</span> name <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function-variable function">onBefore</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> <span class="token string">&#39;onBefore&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> name <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function-variable function">onRequest</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> <span class="token string">&#39;onRequest&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">servicePromise</span><span class="token operator">:</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;onRequest返回值&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function-variable function">onSuccess</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> <span class="token string">&#39;onSuccess&#39;</span><span class="token punctuation">,</span> fetchInstance<span class="token punctuation">.</span>state<span class="token punctuation">.</span>name<span class="token punctuation">,</span> fetchInstance<span class="token punctuation">.</span>state<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function-variable function">onError</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> <span class="token string">&#39;onError&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function-variable function">onFinally</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> <span class="token string">&#39;onFinally&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function-variable function">onCancel</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> <span class="token string">&#39;onCancel&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function-variable function">onMutate</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> <span class="token string">&#39;onMutate&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">useLoggerPlugin<span class="token punctuation">.</span><span class="token function-variable function">onInit</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> name <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> <span class="token string">&#39;onInit&#39;</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">{</span> name <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> useLoggerPlugin<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10-5-fetch-js" tabindex="-1"><a class="header-anchor" href="#_10-5-fetch-js"><span>10.5 Fetch.js</span></a></h3><p>src\\ahooks\\useRequest\\src\\Fetch.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import { isFunction } from &#39;../../utils&#39;;</span>
<span class="line">class Fetch {</span>
<span class="line">  count = 0;</span>
<span class="line">+ constructor(serviceRef, options, subscribe, initState = {}) {</span>
<span class="line">    this.serviceRef = serviceRef;</span>
<span class="line">    this.options = options;</span>
<span class="line">    this.subscribe = subscribe;</span>
<span class="line">+   this.state = { loading: !options.manual, data: undefined, error: undefined, params: undefined, ...initState };</span>
<span class="line">  }</span>
<span class="line">  setState = (s = {}) =&gt; {</span>
<span class="line">    this.state = { ...this.state, ...s };</span>
<span class="line">    this.subscribe();</span>
<span class="line">  }</span>
<span class="line">  runAsync = async (...params) =&gt; {</span>
<span class="line">    this.count += 1;</span>
<span class="line">    const currentCount = this.count;</span>
<span class="line">+   const { ...state } = this.runPluginHandler(&#39;onBefore&#39;, params);</span>
<span class="line">+   this.setState({ loading: true, params, ...state });</span>
<span class="line">    this.options.onBefore?.(params);</span>
<span class="line">    try {</span>
<span class="line">+     let { servicePromise } = this.runPluginHandler(&#39;onRequest&#39;, this.serviceRef.current, params);</span>
<span class="line">+     if (!servicePromise) {</span>
<span class="line">+       servicePromise = this.serviceRef.current(...params);</span>
<span class="line">+     }</span>
<span class="line">+     const res = await servicePromise;</span>
<span class="line">      if (currentCount !== this.count) {</span>
<span class="line">        return new Promise(() =&gt; { });</span>
<span class="line">      }</span>
<span class="line">      this.setState({ loading: false, data: res, error: undefined, params });</span>
<span class="line">      this.options.onSuccess?.(res, params);</span>
<span class="line">+     this.runPluginHandler(&#39;onSuccess&#39;, res, params);</span>
<span class="line">      this.options.onFinally?.(params, res, undefined);</span>
<span class="line">+     if (currentCount === this.count) {</span>
<span class="line">+       this.runPluginHandler(&#39;onFinally&#39;, params, res, undefined);</span>
<span class="line">+     }</span>
<span class="line">    } catch (error) {</span>
<span class="line">      if (currentCount !== this.count) {</span>
<span class="line">        return new Promise(() =&gt; { });</span>
<span class="line">      }</span>
<span class="line">      this.setState({ loading: false, error, params });</span>
<span class="line">      this.options.onError?.(error, params);</span>
<span class="line">+     this.runPluginHandler(&#39;onError&#39;, error, params);</span>
<span class="line">      this.options.onFinally?.(params, undefined, error);</span>
<span class="line">+     if (currentCount === this.count) {</span>
<span class="line">+       this.runPluginHandler(&#39;onFinally&#39;, params, undefined, error);</span>
<span class="line">+     }</span>
<span class="line">      throw error;</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">  run = (...params) =&gt; {</span>
<span class="line">    this.runAsync(...params).catch(error =&gt; {</span>
<span class="line">      if (!this.options.onError) {</span>
<span class="line">        console.error(error);</span>
<span class="line">      }</span>
<span class="line">    });</span>
<span class="line">  }</span>
<span class="line">  refresh() {</span>
<span class="line">    this.run(...(this.state.params || []));</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  refreshAsync() {</span>
<span class="line">    return this.runAsync(...(this.state.params || []));</span>
<span class="line">  }</span>
<span class="line">  mutate(data) {</span>
<span class="line">    let targetData;</span>
<span class="line">    if (isFunction(data)) {</span>
<span class="line">      targetData = data(this.state.data);</span>
<span class="line">    } else {</span>
<span class="line">      targetData = data;</span>
<span class="line">    }</span>
<span class="line">+   this.runPluginHandler(&#39;onMutate&#39;, targetData);</span>
<span class="line">    this.setState({</span>
<span class="line">      data: targetData</span>
<span class="line">    });</span>
<span class="line">  }</span>
<span class="line">  cancel() {</span>
<span class="line">    this.count += 1;</span>
<span class="line">    this.setState({</span>
<span class="line">      loading: false</span>
<span class="line">    });</span>
<span class="line">    this.options.onCancel?.();</span>
<span class="line">+   this.runPluginHandler(&#39;onCancel&#39;);</span>
<span class="line">  }</span>
<span class="line">+ runPluginHandler(event, ...rest) {</span>
<span class="line">+   const r = this.pluginImpls.map(i =&gt; i[event]?.(...rest)).filter(Boolean);</span>
<span class="line">+   return Object.assign({}, ...r);</span>
<span class="line">+ }</span>
<span class="line">}</span>
<span class="line">export default Fetch;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_11-loading-delay" tabindex="-1"><a class="header-anchor" href="#_11-loading-delay"><span>11.Loading Delay</span></a></h2><ul><li>通过设置 <code>options.loadingDelay</code>，可以延迟 <code>loading</code> 变成 <code>true</code> 的时间，有效防止闪烁</li></ul><h3 id="_11-1-app-js" tabindex="-1"><a class="header-anchor" href="#_11-1-app-js"><span>11.1 App.js</span></a></h3><p>src\\App.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React, { useState, useRef } from &#39;react&#39;;</span>
<span class="line">import { useRequest } from &#39;./ahooks&#39;;</span>
<span class="line">let success = true;</span>
<span class="line">function getName() {</span>
<span class="line">  return new Promise((resolve, reject) =&gt; {</span>
<span class="line">    setTimeout(() =&gt; {</span>
<span class="line">      if (success) {</span>
<span class="line">        resolve(\`zhufeng\`);</span>
<span class="line">      } else {</span>
<span class="line">        reject(new Error(&#39;获取用户名失败&#39;));</span>
<span class="line">      }</span>
<span class="line">      success = !success;</span>
<span class="line">    }, 0);</span>
<span class="line">  });</span>
<span class="line">}</span>
<span class="line">let updateSuccess = true;</span>
<span class="line">function updateName(username) {</span>
<span class="line">  return new Promise((resolve, reject) =&gt; {</span>
<span class="line">    setTimeout(() =&gt; {</span>
<span class="line">      if (updateSuccess) {</span>
<span class="line">        resolve(username);</span>
<span class="line">      } else {</span>
<span class="line">        reject(new Error(\`修改用户名失败\`));</span>
<span class="line">      }</span>
<span class="line">      updateSuccess = !updateSuccess;</span>
<span class="line">    }, 3000);</span>
<span class="line">  });</span>
<span class="line">}</span>
<span class="line">function App() {</span>
<span class="line">  const lastRef = useRef();</span>
<span class="line">  const [value, setValue] = useState(&quot;&quot;);</span>
<span class="line">  const { data: name, mutate } = useRequest(getName, { name: &#39;getName&#39; });</span>
<span class="line">  const { run, loading, cancel } = useRequest(updateName, {</span>
<span class="line">    manual: true,</span>
<span class="line">    name: &#39;updateName&#39;,</span>
<span class="line">+   loadingDelay: 1000,</span>
<span class="line">    onSuccess: (result, params) =&gt; {</span>
<span class="line">      setValue(&quot;&quot;);</span>
<span class="line">      console.log(\`用户名成功变更为 &quot;\${params[0]}&quot; !\`);</span>
<span class="line">    },</span>
<span class="line">    onError: (error, params) =&gt; {</span>
<span class="line">      console.error(error.message);</span>
<span class="line">      mutate(lastRef.current);</span>
<span class="line">    },</span>
<span class="line">    onCancel: () =&gt; {</span>
<span class="line">      mutate(lastRef.current);</span>
<span class="line">    }</span>
<span class="line">  });</span>
<span class="line">  return (</span>
<span class="line">    &lt;&gt;</span>
<span class="line">      {name &amp;&amp; &lt;div&gt;用户名: {name}&lt;/div&gt;}</span>
<span class="line">      &lt;input</span>
<span class="line">        onChange={(event) =&gt; setValue(event.target.value)}</span>
<span class="line">        value={value}</span>
<span class="line">        placeholder=&quot;请输入用户名&quot;</span>
<span class="line">      /&gt;</span>
<span class="line">      &lt;button onClick={() =&gt; {</span>
<span class="line">        lastRef.current = name;</span>
<span class="line">        mutate(value);</span>
<span class="line">        run(value);</span>
<span class="line">      }} type=&quot;button&quot;&gt;</span>
<span class="line">        {loading ? &quot;更新中.......&quot; : &#39;更新&#39;}</span>
<span class="line">      &lt;/button&gt;</span>
<span class="line">      &lt;button type=&quot;button&quot; onClick={cancel}&gt;</span>
<span class="line">        取消</span>
<span class="line">      &lt;/button&gt;</span>
<span class="line">    &lt;/&gt;</span>
<span class="line">  )</span>
<span class="line">};</span>
<span class="line">export default App;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_11-2-userequest-js" tabindex="-1"><a class="header-anchor" href="#_11-2-userequest-js"><span>11.2 useRequest.js</span></a></h3><p>src\\ahooks\\useRequest\\src\\useRequest.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import useRequestImplement from &#39;./useRequestImplement&#39;;</span>
<span class="line">+import useLoadingDelayPlugin from &#39;./plugins/useLoadingDelayPlugin&#39;;</span>
<span class="line">function useRequest(service, options = {}, plugins) {</span>
<span class="line">  return useRequestImplement(service, options, [...(plugins || []),</span>
<span class="line">+   useLoadingDelayPlugin</span>
<span class="line">  ]);</span>
<span class="line">}</span>
<span class="line">export default useRequest;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_11-3-useloadingdelayplugin-js" tabindex="-1"><a class="header-anchor" href="#_11-3-useloadingdelayplugin-js"><span>11.3 useLoadingDelayPlugin.js</span></a></h3><p>src\\ahooks\\useRequest\\src\\plugins\\useLoadingDelayPlugin.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">useLoadingDelayPlugin</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">fetchInstance<span class="token punctuation">,</span> <span class="token punctuation">{</span> loadingDelay <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> timerRef <span class="token operator">=</span> <span class="token function">useRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>loadingDelay<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token function-variable function">cancelTimeout</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>timerRef<span class="token punctuation">.</span>current<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timerRef<span class="token punctuation">.</span>current<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function-variable function">onBefore</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">cancelTimeout</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      timerRef<span class="token punctuation">.</span>current <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">        fetchInstance<span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">          <span class="token literal-property property">loading</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span> loadingDelay<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">loading</span><span class="token operator">:</span> <span class="token boolean">false</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function-variable function">onFinally</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">cancelTimeout</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function-variable function">onCancel</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">cancelTimeout</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> useLoadingDelayPlugin<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_12-轮询" tabindex="-1"><a class="header-anchor" href="#_12-轮询"><span>12.轮询</span></a></h2><ul><li>通过设置 <code>options.pollingInterval</code>，进入轮询模式，<code>useRequest</code> 会定时触发<code>service</code> 执行</li></ul><h3 id="_12-1-轮询" tabindex="-1"><a class="header-anchor" href="#_12-1-轮询"><span>12.1 轮询</span></a></h3><h4 id="_12-1-1-app-js" tabindex="-1"><a class="header-anchor" href="#_12-1-1-app-js"><span>12.1.1 App.js</span></a></h4><p>src\\App.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React, { useState, useRef } from &#39;react&#39;;</span>
<span class="line">import { useRequest } from &#39;./ahooks&#39;;</span>
<span class="line">+let counter = 0;</span>
<span class="line">function getName() {</span>
<span class="line">  return new Promise((resolve, reject) =&gt; {</span>
<span class="line">    setTimeout(() =&gt; {</span>
<span class="line">+     resolve(\`zhufeng\` + (++counter));</span>
<span class="line">    }, 0);</span>
<span class="line">  });</span>
<span class="line">}</span>
<span class="line">let updateSuccess = true;</span>
<span class="line">function updateName(username) {</span>
<span class="line">  return new Promise((resolve, reject) =&gt; {</span>
<span class="line">    setTimeout(() =&gt; {</span>
<span class="line">      if (updateSuccess) {</span>
<span class="line">        resolve(username);</span>
<span class="line">      } else {</span>
<span class="line">        reject(new Error(\`修改用户名失败\`));</span>
<span class="line">      }</span>
<span class="line">      updateSuccess = !updateSuccess;</span>
<span class="line">    }, 3000);</span>
<span class="line">  });</span>
<span class="line">}</span>
<span class="line">function App() {</span>
<span class="line">  const lastRef = useRef();</span>
<span class="line">  const [value, setValue] = useState(&quot;&quot;);</span>
<span class="line">  const { data: name, mutate } = useRequest(getName, {</span>
<span class="line">    name: &#39;getName&#39;,</span>
<span class="line">+   pollingInterval: 1000</span>
<span class="line">  });</span>
<span class="line">  const { run, loading, cancel } = useRequest(updateName, {</span>
<span class="line">    manual: true,</span>
<span class="line">    name: &#39;updateName&#39;,</span>
<span class="line">    loadingDelay: 1000,</span>
<span class="line">    onSuccess: (result, params) =&gt; {</span>
<span class="line">      setValue(&quot;&quot;);</span>
<span class="line">      console.log(\`用户名成功变更为 &quot;\${params[0]}&quot; !\`);</span>
<span class="line">    },</span>
<span class="line">    onError: (error, params) =&gt; {</span>
<span class="line">      console.error(error.message);</span>
<span class="line">      mutate(lastRef.current);</span>
<span class="line">    },</span>
<span class="line">    onCancel: () =&gt; {</span>
<span class="line">      mutate(lastRef.current);</span>
<span class="line">    }</span>
<span class="line">  });</span>
<span class="line">  console.log(loading);</span>
<span class="line">  return (</span>
<span class="line">    &lt;&gt;</span>
<span class="line">      {name &amp;&amp; &lt;div&gt;用户名: {name}&lt;/div&gt;}</span>
<span class="line">      &lt;input</span>
<span class="line">        onChange={(event) =&gt; setValue(event.target.value)}</span>
<span class="line">        value={value}</span>
<span class="line">        placeholder=&quot;请输入用户名&quot;</span>
<span class="line">      /&gt;</span>
<span class="line">      &lt;button onClick={() =&gt; {</span>
<span class="line">        lastRef.current = name;</span>
<span class="line">        mutate(value);</span>
<span class="line">        run(value);</span>
<span class="line">      }} type=&quot;button&quot;&gt;</span>
<span class="line">        {loading ? &quot;更新中.......&quot; : &#39;更新&#39;}</span>
<span class="line">      &lt;/button&gt;</span>
<span class="line">      &lt;button type=&quot;button&quot; onClick={cancel}&gt;</span>
<span class="line">        取消</span>
<span class="line">      &lt;/button&gt;</span>
<span class="line">    &lt;/&gt;</span>
<span class="line">  )</span>
<span class="line">};</span>
<span class="line">export default App;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_12-1-2-userequest-js" tabindex="-1"><a class="header-anchor" href="#_12-1-2-userequest-js"><span>12.1.2 useRequest.js</span></a></h4><p>src\\ahooks\\useRequest\\src\\useRequest.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import useRequestImplement from &#39;./useRequestImplement&#39;;</span>
<span class="line">import useLoadingDelayPlugin from &#39;./plugins/useLoadingDelayPlugin&#39;;</span>
<span class="line">+import usePollingPlugin from &#39;./plugins/usePollingPlugin&#39;;</span>
<span class="line">function useRequest(service, options = {}, plugins) {</span>
<span class="line">  return useRequestImplement(service, options, [...(plugins || []),</span>
<span class="line">    useLoadingDelayPlugin,</span>
<span class="line">+   usePollingPlugin</span>
<span class="line">  ]);</span>
<span class="line">}</span>
<span class="line">export default useRequest;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_12-1-3-usepollingplugin-js" tabindex="-1"><a class="header-anchor" href="#_12-1-3-usepollingplugin-js"><span>12.1.3 usePollingPlugin.js</span></a></h4><p>src\\ahooks\\useRequest\\src\\plugins\\usePollingPlugin.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> useUpdateEffect <span class="token keyword">from</span> <span class="token string">&#39;../../../useUpdateEffect&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">usePollingPlugin</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">fetchInstance<span class="token punctuation">,</span> <span class="token punctuation">{</span> pollingInterval <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> timerRef <span class="token operator">=</span> <span class="token function">useRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token function-variable function">stopPolling</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>timerRef<span class="token punctuation">.</span>current<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timerRef<span class="token punctuation">.</span>current<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">useUpdateEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>pollingInterval<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">stopPolling</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>pollingInterval<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>pollingInterval<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function-variable function">onBefore</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">stopPolling</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function-variable function">onFinally</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">      timerRef<span class="token punctuation">.</span>current <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">        fetchInstance<span class="token punctuation">.</span><span class="token function">refresh</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span> pollingInterval<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function-variable function">onCancel</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">stopPolling</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> usePollingPlugin<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_12-1-4-useupdateeffect-index-js" tabindex="-1"><a class="header-anchor" href="#_12-1-4-useupdateeffect-index-js"><span>12.1.4 useUpdateEffect\\index.js</span></a></h4><p>src\\ahooks\\useUpdateEffect\\index.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useEffect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createUpdateEffect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../createUpdateEffect&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">createUpdateEffect</span><span class="token punctuation">(</span>useEffect<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_12-1-5-createupdateeffect-index-js" tabindex="-1"><a class="header-anchor" href="#_12-1-5-createupdateeffect-index-js"><span>12.1.5 createUpdateEffect\\index.js</span></a></h4><p>src\\ahooks\\createUpdateEffect\\index.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">createUpdateEffect</span> <span class="token operator">=</span> <span class="token parameter">hook</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token parameter">effect<span class="token punctuation">,</span> deps</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> isMounted <span class="token operator">=</span> <span class="token function">useRef</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token function">hook</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">      isMounted<span class="token punctuation">.</span>current <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token function">hook</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>isMounted<span class="token punctuation">.</span>current<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      isMounted<span class="token punctuation">.</span>current <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">return</span> <span class="token function">effect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span> deps<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_12-2-后台轮询" tabindex="-1"><a class="header-anchor" href="#_12-2-后台轮询"><span>12.2 后台轮询</span></a></h3><h4 id="_12-2-1-src-app-js" tabindex="-1"><a class="header-anchor" href="#_12-2-1-src-app-js"><span>12.2.1 src\\App.js</span></a></h4><p>src\\App.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState<span class="token punctuation">,</span> useRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useRequest <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./ahooks&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> counter <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">zhufeng</span><span class="token template-punctuation string">\`</span></span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token operator">++</span>counter<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">let</span> updateSuccess <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">updateName</span><span class="token punctuation">(</span><span class="token parameter">username</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span>updateSuccess<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">resolve</span><span class="token punctuation">(</span>username<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">reject</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">修改用户名失败</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">      updateSuccess <span class="token operator">=</span> <span class="token operator">!</span>updateSuccess<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> lastRef <span class="token operator">=</span> <span class="token function">useRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token punctuation">[</span>value<span class="token punctuation">,</span> setValue<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token literal-property property">data</span><span class="token operator">:</span> name<span class="token punctuation">,</span> mutate <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useRequest</span><span class="token punctuation">(</span>getName<span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;getName&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">pollingInterval</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token operator">+</span>   pollingWhenHidden<span class="token operator">:</span> <span class="token boolean">false</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token punctuation">{</span> run<span class="token punctuation">,</span> loading<span class="token punctuation">,</span> cancel <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useRequest</span><span class="token punctuation">(</span>updateName<span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">manual</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;updateName&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">loadingDelay</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function-variable function">onSuccess</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">result<span class="token punctuation">,</span> params</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">setValue</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">用户名成功变更为 &quot;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>params<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot; !</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function-variable function">onError</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">error<span class="token punctuation">,</span> params</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>error<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token function">mutate</span><span class="token punctuation">(</span>lastRef<span class="token punctuation">.</span>current<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function-variable function">onCancel</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">mutate</span><span class="token punctuation">(</span>lastRef<span class="token punctuation">.</span>current<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">&gt;</span></span>
<span class="line">      <span class="token punctuation">{</span>name <span class="token operator">&amp;&amp;</span> <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>用户名<span class="token operator">:</span> <span class="token punctuation">{</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span><span class="token punctuation">}</span></span>
<span class="line">      <span class="token operator">&lt;</span>input</span>
<span class="line">        onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">setValue</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">}</span></span>
<span class="line">        value<span class="token operator">=</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span></span>
<span class="line">        placeholder<span class="token operator">=</span><span class="token string">&quot;请输入用户名&quot;</span></span>
<span class="line">      <span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line">      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">        lastRef<span class="token punctuation">.</span>current <span class="token operator">=</span> name<span class="token punctuation">;</span></span>
<span class="line">        <span class="token function">mutate</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token function">run</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">}</span> type<span class="token operator">=</span><span class="token string">&quot;button&quot;</span><span class="token operator">&gt;</span></span>
<span class="line">        <span class="token punctuation">{</span>loading <span class="token operator">?</span> <span class="token string">&quot;更新中.......&quot;</span> <span class="token operator">:</span> <span class="token string">&#39;更新&#39;</span><span class="token punctuation">}</span></span>
<span class="line">      <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span></span>
<span class="line">      <span class="token operator">&lt;</span>button type<span class="token operator">=</span><span class="token string">&quot;button&quot;</span> onClick<span class="token operator">=</span><span class="token punctuation">{</span>cancel<span class="token punctuation">}</span><span class="token operator">&gt;</span></span>
<span class="line">        取消</span>
<span class="line">      <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line">  <span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_12-2-2-usepollingplugin-js" tabindex="-1"><a class="header-anchor" href="#_12-2-2-usepollingplugin-js"><span>12.2.2 usePollingPlugin.js</span></a></h4><p>src\\ahooks\\useRequest\\src\\plugins\\usePollingPlugin.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import { useRef } from &#39;react&#39;;</span>
<span class="line">import useUpdateEffect from &#39;../../../useUpdateEffect&#39;;</span>
<span class="line">+import isDocumentVisible from &#39;../utils/isDocumentVisible&#39;;</span>
<span class="line">+import subscribeReVisible from &#39;../utils/subscribeReVisible&#39;;</span>
<span class="line">+const usePollingPlugin = (fetchInstance, { pollingInterval, pollingWhenHidden = true }) =&gt; {</span>
<span class="line">  const timerRef = useRef();</span>
<span class="line">+ const unsubscribeRef = useRef();</span>
<span class="line">  const stopPolling = () =&gt; {</span>
<span class="line">    if (timerRef.current) {</span>
<span class="line">      clearTimeout(timerRef.current);</span>
<span class="line">    }</span>
<span class="line">+   unsubscribeRef.current?.();</span>
<span class="line">  };</span>
<span class="line"></span>
<span class="line">  useUpdateEffect(() =&gt; {</span>
<span class="line">    if (!pollingInterval) {</span>
<span class="line">      stopPolling();</span>
<span class="line">    }</span>
<span class="line">  }, [pollingInterval]);</span>
<span class="line"></span>
<span class="line">  if (!pollingInterval) {</span>
<span class="line">    return {};</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  return {</span>
<span class="line">    onBefore: () =&gt; {</span>
<span class="line">      stopPolling();</span>
<span class="line">    },</span>
<span class="line">    onFinally: () =&gt; {</span>
<span class="line">+     if (!pollingWhenHidden &amp;&amp; !isDocumentVisible()) {</span>
<span class="line">+       unsubscribeRef.current = subscribeReVisible(() =&gt; {</span>
<span class="line">+         fetchInstance.refresh();</span>
<span class="line">+       });</span>
<span class="line">+       return;</span>
<span class="line">+     }</span>
<span class="line">      timerRef.current = setTimeout(() =&gt; {</span>
<span class="line">        fetchInstance.refresh();</span>
<span class="line">      }, pollingInterval);</span>
<span class="line">    },</span>
<span class="line">    onCancel: () =&gt; {</span>
<span class="line">      stopPolling();</span>
<span class="line">    }</span>
<span class="line">  };</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line">export default usePollingPlugin;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_12-2-3-isdocumentvisible-js" tabindex="-1"><a class="header-anchor" href="#_12-2-3-isdocumentvisible-js"><span>12.2.3 isDocumentVisible.js</span></a></h4><p>src\\ahooks\\useRequest\\src\\utils\\isDocumentVisible.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">isDocumentVisible</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> document<span class="token punctuation">.</span>visibilityState <span class="token operator">!==</span> <span class="token string">&#39;hidden&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_12-2-4-subscriberevisible-js" tabindex="-1"><a class="header-anchor" href="#_12-2-4-subscriberevisible-js"><span>12.2.4 subscribeReVisible.js</span></a></h4><p>src\\ahooks\\useRequest\\src\\utils\\subscribeReVisible.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> isDocumentVisible <span class="token keyword">from</span> <span class="token string">&#39;./isDocumentVisible&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> listeners <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token parameter">listener</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  listeners<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>listener<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token function">unsubscribe</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> index <span class="token operator">=</span> listeners<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>listener<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    listeners<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">revalidate</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">isDocumentVisible</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> listeners<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> listener <span class="token operator">=</span> listeners<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token function">listener</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;visibilitychange&#39;</span><span class="token punctuation">,</span> revalidate<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> subscribe<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_13-ready和和依赖更新" tabindex="-1"><a class="header-anchor" href="#_13-ready和和依赖更新"><span>13.Ready和和依赖更新</span></a></h2><h3 id="_13-1-自动模式" tabindex="-1"><a class="header-anchor" href="#_13-1-自动模式"><span>13.1 自动模式</span></a></h3><h4 id="_13-1-1-app-js" tabindex="-1"><a class="header-anchor" href="#_13-1-1-app-js"><span>13.1.1 App.js</span></a></h4><p>src\\App.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React, { useState } from &#39;react&#39;;</span>
<span class="line">import { useRequest } from &#39;./ahooks&#39;;</span>
<span class="line">function getName() {</span>
<span class="line">  return new Promise((resolve, reject) =&gt; {</span>
<span class="line">    setTimeout(() =&gt; {</span>
<span class="line">+     resolve(\`zhufeng\`);</span>
<span class="line">    }, 1000);</span>
<span class="line">  });</span>
<span class="line">}</span>
<span class="line">function App() {</span>
<span class="line">+ const [ready, setReady] = useState(false);</span>
<span class="line">+ const { data: name, loading } = useRequest(getName, {</span>
<span class="line">+   ready</span>
<span class="line">+ });</span>
<span class="line">+ return (</span>
<span class="line">+   &lt;&gt;</span>
<span class="line">+     &lt;p&gt;</span>
<span class="line">+       Ready: {JSON.stringify(ready)}</span>
<span class="line">+       &lt;button onClick={() =&gt; setReady(!ready)}&gt;</span>
<span class="line">+         切换Ready</span>
<span class="line">+       &lt;/button&gt;</span>
<span class="line">+     &lt;/p&gt;</span>
<span class="line">+     {loading ? &#39;加载中&#39; : name ? &lt;div&gt;用户名: {name}&lt;/div&gt; : null}</span>
<span class="line">+   &lt;/&gt;</span>
<span class="line">+ );</span>
<span class="line">};</span>
<span class="line">export default App;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_13-1-2-userequest-js" tabindex="-1"><a class="header-anchor" href="#_13-1-2-userequest-js"><span>13.1.2 useRequest.js</span></a></h4><p>src\\ahooks\\useRequest\\src\\useRequest.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import useRequestImplement from &#39;./useRequestImplement&#39;;</span>
<span class="line">import useLoadingDelayPlugin from &#39;./plugins/useLoadingDelayPlugin&#39;;</span>
<span class="line">import usePollingPlugin from &#39;./plugins/usePollingPlugin&#39;;</span>
<span class="line">+import useAutoRunPlugin from &#39;./plugins/useAutoRunPlugin&#39;;</span>
<span class="line">function useRequest(service, options = {}, plugins) {</span>
<span class="line">  return useRequestImplement(service, options, [...(plugins || []),</span>
<span class="line">    useLoadingDelayPlugin,</span>
<span class="line">    usePollingPlugin,</span>
<span class="line">+   useAutoRunPlugin</span>
<span class="line">  ]);</span>
<span class="line">}</span>
<span class="line">export default useRequest;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_13-1-3-useautorunplugin-js" tabindex="-1"><a class="header-anchor" href="#_13-1-3-useautorunplugin-js"><span>13.1.3 useAutoRunPlugin.js</span></a></h4><p>src\\ahooks\\useRequest\\src\\plugins\\useAutoRunPlugin.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> useUpdateEffect <span class="token keyword">from</span> <span class="token string">&#39;../../../useUpdateEffect&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">useAutoRunPlugin</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">fetchInstance<span class="token punctuation">,</span> <span class="token punctuation">{</span> manual<span class="token punctuation">,</span> ready <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">,</span> defaultParams <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> hasAutoRun <span class="token operator">=</span> <span class="token function">useRef</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  hasAutoRun<span class="token punctuation">.</span>current <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token function">useUpdateEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>manual <span class="token operator">&amp;&amp;</span> ready<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      hasAutoRun<span class="token punctuation">.</span>current <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line">      fetchInstance<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token operator">...</span>defaultParams<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>ready<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function-variable function">onBefore</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>ready<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token literal-property property">stopNow</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">useAutoRunPlugin<span class="token punctuation">.</span><span class="token function-variable function">onInit</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span></span>
<span class="line">  ready <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">  manual</span>
<span class="line"><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">loading</span><span class="token operator">:</span> <span class="token operator">!</span>manual <span class="token operator">&amp;&amp;</span> ready</span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> useAutoRunPlugin<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_13-1-4-fetch-js" tabindex="-1"><a class="header-anchor" href="#_13-1-4-fetch-js"><span>13.1.4 Fetch.js</span></a></h4><p>src\\ahooks\\useRequest\\src\\Fetch.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> isFunction <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../../utils&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Fetch</span> <span class="token punctuation">{</span></span>
<span class="line">  count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">serviceRef<span class="token punctuation">,</span> options<span class="token punctuation">,</span> subscribe<span class="token punctuation">,</span> initState <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>serviceRef <span class="token operator">=</span> serviceRef<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>options <span class="token operator">=</span> options<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>subscribe <span class="token operator">=</span> subscribe<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">loading</span><span class="token operator">:</span> <span class="token operator">!</span>options<span class="token punctuation">.</span>manual<span class="token punctuation">,</span> <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token literal-property property">error</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token operator">...</span>initState <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token function-variable function">setState</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">s <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">,</span> <span class="token operator">...</span>s <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token function-variable function">runAsync</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>params</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>count <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">const</span> currentCount <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>   <span class="token keyword">const</span> <span class="token punctuation">{</span> stopNow <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token operator">...</span>state <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">runPluginHandler</span><span class="token punctuation">(</span><span class="token string">&#39;onBefore&#39;</span><span class="token punctuation">,</span> params<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>   <span class="token keyword">if</span> <span class="token punctuation">(</span>stopNow<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>     <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>   <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">loading</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> params<span class="token punctuation">,</span> <span class="token operator">...</span>state <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>options<span class="token punctuation">.</span>onBefore<span class="token operator">?.</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">let</span> <span class="token punctuation">{</span> servicePromise <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">runPluginHandler</span><span class="token punctuation">(</span><span class="token string">&#39;onRequest&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>serviceRef<span class="token punctuation">.</span>current<span class="token punctuation">,</span> params<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>servicePromise<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        servicePromise <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>serviceRef<span class="token punctuation">.</span><span class="token function">current</span><span class="token punctuation">(</span><span class="token operator">...</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">      <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> servicePromise<span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span>currentCount <span class="token operator">!==</span> <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">loading</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token literal-property property">data</span><span class="token operator">:</span> res<span class="token punctuation">,</span> <span class="token literal-property property">error</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> params <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span>options<span class="token punctuation">.</span>onSuccess<span class="token operator">?.</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> params<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">runPluginHandler</span><span class="token punctuation">(</span><span class="token string">&#39;onSuccess&#39;</span><span class="token punctuation">,</span> res<span class="token punctuation">,</span> params<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span>options<span class="token punctuation">.</span>onFinally<span class="token operator">?.</span><span class="token punctuation">(</span>params<span class="token punctuation">,</span> res<span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span>currentCount <span class="token operator">===</span> <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">runPluginHandler</span><span class="token punctuation">(</span><span class="token string">&#39;onFinally&#39;</span><span class="token punctuation">,</span> params<span class="token punctuation">,</span> res<span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span>currentCount <span class="token operator">!==</span> <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">loading</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> error<span class="token punctuation">,</span> params <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span>options<span class="token punctuation">.</span>onError<span class="token operator">?.</span><span class="token punctuation">(</span>error<span class="token punctuation">,</span> params<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">runPluginHandler</span><span class="token punctuation">(</span><span class="token string">&#39;onError&#39;</span><span class="token punctuation">,</span> error<span class="token punctuation">,</span> params<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span>options<span class="token punctuation">.</span>onFinally<span class="token operator">?.</span><span class="token punctuation">(</span>params<span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span>currentCount <span class="token operator">===</span> <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">runPluginHandler</span><span class="token punctuation">(</span><span class="token string">&#39;onFinally&#39;</span><span class="token punctuation">,</span> params<span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">      <span class="token keyword">throw</span> error<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token function-variable function">run</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>params</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">runAsync</span><span class="token punctuation">(</span><span class="token operator">...</span>params<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">error</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>options<span class="token punctuation">.</span>onError<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token function">refresh</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>params <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">refreshAsync</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">runAsync</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>params <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token function">mutate</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> targetData<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isFunction</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      targetData <span class="token operator">=</span> <span class="token function">data</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">      targetData <span class="token operator">=</span> data<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">runPluginHandler</span><span class="token punctuation">(</span><span class="token string">&#39;onMutate&#39;</span><span class="token punctuation">,</span> targetData<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">data</span><span class="token operator">:</span> targetData</span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token function">cancel</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>count <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">loading</span><span class="token operator">:</span> <span class="token boolean">false</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>options<span class="token punctuation">.</span>onCancel<span class="token operator">?.</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">runPluginHandler</span><span class="token punctuation">(</span><span class="token string">&#39;onCancel&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token function">runPluginHandler</span><span class="token punctuation">(</span><span class="token parameter">event<span class="token punctuation">,</span> <span class="token operator">...</span>rest</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> r <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>pluginImpls<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">i</span> <span class="token operator">=&gt;</span> i<span class="token punctuation">[</span>event<span class="token punctuation">]</span><span class="token operator">?.</span><span class="token punctuation">(</span><span class="token operator">...</span>rest<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>Boolean<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token operator">...</span>r<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> Fetch<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_13-2-手动模式" tabindex="-1"><a class="header-anchor" href="#_13-2-手动模式"><span>13.2 手动模式</span></a></h3><h4 id="_13-2-1-app-js" tabindex="-1"><a class="header-anchor" href="#_13-2-1-app-js"><span>13.2.1 App.js</span></a></h4><p>src\\App.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React, { useState } from &#39;react&#39;;</span>
<span class="line">import { useRequest } from &#39;./ahooks&#39;;</span>
<span class="line"></span>
<span class="line">function getName() {</span>
<span class="line">  return new Promise((resolve, reject) =&gt; {</span>
<span class="line">    setTimeout(() =&gt; {</span>
<span class="line">      resolve(\`zhufeng\`);</span>
<span class="line">    }, 1000);</span>
<span class="line">  });</span>
<span class="line">}</span>
<span class="line">function App() {</span>
<span class="line">  const [ready, setReady] = useState(false);</span>
<span class="line">  const { data: name, loading, run } = useRequest(getName, {</span>
<span class="line">+   manual: true,</span>
<span class="line">    ready</span>
<span class="line">  });</span>
<span class="line">  return (</span>
<span class="line">    &lt;&gt;</span>
<span class="line">      &lt;p&gt;</span>
<span class="line">        Ready: {JSON.stringify(ready)}</span>
<span class="line">        &lt;button onClick={() =&gt; setReady(!ready)}&gt;</span>
<span class="line">          切换Ready</span>
<span class="line">        &lt;/button&gt;</span>
<span class="line">      &lt;/p&gt;</span>
<span class="line">+     &lt;button type=&quot;button&quot; onClick={run}&gt;</span>
<span class="line">+       run</span>
<span class="line">+     &lt;/button&gt;</span>
<span class="line">      {loading ? &#39;加载中&#39; : name ? &lt;div&gt;用户名: {name}&lt;/div&gt; : null}</span>
<span class="line">    &lt;/&gt;</span>
<span class="line">  );</span>
<span class="line">};</span>
<span class="line">export default App;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_13-3-依赖更新" tabindex="-1"><a class="header-anchor" href="#_13-3-依赖更新"><span>13.3 依赖更新</span></a></h3><ul><li>useRequest 提供了一个 <code>options.refreshDeps</code> 参数，当它的值变化后，会重新触发请求</li></ul><h4 id="_13-3-1-app-js" tabindex="-1"><a class="header-anchor" href="#_13-3-1-app-js"><span>13.3.1 App.js</span></a></h4><p>src\\App.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React, { useState } from &#39;react&#39;;</span>
<span class="line">import { useRequest } from &#39;./ahooks&#39;;</span>
<span class="line">+let counter = 0;</span>
<span class="line">function getName() {</span>
<span class="line">  return new Promise((resolve, reject) =&gt; {</span>
<span class="line">    setTimeout(() =&gt; {</span>
<span class="line">+     resolve(\`zhufeng\` + (++counter));</span>
<span class="line">    }, 1000);</span>
<span class="line">  });</span>
<span class="line">}</span>
<span class="line">function App() {</span>
<span class="line">+ const [userId, setUserId] = useState(&#39;1&#39;);</span>
<span class="line">+ const { data: name, loading } = useRequest(getName, {</span>
<span class="line">+   refreshDeps: [userId],</span>
<span class="line">+   refreshDepsAction() {</span>
<span class="line">+     console.log(&#39;refreshDepsAction&#39;);</span>
<span class="line">+   }</span>
<span class="line">+ });</span>
<span class="line">  return (</span>
<span class="line">    &lt;&gt;</span>
<span class="line">+     &lt;input value={userId} onChange={(event) =&gt; setUserId(event.target.value)} /&gt;</span>
<span class="line">      {loading ? &#39;加载中&#39; : name ? &lt;div&gt;用户名: {name}&lt;/div&gt; : null}</span>
<span class="line">    &lt;/&gt;</span>
<span class="line">  );</span>
<span class="line">};</span>
<span class="line">export default App;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_13-3-2-useautorunplugin-js" tabindex="-1"><a class="header-anchor" href="#_13-3-2-useautorunplugin-js"><span>13.3.2 useAutoRunPlugin.js</span></a></h4><p>src\\ahooks\\useRequest\\src\\plugins\\useAutoRunPlugin.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import { useRef } from &#39;react&#39;;</span>
<span class="line">import useUpdateEffect from &#39;../../../useUpdateEffect&#39;;</span>
<span class="line">const useAutoRunPlugin = (fetchInstance, { manual, ready = true, defaultParams = [],</span>
<span class="line">+ refreshDeps = [],</span>
<span class="line">+ refreshDepsAction</span>
<span class="line">}) =&gt; {</span>
<span class="line">  const hasAutoRun = useRef(false);</span>
<span class="line">  hasAutoRun.current = false;</span>
<span class="line">  useUpdateEffect(() =&gt; {</span>
<span class="line">    if (!manual &amp;&amp; ready) {</span>
<span class="line">      hasAutoRun.current = true;</span>
<span class="line">      fetchInstance.run(...defaultParams);</span>
<span class="line">    }</span>
<span class="line">  }, [ready]);</span>
<span class="line">+  useUpdateEffect(() =&gt; {</span>
<span class="line">+    if (hasAutoRun.current) {</span>
<span class="line">+      return;</span>
<span class="line">+    }</span>
<span class="line">+    if (!manual) {</span>
<span class="line">+      hasAutoRun.current = true;</span>
<span class="line">+      if (refreshDepsAction) {</span>
<span class="line">+        refreshDepsAction();</span>
<span class="line">+      } else {</span>
<span class="line">+        fetchInstance.refresh();</span>
<span class="line">+      }</span>
<span class="line">+    }</span>
<span class="line">+  }, [...refreshDeps]);</span>
<span class="line">  return {</span>
<span class="line">    onBefore: () =&gt; {</span>
<span class="line">      if (!ready) {</span>
<span class="line">        return {</span>
<span class="line">          stopNow: true</span>
<span class="line">        };</span>
<span class="line">      }</span>
<span class="line">    }</span>
<span class="line">  };</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line">useAutoRunPlugin.onInit = ({</span>
<span class="line">  ready = true,</span>
<span class="line">  manual</span>
<span class="line">}) =&gt; {</span>
<span class="line">  return {</span>
<span class="line">    loading: !manual &amp;&amp; ready</span>
<span class="line">  };</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line">export default useAutoRunPlugin;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_14-屏幕聚焦重新请求" tabindex="-1"><a class="header-anchor" href="#_14-屏幕聚焦重新请求"><span>14.屏幕聚焦重新请求</span></a></h2><ul><li><a href="https://ahooks.js.org/zh-CN/hooks/use-request/refresh-on-window-focus/" target="_blank" rel="noopener noreferrer">refresh-on-window-focus</a></li><li>通过设置 <code>options.refreshOnWindowFocus</code>，在浏览器窗口 <code>refocus</code> 和 <code>revisible</code> 时，会重新发起请求</li></ul><h3 id="_14-1-app-js" tabindex="-1"><a class="header-anchor" href="#_14-1-app-js"><span>14.1 App.js</span></a></h3><p>src\\App.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React from &#39;react&#39;;</span>
<span class="line">import { useRequest } from &#39;./ahooks&#39;;</span>
<span class="line">let counter = 0;</span>
<span class="line">function getName() {</span>
<span class="line">  return new Promise((resolve, reject) =&gt; {</span>
<span class="line">    setTimeout(() =&gt; {</span>
<span class="line">      resolve(\`zhufeng\` + (++counter));</span>
<span class="line">    }, 1000);</span>
<span class="line">  });</span>
<span class="line">}</span>
<span class="line">function App() {</span>
<span class="line">  const { data: name, loading } = useRequest(getName, {</span>
<span class="line">+   refreshOnWindowFocus: true,</span>
<span class="line">+   focusTimespan: 5000</span>
<span class="line">  });</span>
<span class="line">  return (</span>
<span class="line">    &lt;&gt;</span>
<span class="line">      {loading ? &#39;加载中&#39; : name ? &lt;div&gt;用户名: {name}&lt;/div&gt; : null}</span>
<span class="line">    &lt;/&gt;</span>
<span class="line">  );</span>
<span class="line">};</span>
<span class="line">export default App;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_14-2-userequest-js" tabindex="-1"><a class="header-anchor" href="#_14-2-userequest-js"><span>14.2 useRequest.js</span></a></h3><p>src\\ahooks\\useRequest\\src\\useRequest.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import useRequestImplement from &#39;./useRequestImplement&#39;;</span>
<span class="line">import useLoadingDelayPlugin from &#39;./plugins/useLoadingDelayPlugin&#39;;</span>
<span class="line">import usePollingPlugin from &#39;./plugins/usePollingPlugin&#39;;</span>
<span class="line">import useAutoRunPlugin from &#39;./plugins/useAutoRunPlugin&#39;;</span>
<span class="line">+import useRefreshOnWindowFocusPlugin from &#39;./plugins/useRefreshOnWindowFocusPlugin&#39;;</span>
<span class="line">function useRequest(service, options = {}, plugins) {</span>
<span class="line">  return useRequestImplement(service, options, [...(plugins || []),</span>
<span class="line">    useLoadingDelayPlugin,</span>
<span class="line">    usePollingPlugin,</span>
<span class="line">    useAutoRunPlugin,</span>
<span class="line">+   useRefreshOnWindowFocusPlugin</span>
<span class="line">  ]);</span>
<span class="line">}</span>
<span class="line">export default useRequest;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_14-3-userefreshonwindowfocusplugin-js" tabindex="-1"><a class="header-anchor" href="#_14-3-userefreshonwindowfocusplugin-js"><span>14.3 useRefreshOnWindowFocusPlugin.js</span></a></h3><p>src\\ahooks\\useRequest\\src\\plugins\\useRefreshOnWindowFocusPlugin.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useEffect<span class="token punctuation">,</span> useRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> useUnmount <span class="token keyword">from</span> <span class="token string">&#39;../../../useUnmount&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> limit <span class="token keyword">from</span> <span class="token string">&#39;../utils/limit&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> subscribeFocus <span class="token keyword">from</span> <span class="token string">&#39;../utils/subscribeFocus&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">useRefreshOnWindowFocusPlugin</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">fetchInstance<span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">  refreshOnWindowFocus<span class="token punctuation">,</span></span>
<span class="line">  focusTimespan <span class="token operator">=</span> <span class="token number">5000</span></span>
<span class="line"><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> unsubscribeRef <span class="token operator">=</span> <span class="token function">useRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">const</span> <span class="token function-variable function">stopSubscribe</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    unsubscribeRef<span class="token punctuation">.</span>current<span class="token operator">?.</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>refreshOnWindowFocus<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">const</span> limitRefresh <span class="token operator">=</span> <span class="token function">limit</span><span class="token punctuation">(</span>fetchInstance<span class="token punctuation">.</span><span class="token function">refresh</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>fetchInstance<span class="token punctuation">)</span><span class="token punctuation">,</span> focusTimespan<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      unsubscribeRef<span class="token punctuation">.</span>current <span class="token operator">=</span> <span class="token function">subscribeFocus</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">limitRefresh</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">stopSubscribe</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>refreshOnWindowFocus<span class="token punctuation">,</span> focusTimespan<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token function">useUnmount</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">stopSubscribe</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> useRefreshOnWindowFocusPlugin<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_14-4-limit-js" tabindex="-1"><a class="header-anchor" href="#_14-4-limit-js"><span>14.4 limit.js</span></a></h3><p>src\\ahooks\\useRequest\\src\\utils\\limit.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">limit</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> timespan</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> pending <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>pending<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line">    pending <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token function">fn</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">      pending <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span> timespan<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_14-5-subscribefocus-js" tabindex="-1"><a class="header-anchor" href="#_14-5-subscribefocus-js"><span>14.5 subscribeFocus.js</span></a></h3><p>src\\ahooks\\useRequest\\src\\utils\\subscribeFocus.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> isDocumentVisible <span class="token keyword">from</span> <span class="token string">&#39;./isDocumentVisible&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> listeners <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token parameter">listener</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  listeners<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>listener<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token function">unsubscribe</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> index <span class="token operator">=</span> listeners<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>listener<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    listeners<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">revalidate</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">isDocumentVisible</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> listeners<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> listener <span class="token operator">=</span> listeners<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token function">listener</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;visibilitychange&#39;</span><span class="token punctuation">,</span> revalidate<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;focus&#39;</span><span class="token punctuation">,</span> revalidate<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> subscribe<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_15-防抖" tabindex="-1"><a class="header-anchor" href="#_15-防抖"><span>15.防抖</span></a></h2><ul><li><a href="https://ahooks.js.org/zh-CN/hooks/use-request/debounce" target="_blank" rel="noopener noreferrer">debounce</a></li><li><a href="https://www.lodashjs.com/docs/lodash.debounce/" target="_blank" rel="noopener noreferrer">lodash.debounce</a></li><li>通过设置 <code>options.debounceWait</code>，进入防抖模式，此时如果频繁触发 run 或者 runAsync，则会以防抖策略进行请求。</li></ul><h3 id="_15-1-app-js" tabindex="-1"><a class="header-anchor" href="#_15-1-app-js"><span>15.1 App.js</span></a></h3><p>src\\App.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React from &#39;react&#39;;</span>
<span class="line">import { useRequest } from &#39;./ahooks&#39;;</span>
<span class="line">let counter = 0;</span>
<span class="line">+function getName(suffix) {</span>
<span class="line">  return new Promise((resolve, reject) =&gt; {</span>
<span class="line">    setTimeout(() =&gt; {</span>
<span class="line">+     resolve(\`zhufeng\` + suffix);</span>
<span class="line">    }, 300);</span>
<span class="line">  });</span>
<span class="line">}</span>
<span class="line">function App() {</span>
<span class="line">  const { data: name, loading, run } = useRequest(getName, {</span>
<span class="line">+   manual: true,</span>
<span class="line">+   debounceWait: 1000</span>
<span class="line">  });</span>
<span class="line">  return (</span>
<span class="line">    &lt;&gt;</span>
<span class="line">      &lt;input onChange={(e) =&gt; run(e.target.value)} /&gt;</span>
<span class="line">      {loading ? &#39;加载中&#39; : name ? &lt;div&gt;用户名: {name}&lt;/div&gt; : null}</span>
<span class="line">    &lt;/&gt;</span>
<span class="line">  );</span>
<span class="line">};</span>
<span class="line">export default App;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_15-2-userequest-js" tabindex="-1"><a class="header-anchor" href="#_15-2-userequest-js"><span>15.2 useRequest.js</span></a></h3><p>src\\ahooks\\useRequest\\src\\useRequest.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import useRequestImplement from &#39;./useRequestImplement&#39;;</span>
<span class="line">import useLoadingDelayPlugin from &#39;./plugins/useLoadingDelayPlugin&#39;;</span>
<span class="line">import usePollingPlugin from &#39;./plugins/usePollingPlugin&#39;;</span>
<span class="line">import useAutoRunPlugin from &#39;./plugins/useAutoRunPlugin&#39;;</span>
<span class="line">import useRefreshOnWindowFocusPlugin from &#39;./plugins/useRefreshOnWindowFocusPlugin&#39;;</span>
<span class="line">+import useDebouncePlugin from &#39;./plugins/useDebouncePlugin&#39;;</span>
<span class="line">function useRequest(service, options = {}, plugins) {</span>
<span class="line">  return useRequestImplement(service, options, [...(plugins || []),</span>
<span class="line">    useLoadingDelayPlugin,</span>
<span class="line">    usePollingPlugin,</span>
<span class="line">    useAutoRunPlugin,</span>
<span class="line">    useRefreshOnWindowFocusPlugin,</span>
<span class="line">+   useDebouncePlugin</span>
<span class="line">  ]);</span>
<span class="line">}</span>
<span class="line">export default useRequest;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_15-3-usedebounceplugin-js" tabindex="-1"><a class="header-anchor" href="#_15-3-usedebounceplugin-js"><span>15.3 useDebouncePlugin.js</span></a></h3><p>src\\ahooks\\useRequest\\src\\plugins\\useDebouncePlugin.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useEffect<span class="token punctuation">,</span> useRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">useDebouncePlugin</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">fetchInstance<span class="token punctuation">,</span> <span class="token punctuation">{</span> debounceWait <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> debouncedRef <span class="token operator">=</span> <span class="token function">useRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>debounceWait<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">const</span> originRunAsync <span class="token operator">=</span> fetchInstance<span class="token punctuation">.</span><span class="token function">runAsync</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>fetchInstance<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      debouncedRef<span class="token punctuation">.</span>current <span class="token operator">=</span> <span class="token function">debounce</span><span class="token punctuation">(</span><span class="token parameter">callback</span> <span class="token operator">=&gt;</span> <span class="token function">callback</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> debounceWait<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      fetchInstance<span class="token punctuation">.</span><span class="token function-variable function">runAsync</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">          debouncedRef<span class="token punctuation">.</span>current<span class="token operator">?.</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">originRunAsync</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>resolve<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span>reject<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>debounceWait<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">debounce</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> wait</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> timer<span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>timer<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      timer <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span><span class="token punctuation">,</span> wait<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> useDebouncePlugin<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_16-节流" tabindex="-1"><a class="header-anchor" href="#_16-节流"><span>16.节流</span></a></h2><ul><li>通过设置 <code>options.throttleWait</code>，进入节流模式，此时如果频繁触发 run 或者 runAsync，则会以节流策略进行请求</li></ul><h3 id="_16-1-app-js" tabindex="-1"><a class="header-anchor" href="#_16-1-app-js"><span>16.1 App.js</span></a></h3><p>src\\App.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React from &#39;react&#39;;</span>
<span class="line">import { useRequest } from &#39;./ahooks&#39;;</span>
<span class="line">function getName(suffix = &#39;&#39;) {</span>
<span class="line">  return new Promise((resolve, reject) =&gt; {</span>
<span class="line">    setTimeout(() =&gt; {</span>
<span class="line">      resolve(\`zhufeng\` + suffix);</span>
<span class="line">    }, 300);</span>
<span class="line">  });</span>
<span class="line">}</span>
<span class="line">function App() {</span>
<span class="line">  const { data: name, loading, run } = useRequest(getName, {</span>
<span class="line">+   throttleWait: 1000</span>
<span class="line">  });</span>
<span class="line">  return (</span>
<span class="line">    &lt;&gt;</span>
<span class="line">      &lt;input onChange={(e) =&gt; run(e.target.value)} /&gt;</span>
<span class="line">      {loading ? &#39;加载中&#39; : name ? &lt;div&gt;用户名: {name}&lt;/div&gt; : null}</span>
<span class="line">    &lt;/&gt;</span>
<span class="line">  );</span>
<span class="line">};</span>
<span class="line">export default App;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_16-2-userequest-js" tabindex="-1"><a class="header-anchor" href="#_16-2-userequest-js"><span>16.2 useRequest.js</span></a></h3><p>src\\ahooks\\useRequest\\src\\useRequest.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import useRequestImplement from &#39;./useRequestImplement&#39;;</span>
<span class="line">import useLoadingDelayPlugin from &#39;./plugins/useLoadingDelayPlugin&#39;;</span>
<span class="line">import usePollingPlugin from &#39;./plugins/usePollingPlugin&#39;;</span>
<span class="line">import useAutoRunPlugin from &#39;./plugins/useAutoRunPlugin&#39;;</span>
<span class="line">import useRefreshOnWindowFocusPlugin from &#39;./plugins/useRefreshOnWindowFocusPlugin&#39;;</span>
<span class="line">import useDebouncePlugin from &#39;./plugins/useDebouncePlugin&#39;;</span>
<span class="line">+import useThrottlePlugin from &#39;./plugins/useThrottlePlugin&#39;;</span>
<span class="line">function useRequest(service, options = {}, plugins) {</span>
<span class="line">  return useRequestImplement(service, options, [...(plugins || []),</span>
<span class="line">    useLoadingDelayPlugin,</span>
<span class="line">    usePollingPlugin,</span>
<span class="line">    useAutoRunPlugin,</span>
<span class="line">    useRefreshOnWindowFocusPlugin,</span>
<span class="line">    useDebouncePlugin,</span>
<span class="line">+   useThrottlePlugin</span>
<span class="line">  ]);</span>
<span class="line">}</span>
<span class="line">export default useRequest;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_16-3-usethrottleplugin-js" tabindex="-1"><a class="header-anchor" href="#_16-3-usethrottleplugin-js"><span>16.3 useThrottlePlugin.js</span></a></h3><p>src\\ahooks\\useRequest\\src\\plugins\\useThrottlePlugin.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useEffect<span class="token punctuation">,</span> useRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">useThrottlePlugin</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">fetchInstance<span class="token punctuation">,</span> <span class="token punctuation">{</span> throttleWait <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> throttledRef <span class="token operator">=</span> <span class="token function">useRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>throttleWait<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">const</span> originRunAsync <span class="token operator">=</span> fetchInstance<span class="token punctuation">.</span><span class="token function">runAsync</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>fetchInstance<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      throttledRef<span class="token punctuation">.</span>current <span class="token operator">=</span> <span class="token function">throttle</span><span class="token punctuation">(</span><span class="token parameter">callback</span> <span class="token operator">=&gt;</span> <span class="token function">callback</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> throttleWait<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      fetchInstance<span class="token punctuation">.</span><span class="token function-variable function">runAsync</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">          throttledRef<span class="token punctuation">.</span>current<span class="token operator">?.</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">originRunAsync</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>resolve<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span>reject<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>throttleWait<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">throttle</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> wait</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> lastExecTime <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token function-variable function">throttledFn</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> currentTime <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">const</span> nextExecTime <span class="token operator">=</span> lastExecTime <span class="token operator">+</span> wait<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>currentTime <span class="token operator">&gt;=</span> nextExecTime<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      lastExecTime <span class="token operator">=</span> currentTime<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">return</span> throttledFn<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> useThrottlePlugin<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_17-错误重试" tabindex="-1"><a class="header-anchor" href="#_17-错误重试"><span>17.错误重试</span></a></h2><ul><li>通过设置 <code>options.retryCount</code>，指定错误重试次数，则 useRequest 在失败后会进行重试。</li></ul><h3 id="_17-1-app-js" tabindex="-1"><a class="header-anchor" href="#_17-1-app-js"><span>17.1 App.js</span></a></h3><p>src\\App.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React from &#39;react&#39;;</span>
<span class="line">import { useRequest } from &#39;./ahooks&#39;;</span>
<span class="line">function getName(suffix = &#39;&#39;) {</span>
<span class="line">  return new Promise((resolve, reject) =&gt; {</span>
<span class="line">    setTimeout(() =&gt; {</span>
<span class="line">      //resolve(\`zhufeng\` + suffix);</span>
<span class="line">      reject(new Error(&#39;获取用户名失败&#39;));</span>
<span class="line">    }, 2000);</span>
<span class="line">  });</span>
<span class="line">}</span>
<span class="line">function App() {</span>
<span class="line">  const { data: name, loading, run } = useRequest(getName, {</span>
<span class="line">+   retryCount: 3</span>
<span class="line">+   retryInterval:1000_</span>
<span class="line">  });</span>
<span class="line">  return (</span>
<span class="line">    &lt;&gt;</span>
<span class="line">      &lt;input onChange={(e) =&gt; run(e.target.value)} /&gt;</span>
<span class="line">      {loading ? &#39;加载中&#39; : name ? &lt;div&gt;用户名: {name}&lt;/div&gt; : null}</span>
<span class="line">    &lt;/&gt;</span>
<span class="line">  );</span>
<span class="line">};</span>
<span class="line">export default App;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_17-2-userequest-js" tabindex="-1"><a class="header-anchor" href="#_17-2-userequest-js"><span>17.2 useRequest.js</span></a></h3><p>src\\ahooks\\useRequest\\src\\useRequest.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import useRequestImplement from &#39;./useRequestImplement&#39;;</span>
<span class="line">import useLoadingDelayPlugin from &#39;./plugins/useLoadingDelayPlugin&#39;;</span>
<span class="line">import usePollingPlugin from &#39;./plugins/usePollingPlugin&#39;;</span>
<span class="line">import useAutoRunPlugin from &#39;./plugins/useAutoRunPlugin&#39;;</span>
<span class="line">import useRefreshOnWindowFocusPlugin from &#39;./plugins/useRefreshOnWindowFocusPlugin&#39;;</span>
<span class="line">import useDebouncePlugin from &#39;./plugins/useDebouncePlugin&#39;;</span>
<span class="line">import useThrottlePlugin from &#39;./plugins/useThrottlePlugin&#39;;</span>
<span class="line">+import useRetryPlugin from &#39;./plugins/useRetryPlugin&#39;;</span>
<span class="line">function useRequest(service, options = {}, plugins) {</span>
<span class="line">  return useRequestImplement(service, options, [...(plugins || []),</span>
<span class="line">    useLoadingDelayPlugin,</span>
<span class="line">    usePollingPlugin,</span>
<span class="line">    useAutoRunPlugin,</span>
<span class="line">    useRefreshOnWindowFocusPlugin,</span>
<span class="line">    useDebouncePlugin,</span>
<span class="line">    useThrottlePlugin,</span>
<span class="line">+   useRetryPlugin</span>
<span class="line">  ]);</span>
<span class="line">}</span>
<span class="line">export default useRequest;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_17-3-useretryplugin-js" tabindex="-1"><a class="header-anchor" href="#_17-3-useretryplugin-js"><span>17.3 useRetryPlugin.js</span></a></h3><p>src\\ahooks\\useRequest\\src\\plugins\\useRetryPlugin.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">useRetryPlugin</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">fetchInstance<span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">  retryInterval<span class="token punctuation">,</span></span>
<span class="line">  retryCount</span>
<span class="line"><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> timerRef <span class="token operator">=</span> <span class="token function">useRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">const</span> countRef <span class="token operator">=</span> <span class="token function">useRef</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//重试的次数</span></span>
<span class="line">  <span class="token keyword">const</span> triggerByRetry <span class="token operator">=</span> <span class="token function">useRef</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//是否由重试触发</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>retryCount<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function-variable function">onBefore</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>triggerByRetry<span class="token punctuation">.</span>current<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        countRef<span class="token punctuation">.</span>current <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">      triggerByRetry<span class="token punctuation">.</span>current <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span>timerRef<span class="token punctuation">.</span>current<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timerRef<span class="token punctuation">.</span>current<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function-variable function">onSuccess</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">      countRef<span class="token punctuation">.</span>current <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function-variable function">onError</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">      countRef<span class="token punctuation">.</span>current <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span>retryCount <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">||</span> countRef<span class="token punctuation">.</span>current <span class="token operator">&lt;=</span> retryCount<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">const</span> timeout <span class="token operator">=</span> retryInterval <span class="token operator">??</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span><span class="token number">1000</span> <span class="token operator">*</span> <span class="token number">2</span> <span class="token operator">**</span> countRef<span class="token punctuation">.</span>current<span class="token punctuation">,</span> <span class="token number">30000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        timerRef<span class="token punctuation">.</span>current <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">          triggerByRetry<span class="token punctuation">.</span>current <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line">          fetchInstance<span class="token punctuation">.</span><span class="token function">refresh</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span> timeout<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">        countRef<span class="token punctuation">.</span>current <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function-variable function">onCancel</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">      countRef<span class="token punctuation">.</span>current <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span>timerRef<span class="token punctuation">.</span>current<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timerRef<span class="token punctuation">.</span>current<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> useRetryPlugin<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_18-缓存" tabindex="-1"><a class="header-anchor" href="#_18-缓存"><span>18.缓存</span></a></h2><ul><li>如果设置了 <code>options.cacheKey</code>，<code>useRequest</code> 会将当前请求成功的数据缓存起来。下次组件初始化时，如果有缓存数据，我们会优先返回缓存数据，然后在背后发送新请求，也就是 SWR 的能力。</li><li>你可以通过 <code>options.staleTime</code>设置数据保持新鲜时间，在该时间内，我们认为数据是新鲜的，不会重新发起请求。</li><li>你也可以通过 <code>options.cacheTime</code> 设置数据缓存时间，超过该时间，我们会清空该条缓存数据。</li></ul><h3 id="_18-1-swr" tabindex="-1"><a class="header-anchor" href="#_18-1-swr"><span>18.1 SWR</span></a></h3><ul><li><p>swr 实际上是 Cache Control 中新增的一个试验性指令</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line">Cache<span class="token operator">-</span>Control<span class="token operator">:</span> max<span class="token operator">-</span>age<span class="token operator">=</span><span class="token number">86400</span><span class="token punctuation">,</span> stale<span class="token operator">-</span><span class="token keyword">while</span><span class="token operator">-</span>revalidate<span class="token operator">=</span><span class="token number">172800</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><img src="https://static.zhufengpeixun.com/swr_1652612004554.jpg" alt="swr"></p></li><li><p>设置了 <code>cacheKey</code>，在组件第二次加载时，会优先返回缓存的内容，然后在背后重新发起请求。你可以通过点击按钮来体验效果</p></li></ul><h4 id="_18-1-1-app-js" tabindex="-1"><a class="header-anchor" href="#_18-1-1-app-js"><span>18.1.1 App.js</span></a></h4><p>src\\App.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React, { useState } from &#39;react&#39;;</span>
<span class="line">import { useRequest } from &#39;./ahooks&#39;;</span>
<span class="line">let counter = 0;</span>
<span class="line">function getName() {</span>
<span class="line">  return new Promise((resolve, reject) =&gt; {</span>
<span class="line">    setTimeout(() =&gt; {</span>
<span class="line">+     resolve({</span>
<span class="line">+       time: new Date().toLocaleTimeString(), data: \`zhufeng\` + (++counter)</span>
<span class="line">+     });</span>
<span class="line">    }, 2000);</span>
<span class="line">  });</span>
<span class="line">}</span>
<span class="line">+function User() {</span>
<span class="line">+  const { data, loading } = useRequest(getName, {</span>
<span class="line">+    cacheKey: &#39;cacheKey&#39;,</span>
<span class="line">+  });</span>
<span class="line">+  if (!data &amp;&amp; loading) {</span>
<span class="line">+    return &lt;p&gt;加载中...&lt;/p&gt;;</span>
<span class="line">+  }</span>
<span class="line">+  return (</span>
<span class="line">+    &lt;&gt;</span>
<span class="line">+      &lt;p&gt;后台加载中: {loading ? &#39;true&#39; : &#39;false&#39;}&lt;/p&gt;</span>
<span class="line">+      &lt;p&gt;最近的请求时间: {data?.time}&lt;/p&gt;</span>
<span class="line">+      &lt;p&gt;{data?.data}&lt;/p&gt;</span>
<span class="line">+    &lt;/&gt;</span>
<span class="line">+  );</span>
<span class="line">+}</span>
<span class="line">function App() {</span>
<span class="line">+ const [visible, setVisible] = useState(true);</span>
<span class="line">+ return (</span>
<span class="line">+   &lt;div&gt;</span>
<span class="line">+     &lt;button type=&quot;button&quot; onClick={() =&gt; setVisible(!visible)}&gt;</span>
<span class="line">+       {visible ? &#39;隐藏&#39; : &#39;显示&#39;}</span>
<span class="line">+     &lt;/button&gt;</span>
<span class="line">+     {visible &amp;&amp; &lt;User /&gt;}</span>
<span class="line">+   &lt;/div&gt;</span>
<span class="line">+ );</span>
<span class="line">};</span>
<span class="line">export default App;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_18-1-2-userequest-js" tabindex="-1"><a class="header-anchor" href="#_18-1-2-userequest-js"><span>18.1.2 useRequest.js</span></a></h4><p>src\\ahooks\\useRequest\\src\\useRequest.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import useRequestImplement from &#39;./useRequestImplement&#39;;</span>
<span class="line">import useLoadingDelayPlugin from &#39;./plugins/useLoadingDelayPlugin&#39;;</span>
<span class="line">import usePollingPlugin from &#39;./plugins/usePollingPlugin&#39;;</span>
<span class="line">import useAutoRunPlugin from &#39;./plugins/useAutoRunPlugin&#39;;</span>
<span class="line">import useRefreshOnWindowFocusPlugin from &#39;./plugins/useRefreshOnWindowFocusPlugin&#39;;</span>
<span class="line">import useDebouncePlugin from &#39;./plugins/useDebouncePlugin&#39;;</span>
<span class="line">import useThrottlePlugin from &#39;./plugins/useThrottlePlugin&#39;;</span>
<span class="line">import useRetryPlugin from &#39;./plugins/useRetryPlugin&#39;;</span>
<span class="line">+import useCachePlugin from &#39;./plugins/useCachePlugin&#39;;</span>
<span class="line">function useRequest(service, options = {}, plugins) {</span>
<span class="line">  return useRequestImplement(service, options, [...(plugins || []),</span>
<span class="line">    useLoadingDelayPlugin,</span>
<span class="line">    usePollingPlugin,</span>
<span class="line">    useAutoRunPlugin,</span>
<span class="line">    useRefreshOnWindowFocusPlugin,</span>
<span class="line">    useDebouncePlugin,</span>
<span class="line">    useThrottlePlugin,</span>
<span class="line">    useRetryPlugin,</span>
<span class="line">+   useCachePlugin</span>
<span class="line">  ]);</span>
<span class="line">}</span>
<span class="line">export default useRequest;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_18-1-3-usecacheplugin-js" tabindex="-1"><a class="header-anchor" href="#_18-1-3-usecacheplugin-js"><span>18.1.3 useCachePlugin.js</span></a></h4><p>src\\ahooks\\useRequest\\src\\plugins\\useCachePlugin.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> cache <span class="token keyword">from</span> <span class="token string">&#39;../utils/cache&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">useCachePlugin</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">fetchInstance<span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">  cacheKey</span>
<span class="line"><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token function-variable function">_setCache</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span> cachedData</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    cache<span class="token punctuation">.</span><span class="token function">setCache</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> cachedData<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">const</span> <span class="token function-variable function">_getCache</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> cache<span class="token punctuation">.</span><span class="token function">getCache</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>cacheKey<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function-variable function">onBefore</span><span class="token operator">:</span> <span class="token parameter">params</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">const</span> cacheData <span class="token operator">=</span> <span class="token function">_getCache</span><span class="token punctuation">(</span>cacheKey<span class="token punctuation">,</span> params<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>cacheData <span class="token operator">||</span> <span class="token operator">!</span>Object<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>cacheData<span class="token punctuation">,</span> <span class="token string">&#39;data&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">      <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">data</span><span class="token operator">:</span> cacheData<span class="token operator">?.</span>data</span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function-variable function">onSuccess</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span> params</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span>cacheKey<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">_setCache</span><span class="token punctuation">(</span>cacheKey<span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">          data<span class="token punctuation">,</span></span>
<span class="line">          params<span class="token punctuation">,</span></span>
<span class="line">          <span class="token literal-property property">time</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> useCachePlugin<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_18-1-4-cache-js" tabindex="-1"><a class="header-anchor" href="#_18-1-4-cache-js"><span>18.1.4 cache.js</span></a></h4><p>src\\ahooks\\useRequest\\src\\utils\\cache.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">const</span> cache <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">setCache</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span> cachedData</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  cache<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token operator">...</span>cachedData</span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">getCache</span> <span class="token operator">=</span> <span class="token parameter">key</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> cache<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token punctuation">{</span> getCache<span class="token punctuation">,</span> setCache <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_18-2-数据保持新鲜" tabindex="-1"><a class="header-anchor" href="#_18-2-数据保持新鲜"><span>18.2 数据保持新鲜</span></a></h3><ul><li>通过设置 staleTime，我们可以指定数据新鲜时间，在这个时间内，不会重新发起请求。下面的示例设置了 <code>5s</code> 的新鲜时间</li></ul><h4 id="_18-2-1-app-js" tabindex="-1"><a class="header-anchor" href="#_18-2-1-app-js"><span>18.2.1 App.js</span></a></h4><p>src\\App.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React, { useState } from &#39;react&#39;;</span>
<span class="line">import { useRequest } from &#39;./ahooks&#39;;</span>
<span class="line">let counter = 0;</span>
<span class="line">function getName() {</span>
<span class="line">  return new Promise((resolve, reject) =&gt; {</span>
<span class="line">    setTimeout(() =&gt; {</span>
<span class="line">      resolve({</span>
<span class="line">        time: new Date().toLocaleTimeString(), data: \`zhufeng\` + (++counter)</span>
<span class="line">      });</span>
<span class="line">    }, 2000);</span>
<span class="line">  });</span>
<span class="line">}</span>
<span class="line">function User() {</span>
<span class="line">  const { data, loading } = useRequest(getName, {</span>
<span class="line">    cacheKey: &#39;cacheKey&#39;,</span>
<span class="line">+   staleTime: 5000</span>
<span class="line">  });</span>
<span class="line">  if (!data &amp;&amp; loading) {</span>
<span class="line">    return &lt;p&gt;加载中...&lt;/p&gt;;</span>
<span class="line">  }</span>
<span class="line">  return (</span>
<span class="line">    &lt;&gt;</span>
<span class="line">      &lt;p&gt;后台加载中: {loading ? &#39;true&#39; : &#39;false&#39;}&lt;/p&gt;</span>
<span class="line">      &lt;p&gt;最近的请求时间: {data?.time}&lt;/p&gt;</span>
<span class="line">      &lt;p&gt;{data?.data}&lt;/p&gt;</span>
<span class="line">    &lt;/&gt;</span>
<span class="line">  );</span>
<span class="line">}</span>
<span class="line">function App() {</span>
<span class="line">  const [visible, setVisible] = useState(true);</span>
<span class="line">  return (</span>
<span class="line">    &lt;div&gt;</span>
<span class="line">      &lt;button type=&quot;button&quot; onClick={() =&gt; setVisible(!visible)}&gt;</span>
<span class="line">        {visible ? &#39;隐藏&#39; : &#39;显示&#39;}</span>
<span class="line">      &lt;/button&gt;</span>
<span class="line">      {visible &amp;&amp; &lt;User /&gt;}</span>
<span class="line">    &lt;/div&gt;</span>
<span class="line">  );</span>
<span class="line">};</span>
<span class="line">export default App;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_18-2-2-usecacheplugin-js" tabindex="-1"><a class="header-anchor" href="#_18-2-2-usecacheplugin-js"><span>18.2.2 useCachePlugin.js</span></a></h4><p>src\\ahooks\\useRequest\\src\\plugins\\useCachePlugin.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import * as cache from &#39;../utils/cache&#39;;</span>
<span class="line">const useCachePlugin = (fetchInstance, {</span>
<span class="line">  cacheKey,</span>
<span class="line">+ staleTime = 0,</span>
<span class="line">}) =&gt; {</span>
<span class="line">  const _setCache = (key, cachedData) =&gt; {</span>
<span class="line">    cache.setCache(key, cachedData);</span>
<span class="line">  };</span>
<span class="line"></span>
<span class="line">  const _getCache = (key) =&gt; {</span>
<span class="line">    return cache.getCache(key);</span>
<span class="line">  };</span>
<span class="line"></span>
<span class="line">  if (!cacheKey) {</span>
<span class="line">    return {};</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  return {</span>
<span class="line">    onBefore: params =&gt; {</span>
<span class="line">      const cacheData = _getCache(cacheKey, params);</span>
<span class="line">      if (!cacheData || !Object.hasOwnProperty.call(cacheData, &#39;data&#39;)) {</span>
<span class="line">        return {};</span>
<span class="line">      }</span>
<span class="line">+     if (staleTime === -1 || new Date().getTime() - cacheData.time &lt;= staleTime) {</span>
<span class="line">+       return {</span>
<span class="line">+         loading: false,</span>
<span class="line">+         data: cacheData?.data,</span>
<span class="line">+         returnNow: true</span>
<span class="line">+       };</span>
<span class="line">+     } else {</span>
<span class="line">        return {</span>
<span class="line">          data: cacheData?.data</span>
<span class="line">        };</span>
<span class="line">+     }</span>
<span class="line">    },</span>
<span class="line">    onSuccess: (data) =&gt; {</span>
<span class="line">      if (cacheKey) {</span>
<span class="line">        _setCache(cacheKey, {</span>
<span class="line">          data,</span>
<span class="line">          time: new Date().getTime()</span>
<span class="line">        });</span>
<span class="line">      }</span>
<span class="line">    }</span>
<span class="line">  };</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line">export default useCachePlugin;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_18-2-3-fetch-js" tabindex="-1"><a class="header-anchor" href="#_18-2-3-fetch-js"><span>18.2.3 Fetch.js</span></a></h4><p>src\\ahooks\\useRequest\\src\\Fetch.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> isFunction <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../../utils&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Fetch</span> <span class="token punctuation">{</span></span>
<span class="line">  count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">serviceRef<span class="token punctuation">,</span> options<span class="token punctuation">,</span> subscribe<span class="token punctuation">,</span> initState <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>serviceRef <span class="token operator">=</span> serviceRef<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>options <span class="token operator">=</span> options<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>subscribe <span class="token operator">=</span> subscribe<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">loading</span><span class="token operator">:</span> <span class="token operator">!</span>options<span class="token punctuation">.</span>manual<span class="token punctuation">,</span> <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token literal-property property">error</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token operator">...</span>initState <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token function-variable function">setState</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">s <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">,</span> <span class="token operator">...</span>s <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token function-variable function">runAsync</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>params</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>count <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">const</span> currentCount <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>   <span class="token keyword">const</span> <span class="token punctuation">{</span> stopNow <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">,</span> returnNow <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token operator">...</span>state <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">runPluginHandler</span><span class="token punctuation">(</span><span class="token string">&#39;onBefore&#39;</span><span class="token punctuation">,</span> params<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>stopNow<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">loading</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> params<span class="token punctuation">,</span> <span class="token operator">...</span>state <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>   <span class="token keyword">if</span> <span class="token punctuation">(</span>returnNow<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>     <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>state<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>   <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>options<span class="token punctuation">.</span>onBefore<span class="token operator">?.</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">let</span> <span class="token punctuation">{</span> servicePromise <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">runPluginHandler</span><span class="token punctuation">(</span><span class="token string">&#39;onRequest&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>serviceRef<span class="token punctuation">.</span>current<span class="token punctuation">,</span> params<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>servicePromise<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        servicePromise <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>serviceRef<span class="token punctuation">.</span><span class="token function">current</span><span class="token punctuation">(</span><span class="token operator">...</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">      <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> servicePromise<span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span>currentCount <span class="token operator">!==</span> <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">loading</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token literal-property property">data</span><span class="token operator">:</span> res<span class="token punctuation">,</span> <span class="token literal-property property">error</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> params <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span>options<span class="token punctuation">.</span>onSuccess<span class="token operator">?.</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> params<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">runPluginHandler</span><span class="token punctuation">(</span><span class="token string">&#39;onSuccess&#39;</span><span class="token punctuation">,</span> res<span class="token punctuation">,</span> params<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span>options<span class="token punctuation">.</span>onFinally<span class="token operator">?.</span><span class="token punctuation">(</span>params<span class="token punctuation">,</span> res<span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span>currentCount <span class="token operator">===</span> <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">runPluginHandler</span><span class="token punctuation">(</span><span class="token string">&#39;onFinally&#39;</span><span class="token punctuation">,</span> params<span class="token punctuation">,</span> res<span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span>currentCount <span class="token operator">!==</span> <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">loading</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> error<span class="token punctuation">,</span> params <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span>options<span class="token punctuation">.</span>onError<span class="token operator">?.</span><span class="token punctuation">(</span>error<span class="token punctuation">,</span> params<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">runPluginHandler</span><span class="token punctuation">(</span><span class="token string">&#39;onError&#39;</span><span class="token punctuation">,</span> error<span class="token punctuation">,</span> params<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span>options<span class="token punctuation">.</span>onFinally<span class="token operator">?.</span><span class="token punctuation">(</span>params<span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span>currentCount <span class="token operator">===</span> <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">runPluginHandler</span><span class="token punctuation">(</span><span class="token string">&#39;onFinally&#39;</span><span class="token punctuation">,</span> params<span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">      <span class="token keyword">throw</span> error<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token function-variable function">run</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>params</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">runAsync</span><span class="token punctuation">(</span><span class="token operator">...</span>params<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">error</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>options<span class="token punctuation">.</span>onError<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token function">refresh</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>params <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">refreshAsync</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">runAsync</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>params <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token function">mutate</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> targetData<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isFunction</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      targetData <span class="token operator">=</span> <span class="token function">data</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">      targetData <span class="token operator">=</span> data<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">runPluginHandler</span><span class="token punctuation">(</span><span class="token string">&#39;onMutate&#39;</span><span class="token punctuation">,</span> targetData<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">data</span><span class="token operator">:</span> targetData</span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token function">cancel</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>count <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">loading</span><span class="token operator">:</span> <span class="token boolean">false</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>options<span class="token punctuation">.</span>onCancel<span class="token operator">?.</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">runPluginHandler</span><span class="token punctuation">(</span><span class="token string">&#39;onCancel&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token function">runPluginHandler</span><span class="token punctuation">(</span><span class="token parameter">event<span class="token punctuation">,</span> <span class="token operator">...</span>rest</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> r <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>pluginImpls<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">i</span> <span class="token operator">=&gt;</span> i<span class="token punctuation">[</span>event<span class="token punctuation">]</span><span class="token operator">?.</span><span class="token punctuation">(</span><span class="token operator">...</span>rest<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>Boolean<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token operator">...</span>r<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> Fetch<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_18-3-参数缓存" tabindex="-1"><a class="header-anchor" href="#_18-3-参数缓存"><span>18.3 参数缓存</span></a></h3><ul><li>缓存的数据包括 data 和 params，通过 params 缓存机制，我们可以记忆上一次请求的条件，并在下次初始化。</li></ul><h4 id="_18-3-1-app-js" tabindex="-1"><a class="header-anchor" href="#_18-3-1-app-js"><span>18.3.1 App.js</span></a></h4><p>src\\App.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React, { useState } from &#39;react&#39;;</span>
<span class="line">import { useRequest } from &#39;./ahooks&#39;;</span>
<span class="line">let counter = 0;</span>
<span class="line">+function getName(keyword = &#39;&#39;) {</span>
<span class="line">  return new Promise((resolve, reject) =&gt; {</span>
<span class="line">    setTimeout(() =&gt; {</span>
<span class="line">      resolve({</span>
<span class="line">+       time: new Date().toLocaleTimeString(), data: keyword + (++counter)</span>
<span class="line">      });</span>
<span class="line">    }, 2000);</span>
<span class="line">  });</span>
<span class="line">}</span>
<span class="line">function User() {</span>
<span class="line">+ const { data, loading, params, run } = useRequest(getName, {</span>
<span class="line">-   manual: true,</span>
<span class="line">    cacheKey: &#39;cacheKey&#39;,</span>
<span class="line">+   staleTime: 0</span>
<span class="line">  });</span>
<span class="line">+ const [keyword, setKeyword] = useState(params[0] || &quot;&quot;);</span>
<span class="line">  if (!data &amp;&amp; loading) {</span>
<span class="line">    return &lt;p&gt;加载中...&lt;/p&gt;;</span>
<span class="line">  }</span>
<span class="line">  return (</span>
<span class="line">    &lt;&gt;</span>
<span class="line">+     &lt;div&gt;</span>
<span class="line">+       &lt;input</span>
<span class="line">+         value={keyword}</span>
<span class="line">+         onChange={(e) =&gt; setKeyword(e.target.value)}</span>
<span class="line">+       /&gt;</span>
<span class="line">+       &lt;button</span>
<span class="line">+         onClick={() =&gt; {</span>
<span class="line">+           run(keyword);</span>
<span class="line">+         }}</span>
<span class="line">+       &gt;</span>
<span class="line">+         获取用户名</span>
<span class="line">+       &lt;/button&gt;</span>
<span class="line">+     &lt;/div&gt;</span>
<span class="line">      &lt;p&gt;后台加载中: {loading ? &#39;true&#39; : &#39;false&#39;}&lt;/p&gt;</span>
<span class="line">      &lt;p&gt;最近的请求时间: {data?.time}&lt;/p&gt;</span>
<span class="line">      &lt;p&gt;Keyword: {keyword}&lt;/p&gt;</span>
<span class="line">      &lt;p&gt;{data?.data}&lt;/p&gt;</span>
<span class="line">    &lt;/&gt;</span>
<span class="line">  );</span>
<span class="line">}</span>
<span class="line">function App() {</span>
<span class="line">  const [visible, setVisible] = useState(true);</span>
<span class="line">  return (</span>
<span class="line">    &lt;div&gt;</span>
<span class="line">      &lt;button type=&quot;button&quot; onClick={() =&gt; setVisible(!visible)}&gt;</span>
<span class="line">        {visible ? &#39;隐藏&#39; : &#39;显示&#39;}</span>
<span class="line">      &lt;/button&gt;</span>
<span class="line">      {visible &amp;&amp; &lt;User /&gt;}</span>
<span class="line">    &lt;/div&gt;</span>
<span class="line">  );</span>
<span class="line">};</span>
<span class="line">export default App;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_18-3-2-userequestimplement-js" tabindex="-1"><a class="header-anchor" href="#_18-3-2-userequestimplement-js"><span>18.3.2 useRequestImplement.js</span></a></h4><p>src\\ahooks\\useRequest\\src\\useRequestImplement.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import useCreation from &#39;../../useCreation&#39;;</span>
<span class="line">import useLatest from &#39;../../useLatest&#39;;</span>
<span class="line">import useMount from &#39;../../useMount&#39;;</span>
<span class="line">import useUpdate from &#39;../../useUpdate&#39;;</span>
<span class="line">import Fetch from &#39;./Fetch&#39;;</span>
<span class="line">import useMemoizedFn from &#39;../../useMemoizedFn&#39;;</span>
<span class="line">import useUnmount from &#39;../../useUnmount&#39;;</span>
<span class="line">function useRequestImplement(service, options = {}, plugins = []) {</span>
<span class="line">  const { manual = false, ...rest } = options;</span>
<span class="line">  const fetchOptions = { manual, ...rest };</span>
<span class="line">  const serviceRef = useLatest(service);</span>
<span class="line">  const update = useUpdate();</span>
<span class="line">  const fetchInstance = useCreation(() =&gt; {</span>
<span class="line">    const initState = plugins.map(p =&gt; p?.onInit?.(fetchOptions)).filter(Boolean);</span>
<span class="line">    return new Fetch(serviceRef, fetchOptions, update, Object.assign({}, ...initState));</span>
<span class="line">  }, []);</span>
<span class="line">  //fetchInstance.options = fetchOptions;</span>
<span class="line">  fetchInstance.pluginImpls = plugins.map(p =&gt; p(fetchInstance, fetchOptions));</span>
<span class="line">  useMount(() =&gt; {</span>
<span class="line">    if (!manual) {</span>
<span class="line">      const params = fetchInstance.state.params || options.defaultParams || [];</span>
<span class="line">      fetchInstance.run(...params);</span>
<span class="line">    }</span>
<span class="line">  });</span>
<span class="line">  useUnmount(() =&gt; {</span>
<span class="line">    fetchInstance.cancel();</span>
<span class="line">  });</span>
<span class="line">  return {</span>
<span class="line">    loading: fetchInstance.state.loading,</span>
<span class="line">    data: fetchInstance.state.data,</span>
<span class="line">    error: fetchInstance.state.error,</span>
<span class="line">+   params: fetchInstance.state.params || [],</span>
<span class="line">    run: useMemoizedFn(fetchInstance.run.bind(fetchInstance)),</span>
<span class="line">    runAsync: useMemoizedFn(fetchInstance.runAsync.bind(fetchInstance)),</span>
<span class="line">    refresh: useMemoizedFn(fetchInstance.refresh.bind(fetchInstance)),</span>
<span class="line">    refreshAsync: useMemoizedFn(fetchInstance.refreshAsync.bind(fetchInstance)),</span>
<span class="line">    mutate: useMemoizedFn(fetchInstance.mutate.bind(fetchInstance)),</span>
<span class="line">    cancel: useMemoizedFn(fetchInstance.cancel.bind(fetchInstance))</span>
<span class="line">  };</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">export default useRequestImplement;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_18-3-3-usecacheplugin-js" tabindex="-1"><a class="header-anchor" href="#_18-3-3-usecacheplugin-js"><span>18.3.3 useCachePlugin.js</span></a></h4><p>src\\ahooks\\useRequest\\src\\plugins\\useCachePlugin.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> cache <span class="token keyword">from</span> <span class="token string">&#39;../utils/cache&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span><span class="token keyword">import</span> useCreation <span class="token keyword">from</span> <span class="token string">&#39;../../../useCreation&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">useCachePlugin</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">fetchInstance<span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">  cacheKey<span class="token punctuation">,</span></span>
<span class="line">  staleTime <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token function-variable function">_setCache</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span> cachedData</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    cache<span class="token punctuation">.</span><span class="token function">setCache</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> cachedData<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">const</span> <span class="token function-variable function">_getCache</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> cache<span class="token punctuation">.</span><span class="token function">getCache</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span> <span class="token function">useCreation</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>   <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>cacheKey<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>     <span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>   <span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">+</span>   <span class="token keyword">const</span> cacheData <span class="token operator">=</span> <span class="token function">_getCache</span><span class="token punctuation">(</span>cacheKey<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>   <span class="token keyword">if</span> <span class="token punctuation">(</span>cacheData <span class="token operator">&amp;&amp;</span> Object<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>cacheData<span class="token punctuation">,</span> <span class="token string">&#39;data&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>     fetchInstance<span class="token punctuation">.</span>state<span class="token punctuation">.</span>data <span class="token operator">=</span> cacheData<span class="token punctuation">.</span>data<span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>     fetchInstance<span class="token punctuation">.</span>state<span class="token punctuation">.</span>params <span class="token operator">=</span> cacheData<span class="token punctuation">.</span>params<span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>     <span class="token keyword">if</span> <span class="token punctuation">(</span>staleTime <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">||</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> cacheData<span class="token punctuation">.</span>time <span class="token operator">&lt;=</span> staleTime<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>       fetchInstance<span class="token punctuation">.</span>state<span class="token punctuation">.</span>loading <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>     <span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">+</span>   <span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">+</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>cacheKey<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function-variable function">onBefore</span><span class="token operator">:</span> <span class="token parameter">params</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">const</span> cacheData <span class="token operator">=</span> <span class="token function">_getCache</span><span class="token punctuation">(</span>cacheKey<span class="token punctuation">,</span> params<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>cacheData <span class="token operator">||</span> <span class="token operator">!</span>Object<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>cacheData<span class="token punctuation">,</span> <span class="token string">&#39;data&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span>staleTime <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">||</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> cacheData<span class="token punctuation">.</span>time <span class="token operator">&lt;=</span> staleTime<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token literal-property property">loading</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token literal-property property">data</span><span class="token operator">:</span> cacheData<span class="token operator">?.</span>data<span class="token punctuation">,</span></span>
<span class="line">          <span class="token literal-property property">returnNow</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token literal-property property">data</span><span class="token operator">:</span> cacheData<span class="token operator">?.</span>data</span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function-variable function">onSuccess</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span> params</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span>cacheKey<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">_setCache</span><span class="token punctuation">(</span>cacheKey<span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">          data<span class="token punctuation">,</span></span>
<span class="line">          params<span class="token punctuation">,</span></span>
<span class="line">          <span class="token literal-property property">time</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> useCachePlugin<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_18-4-删除缓存" tabindex="-1"><a class="header-anchor" href="#_18-4-删除缓存"><span>18.4 删除缓存</span></a></h3><ul><li>ahooks 提供了一个 <code>clearCache</code> 方法，可以清除指定 <code>cacheKey</code> 的缓存数据。</li></ul><h4 id="_18-4-1-app-js" tabindex="-1"><a class="header-anchor" href="#_18-4-1-app-js"><span>18.4.1 App.js</span></a></h4><p>src\\App.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React, { useState } from &#39;react&#39;;</span>
<span class="line">+import { useRequest, clearCache } from &#39;./ahooks&#39;;</span>
<span class="line">let counter = 0;</span>
<span class="line">function getName(keyword = &#39;&#39;) {</span>
<span class="line">  return new Promise((resolve, reject) =&gt; {</span>
<span class="line">    setTimeout(() =&gt; {</span>
<span class="line">      resolve({</span>
<span class="line">        time: new Date().toLocaleTimeString(), data: keyword + (++counter)</span>
<span class="line">      });</span>
<span class="line">    }, 2000);</span>
<span class="line">  });</span>
<span class="line">}</span>
<span class="line">function User() {</span>
<span class="line">  const { data, loading, params, run } = useRequest(getName, {</span>
<span class="line">    cacheKey: &#39;cacheKey&#39;,</span>
<span class="line">+   staleTime: 5000</span>
<span class="line">  });</span>
<span class="line">  const [keyword, setKeyword] = useState(params[0] || &quot;&quot;);</span>
<span class="line">  if (!data &amp;&amp; loading) {</span>
<span class="line">    return &lt;p&gt;加载中...&lt;/p&gt;;</span>
<span class="line">  }</span>
<span class="line">  return (</span>
<span class="line">    &lt;&gt;</span>
<span class="line">      &lt;div&gt;</span>
<span class="line">        &lt;input</span>
<span class="line">          value={keyword}</span>
<span class="line">          onChange={(e) =&gt; setKeyword(e.target.value)}</span>
<span class="line">        /&gt;</span>
<span class="line">        &lt;button</span>
<span class="line">          onClick={() =&gt; {</span>
<span class="line">            run(keyword);</span>
<span class="line">          }}</span>
<span class="line">        &gt;</span>
<span class="line">          获取用户名</span>
<span class="line">        &lt;/button&gt;</span>
<span class="line">      &lt;/div&gt;</span>
<span class="line">+     &lt;button onClick={() =&gt; clearCache(&#39;cacheKey&#39;)}&gt;</span>
<span class="line">+       清除缓存</span>
<span class="line">+     &lt;/button&gt;</span>
<span class="line">      &lt;p&gt;后台加载中: {loading ? &#39;true&#39; : &#39;false&#39;}&lt;/p&gt;</span>
<span class="line">      &lt;p&gt;最近的请求时间: {data?.time}&lt;/p&gt;</span>
<span class="line">      &lt;p&gt;Keyword: {keyword}&lt;/p&gt;</span>
<span class="line">      &lt;p&gt;{data?.data}&lt;/p&gt;</span>
<span class="line">    &lt;/&gt;</span>
<span class="line">  );</span>
<span class="line">}</span>
<span class="line">function App() {</span>
<span class="line">  const [visible, setVisible] = useState(true);</span>
<span class="line">  return (</span>
<span class="line">    &lt;div&gt;</span>
<span class="line">      &lt;button type=&quot;button&quot; onClick={() =&gt; setVisible(!visible)}&gt;</span>
<span class="line">        {visible ? &#39;隐藏&#39; : &#39;显示&#39;}</span>
<span class="line">      &lt;/button&gt;</span>
<span class="line">      {visible &amp;&amp; &lt;User /&gt;}</span>
<span class="line">    &lt;/div&gt;</span>
<span class="line">  );</span>
<span class="line">};</span>
<span class="line">export default App;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_18-4-2-ahooks-index-js" tabindex="-1"><a class="header-anchor" href="#_18-4-2-ahooks-index-js"><span>18.4.2 ahooks\\index.js</span></a></h4><p>src\\ahooks\\index.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">+import useRequest, { clearCache } from &#39;./useRequest&#39;;</span>
<span class="line">export {</span>
<span class="line">+  useRequest, clearCache</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_18-4-3-userequest-index-js" tabindex="-1"><a class="header-anchor" href="#_18-4-3-userequest-index-js"><span>18.4.3 useRequest\\index.js</span></a></h4><p>src\\ahooks\\useRequest\\index.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import useRequest from &#39;./src/useRequest&#39;;</span>
<span class="line">+import { clearCache } from &#39;./src/utils/cache&#39;;</span>
<span class="line">+export default useRequest;</span>
<span class="line">+export { clearCache };</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_18-4-4-cache-js" tabindex="-1"><a class="header-anchor" href="#_18-4-4-cache-js"><span>18.4.4 cache.js</span></a></h4><p>src\\ahooks\\useRequest\\src\\utils\\cache.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">const cache = new Map();</span>
<span class="line"></span>
<span class="line">const setCache = (key, cachedData) =&gt; {</span>
<span class="line">  cache.set(key, {</span>
<span class="line">    ...cachedData</span>
<span class="line">  });</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line">const getCache = key =&gt; {</span>
<span class="line">  return cache.get(key);</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line">+const clearCache = key =&gt; {</span>
<span class="line">+  if (key) {</span>
<span class="line">+    const cacheKeys = Array.isArray(key) ? key : [key];</span>
<span class="line">+    cacheKeys.forEach(cacheKey =&gt; cache.delete(cacheKey));</span>
<span class="line">+  } else {</span>
<span class="line">+    cache.clear();</span>
<span class="line">+  }</span>
<span class="line">+};</span>
<span class="line">export { getCache, setCache, clearCache };</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_18-5-自定义缓存" tabindex="-1"><a class="header-anchor" href="#_18-5-自定义缓存"><span>18.5 自定义缓存</span></a></h3><ul><li>通过配置 setCache 和 getCache，可以自定义数据缓存，比如可以将数据存储到 localStorage、IndexDB 等</li></ul><h4 id="_18-5-1-app-js" tabindex="-1"><a class="header-anchor" href="#_18-5-1-app-js"><span>18.5.1 App.js</span></a></h4><p>src\\App.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React, { useState } from &#39;react&#39;;</span>
<span class="line">import { useRequest, clearCache } from &#39;./ahooks&#39;;</span>
<span class="line">let counter = 0;</span>
<span class="line">function getName(keyword = &#39;&#39;) {</span>
<span class="line">  return new Promise((resolve, reject) =&gt; {</span>
<span class="line">    setTimeout(() =&gt; {</span>
<span class="line">      resolve({</span>
<span class="line">        time: new Date().toLocaleTimeString(), data: keyword + (++counter)</span>
<span class="line">      });</span>
<span class="line">    }, 2000);</span>
<span class="line">  });</span>
<span class="line">}</span>
<span class="line">function User() {</span>
<span class="line">  const { data, loading, params, run } = useRequest(getName, {</span>
<span class="line">    cacheKey: &#39;cacheKey&#39;,</span>
<span class="line">    staleTime: 5000,</span>
<span class="line">+   setCache: (data) =&gt; localStorage.setItem(&#39;cacheKey&#39;, JSON.stringify(data)),</span>
<span class="line">+   getCache: () =&gt; JSON.parse(localStorage.getItem(&#39;cacheKey&#39;) || &#39;{}&#39;),</span>
<span class="line">  });</span>
<span class="line">  const [keyword, setKeyword] = useState(params[0] || &quot;&quot;);</span>
<span class="line">  if (!data &amp;&amp; loading) {</span>
<span class="line">    return &lt;p&gt;加载中...&lt;/p&gt;;</span>
<span class="line">  }</span>
<span class="line">  return (</span>
<span class="line">    &lt;&gt;</span>
<span class="line">      &lt;div&gt;</span>
<span class="line">        &lt;input</span>
<span class="line">          value={keyword}</span>
<span class="line">          onChange={(e) =&gt; setKeyword(e.target.value)}</span>
<span class="line">        /&gt;</span>
<span class="line">        &lt;button</span>
<span class="line">          onClick={() =&gt; {</span>
<span class="line">            run(keyword);</span>
<span class="line">          }}</span>
<span class="line">        &gt;</span>
<span class="line">          获取用户名</span>
<span class="line">        &lt;/button&gt;</span>
<span class="line">      &lt;/div&gt;</span>
<span class="line">      &lt;button onClick={() =&gt; clearCache(&#39;cacheKey&#39;)}&gt;</span>
<span class="line">        清除缓存</span>
<span class="line">      &lt;/button&gt;</span>
<span class="line">      &lt;p&gt;后台加载中: {loading ? &#39;true&#39; : &#39;false&#39;}&lt;/p&gt;</span>
<span class="line">      &lt;p&gt;最近的请求时间: {data?.time}&lt;/p&gt;</span>
<span class="line">      &lt;p&gt;Keyword: {keyword}&lt;/p&gt;</span>
<span class="line">      &lt;p&gt;{data?.data}&lt;/p&gt;</span>
<span class="line">    &lt;/&gt;</span>
<span class="line">  );</span>
<span class="line">}</span>
<span class="line">function App() {</span>
<span class="line">  const [visible, setVisible] = useState(true);</span>
<span class="line">  return (</span>
<span class="line">    &lt;div&gt;</span>
<span class="line">      &lt;button type=&quot;button&quot; onClick={() =&gt; setVisible(!visible)}&gt;</span>
<span class="line">        {visible ? &#39;隐藏&#39; : &#39;显示&#39;}</span>
<span class="line">      &lt;/button&gt;</span>
<span class="line">      {visible &amp;&amp; &lt;User /&gt;}</span>
<span class="line">    &lt;/div&gt;</span>
<span class="line">  );</span>
<span class="line">};</span>
<span class="line">export default App;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_18-5-2-usecacheplugin-js" tabindex="-1"><a class="header-anchor" href="#_18-5-2-usecacheplugin-js"><span>18.5.2 useCachePlugin.js</span></a></h4><p>src\\ahooks\\useRequest\\src\\plugins\\useCachePlugin.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> cache <span class="token keyword">from</span> <span class="token string">&#39;../utils/cache&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> useCreation <span class="token keyword">from</span> <span class="token string">&#39;../../../useCreation&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">useCachePlugin</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">fetchInstance<span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">  cacheKey<span class="token punctuation">,</span></span>
<span class="line">  staleTime <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token operator">+</span> cacheTime <span class="token operator">=</span> <span class="token number">5</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token operator">+</span> setCache<span class="token operator">:</span> customSetCache<span class="token punctuation">,</span></span>
<span class="line"><span class="token operator">+</span> getCache<span class="token operator">:</span> customGetCache</span>
<span class="line"><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token function-variable function">_setCache</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span> cachedData</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>    <span class="token keyword">if</span> <span class="token punctuation">(</span>customSetCache<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>      <span class="token function">customSetCache</span><span class="token punctuation">(</span>cachedData<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">       cache<span class="token punctuation">.</span><span class="token function">setCache</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> cacheTime<span class="token punctuation">,</span> cachedData<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">const</span> <span class="token function-variable function">_getCache</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span> params</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>   <span class="token keyword">if</span> <span class="token punctuation">(</span>customGetCache<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>     <span class="token keyword">return</span> <span class="token function">customGetCache</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>   <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">return</span> cache<span class="token punctuation">.</span><span class="token function">getCache</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token function">useCreation</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>cacheKey<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">const</span> cacheData <span class="token operator">=</span> <span class="token function">_getCache</span><span class="token punctuation">(</span>cacheKey<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>cacheData <span class="token operator">&amp;&amp;</span> Object<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>cacheData<span class="token punctuation">,</span> <span class="token string">&#39;data&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      fetchInstance<span class="token punctuation">.</span>state<span class="token punctuation">.</span>data <span class="token operator">=</span> cacheData<span class="token punctuation">.</span>data<span class="token punctuation">;</span></span>
<span class="line">      fetchInstance<span class="token punctuation">.</span>state<span class="token punctuation">.</span>params <span class="token operator">=</span> cacheData<span class="token punctuation">.</span>params<span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span>staleTime <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">||</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> cacheData<span class="token punctuation">.</span>time <span class="token operator">&lt;=</span> staleTime<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        fetchInstance<span class="token punctuation">.</span>state<span class="token punctuation">.</span>loading <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>cacheKey<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function-variable function">onBefore</span><span class="token operator">:</span> <span class="token parameter">params</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">const</span> cacheData <span class="token operator">=</span> <span class="token function">_getCache</span><span class="token punctuation">(</span>cacheKey<span class="token punctuation">,</span> params<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>cacheData <span class="token operator">||</span> <span class="token operator">!</span>Object<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>cacheData<span class="token punctuation">,</span> <span class="token string">&#39;data&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span>staleTime <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">||</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> cacheData<span class="token punctuation">.</span>time <span class="token operator">&lt;=</span> staleTime<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token literal-property property">loading</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token literal-property property">data</span><span class="token operator">:</span> cacheData<span class="token operator">?.</span>data<span class="token punctuation">,</span></span>
<span class="line">          <span class="token literal-property property">returnNow</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token literal-property property">data</span><span class="token operator">:</span> cacheData<span class="token operator">?.</span>data</span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function-variable function">onSuccess</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span> params</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span>cacheKey<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">_setCache</span><span class="token punctuation">(</span>cacheKey<span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">          data<span class="token punctuation">,</span></span>
<span class="line">          params<span class="token punctuation">,</span></span>
<span class="line">          <span class="token literal-property property">time</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> useCachePlugin<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_18-6-数据共享" tabindex="-1"><a class="header-anchor" href="#_18-6-数据共享"><span>18.6 数据共享</span></a></h3><ul><li>同一个 <code>cacheKey</code> 的内容，在全局是共享的，这会带来以下几个特性 <ul><li>请求 <code>Promise</code> 共享，相同的 <code>cacheKey</code> 同时只会有一个在发起请求，后发起的会共用同一个请求 Promise</li><li>数据同步，任何时候，当我们改变其中某个 <code>cacheKey</code> 的内容时，其它相同 <code>cacheKey</code> 的内容均会同步</li></ul></li></ul><h4 id="_18-6-1-app-js" tabindex="-1"><a class="header-anchor" href="#_18-6-1-app-js"><span>18.6.1 App.js</span></a></h4><p>src\\App.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React from &#39;react&#39;;</span>
<span class="line">import { useRequest } from &#39;./ahooks&#39;;</span>
<span class="line">let counter = 0;</span>
<span class="line">function getName() {</span>
<span class="line">  return new Promise((resolve, reject) =&gt; {</span>
<span class="line">    setTimeout(() =&gt; {</span>
<span class="line">      resolve({</span>
<span class="line">+       time: new Date().toLocaleTimeString(), data: &#39;zhufeng&#39; + (++counter)</span>
<span class="line">      });</span>
<span class="line">    }, 2000);</span>
<span class="line">  });</span>
<span class="line">}</span>
<span class="line">function User() {</span>
<span class="line">+ const { data, loading, refresh } = useRequest(getName, {</span>
<span class="line">+   cacheKey: &#39;cacheKey&#39;,</span>
<span class="line">+ });</span>
<span class="line">+ return (</span>
<span class="line">+   &lt;&gt;</span>
<span class="line">+     &lt;p&gt;后台加载中: {loading ? &#39;true&#39; : &#39;false&#39;}&lt;/p&gt;</span>
<span class="line">+     &lt;button onClick={refresh} type=&quot;button&quot;&gt;</span>
<span class="line">+       更新</span>
<span class="line">+     &lt;/button&gt;</span>
<span class="line">+     &lt;p&gt;最近的请求时间: {data?.time}&lt;/p&gt;</span>
<span class="line">+     &lt;p&gt;{data?.data}&lt;/p&gt;</span>
<span class="line">+   &lt;/&gt;</span>
<span class="line">+ );</span>
<span class="line">}</span>
<span class="line">function App() {</span>
<span class="line">  return (</span>
<span class="line">    &lt;div&gt;</span>
<span class="line">+     &lt;User /&gt;</span>
<span class="line">+     &lt;hr /&gt;</span>
<span class="line">+     &lt;User /&gt;</span>
<span class="line">    &lt;/div&gt;</span>
<span class="line">  );</span>
<span class="line">};</span>
<span class="line">export default App;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_18-6-2-usecacheplugin-js" tabindex="-1"><a class="header-anchor" href="#_18-6-2-usecacheplugin-js"><span>18.6.2 useCachePlugin.js</span></a></h4><p>src\\ahooks\\useRequest\\src\\plugins\\useCachePlugin.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> cache <span class="token keyword">from</span> <span class="token string">&#39;../utils/cache&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> useCreation <span class="token keyword">from</span> <span class="token string">&#39;../../../useCreation&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> cachePromise <span class="token keyword">from</span> <span class="token string">&#39;../utils/cachePromise&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> cacheSubscribe <span class="token keyword">from</span> <span class="token string">&#39;../utils/cacheSubscribe&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">useCachePlugin</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">fetchInstance<span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">  cacheKey<span class="token punctuation">,</span></span>
<span class="line">  staleTime <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">  cacheTime <span class="token operator">=</span> <span class="token number">5</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">setCache</span><span class="token operator">:</span> customSetCache<span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">getCache</span><span class="token operator">:</span> customGetCache</span>
<span class="line"><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span> <span class="token keyword">const</span> unSubscribeRef <span class="token operator">=</span> <span class="token function">useRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span> <span class="token keyword">const</span> currentPromiseRef <span class="token operator">=</span> <span class="token function">useRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token function-variable function">_setCache</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span> cachedData</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>customSetCache<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">customSetCache</span><span class="token punctuation">(</span>cachedData<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">      cache<span class="token punctuation">.</span><span class="token function">setCache</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> cacheTime<span class="token punctuation">,</span> cachedData<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">+</span>   cacheSubscribe<span class="token punctuation">.</span><span class="token function">trigger</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> cachedData<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">const</span> <span class="token function-variable function">_getCache</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span> params</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>customGetCache<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">return</span> <span class="token function">customGetCache</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">return</span> cache<span class="token punctuation">.</span><span class="token function">getCache</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token function">useCreation</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>cacheKey<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">const</span> cacheData <span class="token operator">=</span> <span class="token function">_getCache</span><span class="token punctuation">(</span>cacheKey<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>cacheData <span class="token operator">&amp;&amp;</span> Object<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>cacheData<span class="token punctuation">,</span> <span class="token string">&#39;data&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      fetchInstance<span class="token punctuation">.</span>state<span class="token punctuation">.</span>data <span class="token operator">=</span> cacheData<span class="token punctuation">.</span>data<span class="token punctuation">;</span></span>
<span class="line">      fetchInstance<span class="token punctuation">.</span>state<span class="token punctuation">.</span>params <span class="token operator">=</span> cacheData<span class="token punctuation">.</span>params<span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span>staleTime <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">||</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> cacheData<span class="token punctuation">.</span>time <span class="token operator">&lt;=</span> staleTime<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        fetchInstance<span class="token punctuation">.</span>state<span class="token punctuation">.</span>loading <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>cacheKey<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function-variable function">onBefore</span><span class="token operator">:</span> <span class="token parameter">params</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">const</span> cacheData <span class="token operator">=</span> <span class="token function">_getCache</span><span class="token punctuation">(</span>cacheKey<span class="token punctuation">,</span> params<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>cacheData <span class="token operator">||</span> <span class="token operator">!</span>Object<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>cacheData<span class="token punctuation">,</span> <span class="token string">&#39;data&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span>staleTime <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">||</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> cacheData<span class="token punctuation">.</span>time <span class="token operator">&lt;=</span> staleTime<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token literal-property property">loading</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token literal-property property">data</span><span class="token operator">:</span> cacheData<span class="token operator">?.</span>data<span class="token punctuation">,</span></span>
<span class="line">          <span class="token literal-property property">returnNow</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token literal-property property">data</span><span class="token operator">:</span> cacheData<span class="token operator">?.</span>data</span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token operator">+</span>   <span class="token function-variable function">onRequest</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">service<span class="token punctuation">,</span> args</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>     <span class="token keyword">let</span> servicePromise <span class="token operator">=</span> cachePromise<span class="token punctuation">.</span><span class="token function">getCachePromise</span><span class="token punctuation">(</span>cacheKey<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>     <span class="token keyword">if</span> <span class="token punctuation">(</span>servicePromise <span class="token operator">&amp;&amp;</span> servicePromise <span class="token operator">!==</span> currentPromiseRef<span class="token punctuation">.</span>current<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>       <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>         servicePromise</span>
<span class="line"><span class="token operator">+</span>       <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>     <span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">+</span>     servicePromise <span class="token operator">=</span> <span class="token function">service</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>     currentPromiseRef<span class="token punctuation">.</span>current <span class="token operator">=</span> servicePromise<span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>     cachePromise<span class="token punctuation">.</span><span class="token function">setCachePromise</span><span class="token punctuation">(</span>cacheKey<span class="token punctuation">,</span> servicePromise<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>     <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>       servicePromise</span>
<span class="line"><span class="token operator">+</span>     <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>   <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function-variable function">onSuccess</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span> params</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span>cacheKey<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">_setCache</span><span class="token punctuation">(</span>cacheKey<span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">          data<span class="token punctuation">,</span></span>
<span class="line">          params<span class="token punctuation">,</span></span>
<span class="line">          <span class="token literal-property property">time</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>       unSubscribeRef<span class="token punctuation">.</span>current <span class="token operator">=</span> cacheSubscribe<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span>cacheKey<span class="token punctuation">,</span> <span class="token parameter">d</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>         fetchInstance<span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>           data<span class="token operator">:</span> d</span>
<span class="line"><span class="token operator">+</span>         <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>       <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>     <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> useCachePlugin<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_18-6-3-cachepromise-js" tabindex="-1"><a class="header-anchor" href="#_18-6-3-cachepromise-js"><span>18.6.3 cachePromise.js</span></a></h4><p>src\\ahooks\\useRequest\\src\\utils\\cachePromise.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">const</span> cachePromise <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">getCachePromise</span> <span class="token operator">=</span> <span class="token parameter">cacheKey</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> cachePromise<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>cacheKey<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">setCachePromise</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">cacheKey<span class="token punctuation">,</span> promise</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  cachePromise<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>cacheKey<span class="token punctuation">,</span> promise<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  promise<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    cachePromise<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>cacheKey<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> res<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    cachePromise<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>cacheKey<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token punctuation">{</span> getCachePromise<span class="token punctuation">,</span> setCachePromise <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_18-6-4-cachesubscribe-js" tabindex="-1"><a class="header-anchor" href="#_18-6-4-cachesubscribe-js"><span>18.6.4 cacheSubscribe.js</span></a></h4><p>src\\ahooks\\useRequest\\src\\utils\\cacheSubscribe.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">const</span> listeners <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">trigger</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>listeners<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    listeners<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=&gt;</span> <span class="token function">item</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">subscribe</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span> listener</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>listeners<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    listeners<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  listeners<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>listener<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token function">unsubscribe</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> index <span class="token operator">=</span> listeners<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>listener<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    listeners<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token punctuation">{</span> trigger<span class="token punctuation">,</span> subscribe <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,347)])])}const o=s(l,[["render",t]]),u=JSON.parse('{"path":"/strong/152.useRequest.html","title":"","lang":"en-US","frontmatter":{},"git":{"updatedTime":1681290319000,"contributors":[{"name":"yutao","username":"yutao","email":"642231346@qq.com","commits":1,"url":"https://github.com/yutao"}],"changelog":[{"hash":"f5ab8c9d34991ec274f7f652439afe5b2afb6147","time":1681290319000,"email":"642231346@qq.com","author":"yutao","message":"modify"}]},"filePathRelative":"strong/152.useRequest.md"}');export{o as comp,u as data};
