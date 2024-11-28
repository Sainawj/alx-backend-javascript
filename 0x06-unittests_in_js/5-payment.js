// Import the 'Utils' module to access utility functions like calculateNumber
const Utils = require("./utils").default;

// Function to send a payment request by calculating the total amount including shipping
function sendPaymentRequestToApi(totalAmount, totalShipping) {
    // Call the calculateNumber function from Utils to compute the total (SUM of totalAmount and totalShipping)
    const result = Utils.calculateNumber("SUM", totalAmount, totalShipping);

    // Log the total amount to the console
    console.log(`The total is: ${result}`);
}

// Export the sendPaymentRequestToApi function for use in other modules
module.exports = sendPaymentRequestToApi;
