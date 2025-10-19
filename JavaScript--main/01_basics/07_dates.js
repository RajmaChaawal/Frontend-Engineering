let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString()); //CONVERTS DATE INTO DIFFERENT DATE FORMATS!
console.log(typeof myDate); //DATE is an Object!

// let myCreateDate = new Date(2023,0,23); Months Start from 0 in JS!
// let myCreateDate = new Date(2023, 0, 23, 5, 3);
// let myCreateDate = new Date("2023-01-14");
let myCreateDate = new Date("01-14-2023");
console.log(myCreateDate.toLocaleString());


let myTimeStamp = Date.now();

console.log(myTimeStamp);
console.log(myCreateDate.getTime());