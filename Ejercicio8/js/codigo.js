var numero = prompt("Introduce un número entero");

var resultado = compara(numero);


function compara(numero) {
  if(numero % 2 == 0) {
    alert("El número "+numero+" es par");
  }
  else {
    alert("El número "+numero+" es impar");
  }
}