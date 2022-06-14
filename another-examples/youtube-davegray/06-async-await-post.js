//Fetch API requires a discussion of...
//Callbacks, Promises, Thenables and Async/Await

//2dn param on fecth is an object

const jokeObject = {
    id: "0oO71TSv4Ed",
    joke: "kjdsf dsf asdf sdf as dfa sdf asd fas dfa sdf "
};

const postData = async (jokeObject) => {
    const response = await fetch('https://httpbin.org/post', {
        method: 'POST',
        headers: {            
            "Content-Type": "application/json"
        },
        body: JSON.stringify(jokeObject)
    });   
    const data = await response.json();
    console.log(data);  
}

postData(jokeObject);
