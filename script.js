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

// Factory Function vs Object Constructor
/**
 * Factory Function:
 * - Simpler syntax, just a regular function that returns an object
 * - No need to use 'new' keyword or 'this' keyword
 * - Can leverage closures for private variables and functions
 * - More flexible, can return different types of objects based on input parameters
 * 
 * Object Constructor:
 * - Requires the use of 'new' keyword and 'this' keyword to define properties and methods
 * - More rigid structure, always returns an instance of the same type of object
 * - Prototype inheritance can be used to share methods and properties between instances
 * - Can be less intuitive for beginners due to the use of 'new' and 'this'
 */


 // Classes
 // Getters and Setters (Accessor Properties)
 let user = {
  name: "John",
  surname: "Smith",

  get fullName() {
    return `${this.name} ${this.surname}`;
  },

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  }
};

alert(user.fullName); // Gets the current name and surname using the getter
user.fullName = "Alice Cooper"; // Sets name to "Alice" and surname to "Cooper" using the setter

// Accessor Descriptors
let user = {
  name: "John",
  surname: "Smith"
};

Object.defineProperty(user, 'fullName', { // Creating a property inside the user object
  get() {
    return `${this.name} ${this.surname}`;
  },

  set(value) {
    [this.name, this.surname] = value.split(" ");
  }
});

alert(user.fullName); // John Smith

for(let key in user) alert(key); // name, surname

// Smart Getters/Setters
let user = {
  get name() {
    return this._name; // Stores passed name in the _name property
    // _name is not used directly, only through the getter and setter
  },

  set name(value) {
    if (value.length < 4) {
      alert("Name is too short, need at least 4 characters");
      return;
    }
    this._name = value;
  }
};

user.name = "Pete";
alert(user.name); // Pete

user.name = ""; // Name is too short...

// Basic Class Syntax
// Class: Kind of a function
class User {

  constructor(name) {
    // Creates a function named User which becomes the result of the class declaration
    this.name = name;
  }

  sayHi() {
    alert(this.name);
  }

}

// Usage:
let user = new User("John"); // Create a new instance of the User class by calling the constructor
user.sayHi(); // Runs the method sayHi

// "Named Class Expression"
// (no such term in the spec, but that's similar to Named Function Expression)
let User = class MyClass {
  sayHi() {
    alert(MyClass); // MyClass name is visible only inside the class
  }
};

new User().sayHi(); // works, shows MyClass definition

alert(MyClass); // error, MyClass name isn't visible outside of the class

function makeClass(phrase) {
  // declare a class and return it
  return class {
    sayHi() {
      alert(phrase);
    }
  };
}

// Create a new class
let User = makeClass("Hello");

new User().sayHi(); // Hello


// ES6 Modules
/** Before ES6 Modules
 * All code in a single file or multiple files combined into one
 * Variables and functions in one file can conflict with those in another file
 * HTML
<script src="one.js" defer></script>
<script src="two.js" defer></script>

// one.js
const greeting = "Hello, Odinite!";

// two.js
console.log(greeting);
// Logs "Hello, Odinite!"
// If two.js loads before one.js, it will throw an error because greeting is not defined yet

After ES6
- You can export variables and functions from one file and import them into another file

- Named Exports
  - Place export before variable or function declaration
  - Put all varaibles and functions you want to export in curly braces export { var1, var2, func1 } at the end of the file
  - In the other file use import { var1, var2, func1 } from './file.js' to import them

- Default Exports
  - Can only export 1 thing
  - Use export default before variable or function declaration
  - Import it in the next file by giving it any name import anyName from './file.js'

Entry Point
- Only link 1 script in the HTML file
- This is the entry point that imports everything else
- Example: main.js
- Need to add the type="module" attribute to the script tag in HTML
  */


// NPM (Node Package Manager)
/** - importing 3rd party libraries and packages for use in your project
* package.json 
* - contains information about the project and its dependencies
* - npm reads this file to install the correct versions of the packages and run scripts set as an npm command
*/


// Webpack
/**
 * Bundling
 * - Provide it a single entry point file
 * - It will follow all the import statements and bundle everything into a single file
 * - This is the file you will link in your HTML
 * 
 * Webpack
 * - npm init -y: Creates a package.json file
 * - npm install --save-dev webpack webpack-cli: Installs webpack and webpack-cli as dev dependencies, --save-dev saves them in the devDependencies section of package.json
 *   - Creates a node_modules folder that contains all the packages and their dependencies
 *   - Creates a package-lock.json file that contains the exact versions of the packages and their dependencies
 * - 2 Important Directories from Webpack 
 *   - src: Source code, contains all the files you write
 *   - dist: Distribution code, contains the bundled file that you will link in your HTML
 * 
 * - npx webpack: Runs webpack to bundle the files
 * 
 * Handling HTML
 * - HTMLWebpackPlugin will add the output file from it's configuration as the script tag automatically
 * 
 * Loading CSS
 * - CSS-Loader: Reads CSS files imported in JS files and returns the CSS as a string
 * - Style-Loader: Injects CSS into the DOM by adding a <style> tag
 * - The purpose of these loaders is to allow you to import CSS files in your JS files and have them applied to the DOM only when they are needed
 * 
 * Loading Images
 * - Images inside url() in CSS files are automatically handled by Webpack
 * - Images in src attributes of img tags in HTML files need to be handled by the HTML-Loader
 */

 // NPM Scripts
 /**
  * - written in package.json file 
  *   - "name": "command"
  * - npm run name - Will run the command
  */

 // Webpack Modes
 /**
  * - dev mode
  * - production mode
  * - Ideally create 2 different config files, one for each
  *   - webpack.dev.js
  *   - webpack.prod.js
  *   - package.json
  *     "scripts": {
          "build": "webpack --config webpack.prod.js",
          "dev": "webpack serve --config webpack.dev.js"
        },
  */

// Repository Templats
/**
 * - on Github, allow for a repo to be a template with setup code you want to reuse in other projects
 * - 
 */