let getProperties = (obj) => Object.keys(obj);

let person = {
  name: "Lucas",
  age: 27,
  profession: "Developer",
};
console.log("Ejercicio 1")
console.log(person);
console.log(getProperties(person)); // Esto imprimirá: ['name', 'age', 'profession']
