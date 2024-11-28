// Importing the Utils module to access the calculateNumber function
const Utils = require('./utils');

// Function to send a payment request and log the total cost
const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
  // Calculate the total cost by adding totalAmount and totalShipping using the 'SUM' operation
  const totalCost = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  // Log the total cost to the console
  console.log(`The total is: ${totalCost}`);
};

// Exporting the function to be used in other modules
module.exports = sendPaymentRequestToApi;

