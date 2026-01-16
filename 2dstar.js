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
       console.log(row.trim());   
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
       for (let j = 0; j <= i; j++) {
           row += '* ';
       } 
       console.log(row.trim());   
    }
}

// This function prints a 2D star pattern (4x4) to the console.
// twoDStar(5);


// This function prints a right-angled triangle star pattern to the console.
twoDStarExample2(5);