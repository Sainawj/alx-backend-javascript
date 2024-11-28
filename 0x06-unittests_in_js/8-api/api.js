// Import the express module to create the web server
const express = require('express');

// Create an instance of an Express application
const app = express();

// Define the port number on which the server will listen
const port = 7865;

// Define a route for the root path ('/')
app.get('/', (request, response) => {
  // Send a simple welcome message when the root path is accessed
  response.send('Welcome to the payment system');
});

// Start the server and listen on the specified port
app.listen(port, () => {
    // Log a message to the console when the server starts successfully
    console.log("API available on localhost port 7865");
});

// Export the app object for use in other modules or tests
module.exports = app;
