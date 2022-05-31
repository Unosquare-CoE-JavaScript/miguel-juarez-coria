# Asynchronous JavaScript Deep Dive 

## Understanding Asyncronous Coding  
Basically the way syncronous code works is one piece of code executes and must finish before the next piece of code can start and so it goes in order.

```
use 'strict';

const test = function(){
    console.log("Start of code");
    alert("Notice Me!");
    console.log("End of code");
}

const test2 = function(){
    console.log("Now I get attention.");
}

test();
test2();
```

Asyncronous can be explained like this:  
![Non-blocking/asyncronous Javascript model](assets/images/async.png "Non-blocking/asyncronous Javascript model")
1. Request I/O, the code can continue the process.  
2. A change of context is applied, the real operation occurs out of our application.  
3. The request is pulled into the queue of processs pending to be processed.  
4. The event loop process every request.  
5. When the request is processed the function associated with him (callback) is scheduled to be executed. The callback will do the specified tasks on it. 


## Advantages vs Disadvantages  
### Syncronous
**Advantages**  
Easy to write.   
**Disadvantages**  
May create blocking code.  
Less performant.  

### Asyncronous
**Advantages**  
Very performant.  
Eliminates code blocking.  
**Disadvantages**  
???????? It can be difficult to reason about.    
Harder to write.  

## Event Loop  
In the next code, we can see an example of how the ´event loop´ works.  
```  
console.log(“hola”);  
setTimeout(function timeoutCallback() {  
    console.log(“mundo”);  
}, 500);  
console.log(“Ubykuo, everytime, everywhere”);  

//Results:  
// => hola  
// => Ubykuo, everytime, everywhere  
// => mundo  
```  
As we can see, JS has only one `thread` and events like `setTimeout`, `DOM` and `HTTP` request are not executed by JS.  
These are called `Web API` and are executed by the browser in another `thread`, for that reason, JS can execute multiple tasks without stop the sequential process.
![Event Loop](assets/images/1_7TBEc7ozzrMZmVgvI3s0mQ.gif "Event Loop")

## Callbacks  
Code in JS runs sequentially, this is synchronous, but sometimes is beneficial to have code execute asynchronously.  
This is called `callbacks`.   
**Example 1**
```
let logCall = function(){
    console.log("logCall was called back");
};
setTimeout(logCall, 3000);
```

**Example 2**  
Callback with an anonymous function, **this is the standard**.
```
setTimeout(function(){
    console.log("The function was called back");
}, 3000);
```

The better way of using `callbacks` is on `event listeners`: **you don't want something happen until an event occurs**.
### The problems with CALLBACKS  
1. *Callback hell*: When you have nested callbacks.    
2. *Difficult to reason about*: Two or more callback acting on same state.  
3. *Inversion of control*  

That's why `PROMISES` help you to solve these problems.

# Promises  
Promises provide a powerful async pattern in Javascript. Many API's make use of promise.  
Promise are:
- An object with Properties and Methods.  
- Represents the Eventual Completion (or Fairlure) of an Asyncronous Operation.  
- Provides a resulting value.  

Example of a Promise:
```
let asyncFunction = function(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve("asyncFunction has resolved.")
        }, 4000);
    });
};

let promise = asyncFunction();
promise.then(function(val){
    console.log("It's done!!!"+val+ ' ');
});

console.log("The code is asynchronous.");
```

On the console we can see:  
**First:** `The code is asynchronous.`    
**Second:** `It's done!!! asyncFunction has resolved.`  

This why the promise has a `setTimeout` of 4 seconds later but the process continues while the promise is resolved.  
