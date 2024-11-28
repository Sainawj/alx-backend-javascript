// Import 'expect' from Chai for assertions
const expect = require("chai").expect;
// Import 'describe' and 'it' from Mocha for test structure
const { describe, it } = require("mocha");
// Import the 'calculateNumber' function to be tested
const calculateNumber = require("./2-calcul_chai");

// Group tests for the 'calculateNumber' function
describe("calculateNumber", function () {

    // Test cases for the 'SUM' operation
    describe("SUM", function () {
        // Test: Check if numbers are rounded and summed correctly
        it("checking if numbers round", function () {
            expect(calculateNumber("SUM", 1, 2)).to.equal(3); // 1 + 2 = 3
        });
        // Test: Check if decimals are rounded and summed correctly
        it("checking if numbers round", function () {
            expect(calculateNumber("SUM", 1.6, 2.6)).to.equal(5); // 2 + 3 = 5
        });
    });

    // Test cases for the 'SUBTRACT' operation
    describe("SUBTRACT", function () {
        // Test: Check if numbers are rounded and subtracted correctly
        it("checking if numbers round", function () {
            expect(calculateNumber("SUBTRACT", 1.4, 2.3)).to.equal(-1); // 1 - 2 = -1
        });
        // Test: Check if decimals are rounded and subtracted correctly
        it("checking if numbers round", function () {
            expect(calculateNumber("SUBTRACT", 4.9, 2.7)).to.equal(2); // 5 - 3 = 2
        });
        // Test: Check if negative numbers are rounded and subtracted correctly
        it("checking if numbers round", function () {
            expect(calculateNumber("SUBTRACT", -4.9, -2.7)).to.equal(-2); // -5 - (-3) = -2
        });
    });

    // Test cases for the 'DIVIDE' operation
    describe("DIVIDE", function () {
        // Test: Check if numbers are rounded and divided correctly
        it("checking if numbers round", function () {
            expect(calculateNumber("DIVIDE", 4, 2)).to.equal(2); // 4 / 2 = 2
        });
        // Test: Check if decimals are rounded and divided correctly
        it("checking if numbers round", function () {
            expect(calculateNumber("DIVIDE", 4.6, 1.8)).to.equal(2.5); // 5 / 2 = 2.5
        });
        // Test: Check if division by zero returns "Error"
        it("checking if numbers round", function () {
            expect(calculateNumber("DIVIDE", 4, 0)).to.equal("Error"); // Division by zero
        });
    });
});
