
function findSecondLargestNum(arr) {
    if (arr.length < 2) {
        return null; // Not enough elements for second largest
    }
    let largest = -Infinity;
    let secondLargest = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else {
            if (arr[i] > secondLargest) {
                secondLargest = arr[i];
            }
        }
    }
    return secondLargest
}

const result = findSecondLargestNum([3, 1, 4, 2, 5 , 3, 28, -1, , 27, 30, 31, 99, 100]); // Example usage
console.log(result); // Output: 4

