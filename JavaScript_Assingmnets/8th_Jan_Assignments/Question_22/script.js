// 22. The following is an array of 10 students ages:
/* => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

 */


const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

// - Sort the array and find the min and max age
const findAge = ages.sort();
console.log(findAge);

const findMinAge = findAge[0]
const findMaxAge = findAge[findAge.length - 1];
console.log("Min age is", findMinAge);
console.log("Max age is", findMaxAge);


// - Find the median age(one middle item or two middle items divided by two)
const medianAge = (ages[ages.length / 2] + ages[(ages.length / 2) - 1]) / 2;
console.log(`The median age is: ${medianAge}`);


// - Find the average age(all items divided by number of items)
let sum = 0;
for(i = 0; i < ages.length; i++) {
    sum += ages[i];
}

const averageAge = sum / ages.length;
console.log("Average age is ", averageAge);


// - Find the range of the ages(max minus min)
const findRange = ages[ages.length - 1] - ages[0];
console.log("The range of the age is", findRange);

// - Compare the value of (min - average) and (max - average), use abs() method 
const min = Math.abs(ages[0]-averageAge);
const max = Math.abs((ages.length-1)-averageAge);
console.log(min);
console.log(max);

if(min > max){
    console.log(`Min is grater than max by ${min-max}`);
}
else{
    console.log(`Max is greater than min by ${max-min}`);
}