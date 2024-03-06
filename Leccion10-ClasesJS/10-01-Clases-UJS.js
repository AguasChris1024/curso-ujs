//let persona3 =  new Persona('Karla', 'Juárez'); La clase Persona aún no ha sido definida.
//Cuando se trabaja con clases, no se aplica el concepto de Hoisting

//Clase padre
//La clase padre de todas las clases es Object. Por ejemplo, class Persona extends Object
//prototype -> permite agregar atributos o métodos de manera dinámica


class Persona{
    //Atributos estáticos de nuestra clase
    static contadorPersonas = 0; //atributo de nuestra clase

    //Variable estática de solo lectura. Método que simula una constante
    static get MAX_OBJ(){
        return 5;
    }

    email = 'Valor default del email'; //atributo de nuestros objetos. No necesariamente va en el constructor
    
    constructor(nombre, apellido){
        //Declaración e inicialización de los argumentos (propiedades)
        this._nombre =  nombre;
        this._apellido = apellido;
        if(Persona.contadorPersonas < Persona.MAX_OBJ){
            this.idPersona = ++Persona.contadorPersonas; //Pre incremento ++Persona.contadorPersonas
        } 
        else{
            console.log('Se han superado el máximo de objetos permitidos.');
        }
    }

    //Métodos GET(obtener)  y SET(modificar) para trabajar con los atributos

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }
    
    get apellido(){
        return this._apellido;
    }

    set apellido(apellido){
        this._apellido = apellido;
    }

    nombreCompleto(){
        return this.idPersona + ') ' + this._nombre + ' ' + this._apellido;
    }

    //Métodos static: Se va a asociar con la clase y no con los objetos que se creen de esta clase.
    static saludar(){
        console.log('Saludos desde método static.');
    }

    static saludar2(persona){
        console.log(persona.nombre + ' ' + persona.apellido);
    }

    //Sobreescribiendo el método de la clase Padre (Object)
    toString(){
        //Se aplica polimorfismo (múltiples formas en tiempo de ejecución)
        //El método que se ejecuta depende si es una referencia de tipo padre o de tipo hijo
        return this.nombreCompleto();
    }
}

//Herencia -> para reutilizar código y heredar características a partir de una clase padre
//Clase hija
class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre, apellido);    //Llamar al constructor de la clase padre
        this._departamento = departamento;
    }

    get departamento(){
        return this._departamento;
    }

    set departamento(departamento){
        this._departamento = departamento;
    }

    //Sobreescritura
    //Cambiar el comportamiento de un método de la clase padre

    nombreCompleto(){
        return super.nombreCompleto() + ', ' + this._departamento; //Uso de super para reutilizar lo de la clase padre.
    }
}

let persona1 = new Persona('Christian', 'Aguas'); //Instancia de clase u objeto
console.log(persona1.toString());
persona1.nombre = 'Xavier'; //Manda a llamar de forma indirecta get nombre('Xavier')
console.log(persona1.nombre); //get nombre
/*console.log(persona1.nombre);
console.log(persona1);*/

let persona2 = new Persona('Isabella', 'Sevilla');
//console.log(persona2);
console.log(persona2.toString());

let empleado1 = new Empleado('Camila', 'Aguas', 'Contaduría General');
/*console.log(empleado1);
console.log(empleado1.nombre);
console.log(empleado1.nombreCompleto());
console.log(persona1.toString());*/


console.log(empleado1.toString());

//persona1.saludar(); no es posible llamar a un método static desde un objeto

Persona.saludar();
Persona.saludar2(persona1);
Empleado.saludar();
Empleado.saludar2(empleado1);

console.log(persona1.contadorPersonas);
console.log(Persona.contadorPersonas);

console.log(Empleado.contadorPersonas); //Las clases hijas también heredan atributos estáticos

console.log(persona1.email);
console.log(empleado1.email);
console.log(Persona.email);
console.log(Empleado.email);

console.log(Persona.contadorPersonas);

let persona3 = new Persona('John', 'Sevilla');
console.log(persona3.toString());
console.log(Persona.contadorPersonas);

console.log(Persona.MAX_OBJ);
Persona.MAX_OBJ = 10;

console.log(Persona.MAX_OBJ);

let persona4 = new Persona('Pablo', 'Aguas');
let persona5 = new Persona('Katy', 'Changa');

console.log(persona4.toString());
console.log(persona5.toString());