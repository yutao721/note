import{_ as n,c as a,a as e,o as l}from"./app-CD1YpnS1.js";const i={};function p(t,s){return l(),a("div",null,[...s[0]||(s[0]=[e(`<h2 id="_1-php是什么" tabindex="-1"><a class="header-anchor" href="#_1-php是什么"><span>1. PHP是什么</span></a></h2><ul><li>PHP 是一种创建动态交互性站点的强有力的服务器端脚本语言。</li><li>PHP-FPM(PHP FastCGI Process Manager)意：PHP FastCGI 进程管理器，用于管理PHP 进程池的软件，用于接受web服务器的请求。</li></ul><h2 id="_2-安装php" tabindex="-1"><a class="header-anchor" href="#_2-安装php"><span>2. 安装php</span></a></h2><ul><li><a href="https://php.net/" target="_blank" rel="noopener noreferrer">php.net</a></li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">cd /usr/local/src</span>
<span class="line">yum -y install gcc gcc-c++ make automake autoconf libtool openssl-devel pcre-devel libxml2 libxml2-devel bzip2 bzip2-devel libjpeg-turbo libjpeg-turbo-devel libpng libpng-devel freetype freetype-devel zlib zlib-devel libcurl libcurl-devel</span>
<span class="line">wget http://img.zhufengpeixun.cn/libmcrypt-2.5.8.tar.gz</span>
<span class="line">tar -xzvf libmcrypt-2.5.8.tar.gz</span>
<span class="line">cd /usr/local/src/libmcrypt-2.5.8 &amp;&amp; \\</span>
<span class="line">    ./configure &amp;&amp; \\</span>
<span class="line">    make -j 2 &amp;&amp; \\</span>
<span class="line">    make install</span>
<span class="line"></span>
<span class="line">wget http://img.zhufengpeixun.cn/php-5.6.31.tar.gz</span>
<span class="line">tar -xzvf php-5.6.31.tar.gz</span>
<span class="line">cd /usr/local/src/php-5.6.31 &amp;&amp; \\</span>
<span class="line">    ./configure --prefix=/usr/local/php --with-pdo-mysql=mysqlnd --with-mysqli=mysqlnd --with-mysql=mysqlnd --with-openssl --enable-mbstring --with-freetype-dir --with-jpeg-dir --with-png-dir --with-mcrypt --with-zlib --with-libxml-dir=/usr --enable-xml  --enable-sockets --enable-fpm --with-config-file-path=/usr/local/php/etc --with-bz2 --with-gd &amp;&amp; \\</span>
<span class="line">    make -j 2 &amp;&amp; \\</span>
<span class="line">    make install</span>
<span class="line">cp /usr/local/php/etc/php-fpm.conf.default /usr/local/php/etc/php-fpm.conf</span>
<span class="line"> </span>
<span class="line"> </span>
<span class="line">rm -rf /usr/local/src/php-5.6.30 &amp;&amp; yum clean all </span>
<span class="line"> </span>
<span class="line">/usr/local/php/sbin/php-fpm -R -c /usr/local/php/etc/php-fpm.conf</span>
<span class="line"></span>
<span class="line"> </span>
<span class="line">kill -USR2 $(ps -ef | grep php-fpm | awk &#39;{print $2}&#39; | head -n 1)  </span>
<span class="line">netstat -anpt | grep 9000</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改启动用户为root vi /usr/local/php/etc/php-fpm.conf</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">user = root</span>
<span class="line">group = root</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-布署nignx" tabindex="-1"><a class="header-anchor" href="#_3-布署nignx"><span>3. 布署nignx</span></a></h2><h3 id="_3-1-关闭防火墙" tabindex="-1"><a class="header-anchor" href="#_3-1-关闭防火墙"><span>3.1 关闭防火墙</span></a></h3><table><thead><tr><th style="text-align:left;">功能</th><th style="text-align:left;">命令</th></tr></thead><tbody><tr><td style="text-align:left;">停止防火墙</td><td style="text-align:left;">systemctl stop firewalld.service</td></tr><tr><td style="text-align:left;">永久关闭防火墙</td><td style="text-align:left;">systemctl disable firewalld.service</td></tr></tbody></table><h3 id="_3-2-安装nignx" tabindex="-1"><a class="header-anchor" href="#_3-2-安装nignx"><span>3.2 安装nignx</span></a></h3><p>vi /etc/yum.repos.d/nginx.repo</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token punctuation">[</span>nginx<span class="token punctuation">]</span></span>
<span class="line">name<span class="token operator">=</span>nginx repo</span>
<span class="line">baseurl<span class="token operator">=</span>http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>nginx<span class="token punctuation">.</span>org<span class="token operator">/</span>packages<span class="token operator">/</span>centos<span class="token operator">/</span><span class="token number">7</span><span class="token operator">/</span>$basearch<span class="token operator">/</span></span>
<span class="line">gpgcheck<span class="token operator">=</span><span class="token number">0</span></span>
<span class="line">enabled<span class="token operator">=</span><span class="token number">1</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装nginx</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">yum install nginx -y </span>
<span class="line">nginx -v 查看安装的版本</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-配置虚拟主机" tabindex="-1"><a class="header-anchor" href="#_3-3-配置虚拟主机"><span>3.3 配置虚拟主机</span></a></h3><p>/usr/share/nginx/html/dev-php/main.php</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;?php echo phpinfo()?&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>vi /etc/nginx/conf.d/dev-php.conf</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">server {</span>
<span class="line">    listen       80;</span>
<span class="line">    server_name  www.dev-php.com;</span>
<span class="line"></span>
<span class="line">     </span>
<span class="line">     </span>
<span class="line"></span>
<span class="line">    location / {</span>
<span class="line">        root   /usr/share/nginx/html;</span>
<span class="line">        index  index.html index.htm;</span>
<span class="line">    }</span>
<span class="line">    location /status{</span>
<span class="line">       stub_status  on;</span>
<span class="line">    }</span>
<span class="line">     </span>
<span class="line">    location ~ \\.php$ {</span>
<span class="line">        root           /usr/share/nginx/html/dev-php;</span>
<span class="line">        fastcgi_pass   127.0.0.1:9000;</span>
<span class="line">        fastcgi_index  index.php;</span>
<span class="line">        fastcgi_param  SCRIPT_FILENAME  $document_root$fastcgi_script_name;</span>
<span class="line">        include        fastcgi_params;</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>vi /etc/nginx/nginx.conf</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">user  root;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>启动和重启</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line">systemctl start nginx<span class="token punctuation">.</span>service</span>
<span class="line">netstat <span class="token operator">-</span>anpt <span class="token operator">|</span> grep <span class="token number">80</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>C:\\Windows\\System32\\drivers\\etc\\hosts <code>js 192.168.20.132 www.dev-php.com \`</code></p>`,25)])])}const c=n(i,[["render",p]]),d=JSON.parse('{"path":"/strong/61.14.devops-php.html","title":"","lang":"en-US","frontmatter":{},"git":{"updatedTime":1681290319000,"contributors":[{"name":"yutao","username":"yutao","email":"642231346@qq.com","commits":1,"url":"https://github.com/yutao"}],"changelog":[{"hash":"f5ab8c9d34991ec274f7f652439afe5b2afb6147","time":1681290319000,"email":"642231346@qq.com","author":"yutao","message":"modify"}]},"filePathRelative":"strong/61.14.devops-php.md"}');export{c as comp,d as data};
