"use strict";
//Refactoring jQuery example

const moviePlanets = function(movieNum){
    let url = 'https://swapi.co/api/films/';

    $.getJSON(url + movieNum + '/')
    .then(function(response){
        console.log(response.title);    
    });
}


moviePlanets(3);
console.log('Remaining code');