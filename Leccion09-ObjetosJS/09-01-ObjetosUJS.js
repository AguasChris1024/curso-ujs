//Tipo de dato primitivo
/*let x = 10;
console.log(x.length);  -> lanza valor undefinied*/

let persona = {
    nombre: 'Christian',
    apellido: 'Aguas',
    email: 'caguas9198@uta.edu.ec',
    edad: 27,
    idioma: 'es',
    get lang(){
        return this.idioma.toUpperCase();
    },
    set lang(lang){
        this.idioma = lang.toUpperCase();
    },
    //Método dentro de un objeto
    /*
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }
    */
    get nombreCompleto(){
        return this.nombre + ' ' + this.apellido;
    }
}

//Acceso a los atributos del objeto
console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.email);
console.log(persona.edad);

//console.log(persona);
//Visualización del método agregado al objeto persona
console.log(persona.nombreCompleto);


//Forma poco convencional de crear un objeto
let persona2 = new Object();
persona2.nombre = 'Camila';
persona2.direccion = 'Cevallos';
persona2.telefono = '0985357136';

console.log(persona2.telefono);


//Otras formas de acceso a las propiedades del objeto persona
console.log(persona.nombre);
console.log(persona['apellido']);


//Formas de imprimir un Object
//Concatenar cada valor de cada propiedad
console.log(persona.nombre + ' ' + persona.apellido);

//for in
for (nombrePropiedad in persona){
    console.log(nombrePropiedad);
    console.log(persona[nombrePropiedad]);
}

//Devuelve nuestro objeto como un array
let personaArray = Object.values(persona);
console.log(personaArray);

//Mostrar objeto en formato JSON
let personaString = JSON.stringify(persona);
console.log(personaString);

//Agregar y eliminar propiedades de un objeto

persona.telefono = '096303418';
persona.telefono = '0963034181';

console.log(persona);

delete persona.telefono;

console.log(persona);

/**Métodos GET y SET en Objects
 * get nombreCompleto(){
        return this.nombre + ' ' + this.apellido;
    }
 * idioma: 'es',
    get lang(){
        return this.idioma.toUpperCase();
    },
    set lang(lang){
        this.idioma = lang.toUpperCase();
    }
 */

console.log(persona.nombreCompleto);
console.log(persona.lang);
persona.lang = 'es_ec';
console.log(persona.lang);
console.log(persona.idioma);

//Método constructor Objetos
//Función constructor de objetos de tipo Persona
//Permiten crear más objetos del mismo tipo y reutilizar el código.
function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido =  apellido;
    this.email = email;
    //Agregar métodos a un método constructor de objetos
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    }
}

//Uso de Prototype
//Permite agregar nuevos atributos a los objetos que usen esta propiedad de prototype
Persona.prototype.telefono = '0963034181'

let padre =  new Persona('Pablo', 'Aguas', 'pabloaguas8@gmail.com');
console.log(padre.nombreCompleto());
padre.telefono = '0991534530'
console.log(padre.telefono);
console.log(padre);

let madre = new Persona('Cecilia', 'Núñez', 'ceci_nuez@gmail.com');
console.log(madre);
console.log(madre.nombreCompleto());
madre.telefono = '0993552048';
console.log(madre.telefono);
console.log(madre);


padre.nombre = 'Pedro';
console.log(padre);


//Distintas formas de crear objetos
let miObjeto =  new Object();
let miObjeto2 = {};

let miCadena1 = new String('Hola');
let miCadena2 = 'Hola';
//quiero ver 
console.log(typeof miCadena2);

let miNumero = new Number(1);
let miNumero2 = 1;

let miBoolean = new Boolean(false);
let miBoolean2 = false;

let miArreglo = new Array();
let miArreglo2 = [];

let miFuncion = new Function();
let miFuncion2 =  function(){};


//Uso de Call
//Permite llamar un método de un objeto a otro objeto
let persona1 = {
    nombre: 'Christian',
    apellido: 'Aguas',
    nombreCompleto: function(titulo, telefono){
        return titulo + ': ' + this.nombre + ' ' + this.apellido + ', ' + telefono;
    }
}

let persona3 = {
    nombre: 'Camila',
    apellido: 'Aguas'
}
//El método persona1.nombreCompleto con los datos de persona2
console.log(persona1.nombreCompleto('Ingeniero', '0963034181'));

//Paso de argumentos con la Función CALL
//Uso de call para usar el método persona1.nombreCompleto con los datos de persona3
console.log(persona1.nombreCompleto.call(persona3, 'Contadora', '0965864214'));

//Método Apply
//Permite llamar un método en un objeto que no posee dicho método
let arreglo = ['Contadora', '0965864214']
console.log(persona1.nombreCompleto.apply(persona3, arreglo));