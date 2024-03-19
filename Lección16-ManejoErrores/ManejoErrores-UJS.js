'use strict'
try{
    let x = 10;
    //miFuncion();
    throw 'Mi error';
}
catch(error){
    console.log(error);
}
//finaly siempre se va a ejecutar independientemente de try catch
//Su adición es opcional, depende del programador.
finally{
    console.log('Termina la revisión de errores.');
}


console.log('continuamos...');


let resultado = -1;

try{
    if(isNaN(resultado)) throw 'No es un número';
    else if(resultado  === '') throw 'Es una cadena vacía';
    else if(resultado  >= 0) throw 'Valor positivo';
    else if(resultado  <= 0) throw 'Valor negativo';    
}
catch(error){
    console.log(error);
    //console.log(error.name);
    //onsole.log(error.message);
}
finally{
    console.log('Termina la revisión de errores...');
}