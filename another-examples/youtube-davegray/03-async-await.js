//Fetch API requires a discussion of...
//Callbacks, Promises, Thenables and Async/Await

//Promises
//Async / Await

const myUsers = {
    userList: []
}

const myCoolFunction = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    return data;
}

const anotherFunction = async () => {
    const response = await myCoolFunction();    
    myUsers.userList = response;
    console.log(myUsers.userList);
}

anotherFunction();
console.log(myUsers.userList);