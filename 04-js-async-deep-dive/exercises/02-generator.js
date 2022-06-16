"use strict";

async function *request(){
    let i=1;
    let URL= "https://jsonplaceholder.typicode.com/todos/";
    while(true){
        let resp = await fetch(URL+i);
        let data = await resp.json();
        yield data;
        i++;
    }
}

let req = request();
async function getStuff() {
    //console.log(await req.next());
    let contentJSON = await req.next();
    document.getElementById("myDiv").innerHTML += contentJSON.value.title;
}