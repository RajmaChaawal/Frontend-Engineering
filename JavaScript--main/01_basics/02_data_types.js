"use strict"; // treat all JS code as newer version
//alert(3+3) when we are using browser console, not any javascript engine like node.js

console.log(3 + 3)
console.log("Lucky")//code readability should be high! that is line wise! as there is no scarcity of lines to write a code!

let name = "hitesh"
let age = 18
let isLoggedIn = false
let State = null

//PRIMITIVE DATA TYPES:- 7 Types : String, Number, Boolean, null, undefined, Symbol, BigInt

// number => 2^53
// bigint even bigger ranged data type
// string => ""
// boolean => true/false
// null => standalone value; helps in representing emptyiness where 0 doesnt work like temperature!
// undefined => no initialization of value
// symbol => unique

const Id = Symbol("123");
const anotherId = Symbol("123");
console.log(Id === anotherId); // false as data-type is compared and two unique symbols are never equal!

const bigNumber = 3456543576654356754;



//NON-PRIMITIVE (Reference Type) : Array, Objects, Functions!

console.log(typeof null); //NULL IS AN OBJECT! *INTERVIEW QUESTION!
const heroes = ["shaktimaan", "nagraj", "doga"]; //Array Declaration and Initialisation!
let myObj = {
    name: "hitesh",
    age: 22,
} // Object Declaration and Properties!

const myFunction = function(){
    console.log("Hello Rajma!");
} // Function treated as variable!

console.log(typeof myFunction); //the type is function but it is called object function!