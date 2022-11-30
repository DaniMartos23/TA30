var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

var numeros = prompt("Introduce tu número de DNI (sin la letra)");
var letra = prompt("Introduce la letra de tu DNI (en mayúsculas)");
letra = letra.toUpperCase();

if(numeros < 0 || numeros > 99999999) {
    console.log("El número proporcionado no es válido");
}

else {
    var letraCalculada = letras[numeros % 23];
    if(letraCalculada != letra) {
        console.log("La letra o el número proporcionados no son correctos");
    }
    else {
        console.log("El número de DNI y su letra son correctos");
    }
}