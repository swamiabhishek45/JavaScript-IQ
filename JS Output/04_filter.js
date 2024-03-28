// filter --> filter is also like map but returns boolean value

// var arr = [1,2,3,4,5,6,7,8,9,10];

// const ans = arr.filter((val) => {
//     return val <= 5
// });
// console.log(ans);

// const ans = arr.filter((val) => {
//     return val%2 === 0;
// });
// console.log(ans);

var str = ["Abhishek", "Prasad", "Vishal", "Nitin", "Omaa"];

const ans = str.filter((val) => {
    return !val.includes("a");
});
console.log(ans);
