//Fetch API requires a discussion of...
//Callbacks, Promises, Thenables and Async/Await

//2dn param on fecth is an object

const requestJoke = async (firstName, lastName) => {
    const response = await fetch(`http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`);   
    const data = await response.json();
    console.log(data.value);  
}

requestJoke("Miguel", "Coria");
