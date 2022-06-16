"use strict";

/*
const plainFunction = async function() {
    console.log("start");
    return "done";
}

var result = plainFunction()
    .then(val => console.log(val));
*/

let asyncFunction = function(){
    return new Promise(function(resolve, reject){
       setTimeout(function(){
          resolve("asyncFunction has resolved.")
       }, 2000);
    });
  };

const asyncFun = async function(){
    let p1 = await asyncFunction();
    console.log(p1);
    console.log(`${p1}-more info`);
}

asyncFun();