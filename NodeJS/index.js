const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const fs = require('fs');

const app = express();

// Serve static files from the 'public' folder
app.use(express.static('public'));

// Read fixtures data from the database
let fixtures = [];
try {
  const data = fs.readFileSync('data.json');
  fixtures = JSON.parse(data);
} catch (error) {
  console.error('Error reading data.json:', error);
}

// Function to broadcast fixtures data to connected clients
function broadcastFixtures() {
  const message = JSON.stringify(fixtures);
  wssFixtures.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(message);
    }
  });
}

// Create HTTP server
const server = http.createServer(app);

// Create WebSocket server for fixtures data
const wssFixtures = new WebSocket.Server({ noServer: true });

// Handle WebSocket upgrade request for fixtures
server.on('upgrade', (request, socket, head) => {
  const pathname = request.url;

  if (pathname === '/fixtures') {
    wssFixtures.handleUpgrade(request, socket, head, (ws) => {
      wssFixtures.emit('connection', ws, request);
    });
  } else {
    socket.destroy();
  }
});

// Handle WebSocket connections for fixtures
wssFixtures.on('connection', (ws) => {
  ws.send(JSON.stringify(fixtures));

  ws.on('message', (message) => {
    try {
      const { id, value } = JSON.parse(message);

      const fixture = fixtures.find((f) => f.id === id);
      if (fixture) {
        fixture.value = value;
        broadcastFixtures();

        console.log(`Received data for fixture ${id}. Value: ${value}`);
      }
    } catch (error) {
      console.error('Error parsing incoming data:', error);
    }
  });
});

// Start the server
server.listen(8080, () => {
  console.log('Server started on port 8080');
});
