//
// JavaScript Data Types
//

// Numbers:
let length = 16;
let weight = 7.5;

// Strings:
let color = "Yellow";
let lastName = "Johnson";

const greeting = `Hola ${lastName}, tu color preferido es el ${color}`; // Template Literals

// Booleans
let a = true;
let b = false;

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

const [car1, car2] = cars; // Destructuring


// JSON object:
const user = {
  name: 'Juan',
  age: 28
};

const { name, age } = user; // Destructuring


// Dynamic types

let x;       // Now x is undefined
x = 5;       // Now x is a Number
x = "John";  // Now x is a String

let dt1 = 16 + "Volvo"; // 16Volvo
let dt2 = 16 + 4 + "Volvo"; // 20Volvo
let dt3 = "Volvo" + 16 + 4; // Volvo164


//
// JavaScript Functions
//

function greet ( name ) {
	return "Hi, I'm " + name;
}

function greet2(name = 'extraño') { // Default Parameters
  return "Hi, I'm " + name;
}