// Q1. Write a Js Function to check whether an 'input' is an array or not

// function checkArray(input) {
//     // console.log(Array.isArray(input));
//   console.log(input instanceof Array);
// }

// checkArray(1);
// checkArray([1,2,3]);
// checkArray(true);

// Q2. Write a Js Function to clone an array

// function cloneArray(arr){
//     var cloned = [[-1,0],...arr];
//     console.log(cloned);

// }

// cloneArray([1,2,3,[4,5]])

// Q3: Write a Js Function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.

// function getter(arr, n = 1) {
//   let cloned = [];
//   for (let i = 0; i < n; i++) {
//     if (arr[i] !== undefined) {
//       cloned.push(arr[i]);
//     }
//   }
//   console.log(cloned);
// }

// getter([1, 2, 3, 4, 5], 9);

// Q4. Write a JS function to join all elements of the array together and return the result as a string.

// function joiner(arr) {
//   console.log([arr.join(",")]);
// }

// joiner(["Red", "Green", "Blue", "Yellow"]);

// Q5. possible ways to create an object

// var obj1 = {}; // object literal

// var obj2 = Object.create(null); // object create method

// function createObj() { // object constructor function
//   this.name = "Abhi";
// }
// const obj3 = new createObj();

// class Obj4{
//   constructor() {
//     a = 12;
//   }
// }

// var ans = new Obj4();


