const marvel_heroes = ["thor", "iron man", "spiderman"];
const dc_heroes = ["superman", "flash", "batman"];

//marvel_heroes.push(dc_heroes);
//console.log(arr1); doesnt merge array, instead treats the marvel_heroes array as a single element and pushes in dc_heroes array!

const all_heroes = marvel_heroes.concat(dc_heroes);
console.log(all_heroes); //merges two or more array and returns a new array!

const all_new_heroes = [...marvel_heroes, ...dc_heroes]; //also does the same thing!mergin of two arrays
console.log(all_new_heroes);

const another_array = [1,2,3,[4,5,6],7,[6,7,,[4,5]]]
const real_another_array = another_array.flat(Infinity) //returns a new array with all sub array elements concatenated recursively! to a given depth!
console.log(real_another_array);


console.log(Array.isArray("Rajma")) //checks the given string if its an array!
console.log(Array.from("Rajma"))//converts the string into array!
console.log(Array.from({name:"Rajma"}))// Interesting as it needs to be stated how array has to be made!

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3)) //Returns an array from given set of elements!