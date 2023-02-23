// Var and Let
// Global
// local (Script)
// local (Script)
// Hoisting
// Execution Content
// Call Stack
// Closure

// What is Hoisting?
// Hoisting is a behavior in which a function or a variable can be used before declaration.

// Ex-
// console.log(a);       // undefined
// var a;

// Callstack
// Callstack is a place to keep all memory


// Ex-

// sum();
// sub();
// console.log(a);
// var a = 10;

// // Message i shared with you on whatsapp
// function sum() {
//   var num1 = 10;
//   var num2 = 20;
//   console.log(num1 + num2);
// }

// function sub() {
//   var num1 = 10;
//   var num2 = 20;
//   console.log(num1 - num2);
// }


// Lexical scope -
// Lexical scope allow us to access the variables of the current scope as well as the outer scope.

// function sum() {
//   var a = 10;
//   function sub(paramter) {
//        console.log(a);
//   }
//   sub(a);
// }
// sum();           //10


// Closure -
// The closure is a function that accesses its lexical scope even executed outside of its lexical scope.

// Ex-
// function user(){
//   var firstName = "Rafe";

//   function sayFirstName(){
//     console.log(firstName);
//   }
//   return sayFirstName;
// }

// var result = user();
// result();          //Rafe


// Ex 2nd -
// function sum(x){
//   return function(y){
//     return x + y;
//   }
// }

// var add = sum(4);
// console.log(add(5));     // 9

// //another way to call
// console.log(sum(4)(5));



// HOF
// Higher order function takes other function as a parameter or return a function as a value.

// Callback
// A function which can be passed as parameter to other function


// set timeout
// setTimeout(() => {
//   console.log("hello Duniya");
// }, 3000);

// set interval
// setInterval(() => {
//   console.log("Refresh");
// }, 1000);


// Functional Programming
// So that we dont have to write regular loop and function

// Foreach
// const arr = [
//   "Shiva",
//   "Anurag",
//   "Yuvrah",
//   "Chiranjeev",
//   "VYOM",
//   "Kaushik",
//   "Azhar",
// ];

// arr.forEach((val) => {
//   console.log(val);
// });

// IMP
// Map, Filter, Reduce

// const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 16];
// const num = number.map((val) => val * 3.14);
// console.log(num);

// Filter

const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Indialand",
  "Japan",
  "Kenyaland",
  "pakistanland",
];

// const count = countries.filter((country) => country.includes("land"));
// console.log(count);
// Reduce
