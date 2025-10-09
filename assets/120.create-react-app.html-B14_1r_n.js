import{_ as l,c as i,a as e,b as s,e as a,d as t,w as c,r,o}from"./app-CD1YpnS1.js";const d={};function u(v,n){const p=r("required");return o(),i("div",null,[n[6]||(n[6]=e(`<h2 id="_1-create-react-app" tabindex="-1"><a class="header-anchor" href="#_1-create-react-app"><span>1.create-react-app</span></a></h2><ul><li><a href="https://www.html.cn/create-react-app/docs/getting-started/" target="_blank" rel="noopener noreferrer">Create React App</a>是一个官方支持的创建 React 单页应用程序的方法。它提供了一个零配置的现代构建设置</li><li><a href="https://github.com/facebook/create-react-app" target="_blank" rel="noopener noreferrer">create-react-app</a></li></ul><h3 id="_1-1-下载" tabindex="-1"><a class="header-anchor" href="#_1-1-下载"><span>1.1 下载</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line">git clone https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>github<span class="token punctuation">.</span>com<span class="token operator">/</span>facebook<span class="token operator">/</span>create<span class="token operator">-</span>react<span class="token operator">-</span>app<span class="token punctuation">.</span>git <span class="token operator">--</span>depth<span class="token operator">=</span><span class="token number">1</span></span>
<span class="line">cd create<span class="token operator">-</span>react<span class="token operator">-</span>app</span>
<span class="line">yarn install</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-package-json" tabindex="-1"><a class="header-anchor" href="#_1-2-package-json"><span>1.2 package.json</span></a></h3><p>package.json</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&quot;scripts&quot;: {</span>
<span class="line">+  &quot;create&quot;: &quot;node ./packages/create-react-app/index.js&quot;,</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3-重要步骤" tabindex="-1"><a class="header-anchor" href="#_1-3-重要步骤"><span>1.3 重要步骤</span></a></h3><ul><li><p>将命令行参数发送到npm脚本 <code>npm run [command] [-- &lt;args&gt;]</code></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line"> yarn install  </span>
<span class="line"> npm run create -- aaa  </span>
<span class="line"> Installing packages. This might take a couple of minutes. </span>
<span class="line"> Installing react, react-dom, and react-scripts with cra-template... </span>
<span class="line"> Installing template dependencies using yarnpkg... </span>
<span class="line"> Removing template package using yarnpkg... </span>
<span class="line"> Removing module cra-template...  </span>
<span class="line"> Success! Created aaa at C:\\aprepare\\create-react-app\\aaa </span>
<span class="line"> Inside that directory, you can run several commands: </span>
<span class="line">cd aaa</span>
<span class="line">yarn start</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="_1-4-vscode-launch-json" tabindex="-1"><a class="header-anchor" href="#_1-4-vscode-launch-json"><span>1.4 .vscode\\launch.json</span></a></h3><p>.vscode\\launch.json</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0.2.0&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">&quot;configurations&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">            <span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Launch via NPM&quot;</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">&quot;request&quot;</span><span class="token operator">:</span> <span class="token string">&quot;launch&quot;</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">&quot;runtimeArgs&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">                <span class="token string">&quot;run-script&quot;</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token string">&quot;create&quot;</span></span>
<span class="line">            <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">&quot;runtimeExecutable&quot;</span><span class="token operator">:</span> <span class="token string">&quot;npm&quot;</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">&quot;skipFiles&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">                <span class="token string">&quot;&lt;node_internals&gt;/**&quot;</span></span>
<span class="line">            <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pwa-node&quot;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-实现init方法" tabindex="-1"><a class="header-anchor" href="#_2-实现init方法"><span>2.实现init方法</span></a></h2><h3 id="_2-1-package-json" tabindex="-1"><a class="header-anchor" href="#_2-1-package-json"><span>2.1 package.json</span></a></h3><p>package.json</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">  &quot;scripts&quot;: {</span>
<span class="line">+    &quot;version&quot;: &quot;node ./packages/create-react-app3/index.js --version&quot;,</span>
<span class="line">+    &quot;create&quot;: &quot;node ./packages/create-react-app3/index.js aaa&quot;</span>
<span class="line">  }</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-create-react-app3-package-json" tabindex="-1"><a class="header-anchor" href="#_2-2-create-react-app3-package-json"><span>2.2 create-react-app3\\package.json</span></a></h3><p>packages\\create-react-app3\\package.json</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">{</span>
<span class="line">+ &quot;main&quot;: &quot;./index.js&quot;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-create-react-app3-index-js" tabindex="-1"><a class="header-anchor" href="#_2-3-create-react-app3-index-js"><span>2.3 create-react-app3\\index.js</span></a></h3><p>packages\\create-react-app3\\index.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"> </span>
<span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span> init <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./createReactApp&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-createreactapp-js" tabindex="-1"><a class="header-anchor" href="#_2-4-createreactapp-js"><span>2.4 createReactApp.js</span></a></h3><p>packages\\create-react-app3\\createReactApp.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span>Command<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;commander&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> chalk <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;chalk&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> packageJson <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./package.json&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> appName<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">new</span> <span class="token class-name">Command</span><span class="token punctuation">(</span>packageJson<span class="token punctuation">.</span>name<span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">version</span><span class="token punctuation">(</span>packageJson<span class="token punctuation">.</span>version<span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">arguments</span><span class="token punctuation">(</span><span class="token string">&#39;&lt;project-directory&gt;&#39;</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">usage</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>chalk<span class="token punctuation">.</span><span class="token function">green</span><span class="token punctuation">(</span><span class="token string">&#39;&lt;project-directory&gt;&#39;</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> [options]</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">action</span><span class="token punctuation">(</span><span class="token parameter">projectDirectory</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">            appName <span class="token operator">=</span> projectDirectory<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>argv<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;appName=&#39;</span><span class="token punctuation">,</span> appName<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    init</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-5-执行命令" tabindex="-1"><a class="header-anchor" href="#_2-5-执行命令"><span>2.5 执行命令</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">npm run create</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="_3-实现createapp方法" tabindex="-1"><a class="header-anchor" href="#_3-实现createapp方法"><span>3.实现createApp方法</span></a></h2><h3 id="_3-1-createreactapp-js" tabindex="-1"><a class="header-anchor" href="#_3-1-createreactapp-js"><span>3.1 createReactApp.js</span></a></h3><p>packages\\create-react-app3\\createReactApp.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">const {Command} = require(&#39;commander&#39;);</span>
<span class="line">const chalk = require(&#39;chalk&#39;);</span>
<span class="line">+const fs = require(&#39;fs-extra&#39;);</span>
<span class="line">+const path = require(&#39;path&#39;);</span>
<span class="line">const packageJson = require(&#39;./package.json&#39;);</span>
<span class="line">let appName;</span>
<span class="line">async function init() {</span>
<span class="line">    new Command(packageJson.name)</span>
<span class="line">        .version(packageJson.version)</span>
<span class="line">        .arguments(&#39;&lt;project-directory&gt;&#39;)</span>
<span class="line">        .usage(\`\${chalk.green(&#39;&lt;project-directory&gt;&#39;)} [options]\`)</span>
<span class="line">        .action(projectDirectory =&gt; {</span>
<span class="line">            appName = projectDirectory;</span>
<span class="line">        })</span>
<span class="line">        .parse(process.argv);</span>
<span class="line">    console.log(&#39;appName=&#39;, appName);</span>
<span class="line">+   await createApp(appName);</span>
<span class="line">}</span>
<span class="line">+async function createApp(appName) {</span>
<span class="line">+    const root = path.resolve(appName);</span>
<span class="line">+    fs.ensureDirSync(appName);</span>
<span class="line">+    console.log(\`Creating a new React app in \${chalk.green(root)}.\`);</span>
<span class="line">+    const packageJson = {</span>
<span class="line">+      name: appName,</span>
<span class="line">+      version: &#39;0.1.0&#39;,</span>
<span class="line">+      private: true,</span>
<span class="line">+    };</span>
<span class="line">+    fs.writeFileSync(</span>
<span class="line">+      path.join(root, &#39;package.json&#39;),</span>
<span class="line">+      JSON.stringify(packageJson, null, 2)</span>
<span class="line">+    );</span>
<span class="line">+    const originalDirectory = process.cwd();</span>
<span class="line">+    process.chdir(root);</span>
<span class="line">+    console.log(&#39;root&#39;,root);</span>
<span class="line">+    console.log(&#39;appName&#39;,appName);</span>
<span class="line">+    console.log(&#39;originalDirectory&#39;,originalDirectory);</span>
<span class="line">+  }</span>
<span class="line">module.exports = {</span>
<span class="line">    init</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-实现run方法" tabindex="-1"><a class="header-anchor" href="#_4-实现run方法"><span>4.实现run方法</span></a></h2><h3 id="_4-1-createreactapp-js" tabindex="-1"><a class="header-anchor" href="#_4-1-createreactapp-js"><span>4.1 createReactApp.js</span></a></h3><p>packages\\create-react-app3\\createReactApp.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">const {Command} = require(&#39;commander&#39;);</span>
<span class="line">const chalk = require(&#39;chalk&#39;);</span>
<span class="line">const fs = require(&#39;fs-extra&#39;);</span>
<span class="line">const path = require(&#39;path&#39;);</span>
<span class="line">+const spawn = require(&#39;cross-spawn&#39;);</span>
<span class="line">const packageJson = require(&#39;./package.json&#39;);</span>
<span class="line">let appName;</span>
<span class="line">async function init() {</span>
<span class="line">    new Command(packageJson.name)</span>
<span class="line">        .version(packageJson.version)</span>
<span class="line">        .arguments(&#39;&lt;project-directory&gt;&#39;)</span>
<span class="line">        .usage(\`\${chalk.green(&#39;&lt;project-directory&gt;&#39;)} [options]\`)</span>
<span class="line">        .action(projectDirectory =&gt; {</span>
<span class="line">            appName = projectDirectory;</span>
<span class="line">        })</span>
<span class="line">        .parse(process.argv);</span>
<span class="line">    console.log(&#39;appName=&#39;, appName);</span>
<span class="line">    await createApp(appName);</span>
<span class="line">}</span>
<span class="line">async function createApp(appName) {</span>
<span class="line">    const root = path.resolve(appName);</span>
<span class="line">    fs.ensureDirSync(appName);</span>
<span class="line">    console.log(\`Creating a new React app in \${chalk.green(root)}.\`);</span>
<span class="line">    const packageJson = {</span>
<span class="line">      name: appName,</span>
<span class="line">      version: &#39;0.1.0&#39;,</span>
<span class="line">      private: true,</span>
<span class="line">    };</span>
<span class="line">    fs.writeFileSync(</span>
<span class="line">      path.join(root, &#39;package.json&#39;),</span>
<span class="line">      JSON.stringify(packageJson, null, 2)</span>
<span class="line">    );</span>
<span class="line">    const originalDirectory = process.cwd();</span>
<span class="line">    process.chdir(root);</span>
<span class="line">    console.log(&#39;root&#39;,root);</span>
<span class="line">    console.log(&#39;appName&#39;,appName);</span>
<span class="line">    console.log(&#39;originalDirectory&#39;,originalDirectory);</span>
<span class="line">+   await run(</span>
<span class="line">+        root,</span>
<span class="line">+        appName,</span>
<span class="line">+        originalDirectory</span>
<span class="line">+   );</span>
<span class="line">}</span>
<span class="line">+async function run(root,appName,originalDirectory) {</span>
<span class="line">+    const scriptName = &#39;react-scripts&#39;;</span>
<span class="line">+    const templateName = &#39;cra-template&#39;;</span>
<span class="line">+    const allDependencies = [&#39;react&#39;, &#39;react-dom&#39;, scriptName, templateName];</span>
<span class="line">+    console.log(&#39;Installing packages. This might take a couple of minutes.&#39;);</span>
<span class="line">+    console.log(</span>
<span class="line">+      \`Installing \${chalk.cyan(&#39;react&#39;)}, \${chalk.cyan(</span>
<span class="line">+        &#39;react-dom&#39;</span>
<span class="line">+      )}, and \${chalk.cyan(scriptName)} with \${chalk.cyan(templateName)}\`</span>
<span class="line">+    );</span>
<span class="line">+    await install(root, allDependencies);</span>
<span class="line">+}</span>
<span class="line">+function install(root, allDependencies) {</span>
<span class="line">+    return new Promise((resolve) =&gt; {</span>
<span class="line">+      const command = &#39;yarnpkg&#39;;</span>
<span class="line">+      const args = [&#39;add&#39;, &#39;--exact&#39;, ...allDependencies, &#39;--cwd&#39;, root];</span>
<span class="line">+      console.log(&#39;command:&#39;,command,args);</span>
<span class="line">+      const child = spawn(command, args, { stdio: &#39;inherit&#39; });</span>
<span class="line">+      child.on(&#39;close&#39;, resolve);</span>
<span class="line">+    });</span>
<span class="line">+}</span>
<span class="line">module.exports = {</span>
<span class="line">    init</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">command: yarnpkg [</span>
<span class="line">  &#39;add&#39;,</span>
<span class="line">  &#39;--exact&#39;,</span>
<span class="line">  &#39;react&#39;,</span>
<span class="line">  &#39;react-dom&#39;,</span>
<span class="line">  &#39;react-scripts&#39;,</span>
<span class="line">  &#39;cra-template&#39;,</span>
<span class="line">  &#39;--cwd&#39;,</span>
<span class="line">  &#39;C:\\\\aprepare\\\\create-react-app3\\\\aaa&#39;</span>
<span class="line">]</span>
<span class="line"></span>
<span class="line">yarnpkg add --exact react react-dom react-scripts cra-template --cwd C:\\\\aprepare\\\\create-react-app3\\\\aaa</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-执行init初始化命令" tabindex="-1"><a class="header-anchor" href="#_5-执行init初始化命令"><span>5.执行init初始化命令</span></a></h2><h3 id="_5-1-createreactapp-js" tabindex="-1"><a class="header-anchor" href="#_5-1-createreactapp-js"><span>5.1 createReactApp.js</span></a></h3><p>packages\\create-react-app3\\createReactApp.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">const {Command} = require(&#39;commander&#39;);</span>
<span class="line">const chalk = require(&#39;chalk&#39;);</span>
<span class="line">const fs = require(&#39;fs-extra&#39;);</span>
<span class="line">const path = require(&#39;path&#39;);</span>
<span class="line">const spawn = require(&#39;cross-spawn&#39;);</span>
<span class="line">const packageJson = require(&#39;./package.json&#39;);</span>
<span class="line">let appName;</span>
<span class="line">async function init() {</span>
<span class="line">    new Command(packageJson.name)</span>
<span class="line">        .version(packageJson.version)</span>
<span class="line">        .arguments(&#39;&lt;project-directory&gt;&#39;)</span>
<span class="line">        .usage(\`\${chalk.green(&#39;&lt;project-directory&gt;&#39;)} [options]\`)</span>
<span class="line">        .action(projectDirectory =&gt; {</span>
<span class="line">            appName = projectDirectory;</span>
<span class="line">        })</span>
<span class="line">        .parse(process.argv);</span>
<span class="line">    console.log(&#39;appName=&#39;, appName);</span>
<span class="line">    await createApp(appName);</span>
<span class="line">}</span>
<span class="line">async function createApp(appName) {</span>
<span class="line">    const root = path.resolve(appName);</span>
<span class="line">    fs.ensureDirSync(appName);</span>
<span class="line">    console.log(\`Creating a new React app in \${chalk.green(root)}.\`);</span>
<span class="line">    const packageJson = {</span>
<span class="line">      name: appName,</span>
<span class="line">      version: &#39;0.1.0&#39;,</span>
<span class="line">      private: true,</span>
<span class="line">    };</span>
<span class="line">    fs.writeFileSync(</span>
<span class="line">      path.join(root, &#39;package.json&#39;),</span>
<span class="line">      JSON.stringify(packageJson, null, 2)</span>
<span class="line">    );</span>
<span class="line">    const originalDirectory = process.cwd();</span>
<span class="line">    process.chdir(root);</span>
<span class="line">    console.log(&#39;root&#39;,root);</span>
<span class="line">    console.log(&#39;appName&#39;,appName);</span>
<span class="line">    console.log(&#39;originalDirectory&#39;,originalDirectory);</span>
<span class="line">    await run(</span>
<span class="line">        root,</span>
<span class="line">        appName,</span>
<span class="line">        originalDirectory</span>
<span class="line">    );</span>
<span class="line">}</span>
<span class="line">async function run(root,appName,originalDirectory) {</span>
<span class="line">    const scriptName = &#39;react-scripts&#39;;</span>
<span class="line">    const templateName = &#39;cra-template&#39;;</span>
<span class="line">    const allDependencies = [&#39;react&#39;, &#39;react-dom&#39;, scriptName, templateName];</span>
<span class="line">    console.log(&#39;Installing packages. This might take a couple of minutes.&#39;);</span>
<span class="line">    console.log(</span>
<span class="line">      \`Installing \${chalk.cyan(&#39;react&#39;)}, \${chalk.cyan(</span>
<span class="line">        &#39;react-dom&#39;</span>
<span class="line">      )}, and \${chalk.cyan(scriptName)} with \${chalk.cyan(templateName)}\`</span>
<span class="line">    );</span>
<span class="line">    await install(root, allDependencies);</span>
<span class="line">+    let data = [root, appName, true, originalDirectory, templateName];</span>
<span class="line">+    let source = \`</span>
<span class="line">+    var init = require(&#39;react-scripts/scripts/init.js&#39;);</span>
<span class="line">+    init.apply(null, JSON.parse(process.argv[1]));</span>
<span class="line">+  \`</span>
<span class="line">+    await executeNodeScript({ cwd: process.cwd() }, data, source);</span>
<span class="line">+    console.log(&#39;Done.&#39;);</span>
<span class="line">+    process.exit(0);</span>
<span class="line">}</span>
<span class="line">+function executeNodeScript({ cwd }, data, source) {</span>
<span class="line">+  return new Promise((resolve) =&gt; {</span>
<span class="line">+    const child = spawn( </span>
<span class="line">+      process.execPath,</span>
<span class="line">+      [&#39;-e&#39;, source, &#39;--&#39;, JSON.stringify(data)],</span>
<span class="line">+      { cwd, stdio: &#39;inherit&#39; }</span>
<span class="line">+    );</span>
<span class="line">+    child.on(&#39;close&#39;, resolve);</span>
<span class="line">+  });</span>
<span class="line">+}</span>
<span class="line">function install(root, allDependencies) {</span>
<span class="line">    return new Promise((resolve) =&gt; {</span>
<span class="line">      const command = &#39;yarnpkg&#39;;</span>
<span class="line">      const args = [&#39;add&#39;, &#39;--exact&#39;, ...allDependencies, &#39;--cwd&#39;, root];</span>
<span class="line">      console.log(&#39;command:&#39;,command,args);</span>
<span class="line">      const child = spawn(command, args, { stdio: &#39;inherit&#39; });</span>
<span class="line">      child.on(&#39;close&#39;, resolve);</span>
<span class="line">    });</span>
<span class="line">}</span>
<span class="line">module.exports = {</span>
<span class="line">    init</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-monorepo管理" tabindex="-1"><a class="header-anchor" href="#_1-monorepo管理"><span>1. monorepo管理</span></a></h2><ul><li>Monorepo 是管理项目代码的一个方式，指在一个项目仓库(repo)中管理多个模块/包(package)</li><li>monorepo 最主要的好处是统一的工作流和代码共享</li><li><a href="https://github.com/lerna/lerna" target="_blank" rel="noopener noreferrer">Lerna</a>是一个管理多个 npm 模块的工具,优化维护多包的工作流，解决多个包互相依赖，且发布需要手动维护多个包的问题</li><li><a href="https://classic.yarnpkg.com/en/docs/cli/" target="_blank" rel="noopener noreferrer">yarn</a></li></ul><p><img src="https://img.zhufengpeixun.com/1609568943612" alt="1609568943612"></p><h3 id="_1-1-安装" tabindex="-1"><a class="header-anchor" href="#_1-1-安装"><span>1.1 安装</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">npm i lerna -g</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_1-2-初始化" tabindex="-1"><a class="header-anchor" href="#_1-2-初始化"><span>1.2 初始化</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">lerna init</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><img src="https://img.zhufengpeixun.com/1609568698164" alt="lerna-init"></p><h4 id="_1-2-1-package-json" tabindex="-1"><a class="header-anchor" href="#_1-2-1-package-json"><span>1.2.1 package.json</span></a></h4><p>package.json</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;root&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">&quot;private&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">&quot;devDependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">&quot;lerna&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^3.22.1&quot;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-2-2-lerna-json" tabindex="-1"><a class="header-anchor" href="#_1-2-2-lerna-json"><span>1.2.2 lerna.json</span></a></h4><p>lerna.json</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">&quot;packages&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token string">&quot;packages/*&quot;</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0.0.0&quot;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3-yarn-workspace" tabindex="-1"><a class="header-anchor" href="#_1-3-yarn-workspace"><span>1.3 yarn workspace</span></a></h3><ul><li><code>yarn workspace</code>允许我们使用 <code>monorepo</code> 的形式来管理项目</li><li>在安装 node_modules 的时候它不会安装到每个子项目的 node_modules 里面，而是直接安装到根目录下面，这样每个子项目都可以读取到根目录的 node_modules</li><li>整个项目只有根目录下面会有一份 <code>yarn.lock</code> 文件。子项目也会被 <code>link</code> 到 <code>node_modules</code> 里面，这样就允许我们就可以直接用 import 导入对应的项目</li><li><code>yarn.lock</code>文件是自动生成的,也完全Yarn来处理.<code>yarn.lock</code>锁定你安装的每个依赖项的版本，这可以确保你不会意外获得不良依赖</li></ul><h4 id="_1-3-1-开启workspace" tabindex="-1"><a class="header-anchor" href="#_1-3-1-开启workspace"><span>1.3.1 开启workspace</span></a></h4><p>package.json</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">{</span>
<span class="line">  &quot;name&quot;: &quot;root&quot;,</span>
<span class="line">  &quot;private&quot;: true, // 私有的,用来管理整个项目,不会被发布到npm</span>
<span class="line">+  &quot;workspaces&quot;: [</span>
<span class="line">+    &quot;packages/*&quot;</span>
<span class="line">+  ],</span>
<span class="line">  &quot;devDependencies&quot;: {</span>
<span class="line">    &quot;lerna&quot;: &quot;^3.22.1&quot;</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-3-2-创建子项目" tabindex="-1"><a class="header-anchor" href="#_1-3-2-创建子项目"><span>1.3.2 创建子项目</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">lerna create create-react-app3</span>
<span class="line">lerna create react-scripts3</span>
<span class="line">lerna create cra-template3</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://img.zhufengpeixun.com/1609571583709" alt="1609571583709"></p><h4 id="_1-3-3-添加依赖" tabindex="-1"><a class="header-anchor" href="#_1-3-3-添加依赖"><span>1.3.3 添加依赖</span></a></h4><ul><li><a href="https://classic.yarnpkg.com/en/docs/cli" target="_blank" rel="noopener noreferrer">yarnpkg</a></li><li>[lerna](https://github.com/lerna/lerna</li></ul><p>设置加速镜像</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line">yarn config <span class="token keyword">get</span> registry</span>
<span class="line">yarn config <span class="token keyword">set</span> registry http<span class="token operator">:</span><span class="token operator">/</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">registry.npm.taobao.org</span><span class="token regex-delimiter">/</span></span></span>
<span class="line">yarn config <span class="token keyword">set</span> registry http<span class="token operator">:</span><span class="token operator">/</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">registry.npmjs.org</span><span class="token regex-delimiter">/</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th style="text-align:left;">作用</th><th style="text-align:left;">命令</th></tr></thead><tbody><tr><td style="text-align:left;">查看工作空间信息</td><td style="text-align:left;">yarn workspaces info</td></tr><tr><td style="text-align:left;">给根空间添加依赖</td><td style="text-align:left;">yarn add chalk cross-spawn fs-extra --ignore-workspace-root-check</td></tr><tr><td style="text-align:left;">给某个项目添加依赖</td><td style="text-align:left;">yarn workspace create-react-app3 add commander</td></tr><tr><td style="text-align:left;">删除所有的 node_modules</td><td style="text-align:left;">lerna clean 等于 yarn workspaces run clean</td></tr><tr><td style="text-align:left;">安装和link</td><td style="text-align:left;">yarn install 等于 lerna bootstrap --npm-client yarn --use-workspaces</td></tr><tr><td style="text-align:left;">重新获取所有的 node_modules</td><td style="text-align:left;">yarn install --force</td></tr><tr><td style="text-align:left;">查看缓存目录</td><td style="text-align:left;">yarn cache dir</td></tr><tr><td style="text-align:left;">清除本地缓存</td><td style="text-align:left;">yarn cache clean</td></tr></tbody></table><h2 id="_2-commander" tabindex="-1"><a class="header-anchor" href="#_2-commander"><span>2. commander</span></a></h2>`,67)),s("ul",null,[n[2]||(n[2]=s("li",null,[s("a",{href:"https://www.npmjs.com/package/chalk",target:"_blank",rel:"noopener noreferrer"},"chalk"),a("可以在终端显示颜色")],-1)),n[3]||(n[3]=s("li",null,[s("a",{href:"https://github.com/tj/commander.js/blob/HEAD/Readme_zh-CN.md",target:"_blank",rel:"noopener noreferrer"},"commander"),a("是一个完整的"),s("code",null,"node.js"),a("命令行解决方案")],-1)),n[4]||(n[4]=s("li",null,[a("version方法可以设置版本，其默认选项为"),s("code",null,"-V"),a("和"),s("code",null,"--version")],-1)),s("li",null,[n[1]||(n[1]=a("通过.arguments可以为最顶层命令指定参数，对子命令而言，参数都包括在.command调用之中了。尖括号（例如",-1)),t(p,null,{default:c(()=>[...n[0]||(n[0]=[a("）意味着必选，而方括号（例如[optional]）则代表可选",-1)])]),_:1})]),n[5]||(n[5]=s("li",null,[a("通过"),s("code",null,"usage"),a("选项可以修改帮助信息的首行提示")],-1))]),n[7]||(n[7]=e(`<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">const</span> chalk <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;chalk&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span>Command<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;commander&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;process.argv&#39;</span><span class="token punctuation">,</span>process<span class="token punctuation">.</span>argv<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">new</span> <span class="token class-name">Command</span><span class="token punctuation">(</span><span class="token string">&#39;create-react-app&#39;</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">version</span><span class="token punctuation">(</span><span class="token string">&#39;1.0.0&#39;</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">arguments</span><span class="token punctuation">(</span><span class="token string">&#39;&lt;must1&gt; &lt;must2&gt; [optional]&#39;</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">usage</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>chalk<span class="token punctuation">.</span><span class="token function">green</span><span class="token punctuation">(</span><span class="token string">&#39;&lt;must1&gt; &lt;must2&gt;&#39;</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> [optional]</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">action</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">must1<span class="token punctuation">,</span>must2<span class="token punctuation">,</span>optional<span class="token punctuation">,</span><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">       console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>must1<span class="token punctuation">,</span>must2<span class="token punctuation">,</span>optional<span class="token punctuation">,</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>argv<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-cross-spawn" tabindex="-1"><a class="header-anchor" href="#_3-cross-spawn"><span>3. cross-spawn</span></a></h2><ul><li><a href="https://www.npmjs.com/package/cross-spawn" target="_blank" rel="noopener noreferrer">cross-spawn</a>是node的<code>spawn</code>和<code>spawnSync</code>的跨平台解决方案</li><li><a href="https://nodejs.org/dist/latest-v15.x/docs/api/child_process.html" target="_blank" rel="noopener noreferrer">inherit</a>表示将相应的<code>stdio</code>流传给父进程或从父进程传入</li></ul><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">const</span> spawn <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;cross-spawn&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> child <span class="token operator">=</span> <span class="token function">spawn</span><span class="token punctuation">(</span><span class="token string">&#39;node&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;script.js&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;one&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;two&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;three&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">stdio</span><span class="token operator">:</span> <span class="token string">&#39;inherit&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">child<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;close&#39;</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;child is done!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> result <span class="token operator">=</span> spawn<span class="token punctuation">.</span><span class="token function">sync</span><span class="token punctuation">(</span><span class="token string">&#39;node&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;script.js&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;one&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;two&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;three&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">stdio</span><span class="token operator">:</span> <span class="token string">&#39;inherit&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4))])}const k=l(d,[["render",u]]),g=JSON.parse('{"path":"/strong/120.create-react-app.html","title":"","lang":"en-US","frontmatter":{},"git":{"updatedTime":1681290319000,"contributors":[{"name":"yutao","username":"yutao","email":"642231346@qq.com","commits":1,"url":"https://github.com/yutao"}],"changelog":[{"hash":"f5ab8c9d34991ec274f7f652439afe5b2afb6147","time":1681290319000,"email":"642231346@qq.com","author":"yutao","message":"modify"}]},"filePathRelative":"strong/120.create-react-app.md"}');export{k as comp,g as data};
