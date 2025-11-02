// singleton -> when any constructor is used to create an object then it is a singleton!
Object.create

// object literals -> create multiple instances!

const mySym = Symbol("key1")

const JSuser1 = {} //Empty Object
const JSuser2 = {
    name: "Rajma", //name treated as "name" by engine! such as key: value pair!
    "full name" : "Rajma Chawaal",
    [mySym]: "mykey1", //syntax to refer with a symbol declared outside an object!
    age: 20,
    location: "Mathura",
    email: "rajmachaawal@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}



console.log(JSuser2.email)
console.log(JSuser2["email"])
console.log(JSuser2["full name"])
console.log(typeof JSuser2.mySym) //Not a symbol,and a string!
console.log(typeof JSuser2[mySym]) 

JSuser2.email = "chholebhature@openai" //overwriting object properties
//Object.freeze(JSuser2) //Locks object properties
JSuser2.email = "chholebhature@gemini"
console.log(JSuser2) //No changes implied because of Object.freeze

JSuser2.greeting = function(){
    console.log(`Hello JS user`)
}

JSuser2.greetingTwo = function(){
    console.log(`Hello JS user, ${this["full name"]}`);
}

console.log(JSuser2.greeting()) // error pop up of not a function is object is freeze!
console.log(JSuser2.greetingTwo()) //who to refer to a property of object in a function