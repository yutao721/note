import{_ as a,c as n,a as s,o as l}from"./app-CD1YpnS1.js";const i={};function r(d,e){return l(),n("div",null,[...e[0]||(e[0]=[s(`<h2 id="_1-node-js-中有四种基本的流类型" tabindex="-1"><a class="header-anchor" href="#_1-node-js-中有四种基本的流类型"><span>1. Node.js 中有四种基本的流类型：</span></a></h2><ul><li>Readable - 可读的流 (例如 fs.createReadStream()).</li><li>Writable - 可写的流 (例如 fs.createWriteStream()).</li><li>Duplex - 可读写的流 (例如 net.Socket).</li><li>Transform - 在读写过程中可以修改和变换数据的 Duplex 流 (例如 zlib.createDeflate()).</li></ul><h2 id="_2-流中的数据有两种模式-二进制模式和对象模式" tabindex="-1"><a class="header-anchor" href="#_2-流中的数据有两种模式-二进制模式和对象模式"><span>2. 流中的数据有两种模式,二进制模式和对象模式.</span></a></h2><ul><li>二进制模式, 每个分块都是buffer或者string对象.</li><li>对象模式, 流内部处理的是一系列普通对象. <blockquote><p>所有使用 Node.js API 创建的流对象都只能操作 strings 和 Buffer对象。但是，通过一些第三方流的实现，你依然能够处理其它类型的 JavaScript 值 (除了 null，它在流处理中有特殊意义)。 这些流被认为是工作在 “对象模式”（object mode）。 在创建流的实例时，可以通过 objectMode 选项使流的实例切换到对象模式。试图将已经存在的流切换到对象模式是不安全的。</p></blockquote></li></ul><h2 id="_3-可读流的两种模式" tabindex="-1"><a class="header-anchor" href="#_3-可读流的两种模式"><span>3. 可读流的两种模式</span></a></h2><ul><li>可读流事实上工作在下面两种模式之一：<code>flowing</code> 和 <code>paused</code></li><li>在 flowing 模式下， 可读流自动从系统底层读取数据，并通过 EventEmitter 接口的事件尽快将数据提供给应用。</li><li>在 paused 模式下，必须显式调用 stream.read() 方法来从流中读取数据片段。</li><li>所有初始工作模式为 paused 的 Readable 流，可以通过下面三种途径切换到 flowing 模式： <ul><li>监听 &#39;data&#39; 事件</li><li>调用 stream.resume() 方法</li><li>调用 stream.pipe() 方法将数据发送到 Writable</li></ul></li><li>可读流可以通过下面途径切换到 paused 模式： <ul><li>如果不存在管道目标（pipe destination），可以通过调用 stream.pause() 方法实现。</li><li>如果存在管道目标，可以通过取消 &#39;data&#39; 事件监听，并调用 stream.unpipe() 方法移除所有管道目标来实现。</li></ul></li></ul><blockquote><p>如果 Readable 切换到 flowing 模式，且没有消费者处理流中的数据，这些数据将会丢失。 比如， 调用了 readable.resume() 方法却没有监听 &#39;data&#39; 事件，或是取消了 &#39;data&#39; 事件监听，就有可能出现这种情况。</p></blockquote><h2 id="_4-缓存区" tabindex="-1"><a class="header-anchor" href="#_4-缓存区"><span>4.缓存区</span></a></h2><ul><li><p>Writable 和 Readable 流都会将数据存储到内部的缓冲器（buffer）中。这些缓冲器可以 通过相应的 writable._writableState.getBuffer() 或 readable._readableState.buffer 来获取。</p></li><li><p>缓冲器的大小取决于传递给流构造函数的 highWaterMark 选项。 对于普通的流， highWaterMark 选项指定了总共的字节数。对于工作在对象模式的流， highWaterMark 指定了对象的总数。</p></li><li><p>当可读流的实现调用<code>stream.push(chunk)</code>方法时，数据被放到缓冲器中。如果流的消费者没有调用<code>stream.read()</code>方法， 这些数据会始终存在于内部队列中，直到被消费。</p></li><li><p>当内部可读缓冲器的大小达到 highWaterMark 指定的阈值时，流会暂停从底层资源读取数据，直到当前 缓冲器的数据被消费 (也就是说， 流会在内部停止调用 readable._read() 来填充可读缓冲器)。</p></li><li><p>可写流通过反复调用 writable.write(chunk) 方法将数据放到缓冲器。 当内部可写缓冲器的总大小小于 highWaterMark 指定的阈值时， 调用 writable.write() 将返回true。 一旦内部缓冲器的大小达到或超过 highWaterMark ，调用 writable.write() 将返回 false 。</p></li><li><p>stream API 的关键目标， 尤其对于 stream.pipe() 方法， 就是限制缓冲器数据大小，以达到可接受的程度。这样，对于读写速度不匹配的源头和目标，就不会超出可用的内存大小。</p></li><li><p>Duplex 和 Transform 都是可读写的。 在内部，它们都维护了 两个 相互独立的缓冲器用于读和写。 在维持了合理高效的数据流的同时，也使得对于读和写可以独立进行而互不影响。</p></li></ul><h2 id="_5-可读流的三种状态" tabindex="-1"><a class="header-anchor" href="#_5-可读流的三种状态"><span>5. 可读流的三种状态</span></a></h2><p>在任意时刻，任意可读流应确切处于下面三种状态之一：</p><ul><li><p>readable._readableState.flowing = null</p></li><li><p>readable._readableState.flowing = false</p></li><li><p>readable._readableState.flowing = true</p></li><li><p>若 readable._readableState.flowing 为 null，由于不存在数据消费者，可读流将不会产生数据。 在这个状态下，监听 &#39;data&#39; 事件，调用 readable.pipe() 方法，或者调用 readable.resume() 方法， readable._readableState.flowing 的值将会变为 true 。这时，随着数据生成，可读流开始频繁触发事件。</p></li><li><p>调用 readable.pause() 方法， readable.unpipe() 方法， 或者接收 “背压”（back pressure）， 将导致 readable._readableState.flowing 值变为 false。 这将暂停事件流，但 不会 暂停数据生成。 在这种情况下，为 &#39;data&#39; 事件设置监听函数不会导致 readable._readableState.flowing 变为 true。</p></li><li><p>当 readable._readableState.flowing 值为 false 时， 数据可能堆积到流的内部缓存中。</p></li></ul><h2 id="_6-readable" tabindex="-1"><a class="header-anchor" href="#_6-readable"><span>6.readable</span></a></h2><p>&#39;readable&#39; 事件将在流中有数据可供读取时触发。在某些情况下，为 &#39;readable&#39; 事件添加回调将会导致一些数据被读取到内部缓存中。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">const readable = getReadableStreamSomehow();</span>
<span class="line">readable.on(&#39;readable&#39;, () =&gt; {</span>
<span class="line">  // 有一些数据可读了</span>
<span class="line">});</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>当到达流数据尾部时， &#39;readable&#39; 事件也会触发。触发顺序在 &#39;end&#39; 事件之前。</li><li>事实上， &#39;readable&#39; 事件表明流有了新的动态：要么是有了新的数据，要么是到了流的尾部。 对于前者， stream.read() 将返回可用的数据。而对于后者， stream.read() 将返回 null。</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">let fs =require(&#39;fs&#39;);</span>
<span class="line">let rs = fs.createReadStream(&#39;./1.txt&#39;,{</span>
<span class="line">  start:3,</span>
<span class="line">  end:8,</span>
<span class="line">  encoding:&#39;utf8&#39;,</span>
<span class="line">  highWaterMark:3</span>
<span class="line">});</span>
<span class="line">rs.on(&#39;readable&#39;,function () {</span>
<span class="line">  console.log(&#39;readable&#39;);</span>
<span class="line">  console.log(&#39;rs._readableState.buffer.length&#39;,rs._readableState.length);</span>
<span class="line">  let d = rs.read(1);</span>
<span class="line">  console.log(&#39;rs._readableState.buffer.length&#39;,rs._readableState.length);</span>
<span class="line">  console.log(d);</span>
<span class="line">  setTimeout(()=&gt;{</span>
<span class="line">      console.log(&#39;rs._readableState.buffer.length&#39;,rs._readableState.length);</span>
<span class="line">  },500)</span>
<span class="line">});</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-流的经典应用" tabindex="-1"><a class="header-anchor" href="#_7-流的经典应用"><span>7.流的经典应用</span></a></h2><h3 id="_7-1-行读取器" tabindex="-1"><a class="header-anchor" href="#_7-1-行读取器"><span>7.1 行读取器</span></a></h3><h4 id="_7-1-1-换行和回车" tabindex="-1"><a class="header-anchor" href="#_7-1-1-换行和回车"><span>7.1.1 换行和回车</span></a></h4><ul><li>以前的打印要每秒可以打印10个字符，换行城要0.2秒，正要可以打印2个字符。</li><li>研制人员就是在每行后面加两个表示结束的字符。一个叫做&quot;回车&quot;，告诉打字机把打印头定位在左边界；另一个叫做&quot;换行&quot;，告诉打字机把纸向下移一行。</li><li>Unix系统里，每行结尾只有换行&quot;(line feed)&quot;，即&quot;\\n&quot;,</li><li>Windows系统里面，每行结尾是&quot;&lt;回车&gt;&lt;换行&gt;&quot;，即&quot;\\r\\n&quot;</li><li>Mac系统里，每行结尾是&quot;回车&quot;(carriage return)，即&quot;\\r&quot;</li><li>在ASCII码里 <ul><li>换行 \\n 10 0A</li><li>回车 \\r 13 0D</li></ul></li></ul><p><a href="http://ascii.911cha.com/" target="_blank" rel="noopener noreferrer">ASCII</a></p><h4 id="_7-1-2-代码" tabindex="-1"><a class="header-anchor" href="#_7-1-2-代码"><span>7.1.2 代码</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">let fs = require(&#39;fs&#39;);</span>
<span class="line">let EventEmitter = require(&#39;events&#39;);</span>
<span class="line">let util = require(&#39;util&#39;);</span>
<span class="line">util.inherits(LineReader, EventEmitter)</span>
<span class="line">fs.readFile(&#39;./1.txt&#39;,function (err,data) {</span>
<span class="line">    console.log(data);</span>
<span class="line">})</span>
<span class="line">function LineReader(path) {</span>
<span class="line">    EventEmitter.call(this);</span>
<span class="line">    this._rs = fs.createReadStream(path);</span>
<span class="line">    this.RETURN = 0x0D;// \\r 13</span>
<span class="line">    this.NEW_LINE = 0x0A;// \\n 10</span>
<span class="line">    this.on(&#39;newListener&#39;, function (type, listener) {</span>
<span class="line">        if (type == &#39;newLine&#39;) {</span>
<span class="line">            let buffer = [];</span>
<span class="line">            this._rs.on(&#39;readable&#39;, () =&gt; {</span>
<span class="line">                let bytes;</span>
<span class="line">                while (null != (bytes = this._rs.read(1))) {</span>
<span class="line">                    let ch = bytes[0];</span>
<span class="line">                    switch (ch) {</span>
<span class="line">                        case this.RETURN:</span>
<span class="line">                            this.emit(&#39;newLine&#39;, Buffer.from(buffer));</span>
<span class="line">                            buffer.length = 0;</span>
<span class="line">                            let nByte = this._rs.read(1);</span>
<span class="line">                            if (nByte &amp;&amp; nByte[0] != this.NEW_LINE) {</span>
<span class="line">                                buffer.push(nByte[0]);</span>
<span class="line">                            }</span>
<span class="line">                            break;</span>
<span class="line">                        case this.NEW_LINE:</span>
<span class="line">                            this.emit(&#39;newLine&#39;, Buffer.from(buffer));</span>
<span class="line">                            buffer.length = 0;</span>
<span class="line">                            break;</span>
<span class="line">                        default:</span>
<span class="line">                            buffer.push(bytes[0]);</span>
<span class="line">                            break;</span>
<span class="line">                    }</span>
<span class="line">                }</span>
<span class="line">            });</span>
<span class="line">            this._rs.on(&#39;end&#39;, () =&gt; {</span>
<span class="line">                if (buffer.length &gt; 0) {</span>
<span class="line">                    this.emit(&#39;newLine&#39;, Buffer.from(buffer));</span>
<span class="line">                    buffer.length = 0;</span>
<span class="line">                    this.emit(&#39;end&#39;);</span>
<span class="line">                }</span>
<span class="line">            })</span>
<span class="line">        }</span>
<span class="line">    });</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">var lineReader = new LineReader(&#39;./1.txt&#39;);</span>
<span class="line">lineReader.on(&#39;newLine&#39;, function (data) {</span>
<span class="line">    console.log(data.toString());</span>
<span class="line">}).on(&#39;end&#39;, function () {</span>
<span class="line">    console.log(&quot;end&quot;);</span>
<span class="line">})</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24)])])}const p=a(i,[["render",r]]),c=JSON.parse('{"path":"/strong/11.Stream-2.html","title":"","lang":"en-US","frontmatter":{},"git":{"updatedTime":1681290319000,"contributors":[{"name":"yutao","username":"yutao","email":"642231346@qq.com","commits":1,"url":"https://github.com/yutao"}],"changelog":[{"hash":"f5ab8c9d34991ec274f7f652439afe5b2afb6147","time":1681290319000,"email":"642231346@qq.com","author":"yutao","message":"modify"}]},"filePathRelative":"strong/11.Stream-2.md"}');export{p as comp,c as data};
