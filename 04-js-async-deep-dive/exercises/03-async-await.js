"use strict";

//Retrieve data from jsonplaceholder.typicode.com/users
var user3Posts;
const retrievePost = async function(userID){
    let url = 'https://jsonplaceholder.typicode.com/posts', 
        posts = []; 

    posts = await fetch(url).then(data => data.json());

    return posts.filter(obj => obj.userId === userID);    
}

retrievePost(3).then(val => user3Posts=val);
console.log(user3Posts);

