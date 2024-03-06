// map -> if you want to perform operation on each element on an array and store it in new array
// return is compulsory in map
// var arr = [1,2,3,4,5]; // Input, multiply each element by 2
// var newArr = [2,4,6,8,10] // Output with new array

// var arr = [1,2,3,4,5];
// var arr2 = [];

// arr.forEach((val) => {
//     arr2.push(val * 2);
// })

// console.log(arr2);

var words = ["Abhishek", "Omkar", "Nitin","Vishal","Prasad"];

const ans = words.map((word) => {
    if(word.length === 5) {
        return `<p>${word}</p>`
    } else {
        return `<span>${word}</span>`
    }
})

console.log(ans);


