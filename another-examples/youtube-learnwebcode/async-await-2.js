/*
  1. Use the getCats, getDogs, and getBirds functions (that return promises) to retrieve data.
  2. Call the superSecretOrder function (which returns a promise) and pass it a single (flat) array of all the animals.
  3. Log to the console the result that superSecretOrder returns.
*/

function delay(){
  const random = Math.random() * 1000;
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve();
    }, random);
  });
}

async function getCats(){
  await delay();
  //return ["Meowsalot", "Purrsloud", "BiscuitMaker"];
 
  //Si deseamos provocar el error
  throw new Error("No cats");
}

getCats().then(function(cats){
  console.log(cats);
});

async function go(){
  try{
    const cats = await getCats();
    console.log(cats);
  }catch(err){
    console.log(err);
  }
  
}

go();