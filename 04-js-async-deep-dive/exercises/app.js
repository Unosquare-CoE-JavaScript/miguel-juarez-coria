"use strict";

let wordnikWords = "http://api.wordnik.com/v4/words.json/",
    wordnikWord = "http://api.wordnik.com/v4/word.json/",
    apiKey = "?api_key=znvepnmnudq52da5a1ht0ntglzttc1uxgjcoc2f1xb0mvwdvh",
    wordObj;


/*    
asyncFunction()
.then(function(val) {
    console.log("Yeah!! " + val);
    return asyncFunction2();
})
.then(function(val) {
    console.log("Second promise: " + val);
});*/

fetch(wordnikWords + "randomWord" + apiKey)
    .then(function(response) {
        wordObj = response;
        console.log(wordObj);
        return response.json();
    })
    .then(function(data){
        console.log(data.word);
        return fetch(wordnikWord + data.word + "/definitions" + apiKey);
    })
    .then(function(def){
        return def.json();
    })
    .then(function(def){
        console.log(def);
    });