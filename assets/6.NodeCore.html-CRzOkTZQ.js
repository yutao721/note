import{_ as n,c as s,a as l,o as i}from"./app-CD1YpnS1.js";const a={};function t(d,e){return i(),s("div",null,[...e[0]||(e[0]=[l(`<h2 id="_1-控制台" tabindex="-1"><a class="header-anchor" href="#_1-控制台"><span>1. 控制台</span></a></h2><p>在Node.js中，使用<code>console</code>对象代表控制台(在操作系统中表现为一个操作系统指定的字符界面，比如 Window中的命令提示窗口)。</p><ul><li>console.log</li><li>console.info</li><li>console.error 重定向到文件</li><li>console.warn</li><li>console.dir</li><li>console.time</li><li>console.timeEnd</li><li>console.trace</li><li>console.assert</li></ul><h2 id="_2-全局作用域" tabindex="-1"><a class="header-anchor" href="#_2-全局作用域"><span>2. 全局作用域</span></a></h2><ul><li>全局作用域(global)可以定义一些不需要通过任何模块的加载即可使用的变量、函数或类</li><li>定义全局变量时变量会成为global的属性。</li><li>永远不要不使用var关键字定义变量，以免污染全局作用域</li><li>setTimeout clearTimeout</li><li>setInterval clearInterval</li><li>unref和ref</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">let test = function(){</span>
<span class="line">  console.log(&#39;callback&#39;);</span>
<span class="line">}</span>
<span class="line">let timer = setInterval(test,1000);</span>
<span class="line">timer.unref();</span>
<span class="line">setTimeout(function(){</span>
<span class="line">  timer.ref();</span>
<span class="line">},3000)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-函数" tabindex="-1"><a class="header-anchor" href="#_3-函数"><span>3. 函数</span></a></h2><ul><li>require</li><li>模块加载过程</li><li>require.resolve</li><li>模板缓存(require.cache)</li><li>require.main</li><li>模块导出<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">module.exports, require, module, filename, dirname</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li></ul><h2 id="_4-process" tabindex="-1"><a class="header-anchor" href="#_4-process"><span>4. process</span></a></h2><h3 id="_4-1-process对象" tabindex="-1"><a class="header-anchor" href="#_4-1-process对象"><span>4.1 process对象</span></a></h3><p>在node.js里，process 对象代表node.js应用程序，可以获取应用程序的用户，运行环境等各种信息</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">process.argv.forEach(function(item){</span>
<span class="line">  console.log(item);</span>
<span class="line">});</span>
<span class="line">process.on(&#39;exit&#39;,function(){</span>
<span class="line">  console.log(&#39;clear&#39;);</span>
<span class="line">});</span>
<span class="line"></span>
<span class="line">process.on(&#39;uncaughtException&#39;,function(err){</span>
<span class="line">  console.log(err);</span>
<span class="line">})</span>
<span class="line"></span>
<span class="line">console.log(process.memoryUsage());</span>
<span class="line">console.log(process.cwd());</span>
<span class="line">console.log(__dirname);</span>
<span class="line">process.chdir(&#39;..&#39;);</span>
<span class="line">console.log(process.cwd());</span>
<span class="line">console.log(__dirname);</span>
<span class="line"></span>
<span class="line">function err(){</span>
<span class="line"> throw new Error(&#39;报错了&#39;);</span>
<span class="line">}</span>
<span class="line">err();</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-process-nexttick-setimmediate" tabindex="-1"><a class="header-anchor" href="#_4-2-process-nexttick-setimmediate"><span>4.2 process.nextTick &amp; setImmediate</span></a></h3><ul><li>process.nextTick()方法将 callback 添加到&quot;next tick 队列&quot;。 一旦当前事件轮询队列的任务全部完成，在next tick队列中的所有callbacks会被依次调用。</li><li>setImmediate预定立即执行的 callback，它是在 I/O 事件的回调之后被触发</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">setImmediate(function(){</span>
<span class="line">  console.log(&#39;4&#39;);</span>
<span class="line">});</span>
<span class="line">setImmediate(function(){</span>
<span class="line">  console.log(&#39;5&#39;);</span>
<span class="line">});</span>
<span class="line">process.nextTick(function(){</span>
<span class="line">  console.log(&#39;1&#39;);</span>
<span class="line">  process.nextTick(function(){</span>
<span class="line">    console.log(&#39;2&#39;);</span>
<span class="line">    process.nextTick(function(){</span>
<span class="line">      console.log(&#39;3&#39;);</span>
<span class="line">    });</span>
<span class="line">  });</span>
<span class="line">});</span>
<span class="line"></span>
<span class="line">console.log(&#39;next&#39;);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-eventemitter" tabindex="-1"><a class="header-anchor" href="#_5-eventemitter"><span>5. EventEmitter</span></a></h2><p>在Node.js的用于实现各种事件处理的event模块中，定义了EventEmitter类，所以可能触发事件的对象都是一个继承自EventEmitter类的子类实例对象。</p><table><thead><tr><th style="text-align:left;">方法名和参数</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">addListener(event,listener)</td><td style="text-align:left;">对指定事件绑定事件处理函数</td></tr><tr><td style="text-align:left;">on(event,listener)</td><td style="text-align:left;">对指定事件绑定事件处理函数</td></tr><tr><td style="text-align:left;">once(event,listener)</td><td style="text-align:left;">对指定事件指定只执行一次的事件处理函数</td></tr><tr><td style="text-align:left;">removeListener(event,listener)</td><td style="text-align:left;">对指定事件解除事件处理函数</td></tr><tr><td style="text-align:left;">removeAllListeners([event])</td><td style="text-align:left;">对指定事件解除所有的事件处理函数</td></tr><tr><td style="text-align:left;">setMaxListeners(n)</td><td style="text-align:left;">指定事件处理函数的最大数量.n为整数值，代表最大的可指定事件处理函数的数量</td></tr><tr><td style="text-align:left;">listeners(event)</td><td style="text-align:left;">获取指定事件的所有事件处理函数</td></tr><tr><td style="text-align:left;">emit(event,[arg1],[arg2],[...])</td><td style="text-align:left;">手工触发指定事件</td></tr></tbody></table><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">let EventEmitter = require(&#39;./events&#39;);</span>
<span class="line">let util = require(&#39;util&#39;);</span>
<span class="line">util.inherits(Bell,EventEmitter);</span>
<span class="line">function Bell(){</span>
<span class="line">  EventEmitter.call(this);</span>
<span class="line">}</span>
<span class="line">let bell = new Bell();</span>
<span class="line">bell.on(&#39;newListener&#39;,function(type,listener){</span>
<span class="line">  console.log(\`对 \${type}  事件增加\${listener}\`);</span>
<span class="line">});</span>
<span class="line">bell.on(&#39;removeListener&#39;,function(type,listener){</span>
<span class="line">  console.log(\`对\${type} 事件删除\${listener}\`);</span>
<span class="line">});</span>
<span class="line">function teacherIn(thing){</span>
<span class="line">  console.log(\`老师带\${thing}进教室\`);</span>
<span class="line">}</span>
<span class="line">function studentIn(thing){</span>
<span class="line">  console.log(\`学生带\${thing}进教室\`);</span>
<span class="line">}</span>
<span class="line">function masterIn(thing){</span>
<span class="line">  console.log(\`校长带\${thing}进教室\`);</span>
<span class="line">}</span>
<span class="line">bell.on(&#39;响&#39;,teacherIn);</span>
<span class="line">bell.on(&#39;响&#39;,studentIn);</span>
<span class="line">bell.once(&#39;响&#39;,masterIn);</span>
<span class="line">bell.emit(&#39;响&#39;,&#39;书&#39;);</span>
<span class="line">console.log(&#39;==============&#39;);</span>
<span class="line">bell.emit(&#39;响&#39;,&#39;书&#39;);</span>
<span class="line">console.log(&#39;==============&#39;);</span>
<span class="line">bell.removeAllListeners(&#39;响&#39;);</span>
<span class="line">console.log(&#39;==============&#39;);</span>
<span class="line">bell.emit(&#39;响&#39;,&#39;书&#39;);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">function EventEmitter(){</span>
<span class="line">  this.events = {};//会把所有的事件监听函数放在这个对象里保存</span>
<span class="line">  //指定给一个事件类型增加的监听函数数量最多有多少个</span>
<span class="line">  this._maxListeners = 10;</span>
<span class="line">}</span>
<span class="line">EventEmitter.prototype.setMaxListeners = function(maxListeners){</span>
<span class="line">  this._maxListeners = maxListeners;</span>
<span class="line">}</span>
<span class="line">EventEmitter.prototype.listeners = function(event){</span>
<span class="line">  return this.events[event];</span>
<span class="line">}</span>
<span class="line">//给指定的事件绑定事件处理函数，1参数是事件类型 2参数是事件监听函数</span>
<span class="line">EventEmitter.prototype.on = EventEmitter.prototype.addListener = function(type,listener){</span>
<span class="line">  if(this.events[type]){</span>
<span class="line">    this.events[type].push(listener);</span>
<span class="line">    if(this._maxListeners!=0&amp;&amp;this.events[type].length&gt;this._maxListeners){</span>
<span class="line">      console.error(\`MaxListenersExceededWarning: Possible EventEmitter memory leak detected. \${this.events[type].length} \${type} listeners added. Use emitter.setMaxListeners() to increase limit\`);</span>
<span class="line">    }</span>
<span class="line">  }else{</span>
<span class="line">    //如果以前没有添加到此事件的监听函数，则赋一个数组</span>
<span class="line">    this.events[type] = [listener];</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line">EventEmitter.prototype.once = function(type,listener){</span>
<span class="line">  //用完即焚</span>
<span class="line"> let  wrapper = (...rest)=&gt;{</span>
<span class="line">   listener.apply(this);//先让原始的监听函数执行</span>
<span class="line">   this.removeListener(type,wrapper);</span>
<span class="line"> }</span>
<span class="line"> this.on(type,wrapper);</span>
<span class="line">}</span>
<span class="line">EventEmitter.prototype.removeListener = function(type,listener){</span>
<span class="line">  if(this.events[type]){</span>
<span class="line">    this.events[type] = this.events[type].filter(l=&gt;l!=listener)</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line">//移除某个事件的所有监听函数</span>
<span class="line">EventEmitter.prototype.removeAllListeners = function(type){</span>
<span class="line">  delete this.events[type];</span>
<span class="line">}</span>
<span class="line">EventEmitter.prototype.emit = function(type,...rest){</span>
<span class="line">  this.events[type]&amp;&amp;this.events[type].forEach(listener=&gt;listener.apply(this,rest));</span>
<span class="line">}</span>
<span class="line">module.exports = EventEmitter;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="util" tabindex="-1"><a class="header-anchor" href="#util"><span>util</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">var util = require(&#39;util&#39;);</span>
<span class="line">//util.inherit();</span>
<span class="line">console.log(util.inspect({name:&#39;zfpx&#39;}));</span>
<span class="line">console.log(util.isArray([]));</span>
<span class="line">console.log(util.isRegExp(/\\d/));</span>
<span class="line">console.log(util.isDate(new Date()));</span>
<span class="line">console.log(util.isError(new Error));</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-node断点调试" tabindex="-1"><a class="header-anchor" href="#_6-node断点调试"><span>6. node断点调试</span></a></h2><p>V8 提供了一个强大的调试器，可以通过 TCP 协议从外部访问。Nodejs提供了一个内建调试器来帮助开发者调试应用程序。想要开启调试器我们需要在代码中加入debugger标签，当Nodejs执行到debugger标签时会自动暂停（debugger标签相当于在代码中开启一个断点）。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">var a = &#39;a&#39;;</span>
<span class="line">var b = &#39;b&#39;;</span>
<span class="line"></span>
<span class="line">debugger;</span>
<span class="line"></span>
<span class="line">var all = a + &#39; &#39; + b;</span>
<span class="line">console.log(all);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th style="text-align:left;">命令</th><th style="text-align:left;">用途</th></tr></thead><tbody><tr><td style="text-align:left;">c</td><td style="text-align:left;">继续执行到下一个断点处</td></tr><tr><td style="text-align:left;">next,n</td><td style="text-align:left;">单步执行</td></tr><tr><td style="text-align:left;">step,s</td><td style="text-align:left;">单步进入函数</td></tr><tr><td style="text-align:left;">out,o</td><td style="text-align:left;">退出当前函数</td></tr><tr><td style="text-align:left;">setBreakpoint(10),sb(10)</td><td style="text-align:left;">在第10行设置断点</td></tr><tr><td style="text-align:left;">repl</td><td style="text-align:left;">打开求值环境，ctrl_c退回debug模式</td></tr><tr><td style="text-align:left;">watch(exp)</td><td style="text-align:left;">把表达式添加监视列表</td></tr><tr><td style="text-align:left;">watchers</td><td style="text-align:left;">显示所有表达式的值</td></tr></tbody></table><p><a href="https://nodejs.org/api/debugger.html" target="_blank" rel="noopener noreferrer">debugger</a></p>`,27)])])}const c=n(a,[["render",t]]),p=JSON.parse('{"path":"/strong/6.NodeCore.html","title":"","lang":"en-US","frontmatter":{},"git":{"updatedTime":1681290319000,"contributors":[{"name":"yutao","username":"yutao","email":"642231346@qq.com","commits":1,"url":"https://github.com/yutao"}],"changelog":[{"hash":"f5ab8c9d34991ec274f7f652439afe5b2afb6147","time":1681290319000,"email":"642231346@qq.com","author":"yutao","message":"modify"}]},"filePathRelative":"strong/6.NodeCore.md"}');export{c as comp,p as data};
