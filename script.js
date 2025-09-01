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
// Bracket notation
myObject["obnoxious property"]; // Returns the function

/**
 * Object Constructors
 * - regular function with a name that starts with an upercase letter
 */
function Player(name, marker) {
    this.name = name;
    this.marker = marker;
    this.sayName = function() {
        console.log(this.name);
    }
}

// Calling the constructor
const player = new Player('Steve', 'X');

// Retrieve player name from object
player.sayName(); // console logs 'Steve'

// Prototype

/* Exercise */
const newBook = new Books('Book One', 'DJ MacHale', 200, 'read'); // Sends info to the constructor

function Books(name, author, pages, haveRead) { // Object constructor
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
    this.info = function() {
        return name + " by " + author + ", " + pages + " pages, " + haveRead;
    }
}

console.log(newBook.info()); // Gets return info from out of object