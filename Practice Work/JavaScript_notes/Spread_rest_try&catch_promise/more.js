// Rest and spread
// try and Catch
// promises and at the end a small MCQs Games

// Rest and Spread (...)


// Rest parameters
// The rest parameter syntax allows a function to accept an indefinite number of arguments as an array.

//  function sum(...args){
//     let result = 0;

//     for(let i = 0; i < args.length; i++){
//          result += args[i];
//     }
//      console.log(result);
//  }

// sum(2, 5, 8);          //ouptput 15


// Example 2nd -
// function sum(...args) {
//   // Rest Op
//   console.log(args);
//   let sum = 0;
//   for (const x of args) {
//     sum = sum + x;
//   }
//   return sum;
// }

// console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 0));





// Spread Operator 
//The spread operator (…) allows us to expand an iterable like array into its individual elements.

// function sumone(x, y) {
//   return x + y;
// }

// let vari = [9, 7, 10, 11, 12, 13 ];      // Variable is Array
// console.log(sumone(...vari));            // Spread


//Example 2nd-
// let array1 = [1, 2, 3];
// let array2 = [...array1, 4, 5, 6];

//   console.log(array2);




// Try and Catch
//The try...catch statement is comprised of a try block and either a catch block, a finally block, or both. The code in the try block is executed first, and if it throws an exception, the code in the catch block will be executed. The code in the finally block will always be executed before control flow exits the entire construct.

// Syntax
// try {
//   let firstname = "Anuarg";
//   console.log(firstname);
// } catch (err) {
//   console.log("Variable name missing");
// } finally {
//   console.log("I will run");
// }


// Different type of error we have in Javascript
/*
- Reference error 
- syntax error
- TypeError
*/

// promise
// - pending
// - fullfilled
// - rejected

// Event loop = completed


// Task one completed

// const userOne = () => {
//   console.log("hello One");
// };

// task => Depen
// const userTwo = () => {
//   setTimeout(() => { // promise =>Resolve Rejected
//     console.log("Hello i am inside");
//   }, 3000);
//   console.log("hello two");
// };

// const userthree = () => {
//   console.log("hello three");
// };

// userOne();
// userTwo();
// userthree();


// promise

// const one = () => {
//   return "index page";
// };

// const two = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Credential Correct");
//     }, 3000);
//   });
// };

// const three = () => {
//   return "redicret to home page";
// };

// const callMe = async () => {
//   let Valone = one();
//   console.log(Valone);

//   let ValTwo = await two();
//   console.log(ValTwo);

//   let ValThree = three();
//   console.log(ValThree);
// };

// callMe();
