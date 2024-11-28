// Round input 'a' to the nearest integer
function calculateNumber(a, b) {
    const an = Math.round(a); // Round input 'a' to the nearest integer
    const bn = Math.round(b); // Round input 'b' to the nearest integer
    const c = an + bn; // Calculate the sum of rounded values
    return c; // Return the result
}

// Export the function for use in other modules
module.exports = calculateNumber;
