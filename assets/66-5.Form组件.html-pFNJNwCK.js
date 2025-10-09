import{_ as n,c as a,a as l,o as e}from"./app-CD1YpnS1.js";const i={};function d(t,s){return e(),a("div",null,[...s[0]||(s[0]=[l(`<h2 id="实现表单组件" tabindex="-1"><a class="header-anchor" href="#实现表单组件"><span>实现表单组件</span></a></h2><ul><li>组件结构目录<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">├── App.vue</span>
<span class="line">├── components</span>
<span class="line">│   ├── Form.vue</span>
<span class="line">│   ├── FormItem.vue</span>
<span class="line">│   └── Input.vue</span>
<span class="line">└── package.json</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="表单组件的使用" tabindex="-1"><a class="header-anchor" href="#表单组件的使用"><span>表单组件的使用</span></a></h2><ul><li>Form 提供组件的数据</li><li>FormItem 实现表单校验功能</li><li>Input 输入内容时让FormItem发生校验</li></ul><h2 id="使用组件的方式" tabindex="-1"><a class="header-anchor" href="#使用组件的方式"><span>使用组件的方式</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;template&gt;</span>
<span class="line">    &lt;el-form :model=&quot;form&quot; :rules=&quot;rules&quot;&gt;</span>
<span class="line">        &lt;el-form-item label=&quot;用户名&quot; prop=&quot;username&quot;&gt;</span>
<span class="line">            &lt;el-input v-model=&quot;form.username&quot; &gt;&lt;/el-input&gt;</span>
<span class="line">        &lt;/el-form-item&gt;</span>
<span class="line">        &lt;el-form-item label=&quot;密码&quot; prop=&quot;password&quot;&gt;</span>
<span class="line">            &lt;el-input v-model=&quot;form.password&quot; &gt;&lt;/el-input&gt;</span>
<span class="line">        &lt;/el-form-item&gt;</span>
<span class="line">        &lt;el-form-item&gt;</span>
<span class="line">        &lt;el-form-item&gt;</span>
<span class="line">            &lt;button&gt;确认提交&lt;/button&gt;</span>
<span class="line">        &lt;/el-form-item&gt;</span>
<span class="line">    &lt;/el-form&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line">&lt;script&gt;</span>
<span class="line">import Form from &#39;./components/Form&#39;;</span>
<span class="line">import FormItem from &#39;./components/FormItem&#39;;</span>
<span class="line">import Input from &#39;./components/Input.vue&#39;;</span>
<span class="line">export default {</span>
<span class="line">    components:{</span>
<span class="line">        &#39;el-form&#39;:Form,</span>
<span class="line">        &#39;el-form-item&#39;:FormItem,</span>
<span class="line">        &#39;el-input&#39;:Input</span>
<span class="line">    },</span>
<span class="line">    data(){</span>
<span class="line">        return {</span>
<span class="line">            form:{</span>
<span class="line">                username:&#39;&#39;,</span>
<span class="line">                password:&#39;&#39;</span>
<span class="line">            },</span>
<span class="line">            rules:{</span>
<span class="line">                username:[</span>
<span class="line">                    {required:true,message:&#39;请输入用户名&#39;}</span>
<span class="line">                ],</span>
<span class="line">                password:[</span>
<span class="line">                    {required:true,message:&#39;请输入密码&#39;}</span>
<span class="line">                ]</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="form组件的基本结构" tabindex="-1"><a class="header-anchor" href="#form组件的基本结构"><span>Form组件的基本结构</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;template&gt;</span>
<span class="line">    &lt;form onsubmit=&quot;return false&quot;&gt;</span>
<span class="line">        &lt;slot&gt;&lt;/slot&gt;</span>
<span class="line">    &lt;/form&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line">&lt;script&gt;</span>
<span class="line">export default {</span>
<span class="line">    props:{</span>
<span class="line">        model:{</span>
<span class="line">            type:Object</span>
<span class="line">        },</span>
<span class="line">        rules:{</span>
<span class="line">            type:Object</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="formitem组件结构" tabindex="-1"><a class="header-anchor" href="#formitem组件结构"><span>FormItem组件结构</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;template&gt;</span>
<span class="line">    &lt;div&gt;</span>
<span class="line">        &lt;label v-if=&quot;label&quot;&gt;{{label}}&lt;/label&gt;</span>
<span class="line">        &lt;slot&gt;&lt;/slot&gt;</span>
<span class="line">        &lt;div&gt;校验文字&lt;/div&gt;</span>
<span class="line">    &lt;/div&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line">&lt;script&gt;</span>
<span class="line">export default {</span>
<span class="line">    props:{</span>
<span class="line">        label:String,</span>
<span class="line">        prop:String</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="input组件结构" tabindex="-1"><a class="header-anchor" href="#input组件结构"><span>Input组件结构</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;template&gt;</span>
<span class="line">    &lt;input type=&quot;text&quot; :value=&quot;inputValue&quot;&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line">&lt;script&gt;</span>
<span class="line">export default {</span>
<span class="line">    props:{</span>
<span class="line">        value:String</span>
<span class="line">    },</span>
<span class="line">    data(){</span>
<span class="line">        return {inputValue:this.value}</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="实现组件间的数据传递" tabindex="-1"><a class="header-anchor" href="#实现组件间的数据传递"><span>实现组件间的数据传递</span></a></h2><ul><li>为了在formItem中可以拿到form组件中的数据<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">provide(){</span>
<span class="line">  return {</span>
<span class="line">      form:this</span>
<span class="line">  }</span>
<span class="line">},</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p>我们在form组件中直接将当前实例暴露出去</p><ul><li>为了能实现input组件和formItem间的通信<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import Vue from &#39;vue&#39;;</span>
<span class="line">Vue.prototype.$bus = new Vue();</span>
<span class="line">export default {</span>
<span class="line">  props:{</span>
<span class="line">      label:String,</span>
<span class="line">      prop:String</span>
<span class="line">  },</span>
<span class="line">  mounted(){</span>
<span class="line">      this.$bus.$on(&#39;input&#39;,(value)=&gt;{</span>
<span class="line">          console.log(value)</span>
<span class="line">      });</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p>我们在formItem组件中，通过eventsBus订阅input事件</p><ul><li><p>在input组件中监听输入事件进行数据的发射</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;input type=&quot;text&quot; :value=&quot;inputValue&quot; @input=&quot;handleInput&quot;&gt;</span>
<span class="line">handleInput(e){</span>
<span class="line">  // 更新数据</span>
<span class="line">  this.inputValue = e.target.value;</span>
<span class="line">  this.$bus.$emit(&#39;input&#39;,{</span>
<span class="line">      id:this.$parent &amp;&amp; this.$parent._uid,// 为了标识是哪个输入框</span>
<span class="line">      value:this.inputValue</span>
<span class="line">  }); // 发射输入事件</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>在formItem中进行数据校验</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;template&gt;</span>
<span class="line">  &lt;div&gt;</span>
<span class="line">      &lt;label v-if=&quot;label&quot;&gt;{{label}}&lt;/label&gt;</span>
<span class="line">      &lt;slot&gt;&lt;/slot&gt;</span>
<span class="line">      &lt;!-- 有错误 显示错误提示信息 --&gt;</span>
<span class="line">      &lt;div v-if=&quot;validateStatus === &#39;error&#39;&quot;&gt;</span>
<span class="line">          {{validateContent}}</span>
<span class="line">      &lt;/div&gt;</span>
<span class="line">  &lt;/div&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line">&lt;script&gt;</span>
<span class="line">import Vue from &#39;vue&#39;;</span>
<span class="line">Vue.prototype.$bus = new Vue();</span>
<span class="line">export default {</span>
<span class="line">  props:{</span>
<span class="line">      label:String,</span>
<span class="line">      prop:String</span>
<span class="line">  },</span>
<span class="line">  inject:[&#39;form&#39;], // 注入父级的实例</span>
<span class="line">  data(){ </span>
<span class="line">      return {</span>
<span class="line">          validateStatus:&#39;&#39;, // 当前表单是否通过校验</span>
<span class="line">          validateContent:&#39;&#39; // 当前校验后的信息</span>
<span class="line">      }</span>
<span class="line">  },  </span>
<span class="line">  methods:{</span>
<span class="line">      validate(value){</span>
<span class="line">         let rules = this.form.rules[this.prop]; // 获取当前对应的规则</span>
<span class="line">         rules.forEach(rule=&gt;{</span>
<span class="line">             // 如果必填 并且没有值，那就出错</span>
<span class="line">             if(rule.required &amp;&amp; !value){</span>
<span class="line">                 this.validateStatus = &#39;error&#39;;</span>
<span class="line">                 this.validateContent = rule.message</span>
<span class="line">             }else{</span>
<span class="line">                 this.validateStatus = &#39;&#39;;</span>
<span class="line">                 this.validateContent = &#39;&#39;;</span>
<span class="line">             }</span>
<span class="line">         })</span>
<span class="line">      }</span>
<span class="line">  },</span>
<span class="line">  mounted(){</span>
<span class="line">      this.$bus.$on(&#39;input&#39;,(data)=&gt;{</span>
<span class="line">         if(this._uid === data.id){ // 说明更改的是当前自己的输入框</span>
<span class="line">              this.validate(data.value);</span>
<span class="line">         }</span>
<span class="line">      });</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p>到目前为止基本的校验功能已经实现啦</p><h2 id="当点击按钮时校验当前表单是否验证成功" tabindex="-1"><a class="header-anchor" href="#当点击按钮时校验当前表单是否验证成功"><span>当点击按钮时校验当前表单是否验证成功</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;el-form :model=&quot;form&quot; :rules=&quot;rules&quot; ref=&quot;form&quot;&gt;</span>
<span class="line">&lt;button @click=&quot;validate&quot;&gt;确认提交&lt;/button&gt;</span>
<span class="line">validate(){ // form组件中校验是通过</span>
<span class="line">    this.$refs.form.validate((valid)=&gt;{</span>
<span class="line">        if(valid){</span>
<span class="line">            alert(&#39;校验通过&#39;)</span>
<span class="line">        }else{</span>
<span class="line">            alert(&#39;校验不通过&#39;)</span>
<span class="line">        }</span>
<span class="line">    });</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">// 在form组件中检查所有的formItem是否全部通过校验</span>
<span class="line">validate(cb){</span>
<span class="line">    cb(this.$children.every(child=&gt;child.validateStatus!=&#39;error&#39;))</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21)])])}const c=n(i,[["render",d]]),r=JSON.parse('{"path":"/strong/66-5.Form%E7%BB%84%E4%BB%B6.html","title":"","lang":"en-US","frontmatter":{},"git":{"updatedTime":1681290319000,"contributors":[{"name":"yutao","username":"yutao","email":"642231346@qq.com","commits":1,"url":"https://github.com/yutao"}],"changelog":[{"hash":"f5ab8c9d34991ec274f7f652439afe5b2afb6147","time":1681290319000,"email":"642231346@qq.com","author":"yutao","message":"modify"}]},"filePathRelative":"strong/66-5.Form组件.md"}');export{c as comp,r as data};
