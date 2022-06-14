function printManyTimes(str) {
  "use strict";

  var sentence = str + " is cool!";

  sentence = str + " is amazing!"

  for(var i = 0; i < str.length; i+=2) {
    console.log(sentence);
  }

}
printManyTimes("freeCodeCamp");
// freeCodeCamp is amazing!
// freeCodeCamp is amazing!
// freeCodeCamp is amazing!
// freeCodeCamp is amazing!
// freeCodeCamp is amazing!
// freeCodeCamp is amazing!


/**
 * Refactoring the same function
 *
 */
function printManyTimesRefactor(str) {
  "use strict";

  const SENTENCE = str + " is cool!";
  //sentence = str + " is amazing!" ==> Se comenta porque no se puede re-declarar 2 veces

  for(var i = 0; i < str.length; i+=2) {
    console.log(SENTENCE);
  }

}
printManyTimesRefactor("freeCodeCamp");
// freeCodeCamp is cool!
// freeCodeCamp is cool!
// freeCodeCamp is cool!
// freeCodeCamp is cool!
// freeCodeCamp is cool!
// freeCodeCamp is cool!