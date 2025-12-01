const user = {
    username: "rajma",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`) //this keyword is used for accessing variables in current context!
        console.log(this); //current context before change
    }
}
user.welcomeMessage(); //rajma, welcome to website
user.username = "sam"; //changed value for username!
user.welcomeMessage(); //sam, welcome to website

console.log(this); //current context after a change!

//what actually is current context?

// function chai() {
//     let username = "rajma"
//     console.log(this.username); //this keyword is not usable in function!
// }

// chai();

//more ways of defining functions using arrow functions:

// const chai = function() {
//     let username = "rajma";
//     console.log(this.username); SAME OUTPUT! undefined
// }

const chai = () => {
    let username = "rajma";
    console.log(this);
}

// chai(); //here also the keyword this is not usable!

//ARROW FUNCTION: () => {}
// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

// console.log(addTwo(3, 4)); //7

//another way using IMPLICIT RETURN!
// const addTwo = (num1, num2) => (num1 + num2);
// console.log(addTwo(3, 4)); //also 7!

const addTwo = (num1, num2) => ({username: "rajma"});
console.log(addTwo(3, 4));

const myArray = [2, 3, 5, 7, 8];
myArray.forEach(() => {}); //can be written like this as well!