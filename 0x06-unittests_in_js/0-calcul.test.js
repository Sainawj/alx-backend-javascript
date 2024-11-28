// Import the 'assert' module for assertions
const assert = require("assert");
// Import 'it' and 'describe' functions from 'mocha' for testing
const { it, describe } = require("mocha");
// Import the 'calculateNumber' function to test
const calculateNumber = require("./0-calcul");

// Group test cases for 'calculateNumber()' using 'describe'
describe("calculateNumber()", function() {

    // Test: Check rounding and sum for integers
    it("checking if numbers round", function() {
        const res = calculateNumber(1, 2);
        assert.strictEqual(res, 3); // Expect result to be 3
    });

    // Test: Check rounding and sum for decimal numbers (round down)
    it("checking if numbers round", function() {
        const res = calculateNumber(1.4, 2.2);
        assert.strictEqual(res, 3); // Expect result to be 3
    });

    // Test: Check rounding and sum for decimal numbers (round up)
    it("checking if numbers round", function() {
        const res = calculateNumber(1.6, 2.7);
        assert.strictEqual(res, 5); // Expect result to be 5
    });

    // Test: Check rounding and sum for zero inputs
    it("checking if numbers round", function() {
        const res = calculateNumber(0, 0);
        assert.strictEqual(res, 0); // Expect result to be 0
    });

    // Test: Check rounding and sum for negative decimal numbers (round down)
    it("checking if numbers round", function() {
        const res = calculateNumber(-1.6, -1.7);
        assert.strictEqual(res, -4); // Expect result to be -4
    });

    // Test: Check rounding and sum for negative decimal numbers (round up)
    it("checking if numbers round", function() {
        const res = calculateNumber(-1.4, -1.3);
        assert.strictEqual(res, -2); // Expect result to be -2
    });
});
