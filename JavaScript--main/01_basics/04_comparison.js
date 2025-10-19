// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0); //false
console.log(null >= 0); //true
console.log(null == 0); //false;
//because == equality check and > < >= <= comparisonswork differently!
// Comparisons convert null --> number, treating it as 0!
// while Equality compares it as a null value to a 0! Hence false!

console.log(undefined == 0);
console.log(undefined < 0);
console.log(undefined > 0);

// Strict Check:-

console.log("2" === 2); //compares data types as well!