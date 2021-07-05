const http = require('http')
const url = require('url');
const fs = require('fs')
const path = require('path')
const port = 9999;
const server = http.createServer((req, res) => {
  let { pathname } = url.parse(req.url);
  let extname = path.extname(pathname);
  console.log(pathname);
  console.log(extname);
  // api
  if (pathname.startsWith('/api')) {
    if (pathname == '/api/user') {
      const method = req.method;
      if (method === 'GET') {
        const resData = [
          {
            id: 1,
            name: '小明',
            age: 18
          },
          {
            id: 2,
            name: '小红',
            age: 19
          }
        ];
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify(resData))
      }
    }
  }

  if (extname === '.jpg') {
    // 使用fs模块读取文件
    fs.readFile(path.join(__dirname, pathname), (err, data) => {
      res.setHeader('Content-Type', 'image/jpeg');
      res.write(data);
      res.end();
    })
  }

})
server.listen(port, () => {
  console.log(`Server is running on http://127.0.0.1:${port}/`)
})
