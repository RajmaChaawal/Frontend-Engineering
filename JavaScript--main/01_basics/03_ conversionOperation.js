let score = "33abc";

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);// OUTPUT will be NaN; that is string to number is possible but not valid all the times!
// "33" => 33
// "33abc" => NaN
// true =>1; false => 0


let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn); //TRUE
 // 1 => true; 0 => false
 // "" => false; "Rajma" => true


 let someNumber = 33
 let stringNumber = String(someNumber);
 console.log(typeof stringNumber);

// ************************** OPERATION ****************************
let value = 3
let negValue = -value
console.log(negValue) // -3

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(2/3);
console.log(2%3);


let str1 = "hello"
let str2 = "rajma"
let str3 = str1 + str2 
console.log(str3)

console.log("1" + 2); // 12
console.log(1 + "2"); // 12
console.log("1" + 2 + 2); // 122
console.log(1 + 2 + "2"); //32
console.log(+true); // 1
console.log(+""); // 0

let num1, num2, num3;
num1 = num2 = num3 = 2 + 2;
let gameCounter = 100
gameCounter++;
console.log(gameCounter);

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"
