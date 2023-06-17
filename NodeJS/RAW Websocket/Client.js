const WebSocket = require('ws');

const ws = new WebSocket('ws://10.0.0.28:8080');

ws.on('open', function connection() {
  console.log('Connected to WebSocket server');
});

ws.on('message', function incoming(message) {
  const messageStr = message.toString('utf8');
  console.log('Received message:', messageStr);
});

ws.on('close', function close() {
  console.log('Disconnected from WebSocket server');
});
