// 17. Write a program which tells the number of days in a month.

const days = prompt("Check number of days in a month and first word should be uppercase");

if(days == "January" || days == "March" || days == "May" || days == "July" || days == "August" || days == "October" || days == "December") {
    console.log("The number of days in this month is 31");
}
else if(days == "February") {
    console.log("28 days in common years and 29 days in leap year");
}
else if(days == "April" || days == "June" || days == "September" || days == "November") {
    console.log("The number of days in this month is 30");
}
else {
    console.log("Please enter valid month");
}