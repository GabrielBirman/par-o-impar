

document.getElementById('btn').addEventListener('click', function() {
    document.getElementById('btn').addEventListener('click', function() {
        console.log("Agrega dos numeros y te los multiplica");
      let num = parseInt(prompt("Escribe el primer numero: "));
      function esParOImpar(num) {
        if (num % 2 == 0) {
          return "par";
        } else {
          return "impar";
        }
      }
      
      let resultado = esParOImpar(num1,num2);
      alert("El resultado es: " + resultado);
      });
      


});
