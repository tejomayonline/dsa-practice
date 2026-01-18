// 
// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *
function twoDStar(n) {
    // Function implementation goes here
    for (let i = 0; i < n; i++) {
       let row = '';
       for (let j = 0; j < n +2; j++) {
           row += '* ';
       } 
       console.log(row);   
    }
}

// *
// * *
// * * *
// * * * *
// * * * * *
function twoDStarExample2(n) {
    for (let i = 0; i < n; i++) {
       let row = '';
       for (let j = 0; j < i+1 ; j++) {
           row += '*';
       } 
       console.log(row);   
    }
}

// This function prints a 2D star pattern (4x4) to the console.
// twoDStar(5);


// This function prints a right-angled triangle star pattern to the console.
// twoDStarExample2(100);


// 1
// 12
// 123
// 1234
// 12345
// 123456
// 1234567
// 12345678
// 123456789
// 12345678910

function twoDStarExample3(n) {
    for (let i = 1; i < n + 1; i++) {
       let row = '';
       for (let j = 1; j < i+1 ; j++) {
           row += j;
       } 
       console.log(row);   
    }
}

// twoDStarExample3(10);

function twoDStarExample4(n) {
    for (let i = 0; i < n; i++) {
       let row = '';
       for (let j = 0 ; j < i+1 ; j++) {
           row += i+1;
       } 
       console.log(row);   
    }
}
// twoDStarExample4(5);

function twoDStarExample5(n) {
    for (let i = 0; i < n; i++) {
       let row = '';
       for (let j = 0; j < n-i ; j++) {
           row += j+1;
       } 
       console.log(row);   
    }
}

// twoDStarExample5(5);

//     *
//    **
//   ***
//  ****
// *****
function twoDStarExample6(n) {
    for (let i = 0; i < n; i++) {
       let row = '';
       for (let j = 0; j < n-(i +1) ; j++) {
           row += ' ';
       } 
        for (let k = 0; k < i+1 ; k++) {   
            row += '*';
        }
       console.log(row);   
    }
}

twoDStarExample6(5);