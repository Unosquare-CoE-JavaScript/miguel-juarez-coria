
const increment = (function() {
  return function increment(number, value) {
    return number + value;
  };
})();
console.log(increment(5, 2));
console.log(increment(5)); //En esta línea falta un parámetro, por lo que en la función se puede especificar uno por default
// 7
// NaN


//Función modificada con parámetro por default
const increment2 = (function() {
  return function increment2(number, value= 1) {
    return number + value;
  };
})();
console.log(increment2(5, 2));
console.log(increment2(5));
// 7
// 6