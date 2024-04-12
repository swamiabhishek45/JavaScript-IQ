// 1) Hoisting
// console.log("Value of age is ", age);
// var age = 20;
// console.log("value of age is ", age);

// age = 100;
// console.log("Value of age is ", age);
// var age = 21;
// console.log("Value of age is ", age);

// myFunc();
// var myFunc = function() {
//     console.log("First");
// }
// myFunc();
// function myFunc() {
//     console.log("Second");
// }
// myFunc();

// var variable = 10;
// (() => {
//     console.log(variable);
//     variable = 20;
//     console.log(variable);
// })();
// console.log(variable);
// var variable = 30;

// foo= 30;
// console.log("FOO", foo);
// var foo = 100;
// console.log("FOO", foo);

// variable = 10;
// (() => {
//     foo = 100;
//     console.log(variable); // 10
//     var foo = 100;
//     variable = 20;
//     console.log(variable); // 20
//     return 34;
// })();
// console.log(foo); // undefined
// console.log(variable); // 20
// var variable = 30;

// var is Global scope
// for (var i = 0; i < 10; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 0);
// } // ten times 10

// let and const are local scope
// for (let i = 0; i < 10; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 0);
// } // 0 1 2 3 4 5 6 7 8 9 

