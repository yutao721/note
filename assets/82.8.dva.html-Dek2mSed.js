import{_ as s,c as a,a as e,o as i}from"./app-CD1YpnS1.js";const l={};function t(c,n){return i(),a("div",null,[...n[0]||(n[0]=[e(`<h2 id="_1-dva" tabindex="-1"><a class="header-anchor" href="#_1-dva"><span>1. dva</span></a></h2><ul><li>基于 <code>redux</code>、<code>redux-saga</code> 和 <code>react-router</code> 的轻量级前端框架。(Inspired by elm and choo)</li><li>dva是基于react+redux最佳实践上实现的封装方案，简化了redux和redux-saga使用上的诸多繁琐操作</li></ul><h2 id="_2-数据流向" tabindex="-1"><a class="header-anchor" href="#_2-数据流向"><span>2.数据流向</span></a></h2><ul><li>数据的改变发生通常是通过： <ul><li>用户交互行为（用户点击按钮等）</li><li>浏览器行为（如路由跳转等）触发的</li></ul></li><li>当此类行为会改变数据的时候可以通过 dispatch 发起一个 action，如果是同步行为会直接通过 Reducers 改变 State ，如果是异步行为（副作用）会先触发 Effects 然后流向 Reducers 最终改变 State</li></ul><p><img src="https://zos.alipayobjects.com/rmsportal/PPrerEAKbIoDZYr.png" alt="dva-flow"></p><h2 id="_3-8个概念" tabindex="-1"><a class="header-anchor" href="#_3-8个概念"><span>3. 8个概念</span></a></h2><h3 id="_3-1-state" tabindex="-1"><a class="header-anchor" href="#_3-1-state"><span>3.1 State</span></a></h3><ul><li>State 表示 Model 的状态数据，通常表现为一个 javascript 对象（当然它可以是任何值）；</li><li>操作的时候每次都要当作不可变数据（immutable data）来对待，保证每次都是全新对象，没有引用关系，这样才能保证 State 的独立性，便于测试和追踪变化。</li></ul><h3 id="_3-2-action" tabindex="-1"><a class="header-anchor" href="#_3-2-action"><span>3.2 Action</span></a></h3><ul><li>Action 是一个普通 javascript 对象，它是改变 State 的唯一途径。</li><li>无论是从 UI 事件、网络回调，还是 WebSocket 等数据源所获得的数据，最终都会通过 dispatch 函数调用一个 action，从而改变对应的数据。</li><li>action 必须带有 type 属性指明具体的行为，其它字段可以自定义，</li><li>如果要发起一个 action 需要使用 dispatch 函数；</li><li>需要注意的是 dispatch 是在组件 connect Models以后，通过 props 传入的。</li></ul><h3 id="_3-3-dispatch" tabindex="-1"><a class="header-anchor" href="#_3-3-dispatch"><span>3.3 dispatch</span></a></h3><ul><li>dispatching function 是一个用于触发 action 的函数</li><li>action 是改变 State 的唯一途径，但是它只描述了一个行为，而 dipatch 可以看作是触发这个行为的方式，而 Reducer 则是描述如何改变数据的。</li><li>在 dva 中，connect Model 的组件通过 props 可以访问到 dispatch，可以调用 Model 中的 Reducer 或者 Effects，常见的形式如：<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line"><span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;user/add&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 如果在 model 外调用，需要添加 namespace</span></span>
<span class="line"><span class="token literal-property property">payload</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// 需要传递的信息</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="_3-4-reducer" tabindex="-1"><a class="header-anchor" href="#_3-4-reducer"><span>3.4 Reducer</span></a></h3><ul><li>Reducer（也称为 reducing function）函数接受两个参数：之前已经累积运算的结果和当前要被累积的值，返回的是一个新的累积结果。该函数把一个集合归并成一个单值。</li><li>在 dva 中，reducers 聚合积累的结果是当前 model 的 state 对象。</li><li>通过 actions 中传入的值，与当前 reducers 中的值进行运算获得新的值（也就是新的 state）。</li><li>需要注意的是 Reducer 必须是纯函数，所以同样的输入必然得到同样的输出，它们不应该产生任何副作用。</li><li>并且，每一次的计算都应该使用immutable data，这种特性简单理解就是每次操作都是返回一个全新的数据（独立，纯净），所以热重载和时间旅行这些功能才能够使用。</li></ul><h3 id="_3-5-effect" tabindex="-1"><a class="header-anchor" href="#_3-5-effect"><span>3.5 Effect</span></a></h3><ul><li>Effect 被称为副作用，在我们的应用中，最常见的就是异步操作。</li><li>它来自于函数编程的概念，之所以叫副作用是因为它使得我们的函数变得不纯，同样的输入不一定获得同样的输出。</li><li>dva 为了控制副作用的操作，底层引入了redux-sagas做异步流程控制，由于采用了generator的相关概念，所以将异步转成同步写法，从而将effects转为纯函数。</li></ul><h3 id="_3-6-subscription" tabindex="-1"><a class="header-anchor" href="#_3-6-subscription"><span>3.6 Subscription</span></a></h3><ul><li>Subscriptions 是一种从 源 获取数据的方法，它来自于 elm。</li><li>Subscription 语义是订阅，用于订阅一个数据源，然后根据条件 dispatch 需要的 action</li><li>数据源可以是当前的时间、服务器的 websocket 连接、keyboard 输入、geolocation 变化、history 路由变化等等。</li></ul><h3 id="_3-7-router" tabindex="-1"><a class="header-anchor" href="#_3-7-router"><span>3.7 Router</span></a></h3><ul><li>这里的路由通常指的是前端路由</li><li>由于我们的应用现在通常是单页应用，所以需要前端代码来控制路由逻辑</li><li>通过浏览器提供的 History API 可以监听浏览器url的变化，从而控制路由相关操作。</li></ul><h3 id="_3-8-route-components" tabindex="-1"><a class="header-anchor" href="#_3-8-route-components"><span>3.8 Route Components</span></a></h3><ul><li>在组件设计方法中，我们提到过 Container Components，在 dva 中我们通常将其约束为 Route Components</li><li>因为在 dva 中我们通常以页面维度来设计 Container Components。</li><li>所以在 dva 中，通常需要 connect Model的组件都是 Route Components，组织在/routes/目录下，而/components/目录下则是纯组件（Presentational Components）。</li></ul><h2 id="_4-初始化环境" tabindex="-1"><a class="header-anchor" href="#_4-初始化环境"><span>4. 初始化环境</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">create-react-app dva-app</span>
<span class="line">cd dva-app</span>
<span class="line">cnpm i dva keymaster -S</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-文件结构" tabindex="-1"><a class="header-anchor" href="#_5-文件结构"><span>5. 文件结构</span></a></h2><p>官方推荐的：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line"> ├── /mock/           </span>
<span class="line"> ├── /src/            </span>
<span class="line"> │ ├── /components/   </span>
<span class="line"> │ ├── /routes/       </span>
<span class="line"> │ ├── /models/       </span>
<span class="line"> │ ├── /services/     </span>
<span class="line"> │ ├── /utils/        </span>
<span class="line"> │ ├── route.js       </span>
<span class="line"> │ ├── index.js       </span>
<span class="line">│ ├── index.less    </span>
<span class="line">│ └── index.html    </span>
<span class="line"> ├── package.json     </span>
<span class="line"> └── proxy.config.js  </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-计数器" tabindex="-1"><a class="header-anchor" href="#_6-计数器"><span>6. 计数器</span></a></h2><table><thead><tr><th style="text-align:left;">用法</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">app = dva(opts)</td><td style="text-align:left;">创建应用，返回 dva 实例</td></tr><tr><td style="text-align:left;">app.use(hooks)</td><td style="text-align:left;">配置 hooks 或者注册插件</td></tr><tr><td style="text-align:left;">app.model(model)</td><td style="text-align:left;">注册 model</td></tr><tr><td style="text-align:left;">app.router(({ history, app }) =&gt; RouterConfig)</td><td style="text-align:left;">注册路由表</td></tr><tr><td style="text-align:left;">app.start(selector?)</td><td style="text-align:left;">启动应用。selector 可选</td></tr></tbody></table><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React from &#39;react&#39;;</span>
<span class="line">import { Dispatch } from &#39;redux&#39;;</span>
<span class="line">import dva, { connect } from &#39;dva&#39;;</span>
<span class="line">import keymaster from &#39;keymaster&#39;;</span>
<span class="line">import { RouterAPI } from &#39;dva&#39;;</span>
<span class="line">import { Router, Route } from &#39;dva/router&#39;;</span>
<span class="line">interface Counter1State {</span>
<span class="line">    number: 0</span>
<span class="line">}</span>
<span class="line">interface Counter2State {</span>
<span class="line">    number: 0</span>
<span class="line">}</span>
<span class="line">interface CombinedState {</span>
<span class="line">    counter1: Counter1State;</span>
<span class="line">    counter2: Counter2State;</span>
<span class="line">}</span>
<span class="line">const app = dva();</span>
<span class="line">const delay = (millseconds: number) =&gt; {</span>
<span class="line">    return new Promise(function (resolve, reject) {</span>
<span class="line">        setTimeout(function () {</span>
<span class="line">            resolve();</span>
<span class="line">        }, millseconds);</span>
<span class="line">    });</span>
<span class="line">}</span>
<span class="line">app.model({</span>
<span class="line">    namespace: &#39;counter1&#39;,</span>
<span class="line">    state: { number: 0 },</span>
<span class="line">    reducers: {//接收老状态，返回新状态</span>
<span class="line">        add(state) { //dispatch({type:&#39;add&#39;});</span>
<span class="line">            return { number: state.number + 1 };</span>
<span class="line">        },</span>
<span class="line">        minus(state) {//dispatch({type:&#39;minus&#39;})</span>
<span class="line">            return { number: state.number - 1 };</span>
<span class="line">        }</span>
<span class="line">    },</span>
<span class="line">    // 延时操作 调用接口  等待</span>
<span class="line">    effects: {</span>
<span class="line">        *asyncAdd(action, { put, call }) { //redux-saga/effects {put,call}</span>
<span class="line">            yield call(delay, 1000);//把100传给delay并调用，yield会等待promise完成</span>
<span class="line">            yield put({ type: &#39;add&#39; });</span>
<span class="line">        }</span>
<span class="line">    },</span>
<span class="line">    subscriptions: {</span>
<span class="line">        keyboard({ dispatch }) {</span>
<span class="line">            keymaster(&#39;space&#39;, () =&gt; {</span>
<span class="line">                dispatch({ type: &#39;add&#39; });</span>
<span class="line">            });</span>
<span class="line">        },</span>
<span class="line">        changeTitle({ history }) {</span>
<span class="line">            setTimeout(function () {</span>
<span class="line">                history.listen(({ pathname }) =&gt; {</span>
<span class="line">                    document.title = pathname;</span>
<span class="line">                });</span>
<span class="line">            }, 1000);</span>
<span class="line"></span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">});</span>
<span class="line">app.model({</span>
<span class="line">    namespace: &#39;counter2&#39;,</span>
<span class="line">    state: { number: 0 },</span>
<span class="line">    reducers: {//接收老状态，返回新状态</span>
<span class="line">        add(state) { //dispatch({type:&#39;add&#39;});</span>
<span class="line">            return { number: state.number + 1 };</span>
<span class="line">        },</span>
<span class="line">        minus(state) {//dispatch({type:&#39;minus&#39;})</span>
<span class="line">            return { number: state.number - 1 };</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">});</span>
<span class="line">type Counter1Props = Counter1State &amp; { dispatch: Dispatch };</span>
<span class="line">const Counter1 = (props: Counter1Props) =&gt; {</span>
<span class="line">    return (</span>
<span class="line">        &lt;div&gt;</span>
<span class="line">            &lt;p&gt;{props.number}&lt;/p&gt;</span>
<span class="line">            &lt;button onClick={() =&gt; props.dispatch({ type: &#39;counter1/add&#39; })}&gt;add&lt;/button&gt;</span>
<span class="line">            &lt;button onClick={() =&gt; props.dispatch({ type: &#39;counter1/asyncAdd&#39; })}&gt;asyncAdd&lt;/button&gt;</span>
<span class="line">            &lt;button onClick={() =&gt; props.dispatch({ type: &#39;counter1/minus&#39; })}&gt;-&lt;/button&gt;</span>
<span class="line">        &lt;/div&gt;</span>
<span class="line">    )</span>
<span class="line">}</span>
<span class="line">type Counter2Props = Counter2State &amp; { dispatch: Dispatch };</span>
<span class="line">const Counter2 = (props: Counter2Props) =&gt; {</span>
<span class="line">    return (</span>
<span class="line">        &lt;div&gt;</span>
<span class="line">            &lt;p&gt;{props.number}&lt;/p&gt;</span>
<span class="line">            &lt;button onClick={() =&gt; props.dispatch({ type: &#39;counter2/add&#39; })}&gt;+&lt;/button&gt;</span>
<span class="line">            &lt;button onClick={() =&gt; props.dispatch({ type: &#39;counter2/minus&#39; })}&gt;-&lt;/button&gt;</span>
<span class="line">        &lt;/div&gt;</span>
<span class="line">    )</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">const mapStateToProps1 = (state: CombinedState): Counter1State =&gt; state.counter1;</span>
<span class="line">const ConnectedCounter = connect(</span>
<span class="line">    mapStateToProps1</span>
<span class="line">)(Counter1);</span>
<span class="line">const mapStateToProps2 = (state: CombinedState): Counter2State =&gt; state.counter2;</span>
<span class="line">const ConnectedCounter2 = connect(</span>
<span class="line">    mapStateToProps2</span>
<span class="line">)(Counter2);</span>
<span class="line">app.router(</span>
<span class="line">    (api?: RouterAPI) =&gt; {</span>
<span class="line">        let { history } = api!;</span>
<span class="line">        return (</span>
<span class="line">            (</span>
<span class="line">                &lt;Router history={history}&gt;</span>
<span class="line">                    &lt;&gt;</span>
<span class="line">                        &lt;Route path=&quot;/counter1&quot; component={ConnectedCounter} /&gt;</span>
<span class="line">                        &lt;Route path=&quot;/counter2&quot; component={ConnectedCounter2} /&gt;</span>
<span class="line">                    &lt;/&gt;</span>
<span class="line">                &lt;/Router&gt;</span>
<span class="line">            )</span>
<span class="line">        )</span>
<span class="line">    }</span>
<span class="line">);</span>
<span class="line"> app.start(&#39;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>namespace model 的命名空间，同时也是他在全局 state 上的属性，只能用字符串</li><li>state 初始值</li><li>reducers 以 key/value 格式定义 reducer。用于处理同步操作，唯一可以修改 state 的地方。由 action 触发。</li><li>effects 以 key/value 格式定义 effect。用于处理异步操作和业务逻辑，不直接修改 state。由 action 触发，可以触发 action，可以和服务器交互，可以获取全局 state 的数据等等。</li><li>subscriptions 以 key/value 格式定义 subscription。subscription 是订阅，用于订阅一个数据源，然后根据需要 dispatch 相应的 action。在 app.start() 时被执行，数据源可以是当前的时间、服务器的 websocket 连接、keyboard 输入、geolocation 变化、history 路由变化等等。</li></ul><h2 id="_7-构建应用" tabindex="-1"><a class="header-anchor" href="#_7-构建应用"><span>7 构建应用</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">$ npm run build</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="_8-参考" tabindex="-1"><a class="header-anchor" href="#_8-参考"><span>8. 参考</span></a></h2><ul><li><a href="https://dvajs.com/" target="_blank" rel="noopener noreferrer">dvajs</a></li><li><a href="https://www.npmjs.com/package/dva" target="_blank" rel="noopener noreferrer">dva-npm</a></li><li><a href="https://github.com/dvajs/dva" target="_blank" rel="noopener noreferrer">dva-github</a></li><li><a href="https://github.com/dvajs/dva/blob/master/docs/Concepts_zh-CN.md" target="_blank" rel="noopener noreferrer">8个概念</a></li><li><a href="http://cn.redux.js.org/index.html" target="_blank" rel="noopener noreferrer">redux</a></li><li><a href="https://redux-saga-in-chinese.js.org/" target="_blank" rel="noopener noreferrer">redux-saga</a></li><li><a href="http://www.ruanyifeng.com/blog/2015/04/generator.html" target="_blank" rel="noopener noreferrer">generator</a></li></ul>`,35)])])}const d=s(l,[["render",t]]),r=JSON.parse('{"path":"/strong/82.8.dva.html","title":"","lang":"en-US","frontmatter":{},"git":{"updatedTime":1681290319000,"contributors":[{"name":"yutao","username":"yutao","email":"642231346@qq.com","commits":1,"url":"https://github.com/yutao"}],"changelog":[{"hash":"f5ab8c9d34991ec274f7f652439afe5b2afb6147","time":1681290319000,"email":"642231346@qq.com","author":"yutao","message":"modify"}]},"filePathRelative":"strong/82.8.dva.md"}');export{d as comp,r as data};
