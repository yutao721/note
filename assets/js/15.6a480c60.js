(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{358:function(t,v,_){"use strict";_.r(v);var a=_(43),s=Object(a.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"charles-代理本地调试微信公众号"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#charles-代理本地调试微信公众号"}},[t._v("#")]),t._v(" charles  代理本地调试微信公众号")]),t._v(" "),_("p",[t._v("在微信内置浏览器中使用微信JS SDK，可以使用微信提供的功能，例如设置分享链接的标题和图片、调起微信支付、打开扫一扫等等。\n根据官方文档，前端在使用微信的接口前要先进行配置，如下：")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("wx.config({\n    debug: true, // 调试模式\n    appId: '', // 必填，公众号的唯一标识\n    timestamp: , // 必填，生成签名的时间戳\n    nonceStr: '', // 必填，生成签名的随机串\n    signature: '',// 必填，签名\n    jsApiList: [] // 必填，需要使用的JS接口列表\n});\n")])])]),_("p",[t._v("为什么要用到"),_("code",[t._v("charles")]),t._v("代理来本地调试？")]),t._v(" "),_("blockquote",[_("p",[t._v("配置信息得从后端获取，后端在计算"),_("code",[t._v("signature")]),t._v("时需要前端传入当前页面的URL。开发者要在公众平台设置JS SDK安全域名，在这个域名下才能使用微信JS SDK。也就是说调用JS SDK一共有2个条件：1. 在微信内置浏览器访问，或者在电脑端的微信开发者工具；2. 在指定域名下访问。")])]),t._v(" "),_("p",[t._v("所以，只有在微信公众号中的添加的js安全域名，在可以使用使用授权，分享等JSDK。但是我们平常开发阶段，要么就是一个本地的静态 "),_("code",[t._v("Html")]),t._v(" 文件，或者是使用的是一些框架通过"),_("code",[t._v("npm run dev")]),t._v("启动的一些服务，亦或者是通过其他例如"),_("code",[t._v("vscode")]),t._v("的"),_("code",[t._v("live serve")]),t._v(" ,"),_("code",[t._v("http-serve")]),t._v("等工具启动的一些本地服务，这些文件路径或者本地服务ip不是公众号中配置的安全域名，在做安全校验的时候，是无法通过服务端的签名校验的，所以，必须通过代理的方式绕过安全校验，而"),_("code",[t._v("charles")]),t._v("针对这些情况都可以应对，以下几种方式都可以实现本地调试。")]),t._v(" "),_("h2",{attrs:{id:"map-local-代理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#map-local-代理"}},[t._v("#")]),t._v(" Map Local  代理")]),t._v(" "),_("p",[t._v("是将某个网络请求重定向到本地的某个文件或者文件夹")]),t._v(" "),_("ol",[_("li",[_("strong",[t._v("开启  "),_("code",[t._v("Windows Proxy")]),t._v(" 选项")])])]),t._v(" "),_("p",[_("img",{attrs:{src:"https://fastly.jsdelivr.net/gh/yutao721/blogImage@main/img/20230224140357.png",alt:""}})]),t._v(" "),_("ol",{attrs:{start:"2"}},[_("li",[_("p",[_("strong",[t._v("Tools > Map Local > 勾选 "),_("code",[t._v("Enable Map Local")]),t._v("选项")])])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("填写代理信息")])])])]),t._v(" "),_("p",[_("img",{attrs:{src:"https://fastly.jsdelivr.net/gh/yutao721/blogImage@main/img/20230224140707.png",alt:"2"}})]),t._v(" "),_("p",[t._v("如何填写这里的信息，用一个简单的例子来说明：假如某个页面线上的访问地址（添加了JS安全域名）是："),_("code",[t._v("http://shop.zhuoyou.com/app_v1/lunch/index.html")]),t._v(",则配置信息如下：")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://fastly.jsdelivr.net/gh/yutao721/blogImage@main/img/20230224140720.png",alt:"3"}})]),t._v(" "),_("ul",[_("li",[t._v("Protocol：协议类型，https， http 或者为空，一般不填也可以。")]),t._v(" "),_("li",[t._v("Host：域名（需要填写的是JS安全域名）")]),t._v(" "),_("li",[t._v("Port：端口号")]),t._v(" "),_("li",[t._v("Path： 路径，可以以"),_("code",[t._v("**/*")]),t._v("的形式填写")]),t._v(" "),_("li",[t._v("Query：参数")]),t._v(" "),_("li",[t._v("Local Path：本地所在的目录，文件夹或者文件都可以")])]),t._v(" "),_("ol",{attrs:{start:"4"}},[_("li",[_("p",[_("strong",[t._v("微信开发中工具 设置代理")])]),t._v(" "),_("p",[t._v("设置 > 代理设置 > 手动设置代理，填入本地 ip 或者 "),_("code",[t._v("127.0.0.1")]),t._v(" 端口：8888")]),t._v(" "),_("p",[_("code",[t._v("charles")]),t._v(" 默认端口是8888，如果做了修改，则保持一致即可。")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("访问页面")])])])]),t._v(" "),_("p",[t._v("在微信开发者工具输入地址，"),_("code",[t._v("http://shop.zhuoyou.com/app_v1/lunchApp/index.html")]),t._v(" 就可以本地使用开发者工具调试公众号的开发了。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://fastly.jsdelivr.net/gh/yutao721/blogImage@main/img/20230224140732.png",alt:"4"}})]),t._v(" "),_("p",[t._v("也可以通过"),_("code",[t._v("charles")]),t._v("的面板工具可以看到，当访问url的时候，其实是访问的本地的文件。")]),t._v(" "),_("ol",{attrs:{start:"6"}},[_("li",[_("strong",[t._v("手机上访问")])])]),t._v(" "),_("p",[t._v("在开发者工具中也只能模拟一些JSDK的一些方法，有时候需要真机上调试，就需要在手机上也设置代理")]),t._v(" "),_("ul",[_("li",[t._v("手机WIFI必须和电脑在同一个网络")]),t._v(" "),_("li",[t._v("WIFI 设置代理，手动，填入电脑的ip地址：端口8888")])]),t._v(" "),_("p",[_("img",{attrs:{src:"https://fastly.jsdelivr.net/gh/yutao721/blogImage@main/img/20230224140741.png",alt:"5"}})]),t._v(" "),_("p",[t._v("然后，点击开发者工具上的预览，生成二维码，即可手机上访问。")]),t._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),_("p",[t._v("通过踩坑，通过链接地址的形式访问页面，有些时候很多jsApi会失败，最好已二维码的形式访问，或者链接地址收藏，通过收藏夹访问。")])]),t._v(" "),_("h2",{attrs:{id:"map-remote-代理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#map-remote-代理"}},[t._v("#")]),t._v(" Map Remote 代理")]),t._v(" "),_("p",[t._v("是将某个网络请求重定向到另一个网络请求。")]),t._v(" "),_("ol",[_("li",[_("p",[_("strong",[t._v("开启  "),_("code",[t._v("Windows Proxy")]),t._v(" 选项")])])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("Tools > Map Remote> 勾选 "),_("code",[t._v("Enable Map Remote")]),t._v("选项")])])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("填写代理信息")])])])]),t._v(" "),_("p",[t._v("如何填写这里的信息，用一个简单的例子来说明：假如本地起的服务是："),_("code",[t._v("localhost:3000")])]),t._v(" "),_("p",[_("img",{attrs:{src:"https://fastly.jsdelivr.net/gh/yutao721/blogImage@main/img/20230224140753.png",alt:"6"}})]),t._v(" "),_("ul",[_("li",[t._v("Map To：本地所起的服务，端口号也是本地服务对应的端口号")]),t._v(" "),_("li",[t._v("Map From：线上地址，Protocol可以不填，只要域名命中就可以代理。根据线上实际情况配置即可")])]),t._v(" "),_("ol",{attrs:{start:"4"}},[_("li",[_("strong",[t._v("微信开发中工具 设置代理")])])]),t._v(" "),_("p",[t._v("设置 > 代理设置 > 手动设置代理，填入本地 ip 或者 "),_("code",[t._v("127.0.0.1")]),t._v(" 端口：8888")]),t._v(" "),_("p",[_("code",[t._v("charles")]),t._v(" 默认端口是8888，如果做了修改，则保持一致即可。")]),t._v(" "),_("ol",{attrs:{start:"5"}},[_("li",[_("strong",[t._v("访问页面")])])]),t._v(" "),_("p",[t._v("在微信开发者工具输入地址，"),_("code",[t._v("http://shop.zhuoyou.com/")]),t._v(" 就代理到本地的"),_("code",[t._v("localhost:3000")]),t._v("的服务了,可以本地使用开发者工具调试公众号的开发了。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://fastly.jsdelivr.net/gh/yutao721/blogImage@main/img/20230224140802.png",alt:"7"}})]),t._v(" "),_("p",[t._v("查看"),_("code",[t._v("charles")]),t._v("工具可以看到代理已经成功。")]),t._v(" "),_("ol",{attrs:{start:"6"}},[_("li",[_("strong",[t._v("手机上访问")])])]),t._v(" "),_("p",[t._v("在开发者工具中也只能模拟一些JSDK的一些方法，有时候需要真机上调试，就需要在手机上也设置代理")]),t._v(" "),_("ul",[_("li",[t._v("手机WIFI必须和电脑在同一个网络")]),t._v(" "),_("li",[t._v("WIFI 设置代理，手动，填入电脑的ip地址：端口8888")])]),t._v(" "),_("h2",{attrs:{id:"其他方式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#其他方式"}},[t._v("#")]),t._v(" 其他方式")]),t._v(" "),_("p",[t._v("也可以通过修改本地host文件的方式处理")]),t._v(" "),_("ol",[_("li",[t._v("修改host文件，将域名映射到127.0.0.1 IP地址")])]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("127.0.0.1 shop.zhuoyou.com\n")])])]),_("ol",{attrs:{start:"2"}},[_("li",[t._v("开发者工具中 访问"),_("code",[t._v("htpp://shop.zhuoyou.com:3000")]),t._v(",如果本地服务的端口是80，则可以不填了。")]),t._v(" "),_("li",[t._v("手机访问")])]),t._v(" "),_("p",[t._v("通过上面2步，其实开发工具其实已经是可以正常访问了，不需要开发者工具设置任何代理，也不需要开启charles，但是如果手机上需要访问，则需要开启charles即可。")]),t._v(" "),_("h2",{attrs:{id:"charles下载以及安装"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#charles下载以及安装"}},[t._v("#")]),t._v(" charles下载以及安装")]),t._v(" "),_("p",[_("a",{attrs:{href:"https://pan.baidu.com/s/1C9Dr6Zy8WkpSeRBb9XdWrQ?pwd=4rmt",target:"_blank",rel:"noopener noreferrer"}},[t._v("charles百度网盘下载地址"),_("OutboundLink")],1)]),t._v(" "),_("ol",[_("li",[t._v("解压charles.rar > charles-proxy-4.1.4-win64.msi安装")]),t._v(" "),_("li",[t._v("安装之后，再使用jar，去破解，更新lib下的jar就可以")])])])}),[],!1,null,null,null);v.default=s.exports}}]);