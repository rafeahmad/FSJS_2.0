// 27. Write a program to print all the prime number between 0 to 100 (0 and 100 included).

function checkPrimeNumber(){
    let isprime;
    for(let i = 0; i <= 100; i++){
        isprime = 1;
        
        for(let j = 2; j <= i/2; j++){
            if(i % j == 0){
                isprime = 0;
                break;
            }
        }
        if(isprime == 1){
            console.log(i);
        }
    }
}
checkPrimeNumber();