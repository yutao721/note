import{_ as n,c as a,a as e,o as i}from"./app-CD1YpnS1.js";const l={};function d(c,s){return i(),a("div",null,[...s[0]||(s[0]=[e(`<h2 id="创建项目" tabindex="-1"><a class="header-anchor" href="#创建项目"><span>创建项目</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">vue create &lt;project&gt;</span>
<span class="line">cd project </span>
<span class="line">yarn install axios iview</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用iview" tabindex="-1"><a class="header-anchor" href="#使用iview"><span>使用iview</span></a></h2><p>在main.js引入iview</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import iView from &#39;iview&#39;;</span>
<span class="line">import &#39;iview/dist/styles/iview.css&#39;;</span>
<span class="line">Vue.use(iView);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置axios参数以及拦截器" tabindex="-1"><a class="header-anchor" href="#配置axios参数以及拦截器"><span>配置axios参数以及拦截器</span></a></h2><p>对请求参数拦截器进行封装</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import axios from &#39;axios&#39;;</span>
<span class="line">import store from &#39;../store&#39;;</span>
<span class="line">import {getLocal} from &#39;../libs/local&#39;</span>
<span class="line">class AjaxRequest{</span>
<span class="line">    constructor(){ // 配置基本参数</span>
<span class="line">        this.baseURL = process.NODE_ENV === &#39;production&#39;?&#39;/&#39;:&#39;http://localhost:3000&#39;</span>
<span class="line">        this.timeout = 3000;</span>
<span class="line">        this.queue = {};</span>
<span class="line">    }</span>
<span class="line">    merge(options){</span>
<span class="line">        return {...options,baseURL:this.baseURL,timeout:this.timeout}</span>
<span class="line">    }</span>
<span class="line">    setIntercpetor(instance,url){</span>
<span class="line">        // 请求前 执行此方法</span>
<span class="line">        instance.interceptors.request.use(config=&gt;{</span>
<span class="line">            config.headers.authorization = getLocal(&#39;token&#39;);</span>
<span class="line">            if(Object.keys(this.queue).length === 0){</span>
<span class="line">                store.commit(&#39;show_loading&#39;)</span>
<span class="line">            }</span>
<span class="line">            this.queue[url] = url;</span>
<span class="line">            return config;</span>
<span class="line">        });</span>
<span class="line">        // 请求后执行此方法</span>
<span class="line">        instance.interceptors.response.use(res=&gt;{</span>
<span class="line">            store.commit(&#39;hide_loading&#39;)</span>
<span class="line">            delete this.queue[url];</span>
<span class="line">            if( Object.keys(this.queue).length === 0){</span>
<span class="line">                store.commit(&#39;hide_loading&#39;)</span>
<span class="line">            }</span>
<span class="line">            return res.data;</span>
<span class="line">        });</span>
<span class="line">    }</span>
<span class="line">    request(options){</span>
<span class="line">        let instance = axios.create();</span>
<span class="line">        let config = this.merge(options);</span>
<span class="line">        this.setIntercpetor(instance,options.url);</span>
<span class="line">        return instance(config); // axios();</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line">export default new AjaxRequest();</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置vuex存储用户状态" tabindex="-1"><a class="header-anchor" href="#配置vuex存储用户状态"><span>配置vuex存储用户状态</span></a></h2><p>用户信息通过vuex来进行存储</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import {login, validate} from &#39;./api/user&#39;</span>
<span class="line">import {setLocal} from &#39;./libs/local&#39;</span>
<span class="line">export default new Vuex.Store({</span>
<span class="line">  state: {</span>
<span class="line">    username:&#39;&#39;, // 存储用户</span>
<span class="line">    isShowLoading:false // 调用接口时是否显示loading</span>
<span class="line">  },</span>
<span class="line">  mutations: {</span>
<span class="line">    hide_loading(state){</span>
<span class="line">      state.isShowLoading = false;</span>
<span class="line">    },</span>
<span class="line">    show_loading(state){</span>
<span class="line">      state.isShowLoading = true;</span>
<span class="line">    },</span>
<span class="line">    set_user(state,payload){</span>
<span class="line">      state.username = payload</span>
<span class="line">    }</span>
<span class="line">  },</span>
<span class="line">  actions: {</span>
<span class="line">    async set_user({commit},username){</span>
<span class="line">       let data = await login(username)</span>
<span class="line">        if(data.code !== 0){</span>
<span class="line">          return Promise.reject(data.data);</span>
<span class="line">        }</span>
<span class="line">        commit(&#39;set_user&#39;,data.username);</span>
<span class="line">        setLocal(&#39;token&#39;,data.token);</span>
<span class="line">    },</span>
<span class="line">    async validate({commit}){</span>
<span class="line">      let r = await validate();</span>
<span class="line">      if(r.code === 0){</span>
<span class="line">        commit(&#39;set_user&#39;,r.username);</span>
<span class="line">        setLocal(&#39;token&#39;,r.token);</span>
<span class="line">      }</span>
<span class="line">      return r.code === 0;</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">})</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="全局拦截器配置" tabindex="-1"><a class="header-anchor" href="#全局拦截器配置"><span>全局拦截器配置</span></a></h2><p>页面切换时进行权限获取</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">router.beforeEach(async (to,from,next)=&gt;{</span>
<span class="line">  let needLogin = to.matched.some(match=&gt;match.meta.needLogin);</span>
<span class="line">  let result = await store.dispatch(&#39;validate&#39;);</span>
<span class="line">  if(needLogin){ // 需要登录</span>
<span class="line">    if(result){</span>
<span class="line">      next();</span>
<span class="line">    }else{</span>
<span class="line">      next({path:&#39;/login&#39;})</span>
<span class="line">    }</span>
<span class="line">  }else{ // 不需要登录</span>
<span class="line">    if(result &amp;&amp; to.path == &#39;/login&#39;){ // 已经登录而且还是login</span>
<span class="line">      next({path:&#39;/&#39;});</span>
<span class="line">    }else{</span>
<span class="line">      next();</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">});</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="eventbus应用" tabindex="-1"><a class="header-anchor" href="#eventbus应用"><span>EventBus应用</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">// Boy组件 发射dinner事件</span>
<span class="line">&lt;template&gt;</span>
<span class="line">    &lt;div&gt;男孩</span>
<span class="line">        &lt;button @click=&quot;sayToGirl()&quot;&gt;对女孩说话&lt;/button&gt;</span>
<span class="line">    &lt;/div&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line">&lt;script&gt;</span>
<span class="line">export default {</span>
<span class="line">    methods: {</span>
<span class="line">        sayToGirl(){</span>
<span class="line">           this.$bus.$emit(&#39;dinner&#39;,&#39;你饿吗&#39;);</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">// Girl组件 监听dinner事件</span>
<span class="line">&lt;template&gt;</span>
<span class="line">    &lt;div&gt;</span>
<span class="line">    女孩 &lt;span&gt;男孩对我说： {{message}}&lt;/span&gt;</span>
<span class="line">    &lt;/div&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">&lt;script&gt;</span>
<span class="line">export default {</span>
<span class="line">    data(){</span>
<span class="line">        return {message:&#39;&#39;}</span>
<span class="line">    },</span>
<span class="line">    mounted() {</span>
<span class="line">        this.$bus.$on(&#39;dinner&#39;,(data)=&gt;{</span>
<span class="line">            this.message = data;</span>
<span class="line">        })</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="render函数" tabindex="-1"><a class="header-anchor" href="#render函数"><span>render函数</span></a></h2><ul><li>第一个参数标签</li><li>attrs,style,props,on,nativeOn,class,directives,slot,key,ref,domProps</li><li>第三个参数内容</li></ul><h2 id="渲染dom元素" tabindex="-1"><a class="header-anchor" href="#渲染dom元素"><span>渲染dom元素</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">h(&#39;div&#39;,{</span>
<span class="line">    class:&#39;test&#39;,</span>
<span class="line">    attrs:{</span>
<span class="line">        id:1</span>
<span class="line">    },</span>
<span class="line">    style:{</span>
<span class="line">        color:&#39;red&#39;</span>
<span class="line">    },</span>
<span class="line">    on:{</span>
<span class="line">        click(){</span>
<span class="line">            alert(1)</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">},&#39;hello world&#39;);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="渲染组件" tabindex="-1"><a class="header-anchor" href="#渲染组件"><span>渲染组件</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">h(Test,{</span>
<span class="line">    props:{</span>
<span class="line">      name:&#39;zf&#39;</span>
<span class="line">    },</span>
<span class="line">    on:{</span>
<span class="line">        change(){</span>
<span class="line">          alert(&#39;123&#39;)</span>
<span class="line">        }</span>
<span class="line">    },</span>
<span class="line">    nativeOn:{</span>
<span class="line">      click(){</span>
<span class="line">        alert(1);</span>
<span class="line">      }</span>
<span class="line">    }</span>
<span class="line">},&#39;hello world&#39;)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="render函数优势" tabindex="-1"><a class="header-anchor" href="#render函数优势"><span>render函数优势</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">Vue.component(&#39;MyTitle&#39;,{</span>
<span class="line">  props:{</span>
<span class="line">    level:{},</span>
<span class="line">  },</span>
<span class="line">  render(h){</span>
<span class="line">    return h(&#39;h&#39;+this._self.level,this.$slots.default)</span>
<span class="line">  }</span>
<span class="line">});</span>
<span class="line">new Vue({</span>
<span class="line">  router,</span>
<span class="line">  store,</span>
<span class="line">  render:h=&gt;{</span>
<span class="line">    return h(&#39;MyTitle&#39;,{</span>
<span class="line">      props:{</span>
<span class="line">        level:2</span>
<span class="line">      }</span>
<span class="line">    },&#39;hello world&#39;)</span>
<span class="line">  } </span>
<span class="line"> }).$mount(&#39;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="用jsx改写" tabindex="-1"><a class="header-anchor" href="#用jsx改写"><span>用jsx改写</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">Vue.component(&#39;MyTitle&#39;,{</span>
<span class="line">  props:{</span>
<span class="line">    level:{},</span>
<span class="line">  },</span>
<span class="line">  render(h){</span>
<span class="line">    let tag = &#39;h&#39;+this.level;</span>
<span class="line">    return &lt;tag&gt;{this.$slots.default}&lt;/tag&gt;  </span>
<span class="line">  }</span>
<span class="line">});</span>
<span class="line">new Vue({</span>
<span class="line">  router,</span>
<span class="line">  store,</span>
<span class="line">  render:h=&gt;{</span>
<span class="line">    return &lt;MyTitle level=&quot;1&quot;&gt;hello world&lt;/MyTitle&gt;  </span>
<span class="line">  } </span>
<span class="line"> }).$mount(&#39;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="函数式组件" tabindex="-1"><a class="header-anchor" href="#函数式组件"><span>函数式组件</span></a></h2><p>通过render函数订制组件</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;List :render=&quot;renderFn&quot;&gt;&lt;/List&gt;</span>
<span class="line">import List from &#39;./components/List.vue&#39;;</span>
<span class="line">export default {</span>
<span class="line">  components:{</span>
<span class="line">    List</span>
<span class="line">  },</span>
<span class="line">  methods:{</span>
<span class="line">    renderFn:(h,name)=&gt;{</span>
<span class="line">      return &lt;h1&gt;{name}&lt;/h1&gt;</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">// 通过函数式组件进行数据的转化</span>
<span class="line">&lt;template&gt;</span>
<span class="line">    &lt;div&gt;</span>
<span class="line">        &lt;div v-for=&quot;i in 3&quot; :key=&quot;i&quot;&gt;</span>
<span class="line">            &lt;div v-if=&quot;!render&quot;&gt;{{i}}&lt;/div&gt;</span>
<span class="line">            &lt;Functional v-else :render=&quot;render&quot; :val=&quot;i&quot;&gt;&lt;/Functional&gt;</span>
<span class="line">        &lt;/div&gt;</span>
<span class="line">    &lt;/div&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line">&lt;script&gt;</span>
<span class="line">import Functional from &#39;./Functional.js&#39;</span>
<span class="line">export default {</span>
<span class="line">   props:{</span>
<span class="line">       render:{}</span>
<span class="line">   },</span>
<span class="line">   components:{</span>
<span class="line">       Functional</span>
<span class="line">   }</span>
<span class="line">}</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">// 函数式组件</span>
<span class="line">export default {</span>
<span class="line">    functional:true,</span>
<span class="line">    render:(h,ctx)=&gt;{</span>
<span class="line">        return ctx.props.render(h,ctx.props.val);</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="可编辑表格" tabindex="-1"><a class="header-anchor" href="#可编辑表格"><span>可编辑表格</span></a></h2><p>基于iview使用jsx扩展成可编辑的表格</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;template&gt;</span>
<span class="line">     &lt;Table height=&quot;200&quot; :columns=&quot;innerColumn&quot; :data=&quot;data&quot;&gt;&lt;/Table&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line">&lt;script&gt;</span>
<span class="line">export default {</span>
<span class="line">    data(){</span>
<span class="line">        return {innerColumn:[],index:-1,}</span>
<span class="line">    },</span>
<span class="line">    methods:{</span>
<span class="line">        editor(key){</span>
<span class="line">            this.index = key;</span>
<span class="line">        },</span>
<span class="line">        save(){</span>
<span class="line">             this.index = -1;</span>
<span class="line">        },</span>
<span class="line">        change(row,column,value){</span>
<span class="line">            row[column[&#39;key&#39;]] =value</span>
<span class="line">        }</span>
<span class="line">    },</span>
<span class="line">    props:{</span>
<span class="line">        column:{},</span>
<span class="line">        data:{}</span>
<span class="line">    },</span>
<span class="line">    mounted(){</span>
<span class="line">        this.innerColumn = this.column.map(item=&gt;{</span>
<span class="line">            if(item.edit){</span>
<span class="line">                item.render = (h,{row,index,column})=&gt;{</span>
<span class="line">                    let flag = this.index== index</span>
<span class="line">                    return &lt;div&gt;</span>
<span class="line">                    {flag?</span>
<span class="line">                    &lt;i-input value={row[column[&#39;key&#39;]]} on-input={(value)=&gt;{</span>
<span class="line">                        this.change(row,column,value)</span>
<span class="line">                    }}/&gt;:</span>
<span class="line">                    &lt;span &gt;{row[column[&#39;key&#39;]]}&lt;/span&gt;</span>
<span class="line">                    }</span>
<span class="line">                       {!flag?</span>
<span class="line">                        &lt;i-button on-click={this.editor.bind(this,index)}&gt;</span>
<span class="line">                            编辑</span>
<span class="line">                        &lt;/i-button&gt;:</span>
<span class="line">                         &lt;i-button on-click={this.save.bind(this,index)}&gt;</span>
<span class="line">                            保存</span>
<span class="line">                        &lt;/i-button&gt;}</span>
<span class="line">                     &lt;/div&gt;</span>
<span class="line">                }</span>
<span class="line">                return item;</span>
<span class="line">            }</span>
<span class="line">            return item;</span>
<span class="line">        })</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,33)])])}const r=n(l,[["render",d]]),t=JSON.parse('{"path":"/strong/66-10.jwt-vue.html","title":"","lang":"en-US","frontmatter":{},"git":{"updatedTime":1681290319000,"contributors":[{"name":"yutao","username":"yutao","email":"642231346@qq.com","commits":1,"url":"https://github.com/yutao"}],"changelog":[{"hash":"f5ab8c9d34991ec274f7f652439afe5b2afb6147","time":1681290319000,"email":"642231346@qq.com","author":"yutao","message":"modify"}]},"filePathRelative":"strong/66-10.jwt-vue.md"}');export{r as comp,t as data};
