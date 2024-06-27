// arrayManipulation.js

// Task 1: Function to process array of numbers
function processArray(arr) {
    return arr.map(num => num % 2 === 0 ? num ** 2 : num * 3);
}

// Task 2: Function to format array of strings based on processed numbers
function formatArrayStrings(strings, numbers) {
    return strings.map((str, index) => {
        return numbers[index] % 2 === 0 ? str.toUpperCase() : str.toLowerCase();
    });
}

// Export the functions for use in other files
module.exports = { processArray, formatArrayStrings };
