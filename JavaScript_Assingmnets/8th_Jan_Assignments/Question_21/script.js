// 21. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

const countryName = ["India", "Australia", "Japan", "Spain", "Brazil"];

if(!countryName.includes('Ethiopia')) {
    countryName.push('ETHIOPIA');
}

console.log(countryName);