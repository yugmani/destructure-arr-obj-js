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
