// Import stylesheets
import './style.css';

// **********************************
// Creating an Array in JavaScript
// **********************************

//Array literal method
const array1 = []; //empty array
const array2 = ['HTML', 'CSS', 'JavaScript'];

//Array constructor method
const array3 = new Array(); //empty array

const array4 = new Array(3); //[undefined, undefined, undefined]

array4[0] = 'jQuery';
(array4[1] = 'React'), (array4[2] = 'Vue');
console.log(array4); // ["jQuery", "React", "Vue"]

// **********************************
// Creating an Object in JavaScript
// **********************************

//Object literal method
const object1 = {};

const object2 = {
  name: 'John',
  age: 33,
};

// **********************************
// Destructuring Arrays in JavaScript
// **********************************

//How to assign variables with destructuring
const colors = ['violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red'];

const [first, second] = colors;
console.log('First color: ', first); //violet
console.log('Second color: ', second); //indigo

//How to swap variables with destructuring
const food = ['pizza', 'tortillas'];

let [firstFood, secondFood] = food;
console.log('first: ', firstFood); //first: pizza
console.log('second: ', secondFood); //second: tortillas

[firstFood, secondFood] = [secondFood, firstFood]; //swapping
console.log('first: ', firstFood); //first: tortillas
console.log('second: ', secondFood); //second: pizza

console.log(food); //["pizza", "tortillas"]
// See original array is NOT mutated.

//Mutating by destructuring
[food[0], food[1]] = [food[1], food[0]];

console.log(food); //["tortillas", "pizza"];

// **********************************
// Destructuring Objects in JavaScript
// **********************************

const courses = {
  frontEnd: 'React',
  backEnd: 'Node',
  database: 'MongoDB',
};

//using the property names as variables
const { frontEnd, backEnd, database } = courses;

console.log(
  `I use ${frontEnd} as frontend, ${backEnd} as backend and ${database} for data.`
);
//I use React as frontend, Node as backend and MongoDB for data.

//Using new variable names instead of property names
const { frontEnd: front, backEnd: back } = courses;
console.log(front); //React
console.log(back); //Node
