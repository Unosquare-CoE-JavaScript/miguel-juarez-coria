"use strict";

let asyncFunction = function(){
    return new Promise(function(resolve, reject){
       setTimeout(function(){
          resolve("asyncFunction has resolved.")
       }, 4000);
    });
  };

  
asyncFunction()
    .then(msg => console.log(msg))
    .catch(err => console.log(err))
    .finally(() => console.log("asyncFunction has finished."));