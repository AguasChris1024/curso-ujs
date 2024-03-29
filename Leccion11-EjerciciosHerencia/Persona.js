class Persona{
    static contadorPersonas = 0;
    constructor(nombre, apellido, edad){
        this._idPersona = ++Persona.contadorPersonas;
        this._nombre = nombre;
        this._apellido = apellido;
        this.edad = edad;
    }

    get idPersona(){
        return this.idPersona;
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
    get edad(){
        return this._edad;
    }
    set edad(edad){
        this._edad = edad;
    }
    toString(){
        return `${this._idPersona}) 
                ${this._nombre} 
                ${this._apellido}, 
                ${this._edad} años.`;
    }
}

let persona1 = new Persona('Chistian', 'Aguas', 27);
console.log(persona1.toString());