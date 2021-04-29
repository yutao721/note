let request = require('request');
let fs = require('fs');

var img_src = 'https://www.baidu.com/img/bd_logo1.png'; //获取图片的url
let type = ''
request
  .get(img_src)
  .on('response', function(response) {
    console.log(response.statusCode) // 200
    let contentType = response.headers['content-type']
    console.log(contentType);
    console.log(JSON.stringify(response));
    type = contentType.split('/')[1];
    fs.createWriteStream(`doodle.${type}`)
  })


