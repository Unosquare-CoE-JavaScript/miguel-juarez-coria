//Fetch API requires a discussion of...
//Callbacks, Promises, Thenables and Async/Await

//Promises
//Three states: Pending, Fulfilled or Rejected

const users = fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        return response.json();
    })
    .then(data => {
        data.forEach(user => {
            console.log(user);
        });
    });

console.log(users);