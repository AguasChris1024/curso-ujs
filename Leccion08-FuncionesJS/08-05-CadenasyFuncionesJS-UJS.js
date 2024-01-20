//Cadenas y funciones
// Cadenas inmutables en JS (no se puede modificar su valor)

function cambiarValor(parametro){
    parametro ='Adiós';
}

//Llamamos a la función
let argumento = 'Hola';
argumento = 'Hola mundo'; //Variable más externa
console.log(`Antes de la función: ${argumento}`);
cambiarValor(argumento);
console.log(`Después de la función: ${argumento}`); //Se comporta como un tipo primitivo