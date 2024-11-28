// Import the express module to create the application
const express = require('express');

// Create an instance of the express application
const app = express();

// Set the port for the application to listen on
const port = 7865;

// Middleware to parse incoming JSON requests
app.use(express.json());

// Route to handle GET requests to the root URL
app.get('/', (request, response) => {
  // Respond with a welcome message for the payment system
  response.send('Welcome to the payment system');
});

// Route to handle GET requests for cart pages with numeric cart IDs
app.get('/cart/:id([0-9]+)', (request, response) => {
    // Respond with a message that includes the cart ID from the URL parameter
    response.send(`Payment methods for cart ${request.params.id}`);
});

// Route to handle GET requests to check available payment methods
app.get('/available_payments', (request, response) => {
    // Set the Content-Type header to application/json
    response.set("Content-Type", "application/json");
    
    // Define the available payment methods
    const payMethods = {
        payment_methods: {
            credit_cards: true,
            paypal: false
        }
    };

    // Send the available payment methods as a JSON response
    response.send(payMethods);
});

// Route to handle POST requests for user login
app.post('/login', (request, response) => {
    // Get the userName from the request body
    const userName = request.body.userName;
    
    // Check if a userName was provided
    if (userName) {
        // If userName exists, send a welcome message with the user name
        response.send(`Welcome ${userName}`);
    } else {
        // If userName is not provided, send a 404 Not Found response
        response.status(404).send();
    }
});

// Start the server and listen on the specified port
app.listen(port, () => {
    // Log a message indicating that the API is available on the given port
    console.log(`API available on localhost port ${port}`);
});

// Export the app module to be used in other files, such as tests
module.exports = app;
