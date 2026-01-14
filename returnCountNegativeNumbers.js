// Function to count negative numbers in an array
function returnCountNegativeNumbers(arr) {
    let count = 0;
    for ( let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            count++;
        }
    }
    return count;
}

// Example usage:
const numbers = [3, -1, -4, 2, 0, -5];
console.log(returnCountNegativeNumbers(numbers)); // Output: 3