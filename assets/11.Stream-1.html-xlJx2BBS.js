import{_ as s,c as a,a as p,o as e}from"./app-CD1YpnS1.js";const t={};function i(l,n){return e(),a("div",null,[...n[0]||(n[0]=[p(`<h2 id="_1-流的概念" tabindex="-1"><a class="header-anchor" href="#_1-流的概念"><span>1. 流的概念</span></a></h2><ul><li>流是一组有序的，有起点和终点的字节数据传输手段</li><li>它不关心文件的整体内容，只关注是否从文件中读到了数据，以及读到数据之后的处理</li><li>流是一个抽象接口，被 Node 中的很多对象所实现。比如HTTP 服务器request和response对象都是流。</li></ul><h2 id="_2-可读流createreadstream" tabindex="-1"><a class="header-anchor" href="#_2-可读流createreadstream"><span>2.可读流createReadStream</span></a></h2><p>实现了<code>stream.Readable</code>接口的对象,将对象数据读取为流数据,当监听data事件后,开始发射数据</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line">fs<span class="token punctuation">.</span><span class="token function-variable function">createReadStream</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">path<span class="token punctuation">,</span> options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ReadStream</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">util<span class="token punctuation">.</span><span class="token function">inherits</span><span class="token punctuation">(</span>ReadStream<span class="token punctuation">,</span> Readable<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-1-创建可读流" tabindex="-1"><a class="header-anchor" href="#_2-1-创建可读流"><span>2.1 创建可读流</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">var</span> rs <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">createReadStream</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span><span class="token punctuation">[</span>options<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol><li>path读取文件的路径</li><li>options <ul><li>flags打开文件要做的操作,默认为&#39;r&#39;</li><li>encoding默认为null</li><li>start开始读取的索引位置</li><li>end结束读取的索引位置(包括结束位置)</li><li>highWaterMark读取缓存区默认的大小64kb</li></ul></li></ol><blockquote><p>如果指定utf8编码highWaterMark要大于3个字节</p></blockquote><h3 id="_2-2-监听data事件" tabindex="-1"><a class="header-anchor" href="#_2-2-监听data事件"><span>2.2 监听data事件</span></a></h3><p>流切换到流动模式,数据会被尽可能快的读出</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line">rs<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;data&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-监听end事件" tabindex="-1"><a class="header-anchor" href="#_2-3-监听end事件"><span>2.3 监听end事件</span></a></h3><p>该事件会在读完数据后被触发</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line">rs<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;end&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;读取完成&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-监听error事件" tabindex="-1"><a class="header-anchor" href="#_2-4-监听error事件"><span>2.4 监听error事件</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line">rs<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-5-监听open事件" tabindex="-1"><a class="header-anchor" href="#_2-5-监听open事件"><span>2.5 监听open事件</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line">rs<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;open&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-6-监听close事件" tabindex="-1"><a class="header-anchor" href="#_2-6-监听close事件"><span>2.6 监听close事件</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line">rs<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;close&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-7-设置编码" tabindex="-1"><a class="header-anchor" href="#_2-7-设置编码"><span>2.7 设置编码</span></a></h3><p>与指定{encoding:&#39;utf8&#39;}效果相同，设置编码</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line">rs<span class="token punctuation">.</span><span class="token function">setEncoding</span><span class="token punctuation">(</span><span class="token string">&#39;utf8&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_2-8-暂停和恢复触发data" tabindex="-1"><a class="header-anchor" href="#_2-8-暂停和恢复触发data"><span>2.8 暂停和恢复触发data</span></a></h3><p>通过pause()方法和resume()方法</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line">rs<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;data&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    rs<span class="token punctuation">.</span><span class="token function">pause</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    rs<span class="token punctuation">.</span><span class="token function">resume</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-可写流createwritestream" tabindex="-1"><a class="header-anchor" href="#_3-可写流createwritestream"><span>3.可写流createWriteStream</span></a></h2><p>实现了stream.Writable接口的对象来将流数据写入到对象中</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line">fs<span class="token punctuation">.</span><span class="token function-variable function">createWriteStream</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">path<span class="token punctuation">,</span> options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">WriteStream</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">util<span class="token punctuation">.</span><span class="token function">inherits</span><span class="token punctuation">(</span>WriteStream<span class="token punctuation">,</span> Writable<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-1-创建可写流" tabindex="-1"><a class="header-anchor" href="#_3-1-创建可写流"><span>3.1 创建可写流</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">var</span> ws <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">createWriteStream</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span><span class="token punctuation">[</span>options<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol><li>path写入的文件路径</li><li>options <ul><li>flags打开文件要做的操作,默认为&#39;w&#39;</li><li>encoding默认为utf8</li><li>highWaterMark写入缓存区的默认大小16kb</li></ul></li></ol><h3 id="_3-2-write方法" tabindex="-1"><a class="header-anchor" href="#_3-2-write方法"><span>3.2 write方法</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">ws.write(chunk,[encoding],[callback]);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol><li>chunk写入的数据buffer/string</li><li>encoding编码格式chunk为字符串时有用，可选</li><li>callback 写入成功后的回调</li></ol><blockquote><p>返回值为布尔值，系统缓存区满时为false,未满时为true</p></blockquote><h3 id="_3-3-end方法" tabindex="-1"><a class="header-anchor" href="#_3-3-end方法"><span>3.3 end方法</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">ws.end(chunk,[encoding],[callback]);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><blockquote><p>表明接下来没有数据要被写入 Writable 通过传入可选的 chunk 和 encoding 参数，可以在关闭流之前再写入一段数据 如果传入了可选的 callback 函数，它将作为 &#39;finish&#39; 事件的回调函数</p></blockquote><h3 id="_3-4-drain方法" tabindex="-1"><a class="header-anchor" href="#_3-4-drain方法"><span>3.4 drain方法</span></a></h3><ul><li>当一个流不处在 drain 的状态， 对 write() 的调用会缓存数据块， 并且返回 false。 一旦所有当前所有缓存的数据块都排空了（被操作系统接受来进行输出）， 那么 &#39;drain&#39; 事件就会被触发</li><li>建议， 一旦 write() 返回 false， 在 &#39;drain&#39; 事件触发前， 不能写入任何数据块<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">let</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> ws <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">createWriteStream</span><span class="token punctuation">(</span><span class="token string">&#39;./2.txt&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">flags</span><span class="token operator">:</span><span class="token string">&#39;w&#39;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">encoding</span><span class="token operator">:</span><span class="token string">&#39;utf8&#39;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">highWaterMark</span><span class="token operator">:</span><span class="token number">3</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">write</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line"> <span class="token keyword">let</span>  flag <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line"> <span class="token keyword">while</span><span class="token punctuation">(</span>i<span class="token operator">&amp;&amp;</span>flag<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">      flag <span class="token operator">=</span> ws<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      i<span class="token operator">--</span><span class="token punctuation">;</span></span>
<span class="line">     console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>flag<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"> <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token function">write</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">ws<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;drain&#39;</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;drain&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token function">write</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="_3-5-finish方法" tabindex="-1"><a class="header-anchor" href="#_3-5-finish方法"><span>3.5 finish方法</span></a></h3><p>在调用了 stream.end() 方法，且缓冲区数据都已经传给底层系统之后， &#39;finish&#39; 事件将被触发。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">var writer = fs.createWriteStream(&#39;./2.txt&#39;);</span>
<span class="line">for (let i = 0; i &lt; 100; i++) {</span>
<span class="line">  writer.write(\`hello, \${i}!\\n\`);</span>
<span class="line">}</span>
<span class="line">writer.end(&#39;结束\\n&#39;);</span>
<span class="line">writer.on(&#39;finish&#39;, () =&gt; {</span>
<span class="line">  console.error(&#39;所有的写入已经完成!&#39;);</span>
<span class="line">});</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-pipe方法" tabindex="-1"><a class="header-anchor" href="#_4-pipe方法"><span>4.pipe方法</span></a></h2><h3 id="_4-1-pipe方法的原理" tabindex="-1"><a class="header-anchor" href="#_4-1-pipe方法的原理"><span>4.1 pipe方法的原理</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">var</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> ws <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">createWriteStream</span><span class="token punctuation">(</span><span class="token string">&#39;./2.txt&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> rs <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">createReadStream</span><span class="token punctuation">(</span><span class="token string">&#39;./1.txt&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">rs<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;data&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">var</span> flag <span class="token operator">=</span> ws<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>flag<span class="token punctuation">)</span></span>
<span class="line">    rs<span class="token punctuation">.</span><span class="token function">pause</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">ws<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;drain&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    rs<span class="token punctuation">.</span><span class="token function">resume</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">rs<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;end&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    ws<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-pipe用法" tabindex="-1"><a class="header-anchor" href="#_4-2-pipe用法"><span>4.2 pipe用法</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line">readStream<span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>writeStream<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> from <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">createReadStream</span><span class="token punctuation">(</span><span class="token string">&#39;./1.txt&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> to <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">createWriteStream</span><span class="token punctuation">(</span><span class="token string">&#39;./2.txt&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">from<span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>to<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>将数据的滞留量限制到一个可接受的水平，以使得不同速度的来源和目标不会淹没可用内存。</p></blockquote><h3 id="_4-3-unpipe用法" tabindex="-1"><a class="header-anchor" href="#_4-3-unpipe用法"><span>4.3 unpipe用法</span></a></h3><ul><li>readable.unpipe()方法将之前通过stream.pipe()方法绑定的流分离</li><li>如果 destination 没有传入, 则所有绑定的流都会被分离.<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">let</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> from <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">createReadStream</span><span class="token punctuation">(</span><span class="token string">&#39;./1.txt&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> to <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">createWriteStream</span><span class="token punctuation">(</span><span class="token string">&#39;./2.txt&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">from<span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>to<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;关闭向2.txt的写入&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">from<span class="token punctuation">.</span><span class="token function">unpipe</span><span class="token punctuation">(</span>writable<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;手工关闭文件流&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">to<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="_4-4-cork" tabindex="-1"><a class="header-anchor" href="#_4-4-cork"><span>4.4 cork</span></a></h3><p>调用 writable.cork() 方法将强制所有写入数据都存放到内存中的缓冲区里。 直到调用 stream.uncork() 或 stream.end() 方法时，缓冲区里的数据才会被输出。</p><h3 id="_4-5-uncork" tabindex="-1"><a class="header-anchor" href="#_4-5-uncork"><span>4.5 uncork</span></a></h3><p>writable.uncork()将输出在<code>stream.cork()</code>方法被调用之后缓冲在内存中的所有数据。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">stream.cork();</span>
<span class="line">stream.write(&#39;1&#39;);</span>
<span class="line">stream.write(&#39;2&#39;);</span>
<span class="line">process.nextTick(() =&gt; stream.uncork());</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-简单实现" tabindex="-1"><a class="header-anchor" href="#_5-简单实现"><span>5. 简单实现</span></a></h2><h3 id="_5-1-可读流的简单实现" tabindex="-1"><a class="header-anchor" href="#_5-1-可读流的简单实现"><span>5.1 可读流的简单实现</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">let fs = require(&#39;fs&#39;);</span>
<span class="line">let ReadStream = require(&#39;./ReadStream&#39;);</span>
<span class="line">let rs = ReadStream(&#39;./1.txt&#39;, {</span>
<span class="line">    flags: &#39;r&#39;,</span>
<span class="line">    encoding: &#39;utf8&#39;,</span>
<span class="line">    start: 3,</span>
<span class="line">    end: 7,</span>
<span class="line">    highWaterMark: 3</span>
<span class="line">});</span>
<span class="line">rs.on(&#39;open&#39;, function () {</span>
<span class="line">    console.log(&quot;open&quot;);</span>
<span class="line">});</span>
<span class="line">rs.on(&#39;data&#39;, function (data) {</span>
<span class="line">    console.log(data);</span>
<span class="line">});</span>
<span class="line">rs.on(&#39;end&#39;, function () {</span>
<span class="line">    console.log(&quot;end&quot;);</span>
<span class="line">});</span>
<span class="line">rs.on(&#39;close&#39;, function () {</span>
<span class="line">    console.log(&quot;close&quot;);</span>
<span class="line">});</span>
<span class="line">/**</span>
<span class="line"> open</span>
<span class="line"> 456</span>
<span class="line"> 789</span>
<span class="line"> end</span>
<span class="line"> close</span>
<span class="line"> **/</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">let fs = require(&#39;fs&#39;);</span>
<span class="line">let EventEmitter = require(&#39;events&#39;);</span>
<span class="line"></span>
<span class="line">class WriteStream extends EventEmitter {</span>
<span class="line">    constructor(path, options) {</span>
<span class="line">        super(path, options);</span>
<span class="line">        this.path = path;</span>
<span class="line">        this.fd = options.fd;</span>
<span class="line">        this.flags = options.flags || &#39;r&#39;;</span>
<span class="line">        this.encoding = options.encoding;</span>
<span class="line">        this.start = options.start || 0;</span>
<span class="line">        this.pos = this.start;</span>
<span class="line">        this.end = options.end;</span>
<span class="line">        this.flowing = false;</span>
<span class="line">        this.autoClose = true;</span>
<span class="line">        this.highWaterMark = options.highWaterMark || 64 * 1024;</span>
<span class="line">        this.buffer = Buffer.alloc(this.highWaterMark);</span>
<span class="line">        this.length = 0;</span>
<span class="line">        this.on(&#39;newListener&#39;, (type, listener) =&gt; {</span>
<span class="line">            if (type == &#39;data&#39;) {</span>
<span class="line">                this.flowing = true;</span>
<span class="line">                this.read();</span>
<span class="line">            }</span>
<span class="line">        });</span>
<span class="line">        this.on(&#39;end&#39;, () =&gt; {</span>
<span class="line">            if (this.autoClose) {</span>
<span class="line">                this.destroy();</span>
<span class="line">            }</span>
<span class="line">        });</span>
<span class="line">        this.open();</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    read() {</span>
<span class="line">        if (typeof this.fd != &#39;number&#39;) {</span>
<span class="line">            return this.once(&#39;open&#39;, () =&gt; this.read());</span>
<span class="line">        }</span>
<span class="line">        let n = this.end ? Math.min(this.end - this.pos, this.highWaterMark) : this.highWaterMark;</span>
<span class="line">        fs.read(this.fd,this.buffer,0,n,this.pos,(err,bytesRead)=&gt;{</span>
<span class="line">            if(err){</span>
<span class="line">             return;</span>
<span class="line">            }</span>
<span class="line">            if(bytesRead){</span>
<span class="line">                let data = this.buffer.slice(0,bytesRead);</span>
<span class="line">                data = this.encoding?data.toString(this.encoding):data;</span>
<span class="line">                this.emit(&#39;data&#39;,data);</span>
<span class="line">                this.pos += bytesRead;</span>
<span class="line">                if(this.end &amp;&amp; this.pos &gt; this.end){</span>
<span class="line">                  return this.emit(&#39;end&#39;);</span>
<span class="line">                }</span>
<span class="line">                if(this.flowing)</span>
<span class="line">                    this.read();</span>
<span class="line">            }else{</span>
<span class="line">                this.emit(&#39;end&#39;);</span>
<span class="line">            }</span>
<span class="line">        })</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    open() {</span>
<span class="line">        fs.open(this.path, this.flags, this.mode, (err, fd) =&gt; {</span>
<span class="line">            if (err) return this.emit(&#39;error&#39;, err);</span>
<span class="line">            this.fd = fd;</span>
<span class="line">            this.emit(&#39;open&#39;, fd);</span>
<span class="line">        })</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">    end() {</span>
<span class="line">        if (this.autoClose) {</span>
<span class="line">            this.destroy();</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    destroy() {</span>
<span class="line">        fs.close(this.fd, () =&gt; {</span>
<span class="line">            this.emit(&#39;close&#39;);</span>
<span class="line">        })</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">module.exports = WriteStream;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-2-可写流的简单实现" tabindex="-1"><a class="header-anchor" href="#_5-2-可写流的简单实现"><span>5.2 可写流的简单实现</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">let fs = require(&#39;fs&#39;);</span>
<span class="line"> let FileWriteStream = require(&#39;./FileWriteStream&#39;);</span>
<span class="line"> let ws = FileWriteStream(&#39;./2.txt&#39;,{</span>
<span class="line">     flags:&#39;w&#39;,</span>
<span class="line">     encoding:&#39;utf8&#39;,</span>
<span class="line">     highWaterMark:3</span>
<span class="line"> });</span>
<span class="line"> let i = 10;</span>
<span class="line"> function write(){</span>
<span class="line">     let  flag = true;</span>
<span class="line">     while(i&amp;&amp;flag){</span>
<span class="line">         flag = ws.write(&quot;1&quot;,&#39;utf8&#39;,(function(i){</span>
<span class="line">             return function(){</span>
<span class="line">                 console.log(i);</span>
<span class="line">             }</span>
<span class="line">         })(i));</span>
<span class="line">         i--;</span>
<span class="line">         console.log(flag);</span>
<span class="line">     }</span>
<span class="line"> }</span>
<span class="line"> write();</span>
<span class="line"> ws.on(&#39;drain&#39;,()=&gt;{</span>
<span class="line">     console.log(&quot;drain&quot;);</span>
<span class="line">     write();</span>
<span class="line"> });</span>
<span class="line"> /**</span>
<span class="line">  10</span>
<span class="line">  9</span>
<span class="line">  8</span>
<span class="line">  drain</span>
<span class="line">  7</span>
<span class="line">  6</span>
<span class="line">  5</span>
<span class="line">  drain</span>
<span class="line">  4</span>
<span class="line">  3</span>
<span class="line">  2</span>
<span class="line">  drain</span>
<span class="line">  1</span>
<span class="line">  **/</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">let fs = require(&#39;fs&#39;);</span>
<span class="line">let EventEmitter = require(&#39;events&#39;);</span>
<span class="line">class WriteStream extends  EventEmitter{</span>
<span class="line">    constructor(path, options) {</span>
<span class="line">        super(path, options);</span>
<span class="line">        this.path = path;</span>
<span class="line">        this.fd = options.fd;</span>
<span class="line">        this.flags = options.flags || &#39;w&#39;;</span>
<span class="line">        this.mode = options.mode || 0o666;</span>
<span class="line">        this.encoding = options.encoding;</span>
<span class="line">        this.start = options.start || 0;</span>
<span class="line">        this.pos = this.start;</span>
<span class="line">        this.writing = false;</span>
<span class="line">        this.autoClose = true;</span>
<span class="line">        this.highWaterMark = options.highWaterMark || 16 * 1024;</span>
<span class="line">        this.buffers = [];</span>
<span class="line">        this.length = 0;</span>
<span class="line">        this.open();</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    open() {</span>
<span class="line">        fs.open(this.path, this.flags, this.mode, (err, fd) =&gt; {</span>
<span class="line">            if (err) return this.emit(&#39;error&#39;, err);</span>
<span class="line">            this.fd = fd;</span>
<span class="line">            this.emit(&#39;open&#39;, fd);</span>
<span class="line">        })</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    write(chunk, encoding, cb) {</span>
<span class="line">        if (typeof encoding == &#39;function&#39;) {</span>
<span class="line">            cb = encoding;</span>
<span class="line">            encoding = null;</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">        chunk = Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk, this.encoding || &#39;utf8&#39;);</span>
<span class="line">        let len = chunk.length;</span>
<span class="line">        this.length += len;</span>
<span class="line">        let ret = this.length &lt; this.highWaterMark;</span>
<span class="line">        if (this.writing) {</span>
<span class="line">            this.buffers.push({</span>
<span class="line">                chunk,</span>
<span class="line">                encoding,</span>
<span class="line">                cb,</span>
<span class="line">            });</span>
<span class="line">        } else {</span>
<span class="line">            this.writing = true;</span>
<span class="line">            this._write(chunk, encoding,this.clearBuffer.bind(this));</span>
<span class="line">        }</span>
<span class="line">        return ret;</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    _write(chunk, encoding, cb) {</span>
<span class="line">        if (typeof this.fd != &#39;number&#39;) {</span>
<span class="line">            return this.once(&#39;open&#39;, () =&gt; this._write(chunk, encoding, cb));</span>
<span class="line">        }</span>
<span class="line">        fs.write(this.fd, chunk, 0, chunk.length, this.pos, (err, written) =&gt; {</span>
<span class="line">            if (err) {</span>
<span class="line">                if (this.autoClose) {</span>
<span class="line">                    this.destroy();</span>
<span class="line">                }</span>
<span class="line">                return this.emit(&#39;error&#39;, err);</span>
<span class="line">            }</span>
<span class="line">            this.length -= written;</span>
<span class="line">            this.pos += written;</span>
<span class="line">            cb &amp;&amp; cb();</span>
<span class="line">        });</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    clearBuffer() {</span>
<span class="line">        let data = this.buffers.shift();</span>
<span class="line">        if (data) {</span>
<span class="line">            this._write(data.chunk, data.encoding, this.clearBuffer.bind(this))</span>
<span class="line">        } else {</span>
<span class="line">            this.writing = false;</span>
<span class="line">            this.emit(&#39;drain&#39;);</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    end() {</span>
<span class="line">        if (this.autoClose) {</span>
<span class="line">            this.emit(&#39;end&#39;);</span>
<span class="line">            this.destroy();</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    destroy() {</span>
<span class="line">        fs.close(this.fd, () =&gt; {</span>
<span class="line">            this.emit(&#39;close&#39;);</span>
<span class="line">        })</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">module.exports = WriteStream;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-3-pipe" tabindex="-1"><a class="header-anchor" href="#_5-3-pipe"><span>5.3 pipe</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">let fs = require(&#39;fs&#39;);</span>
<span class="line">let ReadStream = require(&#39;./ReadStream&#39;);</span>
<span class="line">let rs = ReadStream(&#39;./1.txt&#39;, {</span>
<span class="line">    flags: &#39;r&#39;,</span>
<span class="line">    encoding: &#39;utf8&#39;,</span>
<span class="line">    highWaterMark: 3</span>
<span class="line">});</span>
<span class="line">let FileWriteStream = require(&#39;./WriteStream&#39;);</span>
<span class="line">let ws = FileWriteStream(&#39;./2.txt&#39;,{</span>
<span class="line">    flags:&#39;w&#39;,</span>
<span class="line">    encoding:&#39;utf8&#39;,</span>
<span class="line">    highWaterMark:3</span>
<span class="line">});</span>
<span class="line">rs.pipe(ws);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">ReadStream.prototype.pipe = function (dest) {</span>
<span class="line">    this.on(&#39;data&#39;, (data)=&gt;{</span>
<span class="line">        let flag = dest.write(data);</span>
<span class="line">        if(!flag){</span>
<span class="line">            this.pause();</span>
<span class="line">        }</span>
<span class="line">    });</span>
<span class="line">    dest.on(&#39;drain&#39;, ()=&gt;{</span>
<span class="line">        this.resume();</span>
<span class="line">    });</span>
<span class="line">    this.on(&#39;end&#39;, ()=&gt;{</span>
<span class="line">        dest.end();</span>
<span class="line">    });</span>
<span class="line">}</span>
<span class="line">ReadStream.prototype.pause = function(){</span>
<span class="line">    this.flowing = false;</span>
<span class="line"></span>
<span class="line">}</span>
<span class="line">ReadStream.prototype.resume = function(){</span>
<span class="line">    this.flowing = true;</span>
<span class="line">    this.read();</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-4-暂停模式" tabindex="-1"><a class="header-anchor" href="#_5-4-暂停模式"><span>5.4 暂停模式</span></a></h2><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">let</span> fs <span class="token operator">=</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> ReadStream2 <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./ReadStream2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> rs <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ReadStream2</span><span class="token punctuation">(</span><span class="token string">&#39;./1.txt&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">start</span><span class="token operator">:</span><span class="token number">3</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">end</span><span class="token operator">:</span><span class="token number">8</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">encoding</span><span class="token operator">:</span><span class="token string">&#39;utf8&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">highWaterMark</span><span class="token operator">:</span><span class="token number">3</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">rs<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;readable&#39;</span><span class="token punctuation">,</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;readable&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;rs.buffer.length&#39;</span><span class="token punctuation">,</span>rs<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">let</span> d <span class="token operator">=</span> rs<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;rs.buffer.length&#39;</span><span class="token punctuation">,</span>rs<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;rs.buffer.length&#39;</span><span class="token punctuation">,</span>rs<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">500</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">let</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> EventEmitter <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;events&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">ReadStream</span> <span class="token keyword">extends</span> <span class="token class-name">EventEmitter</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">path<span class="token punctuation">,</span> options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">super</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>path <span class="token operator">=</span> path<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>highWaterMark <span class="token operator">=</span> options<span class="token punctuation">.</span>highWaterMark <span class="token operator">||</span> <span class="token number">64</span> <span class="token operator">*</span> <span class="token number">1024</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>buffer <span class="token operator">=</span> Buffer<span class="token punctuation">.</span><span class="token function">alloc</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>highWaterMark<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>flags <span class="token operator">=</span> options<span class="token punctuation">.</span>flags <span class="token operator">||</span> <span class="token string">&#39;r&#39;</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>encoding <span class="token operator">=</span> options<span class="token punctuation">.</span>encoding<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>mode <span class="token operator">=</span> options<span class="token punctuation">.</span>mode <span class="token operator">||</span> <span class="token number">0o666</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>start <span class="token operator">=</span> options<span class="token punctuation">.</span>start <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>end <span class="token operator">=</span> options<span class="token punctuation">.</span>end<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>pos <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>start<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>autoClose <span class="token operator">=</span> options<span class="token punctuation">.</span>autoClose <span class="token operator">||</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>bytesRead <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>closed <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>flowing<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>needReadable <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>length <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>buffers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;end&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>autoClose<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;newListener&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">type</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">==</span> <span class="token string">&#39;data&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token keyword">this</span><span class="token punctuation">.</span>flowing <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">            <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">==</span> <span class="token string">&#39;readable&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token function">open</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        fs<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>path<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>flags<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>mode<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> fd</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>autoClose<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">            <span class="token keyword">this</span><span class="token punctuation">.</span>fd <span class="token operator">=</span> fd<span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;open&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token function">read</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> <span class="token keyword">this</span><span class="token punctuation">.</span>fd <span class="token operator">!=</span> <span class="token string">&#39;number&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">once</span><span class="token punctuation">(</span><span class="token string">&#39;open&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        n <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">if</span><span class="token punctuation">(</span>n <span class="token operator">!=</span> n<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">            n <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>length <span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token keyword">this</span><span class="token punctuation">.</span>needReadable <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">let</span> ret<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token number">0</span><span class="token operator">&lt;</span>n <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            ret <span class="token operator">=</span> Buffer<span class="token punctuation">.</span><span class="token function">alloc</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">let</span> b <span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token keyword">null</span> <span class="token operator">!=</span> <span class="token punctuation">(</span>b <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>buffers<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>b<span class="token punctuation">.</span>length<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                    ret<span class="token punctuation">[</span>index<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> b<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">                    <span class="token keyword">if</span><span class="token punctuation">(</span>index <span class="token operator">==</span> ret<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                        <span class="token keyword">this</span><span class="token punctuation">.</span>length <span class="token operator">-=</span> n<span class="token punctuation">;</span></span>
<span class="line">                        b <span class="token operator">=</span> b<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                        <span class="token keyword">this</span><span class="token punctuation">.</span>buffers<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                        <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line">                    <span class="token punctuation">}</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>encoding<span class="token punctuation">)</span> ret <span class="token operator">=</span> ret<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>encoding<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">        <span class="token keyword">let</span> <span class="token function-variable function">_read</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">let</span> m <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>end <span class="token operator">?</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>end <span class="token operator">-</span> <span class="token keyword">this</span><span class="token punctuation">.</span>pos <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>highWaterMark<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>highWaterMark<span class="token punctuation">;</span></span>
<span class="line">            fs<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>fd<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>buffer<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> m<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>pos<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> bytesRead</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token keyword">return</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">                <span class="token keyword">let</span> data<span class="token punctuation">;</span></span>
<span class="line">                <span class="token keyword">if</span> <span class="token punctuation">(</span>bytesRead <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                    data <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>buffer<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> bytesRead<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                    <span class="token keyword">this</span><span class="token punctuation">.</span>pos <span class="token operator">+=</span> bytesRead<span class="token punctuation">;</span></span>
<span class="line">                    <span class="token keyword">this</span><span class="token punctuation">.</span>length <span class="token operator">+=</span> bytesRead<span class="token punctuation">;</span></span>
<span class="line">                    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>end <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>pos <span class="token operator">&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>end<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>needReadable<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;readable&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">                        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;end&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">                        <span class="token keyword">this</span><span class="token punctuation">.</span>buffers<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>needReadable<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;readable&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                            <span class="token keyword">this</span><span class="token punctuation">.</span>needReadable <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line">                        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">                    <span class="token punctuation">}</span></span>
<span class="line">                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>needReadable<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;readable&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                    <span class="token punctuation">}</span></span>
<span class="line">                    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;end&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">||</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>length <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>highWaterMark<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token function">_read</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token keyword">return</span> ret<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        fs<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>fd<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;close&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token function">pause</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>flowing <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token function">resume</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>flowing <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token function">pipe</span><span class="token punctuation">(</span><span class="token parameter">dest</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;data&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">let</span> flag <span class="token operator">=</span> dest<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>flag<span class="token punctuation">)</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">pause</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        dest<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;drain&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">resume</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;end&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">            dest<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> ReadStream<span class="token punctuation">;</span></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * if (n !== 0)</span>
<span class="line"> state.emittedReadable = false; 只要要读的字节数不是0就需要触发readable事件</span>
<span class="line"> 如果传入的NaN,则将n赋为缓区的长度，第一次就是0</span>
<span class="line"></span>
<span class="line"> 缓存区为0就开始读吧</span>
<span class="line"> 如果n等于0就返回null,state.needReadable = true;</span>
<span class="line"> 如果缓存区为0，是  state.needReadable = true; 需要触发readable</span>
<span class="line"></span>
<span class="line"> **/</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><a href="http://www.moye.me/2015/03/29/streaming_in_node/" target="_blank" rel="noopener noreferrer">streaming_in_node</a></li><li><a href="https://github.com/jabez128/stream-handbook" target="_blank" rel="noopener noreferrer">stream-handbook</a></li></ul>`,72)])])}const o=s(t,[["render",i]]),u=JSON.parse('{"path":"/strong/11.Stream-1.html","title":"","lang":"en-US","frontmatter":{},"git":{"updatedTime":1681290319000,"contributors":[{"name":"yutao","username":"yutao","email":"642231346@qq.com","commits":1,"url":"https://github.com/yutao"}],"changelog":[{"hash":"f5ab8c9d34991ec274f7f652439afe5b2afb6147","time":1681290319000,"email":"642231346@qq.com","author":"yutao","message":"modify"}]},"filePathRelative":"strong/11.Stream-1.md"}');export{o as comp,u as data};
