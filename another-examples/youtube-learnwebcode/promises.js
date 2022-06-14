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