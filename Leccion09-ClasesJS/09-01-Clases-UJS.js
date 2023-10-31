//let persona3 =  new Persona('Karla', 'Juárez'); La clase Persona aún no ha sido definida.
//Cuando se trabaja con clases, no se aplica el concepto de Hoisting

//Clase padre
//La clase padre de todas las clases es Object. Por ejemplo, class Persona extends Object
//prototype -> permite agregar atributos o métodos de manera dinámica


class Persona{
    
    static contadorPersonas = 0; //atributo de nuestra clase

    static get MAX_OBJ(){
        return 5;
    }

    //email = 'Valor default del email'; //atributo de nuestros objetos.
    
    constructor(nombre, apellido){
        this._nombre =  nombre;
        this._apellido = apellido;
        if(Persona.contadorPersonas < Persona.MAX_OBJ){
            this.idPersona = ++Persona.contadorPersonas;
        } 
        
        else{
            console.log('Se han superado el máximo de objetos permitidos.')
        }
    }

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
        return this.idPersona + ' ' + this._nombre + ' ' + this._apellido;
    }

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

//Clase hija
class Empleado extends Persona{
    constructor(nombre, apellido,departamento){
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
        return super.nombreCompleto() + ', ' + this._departamento;
    }
}

let persona1 =  new Persona('Christian', 'Aguas'); //Instancia de clase u objeto
console.log(persona1.toString());
/*persona1.nombre = 'Xavier'; 
console.log(persona1.nombre);
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

console.log(Empleado.contadorPersonas);

/*console.log(persona1.email);
console.log(empleado1.email);
console.log(Persona.email);
console.log(Empleado.email);*/

console.log(Persona.contadorPersonas);

let persona3 = new Persona('John', 'Sevilla');
console.log(persona3.toString());
console.log(Persona.contadorPersonas);

console.log(Persona.MAX_OBJ);
Persona.MAX_OBJ = 10;

console.log(Persona.MAX_OBJ);

let persona4 = new Persona('Pablo', 'Aguas');
let persona5 = new Persona('Katy', 'Changa');

console.log(persona5.toString());