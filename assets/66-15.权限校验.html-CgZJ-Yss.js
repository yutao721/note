import{_ as n,c as e,a,o as l}from"./app-CD1YpnS1.js";const i={};function t(d,s){return l(),e("div",null,[...s[0]||(s[0]=[a(`<h2 id="菜单数据列表" tabindex="-1"><a class="header-anchor" href="#菜单数据列表"><span>菜单数据列表</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">个人中心  Profile.vue</span>
<span class="line">商店     Shop.vue</span>
<span class="line">购物车   Cart.vue</span>
<span class="line">    └── 购物车列表    CartList.vue</span>
<span class="line">       ├── 商品      Product.vue</span>
<span class="line">       └── 彩票      Lottery.vue</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="admin权限-后台返回的数据" tabindex="-1"><a class="header-anchor" href="#admin权限-后台返回的数据"><span>admin权限,后台返回的数据</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">[</span>
<span class="line">    {pid:-1,path:&#39;/cart&#39;,name:&#39;购物车&#39;,id:1,auth:&#39;cart&#39;},</span>
<span class="line">    {pid:1,path:&#39;/cart/cart-list&#39;,name:&#39;购物车列表&#39;,id:4,auth:&#39;cart-list&#39;},</span>
<span class="line">    {pid:4,path:&#39;/cart/cart-list/lottery&#39;,auth:&#39;lottery&#39;,id:5,name:&#39;彩票&#39;},</span>
<span class="line">    {pid:4,path:&#39;/cart/cart-list/product&#39;,auth:&#39;product&#39;,id:6,name:&#39;商品&#39;},</span>
<span class="line">    {pid:-1,path:&#39;/shop&#39;,name:&#39;商店&#39;,id:2,auth:&#39;shop&#39;},</span>
<span class="line">    {pid:-1,path:&#39;/profile&#39;,name:&#39;个人中心&#39;,id:3,auth:&#39;store&#39;},</span>
<span class="line">];</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="服务端返回权限" tabindex="-1"><a class="header-anchor" href="#服务端返回权限"><span>服务端返回权限</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">let express = require(&#39;express&#39;);</span>
<span class="line">let app = express();</span>
<span class="line">app.all(&#39;*&#39;, function (req, res, next) {</span>
<span class="line">    res.header(&#39;Access-Control-Allow-Origin&#39;, &#39;*&#39;);</span>
<span class="line">    //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行</span>
<span class="line">    res.header(&#39;Access-Control-Allow-Headers&#39;, &#39;Content-Type&#39;);</span>
<span class="line">    res.header(&#39;Access-Control-Allow-Methods&#39;, &#39;*&#39;);</span>
<span class="line">    res.header(&#39;Content-Type&#39;, &#39;application/json;charset=utf-8&#39;);</span>
<span class="line">    next();</span>
<span class="line">});</span>
<span class="line">app.get(&#39;/roleAuth&#39;,(req,res)=&gt;{</span>
<span class="line">    res.json({</span>
<span class="line">        menuList:[</span>
<span class="line">            {pid:-1,path:&#39;/cart&#39;,name:&#39;购物车&#39;,id:1,auth:&#39;cart&#39;},</span>
<span class="line">            {pid:1,path:&#39;/cart/cart-list&#39;,name:&#39;购物车列表&#39;,id:4,auth:&#39;cart-list&#39;},</span>
<span class="line">            {pid:4,path:&#39;/cart/cart-list/lottery&#39;,auth:&#39;lottery&#39;,id:5,name:&#39;彩票&#39;},</span>
<span class="line">            {pid:4,path:&#39;/cart/cart-list/product&#39;,auth:&#39;product&#39;,id:6,name:&#39;商品&#39;},</span>
<span class="line">            {pid:-1,path:&#39;/shop&#39;,name:&#39;商店&#39;,id:2,auth:&#39;shop&#39;},</span>
<span class="line">            {pid:-1,path:&#39;/profile&#39;,name:&#39;个人中心&#39;,id:3,auth:&#39;profile&#39;},</span>
<span class="line">        ]</span>
<span class="line">    })</span>
<span class="line">})</span>
<span class="line">app.listen(3000);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="递归菜单" tabindex="-1"><a class="header-anchor" href="#递归菜单"><span>递归菜单</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">let getMenuList = (list) =&gt; {</span>
<span class="line">  let auths = [];</span>
<span class="line">  function getList(pid){</span>
<span class="line">    return list.filter(l=&gt;{</span>
<span class="line">      if(l.pid === pid){</span>
<span class="line">        auths.push(l.auth); // 提取用户权限</span>
<span class="line">        let children = getList(l.id);</span>
<span class="line">        l.children = children.length&gt;0?children:null;</span>
<span class="line">        return l;</span>
<span class="line">      }</span>
<span class="line">    });</span>
<span class="line">  }</span>
<span class="line">  let menuList = getList(-1); // 通过根循环列表</span>
<span class="line">  return {menuList,auths};</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">// 获取菜单列表</span>
<span class="line"></span>
<span class="line">export default new Vuex.Store({</span>
<span class="line">  state: {</span>
<span class="line">    menuList:[], // 菜单列表 </span>
<span class="line">    authList:[], // 权限列表</span>
<span class="line">    hasAuthMenu: false // 默认没有权限菜单，如果获取菜单后改为true</span>
<span class="line">  },</span>
<span class="line">  mutations: {</span>
<span class="line">    setMenuList(state,menuList){</span>
<span class="line">      state.menuList = menuList;</span>
<span class="line">    },</span>
<span class="line">    authList(state,auths){</span>
<span class="line">      state.authList = auths;</span>
<span class="line">    },</span>
<span class="line">    hasAuthMenu(state){</span>
<span class="line">      state.hasAuthMenu = true;</span>
<span class="line">    }</span>
<span class="line">  },</span>
<span class="line">  actions: {</span>
<span class="line">    async getMenuList({commit}){</span>
<span class="line">      let {data} = await axios.get(&#39;http://localhost:3000/roleAuth&#39;);</span>
<span class="line">      let {menuList,auths} = getMenuList(data.menuList);</span>
<span class="line">      commit(&#39;setMenuList&#39;,menuList);</span>
<span class="line">      commit(&#39;authList&#39;,auths);</span>
<span class="line">      commit(&#39;hasAuthMenu&#39;);</span>
<span class="line">      return auths;</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">});</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="静态菜单" tabindex="-1"><a class="header-anchor" href="#静态菜单"><span>静态菜单</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;el-menu default-active=&quot;2&quot; class=&quot;el-menu-vertical-demo&quot;&gt;</span>
<span class="line">    &lt;el-submenu index=&quot;1&quot;&gt;</span>
<span class="line">        &lt;template slot=&quot;title&quot;&gt;导航一&lt;/template&gt;</span>
<span class="line">        &lt;el-submenu index=&quot;1-1&quot;&gt;</span>
<span class="line">        &lt;template slot=&quot;title&quot;&gt;选项1-1&lt;/template&gt;</span>
<span class="line">        &lt;el-menu-item index=&quot;1-1-1&quot;&gt;选项1-1-1&lt;/el-menu-item&gt;</span>
<span class="line">        &lt;el-menu-item index=&quot;1-1-2&quot;&gt;选项1-1-2&lt;/el-menu-item&gt;</span>
<span class="line">        &lt;/el-submenu&gt;</span>
<span class="line">        &lt;el-menu-item index=&quot;1-2&quot;&gt;选项1-2&lt;/el-menu-item&gt;</span>
<span class="line">    &lt;/el-submenu&gt;</span>
<span class="line">    &lt;el-menu-item index=&quot;2&quot;&gt;</span>
<span class="line">        导航二</span>
<span class="line">    &lt;/el-menu-item&gt;</span>
<span class="line">    &lt;el-menu-item index=&quot;3&quot;&gt;</span>
<span class="line">        导航三</span>
<span class="line">    &lt;/el-menu-item&gt;</span>
<span class="line">    &lt;el-menu-item index=&quot;4&quot;&gt;</span>
<span class="line">        导航四</span>
<span class="line">    &lt;/el-menu-item&gt;</span>
<span class="line">&lt;/el-menu&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="递归组件" tabindex="-1"><a class="header-anchor" href="#递归组件"><span>递归组件</span></a></h2><p>Home.vue</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;template&gt;</span>
<span class="line">  &lt;div class=&quot;home&quot;&gt;</span>
<span class="line">      &lt;el-menu default-active=&quot;2&quot; class=&quot;el-menu-vertical-demo&quot; :router=&quot;true&quot;&gt;</span>
<span class="line">        &lt;template v-for=&quot;m in menuList&quot;&gt;</span>
<span class="line">          &lt;el-menu-item :index=&quot;m.path&quot; :key=&quot;m.auth&quot; v-if=&quot;!m.children&quot;&gt;</span>
<span class="line">            {{m.name}}</span>
<span class="line">          &lt;/el-menu-item&gt;</span>
<span class="line">          &lt;ReSub :m=&quot;m&quot; :key=&quot;m.auth&quot; v-else&gt;&lt;/ReSub&gt;</span>
<span class="line">        &lt;/template&gt;</span>
<span class="line">      &lt;/el-menu&gt;</span>
<span class="line">  &lt;/div&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ReSub.vue</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;template&gt;</span>
<span class="line">    &lt;el-submenu :index=&quot;m.auth&quot;&gt;</span>
<span class="line">          &lt;template slot=&quot;title&quot;&gt;</span>
<span class="line">              &lt;router-link :to=&quot;m.path&quot;&gt;{{m.name}}&lt;/router-link&gt;</span>
<span class="line">          &lt;/template&gt;</span>
<span class="line">          &lt;template v-for=&quot;l in m.children&quot;&gt;</span>
<span class="line">                &lt;el-menu-item v-if=&quot;!l.children&quot; :index=&quot;l.path&quot; :key=&quot;l.auth&quot;&gt;{{l.name}}&lt;/el-menu-item&gt;</span>
<span class="line">                &lt;ReSub v-else :key=&quot;l.auth&quot; :m=&quot;l&quot;&gt;&lt;/ReSub&gt;</span>
<span class="line">          &lt;/template&gt;</span>
<span class="line">    &lt;/el-submenu&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line">&lt;script&gt;</span>
<span class="line">export default {</span>
<span class="line">    name:&#39;ReSub&#39;,</span>
<span class="line">    props:[&#39;m&#39;]</span>
<span class="line">}</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="拆分路由" tabindex="-1"><a class="header-anchor" href="#拆分路由"><span>拆分路由</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">// 权限路由</span>
<span class="line">export let authRoutes = [</span>
<span class="line">  {</span>
<span class="line">    path:&#39;/cart&#39;,</span>
<span class="line">    name:&#39;cart&#39;,</span>
<span class="line">    component:()=&gt;import(&#39;@/views/menu/Cart&#39;),</span>
<span class="line">    children:[</span>
<span class="line">      {</span>
<span class="line">        path:&#39;cart-list&#39;,</span>
<span class="line">        name:&#39;cart-list&#39;,</span>
<span class="line">        component:()=&gt;import(&#39;@/views/menu/CartList&#39;),</span>
<span class="line">        children:[</span>
<span class="line">          {</span>
<span class="line">            path:&#39;lottery&#39;,</span>
<span class="line">            name:&#39;lottery&#39;,</span>
<span class="line">            component:()=&gt;import(&#39;@/views/menu/Lottery&#39;),</span>
<span class="line">          },</span>
<span class="line">          {</span>
<span class="line">            path:&#39;product&#39;,</span>
<span class="line">            name:&#39;product&#39;,</span>
<span class="line">            component:()=&gt;import(&#39;@/views/menu/Product&#39;),</span>
<span class="line">          }</span>
<span class="line">        ]</span>
<span class="line">      }</span>
<span class="line">    ]</span>
<span class="line">  },</span>
<span class="line">  {</span>
<span class="line">    path:&#39;/profile&#39;,</span>
<span class="line">    name:&#39;profile&#39;,</span>
<span class="line">    component:()=&gt;import(&#39;@/views/menu/Profile&#39;),</span>
<span class="line">  },</span>
<span class="line">  {</span>
<span class="line">    path:&#39;/shop&#39;,</span>
<span class="line">    name:&#39;shop&#39;,</span>
<span class="line">    component:()=&gt;import(&#39;@/views/menu/Shop&#39;),</span>
<span class="line">  }</span>
<span class="line">]</span>
<span class="line"></span>
<span class="line">// 默认路由</span>
<span class="line">let defaultRoutes = [</span>
<span class="line">  {</span>
<span class="line">    path: &#39;/&#39;,</span>
<span class="line">    name: &#39;home&#39;,</span>
<span class="line">    component: Home</span>
<span class="line">  },</span>
<span class="line">  {</span>
<span class="line">    path: &#39;*&#39;,</span>
<span class="line">    component: NotFound</span>
<span class="line">  }</span>
<span class="line">]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="通过权限筛出路由" tabindex="-1"><a class="header-anchor" href="#通过权限筛出路由"><span>通过权限筛出路由</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">router.beforeEach(async (to,from,next)=&gt;{</span>
<span class="line">  if(!store.state.hasAuthMenu){</span>
<span class="line">     // 1) 获取菜单列表</span>
<span class="line">     let auths = await store.dispatch(&#39;getMenuList&#39;);</span>
<span class="line">     // 2) 获取筛选后的路由</span>
<span class="line">     let newRoutes = await store.dispatch(&#39;authRoutes&#39;,auths);</span>
<span class="line">     // 3) 根据权限添加路由</span>
<span class="line">     router.addRoutes(newRoutes);</span>
<span class="line">     next({...to,replace:true});</span>
<span class="line">  }else{</span>
<span class="line">    next();</span>
<span class="line">  }</span>
<span class="line">});</span>
<span class="line"></span>
<span class="line">// 获取路由数据</span>
<span class="line">let getRoutes = (auths)=&gt;{</span>
<span class="line">  function r(authRoutes){</span>
<span class="line">    return authRoutes.filter(route=&gt;{</span>
<span class="line">      // 有权限</span>
<span class="line">      if(auths.includes(route.name)){</span>
<span class="line">        if(route.children){ // 有孩子 递归孩子</span>
<span class="line">          route.children = r(route.children);</span>
<span class="line">        }</span>
<span class="line">        return route;</span>
<span class="line">      }</span>
<span class="line">    })</span>
<span class="line">  }</span>
<span class="line">  return r(authRoutes);</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">//  vuex中获取晒出的路由</span>
<span class="line">async authRoutes({commit},auths){</span>
<span class="line">    // 全部路由  + 权限 =&gt; 晒出需要的路由</span>
<span class="line">    return getRoutes(auths)</span>
<span class="line">},</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19)])])}const p=n(i,[["render",t]]),u=JSON.parse('{"path":"/strong/66-15.%E6%9D%83%E9%99%90%E6%A0%A1%E9%AA%8C.html","title":"","lang":"en-US","frontmatter":{},"git":{"updatedTime":1681290319000,"contributors":[{"name":"yutao","username":"yutao","email":"642231346@qq.com","commits":1,"url":"https://github.com/yutao"}],"changelog":[{"hash":"f5ab8c9d34991ec274f7f652439afe5b2afb6147","time":1681290319000,"email":"642231346@qq.com","author":"yutao","message":"modify"}]},"filePathRelative":"strong/66-15.权限校验.md"}');export{p as comp,u as data};
