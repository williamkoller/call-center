const server = require('http').createServer();
const io = require('socket.io')(server);

io.on('connection', socket => {
  const code = `${Math.floor(Math.random() * 999999 )}`.padEnd(6, '0');
  socket.emit('code', code);
  socket.emit('status', 'waiting_call');
});

server.listen(3001);