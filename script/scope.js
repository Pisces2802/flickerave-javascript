// scope means variable access
// where in my code can i have access to some variables.

// Global

// const sum = 10;

// function addNumbers() {
//   //sum variable is local to this function
//   //   const sum = 20;
//   return function sayAnything() {
//     console.log(sum);
//   };
// }

// let result = addNumbers()();
// console.log(sum);

// Local or function
// Block

let cities = ["Budapest", "London", "Monaco", "Marakesh", "Manhattan"];

function createScope() {
  let i = "oh im outside 😁"; //you can access me

  for (let i = 0; i < cities.length; i++) {
    //you cant access me outside the  block
    console.log(`arr elements at index ${i}: ${cities[i]}`);
  }
  console.log(i);
}

// createScope();

// function createScope() {
//     for(let city of cities) {
//         console.log(city)
//     }
// }

// createScope()

// function callBack(city, index) {
//   console.log(`city at index ${index} is ${city}`);
// }

// cities.forEach(callBack);

function first() {
  let name = "David"; //closure
  return function second() {
    // let name = "John";
    return function third() {
      return name;
    };
  };
}

let second = first();
let third = second();
let David = third();
// console.log(David);

function sayName(name) {
  console.log(name);
}

sayName(David);
