const calculateNumber = (type, a, b) => {
  // If the operation type is 'SUM', round both a and b, then add them
  if (type === 'SUM') {
    return Math.round(a) + Math.round(b);
  }

  // If the operation type is 'SUBTRACT', round both a and b, then subtract b from a
  if (type === 'SUBTRACT') {
    return Math.round(a) - Math.round(b);
  }

  // If the operation type is 'DIVIDE', round both a and b, and check if b is 0 to avoid division by zero
  if (type === 'DIVIDE') {
    return Math.round(b) === 0 ? 'Error' : Math.round(a) / Math.round(b);
  }

  // Return 0 if the operation type doesn't match 'SUM', 'SUBTRACT', or 'DIVIDE'
  return 0;
};

module.exports = calculateNumber;
