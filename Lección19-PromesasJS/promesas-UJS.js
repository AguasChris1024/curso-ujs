let miPromesa = new Promise((resolver, rechazar) => {
    let expresion = true;
    if (expresion) {
        resolver('La promesa se cumple.');
    }
     else{
        rechazar('Error en la promesa.');
     }
});

// miPromesa.then(
//     valor => console.log(valor),
//     error => console.log(error)
// );

// miPromesa.then(valor => console.log(valor))
// .catch(error => console.log(error));

let promesa = new Promise((resolver) => {
    // console.log('Inicio de la promesa...');
    setTimeout(() => resolver('Saludos con promesa y timeout.'), 3000);
    // console.log( 'Fin de la promesa...' ) ;
});

// promesa.then(valor =>  console.log(valor));


//Async con promesas
async function miFuncionConPromesa(){
    return 'Saludos con promesa y async.';
}

// miFuncionConPromesa().then(valor => console.log(valor));


//Await y async
//Await espera el resultado de una promesa

async function funcionConPromesaYAwait(){
    let miPromesa = new Promise(resolver => {
        resolver('Promesa con await');
    });

    console.log (await miPromesa);
}


//funcionConPromesaYAwait();

//await solo se puede usar dentro de una función declarada con async


//Uso de promesas, await, async y setTimeout
async function funcionConPromesaAwaitYTimeout(){
    console.log('Inicio de la promesa...');
    let miPromesa = new Promise(resolver => {
        setTimeout(() => resolver('Promesa con await y Timeout.'), 3000)
    });

    console.log(await miPromesa);
    console.log('Fin de la función promesa.');
}

funcionConPromesaAwaitYTimeout();