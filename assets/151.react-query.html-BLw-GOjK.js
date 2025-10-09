import{_ as n,c as a,a as e,o as p}from"./app-CD1YpnS1.js";const t={};function l(i,s){return p(),a("div",null,[...s[0]||(s[0]=[e(`<h2 id="_1-react-query介绍" tabindex="-1"><a class="header-anchor" href="#_1-react-query介绍"><span>1.React Query介绍</span></a></h2><ul><li><a href="https://react-query.tanstack.com/overview" target="_blank" rel="noopener noreferrer">react-query</a>基于Hooks,能够智能管理请求的一切内容，包括数据、状态、缓存，更新等</li><li>管理请求 <ul><li>基本上axios等请求库封装，可以实现请求、轮询、失败重试、无限加载等功能</li><li>可以在网络重连、窗口获得焦点等时机等向服务器发送请求同步状态</li></ul></li><li>状态管理 <ul><li>可以把服务器端的状态缓存在客户端的内存中，从而让任意组件获取这些状态</li></ul></li><li><a href="https://react-query.tanstack.com/comparison" target="_blank" rel="noopener noreferrer">comparison</a></li></ul><h2 id="_2-安装" tabindex="-1"><a class="header-anchor" href="#_2-安装"><span>2. 安装</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">npm install react-query axios --save</span>
<span class="line">npm install express cors morgan --save</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-基本查询" tabindex="-1"><a class="header-anchor" href="#_3-基本查询"><span>3.基本查询</span></a></h2><ul><li><code>React Query</code>会在内存中缓存状态</li><li>可以通过<code>QueryClientProvider</code>把<code>QueryClient</code>实例传递给下层组件</li><li><a href="https://react-query.tanstack.com/reference/useQuery" target="_blank" rel="noopener noreferrer">useQuery</a></li></ul><h3 id="_3-1-src-index-js" tabindex="-1"><a class="header-anchor" href="#_3-1-src-index-js"><span>3.1 src\\index.js</span></a></h3><p>src\\index.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> ReactDOM <span class="token keyword">from</span> <span class="token string">&#39;react-dom/client&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> QueryClient<span class="token punctuation">,</span> QueryClientProvider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-query&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> queryClient <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">QueryClient</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> root <span class="token operator">=</span> ReactDOM<span class="token punctuation">.</span><span class="token function">createRoot</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">root<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span></span>
<span class="line">  <span class="token operator">&lt;</span>QueryClientProvider client<span class="token operator">=</span><span class="token punctuation">{</span>queryClient<span class="token punctuation">}</span><span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span>App <span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span><span class="token operator">/</span>QueryClientProvider<span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-src-app-js" tabindex="-1"><a class="header-anchor" href="#_3-2-src-app-js"><span>3.2 src\\App.js</span></a></h3><p>src\\App.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useQuery <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-query&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> request <span class="token keyword">from</span> <span class="token string">&#39;./request&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token punctuation">{</span> data <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useQuery</span><span class="token punctuation">(</span><span class="token string">&#39;users&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> request<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/users&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token punctuation">(</span><span class="token operator">&lt;</span>ul<span class="token operator">&gt;</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        data<span class="token operator">?.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">user</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token operator">&lt;</span>li key<span class="token operator">=</span><span class="token punctuation">{</span>user<span class="token punctuation">.</span>id<span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">{</span>user<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">&gt;</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-src-request-js" tabindex="-1"><a class="header-anchor" href="#_3-3-src-request-js"><span>3.3 src\\request.js</span></a></h3><p>src\\request.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&#39;axios&#39;</span><span class="token punctuation">;</span></span>
<span class="line">axios<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=&gt;</span> response<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">axios<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>baseURL <span class="token operator">=</span> <span class="token string">&#39;http://localhost:8080&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> axios<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-4-api-js" tabindex="-1"><a class="header-anchor" href="#_3-4-api-js"><span>3.4 api.js</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> cors <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;cors&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> logger <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;morgan&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>express<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">logger</span><span class="token punctuation">(</span><span class="token string">&#39;dev&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">cors</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">allowedHeaders</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;Content-Type&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">allowMethods</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;GET&quot;</span><span class="token punctuation">,</span> <span class="token string">&#39;POST&#39;</span><span class="token punctuation">,</span> <span class="token string">&quot;PUT&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;DELETE&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;OPTIONS&quot;</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> users<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token function">String</span><span class="token punctuation">(</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">name</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">setTimeout</span><span class="token punctuation">(</span>next<span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/users&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span>users<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">8080</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;started on port 8080&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-加载状态" tabindex="-1"><a class="header-anchor" href="#_4-加载状态"><span>4.加载状态</span></a></h2><ul><li><a href="https://react-query.tanstack.com/reference/useQuery" target="_blank" rel="noopener noreferrer">useQuery</a></li></ul><h3 id="_4-1-状态" tabindex="-1"><a class="header-anchor" href="#_4-1-状态"><span>4.1 状态</span></a></h3><table><thead><tr><th style="text-align:left;">字段</th><th style="text-align:left;">含义</th><th style="text-align:left;">取值</th></tr></thead><tbody><tr><td style="text-align:left;">status</td><td style="text-align:left;">状态</td><td style="text-align:left;">loading、error、success</td></tr><tr><td style="text-align:left;">isLoading</td><td style="text-align:left;">是否首次加载中</td><td style="text-align:left;">true、false</td></tr><tr><td style="text-align:left;">isError</td><td style="text-align:left;">是否获取失败</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">isSuccess</td><td style="text-align:left;">是否获取成功</td><td style="text-align:left;">true、false</td></tr></tbody></table><h3 id="_4-2-src-app-js" tabindex="-1"><a class="header-anchor" href="#_4-2-src-app-js"><span>4.2 src\\App.js</span></a></h3><p>src\\App.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import { useQuery } from &#39;react-query&#39;;</span>
<span class="line">import request from &#39;./request&#39;;</span>
<span class="line">function App() {</span>
<span class="line">+  const { data, isLoading, isError } = useQuery(&#39;users&#39;, () =&gt; {</span>
<span class="line">+   throw new Error(&#39;用户列表加载失败!&#39;);</span>
<span class="line">+   return request.get(&#39;/users&#39;);</span>
<span class="line">  })</span>
<span class="line">+ if (isLoading) return &lt;div&gt;加载中.......&lt;/div&gt;</span>
<span class="line">+ if (isError) return &lt;div&gt;加载失败&lt;/div&gt;</span>
<span class="line">  return (</span>
<span class="line">    (&lt;ul&gt;</span>
<span class="line">      {</span>
<span class="line">        data?.map((user) =&gt; &lt;li key={user.id}&gt;{user.name}&lt;/li&gt;)</span>
<span class="line">      }</span>
<span class="line">    &lt;/ul&gt;)</span>
<span class="line">  )</span>
<span class="line">}</span>
<span class="line">export default App;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-开发工具" tabindex="-1"><a class="header-anchor" href="#_5-开发工具"><span>5.开发工具</span></a></h2><ul><li><a href="https://react-query.tanstack.com/devtools" target="_blank" rel="noopener noreferrer">devtools</a>是<code>React Query</code>带有专用的开发工具,它们有助于可视化<code>React Query</code>的所有内部工作</li></ul><h3 id="_5-1-src-app-js" tabindex="-1"><a class="header-anchor" href="#_5-1-src-app-js"><span>5.1 src\\App.js</span></a></h3><p>src\\App.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import { useQuery } from &#39;react-query&#39;;</span>
<span class="line">+import { ReactQueryDevtools } from &#39;react-query/devtools&#39;</span>
<span class="line">import request from &#39;./request&#39;;</span>
<span class="line">+function Users() {</span>
<span class="line">+  const { data, isLoading, isError } = useQuery(&#39;users&#39;, () =&gt; request.get(&#39;/users&#39;))</span>
<span class="line">+  if (isLoading) return &lt;div&gt;加载中.......&lt;/div&gt;</span>
<span class="line">+  if (isError) return &lt;div&gt;加载失败&lt;/div&gt;</span>
<span class="line">+  return (</span>
<span class="line">+    (&lt;ul&gt;</span>
<span class="line">+      {</span>
<span class="line">+        data?.map((user) =&gt; &lt;li key={user.id}&gt;{user.name}&lt;/li&gt;)</span>
<span class="line">+      }</span>
<span class="line">+    &lt;/ul&gt;)</span>
<span class="line">+  )</span>
<span class="line">+}</span>
<span class="line">function App() {</span>
<span class="line">  return (</span>
<span class="line">+   &lt;&gt;</span>
<span class="line">+     &lt;Users /&gt;</span>
<span class="line">+     &lt;ReactQueryDevtools initialIsOpen={true} /&gt;</span>
<span class="line">+   &lt;/&gt;</span>
<span class="line">  )</span>
<span class="line">}</span>
<span class="line">export default App;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-refetchonwindowfocus" tabindex="-1"><a class="header-anchor" href="#_6-refetchonwindowfocus"><span>6.refetchOnWindowFocus</span></a></h2><ul><li>[refetchOnWindowFocus](https://react-query.tanstack.com/reference/useQuery</li></ul><table><thead><tr><th style="text-align:left;">字段</th><th style="text-align:left;">含义</th><th style="text-align:left;">取值</th></tr></thead><tbody><tr><td style="text-align:left;">isFetching</td><td style="text-align:left;">是否正在请求</td><td style="text-align:left;">true、false</td></tr></tbody></table><h3 id="_6-1-src-app-js" tabindex="-1"><a class="header-anchor" href="#_6-1-src-app-js"><span>6.1 src\\App.js</span></a></h3><p>src\\App.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import { useQuery } from &#39;react-query&#39;;</span>
<span class="line">import { ReactQueryDevtools } from &#39;react-query/devtools&#39;</span>
<span class="line">import request from &#39;./request&#39;;</span>
<span class="line">function Users() {</span>
<span class="line">+ const { data, isLoading, isError, isFetching } = useQuery(&#39;users&#39;, () =&gt; request.get(&#39;/users&#39;), {</span>
<span class="line">+   refetchOnWindowFocus: true</span>
<span class="line">  })</span>
<span class="line">  if (isLoading) return &lt;div&gt;加载中.......&lt;/div&gt;</span>
<span class="line">  if (isError) return &lt;div&gt;加载失败&lt;/div&gt;</span>
<span class="line">  return (</span>
<span class="line">    (</span>
<span class="line">      &lt;&gt;</span>
<span class="line">        &lt;ul&gt;</span>
<span class="line">          {</span>
<span class="line">            data?.map((user) =&gt; &lt;li key={user.id}&gt;{user.name}&lt;/li&gt;)</span>
<span class="line">          }</span>
<span class="line">        &lt;/ul&gt;</span>
<span class="line">+       {isFetching &amp;&amp; &lt;div&gt;更在更新数据...&lt;/div&gt;}</span>
<span class="line">      &lt;/&gt;</span>
<span class="line">    )</span>
<span class="line">  )</span>
<span class="line">}</span>
<span class="line">function App() {</span>
<span class="line">  return (</span>
<span class="line">    &lt;&gt;</span>
<span class="line">      &lt;Users /&gt;</span>
<span class="line">      &lt;ReactQueryDevtools initialIsOpen={true} /&gt;</span>
<span class="line">    &lt;/&gt;</span>
<span class="line">  )</span>
<span class="line">}</span>
<span class="line">export default App;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-staletime" tabindex="-1"><a class="header-anchor" href="#_7-staletime"><span>7.staleTime</span></a></h2><ul><li><code>staleTime</code>可以理解为数据保质期，在保质期内遇到同 <code>key</code> 的请求，不会去再次获取数据，也就是从缓存中取，瞬间切换展示，<code>isFetching</code> 也一直为 <code>false</code></li></ul><h3 id="_7-1-查询状态" tabindex="-1"><a class="header-anchor" href="#_7-1-查询状态"><span>7.1 查询状态</span></a></h3><table><thead><tr><th style="text-align:left;">字段</th><th style="text-align:left;">含义</th><th style="text-align:left;">取值</th></tr></thead><tbody><tr><td style="text-align:left;">isStale</td><td style="text-align:left;">是否已经过期</td><td style="text-align:left;"><code>0</code> 立刻过期,<code>Infinity</code> 永不过期</td></tr></tbody></table><h3 id="_7-2-src-app-js" tabindex="-1"><a class="header-anchor" href="#_7-2-src-app-js"><span>7.2 src\\App.js</span></a></h3><p>src\\App.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import { useQuery } from &#39;react-query&#39;;</span>
<span class="line">import { ReactQueryDevtools } from &#39;react-query/devtools&#39;</span>
<span class="line">import request from &#39;./request&#39;;</span>
<span class="line">function Users() {</span>
<span class="line">  const { data, isLoading, isError, isFetching } = useQuery(&#39;users&#39;, () =&gt; request.get(&#39;/users&#39;), {</span>
<span class="line">    refetchOnWindowFocus: true,</span>
<span class="line">+   staleTime: 3000</span>
<span class="line">  })</span>
<span class="line">  if (isLoading) return &lt;div&gt;加载中.......&lt;/div&gt;</span>
<span class="line">  if (isError) return &lt;div&gt;加载失败&lt;/div&gt;</span>
<span class="line">  return (</span>
<span class="line">    (</span>
<span class="line">      &lt;&gt;</span>
<span class="line">        &lt;ul&gt;</span>
<span class="line">          {</span>
<span class="line">            data?.map((user) =&gt; &lt;li key={user.id}&gt;{user.name}&lt;/li&gt;)</span>
<span class="line">          }</span>
<span class="line">        &lt;/ul&gt;</span>
<span class="line">        {isFetching &amp;&amp; &lt;div&gt;更在更新数据...&lt;/div&gt;}</span>
<span class="line">      &lt;/&gt;</span>
<span class="line">    )</span>
<span class="line">  )</span>
<span class="line">}</span>
<span class="line">function App() {</span>
<span class="line">  return (</span>
<span class="line">    &lt;&gt;</span>
<span class="line">      &lt;Users /&gt;</span>
<span class="line">      &lt;ReactQueryDevtools initialIsOpen={true} /&gt;</span>
<span class="line">    &lt;/&gt;</span>
<span class="line">  )</span>
<span class="line">}</span>
<span class="line">export default App;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-cachetime" tabindex="-1"><a class="header-anchor" href="#_8-cachetime"><span>8.cacheTime</span></a></h2><ul><li><code>cacheTime</code>是指未使用/非活动缓存数据保留在内存中的时间（以毫秒为单位）</li><li>当查询的缓存变得未使用或不活动时，该缓存数据将在此持续时间后被垃圾收集。当指定不同的缓存时间时，将使用最长的一个</li></ul><h3 id="_8-1-src-app-js" tabindex="-1"><a class="header-anchor" href="#_8-1-src-app-js"><span>8.1 src\\App.js</span></a></h3><p>src\\App.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import { useState } from &#39;react&#39;;</span>
<span class="line">import { useQuery } from &#39;react-query&#39;;</span>
<span class="line">import { ReactQueryDevtools } from &#39;react-query/devtools&#39;</span>
<span class="line">import request from &#39;./request&#39;;</span>
<span class="line">function Users() {</span>
<span class="line">  const { data, isLoading, isError, isFetching } = useQuery(&#39;users&#39;, () =&gt; request.get(&#39;/users&#39;), {</span>
<span class="line">    refetchOnWindowFocus: true,</span>
<span class="line">+   staleTime: Infinity,</span>
<span class="line">+   cacheTime: 5000</span>
<span class="line">  })</span>
<span class="line">  if (isLoading) return &lt;div&gt;加载中.......&lt;/div&gt;</span>
<span class="line">  if (isError) return &lt;div&gt;加载失败&lt;/div&gt;</span>
<span class="line">  return (</span>
<span class="line">    (</span>
<span class="line">      &lt;&gt;</span>
<span class="line">        &lt;ul&gt;</span>
<span class="line">          {</span>
<span class="line">            data?.map((user) =&gt; &lt;li key={user.id}&gt;{user.name}&lt;/li&gt;)</span>
<span class="line">          }</span>
<span class="line">        &lt;/ul&gt;</span>
<span class="line">        {isFetching &amp;&amp; &lt;div&gt;更在更新数据...&lt;/div&gt;}</span>
<span class="line">      &lt;/&gt;</span>
<span class="line">    )</span>
<span class="line">  )</span>
<span class="line">}</span>
<span class="line">function App() {</span>
<span class="line">+ const [show, setShow] = useState(true);</span>
<span class="line">  return (</span>
<span class="line">    &lt;&gt;</span>
<span class="line">+     &lt;button onClick={() =&gt; setShow(!show)}&gt;{show ? &#39;隐藏&#39; : &#39;显示&#39;}&lt;/button&gt;</span>
<span class="line">+     {show &amp;&amp; &lt;Users /&gt;}</span>
<span class="line">      &lt;ReactQueryDevtools initialIsOpen={true} /&gt;</span>
<span class="line">    &lt;/&gt;</span>
<span class="line">  )</span>
<span class="line">}</span>
<span class="line">export default App;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-轮询" tabindex="-1"><a class="header-anchor" href="#_9-轮询"><span>9.轮询</span></a></h2><h3 id="_9-1-app-js" tabindex="-1"><a class="header-anchor" href="#_9-1-app-js"><span>9.1 App.js</span></a></h3><p>src\\App.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import { useState } from &#39;react&#39;;</span>
<span class="line">import { useQuery } from &#39;react-query&#39;;</span>
<span class="line">import { ReactQueryDevtools } from &#39;react-query/devtools&#39;</span>
<span class="line">import request from &#39;./request&#39;;</span>
<span class="line">function Users() {</span>
<span class="line">  const { data, isLoading, isError, isFetching } = useQuery(&#39;users&#39;, () =&gt; request.get(&#39;/users&#39;), {</span>
<span class="line">    refetchOnWindowFocus: true,</span>
<span class="line">    staleTime: Infinity,</span>
<span class="line">    cacheTime: 5000,</span>
<span class="line">+   refetchInterval: 1000</span>
<span class="line">  })</span>
<span class="line">  if (isLoading) return &lt;div&gt;加载中.......&lt;/div&gt;</span>
<span class="line">  if (isError) return &lt;div&gt;加载失败&lt;/div&gt;</span>
<span class="line">  return (</span>
<span class="line">    (</span>
<span class="line">      &lt;&gt;</span>
<span class="line">        &lt;ul&gt;</span>
<span class="line">          {</span>
<span class="line">            data?.map((user) =&gt; &lt;li key={user.id}&gt;{user.name}&lt;/li&gt;)</span>
<span class="line">          }</span>
<span class="line">        &lt;/ul&gt;</span>
<span class="line">        {isFetching &amp;&amp; &lt;div&gt;更在更新数据...&lt;/div&gt;}</span>
<span class="line">      &lt;/&gt;</span>
<span class="line">    )</span>
<span class="line">  )</span>
<span class="line">}</span>
<span class="line">function App() {</span>
<span class="line">  const [show, setShow] = useState(true);</span>
<span class="line">  return (</span>
<span class="line">    &lt;&gt;</span>
<span class="line">      &lt;button onClick={() =&gt; setShow(!show)}&gt;{show ? &#39;隐藏&#39; : &#39;显示&#39;}&lt;/button&gt;</span>
<span class="line">      {show &amp;&amp; &lt;Users /&gt;}</span>
<span class="line">      &lt;ReactQueryDevtools initialIsOpen={true} /&gt;</span>
<span class="line">    &lt;/&gt;</span>
<span class="line">  )</span>
<span class="line">}</span>
<span class="line">export default App;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-2-api-js" tabindex="-1"><a class="header-anchor" href="#_9-2-api-js"><span>9.2 api.js</span></a></h3><p>api.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">const express = require(&#39;express&#39;);</span>
<span class="line">const cors = require(&#39;cors&#39;);</span>
<span class="line">const logger = require(&#39;morgan&#39;);</span>
<span class="line">const app = express();</span>
<span class="line">app.use(express.json());</span>
<span class="line">app.use(cors({</span>
<span class="line">  allowedHeaders: [&quot;Content-Type&quot;],</span>
<span class="line">  allowMethods: [&quot;GET&quot;, &#39;POST&#39;, &quot;PUT&quot;, &quot;DELETE&quot;, &quot;OPTIONS&quot;]</span>
<span class="line">}));</span>
<span class="line">app.use(logger(&#39;dev&#39;));</span>
<span class="line">const users = new Array(10).fill(true).map((item, index) =&gt; ({ id: String(index + 1), name: \`name\${index + 1}\` }))</span>
<span class="line">app.use((req, res, next) =&gt; {</span>
<span class="line">  setTimeout(next, 1000);</span>
<span class="line">});</span>
<span class="line">app.get(&#39;/users&#39;, (req, res) =&gt; {</span>
<span class="line">    res.json(users.map(user =&gt; ({ ...user, name: user.name + &#39;</span>
<span class="line">});</span>
<span class="line">app.listen(8080, () =&gt; console.log(&#39;started on port 8080&#39;));</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_10-查询键去重" tabindex="-1"><a class="header-anchor" href="#_10-查询键去重"><span>10.查询键去重</span></a></h2><ul><li>[Deduping](https://react-query.tanstack.com/overview</li></ul><h3 id="_10-1-app-js" tabindex="-1"><a class="header-anchor" href="#_10-1-app-js"><span>10.1 App.js</span></a></h3><p>src\\App.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import { useState } from &#39;react&#39;;</span>
<span class="line">import { useQuery } from &#39;react-query&#39;;</span>
<span class="line">import { ReactQueryDevtools } from &#39;react-query/devtools&#39;</span>
<span class="line">import request from &#39;./request&#39;;</span>
<span class="line">+function Users({ queryKey }) {</span>
<span class="line">+ const { data, isLoading, isError, isFetching } = useQuery(queryKey, () =&gt; request.get(&#39;/users&#39;))</span>
<span class="line">  if (isLoading) return &lt;div&gt;加载中.......&lt;/div&gt;</span>
<span class="line">  if (isError) return &lt;div&gt;加载失败&lt;/div&gt;</span>
<span class="line">  return (</span>
<span class="line">    (</span>
<span class="line">      &lt;&gt;</span>
<span class="line">        &lt;ul&gt;</span>
<span class="line">          {</span>
<span class="line">            data?.map((user) =&gt; &lt;li key={user.id}&gt;{user.name}&lt;/li&gt;)</span>
<span class="line">          }</span>
<span class="line">        &lt;/ul&gt;</span>
<span class="line">        {isFetching &amp;&amp; &lt;div&gt;更在更新数据...&lt;/div&gt;}</span>
<span class="line">      &lt;/&gt;</span>
<span class="line">    )</span>
<span class="line">  )</span>
<span class="line">}</span>
<span class="line">function App() {</span>
<span class="line">  return (</span>
<span class="line">    &lt;&gt;</span>
<span class="line">+     &lt;Users queryKey=&quot;users&quot; /&gt;</span>
<span class="line">+     &lt;Users queryKey=&quot;users&quot; /&gt;</span>
<span class="line">      &lt;ReactQueryDevtools initialIsOpen={true} /&gt;</span>
<span class="line">    &lt;/&gt;</span>
<span class="line">  )</span>
<span class="line">}</span>
<span class="line">export default App;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_11-自定义hooks" tabindex="-1"><a class="header-anchor" href="#_11-自定义hooks"><span>11.自定义hooks</span></a></h2><ul><li>[Deduping](https://react-query.tanstack.com/overview</li></ul><h3 id="_11-1-app-js" tabindex="-1"><a class="header-anchor" href="#_11-1-app-js"><span>11.1 App.js</span></a></h3><p>src\\App.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import { useQuery } from &#39;react-query&#39;;</span>
<span class="line">import { ReactQueryDevtools } from &#39;react-query/devtools&#39;</span>
<span class="line">import request from &#39;./request&#39;;</span>
<span class="line">+function useUsers() {</span>
<span class="line">+  return useQuery(&#39;users&#39;, () =&gt; request.get(&#39;/users&#39;));</span>
<span class="line">+}</span>
<span class="line">+function Stats() {</span>
<span class="line">+  const { data } = useUsers();</span>
<span class="line">+  return data &amp;&amp; &lt;h1&gt;共计{data.length}用户&lt;/h1&gt;</span>
<span class="line">+}</span>
<span class="line">function Users() {</span>
<span class="line">+ const { data, isLoading, isError, isFetching } = useUsers();</span>
<span class="line">  if (isLoading) return &lt;div&gt;加载中.......&lt;/div&gt;</span>
<span class="line">  if (isError) return &lt;div&gt;加载失败&lt;/div&gt;</span>
<span class="line">  return (</span>
<span class="line">    (</span>
<span class="line">      &lt;&gt;</span>
<span class="line">        &lt;ul&gt;</span>
<span class="line">          {</span>
<span class="line">            data?.map((user) =&gt; &lt;li key={user.id}&gt;{user.name}&lt;/li&gt;)</span>
<span class="line">          }</span>
<span class="line">        &lt;/ul&gt;</span>
<span class="line">        {isFetching &amp;&amp; &lt;div&gt;更在更新数据...&lt;/div&gt;}</span>
<span class="line">      &lt;/&gt;</span>
<span class="line">    )</span>
<span class="line">  )</span>
<span class="line">}</span>
<span class="line">function App() {</span>
<span class="line">  return (</span>
<span class="line">    &lt;&gt;</span>
<span class="line">      &lt;Users /&gt;</span>
<span class="line">+     &lt;Stats /&gt;</span>
<span class="line">      &lt;ReactQueryDevtools initialIsOpen={true} /&gt;</span>
<span class="line">    &lt;/&gt;</span>
<span class="line">  )</span>
<span class="line">}</span>
<span class="line">export default App;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_12-queryobserver" tabindex="-1"><a class="header-anchor" href="#_12-queryobserver"><span>12.QueryObserver</span></a></h2><ul><li>[QueryObserver](https://react-query.tanstack.com/reference/QueryObserver</li></ul><h3 id="_12-1-app-js" tabindex="-1"><a class="header-anchor" href="#_12-1-app-js"><span>12.1 App.js</span></a></h3><p>src\\App.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import { useEffect, useState } from &#39;react&#39;;</span>
<span class="line">+import { useQuery, QueryObserver, useQueryClient } from &#39;react-query&#39;;</span>
<span class="line">import { ReactQueryDevtools } from &#39;react-query/devtools&#39;</span>
<span class="line">import request from &#39;./request&#39;;</span>
<span class="line">function Stats() {</span>
<span class="line">+ const [data, setData] = useState();</span>
<span class="line">+ const queryClient = useQueryClient();</span>
<span class="line">+ useEffect(() =&gt; {</span>
<span class="line">+   const observer = new QueryObserver(queryClient, { queryKey: &#39;users&#39; })</span>
<span class="line">+   const unsubscribe = observer.subscribe(result =&gt; setData(result.data))</span>
<span class="line">+   return unsubscribe;</span>
<span class="line">+ }, []);</span>
<span class="line">  return data &amp;&amp; &lt;h1&gt;共计{data.length}用户&lt;/h1&gt;</span>
<span class="line">}</span>
<span class="line">function Users() {</span>
<span class="line">+ const { data, isLoading, isError, isFetching } = useQuery(&#39;users&#39;, () =&gt; request.get(&#39;/users&#39;))</span>
<span class="line">  if (isLoading) return &lt;div&gt;加载中.......&lt;/div&gt;</span>
<span class="line">  if (isError) return &lt;div&gt;加载失败&lt;/div&gt;</span>
<span class="line">  return (</span>
<span class="line">    (</span>
<span class="line">      &lt;&gt;</span>
<span class="line">        &lt;ul&gt;</span>
<span class="line">          {</span>
<span class="line">            data?.map((user) =&gt; &lt;li key={user.id}&gt;{user.name}&lt;/li&gt;)</span>
<span class="line">          }</span>
<span class="line">        &lt;/ul&gt;</span>
<span class="line">        {isFetching &amp;&amp; &lt;div&gt;更在更新数据...&lt;/div&gt;}</span>
<span class="line">      &lt;/&gt;</span>
<span class="line">    )</span>
<span class="line">  )</span>
<span class="line">}</span>
<span class="line">function App() {</span>
<span class="line">  return (</span>
<span class="line">    &lt;&gt;</span>
<span class="line">      &lt;Users /&gt;</span>
<span class="line">      &lt;Stats /&gt;</span>
<span class="line">      &lt;ReactQueryDevtools initialIsOpen={true} /&gt;</span>
<span class="line">    &lt;/&gt;</span>
<span class="line">  )</span>
<span class="line">}</span>
<span class="line">export default App;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_13-组合缓存键" tabindex="-1"><a class="header-anchor" href="#_13-组合缓存键"><span>13.组合缓存键</span></a></h2><h3 id="_13-1-app-js" tabindex="-1"><a class="header-anchor" href="#_13-1-app-js"><span>13.1 App.js</span></a></h3><p>src\\App.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React from &#39;react&#39;;</span>
<span class="line">import { useQuery } from &#39;react-query&#39;;</span>
<span class="line">import { ReactQueryDevtools } from &#39;react-query/devtools&#39;</span>
<span class="line">import request from &#39;./request&#39;;</span>
<span class="line">+function User({ userId }) {</span>
<span class="line">+  const { data, isLoading, isError, error, isFetching } = useQuery([&#39;user&#39;, userId], () =&gt; request.get(&#39;/user&#39;, {</span>
<span class="line">+    params: {</span>
<span class="line">+      userId</span>
<span class="line">+    }</span>
<span class="line">+  }))</span>
<span class="line">+  if (isLoading) return &lt;div&gt;加载中.......&lt;/div&gt;</span>
<span class="line">+  if (isError) return &lt;div&gt;{error.message}&lt;/div&gt;</span>
<span class="line">+  return (</span>
<span class="line">+    (</span>
<span class="line">+      &lt;&gt;</span>
<span class="line">+        {data.id ? &lt;p&gt;{data.id}:{data.name}&lt;/p&gt; : &lt;p&gt;{userId}对应的用户不存在&lt;/p&gt;}</span>
<span class="line">+        {isFetching &amp;&amp; &lt;div&gt;更在更新数据...&lt;/div&gt;}</span>
<span class="line">+      &lt;/&gt;</span>
<span class="line">+    )</span>
<span class="line">+  )</span>
<span class="line">+}</span>
<span class="line">function App() {</span>
<span class="line">+ const [userId, setUserId] = React.useState(&#39;&#39;);</span>
<span class="line">  return (</span>
<span class="line">    &lt;&gt;</span>
<span class="line">+     &lt;input value={userId} onChange={(event) =&gt; setUserId(event.target.value)} /&gt;</span>
<span class="line">+     &lt;User userId={userId} /&gt;</span>
<span class="line">      &lt;ReactQueryDevtools initialIsOpen={true} /&gt;</span>
<span class="line">    &lt;/&gt;</span>
<span class="line">  )</span>
<span class="line">}</span>
<span class="line">export default App;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_13-2-api-js" tabindex="-1"><a class="header-anchor" href="#_13-2-api-js"><span>13.2 api.js</span></a></h3><p>api.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">const express = require(&#39;express&#39;);</span>
<span class="line">const cors = require(&#39;cors&#39;);</span>
<span class="line">const logger = require(&#39;morgan&#39;);</span>
<span class="line">const app = express();</span>
<span class="line">app.use(express.json());</span>
<span class="line">app.use(cors({</span>
<span class="line">  allowedHeaders: [&quot;Content-Type&quot;],</span>
<span class="line">  allowMethods: [&quot;GET&quot;, &#39;POST&#39;, &quot;PUT&quot;, &quot;DELETE&quot;, &quot;OPTIONS&quot;]</span>
<span class="line">}));</span>
<span class="line">app.use(logger(&#39;dev&#39;));</span>
<span class="line">const users = new Array(10).fill(true).map((item, index) =&gt; ({ id: String(index + 1), name: \`name\${index + 1}\` }))</span>
<span class="line">app.use((req, res, next) =&gt; {</span>
<span class="line">  setTimeout(next, 1000);</span>
<span class="line">});</span>
<span class="line">app.get(&#39;/users&#39;, (req, res) =&gt; {</span>
<span class="line">   res.json(users.map(user =&gt; ({ ...user, name: user.name + &#39;</span>
<span class="line">});</span>
<span class="line">+app.get(&#39;/user&#39;, (req, res) =&gt; {</span>
<span class="line">+  const userId = req.query.userId;</span>
<span class="line">+  const user = users.find(user =&gt; user.id === userId);</span>
<span class="line">+  if (user)</span>
<span class="line">+    res.json(user);</span>
<span class="line">+  else</span>
<span class="line">+    res.json({})</span>
<span class="line">+});</span>
<span class="line">app.listen(8080, () =&gt; console.log(&#39;started on port 8080&#39;));</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_14-enabled" tabindex="-1"><a class="header-anchor" href="#_14-enabled"><span>14.enabled</span></a></h2><h3 id="_14-1-查询状态" tabindex="-1"><a class="header-anchor" href="#_14-1-查询状态"><span>14.1 查询状态</span></a></h3><table><thead><tr><th style="text-align:left;">字段</th><th style="text-align:left;">含义</th><th style="text-align:left;">取值</th></tr></thead><tbody><tr><td style="text-align:left;">isIdle</td><td style="text-align:left;">是否空闲</td><td style="text-align:left;">true、false</td></tr></tbody></table><h3 id="_14-2-app-js" tabindex="-1"><a class="header-anchor" href="#_14-2-app-js"><span>14.2 App.js</span></a></h3><p>src\\App.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React from &#39;react&#39;;</span>
<span class="line">import { useQuery } from &#39;react-query&#39;;</span>
<span class="line">import { ReactQueryDevtools } from &#39;react-query/devtools&#39;</span>
<span class="line">import request from &#39;./request&#39;;</span>
<span class="line"></span>
<span class="line">function User({ userId }) {</span>
<span class="line">  const { data, isLoading, isError, error, isFetching, isIdle } = useQuery([&#39;user&#39;, userId], () =&gt; request.get(&#39;/user&#39;, {</span>
<span class="line">    params: {</span>
<span class="line">      userId</span>
<span class="line">    }</span>
<span class="line">+ }), { enabled: !!userId })</span>
<span class="line">  if (isIdle) return null;</span>
<span class="line">  if (isLoading) return &lt;div&gt;加载中.......&lt;/div&gt;</span>
<span class="line">  if (isError) return &lt;div&gt;{error.message}&lt;/div&gt;</span>
<span class="line">  return (</span>
<span class="line">    (</span>
<span class="line">      &lt;&gt;</span>
<span class="line">        {data.id ? &lt;p&gt;{data.id}:{data.name}&lt;/p&gt; : &lt;p&gt;{userId}对应的用户不存在&lt;/p&gt;}</span>
<span class="line">        {isFetching &amp;&amp; &lt;div&gt;更在更新数据...&lt;/div&gt;}</span>
<span class="line">      &lt;/&gt;</span>
<span class="line">    )</span>
<span class="line">  )</span>
<span class="line">}</span>
<span class="line">function App() {</span>
<span class="line">  const [userId, setUserId] = React.useState(&#39;&#39;);</span>
<span class="line">  return (</span>
<span class="line">    &lt;&gt;</span>
<span class="line">      &lt;input value={userId} onChange={(event) =&gt; setUserId(event.target.value)} /&gt;</span>
<span class="line">      &lt;User userId={userId} /&gt;</span>
<span class="line">      &lt;ReactQueryDevtools initialIsOpen={true} /&gt;</span>
<span class="line">    &lt;/&gt;</span>
<span class="line">  )</span>
<span class="line">}</span>
<span class="line">export default App;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_15-retry" tabindex="-1"><a class="header-anchor" href="#_15-retry"><span>15.retry</span></a></h2><h3 id="_15-1-app-js" tabindex="-1"><a class="header-anchor" href="#_15-1-app-js"><span>15.1 App.js</span></a></h3><p>src\\App.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React from &#39;react&#39;;</span>
<span class="line">import { useQuery } from &#39;react-query&#39;;</span>
<span class="line">import { ReactQueryDevtools } from &#39;react-query/devtools&#39;</span>
<span class="line">import request from &#39;./request&#39;;</span>
<span class="line">function User({ userId }) {</span>
<span class="line">  const { data, isLoading, isError, error, isFetching, isIdle } = useQuery([&#39;user&#39;, userId], () =&gt; request.get(&#39;/user&#39;, {</span>
<span class="line">    params: {</span>
<span class="line">      userId</span>
<span class="line">    }</span>
<span class="line">  }), {</span>
<span class="line">    enabled: !!userId,</span>
<span class="line">+   retry: 1,</span>
<span class="line">+   retryDelay: 1000,</span>
<span class="line">+   retryDelay: attemptIndex =&gt; Math.min(1000 * 2 ** attemptIndex, 30000),</span>
<span class="line">  })</span>
<span class="line">  if (isIdle) return null;</span>
<span class="line">  if (isLoading) return &lt;div&gt;加载中.......&lt;/div&gt;</span>
<span class="line">  if (isError) return &lt;div&gt;{error.message}&lt;/div&gt;</span>
<span class="line">  return (</span>
<span class="line">    (</span>
<span class="line">      &lt;&gt;</span>
<span class="line">        {data.id ? &lt;p&gt;{data.id}:{data.name}&lt;/p&gt; : &lt;p&gt;{userId}对应的用户不存在&lt;/p&gt;}</span>
<span class="line">        {isFetching &amp;&amp; &lt;div&gt;更在更新数据...&lt;/div&gt;}</span>
<span class="line">      &lt;/&gt;</span>
<span class="line">    )</span>
<span class="line">  )</span>
<span class="line">}</span>
<span class="line">function App() {</span>
<span class="line">  const [userId, setUserId] = React.useState(&#39;&#39;);</span>
<span class="line">  return (</span>
<span class="line">    &lt;&gt;</span>
<span class="line">      &lt;input value={userId} onChange={(event) =&gt; setUserId(event.target.value)} /&gt;</span>
<span class="line">      &lt;User userId={userId} /&gt;</span>
<span class="line">      &lt;ReactQueryDevtools initialIsOpen={true} /&gt;</span>
<span class="line">    &lt;/&gt;</span>
<span class="line">  )</span>
<span class="line">}</span>
<span class="line">export default App;</span>
<span class="line">\`</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_15-2-api-js" tabindex="-1"><a class="header-anchor" href="#_15-2-api-js"><span>15.2 api.js</span></a></h3><p>api.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> cors <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;cors&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> logger <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;morgan&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>express<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">cors</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">allowedHeaders</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;Content-Type&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">allowMethods</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;GET&quot;</span><span class="token punctuation">,</span> <span class="token string">&#39;POST&#39;</span><span class="token punctuation">,</span> <span class="token string">&quot;PUT&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;DELETE&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;OPTIONS&quot;</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">logger</span><span class="token punctuation">(</span><span class="token string">&#39;dev&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> users <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token function">String</span><span class="token punctuation">(</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">name</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">setTimeout</span><span class="token punctuation">(</span>next<span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/users&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">   res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span>users<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">user</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token operator">...</span>user<span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> user<span class="token punctuation">.</span>name <span class="token operator">+</span> &#39;</span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/user&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> userId <span class="token operator">=</span> req<span class="token punctuation">.</span>query<span class="token punctuation">.</span>userId<span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">const</span> user <span class="token operator">=</span> users<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token parameter">user</span> <span class="token operator">=&gt;</span> user<span class="token punctuation">.</span>id <span class="token operator">===</span> userId<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>user<span class="token punctuation">)</span></span>
<span class="line">    res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">else</span></span>
<span class="line"><span class="token operator">+</span>   res<span class="token punctuation">.</span><span class="token function">sendStatus</span><span class="token punctuation">(</span><span class="token number">404</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">8080</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;started on port 8080&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_16-取消请求" tabindex="-1"><a class="header-anchor" href="#_16-取消请求"><span>16.取消请求</span></a></h2><ul><li>axios发送请求时，添加[cancelToken](http://www.axios-js.com/zh-cn/docs/</li><li><code>CancelToken</code>有一个<code>source</code>静态方法，调用之后返回一个对象，该对象包含一个<code>token</code>属性，用于标记请求和一个<code>cancel</code>方法，用于取消请求</li><li><code>cancel</code>取消请求方法在调用取消请求的时候可以将取消原因<code>message</code>字符串传递进去，这样请求在被取消之后会被<code>catch</code>捕获，你可以在这里将取消原因打印出来或者提示给用户，比如提示用户不要频繁点击发送请求</li><li><code>get</code>的<code>cancelToken</code>放置在第二个参数的对象里面，<code>post</code>的<code>cancelToken</code>放置在第三个参数对象里面</li></ul><h3 id="_16-1-app-js" tabindex="-1"><a class="header-anchor" href="#_16-1-app-js"><span>16.1 App.js</span></a></h3><p>src\\App.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React from &#39;react&#39;;</span>
<span class="line">import { useQuery } from &#39;react-query&#39;;</span>
<span class="line">import { ReactQueryDevtools } from &#39;react-query/devtools&#39;</span>
<span class="line">+import request, { CancelToken } from &#39;./request&#39;;</span>
<span class="line"></span>
<span class="line">function User({ userId }) {</span>
<span class="line">  const { data, isLoading, isError, error, isFetching, isIdle } = useQuery([&#39;user&#39;, userId], () =&gt; {</span>
<span class="line">+   const source = CancelToken.source();</span>
<span class="line">+   const promise = request.get(&#39;/user&#39;, {</span>
<span class="line">+     params: { userId }, cancelToken: source.token</span>
<span class="line">+   }).catch(error =&gt; {</span>
<span class="line">+     if (request.isCancel(error)) {</span>
<span class="line">+       console.log(error.message);</span>
<span class="line">+     }</span>
<span class="line">+   });</span>
<span class="line">+   promise.cancel = () =&gt; source.cancel(&#39;请求被React Query取消&#39;);</span>
<span class="line">+   return promise;</span>
<span class="line">  }, {</span>
<span class="line">    enabled: !!userId,</span>
<span class="line">    retry: 3,</span>
<span class="line">    retryDelay: 1000,</span>
<span class="line">    retryDelay: attemptIndex =&gt; Math.min(1000 * 2 ** attemptIndex, 30000),</span>
<span class="line">  })</span>
<span class="line">  if (isIdle) return null;</span>
<span class="line">  if (isLoading) return &lt;div&gt;加载中.......&lt;/div&gt;</span>
<span class="line">  if (isError) return &lt;div&gt;{error.message}&lt;/div&gt;</span>
<span class="line">  return (</span>
<span class="line">    (</span>
<span class="line">      &lt;&gt;</span>
<span class="line">        {data.id ? &lt;p&gt;{data.id}:{data.name}&lt;/p&gt; : &lt;p&gt;{userId}对应的用户不存在&lt;/p&gt;}</span>
<span class="line">        {isFetching &amp;&amp; &lt;div&gt;更在更新数据...&lt;/div&gt;}</span>
<span class="line">      &lt;/&gt;</span>
<span class="line">    )</span>
<span class="line">  )</span>
<span class="line">}</span>
<span class="line">function App() {</span>
<span class="line">  const [userId, setUserId] = React.useState(&#39;&#39;);</span>
<span class="line">  return (</span>
<span class="line">    &lt;&gt;</span>
<span class="line">      &lt;input value={userId} onChange={(event) =&gt; setUserId(event.target.value)} /&gt;</span>
<span class="line">      &lt;User userId={userId} /&gt;</span>
<span class="line">      &lt;ReactQueryDevtools initialIsOpen={true} /&gt;</span>
<span class="line">    &lt;/&gt;</span>
<span class="line">  )</span>
<span class="line">}</span>
<span class="line">export default App;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_16-2-request-js" tabindex="-1"><a class="header-anchor" href="#_16-2-request-js"><span>16.2 request.js</span></a></h3><p>src\\request.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">+import axios, { CancelToken } from &#39;axios&#39;;</span>
<span class="line">axios.interceptors.response.use(response =&gt; response.data);</span>
<span class="line">axios.defaults.baseURL = &#39;http://localhost:8080&#39;;</span>
<span class="line">export default axios;</span>
<span class="line">+export { CancelToken }</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_16-3-api-js" tabindex="-1"><a class="header-anchor" href="#_16-3-api-js"><span>16.3 api.js</span></a></h3><p>api.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> cors <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;cors&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> logger <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;morgan&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>express<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">cors</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">allowedHeaders</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;Content-Type&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">allowMethods</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;GET&quot;</span><span class="token punctuation">,</span> <span class="token string">&#39;POST&#39;</span><span class="token punctuation">,</span> <span class="token string">&quot;PUT&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;DELETE&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;OPTIONS&quot;</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">logger</span><span class="token punctuation">(</span><span class="token string">&#39;dev&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> users <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token function">String</span><span class="token punctuation">(</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">name</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span>next<span class="token punctuation">,</span> <span class="token number">1000</span> <span class="token operator">*</span> req<span class="token punctuation">.</span>query<span class="token punctuation">.</span>userId<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/users&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">   res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span>users<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">user</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token operator">...</span>user<span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> user<span class="token punctuation">.</span>name <span class="token operator">+</span> &#39;</span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/user&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> userId <span class="token operator">=</span> req<span class="token punctuation">.</span>query<span class="token punctuation">.</span>userId<span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">const</span> user <span class="token operator">=</span> users<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token parameter">user</span> <span class="token operator">=&gt;</span> user<span class="token punctuation">.</span>id <span class="token operator">===</span> userId<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>user<span class="token punctuation">)</span></span>
<span class="line">    res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">else</span></span>
<span class="line">    res<span class="token punctuation">.</span><span class="token function">sendStatus</span><span class="token punctuation">(</span><span class="token number">404</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">8080</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;started on port 8080&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_17-依赖查询" tabindex="-1"><a class="header-anchor" href="#_17-依赖查询"><span>17.依赖查询</span></a></h2><h3 id="_17-1-app-js" tabindex="-1"><a class="header-anchor" href="#_17-1-app-js"><span>17.1 App.js</span></a></h3><p>src\\App.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React from &#39;react&#39;;</span>
<span class="line">import { useQuery } from &#39;react-query&#39;;</span>
<span class="line">import { ReactQueryDevtools } from &#39;react-query/devtools&#39;</span>
<span class="line">import request, { CancelToken } from &#39;./request&#39;;</span>
<span class="line"></span>
<span class="line">function User({ userId }) {</span>
<span class="line">  const { data, isLoading, isError, error, isFetching, isIdle } = useQuery([&#39;user&#39;, userId], () =&gt; {</span>
<span class="line">    const source = CancelToken.source();</span>
<span class="line">    const promise = request.get(&#39;/user&#39;, {</span>
<span class="line">      params: { userId }, cancelToken: source.token</span>
<span class="line">    }).catch(error =&gt; {</span>
<span class="line">      if (request.isCancel(error)) {</span>
<span class="line">        console.log(error.message);</span>
<span class="line">      }</span>
<span class="line">    });</span>
<span class="line">    promise.cancel = () =&gt; source.cancel(&#39;请求被React Query取消&#39;);</span>
<span class="line">    return promise;</span>
<span class="line">  }, {</span>
<span class="line">    enabled: !!userId,</span>
<span class="line">    retry: 3,</span>
<span class="line">    retryDelay: 1000,</span>
<span class="line">    retryDelay: attemptIndex =&gt; Math.min(1000 * 2 ** attemptIndex, 30000),</span>
<span class="line">  })</span>
<span class="line">+ const postsResult = useQuery([&#39;posts&#39;, data?.id],</span>
<span class="line">+   () =&gt; request.get(\`/posts\`, { params: { userId: data?.id } }),</span>
<span class="line">+   {</span>
<span class="line">+     enabled: !!(data?.id)</span>
<span class="line">+   });</span>
<span class="line">  if (isIdle) return null;</span>
<span class="line">  if (isLoading) return &lt;div&gt;加载中.......&lt;/div&gt;</span>
<span class="line">  if (isError) return &lt;div&gt;{error.message}&lt;/div&gt;</span>
<span class="line">  return (</span>
<span class="line">    (</span>
<span class="line">      &lt;&gt;</span>
<span class="line">        {data.id ? &lt;p&gt;{data.id}:{data.name}&lt;/p&gt; : &lt;p&gt;{userId}对应的用户不存在&lt;/p&gt;}</span>
<span class="line">        {isFetching &amp;&amp; &lt;div&gt;更在更新数据...&lt;/div&gt;}</span>
<span class="line">+       {postsResult.data &amp;&amp; &lt;p&gt;帖子数:{postsResult.data.length}&lt;/p&gt;}</span>
<span class="line">+       &lt;p&gt;{postsResult.isFetching &amp;&amp; &#39;正在更新贴子数据...&#39;}&lt;/p&gt;</span>
<span class="line">      &lt;/&gt;</span>
<span class="line">    )</span>
<span class="line">  )</span>
<span class="line">}</span>
<span class="line">function App() {</span>
<span class="line">  const [userId, setUserId] = React.useState(&#39;&#39;);</span>
<span class="line">  return (</span>
<span class="line">    &lt;&gt;</span>
<span class="line">      &lt;input value={userId} onChange={(event) =&gt; setUserId(event.target.value)} /&gt;</span>
<span class="line">      &lt;User userId={userId} /&gt;</span>
<span class="line">      &lt;ReactQueryDevtools initialIsOpen={true} /&gt;</span>
<span class="line">    &lt;/&gt;</span>
<span class="line">  )</span>
<span class="line">}</span>
<span class="line">export default App;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_17-2-api-js" tabindex="-1"><a class="header-anchor" href="#_17-2-api-js"><span>17.2 api.js</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> cors <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;cors&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> logger <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;morgan&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>express<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">cors</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">allowedHeaders</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;Content-Type&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">allowMethods</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;GET&quot;</span><span class="token punctuation">,</span> <span class="token string">&#39;POST&#39;</span><span class="token punctuation">,</span> <span class="token string">&quot;PUT&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;DELETE&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;OPTIONS&quot;</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">logger</span><span class="token punctuation">(</span><span class="token string">&#39;dev&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> users <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token function">String</span><span class="token punctuation">(</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">name</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token operator">+</span><span class="token keyword">const</span> posts <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">user<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token function">String</span><span class="token punctuation">(</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">title</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> <span class="token literal-property property">userId</span><span class="token operator">:</span> <span class="token function">String</span><span class="token punctuation">(</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">setTimeout</span><span class="token punctuation">(</span>next<span class="token punctuation">,</span> <span class="token number">1000</span> <span class="token operator">*</span> req<span class="token punctuation">.</span>query<span class="token punctuation">.</span>userId<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/users&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">   res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span>users<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">user</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token operator">...</span>user<span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> user<span class="token punctuation">.</span>name <span class="token operator">+</span> &#39;</span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/user&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> userId <span class="token operator">=</span> req<span class="token punctuation">.</span>query<span class="token punctuation">.</span>userId<span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">const</span> user <span class="token operator">=</span> users<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token parameter">user</span> <span class="token operator">=&gt;</span> user<span class="token punctuation">.</span>id <span class="token operator">===</span> userId<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>user<span class="token punctuation">)</span></span>
<span class="line">    res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">else</span></span>
<span class="line">    res<span class="token punctuation">.</span><span class="token function">sendStatus</span><span class="token punctuation">(</span><span class="token number">404</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/posts&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>  <span class="token keyword">const</span> userId <span class="token operator">=</span> req<span class="token punctuation">.</span>query<span class="token punctuation">.</span>userId<span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>  res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span>posts<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">post</span> <span class="token operator">=&gt;</span> post<span class="token punctuation">.</span>userId <span class="token operator">===</span> userId<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">8080</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;started on port 8080&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_18-初始化数据" tabindex="-1"><a class="header-anchor" href="#_18-初始化数据"><span>18.初始化数据</span></a></h2><h3 id="_18-1-app-js" tabindex="-1"><a class="header-anchor" href="#_18-1-app-js"><span>18.1 App.js</span></a></h3><p>src\\App.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React from &#39;react&#39;;</span>
<span class="line">import { useQuery } from &#39;react-query&#39;;</span>
<span class="line">import { ReactQueryDevtools } from &#39;react-query/devtools&#39;</span>
<span class="line">import request from &#39;./request&#39;;</span>
<span class="line">const initialUser = { id: &quot;1&quot; }</span>
<span class="line">const initialPosts = [];</span>
<span class="line">function User({ userId }) {</span>
<span class="line">  const { data, isLoading, isError, error, isFetching, isIdle } = useQuery([&#39;user&#39;, userId], () =&gt; request.get(&#39;/user&#39;, {</span>
<span class="line">    params: { userId }</span>
<span class="line">  }), {</span>
<span class="line">    enabled: !!userId,</span>
<span class="line">    retry: 3,</span>
<span class="line">    retryDelay: 1000,</span>
<span class="line">    retryDelay: attemptIndex =&gt; Math.min(1000 * 2 ** attemptIndex, 30000),</span>
<span class="line">    initialData: initialUser,</span>
<span class="line">    initialStale: false,</span>
<span class="line">    staleTime: 5000</span>
<span class="line">  })</span>
<span class="line">  const postsResult = useQuery([&#39;posts&#39;, data?.id],</span>
<span class="line">    () =&gt; request.get(\`/posts\`, { params: { userId: data?.id } }),</span>
<span class="line">    {</span>
<span class="line">      enabled: !!(data?.id),</span>
<span class="line">      initialData: initialPosts,</span>
<span class="line">      initialStale: false,</span>
<span class="line">      staleTime: 5000</span>
<span class="line">    });</span>
<span class="line">  if (isIdle) return null;</span>
<span class="line">  if (isLoading) return &lt;div&gt;加载中.......&lt;/div&gt;</span>
<span class="line">  if (isError) return &lt;div&gt;{error.message}&lt;/div&gt;</span>
<span class="line">  return (</span>
<span class="line">    (</span>
<span class="line">      &lt;&gt;</span>
<span class="line">        {data.id ? &lt;p&gt;{data.id}:{data.name}&lt;/p&gt; : &lt;p&gt;{userId}对应的用户不存在&lt;/p&gt;}</span>
<span class="line">        {isFetching &amp;&amp; &lt;div&gt;更在更新数据...&lt;/div&gt;}</span>
<span class="line">        {postsResult.data &amp;&amp; &lt;p&gt;帖子数:{postsResult.data.length}&lt;/p&gt;}</span>
<span class="line">        &lt;p&gt;{postsResult.isFetching &amp;&amp; &#39;正在更新贴子数据...&#39;}&lt;/p&gt;</span>
<span class="line">      &lt;/&gt;</span>
<span class="line">    )</span>
<span class="line">  )</span>
<span class="line">}</span>
<span class="line">function App() {</span>
<span class="line">  const [userId, setUserId] = React.useState(&#39;&#39;);</span>
<span class="line">  return (</span>
<span class="line">    &lt;&gt;</span>
<span class="line">      &lt;input value={userId} onChange={(event) =&gt; setUserId(event.target.value)} /&gt;</span>
<span class="line">      &lt;User userId={userId} /&gt;</span>
<span class="line">      &lt;ReactQueryDevtools initialIsOpen={true} /&gt;</span>
<span class="line">    &lt;/&gt;</span>
<span class="line">  )</span>
<span class="line">}</span>
<span class="line">export default App;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_19-并发查询" tabindex="-1"><a class="header-anchor" href="#_19-并发查询"><span>19.并发查询</span></a></h2><h3 id="_19-1-app-js" tabindex="-1"><a class="header-anchor" href="#_19-1-app-js"><span>19.1 App.js</span></a></h3><p>src\\App.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React from &#39;react&#39;;</span>
<span class="line">+import { useQuery, useQueries } from &#39;react-query&#39;;</span>
<span class="line">import { ReactQueryDevtools } from &#39;react-query/devtools&#39;</span>
<span class="line">import request from &#39;./request&#39;;</span>
<span class="line">function User() {</span>
<span class="line">+ const [usersQuery, postsQuery] = useQueries([</span>
<span class="line">+   { queryKey: [&#39;users&#39;], queryFn: () =&gt; request.get(&#39;/users&#39;) },</span>
<span class="line">+   { queryKey: [&#39;posts&#39;], queryFn: () =&gt; request.get(\`/posts\`) },</span>
<span class="line">+ ]);</span>
<span class="line">  return (</span>
<span class="line">    (</span>
<span class="line">      &lt;&gt;</span>
<span class="line">+       {usersQuery.data &amp;&amp; &lt;p&gt;用户数:{usersQuery.data.length}&lt;/p&gt;}</span>
<span class="line">+       {postsQuery.data &amp;&amp; &lt;p&gt;帖子数:{postsQuery.data.length}&lt;/p&gt;}</span>
<span class="line">      &lt;/&gt;</span>
<span class="line">    )</span>
<span class="line">  )</span>
<span class="line">}</span>
<span class="line">function App() {</span>
<span class="line">  return (</span>
<span class="line">    &lt;&gt;</span>
<span class="line">      &lt;User /&gt;</span>
<span class="line">      &lt;ReactQueryDevtools initialIsOpen={true} /&gt;</span>
<span class="line">    &lt;/&gt;</span>
<span class="line">  )</span>
<span class="line">}</span>
<span class="line">export default App;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_19-2-api-js" tabindex="-1"><a class="header-anchor" href="#_19-2-api-js"><span>19.2 api.js</span></a></h3><p>api.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> cors <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;cors&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> logger <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;morgan&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>express<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">cors</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">allowedHeaders</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;Content-Type&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">allowMethods</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;GET&quot;</span><span class="token punctuation">,</span> <span class="token string">&#39;POST&#39;</span><span class="token punctuation">,</span> <span class="token string">&quot;PUT&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;DELETE&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;OPTIONS&quot;</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">logger</span><span class="token punctuation">(</span><span class="token string">&#39;dev&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> users <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token function">String</span><span class="token punctuation">(</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">name</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> posts <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">user<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token function">String</span><span class="token punctuation">(</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">title</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> <span class="token literal-property property">userId</span><span class="token operator">:</span> <span class="token function">String</span><span class="token punctuation">(</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">setTimeout</span><span class="token punctuation">(</span>next<span class="token punctuation">,</span> <span class="token number">1000</span> <span class="token operator">*</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/users&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">   res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span>users<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">user</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token operator">...</span>user<span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> user<span class="token punctuation">.</span>name <span class="token operator">+</span> &#39;</span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/user&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> userId <span class="token operator">=</span> req<span class="token punctuation">.</span>query<span class="token punctuation">.</span>userId<span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">const</span> user <span class="token operator">=</span> users<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token parameter">user</span> <span class="token operator">=&gt;</span> user<span class="token punctuation">.</span>id <span class="token operator">===</span> userId<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>user<span class="token punctuation">)</span></span>
<span class="line">    res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">else</span></span>
<span class="line">    res<span class="token punctuation">.</span><span class="token function">sendStatus</span><span class="token punctuation">(</span><span class="token number">404</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/posts&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>  res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span>posts<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">8080</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;started on port 8080&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_20-列表和详情" tabindex="-1"><a class="header-anchor" href="#_20-列表和详情"><span>20.列表和详情</span></a></h2><h3 id="_20-1-app-js" tabindex="-1"><a class="header-anchor" href="#_20-1-app-js"><span>20.1 App.js</span></a></h3><p>src\\App.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React from &#39;react&#39;;</span>
<span class="line">import { useQuery } from &#39;react-query&#39;;</span>
<span class="line">import { ReactQueryDevtools } from &#39;react-query/devtools&#39;</span>
<span class="line">import request from &#39;./request&#39;;</span>
<span class="line">+function Users({ setUserId }) {</span>
<span class="line">+  const usersResult = useQuery(&#39;users&#39;, () =&gt; request.get(&#39;/users&#39;), { staleTime: 5000 });</span>
<span class="line">+  if (usersResult.isLoading) {</span>
<span class="line">+    return &#39;用户列表加载中......&#39;;</span>
<span class="line">+  }</span>
<span class="line">+  return (</span>
<span class="line">+    &lt;&gt;</span>
<span class="line">+      &lt;h3&gt;用户列表&lt;/h3&gt;</span>
<span class="line">+      &lt;ul&gt;</span>
<span class="line">+        {</span>
<span class="line">+          usersResult.data?.map(user =&gt; &lt;li key={user.id} onClick={() =&gt; setUserId(user.id)}&gt;{user.name}&lt;/li&gt;)</span>
<span class="line">+        }</span>
<span class="line">+      &lt;/ul&gt;</span>
<span class="line">+    &lt;/&gt;</span>
<span class="line">+  )</span>
<span class="line">+}</span>
<span class="line"></span>
<span class="line">+function User({ userId, setUserId }) {</span>
<span class="line">+  const userResult = useQuery([&#39;user&#39;, userId], () =&gt; request.get(&#39;/user&#39;, {</span>
<span class="line">+    params: { userId }</span>
<span class="line">+  }), { staleTime: 5000 });</span>
<span class="line">+  if (userResult.isLoading) {</span>
<span class="line">+    return &#39;单个用户加载中......&#39;;</span>
<span class="line">+  }</span>
<span class="line">+  return (</span>
<span class="line">+    &lt;div&gt;</span>
<span class="line">+      &lt;button onClick={() =&gt; setUserId(-1)}&gt;返回&lt;/button&gt;</span>
<span class="line">+      {userResult.data &amp;&amp; &lt;p&gt;ID:{userResult.data.id},NAME:{userResult.data.name}&lt;/p&gt;}</span>
<span class="line">+    &lt;/div&gt;</span>
<span class="line">+  )</span>
<span class="line">+}</span>
<span class="line">function App() {</span>
<span class="line">+ const [userId, setUserId] = React.useState(-1);</span>
<span class="line">+ return (</span>
<span class="line">+   &lt;&gt;</span>
<span class="line">+     {</span>
<span class="line">+       userId &gt; -1 ? (</span>
<span class="line">+         &lt;User userId={userId} setUserId={setUserId} /&gt;</span>
<span class="line">+       ) : &lt;Users setUserId={setUserId} /&gt;</span>
<span class="line">+     }</span>
<span class="line">+     &lt;ReactQueryDevtools initialIsOpen={false} /&gt;</span>
<span class="line">+   &lt;/&gt;</span>
<span class="line">+ )</span>
<span class="line">}</span>
<span class="line">export default App;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_21-读取查询缓存" tabindex="-1"><a class="header-anchor" href="#_21-读取查询缓存"><span>21.读取查询缓存</span></a></h2><ul><li><a href="https://react-query.tanstack.com/reference/QueryCache" target="_blank" rel="noopener noreferrer">QueryCache</a>是 React Query 的存储机制。它存储它包含的所有数据、元信息和查询状态</li><li>通常，您不会直接与 <code>QueryCache</code> 交互，而是使用<code>QueryClient</code></li></ul><h3 id="_21-1-app-js" tabindex="-1"><a class="header-anchor" href="#_21-1-app-js"><span>21.1 App.js</span></a></h3><p>src\\App.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React from &#39;react&#39;;</span>
<span class="line">+import { useQuery, useQueryClient } from &#39;react-query&#39;;</span>
<span class="line">import { ReactQueryDevtools } from &#39;react-query/devtools&#39;</span>
<span class="line">import request from &#39;./request&#39;;</span>
<span class="line">function Users({ setUserId }) {</span>
<span class="line">  const usersResult = useQuery(&#39;users&#39;, () =&gt; request.get(&#39;/users&#39;), { staleTime: 5000 });</span>
<span class="line">  if (usersResult.isLoading) {</span>
<span class="line">    return &#39;用户列表加载中......&#39;;</span>
<span class="line">  }</span>
<span class="line">  return (</span>
<span class="line">    &lt;&gt;</span>
<span class="line">      &lt;h3&gt;用户列表&lt;/h3&gt;</span>
<span class="line">      &lt;ul&gt;</span>
<span class="line">        {</span>
<span class="line">          usersResult.data?.map(user =&gt; &lt;li key={user.id} onClick={() =&gt; setUserId(user.id)}&gt;{user.name}&lt;/li&gt;)</span>
<span class="line">        }</span>
<span class="line">      &lt;/ul&gt;</span>
<span class="line">    &lt;/&gt;</span>
<span class="line">  )</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">function User({ userId, setUserId }) {</span>
<span class="line">  const queryClient = useQueryClient();</span>
<span class="line">  const userResult = useQuery([&#39;user&#39;, userId], () =&gt; request.get(&#39;/user&#39;, {</span>
<span class="line">    params: { userId }</span>
<span class="line">  }), {</span>
<span class="line">    staleTime: 5000,</span>
<span class="line">+   initialData: () =&gt; queryClient.getQueryData(&#39;users&#39;)?.find(user =&gt; user.id === userId),</span>
<span class="line">+   initialStable: false</span>
<span class="line">  });</span>
<span class="line">  if (userResult.isLoading) {</span>
<span class="line">    return &#39;单个用户加载中......&#39;;</span>
<span class="line">  }</span>
<span class="line">  return (</span>
<span class="line">    &lt;div&gt;</span>
<span class="line">      &lt;button onClick={() =&gt; setUserId(-1)}&gt;返回&lt;/button&gt;</span>
<span class="line">      {userResult.data &amp;&amp; &lt;p&gt;ID:{userResult.data.id},NAME:{userResult.data.name}&lt;/p&gt;}</span>
<span class="line">    &lt;/div&gt;</span>
<span class="line">  )</span>
<span class="line">}</span>
<span class="line">function App() {</span>
<span class="line">  const [userId, setUserId] = React.useState(-1);</span>
<span class="line">  return (</span>
<span class="line">    &lt;&gt;</span>
<span class="line">      {</span>
<span class="line">        userId &gt; -1 ? (</span>
<span class="line">          &lt;User userId={userId} setUserId={setUserId} /&gt;</span>
<span class="line">        ) : &lt;Users setUserId={setUserId} /&gt;</span>
<span class="line">      }</span>
<span class="line">      &lt;ReactQueryDevtools initialIsOpen={false} /&gt;</span>
<span class="line">    &lt;/&gt;</span>
<span class="line">  )</span>
<span class="line">}</span>
<span class="line">export default App;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_22-预缓存" tabindex="-1"><a class="header-anchor" href="#_22-预缓存"><span>22.预缓存</span></a></h2><h3 id="_22-1-app-js" tabindex="-1"><a class="header-anchor" href="#_22-1-app-js"><span>22.1 App.js</span></a></h3><p>src\\App.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React from &#39;react&#39;;</span>
<span class="line">import { useQuery, useQueryClient } from &#39;react-query&#39;;</span>
<span class="line">import { ReactQueryDevtools } from &#39;react-query/devtools&#39;</span>
<span class="line">import request from &#39;./request&#39;;</span>
<span class="line">function Users({ setUserId }) {</span>
<span class="line">+  const queryClient = useQueryClient();</span>
<span class="line">+ const usersResult = useQuery(&#39;users&#39;, async () =&gt; {</span>
<span class="line">+   const users = await request.get(&#39;/users&#39;);</span>
<span class="line">+   users.forEach(user =&gt; {</span>
<span class="line">+     queryClient.setQueryData([&#39;user&#39;, user.id], user);</span>
<span class="line">+   });</span>
<span class="line">+   return users;</span>
<span class="line">  }, { staleTime: 5000 });</span>
<span class="line">  if (usersResult.isLoading) {</span>
<span class="line">    return &#39;用户列表加载中......&#39;;</span>
<span class="line">  }</span>
<span class="line">  return (</span>
<span class="line">    &lt;&gt;</span>
<span class="line">      &lt;h3&gt;用户列表&lt;/h3&gt;</span>
<span class="line">      &lt;ul&gt;</span>
<span class="line">        {</span>
<span class="line">          usersResult.data?.map(user =&gt; &lt;li key={user.id} onClick={() =&gt; setUserId(user.id)}&gt;{user.name}&lt;/li&gt;)</span>
<span class="line">        }</span>
<span class="line">      &lt;/ul&gt;</span>
<span class="line">    &lt;/&gt;</span>
<span class="line">  )</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">function User({ userId, setUserId }) {</span>
<span class="line">- const queryClient = useQueryClient();</span>
<span class="line">  const userResult = useQuery([&#39;user&#39;, userId], () =&gt; request.get(&#39;/user&#39;, {</span>
<span class="line">    params: { userId }</span>
<span class="line">  }), {</span>
<span class="line">-    staleTime: 5000,</span>
<span class="line">-    initialData: () =&gt; queryClient.getQueryData(&#39;users&#39;)?.find(user =&gt; user.id === userId),</span>
<span class="line">-    initialStable: false</span>
<span class="line">  });</span>
<span class="line">  if (userResult.isLoading) {</span>
<span class="line">    return &#39;单个用户加载中......&#39;;</span>
<span class="line">  }</span>
<span class="line">  return (</span>
<span class="line">    &lt;div&gt;</span>
<span class="line">      &lt;button onClick={() =&gt; setUserId(-1)}&gt;返回&lt;/button&gt;</span>
<span class="line">      {userResult.data &amp;&amp; &lt;p&gt;ID:{userResult.data.id},NAME:{userResult.data.name}&lt;/p&gt;}</span>
<span class="line">    &lt;/div&gt;</span>
<span class="line">  )</span>
<span class="line">}</span>
<span class="line">function App() {</span>
<span class="line">  const [userId, setUserId] = React.useState(-1);</span>
<span class="line">  return (</span>
<span class="line">    &lt;&gt;</span>
<span class="line">      {</span>
<span class="line">        userId &gt; -1 ? (</span>
<span class="line">          &lt;User userId={userId} setUserId={setUserId} /&gt;</span>
<span class="line">        ) : &lt;Users setUserId={setUserId} /&gt;</span>
<span class="line">      }</span>
<span class="line">      &lt;ReactQueryDevtools initialIsOpen={false} /&gt;</span>
<span class="line">    &lt;/&gt;</span>
<span class="line">  )</span>
<span class="line">}</span>
<span class="line">export default App;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_23-副作用" tabindex="-1"><a class="header-anchor" href="#_23-副作用"><span>23.副作用</span></a></h2><h3 id="_23-1-app-js" tabindex="-1"><a class="header-anchor" href="#_23-1-app-js"><span>23.1 App.js</span></a></h3><p>src\\App.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React from &#39;react&#39;;</span>
<span class="line">import { useQuery, useQueryClient } from &#39;react-query&#39;;</span>
<span class="line">import { ReactQueryDevtools } from &#39;react-query/devtools&#39;</span>
<span class="line">+import { ToastContainer, toast } from &#39;react-toastify&#39;;</span>
<span class="line">+import &#39;react-toastify/dist/ReactToastify.css&#39;;</span>
<span class="line">import request from &#39;./request&#39;;</span>
<span class="line">function Users({ setUserId }) {</span>
<span class="line">  const queryClient = useQueryClient();</span>
<span class="line">  const usersResult = useQuery(&#39;users&#39;, async () =&gt; {</span>
<span class="line">    const users = await request.get(&#39;/users&#39;);</span>
<span class="line">    users.forEach(user =&gt; {</span>
<span class="line">      queryClient.setQueryData([&#39;user&#39;, user.id], user);</span>
<span class="line">    });</span>
<span class="line">    return users;</span>
<span class="line">  }, {</span>
<span class="line">+   onSuccess(data) {</span>
<span class="line">+     //console.log(&#39;查询成功&#39;, data);</span>
<span class="line">+     toast(&quot;查询成功!&quot;)</span>
<span class="line">+   },</span>
<span class="line">+   onError(error) {</span>
<span class="line">+     //console.log(&#39;查询失败&#39;, error);</span>
<span class="line">+     toast(&quot;查询失败!&quot;)</span>
<span class="line">+   },</span>
<span class="line">+   onSettled(data, error) {</span>
<span class="line">+     console.log(&#39;查询结束&#39;);</span>
<span class="line">+   }</span>
<span class="line">  });</span>
<span class="line">  if (usersResult.isLoading) {</span>
<span class="line">    return &#39;用户列表加载中......&#39;;</span>
<span class="line">  }</span>
<span class="line">  return (</span>
<span class="line">    &lt;&gt;</span>
<span class="line">      &lt;h3&gt;用户列表&lt;/h3&gt;</span>
<span class="line">      &lt;ul&gt;</span>
<span class="line">        {</span>
<span class="line">          usersResult.data?.map(user =&gt; &lt;li key={user.id} onClick={() =&gt; setUserId(user.id)}&gt;{user.name}&lt;/li&gt;)</span>
<span class="line">        }</span>
<span class="line">      &lt;/ul&gt;</span>
<span class="line">    &lt;/&gt;</span>
<span class="line">  )</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">function User({ userId, setUserId }) {</span>
<span class="line">  //  const queryClient = useQueryClient();</span>
<span class="line">  const userResult = useQuery([&#39;user&#39;, userId], () =&gt; request.get(&#39;/user&#39;, {</span>
<span class="line">    params: { userId }</span>
<span class="line">  }));</span>
<span class="line">  if (userResult.isLoading) {</span>
<span class="line">    return &#39;单个用户加载中......&#39;;</span>
<span class="line">  }</span>
<span class="line">  return (</span>
<span class="line">    &lt;div&gt;</span>
<span class="line">      &lt;button onClick={() =&gt; setUserId(-1)}&gt;返回&lt;/button&gt;</span>
<span class="line">      {userResult.data &amp;&amp; &lt;p&gt;ID:{userResult.data.id},NAME:{userResult.data.name}&lt;/p&gt;}</span>
<span class="line">    &lt;/div&gt;</span>
<span class="line">  )</span>
<span class="line">}</span>
<span class="line">function App() {</span>
<span class="line">  const [userId, setUserId] = React.useState(-1);</span>
<span class="line">  return (</span>
<span class="line">    &lt;&gt;</span>
<span class="line">      {</span>
<span class="line">        userId &gt; -1 ? (</span>
<span class="line">          &lt;User userId={userId} setUserId={setUserId} /&gt;</span>
<span class="line">        ) : &lt;Users setUserId={setUserId} /&gt;</span>
<span class="line">      }</span>
<span class="line">+     &lt;ToastContainer /&gt;</span>
<span class="line">      &lt;ReactQueryDevtools initialIsOpen={false} /&gt;</span>
<span class="line">    &lt;/&gt;</span>
<span class="line">  )</span>
<span class="line">}</span>
<span class="line">export default App;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_23-预查询" tabindex="-1"><a class="header-anchor" href="#_23-预查询"><span>23.预查询</span></a></h2><ul><li>[prefetchQuery](https://react-query.tanstack.com/reference/QueryClient</li></ul><h3 id="_23-1-app-js-1" tabindex="-1"><a class="header-anchor" href="#_23-1-app-js-1"><span>23.1 App.js</span></a></h3><p>src\\App.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React from &#39;react&#39;;</span>
<span class="line">import { useQuery, useQueryClient } from &#39;react-query&#39;;</span>
<span class="line">import { ReactQueryDevtools } from &#39;react-query/devtools&#39;</span>
<span class="line">import { ToastContainer, toast } from &#39;react-toastify&#39;;</span>
<span class="line">import &#39;react-toastify/dist/ReactToastify.css&#39;;</span>
<span class="line">import request from &#39;./request&#39;;</span>
<span class="line">+function fetchUsers() {</span>
<span class="line">+  return request.get(&#39;/users&#39;);</span>
<span class="line">+}</span>
<span class="line">function Users({ setUserId }) {</span>
<span class="line">  const usersResult = useQuery(&#39;users&#39;, fetchUsers);</span>
<span class="line">  if (usersResult.isLoading) {</span>
<span class="line">    return &#39;用户列表加载中......&#39;;</span>
<span class="line">  }</span>
<span class="line">  return (</span>
<span class="line">    &lt;&gt;</span>
<span class="line">      &lt;h3&gt;用户列表&lt;/h3&gt;</span>
<span class="line">      &lt;ul&gt;</span>
<span class="line">        {</span>
<span class="line">          usersResult.data?.map(user =&gt; &lt;li key={user.id} onClick={() =&gt; setUserId(user.id)}&gt;{user.name}&lt;/li&gt;)</span>
<span class="line">        }</span>
<span class="line">      &lt;/ul&gt;</span>
<span class="line">    &lt;/&gt;</span>
<span class="line">  )</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">function App() {</span>
<span class="line">+ const queryClient = useQueryClient();</span>
<span class="line">+ const [show, setShow] = React.useState(false);</span>
<span class="line">+ React.useEffect(() =&gt; {</span>
<span class="line">+   queryClient.prefetchQuery(&#39;users&#39;, fetchUsers, { staleTime: 5000 });</span>
<span class="line">+ })</span>
<span class="line">  return (</span>
<span class="line">    &lt;&gt;</span>
<span class="line">+     &lt;button onClick={() =&gt; setShow(!show)} onMouseOver={() =&gt;</span>
<span class="line">+       queryClient.prefetchQuery(&#39;users&#39;, fetchUsers, { staleTime: 5000 })}&gt;show&lt;/button&gt;</span>
<span class="line">+     {</span>
<span class="line">+       show &amp;&amp; &lt;Users /&gt;</span>
<span class="line">+     }</span>
<span class="line">      &lt;ReactQueryDevtools initialIsOpen={false} /&gt;</span>
<span class="line">    &lt;/&gt;</span>
<span class="line">  )</span>
<span class="line">}</span>
<span class="line">export default App;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_24-变更操作" tabindex="-1"><a class="header-anchor" href="#_24-变更操作"><span>24.变更操作</span></a></h2><h3 id="_24-1-src-app-js" tabindex="-1"><a class="header-anchor" href="#_24-1-src-app-js"><span>24.1 src\\App.js</span></a></h3><p>src\\App.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React from &#39;react&#39;;</span>
<span class="line">+import { useQuery, useQueryClient, useMutation } from &#39;react-query&#39;;</span>
<span class="line">import { ReactQueryDevtools } from &#39;react-query/devtools&#39;</span>
<span class="line">import request from &#39;./request&#39;;</span>
<span class="line">function fetchUsers() {</span>
<span class="line">  return request.get(&#39;/users&#39;);</span>
<span class="line">}</span>
<span class="line">function Users({ setUserId }) {</span>
<span class="line">  const usersResult = useQuery(&#39;users&#39;, fetchUsers);</span>
<span class="line">  if (usersResult.isLoading) {</span>
<span class="line">    return &#39;用户列表加载中......&#39;;</span>
<span class="line">  }</span>
<span class="line">  return (</span>
<span class="line">    &lt;&gt;</span>
<span class="line">      &lt;h3&gt;用户列表&lt;/h3&gt;</span>
<span class="line">      &lt;ul&gt;</span>
<span class="line">        {</span>
<span class="line">          usersResult.data?.map(user =&gt; &lt;li key={user.id} onClick={() =&gt; setUserId(user.id)}&gt;{user.name}&lt;/li&gt;)</span>
<span class="line">        }</span>
<span class="line">      &lt;/ul&gt;</span>
<span class="line">    &lt;/&gt;</span>
<span class="line">  )</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">function App() {</span>
<span class="line">+ const nameRef = React.useRef();</span>
<span class="line">+ const queryClient = useQueryClient();</span>
<span class="line">+ const { mutate, isLoading, isError, isSuccess, error } = useMutation(</span>
<span class="line">+   (values) =&gt; request.post(&#39;/users&#39;, values), {</span>
<span class="line">+   onSuccess() {</span>
<span class="line">+     //queryClient.invalidateQueries(&#39;users&#39;);</span>
<span class="line">+   },</span>
<span class="line">+   onError(error) {</span>
<span class="line">+     //alert(error.response.data.message);</span>
<span class="line">+   },</span>
<span class="line">+   onSettled(data, error) {</span>
<span class="line">+     queryClient.invalidateQueries(&#39;users&#39;);</span>
<span class="line">+   }</span>
<span class="line">+ });</span>
<span class="line">+ const handleSubmit = (event) =&gt; {</span>
<span class="line">+   event.preventDefault();</span>
<span class="line">+   const name = nameRef.current.value;</span>
<span class="line">+   const user = { name };</span>
<span class="line">+   mutate(user);</span>
<span class="line">+ }</span>
<span class="line">  return (</span>
<span class="line">    &lt;&gt;</span>
<span class="line">      &lt;Users /&gt;</span>
<span class="line">+      &lt;form onSubmit={handleSubmit}&gt;</span>
<span class="line">+        &lt;input ref={nameRef} /&gt;</span>
<span class="line">+        &lt;input type=&quot;submit&quot; value={isLoading ? &#39;保存中...&#39; : isError ? &#39;保存失败&#39; : isSuccess ? &quot;保存成功&quot; : &quot;保存&quot;} /&gt;</span>
<span class="line">+     &lt;/form&gt;</span>
<span class="line">+     {isError &amp;&amp; &lt;pre style={{ color: &#39;red&#39; }}&gt;{error.response.data.message}&lt;/pre&gt;}</span>
<span class="line">      &lt;ReactQueryDevtools initialIsOpen={false} /&gt;</span>
<span class="line">    &lt;/&gt;</span>
<span class="line">  )</span>
<span class="line">}</span>
<span class="line">export default App;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_24-2-api-js" tabindex="-1"><a class="header-anchor" href="#_24-2-api-js"><span>24.2 api.js</span></a></h3><p>api.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> cors <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;cors&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> logger <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;morgan&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>express<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">cors</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">allowedHeaders</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;Content-Type&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">allowMethods</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;GET&quot;</span><span class="token punctuation">,</span> <span class="token string">&#39;POST&#39;</span><span class="token punctuation">,</span> <span class="token string">&quot;PUT&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;DELETE&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;OPTIONS&quot;</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">logger</span><span class="token punctuation">(</span><span class="token string">&#39;dev&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> users <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token function">String</span><span class="token punctuation">(</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">name</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> posts <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">user<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token function">String</span><span class="token punctuation">(</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">title</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> <span class="token literal-property property">userId</span><span class="token operator">:</span> <span class="token function">String</span><span class="token punctuation">(</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">setTimeout</span><span class="token punctuation">(</span>next<span class="token punctuation">,</span> <span class="token number">1000</span> <span class="token operator">*</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/users&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">   res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span>users<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">user</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token operator">...</span>user<span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> user<span class="token punctuation">.</span>name <span class="token operator">+</span> &#39;</span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/user&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> userId <span class="token operator">=</span> req<span class="token punctuation">.</span>query<span class="token punctuation">.</span>userId<span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">const</span> user <span class="token operator">=</span> users<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token parameter">user</span> <span class="token operator">=&gt;</span> user<span class="token punctuation">.</span>id <span class="token operator">===</span> userId<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>user<span class="token punctuation">)</span></span>
<span class="line">    res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">else</span></span>
<span class="line">    res<span class="token punctuation">.</span><span class="token function">sendStatus</span><span class="token punctuation">(</span><span class="token number">404</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>app<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&#39;/users&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>  <span class="token keyword">let</span> user <span class="token operator">=</span> req<span class="token punctuation">.</span>body<span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>  <span class="token keyword">if</span> <span class="token punctuation">(</span>user<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>    user<span class="token punctuation">.</span>id <span class="token operator">=</span> <span class="token punctuation">(</span>users<span class="token punctuation">.</span>length <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>    user<span class="token punctuation">.</span>createdAt <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toLocaleDateString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>    users<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>    res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>    res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">400</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;用户名不能为空!&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>  <span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">+</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/posts&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span>posts<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">8080</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;started on port 8080&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_25-乐观更新" tabindex="-1"><a class="header-anchor" href="#_25-乐观更新"><span>25.乐观更新</span></a></h2><ul><li>[useMutation](https://react-query.tanstack.com/reference/useMutation</li><li><code>onMutate</code>函数将在突变函数被触发之前触发，并传递突变函数将接收的相同变量</li><li>用于对资源执行乐观更新以希望突变成功</li><li>如果发生突变失败，从此函数返回的值将传递给onError和onSettled函数，并且可用于回滚乐观更新</li></ul><h3 id="_25-1-src-app-js" tabindex="-1"><a class="header-anchor" href="#_25-1-src-app-js"><span>25.1 src\\App.js</span></a></h3><p>src\\App.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React from &#39;react&#39;;</span>
<span class="line">import { useQuery, useQueryClient, useMutation } from &#39;react-query&#39;;</span>
<span class="line">import { ReactQueryDevtools } from &#39;react-query/devtools&#39;</span>
<span class="line">import request from &#39;./request&#39;;</span>
<span class="line">function fetchUsers() {</span>
<span class="line">  return request.get(&#39;/users&#39;);</span>
<span class="line">}</span>
<span class="line">function Users({ setUserId }) {</span>
<span class="line">  const usersResult = useQuery(&#39;users&#39;, fetchUsers);</span>
<span class="line">  if (usersResult.isLoading) {</span>
<span class="line">    return &#39;用户列表加载中......&#39;;</span>
<span class="line">  }</span>
<span class="line">  return (</span>
<span class="line">    &lt;&gt;</span>
<span class="line">      &lt;h3&gt;用户列表&lt;/h3&gt;</span>
<span class="line">      &lt;ul&gt;</span>
<span class="line">        {</span>
<span class="line">          usersResult.data?.map(user =&gt; &lt;li key={user.id} onClick={() =&gt; setUserId(user.id)}&gt;{user.name}&lt;/li&gt;)</span>
<span class="line">        }</span>
<span class="line">      &lt;/ul&gt;</span>
<span class="line">    &lt;/&gt;</span>
<span class="line">  )</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">function App() {</span>
<span class="line">  const nameRef = React.useRef();</span>
<span class="line">  const queryClient = useQueryClient();</span>
<span class="line">  const { mutate:saveUser, isLoading, isError, isSuccess, error } = useMutation(</span>
<span class="line">    (values) =&gt; request.post(&#39;/users&#39;, values), {</span>
<span class="line">+   onMutate(values) {</span>
<span class="line">+     queryClient.setQueryData(&#39;users&#39;, oldUsers =&gt; [...oldUsers, { ...values, id: String(Date.now()) }]);</span>
<span class="line">+   },</span>
<span class="line">    onSuccess() {</span>
<span class="line">      //queryClient.invalidateQueries(&#39;users&#39;);</span>
<span class="line">    },</span>
<span class="line">    onError(error) {</span>
<span class="line">      //alert(error.response.data.message);</span>
<span class="line">    },</span>
<span class="line">    onSettled(data, error) {</span>
<span class="line">      queryClient.invalidateQueries(&#39;users&#39;);</span>
<span class="line">    }</span>
<span class="line">  });</span>
<span class="line">  const handleSubmit = (event) =&gt; {</span>
<span class="line">    event.preventDefault();</span>
<span class="line">    const name = nameRef.current.value;</span>
<span class="line">    const user = { name };</span>
<span class="line">    saveUser(user);</span>
<span class="line">  }</span>
<span class="line">  return (</span>
<span class="line">    &lt;&gt;</span>
<span class="line">      &lt;Users /&gt;</span>
<span class="line">      &lt;form onSubmit={handleSubmit}&gt;</span>
<span class="line">        &lt;input ref={nameRef} /&gt;</span>
<span class="line">        &lt;input type=&quot;submit&quot; value={isLoading ? &#39;保存中...&#39; : isError ? &#39;保存失败&#39; : isSuccess ? &quot;保存成功&quot; : &quot;保存&quot;} /&gt;</span>
<span class="line">      &lt;/form&gt;</span>
<span class="line">      {isError &amp;&amp; &lt;pre style={{ color: &#39;red&#39; }}&gt;{error.response.data.message}&lt;/pre&gt;}</span>
<span class="line">      &lt;ReactQueryDevtools initialIsOpen={false} /&gt;</span>
<span class="line">    &lt;/&gt;</span>
<span class="line">  )</span>
<span class="line">}</span>
<span class="line">export default App;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_25-2-api-js" tabindex="-1"><a class="header-anchor" href="#_25-2-api-js"><span>25.2 api.js</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> cors <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;cors&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> logger <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;morgan&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>express<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">cors</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">allowedHeaders</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;Content-Type&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">allowMethods</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;GET&quot;</span><span class="token punctuation">,</span> <span class="token string">&#39;POST&#39;</span><span class="token punctuation">,</span> <span class="token string">&quot;PUT&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;DELETE&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;OPTIONS&quot;</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">logger</span><span class="token punctuation">(</span><span class="token string">&#39;dev&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> users <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token function">String</span><span class="token punctuation">(</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">name</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> posts <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">user<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token function">String</span><span class="token punctuation">(</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">title</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> <span class="token literal-property property">userId</span><span class="token operator">:</span> <span class="token function">String</span><span class="token punctuation">(</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">setTimeout</span><span class="token punctuation">(</span>next<span class="token punctuation">,</span> <span class="token number">1000</span> <span class="token operator">*</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/users&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span>users<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/user&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> userId <span class="token operator">=</span> req<span class="token punctuation">.</span>query<span class="token punctuation">.</span>userId<span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">const</span> user <span class="token operator">=</span> users<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token parameter">user</span> <span class="token operator">=&gt;</span> user<span class="token punctuation">.</span>id <span class="token operator">===</span> userId<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>user<span class="token punctuation">)</span></span>
<span class="line">    res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">else</span></span>
<span class="line">    res<span class="token punctuation">.</span><span class="token function">sendStatus</span><span class="token punctuation">(</span><span class="token number">404</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&#39;/users&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> user <span class="token operator">=</span> req<span class="token punctuation">.</span>body<span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>user<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    user<span class="token punctuation">.</span>id <span class="token operator">=</span> <span class="token punctuation">(</span>users<span class="token punctuation">.</span>length <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span></span>
<span class="line">    user<span class="token punctuation">.</span>createdAt <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toLocaleDateString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    users<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">    res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">400</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;用户名不能为空!&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/posts&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span>posts<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">8080</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;started on port 8080&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_26-失败回滚" tabindex="-1"><a class="header-anchor" href="#_26-失败回滚"><span>26.失败回滚</span></a></h2><h3 id="_26-1-src-app-js" tabindex="-1"><a class="header-anchor" href="#_26-1-src-app-js"><span>26.1 src\\App.js</span></a></h3><p>src\\App.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React from &#39;react&#39;;</span>
<span class="line">import { useQuery, useQueryClient, useMutation } from &#39;react-query&#39;;</span>
<span class="line">import { ReactQueryDevtools } from &#39;react-query/devtools&#39;</span>
<span class="line">import request from &#39;./request&#39;;</span>
<span class="line">function fetchUsers() {</span>
<span class="line">  return request.get(&#39;/users&#39;);</span>
<span class="line">}</span>
<span class="line">function Users() {</span>
<span class="line">  const usersResult = useQuery(&#39;users&#39;, fetchUsers);</span>
<span class="line">  if (usersResult.isLoading) {</span>
<span class="line">    return &#39;用户列表加载中......&#39;;</span>
<span class="line">  }</span>
<span class="line">  return (</span>
<span class="line">    &lt;&gt;</span>
<span class="line">      &lt;h3&gt;用户列表&lt;/h3&gt;</span>
<span class="line">      &lt;ul&gt;</span>
<span class="line">        {</span>
<span class="line">          usersResult.data?.map(user =&gt; &lt;li key={user.id}&gt;{user.name}&lt;/li&gt;)</span>
<span class="line">        }</span>
<span class="line">      &lt;/ul&gt;</span>
<span class="line">    &lt;/&gt;</span>
<span class="line">  )</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">function App() {</span>
<span class="line">  const nameRef = React.useRef();</span>
<span class="line">  const queryClient = useQueryClient();</span>
<span class="line">+ const { mutate: saveUser, reset, isLoading, isError, isSuccess, error } = useMutation(</span>
<span class="line">    (values) =&gt; request.post(&#39;/users&#39;, values), {</span>
<span class="line">+   retry: false,</span>
<span class="line">+   onMutate(values) {</span>
<span class="line">+     queryClient.cancelQueries(&#39;users&#39;);</span>
<span class="line">+     const oldUsers = queryClient.getQueryData(&#39;users&#39;);</span>
<span class="line">+     queryClient.setQueryData(&#39;users&#39;, oldUsers =&gt; [...oldUsers, { ...values, id: String(Date.now+)) }]);</span>
<span class="line">+     //return oldUsers;</span>
<span class="line">+     return () =&gt; queryClient.setQueryData(&#39;users&#39;, oldUsers)</span>
<span class="line">+   },</span>
<span class="line">+   onSuccess(data) {</span>
<span class="line">+     queryClient.setQueryData(&#39;users&#39;, oldUsers =&gt; oldUsers.map((user, index) =&gt; {</span>
<span class="line">+       if (index === oldUsers.length - 1) {</span>
<span class="line">+         return data;</span>
<span class="line">+       }</span>
<span class="line">+       return user;</span>
<span class="line">+     }));</span>
<span class="line">+     //queryClient.invalidateQueries(&#39;users&#39;);</span>
<span class="line">+   },</span>
<span class="line">+   onError(error, values, rollback) {</span>
<span class="line">+     //alert(error.response.data.message);</span>
<span class="line">+     //queryClient.setQueryData(&#39;users&#39;, rollbackValue);</span>
<span class="line">+     console.log(rollback);</span>
<span class="line">+     rollback &amp;&amp; rollback();</span>
<span class="line">+   },</span>
<span class="line">+   onSettled(data, error) {</span>
<span class="line">+     queryClient.invalidateQueries(&#39;users&#39;);</span>
<span class="line">+     setTimeout(() =&gt; {</span>
<span class="line">+       nameRef.current.value = &#39;&#39;</span>
<span class="line">+       reset();</span>
<span class="line">+     }, 3000)</span>
<span class="line">+   }</span>
<span class="line">  });</span>
<span class="line">  const handleSubmit = (event) =&gt; {</span>
<span class="line">    event.preventDefault();</span>
<span class="line">    const name = nameRef.current.value;</span>
<span class="line">    const user = { name };</span>
<span class="line">    saveUser(user);</span>
<span class="line">  }</span>
<span class="line">  return (</span>
<span class="line">    &lt;&gt;</span>
<span class="line">      &lt;Users /&gt;</span>
<span class="line">      &lt;form onSubmit={handleSubmit}&gt;</span>
<span class="line">        &lt;input ref={nameRef} /&gt;</span>
<span class="line">        &lt;input type=&quot;submit&quot; value={isLoading ? &#39;保存中...&#39; : isError ? &#39;保存失败&#39; : isSuccess ? &quot;保存成功&quot; : &quot;保存&quot;} /&gt;</span>
<span class="line">      &lt;/form&gt;</span>
<span class="line">      {isError &amp;&amp; &lt;pre style={{ color: &#39;red&#39; }}&gt;{error.response.data.message}&lt;/pre&gt;}</span>
<span class="line">      &lt;ReactQueryDevtools initialIsOpen={false} /&gt;</span>
<span class="line">    &lt;/&gt;</span>
<span class="line">  )</span>
<span class="line">}</span>
<span class="line">export default App;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_27-分页查询" tabindex="-1"><a class="header-anchor" href="#_27-分页查询"><span>27.分页查询</span></a></h2><h3 id="_27-1-src-app-js" tabindex="-1"><a class="header-anchor" href="#_27-1-src-app-js"><span>27.1 src\\App.js</span></a></h3><p>src\\App.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useQuery<span class="token punctuation">,</span> useQueryClient<span class="token punctuation">,</span> useMutation <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-query&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> ReactQueryDevtools <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-query/devtools&#39;</span></span>
<span class="line"><span class="token keyword">import</span> request <span class="token keyword">from</span> <span class="token string">&#39;./request&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span><span class="token keyword">function</span> <span class="token function">fetchUsers</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> <span class="token literal-property property">queryKey</span><span class="token operator">:</span> <span class="token punctuation">[</span>_<span class="token punctuation">,</span> <span class="token punctuation">{</span> pageNumber <span class="token punctuation">}</span><span class="token punctuation">]</span> <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>  <span class="token keyword">return</span> request<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/users&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>    params<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>      pageNumber</span>
<span class="line"><span class="token operator">+</span>    <span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">+</span>  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">Users</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span> <span class="token keyword">const</span> queryClient <span class="token operator">=</span> <span class="token function">useQueryClient</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span> <span class="token keyword">const</span> <span class="token punctuation">[</span>pageNumber<span class="token punctuation">,</span> setPageNumber<span class="token punctuation">]</span> <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span> <span class="token keyword">const</span> usersResult <span class="token operator">=</span> <span class="token function">useQuery</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;users&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> pageNumber <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span> fetchUsers<span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>   <span class="token function">onSuccess</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>     queryClient<span class="token punctuation">.</span><span class="token function">prefetchQuery</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;users&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">pageNumber</span><span class="token operator">:</span> pageNumber <span class="token operator">+</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span> fetchUsers<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span>   <span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">+</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">&gt;</span></span>
<span class="line">      <span class="token operator">&lt;</span>h3<span class="token operator">&gt;</span>用户列表<span class="token operator">&lt;</span><span class="token operator">/</span>h3<span class="token operator">&gt;</span></span>
<span class="line">      <span class="token operator">&lt;</span>ul<span class="token operator">&gt;</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>         usersResult<span class="token punctuation">.</span>data<span class="token operator">?.</span>data<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">user</span> <span class="token operator">=&gt;</span> <span class="token operator">&lt;</span>li key<span class="token operator">=</span><span class="token punctuation">{</span>user<span class="token punctuation">.</span>id<span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">{</span>user<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">+</span>      <span class="token punctuation">{</span><span class="token operator">&lt;</span>button disabled<span class="token operator">=</span><span class="token punctuation">{</span>pageNumber <span class="token operator">&lt;=</span> <span class="token number">1</span><span class="token punctuation">}</span> onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">setPageNumber</span><span class="token punctuation">(</span><span class="token parameter">pageNumber</span> <span class="token operator">=&gt;</span> pageNumber <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>上一页<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">+</span>      <span class="token operator">&lt;</span>span<span class="token operator">&gt;</span><span class="token punctuation">{</span>pageNumber<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">+</span>      <span class="token punctuation">{</span><span class="token operator">&lt;</span>button disabled<span class="token operator">=</span><span class="token punctuation">{</span>usersResult<span class="token punctuation">.</span>data<span class="token operator">?.</span>pageNumber <span class="token operator">&gt;=</span> usersResult<span class="token punctuation">.</span>data<span class="token operator">?.</span>totalPage<span class="token punctuation">}</span> onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">setPageNumber</span><span class="token punctuation">(</span><span class="token parameter">pageNumber</span> <span class="token operator">=&gt;</span> pageNumber <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>下一页<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span><span class="token punctuation">}</span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line">  <span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> nameRef <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">const</span> queryClient <span class="token operator">=</span> <span class="token function">useQueryClient</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token literal-property property">mutate</span><span class="token operator">:</span> saveUser<span class="token punctuation">,</span> reset<span class="token punctuation">,</span> isLoading<span class="token punctuation">,</span> isError<span class="token punctuation">,</span> isSuccess<span class="token punctuation">,</span> error <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useMutation</span><span class="token punctuation">(</span></span>
<span class="line">    <span class="token punctuation">(</span><span class="token parameter">values</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> request<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&#39;/users&#39;</span><span class="token punctuation">,</span> values<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">retry</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function">onMutate</span><span class="token punctuation">(</span><span class="token parameter">values</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      queryClient<span class="token punctuation">.</span><span class="token function">cancelQueries</span><span class="token punctuation">(</span><span class="token string">&#39;users&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">const</span> oldUsers <span class="token operator">=</span> queryClient<span class="token punctuation">.</span><span class="token function">getQueryData</span><span class="token punctuation">(</span><span class="token string">&#39;users&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      queryClient<span class="token punctuation">.</span><span class="token function">setQueryData</span><span class="token punctuation">(</span><span class="token string">&#39;users&#39;</span><span class="token punctuation">,</span> <span class="token parameter">oldUsers</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token operator">...</span>oldUsers<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token operator">...</span>values<span class="token punctuation">,</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token function">String</span><span class="token punctuation">(</span>Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token comment">//return oldUsers;</span></span>
<span class="line">      <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> queryClient<span class="token punctuation">.</span><span class="token function">setQueryData</span><span class="token punctuation">(</span><span class="token string">&#39;users&#39;</span><span class="token punctuation">,</span> oldUsers<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function">onSuccess</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      queryClient<span class="token punctuation">.</span><span class="token function">setQueryData</span><span class="token punctuation">(</span><span class="token string">&#39;users&#39;</span><span class="token punctuation">,</span> <span class="token parameter">oldUsers</span> <span class="token operator">=&gt;</span> oldUsers<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">user<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">===</span> oldUsers<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token keyword">return</span> data<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token keyword">return</span> user<span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token comment">//queryClient.invalidateQueries(&#39;users&#39;);</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function">onError</span><span class="token punctuation">(</span><span class="token parameter">error<span class="token punctuation">,</span> values<span class="token punctuation">,</span> rollback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">//alert(error.response.data.message);</span></span>
<span class="line">      <span class="token comment">//queryClient.setQueryData(&#39;users&#39;, rollbackValue);</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>rollback<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      rollback <span class="token operator">&amp;&amp;</span> <span class="token function">rollback</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function">onSettled</span><span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span> error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      queryClient<span class="token punctuation">.</span><span class="token function">invalidateQueries</span><span class="token punctuation">(</span><span class="token string">&#39;users&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">        nameRef<span class="token punctuation">.</span>current<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">&#39;&#39;</span></span>
<span class="line">        <span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">3000</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token function-variable function">handleSubmit</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    event<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">const</span> name <span class="token operator">=</span> nameRef<span class="token punctuation">.</span>current<span class="token punctuation">.</span>value<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token punctuation">{</span> name <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token function">saveUser</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">&gt;</span></span>
<span class="line">      <span class="token operator">&lt;</span>Users <span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line">      <span class="token operator">&lt;</span>form onSubmit<span class="token operator">=</span><span class="token punctuation">{</span>handleSubmit<span class="token punctuation">}</span><span class="token operator">&gt;</span></span>
<span class="line">        <span class="token operator">&lt;</span>input ref<span class="token operator">=</span><span class="token punctuation">{</span>nameRef<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line">        <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">&quot;submit&quot;</span> value<span class="token operator">=</span><span class="token punctuation">{</span>isLoading <span class="token operator">?</span> <span class="token string">&#39;保存中...&#39;</span> <span class="token operator">:</span> isError <span class="token operator">?</span> <span class="token string">&#39;保存失败&#39;</span> <span class="token operator">:</span> isSuccess <span class="token operator">?</span> <span class="token string">&quot;保存成功&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;保存&quot;</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line">      <span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">&gt;</span></span>
<span class="line">      <span class="token punctuation">{</span>isError <span class="token operator">&amp;&amp;</span> <span class="token operator">&lt;</span>pre style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;red&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">{</span>error<span class="token punctuation">.</span>response<span class="token punctuation">.</span>data<span class="token punctuation">.</span>message<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>pre<span class="token operator">&gt;</span><span class="token punctuation">}</span></span>
<span class="line">      <span class="token operator">&lt;</span>ReactQueryDevtools initialIsOpen<span class="token operator">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line">  <span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_27-2-api-js" tabindex="-1"><a class="header-anchor" href="#_27-2-api-js"><span>27.2 api.js</span></a></h3><p>api.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> cors <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;cors&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> logger <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;morgan&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>express<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">cors</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">allowedHeaders</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;Content-Type&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">allowMethods</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;GET&quot;</span><span class="token punctuation">,</span> <span class="token string">&#39;POST&#39;</span><span class="token punctuation">,</span> <span class="token string">&quot;PUT&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;DELETE&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;OPTIONS&quot;</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">logger</span><span class="token punctuation">(</span><span class="token string">&#39;dev&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span><span class="token keyword">const</span> users <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token function">String</span><span class="token punctuation">(</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">name</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> posts <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">user<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token function">String</span><span class="token punctuation">(</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">title</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> <span class="token literal-property property">userId</span><span class="token operator">:</span> <span class="token function">String</span><span class="token punctuation">(</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">setTimeout</span><span class="token punctuation">(</span>next<span class="token punctuation">,</span> <span class="token number">1000</span> <span class="token operator">*</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/users&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span> <span class="token keyword">const</span> pageNumber <span class="token operator">=</span> <span class="token function">Number</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>query<span class="token punctuation">.</span>pageNumber<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span> <span class="token keyword">const</span> totalPage <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>users<span class="token punctuation">.</span>length <span class="token operator">/</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span> <span class="token keyword">const</span> offset <span class="token operator">=</span> <span class="token punctuation">(</span>pageNumber <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">10</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">+</span>   data<span class="token operator">:</span> users<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>offset<span class="token punctuation">,</span> offset <span class="token operator">+</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token operator">+</span>   pageNumber<span class="token punctuation">,</span></span>
<span class="line"><span class="token operator">+</span>   totalPage</span>
<span class="line"><span class="token operator">+</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/user&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> userId <span class="token operator">=</span> req<span class="token punctuation">.</span>query<span class="token punctuation">.</span>userId<span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">const</span> user <span class="token operator">=</span> users<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token parameter">user</span> <span class="token operator">=&gt;</span> user<span class="token punctuation">.</span>id <span class="token operator">===</span> userId<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>user<span class="token punctuation">)</span></span>
<span class="line">    res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">else</span></span>
<span class="line">    res<span class="token punctuation">.</span><span class="token function">sendStatus</span><span class="token punctuation">(</span><span class="token number">404</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&#39;/users&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> user <span class="token operator">=</span> req<span class="token punctuation">.</span>body<span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>user<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    user<span class="token punctuation">.</span>id <span class="token operator">=</span> <span class="token punctuation">(</span>users<span class="token punctuation">.</span>length <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span></span>
<span class="line">    user<span class="token punctuation">.</span>createdAt <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toLocaleDateString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    users<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">    res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">400</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;用户名不能为空!&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/posts&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span>posts<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">8080</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;started on port 8080&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_28-无限分页" tabindex="-1"><a class="header-anchor" href="#_28-无限分页"><span>28.无限分页</span></a></h2><ul><li>[useInfiniteQuery](https://react-query.tanstack.com/reference/useInfiniteQuery</li></ul><h3 id="_28-1-src-app-js" tabindex="-1"><a class="header-anchor" href="#_28-1-src-app-js"><span>28.1 src\\App.js</span></a></h3><p>src\\App.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React from &#39;react&#39;;</span>
<span class="line">+import { useInfiniteQuery } from &#39;react-query&#39;;</span>
<span class="line">import { ReactQueryDevtools } from &#39;react-query/devtools&#39;</span>
<span class="line">import request from &#39;./request&#39;;</span>
<span class="line">+function fetchUsers({ pageParam = 1 }) {</span>
<span class="line">+  return request.get(&#39;/users&#39;, {</span>
<span class="line">+    params: {</span>
<span class="line">+      pageNumber: pageParam</span>
<span class="line">+    }</span>
<span class="line">+  });</span>
<span class="line">+}</span>
<span class="line">function Users() {</span>
<span class="line">+ const { data, hasNextPage, fetchNextPage } = useInfiniteQuery([&#39;users&#39;], fetchUsers, {</span>
<span class="line">+   getNextPageParam: (lastPageData) =&gt; {</span>
<span class="line">+     console.log(lastPageData);</span>
<span class="line">+     return lastPageData.pageNumber &lt; lastPageData.totalPage ? lastPageData.pageNumber + 1 : false;</span>
<span class="line">+   }</span>
<span class="line">+ });</span>
<span class="line">  return (</span>
<span class="line">    &lt;&gt;</span>
<span class="line">      &lt;h3&gt;用户列表&lt;/h3&gt;</span>
<span class="line">      &lt;ul&gt;</span>
<span class="line">+       {</span>
<span class="line">+         data?.pages?.map((page, index) =&gt; {</span>
<span class="line">+           return (</span>
<span class="line">+             &lt;React.Fragment key={index}&gt;</span>
<span class="line">+               {</span>
<span class="line">+                 page.data?.map(user =&gt; &lt;li key={user.id}&gt;{user.id}:{user.name}&lt;/li&gt;)</span>
<span class="line">+               }</span>
<span class="line">+             &lt;/React.Fragment&gt;</span>
<span class="line">+           )</span>
<span class="line">+         })</span>
<span class="line">+       }</span>
<span class="line">      &lt;/ul&gt;</span>
<span class="line">+     &lt;button disabled={!hasNextPage} onClick={() =&gt; fetchNextPage()}&gt;加载更多&lt;/button&gt;</span>
<span class="line">    &lt;/&gt;</span>
<span class="line">  )</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">function App() {</span>
<span class="line">  return (</span>
<span class="line">    &lt;&gt;</span>
<span class="line">      &lt;Users /&gt;</span>
<span class="line">      &lt;ReactQueryDevtools initialIsOpen={false} /&gt;</span>
<span class="line">    &lt;/&gt;</span>
<span class="line">  )</span>
<span class="line">}</span>
<span class="line">export default App;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,169)])])}const o=n(t,[["render",l]]),u=JSON.parse('{"path":"/strong/151.react-query.html","title":"","lang":"en-US","frontmatter":{},"git":{"updatedTime":1681290319000,"contributors":[{"name":"yutao","username":"yutao","email":"642231346@qq.com","commits":1,"url":"https://github.com/yutao"}],"changelog":[{"hash":"f5ab8c9d34991ec274f7f652439afe5b2afb6147","time":1681290319000,"email":"642231346@qq.com","author":"yutao","message":"modify"}]},"filePathRelative":"strong/151.react-query.md"}');export{o as comp,u as data};
