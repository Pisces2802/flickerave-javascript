//DOCUMENT OBJECT MODEL

//the document object is our entry point in  the world of dom

//document object model representation of html file as objects in a tree like structure.

//it cotains represetation of all the contents on a  page

//plus tons of useful methods and poperties to get and set values.

// const allHtmlElements = this.document.all;
// // console.log(allHtmlElements);

// const logHtmlElements = () => {
//   //   for (element of allHtmlElements) {
//   //     console.log(`all the HTML elements:`, element);
//   //   }
//   for (let i = 0; i < allHtmlElements.length; i++) {
//     console.log(`element at index ${i}:`, allHtmlElements[i]);
//   }
// };
// logHtmlElements();

//get a single element

// const h1 = document.getElementById("heading");
// h1.style.color = "#F97300";
// h1.style.fontSize = "1rem";

//get elements
const htmlButton = document.getElementsByClassName("btn");
console.log(htmlButton);

//write a function that loops through the htmlcollection and change the styles of both elements differently within
// 5 min
// use either of foor loop or for of

function changeStyles() {
  for (let i = 0; i < htmlButton.length; i++) {
    let button = htmlButton[i];
    if (i === 0) {
      button.style.background = "#FFD23F";
    } else {
      button.style.background = "#3D30A2";
    }
  }
}

// changeStyles();
