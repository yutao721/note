import{_ as s,c as a,a as e,o as p}from"./app-CD1YpnS1.js";const l={};function i(t,n){return p(),a("div",null,[...n[0]||(n[0]=[e(`<h2 id="_1-初始化项目" tabindex="-1"><a class="header-anchor" href="#_1-初始化项目"><span>1.初始化项目</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">$ mkdir zhufengskeleton</span>
<span class="line">$ cd zhufengskeleton</span>
<span class="line">$ npm init -y</span>
<span class="line">$ cnpm i css-tree  @babel/core @babel/preset-env @babel/preset-react babel-loader cross-env fs-extra html-webpack-plugin  webpack webpack-cli webpack-dev-server -D</span>
<span class="line">$ cnpm i react react-dom -S</span>
<span class="line">$ cnpm i puppeteer -D</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-react项目构建" tabindex="-1"><a class="header-anchor" href="#_2-react项目构建"><span>2.React项目构建</span></a></h2><h3 id="_2-1-webpack-config-js" tabindex="-1"><a class="header-anchor" href="#_2-1-webpack-config-js"><span>2.1 webpack.config.js</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;html-webpack-plugin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span>resolve<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">mode</span><span class="token operator">:</span><span class="token string">&#39;development&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">devtool</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&quot;./src/index.js&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">path</span><span class="token operator">:</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span><span class="token string">&#39;dist&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&quot;main.js&quot;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">                <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token literal-property property">loader</span><span class="token operator">:</span><span class="token string">&#39;babel-loader&#39;</span><span class="token punctuation">,</span></span>
<span class="line">                    <span class="token literal-property property">options</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">                        <span class="token literal-property property">presets</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&quot;@babel/preset-env&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;@babel/preset-react&quot;</span><span class="token punctuation">]</span></span>
<span class="line">                    <span class="token punctuation">}</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">contentBase</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span><span class="token string">&#39;dist&#39;</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&#39;./src/index.html&#39;</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-src-index-js" tabindex="-1"><a class="header-anchor" href="#_2-2-src-index-js"><span>2.2 src\\index.js</span></a></h3><p>src\\index.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> ReactDOM <span class="token keyword">from</span> <span class="token string">&#39;react-dom&#39;</span><span class="token punctuation">;</span></span>
<span class="line">ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">(</span></span>
<span class="line">    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span></span>
<span class="line">        <span class="token operator">&lt;</span>img src<span class="token operator">=</span><span class="token string">&quot;http://img.zhufengpeixun.cn/zhufengjg.jpg&quot;</span> width<span class="token operator">=</span><span class="token string">&quot;100%&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>img<span class="token operator">&gt;</span></span>
<span class="line">        <span class="token operator">&lt;</span>button<span class="token operator">&gt;</span>点我点我<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line"><span class="token punctuation">)</span><span class="token punctuation">,</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-src-index-html" tabindex="-1"><a class="header-anchor" href="#_2-3-src-index-html"><span>2.3 src\\index.html</span></a></h3><p>src\\index.html</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;!DOCTYPE html&gt;</span>
<span class="line">&lt;html lang=&quot;en&quot;&gt;</span>
<span class="line">&lt;head&gt;</span>
<span class="line">    &lt;meta charset=&quot;UTF-8&quot;&gt;</span>
<span class="line">    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;</span>
<span class="line">    &lt;title&gt;skeleton&lt;/title&gt;</span>
<span class="line">&lt;/head&gt;</span>
<span class="line">&lt;body&gt;</span>
<span class="line">    &lt;div id=&quot;root&quot;&gt;&lt;!-- shell --&gt;&lt;/div&gt;</span>
<span class="line">&lt;/body&gt;</span>
<span class="line">&lt;/html&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-创建插件" tabindex="-1"><a class="header-anchor" href="#_3-创建插件"><span>3. 创建插件</span></a></h2><h3 id="_3-1-skeleton-index-js" tabindex="-1"><a class="header-anchor" href="#_3-1-skeleton-index-js"><span>3.1 skeleton\\index.js</span></a></h3><p>skeleton\\index.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">const</span> SkeletonPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./SkeletonPlugin&#39;</span><span class="token punctuation">)</span></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  SkeletonPlugin</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-skeletonplugin-js" tabindex="-1"><a class="header-anchor" href="#_3-2-skeletonplugin-js"><span>3.2 SkeletonPlugin.js</span></a></h3><p>skeleton\\SkeletonPlugin.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">const</span> <span class="token constant">PLUGIN_NAME</span> <span class="token operator">=</span> <span class="token string">&#39;SkeletonPlugin&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> defaultOptions <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">SkeletonPlugin</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>options <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token operator">...</span>defaultOptions<span class="token punctuation">,</span><span class="token operator">...</span>options<span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token function">apply</span><span class="token punctuation">(</span><span class="token parameter">compiler</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        compiler<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>done<span class="token punctuation">.</span><span class="token function">tap</span><span class="token punctuation">(</span><span class="token constant">PLUGIN_NAME</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">PLUGIN_NAME</span><span class="token punctuation">,</span><span class="token string">&#39;done&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> SkeletonPlugin<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-webpack-config-js" tabindex="-1"><a class="header-anchor" href="#_3-3-webpack-config-js"><span>3.3 webpack.config.js</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">const HtmlWebpackPlugin = require(&#39;html-webpack-plugin&#39;);</span>
<span class="line">const {resolve} = require(&#39;path&#39;);</span>
<span class="line">+const {SkeletonPlugin} = require(&#39;./skeleton&#39;);</span>
<span class="line">module.exports = {</span>
<span class="line">    mode:&#39;development&#39;,</span>
<span class="line">    devtool:false,</span>
<span class="line">    entry: &quot;./src/index.js&quot;,</span>
<span class="line">    output: {</span>
<span class="line">        path:resolve(__dirname,&#39;dist&#39;),</span>
<span class="line">        filename: &quot;main.js&quot;</span>
<span class="line">    },</span>
<span class="line">    module: {</span>
<span class="line">        rules: [{</span>
<span class="line">            test: /\\.js$/,</span>
<span class="line">            use: [</span>
<span class="line">                {</span>
<span class="line">                    loader:&#39;babel-loader&#39;,</span>
<span class="line">                    options:{</span>
<span class="line">                        presets:[&quot;@babel/preset-env&quot;,&quot;@babel/preset-react&quot;]</span>
<span class="line">                    }</span>
<span class="line">                }</span>
<span class="line">            ],</span>
<span class="line">            exclude: /node_modules/</span>
<span class="line">        }]</span>
<span class="line">    },</span>
<span class="line">    devServer: {</span>
<span class="line">        contentBase: resolve(__dirname,&#39;dist&#39;)</span>
<span class="line">    },</span>
<span class="line">    plugins: [</span>
<span class="line">        new HtmlWebpackPlugin({</span>
<span class="line">            template: &#39;./src/index.html&#39;</span>
<span class="line">        }),</span>
<span class="line">+        new SkeletonPlugin({</span>
<span class="line">+            </span>
<span class="line">+        })</span>
<span class="line">    ]</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-启动服务" tabindex="-1"><a class="header-anchor" href="#_4-启动服务"><span>4. 启动服务</span></a></h2><h3 id="_4-1-webpack-config-js" tabindex="-1"><a class="header-anchor" href="#_4-1-webpack-config-js"><span>4.1 webpack.config.js</span></a></h3><p>webpack.config.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">const HtmlWebpackPlugin = require(&#39;html-webpack-plugin&#39;);</span>
<span class="line">const {resolve} = require(&#39;path&#39;);</span>
<span class="line">const {SkeletonPlugin} = require(&#39;./skeleton&#39;);</span>
<span class="line">module.exports = {</span>
<span class="line">    mode:&#39;development&#39;,</span>
<span class="line">    devtool:false,</span>
<span class="line">    entry: &quot;./src/index.js&quot;,</span>
<span class="line">    output: {</span>
<span class="line">        path:resolve(__dirname,&#39;dist&#39;),</span>
<span class="line">        filename: &quot;main.js&quot;</span>
<span class="line">    },</span>
<span class="line">    module: {</span>
<span class="line">        rules: [{</span>
<span class="line">            test: /\\.js$/,</span>
<span class="line">            use: [</span>
<span class="line">                {</span>
<span class="line">                    loader:&#39;babel-loader&#39;,</span>
<span class="line">                    options:{</span>
<span class="line">                        presets:[&quot;@babel/preset-env&quot;,&quot;@babel/preset-react&quot;]</span>
<span class="line">                    }</span>
<span class="line">                }</span>
<span class="line">            ],</span>
<span class="line">            exclude: /node_modules/</span>
<span class="line">        }]</span>
<span class="line">    },</span>
<span class="line">    devServer: {</span>
<span class="line">        contentBase: resolve(__dirname,&#39;dist&#39;)</span>
<span class="line">    },</span>
<span class="line">    plugins: [</span>
<span class="line">        new HtmlWebpackPlugin({</span>
<span class="line">            template: &#39;./src/index.html&#39;</span>
<span class="line">        }),</span>
<span class="line">        new SkeletonPlugin({</span>
<span class="line">+            staticDir: resolve(__dirname,&#39;dist&#39;),</span>
<span class="line">+            port:8000,</span>
<span class="line">+            origin:&#39;http://localhost:8000&#39;</span>
<span class="line">        })</span>
<span class="line">    ]</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-skeletonplugin-js" tabindex="-1"><a class="header-anchor" href="#_4-2-skeletonplugin-js"><span>4.2 SkeletonPlugin.js</span></a></h3><p>skeleton\\SkeletonPlugin.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">const PLUGIN_NAME = &#39;SkeletonPlugin&#39;;</span>
<span class="line">+const Server = require(&#39;./Server&#39;);</span>
<span class="line">const defaultOptions = {</span>
<span class="line"></span>
<span class="line">}</span>
<span class="line">class SkeletonPlugin {</span>
<span class="line">    constructor(options){</span>
<span class="line">        this.options = {...defaultOptions,...options};</span>
<span class="line">    }</span>
<span class="line">    apply(compiler) {</span>
<span class="line">        compiler.hooks.done.tap(PLUGIN_NAME, async () =&gt; {</span>
<span class="line">+           await this.startServer();    </span>
<span class="line">+           await this.server.close(); </span>
<span class="line">        })</span>
<span class="line">    }</span>
<span class="line">+    async startServer(){</span>
<span class="line">+        this.server = new Server(this.options);</span>
<span class="line">+        await this.server.listen();</span>
<span class="line">+    }</span>
<span class="line">}</span>
<span class="line">module.exports = SkeletonPlugin;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-server-js" tabindex="-1"><a class="header-anchor" href="#_4-3-server-js"><span>4.3 Server.js</span></a></h3><p>skeleton\\Server.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;http&#39;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Server</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>options <span class="token operator">=</span> options<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token function">listen</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>express<span class="token punctuation">.</span><span class="token function">static</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>options<span class="token punctuation">.</span>staticDir<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>listenServer <span class="token operator">=</span> http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span>app<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span> <span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">this</span><span class="token punctuation">.</span>listenServer<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>options<span class="token punctuation">.</span>port<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">server listen at port: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>options<span class="token punctuation">.</span>origin<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">async</span> <span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span> <span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">this</span><span class="token punctuation">.</span>listenServer<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;server closed!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> Server<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-启动puppeteer" tabindex="-1"><a class="header-anchor" href="#_5-启动puppeteer"><span>5. 启动puppeteer</span></a></h2><h3 id="_5-1-webpack-config-js" tabindex="-1"><a class="header-anchor" href="#_5-1-webpack-config-js"><span>5.1 webpack.config.js</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">const HtmlWebpackPlugin = require(&#39;html-webpack-plugin&#39;);</span>
<span class="line">const {resolve} = require(&#39;path&#39;);</span>
<span class="line">const {SkeletonPlugin} = require(&#39;./skeleton&#39;);</span>
<span class="line">module.exports = {</span>
<span class="line">    mode:&#39;development&#39;,</span>
<span class="line">    devtool:false,</span>
<span class="line">    entry: &quot;./src/index.js&quot;,</span>
<span class="line">    output: {</span>
<span class="line">        path:resolve(__dirname,&#39;dist&#39;),</span>
<span class="line">        filename: &quot;main.js&quot;</span>
<span class="line">    },</span>
<span class="line">    module: {</span>
<span class="line">        rules: [{</span>
<span class="line">            test: /\\.js$/,</span>
<span class="line">            use: [</span>
<span class="line">                {</span>
<span class="line">                    loader:&#39;babel-loader&#39;,</span>
<span class="line">                    options:{</span>
<span class="line">                        presets:[&quot;@babel/preset-env&quot;,&quot;@babel/preset-react&quot;]</span>
<span class="line">                    }</span>
<span class="line">                }</span>
<span class="line">            ],</span>
<span class="line">            exclude: /node_modules/</span>
<span class="line">        }]</span>
<span class="line">    },</span>
<span class="line">    devServer: {</span>
<span class="line">        contentBase: resolve(__dirname,&#39;dist&#39;)</span>
<span class="line">    },</span>
<span class="line">    plugins: [</span>
<span class="line">        new HtmlWebpackPlugin({</span>
<span class="line">            template: &#39;./src/index.html&#39;</span>
<span class="line">        }),</span>
<span class="line">        new SkeletonPlugin({</span>
<span class="line">            staticDir: resolve(__dirname,&#39;dist&#39;),</span>
<span class="line">            port:8000,</span>
<span class="line">            origin:&#39;http://localhost:8000&#39;,</span>
<span class="line">+           device: &#39;iPhone 6&#39;</span>
<span class="line">        })</span>
<span class="line">    ]</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-2-skeletonplugin-js" tabindex="-1"><a class="header-anchor" href="#_5-2-skeletonplugin-js"><span>5.2 SkeletonPlugin.js</span></a></h3><p>skeleton\\SkeletonPlugin.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">const PLUGIN_NAME = &#39;SkeletonPlugin&#39;;</span>
<span class="line">const Server = require(&#39;./Server&#39;);</span>
<span class="line">+const Skeleton = require(&#39;./Skeleton&#39;);</span>
<span class="line">const defaultOptions = {</span>
<span class="line"></span>
<span class="line">}</span>
<span class="line">class SkeletonPlugin {</span>
<span class="line">    constructor(options){</span>
<span class="line">        this.options = {...defaultOptions,...options};</span>
<span class="line">    }</span>
<span class="line">    apply(compiler) {</span>
<span class="line">        compiler.hooks.done.tap(PLUGIN_NAME, async () =&gt; {</span>
<span class="line">            await this.startServer();</span>
<span class="line">+            this.skeleton= new Skeleton(this.options);</span>
<span class="line">+            await this.skeleton.initialize();</span>
<span class="line">+            const skeletonHtml = await this.skeleton.genHtml(this.options.origin);</span>
<span class="line">+            console.log(&#39;skeletonHtml&#39;,skeletonHtml);</span>
<span class="line">+            await this.skeleton.destroy();</span>
<span class="line">            await this.server.close();</span>
<span class="line">        })</span>
<span class="line">    }</span>
<span class="line">    async startServer(){</span>
<span class="line">        this.server = new Server(this.options);</span>
<span class="line">        await this.server.listen();</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line">module.exports = SkeletonPlugin;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-3-skeleton-js" tabindex="-1"><a class="header-anchor" href="#_5-3-skeleton-js"><span>5.3 Skeleton.js</span></a></h3><p>skeleton\\Skeleton.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"></span>
<span class="line"><span class="token keyword">let</span>  puppeteer <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;puppeteer&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Skeleton</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">options <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>options <span class="token operator">=</span> options</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">async</span> <span class="token function">initialize</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>browser <span class="token operator">=</span> <span class="token keyword">await</span> puppeteer<span class="token punctuation">.</span><span class="token function">launch</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">headless</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">async</span> <span class="token function">newPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">const</span> <span class="token punctuation">{</span> device <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>options<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">const</span> page <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>browser<span class="token punctuation">.</span><span class="token function">newPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">await</span> page<span class="token punctuation">.</span><span class="token function">emulate</span><span class="token punctuation">(</span>puppeteer<span class="token punctuation">.</span>devices<span class="token punctuation">[</span>device<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span> page<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">async</span> <span class="token function">genHtml</span><span class="token punctuation">(</span><span class="token parameter">url</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">const</span> page <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">newPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> page<span class="token punctuation">.</span><span class="token function">goto</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">waitUntil</span><span class="token operator">:</span> <span class="token string">&#39;networkidle2&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>response <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>response<span class="token punctuation">.</span><span class="token function">ok</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>response<span class="token punctuation">.</span>status<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> on </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>url<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token string">&#39;html&#39;</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">async</span> <span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>browser<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>browser<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">this</span><span class="token punctuation">.</span>browser <span class="token operator">=</span> <span class="token keyword">null</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> Skeleton<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-截取骨架内容" tabindex="-1"><a class="header-anchor" href="#_6-截取骨架内容"><span>6. 截取骨架内容</span></a></h2><h3 id="_6-1-skeletonplugin-js" tabindex="-1"><a class="header-anchor" href="#_6-1-skeletonplugin-js"><span>6.1 SkeletonPlugin.js</span></a></h3><p>skeleton\\SkeletonPlugin.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">const PLUGIN_NAME = &#39;SkeletonPlugin&#39;;</span>
<span class="line">const Server = require(&#39;./Server&#39;);</span>
<span class="line">const Skeleton = require(&#39;./Skeleton&#39;);</span>
<span class="line">+const {resolve} = require(&#39;path&#39;);</span>
<span class="line">+const {readFileSync,writeFileSync} = require(&#39;fs&#39;);</span>
<span class="line">const defaultOptions = {</span>
<span class="line"></span>
<span class="line">}</span>
<span class="line">class SkeletonPlugin {</span>
<span class="line">    constructor(options){</span>
<span class="line">        this.options = {...defaultOptions,...options};</span>
<span class="line">    }</span>
<span class="line">    apply(compiler) {</span>
<span class="line">        compiler.hooks.done.tap(PLUGIN_NAME, async () =&gt; {</span>
<span class="line">            await this.startServer();</span>
<span class="line">            this.skeleton= new Skeleton(this.options);</span>
<span class="line">            await this.skeleton.initialize();</span>
<span class="line">            const skeletonHtml = await this.skeleton.genHtml(this.options.origin);</span>
<span class="line">+           const originPath = resolve(this.options.staticDir,&#39;index.html&#39;);</span>
<span class="line">+           const orgiginHtml = await readFileSync(originPath, &#39;utf8&#39;);</span>
<span class="line">+           const finalHtml = orgiginHtml.replace(&#39;&lt;!-- shell --&gt;&#39;,skeletonHtml);</span>
<span class="line">+           await writeFileSync(originPath,finalHtml,&#39;utf8&#39;);</span>
<span class="line">+           await this.skeleton.destroy();</span>
<span class="line">+           await this.server.close();</span>
<span class="line">+           process.exit(0);</span>
<span class="line">        })</span>
<span class="line">    }</span>
<span class="line">    async startServer(){</span>
<span class="line">        this.server = new Server(this.options);</span>
<span class="line">        await this.server.listen();</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line">module.exports = SkeletonPlugin;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-2-skeleton-js" tabindex="-1"><a class="header-anchor" href="#_6-2-skeleton-js"><span>6.2 Skeleton.js</span></a></h3><p>skeleton\\Skeleton.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">let  puppeteer = require(&#39;puppeteer&#39;);</span>
<span class="line">+let  {readFileSync} = require(&#39;fs&#39;);</span>
<span class="line">+let  {resolve} = require(&#39;path&#39;);</span>
<span class="line">+let  {sleep} = require(&#39;./utils&#39;);</span>
<span class="line">class Skeleton {</span>
<span class="line">    constructor(options = {}) {</span>
<span class="line">        this.options = options</span>
<span class="line">    }</span>
<span class="line">    async initialize() {</span>
<span class="line">        this.browser = await puppeteer.launch({ headless: false });</span>
<span class="line">    }</span>
<span class="line">    async newPage() {</span>
<span class="line">        const { device } = this.options;</span>
<span class="line">        const page = await this.browser.newPage();</span>
<span class="line">        await page.emulate(puppeteer.devices[device]);</span>
<span class="line">        return page;</span>
<span class="line">    }</span>
<span class="line">+    async makeSkeleton(page) {</span>
<span class="line">+        const { defer = 5000 } = this.options;</span>
<span class="line">+        const scriptContent = await readFileSync(resolve(__dirname, &#39;skeletonScript.js&#39;), &#39;utf8&#39;);</span>
<span class="line">+        await page.addScriptTag({ content: scriptContent })</span>
<span class="line">+        await sleep(defer);</span>
<span class="line">+        await page.evaluate((options) =&gt; {</span>
<span class="line">+          Skeleton.genSkeleton(options);</span>
<span class="line">+        }, this.options)</span>
<span class="line">+    }</span>
<span class="line">    async genHtml(url) {</span>
<span class="line">        const page = await this.newPage()</span>
<span class="line">        const response = await page.goto(url, { waitUntil: &#39;networkidle2&#39; });</span>
<span class="line">        if (response &amp;&amp; !response.ok()) {</span>
<span class="line">            throw new Error(\`\${response.status} on \${url}\`)</span>
<span class="line">        }</span>
<span class="line">+        await this.makeSkeleton(page);</span>
<span class="line">+        const { styles, html } = await page.evaluate(() =&gt; Skeleton.getHtmlAndStyle());</span>
<span class="line">+        let result = \`</span>
<span class="line">+            &lt;style&gt;\${styles.join(&#39;\\n&#39;)}&lt;/style&gt;</span>
<span class="line">+            \${html}</span>
<span class="line">+        \`;</span>
<span class="line">+        return Promise.resolve(result);</span>
<span class="line">    }</span>
<span class="line">    async destroy() {</span>
<span class="line">        if (this.browser) {</span>
<span class="line">            await this.browser.close()</span>
<span class="line">            this.browser = null</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line">module.exports = Skeleton;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-3-skeletonscript-js" tabindex="-1"><a class="header-anchor" href="#_6-3-skeletonscript-js"><span>6.3 skeletonScript.js</span></a></h3><p>skeleton\\skeletonScript.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line">window<span class="token punctuation">.</span>Skeleton <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> $$ <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>document<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">const</span> <span class="token constant">REMOVE_TAGS</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;title&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;meta&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;style&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;script&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">genSkeleton</span><span class="token punctuation">(</span><span class="token parameter">options <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">getHtmlAndStyle</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">const</span> styles <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token function">$$</span><span class="token punctuation">(</span><span class="token string">&#39;style&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">style</span> <span class="token operator">=&gt;</span> style<span class="token punctuation">.</span>innerHTML <span class="token operator">||</span> style<span class="token punctuation">.</span>innerText<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token function">$$</span><span class="token punctuation">(</span><span class="token constant">REMOVE_TAGS</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;,&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">ele</span> <span class="token operator">=&gt;</span> ele<span class="token punctuation">.</span>parentNode<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>ele<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">const</span> html <span class="token operator">=</span> document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>innerHTML<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token punctuation">{</span> html<span class="token punctuation">,</span> styles <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span>genSkeleton<span class="token punctuation">,</span>getHtmlAndStyle<span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-4-utils-js" tabindex="-1"><a class="header-anchor" href="#_6-4-utils-js"><span>6.4 utils.js</span></a></h3><p>skeleton\\utils.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">function</span> <span class="token function">sleep</span><span class="token punctuation">(</span><span class="token parameter">duration</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">setTimeout</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> duration<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    sleep</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-元素转换" tabindex="-1"><a class="header-anchor" href="#_7-元素转换"><span>7. 元素转换</span></a></h2><h3 id="_7-1-webpack-config-js" tabindex="-1"><a class="header-anchor" href="#_7-1-webpack-config-js"><span>7.1 webpack.config.js</span></a></h3><p>webpack.config.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">const HtmlWebpackPlugin = require(&#39;html-webpack-plugin&#39;);</span>
<span class="line">const {resolve} = require(&#39;path&#39;);</span>
<span class="line">const {SkeletonPlugin} = require(&#39;./skeleton&#39;);</span>
<span class="line">module.exports = {</span>
<span class="line">    mode:&#39;development&#39;,</span>
<span class="line">    devtool:false,</span>
<span class="line">    entry: &quot;./src/index.js&quot;,</span>
<span class="line">    output: {</span>
<span class="line">        path:resolve(__dirname,&#39;dist&#39;),</span>
<span class="line">        filename: &quot;main.js&quot;</span>
<span class="line">    },</span>
<span class="line">    module: {</span>
<span class="line">        rules: [{</span>
<span class="line">            test: /\\.js$/,</span>
<span class="line">            use: [</span>
<span class="line">                {</span>
<span class="line">                    loader:&#39;babel-loader&#39;,</span>
<span class="line">                    options:{</span>
<span class="line">                        presets:[&quot;@babel/preset-env&quot;,&quot;@babel/preset-react&quot;]</span>
<span class="line">                    }</span>
<span class="line">                }</span>
<span class="line">            ],</span>
<span class="line">            exclude: /node_modules/</span>
<span class="line">        }]</span>
<span class="line">    },</span>
<span class="line">    devServer: {</span>
<span class="line">        contentBase: resolve(__dirname,&#39;dist&#39;)</span>
<span class="line">    },</span>
<span class="line">    plugins: [</span>
<span class="line">        new HtmlWebpackPlugin({</span>
<span class="line">            template: &#39;./src/index.html&#39;</span>
<span class="line">        }),</span>
<span class="line">        new SkeletonPlugin({</span>
<span class="line">            staticDir: resolve(__dirname,&#39;dist&#39;),</span>
<span class="line">            port:8000,</span>
<span class="line">            origin:&#39;http://localhost:8000&#39;,</span>
<span class="line">            device: &#39;iPhone 6&#39;,</span>
<span class="line">+            image: {</span>
<span class="line"> +                color: &#39;</span>
<span class="line">+              },</span>
<span class="line">+            button: {</span>
<span class="line"> +                color: &#39;</span>
<span class="line">+            }</span>
<span class="line">        })</span>
<span class="line">    ]</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-2-skeletonscript-js" tabindex="-1"><a class="header-anchor" href="#_7-2-skeletonscript-js"><span>7.2 skeletonScript.js</span></a></h3><p>skeleton\\skeletonScript.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">window.Skeleton = (function () {</span>
<span class="line">+    const SMALLEST_BASE64 = &#39;data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7&#39;;</span>
<span class="line">+    const CLASS_NAME_PREFEX = &#39;sk-&#39;;</span>
<span class="line">    const $$ = document.querySelectorAll.bind(document);</span>
<span class="line">    const REMOVE_TAGS = [&#39;title&#39;, &#39;meta&#39;, &#39;style&#39;, &#39;script&#39;];</span>
<span class="line">+    const styleCache = new Map();</span>
<span class="line">+    const setAttributes = (ele, attrs) =&gt; {</span>
<span class="line">+        Object.keys(attrs).forEach(k =&gt; ele.setAttribute(k, attrs[k]));</span>
<span class="line">+    };</span>
<span class="line">+    const addStyle = (selector, rule) =&gt; {</span>
<span class="line">+        if (!styleCache.has(selector)) {</span>
<span class="line">+          styleCache.set(selector, rule)</span>
<span class="line">+        }</span>
<span class="line">+    }</span>
<span class="line">+    function imgHandler(ele, options={}) {</span>
<span class="line">+        const {width, height} = ele.getBoundingClientRect();</span>
<span class="line">+        const attrs = {</span>
<span class="line">+            width,</span>
<span class="line">+            height,</span>
<span class="line">+            src: SMALLEST_BASE64</span>
<span class="line">+        };</span>
<span class="line">+        setAttributes(ele, attrs);</span>
<span class="line">+        const className = CLASS_NAME_PREFEX + &#39;image&#39;;</span>
<span class="line">+        const rule = \`{ background: \${options.color} !important;}\`;</span>
<span class="line">+        addStyle(\`.\${className}\`, rule);</span>
<span class="line">+        ele.classList.add(className)</span>
<span class="line">+    }</span>
<span class="line">+    function buttonHandler(ele,options={}) {</span>
<span class="line">+        const classname = CLASS_NAME_PREFEX + &#39;button&#39;</span>
<span class="line">+        const rule = \`{</span>
<span class="line">+          color: \${options.color} !important;</span>
<span class="line">+          background: \${options.color} !important;</span>
<span class="line">+          border: none !important;</span>
<span class="line">+          box-shadow: none !important;</span>
<span class="line">+        }\`</span>
<span class="line">+        addStyle(\`.\${classname}\`, rule)</span>
<span class="line">+        ele.classList.add(classname)</span>
<span class="line">+    }</span>
<span class="line">    function genSkeleton(options = {}) {</span>
<span class="line">+        const rootElement = document.documentElement;</span>
<span class="line">+        ;(function traverse(options) {</span>
<span class="line">+            let { button, image } = options;</span>
<span class="line">+            const buttons = [];</span>
<span class="line">+            const imgs = [];</span>
<span class="line">+            ;(function preTraverse(ele) {</span>
<span class="line">+                if (ele.children &amp;&amp; ele.children.length &gt; 0) {</span>
<span class="line">+                    Array.from(ele.children).forEach(child =&gt; preTraverse(child))</span>
<span class="line">+                }</span>
<span class="line">+                if (ele.tagName === &#39;BUTTON&#39;) {</span>
<span class="line">+                    return buttons.push(ele);</span>
<span class="line">+                }</span>
<span class="line">+                if (ele.tagName === &#39;IMG&#39;) {</span>
<span class="line">+                    return imgs.push(ele)</span>
<span class="line">+                }</span>
<span class="line">+            })(rootElement);</span>
<span class="line">+            buttons.forEach(e =&gt; buttonHandler(e, button))</span>
<span class="line">+            imgs.forEach(e =&gt; imgHandler(e, image));</span>
<span class="line">+        })(options);</span>
<span class="line">+        let rules = &#39;&#39;</span>
<span class="line">+        for (const [selector, rule] of styleCache) {</span>
<span class="line">+           rules += \`\${selector} \${rule}\\n\`;</span>
<span class="line">+        }</span>
<span class="line">+        const styleEle = document.createElement(&#39;style&#39;)</span>
<span class="line">+        styleEle.innerHTML = rules;</span>
<span class="line">+       document.head.appendChild(styleEle)</span>
<span class="line">    }</span>
<span class="line">    function getHtmlAndStyle() {</span>
<span class="line">        const styles = Array.from($$(&#39;style&#39;)).map(style =&gt; style.innerHTML || style.innerText);</span>
<span class="line">        Array.from($$(REMOVE_TAGS.join(&#39;,&#39;))).forEach(ele =&gt; ele.parentNode.removeChild(ele));</span>
<span class="line">        const html = document.body.innerHTML;</span>
<span class="line">        return { html, styles };</span>
<span class="line">    }</span>
<span class="line">    return { genSkeleton, getHtmlAndStyle };</span>
<span class="line">}());</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-csstree" tabindex="-1"><a class="header-anchor" href="#_8-csstree"><span>8. cssTree</span></a></h2><ul><li><a href="https://astexplorer.net/" target="_blank" rel="noopener noreferrer">astexplorer</a></li></ul><p><img src="http://img.zhufengpeixun.cn/csstree.png" alt="csstree"></p><h3 id="_8-1-csstree-js" tabindex="-1"><a class="header-anchor" href="#_8-1-csstree-js"><span>8.1 cssTree.js</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">const</span> fs<span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> path<span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> csstree <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;css-tree&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> <span class="token function-variable function">createCode</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">scssFilePath</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> cssString <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span>scssFilePath<span class="token punctuation">,</span><span class="token string">&#39;utf8&#39;</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">let</span> ast <span class="token operator">=</span> csstree<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>cssString<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    csstree<span class="token punctuation">.</span><span class="token function">walk</span><span class="token punctuation">(</span>ast<span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>type <span class="token operator">==</span> <span class="token string">&#39;Dimension&#39;</span> <span class="token operator">&amp;&amp;</span> node<span class="token punctuation">.</span>unit <span class="token operator">==</span><span class="token string">&#39;px&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            node<span class="token punctuation">.</span>value <span class="token operator">=</span> node<span class="token punctuation">.</span>value<span class="token operator">/</span><span class="token number">75</span><span class="token punctuation">;</span></span>
<span class="line">            node<span class="token punctuation">.</span>unit <span class="token operator">=</span><span class="token string">&#39;rem&#39;</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">let</span> output <span class="token operator">=</span> csstree<span class="token punctuation">.</span><span class="token function">generate</span><span class="token punctuation">(</span>ast<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    fs<span class="token punctuation">.</span><span class="token function">writeFile</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span><span class="token string">&#39;output.css&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> output<span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;最终代码写入到output.css&#39;</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">let</span> scssFilePath<span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span><span class="token string">&#39;input.css&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">createCode</span><span class="token punctuation">(</span>scssFilePath<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-2-input-css" tabindex="-1"><a class="header-anchor" href="#_8-2-input-css"><span>8.2 input.css</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token punctuation">.</span>avatar<span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">width</span><span class="token operator">:</span> 750px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-3-output-css" tabindex="-1"><a class="header-anchor" href="#_8-3-output-css"><span>8.3 output.css</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token punctuation">.</span>avatar<span class="token punctuation">{</span><span class="token literal-property property">width</span><span class="token operator">:</span>10rem<span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_8-4-ast-json" tabindex="-1"><a class="header-anchor" href="#_8-4-ast-json"><span>8.4 ast.json</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;StyleSheet&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">&quot;loc&quot;</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">&quot;children&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">            <span class="token string-property property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Rule&quot;</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">&quot;prelude&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token string-property property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;SelectorList&quot;</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token string-property property">&quot;children&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">                    <span class="token punctuation">{</span></span>
<span class="line">                        <span class="token string-property property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Selector&quot;</span><span class="token punctuation">,</span></span>
<span class="line">                        <span class="token string-property property">&quot;children&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">                            <span class="token punctuation">{</span></span>
<span class="line">                                <span class="token string-property property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ClassSelector&quot;</span><span class="token punctuation">,</span></span>
<span class="line">                                <span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;avatar&quot;</span></span>
<span class="line">                            <span class="token punctuation">}</span></span>
<span class="line">                        <span class="token punctuation">]</span></span>
<span class="line">                    <span class="token punctuation">}</span></span>
<span class="line">                <span class="token punctuation">]</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">&quot;block&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token string-property property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Block&quot;</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token string-property property">&quot;children&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">                    <span class="token punctuation">{</span></span>
<span class="line">                        <span class="token string-property property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Declaration&quot;</span><span class="token punctuation">,</span></span>
<span class="line">                        <span class="token string-property property">&quot;property&quot;</span><span class="token operator">:</span> <span class="token string">&quot;width&quot;</span><span class="token punctuation">,</span></span>
<span class="line">                        <span class="token string-property property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">                            <span class="token string-property property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Value&quot;</span><span class="token punctuation">,</span></span>
<span class="line">                            <span class="token string-property property">&quot;loc&quot;</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span></span>
<span class="line">                            <span class="token string-property property">&quot;children&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">                                <span class="token punctuation">{</span></span>
<span class="line">                                    <span class="token string-property property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Dimension&quot;</span><span class="token punctuation">,</span></span>
<span class="line">                                    <span class="token string-property property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;750&quot;</span><span class="token punctuation">,</span></span>
<span class="line">                                    <span class="token string-property property">&quot;unit&quot;</span><span class="token operator">:</span> <span class="token string">&quot;px&quot;</span></span>
<span class="line">                                <span class="token punctuation">}</span></span>
<span class="line">                            <span class="token punctuation">]</span></span>
<span class="line">                        <span class="token punctuation">}</span></span>
<span class="line">                    <span class="token punctuation">}</span></span>
<span class="line">                <span class="token punctuation">]</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-参考" tabindex="-1"><a class="header-anchor" href="#_9-参考"><span>9. 参考</span></a></h2><p><img src="http://img.zhufengpeixun.cn/skeleton.jpg" alt="skeleton"></p>`,72)])])}const o=s(l,[["render",i]]),u=JSON.parse('{"path":"/strong/105.skeleton.html","title":"","lang":"en-US","frontmatter":{},"git":{"updatedTime":1681290319000,"contributors":[{"name":"yutao","username":"yutao","email":"642231346@qq.com","commits":1,"url":"https://github.com/yutao"}],"changelog":[{"hash":"f5ab8c9d34991ec274f7f652439afe5b2afb6147","time":1681290319000,"email":"642231346@qq.com","author":"yutao","message":"modify"}]},"filePathRelative":"strong/105.skeleton.md"}');export{o as comp,u as data};
