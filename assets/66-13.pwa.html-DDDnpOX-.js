import{_ as s,c as e,a,o as i}from"./app-CD1YpnS1.js";const l={};function p(c,n){return i(),e("div",null,[...n[0]||(n[0]=[a(`<h2 id="什么是pwa" tabindex="-1"><a class="header-anchor" href="#什么是pwa"><span>什么是PWA</span></a></h2><p>webapp用户体验差（不能离线访问），用户粘性低（无法保存入口），pwa就是为了解决这一系列问题（\bProgressive Web Apps）,让webapp具有快速，可靠，安全等特点</p><h3 id="pwa一系列用到的技术" tabindex="-1"><a class="header-anchor" href="#pwa一系列用到的技术"><span>PWA一系列用到的技术</span></a></h3><ul><li>Web App Manifest</li><li>Service Worker</li><li>Push Api &amp; Notification Api</li><li>App Shell &amp; App Skeleton</li><li>...</li></ul><h2 id="web-app-manifest" tabindex="-1"><a class="header-anchor" href="#web-app-manifest"><span>Web App Manifest</span></a></h2><p>将网站添加到桌面、更类似native的体验</p><h3 id="web-app-manifest设置" tabindex="-1"><a class="header-anchor" href="#web-app-manifest设置"><span>Web App Manifest设置</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;link rel=&quot;manifest&quot; href=&quot;/manifest.json&quot;&gt;</span>
<span class="line">{</span>
<span class="line">    &quot;name&quot;:&quot;珠峰课堂&quot;, // 应用名称  </span>
<span class="line">    &quot;short_name&quot;:&quot;课堂&quot;, // 桌面应用的名称  ✓</span>
<span class="line">    &quot;display&quot;:&quot;standalone&quot;, // fullScreen (standalone) minimal-ui browser ✓</span>
<span class="line">    &quot;start_url&quot;:&quot;&quot;, // 打开时的网址  ✓</span>
<span class="line">    &quot;icons&quot;:[], // 设置桌面图片 icon图标 修改图标需要重新添加到桌面icons:[{src,sizes,type}]</span>
<span class="line">     &quot;background_color&quot;:&quot;</span>
<span class="line">     &quot;theme_color&quot;:&quot;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ios-meta-link-私有属性设置" tabindex="-1"><a class="header-anchor" href="#ios-meta-link-私有属性设置"><span>ios meta/link 私有属性设置</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">图标icon</span>
<span class="line">&lt;link rel=&quot;apple-touch-icon&quot; href=&quot;apple-touch-icon-iphone.png&quot;/&gt;</span>
<span class="line">添加到主屏后的标题 和 short_name一致</span>
<span class="line">&lt;meta name=&quot;apple-mobile-web-app-title&quot; content=&quot;标题&quot;&gt; </span>
<span class="line">隐藏safari地址栏 standalone模式下默认隐藏</span>
<span class="line">&lt;meta name=&quot;apple-mobile-web-app-capable&quot; content=&quot;yes&quot; /&gt; </span>
<span class="line">设置状态栏颜色</span>
<span class="line">&lt;meta name=&quot;apple-mobile-web-app-status-bar-style&quot; content=&quot;black-translucent&quot; /&gt; </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>横幅安装：用户在浏览器中访问至少两次，两次访问间隔至少时间为五分钟（safari不支持横幅）</p><h2 id="service-worker" tabindex="-1"><a class="header-anchor" href="#service-worker"><span>Service Worker</span></a></h2><p>为了提升用户体验</p><p>Service Worker特点：</p><ul><li>不能访问／操作dom</li><li>会自动休眠，不会随浏览器关闭所失效(必须手动卸载)</li><li>离线缓存内容开发者可控</li><li>必须在https或者localhost下使用</li><li>所有的api都基于promise</li></ul><p><img src="https://www.fullstackjavascript.cn/worker.png" alt="image"></p><ul><li>安装( installing )：这个状态发生在 Service Worker 注册之后，表示开始安装，触发 install 事件回调指定一些静态资源进行离线缓存。</li><li>安装后( installed )：Service Worker 已经完成了安装，并且等待其他的 Service Worker 线程被关闭。</li><li>激活( activating )：在这个状态下没有被其他的 Service Worker 控制的客户端，允许当前的 worker 完成安装，并且清除了其他的 worker 以及关联缓存的旧缓存资源，等待新的 Service Worker 线程被激活。</li><li>激活后( activated )：在这个状态会处理 activate 事件回调 (提供了更新缓存策略的机会)。并可以处理功能性的事件 fetch (请求)、sync (后台同步)、push (推送)。</li><li>废弃状态 ( redundant )：这个状态表示一个 Service Worker 的生命周期结束。</li></ul><h3 id="serviceworker中的方法" tabindex="-1"><a class="header-anchor" href="#serviceworker中的方法"><span>serviceWorker中的方法</span></a></h3><ul><li>self.skipWaiting():表示强制当前处在 waiting 状态的 Service Worker 进入 activate 状态</li><li>event.waitUntil()：传入一个 Promise 为参数，等到该 Promise 为 resolve 状态为止。</li><li>self.clients.claim()：在 activate 事件回调中执行该方法表示取得页面的控制权, 这样之后打开页面都会使用版本更新的缓存。旧的 Service Worker 脚本不再控制着页面，之后会被停止。</li></ul><p>实现浏览器离线缓存的功能</p><ul><li><p>注册缓存</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">window.addEventListener(&#39;load&#39;,function(){</span>
<span class="line">  // 页面加载完成后 注册serviceWorker</span>
<span class="line">  if(&#39;serviceWorker&#39; in navigator){</span>
<span class="line">      navigator.serviceWorker.register(&#39;./sw.js&#39;).then(registeration=&gt;{</span>
<span class="line">          console.log(registeration.scope);</span>
<span class="line">      });</span>
<span class="line">      navigator.serviceWorker.addEventListener(&#39;controllerchange&#39;,()=&gt;{</span>
<span class="line">          console.log(&#39;change&#39;)</span>
<span class="line">      })</span>
<span class="line">  }</span>
<span class="line">  if(!navigator.onLine){</span>
<span class="line">      window.addEventListener(&#39;online&#39;,()=&gt;{</span>
<span class="line">          console.log(&#39;更新&#39;);</span>
<span class="line">      })</span>
<span class="line">  }</span>
<span class="line">});</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>离线缓存 应用cache缓存请求</p></li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">// self 当前线程中的this</span>
<span class="line">// 拦截用户发送的所有请求</span>
<span class="line">let CACHE_NAME = \`cache_version_\` + 81;</span>
<span class="line">let CACHAE_LIST = [</span>
<span class="line">    &#39;/&#39;,</span>
<span class="line">    &#39;/index.css&#39;,</span>
<span class="line">    &#39;/index.html&#39;,</span>
<span class="line">    &#39;main.js&#39;,</span>
<span class="line">    &#39;/getImage&#39;</span>
<span class="line">];</span>
<span class="line">// 独立的线程 可以使用fetch 但是不能使用ajax</span>
<span class="line">function fetchAndSave(req){</span>
<span class="line">    return fetch(req).then(res=&gt;{ // res 是流 </span>
<span class="line">        // 做缓存操作</span>
<span class="line">        let r = res.clone();</span>
<span class="line">        caches.open(CACHE_NAME).then(cache=&gt;cache.put(req,r));</span>
<span class="line">        return res;</span>
<span class="line">    })</span>
<span class="line">}</span>
<span class="line">self.addEventListener(&#39;fetch&#39;, e =&gt; {</span>
<span class="line">    // 用相应来替换 如果获取不到才用缓存</span>
<span class="line">    let url = new URL(e.request.url);</span>
<span class="line">    if(url.origin !== self.origin){</span>
<span class="line">        return;</span>
<span class="line">    }</span>
<span class="line">    if(e.request.url.includes(&#39;/getImage&#39;)){ // 调用了接口</span>
<span class="line">        // 如果遇到了接口  更新缓存</span>
<span class="line">        e.respondWith(</span>
<span class="line">            fetchAndSave(e.request).catch(err=&gt;{</span>
<span class="line">                //  如果没网 在缓存中 匹配结果 返回请求</span>
<span class="line">                return caches.match(e.request);</span>
<span class="line">            })</span>
<span class="line">        )</span>
<span class="line">        return;</span>
<span class="line">    }</span>
<span class="line">    e.respondWith(</span>
<span class="line">        fetch(e.request).catch(err=&gt;{</span>
<span class="line">            //  如果没网 在缓存中 匹配结果 返回请求</span>
<span class="line">            return caches.match(e.request);</span>
<span class="line">        })</span>
<span class="line">    )</span>
<span class="line">}); // 用缓存替换</span>
<span class="line"></span>
<span class="line">// serviceWorker安装的阶段</span>
<span class="line">function preCache() {</span>
<span class="line">    return caches.open(CACHE_NAME).then(cache =&gt; {</span>
<span class="line">        return cache.addAll(CACHAE_LIST);</span>
<span class="line">    })</span>
<span class="line">}</span>
<span class="line">self.addEventListener(&#39;install&#39;, (e) =&gt; {</span>
<span class="line">    // 安装的过程中需要缓存</span>
<span class="line">    e.waitUntil(</span>
<span class="line">        preCache().then(skipWaiting) </span>
<span class="line">    )</span>
<span class="line">});</span>
<span class="line">function clearCache() {</span>
<span class="line">    return caches.keys().then(keys =&gt; {</span>
<span class="line">        return Promise.all(keys.map(key =&gt; {</span>
<span class="line">            if (key !== CACHE_NAME) {</span>
<span class="line">                return caches.delete(key);</span>
<span class="line">            }</span>
<span class="line">        }))</span>
<span class="line">    })</span>
<span class="line">}</span>
<span class="line">self.addEventListener(&#39;activate&#39;, (e) =&gt; {</span>
<span class="line">    e.waitUntil(</span>
<span class="line">        Promise.all([</span>
<span class="line">            clearCache(),</span>
<span class="line">            self.clients.claim() // 立即使serviceWorker生效</span>
<span class="line">        ])</span>
<span class="line">    )</span>
<span class="line">})</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="在vue中使用pwa" tabindex="-1"><a class="header-anchor" href="#在vue中使用pwa"><span>在vue中使用pwa</span></a></h2><p><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa" target="_blank" rel="noopener noreferrer">https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa</a></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">vue create pwa-project</span>
<span class="line">npm run build // 才具备pwa效果</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>vue-cli3.0配置pwa</p><p>在public目录下可以更改manifest配置文件</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">module.exports = {</span>
<span class="line">  pwa: {</span>
<span class="line">    name: &#39;My App&#39;,</span>
<span class="line">     themeColor: &#39;</span>
<span class="line">     msTileColor: &#39;</span>
<span class="line">    appleMobileWebAppCapable: &#39;yes&#39;,</span>
<span class="line">    appleMobileWebAppStatusBarStyle: &#39;black&#39;,</span>
<span class="line"></span>
<span class="line">    workboxPluginMode: &#39;InjectManifest&#39;,</span>
<span class="line">    workboxOptions: {</span>
<span class="line">      // swSrc is required in InjectManifest mode.</span>
<span class="line">       swSrc: &#39;dev/sw.js&#39;,</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要更改registerServiceWorker文件 更改为sw.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">// 设置缓存前缀</span>
<span class="line">workbox.core.setCacheNameDetails({prefix: &quot;pwa-project&quot;});</span>
<span class="line">// 设置预缓存列表</span>
<span class="line">self.__precacheManifest = [].concat(self.__precacheManifest || []);</span>
<span class="line">workbox.precaching.suppressWarnings();</span>
<span class="line">// 增加缓存列表策略 </span>
<span class="line">workbox.precaching.precacheAndRoute(self.__precacheManifest, {});</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>基于workbox 缓存工具包 <a href="https://developers.google.com/web/tools/workbox" target="_blank" rel="noopener noreferrer">https://developers.google.com/web/tools/workbox</a></p><ul><li>内置manifest.json</li><li>内置serviceWorker</li><li>内置了缓存策略 <ul><li>cachefirst 缓存优先</li><li>cacheonly 仅缓存</li><li>networkfirst 网络优先</li><li>networkonly 仅网络</li><li>StaleWhileRevalidate 从缓存取，用网络数据更新缓存</li></ul></li></ul><p>增加缓存策略</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">workbox.routing.registerRoute(</span>
<span class="line">    function(obj){ </span>
<span class="line">        // 包涵api的就缓存下来</span>
<span class="line">        return obj.url.href.includes(&#39;/user&#39;)</span>
<span class="line">    },</span>
<span class="line">    workbox.strategies.staleWhileRevalidate()</span>
<span class="line">);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="app-skeleton" tabindex="-1"><a class="header-anchor" href="#app-skeleton"><span>app-skeleton</span></a></h2><p>配置webpack插件 vue-skeleton-webpack-plugin</p><p>单页骨架屏幕</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import Vue from &#39;vue&#39;;</span>
<span class="line">import Skeleton from &#39;./Skeleton.vue&#39;;</span>
<span class="line">export default new Vue({</span>
<span class="line">    components: {</span>
<span class="line">        Skeleton:Skeleton</span>
<span class="line">    },</span>
<span class="line">    template: \`</span>
<span class="line">        &lt;Skeleton&gt;&lt;/Skeleton&gt;    </span>
<span class="line">    \`</span>
<span class="line">});</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">plugins: [</span>
<span class="line">    new SkeletonWebpackPlugin({</span>
<span class="line">        webpackConfig: {</span>
<span class="line">            entry: {</span>
<span class="line">                app: resolve(&#39;./src/entry-skeleton.js&#39;)</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">    })</span>
<span class="line">]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>带路由的骨架屏，编写skeleton.js文件</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import Vue from &#39;vue&#39;;</span>
<span class="line">import Skeleton1 from &#39;./Skeleton1&#39;;</span>
<span class="line">import Skeleton2 from &#39;./Skeleton2&#39;;</span>
<span class="line"></span>
<span class="line">export default new Vue({</span>
<span class="line">    components: {</span>
<span class="line">        Skeleton1,</span>
<span class="line">        Skeleton2</span>
<span class="line">    },</span>
<span class="line">    template: \`</span>
<span class="line">        &lt;div&gt;</span>
<span class="line">            &lt;skeleton1 id=&quot;skeleton1&quot; style=&quot;display:none&quot;/&gt;</span>
<span class="line">            &lt;skeleton2 id=&quot;skeleton2&quot; style=&quot;display:none&quot;/&gt;</span>
<span class="line">        &lt;/div&gt;</span>
<span class="line">    \`</span>
<span class="line">});</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">new SkeletonWebpackPlugin({</span>
<span class="line">    webpackConfig: {</span>
<span class="line">        entry: {</span>
<span class="line">            app: path.join(__dirname, &#39;./src/skeleton.js&#39;),</span>
<span class="line">        },</span>
<span class="line">    },</span>
<span class="line">    router: {</span>
<span class="line">        mode: &#39;history&#39;,</span>
<span class="line">        routes: [</span>
<span class="line">            {</span>
<span class="line">                path: &#39;/&#39;,</span>
<span class="line">                skeletonId: &#39;skeleton1&#39;</span>
<span class="line">            },</span>
<span class="line">            {</span>
<span class="line">                path: &#39;/about&#39;,</span>
<span class="line">                skeletonId: &#39;skeleton2&#39;</span>
<span class="line">            },</span>
<span class="line">        ]</span>
<span class="line">    },</span>
<span class="line">    minimize: true,</span>
<span class="line">    quiet: true,</span>
<span class="line">})</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实现骨架屏插件</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">class MyPlugin {</span>
<span class="line">    apply(compiler) {</span>
<span class="line">        compiler.plugin(&#39;compilation&#39;, (compilation) =&gt; {</span>
<span class="line">            compilation.plugin(</span>
<span class="line">                &#39;html-webpack-plugin-before-html-processing&#39;,</span>
<span class="line">                (data) =&gt; {</span>
<span class="line">                    data.html = data.html.replace(\`&lt;div id=&quot;app&quot;&gt;&lt;/div&gt;\`, \`</span>
<span class="line">                        &lt;div id=&quot;app&quot;&gt;</span>
<span class="line">                            &lt;div id=&quot;home&quot; style=&quot;display:none&quot;&gt;首页 骨架屏&lt;/div&gt;</span>
<span class="line">                            &lt;div id=&quot;about&quot; style=&quot;display:none&quot;&gt;about页面骨架屏&lt;/div&gt;</span>
<span class="line">                        &lt;/div&gt;</span>
<span class="line">                        &lt;script&gt;</span>
<span class="line">                             if(window.hash == &#39;</span>
<span class="line">                                document.getElementById(&#39;about&#39;).style.display=&quot;block&quot;</span>
<span class="line">                            }else{</span>
<span class="line">                                document.getElementById(&#39;home&#39;).style.display=&quot;block&quot;</span>
<span class="line">                            }</span>
<span class="line">                        &lt;/script&gt;</span>
<span class="line">                    \`);</span>
<span class="line">                    return data;</span>
<span class="line">                }</span>
<span class="line">            )</span>
<span class="line">        });</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vue的预渲染插件" tabindex="-1"><a class="header-anchor" href="#vue的预渲染插件"><span>vue的预渲染插件</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">npm install prerender-spa-plugin </span>
<span class="line">const PrerenderSPAPlugin = require(&#39;prerender-spa-plugin&#39;)</span>
<span class="line"></span>
<span class="line">plugins: [</span>
<span class="line">    new PrerenderSPAPlugin({</span>
<span class="line">        staticDir: path.join(__dirname, &#39;dist&#39;),</span>
<span class="line">        routes: [ &#39;/&#39;, &#39;/about&#39;,],</span>
<span class="line">    })</span>
<span class="line">]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="notification-push-api" tabindex="-1"><a class="header-anchor" href="#notification-push-api"><span>Notification &amp; Push Api</span></a></h2><p>...</p>`,47)])])}const r=s(l,[["render",p]]),t=JSON.parse('{"path":"/strong/66-13.pwa.html","title":"","lang":"en-US","frontmatter":{},"git":{"updatedTime":1681290319000,"contributors":[{"name":"yutao","username":"yutao","email":"642231346@qq.com","commits":1,"url":"https://github.com/yutao"}],"changelog":[{"hash":"f5ab8c9d34991ec274f7f652439afe5b2afb6147","time":1681290319000,"email":"642231346@qq.com","author":"yutao","message":"modify"}]},"filePathRelative":"strong/66-13.pwa.md"}');export{r as comp,t as data};
