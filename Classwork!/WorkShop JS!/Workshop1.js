//This is the content taught in the first workshop conducted by Fullstack Department of GLA University, Mathura!
// Based on ES6+ and Modern JS features!
// -> Conducted by Abhishek Singh (IgniteU)!


//What was the problems in ES5 that led to the introduction of ES6?
// -> var ignores Block Scope! since var has function scope but not block scope it causes variable redeclarability
var name = "alice";
var name = "bob"; // No error

console.log(name); //Bob; cut through due to name being a built in keyword!

// Solution : let and const being block scope and safe!

// Why do we need to assign a Non-Primitive data type with const rather than let?
// Because primitive data types are stored in Stack and have a fixed address!
// whereas non primitive data type variable are objects and its elements are stored in heap! and that objets address is store is callstack!
// which refers to the elements in heap! thats why!

//Arrow Functions - Cleaner, Simpler, Smarter!
const sum = (num,num2) => num + num2; // Implicit return, a feature of ES6

const double = (num) => num * 2; 

//TASK 1: Return true if number is even and false else ways! using implicit return statement and arrow function!
const oddEven = num => num % 2 === 0;
console.log(oddEven(5)) 
console.log(typeof oddEven) //type of oddEven is function!

//TASK 2: convert into arrow function with implicit return!

const greet = name2 => `Hello, ${name2}!`
const add = (a,b) => a + b;
const isEven = num => num % 2 === 0;

// Basically, this => is a signifier of return to the JS engine!

console.log(greet("Rajma"));
console.log(add(4,5));

// Use of implicit return in arrays: 
const numbers = [1,2,3,4,5]; 
const squares = numbers.map(num => num * num);
console.log(squares); 


//Template Strings : also known as String Interpolation! using backticks (``)
const age = 20;
console.log(`${greet("Rajma")} Age: ${age} and Born Year: ${2025 - age}`);

// TASK 2: Convert to template literals!
 const user = "Rajma";
 const points = 120;
 const message = `Hey ${user}, you have ${points} points!`;
 console.log(message);


//Understanding Java Objects

const person = {
    firstName: "Rajma",
    lastName: "Chaawal",
    age: 21,
    introduce: function () {
        return `Hi my name is ${this.firstName} ${this.lastName},
and I am ${this.age} years old`;
    }
}

console.log(person.introduce());

const hisAge = "age";

console.log(person.hisAge); //throws error that no property is listed in obj as hisAge!
console.log(person[hisAge]);//looks of age variable assignment out of object as well!

person.birthYear = 2025 - person.age;

person.greet  = (name, age) => `Hi, I am ${name} born in ${2025 - age}`; // *********DOUBT**********
console.log(person.greet(person.firstName,person.age));


//Destructuring of arrays:

const fruits = ["apple", "banana", "kiwi", "mango"];

const [Fruit1, , Fruit3] = fruits;

const Even = [2,4,6,8,10,12,14,16,18];
const[,num2, , , ,num6] = Even;
console.log(num2,num6);

const person2 = {
    name: "Ananya",
    age2: 25
};

const {name: naam, age2: umr} = person2;
console.log(naam, umr);


// Spread and Rest Operators --- Smarter Data Handling!

// -> used to extract values of arrays/objects easily using Destructuring
//  ->Spread Operators (...)
//  ->Rest Operators (...)

const arr = [1,2,3,4,5,6,7,8,9];
const [first, second, ...rest] = arr;
console.log(first,second);
console.log(rest);
console.log(arr);

const arr2 = [10,11,12,13];
const result = arr.concat(arr2);
console.log(result);

const result2 = [...arr,...arr2];
console.log(result2);

const name3 = "Aryan";
const age3 = 21;

const person3 = {
    name: name,
    age: age,
};


//Asynchronous Programming in JS:

console.log(20);
console.log(30);
console.log(40);
//setTimeout(()=> console.log("hello"), 2000); // takes time to execute up to 2 seconds!
console.log(50);

// let count = 1;
// const timer = setInterval(() => {
//     console.log(`Hello ${count}`);
//     count++;
//     if (count > 5) clearInterval(timer); //stops after 5 steps!
// }, 1000)

//TASK 3: MAKE A 10 SEC Time Bomb Counter!

let count2 = 10;
const timer2 = setInterval(() => {
    console.log(`Tick ${count2}`);
    count2--;
    if(count2 < 0) {
        console.log("<<<<===**BOOM**===>>>>"); 
        clearInterval(timer2);
    }
},1000);