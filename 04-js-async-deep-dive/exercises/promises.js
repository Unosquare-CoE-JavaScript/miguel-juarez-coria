"use strict";
let asyncFunction = function(){
  return new Promise(function(resolve, reject){
     setTimeout(function(){
        resolve("asyncFunction has resolved.")
     }, 4000);
  });
};

let asyncFunction2 = function(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve("asyncFunction2 has resolved.")
        }, 3000);
    });
};

//Example #1
/*let promise = asyncFunction();
let promise2 = promise.then(function(val){
    console.log("Yeah!, " + val);
    return asyncFunction2();
});
promise2.then(function(val){
    console.log("Second promise: "+val);
});
console.log("The code is asynchronous.");*/
    
//Example #2
asyncFunction.promise
    .then(function(val){
        console.log("Yeah!, " + val);
        return asyncFunction2();
    })
    .then(function(val){
    console.log("Second promise: "+val);
});
console.log("The code is asynchronous.");