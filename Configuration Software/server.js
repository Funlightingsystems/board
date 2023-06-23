const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const cors = require('cors'); // Import the cors middleware

const app = express();
app.use(bodyParser.json());

const dataFilePath = path.join(__dirname, 'configurations.json');

// Load configurations from JSON file
function loadConfigurations() {
  try {
    const data = fs.readFileSync(dataFilePath, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    console.error('Error loading configurations:', err);
    return {};
  }
}

// Save configurations to JSON file
function saveConfigurations() {
  try {
    fs.writeFileSync(dataFilePath, JSON.stringify(configurations, null, 2), 'utf8');
    console.log('Configurations saved successfully.');
  } catch (err) {
    console.error('Error saving configurations:', err);
  }
}

// Sample data store for configurations
let configurations = loadConfigurations();

// Enable CORS for all routes
app.use(cors());

// POST request to save configuration for a specific light
app.post('/lights/:serialNumber', (req, res) => {
  const serialNumber = req.params.serialNumber;
  const { type, patch, colour } = req.body;
  const config = { serialNumber, type, patch, colour };
  configurations[serialNumber] = config;
  saveConfigurations();
  res.sendStatus(200);
});

// GET request to retrieve configuration for a specific light
app.get('/lights/:serialNumber', (req, res) => {
  const serialNumber = req.params.serialNumber;
  const config = configurations[serialNumber];
  if (config) {
    res.json(config);
  } else {
    res.sendStatus(404);
  }
});

// Serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});



// GET request to display the entire code
app.get('/lights', (req, res) => {
  fs.readFile(__filename, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      res.sendStatus(500);
    } else {
      res.send(data);
    }
  });
});

app.listen(3000, () => {
  console.log('API server is running on http://localhost:3000');
});
