const webSocket = require("ws");
const server = webSocket.Server;

const wss = new server({ port: 8082 });

wss.on("connection", function (socket) {
  socket.on("message", function (message) {
    console.log(message);
    socket.send(`Echo: ${message}`);
  });

  socket.on("close", function () {
    console.log("Client disconnected");
  });
});

console.log("WebSocket server is running on ws://localhost:8082");
