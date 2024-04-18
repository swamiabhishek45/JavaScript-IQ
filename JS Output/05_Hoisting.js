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

// var fullName = "Abhishek Swami";
// var obj = {
//     fullName: "Hacked Full Name",
//     prop: {
//         fullName: "Inside prop",
//         getFullName: function () {
//             return this.fullName;
//         },
//     },
//     getFullName: function () {
//         return this.fullName;
//     },
//     getFullNameV2: () => this.fullName, // in arrow function "this" always refers to global or window obj(in browser)
//     getFullNameV3: (function () {
//         return this.fullName;
//     })(),
// };
// console.log(obj.prop.getFullName()); // inside prop
// console.log(obj.getFullName()); // Hacked full name
// console.log(obj.getFullNameV2()); // undefined
// console.log(obj.getFullNameV3()); // error

// const abhishek = {
//     name: "Abhishek Swami",
//     sayName: function () {
//         console.log(this.name);
//     },
// };
// const shubham = {
//     name: "Shubham Gade",
//     sayName: function () {
//         console.log(this.name);
//     },
// };
// shubham.sayName.call(abhishek);

// var name = "Abhishek Swami";
// const sayName = () => {
//     console.log(this.name);
//     console.log(this);
// }
// sayName();

// const abhishek = {
//     name: "Abhishek Swami",
//     sayName: function () {
//         console.log(this.name);
//     },
// };
// const newFunc = abhishek.sayName.bind(abhishek);
// setTimeout(newFunc, 2 * 1000);
// setTimeout(abhishek.sayName.bind(abhishek), 2 * 1000);
// setTimeout(() => abhishek.sayName(), 2 * 1000);


// Object.create() method create obj in [[prototype]]
// const obj = Object.create({
//     height: 30,
// });
// console.log(obj.height);
// delete obj.height;
// console.log(obj.height);




function a() {
    console.log("A");
}

setTimeout(() => console.log("B"), 0);

a();

console.log("C");

Promise.resolve().then(() => console.log("D"));
