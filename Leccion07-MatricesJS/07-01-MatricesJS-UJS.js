//Matrices en JS
//Declaración de una matriz
let matriz = [[],[]];

//Modificar los valores
//Renglón 0 
matriz[0][0] = 100;
matriz[0][1] = 200;
matriz[0][2] = 300;

//Renglon 1
matriz[1][0] = 400;
matriz[1][1] = 500;
matriz[1][2] = 600;

//Leer valores
console.log(`Elemento[0][1] = ${matriz[0][1]}`); //String interpolation
console.log(`Elemento[1][2] = ${matriz[1][2]}`);

//Asignación simplificada de matrices
let matriz2 = [[100, 200, 300],[400, 500, 600]];

//Iterar los elementos de una matriz en JS
//Recorrer renglones
console.log(matriz.length);
//# de columnas (depende del renglón seleccionado)
console.log(matriz[0].length);
console.log(matriz[1].length);
for(let i = 0; i < matriz.length ; i++){
    //Recorrer columnas
    for(let j = 0; j < matriz[i].length ; j++){
        console.log(`Elemento[${i}][${j}] = ${matriz[i][j]}`);
    }
}