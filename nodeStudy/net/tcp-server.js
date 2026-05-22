const net = require('net');

// 创建 TCP 服务器
const server = net.createServer((socket) => {
  console.log('客户端已连接');

  // 获取客户端信息
  const clientAddress = socket.address();
  console.log(`客户端地址: ${clientAddress.address}:${clientAddress.port}`);

  // 监听客户端发送的数据
  socket.on('data', (data) => {
    console.log('收到客户端数据:', data.toString());

    // 回复客户端
    socket.write('服务器收到: ' + data.toString());
  });

  // 监听客户端断开连接
  socket.on('end', () => {
    console.log('客户端已断开连接');
  });

  // 监听错误
  socket.on('error', (err) => {
    console.error('Socket错误:', err);
  });
});

// 尝试使用 8080 端口，如果被占用则使用 8081
const tryPort = 6666;

function startServer(port) {
  server.listen(port, '127.0.0.1', () => {
    console.log(`TCP 服务器已启动，监听 127.0.0.1:${port}`);

    // 获取服务器地址信息
    const serverAddress = server.address();
    console.log(`服务器地址: ${serverAddress.address}:${serverAddress.port}`);
  });

  // 监听服务器错误
  server.on('error', (err) => {
    console.error('服务器错误:', err);

    // 如果端口已被占用，尝试下一个端口
    if (err.code === 'EADDRINUSE') {
      console.log(`端口 ${port} 已被占用，尝试使用端口 ${port + 1}...`);
      startServer(port + 1);
    }
  });
}

startServer(tryPort);
