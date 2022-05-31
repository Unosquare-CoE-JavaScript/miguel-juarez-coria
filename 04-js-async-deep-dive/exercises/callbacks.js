//Example #1
let logCall = function(){
    console.log("logCall was called back");
};
setTimeout(logCall, 3000);
//3 seconds later
//logCall was called back

//Example #2
//This is the standard
setTimeout(function(){
    console.log("The function was called back");
}, 3000);

let btn = document.querySelector("#btnExample");
btn.addEventListener("click", function(e){
    console.log("The button was clicked!");
});

//Example #3
let students = [{name:"Mary",score:90,school:"East"},
    {name:"James",score:100,school:"East"},
    {name:"Steve",score:40,school:"East"},
    {name:"Gabe",score:90,school:"West"},
    {name:"Rachel",score:85,school:"East"},
    {name:"Rochelle",score:95,school:"West"},
    {name:"Lynette",score:75,school:"East"}];
let processStudents = function (data, callback){
    for (let i = 0; i<data.length; i++){
        if (data[i].school.toLowerCase()==="east"){
            if (typeof callback==="function"){
                callback(data[i]);
            }
        }
    }
}
processStudents(students, function(obj){
    if (obj.score>60){
        console.log(obj.name+" passed");
    }
});

let determineTotal = function(){
    let total = 0;
    let count = 0;

    processStudents(students, function(obj){
       total = total + obj.score;
       count++;
    });
    console.log("Total score: "+total+", Students: "+count);
};

console.log("Before determineTotal");
setTimeout(determineTotal, 0);
console.log("End code.");