// 14. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript? Create a program which checks that the given number is even or odd.

const number = prompt("Enter number and check its even or odd");
if(number % 2 == 0) {
    console.log("Even number");
} else {
    console.log("Odd number");
}