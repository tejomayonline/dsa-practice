
function doubleLoopExample() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            console.log(i, j);
        }
    }
}

function doubleLoopExample2() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < i; j++) {
            console.log(i, j);
        }
    }
}

function doubleLoopExample3() {
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j <= i; j++) {
            console.log(i , j);
        }
    }
}

function doubleLoopExample4() {
    for (let i = 5; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            console.log(i , j);
        }
    }
}
// console.log("Double Loop Example:");
// doubleLoopExample();
// console.log("Double Loop Example 2:");
// doubleLoopExample2();
// console.log("Double Loop Example 3:");
// doubleLoopExample3();   
console.log("Double Loop Example 4:");
doubleLoopExample4();