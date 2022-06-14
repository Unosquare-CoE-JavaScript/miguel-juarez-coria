const [z, x] = [1, 2, 3, 4, 5, 6]; //En este caso estamos asignando 1 y 2 a las variables z y x
console.log(z, x);

const [d, e,  ,f] = [1, 2, 3, 4, 5, 6]; //En este caso estamos asignando 1, 2 y 4 a las variables d, e y f
console.log(d, e, f);



//El destructuring se puede usar para intercambiar el valor de 2 variables.
//En el siguiente caso intercambiamos el valor de las variables a y b  ====> LINEA 14
let a = 8, b = 6;
(() => {
  "use strict";
  [a, b] = [b, a]
})();
console.log(a);
console.log(b);