module.exports = {
  title: 'jiaHang的博客',
  description: '专注前端技术栈分享，做一个爱折腾的前端',
  themeConfig: {
    nav: [
      { text: "主页", link: "/" },
      { text: "前端", link: "/web/" },
      { text: "面试问题", link: "/interview/" }
    ],
    sidebar: {
      "/web/":[
        {
          title: "JavaScript",
          collabsable: false,
          children: [
            {title: 'new', path:'/web/js/new'}
          ]
        }
      ]
    }
  }
}