                          // ARRAY IN JAVASCRIPT
             

// Array is a collection of items, You can store multiple items in a variable
    
//  let book = ["Maths", "Physics", "Bio", "Compuer Science"];

//          console.log(book[0]);        //output : Maths
//          console.log(book[3]);        //output : Computer Science



//  //   book[1] = ("Chemistry");      //(replace physics from chemistry)
//  //      console.log(book);



//Note: you can also store number or both number & string in one Array

                
    



//Find how many element in a array use function lentgh()

// let book = ["Math", "English", "Bio", "Physics"];
//    console.log(book.length);   

// Output - 4


            


//Add element in array at last element use function push()

// let book1 = ["Math", "English", "Bio", "Physics"];
//    book1.push("Hindi");
//    console.log(book1);

 





// Add any new element to the beginning of an array use function unshift()

//   let book = ["Math", "English", "Bio", "Physics"];
//      book.unshift("Hindi");
//      console.log(book);







// Remove element from last use function pop()

// let book = ["Math", "English", "Bio", "Physics"];
//   book.pop();
//   console.log(book);





//Remove element from beginning use function shift()

// let book = ["Math", "English", "Bio", "Physics"];

// book.shift();          
// book.shift();
//  console.log(book);           

//output : ["Bio", "Physics"]




     
// splice()
//Remove, replace or adding elements specified position of the array

//Remove by splice() method
  // let book = ["Math", "English", "Bio", "Physics"];

  // book.splice(1, 1);  
  //      //output : only remove English

  //        //  book.splice(1, 2);
  //             //output : remove English and Bio

  //  console.log(book);

          


//add by splice() method  
// array.splice(index, howmany, item1, ....., itemX)

// const fruits = ["Banana", "Orange", "Apple", "Guava"];
//    fruits.splice(1, 2, "Kiwi");

//      console.log(fruits);

           


// At position 2, add 2 elements: 
// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// fruits.splice(2, 0, "Lemon", "Kiwi");
          
//    console.log(fruits);

          

//At position 2, add new items, and remove 1 item:
// const fruits = ["Banana", "Orange", "Apple", "Mango"];

//    fruits.splice(2, 1, "Lemon", "Kiwi");

//    console.log(fruits);




//Converting to array use function split()

// let text = "This is my book";

// let wordarray = text.split(" ");

//   console.log(wordarray);





//Change array into text use function join()

// let book = ["Math", "English", "Bio", "Physics"];
// let text = book.join(" ");
//   console.log(text);

// by using of this function you can add anything between the element






//Find position of element use function indexof()

// let book = ["Math", "English", "Bio", "Physics"];

// let position = book.indexOf("Bio");

//  console.log(position);      // 2






//Check Is varaible array or not

  // let book = ["Math", "English", "Bio", "Physics"];

  //   // let book = "Math";

  //  console.log(Array.isArray(book));

  // (output will show in true or false)




// Map()
// let maths = [1, 4, 9, 16, 25];
// console.log(maths.map(Math.sqrt));

// Output - [1, 2, 3, 4, 5]



// reverse()
// let maths = [1, 4, 9, 16, 25];
// console.log(maths.reverse());

// Output - [25, 16, 9, 4, 1]



// Sort()
// let names = ['Hitesh Sir', 'Anurag', 'Rafe', 'Anirudh', 'Bipul'];
// console.log(names.reverse(names.sort()));



// include()
// let num = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(num.includes(7));

// Output - true


// fill()
// This method returns an array by filling all elements with a specified value.

// let book = ["Math", "English", "Bio", "Physics"];
// let filled = book.fill("Hindi");

// Output - ['Hindi', 'Hindi', 'Hindi', 'Hindi']



// filter() -
// This method returns a new array with all elements that comply with the condition by the given function.

//  let number = [2, 18, 5, 8, 9, 12, 15];
//  let filtered = number.filter((num) => {
//        return num < 10
//  }); 
//  console.log(filtered);

//    Output -  [2, 5, 8, 9]


// some() -
// with this method, If any one element passes the text it returns true otherwise returns false

//  let number = [2, 4, 15, 8, 9];
//  let check = number.some(function (num){
//  return num > 10;
//  }); 
//  console.log(check);

//  Output - true



// reduce() -
// This method executes a reducer function for array element and returns a single value

// const number = [2, 4, 5, 4, 5];
// const sum = number.reduce((accumulator, currentValue) => {
//      return accumulator + currentValue;
// })
//  console.log(sum)

// Output - 20




// toString() -
// With this method, We can convert the array elements into a string and separate each other by a comma

// let books = ["Math", "Hindi", "Science", "English"];
// let changed = books.toString();
// console.log(changed);

// Output - Math,Hindi,Science,English




              


//Add multiple element in a array use function concat()

// let book = ["Math", "English", "Bio", "Physics"];
// let book2 = ["Hindi", "Urdu"];
// let book3 = ["Chemistry", "Punjabi"];
// let Newbook = book.concat(book2, book3);

//     console.log(Newbook);

// Output -
// ['Math', 'English', 'Bio', 'Physics', 'Hindi', 'Urdu', 'Chemistry', 'Punjabi']









// MULTI DIMENTIONAL ARRAY  (array within array)


 //  let bookwithpages = [
 //       ["Math", "300"],
 //       ["English", "200"],
 //       ["Bio", "250"]
 //  let fetch = bookwithpages[1][
 //    console.log(fetch);

 //Note: you can add more array within your array





          


//for() loop in Array (to excess elements of array)

//  let book =  ["Math", "English", "Bio", "Physics"];
//  let booklength = book.length 
//  for(i = 0; i < booklength; i++){
//       console.log(`Element ${i} is ${book[i]} \n`);
//  }



       


//Another function to excess element of array use forEach()

// let book =  ["Math", "English", "Bio", "Physics"];

// book.forEach((value) => {
//     console.log(value);
// m});
          


         

  


















       
           

               




