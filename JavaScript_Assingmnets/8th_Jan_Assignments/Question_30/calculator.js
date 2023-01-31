// 30. Create a simple calculator program in JavaScript which can perform the addition, substraction, multiplication and division on given numbers.

let val1 = 10;
let operator = "+";
let val2 = 20;

function calculator(val1,operator,val2) {
    if(operator == "+"){
        console.log(`${val1} + ${val2} = `, val1 + val2);
    }
    else if(operator == "-"){
        console.log(`${val1} - ${val2} = `, val1 - val2);
    }
    else if(operator == "*"){
        console.log(`${val1} * ${val2} = `, val1 * val2);
    }
    else if(operator == "/"){
        console.log(`${val1} / ${val2} `, val1 / val2);
    }
    else {
        console.log("Please enter a valid operator")
    }
}

calculator(val1,operator,val2);

