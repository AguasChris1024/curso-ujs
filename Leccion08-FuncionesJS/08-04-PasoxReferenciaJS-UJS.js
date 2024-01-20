//Paso por referencia JS
// Los objetos (array) se pasan por referencias

function cambiarValor(parametro){
    parametro[0] = 20;
}

//Llamar a la función
let arreglo = [10];
console.log(`Antes de llamada: ${arreglo[0]}`);
cambiarValor(arreglo);
console.log(`Despúes de llamada: ${arreglo[0]}`);