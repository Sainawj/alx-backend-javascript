// Import the request module for making HTTP requests
const request = require("request");

// Import Mocha's describe and it functions for structuring the tests
const {describe, it} = require("mocha");

// Import Chai's expect assertion library for validating the tests
const expect = require("chai").expect;

// Test suite for the Index page
describe("Index page", function() {
    // Set up the request options for the GET request to the root URL
    const options = {
        url: "http://localhost:7865/",
        method: "GET"
    };

    // Test case to check if the correct status code (200) is returned
    it("check correct status code", function(done) {
        request(options, function(err, res, body) {
            // Assert that the response status code is 200
            expect(res.statusCode).to.equal(200);
            done();  // Indicate that the asynchronous test is complete
        });
    });

    // Test case to check if the correct content is returned
    it("check correct content", function(done) {
        request(options, function(err, res, body) {
            // Assert that the response body contains the expected message
            expect(body).to.equal("Welcome to the payment system");
            done();  // Indicate that the asynchronous test is complete
        });
    });
});

// Test suite for the Cart page
describe("Cart page", function() {
    // Test case to check the status code for a valid cart URL
    it("check correct status code for correct url", function(done) {
        // Send a GET request to a valid cart URL
        request.get("http://localhost:7865/cart/12", function(err, res, body) {
            // Assert that the status code is 200 (OK)
            expect(res.statusCode).to.equal(200);
            done();  // Indicate that the asynchronous test is complete
        });
    });

    // Test case to check the content for a valid cart URL
    it("check correct content for correct url", function(done) {
        // Send a GET request to a valid cart URL
        request.get("http://localhost:7865/cart/12", function(err, res, body) {
            // Assert that the response body contains the correct message for cart 12
            expect(body).to.contain("Payment methods for cart 12");
            done();  // Indicate that the asynchronous test is complete
        });
    });

    // Test case to check the status code for an invalid cart URL
    it("check correct status code for incorrect url", function(done) {
        // Send a GET request to an invalid cart URL
        request.get("http://localhost:7865/cart/kim", function(err, res, body) {
            // Assert that the status code is 404 (Not Found)
            expect(res.statusCode).to.equal(404);
            done();  // Indicate that the asynchronous test is complete
        });
    });
});
