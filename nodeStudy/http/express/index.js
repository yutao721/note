const express = require('express');
const app = express();
console.log(app);
const port = 9998
const fs = require('fs');
const url = require('url');
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.use((req, res, next) => {
  const urlObject = url.parse(req.url);
  const { pathname } = urlObject;
  console.log(`request path: ${pathname}`);
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World1!');
})

app.get('/api/users', (req, res) => {
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
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(resData));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
