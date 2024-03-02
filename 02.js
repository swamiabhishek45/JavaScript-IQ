// Q1. Write a Js Function to check whether an 'input' is an array or not

// function checkArray(input) {
//     // console.log(Array.isArray(input));
//   console.log(input instanceof Array);  
// }

// checkArray(1);
// checkArray([1,2,3]);
// checkArray(true);

// Q2. Write a Js Function to clone an array

function cloneArray(arr){
    var cloned = [[-1,0],...arr];
    console.log(cloned); 
     
}

cloneArray([1,2,3,[4,5]])