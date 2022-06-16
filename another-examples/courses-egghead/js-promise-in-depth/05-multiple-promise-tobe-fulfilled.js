// #region Setup
const API_URL = "https://starwars.egghead.training/";
const output = document.getElementById("app");
const spinner = document.getElementById("spinner");

function queryAPI(endpoint){
    return fetch(API_URL + endpoint).then(response => {
        return response.ok
            ? response.json()
            : Promise.reject(Error("Unsuccessful response"));
    });
}
// #endregion

/*
Example 1:
It isn't eficient because are AJAX call and run chained, after one 
and does not depends each other, this is a sequential order of execution.

queryAPI("films")
    .then(films => {
        return queryAPI("planets").then(planets => {
            output.innerText = 
                `${films.length} films, ` + 
                `${planets.length} planets`;
        });
    })
    .finally(() => {
        spinner.remove();
    });
*/


/*
Example 2:
Promise.all 
takes multiples promises as a parameter and returns a single promise
that is fulfilled when all of the input promises have been fulfilled.

We can use promise.all to kick off both API requests at the same time.
This is more efficient becouse runs in "parallel".

All promises must be fulfilled; otherwise the promises will not be executed.
*/
Promise.all([
    queryAPI("films"),
    queryAPI("planets"),
    queryAPI("species")
])
    .then(([films, planets, species]) => {
        output.innerText = 
                `${films.length} films, ` + 
                `${planets.length} planets, ` + 
                `${species.length} species`;
    })
    .catch(error => {
        console.warn(error);
        output.innerText = ":(";
    })
    .finally(() => {
        spinner.remove();
    });

