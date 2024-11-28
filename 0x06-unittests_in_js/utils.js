// Define the Utils class with static methods
class Utils {
    // Static method to calculate numbers based on the operation type (SUM, SUBTRACT, DIVIDE)
    static calculateNumber(type, a, b) {
        // Round both input numbers to the nearest integer
        const an = Math.round(a);
        const bn = Math.round(b);

        // Initialize variable to store the result
        let c = 0;

        // Perform calculation based on the provided operation type
        switch (type) {
            // Sum of the two numbers
            case 'SUM':
                c = an + bn;
                break;

            // Subtraction of the second number from the first
            case 'SUBTRACT':
                c = an - bn;
                break;

            // Division of the first number by the second
            case 'DIVIDE':
                // Handle division by zero
                if (bn === 0) {
                    c = "Error";  // Return error if division by zero
                } else {
                    c = an / bn;  // Otherwise, perform the division
                }
                break;
        }

        // Return the result of the calculation
        return c;
    }
}

// Export the Utils class so it can be used in other files
export default Utils;
