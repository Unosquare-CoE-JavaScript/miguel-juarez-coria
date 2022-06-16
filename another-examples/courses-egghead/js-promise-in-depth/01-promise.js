// #region Setup
const API_URL = "https://starwars.egghead.training/";
const output = document.getElementById("app");
const spinner = document.getElementById("spinner");

function getFilmTitles(films){
    return films
    .sort((a, b) => a.episode_id - b.episode_id)
    .map(film => `${film.episode_id}. ${film.title}`)
    .join("\n"); 
}
// #endregion

fetch(API_URL + "filmsss")
    .then(response => {
        if (!response.ok){
            return Promise.reject(
                new Error("Unsuccesssful response")
            );
        }
        return response.json().then(films => {
            output.innerText = getFilmTitles(films);
            return films;
        });
    })    
    .catch(error => {    
        console.warn(error);
        output.innerText = ":(";
        return [];
    })
    .finally(() => {
        spinner.remove();        
    })
    .then(films => {
        console.log(films);
    });


