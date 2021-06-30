module.exports = {
  base: '/note/',
  title: 'jiaHang的博客',
  description: '专注前端技术栈分享，做一个爱折腾的前端',
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '前端', link: '/web/' },
      { text: 'node', link: '/node/' },
      { text: '面试问题', link: '/interview/' }
    ],
    sidebar: {
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
            ['js/Promise', 'Promise实现'],
            ['js/dataStructure', '数据结构与算法']
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
            ['vue/vuex', 'vuex实现'],
            ['vue/vueRouter', 'vue-router实现']
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
          title: 'rollup',
          name: 'rollup',
          collabsable: false,
          children: [
            ['rollup/', '目录'],
            ['rollup/rollupUse', 'rollup使用教程'],
            ['rollup/rollupTheory', 'rollup打包原理']
          ]
        },
        {
          title: '小程序',
          name: '小程序',
          collabsable: false,
          children: [
            ['wxApp/', '目录'],
            ['wxApp/swiper', 'swiper自定义样式'],
            ['wxApp/request', '小程序中实现token过期重新登录再重新请求业务接口']
          ]
        },
        {
          title: '其他',
          name: '其他',
          collabsable: false,
          children: [
            ['other/', '目录'],
            ['other/typora+picgo+gitee图床使用教程', 'typora+picgo+gitee图床使用教程']
          ]
        }
      ],
      '/node/': [
        ['', 'node目录'],
        ['01_what', 'Node介绍'],
        ['02_module', 'Node模块机制'],
        ['path', 'path模块'],
        ['fs', 'fs模块']
      ]
    }
  }
}
