const express = require('express');
const path = require('path');
const compression = require('compression');
const expressStaticGzip = require('express-static-gzip');

const app = express();

// Enable compression
app.use(compression());

// Serve static files with gzip compression
app.use('/', expressStaticGzip('build', {
  enableBrotli: true,
  orderPreference: ['br', 'gz']
}));

// Handle all routes for client-side routing
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});