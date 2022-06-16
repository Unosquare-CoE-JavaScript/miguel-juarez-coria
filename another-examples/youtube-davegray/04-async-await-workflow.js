//Fetch API requires a discussion of...
//Callbacks, Promises, Thenables and Async/Await

//Workflow function

const getAlluserEmails = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    const userEmailArray = data.map(user => {
        return user.email;
    });

    postToWebPage(userEmailArray);
}

const postToWebPage = (data) => {
    console.log(data);
}

getAlluserEmails();
