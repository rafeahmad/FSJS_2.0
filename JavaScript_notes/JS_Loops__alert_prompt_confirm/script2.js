             /*  JavaScript Alert, Confirm and Prompt  */
              //  Function to interact with the user 

                               /*    alert()   */
                               // shows a message 
    
              // alert("Hello World");





                                /*    prompt()  */
                // shows a message, input text, it returns the text on OK or, if Cancel button or Esc is clicked,null.


            //  let age = prompt('Enter your age', 18);   // (18 is default value)

            //   if(age != null ){
            //     document.write(`Your age is ${age}`);
            //   }
            //   else {
            //     document.write('Age field was blank');
            //   }   
    
          




                          /*  confirm()  */
                    // shows a message, confirm with "OK" or "Cancel", it returns true for "OK" and false for "Cancel/Esc".

              // let response = confirm('Are you sure, you want to Delete?');

              //   if(response){
              //       document.write('your file was deleted');
              //   }
              //   else {
              //       document.write('Not Deleted');
              //   }   







                                 /* Type conversion in JavaScriprt */ 

                  // Find the type of conversion
                // let type = "Naashit";  //(put any number, text or boolean to find the type)
                //   alert(typeof type);




                  // Automatic conversion

        //Examples :
                // let type = 5 + null;  //(output will be 5null & string)
                //  console.log(type);
                //  console.log(typeof type);


                // let type = "5" + 2;      //(output will be 52 & string)
                //     console.log(type);
                //     console.log(typeof type);


                // let  type = "5" - 2;     //(output will be 3 & number)
                //        console.log(type);
                //        console.log(typeof type);


                //  let type = 5 * "yes";    //output will be NaN(not a number)
                //         console.log(type);
                //         console.log(typeof type);










                       /* Conversion Function in JavaScript */
                      //  convert type into another type
                      
                      
            // 1. String()
            // 2. Number()
            // 3. Boolean()
                   


            // convert number into string
            // let type = 4;
            //    console.log(typeof type);

            // let NewType = String(type);
            //    console.log(typeof NewType);





            // convert boolean into string
            // let type = false;
            //    console.log(typeof type);

            // let NewType = String(type);
            //    console.log(typeof NewType);





          //  convert string into number
          // let type = "20";
          //      console.log(typeof type);

          //   let NewType = Number(type);
          //      console.log(typeof NewType);


         // convert boolean into number
          // let type = true; 
          //      console.log(typeof type);

          //   let NewType = Number(type);
          //      console.log(NewType);   
          //      console.log(typeof NewType);




      //     // convert number into boolean
      //     let type = 0; 
      //     console.log(typeof type);

      //  let NewType = Boolean(type);
      //     console.log(NewType);   
      //     console.log(typeof NewType);

      //     // Note: All numbers convert into true only 0 convert into false









// let age = prompt("Enter your age");
//  age = Number.parseInt(age);

//  if(age >= 18){
//     document.getElementById("demo").innerHTML = "you can drive";
//  }
//  else {
//     document.getElementById("demo").innerHTML = "you can't drive, because you are under 18";
//  }



let num = prompt("Enter Your Number");
 num = Number.parseInt(num);

 if(num > 5){
    location.href = "https://www.google.com";
 }



//  let chngBg = prompt("Change your Background");

//      document.body.style.background = chngBg;
  