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
    let { blogUrl, imagePath, imageUrl, imageName, isDown } = options;
    this.blogUrl = blogUrl;
    this.imagePath = imagePath;
    this.imageUrl = imageUrl;
    this.imageName = imageName;
    this.isDown = isDown
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
    this.content = this.getHtmlContent(this.document);

    // 3.处理图片并下载图片到本地, 需要判断是否下载
    let result;
    if (!this.isDown) {
      // 使用原文图片地址
      result = this.content.html();
    } else {
      // 使用自己下载的图片以及自己图床地址
      result = await this.handleImages(this.content);
    }
    console.log('解析完毕')
    return html2md(result);
  }

  async handleImages(content) {
    return new Promise((resolve => {
      let images = content.find('img');
      console.log(`共有${images.length}需要下载`)
      if (!images.length) return;
      console.log(`开始下载图片`)
      this.downLoad(images).then(() => {
        resolve(content.html())
      })
    }))
  }

  getHtmlContent(document) {
    let markDownHandleService = new MarkDownHandleService(document);
    return markDownHandleService.getHtmlContent(this.blogUrl);
  }

  // 下载图片
  downLoad(images) {
    let self = this;
    let len = images.length;
    let j = 0;
    return new Promise((resolve => {
      let stamp = Date.now();
      for (let i = 0; i < images.length; i++) {
        let item = images[i];

        let imageSrc = item.attribs.src

        if (imageSrc && imageSrc.startsWith('data:image/svg+xml;utf8')) {
          console.log(`该地址是base64取data-src`)
          imageSrc = item.attribs['data-src'];
        }

        if (!imageSrc) {
          imageSrc = item.attribs['data-src']
        }

        // 如果不存在 data-src，则尝试获取 data-original-src
        if (!imageSrc) {
          imageSrc = item.attribs['data-original-src']
        }

        // 如果不存在 data-src，则尝试获取 data-original-src
        if (!imageSrc) {
          imageSrc = item.attribs['data-actualsrc']
        }

        // 有些图片没有 http
        if (imageSrc && imageSrc.startsWith('//')) {
          imageSrc = 'http:' + imageSrc;
        }
        // segmentFault
        if (imageSrc && imageSrc.startsWith('/img/remote')) {
          imageSrc = 'https://segmentfault.com' + imageSrc;
        }

        console.log(`第${i + 1}张图片地址是${imageSrc}`)
        // 图片没有任何地址跳过
        if (!imageSrc) j++;
        if (imageSrc) {
          let opts = { url: imageSrc, headers: {} };
          let path = self.imagePath + self.imageName + stamp + i;
          Ut.downImg(opts, path).then(type => {
            console.log(`第${i + 1}张图片下载完成`)
            item.attribs.src = `${self.imageUrl}${self.imageName + stamp + i}.${type}`;
            j++;
            if (j == len) {
              resolve(j)
              console.log(`所有图片下载完成`)
            }
          });
        }
      }
    }))
  }
}

module.exports = MarkDown
