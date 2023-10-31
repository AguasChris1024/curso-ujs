//Hoisting
//miFuncion(4, 2);

//Declaración de la función
function miFuncion(a, b){
    return a + b;
}

//Llamado a la función
let resultado = miFuncion(7, 14);
console.log(resultado);

//Funciones tipo expresión
//Declaración de la función
let sumar = function(a,b){return a+b};

resultado = sumar(1,2);
console.log(resultado);