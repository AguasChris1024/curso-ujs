//Valor absoluto
let numero = -10;
let valorAbsoluto = Math.abs(numero);

console.log(valorAbsoluto);

//Redondeo y truncado en JS

let numero1 = 8.5, redondeo, truncado;

//Redondeo
//Math.round() redondea al valor entero más cercano
// .5 o superior, redondea al valor entero superior más cercano
redondeo = Math.round(numero1);
console.log(redondeo);

//Truncado
//Math.trunc() elimina la parte decimal
truncado = Math.trunc(numero1);
console.log(truncado);