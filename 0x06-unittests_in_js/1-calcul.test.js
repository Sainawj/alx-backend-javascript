// Import the 'assert' module for testing assertions
const assert = require("assert");
// Import 'it' and 'describe' from 'mocha' for structuring tests
const { it, describe } = require("mocha");
// Import the 'calculateNumber' function to test its functionality
const calculateNumber = require("./0-calcul");

// Group related test cases for 'calculateNumber()' under a describe block
describe("calculateNumber()", function () {

    // Test: Check if integers are summed correctly
    it("checking if numbers round", function () {
        const res = calculateNumber(1, 2);
        assert.strictEqual(res, 3); // Expect sum of rounded numbers to be 3
    });

    // Test: Check if decimals (rounding down) are summed correctly
    it("checking if numbers round", function () {
        const res = calculateNumber(1.4, 2.2);
        assert.strictEqual(res, 3); // Expect sum of rounded numbers to be 3
    });

    // Test: Check if decimals (rounding up) are summed correctly
    it("checking if numbers round", function () {
        const res = calculateNumber(1.6, 2.7);
        assert.strictEqual(res, 5); // Expect sum of rounded numbers to be 5
    });

    // Test: Check if zero values are handled correctly
    it("checking if numbers round", function () {
        const res = calculateNumber(0, 0);
        assert.strictEqual(res, 0); // Expect sum of 0 and 0 to be 0
    });

    // Test: Check if negative decimals (rounding down) are summed correctly
    it("checking if numbers round", function () {
        const res = calculateNumber(-1.6, -1.7);
        assert.strictEqual(res, -4); // Expect sum of rounded negatives to be -4
    });

    // Test: Check if negative decimals (rounding up) are summed correctly
    it("checking if numbers round", function () {
        const res = calculateNumber(-1.4, -1.3);
        assert.strictEqual(res, -2); // Expect sum of rounded negatives to be -2
    });
});
