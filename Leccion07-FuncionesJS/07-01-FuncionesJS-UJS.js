//Hoisting
//miFuncion(4, 2);

//Declaración de la función
function miFuncion(a, b){
    console.log(arguments.length);
    return a + b;
}

//Llamado a la función
let resultado = miFuncion(7, 14);
console.log(resultado);

//Funciones tipo expresión
//Declaración de la función
let sumar = function(a = 4, b = 5){
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    return a + b + arguments[2];
};

resultado = sumar(3, 6, 7);
console.log(resultado);

//Funciones Self-Invoking
//Función anónima
//No se puede volver a reutilizar la función --> para llamar una función a sí misma
(function(a, b){
    console.log('Ejecutando la función:' + (a + b));
})(3,4);

//Funciones como objetos
console.log(typeof(miFuncion));

var miFuncionTexto = miFuncion.toString();
console.log(miFuncionTexto);


//Funciones flecha
// *Comparar con función de tipo expresión*
const sumarFuncionTipoFlecha = (a, b) => a + b;
resultado = sumarFuncionTipoFlecha(3, 5);
console.log(resultado);

// 58. Argumentos y parámetros
/**
 * Parámetros -> Valores que va a recibir la función 
 * Argumentos -> Valores que asignamos a los parámetros de la función 
*/

/**59. Sumar todos los argumentos
 * Hoisting
 */
let resultado1 = sumarTodo(5, 4, 13, 10, 9, 10, 11, 3);
console.log(resultado1);
 
function sumarTodo(){
    let suma =  0;
    for(let i = 0; i < arguments.length; i++){
        suma += arguments[i]; //suma = suma + arguments[i]
    }
    return suma;
}

/**60 y 61. Paso por valor y paso por referencia
 * Paso por valor -> Tipos de datos que no son objetos (Cuando se manda argumentos a las funciones)
 */

let x = 10; //Tipo primitivo

function cambiarValor(a){
    a = 20;
}

//Paso por valor
cambiarValor(x);
console.log(x);
//console.log(a);

const persona = {
    nombre: 'Christian',
    apellido: 'Aguas'
}

function cambiarValorObjeto(p1){
    p1.nombre = 'Xavier';
    p1.apellido = 'Núñez';
}

cambiarValorObjeto(persona);
console.log(persona);