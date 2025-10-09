import{_ as n,c as e,a,o as i}from"./app-CD1YpnS1.js";const l={};function c(d,s){return i(),e("div",null,[...s[0]||(s[0]=[a(`<h2 id="ajax请求" tabindex="-1"><a class="header-anchor" href="#ajax请求"><span>ajax请求</span></a></h2><ul><li>axios封装<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import axios from &#39;../lib/AjaxRequest&#39;;</span>
<span class="line">export const getUser = ()=&gt;{</span>
<span class="line">  return axios.request({url:&#39;/getUser&#39;,method:&#39;get&#39;});</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p>封装ajaxRequest</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import axios from &#39;axios&#39;;</span>
<span class="line">let baseUrl = process.env.NODE_ENV !== &#39;production&#39;?&#39;http://localhost:8080&#39;:&#39;/&#39;;</span>
<span class="line">class AjaxRequest{</span>
<span class="line">    constructor(){</span>
<span class="line">        this.baseURL = baseUrl; // 配置默认路径</span>
<span class="line">    }</span>
<span class="line">    request(config){</span>
<span class="line">        // 创建一个axios实例</span>
<span class="line">        let instance = axios.create();</span>
<span class="line">        // axios(config);</span>
<span class="line">        config = {baseURL:this.baseURL,...config};</span>
<span class="line">        return instance(config);</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line">export default new AjaxRequest();</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>解决跨域问题</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">// webpack解决前端跨域问题</span>
<span class="line">module.exports = {</span>
<span class="line">  devServer:{</span>
<span class="line">      proxy:{</span>
<span class="line">          &#39;/getUser&#39;:{</span>
<span class="line">              target:&#39;http://localhost:3000&#39;</span>
<span class="line">          }</span>
<span class="line">      }</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>请求拦截器／响应拦截器</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import axios from &#39;axios&#39;;</span>
<span class="line">let baseUrl = process.env.NODE_ENV !== &#39;production&#39;?&#39;http://localhost:8080&#39;:&#39;/&#39;;</span>
<span class="line">class AjaxRequest{</span>
<span class="line">  constructor(){</span>
<span class="line">      this.baseURL = baseUrl; // 配置默认路径</span>
<span class="line">      this.requestQueue = {}; // 缓存当前请求队列 用来操作loading的显示或者隐藏</span>
<span class="line">  }</span>
<span class="line">  configInterceptors(instance,url){</span>
<span class="line">      // 配置请求拦截</span>
<span class="line">      instance.interceptors.request.use( (config) =&gt; {</span>
<span class="line">          //  loading效果 开始请求前显示loading</span>
<span class="line">          if(Object.keys(this.requestQueue).length === 0){</span>
<span class="line">              console.log(&#39;显示loading&#39;);</span>
<span class="line">          }</span>
<span class="line">          this.requestQueue[url] = config.url;</span>
<span class="line">          return config;</span>
<span class="line">      });</span>
<span class="line">      // 配置响应拦截</span>
<span class="line">      instance.interceptors.response.use(res=&gt;{</span>
<span class="line">          // 取消loading效果</span>
<span class="line">          delete this.requestQueue[url];</span>
<span class="line">          if(Object.keys(this.requestQueue).length === 0){</span>
<span class="line">              console.log(&#39;取消loading&#39;);</span>
<span class="line">          };</span>
<span class="line">          if(res.status !== 200){</span>
<span class="line">              return Promise.reject(res);</span>
<span class="line">          }else{</span>
<span class="line">              return res.data;</span>
<span class="line">          }</span>
<span class="line">      })</span>
<span class="line"></span>
<span class="line">  }</span>
<span class="line">  request(config){</span>
<span class="line">      // 创建一个axios实例</span>
<span class="line">      let instance = axios.create();</span>
<span class="line">      // axios(config);</span>
<span class="line">      config = {baseURL:this.baseURL,...config};</span>
<span class="line">      this.configInterceptors(instance,config.url);</span>
<span class="line">      return instance(config);</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line">export default new AjaxRequest();</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>`,5)])])}const p=n(l,[["render",c]]),t=JSON.parse('{"path":"/strong/66-8.axios-apply.html","title":"","lang":"en-US","frontmatter":{},"git":{"updatedTime":1681290319000,"contributors":[{"name":"yutao","username":"yutao","email":"642231346@qq.com","commits":1,"url":"https://github.com/yutao"}],"changelog":[{"hash":"f5ab8c9d34991ec274f7f652439afe5b2afb6147","time":1681290319000,"email":"642231346@qq.com","author":"yutao","message":"modify"}]},"filePathRelative":"strong/66-8.axios-apply.md"}');export{p as comp,t as data};
