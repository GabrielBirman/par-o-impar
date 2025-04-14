
document.getElementById('btn').addEventListener('click', function() {

let numero = parseInt(document.getElementById('numero').value);
while
    (isNaN(numero) || numero < 0) {
        alert("Por favor, ingrese un número válido y mayor o igual a 0.");
        numero = parseInt(prompt("Ingrese un número válido y mayor o igual a 0:"));
    }

function esParOImpar(numero) {
    
    if (numero % 2 == 0) {
        return "par";
    } else {
        return "impar";
    }
}
let resultado = esParOImpar(numero);
document.getElementById('resultado').alert(resultado);


});
