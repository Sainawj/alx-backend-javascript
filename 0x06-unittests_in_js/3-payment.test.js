// Import necessary modules for testing
const { describe, it } = require("mocha"); // Mocha testing framework
const sinon = require("sinon"); // Sinon for spies, mocks, and stubs
const sendPaymentRequestToApi = require("./3-payment"); // Function to test
const Utils = require("./utils"); // Utils module to spy on
const assert = require("assert"); // Assertion library for tests

// Describe the group of tests for the 'sendPaymentRequestToApi' function
describe("sendPaymentRequestToApi", function() {

    // Test case: Check that Utils.calculateNumber was called once
    it("check that Utils.calculateNumber was called once", function() {
        // Create a spy to track calls to Utils.calculateNumber
        const spy = sinon.spy(Utils, "calculateNumber");

        // Call the function under test
        sendPaymentRequestToApi(50, 24.52);

        // Assert that calculateNumber was called exactly once
        assert(spy.calledOnce);

        // Restore the original function after the test
        spy.restore();
    });
});
