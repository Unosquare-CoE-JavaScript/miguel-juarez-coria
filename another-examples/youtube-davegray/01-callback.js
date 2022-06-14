//Fetch API requires a discussion of...
//Callbacks, Promises, Thenables and Async/Await

//Callbacks
function firstFunction(params, callback){
    //do stuff
    callback();
}

//AKA "callback hell"
firstFunction(params, function(){
    secondFunction(params, function(){
        thirfunciton(params, function(){

        });
    });
});