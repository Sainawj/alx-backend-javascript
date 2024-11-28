// Import the necessary modules for testing and making HTTP requests
const request = require("request");
const {describe, it} = require("mocha");
const expect = require("chai").expect;

// Define the test suite for the "Index page"
describe("Index page", function() {
    // Set up the request options for the test
    const options = {
        url: "http://localhost:7865/",  // URL to be tested
        method: "GET"  // HTTP method for the request
    }

    // Test case to check if the status code is correct
    it("check correct status code", function(done) {
        // Make the HTTP request with the defined options
        request(options, function(err, res, body) {
            // Assert that the status code of the response is 200 (OK)
            expect(res.statusCode).to.equal(200);
            done();  // Signal that the test is complete
        });
    });

    // Test case to check if the content of the response is correct
    it("check correct content", function(done) {
        // Make the HTTP request with the defined options
        request(options, function(err, res, body) {
            // Assert that the response body contains the expected string
            expect(body).to.contain("Welcome to the payment system");
            done();  // Signal that the test is complete
        });
    });

    // Test case to check if the content length is correct
    it("check correct content length", function(done) {
        // Make the HTTP request with the defined options
        request(options, function(err, res, body) {
            // Assert that the 'content-length' header is 29 (the length of the response body)
            expect(res.headers['content-length']).to.equal('29');
            done();  // Signal that the test is complete
        });
    });
});
