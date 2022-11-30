function palindromo(cadena) {

  var cadena_main = cadena.toLowerCase();//ponemos todos las letras en minusculas

  var cadena_sin_espacios=cadena_main.replaceAll(" ","");//reemplazamos todos los espacios por nada
 
  
  var cadena_reves = cadena_main.split("").reverse();//hacemos un split de la cadena original y la revertimos. Esta será una matriz de letras
  cadena_reves=cadena_reves.join("");//juntamos la mantriz de letras indicandoles que la separación de cada posicion de la matriz es nada.
  cadena_reves=cadena_reves.replaceAll(" ","");//reemplazamos todos los espacios de la cadena revertida por nada
  

  if(cadena_reves==cadena_sin_espacios) return "La cadena \""+cadena+"\" es un palíndromo";//si cadenas son iguales es un palindromo
  else return "La cadena \""+cadena+"\" no es un palíndromo";//sino no lo es.
}

alert(palindromo("La ruta nos aporto otro paso natural"));
alert(palindromo("Esta frase no es un palindromo"));