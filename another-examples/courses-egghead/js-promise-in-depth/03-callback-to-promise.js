const fs = require("fs");
const util = require("util");

const readFile = util.promisify(fs.readFile);

readFile("index2.html", "utf8").then(
    contents => {
        console.log(contents);        
    },
    error => {
        console.error(error);
    }
);