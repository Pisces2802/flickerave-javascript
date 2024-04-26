// // console.log("connected");

// // How we represent strings in javascript;

// // 'single quotes'
let firstName = "Ore"; //camel casing naming convention

let nameOfSchool = "Kings College";
// let marriageYear = 2021;

// // double quotes

let surname = "Oladokun";

// // back ticks

// let hobby = `gaming`;

// console.log(firstName);
// console.log(surname);
// console.log(hobby);

// // Numbers

// let age = 50; //integers
// let priceOfPhone = 250000.89; //floating point numbers

// console.log("age:", age);
// console.log("price of Phone:", priceOfPhone);

// // Boolean

// let isMarried = true;
// let isMuslim = false;

// console.log("isMarried:", isMarried);
// console.log("isMuslim:", isMuslim);

// // undefined

// let favouriteClub; //you can declare a variable with let and not initialize with a value immediately
// console.log("favorite club:", favouriteClub);

// favouriteClub = "Man U";
// console.log("favorite club:", favouriteClub);

// // null

// let pet = null;
// console.log("pet:", pet); //null

// pet = "cecil";
// console.log("pet:", pet); //cecil

// // objects

// //creating object literals

// const student = {
//   firstName: "Ore", //property (firstName)  and values (Ore)
//   lastName: "Oladokun",
//   pet: "cecil",
//   favoriteClub: "Manchester United",
//   age: 40,
//   isMarried: true,
// };

// console.log("student:", student);

// // variables

// // let
// // const

// //when you declare a variable with let we can re-assign values of any type to  it.

// let dog;
// console.log("dog:", dog); //undefined

// dog = "Bingo";
// console.log("dog:", dog); //Bingo

// dog = "jack";
// console.log("dog:", dog); //Jack

// dog = 90;
// console.log("dog:", dog); //90

// //we cannot re-assign a value with a constatnt declaration

// const anotherPet = "Russel";
// console.log("another Pet:", anotherPet);

// string concatenation

// let fullName = firstName + " " + surname;
// console.log("full Name:", fullName);

// let introduction =
//   "My full name is " +
//   fullName +
//   "," +
//   " the name of my school is " +
//   nameOfSchool;
// console.log(introduction);

// let betterIntroduction = `My full name is ${fullName}, the name of my school is ${nameOfSchool}`;
// console.log(betterIntroduction);

// classwork

// let item = "apples";
// let amount = 5;

// let receipt = `i bought ${amount} ${item}`;
// console.log(receipt);
// let receipt = i just bought 5 apples using backticks

// let password = prompt("enter your password");
// console.log("password:", password);

// if (password.length < 5) {
//   alert("password is not long enough");
// } else {
//   alert("pasword secure");
// }

// indexing
// we start couting from 0

// let myName = "Alex";
// console.log(myName);

// myName = "David";
// console.log(myName);

// myName = 100;
// console.log(myName);

// let name = "David";

// console.log("name with initial value:", name);
// name = "Samuel";
// console.log("name with re-assigned value:", name);

// let age;
// console.log(age);

// age = 40;
// console.log(age);

// declare or define a function
// invoke or call or execute or run a function

// declaring or defining a function

function getName() {
  // function body
  // instructions to be executed
  let name = "David";
  console.log(name);
}

// function execution - invocation - calling

// getName();
// getName();

// program to print a text
// declaring a function

// function greet() {
//   console.log("Hello there!");
// }

// calling the function
// greet();

// A function can also be declared with parameters. A parameter is a value that is passed when declaring a function.

// program to print the text
// declaring a function

//when you pass a parameter during function defination, you're definately passing an argument during fn invocation

// let nameLabel = ""

// declare a function
// call or invoke a function

// function greet(nameLabel) {
//   console.log("Hello " + nameLabel + ":)");
// }

// variable name can be different
// let name;

// calling function
// greet(name);

// let password = prompt("enter your password");

// console.log("password:", password);

// let username = "@dave";

// function validatePassword(passwordInput) {
//   console.log("argument value", passwordInput);
//   if (passwordInput.length <= 5) {
//     alert("password must be greater than 5 characters :(");
//   } else {
//     alert("password valid :)");
//   }
// }

// validatePassword(username);

// let passwordInput =

// program to add two numbers using a function
// declaring a function
// function add(a, b) {
//     console.log(a + b);
// }

// // calling functions
// add(3, 5);
// add(2,9);
// add(10, 10);

// function subtract(num1, num2) {
//   return `${num1} - ${num2} = ${num1 - num2} `;
// }

// let value1 = subtract(10, 5);
// let value2 = subtract(20, 10);
// let value3 = subtract(10, 30);

// console.log("value1:", value1);
// console.log("value2:", value2);
// console.log("value3:", value3);

// function greetUser(greeting, name) {
//   let valueFromFuction = `greeting: ${greeting}, ${name}`;
//     return valueFromFuction;
// //   console.log(valueFromFuction);
// }

// let salutation = "Hello";
// let fName = "Portable";

// const result = greetUser(salutation, fName);
// console.log("result:", result);

// add up 2 numbers

// function add(num1, num2) {
//   console.log(`first parameter: ${num1}`);
//   console.log(`second parameter: ${num2}`);
//   console.log(num1 + num2);
//  }

// add(10, 20);
// add(15, 17);
// add(29, 45);

// NaN stands for NOT A NUMBER

// let userGreeting = "Hello";
// // let userName = prompt("Enter your name");

// let anotherGreeting = "Hi";
// let userName2 = prompt("Enter your name");

// let userNameInLowerCase = userName2.toLowerCase();

// console.log("userName transformed:", userNameInLowerCase);

// function greetUser(greeting, user) {
//   console.log(`${greeting}, ${user}`);
// }

// greetUser(anotherGreeting, userNameInLowerCase);

// let fName = prompt("Enter your name"); //chaiing function calls or invocation
// let fNameUpdated = fName.toLowerCase();

// let footballClub = prompt("Enter your favorite club");
// let message; //created a variable without assigning a value

// function printMessage(userName, club) {
//   message = `Your name is ${userName} and your favorite club is ${club}`;
//   console.log("message:", message);
// }

// printMessage(fNameUpdated, footballClub);

// A function has to return a value

// returning a value from a  function

// function squareNumbers(num) {
//   //   console.log(num * num);
//   // return the value to wherever this function is called
//   let answer = num * num;
//   return answer;
//   console.log(answer);
// }

// let squareOf4 = squareNumbers(4);
// let squareOf10 = squareNumbers(10);
// let square0f20 = squareNumbers(20);

// console.log("square of 4:", squareOf4);
// console.log("square of 5:", squareOf10);
// console.log("square of 20:", square0f20);

// function expression

// program to find the square of a number
// function is declared inside the variable

let squareNum = function (num) {
  //anonymous function
  return num * num;
  // console.log(num * num);
};

// functions in javascript are called first class citizens
// bcause functions can be passed as a value and can also be returnrd from a function.

// console.log("variable x:", x(4));

// can be used as variable value for other variables
// let square3 = squareNum(3);
// let square5 = squareNum(5);
// let square10 = squareNum(10);

// console.log("variable square3:", square3);
// console.log("variable square5:", square5);
// console.log("variable square10:", square10);

// create a function expression that raises a number to the power of 3
// and re-use the function by passing different arguments.

// console.log(4 ** 3);
// console.log(4 * 4);

// default parameters

// let greetUser = function (greet, user = "user") {
//   let message = `${greet}, ${user}`;
//   return message;
// };

// let greeting1 = greetUser("Hello", "Ore");
// console.log("greeting1:", greeting1);

// let arrowFunctionExpression = (x) => x;
// let result = arrowFunctionExpression(2);
// console.log(result);

// objects

let fName = "John";
let lName = "Doe";
let age = 20;
let isMarried = false;

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  isMarried: false,
  sayName: function () {
    console.log("hello");
  },
};

// console.log("person:", person);

// accessing object properties using the dot notation syntax

let firstNameFromObject = person.firstName;
// console.log(firstNameFromObject);

let ageFromObject = person.age;
// console.log(ageFromObject);

// set/update object property/value

const dog = {
  name: "Jack",
  limbs: 4,
  tail: 1,
  eyes: 2,
  isVaccinated: true,
  sex: "male",
  introduce: function () {
    console.log(
      `I am a dog, my name is ${dog.name} and i have ${dog.eyes} eyes and ${dog.limbs} limbs`
    );
  },
};

// whenever you see a function in an object, it's called a method

// console.log("dog", dog);

// dog.introduce();

// user = {
//   username: usernameFromUser,
//   password: passwordFromUser
// }

// we will create a function that will accept two argumets and return an object

// let usernameFromUser = prompt("Enter your username");
// let passwordFromUser = prompt("Enter your password");

// const details = {};

// function createUserDetails(username, password) {
//   (details.username = username), (details.password = password);
//   return details;
// }

// let userDetails = createUserDetails(usernameFromUser, passwordFromUser);
// console.log("details:", userDetails);
// console.log(typeof userDetails);

// let myObj = { fName: "Dave", lName: "Olaleye", age: 20 };

// function returnProperty(obj) {
//   return obj.age;
// }

// let firstNameFromObj = returnProperty(myObj);
// console.log(firstNameFromObj);

// const family = {
//   name: "Thanos",
//   children: {
//     firstChild: "Batman",
//     secondChld: "green lantern",
//     thirdChild: "Joker",
//   },
//   sayName: function () {
//     return `The name of our family is ${family.name} and our first child is ${family.children.firstChild}`;
//   },
// };

// let introduction = family.sayName();
// console.log("introduction:", introduction);

let database = {
  username: "@Dave",
  password: "dave123",
};

// const feed = {
//   Glo: "Shop and make calls with gobacom",
//   sade: "Thanking God for life! 😊",
//   Flickerave: "Come and learn web development at our prestigious academy",
// };

// let userName = prompt("username");
// let myPassword = prompt("password");

// function verifyUserDetails(username, pasword) {
//   if (userName === database.username && pasword === database.password) {
//     return feed;
//   } else {
//     return `username or password incorrect 😔`;
//   }
// }

// let result = verifyUserDetails(userName, myPassword);
// console.log("result:", result);

let database2 = {};

// console.log(database2);

// // let myUserName = prompt("username");
// // let password = prompt("password");

// function registerUserDetailsToDB(username, password) {
//   if (typeof username !== "string" && typeof password !== "string") {
//     console.log(`enter valid string characters ⚠️`);
//   } else {
//     database2.userName = username;
//     database2.password = password;
//     console.log(`username and password updated ✔️`);
//   }
// }

// registerUserDetailsToDB(myUserName, password);
// console.log(database2);

const arr = ["lagos", "Abuja", "Ondo", "Jos", ["Katsina", "Kano"]];

// console.log("length:", arr.length);
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4][0]);

// formular to get the last element in an array

let length = arr[arr.length - 1];

const myArray = [
  "liam Tomlison",
  "Harry Styles",
  "Zayn Malik",
  "Frank Ocean",
  "Frank Sinatra",
  "Prince",
  "Micahel Jackson",
];

myArray[0] = "Lil pump";
// console.log(myArray);

// let lastElement = myArray[myArray.length - 1];
// console.log(lastElement);

// the index of an element means the position of the element in the array

// we dont care about order in objects

const obj = {
  state: "Lagos",
  country: "Nigeria",
  yearCreated: 1450,
  localGovernment: 34,
  isSerene: false,
  traffic: true,
};

// console.log(arr);
// console.log(obj);

// const evenNums = [];

// console.log(evenNums);

// evenNums[0] = 2;

// console.log(evenNums);

// evenNums[1] = 8;
// console.log(evenNums);

const myFavoriteMovies = [];

//push method (addding elements to the end of the array)

myFavoriteMovies.push("Amadeus");
// console.log(myFavoriteMovies);

myFavoriteMovies.push("Pulp Fiction");
// console.log(myFavoriteMovies);

myFavoriteMovies.push("Shawshank Redemption");
// console.log(myFavoriteMovies);

myFavoriteMovies.push("Fight Club");
// console.log(myFavoriteMovies);

//unShift method (adding elements to the begining of the array)

// myFavoriteMovies.unshift("No  coutry for old men");
// console.log(myFavoriteMovies);

// myFavoriteMovies.unshift("Taxi Driver");
// console.log(myFavoriteMovies);

// myFavoriteMovies.unshift("Heat");
// console.log(myFavoriteMovies);

//pop (removing elements of an array from the end)

// console.log(myFavoriteMovies);

//pop (remove elements from the end of an array)

myFavoriteMovies.pop();
// console.log(myFavoriteMovies);

// myFavoriteMovies.pop();
// console.log(myFavoriteMovies);

// myFavoriteMovies.pop();
// console.log(myFavoriteMovies);

// concat (joint arrays together)

mySecondFavShows = ["Breaking Bad", "The Wire"];
// console.log(mySecondFavShows);

let movieList = myFavoriteMovies.concat(mySecondFavShows);
// console.log(movieList);

// splice is a destructive array method that doesn't return a value

// movieList.splice(3, 2);
// console.log('using splice:' ,movieList);

// slice returns a value without destroying the original array

// let returnedSlicedElements = movieList.slice(1, 4);
// console.log("using slice:", returnedSlicedElements);
// console.log(movieList);

// const actorDatabase = [
//   {
//     fName: "Albert",
//     lName: "Deniro",
//     isMarried: true,
//     age: 70,
//     oscars: 5,
//   },

//   {
//     fName: "Cillian",
//     lName: "Murphy",
//     isMarried: true,
//     age: 45,
//     oscars: 3,
//   },

//   {
//     fName: "Margort",
//     lName: "Robbie",
//     isMarried: true,
//     age: 35,
//     oscars: 2,
//   },

//   {
//     fName: "Denzel",
//     lName: "Washington",
//     isMarried: true,
//     age: 60,
//     oscars: 6,
//     movies: {
//       title: "Training day",
//     },
//   },
// ];

// console.log(actorDatabase);

// // use the slice method to get access to the last elements, movie title property

// let lastElement = actorDatabase.slice(3);
// console.log(lastElement);

// let titleFromObject = lastElement[[0]].movies.title;
// console.log(titleFromObject);

// const car = {};

// car.doors = 2;
// car.trunk = 1;
// car.brand = "jaguar";
// car.sayName = function () {
//   console.log(`i am a ${car.brand}, and i have ${car.doors} doors`);
// };
// car.isAuto = false;

// // console.log(car);
// // console.log(car.sayName());
// // console.log(car);

// // accessing object properties with bracket notation

// let carBrand = car["brand"];
// console.log(carBrand);

// car["tyres"] = 4;

// console.log(car);

// const arrOfNum = [1, 2, 3, 4, 4, 6, [2, 4, 6], 9];
// console.log(arrOfNum);

// const firstElem = arrOfNum[1];
// console.log(firstElem);

// const latElem = arrOfNum[arrOfNum.length - 1];
// console.log(latElem);

// let four = arrOfNum[6][1];
// console.log(four);

// for (let movie of movies) {
//   console.log("individual movie object:", movie);
// }

// console.log(movies);
// let answer = movies[movies.length - 1];
// let finalAnswer = answer.actors[answer.actors.length - 1];
// console.log(finalAnswer);

// let saveJohn = movies[2].actors[2];
// console.log(saveJohn);

// if statement

// let userCountry = prompt("Enter your country");
// let transformedUserCountry = userCountry.toLowerCase();
// console.log(transformedUserCountry);

// let validateCountry = (country) => {
//   if (country === "nigeria") {
//     return `country is ${country}`;
//   } else if (country === "kenya") {
//     return `country is ${country}`;
//   } else if (country === "angola") {
//     return `country is ${country}`;
//   } else {
//     return `invalid country`;
//   }
// };

// let counrtryResult = validateCountry(transformedUserCountry);
// console.log("country:", counrtryResult);

// age grade for ticketing

// comparison equators

// >
// <
// >=
// <=
// ++
// --
// ==
// ===
// !==
// ||    //logical or
// &&    //LOGICAL and

// const num = 5;

// const stringNum = "5";

// console.log(typeof num);
// console.log(typeof stringNum);
// console.log(num === stringNum);

// 1 - 5 free
// 6 - 17 #2,000
// 18 - 65 #4,000
// 65 > 'too old to enter the park'

// let userAge = prompt("enter your age");

function verifyAge(age) {
  if (age > 0 && age <= 5) {
    return `enter for free`;
  } else if (age > 5 && age <= 17) {
    return `you're to pay #2,000`;
  } else if (age > 17 && age <= 65) {
    return `you're to pay #4,000`;
  } else {
    return `to old to enter the park`;
  }
}

// let ageResult = verifyAge(userAge);
// console.log(ageResult);

// loops on iterables
//iterables are any data type that has a length property

let myArr = [2, 4, 5, "good man", () => console.log("hello"), false, true]; //7 elements in the array

// console.log("first".length);
// console.log(myArray.length);

// for (let i = 0; i < myArr.length; i++) {
//   console.log("traditional for loop:", myArr[i]);
// }

// for (let elem of myArr) {
//   console.log("for of loop:", elem);
// }

// function checkEvenNum(arr) {
//   let evenNumArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       evenNumArr.push(arr[i]);
//     }
//   }
//   return evenNumArr;
// }

// let even = checkEvenNum(elem);
// console.log("for loop:", even);

//create a function
//pass the right param
//create empty array
//run the loop using the for of loop
//check condition
//push elem to array that meets condition
//return the array

// let elem = [2, 5, 7, 8, 8, 14];

// function loopArray(arr) {
//   let even = [];
//   for (let el of arr) {
//     if (el % 2 === 0) {
//       even.push(el);
//     }
//   }
//   return even;
// }

// let myResult = loopArray(elem);
// console.log(myResult);

// let usernames = [
//   "liam",
//   "Zayn",
//   "Denzel",
//   "Mathew",
//   "Reginald",
//   "Scott",
//   "Winston",
// ];

// function checkName(arr) {
//   const result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length >= 5) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }

// let namesGreaterThan5 = checkName(usernames);
// console.log(namesGreaterThan5);
// console.log(Array.isArray(namesGreaterThan5));

const movies = [
  {
    movieName: "Equalizer",
    hours: 120,
    actors: ["Denzel Washington", "Blake Lively", "Aan de Armas"],
    rating: 5,
  },

  {
    movieName: "Oppenheimer",
    hours: 180,
    actors: ["Robert Downey", "Cillian Murphy"],
    rating: 4,
  },

  {
    movieName: "Pulp Fiction",
    hours: 140,
    actors: ["Bruce Wilis", "Samuel jackson", "John Travolta"],
    rating: 5,
  },
];

function nestedLopp(arrOfObj) {
  for (let i = 0; i < arrOfObj.length; i++) {
    let obj = arrOfObj[i].actors;
    for (let j = 0; j < obj.length; j++) {
      console.log(obj[j])
    }
  }
}

//create a nested loop using for of

nestedLopp(movies);
