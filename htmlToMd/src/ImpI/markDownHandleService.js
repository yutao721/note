const JuejinHandleService = require('./JuejinHandleService')

class MarkDownHandleService {
  constructor(document) {
    this.document = document;
  }

  getHtmlContent(blogUrl) {
    if (blogUrl.includes('juejin')) {
      return JuejinHandleService(this.document)
    }
  }

}

module.exports = MarkDownHandleService
