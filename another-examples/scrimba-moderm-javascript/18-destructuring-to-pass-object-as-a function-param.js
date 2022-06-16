const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};
const half = (function() {

  //Forma #1
  //no muy eficiente porque estamos pasando todo el onjeto "stats"
  //return function half(stats) {
  //  return (stats.max + stats.min) / 2.0;
  //};

  //Forma #2
  //Usando "destructuring" para tomar solo los valores que necesitamos en lugar de todo el objeto.
  //Esto es muy usado cuando usamos API's, asi evitamos tratar con todo el objeto y tomamos solo los valores deseados
  //"max" y "min" están siendo tomados del objeto "stats" el cual es pasado en la línea #27
  return function half({max, min}) {
    return (max + min) / 2.0;
  };

})();
console.log(stats);
console.log(half(stats));