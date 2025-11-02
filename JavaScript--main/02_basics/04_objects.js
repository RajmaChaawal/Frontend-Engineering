// singleton using constructor
const tinderUser = new Object()

tinderUser.Id = "123abc"
tinderUser.name = "Aryan"
tinderUser.isLoggedIn = false


console.log(tinderUser); //empty object

const regularUser = { //nesting of objects
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Rajma",
            lastname: "Chaawal"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname) //accessing nested objects

const obj1 = {
    1: "a",
    2: "b"
}
const obj2 = {
    3: "a",
    4: "b"
}
const obj4 = {
    5: "a",
    6: "b"
}

//const obj3 = {obj1, obj2} //no error but puts both objects inside obj3!

//const obj3 = Object.assign({}, obj1, obj2, obj4) //{} is an optional parameter that signifies all sources are targetted to be inserted {} in new object!

const obj3 = {...obj1, ...obj2} //spreads and combines objects

console.log(obj3)

const users = [  //when data comes from a Database!
    {
        id: 1,
        email: "R@gmail.com"
    },
    {
        id: 1,
        email: "R@gmail.com"
    },
    {
        id: 1,
        email: "R@gmail.com"
    },
]

console.log(users[1].email)
console.log(tinderUser);

console.log(Object.keys(tinderUser));//the most interesting thing about this is the output of this is an array of keys! very useful in application dev!
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isDating")); //check either the object has that property or not! before using it!
console.log(tinderUser.hasOwnProperty("isLoggenIn"));

//Destructuring of objects!
const course = {
    course_name: "JS by Rajma",
    price: 999,
    course_Instructor: "Rajma"
}

//course.course_Instructor this is repetitive syntax!

const {course_Instructor: Instructor} = course; //Destructureed and alias used for less syntax typing!
console.log(Instructor)

//API's!
// { 
//     "name": "Rajma",
//     "course_name": "JS by Rajma",
//     "price": "free"
// } //JSON format

[
    {},
    {},
    {}
] //Array of objects

// From an API we may get data in form of objects, Tree or Array of Objects!