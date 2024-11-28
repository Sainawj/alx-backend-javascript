// Function to simulate API response with a payment token, depending on the success parameter
function getPaymentTokenFromAPI(success) {
    // Check if success is true
    if (success) {
        // Return a Promise that resolves with a successful response object
        return new Promise((resolve) => {
            resolve({ data: 'Successful response from the API' });
        });
    }
}

// Export the function to be used in other modules
export default getPaymentTokenFromAPI;
