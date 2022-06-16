//Forma #1 de colocar una función en una constante
/*const bicycle = {
  gear: 2,
  setGear: function(newGear) {
    "use strict";
    this.gear = newGear;
  }
};*/

//Forma #2. Mas eficiente y concisa
//Solo se remueve la palabra reservada "function"
const bicycle = {
  gear: 2,
  setGear(newGear) {
    "use strict";
    this.gear = newGear;
  }
};

bicycle.setGear(3);
console.log(bicycle.gear);