/*
  1. Use the getCats, getDogs, and getBirds functions (that return promises) to retrieve data.
  2. Call the superSecretOrder function (which returns a promise) and pass it a single (flat) array of all the animals.
  3. Log to the console the result that superSecretOrder returns.
*/


// Functions which return promises that you can use
function getCats() {
    return new Promise(function (resolve, reject) {
      const random = Math.random() * 1000
      setTimeout(function () {
        resolve(["Meowsalot", "Purrsloud", "BiscuitMaker"])
      }, random)
    })
  }
  
  function getDogs() {
    return new Promise(function (resolve, reject) {
      const random = Math.random() * 1000
      setTimeout(function () {
        resolve(["EatsAnything", "Barksalot", "HeadTilt"])
      }, random)
    })
  }
  
  function getBirds() {
    return new Promise(function (resolve, reject) {
      const random = Math.random() * 1000
      setTimeout(function () {
        resolve(["Scruffy", "Baldy", "Screech"])
      }, random)
    })
  }
  
  function superSecretOrder(items) {
    return new Promise(function (resolve, reject) {
      const random = Math.random() * 1000
      setTimeout(function () {
        resolve([...items].sort())
      }, random)
    })
  }

/**
 * Example of a promise with "all"
 * This is better than chain many "then" 
 * 
 */
/*
Promise.all([getCats(), getDogs(), getBirds()]).then(function (animals) {
    const allAnimals = animals[0].concat(animals[1], animals[2]);
    return superSecretOrder(allAnimals);   
}).then(function (sortedNames) {
    console.log(sortedNames);
});*/

(async function() {   
    const [cats, dogs, birds] = await Promise.all([getCats(), getDogs(), getBirds()]);
    const allAnimals = cats.concat(dogs, birds);
    const sortedNames = await superSecretOrder(allAnimals);  
    console.log(sortedNames); 
})();

