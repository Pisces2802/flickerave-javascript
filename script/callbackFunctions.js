// console.log("connected");

// funtion are first class citizens
// they can be returned from a function
// they can be passed as an argument
// they can be stored in a variable

function add(a, b) {
  return a + b;
}

function minus(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function calculate(fn, param1, param2) {
  return fn(param1, param2);
}

// let resultCalcAdd = calculate(add, 10, 10);
// let resultCalMinus = calculate(minus, 80, 60);
// console.log(resultCalMinus);

const greetingFromUser = prompt("enter your greeting");
const nameFromUser = prompt("enter your name");

function greet(greeting, name) {
  return `${greeting}, ${name}`;    //callback function
}

function introduce(greetFn, greeting, name) {  //higher order function
  return greetFn(greeting, name);
}

let introduction = introduce(greet, greetingFromUser, nameFromUser); //greet is the callback function
console.log(introduction);
