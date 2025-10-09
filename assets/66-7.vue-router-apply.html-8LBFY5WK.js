import{_ as s,c as e,a,o as i}from"./app-CD1YpnS1.js";const l={};function t(d,n){return i(),e("div",null,[...n[0]||(n[0]=[a(`<h2 id="vue路由使用详解" tabindex="-1"><a class="header-anchor" href="#vue路由使用详解"><span>vue路由使用详解</span></a></h2><h2 id="基础的路由配置" tabindex="-1"><a class="header-anchor" href="#基础的路由配置"><span>基础的路由配置</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import Vue from &#39;vue&#39;</span>
<span class="line">import Router from &#39;vue-router&#39;</span>
<span class="line">import routes from &#39;./routes&#39;;</span>
<span class="line">Vue.use(Router)</span>
<span class="line"></span>
<span class="line">export default new Router({</span>
<span class="line">   mode: &#39;history&#39;, // 不使用</span>
<span class="line">  base: process.env.BASE_URL,</span>
<span class="line">  routes</span>
<span class="line">});</span>
<span class="line"></span>
<span class="line">// routes.js文件是专门处理路由的 配置影射关系</span>
<span class="line">export default  [</span>
<span class="line">    {</span>
<span class="line">        path:&#39;/&#39;,</span>
<span class="line">        redirect: {name:&#39;home&#39;} // 默认访问根路径时 可以重定向到home路由</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">        name:&#39;home&#39;,</span>
<span class="line">        path:&#39;/home&#39;, //  实现了路由的懒加载</span>
<span class="line">        component:()=&gt;import(&#39;../views/Home.vue&#39;)</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">        path:&#39;/profile&#39;,</span>
<span class="line">        name:&#39;profile&#39;,</span>
<span class="line">        component:()=&gt;import(&#39;../views/Profile.vue&#39;)</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">        path:&#39;/user&#39;,</span>
<span class="line">        name:&#39;user&#39;,</span>
<span class="line">        component:()=&gt;import(&#39;../views/User.vue&#39;)</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">        path:&#39;/login&#39;,</span>
<span class="line">        name:&#39;login&#39;,</span>
<span class="line">        component:()=&gt;import(&#39;../views/Login.vue&#39;)</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">        path:&#39;*&#39;,</span>
<span class="line">        component:()=&gt;import(&#39;../views/404.vue&#39;)</span>
<span class="line">    }</span>
<span class="line">]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="路由的导航应用" tabindex="-1"><a class="header-anchor" href="#路由的导航应用"><span>路由的导航应用</span></a></h3><p>引入bootstrap,进行安装</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">yarn add bootstrap@3</span>
<span class="line">import &#39;bootstrap/dist/css/bootstrap.css&#39;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;template&gt;</span>
<span class="line">&lt;div&gt;</span>
<span class="line">    &lt;nav class=&quot;navbar navbar-default&quot;&gt;</span>
<span class="line">        &lt;div class=&quot;container-fluid&quot;&gt;</span>
<span class="line">            &lt;div class=&quot;navbar-header&quot;&gt;</span>
<span class="line">                 &lt;a class=&quot;navbar-brand&quot; href=&quot;</span>
<span class="line">                管理系统</span>
<span class="line">                &lt;/a&gt;</span>
<span class="line">            &lt;/div&gt;</span>
<span class="line">            &lt;ul class=&quot;navbar-nav nav&quot;&gt;</span>
<span class="line">                    &lt;li&gt;</span>
<span class="line">                        &lt;router-link :to=&quot;{name:&#39;home&#39;}&quot;&gt;首页&lt;/router-link&gt;</span>
<span class="line">                    &lt;/li&gt;</span>
<span class="line">                    &lt;li&gt;</span>
<span class="line">                        &lt;router-link :to=&quot;{name:&#39;profile&#39;}&quot;&gt;个人中心&lt;/router-link&gt;</span>
<span class="line">                    &lt;/li&gt;</span>
<span class="line">                    &lt;li&gt;</span>
<span class="line">                        &lt;router-link :to=&quot;{path:&#39;/user&#39;}&quot;&gt;用户管理&lt;/router-link&gt;</span>
<span class="line">                    &lt;/li&gt;</span>
<span class="line">                    &lt;li&gt;</span>
<span class="line">                        &lt;router-link :to=&quot;{name:&#39;login&#39;}&quot;&gt;登录&lt;/router-link&gt;</span>
<span class="line">                    &lt;/li&gt;</span>
<span class="line">            &lt;/ul&gt;</span>
<span class="line">        &lt;/div&gt;</span>
<span class="line">    &lt;/nav&gt;</span>
<span class="line">&lt;/div&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置命名视图-一个路径匹配多个路由" tabindex="-1"><a class="header-anchor" href="#配置命名视图-一个路径匹配多个路由"><span>配置命名视图 (一个路径匹配多个路由)</span></a></h3><p>在项目中一般情况是不使用命名视图的</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">{</span>
<span class="line">    name:&#39;home&#39;,</span>
<span class="line">    path:&#39;/home&#39;, //  实现了路由的懒加载</span>
<span class="line">    components:{ // 当前路径 匹配对个router-view</span>
<span class="line">        default:()=&gt;import(&#39;../views/Home.vue&#39;),</span>
<span class="line">        name:()=&gt;import(&#39;../components/Name.vue&#39;),</span>
<span class="line">        version:()=&gt;import(&#39;../components/Version.vue&#39;)</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="二级路由配置" tabindex="-1"><a class="header-anchor" href="#二级路由配置"><span>二级路由配置</span></a></h3><p>父路径跳转必须使用路径跳转使用nam, 不显示默认孩子</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">{</span>
<span class="line">        path:&#39;/user&#39;,</span>
<span class="line">        name:&#39;user&#39;,</span>
<span class="line">        component:()=&gt;import(&#39;../views/User.vue&#39;),</span>
<span class="line">        children:[ //  子路由配置</span>
<span class="line">            {</span>
<span class="line">                path:&#39;&#39;, // 如果渲染默认路由 必须使用path跳转</span>
<span class="line">                redirect:{name:&#39;userAdd&#39;}</span>
<span class="line">            },</span>
<span class="line">            {</span>
<span class="line">                name:&#39;userAdd&#39;,</span>
<span class="line">                path:&#39;userAdd&#39;,</span>
<span class="line">                component:()=&gt;import(&#39;../views/UserAdd&#39;)</span>
<span class="line">            },</span>
<span class="line">            {</span>
<span class="line">                name:&#39;userList&#39;,</span>
<span class="line">                path:&#39;userList&#39;,</span>
<span class="line">                component:()=&gt;import(&#39;../views/UserList&#39;)</span>
<span class="line">            }</span>
<span class="line">        ]</span>
<span class="line">},</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="二级路由跳转" tabindex="-1"><a class="header-anchor" href="#二级路由跳转"><span>二级路由跳转</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">// user.vue</span>
<span class="line">&lt;template&gt;</span>
<span class="line">&lt;div class=&quot;row&quot;&gt;</span>
<span class="line">    &lt;div class=&quot;col-md-3&quot;&gt;</span>
<span class="line">        &lt;nav class=&quot;nav nav-stacked&quot;&gt;</span>
<span class="line">            &lt;li&gt;</span>
<span class="line">                &lt;router-link :to=&quot;{name:&#39;userAdd&#39;}&quot;&gt;用户添加&lt;/router-link&gt;</span>
<span class="line">            &lt;/li&gt;</span>
<span class="line">            &lt;li&gt;</span>
<span class="line">                &lt;router-link :to=&quot;{name:&#39;userList&#39;}&quot;&gt;用户列表&lt;/router-link&gt;</span>
<span class="line">            &lt;/li&gt;</span>
<span class="line">        &lt;/nav&gt;</span>
<span class="line">    &lt;/div&gt;</span>
<span class="line">    &lt;div class=&quot;col-md-9&quot;&gt;</span>
<span class="line">        &lt;router-view&gt;&lt;/router-view&gt;</span>
<span class="line">    &lt;/div&gt;</span>
<span class="line">&lt;/div&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="编程式导航" tabindex="-1"><a class="header-anchor" href="#编程式导航"><span>编程式导航</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;template&gt;</span>
<span class="line">    &lt;div&gt;</span>
<span class="line">        &lt;button class=&quot;btn btn-primary&quot; @click=&quot;login&quot;&gt;登录&lt;/button&gt;</span>
<span class="line">    &lt;/div&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span>
<span class="line">&lt;script&gt;</span>
<span class="line">export default {</span>
<span class="line">    methods: {</span>
<span class="line">        login(){</span>
<span class="line">            this.$router.push({name:&#39;login&#39;})</span>
<span class="line">        }</span>
<span class="line">    },</span>
<span class="line">}</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="组件内的钩子" tabindex="-1"><a class="header-anchor" href="#组件内的钩子"><span>组件内的钩子</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line"> beforeRouteLeave (to, from, next) {</span>
<span class="line">        if(this.username){</span>
<span class="line">            let confirm = window.confirm(&#39;确认离开吗&#39;);</span>
<span class="line">            if(confirm) return next();</span>
<span class="line">        }else{</span>
<span class="line">            next();</span>
<span class="line">        }</span>
<span class="line"> }</span>
<span class="line">beforeRouteEnter(to,from,next){</span>
<span class="line">       // 在进入路由之前可以对数据校验 ajax获取</span>
<span class="line">       let user = JSON.parse(localStorage.getItem(&#39;user&#39;)) || [];</span>
<span class="line">       if(user.length){</span>
<span class="line">           next();</span>
<span class="line">       }else{</span>
<span class="line">           next({name:&#39;userAdd&#39;})</span>
<span class="line">       }</span>
<span class="line">},</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="带参数跳转" tabindex="-1"><a class="header-anchor" href="#带参数跳转"><span>带参数跳转</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">{</span>
<span class="line">    name:&#39;userDetail&#39;,</span>
<span class="line">    path:&#39;userDetail&#39;,</span>
<span class="line">    component:()=&gt;import(&#39;../views/UserDetail&#39;)</span>
<span class="line">},</span>
<span class="line">{</span>
<span class="line">    name:&#39;detail&#39;,</span>
<span class="line">    path:&#39;userDetail/:name&#39;, // 路径参数 必须通过name跳转</span>
<span class="line">    component:()=&gt;import(&#39;../views/UserDetail&#39;)</span>
<span class="line">}</span>
<span class="line">// 不同方式的传递参数</span>
<span class="line">&lt;td&gt;&lt;router-link :to=&quot;{name:&#39;userDetail&#39;,query:{id:u.id}}&quot;&gt;{{u.id}}&lt;/router-link&gt;&lt;/td&gt;</span>
<span class="line">&lt;td&gt;&lt;router-link :to=&quot;{name:&#39;detail&#39;,params:{name:u.username}}&quot;&gt; {{u.username}}&lt;/router-link&gt;&lt;/td&gt;</span>
<span class="line"></span>
<span class="line">// 取值方式</span>
<span class="line"> 查询字符串 {{this.$route.query &amp;&amp; this.$route.query.id}} &lt;br&gt;</span>
<span class="line"> 查询参数 {{this.$route.params &amp;&amp; this.$route.params.name}} &lt;br&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="权限校验" tabindex="-1"><a class="header-anchor" href="#权限校验"><span>权限校验</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">router.beforeEach((to,from,next)=&gt;{</span>
<span class="line">  let needLogin = to.matched &amp;&amp; to.matched.some(({meta})=&gt;{</span>
<span class="line">   return meta &amp;&amp; meta.needLogin</span>
<span class="line">  });</span>
<span class="line">  let isLogin = localStorage.getItem(&#39;login&#39;)</span>
<span class="line">  if(needLogin){</span>
<span class="line">    if(isLogin){</span>
<span class="line">      next();</span>
<span class="line">    }else{</span>
<span class="line">      next({name:&#39;login&#39;});</span>
<span class="line">    }</span>
<span class="line">  }else{</span>
<span class="line">    // 如果不需要登录 并且是登录页面</span>
<span class="line">    if(!(to.name == &#39;login&#39; &amp;&amp; isLogin)){</span>
<span class="line">      next();</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">});</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="路由更新变化" tabindex="-1"><a class="header-anchor" href="#路由更新变化"><span>路由更新变化</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">// watch:{</span>
<span class="line">//    $route(){</span>
<span class="line">          alert(&#39;参数变化&#39;)</span>
<span class="line">      }</span>
<span class="line">// }</span>
<span class="line">beforeRouteUpdate(){ // 如果组件被复用 唯一的方式 就是监听路由的更新方法</span>
<span class="line">    console.log(&#39;路由更新了&#39;)</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="钩子执行属性" tabindex="-1"><a class="header-anchor" href="#钩子执行属性"><span>钩子执行属性</span></a></h3><ul><li>导航被触发。</li><li>在失活的组件里调用离开守卫。</li><li>调用全局的 beforeEach 守卫。</li><li>在重用的组件里调用 beforeRouteUpdate 守卫 (2.2+)。</li><li>在路由配置里调用 beforeEnter。</li><li>解析异步路由组件。</li><li>在被激活的组件里调用 beforeRouteEnter。</li><li>调用全局的 beforeResolve 守卫 (2.5+)。</li><li>导航被确认。</li><li>调用全局的 afterEach 钩子。</li><li>触发 DOM 更新。</li><li>用创建好的实例调用 beforeRouteEnter 守卫中传给 next 的回调函数。</li></ul><h3 id="导航激活样式" tabindex="-1"><a class="header-anchor" href="#导航激活样式"><span>导航激活样式</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">.router-link-active{</span>
<span class="line">  color:red!important</span>
<span class="line">}</span>
<span class="line">.nav-stacked .router-link-active{</span>
<span class="line">  color:blue !important</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="路由动画" tabindex="-1"><a class="header-anchor" href="#路由动画"><span>路由动画</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;div class=&quot;container&quot;&gt;</span>
<span class="line">      &lt;transition-group name=&quot;fade&quot; &gt;</span>
<span class="line">        &lt;router-view key=&quot;1&quot;&gt;&lt;/router-view&gt;</span>
<span class="line">        &lt;router-view key=&quot;2&quot; name=&quot;name&quot;&gt;&lt;/router-view&gt;</span>
<span class="line">        &lt;router-view key=&quot;3&quot; name=&quot;version&quot;&gt;&lt;/router-view&gt;</span>
<span class="line">      &lt;/transition-group&gt;</span>
<span class="line">&lt;/div&gt;</span>
<span class="line">.fade-enter{ opacity:0}</span>
<span class="line">.fade-enter-active{ transition:all 0.2s linear;}</span>
<span class="line">.fade-enter-to{opacity:1}</span>
<span class="line">.fade-leave{opacity:1}</span>
<span class="line">.fade-leave-active{transition:all .2s linear}</span>
<span class="line">.fade-leave-to{opacity:0}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://github.com/wakeupmypig/vue-router-apply" target="_blank" rel="noopener noreferrer">https://github.com/wakeupmypig/vue-router-apply</a></p>`,32)])])}const p=s(l,[["render",t]]),c=JSON.parse('{"path":"/strong/66-7.vue-router-apply.html","title":"","lang":"en-US","frontmatter":{},"git":{"updatedTime":1681290319000,"contributors":[{"name":"yutao","username":"yutao","email":"642231346@qq.com","commits":1,"url":"https://github.com/yutao"}],"changelog":[{"hash":"f5ab8c9d34991ec274f7f652439afe5b2afb6147","time":1681290319000,"email":"642231346@qq.com","author":"yutao","message":"modify"}]},"filePathRelative":"strong/66-7.vue-router-apply.md"}');export{p as comp,c as data};
