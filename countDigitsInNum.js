// Count total Digits in a Number

function countDigitsInNum(num) {
    if (num === 0) return 1; // Edge case for 0
    if (num < 0) num = Math.abs(num); // Ensure num is an integer
    let digitCount = 0;
    while (num>0) {
        num = Math.floor(num / 10);
        digitCount++;
    }
    return digitCount;
}

// console.log(countDigitsInNum(0)); // 1
// console.log(countDigitsInNum(5)); // 1
console.log(countDigitsInNum(-123456789)); // 9