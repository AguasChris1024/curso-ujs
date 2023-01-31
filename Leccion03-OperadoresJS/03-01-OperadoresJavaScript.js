let a = 3, b = 2;
let z = a + b;
console.log("Resultado de la suma: " + z);

z = a - b;
console.log("Resultado de la resta: " + z);

z = a * b;
console.log("Resultado de la multiplicación: " + z);

z = a / b;
console.log("Resultado de la división: " + z);

z = a % b; //Residuo de la división
console.log("Resultado de la operación módulo: " + z);

z = a ** b;
console.log("Resultado del operador exponente: " + z);


//Incremento
//Pre-incremento (el operador ++ va antes de la variable)
z = ++a;
console.log(a);
console.log(z);


//Post-incremento (el operador ++ va después de la variable)
z = b++;
console.log(b);
console.log(z);

//Decremento
//Pre-decremento
z = --a;
console.log(a);
console.log(z);

//Post-decremento
z = b--;
console.log(b);
console.log(z);

/********** */
//Precedencia de operadores
let a1 = 3, b1 = 2, c1 = 1, d1 = 4;

let z1 = a1 * b1 + c1 / d1;
console.log(z1); 

z1 = c1 + a1 * b1 / d1;
console.log(z1);

z1 = (c1 + a1) * b1 / c1;
console.log(z1);

//Operadores de asignación
let a2 = 1;

a2 += 3; // a2 = a2 + 3
console.log(a2);

a2 -= 2; //a2 = a2 - 2
console.log(a2);

/*
*=
/=
*/

//Operadores de Comparación
let a3 = 3, b3 = 2, c3 = "3";
let z3 = a3 == b3;
console.log(z3);

z3 = a3 === c3; //Revisa si los valores son iguales y son también del mismo tipo
console.log(z3);

z3 = a3 != c3;
console.log(z3);

z3 = a3 !== c3; //Revisa si los valores son iguales y son también del mismo tipo
console.log(z3);

z3 = a3 < b3;
console.log(z3);

z3 = a3 <= b3;
console.log(z3);

z3 = a3 > b3;
console.log(z3);

z3 = a3 >= b3;
console.log(z3);

//Ejercicio Número Par o Impar

let num = 11;

if (num % 2 == 0) {
    console.log('El número ' + num + ' es par.');
}
else{
    console.log('El número ' + num + ' es impar.');
}

//Ejercicio Mayor de edad
let edad = 15, edadAdulto = 18;

if (edad >= edadAdulto) {
    console.log("Es un adulto.");
} else {
    console.log("Es un menor de edad");
}

//Operadores Lógicos
// AND &&

let a4 = 5;
let valMin = 0, valMax = 10;

if ( a4 >= valMin && a4 <= valMax ) {
    console.log("Dentro de rango.")
} else {
    console.log("Fuera de rango.")
}

//OR ||
let vacaciones = false, diaDescanso = true;

if ( vacaciones || diaDescanso ) {
    console.log("El padre puede ir al partido de su hijo.");
} else {
    console.log("El padre está ocupado.");
}

//Operador ternario
let resultado = (3>2) ? "verdadero" : "falso";
console.log(resultado);

let numero = 9;
resultado = ( numero % 2 == 0 ) ? "Número par" : "Número impar";
console.log(resultado);

//Convertir String a Number
let miNumero = "18x";


let edad1 = Number(miNumero);
console.log(edad1);

if (isNaN(edad1)) {
    console.log("No es un número.")
}
else{
    if( edad1 >= 18 ){
        console.log("Puede votar.");
    }
    else{
        console.log("Muy joven para votar.");
    }
}


if (isNaN(edad1)) {
    console.log("No es un número.")
}
else{
    resultado = ( edad1 >= edadAdulto ) ? "Puede votar." : "Muy joven para votar";
    console.log(resultado);
}

//Ejercicios de precedencia de operadores
let x = 5, y = 10;
let z4 = ++x + y--; // ++x = 6 - y-- =10
console.log(x);
console.log(y);
console.log(z4);

resultado = 4 + 5 * 6 / 3; 
console.log(resultado);

resultado = (4+5) * 6 / 3;
console.log(resultado);