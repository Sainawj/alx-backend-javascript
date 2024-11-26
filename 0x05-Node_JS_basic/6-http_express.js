// Importing express module
const express = require('express');

// Creating express app
const app = express();

// Defining the port
const PORT = 1245;

// Handling GET request for root route
app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

// Starting server on specified port
app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

// Exporting app
module.exports = app;
