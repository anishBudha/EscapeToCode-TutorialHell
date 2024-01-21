// 1. Functions and Methods
// 2. Declaration and Definition
// 3. Arguments and Parameters
// - when function are declared, its called parameter
// - when function are called or invoked, its called argument
// 4. Callback and Higher Order Function

function consoleMe() {
  console.log("This is a function");
}
consoleMe();

function consoleMewithParam(param) {
  console.log(param);
}
consoleMewithParam("This is Anish Budha");

const count = 100; // This is an expression

const printMe = function () {
  // This is a function expression
  console.log("printing...");
};

printMe();

const printMeAgain = function (a, b) {
  // This is a function expression
  console.log(a, b);
};

printMeAgain("Anish", "Budha");

// The default value of a parameter is undefined

// default value of a parameter

let name = function (a, b = "Budha") {
  console.log(a + " " + b);
};

name("Anish");

// rest parameter : let function have any numbers of arguments
// can have only one rest parameter and must be the last parameter

function collectThings(x, ...y) {
  console.log(x);
  console.log(y);
}

collectThings(1, 2, 3, 4, 5, 6, 7, 8, 9); // y will accept the rest of the arguments as an array

// arrow function | fat arrow syntax

const printName = (x) => {
  console.log(x);
};

printName("Anish");

// nested functions
function outer() {
  console.log("Outer Function");
  function inner() {
    console.log("Inner Function");
  }
  inner(); // must be invoked or called inside
}

outer();
