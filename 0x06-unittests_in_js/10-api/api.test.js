// Import the required modules for testing
const request = require("request");
const { describe, it } = require("mocha");
const expect = require("chai").expect;

// Describe the tests for the Index page
describe("Index page", function() {
    const options = {
        url: "http://localhost:7865/", // Set the URL for the request
        method: "GET" // Specify the method for the request
    }

    // Test to check the correct status code for the index page
    it("check correct status code", function(done) {
        request(options, function(err, res, body) {
            // Expect the status code to be 200 (OK)
            expect(res.statusCode).to.equal(200);
            done(); // Indicate the test is complete
        });
    });

    // Test to check if the correct content is returned for the index page
    it("check correct content", function(done) {
        request(options, function(err, res, body) {
            // Expect the response body to contain the welcome message
            expect(body).to.equal("Welcome to the payment system");
            done(); // Indicate the test is complete
        });
    });
});

// Describe the tests for the Cart page
describe("Cart page", function() {
    // Test for the correct status code when the URL is correct
    it("check correct status code for correct url", function(done) {
        request.get("http://localhost:7865/cart/12", function(err, res, body) {
            // Expect the status code to be 200 (OK)
            expect(res.statusCode).to.equal(200);
            done(); // Indicate the test is complete
        });
    });

    // Test for the correct content when the URL is correct
    it("check correct content for correct url", function(done) {
        request.get("http://localhost:7865/cart/12", function(err, res, body) {
            // Expect the response body to contain the expected message
            expect(body).to.equal("Payment methods for cart 12");
            done(); // Indicate the test is complete
        });
    });

    // Test for the correct status code when the URL is incorrect
    it("check correct status code for incorrect url", function(done) {
        request.get("http://localhost:7865/cart/kim", function(err, res, body) {
            // Expect the status code to be 404 (Not Found)
            expect(res.statusCode).to.equal(404);
            done(); // Indicate the test is complete
        });
    });
});

// Describe the tests for the Available_payments page
describe("Available_payments page", function() {
    // Test for the correct status code for the available payments page
    it("check correct status for correct url", function() {
        request.get("http://localhost:7865/available_payments", (err, res, body) => {
            if (err) {
                // If there's an error, the status code should not be 200
                expect(res.statusCode).to.not.equal(200);
            } else {
                // Otherwise, expect the status code to be 200 (OK)
                expect(res.statusCode).to.equal(200);
            }
        });
    });

    // Test to check if the correct content is returned for the available payments page
    it("check correct body content for correct url", function() {
        const option = { json: true }; // Specify the request should expect JSON
        const payLoad = { // Define the expected response body
            payment_methods: {
                credit_cards: true,
                paypal: false
            }
        }

        request.get("http://localhost:7865/available_payments", option, (err, res, body) => {
            if (err) {
                // If there's an error, expect the status code not to be 200
                expect(res.statusCode).to.not.equal(200);
            } else {
                // Otherwise, expect the body to match the expected payload
                expect(body).to.deep.equal(payLoad);
            }
        });
    });
});

// Describe the tests for the Login route
describe("Login", function() {
    // Test for the correct status code when the request is sent properly
    it("check correct status code for request that's sent properly", function(done) {
        const opt = {
            url: "http://localhost:7865/login", // Set the login URL
            json: true, // Specify that the request body should be in JSON format
            body: { userName: 'JOE' } // Provide the userName in the body
        };

        request.post(opt, function(err, res, body) {
            // Expect the status code to be 200 (OK)
            expect(res.statusCode).to.equal(200);
            done(); // Indicate the test is complete
        });
    });

    // Test for the correct content when the request is sent properly
    it("check correct content for request that's sent properly", function(done) {
        const opts = {
            url: "http://localhost:7865/login", // Set the login URL
            json: true, // Specify that the request body should be in JSON format
            body: { userName: 'JOE' } // Provide the userName in the body
        };

        request.post(opts, function(err, res, body) {
            if (err) {
                // If there's an error, expect the status code not to be 200
                expect(res.statusCode).to.not.equal(200);
            } else {
                // Otherwise, expect the body to contain a welcome message
                expect(body).to.contain('Welcome JOE');
            }
            done(); // Indicate the test is complete
        });
    });

    // Test for the correct status code when the request is not sent properly
    it("check correct status code for request that's not sent properly", function(done) {
        const op = {
            url: "http://localhost:7865/login", // Set the login URL
            json: true, // Specify that the request body should be in JSON format
            body: { usame: 'JOE' } // Provide an incorrect field in the body
        };

        request.post(op, function(err, res, body) {
            // Expect the status code to be 404 (Not Found) due to incorrect field
            expect(res.statusCode).to.equal(404);
            done(); // Indicate the test is complete
        });
    });
});
