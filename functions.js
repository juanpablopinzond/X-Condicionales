// CONDICIONALES
//Solo e JS se le puede reasignar un valor de distito tipo diferente a una variable para asignada con un determinado tipo
// Para comparar el valor de dos variables se pone ==asi, solo se compara el valor indiferentmente del tipo que sea, pero si se pone === se comprar el valor y el tipo
//El alfabeto que hay en javascript empieza por las mayusculas y luego siguen las minusculas
let x = 10;
let y = 100;

console.log(x == y);
console.log(x === y);

y = "100";
console.log(x != y);
console.log(x !== y);

console.log(x > y);
console.log(x < y);
console.log(3 + 4);
console.log(x >= y);
console.log(x <= y);

// Si se va a comparar dos variables que contienen texto es mejor transformarlas a mayusculas. 

let a = "a";
let b = "b";
console.log(a > b);
console.log(a < b); //Siempre la letra que sucede antes se leera primero, entonces en el primer caso es verdadero y en el segundo es falso, ya que a sucede antes que b.
console.log("z".toUpperCase() > "A".toUpperCase()); // En este caso se compara correctamente ya que ambas letras son mayusculas. 

//SIGNOS ARITMETICOS
console.log(3 + 4);
console.log(3 - 4);
console.log(3 * 4);
console.log(3 / 4);
console.log(5 % 3); //Este signo se llama modulo, y dara las sobras de la division de dos numeros, si se divide o el modulo entre 5 para 3 el sobrante sera 1. sirve para identificar si un numero es par o impar. si el resultado es 0 es par, si el resultado es 1 es impar

let h = 10;
h = 10 + 1; //O
h += 40; //Esta forma se utiliza regularmente cuando quieres añadir mas de un numero y no solo 1.
h++; //Esta forma se utiliza cuando quieres solamente agragar al valor en 1.
console.log(h);

h = 10 - 1;
h -= 40;
h--;
console.log(h); //si se agraga los operadores de resta antes de la variable se imprimira el resultado --h, pero si se los agraga despues para que sean impresos en la consola, h-- se imprimira solo el valor inicial ya que solamente se esta imprimiendo la variable original. 

//OPERADORES LOGICOS
//&& que significa Y.
//|| que significa O.

let j = "java";
let js = "javascript";
let cplus = "c#";

console.log(j === "java" && js === "javascript");
console.log(j === "0" && js === "javascript");
console.log(cplus === "c#" || js === "go");
console.log(j === "j" || js === "python");
console.log(j === "java" || (js === "go" && cplus === "c#")); //Siempre se evalua primero el operador &&, luego el operador ||, en este caso es verdadero por que en la evalucion del || se cumpple uno y dice que si uno O el otro es verdadero es verdadero, ya que primero se cumple el && y luego el ||, y el && si es verdadero.
console.log(!(j === "java" && js === "javascript")); // !Este simbolo hace todo que sea lo opuesto al resultado original, si es verdadero la respuesta sera falso.