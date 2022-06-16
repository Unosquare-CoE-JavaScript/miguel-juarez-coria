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

Promise.allSettled([
    queryAPI("_films").then(f => `${f.length} films`),
    queryAPI("_planets").then(p => `${p.length} planets`),
    queryAPI("_species").then(s => `${s.length} species`),
    queryAPI("_vehicles").then(v => `${v.length} vehicles`)
])
    .then(results => {
        const statistics = results
            .filter(result => result.status==="fulfilled")        
            .map(result => result.value);
        output.innerText = 
            statistics.length === 0
            ? "failed to load statistics :( "    
            : statistics.join("\n");
    })
    .catch(error => {
        console.warn(error);
        output.innerText = ":(";
    })
    .finally(() => {
        spinner.remove();
    });

