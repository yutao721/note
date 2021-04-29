const cheerio = require('cheerio');
const Ut = require('./common');
const request = require('request');
const html2md = require('html-to-md');
const MarkDownHandleService = require('./ImpI/MarkDownHandleService');

const http = (uri) => {
  return new Promise((resolve, reject) => {
    request({ uri: uri, method: 'GET' }, (err, response, body) => {
      if (err) {
        reject(err)
      }
      resolve(body)
    })
  })
}

class MarkDown {
  constructor(options) {
    let { blogUrl, imagePath, imageUrl, imageName } = options;
    this.blogUrl = blogUrl;
    this.imagePath = imagePath;
    this.imageUrl = imageUrl;
    this.imageName = imageName;
  }

  getDocument(blogUrl) {
    return new Promise((resolve, reject) => {
      http(blogUrl).then(document => {
        resolve(document);
      }).catch(err => {
        console.log(err);
        reject(err)
      })
    })
  }

  async init() {
    // 1.拿到文章 html格式
    this.document = await this.getDocument(this.blogUrl);

    // 2.提取 Document 中的博文信息 虚拟dom树
    this.content = this.getHtmlContent(this.document)

    // 3.处理图片并下载图片到本地
    let result = await this.handleImages(this.content);
    console.log('解析完毕')
    return html2md(result);
  }

  async handleImages(content) {
    return new Promise((resolve => {
      let images = content.find('img');
      this.downLoad(images).then(() => {
        resolve(content.html())
      })
    }))
  }

  getHtmlContent(document) {
    let markDownHandleService = new MarkDownHandleService(document);
    return markDownHandleService.getHtmlContent(this.blogUrl);
  }

  downLoad(images) {
    let self = this;
    let len = images.length;
    let j = 0;
    return new Promise((resolve => {
      let stamp = Date.now();
      for (let i = 0; i < images.length; i++) {
        let item = images[i];
        let opts = {
          url: item.attribs.src,
          headers: {
            'Referer': 'https://juejin.cn/'
          }
        };
        let path = self.imagePath + self.imageName + stamp + i;
        Ut.downImg(opts, path).then(type => {
          item.attribs.src = `${self.imageUrl}${self.imageName + stamp + i}.${type}`;
          j++;
          if (j == len) {
            resolve(j)
          }
        });
      }
    }))
  }
}

module.exports = MarkDown
