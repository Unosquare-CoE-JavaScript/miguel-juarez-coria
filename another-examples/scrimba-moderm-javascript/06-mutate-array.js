/**
 * Como no podemos modificar un objeto/variable/función cuando es declarado con CONST
 * si podemos mutarlo o cambiarlo
 *
 * lo que se quiere dejar en claro que aunque un objeto es declarado con CONST
 * no se garantiza que sus datos podrán ser cambiados
 */

const s = [5, 7, 2];
function editInPlace() {
  "use strict";

  //Aquí nos marcará un error
  //TypeError: Assignment to constant variable.
  //s = [2, 5, 7];

  //LO que haremos será cambiar los elementos del mismo de este modo
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;

}

//Arreglo original
//[ 5, 7, 2 ]
editInPlace();

//Arreglo mutado
//[ 2, 5, 7 ]
console.log(s);