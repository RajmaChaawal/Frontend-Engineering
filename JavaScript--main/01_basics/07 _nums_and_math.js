const score = 400;

const balance = new Number(100);
console.log(balance);

console.log(balance.toString());//gives additional methods of strings! by converting it in strings!
console.log(balance.toFixed(2));//gives precision of specified digits! but doesnt rounds off!

const otherNumber=23.866;
console.log(otherNumber.toPrecision(3)); //focuses on specified number of digits and rounds off the rest!

const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN')); //adds , according INDIAN NUMBER SYSTEM!

// *********************** MATHS *************************

console.log(Math); //shows math is an object!

console.log(Math.abs(-4)); //converts -ve value to +ve!
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4,3,6,8));
console.log(Math.max(4,3,6,8));


console.log(Math.random()); //gives random values from 0 to 1!
console.log(Math.floor(Math.random()*10)); //gives value always between 0 to 9!

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1) + min)); //A formula to limit the range of random method!