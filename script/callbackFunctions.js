// console.log("connected");

// funtion are first class citizens
// they can be returned from a function
// they can be passed as an argument
// they can be stored in a variable

// function add(a, b) {
//   return a + b;
// }

// function minus(a, b) {
//   return a - b;
// }

// function multiply(a, b) {
//   return a * b;
// }

// function calculate(fn, param1, param2) {
//   return fn(param1, param2);
// }

// let resultCalcAdd = calculate(add, 10, 10);
// let resultCalMinus = calculate(minus, 80, 60);
// console.log(resultCalMinus);

// const greetingFromUser = prompt("enter your greeting");
// const nameFromUser = prompt("enter your name");

// function greet(greeting, name) {
//   return `${greeting}, ${name}`; //callback function
// }

// function introduce(greetFn, greeting, name) {
//   //higher order function
//   return greetFn(greeting, name);
// }

// let introduction = introduce(greet, greetingFromUser, nameFromUser); //greet is the callback function
// console.log(introduction);

// let click = 0;

// const button = document.getElementById("btn");
// // console.log("button element:", button);

// function consoleClick(dodo) {
//   dodo.preventDefault();
//   console.log(`i got clicked ${click++} times`);
// }

// button.addEventListener("click", consoleClick);

const username = document.getElementById("username");
const password = document.getElementById("password");

// console.dir(username);
// console.dir(password);

const button = document.getElementById("btn");
// console.log("button element:", button);

function acceptAndReturnObject(obj) {
  console.log(obj);
}

function consoleClick(event) {
  event.preventDefault();

  if (
    (username.value === "" && password.value === "") ||
    (username.value !== "" && password.value === "") ||
    (username.value === "" && password.value !== "")
  ) {
    console.error("Enter both fields ❌");
  } else {
    const credentials = {
      username: username.value,
      password: password.value,
    };
    acceptAndReturnObject(credentials);
  }
}

button.addEventListener("click", consoleClick);
