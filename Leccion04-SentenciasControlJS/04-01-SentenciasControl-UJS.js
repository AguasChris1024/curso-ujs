let condicion = false;

if(condicion){
    console.log("Condición verdadera.");
}
else {
    console.log("Condición falsa.");
}

//Ejercicio revisión números
let numero = 1;

if ( numero == 1 ) {
    console.log("Número uno.");
    console.log("Fin del if.")
} 
else if( numero == 2 ){
    console.log("Número dos.");
    
}
else if( numero == 3){
    console.log("Número tres.");
}
else if(numero == 4){
    console.log("Número cuatro.")
}
else{
    console.log("Número desconocido.")
}

//Ejercicio estaciones del año
let mes =  4;
let estacion;

if( mes == 1 || mes == 2 || mes == 12 ){
    estacion = "Invierno";
}
else if( mes == 3 || mes == 4 || mes == 5 ){
    estacion = "Primavera";
}
else if( mes == 6 || mes == 7 || mes == 8 ){
    estacion = "Verano";
}
else if( mes == 9 || mes == 10 || mes ==11 ){
    estacion = "Otoño";
}
else{
    estacion = "Valor incorrecto"
}

console.log(estacion);

//Ejercicio Hora del día
/**
 *6 am- 11 am - Buenos días
 *12 pm - 18 pm - Buenas tardes
 *19 pm - 24 pm - Buenas noches
 * 0 am - 6 am - Durmiendo
 */
let horaDia = 23;
let saludo;

if ( horaDia >= 6 && horaDia <= 11 ){
    saludo = "Buenos días.";
}
else if( horaDia >= 12 && horaDia <= 18 ){
    saludo = "Buenas tardes.";
}
else if( horaDia >= 19 && horaDia < 24 ){
    saludo = "Buenas noches";
}
else if( horaDia >= 0 && horaDia < 6 ){
    saludo = "Durmiendo.";
}
else{
    saludo = "Hora fuera de rango.";
}
console.log(saludo);


//Estructura Switch
//Utiliza comparación estricta (valor y tipo de dato).
let num = 4;
let numTexto = "Valor desconocido";

switch ( num ) {
    case 1:
        numTexto = "Número uno.";
        break;
    case 2:
        numTexto = "Número dos.";
        break;
    case 3:
        numTexto = "Número tres.";
        break;
    case 4:
        numTexto = "Número cuatro.";
        break;
    default:
        numTexto = "Caso  no encontrado.";
        break;
}
console.log(numTexto);

let mess = 11;
let estacions = "Estación desconocida.";

switch( mess ){
    case 1: case 2: case 12:
        estacions = "Invierno";
        break;
    case 3: case 4: case 5:
        estacions = "Primavera";
        break;
    case 6: case 7: case 8:
        estacions = "Verano";
        break;
    case 9: case 10: case 11:
        estacions = "Otoño";
        break;
    default: 
    estacions = "Valor incorrecto";
    break;
}
console.log(estacions)