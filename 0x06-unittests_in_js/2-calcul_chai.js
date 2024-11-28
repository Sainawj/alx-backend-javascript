// Function to perform mathematical operations on rounded numbers
function calculateNumber(type, a, b) {
    const an = Math.round(a); // Round input 'a' to the nearest integer
    const bn = Math.round(b); // Round input 'b' to the nearest integer
    let c = 0; // Initialize the result variable

    // Determine the operation to perform based on the 'type' parameter
    switch (type) {
        case 'SUM': // If type is 'SUM', add the rounded numbers
            c = an + bn;
            break;
        case 'SUBTRACT': // If type is 'SUBTRACT', subtract the rounded numbers
            c = an - bn;
            break;
        case 'DIVIDE': // If type is 'DIVIDE', handle division
            if (bn === 0) { // Check if divisor is zero
                c = "Error"; // Return "Error" for division by zero
            } else {
                c = an / bn; // Perform division if divisor is non-zero
            }
            break;
    }
    return c; // Return the result
}

// Export the function to allow its use in other modules
export default calculateNumber;
