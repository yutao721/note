import{_ as n,c as l,a,o as e}from"./app-CD1YpnS1.js";const i={};function t(d,s){return e(),l("div",null,[...s[0]||(s[0]=[a(`<h2 id="组件的声明" tabindex="-1"><a class="header-anchor" href="#组件的声明"><span>组件的声明</span></a></h2><ul><li><p>全局组件</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;my-button&gt;&lt;/my-button&gt;  </span>
<span class="line">Vue.component(&#39;my-button&#39;,{</span>
<span class="line">  template:&#39;&lt;button&gt;点我啊&lt;/button&gt;&#39;</span>
<span class="line">})</span>
<span class="line">let vm = new Vue({</span>
<span class="line">   el:&#39;</span>
<span class="line">})</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>局部组件</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;my-button&gt;&lt;/my-button&gt;</span>
<span class="line">let vm = new Vue({</span>
<span class="line">   el:&#39;</span>
<span class="line">  components:{</span>
<span class="line">      &#39;MyButton&#39;:{</span>
<span class="line">          template:&#39;&lt;button&gt;按钮&lt;/button&gt;&#39;</span>
<span class="line">      }</span>
<span class="line">  }</span>
<span class="line">});</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>HTML不支持自闭合的自定义元素，在DOM模板里永远不要使用自闭和组件,在HTML中也不支持MyButton的写法，所以组件调用全部使用短横线连接的方式！</p></li></ul><p>[https://www.w3.org/TR/html/syntax.html#void-elements](https://www.w3.org/TR/html/syntax.html</p><h2 id="组件的数据" tabindex="-1"><a class="header-anchor" href="#组件的数据"><span>组件的数据</span></a></h2><p>在组件中的数据必须是函数的形式</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&#39;MyButton&#39;:{</span>
<span class="line">    data(){</span>
<span class="line">        return {content:&#39;按钮&#39;}</span>
<span class="line">    },</span>
<span class="line">    template:&#39;&lt;button&gt;{{content}}&lt;/button&gt;&#39;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="组件的属性应用及校验" tabindex="-1"><a class="header-anchor" href="#组件的属性应用及校验"><span>组件的属性应用及校验</span></a></h2><h3 id="属性应用" tabindex="-1"><a class="header-anchor" href="#属性应用"><span>属性应用</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;my-button button-content=&quot;按钮&quot;&gt;&lt;/my-button&gt;</span>
<span class="line">components:{</span>
<span class="line">    &#39;MyButton&#39;:{</span>
<span class="line">        props:[&#39;buttonContent&#39;],</span>
<span class="line">        template:&#39;&lt;button&gt;{{buttonContent}}&lt;/button&gt;&#39;</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>属性在组件标签上需要使用短横线命名法，在组件中声明需要采用驼峰命名法</p><h3 id="属性校验" tabindex="-1"><a class="header-anchor" href="#属性校验"><span>属性校验</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;my-button button-content=&quot;按钮&quot; :number=&quot;&#39;1&#39;&quot;&gt;&lt;/my-button&gt;</span>
<span class="line">components:{</span>
<span class="line">    &#39;MyButton&#39;:{</span>
<span class="line">        props:{</span>
<span class="line">            buttonContent:String,</span>
<span class="line">            arr:{</span>
<span class="line">                type:Array,</span>
<span class="line">                default:()=&gt;([])</span>
<span class="line">            },</span>
<span class="line">            number:{</span>
<span class="line">                type:Number,</span>
<span class="line">                validator:(value)=&gt;{</span>
<span class="line">                    return typeof value == &#39;number&#39;</span>
<span class="line">                }</span>
<span class="line">            },</span>
<span class="line"></span>
<span class="line">        },</span>
<span class="line">        template:&#39;&lt;button&gt;{{buttonContent}} {{arr}} {{number}}&lt;/button&gt;&#39;</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="批量传入数据" tabindex="-1"><a class="header-anchor" href="#批量传入数据"><span>批量传入数据</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;my-button v-bind=&quot;info&quot;&gt;&lt;/my-button&gt;</span>
<span class="line">let vm = new Vue({</span>
<span class="line">     el:&#39;</span>
<span class="line">    data:{</span>
<span class="line">        info:{name:&#39;姜文&#39;,age:18}</span>
<span class="line">    },</span>
<span class="line">    components:{</span>
<span class="line">        &#39;MyButton&#39;:{</span>
<span class="line">            props:[&#39;name&#39;,&#39;age&#39;],</span>
<span class="line">            inheritAttrs:false,</span>
<span class="line">            mounted(){</span>
<span class="line">                console.log(this.$attrs)</span>
<span class="line">            },</span>
<span class="line">            template:&#39;&lt;button&gt;{{name}} {{age}} &lt;/button&gt;&#39;</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">});</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="事件应用" tabindex="-1"><a class="header-anchor" href="#事件应用"><span>事件应用</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;!-- 给组件绑定方法，在内部触发绑定的方法 --&gt;</span>
<span class="line">&lt;my-button @click=&quot;change&quot; msg=&quot;按钮&quot;&gt;&lt;/my-button&gt;</span>
<span class="line">let vm = new Vue({</span>
<span class="line">     el:&#39;</span>
<span class="line">    methods:{</span>
<span class="line">        change(){ alert(&#39;hello&#39;); }</span>
<span class="line">    },</span>
<span class="line">    components:{</span>
<span class="line">        &#39;MyButton&#39;:{</span>
<span class="line">            props:[&#39;msg&#39;],</span>
<span class="line">            template:\`&lt;div&gt;</span>
<span class="line">                &lt;button @click=&quot;this.$listeners.click&quot;&gt;{{msg}}&lt;/button&gt;</span>
<span class="line">                &lt;button v-on=&quot;this.$listeners&quot;&gt;{{msg}}&lt;/button&gt;</span>
<span class="line">                &lt;button @click=&quot;$emit(&#39;click&#39;)&quot;&gt;&lt;/button&gt;</span>
<span class="line">            &lt;/div&gt;\`</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">});</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在组件的根元素上直接监听一个原生事件</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;my-button @click.native=&quot;change&quot;&gt;&lt;/my-button&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="parent-child" tabindex="-1"><a class="header-anchor" href="#parent-child"><span>\\$parent &amp; \\$child</span></a></h2><p>实现收缩面板功能</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;collapse&gt;</span>
<span class="line">    &lt;collapse-item title=&quot;react&quot;&gt;内容1&lt;/collapse-item&gt;</span>
<span class="line">    &lt;collapse-item title=&quot;vue&quot;&gt;内容2&lt;/collapse-item&gt;</span>
<span class="line">    &lt;collapse-item title=&quot;node&quot;&gt;内容3&lt;/collapse-item&gt;</span>
<span class="line">&lt;/collapse&gt;  </span>
<span class="line">Vue.component(&#39;Collapse&#39;,{</span>
<span class="line">    methods:{</span>
<span class="line">        open(id){</span>
<span class="line">            this.$children.forEach(child =&gt; {</span>
<span class="line">                if(child._uid != id){</span>
<span class="line">                    child.show = false;</span>
<span class="line">                }</span>
<span class="line">            });</span>
<span class="line">        }</span>
<span class="line">    },</span>
<span class="line">    template:\`&lt;div class=&quot;wrap&quot;&gt;</span>
<span class="line">        &lt;slot&gt;&lt;/slot&gt;</span>
<span class="line">    &lt;/div&gt;\`</span>
<span class="line">});</span>
<span class="line">Vue.component(&#39;CollapseItem&#39;,{</span>
<span class="line">    props:[&#39;title&#39;],</span>
<span class="line">    data(){</span>
<span class="line">        return {show:true}</span>
<span class="line">    },</span>
<span class="line">    methods:{</span>
<span class="line">        change(){</span>
<span class="line">            this.$parent.open(this._uid);</span>
<span class="line">            this.show =!this.show;</span>
<span class="line">        }</span>
<span class="line">    },  </span>
<span class="line">    template:\`&lt;div class=&quot;collapse-item&quot; @click=&quot;change&quot;&gt;</span>
<span class="line">        &lt;div class=&quot;title&quot;&gt;{{title}}&lt;/div&gt;</span>
<span class="line">        &lt;div v-show=&quot;show&quot;&gt;</span>
<span class="line">            &lt;slot&gt;&lt;/slot&gt;    </span>
<span class="line">        &lt;/div&gt;</span>
<span class="line">    &lt;/div&gt;\`</span>
<span class="line">});</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="v-slot应用" tabindex="-1"><a class="header-anchor" href="#v-slot应用"><span>v-slot应用</span></a></h2><ul><li>v-slot:可以简写成</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;List&gt;</span>
<span class="line">  &lt;template v-slot:banana&gt;🍌&lt;/template&gt;</span>
<span class="line">  &lt;template v-slot:apple&gt;🍎&lt;/template&gt;</span>
<span class="line">      🍊</span>
<span class="line">&lt;/List&gt;  </span>
<span class="line">list:{</span>
<span class="line">  template:\`</span>
<span class="line">      &lt;ul&gt;</span>
<span class="line">          &lt;li&gt;&lt;slot&gt;&lt;/slot&gt;&lt;/li&gt;</span>
<span class="line">          &lt;li&gt;&lt;slot name=&quot;banner&quot;&gt;&lt;/slot&gt;&lt;/li&gt;    </span>
<span class="line">          &lt;li&gt;&lt;slot name=&quot;apple&quot;&gt;&lt;/slot&gt;&lt;/li&gt;   </span>
<span class="line">      &lt;/ul&gt;</span>
<span class="line">  \`</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>作用域插槽</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line"> &lt;List </span>
<span class="line">  {{val}}</span>
<span class="line">&lt;/List&gt; </span>
<span class="line">list:{</span>
<span class="line">  data(){</span>
<span class="line">      return {arr:[1,2,3]}</span>
<span class="line">  },</span>
<span class="line">  template:\`</span>
<span class="line">      &lt;ul&gt;</span>
<span class="line">          &lt;li v-for=&quot;a in arr&quot; :key=&quot;a&quot;&gt;</span>
<span class="line">              &lt;slot :val=&quot;a&quot;&gt;{{a}}&lt;/slot&gt;</span>
<span class="line">          &lt;/li&gt;</span>
<span class="line">      &lt;/ul&gt;</span>
<span class="line">  \`</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="provide-inject" tabindex="-1"><a class="header-anchor" href="#provide-inject"><span>Provide &amp; inject</span></a></h2><p>跨组件数据传递，主要为高阶插件/组件库提供用例</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">provide:{ name:&#39;zf&#39; },</span>
<span class="line">components:{</span>
<span class="line">    list:{</span>
<span class="line">        inject:[&#39;name&#39;],</span>
<span class="line">        template:\`&lt;div&gt;{{name}}&lt;/div&gt;\`</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="父子组件数据同步" tabindex="-1"><a class="header-anchor" href="#父子组件数据同步"><span>父子组件数据同步</span></a></h2><p>.sync 和 v-model的使用</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;div id=&quot;app&quot;&gt;</span>
<span class="line">        {{msg}}</span>
<span class="line">        &lt;tab :msg=&quot;msg&quot; @update:msg=&quot;change&quot;&gt;&lt;/tab&gt;</span>
<span class="line">        &lt;tab :msg.sync=&quot;msg&quot;&gt;&lt;/tab&gt;</span>
<span class="line">        &lt;tab v-model=&quot;msg&quot;&gt;&lt;/tab&gt;</span>
<span class="line">&lt;/div&gt;</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">let vm = new Vue({</span>
<span class="line">     el:&#39;</span>
<span class="line">    data:{</span>
<span class="line">        msg:&#39;hello&#39;</span>
<span class="line">    },</span>
<span class="line">    methods:{</span>
<span class="line">        change(value){</span>
<span class="line">            this.msg = value</span>
<span class="line">        }</span>
<span class="line">    },</span>
<span class="line">    components:{</span>
<span class="line">        tab:{</span>
<span class="line">            props:[&#39;msg&#39;],</span>
<span class="line">            methods:{</span>
<span class="line">                change(){</span>
<span class="line">                    this.$emit(&#39;update:msg&#39;,&#39;world&#39;)</span>
<span class="line">                    this.$emit(&#39;input&#39;,&#39;world&#39;);</span>
<span class="line">                }</span>
<span class="line">            },</span>
<span class="line">            template:\`&lt;div&gt;</span>
<span class="line">                {{msg}} &lt;button @click=&quot;change&quot;&gt;切换&lt;/button&gt;</span>
<span class="line">            &lt;/div&gt;\`</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">})</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ref-特性" tabindex="-1"><a class="header-anchor" href="#ref-特性"><span>ref 特性</span></a></h2><ul><li>放在dom上表示获取当前dom元素,放到组件上表示获取当前组件实例,在v-for中获取的是集合</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">// 在组件中可以获取组件实例</span>
<span class="line">&lt;tab :msg=&quot;msg&quot; @update:msg=&quot;change&quot; ref=&quot;ele&quot;&gt;&lt;/tab&gt;</span>
<span class="line">this.$refs.ele.change()</span>
<span class="line"></span>
<span class="line">// 放在dom上表示获取当前dom元素</span>
<span class="line">&lt;div ref=&quot;ele&quot;&gt;&lt;/div&gt;</span>
<span class="line">this.$refs.ele.style.border=&quot;1px solid red&quot;</span>
<span class="line"></span>
<span class="line">// 在v-for中获取的是集合</span>
<span class="line">&lt;template v-for=&quot;a in 3&quot;&gt;</span>
<span class="line">    &lt;tab :msg=&quot;msg&quot; @update:msg=&quot;change&quot; ref=&quot;ele&quot; :key=&quot;a&quot;&gt;&lt;/tab&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line">console.log(this.$refs.ele.length)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="组件间通信" tabindex="-1"><a class="header-anchor" href="#组件间通信"><span>组件间通信</span></a></h3><ul><li><ol><li>props和$emit 父组件向子组件传递数据是通过prop传递的，子组件传递数据给父组件是通过$emit触发事件来做到的</li></ol></li><li><ol start="2"><li>$attrs和$listeners A-&gt;B-&gt;C。Vue 2.4 开始提供了$attrs和$listeners来解决这个问题</li></ol></li><li><ol start="3"><li>$parent,$children \b智能组件木偶组件</li></ol></li><li><ol start="4"><li>$refs 获取实例</li></ol></li><li><ol start="5"><li>父组件中通过provider来提供变量，然后在子组件中通过inject来注入变量。</li></ol></li><li><ol start="6"><li>envetBus 平级组件数据传递 这种情况下可以使用中央事件总线的方式</li></ol></li><li><ol start="7"><li>vuex状态管理</li></ol></li></ul><h2 id="异步组件" tabindex="-1"><a class="header-anchor" href="#异步组件"><span>异步组件</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">Vue.component(&#39;async&#39;, function (resolve, reject) {</span>
<span class="line">    setTimeout(function () {</span>
<span class="line">        resolve({</span>
<span class="line">            template: &#39;&lt;div&gt;异步组件&lt;/div&gt;&#39;</span>
<span class="line">        })</span>
<span class="line">    }, 1000);</span>
<span class="line">});</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在后期我们一般配合webpack的import语法使用</p><h2 id="递归组件" tabindex="-1"><a class="header-anchor" href="#递归组件"><span>递归组件</span></a></h2><ul><li>name属性 (后期实现菜单组件)</li></ul>`,41)])])}const p=n(i,[["render",t]]),v=JSON.parse('{"path":"/strong/66-2.vue-component.html","title":"","lang":"en-US","frontmatter":{},"git":{"updatedTime":1681290319000,"contributors":[{"name":"yutao","username":"yutao","email":"642231346@qq.com","commits":1,"url":"https://github.com/yutao"}],"changelog":[{"hash":"f5ab8c9d34991ec274f7f652439afe5b2afb6147","time":1681290319000,"email":"642231346@qq.com","author":"yutao","message":"modify"}]},"filePathRelative":"strong/66-2.vue-component.md"}');export{p as comp,v as data};
