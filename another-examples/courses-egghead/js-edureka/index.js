//Ejemplo de función CLOUSURE
var add = (function(){
    var counter = 0;
    return function(){
        counter += 1;
        return counter;
    }
})();

console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());

//Arow functions se usan cuando no quieres perder el contexto actual
