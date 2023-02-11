// ...........ECMASCRIPT - 06 (ES6) or ES(2015).................


// Rest Parameter (...)

// The rest parameter (...) allows a function to treat an indefinite number of arguments as an array:

//  function sum(...args){
//     let result = 0;

//     for(let i = 0; i < args.length; i++){
//          result += args[i];
//     }
//      document.getElementById("demo2").innerHTML = result;
//  }

// sum(2, 5, 8);          //ouptput 15





// Spread Operator (...)
//The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.

// let array1 = [1, 2, 3];

// let array2 = [...array1, 4, 5, 6];

//    document.getElementById("demo2").innerHTML = array2;




//.......... ES6 - ARRAY DESTRUTURING............

//      let book = ["Advance Js", 200, 300];
 
//       let [name, page, price] = book;
     
//            console.log(price);






//    //you can set a default value 

//     // let book = ["Advance Js", , 200, 300];
//     // let [name, page=100, price, publication] = book;
//     //     console.log(page);  

//     //     //[page=100] default value
 




//     // Nested Array Destructuring
   //  let book = ["Advance Js", 200, 300, ["JavaScript", 2022]];
   //  let [name, page, price, [publication, year]] = book;
   //    console.log(publication);
    





 //Use Array destructuring in function

//  function book(){
//     return ["Advance Js", 200];
//  }

//  let [book_title, price] = book();

//      console.log(book_title);







//...........ES6 - OBJECT DESTRUCTURING................

// let book = {
//     name: "Advance js",
//     page: 200,
//     price: 150
// }; 

//  let{name, page, price, publication=2022} = book;
   
//    console.log(page);

//    document.getElementById("demo").innerHTML = book.name;


//Note: publication=2022 is a default value and you can also access this





//Nested Object Destructuring
// let book = {
//     name: "Advance js",
//     page: 200,
//     price: 150,

//      publication: {
//         pub_name: "techgun",
//         year: 2022
//      }
// }; 

//  let{name: title, page, price, publication: {pub_name: pub, year}} = book;
   
//    console.log(pub);
  

// //Note: title & pub is a short of name & pub_name property to access thier value






//Object Oriented Programming (oops)

//Class, Object and Inheritance

//Class

// class person {
//    constructor(n, a) {
//       this.name = n;
//       this.age = a;
//    }

//    sayHi(){
//       console.log("Hi, This code is running.....");
//    }

//    static sproperty = "something";

//    static hello(){
//       console.log("hello....");
//    }
// }


// let person1 = new person("Rafe Ahmad", 24);

// person1.sayHi();

// console.log(person1);


// //For static 
// console.log(person.sproperty);
// person.hello();

// //Note: you can't access static property or function by object 





//Inheritance

// class emp {
//    constructor (n){
//       // console.log("emp constructor called....");
//       this.name = n;

//    }
// }

// class manager extends emp{
//      constructor (n, d){
//       super(n);
//       this.department = d;
//      }
// }

// let mng1 = new manager("Rafe Ahmad", "web development");

// console.log(mng1);



//Note: all properties and method that defined in emp class copy in manager class through extends 






// class emp {
//    constructor (n){
//       this.name = n;

//    }

//    msg(){
//       console.log("Hi...");
//    }
// }

// class manager extends emp{
//      constructor (n, d){
//       super(n);
//       this.department = d;
//      }

//      info(){
//       super.msg();
//       console.log(this.name + " is manager of department " + this.department);
//      }
// }

// let mng1 = new manager("Rafe Ahmad", "web development");

// console.log(mng1.info());


//Note : You can access function of parent class in child class








//iherit multiple times 

// class emp {
//    constructor (n){
//       this.name = n;

//    }

//    msg(){
//       console.log("Hi...");
//    }
// }

// class manager extends emp{
//      constructor (n, d){
//       super(n);
//       this.department = d;
//      }

//      info(){
//       super.msg();
//       console.log(this.name + " is manager of department " + this.department);
//      }
// }

// class admin extends manager {

// }

// let admin1 = new admin("Rafe Ahmad", "web development");

// console.log(admin1);






//Private or Public

//you can make private property and function of class
// class emp{
//    #name = "";
//    constructor (n){
//       this.#name = n;
//    }

//    #getName(){
//       console.log(this.#name);
//    }

//    pubfun(){
//       this.#getName();
//    }


// }

// let Emp1 = new emp("Rafe Ahmad");

// console.log(Emp1.pubfun());





//Mixin

// let usefullMethod = {
//    sayHi(){
//       console.log("Hi....");
//    },

//    sayBye(){
//       console.log("Bye....");
//    }
// }

// class user {
//    constructor(){
//       this.name = "Rafe Ahmad";
//    }
// }

// Object.assign(user.prototype, usefullMethod);

// let usr = new user();

// console.log(usr.sayHi());

//Note: The definition of mixins can be stated as mixins is a class that contains methods that can be used by other classes without inheriting from that class






// Arrow Function

// let sum = (a, b) => {
//    return a + b;
// }

// console.log(sum(2, 5));




// //to code short if your code is in one line
// let sumA = (a, b) => a + b

// console.log(sumA(2, 5));






// Use anonymous arrow function in EventListener

document.addEventListener('click', () => console.log("clicked......"));








//............. Callback Function..................
//To Use function within a function through callback function

// function sayHello(){
//    console.log("Hello...");
// }


// function add(num1, num2, callback) {
//    console.log(num1 + num2);
//    callback();
// }

// let a = 10;
// let b = 20;

// add(a, b, sayHello);

// add(20, 5, function (){
//    console.log("Bye...");
// })

//you can also pass anonymous function within a function








//.......... JavaScript Array map() function.............

//  const numbers1 = [4, 5, 8, 7];
//  const numbers2 = numbers1.map(myFunction);

//  function myFunction(value){
//       return value * 2;
//  }

//  document.getElementById("demo").innerHTML = numbers2;




// To code short 

   // const numbers1 = [4, 5, 8, 7];
   // const numbers2 = numbers1.map((val) => val * 2);              //arrow function used

   // document.getElementById("demo").innerHTML = numbers2;