// No Funcional - Imperativo Steps

let name = "Roc";
let greeting = "Hi, I'm ";
console.log ( greeting + name );


// Funcional

function greet ( name ) {
	return "Hi, I'm " + name;
}

console.log ( greet( "Roc" ) );


// Funcion pura
function sumar (a, b) {
	return a + b;
}


// Side Effects

let counter = 0;
	
function incrementCounter() { // Función con side effect: modifica una variable global
  counter += 1; 
  return counter;
}

console.log(incrementCounter()); 
console.log(incrementCounter()); 
console.log(counter);    


// Higher Order Functions
function aplicarOperacion (a, b, operacion) {
	return operacion(a, b);
}

function multiplicar (a, b) {
	return a * b;
}

console.log(aplicarOperacion(3, 4, multiplicar));  


// No Mutation

const persona = { nombre: 'Juan', edad: 25 };
const nuevaPersona = { ...persona, edad: 26 }; 
console.log(nuevaPersona);  





