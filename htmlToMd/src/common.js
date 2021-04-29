let request = require('request');
let fs = require('fs');

class Ut {
  /**
   * 下载网络图片
   * @param {object} opts
   */
  static downImg(opts = {}, path = '') {
    return new Promise((resolve, reject) => {
      let type = ''
      request({ ...opts, encoding: null }, (err, response, body) => {
        type = response.headers['content-type'].split('/')[1]
        fs.writeFileSync(path + '.' + type, body, { encoding: 'binary' });
        resolve(type);
      })
    })
  };
}

module.exports = Ut;
