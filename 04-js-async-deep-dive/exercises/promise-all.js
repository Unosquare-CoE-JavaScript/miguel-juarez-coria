"use strict";

let firstName = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("Miguel");
    }, 4000);
});

let lastName = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("Coria");
    }, 3000);
});

let middleName = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("Ángel");
    }, 7000);
});

Promise
    .all([firstName, lastName, middleName])
    .then(function (values) {
        console.log(values);
    });
    