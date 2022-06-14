function checkScope() {
  "use strict";
  var i = "function scope";
  if (true) {
    i = "block scope";
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is: ", i);
  return i;
}

checkScope();
//Block scope i is:  block scope
// Function scope i is:  block scope



function checkScopeTwo() {
  "use strict";
  //var i = "function scope";
  if (true) {
    var i = "block scope";
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is: ", i);
  return i;
}

checkScopeTwo();
//Block scope i is:  block scope
//Function scope i is:  block scope   ===> Porque se declaró la variable "i" como "var"