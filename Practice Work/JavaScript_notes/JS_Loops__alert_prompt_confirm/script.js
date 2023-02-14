          document.getElementById("demo").style.color = "blue";         
           
        //    while loop  (how to display text 10 times)
        //The while loop loops through a block of code as long as a specified condition is true
    
        //  let counter = 1;

        //   while(counter <= 10){
        //      document.write("TechGun");
        //      document.write('<br>');            /* (line break) */
        //       counter++;
        //  }


  




            // Addition of even Number between 1 to 100

     
    //  let count = 1;
    //  let   sum = 0;

    //     while(count <= 100){
    //         if(count % 2 == 0){
    //             sum = sum + count;
    //         }
    //         count++;
           
    //     }
    //     console.log(sum);

 


 


    
//   do while Loop (display text atleast one time)

  
//    let counter = 11;

//    do{
//       document.write('TechGun');
//       document.write('</br>');
//       counter++;

//    }while(counter <= 10);







     
// for Loop (........all conditions in one parantheses()..........)


//    for(let counter = 1; counter <= 10; counter++){
//           document.write('TechGun');
//    }





//  ...........break loop...........
        
//     for(let counter = 1; counter <= 10; counter++){
        
//        if(counter == 5){
//           break;            /* display number only four times*/
//       }

//        document.write(counter);
//        document.write('<br>');
// }





// ........continue Loop...........

    //   for(let counter = 1; counter <= 10; counter++){
        
    //         if(counter == 5){
    //             continue;       /* display number 1 to 10 except 5*/
    //         }
      
    //         document.write(counter);
    //         document.write('<br>');
    //   }  







//  .........nested Loop.........


        // for(let counter = 1; counter <= 10; counter++){
        //         document.write(counter);
        //         document.write('<br>');
               

            
        //     for(let counter2 = 1; counter2 < 3; counter2++){
        //         document.write('TechGun');
        //         document.write('<br>');
                
        //     }
        // }




// ============= All for Loops ============

 let marks_10 = [90, 52, 60, 80, 75];

//for loop
//   for(let i = 0; i < marks_10.length; i++){
//       console.log(marks_10[i]);
//   }


//for...of
//  for(let i of marks_10){
//        console.log(i);
//  }


 //for...in 
//  for(let i in marks_10){
//   console.log(marks_10[i]);
// }


//forEach  (operation in existing array)
// marks_10.forEach((element)=> {
//      console.log(element * element);
// })





// let n = "Ahmad";

// for(let i = 0; i < n.length; i++){
//    console.log(m[i])
// }





/*
const x = Math.floor((Math.random() * 100) + 1);

console.log(x)

for (let i = 0; i < 100; i++) {

let n = 100 - (i + 1);
let y = prompt("Enter a Guess", i);
y = Number.parseInt(y);

if (x < y) {
console.log("Number is less than ", y)
}
 else if (x > y) {
console.log("Number is greater than ", y)
}
 else {
console.log("You have entered the right number")
console.log("You score ", n)
break;
}

}*/





//Change Background Color of All li's
// Array.from(document.getElementsByTagName("li")).forEach((element)=>{
//         element.style.background = "cyan";
// })
