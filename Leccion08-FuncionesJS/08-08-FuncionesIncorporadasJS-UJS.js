//Funciones incorporadas en JS

//Obtener el largo de una cadena
let cadena1 = 'Hola';
console.log(cadena1.length); //.length es solo un atributo

//No podemos modificar una cadena en JS
//Las cadenas son inmutables
cadena1[0] = 'x';
console.log(cadena1);

//Sí podemos asignar una nueva cadena
cadena1 = 'Adiós';
console.log(cadena1);

//Recorres cada caracter
for(let i = 0; i < cadena1.length; i++){
    console.log(`${i} - ${cadena1[i]}`);
}

//Subcadenas en JS
let cadena3 = 'Hola Mundo';
//substring(indice_inicio, indice_fin)
//No se incluye el caracter índice_fin
cadena1 = cadena3.substring(0,4);
console.log(cadena1);
let cadena2 = cadena3.substring(5, 10);
console.log(cadena2); //Esta función extrae desde el índice 5 al final de la cadena