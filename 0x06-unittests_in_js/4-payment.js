// Import the 'Utils' module to access its functions
const Utils = require("./utils");

// Function to send a payment request to the API by calculating the total amount
function sendPaymentRequestToApi(totalAmount, totalShipping) {
    // Use the 'calculateNumber' function from Utils to calculate the total
    const result = Utils.calculateNumber("SUM", totalAmount, totalShipping);
    // Log the result to the console
    console.log(`The total is: ${result}`);
}

// Export the function for use in other parts of the application
module.exports = sendPaymentRequestToApi;
