miFuncion2();
miFuncion1();


function miFuncion1(){
    console.log('función 1');
}

function miFuncion2(){
    console.log('función 2');
}

//Función de tipo callback
let imp = function imprimir(mensaje){
    console.log(mensaje);
}

function sumar(op1, op2, funcionCallback){
    let res = op1 + op2;
    funcionCallback(`El resultado es: ${res}.`);
}

sumar(5,3, imp);

// Las funciones de tipo callback se usan en procesos asíncronos

// Llamadas asíncronas con la FUNCIÓN setTimeout

function miFuncionCallback(){
    console.log('Saludo asíncrono luego de 3 segundos.');
}

setTimeout(miFuncionCallback, 3000); // después de 3 segundos

setTimeout(function(){console.log('Saludo asíncrono luego de 5 segundos. Ejemplo de función directo en setTimeOut.')}, 5000);

setTimeout( () => console.log('Saludo luego de 1 segundo. Ejemplo con función flecha'), 1000);


// Llamadas asíncronas con la FUNCIÓN setInterval

//Manda a llamar varias veces la función callback  cada X milisegundos

let reloj = () => {
    let fecha = new Date();
    console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`);
}

setInterval(reloj, 1000);
