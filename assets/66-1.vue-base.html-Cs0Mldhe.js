import{_ as n,c as e,a,o as l}from"./app-CD1YpnS1.js";const i={};function t(d,s){return l(),e("div",null,[...s[0]||(s[0]=[a(`<h2 id="什么是vue" tabindex="-1"><a class="header-anchor" href="#什么是vue"><span>什么是vue?</span></a></h2><p>Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。<br> 特点: 易用，灵活，高效 渐进式框架</p><p><img src="https://www.fullstackjavascript.cn/vue.png" alt=""></p><p>逐一递增 vue + components + vue-router + vuex + vue-cli</p><h2 id="什么是库-什么是框架" tabindex="-1"><a class="header-anchor" href="#什么是库-什么是框架"><span>什么是库，什么是框架?</span></a></h2><ul><li>库是将代码集合成一个产品,库是我们调用库中的方法实现自己的功能。</li><li>框架则是为解决一类问题而开发的产品,框架是我们在指定的位置编写好代码，框架帮我们调用。</li></ul><p>框架是库的升级版</p><h2 id="初始使用" tabindex="-1"><a class="header-anchor" href="#初始使用"><span>初始使用</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">new Vue({</span>
<span class="line">     el:&#39;</span>
<span class="line">    template:&#39;&lt;div&gt;我是姜文～～&lt;/div&gt;&#39;, // 优先使用template</span>
<span class="line">    data:{}</span>
<span class="line">});</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mvc-mvvm" tabindex="-1"><a class="header-anchor" href="#mvc-mvvm"><span>mvc &amp;&amp; mvvm</span></a></h2><p><img src="https://www.fullstackjavascript.cn/mvc.png" alt=""> <img src="https://www.fullstackjavascript.cn/mvvm.png" alt=""></p><p>在传统的mvc中除了model和view以外的逻辑都放在了controller中，导致controller逻辑复杂难以维护,在mvvm中view和model没有直接的关系，全部通过viewModel进行交互</p><h2 id="声明式和命令式" tabindex="-1"><a class="header-anchor" href="#声明式和命令式"><span>声明式和命令式</span></a></h2><ul><li>自己写for循环就是命令式 (命令其按照自己的方式得到结果)</li><li>声明式就是利用数组的方法forEach (我们想要的是循环，内部帮我们去做)</li></ul><h2 id="模板语法-mustache" tabindex="-1"><a class="header-anchor" href="#模板语法-mustache"><span>模板语法 mustache</span></a></h2><p>允许开发者声明式地将 DOM 绑定至底层 Vue 实例的数据。在使用数据前需要先声明</p><ul><li>编写三元表达式</li><li>获取返回值</li><li>JavaScript 表达式<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;div id=&quot;app&quot;&gt;</span>
<span class="line">  {{ 1+1 }}</span>
<span class="line">  {{ msg == &#39;hello&#39;?&#39;yes&#39;:&#39;no&#39; }}</span>
<span class="line">  {{ {name:1} }}</span>
<span class="line">&lt;/div&gt;</span>
<span class="line">&lt;script src=&quot;./node_modules/vue/dist/vue.js&quot;&gt;&lt;/script&gt;</span>
<span class="line">&lt;script&gt;</span>
<span class="line">  let vm = new Vue({</span>
<span class="line">       el:&#39;</span>
<span class="line">      data:{</span>
<span class="line">          msg:&#39;hello&#39;</span>
<span class="line">      }</span>
<span class="line">  })</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="观察数据变化" tabindex="-1"><a class="header-anchor" href="#观察数据变化"><span>观察数据变化</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">function notify(){</span>
<span class="line">    console.log(&#39;视图更新&#39;)</span>
<span class="line">}</span>
<span class="line">let data = {</span>
<span class="line">    name:&#39;jw&#39;,</span>
<span class="line">    age:18,</span>
<span class="line">    arr:[]</span>
<span class="line">}</span>
<span class="line">// 重写数组的方法</span>
<span class="line">let oldProtoMehtods = Array.prototype;</span>
<span class="line">let proto = Object.create(oldProtoMehtods);</span>
<span class="line">[&#39;push&#39;,&#39;pop&#39;,&#39;shift&#39;,&#39;unshift&#39;].forEach(method=&gt;{</span>
<span class="line">    proto[method] = function(){</span>
<span class="line">        notify();</span>
<span class="line">        oldProtoMehtods[method].call(this,...arguments)</span>
<span class="line">    }</span>
<span class="line">})</span>
<span class="line">function observer(obj){</span>
<span class="line">    if(Array.isArray(obj)){</span>
<span class="line">        obj.__proto__ = proto</span>
<span class="line">        return;</span>
<span class="line">    }</span>
<span class="line">    if(typeof obj === &#39;object&#39;){</span>
<span class="line">        for(let key in obj){</span>
<span class="line">            defineReactive(obj,key,obj[key]);</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line">function defineReactive(obj,key,value){</span>
<span class="line">    observer(value); // 再一次循环value</span>
<span class="line">    Object.defineProperty(obj,key,{ // 不支持数组</span>
<span class="line">        get(){</span>
<span class="line">            return value;</span>
<span class="line">        },</span>
<span class="line">        set(val){</span>
<span class="line">            notify();</span>
<span class="line">            observer(val);</span>
<span class="line">            value = val;</span>
<span class="line">        }</span>
<span class="line">    });</span>
<span class="line">}</span>
<span class="line">observer(data);</span>
<span class="line">data.arr.push(1);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用proxy实现响应式变化" tabindex="-1"><a class="header-anchor" href="#使用proxy实现响应式变化"><span>使用proxy实现响应式变化</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">let obj = {</span>
<span class="line">    name:{name:&#39;jw&#39;},</span>
<span class="line">    arr:[&#39;吃&#39;,&#39;喝&#39;,&#39;玩&#39;]</span>
<span class="line">}</span>
<span class="line">let handler = {</span>
<span class="line">    get(target,key,receiver){</span>
<span class="line">        if(typeof target[key] === &#39;object&#39; &amp;&amp;  target[key] !== null){</span>
<span class="line">            return new Proxy(target[key],handler);</span>
<span class="line">        }</span>
<span class="line">        return Reflect.get(target,key,receiver);</span>
<span class="line">    },</span>
<span class="line">    set(target,key,value,receiver){</span>
<span class="line">        if(key === &#39;length&#39;) return true;</span>
<span class="line">        console.log(&#39;update&#39;)</span>
<span class="line">        return Reflect.set(target,key,value,receiver);</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line">let proxy = new Proxy(obj,handler);</span>
<span class="line">proxy.name.name = &#39;zf&#39;;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="响应式变化" tabindex="-1"><a class="header-anchor" href="#响应式变化"><span>响应式变化</span></a></h2><ul><li><p>数组的变异方法(不能通过通过长度，索引改变数组)</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">  &lt;div id=&quot;app&quot;&gt;</span>
<span class="line">      {{hobbies}}</span>
<span class="line">  &lt;/div&gt;</span>
<span class="line">  &lt;script src=&quot;node_modules/vue/dist/vue.js&quot;&gt;&lt;/script&gt;</span>
<span class="line">  &lt;script&gt;</span>
<span class="line">      let vm = new Vue({</span>
<span class="line">           el:&#39;</span>
<span class="line">          data:{</span>
<span class="line">              hobbies:[&#39;洗澡&#39;,&#39;吃饭&#39;,&#39;睡觉&#39;]</span>
<span class="line">          }</span>
<span class="line">      });</span>
<span class="line">      vm.hobbies[0] = &#39;喝水&#39;;// 数据变化视图不刷新</span>
<span class="line">      vm.hobbies.length--;// 数据变化视图不会刷新</span>
<span class="line">  &lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">  vm.hobbies = [&#39;喝水&#39;]; // 替换的方式</span>
<span class="line">  vm.hobbies.push(&#39;吃饭&#39;); // push slice pop ...变异方法</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>不能给对象新增属性</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">  &lt;div id=&quot;app&quot;&gt;</span>
<span class="line">  {{state.a}}</span>
<span class="line">  &lt;/div&gt;</span>
<span class="line">  &lt;script src=&quot;node_modules/vue/dist/vue.js&quot;&gt;&lt;/script&gt;</span>
<span class="line">  &lt;script&gt;</span>
<span class="line">      let vm = new Vue({</span>
<span class="line">           el:&#39;</span>
<span class="line">          data:{</span>
<span class="line">              state:{count:0}</span>
<span class="line">          }</span>
<span class="line">      });</span>
<span class="line">      //vm.state.a = 100; // 新增熟悉不会响应到视图上</span>
<span class="line">  &lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>使用vm.$set方法强制添加响应式数据</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">  function $set(data,key,val){</span>
<span class="line">  if(Array.isArray(data)){</span>
<span class="line">      return data.splice(key,1,val);</span>
<span class="line">  }</span>
<span class="line">  defineReactive(data,key,val);</span>
<span class="line">  }</span>
<span class="line">  $set(data.arr,0,1);</span>
<span class="line"></span>
<span class="line">  vm.$set(vm.state,&#39;a&#39;,&#39;100&#39;);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="vue实例上常见属性和方法" tabindex="-1"><a class="header-anchor" href="#vue实例上常见属性和方法"><span>vue实例上常见属性和方法</span></a></h2><ul><li><p>vm.$set();</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">  vm.$set(vm.state,&#39;a&#39;,&#39;100&#39;);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>vm.$watch();</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">  vm.$watch(&#39;state.count&#39;,function(newValue,oldValue){</span>
<span class="line">      console.log(newValue,oldValue);</span>
<span class="line">  });</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>vm.$mount();</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">  let vm = new Vue({</span>
<span class="line">      data:{state:{count:0}}</span>
<span class="line">  });</span>
<span class="line">   vm.$mount(&#39;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>vm.$nextTick();</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">  vm.state.count = 100; // 更高数据后会将更改的内容缓存起来</span>
<span class="line">  // 在下一个事件循环tick中 刷新队列</span>
<span class="line">  vm.$nextTick(function(){</span>
<span class="line">      console.log(vm.$el.innerHTML);</span>
<span class="line">  });</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>vm.$data</p></li><li><p>vm.$el</p></li></ul><h2 id="vue中的指令" tabindex="-1"><a class="header-anchor" href="#vue中的指令"><span>vue中的指令</span></a></h2><p>在vue中 指令 (Directives) 是带有 v- 前缀的特殊特性,主要的功能就是操作DOM</p><ul><li><p>v-once</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">  &lt;div v-once&gt;{{state.count}} &lt;/div&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>v-html （不要对用户输入使用v-html显示）</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">  &lt;div v-html=&quot;text&quot;&gt;&lt;/div&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>[https://developer.mozilla.org/zh-CN/docs/Web/API/Element/innerHTML#%E5%AE%89%E5%85%A8%E9%97%AE%E9%A2%98](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/innerHTML</p></li><li><p>v-text</p></li><li><p>v-if/v-else使用</p></li></ul><h2 id="v-for使用" tabindex="-1"><a class="header-anchor" href="#v-for使用"><span>v-for使用</span></a></h2><ul><li><p>v-for遍历数组</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">  fruits:[&#39;香蕉&#39;,&#39;苹果&#39;,&#39;桃子&#39;]</span>
<span class="line">  &lt;div v-for=&quot;(fruit,index) in fruits&quot; :key=&quot;index&quot;&gt;</span>
<span class="line">      {{fruit}}</span>
<span class="line">  &lt;/div&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>v-for遍历对象</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">  info:{name:&#39;jiang&#39;,location:&#39;回龙观&#39;,phone:18310349227}</span>
<span class="line">  &lt;div v-for=&quot;(item,key) in info&quot; :key=&quot;key&quot;&gt;</span>
<span class="line">      {{item}} {{key}}</span>
<span class="line">  &lt;/div&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>template的使用</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">  &lt;template v-for=&quot;(item,key) in fruits&quot;&gt;</span>
<span class="line">      &lt;p v-if=&quot;key%2&quot;&gt;hello&lt;/p&gt;</span>
<span class="line">      &lt;span v-else&gt;world&lt;/span&gt;</span>
<span class="line">  &lt;/template&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>key属性的应用</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">  &lt;div v-if=&quot;flag&quot;&gt;</span>
<span class="line">      &lt;span&gt;珠峰&lt;/span&gt;</span>
<span class="line">      &lt;input key=&quot;2&quot;/&gt;   </span>
<span class="line">  &lt;/div&gt;</span>
<span class="line">  &lt;div v-else&gt;</span>
<span class="line">      &lt;span&gt;架构&lt;/span&gt;</span>
<span class="line">      &lt;input key=&quot;1&quot;/&gt;  </span>
<span class="line">  &lt;/div&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>key尽量不要使用索引</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">   &lt;ul&gt;</span>
<span class="line">      &lt;li key=&quot;0&quot;&gt;🍌&lt;/li&gt;</span>
<span class="line">      &lt;li key=&quot;1&quot;&gt;🍎&lt;/li&gt;</span>
<span class="line">      &lt;li key=&quot;2&quot;&gt;🍊&lt;/l&gt;</span>
<span class="line">  &lt;/ul&gt;</span>
<span class="line">  &lt;ul&gt;</span>
<span class="line">      &lt;li key=&quot;0&quot;&gt;🍊&lt;/li&gt;</span>
<span class="line">      &lt;li key=&quot;1&quot;&gt;🍎&lt;/li&gt;</span>
<span class="line">      &lt;li key=&quot;2&quot;&gt;🍌&lt;/li&gt;</span>
<span class="line">  &lt;/ul&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="属性绑定-v-bind" tabindex="-1"><a class="header-anchor" href="#属性绑定-v-bind"><span>属性绑定 :（v-bind）</span></a></h2><p>Class 与 Style 绑定</p><ul><li><p>数组的绑定</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">      &lt;div :class=&quot;[&#39;apple&#39;,&#39;banana&#39;]&quot; &gt;&lt;/div&gt;</span>
<span class="line">      &lt;div :class=&quot;{banana:true}&quot;&gt;&lt;/div&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>对象类型的绑定</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">      &lt;div :class=&quot;[&#39;apple&#39;,&#39;banana&#39;]&quot; &gt;&lt;/div&gt;</span>
<span class="line">      &lt;div :class=&quot;{banana:true}&quot;&gt;&lt;/div&gt;</span>
<span class="line">      &lt;div :style=&quot;[{background:&#39;red&#39;},{color:&#39;red&#39;}]&quot;&gt;&lt;/div&gt;</span>
<span class="line">      &lt;div :style=&quot;{color:&#39;red&#39;}&quot;&gt;&lt;/div&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="绑定事件-v-on" tabindex="-1"><a class="header-anchor" href="#绑定事件-v-on"><span>绑定事件 @ （v-on）</span></a></h2><ul><li>事件的绑定 v-on绑定事件</li><li>事件修饰符 (.stop .prevent) .capture .self .once .passive</li></ul><h2 id="vue的双向绑定-v-model" tabindex="-1"><a class="header-anchor" href="#vue的双向绑定-v-model"><span>vue的双向绑定 (v-model)</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">    &lt;input type=&quot;text&quot; :value=&quot;value&quot; @input=&quot;input&quot;&gt;</span>
<span class="line">    &lt;input type=&quot;text&quot; v-model=&quot;value&quot;&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>input,textarea</p></li><li><p>select</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">  &lt;select v-model=&quot;select&quot;&gt;</span>
<span class="line">      &lt;option </span>
<span class="line">          v-for=&quot;fruit in fruits&quot;</span>
<span class="line">          :value=&quot;fruit&quot;&gt;</span>
<span class="line">              {{fruit}}</span>
<span class="line">      &lt;/option&gt;</span>
<span class="line">  &lt;/select&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>radio</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">  &lt;input type=&quot;radio&quot; v-model=&quot;value&quot;  value=&quot;男&quot;&gt;</span>
<span class="line">  &lt;input type=&quot;radio&quot; v-model=&quot;value&quot;  value=&quot;女&quot;&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>checkbox</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">  &lt;input type=&quot;checkbox&quot; v-model=&quot;checks&quot; value=&quot;游泳&quot; &gt;</span>
<span class="line">  &lt;input type=&quot;checkbox&quot; v-model=&quot;checks&quot; value=&quot;健身&quot;&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>修饰符应用 .number .lazy .trim</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">  &lt;input type=&quot;text&quot; v-model.number=&quot;value&quot;&gt;</span>
<span class="line">  &lt;input type=&quot;text&quot; v-model.trim=&quot;value&quot;&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="鼠标-键盘事件" tabindex="-1"><a class="header-anchor" href="#鼠标-键盘事件"><span>鼠标 键盘事件</span></a></h2><ul><li>按键、鼠标修饰符 Vue.config.keyCodes<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">Vue.config.keyCodes = {</span>
<span class="line">  &#39;f1&#39;:112</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="watch-computed" tabindex="-1"><a class="header-anchor" href="#watch-computed"><span>watch &amp; computed</span></a></h2><ul><li><p>计算属性和watch的区别 （异步）</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">  let vm = new Vue({</span>
<span class="line">       el:&#39;</span>
<span class="line">      data:{</span>
<span class="line">          firstName:&#39;姜&#39;,</span>
<span class="line">          lastName:&#39;文&#39;,</span>
<span class="line">          fullName:&#39;&#39;</span>
<span class="line">      },</span>
<span class="line">      mounted(){</span>
<span class="line">          this.getFullName();</span>
<span class="line">      },</span>
<span class="line">      methods:{</span>
<span class="line">          getFullName(){</span>
<span class="line">              this.fullName = this.firstName + this.lastName</span>
<span class="line">          }</span>
<span class="line">      },</span>
<span class="line">      watch:{</span>
<span class="line">          firstName(){</span>
<span class="line">              setTimeout(()=&gt;{</span>
<span class="line">                  this.getFullName();</span>
<span class="line">              },1000)</span>
<span class="line">          },</span>
<span class="line">          lastName(){</span>
<span class="line">                  this.getFullName();</span>
<span class="line">          }</span>
<span class="line">      }</span>
<span class="line">      // 计算属性不支持异步</span>
<span class="line">      // computed:{</span>
<span class="line">      //    fullName(){</span>
<span class="line">      //        return this.firstName + this.lastName;</span>
<span class="line">      //    }</span>
<span class="line">      // }</span>
<span class="line">  });</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>计算属性和 method的区别 （缓存）</p></li></ul><h2 id="条件渲染" tabindex="-1"><a class="header-anchor" href="#条件渲染"><span>条件渲染</span></a></h2><ul><li>v-if和v-show区别</li><li>v-if/v-else-if/v-else</li><li>v-show</li></ul><h2 id="过滤器的应用-过滤器中的this都是window" tabindex="-1"><a class="header-anchor" href="#过滤器的应用-过滤器中的this都是window"><span>过滤器的应用 (过滤器中的this都是window)</span></a></h2><ul><li>全局过滤器 和 局部过滤器</li><li>编写一个过滤器<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;div&gt;{{&#39;hello&#39; | capitalize(3)}}&lt;/div&gt;</span>
<span class="line">Vue.filter(&#39;capitalize&#39;,(value,count=1)=&gt;{</span>
<span class="line">  return value.slice(0,count).toUpperCase() + value.slice(count);</span>
<span class="line">});</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="指令的编写" tabindex="-1"><a class="header-anchor" href="#指令的编写"><span>指令的编写</span></a></h2><ul><li><p>全局指令和 局部指令</p></li><li><p>编写一个自定义指令</p><ul><li><p>钩子函数bind，inserted，update</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">      &lt;input type=&quot;text&quot; v-focus.color=&quot;&#39;red&#39;&quot;&gt;</span>
<span class="line">      Vue.directive(&#39;focus&#39;,{</span>
<span class="line">          inserted:(el,bindings)=&gt;{</span>
<span class="line">              let color = bindings.modifiers.color;</span>
<span class="line">              if(color){</span>
<span class="line">                  console.log(&#39;color&#39;)</span>
<span class="line">                  el.style.boxShadow = \`1px 1px 2px \${bindings.value}\`</span>
<span class="line">              }   </span>
<span class="line">              el.focus();</span>
<span class="line">          }</span>
<span class="line">      });</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>clickoutside指令</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;div v-click-outside=&quot;change&quot;&gt;</span>
<span class="line">  &lt;input type=&quot;text&quot;  @focus=&quot;flag=true&quot; &gt;</span>
<span class="line">  &lt;div v-show=&quot;flag&quot;&gt;</span>
<span class="line">      contenter</span>
<span class="line">  &lt;/div&gt;</span>
<span class="line">&lt;/div&gt;</span>
<span class="line">let vm = new Vue({</span>
<span class="line">   el:&#39;</span>
<span class="line">  data:{</span>
<span class="line">      flag:false</span>
<span class="line">  },</span>
<span class="line">  methods:{</span>
<span class="line">      change(){</span>
<span class="line">          this.flag = false</span>
<span class="line">      }</span>
<span class="line">  },</span>
<span class="line">  directives:{</span>
<span class="line">      &#39;click-outside&#39;(el,bindings,vnode){</span>
<span class="line">          document.addEventListener(&#39;click&#39;,(e)=&gt;{</span>
<span class="line">              if(!el.contains(e.target,vnode)){</span>
<span class="line">                  let eventName = bindings.expression;</span>
<span class="line">                  vnode.context[eventName]()</span>
<span class="line">              }</span>
<span class="line">          })</span>
<span class="line">      }</span>
<span class="line">  }</span>
<span class="line">})</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="vue中的生命周期" tabindex="-1"><a class="header-anchor" href="#vue中的生命周期"><span>vue中的生命周期</span></a></h2><ul><li>beforeCreate 在实例初始化之后，数据观测(data observer) 和 event/watcher 事件配置之前被调用。</li><li>created 实例已经创建完成之后被调用。在这一步，实例已完成以下的配置：数据观测(data observer)，属性和方法的运算， watch/event 事件回调。这里没有$el</li><li>beforeMount 在挂载开始之前被调用：相关的 render 函数首次被调用。</li><li>mounted el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。</li><li>beforeUpdate 数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前。</li><li>updated 由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。</li><li>beforeDestroy 实例销毁之前调用。在这一步，实例仍然完全可用。</li><li>destroyed Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。 该钩子在服务器端渲染期间不被调用。</li></ul><h2 id="钩子函数中该做的事情" tabindex="-1"><a class="header-anchor" href="#钩子函数中该做的事情"><span>钩子函数中该做的事情</span></a></h2><ul><li>created 实例已经创建完成，因为它是最早触发的原因可以进行一些数据，资源的请求。</li><li>mounted 实例已经挂载完成，可以进行一些DOM操作</li><li>beforeUpdate 可以在这个钩子中进一步地更改状态，这不会触发附加的重渲染过程。</li><li>updated 可以执行依赖于 DOM 的操作。然而在大多数情况下，你应该避免在此期间更改状态，因为这可能会导致更新无限循环。 该钩子在服务器端渲染期间不被调用。</li><li>destroyed 可以执行一些优化操作,清空定时器，解除绑定事件</li></ul><p><img src="https://www.fullstackjavascript.cn/lifecycle.png" alt=""></p><h2 id="vue中的动画" tabindex="-1"><a class="header-anchor" href="#vue中的动画"><span>vue中的动画</span></a></h2><p>vue中的动画就是从无到有或者从有到无产生的。有以下几个状态 transition组件的应用</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">.v-enter-active,.v-leave-active {</span>
<span class="line">    transition: opacity 0.25s ease-out;</span>
<span class="line">}</span>
<span class="line">.v-enter, .v-leave-to {</span>
<span class="line">    opacity: 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>切换isShow的显示或者隐藏就显示出效果啦~</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;button @click=&quot;toggle&quot;&gt;toggle&lt;/button&gt;</span>
<span class="line">&lt;transition&gt;</span>
<span class="line">    &lt;span v-show=&quot;isShow&quot;&gt;珠峰架构&lt;/span&gt;</span>
<span class="line">&lt;/transition&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>默认的name是以v-开头，当然你可以自己指定name属性来修改前缀</p></blockquote><h2 id="使用animate-css设置动画" tabindex="-1"><a class="header-anchor" href="#使用animate-css设置动画"><span>使用animate.css设置动画</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">.v-enter-active {</span>
<span class="line">    animation:zoomIn  2s linear</span>
<span class="line">}</span>
<span class="line">.v-leave-avitve{</span>
<span class="line">    animation:zoomOut 2s linear</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>直接修改激活时的样式</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;transition </span>
<span class="line">    enter-active-class=&quot;zoomIn&quot;</span>
<span class="line">    leave-active-class=&quot;zoomOut&quot;</span>
<span class="line">&gt;</span>
<span class="line">    &lt;span class=&quot;animated&quot; v-show=&quot;isShow&quot;&gt;珠峰架构&lt;/span&gt;</span>
<span class="line">&lt;/transition&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vue中js动画" tabindex="-1"><a class="header-anchor" href="#vue中js动画"><span>vue中js动画</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;transition </span>
<span class="line">    @before-enter=&quot;beforeEnter&quot;</span>
<span class="line">    @enter=&quot;enter&quot;</span>
<span class="line">    @after-enter=&quot;afterEnter&quot;</span>
<span class="line">&gt;   </span>
<span class="line">    &lt;span class=&quot;animated&quot; v-show=&quot;isShow&quot;&gt;珠峰架构&lt;/span&gt;</span>
<span class="line">&lt;/transition&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对应的钩子有before-leave,leave,after-leave钩子函数,函数的参数为当前元素</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">beforeEnter(el){</span>
<span class="line">    el.style.color=&quot;red&quot;</span>
<span class="line">},</span>
<span class="line">enter(el,done){</span>
<span class="line">    setTimeout(()=&gt;{</span>
<span class="line">        el.style.color = &#39;green&#39;</span>
<span class="line">    },1000);</span>
<span class="line">    setTimeout(() =&gt; {</span>
<span class="line">        done();</span>
<span class="line">    }, 2000);</span>
<span class="line">},</span>
<span class="line">afterEnter(el){</span>
<span class="line">    el.style.color = &#39;blue&#39;;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用js动画库" tabindex="-1"><a class="header-anchor" href="#使用js动画库"><span>使用js动画库</span></a></h2><blockquote><p><a href="https://github.com/julianshapiro/velocity" target="_blank" rel="noopener noreferrer">https://github.com/julianshapiro/velocity</a></p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;script src=&quot;node_modules/velocity-animate/velocity.js&quot;&gt;&lt;/script&gt;</span>
<span class="line">beforeEnter(el){</span>
<span class="line">    el.style.opacity = 0;</span>
<span class="line">},</span>
<span class="line">enter(el,done){</span>
<span class="line">    Velocity(el, {opacity: 1}, {duration: 2000, complete: done})</span>
<span class="line">},</span>
<span class="line">afterEnter(el){</span>
<span class="line">    el.style.color = &#39;blue&#39;;</span>
<span class="line">},</span>
<span class="line">leave(el,done){</span>
<span class="line">    Velocity(el, {opacity: 0}, {duration: 2000, complete: done})</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="筛选动画" tabindex="-1"><a class="header-anchor" href="#筛选动画"><span>筛选动画</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;div id=&quot;app&quot;&gt;</span>
<span class="line">    &lt;input type=&quot;text&quot; v-model=&quot;filterData&quot;&gt;</span>
<span class="line">    &lt;transition-group  </span>
<span class="line">        enter-active-class=&quot;zoomInLeft&quot; </span>
<span class="line">        leave-active-class=&quot;zoomOutRight&quot;</span>
<span class="line">    &gt;</span>
<span class="line">        &lt;div v-for=&quot;(l,index) in computedData&quot; :key=&quot;l.title&quot; class=&quot;animated&quot;&gt;</span>
<span class="line">            {{l.title}}</span>
<span class="line">        &lt;/div&gt;</span>
<span class="line">    &lt;/transition-group&gt;  </span>
<span class="line">&lt;/div&gt;</span>
<span class="line">&lt;script src=&quot;./node_modules/vue/dist/vue.js&quot;&gt;&lt;/script&gt;</span>
<span class="line">&lt;script&gt;</span>
<span class="line">    let vm = new Vue({</span>
<span class="line">         el:&#39;</span>
<span class="line">        data:{</span>
<span class="line">            filterData:&#39;&#39;,</span>
<span class="line">            dataList:[</span>
<span class="line">                {title:&#39;标题1&#39;},</span>
<span class="line">                {title:&#39;标题2&#39;},</span>
<span class="line">                {title:&#39;标题4&#39;},</span>
<span class="line">                {title:&#39;标题3&#39;}</span>
<span class="line">            ]</span>
<span class="line">        },</span>
<span class="line">        computed:{</span>
<span class="line">            computedData(){</span>
<span class="line">                return this.dataList.filter((item)=&gt;{</span>
<span class="line">                    return item.title.includes(this.filterData);</span>
<span class="line">                })</span>
<span class="line">            }</span>
<span class="line">        },</span>
<span class="line">    })</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,72)])])}const p=n(i,[["render",t]]),r=JSON.parse('{"path":"/strong/66-1.vue-base.html","title":"","lang":"en-US","frontmatter":{},"git":{"updatedTime":1681290319000,"contributors":[{"name":"yutao","username":"yutao","email":"642231346@qq.com","commits":1,"url":"https://github.com/yutao"}],"changelog":[{"hash":"f5ab8c9d34991ec274f7f652439afe5b2afb6147","time":1681290319000,"email":"642231346@qq.com","author":"yutao","message":"modify"}]},"filePathRelative":"strong/66-1.vue-base.md"}');export{p as comp,r as data};
