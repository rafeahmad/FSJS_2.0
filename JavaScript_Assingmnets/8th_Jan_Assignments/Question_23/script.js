// 23. Write a program to check that the number given by the user is a prime number or not.


let num = prompt("Check prime number");
let isprime = true;
if(num > 1){
    for(let i = 2; i < num; i++){
        if(num % i == 0){
            isprime = false;
            break;
        }
       
    }
    if(isprime == true){
        console.log("Prime number")
    }
    else {
        console.log("Not a prime number")
    }
}







    


       

