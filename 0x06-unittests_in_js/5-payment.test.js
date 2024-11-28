// Import the sinon library for spying and stubbing, and expect from chai for assertions
const sinon = require('sinon');
const { expect } = require('chai');

// Import the sendPaymentRequestToApi function to be tested
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  // Declare a variable for the spy
  let bigBrother;

  // Set up the spy before each test
  beforeEach(() => {
    if (!bigBrother) {
      bigBrother = sinon.spy(console); // Create a spy for console.log
    }
  });

  // Reset the history of the spy after each test
  afterEach(() => {
    bigBrother.log.resetHistory(); // Reset the spy's call history
  });

  // Test case 1: Check that the correct total is logged when sendPaymentRequestToApi is called with (100, 20)
  it('sendPaymentRequestToApi(100, 20) logs "The total is: 120" to the console', () => {
    sendPaymentRequestToApi(100, 20); // Call the function
    // Assert that the correct message was logged
    expect(bigBrother.log.calledWith('The total is: 120')).to.be.true;
    // Assert that the log method was called exactly once
    expect(bigBrother.log.calledOnce).to.be.true;
  });

  // Test case 2: Check that the correct total is logged when sendPaymentRequestToApi is called with (10, 10)
  it('sendPaymentRequestToApi(10, 10) logs "The total is: 20" to the console', () => {
    sendPaymentRequestToApi(10, 10); // Call the function
    // Assert that the correct message was logged
    expect(bigBrother.log.calledWith('The total is: 20')).to.be.true;
    // Assert that the log method was called exactly once
    expect(bigBrother.log.calledOnce).to.be.true;
  });
});
