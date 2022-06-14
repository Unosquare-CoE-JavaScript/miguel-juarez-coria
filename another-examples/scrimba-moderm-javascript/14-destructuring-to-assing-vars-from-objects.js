
var voxel = {x: 3.6, y: 7.4, z: 6.54 };

//Antigúa forma de asignar valores de un objeto a una variable
//var x = voxel.x; // x = 3.6
//var y = voxel.y; // y = 7.4
//var z = voxel.z; // z = 6.54


//El destructuring te permite hacerlo en una línea
const { x : a, y : b, z : c } = voxel; // a = 3.6, b = 7.4, c = 6.54


const AVG_TEMPERATURES = {
  today: 77.5,
  tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
  "use strict";
  // change code below this line
  //const tempOfTomorrow = undefined;
  const { tomorrow : tempOfTomorrow } = avgTemperatures; // destructuring
  // change code above this line
  return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES)); // should be 79