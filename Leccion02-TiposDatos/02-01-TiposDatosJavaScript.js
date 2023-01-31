/*
Ejemplos de tipos de datos 
en JavaScript
*/
//Tipo de dato string
var nombre = "Christian";
console.log(nombre);

nombre = 10.5;
console.log(typeof nombre);

//Tipo de dato numérico
var numero = 1000;
console.log(numero);

//Tipo de dato object
var objeto = {
    nombre : "Xavier",
    apellido : "Núñez",
    telefono : "0963034181"
}
console.log(objeto);
console.log(typeof objeto);

//Tipo de dato boolean (true, false)
var bandera = false;
console.log(bandera);
console.log(typeof bandera);

//Tipo de dato function
function miFuncion(){

}
console.log(miFuncion);
console.log(typeof miFuncion);

//Tipo de dato Symbol
var simbolo = Symbol("Mi símbolo");
console.log(simbolo);
console.log(typeof simbolo);

//Tipo clase -> es una función
class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(Persona);
console.log(typeof Persona);

//Tipo undefined
var x;
console.log(x);
console.log(typeof x);

x = undefined;
console.log(x);

//null = ausencia de valor
var y = null;
console.log(y);
console.log(typeof y);

//Arreglos
var autos = ['BMW', 'Audi', 'Volvo'];
console.log(autos);
console.log(typeof autos);

//Cadenas vacíos
var z = '';
console.log(z);
console.log(typeof z);

//Concatenar cadenas
var nombre = 'Christian';
var apellido = 'Aguas';

var nombreCompleto = nombre + ' ' + apellido;
console.log(nombreCompleto);

nombreCompleto2 =  'Carlos' + ' ' + 'Lara';
console.log(nombreCompleto2);

var x = nombre + 2 + 4;
console.log(x);

x = nombre + (2 + 4);
console.log(x);

x = 2 + 4 + nombre;
console.log(x);

// Sintaxis básica de declaración de variables en JS
let nombre1 = 'Xavier';
console.log(nombre);

const apellido1 = 'Núñez';
//apellido1 = 'Lara';

//Buenas prácticas para variables
let nombreCompleto3 = 'Juan Pérez';
console.log( nombreCompleto3 );

let x1, y1;
x1 =10, y1 = 20;
let z1 = x1 + y1;
console.log( z1 );

let nombreCompleto4 = 'Juan Pérez';

//Reglas para escribir variables
/*
- Las variables no se pueden empezar por números.
let a1nombreCompleto;
let _nombreCompleto;
let $nombreCompleto;
let 1nombreCompleto; -> no está permitido

- No usar palabras reservadas como nombre de variables

*/