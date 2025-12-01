//why do we need 3 variable type?
//{} this creates the problem! known as scope! that contains a block of packaged logic!
//Here is the problem!
if(true) {
    let a = 10;
    const b = 20;
    var c = 30;
}
// console.log(a) //Error: a is not defined which is good but!
// console.log(b) // Same as a! but for C
console.log(c) // 30! Feels wierd right?

//impact of this:
var c = 300;
if(true) {
    var c = 30;
}
//programmer might never understand why c = 30 and not 300!


let a = 300;
if(true) {
    let a = 10; //here in this scope a = 10
    console.log("INNER: ", a)
}
console.log(a) //Here a = 300! saves us from a lot of bugs!

//IMPORTANT: core scopes in browser consoles and local JS engines are different!

//Nested Scope:
function one(){
    const username = "rajma";

    function two(){
        const website = "youtube";
        console.log(username); //checks for access of this variable from outer function!
    }
    // console.log(website); //Error! because this a variable present in inner function!

    two();
}
one();
//RULE: A child can snatch an ice cream from his/her parents but a parent cannot! 


if(true) {
    const username = "rajma";
    if(username === "rajma") {
        const website = "youtube"
        console.log(username + website);
    }
    // console.log(website); //Error: website is not defined! because website is defined in inner condition!
}
// console.log(username); //Error: username is not defined! same reason!


// +++++++  INTERESTING  +++++++

console.log(addOne(5)); //No error as functions are hoisted!
function addOne(num) {
    return num + 1;      //THIS IS FUNCTION
}


//other ways to observe the above program!
addTwo(5); // Error : cannot access "addTwo" before initialization!
const addTwo = function(num) {
    return num + 2;    //THIS IS EXPRESSION!
}
