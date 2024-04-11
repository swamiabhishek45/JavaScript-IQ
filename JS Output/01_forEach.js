// forEach is a loop which works on arrays 

// (higher order function) => function inside function

// Question 1: Print hello infront of each array value
// arr.forEach((val) => {
//     console.log(val + "Hello");
// })

// Question 2: Print val less than 3
// arr.forEach(function(val){
//     if(val < 3) {
//         console.log(val);   
//     }
// })

// Question 3: sum of all elements of array
// let sum = 0;
// arr.forEach((val) => {
//     sum = sum +  val;
//     console.log(sum);
// })

// Question 4: add only numbers not string
// let sum = 0;
// arr.forEach((val) => {
//     if(typeof val === 'number'){
//         sum = sum + val;
//         console.log(sum);  
//     }
// })

// Bonus Question: 
// var arr = []; // let arr = []; 
// for(var i = 0; i < 10; i++) {
//     arr.push(function() {
//         setTimeout(() => {
//             console.log(i);
//         }, 1000);
//     })
// }
// for(var i = 0; i < 10; i++) {
//     arr[i]();
// }


// synchronous --> synchronous code executes line by line and if first line is not resolved then code execution will not move to the next line.

// asynchronous --> asynchronous code waits till synchronous code is not finished and when synchronous code finishes executing, then the asynchronous code start it's execution, as the asynchronous code means it probably can have some delay, it also takes something called callback.

// console.log('1');
// console.log('2');

// setTimeout(() => {
//     console.log('3');
    
// }, 3000);

// setTimeout(() => {
//     console.log('4');
    
// }, 1000)

// console.log("5");

// console.log(arr);
