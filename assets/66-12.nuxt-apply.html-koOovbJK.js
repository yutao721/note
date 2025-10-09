import{_ as a,c as n,a as s,o as i}from"./app-CD1YpnS1.js";const l={};function t(r,e){return i(),n("div",null,[...e[0]||(e[0]=[s(`<h2 id="什么是nuxt" tabindex="-1"><a class="header-anchor" href="#什么是nuxt"><span>什么是nuxt</span></a></h2><p>Nuxt.js是使用 Webpack 和 Node.js 进行封装的基于Vue的SSR框架</p><h2 id="nuxt特点" tabindex="-1"><a class="header-anchor" href="#nuxt特点"><span>nuxt特点</span></a></h2><p>优点:<br> 更好的 SEO，由于搜索引擎爬虫抓取工具可以直接查看完全渲染的页面。首屏渲染速度快</p><p>缺点:<br> Node.js 中渲染完整的应用程序，显然会比仅仅提供静态文件的 server 更加大量占用 CPU 资源。需要考虑服务器负载，缓存策略</p><h2 id="项目生成" tabindex="-1"><a class="header-anchor" href="#项目生成"><span>项目生成</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">npx create-nuxt-app nuxt-project</span>
<span class="line">cd nuxt-project</span>
<span class="line">yarn dev</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="项目目录" tabindex="-1"><a class="header-anchor" href="#项目目录"><span>项目目录</span></a></h2><ul><li>assets 静态资源 会被webpack处理</li><li>static 不会被webpack处理</li><li>components 公共组件</li><li>layout布局组件</li><li>pages路由页面 可以生成对应的路由</li><li>middleware 运行过程中发生的事</li><li>store 存放vuex</li><li>plugins 存放javascript插件的</li><li>nuxt.config.js 存放nuxt配置文件</li><li>别名默认可以采用 ~ 或者 @符号</li></ul><h2 id="nuxt-config-js配置" tabindex="-1"><a class="header-anchor" href="#nuxt-config-js配置"><span>nuxt.config.js配置</span></a></h2><ul><li><p>env 可以配置环境变量通过cross-env</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">      env:{</span>
<span class="line">          baseUrl:process.env.BASE_URL</span>
<span class="line">      }</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>cache:false // 提升组件缓存策略</p></li><li><p>css 全局css样式</p></li><li><p>head 配置头</p></li><li><p>loading (需要等待$loading 挂载完成)</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">       loading: { color: &#39;</span>
<span class="line">      mounted(){</span>
<span class="line">          this.$nextTick(()=&gt;{</span>
<span class="line">              this.$nuxt.$loading.start()</span>
<span class="line">          });</span>
<span class="line">      }</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>modules 存放第三方模块 @nuxtjs/axios 第三方模块</p></li><li><p>plugins 配置插件</p></li><li><p>transition动画效果</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">      config.js</span>
<span class="line">      transition: {</span>
<span class="line">          name: &#39;layout&#39;,</span>
<span class="line">          mode: &#39;out-in&#39;</span>
<span class="line">      },</span>
<span class="line">      .layout-enter-active, .layout-leave-active {</span>
<span class="line">          transition: opacity .5s</span>
<span class="line">      }</span>
<span class="line">      .layout-enter, .layout-leave-active {</span>
<span class="line">          opacity: 0</span>
<span class="line">      }</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="nuxt-link" tabindex="-1"><a class="header-anchor" href="#nuxt-link"><span>nuxt-link</span></a></h2><p>使用history.pushState跳转页面,不会触发页面整体重新渲染</p><ul><li>路径参数<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line"> &lt;nuxt-link to=&quot;/user/4/5&quot;&gt;路径参数&lt;/nuxt-link&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li>查询字符串</li><li>validate方法 必须返回是否访问这个页面，返回false执行404逻辑<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">export default {</span>
<span class="line">  validate({params}){</span>
<span class="line">      return params.id != 4;</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>动画效果<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">.page-enter-active, .page-leave-active {</span>
<span class="line">  transition: opacity .5s;</span>
<span class="line">}</span>
<span class="line">.page-enter, .page-leave-active {</span>
<span class="line">  opacity: 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="中间件" tabindex="-1"><a class="header-anchor" href="#中间件"><span>中间件</span></a></h2><p>如果经过服务端则在服务端执行</p><ul><li>全局中间件</li><li>layout 在layout中增加middleware</li><li>组件中间件 在组件中增加middleware</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">export default function ({ store, redirect }) {</span>
<span class="line">  if (!store.state.user) {</span>
<span class="line">    return redirect(&#39;/login&#39;)</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line">router: {</span>
<span class="line">    middleware: &#39;auth&#39;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="layout配置" tabindex="-1"><a class="header-anchor" href="#layout配置"><span>layout配置</span></a></h2><ul><li>自定义error页面 增加error.vue(配置错误layout)</li><li>自定义layout布局</li></ul><p>增加错误页面，错误页需要配置layout</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">export default {</span>
<span class="line">    props:[&#39;error&#39;],</span>
<span class="line">    layout:&#39;page&#39;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数据获取" tabindex="-1"><a class="header-anchor" href="#数据获取"><span>数据获取</span></a></h2><ul><li>asyncData使用(仅在页面组件中使用)<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">async asyncData ({ params }) { // 无this</span>
<span class="line">  let { data } = await axios.get();</span>
<span class="line">  return { title: data }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="插件的使用" tabindex="-1"><a class="header-anchor" href="#插件的使用"><span>插件的使用</span></a></h2><p>扩展原型上的方法plugins</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">export default function({app},inject){</span>
<span class="line">    inject(&#39;my&#39;,()=&gt;{ // 在app上和this都注册这个方法</span>
<span class="line">        console.log(&#39;my&#39;);</span>
<span class="line">    })</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用vuex" tabindex="-1"><a class="header-anchor" href="#使用vuex"><span>使用vuex</span></a></h2><h2 id="运行流程" tabindex="-1"><a class="header-anchor" href="#运行流程"><span>运行流程</span></a></h2><p>nextServerinit 只在主模块中使用<br> nuxt.config.js 全局中间件<br> matching layout 不同布局的中间件<br> matching page &amp; children 页面中间件<br> validate 返回false显示错误页面<br> asyncData 服务端渲染的页面数据请求<br> fetch 同步vuex数据</p><p><img src="https://www.fullstackjavascript.cn/nuxt.jpg" alt=""></p><h2 id="登录实战" tabindex="-1"><a class="header-anchor" href="#登录实战"><span>登录实战</span></a></h2><p>element-ui + redis + mongo + nuxt</p><p><a href="https://github.com/zhufengzhufeng/nuxt-login.git" target="_blank" rel="noopener noreferrer">https://github.com/zhufengzhufeng/nuxt-login.git</a></p>`,34)])])}const p=a(l,[["render",t]]),c=JSON.parse('{"path":"/strong/66-12.nuxt-apply.html","title":"","lang":"en-US","frontmatter":{},"git":{"updatedTime":1681290319000,"contributors":[{"name":"yutao","username":"yutao","email":"642231346@qq.com","commits":1,"url":"https://github.com/yutao"}],"changelog":[{"hash":"f5ab8c9d34991ec274f7f652439afe5b2afb6147","time":1681290319000,"email":"642231346@qq.com","author":"yutao","message":"modify"}]},"filePathRelative":"strong/66-12.nuxt-apply.md"}');export{p as comp,c as data};
