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
