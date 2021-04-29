const cheerio = require('cheerio');
module.exports = function JuejinHandleService(document) {
  let $ = cheerio.load(document);
  return $('.article-content').find('.copy-code-btn').remove().end()
}
