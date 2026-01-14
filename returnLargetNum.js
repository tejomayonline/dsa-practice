
function returnLargestNum(arr) {
    if (arr.length === 0) {
        return null; // Return null for empty array
    }
    let largest = arr[0];
    for ( let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}


const numbers = [-3, -1, -14, -2, 0, -5];
console.log(returnLargestNum(numbers)); // Output: 14