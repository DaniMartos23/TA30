function informacion(cadena) {


  // Comprobar mayúsculas y minúsculas
  if(cadena == cadena.toUpperCase()) {
    return "La cadena \""+cadena+"\" está formada sólo por mayúsculas";
  }
  else if(cadena == cadena.toLowerCase()) {
    return "La cadena \""+cadena+"\" está formada sólo por minúsculas";
  }
  else {
    return "La cadena \""+cadena+"\" está formada por mayúsculas y minúsculas";
  }

}

alert(informacion("Frase Con MajúscULas y MInúsculas"));
alert(informacion("FRASE CON SOLO MAYÚSCULAS"));
alert(informacion("frase con solo minúsculas"));