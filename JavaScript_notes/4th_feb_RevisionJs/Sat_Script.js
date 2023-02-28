// Variable
// Datatype
// Primitve  => Single Value
// Number, String, Boolean, null , undefined

// Non-primitive => Multiple Values
// Array and Object

// Everything in Javascript is Object

// What is undefined?
// A variable is undefined when you haven't assigned any value yet, not even a null.

// Ex-
// let num;
// console.log(num);     //"undefined"

// What is null?
// When you don't want to give any type of value to a variable its called null. The type of null is the object.

// Ex-
// let num = null;
// console.log(num);   // null
// console.log(typeof num);   // "object"

// "use strict" - It is used to avoid mistakes in Javascript or preventing you from using undeclared variables. It is written very first line in .js file

//Ex-
// "use strict";
// x = 10;       // This will cause an error because x is not declared


// template LIteral(Template String) or Javascript Interpolation

// let nameofvaribale = [1, 2, 3, 4];
// console.log(` Anurag ${nameofvaribale}`);


// Conditions

// if else
// switch case
// Ternary Con

// let Bankaccount = 500000000;
// if (Bankaccount == 500000000) {
//   console.log("Material thingss");
// } else if (Bankaccount){
//     console.log("Alto");
// }
//  else {
//   console.log("I am Happy");
// }
// if else

// Switch Case
let user = "Human";

// switch (user) {
//   case "Human":
//     console.log("Hello World");
//     break;
//   case "insaan":
//     console.log("Hey World");
//
// }

// Ternay Operators and Few Call it as Ternay Condition
// ? True : False

var hello = "he";

hello == "hey" ? console.log("FSJS") : console.log("Anurag");  //Anurag

// Array - index and Values (Fixed Index)

// Object - Key and value (Key Can Changed)


// Array can be declare in two ways

let names = [
  "Anurag",
  "Anirudh",
  "VYOM",
  "Varun",
  "NIshand",
  "Jaswant",
  "Pradip",
];
// console.log(names);

// let namesss = new Array(
//   "Anurag",
//   "Anirudh",
//   "VYOM",
//   "Varun",
//   "NIshand",
//   "Jaswant",
//   "Pradip"
// );
// console.log(namesss);


// length
// console.log(names.length);

//Array Methods

// Push
// Pop
// Slice
// Splice
// shift
// unshift
// fill
// includes
// indexof
// join
// Keys
// lastindexof
// reverse
// concat
// sort
// trim and split
// some
// filter
// every
// map
// reduce


// Math
// Date

// loops
// while, do while, for loop
// for of and for in


//  while loop  - loops through a block of code while a specified condition is true
//  let counter = 1;
//   document.write("Rafe Ahmad");
//   while(counter <= 10){
//      document.write('<br>');            /* (line break) */
//       counter++;
//  }


//  do while Loop (display text atleast one time)
//  let counter = 11;
//  do{
//      document.write('Rafe Ahmad');
//      document.write('</br>');
//      counter++;

//   }while(counter <= 10);


// for loop
//   let marks_10 = [90, 52, 60, 80, 75];
//   for(let i = 0; i < marks_10.length; i++){
//       console.log(marks_10[i]);
//   }


// for...of
// for...of loop iterates over values that the object defines to be iterated over.

//  let marks_10 = [90, 52, 60, 80, 75];
//  for(let key of marks_10){
//        console.log(key);
//  }


// for...in - 
// The for...in statement iterates over all enumerable properties of an object.

//  let marks = {
//   maths: 90, 
//   english: 52, 
//   science: 60, 
//   hindi: 80, 
//   computer: 75
// }
//  for(let key in marks){
//   console.log(`${key}: ${marks[i]}`);
// }


// const number = { 1: "1", 2: 2, 3: 3, 4: 4, 5: 5 };
// for (const num in number) {
//   console.log(number[num]);
// }

// Difference between for...in and for...of 
// The for...in can loop through both Arrays and Objects while the for...of can only loop through Arrays, Map, Set, arguments object.


// Function
// Normal Function
// function with Return type and Parameter
// Anonymouse Function\
// Expresssion Function
// Self Invoking Function

let userDDetails = {
  firstName: "Anurag",
  lastName: "Tiwari",
  courseList: [],
  website: "anuragtiwari.me",
  buyCourse: function (courseName) {
    this.courseList.push(courseName);
  },
  getCourseCount: function () {
    return `${this.firstName} is enrolled in ${this.courseList.length}`;
  },
};

// console.log(userDDetails);
userDDetails.buyCourse("FSJS");
console.log(userDDetails.getCourseCount());
