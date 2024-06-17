function esNumeroEntero(numero) {
   
    return Number.isInteger(numero);
  }
  
  // Ejemplos de uso:
  console.log(esNumeroEntero(5)); // Devuelve true
  console.log(esNumeroEntero(3.14)); // Devuelve false
  console.log(esNumeroEntero(-10)); // Devuelve true
   // La función recibe un argumento "numero".
  // Verifica si este es un número entero o no.
  // Returna true si lo es, de lo contrario, retorna false.
  // Tu código:


module.exports = esNumeroEntero;