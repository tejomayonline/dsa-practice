
function returnSmallestNum(arr) {
    if (arr.length === 0) {
        return null; // Return null for empty array
    }
    let smallest = arr[0];
    for ( let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }
    return smallest;
}


const numbers = [-3, -1, -14, -2, 0, -5];
console.log(returnSmallestNum(numbers)); // Output: -14