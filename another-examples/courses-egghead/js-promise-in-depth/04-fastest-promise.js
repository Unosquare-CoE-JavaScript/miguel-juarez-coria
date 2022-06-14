const { TIMEOUT } = require("dns");

function resolveAfter(ms ,value){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(value);
        }, ms);
    })
}

/*
//example 1
const promiseA = resolveAfter(1500, "A");
const promiseB = resolveAfter(1000, "B");

const fastestPromise = Promise.race([promiseA, promiseB]);
fastestPromise.then(value => {
    console.log(value);
});*/

//Example 2
/*
The idea here is that, if our timeoutPromise is the promise that settles first, 
we're going to return a rejected promise from the timeout function. 
If that's not the case, this promise will settle first, so we didn't run into the timeout.
*/
function timeout(ms, promise){
    let timeoutID;
    const timeoutPromise = new Promise((_, reject) => {
        timeoutID = setTimeout(() => {
            reject(Error(`operation timed out after ${ms}ms`));
        }, ms);
    });
    return Promise.race([promise, timeoutPromise]).finally(
        () => {
            clearTimeout(timeoutID);
        }
    );
}

const promise = resolveAfter(1000, "A");
timeout(2000, promise).then(
    value => {
        console.log(value);
    },
    error => {
        console.error(error.message);
    }
);