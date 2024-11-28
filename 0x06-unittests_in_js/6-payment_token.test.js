// Importing the 'expect' assertion function from the 'chai' library for testing
const { expect } = require('chai');
// Importing the 'getPaymentTokenFromAPI' function from the '6-payment_token' file
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  // Test case for when the 'success' parameter is true
  it('getPaymentTokenFromAPI(success), where success == true', (done) => {
    // Call the 'getPaymentTokenFromAPI' function with 'true' to simulate success
    getPaymentTokenFromAPI(true)
      .then((res) => {
        // Assert that the response from the API matches the expected successful response
        expect(res).to.deep.equal({data: 'Successful response from the API'});
        // Indicate the completion of the asynchronous test
        done();
      });
  });
});
