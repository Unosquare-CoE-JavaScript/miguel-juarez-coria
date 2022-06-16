/**
 * Para evitar que podamos modificar o mutar los objetos se usa la funcion FREEZE
 *
 */

function freezeObj() {
  "use strict";
  const MATH_CONSTANTS = {
    PI: 3.14
  };

  Object.freeze(MATH_CONSTANTS);  //para evitar mutar o cambiar el objeto posteriormente

  try {
    MATH_CONSTANTS.PI = 99;
  } catch( ex ) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}

const PI = freezeObj();
console.log(PI);
//JS nos arrojaría el siguiente error:
//TypeError: Cannot assign to read only property 'PI' of object '#<Object>'
