
const swapi = function(num){
  let API_URL = "https://swapi.dev/api/people/";

  fetch(API_URL + num)
    .then((response) => {
        if(!response.ok){
            console.log("No hubo respuesta de la API");
            throw Warn("No hubo respuesta de la API");
        }
        return response.json();
    })
    .then((data) => {
        console.log(data);
        return fetch(data.homeworld);
    })
    .then((hwdata) => {
        return hwdata.json();
    })
    .then((data2) =>{
        console.log(data2);
        return fetch(data2.residents[6]);
    })
    .then((data) =>{
        return data.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((e) =>{
        throw Error("Hubo un error!");
        console.log(e.message);
    })
};

swapi(1);
