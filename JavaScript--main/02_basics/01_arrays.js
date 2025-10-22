const myArr = [0,1,2,3,4,5]; //collection of multiple items of similar data types!
const Heroes = ["Shaktiman", "Naagraj", "Doga", "Super Commando Dhruv"];

const myArr2 = new Array(1,2,3,4);
console.log(myArr[0]); //value access in javascript!

//ARRAY METHODS:-
myArr.push(6);
console.log(myArr); // adds element at the end!

myArr.pop(); //removes last element!
console.log(myArr);

myArr.unshift(0); //adds element at the start!
console.log(myArr);

myArr.shift(); //removes first element!
console.log(myArr);

console.log(myArr.includes(9)); //True or False for presence of an element!

const newArr = myArr.join();

console.log(myArr);
console.log(typeof newArr); //join changes type of array to string!

//slice, splice

console.log("A", myArr);

const myN1 = myArr.slice(1,3); //returns a section of array! 3rd index is excluded!
console.log(myN1);
console.log("B", myArr);


const myN2 = myArr.splice(1, 3);
console.log("C", myArr) //modifies original array by removing elements!
console.log(myN2);