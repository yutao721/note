const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const PORT = 8888;
const MarkDown = require('./src/markDown.js')

app.listen(8888, () => {
  console.log(`THE WEB SERVICE IS CREATED SUCCESSFULLY AND IS LISTENING TO THE PORT：${PORT}`);
})

// 允许所有的请求形式
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false, limit: '1024mb' }));

// 测试
app.get('/', function(req, res) {
  res.send('Hello world!');
});

// 表单
app.post('/resolve/mark', async (req, res) => {
  let query = req.body;
  console.log('开始解析 \n请求地址为: ' + query.blogUrl);
  try {
    let markDown = new MarkDown(query);
    let result = await markDown.init();
    res.send({
      code: 0,
      markDown: result
    })
  } catch (e) {
    res.send({
      code: 1,
      msg: '解析错误',
      markDown: e
    })
  }
})
