const net = require("net");
const strftime = require("strftime");
const server = net.createServer((socket) => {
  socket.end(strftime("%F %R", new Date()).toString() + "\n");
});
server.listen(process.argv[2]);
