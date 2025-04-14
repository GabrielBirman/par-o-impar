

let numero = parseInt(document.getElementById('numero').value);
document.getElementById('btn').addEventListener('click', function() {
    numero = parseInt(document.getElementById('numero').value);
    // Validar que el número sea mayor o igual a 0
while
    (isNaN(numero) || numero < 0) {
        alert("Por favor, ingrese un número válido y mayor o igual a 0.");
        numero = parseInt(prompt("Ingrese un número válido y mayor o igual a 0:"));
    }

function esParOImpar(numero) {
    let mensaje;
    if (numero % 2 == 0) {
        mensaje = "par";
        return mensaje;
    } else {
        mensaje = "impar";
        return mensaje;     
    }
}
let resultado = esParOImpar(numero);
document.getElementById('resultado').alert(resultado);


});
