const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {

  const [ , , ...arr] = list; //Se están removiendo los primeros 2 elementos del arreglo, por eso llevan comas vacias

  return arr;
}
const arr = removeFirstTwo(source);
console.log(arr); //Arreglo con los primeros 2 elementos removidos del original
console.log(source);