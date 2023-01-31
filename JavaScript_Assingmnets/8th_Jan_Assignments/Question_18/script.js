// 18. Write a program which tells the number of days in a month, now consider leap year.

function leapYear(year, month) {
    const days = new Date(year, month, 0).getDate();
    return days;
}
console.log(leapYear(2004, 2));
console.log(leapYear(2022, 2));