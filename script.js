/**
 * Object and Object Constructors
 * - Object Literal Syntax
 */
const myObject = {
    property: 'value',
    otherProperty: 77,
    "obnoxious property": function() {
        // Do something
    }
}
/**
 * Retrieve Information out of Object
 * - Usually DOT notation is preferred
 * - DOT notation uses
 *   - retrieving properties of an object
 * - Bracket notation
 *   - retrieving varibales from objects
 *   - retrieving properties that have spaces in the name
*/ 

// DOT notation
myObject.property; // Returns 'value'
// Best for retrieving properties of an object

// Bracket notation
myObject["obnoxious property"]; // Returns the function
// Best for retrieving variables from objects and properties that have spaces in
// the names

/**
 * Object Constructors and Prototypes
 */
/* Constructors
- Only used to set up instance properties, these things will change from one instance
to the next.
- This is local information stored on each seperate space ship that is not needed
by the mothership
*/
function Person(name, age) {
    this.name = name;
    this.age = age;
}

/*
Prototype Role
- Only used to set up methods(functions) and properties(variables) that are shared 
amoung all instances of an object
- Its a mothership that holds all variables and functions that each seperate space
ship needs to function.
*/
Person.prototype.sayHi = function() {
    console.log("Hi from prototype");
}

/*
Creating the new object
- This is each seperate space ship, they have a link to the variables and functions
the mothership stores that all space ships need to use.
*/

const person1 = new Person('Justin', 28);


console.log(person1.name); // Returns 'Justin'
console.log(person1.age); // Returns '28'
person1.sayHi(); // Returns 'Hi from prototype'

// Scopes
/**
 * Global Scope: The outermost scope, accessible from anywhere in the code. Defined outside of any function or block.
 * Local Scope: A scope defined within a function or block, accessible only within that function or block.
 */

// Closures
function makeAdding (firstNumber) {
  // "first" is scoped within the makeAdding function
  const first = firstNumber;
  return function resulting (secondNumber) {
    // "second" is scoped within the resulting function
    const second = secondNumber;
    return first + second;
  }
}
// but we've not seen an example of a "function"
// being returned, thus far - how do we use it?

const add5 = makeAdding(5);
console.log(add5(2)) // logs 7

// Lexical Scope
/**
 * Consists of a function within another function
 * Inner function has access to variables and parameters of outer function
 * Outer function does not have access to variables and parameters of inner function
 */
// Closure
/** 
 * Functions form closures
 * - Closure is the combination of a function and the lexical environment within which that function was declared
 * Can be used in place of an object with only a single method
 * 
*/
function makeFunc() {
  const name = "Mozilla";
  function displayName() { // Maintains references to the variables of the outer function (lexical scope)
    console.log(name);
  }
  return displayName;
}

const myFunc = makeFunc();
myFunc(); // Reference to displayName function that is created when makeFunc is invoked

// Private Variables and Functions
/**
 * Reputation variable is private to the createUser function
 * Cannot be accessed directly from outside the function
 * Can only be modified using the giveReputation method
 * These are used for things that should not be directly accessible from outside the function or returned in the object
 */

function createUser (name) {
  const discordName = "@" + name;

  let reputation = 0;
  const getReputation = () => reputation;
  const giveReputation = () => reputation++;

  return { name, discordName, getReputation, giveReputation }; // Returns an object
}

const josh = createUser("josh");
josh.giveReputation();
josh.giveReputation();

console.log({
  discordName: josh.discordName,
  reputation: josh.getReputation()
});
// logs { discordName: "@josh", reputation: 2 }

// Prototype Inheritance with Factory Functions
/**
 * Factory functions are functions that return objects
 * They can be used to create multiple instances of an object with shared methods and properties
 * Prototypes can be used to share methods and properties between instances of an object created by a factory function
 */

const dogPrototype = {
  bark() {
    console.log(`${this.name} says woof!`);
  },
  fetch() {
    console.log(`${this.name} is fetching!`);
  }
};

function createDog(name, breed) {
  const newDog = Object.create(dogPrototype); // Create a new object with dogPrototype as its prototype
  newDog.name = name;
  newDog.breed = breed;
  return newDog;
}

const fido = createDog('Fido', 'Labrador');
const spot = createDog('Spot', 'Dalmatian');

fido.bark(); // Logs "Fido says woof!"
spot.fetch(); // Logs "Spot is fetching!"

// IIFE (Immediately Invoked Function Expression) Module Pattern
/**
 * A function that is defined and immediately invoked
 * Used to create a new scope and avoid polluting the global scope
 * Can be used to create private variables and functions
 * Frequently used to implement the module pattern
 * - A design pattern used to encapsulate related code into a single unit
 * - Helps to organize code and avoid naming conflicts
 * - Can be used to create private variables and functions
 */

(function() {
// The first and last parentheses turn the function into an expression
// The final parentheses invoke the function immediately
  var message = "Hello from an IIFE!"; // Only accessible within this function
  console.log(message);
})(); // Logs "Hello from an IIFE!"

// Factory Function
/**
 * A function that creates and returns new objects
 * Do not require the use of 'new' keyword or this keyword to define properties and methods
 * Just a regular function that returns an object
 * Leverage closures to create private variables and functions that are not accessible from outside the function
 */

function createUser(name, email) {
  return {
    name: name,
    email: email,
    greet: function() {
      console.log(`Hello, my name is ${this.name}.`);
    }
  };
}

const user1 = createUser("Alice", "alice@example.com");
const user2 = createUser("Bob", "bob@example.com");

user1.greet(); // Output: Hello, my name is Alice.
user2.greet(); // Output: Hello, my name is Bob.