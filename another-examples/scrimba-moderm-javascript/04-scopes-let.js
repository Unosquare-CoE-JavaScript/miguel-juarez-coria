function checkScope() {
  "use strict";
  let i = "function scope";
  if (true) {
    let i = "block scope";
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is: ", i);
  return i;
}

checkScope();
//Block scope i is:  block scope
//Function scope i is:  function scope

function checkScopeTwo() {
  "use strict";
  //let i = "function scope";
  if (true) {
    let i = "block scope";
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is: ", i);
  return i;
}

checkScopeTwo();
//Block scope i is: ,"block scope"
//ReferenceError: i is not defined  ===> Porque está fuera del scope de la variable i