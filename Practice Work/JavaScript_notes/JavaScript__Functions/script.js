// JavaScript Function
// JavaScript function allows us to define a block of code, give it a name and then execute it as many times as you want. Suppose we have to write same code and logic again and again this is not a good practice in JavaScript, We should avoid repeatability and follow the DRY (Don't repeat yourself) rule.

//How to create a function
// To create a function first we write keyword function then the name of function, and then curly braces, The part of the function inside the curly braces {} is the body of the function. Then we invoke the function. Let's understand with the examples.

//Example 1 -

// function message() {
//     console.log("Hello Everyone");
// }
// message();


//Example 2 -

// function fullName(firstname, lastname){
//     console.log("My name is " + firstname + " " + lastname);
// }
// fullName("Rafe", "Ahmad");



// How to write a tables with the function
// function table(num){
//     for(let i = 1; i <= 10; ++i){
//         console.log(`${num} * ${i} = ${num * i}`);
//     }
// }
// table(6);
// table(7)



        




// Arrow function

// ES6 version allow us to create a functions in a shorter and cleaner way compared to regular function that is called arrow function. Let's understand with the examples -

// let sum = (a, b) => a + b;
// console.log(sum(2, 2));


// Multiline arrow function
// Example 1st :

// let num = (a, b) => {
//     let result = a * b;
//     return result;
// }
// console.log(num(8, 8));


// Example 2nd :

// let func1 = (question, yes, no) => {
//     if(confirm(question)) yes();
//     else no();
// }

// func1("do you agree?", no = () => console.log("agreed"), yes = () => console.log("not agreed"));


// Anonymous function
// Function without a name is called anonymous function. We can invoke anonymous function like this -

// let myFunction = function(){
//     console.log("Anonymous function called");
// }
// myFunction();


// let myFunction = () => console.log("Anonymous function called2");
// myFunction();



//Immediately invoked function

//  (() => {
//      console.log("function running successfully");
//  })();


// Returning a value

// function compare(a, b){
//      if(a > b){
//          return 1;
//      }
//      else if(b > a){
//         return -1;
//      }
//      else{
//         return 0;
//      }
// }

// let result = compare(6, 4);

//   console.log(result);




// SetTimeOut

// setTimeout(() => {
//     console.log("Hello there, My name is Rafe Ahmad")
// }, 3000);

//function will display after 3 second with the help of setTimeout method




// SetInterval

// setInterval(() => {
//     console.log("Hello I am running every 2 second")
// }, 2000);

//function will display every two second with the help of setInterval method



