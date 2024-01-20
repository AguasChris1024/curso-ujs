//Funciones recursivas
//Imprimir 3,2,1
function funcionRecursiva(numero) {
    //Caso Base
    if(numero == 1)
        console.log(numero);
    else{
        console.log(numero);
        funcionRecursiva(numero - 1);
    }
}

//Llamamos a la función recursiva
funcionRecursiva(3);