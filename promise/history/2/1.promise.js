const Promise = require('./promise')
let p = new Promise((resolve, reject) => {
  console.log('start')
  resolve('jiaHang')
  // reject('jiaHang')
})
p.then((res) => {
  console.log('success:' + res);
  return new Promise((resolve, reject) => {
    resolve(2)
  })
}, (err) => {
  console.log('fail' + err);
}).then((res) => {
  console.log('success:' + res);
}, (err) => {
  console.log('fail' + err);
})
