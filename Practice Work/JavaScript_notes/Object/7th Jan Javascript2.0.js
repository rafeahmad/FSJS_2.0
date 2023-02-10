// Object

// let person = {};                   //this is an empty object 
//     console.log(person); 



//properties inside the object

// let person = {
//   firstName: "Rafe",
//   lastName: "Ahmad"
// };  

//        console.log(person);

//       //you can access object's properties method

//      //   console.log(person.firstName);
//      //    console.log(person['firstName']);




//you can modify object's properties

  //  let person = {
  //   firstName: "Rafe",
  //   lastName: "Ahmad"
  // };  

  //   person.firstName = 'Naashit';

  //      console.log(person.firstName);



  //you can also make new properties outside that object 

  // let person = {
  //   firstName: "Rafe",
  //   lastName: "Ahmad"
  // };  

  //    person.age = 24;
  
  //       console.log(person); 




  //you can delete any property

  // let person = {
  //   firstName: "Rafe",
  //   lastName: "Ahmad"
  // };  

  //    delete person.lastName;
  
  //       console.log(person); 





  // Check property used or not by "in" operator (show in True or False)

  // let person = {
  //   firstName: "Rafe",
  //   lastName: "Ahmad"
  // };  
  
  //       console.log('age' in person); 






  //iterating over properties of an object

  // (for in loop)

  // let person = {
  //   firstName: "Rafe",
  //   lastName: "Ahmad"
  // };  

  //   person.age = 24;

     
  //  for(let key in person){

  //         console.log(key + ": " + person[key]);

  //  }

   //Note: key is a new variable inside the for loop





   //Object method in JavaScript
  
  //  let person = {
  //     firstName: "Rafe",
  //     lastName: "Ahmad"
  //  };   


  //  // 1st method
  //   person.sayHello = function () {
  //           console.log("Hello !");
  //   }

  //   person.sayHello();






    // 2nd method
      // function myfunction() {
      //       console.log("Hello !");
      // }

      // person.sayHello = myfunction;

      // person.sayHello();







    // 3rd method 

//    let person = {
//     firstName: "Rafe",
//     lastName: "Ahmad",
//     sayHello: function (){
//            console.log("Hello !");
//     }
//  };


//      person.sayHello();




//4th method (from 2015 ES6) 

// let person = {
//   firstName: "Rafe",
//   lastName: "Ahmad",
//   sayHello (){
//          console.log("Hello !");
//   }
// };

// person.sayHello();


// Note: By using these any 4 methods you can make method of any object
   


//The JavaScript "this" keyword

// let person = {
//   firstName: "Rafe",
//   lastName: "Ahmad",
//   sayHello (){
//          console.log("Hello ! I am "+this.firstName+" and I have a "+car.brand+" car");
//   }
// };

// let car = {
//     brand: "Tata",
//     model: "Safari"
// }

// person.sayHello();


//Note: if inside the same object is to be access their property then use "this" keyword not object name



const object = {
    rocket: '🚀',
    home: '🏡'
}

// string, number, bigint, boolean, null, undefine, symbol

const obj1 = {
    rocket: '🚀',
    fuel: 2,
    config: {
        name: 'mars'
    }
}

obj1.fuel = 200
obj1['year'] = 2000

// part 2

const obj2 = new Object() //constructor
obj2.redbook = '📕'
// obj2.1bluebook = '📘'
obj2.myValue = '1 blue book'

// console.log(obj2);


// part 3
const powers = {
    fly: true,
    cordinate: Math.random() + 2
}

const obj3 = Object.create(powers)
// console.log(obj3);
// console.log(obj3.cordinate);
// console.log(Object.getPrototypeOf(obj3));

//part 4

const obj4 = Object.create({})
Object.defineProperty(obj4, 'book', {
    // icon: '📘'
    get: () => '📘',
    enumerable: true
})

// console.log(obj4);
// console.log(obj4.book);
// console.log(Object.getPrototypeOf(obj4));

for(k in obj4){
    //console.log("value is: ", k);
}

//part 5
const obj5 = {
    comics : 'marvel',
    pen: '',
    printComic: function(){
        this.pen += '🖊️🗒️'
        console.log(this);
        return this;
    },
    // printaComic: () => {
    //     // this.pen += '🖊️🗒️'
    //     console.log(this);

    // },
    
}

console.log(obj5.printComic().printComic().printComic());
// console.log(obj5.printaComic());

