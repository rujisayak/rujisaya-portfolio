require('dotenv').config();
const path = require('path');
const express = require('express');
const app = require('./api/index.js');

const PORT = process.env.PORT || 3000;

// Specific route for /projects archive page
app.get('/projects', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'projects.html'));
});

// Serve static frontend files
app.use(express.static(path.join(__dirname, 'public')));

// Catch-all for SPA
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Portfolio server is running locally at http://localhost:${PORT}`);
});
