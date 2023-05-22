// Ejercicio 1
  import "./ejercicio1.js";

// Ejercicio 2
  import "./ejercicio3.js";

// Ejercicio 3
  import "./ejercicio4.js";

// Ejercicio 4

// Ejercicio 5

// Ejercicio 6

let loginWitUsername = (username, password) => {
    return new Promise(function (resolve, rejected) {
      setTimeout(() => {
        if (username === "admin" && password === "passwd") {
          resolve("User logged in");
        } else {
          rejected("Error: invalid username or password");
        }
      }, 200);
    });
};
