// Import the getPaymentTokenFromAPI function and testing libraries
const getPaymentTokenFromAPI = require("./6-payment_token");
const { describe, it } = require("mocha");
const expect = require("chai").expect;

describe("getPaymentTokenFromAPI", function() {
    // Define the test case for async functionality using the done callback
    it("Async testing with done callback", function(done) {
        // Call the getPaymentTokenFromAPI function with 'true' to simulate success
        getPaymentTokenFromAPI(true)
            .then((data) => {
                // Check if the returned data has the 'data' property
                expect(data).to.have.property('data');
                // Indicate that the test is done
                done();
            });
    });
});
