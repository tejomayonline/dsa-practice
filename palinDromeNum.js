function isPalinDromeNum (numberReceived) {
    // get digits in reverse
    if (numberReceived < 0) return false; // negative numbers are not palindrome
    let digits = [];
    let originalNum = numberReceived;
    while (originalNum > 0) {
        digits.push(originalNum % 10);
        originalNum = Math.floor(originalNum / 10);
    }
    let reversedNum = 0;
    for (let i = 0; i < digits.length; i++) {
          reversedNum+= digits[i] * Math.pow(10, digits.length - i - 1);
    }
    console.log(numberReceived, reversedNum);
    return reversedNum === numberReceived;
    // create reverse digit
    // check matched
}

function isPalinDromeNum2 (numberReceived) {   
    if (numberReceived < 0) return false; // negative numbers are not palindrome 
    let num = numberReceived;
    let reversedNum = 0;
    while (num > 0) {
        let lastDigit = num % 10;
        reversedNum = reversedNum * 10 + lastDigit;
        num = Math.floor(num / 10);
    }
    return reversedNum === numberReceived;
}

console.log(isPalinDromeNum(121)); // true
// console.log(isPalinDromeNum(-121)); // false
// console.log(isPalinDromeNum(10)); // false
// console.log(isPalinDromeNum(12321)); // true
// console.log(isPalinDromeNum2(121)); // true
console.log(isPalinDromeNum2(-121));