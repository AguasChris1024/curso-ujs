//Ciclo While
//let contador = 0;
/*
while( contador < 3 ){
    console.log(contador);
    contador++;
}

console.log("Fin ciclo while.");
*/

//Ciclo Do While
//En caso de necesitar de la ejecución de al menos una vez el bloque de código.
/*
do{
    console.log(contador);
    contador++;
}
while( contador < 3 );

console.log("Fin ciclo do while.");
*/


//Ciclo for

/*
for (let contador = 0; contador < 3; contador++){
    console.log(contador);
}

console.log("Fin del ciclo for.");
*/

//Uso de la palabra break en los ciclos.

for(let contador = 0 ; contador <= 10; contador++){
    if(contador % 2 == 0){
        console.log(contador);
        break;
    }
}

//Labels - Uso de etiquetas
//Uso de la palabra continue con los ciclos

inicio:
for(let contador1 = 0; contador1 < 10; contador1++){
    if(contador1 % 2 !== 0){
        continue inicio; //ir a la siguiente iteración
    }
    
    console.log(contador1);
    
} 





