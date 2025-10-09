import{_ as n,c as e,a,o as i}from"./app-CD1YpnS1.js";const l={};function d(t,s){return i(),e("div",null,[...s[0]||(s[0]=[a(`<h2 id="vue中的状态管理" tabindex="-1"><a class="header-anchor" href="#vue中的状态管理"><span>vue中的状态管理</span></a></h2><p>初始化项目环境</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">sudo npm install @vue/cli -g</span>
<span class="line">vue ui 生成项目 vue-router + vuex</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="eventbus事件车" tabindex="-1"><a class="header-anchor" href="#eventbus事件车"><span>EventBus事件车</span></a></h2><p>在vue中传递数据是通过属性传递(父子关系)，子父通信是通过emit来触发父级事件。如果遇到平级组件可以通过共同的父级进行数据传递。但是在开发中，我们经常会遇到平级组件数据交互和跨组件数据交互就可以通过一个共同的实例来进行数据传递。 通过事件来共享数据（发布订阅模式）</p><p>创建bus实例</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">// lib/bus.js</span>
<span class="line">import Vue from &#39;vue&#39;;</span>
<span class="line">let $bus = new Vue();</span>
<span class="line">Vue.prototype.$bus = $bus;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">// main.js</span>
<span class="line">import &#39;./lib/bus&#39;;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">// Boy组件 发射dinner事件</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用vuex来管理状态" tabindex="-1"><a class="header-anchor" href="#使用vuex来管理状态"><span>使用vuex来管理状态</span></a></h2><p><img src="https://vuex.vuejs.org/vuex.png" alt=""></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">├── actions.js</span>
<span class="line">├── getters.js</span>
<span class="line">├── index.js</span>
<span class="line">├── modules</span>
<span class="line">│   └── teacher.js</span>
<span class="line">├── mutations.js</span>
<span class="line">└── state.js</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="state-getters" tabindex="-1"><a class="header-anchor" href="#state-getters"><span>state &amp; getters</span></a></h2><ul><li>state类比\b组件中的状态</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">// state.js</span>
<span class="line">let state = {</span>
<span class="line">    lesson:&#39;珠峰架构&#39;</span>
<span class="line">}</span>
<span class="line">export default state;</span>
<span class="line"></span>
<span class="line">// 可以在组件中直接通过 this.$store.state来访问数据，也可以通过计算属性的方式</span>
<span class="line">&lt;template&gt;</span>
<span class="line">    &lt;div&gt;</span>
<span class="line">        课程是:{{lesson}}</span>
<span class="line">    &lt;/div&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line">&lt;script&gt;</span>
<span class="line">export default {</span>
<span class="line">    computed: {</span>
<span class="line">        lesson(){</span>
<span class="line">            return this.$store.state.lesson</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">// vue提供的辅助函数实现</span>
<span class="line">import {mapState} from &#39;vuex&#39;;</span>
<span class="line">export default {</span>
<span class="line">    computed: {</span>
<span class="line">        // 直接取出状态中的结果</span>
<span class="line">        ...mapState([&#39;lesson&#39;]),</span>
<span class="line">        // 给状态起名字</span>
<span class="line">        ...mapState({lesson1:&#39;lesson&#39;}),</span>
<span class="line">        // 通过函数的方式获取结果</span>
<span class="line">        ...mapState({lesson2:state=&gt;state.lesson})</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">// 模块中的状态</span>
<span class="line">let teacher = {</span>
<span class="line">    namespaced:true,</span>
<span class="line">    state:{</span>
<span class="line">        name:&#39;姜文&#39;</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line">export default teacher;</span>
<span class="line">// 取值时需要通过模块的名字来获取对应的状态</span>
<span class="line">&lt;template&gt;</span>
<span class="line">    &lt;div&gt;</span>
<span class="line">    teacherName: {{name}}</span>
<span class="line">    &lt;/div&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span>
<span class="line">&lt;script&gt;</span>
<span class="line">import {mapState} from &#39;vuex&#39;;</span>
<span class="line">export default {</span>
<span class="line">   computed: {</span>
<span class="line">       ...mapState({name:state=&gt;state.teacher.name}),</span>
<span class="line">       // 当模块中指定了namespaced:true时 可以使用第一个参数来限定取值的模块</span>
<span class="line">       ...mapState(&#39;teacher&#39;,[&#39;name&#39;]),</span>
<span class="line">       // state指代的是teacher中的状态</span>
<span class="line">       ...mapState(&#39;teacher&#39;,{teacherName:state=&gt;state.name})</span>
<span class="line">   }</span>
<span class="line">}</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">// 使用createNamespacedHelpers</span>
<span class="line">import {createNamespacedHelpers} from &#39;vuex&#39;;</span>
<span class="line">// 通过createNamespacedHelpers 方法来获取对应的mapstate</span>
<span class="line">let {mapState} = createNamespacedHelpers(&#39;teacher&#39;);</span>
<span class="line">export default {</span>
<span class="line">   computed: {</span>
<span class="line">    ...mapState([&#39;name&#39;])</span>
<span class="line">   }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>默认模块中的状态都是挂在在对应的模块内，并没有直接放到根状态上。像后面的getters/mutations/actions默认都会合并在根模块中</p><ul><li>getters类比组件中的计算属性<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import {mapState,mapGetters} from &#39;vuex&#39;;</span>
<span class="line">&lt;div&gt;</span>
<span class="line">  {{getLessonName}}</span>
<span class="line">&lt;/div&gt;</span>
<span class="line">export default {</span>
<span class="line">  computed: {</span>
<span class="line">      // getName(){</span>
<span class="line">      //     return this.$store.getters.getLessonName</span>
<span class="line">      // }</span>
<span class="line">      ...mapGetters([&#39;getLessonName&#39;])</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line">// 如果模块中有namespaced:true</span>
<span class="line">&lt;template&gt;</span>
<span class="line">  &lt;div&gt;</span>
<span class="line">  teacherName: {{getTeacherName}}</span>
<span class="line">  &lt;/div&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line">&lt;script&gt;</span>
<span class="line">import {createNamespacedHelpers} from &#39;vuex&#39;;</span>
<span class="line">let {mapState,mapGetters} = createNamespacedHelpers(&#39;teacher&#39;);</span>
<span class="line">export default {</span>
<span class="line"> computed: {</span>
<span class="line">  ...mapGetters([&#39;getTeacherName&#39;])</span>
<span class="line"> }</span>
<span class="line">}</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p>把模块中的状态进行计算，映射出对应的结果</p><h2 id="mutations-actions" tabindex="-1"><a class="header-anchor" href="#mutations-actions"><span>mutations &amp; actions</span></a></h2><ul><li>mutation突变，唯一修改状态的方式</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">strict:process.env.NODE_ENV !== &#39;production&#39; // 严格模式修改状态只能通过mutation\b来修改</span>
<span class="line"></span>
<span class="line">let mutations = {</span>
<span class="line">    SET_LESSON_NAME(state,payload){ // 载荷</span>
<span class="line">        state.lesson = payload; </span>
<span class="line">        // 修改时需要获取对应的属性</span>
<span class="line">        // state.lesson = payload.name;</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line">export default mutations;</span>
<span class="line">// 载\b\b在\b组件中调用commit方法 触发mutation对应的方法</span>
<span class="line">changeName(){</span>
<span class="line">    this.$store.commit(&#39;SET_LESSON_NAME&#39;,&#39;node&#39;)</span>
<span class="line">    // 可以写成对象的方式传递</span>
<span class="line">    // this.$store.commit({</span>
<span class="line">    //     type:&#39;SET_LESSON_NAME&#39;,</span>
<span class="line">    //     name:&#39;node&#39;</span>
<span class="line">    // });</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\b给状态新增不存在的属性，需要通过Vue.set方法</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">Vue.set(state,&#39;number&#39;,payload.number);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import {mapState,mapGetters,mapMutations} from &#39;vuex&#39;;</span>
<span class="line">methods: {</span>
<span class="line">    ...mapMutations([&#39;SET_LESSON_NAME&#39;]),</span>
<span class="line">    changeName(){</span>
<span class="line">        this[&#39;SET_LESSON_NAME&#39;]({number:10});</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>mutation不能操作异步逻辑</p><ul><li>actions就是用来处理异步的请求，异步更新状态</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">// 派发动作到action中</span>
<span class="line">this.$store.dispatch(&#39;SET_LESSON_NAME&#39;);</span>
<span class="line">// 在action中处理异步逻辑后将结果提交给mutation</span>
<span class="line">import {getLesson} from  &#39;../api/lesson&#39;</span>
<span class="line">let actions = {</span>
<span class="line">    // 在action中需要将数据提交给mutation，这里可以做异步逻辑</span>
<span class="line">    SET_LESSON_NAME({commit},payload){</span>
<span class="line">        getLesson().then(data=&gt;{</span>
<span class="line">            // data =&gt; {name:node}</span>
<span class="line">            commit({type:&#39;SET_LESSON_NAME&#39;,...data});</span>
<span class="line">        })</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line">export default actions;</span>
<span class="line"></span>
<span class="line">// 使用mapActions</span>
<span class="line">methods: {</span>
<span class="line">    ...mapActions([&#39;SET_LESSON_NAME&#39;]),</span>
<span class="line">    changeName(){</span>
<span class="line">        this[&#39;SET_LESSON_NAME&#39;]();</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>action\b中可以做封装异步请求，多个组件相同的异步处理，可以\b直接调用action,action中可以多次commit,也可以在action中再次调用action</p><h2 id="vuex进阶" tabindex="-1"><a class="header-anchor" href="#vuex进阶"><span>vuex进阶</span></a></h2><p>自动保存到本地插件</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">// vuex中的store容器</span>
<span class="line">// vuex中的store容器</span>
<span class="line">export default (store)=&gt;{</span>
<span class="line">    // 用新的状态 替换掉老的状态</span>
<span class="line">    store.replaceState(JSON.parse(localStorage.getItem(&#39;state&#39;))|| store.state);</span>
<span class="line">    store.subscribe((mutation,state)=&gt;{ // 订阅每次commit都会触发此函数</span>
<span class="line">        localStorage.setItem(&#39;state&#39;,JSON.stringify(state));</span>
<span class="line">    });</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">// 使用插件</span>
<span class="line">import saveLocale from  &#39;./plugins/saveLocale&#39;</span>
<span class="line">export default new Vuex.Store({</span>
<span class="line">  state,</span>
<span class="line">  mutations,</span>
<span class="line">  getters,</span>
<span class="line">  actions,</span>
<span class="line">  strict:process.env.NODE_ENV !== &#39;production&#39;,</span>
<span class="line">  modules:{</span>
<span class="line">    teacher</span>
<span class="line">  },</span>
<span class="line">  plugins:[saveLocale]</span>
<span class="line">});</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>logger插件(vuex中自己实现了这个插件)</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import deepClone from &#39;lodash/cloneDeep&#39;</span>
<span class="line">export default (store)=&gt;{</span>
<span class="line">    let prevState = deepClone(store.state);</span>
<span class="line">    store.subscribe((mutation,state)=&gt;{</span>
<span class="line">        console.log(&#39;prev&#39;,prevState.lesson);</span>
<span class="line">        console.log(mutation);</span>
<span class="line">        console.log(&#39;next&#39;,state.lesson);</span>
<span class="line">        prevState = deepClone(state);</span>
<span class="line">    });</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>vuex\b双向\b绑定,当更新数据时手动提交数据的更改</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;input type=&quot;text&quot; v-model=&quot;teacherName&quot;&gt;</span>
<span class="line">computed: {</span>
<span class="line">    ...mapState(&#39;teacher&#39;,[&#39;name&#39;]),</span>
<span class="line">    teacherName:{</span>
<span class="line">        get(){</span>
<span class="line">            return this.name;</span>
<span class="line">        },</span>
<span class="line">        set(val){</span>
<span class="line">            this[&#39;SET_TEACHER_NAME&#39;](val);</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,36)])])}const c=n(l,[["render",d]]),v=JSON.parse('{"path":"/strong/66-9.vuex-apply.html","title":"","lang":"en-US","frontmatter":{},"git":{"updatedTime":1681290319000,"contributors":[{"name":"yutao","username":"yutao","email":"642231346@qq.com","commits":1,"url":"https://github.com/yutao"}],"changelog":[{"hash":"f5ab8c9d34991ec274f7f652439afe5b2afb6147","time":1681290319000,"email":"642231346@qq.com","author":"yutao","message":"modify"}]},"filePathRelative":"strong/66-9.vuex-apply.md"}');export{c as comp,v as data};
