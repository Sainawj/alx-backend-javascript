// Function to simulate getting a payment token from an API
// The function returns a Promise that resolves with a successful response if the 'success' parameter is true
const getPaymentTokenFromAPI = (success) => new Promise((resolve, _reject) => {
  // Check if the 'success' flag is true
  if (success) {
    // Resolve the promise with a simulated successful API response
    resolve({data: 'Successful response from the API'});
  }
});

// Export the function for use in other parts of the application
module.exports = getPaymentTokenFromAPI;

