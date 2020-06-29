let p1 = new Promise((resolve, reject) => {
  resolve(100);
})

let p2 = p1.then().then().then((res) => {
  console.log(res);
})
