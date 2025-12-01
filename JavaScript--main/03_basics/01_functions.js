console.log("R");
console.log("A");
console.log("J");
console.log("M");
console.log("A");


// function generally packages a global logic into a fixed space!
function sayMyName() {
    console.log("R");
    console.log("A");
    console.log("J");
    console.log("M");
    console.log("A");

}

//sayMyName; this is function reference not a call!

function addTwoNumbers(number1, number2) { //here number1 and number2 are parameters
    console.log(number1 + number2);// prints a value on calling it only! and without storing in a variable!
}

//Data Type Conflict in functions!
addTwoNumbers(3,null); //here 3 and null are arguments! just a nomenclature difference!
let result = addTwoNumbers2(3,5);

console.log('Result: ',result); //undefined! HOW????
//because console.log doesnt return a value it prints the value!


function addTwoNumbers2(number1, number2) {
    // let result2 = number1 + number2;
    // return result2;
    //OR
    return number1 + number2;
    console.log("RAJMA");//UNREACHABLE CODE!
}

console.log("Result: ", result);

function loginUserMessage(username){
    return `${username} just logged in!`;
}

loginUserMessage("Rajma"); //nothing is printed because the string result is returned but not logged!

console.log(loginUserMessage("rajma")); //whereas this works just fine!

console.log(loginUserMessage()) //undefined if called without passing any arguments!

//for checking passing of any argument!
function loginUserMessage2(username = "Sam"){ //Sam is default value!
    if(username === undefined){  // OR (!username)
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in!`
}
console.log(loginUserMessage2()); //works just fine!

//More Ways to pass arguments!

//SHOPPING CART example:
function calculateCartPrice(num1) {
    return num1;
}
console.log(calculateCartPrice(200,400,500)); //overload of arguments!

//To avoid this we use ...(rest operator)
function calculateCartPrice2(...num1){
    return num1;
}
console.log(calculateCartPrice2(200,400,500)); //any number of arguments can be passed! and output is in the form of array! which can be dealt with easily!

function calculateCartPrice3(val1,val2, ...num1){ //what value does num1 inherit?
    return val1,val2,num1;
}

console.log(calculateCartPrice3(200, 400, 500, 2000)); //200= val1, 400 = val2 and rest go in array! 


const user = {
    username: "Rajma",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user); //handles object but the key should be accurate and required checking but not in TypeSciprt!

handleObject({
    username: "Sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
    return getArray[1];
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));

