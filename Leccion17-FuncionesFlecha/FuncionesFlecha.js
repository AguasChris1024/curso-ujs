/*function miFuncion(){
    console.log('Saludos desde mi función');
}*/ //Convertir la función a función flecha

let miFuncion = function(){
    console.log('Saludos desde mi función.');
}

// let miFuncionFlecha = () => {
//     console.log('Saludos desde mi función flecha.');
// }

//En funciones flecha no se puede aplicar hoisting. Es decir, las variables y los parámetros deben estar definidos antes de usarlos.
//const permite  que una variable no se pueda reasignar, pero si su contenido puede cambiar.

// const miFuncionFlecha = () => console.log('Saludos desde mi función flecha.');

// const saludar = () => {
//     return 'Saludos desde función flecha.';
// }

const saludar= () => 'Saludos desde función flecha.'; 

console.log(saludar());


// miFuncion();
// miFuncionFlecha();

const regresaObjeto = ()  => ({nombre: 'Juan', apellido: 'Montes'});
console.log(regresaObjeto());

const funcionConParametrosClasico = function(mensaje){
    console.log(mensaje);
}

// const funcionConParametros = (mensaje) => console.log(mensaje);
// Cuando existe solo un parámetro de función flecha, se pueden omitir los paréntesis.
const funcionConParametros = mensaje => console.log(mensaje);
funcionConParametros('Saludo con parámetros.');

const funcionConVariosParametros = (op1, op2) => {
    let resultado = op1 + op2;
    return `Resultado = ${resultado}`;
};

console.log(funcionConVariosParametros(3,5));
