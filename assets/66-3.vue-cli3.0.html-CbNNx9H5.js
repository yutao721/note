import{_ as n,c as e,a as l,o as a}from"./app-CD1YpnS1.js";const i={};function t(d,s){return a(),e("div",null,[...s[0]||(s[0]=[l(`<h2 id="快速原型开发" tabindex="-1"><a class="header-anchor" href="#快速原型开发"><span>快速原型开发</span></a></h2><p>可以快速识别.vue文件封装组件插件等功能</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">sudo npm install @vue/cli -g</span>
<span class="line">sudo npm install -g @vue/cli-service-global</span>
<span class="line">vue serve Home.vue</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>关闭eslit提示</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">module.exports = {</span>
<span class="line">    devServer: {</span>
<span class="line">      overlay: {</span>
<span class="line">        warnings: false,</span>
<span class="line">        errors: false</span>
<span class="line">      },</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="实现递归菜单组件" tabindex="-1"><a class="header-anchor" href="#实现递归菜单组件"><span>实现递归菜单组件</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;Menu&gt;</span>
<span class="line">    &lt;MenuItem v-for=&quot;(item,key) in menuList&quot; :key=&quot;key&quot;&gt;</span>
<span class="line">        {{item.title}}</span>
<span class="line">    &lt;/MenuItem&gt;</span>
<span class="line">    &lt;SubMenu&gt;</span>
<span class="line">         &lt;template </span>
<span class="line">        &lt;MenuItem&gt;标题1-1&lt;/MenuItem&gt;</span>
<span class="line">        &lt;MenuItem&gt;标题1-2&lt;/MenuItem&gt;</span>
<span class="line">            &lt;SubMenu&gt;</span>
<span class="line">             &lt;template </span>
<span class="line">            &lt;MenuItem&gt;标题1-1-1-1&lt;/MenuItem&gt;</span>
<span class="line">            &lt;MenuItem&gt;标题1-1-1-1&lt;/MenuItem&gt;</span>
<span class="line">        &lt;/SubMenu&gt;</span>
<span class="line">    &lt;/SubMenu&gt;</span>
<span class="line">&lt;/Menu&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>根据数据递归渲染</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">menuList:[</span>
<span class="line">    {</span>
<span class="line">        title:&#39;标题1&#39;,</span>
<span class="line">        children:[</span>
<span class="line">            {title:&#39;标题1-1&#39;},</span>
<span class="line">            {title:&#39;标题1-2&#39;}</span>
<span class="line">        ]</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">        title:&#39;标题2&#39;,</span>
<span class="line">        children:[</span>
<span class="line">            {title:&#39;标题2-1&#39;},</span>
<span class="line">            {title:&#39;标题2-2&#39;}</span>
<span class="line">        ]</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">        title:&#39;标题3&#39;,</span>
<span class="line">        children:[</span>
<span class="line">            {title:&#39;标题3-1&#39;},</span>
<span class="line">            {title:&#39;标题3-2&#39;}</span>
<span class="line">        ]</span>
<span class="line">    }</span>
<span class="line">]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ReSub组件实现</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;Menu&gt;</span>
<span class="line">    &lt;template v-for=&quot;(item,key) in menuList&quot; &gt;</span>
<span class="line">        &lt;MenuItem v-if=&quot;!item.children&quot; :key=&quot;key&quot;&gt;</span>
<span class="line">            {{item.title}}</span>
<span class="line">        &lt;/MenuItem&gt;</span>
<span class="line">        &lt;ReSub v-else :key=&quot;key&quot; :data=&quot;item&quot;&gt;&lt;/ReSub&gt;</span>
<span class="line">    &lt;/template&gt;</span>
<span class="line">&lt;/Menu&gt;</span>
<span class="line"></span>
<span class="line">// ReSub组件主要作用是递归</span>
<span class="line">&lt;template&gt;</span>
<span class="line">    &lt;SubMenu class=&quot;sub&quot;&gt;</span>
<span class="line">         &lt;template </span>
<span class="line">        &lt;template v-for=&quot;d in data.children&quot;&gt;</span>
<span class="line">            &lt;MenuItem v-if=&quot;!d.children&quot; :key=&quot;d.title&quot;&gt;{{d.title}}&lt;/MenuItem&gt;</span>
<span class="line">            &lt;ReSub v-else :data=&quot;d&quot; :key=&quot;d.title&quot; class=&quot;sub&quot;&gt;&lt;/ReSub&gt;   </span>
<span class="line">        &lt;/template&gt;</span>
<span class="line">    &lt;/SubMenu&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span>
<span class="line">&lt;script&gt;</span>
<span class="line">import SubMenu from &#39;./SubMenu&#39;;</span>
<span class="line">import MenuItem from &#39;./MenuItem&#39;</span>
<span class="line">export default {</span>
<span class="line">    props:[&#39;data&#39;], </span>
<span class="line">    name:&#39;ReSub&#39;,</span>
<span class="line">    components:{</span>
<span class="line">        SubMenu,</span>
<span class="line">        MenuItem</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用vue-cli3-0创建vue项目" tabindex="-1"><a class="header-anchor" href="#使用vue-cli3-0创建vue项目"><span>使用vue-cli3.0创建vue项目</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">vue create &lt;project-name&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>可以通过vue ui创建项目／管理项目依赖</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">vue ui</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="配置vue-config-js" tabindex="-1"><a class="header-anchor" href="#配置vue-config-js"><span>配置vue-config.js</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">let path = require(&#39;path&#39;)</span>
<span class="line">module.exports = {</span>
<span class="line">    publicPath:process.env.NODE_ENV === &#39;production&#39;? &#39;/vue-project&#39;:&#39;/&#39;,</span>
<span class="line">    outputDir:&#39;myassets&#39;, // 输出路径</span>
<span class="line">    assetsDir:&#39;static&#39;, // 生成静态目录的文件夹</span>
<span class="line">    runtimeCompiler: true, // 是否可以使用template模板</span>
<span class="line">    parallel:require(&#39;os&#39;).cpus().length &gt; 1, //多余1核cpu时 启动并行压缩</span>
<span class="line">    productionSourceMap:false, //生产环境下 不使用soruceMap</span>
<span class="line"></span>
<span class="line">    // https://github.com/neutrinojs/webpack-chain</span>
<span class="line">    chainWebpack:config=&gt;{</span>
<span class="line">        // 控制webpack内部配置</span>
<span class="line">        config.resolve.alias.set(&#39;component&#39;,path.resolve(__dirname,&#39;src/components&#39;));</span>
<span class="line">    },</span>
<span class="line">    // https://github.com/survivejs/webpack-merge</span>
<span class="line">    configureWebpack:{</span>
<span class="line">        // 新增插件等</span>
<span class="line">        plugins:[]</span>
<span class="line">    },</span>
<span class="line">    devServer:{ // 配置代理</span>
<span class="line">        proxy:{</span>
<span class="line">            &#39;/api&#39;:{</span>
<span class="line">                target:&#39;http://a.zf.cn:3000&#39;,</span>
<span class="line">                changeOrigin:true</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">    },</span>
<span class="line">    // 第三方插件配置</span>
<span class="line">    pluginOptions: {</span>
<span class="line">        &#39;style-resources-loader&#39;: {</span>
<span class="line">            preProcessor: &#39;less&#39;,</span>
<span class="line">            patterns: [</span>
<span class="line">                // 插入全局样式</span>
<span class="line">                path.resolve(__dirname,&#39;src/assets/common.less&#39;), </span>
<span class="line">            ],</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="defer-async-preload-prefetch" tabindex="-1"><a class="header-anchor" href="#defer-async-preload-prefetch"><span>defer &amp; async ／ preload &amp; prefetch</span></a></h2><ul><li>defer 和 async 在网络读取的过程中都是异步解析</li><li>defer是有顺序依赖的，async只要脚本加载完后就会执行</li><li>preload 可以对当前页面所需的脚本、样式等资源进行预加载</li><li>prefetch 加载的资源一般不是用于当前页面的，是未来很可能用到的这样一些资源</li></ul><h2 id="基于vue-cli编写组件" tabindex="-1"><a class="header-anchor" href="#基于vue-cli编写组件"><span>基于vue-cli编写组件</span></a></h2><h3 id="小球的滚动组件" tabindex="-1"><a class="header-anchor" href="#小球的滚动组件"><span>小球的滚动组件</span></a></h3><ul><li>更改小球的颜色<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;template&gt;</span>
<span class="line">  &lt;div :id=&quot;\`ball\${_uid}\`&quot; class=&quot;ball&quot; :style=&quot;{background:color}&quot;&gt;</span>
<span class="line">  &lt;/div&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line">&lt;script&gt;</span>
<span class="line">export default {</span>
<span class="line">  name:&#39;ScrollBall&#39;,</span>
<span class="line">  props:{</span>
<span class="line">      color:{</span>
<span class="line">          type:String,</span>
<span class="line">          default:&#39;red&#39;</span>
<span class="line">      }</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line">&lt;/script&gt;</span>
<span class="line">&lt;style lang=&quot;less&quot;&gt;</span>
<span class="line">  .ball{</span>
<span class="line">      width:80px;</span>
<span class="line">      height: 80px;</span>
<span class="line">      border-radius: 50%;</span>
<span class="line">      text-align:center;</span>
<span class="line">      line-height:80px;</span>
<span class="line">  }</span>
<span class="line">&lt;/style&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>球的滚动requestAnimationFrame</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;ScrollBall color=&quot;red&quot; :target=&quot;500&quot; v-model=&quot;pos1&quot;&gt;&lt;/ScrollBall&gt; </span>
<span class="line">&lt;ScrollBall color=&quot;blue&quot; :target=&quot;300&quot; v-model=&quot;pos2&quot;&gt;&lt;/ScrollBall&gt;</span>
<span class="line"></span>
<span class="line">&lt;script&gt;</span>
<span class="line">export default {</span>
<span class="line">    props:{</span>
<span class="line">        value:{</span>
<span class="line">            type:Number,</span>
<span class="line">            default:0</span>
<span class="line">        },</span>
<span class="line">        target:{</span>
<span class="line">            type:Number,</span>
<span class="line">            required:true</span>
<span class="line">        }</span>
<span class="line">    },</span>
<span class="line">    mounted(){</span>
<span class="line">        let ele = document.getElementById(\`ball\${this._uid}\`);</span>
<span class="line">        let timer;</span>
<span class="line">        let fn = ()=&gt;{</span>
<span class="line">            let left = this.value + 2;</span>
<span class="line">            if(left &gt; this.target){</span>
<span class="line">                return cancelAnimationFrame(timer);</span>
<span class="line">            }</span>
<span class="line">            ele.style.transform = \`translate(\${left}px)\`;</span>
<span class="line">            this.$emit(&#39;input&#39;,left);</span>
<span class="line">            timer = requestAnimationFrame(fn)</span>
<span class="line">        }</span>
<span class="line">        timer = requestAnimationFrame(fn)</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>增加球的内容<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;ScrollBall color=&quot;red&quot; :target=&quot;500&quot; v-model=&quot;pos&quot;&gt;球1&lt;/ScrollBall&gt; </span>
<span class="line">&lt;div :id=&quot;\`ball\${_uid}\`&quot; class=&quot;ball&quot; :style=&quot;{background:color}&quot;&gt;</span>
<span class="line">      &lt;slot&gt;&lt;/slot&gt;</span>
<span class="line">&lt;/div&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>让小球停止运动 增加小球的停止方法,通过父亲用$refs获取子组件方法<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;ScrollBall color=&quot;red&quot; :target=&quot;500&quot; v-model=&quot;pos1&quot; ref=&quot;ball&quot;&gt;球1&lt;/ScrollBall&gt;</span>
<span class="line">&lt;button @click=&quot;stop&quot;&gt;stop&lt;/button&gt;</span>
<span class="line">stop(){</span>
<span class="line">  this.$refs.ball.stopMove()</span>
<span class="line">}</span>
<span class="line">// 组件中停止小球运动</span>
<span class="line">methods:{</span>
<span class="line">  stopMove(){</span>
<span class="line">      cancelAnimationFrame(this.timer);</span>
<span class="line">  },</span>
<span class="line">  move(){</span>
<span class="line">      let ele = document.getElementById(\`ball\${this._uid}\`);</span>
<span class="line">      let left = this.value + 2;</span>
<span class="line">      if(left &gt; this.target){</span>
<span class="line">          return this.stopMove();</span>
<span class="line">      }</span>
<span class="line">      ele.style.transform = \`translate(\${left}px)\`;</span>
<span class="line">      this.$emit(&#39;input&#39;,left);</span>
<span class="line">      this.timer = requestAnimationFrame(this.move)</span>
<span class="line">  }</span>
<span class="line">},</span>
<span class="line">mounted(){</span>
<span class="line">  this.timer = requestAnimationFrame(this.move)</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>通知小球运动结束<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">if(left &gt; this.target){</span>
<span class="line">  this.$emit(&#39;end&#39;);</span>
<span class="line">  return this.stopMove();</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>`,24)])])}const p=n(i,[["render",t]]),r=JSON.parse('{"path":"/strong/66-3.vue-cli3.0.html","title":"","lang":"en-US","frontmatter":{},"git":{"updatedTime":1681290319000,"contributors":[{"name":"yutao","username":"yutao","email":"642231346@qq.com","commits":1,"url":"https://github.com/yutao"}],"changelog":[{"hash":"f5ab8c9d34991ec274f7f652439afe5b2afb6147","time":1681290319000,"email":"642231346@qq.com","author":"yutao","message":"modify"}]},"filePathRelative":"strong/66-3.vue-cli3.0.md"}');export{p as comp,r as data};
