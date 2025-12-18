
const WebSocketServer = require('ws').Server;
const wss = new WebSocketServer({ port: 8082 });
console.log('WebSocket server started on ws://localhost:8082');

// Connection
wss.on('connection', function(socket) {
    console.log('New client connected');

    // Message received from client
    socket.on('message', function (message) {
        console.log('received: %s', message);
        
        
        socket.send(`Echo: ${message}`);
    });

    // Client disconnected
    socket.on('close', function() {
        console.log('Client disconnected');
    });

    setInterval(() => {
        socket.send('Welcome to the WebSocket server!');
    }, 1000);
});