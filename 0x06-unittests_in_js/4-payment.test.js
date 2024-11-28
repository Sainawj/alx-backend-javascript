// Importing sinon for mocking and spying, Utils for the utility function, and chai for assertions
const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');

// Describe the test suite for the sendPaymentRequestToApi function
describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi calls console.log with the right arguments', () => {
    // Create a spy to monitor console.log calls
    const bigBrother = sinon.spy(console);
    
    // Stub the calculateNumber method of Utils to return a fixed value (10)
    const dummy = sinon.stub(Utils, 'calculateNumber');

    // Configure the stub to return 10 when called
    dummy.returns(10);
    
    // Call the function under test
    sendPaymentRequestToApi(100, 20);

    // Assert that calculateNumber was called with the correct arguments
    expect(dummy.calledWith('SUM', 100, 20)).to.be.true;
    
    // Assert that calculateNumber was called exactly once
    expect(dummy.callCount).to.be.equal(1);
    
    // Assert that console.log was called with the expected output
    expect(bigBrother.log.calledWith('The total is: 10')).to.be.true;
    
    // Assert that console.log was called exactly once
    expect(bigBrother.log.callCount).to.be.equal(1);
    
    // Restore the original method to avoid side effects on other tests
    dummy.restore();
    
    // Restore the original console.log
    bigBrother.log.restore();
  });
});
