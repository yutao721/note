import{_ as s,c as e,a,o as l}from"./app-CD1YpnS1.js";const i={};function d(c,n){return l(),e("div",null,[...n[0]||(n[0]=[a(`<h2 id="_1-异步" tabindex="-1"><a class="header-anchor" href="#_1-异步"><span>1. 异步</span></a></h2><ul><li>所谓&quot;异步&quot;，简单说就是一个任务分成两段，先执行第一段，然后转而执行其他任务，等做好了准备，再回过头执行第二段,比如，有一个任务是读取文件进行处理，异步的执行过程就是下面这样。</li></ul><p><img src="http://img.zhufengpeixun.cn/asyncfunc1.png" alt=""></p><p>这种不连续的执行，就叫做异步。相应地，连续的执行，就叫做同步。</p><p><img src="http://img.zhufengpeixun.cn/syncfunc.png" alt=""></p><h2 id="_2-高阶函数" tabindex="-1"><a class="header-anchor" href="#_2-高阶函数"><span>2.高阶函数</span></a></h2><p>函数作为一等公民，可以作为参数和返回值</p><h3 id="_2-1-可以用于批量生成函数" tabindex="-1"><a class="header-anchor" href="#_2-1-可以用于批量生成函数"><span>2.1 可以用于批量生成函数</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">let toString = Object.prototype.toString;</span>
<span class="line">let isString = function (obj) {</span>
<span class="line">  return toString.call(obj) == \`[object String]\`;</span>
<span class="line">}</span>
<span class="line">let isFunction = function (obj) {</span>
<span class="line">  return toString.call(obj) == \`[object Function]\`;</span>
<span class="line">}</span>
<span class="line">let isType = function (type) {</span>
<span class="line">  return function (obj) {</span>
<span class="line">    return toString.call(obj) == \`[object \${type}]\`;</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-可以用于需要调用多次才执行的函数" tabindex="-1"><a class="header-anchor" href="#_2-2-可以用于需要调用多次才执行的函数"><span>2.2 可以用于需要调用多次才执行的函数</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">let after = function(times,task){</span>
<span class="line">  return function(){</span>
<span class="line">    if(times--==1){</span>
<span class="line">      return task.apply(this,arguments);</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line">let fn = after(3,function(){</span>
<span class="line">  console.log(3);});</span>
<span class="line">fn();</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-异步编程的语法目标-就是怎样让它更像同步编程-有以下几种" tabindex="-1"><a class="header-anchor" href="#_3-异步编程的语法目标-就是怎样让它更像同步编程-有以下几种"><span>3. 异步编程的语法目标，就是怎样让它更像同步编程,有以下几种</span></a></h2><ul><li>回调函数实现</li><li>事件监听</li><li>发布订阅</li><li>Promise/A+ 和生成器函数</li><li>async/await</li></ul><h2 id="_4-回调" tabindex="-1"><a class="header-anchor" href="#_4-回调"><span>4. 回调</span></a></h2><p>所谓回调函数，就是把任务的第二段单独写在一个函数里面，等到重新执行这个任务的时候，就直接调用这个函数</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">fs.readFile(&#39;某个文件&#39;, function (err, data) {</span>
<span class="line">  if (err) throw err;</span>
<span class="line">  console.log(data);</span>
<span class="line">});</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这是一个错误优先的回调函数(error-first callbacks),这也是Node.js本身的特点之一。</p><h2 id="_5-回调的问题" tabindex="-1"><a class="header-anchor" href="#_5-回调的问题"><span>5 回调的问题</span></a></h2><h3 id="_5-1-异常处理" tabindex="-1"><a class="header-anchor" href="#_5-1-异常处理"><span>5.1 异常处理</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">try{</span>
<span class="line">  //xxx</span>
<span class="line">}catch(e){//TODO}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>异步代码时<code>try catch</code>不再生效</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">let async = function(callback){</span>
<span class="line">  try{</span>
<span class="line">    setTimeout(function(){</span>
<span class="line">      callback();</span>
<span class="line">    },1000)</span>
<span class="line">  }catch(e){</span>
<span class="line">    console.log(&#39;捕获错误&#39;,e);</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">async(function(){</span>
<span class="line">  console.log(t);</span>
<span class="line">});</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因为这个回调函数被存放了起来，直到下一个事件环的时候才会取出,try只能捕获当前循环内的异常，对callback异步无能为力。</p><p>Node在处理异常有一个约定，将异常作为回调的第一个实参传回，如果为空表示没有出错。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">async(function(err,callback){</span>
<span class="line">  if(err){</span>
<span class="line">    console.log(err);</span>
<span class="line">  }</span>
<span class="line">});</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>异步方法也要遵循两个原则</p><ul><li>必须在异步之后调用传入的回调函数</li><li>如果出错了要向回调函数传入异常供调用者判断<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">let async = function(callback){</span>
<span class="line">try{</span>
<span class="line">  setTimeout(function(){</span>
<span class="line">    if(success)</span>
<span class="line">      callback(null);</span>
<span class="line">    else</span>
<span class="line">      callback(&#39;错误&#39;);</span>
<span class="line">  },1000)</span>
<span class="line">}catch(e){</span>
<span class="line">  console.log(&#39;捕获错误&#39;,e);</span>
<span class="line">}</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="_5-2-回调地狱" tabindex="-1"><a class="header-anchor" href="#_5-2-回调地狱"><span>5.2 回调地狱</span></a></h3><p>异步多级依赖的情况下嵌套非常深，代码难以阅读的维护</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">let fs = require(&#39;fs&#39;);</span>
<span class="line">fs.readFile(&#39;template.txt&#39;,&#39;utf8&#39;,function(err,template){</span>
<span class="line">fs.readFile(&#39;data.txt&#39;,&#39;utf8&#39;,function(err,data){</span>
<span class="line">  console.log(template+&#39; &#39;+data);</span>
<span class="line">})</span>
<span class="line">})</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-异步流程解决方案" tabindex="-1"><a class="header-anchor" href="#_6-异步流程解决方案"><span>6. 异步流程解决方案</span></a></h2><h3 id="_6-1-事件发布-订阅模型" tabindex="-1"><a class="header-anchor" href="#_6-1-事件发布-订阅模型"><span>6.1 事件发布/订阅模型</span></a></h3><p>订阅事件实现了一个事件与多个回调函数的关联</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">let fs = require(&#39;fs&#39;);</span>
<span class="line">let EventEmitter = require(&#39;events&#39;);</span>
<span class="line">let eve = new EventEmitter();</span>
<span class="line">let html = {};</span>
<span class="line">eve.on(&#39;ready&#39;,function(key,value){</span>
<span class="line">  html[key] = value;</span>
<span class="line">  if(Object.keys(html).length==2){</span>
<span class="line">    console.log(html);</span>
<span class="line">  }</span>
<span class="line">});</span>
<span class="line">function render(){</span>
<span class="line">  fs.readFile(&#39;template.txt&#39;,&#39;utf8&#39;,function(err,template){</span>
<span class="line">    eve.emit(&#39;ready&#39;,&#39;template&#39;,template);</span>
<span class="line">  })</span>
<span class="line">  fs.readFile(&#39;data.txt&#39;,&#39;utf8&#39;,function(err,data){</span>
<span class="line">    eve.emit(&#39;ready&#39;,&#39;data&#39;,data);</span>
<span class="line">  })</span>
<span class="line">}</span>
<span class="line">render();</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-2-哨兵变量" tabindex="-1"><a class="header-anchor" href="#_6-2-哨兵变量"><span>6.2 哨兵变量</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">let fs = require(&#39;fs&#39;);</span>
<span class="line"></span>
<span class="line">let after = function(times,callback){</span>
<span class="line">  let result = {};</span>
<span class="line">  return function(key,value){</span>
<span class="line">    result[key] = value;</span>
<span class="line">    if(Object.keys(result).length==times){</span>
<span class="line">      callback(result);</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line">let done = after(2,function(result){</span>
<span class="line">  console.log(result);</span>
<span class="line">});</span>
<span class="line"></span>
<span class="line">function render(){</span>
<span class="line">  fs.readFile(&#39;template.txt&#39;,&#39;utf8&#39;,function(err,template){</span>
<span class="line">    done(&#39;template&#39;,template);</span>
<span class="line">  })</span>
<span class="line">  fs.readFile(&#39;data.txt&#39;,&#39;utf8&#39;,function(err,data){</span>
<span class="line">    done(&#39;data&#39;,data);</span>
<span class="line">  })</span>
<span class="line">}</span>
<span class="line">rende</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-3-promise-deferred模式" tabindex="-1"><a class="header-anchor" href="#_6-3-promise-deferred模式"><span>6.3 Promise/Deferred模式</span></a></h3><h3 id="_6-4-生成器generators-yield" tabindex="-1"><a class="header-anchor" href="#_6-4-生成器generators-yield"><span>6.4 生成器Generators/ yield</span></a></h3><ul><li>当你在执行一个函数的时候，你可以在某个点暂停函数的执行，并且做一些其他工作，然后再返回这个函数继续执行， 甚至是携带一些新的值，然后继续执行。</li><li>上面描述的场景正是JavaScript生成器函数所致力于解决的问题。当我们调用一个生成器函数的时候，它并不会立即执行， 而是需要我们手动的去执行迭代操作（next方法）。也就是说，你调用生成器函数，它会返回给你一个迭代器。迭代器会遍历每个中断点。</li><li>next 方法返回值的 value 属性，是 Generator 函数向外输出数据；next 方法还可以接受参数，这是向 Generator 函数体内输入数据</li></ul><h4 id="_6-4-1-生成器的使用" tabindex="-1"><a class="header-anchor" href="#_6-4-1-生成器的使用"><span>6.4.1 生成器的使用</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">function* foo () {</span>
<span class="line">  var index = 0;</span>
<span class="line">  while (index &lt; 2) {</span>
<span class="line">    yield index++; //暂停函数执行，并执行yield后的操作</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line">var bar =  foo(); // 返回的其实是一个迭代器</span>
<span class="line"></span>
<span class="line">console.log(bar.next());    // { value: 0, done: false }</span>
<span class="line">console.log(bar.next());    // { value: 1, done: false }</span>
<span class="line">console.log(bar.next());    // { value: undefined, done: true }</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_6-4-2-co" tabindex="-1"><a class="header-anchor" href="#_6-4-2-co"><span>6.4.2 Co</span></a></h4><p><code>co</code>是一个为<code>Node.js</code>和浏览器打造的基于生成器的流程控制工具，借助于Promise，你可以使用更加优雅的方式编写非阻塞代码。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">let fs = require(&#39;fs&#39;);</span>
<span class="line">function readFile(filename) {</span>
<span class="line">  return new Promise(function (resolve, reject) {</span>
<span class="line">    fs.readFile(filename, function (err, data) {</span>
<span class="line">      if (err)</span>
<span class="line">        reject(err);</span>
<span class="line">      else</span>
<span class="line">        resolve(data);</span>
<span class="line">    })</span>
<span class="line">  })</span>
<span class="line">}</span>
<span class="line">function *read() {</span>
<span class="line">  let template = yield readFile(&#39;./template.txt&#39;);</span>
<span class="line">  let data = yield readFile(&#39;./data.txt&#39;);</span>
<span class="line">  return template + &#39;+&#39; + data;</span>
<span class="line">}</span>
<span class="line">co(read).then(function (data) {</span>
<span class="line">  console.log(data);</span>
<span class="line">}, function (err) {</span>
<span class="line">  console.log(err);</span>
<span class="line">});</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">function co(gen) {</span>
<span class="line">  let it = gen();</span>
<span class="line">  return new Promise(function (resolve, reject) {</span>
<span class="line">    !function next(lastVal) {</span>
<span class="line">      let {value, done} = it.next(lastVal);</span>
<span class="line">      if (done) {</span>
<span class="line">        resolve(value);</span>
<span class="line">      } else {</span>
<span class="line">        value.then(next, reason =&gt; reject(reason));</span>
<span class="line">      }</span>
<span class="line">    }();</span>
<span class="line">  });</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-5-async-await" tabindex="-1"><a class="header-anchor" href="#_6-5-async-await"><span>6.5 Async/ await</span></a></h2><p>使用<code>async</code>关键字，你可以轻松地达成之前使用生成器和co函数所做到的工作</p><h3 id="_6-5-1-async的优点" tabindex="-1"><a class="header-anchor" href="#_6-5-1-async的优点"><span>6.5.1 Async的优点</span></a></h3><ul><li>内置执行器</li><li>更好的语义</li><li>更广的适用性</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">let fs = require(&#39;fs&#39;);</span>
<span class="line">function readFile(filename) {</span>
<span class="line">  return new Promise(function (resolve, reject) {</span>
<span class="line">    fs.readFile(filename, &#39;utf8&#39;, function (err, data) {</span>
<span class="line">      if (err)</span>
<span class="line">        reject(err);</span>
<span class="line">      else</span>
<span class="line">        resolve(data);</span>
<span class="line">    })</span>
<span class="line">  })</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">async function read() {</span>
<span class="line">  let template = await readFile(&#39;./template.txt&#39;);</span>
<span class="line">  let data = await readFile(&#39;./data.txt&#39;);</span>
<span class="line">  return template + &#39;+&#39; + data;</span>
<span class="line">}</span>
<span class="line">let result = read();</span>
<span class="line">result.then(data=&gt;console.log(data));</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-5-2-async-函数的实现" tabindex="-1"><a class="header-anchor" href="#_6-5-2-async-函数的实现"><span>6.5.2 async 函数的实现</span></a></h3><p>async 函数的实现，就是将 Generator 函数和自动执行器，包装在一个函数里。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">async function read() {</span>
<span class="line">  let template = await readFile(&#39;./template.txt&#39;);</span>
<span class="line">  let data = await readFile(&#39;./data.txt&#39;);</span>
<span class="line">  return template + &#39;+&#39; + data;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">// 等同于</span>
<span class="line">function read(){</span>
<span class="line">  return co(function*() {</span>
<span class="line">    let template = yield readFile(&#39;./template.txt&#39;);</span>
<span class="line">    let data = yield readFile(&#39;./data.txt&#39;);</span>
<span class="line">    return template + &#39;+&#39; + data;</span>
<span class="line">  });</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function" target="_blank" rel="noopener noreferrer">async_function</a>- <a href="http://www.ruanyifeng.com/blog/2015/04/generator.html" target="_blank" rel="noopener noreferrer">generator</a></li></ul>`,54)])])}const t=s(i,[["render",d]]),p=JSON.parse('{"path":"/strong/0.Async.html","title":"","lang":"en-US","frontmatter":{},"git":{"updatedTime":1681290319000,"contributors":[{"name":"yutao","username":"yutao","email":"642231346@qq.com","commits":1,"url":"https://github.com/yutao"}],"changelog":[{"hash":"f5ab8c9d34991ec274f7f652439afe5b2afb6147","time":1681290319000,"email":"642231346@qq.com","author":"yutao","message":"modify"}]},"filePathRelative":"strong/0.Async.md"}');export{t as comp,p as data};
