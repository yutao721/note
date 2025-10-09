import{_ as s,c as a,a as e,o as p}from"./app-CD1YpnS1.js";const l={};function t(i,n){return p(),a("div",null,[...n[0]||(n[0]=[e(`<h2 id="_1-ant-design-pro" tabindex="-1"><a class="header-anchor" href="#_1-ant-design-pro"><span>1.Ant Design Pro</span></a></h2><ul><li><code>Ant Design Pro</code> 是一个企业级中后台前端/设计解决方案，我们秉承 Ant Design 的设计价值观，致力于在设计规范和基础组件的基础上，继续向上构建，提炼出典型模板/业务组件/配套设计资源，进一步提升企业级中后台产品设计研发过程中的『用户』和『设计者』的体验。</li><li><a href="https://pro.ant.design" target="_blank" rel="noopener noreferrer">pro.ant.design</a></li><li><a href="https://beta-pro.ant.design/index-cn/" target="_blank" rel="noopener noreferrer">beta-pro.ant.design</a></li><li><a href="https://procomponents.ant.design/components/table/" target="_blank" rel="noopener noreferrer">procomponents.ant.design</a></li><li><a href="https://beta-pro.ant.design/docs/getting-started-cn" target="_blank" rel="noopener noreferrer">getting-started-cn</a></li></ul><h3 id="_1-1-启动项目" tabindex="-1"><a class="header-anchor" href="#_1-1-启动项目"><span>1.1 启动项目</span></a></h3><h4 id="_1-1-1-安装" tabindex="-1"><a class="header-anchor" href="#_1-1-1-安装"><span>1.1.1 安装</span></a></h4><ul><li>新建一个空的文件夹作为项目目录，并在目录下执行</li><li><a href="https://www.python.org/downloads/release/python-380/" target="_blank" rel="noopener noreferrer">python-380</a></li></ul><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token comment">//npm config set python &quot;C:/Python38/python.exe&quot;</span></span>
<span class="line">yarn create umi</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-1-2-目录结构" tabindex="-1"><a class="header-anchor" href="#_1-1-2-目录结构"><span>1.1.2 目录结构</span></a></h4><ul><li>我们已经为你生成了一个完整的开发框架，提供了涵盖中后台开发的各类功能和坑位，下面是整个项目的目录结构。</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line"> ├─config </span>
<span class="line"> ├─mock   </span>
<span class="line">├─public</span>
<span class="line">│  └─icons</span>
<span class="line">├─src</span>
<span class="line"> │  ├─components </span>
<span class="line">│  │  ├─Footer</span>
<span class="line">│  │  ├─HeaderDropdown</span>
<span class="line">│  │  ├─HeaderSearch</span>
<span class="line">│  │  ├─NoticeIcon</span>
<span class="line">│  │  └─RightContent</span>
<span class="line"> │  ├─e2e       </span>
<span class="line"> │  ├─locales   </span>
<span class="line">│  │  ├─en-US</span>
<span class="line">│  │  ├─id-ID</span>
<span class="line">│  │  ├─pt-BR</span>
<span class="line">│  │  ├─zh-CN</span>
<span class="line">│  │  └─zh-TW</span>
<span class="line"> │  ├─pages    </span>
<span class="line">│  │  ├─ListTableList</span>
<span class="line">│  │  │  └─components</span>
<span class="line">│  │  └─user</span>
<span class="line">│  │      └─login</span>
<span class="line"> │  ├─services </span>
<span class="line"> │  └─utils    </span>
<span class="line"> └─tests       </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-1-3-本地开发" tabindex="-1"><a class="header-anchor" href="#_1-1-3-本地开发"><span>1.1.3 本地开发</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">npm install</span>
<span class="line">npm run dev</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-用户登录" tabindex="-1"><a class="header-anchor" href="#_2-用户登录"><span>2. 用户登录</span></a></h2><ul><li><a href="https://umijs.org/zh-CN/plugins/plugin-access" target="_blank" rel="noopener noreferrer">plugin-access</a></li></ul><h4 id="_2-2-1-config-proxy-ts" tabindex="-1"><a class="header-anchor" href="#_2-2-1-config-proxy-ts"><span>2.2.1 config\\proxy.ts</span></a></h4><p>config\\proxy.ts</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">export default {</span>
<span class="line">  dev: {</span>
<span class="line">    &#39;/api/&#39;: {</span>
<span class="line">+      target: &#39;http://localhost:3000/&#39;,</span>
<span class="line">      changeOrigin: true,</span>
<span class="line">      pathRewrite: { &#39;^&#39;: &#39;&#39; },</span>
<span class="line">    },</span>
<span class="line">  },</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-2-2-src-services-api-d-ts" tabindex="-1"><a class="header-anchor" href="#_2-2-2-src-services-api-d-ts"><span>2.2.2 src\\services\\API.d.ts</span></a></h4><p>src\\services\\API.d.ts</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">  export interface LoginStateType {</span>
<span class="line">    status?: &#39;ok&#39; | &#39;error&#39;;</span>
<span class="line">    type?: string;</span>
<span class="line">+    token?:string;</span>
<span class="line">  }</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-2-3-login-index-tsx" tabindex="-1"><a class="header-anchor" href="#_2-2-3-login-index-tsx"><span>2.2.3 login\\index.tsx</span></a></h4><p>src\\pages\\user\\login\\index.tsx</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">  const handleSubmit = async (values: LoginParamsType) =&gt; {</span>
<span class="line">    setSubmitting(true);</span>
<span class="line">    try {</span>
<span class="line">      // 登录</span>
<span class="line">      const msg = await fakeAccountLogin({ ...values, type });</span>
<span class="line">+      if (msg.status === &#39;ok&#39; &amp;&amp; msg.token) {</span>
<span class="line">+        localStorage.setItem(&#39;token&#39;,msg.token);</span>
<span class="line">        message.success(&#39;登录成功！&#39;);</span>
<span class="line">        await fetchUserInfo();</span>
<span class="line">        goto();</span>
<span class="line">        return;</span>
<span class="line">      }</span>
<span class="line">      // 如果失败去设置用户错误信息</span>
<span class="line">      setUserLoginState(msg);</span>
<span class="line">    } catch (error) {</span>
<span class="line">      message.error(&#39;登录失败，请重试！&#39;);</span>
<span class="line">    }</span>
<span class="line">    setSubmitting(false);</span>
<span class="line">  };</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-2-4-app-tsx" tabindex="-1"><a class="header-anchor" href="#_2-2-4-app-tsx"><span>2.2.4 app.tsx</span></a></h4><p>src\\app.tsx</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">export const request: RequestConfig = {</span>
<span class="line">  errorHandler,</span>
<span class="line">+   headers: {</span>
<span class="line">+    Authorization: \`Bearer \${localStorage.getItem(&#39;token&#39;)}\`,</span>
<span class="line">+  },</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-2-5-user-ts" tabindex="-1"><a class="header-anchor" href="#_2-2-5-user-ts"><span>2.2.5 user.ts</span></a></h4><p>src\\services\\user.ts</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">export async function queryCurrent() {</span>
<span class="line">  return request&lt;API.CurrentUser&gt;(&#39;/api/currentUser&#39;,</span>
<span class="line">+  {</span>
<span class="line">+    headers: {</span>
<span class="line">+      Authorization: \`Bearer \${localStorage.getItem(&#39;token&#39;)}\`,</span>
<span class="line">+    },</span>
<span class="line">+  }</span>
<span class="line"> );</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-2-6-api-d-ts" tabindex="-1"><a class="header-anchor" href="#_2-2-6-api-d-ts"><span>2.2.6 API.d.ts</span></a></h4><p>src\\services\\API.d.ts</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">  export interface CurrentUser {</span>
<span class="line">    avatar?: string;</span>
<span class="line">+    username?: string;</span>
<span class="line">    title?: string;</span>
<span class="line">    group?: string;</span>
<span class="line">    signature?: string;</span>
<span class="line">    tags?: {</span>
<span class="line">      key: string;</span>
<span class="line">      label: string;</span>
<span class="line">    }[];</span>
<span class="line">    userid?: string;</span>
<span class="line">    access?: &#39;user&#39; | &#39;guest&#39; | &#39;admin&#39;;</span>
<span class="line">    unreadCount?: number;</span>
<span class="line">  }</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-2-7-avatardropdown-tsx" tabindex="-1"><a class="header-anchor" href="#_2-2-7-avatardropdown-tsx"><span>2.2.7 AvatarDropdown.tsx</span></a></h4><p>src\\components\\RightContent\\AvatarDropdown.tsx</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">/**</span>
<span class="line"> * 退出登录，并且将当前的 url 保存</span>
<span class="line"> */</span>
<span class="line">const loginOut = async () =&gt; {</span>
<span class="line">  await outLogin();</span>
<span class="line">+ localStorage.removeItem(&#39;token&#39;);</span>
<span class="line">  const { query, pathname } = history.location;</span>
<span class="line">  const { redirect } = query;</span>
<span class="line">  // Note: There may be security issues, please note</span>
<span class="line">  if (window.location.pathname !== &#39;/user/login&#39; &amp;&amp; !redirect) {</span>
<span class="line">    history.replace({</span>
<span class="line">      pathname: &#39;/user/login&#39;,</span>
<span class="line">      search: stringify({</span>
<span class="line">        redirect: pathname,</span>
<span class="line">      }),</span>
<span class="line">    });</span>
<span class="line">  }</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line">const AvatarDropdown: React.FC&lt;GlobalHeaderRightProps&gt; = ({ menu }) =&gt; {</span>
<span class="line">  const { initialState, setInitialState } = useModel(&#39;@@initialState&#39;);</span>
<span class="line">  const { currentUser } = initialState;</span>
<span class="line">+  if (!currentUser || !currentUser.username) {</span>
<span class="line">    return loading;</span>
<span class="line">  }</span>
<span class="line">  return (</span>
<span class="line">    &lt;HeaderDropdown overlay={menuHeaderDropdown}&gt;</span>
<span class="line">      &lt;span className={\`\${styles.action} \${styles.account}\`}&gt;</span>
<span class="line">        &lt;Avatar size=&quot;small&quot; className={styles.avatar} src={currentUser.avatar} alt=&quot;avatar&quot; /&gt;</span>
<span class="line">+        &lt;span className={\`\${styles.name} anticon\`}&gt;{currentUser.username}&lt;/span&gt;</span>
<span class="line">      &lt;/span&gt;</span>
<span class="line">    &lt;/HeaderDropdown&gt;</span>
<span class="line">  );</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line">export default AvatarDropdown;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-新增用户和用户列表" tabindex="-1"><a class="header-anchor" href="#_3-新增用户和用户列表"><span>3. 新增用户和用户列表</span></a></h2><h3 id="_3-1-config-routes-ts" tabindex="-1"><a class="header-anchor" href="#_3-1-config-routes-ts"><span>3.1 config\\routes.ts</span></a></h3><p>config\\routes.ts</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">  {</span>
<span class="line">    path: &#39;/admin&#39;,</span>
<span class="line">    name: &#39;admin&#39;,</span>
<span class="line">    icon: &#39;crown&#39;,</span>
<span class="line">    access: &#39;canAdmin&#39;,</span>
<span class="line">    routes: [</span>
<span class="line">      {</span>
<span class="line">+        path: &#39;/admin/user&#39;,</span>
<span class="line">+        name: &#39;user&#39;,</span>
<span class="line">+        icon: &#39;smile&#39;,</span>
<span class="line">+        component: &#39;./admin/User&#39;,</span>
<span class="line">      },</span>
<span class="line">    ],</span>
<span class="line">  },</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-menu-ts" tabindex="-1"><a class="header-anchor" href="#_3-2-menu-ts"><span>3.2 menu.ts</span></a></h3><p>src\\locales\\zh-CN\\menu.ts</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">export default {</span>
<span class="line">  &#39;menu.welcome&#39;: &#39;欢迎&#39;,</span>
<span class="line">  &#39;menu.more-blocks&#39;: &#39;更多区块&#39;,</span>
<span class="line">  &#39;menu.home&#39;: &#39;首页&#39;,</span>
<span class="line">  &#39;menu.admin&#39;: &#39;管理页&#39;,</span>
<span class="line">+ &#39;menu.admin.user&#39;: &#39;用户管理&#39;,</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-data-d-ts" tabindex="-1"><a class="header-anchor" href="#_3-3-data-d-ts"><span>3.3 data.d.ts</span></a></h3><p>src\\pages\\admin\\user\\data.d.ts</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">export interface TableListItem {</span>
<span class="line">+  id?:string;</span>
<span class="line">+  username?:string;</span>
<span class="line">+  email?:string;</span>
<span class="line">+  password?: string;</span>
<span class="line">+  avatar?: string;</span>
<span class="line">+  updatedAt?: Date;</span>
<span class="line">+  createdAt?: Date;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">export interface TableListParams {</span>
<span class="line">+  id?:string;</span>
<span class="line">+  username?:string;</span>
<span class="line">+  password?: string;</span>
<span class="line">+  email?:string;</span>
<span class="line">+  avatar?: string;</span>
<span class="line">+  updatedAt?: Date;</span>
<span class="line">+  createdAt?: Date;</span>
<span class="line">  pageSize?: number;</span>
<span class="line">  currentPage?: number;</span>
<span class="line">  filter?: { [key: string]: any[] };</span>
<span class="line">  sorter?: { [key: string]: any };</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-4-service-ts" tabindex="-1"><a class="header-anchor" href="#_3-4-service-ts"><span>3.4 service.ts</span></a></h3><p>src\\pages\\admin\\user\\service.ts</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">+export async function removeUser(params: { key: string[] }) {</span>
<span class="line">  return request(&#39;/api/user&#39;, {</span>
<span class="line">+   method: &#39;DELETE&#39;,</span>
<span class="line">    data: {</span>
<span class="line">      ...params</span>
<span class="line">    },</span>
<span class="line">  });</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">+export async function addUser(params: TableListItem) {</span>
<span class="line">  return request(&#39;/api/user&#39;, {</span>
<span class="line">    method: &#39;POST&#39;,</span>
<span class="line">    data: {</span>
<span class="line">      ...params</span>
<span class="line">    },</span>
<span class="line">  });</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">+export async function updateUser(params: TableListParams) {</span>
<span class="line">  return request(&#39;/api/user&#39;, {</span>
<span class="line">+    method: &#39;PUT&#39;,</span>
<span class="line">    data: {</span>
<span class="line">      ...params</span>
<span class="line">    },</span>
<span class="line">  });</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-5-user-index-tsx" tabindex="-1"><a class="header-anchor" href="#_3-5-user-index-tsx"><span>3.5 user\\index.tsx</span></a></h3><p>src\\pages\\admin\\user\\index.tsx</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import { PlusOutlined } from &#39;@ant-design/icons&#39;;</span>
<span class="line">+import { Button, message, Drawer ,Avatar} from &#39;antd&#39;;</span>
<span class="line">import React, { useState, useRef } from &#39;react&#39;;</span>
<span class="line">import { PageContainer, FooterToolbar } from &#39;@ant-design/pro-layout&#39;;</span>
<span class="line">import ProTable, { ProColumns, ActionType } from &#39;@ant-design/pro-table&#39;;</span>
<span class="line">import ProDescriptions from &#39;@ant-design/pro-descriptions&#39;;</span>
<span class="line">import CreateForm from &#39;./components/CreateForm&#39;;</span>
<span class="line">import UpdateForm, { FormValueType } from &#39;./components/UpdateForm&#39;;</span>
<span class="line">import { TableListItem } from &#39;./data.d&#39;;</span>
<span class="line">+import { queryUser, updateUser, addUser, removeUser } from &#39;./service&#39;;</span>
<span class="line">+import moment from &#39;moment&#39;;</span>
<span class="line">/**</span>
<span class="line"> * 添加节点</span>
<span class="line"> * @param fields</span>
<span class="line"> */</span>
<span class="line">const handleAdd = async (fields: TableListItem) =&gt; {</span>
<span class="line">  const hide = message.loading(&#39;正在添加&#39;);</span>
<span class="line">  try {</span>
<span class="line">+    await addUser({ ...fields });</span>
<span class="line">    hide();</span>
<span class="line">    message.success(&#39;添加成功&#39;);</span>
<span class="line">    return true;</span>
<span class="line">  } catch (error) {</span>
<span class="line">    hide();</span>
<span class="line">    message.error(&#39;添加失败请重试！&#39;);</span>
<span class="line">    return false;</span>
<span class="line">  }</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line">/**</span>
<span class="line"> * 更新节点</span>
<span class="line"> * @param fields</span>
<span class="line"> */</span>
<span class="line">+const handleUpdate = async (id:string,fields: FormValueType) =&gt; {</span>
<span class="line">  const hide = message.loading(&#39;正在配置&#39;);</span>
<span class="line">  try {</span>
<span class="line">    await updateUser({</span>
<span class="line">+      id,</span>
<span class="line">+      username: fields.username,</span>
<span class="line">+      password: fields.password,</span>
<span class="line">+      email: fields.email</span>
<span class="line">    });</span>
<span class="line">    hide();</span>
<span class="line"></span>
<span class="line">    message.success(&#39;配置成功&#39;);</span>
<span class="line">    return true;</span>
<span class="line">  } catch (error) {</span>
<span class="line">    hide();</span>
<span class="line">    message.error(&#39;配置失败请重试！&#39;);</span>
<span class="line">    return false;</span>
<span class="line">  }</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line">/**</span>
<span class="line"> *  删除节点</span>
<span class="line"> * @param selectedRows</span>
<span class="line"> */</span>
<span class="line">const handleRemove = async (selectedRows: TableListItem[]) =&gt; {</span>
<span class="line">  const hide = message.loading(&#39;正在删除&#39;);</span>
<span class="line">  if (!selectedRows) return true;</span>
<span class="line">  try {</span>
<span class="line">+    await removeUser({</span>
<span class="line">      key: selectedRows.map((row:TableListItem) =&gt; row.id!),</span>
<span class="line">    });</span>
<span class="line">    hide();</span>
<span class="line">    message.success(&#39;删除成功，即将刷新&#39;);</span>
<span class="line">    return true;</span>
<span class="line">  } catch (error) {</span>
<span class="line">    hide();</span>
<span class="line">    message.error(&#39;删除失败，请重试&#39;);</span>
<span class="line">    return false;</span>
<span class="line">  }</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line">const TableList: React.FC&lt;{}&gt; = () =&gt; {</span>
<span class="line">  const [createModalVisible, handleModalVisible] = useState&lt;boolean&gt;(false);</span>
<span class="line">  const [updateModalVisible, handleUpdateModalVisible] = useState&lt;boolean&gt;(false);</span>
<span class="line">+  const [stepFormValues, setStepFormValues] = useState&lt;TableListItem&gt;({});</span>
<span class="line">  const actionRef = useRef&lt;ActionType&gt;();</span>
<span class="line">  const [row, setRow] = useState&lt;TableListItem&gt;();</span>
<span class="line">  const [selectedRowsState, setSelectedRows] = useState&lt;TableListItem[]&gt;([]);</span>
<span class="line">+  const columns: ProColumns&lt;TableListItem&gt;[] = [</span>
<span class="line">+    {</span>
<span class="line">+      title: &#39;用户名&#39;,</span>
<span class="line">+      dataIndex: &#39;username&#39;,</span>
<span class="line">+      tip: &#39;用户名是唯一的&#39;,</span>
<span class="line">+      render: (dom, entity) =&gt; {</span>
<span class="line">+        return &lt;a onClick={() =&gt; setRow(entity)}&gt;{dom}&lt;/a&gt;;</span>
<span class="line">+      }</span>
<span class="line">+    },</span>
<span class="line">+    {</span>
<span class="line">+      title: &#39;密码&#39;,</span>
<span class="line">+      dataIndex: &#39;password&#39;,</span>
<span class="line">+      hideInDescriptions:true,</span>
<span class="line">+      tip: &#39;密码&#39;,</span>
<span class="line">+      hideInTable:true</span>
<span class="line">+    },</span>
<span class="line">+    {</span>
<span class="line">+      title: &#39;角色&#39;,</span>
<span class="line">+      dataIndex: &#39;access&#39;,</span>
<span class="line">+      search: false,</span>
<span class="line">+      filters: [</span>
<span class="line">+        { text: &#39;普通用户&#39;, value: &#39;user&#39; },</span>
<span class="line">+        { text: &#39;管理员&#39;, value: &#39;admin&#39; },</span>
<span class="line">+      ],</span>
<span class="line">+      valueEnum: {</span>
<span class="line">+        &#39;user&#39;: { text: &#39;普通用户&#39;},</span>
<span class="line">+        &#39;admin&#39;: { text: &#39;管理员&#39;},</span>
<span class="line">+      }</span>
<span class="line">+    },</span>
<span class="line">+    {</span>
<span class="line">+      title: &#39;邮箱&#39;,</span>
<span class="line">+      dataIndex: &#39;email&#39;,</span>
<span class="line">+      hideInTable:true</span>
<span class="line">+    },</span>
<span class="line">+    {</span>
<span class="line">+      title: &#39;头像&#39;,</span>
<span class="line">+      dataIndex: &#39;avatar&#39;,</span>
<span class="line">+      search: false,</span>
<span class="line">+      hideInForm: true,</span>
<span class="line">+      render: (dom,entity) =&gt; {</span>
<span class="line">+        return &lt;Avatar src={entity.avatar}/&gt;</span>
<span class="line">+      }</span>
<span class="line">+    },</span>
<span class="line">+    {</span>
<span class="line">+      title: &#39;更新时间&#39;,</span>
<span class="line">+      dataIndex: &#39;updatedAt&#39;,</span>
<span class="line">+      sorter: true,</span>
<span class="line">+      hideInForm: true,</span>
<span class="line">+      search: false,</span>
<span class="line">+      renderText: (val: string) =&gt; {</span>
<span class="line">+        if(!val) return &#39;&#39;;</span>
<span class="line">+        return  moment(val).fromNow();</span>
<span class="line">+      }</span>
<span class="line">+    },</span>
<span class="line">+    {</span>
<span class="line">+      title: &#39;创建时间&#39;,</span>
<span class="line">+      dataIndex: &#39;createdAt&#39;,</span>
<span class="line">+      sorter: true,</span>
<span class="line">+      hideInForm: true,</span>
<span class="line">+      valueType: &#39;dateTime&#39;</span>
<span class="line">+    },</span>
<span class="line">+    {</span>
<span class="line">+      title: &#39;操作&#39;,</span>
<span class="line">+      dataIndex: &#39;option&#39;,</span>
<span class="line">+      valueType: &#39;option&#39;,</span>
<span class="line">+      render: (_, record) =&gt; (</span>
<span class="line">+        &lt;&gt;</span>
<span class="line">+          &lt;a</span>
<span class="line">+            onClick={() =&gt; {</span>
<span class="line">+              handleUpdateModalVisible(true);</span>
<span class="line">+              setStepFormValues(record);</span>
<span class="line">+            }}</span>
<span class="line">+          &gt;</span>
<span class="line">+            修改</span>
<span class="line">+          &lt;/a&gt;</span>
<span class="line">+        &lt;/&gt;</span>
<span class="line">+      ),</span>
<span class="line">+    },</span>
<span class="line">+  ];</span>
<span class="line"></span>
<span class="line">  return (</span>
<span class="line">    &lt;PageContainer&gt;</span>
<span class="line">      &lt;ProTable&lt;TableListItem&gt;</span>
<span class="line">        headerTitle={&#39;用户管理&#39;}</span>
<span class="line">        actionRef={actionRef}</span>
<span class="line">+        rowKey=&quot;id&quot;</span>
<span class="line">        search={{</span>
<span class="line">          labelWidth: 120,</span>
<span class="line">        }}</span>
<span class="line">+        pagination={{defaultPageSize:5}}</span>
<span class="line">        toolBarRender={() =&gt; [</span>
<span class="line">          &lt;Button type=&quot;primary&quot; onClick={() =&gt; handleModalVisible(true)}&gt;</span>
<span class="line">            &lt;PlusOutlined /&gt; 新建</span>
<span class="line">          &lt;/Button&gt;,</span>
<span class="line">        ]}</span>
<span class="line">        request={(params, sorter, filter) =&gt; queryUser({ ...params, sorter, filter })}</span>
<span class="line">        columns={columns}</span>
<span class="line">        rowSelection={{</span>
<span class="line">          onChange: (_, selectedRows) =&gt; setSelectedRows(selectedRows),</span>
<span class="line">        }}</span>
<span class="line">      /&gt;</span>
<span class="line">      {selectedRowsState?.length &gt; 0 &amp;&amp; (</span>
<span class="line">        &lt;FooterToolbar</span>
<span class="line">          extra={</span>
<span class="line">            &lt;div&gt;</span>
<span class="line">              已选择{&#39; &#39;}</span>
<span class="line">              &lt;a style={{ fontWeight: 600 }}&gt;{selectedRowsState.length}&lt;/a&gt;{&#39; &#39;}</span>
<span class="line">              项</span>
<span class="line">            &lt;/div&gt;</span>
<span class="line">          }</span>
<span class="line">        &gt;</span>
<span class="line">          &lt;Button</span>
<span class="line">            onClick={async () =&gt; {</span>
<span class="line">              await handleRemove(selectedRowsState);</span>
<span class="line">              setSelectedRows([]);</span>
<span class="line">              actionRef.current?.reloadAndRest?.();</span>
<span class="line">            }}</span>
<span class="line">          &gt;</span>
<span class="line">            批量删除</span>
<span class="line">          &lt;/Button&gt;</span>
<span class="line">        &lt;/FooterToolbar&gt;</span>
<span class="line">      )}</span>
<span class="line">      &lt;CreateForm onCancel={() =&gt; handleModalVisible(false)} modalVisible={createModalVisible}&gt;</span>
<span class="line">        &lt;ProTable&lt;TableListItem, TableListItem&gt;</span>
<span class="line">          onSubmit={async (value) =&gt; {</span>
<span class="line">            const success = await handleAdd(value);</span>
<span class="line">            if (success) {</span>
<span class="line">              handleModalVisible(false);</span>
<span class="line">              if (actionRef.current) {</span>
<span class="line">                actionRef.current.reload();</span>
<span class="line">              }</span>
<span class="line">            }</span>
<span class="line">          }}</span>
<span class="line">+         rowKey=&quot;id&quot;</span>
<span class="line">          type=&quot;form&quot;</span>
<span class="line">          columns={columns}</span>
<span class="line">        /&gt;</span>
<span class="line">      &lt;/CreateForm&gt;</span>
<span class="line">      {stepFormValues &amp;&amp; Object.keys(stepFormValues).length ? (</span>
<span class="line">        &lt;UpdateForm</span>
<span class="line">          onSubmit={async (value) =&gt; {</span>
<span class="line">+            const success = await handleUpdate(stepFormValues.id!,value);</span>
<span class="line">            if (success) {</span>
<span class="line">              handleUpdateModalVisible(false);</span>
<span class="line">              setStepFormValues({});</span>
<span class="line">              if (actionRef.current) {</span>
<span class="line">                actionRef.current.reload();</span>
<span class="line">              }</span>
<span class="line">            }</span>
<span class="line">          }}</span>
<span class="line">          onCancel={() =&gt; {</span>
<span class="line">            handleUpdateModalVisible(false);</span>
<span class="line">            setStepFormValues({});</span>
<span class="line">          }}</span>
<span class="line">          updateModalVisible={updateModalVisible}</span>
<span class="line">          values={stepFormValues}</span>
<span class="line">        /&gt;</span>
<span class="line">      ) : null}</span>
<span class="line"></span>
<span class="line">      &lt;Drawer</span>
<span class="line">        width={600}</span>
<span class="line">        visible={!!row}</span>
<span class="line">        onClose={() =&gt; {</span>
<span class="line">          setRow(undefined);</span>
<span class="line">        }}</span>
<span class="line">        closable={false}</span>
<span class="line">      &gt;</span>
<span class="line">        {row?.username &amp;&amp; (</span>
<span class="line">          &lt;ProDescriptions&lt;TableListItem&gt;</span>
<span class="line">            column={2}</span>
<span class="line">+            title={row?.username}</span>
<span class="line">            request={async () =&gt; ({</span>
<span class="line">              data: row || {},</span>
<span class="line">            })}</span>
<span class="line">            params={{</span>
<span class="line">+              id: row?.username,</span>
<span class="line">            }}</span>
<span class="line">            columns={columns}</span>
<span class="line">          /&gt;</span>
<span class="line">        )}</span>
<span class="line">      &lt;/Drawer&gt;</span>
<span class="line">    &lt;/PageContainer&gt;</span>
<span class="line">  );</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line">export default TableList;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-6-pages-ts" tabindex="-1"><a class="header-anchor" href="#_3-6-pages-ts"><span>3.6 pages.ts</span></a></h3><p>src\\locales\\zh-CN\\pages.ts</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">  &#39;pages.admin.subPage.title&#39;: &#39; 这个页面只有 admin 权限才能查看&#39;,</span>
<span class="line">+ &#39;pages.admin.user.createForm.newUser&#39;: &#39;增加用户&#39;,</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-7-createform-tsx" tabindex="-1"><a class="header-anchor" href="#_3-7-createform-tsx"><span>3.7 CreateForm.tsx</span></a></h3><p>src\\pages\\admin\\user\\components\\CreateForm.tsx</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">const CreateForm: React.FC&lt;CreateFormProps&gt; = (props) =&gt; {</span>
<span class="line">  const { modalVisible, onCancel } = props;</span>
<span class="line">  const intl = useIntl();</span>
<span class="line">  return (</span>
<span class="line">    &lt;Modal</span>
<span class="line">      destroyOnClose</span>
<span class="line">      title={intl.formatMessage({</span>
<span class="line">+        id: &#39;pages.searchTable.createForm.newUser&#39;,</span>
<span class="line">+        defaultMessage: &#39;增加用户&#39;,</span>
<span class="line">      })}</span>
<span class="line">      visible={modalVisible}</span>
<span class="line">      onCancel={() =&gt; onCancel()}</span>
<span class="line">      footer={null}</span>
<span class="line">    &gt;</span>
<span class="line">      {props.children}</span>
<span class="line">    &lt;/Modal&gt;</span>
<span class="line">  );</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-修改用户" tabindex="-1"><a class="header-anchor" href="#_4-修改用户"><span>4. 修改用户</span></a></h2><h3 id="_4-1-updateform-tsx" tabindex="-1"><a class="header-anchor" href="#_4-1-updateform-tsx"><span>4.1 UpdateForm.tsx</span></a></h3><p>src\\pages\\admin\\user\\components\\UpdateForm.tsx</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React from &#39;react&#39;;</span>
<span class="line">import { Modal } from &#39;antd&#39;;</span>
<span class="line">+import ProForm,{ProFormText} from &#39;@ant-design/pro-form&#39;;</span>
<span class="line">import { TableListItem } from &#39;../data.d&#39;;</span>
<span class="line"></span>
<span class="line">+export interface FormValueType extends Partial&lt;TableListItem&gt; {}</span>
<span class="line"></span>
<span class="line">export interface UpdateFormProps {</span>
<span class="line">  onCancel: (flag?: boolean, formVals?: FormValueType) =&gt; void;</span>
<span class="line">  onSubmit: (values: FormValueType) =&gt; Promise&lt;void&gt;;</span>
<span class="line">  updateModalVisible: boolean;</span>
<span class="line">  values: Partial&lt;TableListItem&gt;;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">const UpdateForm: React.FC&lt;UpdateFormProps&gt; = (props) =&gt; {</span>
<span class="line">  return (</span>
<span class="line">+    &lt;Modal</span>
<span class="line">+    destroyOnClose</span>
<span class="line">+    title=&quot;更新用户&quot;</span>
<span class="line">+    width={420}</span>
<span class="line">+    visible={props.updateModalVisible}</span>
<span class="line">+    onCancel={() =&gt; props.onCancel()}</span>
<span class="line">+    footer={null}</span>
<span class="line">+  &gt;</span>
<span class="line">+    &lt;ProForm</span>
<span class="line">+      initialValues={props.values}</span>
<span class="line">+      onFinish={async (values: any) =&gt; {</span>
<span class="line">+        props.onSubmit(values);</span>
<span class="line">+      }}</span>
<span class="line">+    &gt;</span>
<span class="line">+      &lt;ProFormText</span>
<span class="line">+        label=&quot;用户名&quot;</span>
<span class="line">+        name=&quot;username&quot;</span>
<span class="line">+      /&gt;</span>
<span class="line">+      &lt;ProFormText</span>
<span class="line">+        label=&quot;密码&quot;</span>
<span class="line">+        name=&quot;password&quot;</span>
<span class="line">+      /&gt;</span>
<span class="line">+      &lt;ProFormText</span>
<span class="line">+        label=&quot;邮箱&quot;</span>
<span class="line">+        name=&quot;email&quot;</span>
<span class="line">+      /&gt;</span>
<span class="line">+    &lt;/ProForm&gt;</span>
<span class="line">+  &lt;/Modal&gt;</span>
<span class="line">  );</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line">export default UpdateForm;</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-初始化项目" tabindex="-1"><a class="header-anchor" href="#_1-初始化项目"><span>1.初始化项目</span></a></h2><ul><li><a href="https://www.mongodb.com/try/download/community" target="_blank" rel="noopener noreferrer">下载mongodb</a></li></ul><h3 id="_1-1-安装" tabindex="-1"><a class="header-anchor" href="#_1-1-安装"><span>1.1 安装</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">cnpm i express body-parser mongoose jsonwebtoken http-status-codes -S</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="_2-用户注册登录" tabindex="-1"><a class="header-anchor" href="#_2-用户注册登录"><span>2.用户注册登录</span></a></h2><h3 id="_2-1-app-js" tabindex="-1"><a class="header-anchor" href="#_2-1-app-js"><span>2.1 app.js</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">let</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;express&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> bodyParser <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;body-parser&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> user <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;./routes/user&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>bodyParser<span class="token punctuation">.</span><span class="token function">urlencoded</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">extended</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>bodyParser<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">&quot;/api&quot;</span><span class="token punctuation">,</span> user<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;服务器在3000端口启动!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-config-js" tabindex="-1"><a class="header-anchor" href="#_2-2-config-js"><span>2.2 config.js</span></a></h3><p>config.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">secret</span><span class="token operator">:</span> <span class="token string">&#39;pro5&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">dbUrl</span><span class="token operator">:</span> <span class="token string">&quot;mongodb://localhost:27017/pro5&quot;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-model-js" tabindex="-1"><a class="header-anchor" href="#_2-3-model-js"><span>2.3 model.js</span></a></h3><p>model.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">const</span> mongoose <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;mongoose&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> Schema <span class="token operator">=</span> mongoose<span class="token punctuation">.</span>Schema<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> config <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./config&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> conn <span class="token operator">=</span> mongoose<span class="token punctuation">.</span><span class="token function">createConnection</span><span class="token punctuation">(</span>config<span class="token punctuation">.</span>dbUrl<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">useNewUrlParser</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">useUnifiedTopology</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> UserSchema <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Schema</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">email</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> String <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token comment">//邮箱</span></span>
<span class="line">    <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> String <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token comment">//用户名</span></span>
<span class="line">    <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span> <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token comment">//密码</span></span>
<span class="line">    <span class="token literal-property property">avatar</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span> <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token comment">//头像</span></span>
<span class="line">    <span class="token literal-property property">access</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span> <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span><span class="token keyword">default</span><span class="token operator">:</span><span class="token string">&#39;user&#39;</span> <span class="token punctuation">}</span><span class="token comment">//当前用户的权限</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">timestamps</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token literal-property property">toJSON</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">transform</span><span class="token punctuation">(</span><span class="token parameter">doc<span class="token punctuation">,</span>ret</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        ret<span class="token punctuation">.</span>id<span class="token operator">=</span>ret<span class="token punctuation">.</span>_id<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">delete</span> ret<span class="token punctuation">.</span>_id<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">delete</span> ret<span class="token punctuation">.</span>__v<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">delete</span> ret<span class="token punctuation">.</span>password<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span> ret<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> UserModel <span class="token operator">=</span> conn<span class="token punctuation">.</span><span class="token function">model</span><span class="token punctuation">(</span><span class="token string">&#39;User&#39;</span><span class="token punctuation">,</span> UserSchema<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    UserModel</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-routes-user-js" tabindex="-1"><a class="header-anchor" href="#_2-4-routes-user-js"><span>2.4 routes\\user.js</span></a></h3><p>routes\\user.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">let</span> express<span class="token operator">=</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> <span class="token punctuation">{</span>UserModel<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;../model&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> jwt <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;jsonwebtoken&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> config <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;../config&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> router <span class="token operator">=</span> express<span class="token punctuation">.</span><span class="token function">Router</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">router<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&#39;/register&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> user <span class="token operator">=</span> req<span class="token punctuation">.</span>body<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">let</span> hash <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;crypto&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">createHash</span><span class="token punctuation">(</span><span class="token string">&#39;md5&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span>email<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">digest</span><span class="token punctuation">(</span><span class="token string">&#39;hex&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    user<span class="token punctuation">.</span>avatar <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">https://secure.gravatar.com/avatar/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>hash<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">?s=48</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span></span>
<span class="line">    user <span class="token operator">=</span> <span class="token keyword">await</span> UserModel<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token string">&#39;ok&#39;</span><span class="token punctuation">,</span><span class="token literal-property property">access</span><span class="token operator">:</span> user<span class="token punctuation">.</span><span class="token function">toJSON</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>access<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">router<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/user&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> users <span class="token operator">=</span> <span class="token keyword">await</span> UserModel<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">let</span> dataSource <span class="token operator">=</span> users<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token operator">=&gt;</span>item<span class="token punctuation">.</span><span class="token function">toJSON</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">success</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span><span class="token literal-property property">data</span><span class="token operator">:</span>dataSource<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">router<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&#39;/login/account&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> query <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">username</span><span class="token operator">:</span>req<span class="token punctuation">.</span>body<span class="token punctuation">.</span>username<span class="token punctuation">,</span><span class="token literal-property property">password</span><span class="token operator">:</span>req<span class="token punctuation">.</span>body<span class="token punctuation">.</span>password<span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">let</span> dbUser <span class="token operator">=</span> <span class="token keyword">await</span> UserModel<span class="token punctuation">.</span><span class="token function">findOne</span><span class="token punctuation">(</span>query<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>dbUser<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">let</span> user <span class="token operator">=</span> dbUser<span class="token punctuation">.</span><span class="token function">toJSON</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">let</span> token <span class="token operator">=</span> jwt<span class="token punctuation">.</span><span class="token function">sign</span><span class="token punctuation">(</span>user<span class="token punctuation">,</span> config<span class="token punctuation">.</span>secret<span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">expiresIn</span><span class="token operator">:</span><span class="token string">&#39;5d&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span> res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token string">&#39;ok&#39;</span><span class="token punctuation">,</span> token<span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;account&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">access</span><span class="token operator">:</span> user<span class="token punctuation">.</span>access <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;account&#39;</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token literal-property property">access</span><span class="token operator">:</span> <span class="token string">&#39;guest&#39;</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">router<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/currentUser&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> authorization <span class="token operator">=</span> req<span class="token punctuation">.</span>headers<span class="token punctuation">[</span><span class="token string">&#39;authorization&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>authorization<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">let</span> user <span class="token operator">=</span> jwt<span class="token punctuation">.</span><span class="token function">verify</span><span class="token punctuation">(</span>authorization<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39; &#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> config<span class="token punctuation">.</span>secret<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">401</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">        res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">401</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">router<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/login/outLogin&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token literal-property property">success</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> router<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-增加用户" tabindex="-1"><a class="header-anchor" href="#_3-增加用户"><span>3.增加用户</span></a></h2><h3 id="_3-1-routes-user-js" tabindex="-1"><a class="header-anchor" href="#_3-1-routes-user-js"><span>3.1 routes\\user.js</span></a></h3><p>routes\\user.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">let express=require(&#39;express&#39;);</span>
<span class="line">let {UserModel} = require(&#39;../model&#39;);</span>
<span class="line">let jwt = require(&#39;jsonwebtoken&#39;);</span>
<span class="line">let config = require(&#39;../config&#39;);</span>
<span class="line">const router = express.Router();</span>
<span class="line">+//增加</span>
<span class="line">+router.post(&#39;/user&#39;, async (req, res) =&gt; {</span>
<span class="line">+    let user = req.body;</span>
<span class="line">+    let hash = require(&#39;crypto&#39;).createHash(&#39;md5&#39;).update(user.email).digest(&#39;hex&#39;);</span>
<span class="line">+    user.avatar = \`https://secure.gravatar.com/avatar/\${hash}?s=48\`;</span>
<span class="line">+    user = await UserModel.create(user);</span>
<span class="line">+    res.send({ status: &#39;ok&#39;,access: user.toJSON().access});</span>
<span class="line">+});</span>
<span class="line">+//删除</span>
<span class="line">+router.delete(&#39;/user&#39;,async (req, res) =&gt; {</span>
<span class="line">+    console.log(&#39;req.body&#39;,req.body);</span>
<span class="line">+    await UserModel.remove({_id:req.body.key});</span>
<span class="line">+    return res.json({success:true});</span>
<span class="line">+});</span>
<span class="line">+//修改</span>
<span class="line">+router.put(&#39;/user&#39;, async (req, res) =&gt; {</span>
<span class="line">+    let user = req.body;</span>
<span class="line">+    let hash = require(&#39;crypto&#39;).createHash(&#39;md5&#39;).update(user.email).digest(&#39;hex&#39;);</span>
<span class="line">+    user.avatar = \`https://secure.gravatar.com/avatar/\${hash}?s=48\`;</span>
<span class="line">+    user = await UserModel.findByIdAndUpdate(user.id,user,{useFindAndModify:false});</span>
<span class="line">+    res.send({ status: &#39;ok&#39;,access: user.toJSON().access});</span>
<span class="line">+});</span>
<span class="line">+//查询</span>
<span class="line">+router.get(&#39;/user&#39;,async (req, res) =&gt; {</span>
<span class="line">+    let { current = 1, pageSize = 10,sorter,filter={},...query} = req.query;</span>
<span class="line">+    if(sorter){</span>
<span class="line">+        sorter = sorter?JSON.parse(sorter):{};</span>
<span class="line">+        for(let key in sorter){</span>
<span class="line">+            sorter[key]= sorter[key]===&#39;ascend&#39;?1:-1;</span>
<span class="line">+        }</span>
<span class="line">+    }</span>
<span class="line">+    if(filter){</span>
<span class="line">+        filter = filter?JSON.parse(filter):{};</span>
<span class="line">+        for(let key in filter){</span>
<span class="line">+            if(filter[key])</span>
<span class="line">+             query[key]=filter[key];</span>
<span class="line">+        }</span>
<span class="line">+    }</span>
<span class="line">+    let total = await UserModel.countDocuments(query);</span>
<span class="line">+    let users = await UserModel.find(query)</span>
<span class="line">+    .sort(sorter).skip((current-1)*pageSize).limit(pageSize);</span>
<span class="line">+    let dataSource = users.map(item=&gt;item.toJSON());</span>
<span class="line">+    const result = {</span>
<span class="line">+        data: dataSource,</span>
<span class="line">+        total,</span>
<span class="line">+        success: true,</span>
<span class="line">+        pageSize,</span>
<span class="line">+        current,</span>
<span class="line">+    };</span>
<span class="line">+    return res.json(result);</span>
<span class="line">+});</span>
<span class="line"></span>
<span class="line">router.post(&#39;/register&#39;, async (req, res) =&gt; {</span>
<span class="line">    let user = req.body;</span>
<span class="line">    let hash = require(&#39;crypto&#39;).createHash(&#39;md5&#39;).update(user.email).digest(&#39;hex&#39;);</span>
<span class="line">    user.avatar = \`https://secure.gravatar.com/avatar/\${hash}?s=48\`;</span>
<span class="line">    user = await UserModel.create(user);</span>
<span class="line">    res.send({ status: &#39;ok&#39;,access: user.toJSON().access});</span>
<span class="line">});</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">router.post(&#39;/login/account&#39;, async (req, res) =&gt; {</span>
<span class="line">    let query = {username:req.body.username,password:req.body.password};</span>
<span class="line">    let dbUser = await UserModel.findOne(query);</span>
<span class="line">    if (dbUser) {</span>
<span class="line">        let user = dbUser.toJSON();</span>
<span class="line">        let token = jwt.sign(user, config.secret,{expiresIn:&#39;5d&#39;});</span>
<span class="line">        return res.send({ status: &#39;ok&#39;, token, type: &#39;account&#39;, access: user.access });</span>
<span class="line">    } else {</span>
<span class="line">        return res.send({</span>
<span class="line">            status: &#39;error&#39;,</span>
<span class="line">            type: &#39;account&#39;,</span>
<span class="line">            access: &#39;guest&#39;</span>
<span class="line">        });</span>
<span class="line">    }</span>
<span class="line">});</span>
<span class="line"></span>
<span class="line">router.get(&#39;/currentUser&#39;, async (req, res) =&gt; {</span>
<span class="line">    let authorization = req.headers[&#39;authorization&#39;];</span>
<span class="line">    if (authorization) {</span>
<span class="line">        try {</span>
<span class="line">            let user = jwt.verify(authorization.split(&#39; &#39;)[1], config.secret);</span>
<span class="line">            res.json(user);</span>
<span class="line">        } catch (err) {</span>
<span class="line">            res.status(401).send({});</span>
<span class="line">        }</span>
<span class="line">    } else {</span>
<span class="line">        res.status(401).send({});</span>
<span class="line">    }</span>
<span class="line">});</span>
<span class="line">router.get(&#39;/login/outLogin&#39;, async (req, res) =&gt; {</span>
<span class="line">    res.send({ data: {}, success: true });</span>
<span class="line">});</span>
<span class="line">module.exports = router;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-权限中间件" tabindex="-1"><a class="header-anchor" href="#_4-权限中间件"><span>4.权限中间件</span></a></h2><h3 id="_4-1-checklogin-js" tabindex="-1"><a class="header-anchor" href="#_4-1-checklogin-js"><span>4.1 checkLogin.js</span></a></h3><p>checkLogin.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">let</span> config <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./config&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> jwt <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;jsonwebtoken&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> <span class="token punctuation">{</span> <span class="token constant">UNAUTHORIZED</span> <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span> <span class="token string">&quot;http-status-codes&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">checkLogin</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span>res<span class="token punctuation">,</span>next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> authorization <span class="token operator">=</span> req<span class="token punctuation">.</span>headers<span class="token punctuation">[</span><span class="token string">&#39;authorization&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>authorization<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>authorization<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">let</span> user <span class="token operator">=</span> jwt<span class="token punctuation">.</span><span class="token function">verify</span><span class="token punctuation">(</span>authorization<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39; &#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> config<span class="token punctuation">.</span>secret<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            req<span class="token punctuation">.</span>user <span class="token operator">=</span> user<span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">return</span> res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token constant">UNAUTHORIZED</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token constant">UNAUTHORIZED</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> checkLogin<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-checkpermission-js" tabindex="-1"><a class="header-anchor" href="#_4-2-checkpermission-js"><span>4.2 checkPermission.js</span></a></h3><p>checkPermission.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">let</span> config <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./config&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> jwt <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;jsonwebtoken&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> <span class="token punctuation">{</span> <span class="token constant">FORBIDDEN</span> <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span> <span class="token string">&quot;http-status-codes&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">checkPermission</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>allowed</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span>res<span class="token punctuation">,</span>next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>user<span class="token punctuation">,</span>allowed<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">if</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>user <span class="token operator">&amp;&amp;</span> allowed<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>user<span class="token punctuation">.</span>access<span class="token punctuation">)</span><span class="token operator">!=</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token constant">FORBIDDEN</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span>     </span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> checkPermission<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-routes-user-js" tabindex="-1"><a class="header-anchor" href="#_4-3-routes-user-js"><span>4.3 routes\\user.js</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">let</span> express<span class="token operator">=</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> <span class="token punctuation">{</span>UserModel<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;../model&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> jwt <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;jsonwebtoken&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> config <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;../config&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span><span class="token keyword">let</span> checkLogin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;../checkLogin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span><span class="token keyword">let</span> checkPermission <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;../checkPermission&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> router <span class="token operator">=</span> express<span class="token punctuation">.</span><span class="token function">Router</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//增加</span></span>
<span class="line"><span class="token operator">+</span>router<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&#39;/user&#39;</span><span class="token punctuation">,</span> checkLogin<span class="token punctuation">,</span><span class="token function">checkPermission</span><span class="token punctuation">(</span><span class="token string">&#39;admin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> user <span class="token operator">=</span> req<span class="token punctuation">.</span>body<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">let</span> hash <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;crypto&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">createHash</span><span class="token punctuation">(</span><span class="token string">&#39;md5&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span>email<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">digest</span><span class="token punctuation">(</span><span class="token string">&#39;hex&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    user<span class="token punctuation">.</span>avatar <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">https://secure.gravatar.com/avatar/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>hash<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">?s=48</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span></span>
<span class="line">    user <span class="token operator">=</span> <span class="token keyword">await</span> UserModel<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token string">&#39;ok&#39;</span><span class="token punctuation">,</span><span class="token literal-property property">access</span><span class="token operator">:</span> user<span class="token punctuation">.</span><span class="token function">toJSON</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>access<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//删除</span></span>
<span class="line"><span class="token operator">+</span>router<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token string">&#39;/user&#39;</span><span class="token punctuation">,</span> checkLogin<span class="token punctuation">,</span><span class="token function">checkPermission</span><span class="token punctuation">(</span><span class="token string">&#39;admin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;req.body&#39;</span><span class="token punctuation">,</span>req<span class="token punctuation">.</span>body<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">await</span> UserModel<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">_id</span><span class="token operator">:</span>req<span class="token punctuation">.</span>body<span class="token punctuation">.</span>key<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">success</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//修改</span></span>
<span class="line"><span class="token operator">+</span>router<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&#39;/user&#39;</span><span class="token punctuation">,</span> checkLogin<span class="token punctuation">,</span><span class="token function">checkPermission</span><span class="token punctuation">(</span><span class="token string">&#39;admin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> user <span class="token operator">=</span> req<span class="token punctuation">.</span>body<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">let</span> hash <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;crypto&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">createHash</span><span class="token punctuation">(</span><span class="token string">&#39;md5&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span>email<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">digest</span><span class="token punctuation">(</span><span class="token string">&#39;hex&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    user<span class="token punctuation">.</span>avatar <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">https://secure.gravatar.com/avatar/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>hash<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">?s=48</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span></span>
<span class="line">    user <span class="token operator">=</span> <span class="token keyword">await</span> UserModel<span class="token punctuation">.</span><span class="token function">findByIdAndUpdate</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span>id<span class="token punctuation">,</span>user<span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">useFindAndModify</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token string">&#39;ok&#39;</span><span class="token punctuation">,</span><span class="token literal-property property">access</span><span class="token operator">:</span> user<span class="token punctuation">.</span><span class="token function">toJSON</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>access<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//查询</span></span>
<span class="line"><span class="token operator">+</span>router<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/user&#39;</span><span class="token punctuation">,</span> checkLogin<span class="token punctuation">,</span><span class="token function">checkPermission</span><span class="token punctuation">(</span><span class="token string">&#39;admin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> <span class="token punctuation">{</span> current <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> pageSize <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">,</span>sorter<span class="token punctuation">,</span>filter<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token operator">...</span>query<span class="token punctuation">}</span> <span class="token operator">=</span> req<span class="token punctuation">.</span>query<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">if</span><span class="token punctuation">(</span>sorter<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        sorter <span class="token operator">=</span> sorter<span class="token operator">?</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>sorter<span class="token punctuation">)</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> sorter<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">            sorter<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token operator">=</span> sorter<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token operator">===</span><span class="token string">&#39;ascend&#39;</span><span class="token operator">?</span><span class="token number">1</span><span class="token operator">:</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">if</span><span class="token punctuation">(</span>filter<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        filter <span class="token operator">=</span> filter<span class="token operator">?</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>filter<span class="token punctuation">)</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> filter<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">if</span><span class="token punctuation">(</span>filter<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">             query<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token operator">=</span>filter<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">let</span> total <span class="token operator">=</span> <span class="token keyword">await</span> UserModel<span class="token punctuation">.</span><span class="token function">countDocuments</span><span class="token punctuation">(</span>query<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">let</span> users <span class="token operator">=</span> <span class="token keyword">await</span> UserModel<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span>query<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span>sorter<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">skip</span><span class="token punctuation">(</span><span class="token punctuation">(</span>current<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">*</span>pageSize<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">limit</span><span class="token punctuation">(</span>pageSize<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">let</span> dataSource <span class="token operator">=</span> users<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token operator">=&gt;</span>item<span class="token punctuation">.</span><span class="token function">toJSON</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">data</span><span class="token operator">:</span> dataSource<span class="token punctuation">,</span></span>
<span class="line">        total<span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">success</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">        pageSize<span class="token punctuation">,</span></span>
<span class="line">        current<span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">router<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&#39;/register&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> user <span class="token operator">=</span> req<span class="token punctuation">.</span>body<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">let</span> hash <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;crypto&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">createHash</span><span class="token punctuation">(</span><span class="token string">&#39;md5&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span>email<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">digest</span><span class="token punctuation">(</span><span class="token string">&#39;hex&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    user<span class="token punctuation">.</span>avatar <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">https://secure.gravatar.com/avatar/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>hash<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">?s=48</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span></span>
<span class="line">    user <span class="token operator">=</span> <span class="token keyword">await</span> UserModel<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token string">&#39;ok&#39;</span><span class="token punctuation">,</span><span class="token literal-property property">access</span><span class="token operator">:</span> user<span class="token punctuation">.</span><span class="token function">toJSON</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>access<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">router<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&#39;/login/account&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> query <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">username</span><span class="token operator">:</span>req<span class="token punctuation">.</span>body<span class="token punctuation">.</span>username<span class="token punctuation">,</span><span class="token literal-property property">password</span><span class="token operator">:</span>req<span class="token punctuation">.</span>body<span class="token punctuation">.</span>password<span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">let</span> dbUser <span class="token operator">=</span> <span class="token keyword">await</span> UserModel<span class="token punctuation">.</span><span class="token function">findOne</span><span class="token punctuation">(</span>query<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>dbUser<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">let</span> user <span class="token operator">=</span> dbUser<span class="token punctuation">.</span><span class="token function">toJSON</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">let</span> token <span class="token operator">=</span> jwt<span class="token punctuation">.</span><span class="token function">sign</span><span class="token punctuation">(</span>user<span class="token punctuation">,</span> config<span class="token punctuation">.</span>secret<span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">expiresIn</span><span class="token operator">:</span><span class="token string">&#39;5d&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span> res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token string">&#39;ok&#39;</span><span class="token punctuation">,</span> token<span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;account&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">access</span><span class="token operator">:</span> user<span class="token punctuation">.</span>access <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;account&#39;</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token literal-property property">access</span><span class="token operator">:</span> <span class="token string">&#39;guest&#39;</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">router<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/currentUser&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> authorization <span class="token operator">=</span> req<span class="token punctuation">.</span>headers<span class="token punctuation">[</span><span class="token string">&#39;authorization&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>authorization<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">let</span> user <span class="token operator">=</span> jwt<span class="token punctuation">.</span><span class="token function">verify</span><span class="token punctuation">(</span>authorization<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39; &#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> config<span class="token punctuation">.</span>secret<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">401</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">        res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">401</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">router<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/login/outLogin&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token literal-property property">success</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> router<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,89)])])}const o=s(l,[["render",t]]),u=JSON.parse('{"path":"/strong/116.pro5.html","title":"","lang":"en-US","frontmatter":{},"git":{"updatedTime":1681290319000,"contributors":[{"name":"yutao","username":"yutao","email":"642231346@qq.com","commits":1,"url":"https://github.com/yutao"}],"changelog":[{"hash":"f5ab8c9d34991ec274f7f652439afe5b2afb6147","time":1681290319000,"email":"642231346@qq.com","author":"yutao","message":"modify"}]},"filePathRelative":"strong/116.pro5.md"}');export{o as comp,u as data};
