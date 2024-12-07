// Exercise: #00 | Creator: Ismael Dominici | Creation Date: 07/12/24

// * - Crea un comentario en el código y coloca la URL del sitio web oficial del lenguaje de programación que has seleccionado.
// Documentation of JavaScript => https://developer.mozilla.org/en-US/docs/Web/JavaScript

//  * - Representa las diferentes sintaxis que existen de crear comentarios en el lenguaje (en una línea, varias...).
// comment in a line
/*
    Comment 
    in 
    multi-line
*/

// * - Crea una variable (y una constante si el lenguaje lo soporta).
var VariableOne = 1;  // Level global, is reassignable
let VariableTwo = 2;  // Level block, is reassignable
const Constant = 3;  // Level block, is not reassignable

//  * - Crea variables representando todos los tipos de datos primitivos del lenguaje (cadenas de texto, enteros, booleanos...).
let _string = "JavaScript"; // Chains of text
let _number = 5; // Numbers
let _boolean = true; // Booleans
let _undefined = undefined; // Value undefined
let _symbol = Symbol(9238); //
let _bigint = 25n; // Numbers 
let _null = null;

//  * - Imprime por terminal el texto: "¡Hola, [y el nombre de tu lenguaje]!"
console.log("!Hola, ", _string);