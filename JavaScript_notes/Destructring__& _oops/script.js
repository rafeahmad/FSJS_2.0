
//setTimeOut and setInterval

// let timeout = setTimeout(() => alert("Please subscribe..."), 3000);   


// //   if(){
// //     clearTimeout(timeout);
// //   }                             //output: stop setTimeOut
 





//   let t1 = setInterval(fun, 2000);

//     function fun(){
//         console.log("Please subscribe...");
//     }

    
//     //To stop interval
//     let btn = document.getElementById("btn-4");

//      btn.addEventListener('click', function(){
//         clearInterval(t1);
//      });







//Location object in JavaScipt

//  console.log(location.href);
//  console.log(location.pathname);
//  console.log(location.protocol);



let btn = document.getElementById("btn");

     function fun(){
        window.location = "https://www.google.com";
   //   location.href = "https://www.google.com";

   

     // location.assign("https://www.google.com");
     // location.replace("https://www.google.com");

     }

// location.assign and href put entry in history in browser but location.replace didn't 
// location.replace don't show back arrow to go back






//Screen Object
 
   // console.log(screen.colorDepth);
   // console.log(screen.orientation);
   // console.log(screen.width);





// Navigator Object :   Get information about browser , java run or not, detect browser

 console.log(navigator.cookieEnabled);








 //JavaScript Array reduce();
// const numbers = [45, 4, 9, 16, 25];
// let sum = numbers.reduce(myFunction);

// function myFunction(total, value) {
//   return total + value;
// }

// document.getElementById("demo").innerHTML = "The sum is " + sum;




   
  //click event with if else condition 

   let checkAge = document.getElementById("btn2");

     checkAge.addEventListener('click', () => {
      
      let age = prompt("Check Your Age");

      if(age >= 18){
         document.getElementById("demo").innerHTML = "you are eligible";
      }
      
      else {
         document.getElementById("demo").innerHTML = "you are not eligible";
      }

   });







     function run(){
      

     let btn5 = document.getElementById("btn5");
     
     let para = document.getElementById("para");

     if(para.style.display != 'none'){

        para.style.display = "none";

     }
     else {
      para.style.display = "block";
     }

     }








   


