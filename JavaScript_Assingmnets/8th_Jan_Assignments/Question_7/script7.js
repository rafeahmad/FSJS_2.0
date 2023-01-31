// 07. Declare an array containing the multiple values and use lastIndexOf to determine the position of the first and last occurrence of a word "pw skills".

const arr = ["iNeuron", "pw skills", "google", "lco", "linkdin","pw skills", "discord"]
const firstOccurence = (arr.length- 1) - arr.reverse().lastIndexOf("pw skills");
const lastOccurence = arr.lastIndexOf("pw skills");

console.log( "First occurence of pw skills : ", firstOccurence);
console.log( "Last occurence of pw skills : ", lastOccurence );


// Output -
// First occurence of pw skills :  1
// Last occurence of pw skills :  5

// Note : In the given question we had to find out first and last occurence of word pw skils using only lastIndexOf() method that's why I didn't use indexOf() method for first occurence. 