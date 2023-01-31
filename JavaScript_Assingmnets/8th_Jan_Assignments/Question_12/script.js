// 12. Create a human readable time format using the Date time object
/* - YYYY-MM-DD HH:mm
   - DD-MM-YYYY HH:mm
   - DD/MM/YYYY HH:mm  */

const a = new Date();
const y = a.getFullYear();
const month = ["Jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"];
const m = month[a.getMonth()];
const d = a.getDate();
const h = a.getHours();
const min = a.getMinutes();

console.log(y + "-" + m + "-" + d + " " + h + ":" + min);
console.log(d + "-" + m + "-" + y + " " + h + ":" + min);
console.log(d + "/" + m + "/" + y + " " + h + ":" + min);

