// 29. Write a javascript program which takes the input of filename as string and prints the extension of the file in the console.

let fileName = prompt("Enter file name");
function file(){
    let a = fileName.indexOf(".");
    let b = fileName.slice(a);
    console.log(`Extension of the file ${fileName} is : ${b}`);
}

file(fileName);