class Empleado{
    constructor(nombre, sueldo){
        this._nombre = nombre;
        this._sueldo = sueldo;
    }

    get nombre(){
        return this._nombre;
    }
 
    set nombre(nombre){
        this._nombre = nombre;
    }
 
    get sueldo(){
        return this._sueldo;
    }
 
    set sueldo(sueldo){
        this._sueldo = sueldo;
    }

    obtenerDetalles(){
        return `Empleado: nombre: ${this._nombre}, sueldo: ${this._sueldo}`
    }


}


class Gerente extends Empleado{
    constructor(nombre, sueldo, departamento){
        super(nombre, sueldo);
        this._departamento = departamento;
    }

    get departamento(){
        return this._departamento;
    }

    set departamento(departamento){
        this._departamento = departamento;
    }

    //Sobreescritura
    obtenerDetalles(){
        return `Gerente: ${super.obtenerDetalles()}, dpto: ${this.departamento}.`;
    }
} 

//Polimorfismo
function determinarTipo(tipo){
    console.log(tipo.obtenerDetalles());
    //Uso de instanceof (solo responde a la misma clase y a sus clases superiores (clases padres).)
    //Siempre iniciar comparando la clase de menor jerarquía a la de mayor jerarquía.
    if(tipo instanceof Gerente){
        console.log('Es un objeto de tipo Gerente.');
        console.log(tipo._departamento);
    }
    else if(tipo instanceof Empleado){
        console.log('Es un objeto de tipo Empleado.');
        console.log(tipo._departamento);
    }
    else if(tipo instanceof Object){
        console.log('Es un objeto de tipo Object.');
    }
}


let empleado1 = new Empleado('Juan', 3000);


let gerente1 = new Gerente('Carlos', 5000, 'Planificación');

determinarTipo(empleado1);
determinarTipo(gerente1);