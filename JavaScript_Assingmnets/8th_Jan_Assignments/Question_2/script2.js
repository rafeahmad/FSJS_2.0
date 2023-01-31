//02. Declare variables to store your first name, last name, marital status, country and age and display them using interpolation method.

const firstName = "Rafe";
const lastName = "Ahmad";
let maritalStatus = "Unmarried";
const country = "India";
let age = "24";

const aboutMyself = `Hi My name is ${firstName} ${lastName} , I am from ${country} , I am ${age} years old and ${maritalStatus} now.`;

console.log(aboutMyself);

//Output
// Hi My name is Rafe Ahmad , I am from India , I am 24 years old and Unmarried now.