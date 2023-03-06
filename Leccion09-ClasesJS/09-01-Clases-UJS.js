//let persona3 =  new Persona('Karla', 'Juárez'); La clase Persona aún no ha sido definida.
//Cuando se trabaja con clases, no se aplica el concepto de Hoisting

//Clase padre
//La clase padre de todas las clases es Object. Por ejemplo, class Persona extends Object
//prototype -> permite agregar atributos o métodos de manera dinámica


class Persona{
    constructor(nombre, apellido){
        this._nombre =  nombre;
        this._apellido = apellido;
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
        return this._nombre + ' ' + this._apellido;
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
persona1.nombre = 'Xavier'; 
console.log(persona1.nombre);
console.log(persona1);

let persona2 = new Persona('Isabella', 'Sevilla');
console.log(persona2);

let empleado1 = new Empleado('Camila', 'Aguas', 'Contaduría General');
console.log(empleado1);
console.log(empleado1.nombre);
console.log(empleado1.nombreCompleto());
console.log(empleado1.toString());
console.log(persona1.toString());