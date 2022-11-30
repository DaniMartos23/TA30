var valores = [true, 5, false, "hola", "adios", 2];


var resultado = valores[3] > valores[4];
if (resultado==true){
    console.log("El texto "+valores[3]+" es mayor");
}
else{
    console.log("El texto "+valores[4]+" es mayor");
}


var aux1 = valores[0];
var aux2 = valores[2];

console.log("Obtener resultado TRUE");
var resultado = aux1 || aux2;
console.log(resultado);

console.log("Obtener resultado FALSE");
resultado = aux1 && aux2;
console.log(resultado);

console.log("Operaciones matematicas:");
var num1 = valores[1];
var num2 = valores[5];

var suma = num1+num2;
console.log(suma);

var resta = num1-num2;
console.log(resta);

var multiplicacion = num1*num2;
console.log(multiplicacion);

var division = num1/num2;
console.log(division);

var modulo = num1%num2;
console.log(modulo);