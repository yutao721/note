const html2md = require('html-to-md')
const cheerio = require('cheerio')
// console.log(JSSoup.connect('https://juejin.cn/post/6844903591208058888').get());
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
let Ut = require('./common');

const request = require('request')

const http = (uri) => {
  return new Promise((resolve, reject) => {
    request({
      uri: uri,
      method: 'GET'
    }, (err, response, body) => {
      if (err) {
        console.log(err)
      }
      resolve(body)
    })
  })
}
let target = 'https://juejin.cn/post/6953868764362309639';

http(target).then(html => {
  const $ = cheerio.load(html);
  let imgs = $('.article-content').find('img');
  console.log(imgs.length);
  let stamp = Date.now();
  imgs.each((i, item) => {
    let opts = { url: item.attribs.src };
    let path = '/work/images/images/' + stamp + i + '.jpg';
    Ut.downImg(opts, path)
    item.attribs.src = 'https://gitee.com/yutao618/images/raw/master/images/' + stamp + i + '.jpg'
  })
  let content = $('.article-content').find('.copy-code-btn').remove().end().html();
  console.log(content);
})




