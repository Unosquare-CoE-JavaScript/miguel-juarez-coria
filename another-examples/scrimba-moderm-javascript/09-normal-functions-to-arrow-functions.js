/**
 * Como convertir una función normal a una arrow function
 *
 */

//normal function
var myConcat = function(arr1, arr2) {
  return arr1.concat(arr2);
};

console.log("Normal function: "+myConcat([1, 2], [3, 4, 5]));


//arrow function
var myConcat2 = (arr1, arr2) => arr1.concat(arr2);
console.log("Arrow function : "+myConcat2([1, 2], [3, 4, 5]));
