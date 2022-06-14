/**
 * El operador "spread" divide los elementos de un array en elementos individuales.
 * O sea, genera una "lista de argumentos" a apartir de un "array".
 *
 */
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
  //arr2 = arr1; // change this line, OLD LINE
  arr2 = [...arr1]; //Al usar este operador evitamos que la modificación del "arr1" altere al "arr2"
  arr1[0] = 'potato'
})();
console.log(arr2);

//Without modification line
[ 'potato', 'FEB', 'MAR', 'APR', 'MAY' ]

//With modified line
//["JAN", "FEB", "MAR", "APR", "MAY"]