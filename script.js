

document.getElementById('btn').addEventListener('click', function() {
    
        console.log("Agrega dos numeros y te los multiplica");
    let num;
    do {
        num = parseInt(prompt("Escribe un numero VALIDO y mayor o igual a 0: "));
    } while (isNaN(num) || num < 0);   
    
    function esParOImpar(num) {
        if (num % 2 == 0) {
          return "par";
        } else {
          return "impar";
        }
      }
      
      let resultado = esParOImpar(num);
      alert("El resultado es: " + resultado);
      });
      




