"use strict";

fetch("https://jsonplaceholder.typicode.com/todos/")
    //GET Example
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    });


//POST example
let todo = {
    completed: false,
    userId: 1,
    title: "Learn Promises"
}

fetch("https://jsonplaceholder.typicode.com/todos/", {
    method: "POST",
    headers: {
        "Content-type": "application/json"
    },
    body: JSON.stringify(todo)
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => {
       console.log(`Hubo un error: ${error}`);
    });

