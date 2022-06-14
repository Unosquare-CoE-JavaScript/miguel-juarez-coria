/*
  1. Use the getCats, getDogs, and getBirds functions to retrieve data.
  2. Call the superSecretOrder function and pass it a single (flat) array of all the animals.
  3. Log to the console the result that superSecretOrder returns.
*/

// Callback functions you can use
function getCats(cb){
  const timer = Math.random() * 1000;
  setTimeout(function(){
    cb(['Cat1', 'Cat2', 'Cat3']);
  }, timer);
}

function getDogs(cb) {
  const random = Math.random() * 1000
  setTimeout(function () {
    cb(["EatsAnythingDOG", "BarksalotDOG", "HeadTiltDOG"])
  }, random)
}

function getBirds(cb) {
  const random = Math.random() * 1000
  setTimeout(function () {
    cb(["ScruffyBIRD", "BaldyBIRD", "ScreechBIRD"])
  }, random)
}

function superSecretOrder(items, cb) {
  const random = Math.random() * 1000
  setTimeout(function () {
    cb([...items].sort())
  }, random)
}




getCats(function(cats){
  getDogs(function(dogs){
    getBirds(function(birds){
      const allAnimals = cats.concat(dogs, birds);
      //console.log(allAnimals);
      superSecretOrder(allAnimals, function(sortedAllAnimals){
        console.log(sortedAllAnimals);
      });
    });
  });
});