import{_ as n,c as e,a,o as i}from"./app-CD1YpnS1.js";const l={};function c(p,s){return i(),e("div",null,[...s[0]||(s[0]=[a(`<h2 id="前端常见问题" tabindex="-1"><a class="header-anchor" href="#前端常见问题"><span>前端常见问题</span></a></h2><p>修改js模块功能，其它模块也受影响，很难快速定位bug<br> 多人开发代码越来越难以维护,不方便迭代,代码无法重构</p><h2 id="什么是单元测试" tabindex="-1"><a class="header-anchor" href="#什么是单元测试"><span>什么是单元测试</span></a></h2><p>单元测试就是测试最小单元(一个方法，一个组件)</p><h2 id="tdd-bdd" tabindex="-1"><a class="header-anchor" href="#tdd-bdd"><span>TDD &amp; BDD</span></a></h2><ul><li>Test-Driven Development, 测试驱动开发 <ul><li>先编写测试用例代码，然后针对测试用例编写功能代码，使其能够通过</li><li>很好的诠释了代码即文档</li><li>清晰地了解软件的需求</li></ul></li><li>Behavior Driven Development，行为驱动开发 <ul><li>系统业务专家、开发者、测试人员一起合作，分析软件的需求，然后将这些需求写成一个个的故事。开发者负责填充这些故事的内容</li><li>保证程序实现效果与用户需求一致。</li></ul></li></ul><h2 id="测试工具-mocha-chai-jest" tabindex="-1"><a class="header-anchor" href="#测试工具-mocha-chai-jest"><span>测试工具 mocha + chai / jest</span></a></h2><ul><li>karma + Jasmine + chrome-launcher</li><li>karma + mocha + chai / jest 使用jsdom</li></ul><p>Karma为前端自动化测试提供了跨浏览器测试的能力,Mocha是前端自动化测试框架，测试框架需要解决兼容不同风格断言库,jest 是facebook推出的一款测试框架,集成了 Mocha,chai,jsdom,sinon等功能。</p><h2 id="创建项目使用mocha-chai" tabindex="-1"><a class="header-anchor" href="#创建项目使用mocha-chai"><span>创建项目使用mocha+chai</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">vue create mocha-vue</span>
<span class="line">// 增加setup文件</span>
<span class="line">global.performance = window.performance;</span>
<span class="line">// 配置启动文件</span>
<span class="line">vue-cli-service test:unit -r tests/setup.js</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="测试第一个例子" tabindex="-1"><a class="header-anchor" href="#测试第一个例子"><span>测试第一个例子</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">export let parser = (str) =&gt;{</span>
<span class="line">    let obj = {};</span>
<span class="line">    str.replace(/([^&amp;=]*)=([^&amp;=]*)/g,function(){</span>
<span class="line">        obj[arguments[1]] = arguments[2];</span>
<span class="line">    });</span>
<span class="line">    return obj;</span>
<span class="line">}</span>
<span class="line">export let stringify = (obj) =&gt;{</span>
<span class="line">    let arr = [];</span>
<span class="line">    for(let key in obj){</span>
<span class="line">        arr.push(\`\${key}=\${obj[key]}\`);</span>
<span class="line">    }</span>
<span class="line">    return arr.join(&#39;&amp;&#39;);</span>
<span class="line">}</span>
<span class="line">// 测试parser 和 stringify</span>
<span class="line">console.log(parser(&#39;name=zfpx&#39;));</span>
<span class="line">console.log(stringify({name:&#39;zfpx&#39;}));</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>用例无法保存，污染代码，不直观，所有的用例全部混在一起</p></blockquote><h2 id="编写测试用例" tabindex="-1"><a class="header-anchor" href="#编写测试用例"><span>编写测试用例</span></a></h2><p>会默认测试tests文件夹下.spec 和 .test文件</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import { expect } from &#39;chai&#39;</span>
<span class="line">import {parser,stringify} from &#39;@/code/parser&#39;;</span>
<span class="line">describe(&#39;测试parser.js是否靠谱&#39;, () =&gt; {</span>
<span class="line">  it(&#39;parser测试&#39;,()=&gt;{</span>
<span class="line">    expect(parser(&#39;name=zfpx&amp;age=9&#39;)).to.be.deep.eq({name:&#39;zfpx&#39;,age:&#39;9&#39;});</span>
<span class="line">  });</span>
<span class="line">  it(&#39;stringify测试&#39;,()=&gt;{</span>
<span class="line">    expect(stringify({name:&#39;zfpx&#39;})).to.be.eq(&#39;name=zfpx&#39;);</span>
<span class="line">  })</span>
<span class="line">});</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="chai库的应用" tabindex="-1"><a class="header-anchor" href="#chai库的应用"><span>chai库的应用</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import { expect } from &#39;chai&#39;</span>
<span class="line">describe(&#39;测试常见的比较方法&#39;, () =&gt; {</span>
<span class="line">  it(&#39;常见判断方式&#39;,()=&gt;{</span>
<span class="line">    expect(&#39;zfpx&#39;).to.be.equal(&#39;zfpx&#39;);</span>
<span class="line">    // 简写</span>
<span class="line">    expect(true).to.be.equal(true);</span>
<span class="line">    expect(true).to.be.true;</span>
<span class="line">    expect([1,2,3]).to.be.lengthOf(3);</span>
<span class="line">    // 判断包含</span>
<span class="line">    expect(&#39;welcome zf&#39;).to.contain(&#39;zf&#39;);    </span>
<span class="line">    expect({name:&#39;zfpx&#39;}).to.not.have.haveOwnPropertyDescriptor(&#39;address&#39;);</span>
<span class="line">    expect(&#39;zfpx&#39;).match(/zf/);</span>
<span class="line">    // 大于小于</span>
<span class="line">    expect(5).to.be.lessThan(6);</span>
<span class="line">    expect(3).to.be.greaterThan(2);</span>
<span class="line">  });</span>
<span class="line">});</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><a href="https://www.chaijs.com/" target="_blank" rel="noopener noreferrer">https://www.chaijs.com/</a></p></blockquote><h2 id="测试vue组件" tabindex="-1"><a class="header-anchor" href="#测试vue组件"><span>测试vue组件</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import { expect } from &#39;chai&#39;;</span>
<span class="line">import HelloWorld from &#39;@/components/HelloWorld&#39;;</span>
<span class="line">import Vue from &#39;vue&#39;;</span>
<span class="line">describe(&#39;测试vue组件&#39;, () =&gt; {</span>
<span class="line">  it(&#39;测试属性是否正确&#39;,()=&gt;{</span>
<span class="line">    let baseExtend = Vue.extend(HelloWorld);</span>
<span class="line">    let vm = new baseExtend({</span>
<span class="line">      propsData:{msg:&#39;zfjg&#39;}</span>
<span class="line">    }).$mount();</span>
<span class="line">    expect(vm.$el.querySelector(&#39;h1&#39;).innerHTML).to.contain(&#39;zfjg&#39;);</span>
<span class="line">  })</span>
<span class="line">});</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要自己挂载组件,而且还需要自己查找dom元素，很麻烦</p><h2 id="使用-vue-test-utils简化流程" tabindex="-1"><a class="header-anchor" href="#使用-vue-test-utils简化流程"><span>使用 Vue Test Utils简化流程</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">describe(&#39;测试vue组件&#39;, () =&gt; {</span>
<span class="line">  it(&#39;测试属性是否正确&#39;,()=&gt;{</span>
<span class="line">    let wrapper = shallowMount(HelloWorld,{</span>
<span class="line">      propsData:{msg:&#39;zfjg&#39;}</span>
<span class="line">    });</span>
<span class="line">    expect(wrapper.find(&#39;h1&#39;).text()).to.be.contain(&#39;zfjg&#39;);</span>
<span class="line">  })</span>
<span class="line">});</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="单元测试事件的触发" tabindex="-1"><a class="header-anchor" href="#单元测试事件的触发"><span>单元测试事件的触发</span></a></h2><p>点击事件</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;template&gt;</span>
<span class="line">    &lt;div&gt;</span>
<span class="line">        &lt;span id=&quot;count&quot;&gt;{{count}}&lt;/span&gt;</span>
<span class="line">        &lt;button @click=&quot;increment&quot;&gt;点击&lt;/button&gt;</span>
<span class="line">    &lt;/div&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line">&lt;script&gt;</span>
<span class="line">export default {</span>
<span class="line">    data(){</span>
<span class="line">        return {count:10}</span>
<span class="line">    },</span>
<span class="line">    methods:{</span>
<span class="line">        increment(){</span>
<span class="line">            this.count++;</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">// 对应单元测试</span>
<span class="line">import {shallowMount} from &#39;@vue/test-utils&#39;;</span>
<span class="line">import Counter from &#39;@/components/Counter&#39;;</span>
<span class="line">import {expect} from &#39;chai&#39;;</span>
<span class="line">describe(&#39;Conter组件&#39;,()=&gt;{</span>
<span class="line">    it(&#39;点击按钮是否可以加1&#39;,()=&gt;{</span>
<span class="line">        // 挂载counter组件</span>
<span class="line">        let wrapper = shallowMount(Counter);</span>
<span class="line">        wrapper.setData({count:10}); // 设置状态</span>
<span class="line">        // mock状态</span>
<span class="line">        expect(wrapper.find(&#39;span&#39;).text()).to.be.equal(&#39;10&#39;);</span>
<span class="line">        wrapper.find(&#39;button&#39;).trigger(&#39;click&#39;);</span>
<span class="line">        expect(wrapper.find(&#39;span&#39;).text()).to.be.equal(&#39;11&#39;);</span>
<span class="line">    });</span>
<span class="line">});</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>自定义事件</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;template&gt;</span>
<span class="line">    &lt;div&gt;</span>
<span class="line">        &lt;Child @show=&quot;show&quot;&gt;&lt;/Child&gt;</span>
<span class="line">        &lt;p v-if=&quot;flag&quot;&gt; {{name}} &lt;/p&gt;</span>
<span class="line">    &lt;/div&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line">&lt;script&gt;</span>
<span class="line">import Child from &#39;./Child.vue&#39;;</span>
<span class="line">export default {</span>
<span class="line">    data(){</span>
<span class="line">        return {name:&#39;姜文&#39;,flag:false}</span>
<span class="line">    },</span>
<span class="line">    methods:{</span>
<span class="line">        show(){</span>
<span class="line">            this.flag = true;</span>
<span class="line">        }</span>
<span class="line">    },</span>
<span class="line">    components:{</span>
<span class="line">        Child</span>
<span class="line">    }    </span>
<span class="line">}</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">// 测试用例</span>
<span class="line">import {shallowMount} from &#39;@vue/test-utils&#39;;</span>
<span class="line">import Parent from &#39;@/components/Parent&#39;;</span>
<span class="line">import Child from &#39;@/components/Child&#39;;</span>
<span class="line">import {expect} from &#39;chai&#39;;</span>
<span class="line"></span>
<span class="line">describe(&#39;测试子组件能否触发父组件方法&#39;,()=&gt;{</span>
<span class="line">    it(&#39;触发show方法&#39;,()=&gt;{</span>
<span class="line">        let wrapper = shallowMount(Parent);</span>
<span class="line">        expect(wrapper.find(&#39;p&#39;).exists()).to.be.false;</span>
<span class="line">        wrapper.find(Child).vm.$emit(&#39;show&#39;);</span>
<span class="line">        expect(wrapper.find(&#39;p&#39;).exists()).to.be.true;</span>
<span class="line">    })</span>
<span class="line">});</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="sinon应用" tabindex="-1"><a class="header-anchor" href="#sinon应用"><span>sinon应用</span></a></h2><p>模拟函数调用,统计函数调用次数和调用时的参数</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">npm install sinon</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;template&gt;</span>
<span class="line">    &lt;div&gt;</span>
<span class="line">        &lt;button @click=&quot;handleClick&quot;&gt;点我啊&lt;/button&gt;</span>
<span class="line">    &lt;/div&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line">&lt;script&gt;</span>
<span class="line">export default {</span>
<span class="line">    props:{</span>
<span class="line">        fn:{}</span>
<span class="line">    },</span>
<span class="line">    methods:{</span>
<span class="line">        handleClick(){</span>
<span class="line">            this.fn(&#39;hello&#39;,&#39;world&#39;);</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">// 测试</span>
<span class="line">import {shallowMount} from &#39;@vue/test-utils&#39;;</span>
<span class="line">import PropFn from &#39;@/components/PropFn.vue&#39;;</span>
<span class="line">import {expect} from &#39;chai&#39;;</span>
<span class="line">import sinon from &#39;sinon&#39;;</span>
<span class="line">describe(&#39;测试propFn组件&#39;,()=&gt;{</span>
<span class="line">    it(&#39;判断点击按钮时是否可以触发函数调用&#39;,()=&gt;{</span>
<span class="line">        let callback = sinon.spy();</span>
<span class="line">        let wrapper = shallowMount(PropFn,{</span>
<span class="line">            propsData:{</span>
<span class="line">                fn:callback</span>
<span class="line">            }</span>
<span class="line">        });</span>
<span class="line">        wrapper.find(&#39;button&#39;).trigger(&#39;click&#39;);</span>
<span class="line">        expect(callback.callCount).to.be.equal(1);</span>
<span class="line">        expect(callback.getCall(0).args).to.be.lengthOf(2);</span>
<span class="line">    });</span>
<span class="line">});</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用moxios" tabindex="-1"><a class="header-anchor" href="#使用moxios"><span>使用moxios</span></a></h2><p>在mocha中测试axios</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">npm install moxios </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;template&gt;</span>
<span class="line">    &lt;div&gt;</span>
<span class="line">        {{user}}</span>
<span class="line">    &lt;/div&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line">&lt;script&gt;</span>
<span class="line">import axios from &#39;axios&#39;;</span>
<span class="line">export default {</span>
<span class="line">    data(){</span>
<span class="line">        return {user:&#39;&#39;}</span>
<span class="line">    },  </span>
<span class="line">    mounted(){</span>
<span class="line">        axios.get(&#39;/user&#39;).then((res)=&gt;{</span>
<span class="line">            this.user = res.data.user;</span>
<span class="line">        }).catch(err=&gt;{</span>
<span class="line">            console.log(err);</span>
<span class="line">        });</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">// 单元测试</span>
<span class="line">import {shallowMount} from &#39;@vue/test-utils&#39;;</span>
<span class="line">import Axios from &#39;@/components/Axios&#39;;</span>
<span class="line">import {expect} from &#39;chai&#39;;</span>
<span class="line">import moxios from &#39;moxios&#39;;</span>
<span class="line"></span>
<span class="line">describe(&#39;测试Axios.vue组件&#39;,()=&gt;{</span>
<span class="line">    beforeEach(()=&gt;{</span>
<span class="line">        moxios.install();</span>
<span class="line">    });</span>
<span class="line">    afterEach(()=&gt;{</span>
<span class="line">        moxios.uninstall();</span>
<span class="line">    });</span>
<span class="line">    it(&#39;使用mixios模拟接口&#39;,(done)=&gt;{</span>
<span class="line">        let wrapper = shallowMount(Axios);</span>
<span class="line">        moxios.stubRequest(&#39;/user&#39;,  {</span>
<span class="line">            status: 200,</span>
<span class="line">            response: {user:&#39;jw&#39;}</span>
<span class="line">        });</span>
<span class="line">        moxios.wait(function () {</span>
<span class="line">            expect(wrapper.text()).to.include(&#39;jw&#39;);</span>
<span class="line">            done();</span>
<span class="line">        });</span>
<span class="line">    })</span>
<span class="line">});</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="转向jest单元测试" tabindex="-1"><a class="header-anchor" href="#转向jest单元测试"><span>转向jest单元测试</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">// 相等</span>
<span class="line">expect(1+1).toBe(2);</span>
<span class="line">expect({name:&#39;zfpx&#39;}).toEqual({name:&#39;zfpx&#39;});</span>
<span class="line">// 包含</span>
<span class="line">expect(&#39;zfpx&#39;).toContain(&#39;zf&#39;);</span>
<span class="line">expect({a:1}).toHaveProperty(&#39;a&#39;);</span>
<span class="line">expect(&#39;zf&#39;).toMatch(&#39;z&#39;);</span>
<span class="line">// 路由运算</span>
<span class="line">expect(5).toBeLessThan(10);</span>
<span class="line">expect(5).toBeGreaterThan(12);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mock-axios" tabindex="-1"><a class="header-anchor" href="#mock-axios"><span>mock axios</span></a></h3><p>模拟ajax请求方法</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">增加__mocks__文件夹</span>
<span class="line">export default {</span>
<span class="line">    get:()=&gt;Promise.resolve({data:{user:&#39;zfpx&#39;}})</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">import { shallowMount } from &#39;@vue/test-utils&#39;</span>
<span class="line">import Axios from &#39;@/components/Axios.vue&#39;</span>
<span class="line">import Vue from &#39;vue&#39;;</span>
<span class="line">jest.mock(&#39;axios&#39;);</span>
<span class="line"></span>
<span class="line">describe(&#39;Axios.vue&#39;, () =&gt; {</span>
<span class="line">  it(&#39;模拟ajax请求&#39;, () =&gt; {</span>
<span class="line">    const wrapper = shallowMount(Axios);</span>
<span class="line">    return Vue.nextTick().then(()=&gt;{</span>
<span class="line">      expect(wrapper.text()).toContain(&#39;jw&#39;);</span>
<span class="line">    })</span>
<span class="line">  })</span>
<span class="line">})</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="在组件中测试vuex" tabindex="-1"><a class="header-anchor" href="#在组件中测试vuex"><span>在组件中测试vuex</span></a></h3><p>模拟vuex的状态和action测试组件</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;template&gt;</span>
<span class="line">    &lt;div&gt;</span>
<span class="line">        &lt;span&gt;{{username}}&lt;/span&gt;</span>
<span class="line">        &lt;button @click=&quot;change()&quot;&gt;更改用户名&lt;/button&gt;</span>
<span class="line">    &lt;/div&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line">&lt;script&gt;</span>
<span class="line">import {mapState,mapActions} from &#39;vuex&#39;;</span>
<span class="line">export default {</span>
<span class="line">    computed:{</span>
<span class="line">       ...mapState([&#39;username&#39;])</span>
<span class="line">    },</span>
<span class="line">    methods:{</span>
<span class="line">       ...mapActions([&#39;change_username&#39;]),</span>
<span class="line">        change(){</span>
<span class="line">            this[&#39;change_username&#39;](&#39;newUsername&#39;);</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">// 测试action</span>
<span class="line">import { shallowMount , createLocalVue} from &#39;@vue/test-utils&#39;</span>
<span class="line">import VuexComponent from &#39;@/components/Vuex.vue&#39;;</span>
<span class="line">import Vuex from &#39;vuex&#39;;</span>
<span class="line">const localVue = createLocalVue()</span>
<span class="line">localVue.use(Vuex)</span>
<span class="line">describe(&#39;测试组件中的vuex&#39;, () =&gt; {</span>
<span class="line">  let state;</span>
<span class="line">  let actions;</span>
<span class="line">  let store;</span>
<span class="line">  let fn = jest.fn();</span>
<span class="line">  beforeEach(() =&gt; {</span>
<span class="line">    state = {username:&#39;jw&#39;}</span>
<span class="line">    actions = {change_username:fn}</span>
<span class="line">    store = new Vuex.Store({</span>
<span class="line">      state,</span>
<span class="line">      actions</span>
<span class="line">    })</span>
<span class="line">  })</span>
<span class="line">  it(&#39;测试state是否正确&#39;, () =&gt; {</span>
<span class="line">      let wrapper = shallowMount(VuexComponent,{</span>
<span class="line">        store,</span>
<span class="line">        localVue</span>
<span class="line">      });</span>
<span class="line">      expect(wrapper.find(&#39;span&#39;).text()).toContain(&#39;jw&#39;);</span>
<span class="line">  });</span>
<span class="line">  it(&#39;测试action是否正确调用&#39;,()=&gt;{</span>
<span class="line">      let wrapper = shallowMount(VuexComponent,{</span>
<span class="line">        store,</span>
<span class="line">        localVue</span>
<span class="line">      });</span>
<span class="line">      wrapper.find(&#39;button&#39;).trigger(&#39;click&#39;);</span>
<span class="line">      expect(fn.mock.calls[0][1]).toEqual(&#39;newUsername&#39;);</span>
<span class="line">      expect(fn).toHaveBeenCalled()</span>
<span class="line">  })</span>
<span class="line">})</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="分别单元化测试-getter、mutation-和-action-需要伪造commit-和-dispatch" tabindex="-1"><a class="header-anchor" href="#分别单元化测试-getter、mutation-和-action-需要伪造commit-和-dispatch"><span>分别单元化测试 getter、mutation 和 action (需要伪造commit 和 dispatch)</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">export default {</span>
<span class="line">  increment(state) {</span>
<span class="line">    state.count++</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line">it(&#39;加1&#39;, () =&gt; {</span>
<span class="line">  const state = {</span>
<span class="line">    count: 0</span>
<span class="line">  }</span>
<span class="line">  mutations.increment(state)</span>
<span class="line">  expect(state.count).toBe(1)</span>
<span class="line">})</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="测试一个运行中的store" tabindex="-1"><a class="header-anchor" href="#测试一个运行中的store"><span>测试一个运行中的store</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import {createLocalVue} from &#39;@vue/test-utils&#39;</span>
<span class="line">import Vuex from &#39;vuex&#39;;</span>
<span class="line">import config from  &#39;@/store.js&#39;</span>
<span class="line">import cloneDeep from &#39;lodash/cloneDeep&#39;</span>
<span class="line"></span>
<span class="line">describe(&#39;测试组件中的vuex&#39;, () =&gt; {</span>
<span class="line">  it(&#39;测试store&#39;,()=&gt;{</span>
<span class="line">    const localVue = createLocalVue();</span>
<span class="line">    localVue.use(Vuex);</span>
<span class="line">    let store = new Vuex.Store(cloneDeep(config));</span>
<span class="line">    expect(store.state.username).toEqual(&#39;zfpx&#39;);</span>
<span class="line">    store.commit(&#39;set_username&#39;,&#39;jw&#39;);</span>
<span class="line">    expect(store.state.username).toEqual(&#39;jw&#39;);</span>
<span class="line">  });</span>
<span class="line">});</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,50)])])}const t=n(l,[["render",c]]),r=JSON.parse('{"path":"/strong/66-14.vue%E5%8D%95%E5%85%83%E6%B5%8B%E8%AF%95.html","title":"","lang":"en-US","frontmatter":{},"git":{"updatedTime":1681290319000,"contributors":[{"name":"yutao","username":"yutao","email":"642231346@qq.com","commits":1,"url":"https://github.com/yutao"}],"changelog":[{"hash":"f5ab8c9d34991ec274f7f652439afe5b2afb6147","time":1681290319000,"email":"642231346@qq.com","author":"yutao","message":"modify"}]},"filePathRelative":"strong/66-14.vue单元测试.md"}');export{t as comp,r as data};
