const cheerio = require('cheerio');
module.exports = function ZhihuHandleService(document) {
  let $ = cheerio.load(document);
  let root = $('#root')
  let elementsByClass = root.find('.RichText.ztext.Post-RichText');
  if (elementsByClass.length == 0) {
    return console.log('该类文章不支持解析')
  } else {
    return $('.RichText.ztext.Post-RichText')
  }
}
