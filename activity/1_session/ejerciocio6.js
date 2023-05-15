// Constructor de Formatter
function Formatter() {
  this.prefix = "Hello ";
  this.append = function(text) {
    console.log(this.prefix + text);
  };
}

// Agregar un nuevo método utilizando prototype
Formatter.prototype.toLowerString = function(text) {
  console.log(text.toLowerCase());
};

// Crear una instancia de Formatter
const formatter = new Formatter();

// Ejemplos de uso
console.log("Ejercicio 6")
formatter.append("World"); // Result: Hello World
formatter.toLowerString("I'm Andrey"); // Result: i'm andrey
