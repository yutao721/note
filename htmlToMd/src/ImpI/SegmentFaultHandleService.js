const cheerio = require('cheerio');
module.exports = function SegmentFaultHandleService(document) {
  let $ = cheerio.load(document);
  return $('article');
}
