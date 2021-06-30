const cheerio = require('cheerio');
module.exports = function WeixinHandleService(document) {
  let $ = cheerio.load(document);
  return $('#js_content');
}
