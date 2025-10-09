import{_ as n,c as a,a as e,o as i}from"./app-CD1YpnS1.js";const l={};function c(d,s){return i(),a("div",null,[...s[0]||(s[0]=[e(`<h2 id="_1-自定义可读流" tabindex="-1"><a class="header-anchor" href="#_1-自定义可读流"><span>1. 自定义可读流</span></a></h2><p>为了实现可读流，引用Readable接口并用它构造新对象</p><ul><li>我们可以直接把供使用的数据push出去。</li><li>当push一个null对象就意味着我们想发出信号——这个流没有更多数据了。</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">var stream = require(&#39;stream&#39;);</span>
<span class="line">var util = require(&#39;util&#39;);</span>
<span class="line">util.inherits(Counter, stream.Readable);</span>
<span class="line">function Counter(options) {</span>
<span class="line">    stream.Readable.call(this, options);</span>
<span class="line">    this._index = 0;</span>
<span class="line">}</span>
<span class="line">Counter.prototype._read = function() {</span>
<span class="line">    if(this._index++&lt;3){</span>
<span class="line">        this.push(this._index+&#39;&#39;);</span>
<span class="line">    }else{</span>
<span class="line">        this.push(null);</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line">var counter = new Counter();</span>
<span class="line"></span>
<span class="line">counter.on(&#39;data&#39;, function(data){</span>
<span class="line">    console.log(&quot;读到数据: &quot; + data.toString());//no maybe</span>
<span class="line">});</span>
<span class="line">counter.on(&#39;end&#39;, function(data){</span>
<span class="line">    console.log(&quot;读完了&quot;);</span>
<span class="line">});</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-可写流" tabindex="-1"><a class="header-anchor" href="#_2-可写流"><span>2. 可写流</span></a></h2><p>为了实现可写流，我们需要使用流模块中的Writable构造函数。 我们只需给Writable构造函数传递一些选项并创建一个对象。唯一需要的选项是write函数，该函数揭露数据块要往哪里写。</p><ul><li>chunk通常是一个buffer，除非我们配置不同的流。</li><li>encoding是在特定情况下需要的参数，通常我们可以忽略它。</li><li>callback是在完成处理数据块后需要调用的函数。这是写数据成功与否的标志。若要发出故障信号，请用错误对象调用回调函数</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">var stream = require(&#39;stream&#39;);</span>
<span class="line">var util = require(&#39;util&#39;);</span>
<span class="line">util.inherits(Writer, stream.Writable);</span>
<span class="line">let stock = [];</span>
<span class="line">function Writer(opt) {</span>
<span class="line">    stream.Writable.call(this, opt);</span>
<span class="line">}</span>
<span class="line">Writer.prototype._write = function(chunk, encoding, callback) {</span>
<span class="line">    setTimeout(()=&gt;{</span>
<span class="line">        stock.push(chunk.toString(&#39;utf8&#39;));</span>
<span class="line">        console.log(&quot;增加: &quot; + chunk);</span>
<span class="line">        callback();</span>
<span class="line">    },500)</span>
<span class="line">};</span>
<span class="line">var w = new Writer();</span>
<span class="line">for (var i=1; i&lt;=5; i++){</span>
<span class="line">    w.write(&quot;项目:&quot; + i, &#39;utf8&#39;);</span>
<span class="line">}</span>
<span class="line">w.end(&quot;结束写入&quot;,function(){</span>
<span class="line">    console.log(stock);</span>
<span class="line">});</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-管道流" tabindex="-1"><a class="header-anchor" href="#_3-管道流"><span>3. 管道流</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">const stream = require(&#39;stream&#39;)</span>
<span class="line"></span>
<span class="line">var index = 0;</span>
<span class="line">const readable = stream.Readable({</span>
<span class="line">    highWaterMark: 2,</span>
<span class="line">    read: function () {</span>
<span class="line">        process.nextTick(() =&gt; {</span>
<span class="line">            console.log(&#39;push&#39;, ++index)</span>
<span class="line">            this.push(index+&#39;&#39;);</span>
<span class="line">        })</span>
<span class="line">    }</span>
<span class="line">})</span>
<span class="line"></span>
<span class="line">const writable = stream.Writable({</span>
<span class="line">    highWaterMark: 2,</span>
<span class="line">    write: function (chunk, encoding, next) {</span>
<span class="line">        console.log(&#39;写入:&#39;, chunk.toString())</span>
<span class="line">    }</span>
<span class="line">})</span>
<span class="line"></span>
<span class="line">readable.pipe(writable);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-实现双工流" tabindex="-1"><a class="header-anchor" href="#_4-实现双工流"><span>4. 实现双工流</span></a></h2><p>有了双工流，我们可以在同一个对象上同时实现可读和可写，就好像同时继承这两个接口。 重要的是双工流的可读性和可写性操作完全独立于彼此。这仅仅是将两个特性组合成一个对象。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">const {Duplex} = require(&#39;stream&#39;);</span>
<span class="line">const inoutStream = new Duplex({</span>
<span class="line">    write(chunk, encoding, callback) {</span>
<span class="line">        console.log(chunk.toString());</span>
<span class="line">        callback();</span>
<span class="line">    },</span>
<span class="line">    read(size) {</span>
<span class="line">        this.push((++this.index)+&#39;&#39;);</span>
<span class="line">        if (this.index &gt; 3) {</span>
<span class="line">            this.push(null);</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">});</span>
<span class="line"></span>
<span class="line">inoutStream.index = 0;</span>
<span class="line">process.stdin.pipe(inoutStream).pipe(process.stdout);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-实现转换流" tabindex="-1"><a class="header-anchor" href="#_5-实现转换流"><span>5. 实现转换流</span></a></h2><ul><li>转换流的输出是从输入中计算出来的</li><li>对于转换流，我们不必实现read或write的方法，我们只需要实现一个transform方法，将两者结合起来。它有write方法的意思，我们也可以用它来push数据。</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">const {Transform} = require(&#39;stream&#39;);</span>
<span class="line"></span>
<span class="line">const upperCase = new Transform({</span>
<span class="line">    transform(chunk, encoding, callback) {</span>
<span class="line">        this.push(chunk.toString().toUpperCase());</span>
<span class="line">        callback();</span>
<span class="line">    }</span>
<span class="line">});</span>
<span class="line"></span>
<span class="line">process.stdin.pipe(upperCase).pipe(process.stdout);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-对象流" tabindex="-1"><a class="header-anchor" href="#_6-对象流"><span>6. 对象流</span></a></h2><p>默认情况下，流处理的数据是Buffer/String类型的值。有一个objectMode标志，我们可以设置它让流可以接受任何JavaScript对象。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">const {Transform} = require(&#39;stream&#39;);</span>
<span class="line">let fs = require(&#39;fs&#39;);</span>
<span class="line">let rs = fs.createReadStream(&#39;./users.json&#39;);</span>
<span class="line">rs.setEncoding(&#39;utf8&#39;);</span>
<span class="line">let toJson = Transform({</span>
<span class="line">    readableObjectMode: true,</span>
<span class="line">    transform(chunk, encoding, callback) {</span>
<span class="line">        this.push(JSON.parse(chunk));</span>
<span class="line">        callback();</span>
<span class="line">    }</span>
<span class="line">});</span>
<span class="line">let jsonOut = Transform({</span>
<span class="line">    writableObjectMode: true,</span>
<span class="line">    transform(chunk, encoding, callback) {</span>
<span class="line">        console.log(chunk);</span>
<span class="line">        callback();</span>
<span class="line">    }</span>
<span class="line">});</span>
<span class="line">rs.pipe(toJson).pipe(jsonOut)</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">[</span>
<span class="line">  {&quot;name&quot;:&quot;zfpx1&quot;,&quot;age&quot;:8},</span>
<span class="line">  {&quot;name&quot;:&quot;zfpx2&quot;,&quot;age&quot;:9}</span>
<span class="line">]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-unshift" tabindex="-1"><a class="header-anchor" href="#_7-unshift"><span>7. unshift</span></a></h2><p>readable.unshift() 方法会把一块数据压回到Buffer内部。 这在如下特定情形下有用： 代码正在消费一个数据流，已经&quot;乐观地&quot;拉取了数据。 又需要&quot;反悔-消费&quot;一些数据，以便这些数据可以传给其他人用。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">const {Transform} = require(&#39;stream&#39;);</span>
<span class="line">const { StringDecoder } = require(&#39;string_decoder&#39;);</span>
<span class="line">let decoder = new StringDecoder(&#39;utf8&#39;);</span>
<span class="line">let fs = require(&#39;fs&#39;);</span>
<span class="line">let rs = fs.createReadStream(&#39;./req.txt&#39;);</span>
<span class="line"></span>
<span class="line">function parseHeader(stream, callback) {</span>
<span class="line">    let header = &#39;&#39;;</span>
<span class="line">    rs.on(&#39;readable&#39;,onReadable);</span>
<span class="line">    function onReadable() {</span>
<span class="line"></span>
<span class="line">        let chunk;</span>
<span class="line">        while(null != (chunk = rs.read())){</span>
<span class="line">            const str = decoder.write(chunk);</span>
<span class="line">            if(str.match(/\\r\\n\\r\\n/)){</span>
<span class="line">                const split = str.split(/\\r\\n\\r\\n/);</span>
<span class="line">                console.log(split);</span>
<span class="line">                header+=split.shift();</span>
<span class="line">                const remaining = split.join(&#39;\\r\\n\\r\\n&#39;);</span>
<span class="line">                const buf = Buffer.from(remaining,&#39;utf8&#39;);</span>
<span class="line">                rs.removeListener(&#39;readable&#39;, onReadable);</span>
<span class="line">                if(buf.length){</span>
<span class="line">                    stream.unshift(buf);</span>
<span class="line">                }</span>
<span class="line">                callback(null,header,rs);</span>
<span class="line">            }else{</span>
<span class="line">                header += str;</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line">parseHeader(rs,function(err,header,stream){</span>
<span class="line">    console.log(header);</span>
<span class="line">    stream.setEncoding(&#39;utf8&#39;);</span>
<span class="line">    stream.on(&#39;data&#39;,function (data) {</span>
<span class="line">        console.log(&#39;data&#39;,data);</span>
<span class="line">    });</span>
<span class="line">});</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">Host: www.baidu.com</span>
<span class="line">User-Agent: curl/7.53.0</span>
<span class="line">Accept: */*</span>
<span class="line"></span>
<span class="line">name=zfpx&amp;age=9</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24)])])}const p=n(l,[["render",c]]),t=JSON.parse('{"path":"/strong/11.Stream-3.html","title":"","lang":"en-US","frontmatter":{},"git":{"updatedTime":1681290319000,"contributors":[{"name":"yutao","username":"yutao","email":"642231346@qq.com","commits":1,"url":"https://github.com/yutao"}],"changelog":[{"hash":"f5ab8c9d34991ec274f7f652439afe5b2afb6147","time":1681290319000,"email":"642231346@qq.com","author":"yutao","message":"modify"}]},"filePathRelative":"strong/11.Stream-3.md"}');export{p as comp,t as data};
