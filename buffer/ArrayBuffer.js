

// 创建一个buffer
const arrayBuffer = new ArrayBuffer(8);

// 静态方法
const isView = ArrayBuffer.isView(new DataView(arrayBuffer)); // true
console.log(isView); 

// 实例属性
console.log(arrayBuffer.byteLength); // 8
console.log(arrayBuffer.detached); 
console.log(arrayBuffer.maxByteLength); 
console.log(arrayBuffer.resizable); 





// const view = new DataView(arrayBuffer);

