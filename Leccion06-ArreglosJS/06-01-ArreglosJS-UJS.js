//let autos = new Array('BMW', 'Mercedes Benz', 'Volvo'); -> forma antigua de declarar arreglas
const autos = ['BMW', 'Mercedes Benz', 'Volvo'];
console.log(autos);

console.log(autos[0]);
console.log(autos[2]);

for(let i = 0; i < autos.length; i++){
    console.log(i +": " + autos[i]);
}

//Modificar un elemento por el índice
autos[1] = 'Mercedes-Benz';
console.log(autos[1]);

//Agregar elementos
autos.push('Audi');
console.log(autos);

//Agregar elementos sin índices vacíos
console.log(autos.length);
autos[autos.length] = 'Cadillac';
console.log(autos);

//Agregar elementos con índices vacíos
autos[6] = 'Porshe';
console.log(autos);

console.log(typeof autos);

console.log(Array.isArray(autos));

console.log(autos instanceof Array);
