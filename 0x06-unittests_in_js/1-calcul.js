// Function to perform operations on rounded numbers
function calculateNumber(type, a, b) {
    const an = Math.round(a); // Round input 'a' to the nearest integer
    const bn = Math.round(b); // Round input 'b' to the nearest integer
    let c = 0; // Initialize result variable

    // Perform operation based on the 'type' parameter
    switch (type) {
        case 'SUM': // If type is 'SUM', add the numbers
            c = an + bn;
            break;
        case 'SUBTRACT': // If type is 'SUBTRACT', subtract the numbers
            c = an - bn;
            break;
        case 'DIVIDE': // If type is 'DIVIDE', handle division
            if (bn === 0) { // Check for division by zero
                c = "Error"; // Return "Error" for zero divisor
            } else {
                c = an / bn; // Perform division
            }
            break;
    }
    return c; // Return the result
}

// Export the function for use in other modules
export default calculateNumber;
