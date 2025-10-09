import{_ as n,c as e,a,o as l}from"./app-CD1YpnS1.js";const i={};function d(r,s){return l(),e("div",null,[...s[0]||(s[0]=[a(`<h2 id="什么是服务端渲染-server-side-render" tabindex="-1"><a class="header-anchor" href="#什么是服务端渲染-server-side-render"><span>什么是服务端渲染(Server Side Render)</span></a></h2><p>放在服务器进行就是服务器渲染，放在浏览器进行就是浏览器渲染</p><ul><li>客户端渲染不利于 SEO 搜索引擎优化</li><li>服务端渲染是可以被爬虫抓取到的，客户端异步渲染是很难被爬虫抓取到的</li><li>SSR直接将HTML字符串传递给浏览器。大大加快了首屏加载时间。</li><li>SSR占用更多的CPU和内存资源</li><li>一些常用的浏览器API可能无法正常使用</li><li>在vue中只支持beforeCreate和created两个生命周期</li></ul><p><img src="https://www.fullstackjavascript.cn/ssr.png" alt=""></p><h2 id="开始vue-ssr之旅" tabindex="-1"><a class="header-anchor" href="#开始vue-ssr之旅"><span>开始vue-ssr之旅</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">yarn add vue-server-renderer vue</span>
<span class="line">yarn add express</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>createRenderer,创建一个渲染函数 renderToString, 渲染出一个字符串</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">let Vue = require(&#39;vue&#39;);</span>
<span class="line">let render = require(&#39;vue-server-renderer&#39;);</span>
<span class="line">let vm = new Vue({ </span>
<span class="line">    data:{</span>
<span class="line">        msg:&#39;jw&#39;,</span>
<span class="line">    },</span>
<span class="line">    template:(&#39;&lt;h1&gt;{{msg}}&lt;/h1&gt;&#39;)</span>
<span class="line">})</span>
<span class="line">let express = require(&#39;express&#39;);</span>
<span class="line">let app = express();</span>
<span class="line">app.get(&#39;/&#39;,async (req,res)=&gt;{</span>
<span class="line">    let code = await render.createRenderer().renderToString(vm);</span>
<span class="line">    res.send(\`</span>
<span class="line">        &lt;!DOCTYPE html&gt;</span>
<span class="line">        &lt;html lang=&quot;en&quot;&gt;</span>
<span class="line">        &lt;head&gt;</span>
<span class="line">            &lt;meta charset=&quot;UTF-8&quot;&gt;</span>
<span class="line">            &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;</span>
<span class="line">            &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;ie=edge&quot;&gt;</span>
<span class="line">            &lt;title&gt;Document&lt;/title&gt;</span>
<span class="line">        &lt;/head&gt;</span>
<span class="line">        &lt;body&gt;</span>
<span class="line">            \${code}</span>
<span class="line">        &lt;/body&gt;</span>
<span class="line">        &lt;/html&gt;</span>
<span class="line">    \`)</span>
<span class="line">});</span>
<span class="line">app.listen(3000);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="采用模板渲染" tabindex="-1"><a class="header-anchor" href="#采用模板渲染"><span>采用模板渲染</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;!DOCTYPE html&gt;</span>
<span class="line">&lt;html lang=&quot;en&quot;&gt;</span>
<span class="line">  &lt;head&gt;&lt;title&gt;Hello&lt;/title&gt;&lt;/head&gt;</span>
<span class="line">  &lt;body&gt;</span>
<span class="line">    &lt;!--vue-ssr-outlet--&gt;</span>
<span class="line">  &lt;/body&gt;</span>
<span class="line">&lt;/html&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>传入template 替换掉注释标签</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">llet Vue = require(&#39;vue&#39;);</span>
<span class="line">let fs = require(&#39;fs&#39;);</span>
<span class="line">let template = fs.readFileSync(&#39;template.html&#39;,&#39;utf8&#39;)</span>
<span class="line">let render = require(&#39;vue-server-renderer&#39;);</span>
<span class="line">let vm = new Vue({ </span>
<span class="line">    data:{</span>
<span class="line">        msg:&#39;jw&#39;,</span>
<span class="line">    },</span>
<span class="line">    template:(&#39;&lt;h1&gt;{{msg}}&lt;/h1&gt;&#39;)</span>
<span class="line">})</span>
<span class="line">let express = require(&#39;express&#39;);</span>
<span class="line">let app = express();</span>
<span class="line">app.get(&#39;/&#39;,async (req,res)=&gt;{</span>
<span class="line">    let code = await render.createRenderer({</span>
<span class="line">        template</span>
<span class="line">    }).renderToString(vm);</span>
<span class="line">    res.send(code);</span>
<span class="line">});</span>
<span class="line">app.listen(3000);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="目录创建" tabindex="-1"><a class="header-anchor" href="#目录创建"><span>目录创建</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">├── config</span>
<span class="line">│   ├── webpack.base.js</span>
<span class="line">│   ├── webpack.client.js</span>
<span class="line">│   └── webpack.server.js</span>
<span class="line">├── dist</span>
<span class="line">│   ├── client.bundle.js</span>
<span class="line">│   ├── index.html</span>
<span class="line">│   ├── index.ssr.html</span>
<span class="line">│   ├── server.bundle.js</span>
<span class="line">│   ├── vue-ssr-client-manifest.json</span>
<span class="line">│   └── vue-ssr-server-bundle.json</span>
<span class="line">├── package.json</span>
<span class="line">├── public</span>
<span class="line">│   ├── index.html</span>
<span class="line">│   └── index.ssr.html</span>
<span class="line">├── server.js</span>
<span class="line">├── src</span>
<span class="line">│   ├── App.vue</span>
<span class="line">│   ├── components</span>
<span class="line">│   │   ├── Bar.vue</span>
<span class="line">│   │   └── Foo.vue</span>
<span class="line">│   ├── entry-client.js</span>
<span class="line">│   ├── entry-server.js</span>
<span class="line">│   ├── main.js</span>
<span class="line">│   ├── router.js</span>
<span class="line">│   └── store.js</span>
<span class="line">├── webpack.config.js</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="通过webpack实现编译vue项目" tabindex="-1"><a class="header-anchor" href="#通过webpack实现编译vue项目"><span>通过webpack实现编译vue项目</span></a></h2><p>安装插件</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">yarn add webpack webpack-cli webpack-dev-server vue-loader vue-style-loader css-loader html-webpack-plugin @babel/core @babel/preset-env babel-loader vue-template-compiler webpack-merge</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">let path = require(&#39;path&#39;);</span>
<span class="line">let HtmlWebpackPlugin = require(&#39;html-webpack-plugin&#39;);</span>
<span class="line">let VueLoaderPlugin = require(&#39;vue-loader/lib/plugin&#39;)</span>
<span class="line">module.exports = {</span>
<span class="line">    entry:&#39;./src/main.js&#39;,</span>
<span class="line">    output:{</span>
<span class="line">        filename:&#39;bundle.js&#39;,</span>
<span class="line">        path:path.resolve(__dirname)</span>
<span class="line">    },</span>
<span class="line">    module:{</span>
<span class="line">        rules:[</span>
<span class="line">            {test:/\\.css/,use:[&#39;vue-style-loader&#39;,&#39;css-loader&#39;]},</span>
<span class="line">            {</span>
<span class="line">                test:/\\.js/,</span>
<span class="line">                use:{</span>
<span class="line">                    loader:&#39;babel-loader&#39;,</span>
<span class="line">                    options:{</span>
<span class="line">                        presets:[&#39;@babel/preset-env&#39;]</span>
<span class="line">                     },</span>
<span class="line">                },</span>
<span class="line">                exclude:/node_modules/,</span>
<span class="line">            },</span>
<span class="line">            {test:/\\.vue/,use:&#39;vue-loader&#39;}</span>
<span class="line">        ]</span>
<span class="line">    },</span>
<span class="line">    plugins:[</span>
<span class="line">        new VueLoaderPlugin(),</span>
<span class="line">        new HtmlWebpackPlugin({</span>
<span class="line">            template:&#39;./src/index.html&#39;</span>
<span class="line">        })</span>
<span class="line">    ]</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置客户端大包和服务端打包" tabindex="-1"><a class="header-anchor" href="#配置客户端大包和服务端打包"><span>配置客户端大包和服务端打包</span></a></h2><ul><li><p>webpack.base.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">let path = require(&#39;path&#39;);</span>
<span class="line">let VueLoaderPlugin = require(&#39;vue-loader/lib/plugin&#39;)</span>
<span class="line">module.exports = {</span>
<span class="line">  entry:&#39;./src/main.js&#39;,</span>
<span class="line">  output:{</span>
<span class="line">      filename:&#39;[name].bundle.js&#39;,</span>
<span class="line">      path:path.resolve(__dirname)</span>
<span class="line">  },</span>
<span class="line">  module:{</span>
<span class="line">      rules:[</span>
<span class="line">          {test:/\\.css/,use:[&#39;vue-style-loader&#39;,&#39;css-loader&#39;]},</span>
<span class="line">          {</span>
<span class="line">              test:/\\.js/,</span>
<span class="line">              use:{</span>
<span class="line">                  loader:&#39;babel-loader&#39;,</span>
<span class="line">                  options:{</span>
<span class="line">                      presets:[&#39;@babel/preset-env&#39;]</span>
<span class="line">                   },</span>
<span class="line">              },</span>
<span class="line">              exclude:/node_modules/,</span>
<span class="line">          },</span>
<span class="line">          {test:/\\.vue/,use:&#39;vue-loader&#39;}</span>
<span class="line">      ]</span>
<span class="line">  },</span>
<span class="line">  plugins:[</span>
<span class="line">      new VueLoaderPlugin()</span>
<span class="line">  ]</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>webpack.client.js</p></li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">let path = require(&#39;path&#39;);</span>
<span class="line">let HtmlWebpackPlugin = require(&#39;html-webpack-plugin&#39;);</span>
<span class="line">let merge  = require(&#39;webpack-merge&#39;);</span>
<span class="line">let base = require(&#39;./webpack.base&#39;);</span>
<span class="line">module.exports = merge(base, {</span>
<span class="line">    entry:{</span>
<span class="line">        &#39;client&#39;:path.resolve(__dirname,&#39;../src/client.js&#39;)</span>
<span class="line">    },</span>
<span class="line">    plugins:[</span>
<span class="line">        new HtmlWebpackPlugin({</span>
<span class="line">            template:&#39;./src/index.html&#39;</span>
<span class="line">        })</span>
<span class="line">    ],</span>
<span class="line">});</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>webpack.server.js</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">let path = require(&#39;path&#39;);</span>
<span class="line">let HtmlWebpackPlugin = require(&#39;html-webpack-plugin&#39;);</span>
<span class="line">let merge  = require(&#39;webpack-merge&#39;);</span>
<span class="line">let base = require(&#39;./webpack.base&#39;);</span>
<span class="line"></span>
<span class="line">module.exports =merge(base,{</span>
<span class="line">    target:&#39;node&#39;, // 打包类型node</span>
<span class="line">    entry:{</span>
<span class="line">        server:path.resolve(__dirname,&#39;../src/server.js&#39;)</span>
<span class="line">    },</span>
<span class="line">    output:{</span>
<span class="line">        libraryTarget: &#39;commonjs2&#39; // 以commonjs规范导出</span>
<span class="line">    },  </span>
<span class="line">    plugins:[</span>
<span class="line">        new HtmlWebpackPlugin({</span>
<span class="line">            template:&#39;./src/index.html&#39;,</span>
<span class="line">            excludeChunks:[&#39;server&#39;]</span>
<span class="line">        })</span>
<span class="line">    ]</span>
<span class="line">})</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="服务端配置" tabindex="-1"><a class="header-anchor" href="#服务端配置"><span>服务端配置</span></a></h2><p>在App.vue上增加id=&quot;app&quot;可以保证元素被正常激活</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">let express = require(&#39;express&#39;);</span>
<span class="line">let vueServerRenderer = require(&#39;vue-server-renderer&#39;);</span>
<span class="line">let path = require(&#39;path&#39;)</span>
<span class="line">let app = express();</span>
<span class="line">let fs = require(&#39;fs&#39;);</span>
<span class="line"></span>
<span class="line">let render = vueServerRenderer.createBundleRenderer(fs.readFileSync(&#39;./dist/server.bundle.js&#39;,&#39;utf8&#39;),{</span>
<span class="line">    template:fs.readFileSync(&#39;./dist/index.ssr.html&#39;,&#39;utf8&#39;)</span>
<span class="line">});</span>
<span class="line"></span>
<span class="line">app.get(&#39;/&#39;,(req,res)=&gt;{</span>
<span class="line">    render.renderToString((err,html)=&gt;{</span>
<span class="line">        res.send(html);</span>
<span class="line">    })</span>
<span class="line">});</span>
<span class="line"></span>
<span class="line">app.use(express.static(path.join(__dirname,&#39;dist&#39;)))</span>
<span class="line">app.listen(3000,()=&gt;{</span>
<span class="line">    console.log(&#39;server start 3000&#39;)</span>
<span class="line">});</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="集成路由" tabindex="-1"><a class="header-anchor" href="#集成路由"><span>集成路由</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import Vue from &#39;vue&#39;;</span>
<span class="line">import VueRouter from &#39;vue-router&#39;;</span>
<span class="line">Vue.use(VueRouter);</span>
<span class="line">import Bar from &#39;./components/Bar.vue&#39;;</span>
<span class="line">import Foo from &#39;./components/Foo.vue&#39;;</span>
<span class="line">export default ()=&gt;{</span>
<span class="line">    let router = new VueRouter({</span>
<span class="line">        mode:&#39;history&#39;,</span>
<span class="line">        routes:[</span>
<span class="line">            {</span>
<span class="line">                path:&#39;/&#39;, component:Bar,</span>
<span class="line">            },</span>
<span class="line">            {</span>
<span class="line">                path:&#39;/foo&#39;,component:Foo</span>
<span class="line">            }</span>
<span class="line">        ]</span>
<span class="line">    });</span>
<span class="line">    return router</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置入口文件" tabindex="-1"><a class="header-anchor" href="#配置入口文件"><span>配置入口文件</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import createRouter from &#39;./router&#39;;</span>
<span class="line">export default ()=&gt;{</span>
<span class="line">    let router = createRouter(); // 增加路由</span>
<span class="line">    let app = new Vue({</span>
<span class="line">        router,</span>
<span class="line">        render:(h)=&gt;h(App);</span>
<span class="line">    })</span>
<span class="line">    return {app,router}</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置组件信息" tabindex="-1"><a class="header-anchor" href="#配置组件信息"><span>配置组件信息</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;template&gt;</span>
<span class="line">    &lt;div id=&quot;app&quot;&gt;</span>
<span class="line">        &lt;router-link to=&quot;/&quot;&gt; bar&lt;/router-link&gt;</span>
<span class="line">        &lt;router-link to=&quot;/foo&quot;&gt; foo&lt;/router-link&gt;</span>
<span class="line">        &lt;router-view&gt;&lt;/router-view&gt;</span>
<span class="line">        {{$store.state.username}}</span>
<span class="line">    &lt;/div&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="防止刷新页面不存在" tabindex="-1"><a class="header-anchor" href="#防止刷新页面不存在"><span>防止刷新页面不存在</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">app.get(&#39;*&#39;,(req,res)=&gt;{</span>
<span class="line">    render.renderToString({url:req.url},(err,html)=&gt;{</span>
<span class="line">        res.send(html);</span>
<span class="line">    })</span>
<span class="line">});</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vuex配置" tabindex="-1"><a class="header-anchor" href="#vuex配置"><span>vuex配置</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import Vue from &#39;vue&#39;;</span>
<span class="line">import Vuex from &#39;vuex&#39;;</span>
<span class="line">Vue.use(Vuex);</span>
<span class="line"></span>
<span class="line">export default ()=&gt;{</span>
<span class="line">    let store = new Vuex.Store({</span>
<span class="line">        state:{</span>
<span class="line">            username:&#39;zf&#39;</span>
<span class="line">        },</span>
<span class="line">        mutations:{</span>
<span class="line">            set_user(state){</span>
<span class="line">                state.username = &#39;hello;</span>
<span class="line">            }</span>
<span class="line">        },</span>
<span class="line">        actions:{</span>
<span class="line">            set_user({commit}){</span>
<span class="line">                return new Promise((resolve,reject)=&gt;{</span>
<span class="line">                    setTimeout(() =&gt; {</span>
<span class="line">                        commit(&#39;set_user&#39;);</span>
<span class="line">                        resolve();</span>
<span class="line">                    }, 1000);</span>
<span class="line">                })</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">    });</span>
<span class="line">    return store</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">// 引用vuex</span>
<span class="line">import createRouter from &#39;./router&#39;;</span>
<span class="line">import createStore from &#39;./store&#39;</span>
<span class="line">export default ()=&gt;{</span>
<span class="line">    let router = createRouter();</span>
<span class="line">    let store = createStore();</span>
<span class="line">    let app = new Vue({</span>
<span class="line">        router,</span>
<span class="line">        store,</span>
<span class="line">        render:(h)=&gt;h(App)</span>
<span class="line">    })</span>
<span class="line">    return {app,router,store}</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="在后端更新vuex" tabindex="-1"><a class="header-anchor" href="#在后端更新vuex"><span>在后端更新vuex</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import createApp from &#39;./main&#39;;</span>
<span class="line">export default (context)=&gt;{</span>
<span class="line">    return new Promise((resolve)=&gt;{</span>
<span class="line">        let {app,router,store} = createApp();</span>
<span class="line">        router.push(context.url); // 默认访问到/a就跳转到/a</span>
<span class="line">        router.onReady(()=&gt;{</span>
<span class="line">            let matchs = router.getMatchedComponents(); // 获取路由匹配到的组件</span>
<span class="line"></span>
<span class="line">            Promise.all(matchs.map(component=&gt;{</span>
<span class="line">                if(component.asyncData){</span>
<span class="line">                    return component.asyncData(store);</span>
<span class="line">                }</span>
<span class="line">            })).then(()=&gt;{</span>
<span class="line">                context.state = store.state; // 将store挂载在window.__INITIAL_STATE__</span>
<span class="line">                resolve(app);</span>
<span class="line"></span>
<span class="line">            });</span>
<span class="line">        })</span>
<span class="line">    })</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="在浏览器运行时替换store" tabindex="-1"><a class="header-anchor" href="#在浏览器运行时替换store"><span>在浏览器运行时替换store</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">// 在浏览器运行代码</span>
<span class="line">if(typeof window !== &#39;undefined&#39; &amp;&amp; window.__INITIAL_STATE__){</span>
<span class="line">    store.replaceState(window.__INITIAL_STATE__);</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="通过json配置createbundlerenderer方法" tabindex="-1"><a class="header-anchor" href="#通过json配置createbundlerenderer方法"><span>通过json配置createBundleRenderer方法</span></a></h2><p>实现热更新,自动增加preload和prefetch,以及可以使用sourceMap</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">const VueSSRClientPlugin = require(&#39;vue-server-renderer/client-plugin&#39;);</span>
<span class="line">const VueSSRServerPlugin = require(&#39;vue-server-renderer/server-plugin&#39;);</span>
<span class="line">const nodeExternals = require(&#39;webpack-node-externals&#39;);</span>
<span class="line">let template = fs.readFileSync(&#39;./dist/index.ssr.html&#39;,&#39;utf8&#39;);</span>
<span class="line">let manifest = require(&#39;./dist/vue-ssr-client-manifest.json&#39;);</span>
<span class="line">let bundle = require(&#39;./dist/vue-ssr-server-bundle.json&#39;);</span>
<span class="line"></span>
<span class="line">let render = vueServerRenderer.createBundleRenderer(bundle,{</span>
<span class="line">    template,</span>
<span class="line">    clientManifest:manifest</span>
<span class="line">})</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="管理vue-meta标签" tabindex="-1"><a class="header-anchor" href="#管理vue-meta标签"><span>管理vue-meta标签</span></a></h2><p>自己更方便的管理vue的meta标签</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import Vue from &#39;vue&#39;</span>
<span class="line">import Meta from &#39;vue-meta&#39;;</span>
<span class="line"></span>
<span class="line">Vue.use(Meta);</span>
<span class="line"></span>
<span class="line">// 将meta挂载在上下文中</span>
<span class="line">const meta = app.$meta()</span>
<span class="line">context.meta = meta;</span>
<span class="line"></span>
<span class="line">// 组件中配置</span>
<span class="line">metaInfo: {</span>
<span class="line">    title:&#39;嘿嘿&#39;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">// 在模板中取值</span>
<span class="line">{{{ meta.inject().title.text() }}} </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,46)])])}const c=n(i,[["render",d]]),t=JSON.parse('{"path":"/strong/66-11.vue-ssr.html","title":"","lang":"en-US","frontmatter":{},"git":{"updatedTime":1681290319000,"contributors":[{"name":"yutao","username":"yutao","email":"642231346@qq.com","commits":1,"url":"https://github.com/yutao"}],"changelog":[{"hash":"f5ab8c9d34991ec274f7f652439afe5b2afb6147","time":1681290319000,"email":"642231346@qq.com","author":"yutao","message":"modify"}]},"filePathRelative":"strong/66-11.vue-ssr.md"}');export{c as comp,t as data};
