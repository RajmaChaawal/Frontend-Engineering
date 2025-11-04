// Lecture 4 : DOM and DOM Manipulation!
// -> The JS browser generally converts the HTML code into a DOM Tree! *DOCUMENT OBJECT MODEL TREE*, which is primarily a Tree of HTML tags
// -> Sibling tags are adjacent and Parent-Child are heirarchical!

// BROSWER CONSOLE TEST: 
console.log("Hello User!")

// DOM methods:
const mainHeading = document.getElementById("title") //identifies the tag with this ID selector in linked HTML file!

//Changing text in selected tag!
// mainHeading.textContent = "Another Rubbish!"

// TEST 2:
const button = document.getElementById("btn")
button.onclick = function () {
    mainHeading.textContent = "And you are a stupid of the highest order!";
}

