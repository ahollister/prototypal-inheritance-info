// Let's declare a person object
const person = {
	init: function (name) {
		this.name = name;
	},
	introduce: function () {
		console.log(`My name is ${this.name}`);
	}
}

// We create a new object using Object.create and set its prototype to 'person'
const adam = Object.create(person);
adam.init('Adam');
adam.introduce();

// Let's create another person
const nick = Object.create(person);
nick.init('Nick');
// We can set a property on an object that has the property already set in its prototype ...
// ... and when called, it will refer to the property highest on the 'prototype chain'.
// If the property doesn't exist on the object we called, it'll look for it in the prototype instead
nick.introduce = function () {
	console.log(`My name is ${this.name}, and I'm totally obsessed with Emacs`);
}
nick.introduce();

// How to check prototypes - use isPrototypeOf
console.log(`person is the prototype of ${adam.name}: ${person.isPrototypeOf(adam)}`);
console.log(`person is the prototype of ${nick.name}: ${person.isPrototypeOf(nick)}`);

// You can also do typechecking using isPrototypeOf
// Is person the prototype of a string?
console.log(`person is the prototype of 'myStr': ${person.isPrototypeOf('myStr')}`);
// Is Array.prototype the prototype of a new array?
const myTestArr = [];
console.log(`Array.prototype is the prototype of myTestArr: ${Array.prototype.isPrototypeOf(myTestArr)}`);



// Here's another way using a constructor
function Person(name) {
	this.name = name;
	this.introduce = function () {
		console.log(`My name is ${this.name}`);
	}
}
// Create tommy as a new instance of Person
const tommy = new Person('Tommy');
tommy.introduce();
// This time, the prototype of tommy is not Person as you might expect, but Person's prototype
console.log(`Person's prototype is the prototype of ${tommy.name}: ${Person.prototype.isPrototypeOf(tommy)}`);