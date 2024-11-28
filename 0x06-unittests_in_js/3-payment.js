// Import the 'Utils' module to use its utility functions
const Utils = require("./utils");

// Function to send a payment request to the API
function sendPaymentRequestToApi(totalAmount, totalShipping) {
    // Calculate the total by summing up totalAmount and totalShipping
    const result = Utils.calculateNumber("SUM", totalAmount, totalShipping);
    // Log the calculated total to the console
    console.log(`The total is: ${result}`);
}

// Export the function for use in other modules
module.exports = sendPaymentRequestToApi;
