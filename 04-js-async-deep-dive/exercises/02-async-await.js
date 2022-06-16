"use strict";

const swapiFilms = async function(){
    let url = "https://swapi.co/api/films/",
        filmsData = {},
        films = [];

    filmsData = await fetch(url).then(data => data.json());
    films= filmsData.results.map()
    console.log(films);
}

swapiFilms();
console.log("Remaining Code");

