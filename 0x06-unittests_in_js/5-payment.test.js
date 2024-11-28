// Import Mocha functions (describe, it), Sinon for spies, Chai for assertions
const { describe, it } = require("mocha");
const sinon = require("sinon");
const sendPaymentRequestToApi = require("./5-payment"); // Function to be tested
const expect = require("chai").expect; // Chai assertion library

// Describe the test suite for the 'sendPaymentRequestToApi' function
describe("sendPaymentRequestToApi", function() {

    // Set up a spy on console.log before each test runs
    beforeEach("Set up spy to use for each test", function() {
        sinon.spy(console, "log");
    });

    // Restore the original console.log after each test
    afterEach("restore spy after each test", function() {
        console.log.restore();
    });

    // Test case: Check if console.log is called with the correct argument when payment is made
    it("check that console.log is called with the right arg", function() {
        // Call the function under test
        sendPaymentRequestToApi(100, 20);

        // Assert that console.log was called with the expected string exactly once
        expect(console.log.withArgs("The total is: 120").calledOnce).to.be.true;
    });

    // Test case: Check if console.log is called with the correct argument for another total
    it("check that console.log is called with the right arg", function() {
        // Call the function under test
        sendPaymentRequestToApi(10, 10);

        // Assert that console.log was called with the expected string exactly once
        expect(console.log.withArgs("The total is: 20").calledOnce).to.be.true;
    });
});
