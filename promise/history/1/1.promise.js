const Promise = require('./promise')

let p = new Promise((resolve, reject) => {
  console.log('start')
  resolve('jiaHang')
})
p.then((res) => {
  console.log('success:' + res);
}, (err) => {
  console.log('fail' + err);
})

p.then((res) => {
  console.log('success:' + res);
}, (err) => {
  console.log('fail' + err);
})

console.log('end')
