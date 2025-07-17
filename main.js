//Profe lo pongo así (con require) porque me salia error y no corria, busque la solución y dice que es porque node.js usa commonJS 
//No sé si usarlo así este mal 
const { PI , IVA , DIAS_SEMANA} = require('./constantes.js');
const { sumar, restar, multiplicar, areaCirculo} = require('./operaciones-matematicas.js');

//Ejercicio 1
const radio = 5;
const area = PI * radio **2;
console.log (`El área del círculo con radio ${radio}: ${area}`);

const precio = 100;
const precioConIVA = precio * (1 + IVA);
console.log (`El precio con IVA: ${precioConIVA}`);

console.log(`El tercer día de la semana es: ${DIAS_SEMANA[2]}`);

//Ejercicio 2
console.log("Suma: ", sumar(6, 7));
console.log("Resta: ", restar(8, 3));
console.log("Multiplicación: ", multiplicar(8, 3));
console.log("El área del circulo: ", areaCirculo(3));
