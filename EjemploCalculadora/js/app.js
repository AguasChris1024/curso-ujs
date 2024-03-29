function sumar(){
    const formulario = document.getElementById('formulario');
    let operandoA = formulario['operandoA'];
    let operandoB = formulario['operandoB'];
    let resultado = parseFloat(operandoA.value) +  parseFloat(operandoB.value);
    if (isNaN(resultado)){ 
        resultado = 'La operación no incluye números';
    }
    document.getElementById('resultado').innerHTML = `El resultado es: ${resultado}.`;
    console.log(`El resultado es: ${resultado}.`);
}