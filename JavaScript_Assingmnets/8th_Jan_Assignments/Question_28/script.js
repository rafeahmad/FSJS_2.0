
//  28. Write a program to print the given patterns using the loops-
	

/* a. Print a triangle pattern, if the given input is 3 then the pattern should be similar to the given output
	   *
	   **
	   ***
*/
    
let trianglePattern = "";
for(let i = 0; i < 3; i++){
    for(let j = 0; j <= i; j++){
        trianglePattern += "*";
    
    }
    trianglePattern += '\n';      
}

console.log(trianglePattern);


/*
b. Print a square pattern, if the input is 3 then the output should be similar to the given output
	   ***
	   ***
	   ***
*/
                                        
let squarePattern = "";                          
for(let i = 0; i < 3; i++) {                     
    for(let j = 0; j < 3; j++) {                 
        squarePattern += "*";
    }
    squarePattern += '\n';
}

console.log(squarePattern);


/*
c. Print a pyramid pattern, if the input is 3 then the output should be similar to the given output
	     *
	    ***
 	   *****
*/

let pyramidPattern = "";
for(let i=1; i<=3; i++){
    for(let j=1; j<=3-i; j++){
        pyramidPattern += " ";
    }
    for(let k=0; k<2*i-1; k++){
        pyramidPattern += '*';
    }
    pyramidPattern += "\n";
}

console.log(pyramidPattern);