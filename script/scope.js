// scope means variable access
// where in my code can i have access to some variables.

// Global

function addNumbers() {
  //sum variable is local to this function
  let sum = 20;
  console.log(sum);
  // function sayAnything() {
  //   sum = 30;
  //   console.log(sum);
  // }
  // sayAnything();
}

// addNumbers();
// console.log(sum);

// Local or function
// Block

// let cities = ["Budapest", "London", "Monaco", "Marakesh", "Manhattan"];

// function createScope() {
//   let i = "oh im outside the for loop block 😁"; //you can access me

//   for (let i = 0; i < cities.length; i++) {
//     //you cant access me outside the  block
//     console.log(`arr elements at index ${i}: ${cities[i]}`);
//   }
//   console.log(i);
// }

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

// function first() {
//   //execution context is created on every function invocation.
//    //closure
//   function second() {
//     // let name = "John";
//     function third() {
//       return name;
//     }
//     return third();
//   }
//   return second();
// }

// const result = first();
// console.log(result);
// console.log(David);

let club = "Manchester United";

// function printClub() {

//   for (let i = 0; i < club.length; i++) {
//     console.log(club[i]);
//   }
//   console.log(i);
// }

// printClub();

// function first() {
//   function second() {
//     let myName = "inside second function 😁";
//     console.log(myName);

//     function third() {
//       console.log(myName);
//     }

//     third();
//   }
//   second();
// }

// first();

// function sayName(name) {
//   console.log(name);
// }

// sayName(David);

// promise example

// console.log("begining of program");

// function takeAWhile() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const result = `i got logged after 3 seconds`;
//       resolve(result);
//     }, 3000);
//   });
// }

// console.log("end of program");

// async function callMessage() {
//   const message = await takeAWhile();
//   return message;
// }

// const callDelayedMessage = async () => {
//   let message = await callMessage();
//   console.log(message);
// };

// callDelayedMessage();

// function scope example 1

// let goatDirector = "Martin Scorsese";

// const overideGoatDirector = () => {
//   goatDirector = "Steven Spielberg";
//   console.log(goatDirector); //Steven Spielberg
// };

// console.log(goatDirector); //Martin Scorsese
// overideGoatDirector();

// function scope example 2

// let goatActor = "Denzel Washington";

// let overideGoatActor = () => {
//   let goatActor = "Jack Nicholson"; //local blocked scope variable
//   console.log(goatActor);
// };

// console.log(goatActor);
// overideGoatActor();

//block scope example 1

// let examScore = 90;

// function checkScore() {
//   if (examScore > 80) {
//     let reply = "You passed 👍";
//     let grade = "A";
//     console.log("reply within the block:", reply);
//     console.log("grade within the block:", grade);
//   }

//   let reply = "outside the block reply 😁";
//   let grade = "outside the block grade 😁";
//   console.log("reply within the function:", reply);
//   console.log("grade within the function:", grade);
// }

// checkScore();

// console.log(reply);
// console.log(grade);

// lexical scope

function robbery() {
  function cryForHelp() {
    const heroes = ["Superman", "Batman", "Black Panther", "Spiderman"];
    function inner() {
      for (let hero of heroes) {
        console.log(`please help us ${hero.toUpperCase()}!!!`);
      }
    }
    inner();
  }
  cryForHelp();
}

robbery(); //creates a leaxical environment or a execution context
