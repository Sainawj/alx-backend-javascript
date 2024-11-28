// Define a function to perform various arithmetic operations based on the 'type' parameter
const calculateNumber = (type, a, b) => {
  
  // If the operation type is 'SUM', round both numbers and return their sum
  if (type === 'SUM') {
    return Math.round(a) + Math.round(b);
  }

  // If the operation type is 'SUBTRACT', round both numbers and return their difference
  if (type === 'SUBTRACT') {
    return Math.round(a) - Math.round(b);
  }

  // If the operation type is 'DIVIDE', check if the denominator is 0 to prevent division by zero
  if (type === 'DIVIDE') {
    // If the denominator is 0, return an error message, otherwise perform the division
    return Math.round(b) === 0 ? 'Error' : Math.round(a) / Math.round(b);
  }

  // Default case, return 0 if the operation type is not recognized
  return 0;
};

// Export the function so it can be used in other modules
module.exports = calculateNumber;
