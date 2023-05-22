console.log("Ejercicio 3");

class InvertirCadena {
  constructor() {
      this.cadenaInvertir = "";
  }

  invertir = () => {
      if (this.cadenaInvertir === "") {
          throw new Error("La cadena está vacía");
      }
      console.log(this.cadenaInvertir.split("").reverse().join(""));
  }
}
let invertirCadena = new InvertirCadena();
// Si intentamos ejecutar la función "invertir" sin cambiar 
// "cadenaInvertir", se lanzará un error porque la cadena está vacía. 
// Podemos manejar este error utilizando un bloque try/catch
try {
  invertirCadena.invertir();
} catch (error) {
  console.log(error.message);
}
invertirCadena.cadenaInvertir = "Hola mundo";
invertirCadena.invertir();  // Debería imprimir "odnum aloH"

// Finalmente, si intentamos acceder al método "nuevoMetodo" que no existe en 
// nuestra clase, obtendremos un error. Podemos evitar que se rompa nuestro código utilizando un bloque 
// try/catch nuevamente

try {
  invertirCadena.nuevoMetodo();
} catch (error) {
  console.log("El método 'nuevoMetodo' no existe en la clase 'InvertirCadena'");
}
