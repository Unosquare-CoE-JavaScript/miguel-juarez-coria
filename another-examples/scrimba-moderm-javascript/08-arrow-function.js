/**
 * "arrow functions" para escribir funciones anónimas concisas.
 *
 */

//Funcion arrow, podemos mejorar la declaración
var magic = function() {
  return new Date();
};

//Función arrow, mejorarada
var magic = () => {
  return new Date();
}

//..peo aún se puede mejorar mas, siempre y cuando solo se regrese un valor
var magic = () => new Date();


