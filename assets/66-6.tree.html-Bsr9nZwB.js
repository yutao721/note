import{_ as n,c as e,a,o as i}from"./app-CD1YpnS1.js";const l={};function d(t,s){return i(),e("div",null,[...s[0]||(s[0]=[a(`<h1 id="基于elelemnt-ui二次封装tree组件" tabindex="-1"><a class="header-anchor" href="#基于elelemnt-ui二次封装tree组件"><span>基于elelemnt-ui二次封装tree组件</span></a></h1><h2 id="实现树菜单接口" tabindex="-1"><a class="header-anchor" href="#实现树菜单接口"><span>实现树菜单接口</span></a></h2><p>数据分成两部分返回，文件夹列表以及文件列表,因为二者有包含关系，需要前端根据返回的数据渲染成树形结构数据。</p><ul><li><p>安装express</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">npm init -y</span>
<span class="line">npm install express</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>parent数据代表文件夹数据，child的数据代表文件</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">let express = require(&#39;express&#39;);</span>
<span class="line">let app = express();</span>
<span class="line">app.all(&#39;*&#39;, function (req, res, next) {</span>
<span class="line">  res.header(&#39;Access-Control-Allow-Origin&#39;, &#39;*&#39;);</span>
<span class="line">  if(req.method === &#39;OPTIONS&#39;){</span>
<span class="line">      return res.send();</span>
<span class="line">  }</span>
<span class="line">  next();</span>
<span class="line">});</span>
<span class="line">app.get(&#39;/getTreeList&#39;,function(req,res){</span>
<span class="line">  res.json({</span>
<span class="line">      code:0,</span>
<span class="line">      parent:[</span>
<span class="line">              {name:&#39;文件夹1&#39;,pid:0,id:1},</span>
<span class="line">              {name:&#39;文件夹2&#39;,pid:0,id:2},</span>
<span class="line">              {name:&#39;文件夹3&#39;,pid:0,id:3},</span>
<span class="line">              {name:&#39;文件夹1-1&#39;,pid:1,id:4},</span>
<span class="line">              {name:&#39;文件夹2-1&#39;,pid:2,id:5},</span>
<span class="line">      ],</span>
<span class="line">      child:[</span>
<span class="line">              {name:&#39;文件1&#39;,pid:1,id:10001},</span>
<span class="line">              {name:&#39;文件2&#39;,pid:1,id:10002},</span>
<span class="line">              {name:&#39;文件2-1&#39;,pid:2,id:10003},</span>
<span class="line">              {name:&#39;文件2-2&#39;,pid:2,id:10004},</span>
<span class="line">              {name:&#39;文件1-1-1&#39;,pid:4,id:10005},</span>
<span class="line">              {name:&#39;文件2-1-1&#39;,pid:5,id:10006}</span>
<span class="line">      ]</span>
<span class="line">  });</span>
<span class="line">});</span>
<span class="line">app.listen(3000);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="引入element-ui" tabindex="-1"><a class="header-anchor" href="#引入element-ui"><span>引入element-ui</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import Vue from &#39;vue&#39;;</span>
<span class="line">// 引入组件库行</span>
<span class="line">import ElementUI from &#39;element-ui&#39;;</span>
<span class="line">// 引入组件库样式</span>
<span class="line">import &#39;element-ui/lib/theme-chalk/index.css&#39;;</span>
<span class="line">// 引入App根组件</span>
<span class="line">import App from &#39;./App.vue&#39;;</span>
<span class="line">// 使用插件</span>
<span class="line">Vue.use(ElementUI);</span>
<span class="line">export default new Vue({</span>
<span class="line">     el:&#39;</span>
<span class="line">    render:h=&gt;h(App)</span>
<span class="line">});</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="通过axios调取接口" tabindex="-1"><a class="header-anchor" href="#通过axios调取接口"><span>通过axios调取接口</span></a></h2><p>创建api.js 到出获取列表方法</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import axios from &#39;axios&#39;;</span>
<span class="line">axios.defaults.baseURL = &#39;http://localhost:3000&#39;;</span>
<span class="line">export const getTreeList = async () =&gt;{</span>
<span class="line">    return axios.get(&#39;/getTreeList&#39;);</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="在组件中获取数据" tabindex="-1"><a class="header-anchor" href="#在组件中获取数据"><span>在组件中获取数据</span></a></h2><p>对elememnt-ui树组件进行二次封装，封装TreeComponent组件</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;template&gt;</span>
<span class="line">    &lt;div&gt;</span>
<span class="line">        &lt;TreeComponent :data=&quot;treeList&quot;&gt;&lt;/TreeComponent&gt;</span>
<span class="line">    &lt;/div&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line">&lt;script&gt;</span>
<span class="line">import {getTreeList} from &#39;./api.js&#39;;</span>
<span class="line">import TreeComponent from &#39;./TreeComponent.vue&#39;;</span>
<span class="line">export default {</span>
<span class="line">    data(){</span>
<span class="line">        return {</span>
<span class="line">            treeList:[]</span>
<span class="line">        }</span>
<span class="line">    },</span>
<span class="line">    async mounted(){</span>
<span class="line">        let {data} = await getTreeList();</span>
<span class="line">        // 增加标示 如果是文件夹 增加type标示</span>
<span class="line">        let parent = data.parent.map(item=&gt;(item.type=&quot;child&quot;,item));</span>
<span class="line">        this.treeList = [...parent,...data.child];</span>
<span class="line">    },</span>
<span class="line">    components:{</span>
<span class="line">        TreeComponent</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="格式化数据-转化树列表" tabindex="-1"><a class="header-anchor" href="#格式化数据-转化树列表"><span>格式化数据-转化树列表</span></a></h2><p>处理数据时不能对父组件传递的数据直接更改，所以操作前需要进行数据的拷贝</p><ul><li>安装lodash<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">npm install lodash</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;template&gt;</span>
<span class="line">    &lt;el-tree </span>
<span class="line">        :data=&quot;treeList&quot;&gt;</span>
<span class="line">    &lt;/el-tree&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line">&lt;script&gt;</span>
<span class="line">import _ from &#39;lodash&#39;</span>
<span class="line">export default {</span>
<span class="line">    props:{</span>
<span class="line">        // 树的信息列表</span>
<span class="line">        data:{</span>
<span class="line">            type:Array,</span>
<span class="line">            default:()=&gt;[]</span>
<span class="line">        }</span>
<span class="line">    },</span>
<span class="line">    data(){</span>
<span class="line">        return {</span>
<span class="line">            treeList:[] // 格式化后的树的数据结构</span>
<span class="line">        }</span>
<span class="line">    },</span>
<span class="line">    methods: {</span>
<span class="line">        processData(){</span>
<span class="line">            // 如果没有数据不进行任何处理</span>
<span class="line">            if(this.data.length != 0){</span>
<span class="line">                // 创造一个id的映射表，通过映射表创造关系,多数据操作时不要直接修改原数据</span>
<span class="line">                let cloneList = _.cloneDeep(this.data);</span>
<span class="line">                let mapList = cloneList.reduce((memo,current)=&gt;{</span>
<span class="line">                    memo[current[&#39;id&#39;]] = current;</span>
<span class="line">                    return memo;</span>
<span class="line">                },{}); </span>
<span class="line">                // 去列表中找 进行分类,最后返回数组结构</span>
<span class="line">                this.treeList = cloneList.reduce((result,current)=&gt;{</span>
<span class="line">                    current.label = current.name;// 树的结构必须要有label属性</span>
<span class="line">                    let parent = mapList[current.pid]; // 拿到当前项的父id去列表中查找，如果找到说明是儿子，就将它放到父亲的children属性中</span>
<span class="line">                    if(parent){</span>
<span class="line">                        parent.children? parent.children.push(current): parent.children = [current];</span>
<span class="line">                    }else if(current.pid === 0){ // 说明这个是根把根放进到result中  </span>
<span class="line">                        result.push(current);</span>
<span class="line">                    }</span>
<span class="line">                    return result</span>
<span class="line">                },[]);</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">    },</span>
<span class="line">    watch: {</span>
<span class="line">        data:{</span>
<span class="line">            handler(){ // 监控data的变化，如果数据有更新重新处理数据</span>
<span class="line">                this.processData(); </span>
<span class="line">            },</span>
<span class="line">            immediate:true // 默认上来就调用一次</span>
<span class="line">        }</span>
<span class="line">    },</span>
<span class="line">}</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="自定义tree组件" tabindex="-1"><a class="header-anchor" href="#自定义tree组件"><span>自定义tree组件</span></a></h2><p>文件夹添加文件夹标识，文件添加文件标识</p><p>通过render函数扩展树组件</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;el-tree </span>
<span class="line">    :data=&quot;treeList&quot;</span>
<span class="line">    :render-content=&quot;renderFn&quot;</span>
<span class="line">    :expand-on-click-node=&quot;false&quot;</span>
<span class="line">    default-expand-all</span>
<span class="line">&gt;</span>
<span class="line">&lt;/el-tree&gt;</span>
<span class="line">isParent(type){</span>
<span class="line">    return type === &#39;parent&#39;;</span>
<span class="line">},</span>
<span class="line">renderFn(h, { node, data, store }){</span>
<span class="line">    let parent = this.isParent(data.type);</span>
<span class="line">    return (&lt;div&gt;</span>
<span class="line">        {parent? </span>
<span class="line">            node.expanded?</span>
<span class="line">                &lt;i class=&quot;el-icon-folder-opened icon&quot;&gt;&lt;/i&gt;:</span>
<span class="line">                &lt;i class=&quot;el-icon-folder icon&quot;&gt;&lt;/i&gt;:</span>
<span class="line">        &lt;i class=&quot;el-icon-document icon&quot;&gt;&lt;/i&gt;}</span>
<span class="line">        {data.label}</span>
<span class="line">    &lt;/div&gt;)</span>
<span class="line">},</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="扩展操作列表" tabindex="-1"><a class="header-anchor" href="#扩展操作列表"><span>扩展操作列表</span></a></h2><p>列表数据应该从外部传入，对文件夹和文件实现不同的操作</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;TreeComponent </span>
<span class="line">    :data=&quot;treeList&quot;</span>
<span class="line">    :rootList=&quot;rootList&quot;</span>
<span class="line">    :childList=&quot;childList&quot;</span>
<span class="line">&gt;&lt;/TreeComponent&gt;</span>
<span class="line">rootList:[</span>
<span class="line">    {name:&#39;rename&#39;,text:&#39;修改文件夹名字&#39;},</span>
<span class="line">    {name:&#39;delete&#39;,text:&#39;删除文件夹&#39;}</span>
<span class="line">],</span>
<span class="line">childList:[</span>
<span class="line">    {name:&#39;rename&#39;,text:&#39;修改文件名字&#39;},</span>
<span class="line">    {name:&#39;delete&#39;,text:&#39;删除文件&#39;}</span>
<span class="line">]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实现下拉菜单</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">let list = parent? this.rootList:this.childList;</span>
<span class="line">&lt;el-dropdown </span>
<span class="line">    placement=&quot;bottom-start&quot; </span>
<span class="line">    trigger=&quot;click&quot;</span>
<span class="line">    on-command={this.handleCommand}</span>
<span class="line">&gt;</span>
<span class="line">    &lt;i class=&quot;el-icon-arrow-down el-icon--right&quot;&gt;&lt;/i&gt;</span>
<span class="line">    &lt;el-dropdown-menu slot=&quot;dropdown&quot;&gt;</span>
<span class="line">        {list.map(item=&gt;(</span>
<span class="line">            &lt;el-dropdown-item command={item.name}&gt;{item.text}&lt;/el-dropdown-item&gt;</span>
<span class="line">        ))}</span>
<span class="line">    &lt;/el-dropdown-menu&gt;</span>
<span class="line">&lt;/el-dropdown&gt;</span>
<span class="line">handleCommand(name){</span>
<span class="line">    if(name === &#39;rename&#39;){</span>
<span class="line">        // 修改文件名</span>
<span class="line">    }else{</span>
<span class="line">        // 删除文件</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="点击修改切换输入框" tabindex="-1"><a class="header-anchor" href="#点击修改切换输入框"><span>点击修改切换输入框</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">if(name === &#39;rename&#39;){</span>
<span class="line">    this.currentId = data.id;</span>
<span class="line">    this.currentContent = data.label;</span>
<span class="line">}</span>
<span class="line">{this.currentId === data.id?</span>
<span class="line">    &lt;span&gt;</span>
<span class="line">        &lt;el-input </span>
<span class="line">            value={this.currentContent}</span>
<span class="line">            on-input={this.handleChange}</span>
<span class="line">        &gt;&lt;/el-input&gt;</span>
<span class="line">        &lt;el-button type=&quot;text&quot;&gt;</span>
<span class="line">            &lt;i class=&quot;el-icon-close&quot;&gt;&lt;/i&gt;</span>
<span class="line">        &lt;/el-button&gt;</span>
<span class="line">        &lt;el-button type=&quot;text&quot;&gt;</span>
<span class="line">            &lt;i class=&quot;el-icon-check&quot;&gt;&lt;/i&gt;</span>
<span class="line">        &lt;/el-button&gt;</span>
<span class="line">    &lt;/span&gt;</span>
<span class="line">    :data.label</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="确认修改" tabindex="-1"><a class="header-anchor" href="#确认修改"><span>确认修改</span></a></h2><p>使用.sync 同步修改后的数据</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;el-button type=&quot;text&quot; on-click={this.check.bind(this,data)}&gt;</span>
<span class="line">    &lt;i class=&quot;el-icon-check&quot;&gt;&lt;/i&gt;</span>
<span class="line">&lt;/el-button&gt;</span>
<span class="line"></span>
<span class="line">check(data){</span>
<span class="line">    let list = _.cloneDeep(this.data);</span>
<span class="line">    list = list.map(item=&gt;{</span>
<span class="line">        if(item.id === data.id){</span>
<span class="line">            item.name = this.currentContent;</span>
<span class="line">        }</span>
<span class="line">        return item;</span>
<span class="line">    });</span>
<span class="line">    this.$emit(&#39;update:data&#39;,list);</span>
<span class="line">    this.currentId = &#39;&#39;;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="取消修改" tabindex="-1"><a class="header-anchor" href="#取消修改"><span>取消修改</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;el-button type=&quot;text&quot; on-click={this.close}&gt;</span>
<span class="line">    &lt;i class=&quot;el-icon-close&quot;&gt;&lt;/i&gt;</span>
<span class="line">&lt;/el-button&gt;</span>
<span class="line">close(){</span>
<span class="line">    this.currentId = &#39;&#39;;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="删除文件或文件夹" tabindex="-1"><a class="header-anchor" href="#删除文件或文件夹"><span>删除文件或文件夹</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">this.$confirm(\`确认删除 \${data.type===&#39;parent&#39;?&#39;文件夹&#39;:&#39;文件&#39;}吗\`,&quot;确认？&quot;,{</span>
<span class="line">    confirmButtonText: &#39;确定&#39;,</span>
<span class="line">    cancelButtonText: &#39;取消&#39;,</span>
<span class="line">    type: &#39;warning&#39;  </span>
<span class="line">}).then(()=&gt;{</span>
<span class="line">    this.handleDelete(data); // 删除文件</span>
<span class="line">    this.$message({</span>
<span class="line">        type:&#39;success&#39;,</span>
<span class="line">        message:&#39;删除成功&#39;</span>
<span class="line">    })</span>
<span class="line">}).catch(err=&gt;{</span>
<span class="line">    this.$message({</span>
<span class="line">        type:&#39;info&#39;,</span>
<span class="line">        message:&#39;已取消删除&#39;</span>
<span class="line">    })</span>
<span class="line">});</span>
<span class="line"></span>
<span class="line">handleDelete(data){</span>
<span class="line">    let list = _.cloneDeep(this.data);</span>
<span class="line">    list = list.filter(item=&gt; item.id !== data.id);</span>
<span class="line">    this.$emit(&#39;update:data&#39;,list);</span>
<span class="line">    this.currentId = &#39;&#39;;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="调用接口删除文件" tabindex="-1"><a class="header-anchor" href="#调用接口删除文件"><span>调用接口删除文件</span></a></h2><p>如果用户传递了delete方法，调用成功后在更新页面数据</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;TreeComponent </span>
<span class="line">    :data.sync=&quot;treeList&quot;</span>
<span class="line">    :rootList=&quot;rootList&quot;</span>
<span class="line">    :childList=&quot;childList&quot;</span>
<span class="line">    :delete=&quot;deleteFn&quot;</span>
<span class="line">&gt;&lt;/TreeComponent&gt;</span>
<span class="line"></span>
<span class="line">this.delete &amp;&amp; this.delete(data.id).then(()=&gt;{</span>
<span class="line">    this.handleDelete(data);</span>
<span class="line">    this.$message({</span>
<span class="line">        type:&#39;success&#39;,</span>
<span class="line">        message:&#39;删除成功&#39;</span>
<span class="line">    })</span>
<span class="line">})</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,37)])])}const c=n(l,[["render",d]]),r=JSON.parse('{"path":"/strong/66-6.tree.html","title":"基于elelemnt-ui二次封装tree组件","lang":"en-US","frontmatter":{},"git":{"updatedTime":1681290319000,"contributors":[{"name":"yutao","username":"yutao","email":"642231346@qq.com","commits":1,"url":"https://github.com/yutao"}],"changelog":[{"hash":"f5ab8c9d34991ec274f7f652439afe5b2afb6147","time":1681290319000,"email":"642231346@qq.com","author":"yutao","message":"modify"}]},"filePathRelative":"strong/66-6.tree.md"}');export{c as comp,r as data};
