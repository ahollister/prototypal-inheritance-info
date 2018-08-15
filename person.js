// Let's declare a person object using an object literal
const person = {
	init: function(name) {
		this.name = name;
	},
	introduce: function() {
		console.log(`My name is ${this.name}`);
	}
}

// We can create a new object using Object.create and set its prototype to 'person'
const adam = Object.create(person);
adam.init('Adam');
adam.introduce(); // ​​​​​My name is Adam​​​​​

// Let's create another person
const nick = Object.create(person);
nick.init('Nick');
// We can set a property on an object that has the property already set in its prototype
// ... and when called, it will refer to the property highest on the 'prototype chain'.
// If the property doesn't exist on the object we called, it'll look for it in the prototype instead
nick.introduce = function() {
	console.log(`My name is ${this.name}, and I'm totally obsessed with Emacs`);
}
nick.introduce(); // ​​​​​My name is Nick, and I'm totally obsessed with Emacs​​​​​

// How to check the prototypes of an object - use isPrototypeOf
console.log(`person is the prototype of ${adam.name}: ${person.isPrototypeOf(adam)}`); // ​​​​​person is the prototype of Adam: true​​​​​
console.log(`person is the prototype of ${nick.name}: ${person.isPrototypeOf(nick)}`); // ​​​​​person is the prototype of Nick: true​​​​​

// You can also do typechecking using isPrototypeOf
// Is person the prototype of a string?
console.log(`person is the prototype of 'myStr': ${person.isPrototypeOf('myStr')}`); // ​​​​​person is the prototype of 'myStr': false​​​​​
// Is Array.prototype the prototype of a new array?
const myTestArr = [];
console.log(`Array.prototype is the prototype of myTestArr: ${Array.prototype.isPrototypeOf(myTestArr)}`); // ​​​​​Array.prototype is the prototype of myTestArr: true​​​​​


// Here's another way using a constructor
const Person = function(name) {
	this.name = name;
	this.introduce = function() {
		console.log(`My name is ${this.name}`);
	}
}
// Create tommy as a new instance of Person
const tommy = new Person('Tommy');
tommy.introduce(); // ​​​​​My name is Tommy​​​​​

// This time, the prototype of tommy is not Person as you might expect, but Person's prototype
// This is because 'Person' is simply the constructor used to create the object and is of type function
console.log(`Person's prototype is the prototype of ${tommy.name}: ${Person.prototype.isPrototypeOf(tommy)}`); // ​​​​​Person's prototype is the prototype of Tommy: true​​​​​
// And tommy is an instanceof Person
console.log(`${tommy.name} is an instanceof Person: ${tommy instanceof Person}`); // ​​​​​Tommy is an instanceof Person: true​​​​​

// Whereas for our objects created with Object.create, we need to check if they're instances of the prototype's constructor!
console.log(`${nick.name} is an instanceof person.constructor: ${nick instanceof person.constructor}`); // ​​​​​Nick is an instanceof person.constructor: true​​​​​