let p1 = new Promise((resolve,reject)=>{
  resolve(100);
})

let promise2 = p1.then((data)=>{
  console.log(data);
},err=>{
  console.log('err',err);
}).then((data)=>{
  console.log(data);
},err=>{
  console.log('err',err);
})
