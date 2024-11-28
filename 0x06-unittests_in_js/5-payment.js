// Import the Utils module which contains the calculateNumber function
const Utils = require('./utils');

// Define the sendPaymentRequestToApi function that calculates and logs the total cost
const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
  // Calculate the total cost by calling calculateNumber with 'SUM' as the operation
  const totalCost = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  
  // Log the total cost to the console
  console.log(`The total is: ${totalCost}`);
};

// Export the sendPaymentRequestToApi function for use in other modules
module.exports = sendPaymentRequestToApi;
