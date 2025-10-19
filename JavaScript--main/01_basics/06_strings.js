const name = "rajma";
const repoCount = 50;
// console.log(name + repoCount + " Value"); not a good syntaxial habit!

console.log(`Hello my name is ${name} \nMy repo count is ${repoCount}`); // Better way of writing statements!

const gameName = new String("rajmachaawal-rc");

console.log(gameName[0]); // gives value assigned to key 0!
console.log(gameName.__proto__); //gives properties of object gameName!

//**********SOME STRING METHODS:-

console.log(gameName.toUpperCase())
console.log(gameName.length);
console.log(gameName.charAt(2)); //gives character at a particular index!
console.log(gameName.indexOf('C')); //gives index of C in string gameName if not found then returns -1;


const newString1 = gameName.substring(0,5); // 5th index is excluded!
console.log(newString1);

const newString2 = gameName.slice(-15,5); //accepts negative indexes!
console.log(newString2);

const newString3 = "   Rajma Chaawal   "
console.log(newString3);
console.log(newString3.trim());

const url = "https://rajma.com/Rajma%20Chaawal";
console.log(url.replace("%20", "-"));
console.log(url.includes("rajma"));
console.log(url.split("/"));
// REFER TO BROWSER CONSOLE AND MDN WEB DOCS FOR MORE METHODS!