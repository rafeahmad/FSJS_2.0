// 11. Use the Date object to do the following activities


const findDate = new Date();

// - What is the year today?
console.log("Current year is", findDate.getFullYear());

// - What is the month today as a number?
console.log("Current month in number is", findDate.getMonth());

// - What is the date today?
console.log("Todays date is", findDate.getDate());

// - What is the day today as a number?
console.log("Current day is", findDate.getDay());

// - What is the hours now?
console.log("Current hours is", findDate.getHours());

// - What is the minutes now?
console.log("Current minutes is", findDate.getMinutes());


// - Find out the numbers of seconds elapsed from January 1, 1970 to now.
const now = new Date()  
const findSeconds = Math.round(now.getTime() / 1000);   
console.log("Number of seconds elapsed from january 1, 1970 till now", findSeconds);
//Convert miliseconds to seconds by dividing by 1000





