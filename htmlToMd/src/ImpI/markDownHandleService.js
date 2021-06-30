const JuejinHandleService = require('./JuejinHandleService')
const ZhihuHandleService = require('./ZhihuHandleService')
const CSDNHandleService = require('./CSDNHandleService')
const SegmentFaultHandleService = require('./SegmentFaultHandleService')
const WeixinHandleService = require('./WeixinHandleService')

class MarkDownHandleService {
  constructor(document) {
    this.document = document;
  }

  getHtmlContent(blogUrl) {
    if (blogUrl.includes('juejin')) {
      return JuejinHandleService(this.document)
    } else if (blogUrl.includes('zhihu')) {
      return ZhihuHandleService(this.document)
    } else if (blogUrl.includes('csdn')) {
      return CSDNHandleService(this.document)
    } else if (blogUrl.includes('segmentfault')) {
      return SegmentFaultHandleService(this.document)
    }else if (blogUrl.includes('weixin')) {
      return WeixinHandleService(this.document)
    }
  }

}

module.exports = MarkDownHandleService
