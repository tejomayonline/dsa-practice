
function reverseANumber(n) {
    let reversed = 0;
    let isNegative = false;
    if (n < 0) {
        isNegative = true;
        n = Math.abs(n);
    }
    while (n > 0) {
        let digit = n % 10;
        reversed = reversed * 10 + digit;
        n = Math.floor(n / 10);
    }
    return isNegative ? -reversed : reversed;
}

console.log(reverseANumber(12345)); // 54321
console.log(reverseANumber(-6789)); // -9876
console.log(reverseANumber(1000)); // 1