
import { defineUserConfig } from 'vuepress';
import { defaultTheme } from '@vuepress/theme-default';
import { viteBundler } from '@vuepress/bundler-vite';


export default defineUserConfig({
  base: '/note/',
  title: 'jiaHang前端学习笔记',
  description: '专注前端技术栈分享，做一个爱折腾的前端',
  theme: defaultTheme({
    navbar: [
      { text: '主页', link: '/' },
      { text: '前端', link: '/web/' },
      { text: 'node', link: '/node/' },
      { text: '前端架构', link: '/strong/' },
      // { text: '面试问题', link: '/interview/' }
    ],

    sidebar: {
      '/web/': [
        {
          text: 'JavaScript',
          prefix: '/web/js',
          link: '/web/js/',
          collapsible: true,
          children: [
            {
              text: '手写实现New',
              link: 'new'
            },
            {
              text: '手写实现bind',
              link: 'bind'
            },
            {
              text: '手写实现call',
              link: 'call'
            },
            {
              text: 'Promise实现',
              link: 'Promise'
            },
            {
              text: '数据结构与算法',
              link: 'dataStructure'
            }
          ],
        },
        {
          text: 'vue',
          collapsible: true,
          prefix: '/web/vue',
          link: '/web/vue/',
          children: [
            {
              text: 'vuex实现',
              link: 'vuex'
            },
            {
              text: 'vue-router实现',
              link: 'vueRouter'
            }
          ]
        },
        {
          text: 'react',
          prefix: '/web/react',
          link: '/web/react/',
          collapsible: true,
          children: [
            {
              text: 'react初次渲染',
              link: '1'
            },
            {
              text: 'react单节点diff',
              link: '2'
            },
            {
              text: 'react多节点diff',
              link: '3'
            }
          ]
        },
        {
          text: 'webpack',
          prefix: '/web/webpack',
          link: '/web/webpack/',
          collapsible: true,
          children: [
            {
              text: 'devServer开发配置',
              link: 'devServer'
            },
            {
              text: 'webpack性能优化之dllPlugin',
              link: 'dllPlugin'
            }
          ]
        },
        {
          text: 'rollup',
          prefix: '/web/rollup',
          link: '/web/rollup/',
          collapsible: true,
          children: [
            {
              text: 'rollup使用教程',
              link: 'rollupUse'
            },
            {
              text: 'rollup打包原理',
              link: 'rollupTheory'
            },
          ]
        },
        {
          text: '小程序',
          prefix: '/web/wxApp',
          link: '/web/wxApp/',
          collapsible: true,
          children: [
            {
              text: 'swiper自定义样式',
              link: 'swiper'
            },
            {
              text: '小程序中实现token过期重新登录再重新请求业务接口',
              link: 'request'
            },
            {
              text: '小程序中实现Observer监听元素进入视口',
              link: 'IntersectionObserver'
            }
          ]
        },
        {
          text: '调试',
          prefix: '/web/debug',
          link: '/web/debug/',
          collapsible: true,
          children: [
            {
              text: 'charles代理本地调试微信公众号',
              link: '微信公众号本地调试'
            },
            {
              text: '微信公众号本地如何调试',
              link: '微信公众号本地如何调试'
            }
          ]
        },
        {
          text: '其他',
          prefix: '/web/other',
          link: '/web/other/',
          collapsible: true,
          children: [
            {
              text: 'typora+picgo+gitee图床使用教程',
              link: 'typora+picgo+gitee图床使用教程'
            }
          ]
        }
      ],
      '/node/': [
        {
          text: '原生Node',
          prefix: '/node',
          link: '/node/',
          collapsible: true,
          children: [
            {
              text: 'Node介绍',
              link: '01_what'
            },
            {
              text: 'Node模块机制',
              link: '02_module'
            },
            {
              text: 'path模块',
              link: 'path'
            },
            {
              text: 'fs模块',
              link: 'fs'
            }
          ]
        },
        {
          text: 'koa',
          collapsible: true,
          children: []
        }
      ],
      // '/interview/': [
      //   ['', '目录']
      // ],

      // strong sidebar
      '/strong/': [
        {
          text: '前端',
          prefix: '/strong',
          link: '/strong/',
          collapsible: true,
          children: [
            {
              text: '目录',
              link: ''
            },
            {
              text: '0.Async',
              link: '0.Async'
            },
            {
              text: '0.module',
              link: '0.module'
            },
            {
              text: '1.ES2015',
              link: '1.ES2015'
            },
            {
              text: '2.Promise',
              link: '2.Promise'
            },
            {
              text: '3.Node',
              link: '3.Node'
            },
            {
              text: '4.NodeInstall',
              link: '4.NodeInstall'
            },
            {
              text: '5.REPL',
              link: '5.REPL'
            },
            {
              text: '6.NodeCore',
              link: '6.NodeCore'
            },
            {
              text: '7.module&NPM',
              link: '7.module&NPM'
            },
            {
              text: '7.npm2',
              link: '7.npm2'
            },
            {
              text: '8.Encoding',
              link: '8.Encoding'
            },
            {
              text: '9.Buffer',
              link: '9.Buffer'
            },
            {
              text: '10.fs',
              link: '10.fs'
            },
            {
              text: '11.Stream-1',
              link: '11.Stream-1'
            },
            {
              text: '11.Stream-2',
              link: '11.Stream-2'
            },
            {
              text: '11.Stream-3',
              link: '11.Stream-3'
            },
            {
              text: '11.Stream-4',
              link: '11.Stream-4'
            },
            {
              text: '12-Network-2',
              link: '12-Network-2'
            },
            {
              text: '12.NetWork-3',
              link: '12.NetWork-3'
            },
            {
              text: '12.Network-1',
              link: '12.Network-1'
            },
            {
              text: '13.tcp',
              link: '13.tcp'
            },
            {
              text: '14.http-1',
              link: '14.http-1'
            },
            {
              text: '14.http-2',
              link: '14.http-2'
            },
            {
              text: '15.compress',
              link: '15.compress'
            },
            {
              text: '16.crypto',
              link: '16.crypto'
            },
            {
              text: '17.process',
              link: '17.process'
            },
            {
              text: '18.yargs',
              link: '18.yargs'
            },
            {
              text: '19.cache',
              link: '19.cache'
            },
            {
              text: '20.action',
              link: '20.action'
            },
            {
              text: '21.https',
              link: '21.https'
            },
            {
              text: '22.cookie',
              link: '22.cookie'
            },
            {
              text: '23.session',
              link: '23.session'
            },
            {
              text: '24.express-1',
              link: '24.express-1'
            },
            {
              text: '24.express-2',
              link: '24.express-2'
            },
            {
              text: '24.express-3',
              link: '24.express-3'
            },
            {
              text: '24.express-4',
              link: '24.express-4'
            },
            {
              text: '25.koa-1',
              link: '25.koa-1'
            },
            {
              text: '26.webpack-1-basic',
              link: '26.webpack-1-basic'
            },
            {
              text: '26.webpack-10-prepare',
              link: '26.webpack-10-prepare'
            },
            {
              text: '26.webpack-2-optimize',
              link: '26.webpack-2-optimize'
            },
            {
              text: '26.webpack-3-file',
              link: '26.webpack-3-file'
            },
            {
              text: '26.webpack-4.tapable',
              link: '26.webpack-4.tapable'
            },
            {
              text: '26.webpack-5-AST',
              link: '26.webpack-5-AST'
            },
            {
              text: '26.webpack-6-sources',
              link: '26.webpack-6-sources'
            },
            {
              text: '26.webpack-7-loader',
              link: '26.webpack-7-loader'
            },
            {
              text: '26.webpack-8-plugin',
              link: '26.webpack-8-plugin'
            },
            {
              text: '26.webpack-9-hand',
              link: '26.webpack-9-hand'
            },
            {
              text: '28.redux-jwt-back',
              link: '28.redux-jwt-back'
            },
            {
              text: '28.redux-jwt-front',
              link: '28.redux-jwt-front'
            },
            {
              text: '28.redux',
              link: '28.redux'
            },
            {
              text: '29.mongodb-1',
              link: '29.mongodb-1'
            },
            {
              text: '29.mongodb-2',
              link: '29.mongodb-2'
            },
            {
              text: '29.mongodb-3',
              link: '29.mongodb-3'
            },
            {
              text: '29.mongodb-4',
              link: '29.mongodb-4'
            },
            {
              text: '29.mongodb-5',
              link: '29.mongodb-5'
            },
            {
              text: '29.mongodb-6',
              link: '29.mongodb-6'
            },
            {
              text: '30.cms-1-mysql',
              link: '30.cms-1-mysql'
            },
            {
              text: '30.cms-10-umi',
              link: '30.cms-10-umi'
            },
            {
              text: '30.cms-12-dva',
              link: '30.cms-12-dva'
            },
            {
              text: '30.cms-13-dva-ant',
              link: '30.cms-13-dva-ant'
            },
            {
              text: '30.cms-14-front',
              link: '30.cms-14-front'
            },
            {
              text: '30.cms-15-deploy',
              link: '30.cms-15-deploy'
            },
            {
              text: '30.cms-2-mysql',
              link: '30.cms-2-mysql'
            },
            {
              text: '30.cms-3-mysql',
              link: '30.cms-3-mysql'
            },
            {
              text: '30.cms-4-nunjucks',
              link: '30.cms-4-nunjucks'
            },
            {
              text: '30.cms-5-mock',
              link: '30.cms-5-mock'
            },
            {
              text: '30.cms-6-egg',
              link: '30.cms-6-egg'
            },
            {
              text: '30.cms-7-api',
              link: '30.cms-7-api'
            },
            {
              text: '30.cms-8-roadhog',
              link: '30.cms-8-roadhog'
            },
            {
              text: '30.cms-9-yaml',
              link: '30.cms-9-yaml'
            },
            {
              text: '31.cms-13-dva-antdesign',
              link: '31.cms-13-dva-antdesign'
            },
            {
              text: '31.dva',
              link: '31.dva'
            },
            {
              text: '33.redis',
              link: '33.redis'
            },
            {
              text: '34.unittest',
              link: '34.unittest'
            },
            {
              text: '35.jwt',
              link: '35.jwt'
            },
            {
              text: '36.websocket-1',
              link: '36.websocket-1'
            },
            {
              text: '36.websocket-2',
              link: '36.websocket-2'
            },
            {
              text: '38.chat-3',
              link: '38.chat-3'
            },
            {
              text: '38.chat-api-1',
              link: '38.chat-api-1'
            },
            {
              text: '38.chat-api-2',
              link: '38.chat-api-2'
            },
            {
              text: '38.chat-api-3',
              link: '38.chat-api-3'
            },
            {
              text: '38.chat',
              link: '38.chat'
            },
            {
              text: '38.chat2',
              link: '38.chat2'
            },
            {
              text: '39.crawl-0',
              link: '39.crawl-0'
            },
            {
              text: '39.crawl-1',
              link: '39.crawl-1'
            },
            {
              text: '39.crawl-2',
              link: '39.crawl-2'
            },
            {
              text: '40.deploy',
              link: '40.deploy'
            },
            {
              text: '41.safe',
              link: '41.safe'
            },
            {
              text: '42.test',
              link: '42.test'
            },
            {
              text: '43.nginx',
              link: '43.nginx'
            },
            {
              text: '44.enzyme',
              link: '44.enzyme'
            },
            {
              text: '45.docker',
              link: '45.docker'
            },
            {
              text: '46.elastic',
              link: '46.elastic'
            },
            {
              text: '47.oauth',
              link: '47.oauth'
            },
            {
              text: '48.wxpay',
              link: '48.wxpay'
            },
            {
              text: '52.UML',
              link: '52.UML'
            },
            {
              text: '53.design',
              link: '53.design'
            },
            {
              text: '54.linux',
              link: '54.linux'
            },
            {
              text: '56.react-ssr',
              link: '56.react-ssr'
            },
            {
              text: '57.ts',
              link: '57.ts'
            },
            {
              text: '58.ts_react',
              link: '58.ts_react'
            },
            {
              text: '59.ketang',
              link: '59.ketang'
            },
            {
              text: '59.ketang2',
              link: '59.ketang2'
            },
            {
              text: '61.1.devops-linux',
              link: '61.1.devops-linux'
            },
            {
              text: '61.10.devops-nginx',
              link: '61.10.devops-nginx'
            },
            {
              text: '61.11.devops-docker',
              link: '61.11.devops-docker'
            },
            {
              text: '61.12.devops-jekins',
              link: '61.12.devops-jekins'
            },
            {
              text: '61.13.devops-groovy',
              link: '61.13.devops-groovy'
            },
            {
              text: '61.14.devops-php',
              link: '61.14.devops-php'
            },
            {
              text: '61.15.devops-java',
              link: '61.15.devops-java'
            },
            {
              text: '61.16.devops-node',
              link: '61.16.devops-node'
            },
            {
              text: '61.17.devops-k8s',
              link: '61.17.devops-k8s'
            },
            {
              text: '61.2.devops-vi',
              link: '61.2.devops-vi'
            },
            {
              text: '61.3.devops-user',
              link: '61.3.devops-user'
            },
            {
              text: '61.4.devops-auth',
              link: '61.4.devops-auth'
            },
            {
              text: '61.5.devops-shell',
              link: '61.5.devops-shell'
            },
            {
              text: '61.6.devops-install',
              link: '61.6.devops-install'
            },
            {
              text: '61.7.devops-system',
              link: '61.7.devops-system'
            },
            {
              text: '61.8.devops-service',
              link: '61.8.devops-service'
            },
            {
              text: '61.9.devops-network',
              link: '61.9.devops-network'
            },
            {
              text: '62.1.react-basic',
              link: '62.1.react-basic'
            },
            {
              text: '62.2.react-state',
              link: '62.2.react-state'
            },
            {
              text: '62.3.react-high',
              link: '62.3.react-high'
            },
            {
              text: '62.4.react-optimize',
              link: '62.4.react-optimize'
            },
            {
              text: '62.5.react-hooks',
              link: '62.5.react-hooks'
            },
            {
              text: '62.6.react-immutable',
              link: '62.6.react-immutable'
            },
            {
              text: '62.7.react-mobx',
              link: '62.7.react-mobx'
            },
            {
              text: '62.8.react-source',
              link: '62.8.react-source'
            },
            {
              text: '63.1.redux',
              link: '63.1.redux'
            },
            {
              text: '63.2.redux-middleware',
              link: '63.2.redux-middleware'
            },
            {
              text: '63.3.redux-hooks',
              link: '63.3.redux-hooks'
            },
            {
              text: '63.4.redux-saga',
              link: '63.4.redux-saga'
            },
            {
              text: '63.5.redux-saga-hand',
              link: '63.5.redux-saga-hand'
            },
            {
              text: '64.1.router',
              link: '64.1.router'
            },
            {
              text: '64.2.router-connected',
              link: '64.2.router-connected'
            },
            {
              text: '65.1.typescript',
              link: '65.1.typescript'
            },
            {
              text: '65.2.typescript',
              link: '65.2.typescript'
            },
            {
              text: '65.3.typescript',
              link: '65.3.typescript'
            },
            {
              text: '65.4.antd',
              link: '65.4.antd'
            },
            {
              text: '65.4.definition',
              link: '65.4.definition'
            },
            {
              text: '66-1.vue-base',
              link: '66-1.vue-base'
            },
            {
              text: '66-10.jwt-vue',
              link: '66-10.jwt-vue'
            },
            {
              text: '66-11.vue-ssr',
              link: '66-11.vue-ssr'
            },
            {
              text: '66-12.nuxt-apply',
              link: '66-12.nuxt-apply'
            },
            {
              text: '66-13.pwa',
              link: '66-13.pwa'
            },
            {
              text: '66-14.vue单元测试',
              link: '66-14.vue单元测试'
            },
            {
              text: '66-15.权限校验',
              link: '66-15.权限校验'
            },
            {
              text: '66-2.vue-component',
              link: '66-2.vue-component'
            },
            {
              text: '66-3.vue-cli3.0',
              link: '66-3.vue-cli3.0'
            },
            {
              text: '66-4.$message组件',
              link: '66-4.$message组件'
            },
            {
              text: '66-5.Form组件',
              link: '66-5.Form组件'
            },
            {
              text: '66-6.tree',
              link: '66-6.tree'
            },
            {
              text: '66-7.vue-router-apply',
              link: '66-7.vue-router-apply'
            },
            {
              text: '66-8.axios-apply',
              link: '66-8.axios-apply'
            },
            {
              text: '66-9.vuex-apply',
              link: '66-9.vuex-apply'
            },
            {
              text: '67-1-network',
              link: '67-1-network'
            },
            {
              text: '68-2-wireshark',
              link: '68-2-wireshark'
            },
            {
              text: '69-hooks',
              link: '69-hooks'
            },
            {
              text: '70-deploy',
              link: '70-deploy'
            },
            {
              text: '71-hmr',
              link: '71-hmr'
            },
            {
              text: '72.deploy',
              link: '72.deploy'
            },
            {
              text: '73.import',
              link: '73.import'
            },
            {
              text: '74.mobile',
              link: '74.mobile'
            },
            {
              text: '75.webpack-1.文件分析',
              link: '75.webpack-1.文件分析'
            },
            {
              text: '75.webpack-10.asset',
              link: '75.webpack-10.asset'
            },
            {
              text: '75.webpack-11.实现',
              link: '75.webpack-11.实现'
            },
            {
              text: '75.webpack-2.loader',
              link: '75.webpack-2.loader'
            },
            {
              text: '75.webpack-3.源码流程',
              link: '75.webpack-3.源码流程'
            },
            {
              text: '75.webpack-4.tapable',
              link: '75.webpack-4.tapable'
            },
            {
              text: '75.webpack-5.prepare',
              link: '75.webpack-5.prepare'
            },
            {
              text: '75.webpack-6.resolve',
              link: '75.webpack-6.resolve'
            },
            {
              text: '75.webpack-7.loader',
              link: '75.webpack-7.loader'
            },
            {
              text: '75.webpack-8.module',
              link: '75.webpack-8.module'
            },
            {
              text: '75.webpack-9.chunk',
              link: '75.webpack-9.chunk'
            },
            {
              text: '76.react_optimize',
              link: '76.react_optimize'
            },
            {
              text: '77.ts_ketang_back',
              link: '77.ts_ketang_back'
            },
            {
              text: '77.ts_ketang_front',
              link: '77.ts_ketang_front'
            },
            {
              text: '78.vue-domdiff',
              link: '78.vue-domdiff'
            },
            {
              text: '79.grammar',
              link: '79.grammar'
            },
            {
              text: '80.tree',
              link: '80.tree'
            },
            {
              text: '81.axios',
              link: '81.axios'
            },
            {
              text: '82.1.react',
              link: '82.1.react'
            },
            {
              text: '82.10.umi',
              link: '82.10.umi'
            },
            {
              text: '82.11.antdesign',
              link: '82.11.antdesign'
            },
            {
              text: '82.12.ketang-back',
              link: '82.12.ketang-back'
            },
            {
              text: '82.12.ketang-front',
              link: '82.12.ketang-front'
            },
            {
              text: '82.2.react-high',
              link: '82.2.react-high'
            },
            {
              text: '82.3.react-router',
              link: '82.3.react-router'
            },
            {
              text: '82.4.redux',
              link: '82.4.redux'
            },
            {
              text: '82.5.redux_middleware',
              link: '82.5.redux_middleware'
            },
            {
              text: '82.6.connected',
              link: '82.6.connected'
            },
            {
              text: '82.7.saga',
              link: '82.7.saga'
            },
            {
              text: '82.8.dva-source',
              link: '82.8.dva-source'
            },
            {
              text: '82.8.dva',
              link: '82.8.dva'
            },
            {
              text: '82.9.roadhog',
              link: '82.9.roadhog'
            },
            {
              text: '83.upload',
              link: '83.upload'
            },
            {
              text: '84.graphql',
              link: '84.graphql'
            },
            {
              text: '85.antpro',
              link: '85.antpro'
            },
            {
              text: '86.1.uml',
              link: '86.1.uml'
            },
            {
              text: '86.2.design',
              link: '86.2.design'
            },
            {
              text: '87.postcss',
              link: '87.postcss'
            },
            {
              text: '88.react16-1',
              link: '88.react16-1'
            },
            {
              text: '89.nextjs',
              link: '89.nextjs'
            },
            {
              text: '90.react-test',
              link: '90.react-test'
            },
            {
              text: '91.react-ts',
              link: '91.react-ts'
            },
            {
              text: '92.rbac',
              link: '92.rbac'
            },
            {
              text: '93.tsnode',
              link: '93.tsnode'
            },
            {
              text: '94.1.JavaScript',
              link: '94.1.JavaScript'
            },
            {
              text: '94.2.JavaScript',
              link: '94.2.JavaScript'
            },
            {
              text: '94.3.MODULE',
              link: '94.3.MODULE'
            },
            {
              text: '94.4.EventLoop',
              link: '94.4.EventLoop'
            },
            {
              text: '94.5.文件上传',
              link: '94.5.文件上传'
            },
            {
              text: '94.6.https',
              link: '94.6.https'
            },
            {
              text: '94.7.nginx',
              link: '94.7.nginx'
            },
            {
              text: '95.1.react',
              link: '95.1.react'
            },
            {
              text: '95.2.react',
              link: '95.2.react'
            },
            {
              text: '96.1.react16',
              link: '96.1.react16'
            },
            {
              text: '96.2.fiber',
              link: '96.2.fiber'
            },
            {
              text: '96.3.fiber',
              link: '96.3.fiber'
            },
            {
              text: '97.serverless',
              link: '97.serverless'
            },
            {
              text: '98.websocket',
              link: '98.websocket'
            },
            {
              text: '100.1.react-basic',
              link: '100.1.react-basic'
            },
            {
              text: '101.1.monitor',
              link: '101.1.monitor'
            },
            {
              text: '101.2.monitor',
              link: '101.2.monitor'
            },
            {
              text: '102.java',
              link: '102.java'
            },
            {
              text: '103.1.webpack-usage',
              link: '103.1.webpack-usage'
            },
            {
              text: '103.10.webpack-hand',
              link: '103.10.webpack-hand'
            },
            {
              text: '103.11.mf',
              link: '103.11.mf'
            },
            {
              text: '103.11.webpack-hmr',
              link: '103.11.webpack-hmr'
            },
            {
              text: '103.11.webpack5',
              link: '103.11.webpack5'
            },
            {
              text: '103.13.splitChunks',
              link: '103.13.splitChunks'
            },
            {
              text: '103.14.webpack-sourcemap',
              link: '103.14.webpack-sourcemap'
            },
            {
              text: '103.15.webpack-compiler1',
              link: '103.15.webpack-compiler1'
            },
            {
              text: '103.15.webpack-compiler2',
              link: '103.15.webpack-compiler2'
            },
            {
              text: '103.16.rollup.1',
              link: '103.16.rollup.1'
            },
            {
              text: '103.16.rollup.2',
              link: '103.16.rollup.2'
            },
            {
              text: '103.16.rollup.3',
              link: '103.16.rollup.3'
            },
            {
              text: '103.16.vite.1',
              link: '103.16.vite.1'
            },
            {
              text: '103.16.vite.2',
              link: '103.16.vite.2'
            },
            {
              text: '103.16.vite.basic',
              link: '103.16.vite.basic'
            },
            {
              text: '103.16.vite.plugin',
              link: '103.16.vite.plugin'
            },
            {
              text: '103.16.vite.source',
              link: '103.16.vite.source'
            },
            {
              text: '103.17.polyfill',
              link: '103.17.polyfill'
            },
            {
              text: '103.2.webpack-bundle',
              link: '103.2.webpack-bundle'
            },
            {
              text: '103.3.webpack-ast',
              link: '103.3.webpack-ast'
            },
            {
              text: '103.4.webpack-flow',
              link: '103.4.webpack-flow'
            },
            {
              text: '103.5.webpack-loader',
              link: '103.5.webpack-loader'
            },
            {
              text: '103.6.webpack-tapable',
              link: '103.6.webpack-tapable'
            },
            {
              text: '103.7.webpack-plugin',
              link: '103.7.webpack-plugin'
            },
            {
              text: '103.8.webpack-optimize1',
              link: '103.8.webpack-optimize1'
            },
            {
              text: '103.9.webpack-optimize2',
              link: '103.9.webpack-optimize2'
            },
            {
              text: '104.1.binary',
              link: '104.1.binary'
            },
            {
              text: '104.2.binary',
              link: '104.2.binary'
            },
            {
              text: '105.skeleton',
              link: '105.skeleton'
            },
            {
              text: '106.1.react',
              link: '106.1.react'
            },
            {
              text: '106.10.ketang',
              link: '106.10.ketang'
            },
            {
              text: '106.11.antdesign',
              link: '106.11.antdesign'
            },
            {
              text: '106.12.antpro',
              link: '106.12.antpro'
            },
            {
              text: '106.13.router-6',
              link: '106.13.router-6'
            },
            {
              text: '106.14.ssr',
              link: '106.14.ssr'
            },
            {
              text: '106.15.nextjs',
              link: '106.15.nextjs'
            },
            {
              text: '106.16.1.cms',
              link: '106.16.1.cms'
            },
            {
              text: '106.16.2.cms',
              link: '106.16.2.cms'
            },
            {
              text: '106.16.3.cms',
              link: '106.16.3.cms'
            },
            {
              text: '106.16.4.cms',
              link: '106.16.4.cms'
            },
            {
              text: '106.16.mobx',
              link: '106.16.mobx'
            },
            {
              text: '106.17.fomily',
              link: '106.17.fomily'
            },
            {
              text: '106.2.react_hooks',
              link: '106.2.react_hooks'
            },
            {
              text: '106.3.react_router',
              link: '106.3.react_router'
            },
            {
              text: '106.4.redux',
              link: '106.4.redux'
            },
            {
              text: '106.5.redux_middleware',
              link: '106.5.redux_middleware'
            },
            {
              text: '106.6.connected-react-router',
              link: '106.6.connected-react-router'
            },
            {
              text: '106.6.redux-first-history',
              link: '106.6.redux-first-history'
            },
            {
              text: '106.7.redux-saga',
              link: '106.7.redux-saga'
            },
            {
              text: '106.8.dva',
              link: '106.8.dva'
            },
            {
              text: '106.9.umi',
              link: '106.9.umi'
            },
            {
              text: '107.fiber',
              link: '107.fiber'
            },
            {
              text: '108.http',
              link: '108.http'
            },
            {
              text: '109.1.webpack_usage',
              link: '109.1.webpack_usage'
            },
            {
              text: '109.2.webpack_source',
              link: '109.2.webpack_source'
            },
            {
              text: '109.3.dll',
              link: '109.3.dll'
            },
            {
              text: '110.nest.js',
              link: '110.nest.js'
            },
            {
              text: '111.xstate',
              link: '111.xstate'
            },
            {
              text: '112.Form',
              link: '112.Form'
            },
            {
              text: '113.redux-saga',
              link: '113.redux-saga'
            },
            {
              text: '114.react+typescript',
              link: '114.react+typescript'
            },
            {
              text: '115.immer',
              link: '115.immer'
            },
            {
              text: '116.pro5',
              link: '116.pro5'
            },
            {
              text: '117.css-loader',
              link: '117.css-loader'
            },
            {
              text: '118.1.umi-core',
              link: '118.1.umi-core'
            },
            {
              text: '119.1.module-federation',
              link: '119.1.module-federation'
            },
            {
              text: '119.2.module-federation',
              link: '119.2.module-federation'
            },
            {
              text: '120.create-react-app',
              link: '120.create-react-app'
            },
            {
              text: '121.react-scripts',
              link: '121.react-scripts'
            },
            {
              text: '122.react-optimize',
              link: '122.react-optimize'
            },
            {
              text: '123.jsx-runtime',
              link: '123.jsx-runtime'
            },
            {
              text: '124.next.js',
              link: '124.next.js'
            },
            {
              text: '125.1.linux',
              link: '125.1.linux'
            },
            {
              text: '125.10.nginx',
              link: '125.10.nginx'
            },
            {
              text: '125.11.docker',
              link: '125.11.docker'
            },
            {
              text: '125.12.ci',
              link: '125.12.ci'
            },
            {
              text: '125.13.k8s',
              link: '125.13.k8s'
            },
            {
              text: '125.14.k8s',
              link: '125.14.k8s'
            },
            {
              text: '125.15.k8s',
              link: '125.15.k8s'
            },
            {
              text: '125.16.k8s',
              link: '125.16.k8s'
            },
            {
              text: '125.2.linux-vi',
              link: '125.2.linux-vi'
            },
            {
              text: '125.3.linux-user',
              link: '125.3.linux-user'
            },
            {
              text: '125.4.linux-auth',
              link: '125.4.linux-auth'
            },
            {
              text: '125.5.linux-shell',
              link: '125.5.linux-shell'
            },
            {
              text: '125.6.linux-install',
              link: '125.6.linux-install'
            },
            {
              text: '125.7.linux-system',
              link: '125.7.linux-system'
            },
            {
              text: '125.8.linux-service',
              link: '125.8.linux-service'
            },
            {
              text: '125.9.linux-network',
              link: '125.9.linux-network'
            },
            {
              text: '126.11.react-1',
              link: '126.11.react-1'
            },
            {
              text: '126.12.react-2',
              link: '126.12.react-2'
            },
            {
              text: '126.12.react-3',
              link: '126.12.react-3'
            },
            {
              text: '126.12.react-4',
              link: '126.12.react-4'
            },
            {
              text: '126.12.react-5',
              link: '126.12.react-5'
            },
            {
              text: '126.12.react-6',
              link: '126.12.react-6'
            },
            {
              text: '126.12.react-7',
              link: '126.12.react-7'
            },
            {
              text: '126.12.react-8',
              link: '126.12.react-8'
            },
            {
              text: '127.frontend',
              link: '127.frontend'
            },
            {
              text: '128.rollup',
              link: '128.rollup'
            },
            {
              text: '129.px2rem-loader',
              link: '129.px2rem-loader'
            },
            {
              text: '130.health',
              link: '130.health'
            },
            {
              text: '131.hooks',
              link: '131.hooks'
            },
            {
              text: '132.keepalive',
              link: '132.keepalive'
            },
            {
              text: '133.vue-cli',
              link: '133.vue-cli'
            },
            {
              text: '134.2.react18',
              link: '134.2.react18'
            },
            {
              text: '134.3.react18',
              link: '134.3.react18'
            },
            {
              text: '134.react18',
              link: '134.react18'
            },
            {
              text: '135.function',
              link: '135.function'
            },
            {
              text: '136.toolkit',
              link: '136.toolkit'
            },
            {
              text: '137.lerna',
              link: '137.lerna'
            },
            {
              text: '138.create-vite',
              link: '138.create-vite'
            },
            {
              text: '139.cli',
              link: '139.cli'
            },
            {
              text: '140.antd',
              link: '140.antd'
            },
            {
              text: '141.react-dnd',
              link: '141.react-dnd'
            },
            {
              text: '142.1.link',
              link: '142.1.link'
            },
            {
              text: '143.1.gulp',
              link: '143.1.gulp'
            },
            {
              text: '143.2.stream',
              link: '143.2.stream'
            },
            {
              text: '143.3.gulp',
              link: '143.3.gulp'
            },
            {
              text: '144.1.closure',
              link: '144.1.closure'
            },
            {
              text: '144.2.v8',
              link: '144.2.v8'
            },
            {
              text: '144.3.gc',
              link: '144.3.gc'
            },
            {
              text: '145.react-router-v6',
              link: '145.react-router-v6'
            },
            {
              text: '146.browser',
              link: '146.browser'
            },
            {
              text: '147.lighthouse',
              link: '147.lighthouse'
            },
            {
              text: '148.1.basic',
              link: '148.1.basic'
            },
            {
              text: '148.2.basic',
              link: '148.2.basic'
            },
            {
              text: '148.3.basic',
              link: '148.3.basic'
            },
            {
              text: '148.4.basic',
              link: '148.4.basic'
            },
            {
              text: '148.5.basic',
              link: '148.5.basic'
            },
            {
              text: '149.1.vite',
              link: '149.1.vite'
            },
            {
              text: '149.2.vite',
              link: '149.2.vite'
            },
            {
              text: '149.3.vite',
              link: '149.3.vite'
            },
            {
              text: '149.4.vite',
              link: '149.4.vite'
            },
            {
              text: '150.react-window',
              link: '150.react-window'
            },
            {
              text: '151.react-query',
              link: '151.react-query'
            },
            {
              text: '152.useRequest',
              link: '152.useRequest'
            },
            {
              text: '153.transition',
              link: '153.transition'
            },
            {
              text: '154.emotion',
              link: '154.emotion'
            },
            {
              text: '155.1.formily',
              link: '155.1.formily'
            },
            {
              text: '155.2.formily',
              link: '155.2.formily'
            },
            {
              text: '155.3.1.mobx.usage',
              link: '155.3.1.mobx.usage'
            },
            {
              text: '155.3.2.mobx.source',
              link: '155.3.2.mobx.source'
            },
            {
              text: '155.3.formily',
              link: '155.3.formily'
            },
            {
              text: '156.vue-loader',
              link: '156.vue-loader'
            },
            {
              text: '157.1.react18',
              link: '157.1.react18'
            },
            {
              text: '158.umi4',
              link: '158.umi4'
            },
            {
              text: '159.rxjs',
              link: '159.rxjs'
            },
            {
              text: '159.rxjs2',
              link: '159.rxjs2'
            },
            {
              text: '160.bff',
              link: '160.bff'
            },
            {
              text: '161.zustand',
              link: '161.zustand'
            },
            {
              text: '162.vscode',
              link: '162.vscode'
            },
            {
              text: '163.emp',
              link: '163.emp'
            }
          ]
        }
      ]
    },
    repo: 'https://github.com/yutao721/note'
  }),
  bundler: viteBundler(),
})