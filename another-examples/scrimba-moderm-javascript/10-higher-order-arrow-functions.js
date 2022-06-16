/**
 * Cuando una funció  n recibe ccomo parámetro otra función es momento de crear una "arrow function"
 *
 */

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];


//Función normal
const squareList = (arr) => {
  const squaredIntegers = arr;
  return squaredIntegers;
};

const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);


//Arrow function
const squareList2 = (arr) => {
  const squaredIntegers = arr.filter(num => Number.isInteger(num) && num>0).map(x => x*x);
  return squaredIntegers;
};

const squaredIntegers2 = squareList2(realNumberArray);
console.log(squaredIntegers2);