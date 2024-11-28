const Utils = {
  // Function to perform calculation based on the type (SUM, SUBTRACT, DIVIDE)
  calculateNumber(type, a, b) {
    // If the operation is SUM, round both numbers and add them
    if (type === 'SUM') {
      return Math.round(a) + Math.round(b);
    }
    // If the operation is SUBTRACT, round both numbers and subtract
    if (type === 'SUBTRACT') {
      return Math.round(a) - Math.round(b);
    }
    // If the operation is DIVIDE, check if the divisor is 0 and return 'Error' if true, otherwise perform the division
    if (type === 'DIVIDE') {
      return Math.round(b) === 0 ? 'Error' : Math.round(a) / Math.round(b);
    }
    // Default return value when the type does not match any operation
    return 0;
  },
};

module.exports = Utils;
