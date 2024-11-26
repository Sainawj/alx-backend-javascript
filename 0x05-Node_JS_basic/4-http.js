const http = require('http');

const PORT = 1245;
const HOST = 'localhost';
const app = http.createServer();

// Handle incoming requests
app.on('request', (_, res) => {
  const responseText = 'Hello Holberton School!';

  // Set response headers
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', responseText.length);
  res.statusCode = 200;

  // Send response
  res.write(Buffer.from(responseText));
});

// Start the server
app.listen(PORT, HOST, () => {
  console.log(`Server listening at -> http://${HOST}:${PORT}`);
});

module.exports = app;
