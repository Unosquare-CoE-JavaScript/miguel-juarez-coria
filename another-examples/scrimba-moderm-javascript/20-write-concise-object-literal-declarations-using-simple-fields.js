
//Forma #1
/*const createPerson = (name, age, gender) => {
  return {
    name: name,
    age: age,
    gender: gender
  };
};*/

//Forma #2
//Esto puede hacerse si el "key" le pertenece al "value"
const createPerson = (name, age, gender) => ({name, age, gender});

console.log(createPerson("Zodiac Hasbro", 56, "male"));