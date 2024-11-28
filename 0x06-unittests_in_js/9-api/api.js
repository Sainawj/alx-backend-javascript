// Import the express module to create the application
const express = require('express');

// Initialize a new express application
const app = express();

// Define the port number the app will listen to
const port = 7865;

// Define a route for the root URL ('/') that responds with a welcome message
app.get('/', (request, response) => {
  response.send('Welcome to the payment system');  // Send a welcome message to the client
});

// Define a route for the '/cart/:id' URL, where :id is a parameter that should be a number
app.get('/cart/:id([0-9]+)', (request, response) => {
    // Send a message with the cart ID from the request parameters
    response.send(`Payment methods for cart ${request.params.id}`);
});

// Start the server and listen on the specified port
app.listen(port, () => {
    // Log a message to the console when the API is up and running
    console.log(`API available on localhost port ${port}`);
});

// Export the app module for use in other files (e.g., for testing purposes)
module.exports = app;
