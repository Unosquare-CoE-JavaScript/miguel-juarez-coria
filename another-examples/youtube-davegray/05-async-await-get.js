//Fetch API requires a discussion of...
//Callbacks, Promises, Thenables and Async/Await

//2dn param on fecth is an object
//The advantages of this example is which tha API does not only get data on JSON format

//Data on JSON format: Accept: 'application/json'
//Data on text plain format: Accept: 'text/plain'

const getDadjoke = async () => {
    const response = await fetch('https://icanhazdadjoke.com/', {
        method: 'GET',
        headers: {            
            Accept: 'text/plain'
        }
    });
    //const data = await response.json();
    const data = await response.text();
    console.log(data);  
}

getDadjoke();
