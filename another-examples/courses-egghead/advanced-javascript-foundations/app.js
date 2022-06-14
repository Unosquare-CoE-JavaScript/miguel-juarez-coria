function foo(){};

foo.prototype.test = 'hola mundo!';
console.log(foo.prototype);

const name = new foo();
console.log(name.test);