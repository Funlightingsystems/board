const WebSocket = require('ws');

// Create the WebSocket servers
const wssIncoming = new WebSocket.Server({ port: 8080 });
const wssOutgoing = new WebSocket.Server({ port: 8081 });

// Handle incoming WebSocket connections
wssIncoming.on('connection', (ws) => {
  console.log('Incoming client connected');

  // Handle messages received from the incoming client
  ws.on('message', (message) => {
    console.log('Received:', message);
    // Send the received message to the outgoing clients
    wssOutgoing.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });

  // Handle WebSocket connection close
  ws.on('close', () => {
    console.log('Incoming client disconnected');
  });
});

console.log('Incoming WebSocket server running on port 8080');

// Handle outgoing WebSocket connections
wssOutgoing.on('connection', (ws) => {
  console.log('Outgoing client connected');

  // Handle messages received from the outgoing client (optional)
  ws.on('message', (message) => {
    console.log('Outgoing client sent:', message);
    // Do something with the received message
  });

  // Handle WebSocket connection close
  ws.on('close', () => {
    console.log('Outgoing client disconnected');
  });
});

console.log('Outgoing WebSocket server running on port 8081');
