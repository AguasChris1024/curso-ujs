//Alcance de variables en JS

let variableGlobal = 5;

//Modificar el valor
variableGlobal = 10;

//Definición función
function miFuncion(variableLocal){
    console.log(variableLocal);
    //Modificar el valor de la variable global
    variableGlobal = 20;
    //No podemos redefinir una variable global (let), excepto si usamos var
    //let variableGlobal = 30; -> Da error
}

//Llamar a la función
miFuncion(variableGlobal);