module.exports = {
  base: '/note/',
  title: 'jiaHang的博客',
  description: '专注前端技术栈分享，做一个爱折腾的前端',
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '前端', link: '/web/' },
      { text: '面试问题', link: '/interview/' }
    ],
    sidebar: {
      // "/web/":[
      //   {
      //     title: "JavaScript",
      //     collabsable: false,
      //     children: [
      //       {title: 'new', path:'/web/js/new'},
      //       {title: '手写bind', path:'/web/js/bind'},
      //       {title: '手写call', path:'/web/js/call'},
      //       {title: '手写深克隆', path:'/web/js/deepClone'}
      //     ]
      //   }
      // ]
      '/web/': [
        ['', '前端'],
        {
          title: 'JavaScript',
          name: 'JavaScript',
          collabsable: false,
          children: [
            ['js/', '目录'],
            ['js/new', '手写实现New'],
            ['js/bind', '手写实现bind'],
            ['js/call', '手写实现call'],
            ['js/Promise', 'Promise实现']
          ]
        },
        {
          title: 'css',
          name: 'css',
          collabsable: false
        },
        {
          title: 'ES6',
          name: 'ES6',
          collabsable: false
        },
        {
          title: 'vue',
          name: 'vue',
          collabsable: false,
          children: [
            ['vue/', '目录'],
            ['vue/vuex', 'vuex实现']
          ]
        },
        {
          title: 'webpack',
          name: 'webpack',
          collabsable: false,
          children: [
            ['webpack/', '目录'],
            ['webpack/devServer', 'devServer开发配置']
          ]
        },
        {
          title: "其他",
          name: "其他",
          collabsable: false,
          children: [
            ["other/", "目录"],
            ['other/typora+picgo+gitee图床使用教程', "typora+picgo+gitee图床使用教程"]
          ]
        }
      ]
    }
  }
}
