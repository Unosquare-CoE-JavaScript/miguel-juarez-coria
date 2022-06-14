/**
 * el operador rest (...) se utiliza cuando una función recibe un número variable de argumentos
 *
 */

const sum = (function() {
  return function sum(x, y, z) {
    const args = [ x, y, z ];
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(1, 2, 3));
//6

//La misma función pero con el operador rest (...)
const sum2 = (function() {
  return function sum2(...myArgs) {
    return myArgs.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum2(7, 8, 9));
//24