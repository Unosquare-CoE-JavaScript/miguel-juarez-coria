# You Don't know JS Yet

[Chapter 1 What Is JavaScript?](#chapter-1-what-is-javaScript?)  
[Chapter 2 Surveying JS](#chapter-2-surveying-js)  
[Chapter 3 Digging to the roots of JS](#chapter-3-digging-to-the-roots-of-js)  
[Chapter 4 The big picture](#chapter-4-the-bigger-picture)

# Chapter 1 What Is JavaScript?  
## Language Specification  
**TC39**, the technical steering committee that manages JS. Their primary task is managing the official specification for the language.

All **TC39** proposals progress through a five-stage process—of course, since we’re programmers, it’s 0-based!—Stage 0through Stage 4. You can read more about the Stage process here: https://tc39.es/process-document/  

## Many faces  
Typical paradigm-level code categories include procedural,object-oriented (OO/classes), and functional (FP):  
* Procedural style organizes code in a top-down, linearprogression through a pre-determined set of operations,usually collected together in related units called proce-dures.
* OO style organizes code by collecting logic and datatogether into units called classes.  
*  FP style organizes code into functions (pure computa-tions as opposed to procedures), and the adaptations ofthose functions as values.  

**JavaScript is most definitely a multi-paradigm language.**  

## Backwards & Forwards  
**Backwards compatibility** means that once something is accepted as valid JS, there will not be a future change to the language that causes that code to become invalid JS.  

**Forwards compatibility**  means that including a new addition to the language in a program would not cause that program to break if it were run in an olderJS engine: *JS is not forwards-compatible.*  

Since *JS* is not *forwards-compatible*, it means that there isalways the potential for a gap between code that you canwrite that’s valid JS, and the oldest engine that your site orapplication needs to support. If you run a program that usesan ES2019 feature in an engine from 2016, you’re very likelyto see the program break and crash.  

For new and incompatible syntax, the solution is **transpiling**.  

Typically, forwards-compatibility problems related to syntax are solved by using a transpiler (the most common onebeing [Babel]([https://babeljs.io "Babel JS") to convert from that newerJS syntax version to an equivalent older syntax.

`A polyfill will try to emulate certain APIs, so can use them as if they were already implemented and producing a piece of code that’s equivalent to the behavior, but is able to run in older JS environments.`  
We can create a polyfill but many developers use created instead:  
[Calce ES6] (https://github.com/es-shims/es6-shim "Calce ES6")  
[Calce ES5] (https://github.com/es-shims/es5-shim "Calce ES5")  

`A transpiler on the other hand will transform your code and replace the respective code section by other code, which can already be executed.`

## Entire flow of a JS source program
1. After a program leaves a developer’s editor, it gets tran-spiled by Babel, then packed by Webpack (and perhaps half a dozen other build processes),then it gets delivered in that very different form to a JS engine.  
2. The JS engine parses the code to an AST.  
3. Then the engine converts that AST to a kind-of bytecode, a binary  intermediate representation (IR), which is then refined/converted even further by the optimizing JIT compiler.  
4. Finally, the JS VM executes the program.

## WASM  
Ironically, even though WASM runs in the JS engine, the JS language is one of the least suitable languages to source WASM programs with, because WASM relies heavily on static typing information.  

Some folks have suggested WASM points to a future where JS is excised from, or minimized in, the web. These folks often harbor ill feelings about JS, and want some other language—any other language!—to replace it.  

## Strictly Speaking  
Is a guide to the best way to do things so that the JS engine has the  best chance of optimizing and efficiently running the code.  

> //only whitespace and comments are allowed  
> //before the use-strict pragma  
```
"use strict";
```
> //the rest of the file runs in strict mode  

*It’s vastly better to simply turn strict mode on for the entire file/program.* 

# Chapter 2 Surveying JS  
## Each File is a Program  
In JS, each standalone file is its own separate program. It may surprise you to consider separate .js files as separateJS programs.  

The only way multiple standalone .js files act as a singleprogram is by sharing their state (and access to their public functionality)via the `globalscope`. They mix together in this global scope namespace, so at runtime they act as  whole.  

If a file is loaded via module-loading mechanism such as an import statement or a `<script type=module>` tag, all its code is treated as a single module.  

Regardless of which code organization pattern (and loading mechanism) is used for a file (standalone or module), you should still think of each file as its own(mini) program, which may then cooperate with other (mini) programs to performthe functions of your overall application.

## Values  
The most fundamental unit of an information in a program is a value. Values are data.  

In this case the value of the next code is `Miguel` stored in the var `firstName`.   
```
let firstName = "Miguel";
console.log("My name is ${ firstName }.");
// My name is Miguel.
```

## Arrays & Objects  
**Arrays** can hold any type of value. 
```
names=["Frank","Kyle","Peter","Susan"];
```

**Objects** can store un-ordered data, keyed collection of any various values.  
```
name = {
    first:"Kyle",
    last:"Simpson",
    age:39,
    specialties:["JS","Table Tennis"]
};
```
### Declaring and Using Variables  
Variables have to be declared (created) to be used.  
```
var name="Miguel";  
```
Where `var` is the keyword to be used to declare a variable.
also can use `let`:  
```
let name="Miguel";
```

The diference between `var` and `let` is that `let` *allows a more limited access to the variable than `var`*, this is called `scope`.  
An example of `scope`:  
```
var adult=true;  
if(adult) {
    var name="Kyle";  
    let age=39;  
    console.log("Shhh, this is a secret!");
}  
console.log(name);// Kyle  
console.log(age);// Error!
```
In this case `age` var can be accessed only in the scope where was declared, inner the `if` clause.  

But `adult` and `name` var can be accessed in the outer `scope`.  

Another keyword is `const` but has an additional limitation that it must be given a value of the moment it's declared, and cannot be re-assigned a *different* value later: 
```
const myBirthday = true;

myBirthday = false; //Error!
```

## Functions  
Takes the broader meaning of another related term: `procedure`.  A `procedure` is a collection of statements than can be invoked one or more times, may be provided some inputs, and may give back one or more outputs.  

Early JS function definition:  
```
function awesomeFunction(coolThings) {
    // ..returnamazingStuff;
}
```
> It’s extremely important to note that in JS, functions are values that can be assigned (as shown in this snippet) and passed around. In fact, JS functions are a special type of the object value type. Not all languages treat functions as values,but it’s essential for a language to support the functional programming pattern, as JS does.

This is a function with params and returns a *single value*:  
```
function greeting(myName) {
    return `Hello,${myName}!`;
}
var msg = greeting("Kyle");
console.log(msg);// Hello, Kyle!
```

## Comparisons  
The mainly used operator is `==` and it's well known how to use it.  But in JS another operator is `===`, this operator means `checking both the value and the type`. Example:  

```
42==="42";// false
42===42;  // true
```

Why to use `===` operator?  
Because it disallows the `coercion` where other JS comparisons do allow (coercion).  

> Warning when use `===` operator  
The operator is designed to lie in two cases of special values: **NaN** and **-0**.  
Consider:  
NaN===NaN;// false  
0===-0;// true  
In the case of `NaN`, the `===` operator lies and says that an occurrence of `NaN` is not equal to another `NaN`.  

## Coercion Comparisons  
Coercion means a value of one type being converted to its respective representation in another type (to whatever extent possible).  

If the comparison is between the same value type, both `==` and `===` **do exactly the same thing, no difference whatsoever**.  

> If the value types being compared are different, the `==` differs from `===` in that it allows coercion before the comparison. In other words, they both want to compare values of like types, but `==` allows type conversions first, and once the types have been converted to be the same on both sides, then `==` does the same thing as `===`.  

## How We Organize in JS  
Two major patterns for organizing code (data and behavior)are used broadly across the JS ecosystem: `classes` and `modules`.  

### Classes  
A class in a program is a definition of a `type` of custom data structure that includes both data and behaviors that operate on that data.  

Classes define how such a data structure works, but classes are not themselves concrete values.  

#### Class Inheritance  
It allows construct a new class from another. The new class will have all the methods (`inherance`) from his `father class`. This is a functionality that allows us to save code.  

> The fact that both the inherited and overridden methods can have the same name and co-exist is called `polymorphism`.  

### Modules  
Essentially the same goal as the class pattern, which is to group data and behavior together into logical units.  

The mainly difference with `classes` is the **syntax**.  

#### Classic Modules  
Some features of a module:  
- Modules are singleton. They will be loaded and executed only once.  
- Modules can use import and export.  
- Modules are always executed in strict mode.  

Comparing these forms to the `class` forms, there are more similarities than differences.  

The `class` form stores methods and data on an object instance, which must be accessed with the `this.` prefix. With modules, the methods and data are accessed as identifier variables in `scope`, without any `this.` prefix.  

### ES Modules  
ES modules (ESM), introduced to the JS language in ES6. 
`ES modules` are the standard for **JavaScript**, while `CommonJS` is the default in **Node.js**.  

# Chapter 3 Digging to the Roots of JS  
## Iteration  
The iterator pattern has been around for decades, and suggests a `standardized` approach to consuming data from a source one chunk at a time. The idea is that it’s more common and helpful to iterate the data source—to progressively handle the collection of data by processing the first part, then the next,and so on, rather than handling the entire set all at once.  

### **for..of** iterator  
```
// given an iterator of some data source:
varit = /* .. */;
// loop over its results one at a time
for(let val of it) {
    console.log(`Iterator value:${val}`);
}
```
Another mechanism that’s often used for consuming iterators is the `...` operator. This operator actually has two symmetrical forms: 
    - `spread`  
    - `rest` or `gather`  
The `spread` form is an iterator-consumer.  
To `spread` an iterator, you have to have `something` to spread it into. There are two possibilities in JS:  
    - An `array` or  
    - An `argument` list for a function call.  

`spread` an iterator into an array:  
```
var vals = [ ...it ];  
```

`spread` an iterator into a function:  
```
doSomethingUseful( ...it );
```

### Iterables  
 The iterator-consumption protocol is technically defined for consuming iterables; an iterable is a value that can be iterated over.  

 ES6 defined the basic data structure/collection types in JS as iterables. This includes strings, arrays, maps, sets, and others.  

 ```
 // an array is an iterable var   
 arr=[10,20,30];
 for(let val of arr) {
     console.log(`Array value:${val}`);
}
// Array value: 10
// Array value: 20
// Array value: 30
 ```
 
 > For the most part, all built-in iterables in JS have three iterator forms available:  
    - keys-only (keys())  
    - values-only (values())  
    - entries (entries())  

### Clousure  
Closure is when a function remembers and continues to access variables from outside its scope, even when the function is executed in a different scope.  

Closure is most common when working with asynchronous code, such as with callbacks. Consider:  
```
function getSomeData(url) {  
    ajax(url,functiononResponse(resp){  
        console.log(`Response (from${url}):${resp}`);  
    });  
}  

getSomeData("https://some.url/wherever");  
// Response (from https://some.url/wherever): ...
```

### this **Keyword**  
 `This` keyword refers to an object that is executing the current piece of code.  

 The `this` keyword refers to different objects depending on how it is used:  

| Invoked                 | Result     |
| ----------------------- | ----------- |
| In an **object** method | `this` refers to the object        |
| **Alone**               | `this` refers to the global object |
| In a **function**        | `this` refers to the global object |
| In a **function**, in strict mode  | `this` is `undefined` |
| In an **event** | `this` refers to the `element` that received the event. |
| Methods like `call()`, `apply()` and `bind()` can refer `this` to any `object`.|

A function that closes over ascope can never reference a different scope or set of variables. But a function that has dynamic `this` context awareness can be quite helpful for certain tasks.  

### Prototypes  
Where `this` is a characteristic of function execution, a `prototype` is a characteristic of an object, and specifically resolution of a property access.  

> Think about a prototype as a linkage between two objects; the linkage is hidden behind the scenes, though there are ways to expose and observe it.   

![Prototype Chain](https://github.com/Unosquare-CoE-JavaScript/miguel-juarez-coria/blob/main/git-in-depth/assets/images/prototype-chain.png "Prototype Chain")  

Consider:  
```
var homework={
    study() {
        console.log(`Please study${this.topic}`);
    }
};
var jsHomework = Object.create(homework);
jsHomework.topic="JS";
jsHomework.study();// Please study JS

var mathHomework = Object.create(homework);
mathHomework.topic="Math";
mathHomework.study();// Please study Math
```

![Two objects linked to a parent](https://github.com/Unosquare-CoE-JavaScript/miguel-juarez-coria/blob/main/git-in-depth/assets/images/two-objects-linked-to-a-parent.png "Two objects linked to a parent")  

# Chapter 4 The Bigger Picture  
## Pillar 1: Scope and Closure  
JS is lexically scoped, though many claim it isn’t, because of two particular characteristics of its model that are not present in other lexically scoped languages.  

The first is commonly called `hoisting`: when all variables declared any where in a scope are treated as if they're declared at the beginning of the scope. The other is that `var` declared variables are function scoped, even if they appear inside a block.

`let/const` declarations have a peculiar error behavior called the `TemporalDead Zone` (**TDZ**) which results in observable but unusable variables.  

> `Closure` is a natural result of lexical scope when the language has functions as first-class values, as JS does. When a function makes reference to variables from an outer scope, and that function is passed around as a value and executed in otherscopes, it maintains access to its original scope variables; this is **closure**.

## Pillar 2: Protoypes  
JS is one of very few languages where you have the option to create objects directly and explicitly, without first defining their structure in a class.  

Classes are just one pattern you can build on top of such power. But another approach, in a very different direction, is to simply embrace objects as objects,forget classes altogether, and let objects cooperate through the prototype chain. This is called `behavior delegation`. I think `delegation` is more powerful than `class inheritance`, as a means for organizing behavior and data in our programs.  

## Pillar 3: Types and Coercion  
I agree that JS developers should learn more about types, and should learn more about how JS manages type conversions.I also agree that type aware tooling can help developers, assuming they have gained and used this knowledge in the first place!.  

Arguably, this pillar is more important than the other two,in the sense that no JS program will do anything useful ifit doesn’t properly leverage JS’s value types, as well as the conversion (`coercion`) of values between types.  
