// Import necessary modules for testing
const { describe, it } = require("mocha"); // Mocha testing framework
const sinon = require("sinon"); // Sinon for spying, stubbing, and mocking
const sendPaymentRequestToApi = require("./4-payment"); // Function to be tested
const Utils = require("./utils"); // Utils module containing calculateNumber function
const assert = require("assert"); // Assertion library for tests

// Describe the test suite for the 'sendPaymentRequestToApi' function
describe("sendPaymentRequestToApi", function() {

    // Test case: Check that 'Utils.calculateNumber' is stubbed and called with correct arguments
    it("check that Utils.calculateNumber is stubbed", function() {
        // Spy on console.log to check if it's called with the expected output
        const spy = sinon.spy(console, "log");

        // Stub 'Utils.calculateNumber' to always return 10 when called
        const stub = sinon.stub(Utils, "calculateNumber").returns(10);

        // Call the function under test
        sendPaymentRequestToApi(100, 20);

        // Assert that console.log was called once with the correct string
        assert(spy.withArgs("The total is: 10").calledOnce);

        // Assert that 'calculateNumber' was called once with the expected arguments
        assert(stub.withArgs("SUM", 100, 20).calledOnce);
        
        // Restore the original console.log and stubbed function
        spy.restore();
        stub.restore();
    });
});
