const cheerio = require('cheerio');
module.exports = function CSDNHandleService(document) {
  let $ = cheerio.load(document);
  return $('#content_views');
}
