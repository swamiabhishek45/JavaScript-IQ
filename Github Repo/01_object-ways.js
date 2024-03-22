// Q1) What are the possible ways to create objects in JavaScript?

// 1. Object literal syntax

var obj = {
  name: "Abhi",
  age: 21,
};
obj.height = 5.8;
// console.log(obj);

// 2. Object constructor

var obj = new Object();
obj.name = "Abhi";
obj.age = 21;
obj.height = 5.8;
// console.log(obj);

// 3. Object's create method

let vehicle = {
  wheels: "4",
  fuelType: "Gasoline",
  color: "Green",
};
let carProps = {
  type: {
    value: "Volkswagen",
  },
  model: {
    value: "Golf",
  },
};

var car = Object.create(vehicle, carProps);
car.name = "Mercedes";

// console.log(car.color);
// console.log(car.type);
// console.log(vehicle.color);

// 4. Function constructor
function Person(name) {
  this.name = name;
  this.age = 21;
}

var obj = new Person("Abhishek");

// console.log(obj);

// 5. Function constructor with prototype
function Person() {}
Person.prototype.name = "Abhishek";
var obj = new Person();

// console.log(obj.name);

// 6. Object's assign method:
const obj1 = { name: "Abhishek" };
const obj2 = { age: 21 };

var obj = Object.assign({ work: "Student" }, obj1, obj2);

// console.log(obj);

// 7.ES6 Class syntax:
class Manus{
  constructor(name){
    this.name = name;
  }
}

var obj = new Manus("Abhishek");

// console.log(obj);

// 8. Singleton pattern:
var obj = new (function() {
  this.name = "Abhishek"
})();

console.log(obj);
