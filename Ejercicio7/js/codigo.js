var numero = prompt("Introduce un número y se mostrará su factorial por consola");
var resultado = 1;

for(let i=1; i<=numero; i++) {
  resultado *= i;
}
console.log(resultado);