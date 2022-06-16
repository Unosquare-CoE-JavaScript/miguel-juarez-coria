//Example 1
function* createLogger(){
    console.log('Start');
    yield
    console.log('Second block');
    yield
    console.log('Third block');
    yield
    console.log('End');
}

const logger = createLogger();
logger.next();
logger.next();
logger.next();
logger.next();


//Example 2
function* createHello(){
    yield 'first';
}
const hello = createHello();
//Returns false because the function does have not finished
console.log(hello.next()); //{ value: 'first', done: false }

//Returns true because the function has finished
console.log(hello.next());//{ value: undefined, done: true }


//Example 3
function* createHello3(){
    const word = yield;
    console.log(word);
}
const hello3 = createHello3();
console.log(hello3.next()); 
console.log(hello3.next('Mike')); 


//Example 4
function* createHello4(){
    const word = yield;
    console.log(`Hello ${word}`);
}
const hello4 = createHello4();
console.log(hello4.next()); 
// ...
// Podemos hacer muchas cosas antes de que se termine de ejecutar nuestra función
// Ese es el beneficio de usar funciones "generator"
// y lo mejor es que pareciera que son funciones síncronas 
// cuando en realidad son funciones asíncronas
// ...
console.log(hello4.next('Mike')); 


//Example 5
// Cachando errores y personalizarlos.
function* createHello5(){
    try {
        const word = yield;
        console.log(`Hello ${word}`);
    } catch(err){
        console.log('ERROR', err);
    }
}
const hello5 = createHello5();
console.log(hello5.next()); 
hello5.throw('algo salió mal');


//Example 6
//Iterando una función "generator"
function* createCounter(){
    yield 10;
    yield 20;
    yield 30;
    yield 40;
}
const counter = createCounter();
//Opción NO OPTIMA
/*console.log(counter.next());
console.log(counter.next());
console.log(counter.next());
console.log(counter.next());
console.log(counter.next());*/

//Iterando la función
for(let i of counter){
    console.log(i);
}


//Example 7 -  Forma 1
//Delegando el control de una función generator a otra
function* create3To4Counter(){
    yield 3;
    yield 4;
}

function* createCounter7(){
    yield 1;
    yield 2;
    yield* create3To4Counter();
    yield 5;
}
for(let i of createCounter7()){
    console.log(i);
}

//Example 7 -  Forma 2
//Delegando el control de una función generator a otra
function* create3To4Counter72(){
    yield 33;
    return 44;
}

function* createCounter72(){
    yield 11;
    yield 22;
    const four = yield* create3To4Counter72();
    console.log(four);
    yield 55;
}
for(let i of createCounter72()){
    console.log(i);
}

//Example 8
const url = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
const fetch = require('node-fetch');

function* createQuoteFetcher(){
    const response = yield fetch(url);
    const quote = yield response.json();
    return `${quote.quoteText} -${quote.quoteAuthor}`;
}

const quoteFetcher = createQuoteFetcher();
quoteFetcher.next().value
    .then(res => quoteFetcher.next(res).value)
    .then(res => quoteFetcher.next(res).value)
    .then(quote => console.log(quote))
    .catch(err => console.log(err))

 