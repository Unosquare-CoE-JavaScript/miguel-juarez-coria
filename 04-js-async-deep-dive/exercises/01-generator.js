"use strict";
/*
function *genTest(){
    let x = 0;
    console.log('start');
    x++;
    yield;
    console.log(x);
    x++;
    console.log(x);
    x++;
    yield;
    console.log('end');
    return x;
}
let gen = genTest();
*/

const test = function *(){
    yield 10;
    yield 20;
    yield 30;
}
let it= test();

console.log("After Code.");

