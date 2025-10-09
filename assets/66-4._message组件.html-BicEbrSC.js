import{_ as n,c as e,a,o as i}from"./app-CD1YpnS1.js";const l={};function d(c,s){return i(),e("div",null,[...s[0]||(s[0]=[a(`<h2 id="message组件的调用方式" tabindex="-1"><a class="header-anchor" href="#message组件的调用方式"><span>Message组件的调用方式</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;template&gt;</span>
<span class="line">    &lt;button @click=&quot;showMessage&quot;&gt;点我啊&lt;/button&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line">&lt;script&gt;</span>
<span class="line">export default {</span>
<span class="line">    methods:{</span>
<span class="line">        showMessage(){</span>
<span class="line">            Message.info({ // 直接调用</span>
<span class="line">                content:&#39;hello 我帅不帅&#39;,</span>
<span class="line">                duration:3000</span>
<span class="line">            });</span>
<span class="line">            this.$message.info({ // 通过实例调用</span>
<span class="line">                content:&#39;hello 你很帅&#39;,</span>
<span class="line">                duration:3000</span>
<span class="line">            })</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="编写message组件" tabindex="-1"><a class="header-anchor" href="#编写message组件"><span>编写Message组件</span></a></h2><p>要考虑数据驱动视图，多次点击显示多个弹层,给每个层增加 id号,延迟时间和内容</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;template&gt;</span>
<span class="line">    &lt;div class=&quot;messages&quot;&gt;</span>
<span class="line">        &lt;!-- 显示在数组中的层 --&gt;</span>
<span class="line">        &lt;div v-for=&quot;message in messages&quot; :key=&quot;message.id&quot;&gt;</span>
<span class="line">            {{message.content}}</span>
<span class="line">        &lt;/div&gt;</span>
<span class="line">    &lt;/div&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line">&lt;script&gt;</span>
<span class="line">export default {</span>
<span class="line">    data(){</span>
<span class="line">        return {messages:[]}</span>
<span class="line">    },</span>
<span class="line">    mounted(){</span>
<span class="line">        // 给所有弹层增加唯一标示 方便弹层的卸载</span>
<span class="line">        this.id = 0;</span>
<span class="line">    },</span>
<span class="line">    methods:{</span>
<span class="line">        add(option){</span>
<span class="line">            let id = this.id++; // id号</span>
<span class="line">            let layer = {...option,id}</span>
<span class="line">            this.messages.push(layer); // 将层存储起来</span>
<span class="line">            layer.timer = setTimeout(()=&gt;{</span>
<span class="line">                this.remove(layer);</span>
<span class="line">            },option.duration)</span>
<span class="line">        },</span>
<span class="line">        remove(layer){</span>
<span class="line">            clearTimeout(layer.timer); // 清除定时器</span>
<span class="line">            // 移除层 </span>
<span class="line">            this.messages = this.messages.filter(message=&gt;layer.id !== message.id);</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">}   </span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="通过js文件控制显示message弹层" tabindex="-1"><a class="header-anchor" href="#通过js文件控制显示message弹层"><span>通过js文件控制显示Message弹层</span></a></h2><ul><li><p>步骤一:暴露调用方法</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">// 暴露 不同类型的弹层方法</span>
<span class="line">const Message = {</span>
<span class="line">  info(options){</span>
<span class="line">      // 调用增加弹层方法</span>
<span class="line">      getInstance(options).add(options);</span>
<span class="line">  },</span>
<span class="line">  warn(){},</span>
<span class="line">  danger(){},</span>
<span class="line">  success(){}</span>
<span class="line">}</span>
<span class="line">export {</span>
<span class="line">  Message</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>步骤二:生产实例</p></li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import Vue from &#39;vue&#39;;</span>
<span class="line">import MessageComponent from &#39;./Message.vue&#39;;</span>
<span class="line">let getInstance = () =&gt;{</span>
<span class="line">    let vm = new Vue({</span>
<span class="line">        render:h=&gt;h(MessageComponent)</span>
<span class="line">    }).$mount();</span>
<span class="line">    let messageComponent = vm.$children[0];</span>
<span class="line">    // 获取真实dom元素，将其挂在页面上</span>
<span class="line">    document.body.appendChild(vm.$el);</span>
<span class="line">    return {</span>
<span class="line">        add(options){ // 调用组件的add方法</span>
<span class="line">            messageComponent.add(options);</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line">const Message = {</span>
<span class="line">    info(options){</span>
<span class="line">        // 调用增加弹层方法</span>
<span class="line">        getInstance().add(options);</span>
<span class="line">    },</span>
<span class="line">    warn(){},</span>
<span class="line">    danger(){},</span>
<span class="line">    success(){}</span>
<span class="line">}</span>
<span class="line">// 暴露 不同类型的弹层方法</span>
<span class="line">export {</span>
<span class="line">    Message</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>步骤三: 实现单例</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">let instance;</span>
<span class="line">let inst = () =&gt; {</span>
<span class="line">    instance = instance || getInstance();</span>
<span class="line">    return instance;</span>
<span class="line">}</span>
<span class="line">const Message = {</span>
<span class="line">    info(options){</span>
<span class="line">        // 调用增加弹层方法</span>
<span class="line">        inst().add(options);</span>
<span class="line">    },</span>
<span class="line">    warn(){},</span>
<span class="line">    danger(){},</span>
<span class="line">    success(){}</span>
<span class="line">}</span>
<span class="line">// 暴露 不同类型的弹层方法</span>
<span class="line">export {</span>
<span class="line">    Message</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="封装插件" tabindex="-1"><a class="header-anchor" href="#封装插件"><span>封装插件</span></a></h2><p>install方法和use方法的应用</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">let _Vue;</span>
<span class="line">export default {</span>
<span class="line">    install(Vue,options){</span>
<span class="line">        if(!_Vue){</span>
<span class="line">            _Vue = Vue;</span>
<span class="line">            let $message = {}</span>
<span class="line">            Object.keys(Message).forEach(type =&gt; {</span>
<span class="line">                $message[type] = Message[type]</span>
<span class="line">            });</span>
<span class="line">            Vue.prototype.$message = $message</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line">// 组件中使用插件</span>
<span class="line">import {Message} from &#39;./components/Message&#39;;</span>
<span class="line">this.$message.info({</span>
<span class="line">        content:&#39;hello 你很帅&#39;,</span>
<span class="line">        duration:3000</span>
<span class="line">})</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="minx方法可以注入数据" tabindex="-1"><a class="header-anchor" href="#minx方法可以注入数据"><span>Minx方法可以注入数据</span></a></h2><p>给每个组件增加公用属性</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">Vue.mixin({</span>
<span class="line">    beforeCreate() {</span>
<span class="line">        if(this.$options.info){</span>
<span class="line">            // 把数据挂在自己的_info上</span>
<span class="line">            this._info = this.$options.info;</span>
<span class="line">        }else{</span>
<span class="line">            this._info = this.$parent &amp;&amp; this.$parent._info;</span>
<span class="line">        }</span>
<span class="line">    },</span>
<span class="line">})</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16)])])}const v=n(l,[["render",d]]),t=JSON.parse('{"path":"/strong/66-4._message%E7%BB%84%E4%BB%B6.html","title":"","lang":"en-US","frontmatter":{},"git":{"updatedTime":1681290319000,"contributors":[{"name":"yutao","username":"yutao","email":"642231346@qq.com","commits":1,"url":"https://github.com/yutao"}],"changelog":[{"hash":"f5ab8c9d34991ec274f7f652439afe5b2afb6147","time":1681290319000,"email":"642231346@qq.com","author":"yutao","message":"modify"}]},"filePathRelative":"strong/66-4.$message组件.md"}');export{v as comp,t as data};
