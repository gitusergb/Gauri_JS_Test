//  Code for constructor function and prototype question.
// Create a constructor function Person with a property name.
//  Add a method greet to its prototype that prints "Hello, <name>".
//  Test this with different instances.

// Constructor function
function Person(name) {
    this.name = name;
  }
  // Adding the greet method to the Person prototype
  Person.prototype.greet = function() {
    console.log(`Hello, ${this.name}`);
  };
  // Testing 
  const person1 = new Person("Gauri");
  const person2 = new Person("Bidwai");
  person1.greet(); // O/p: Hello, Gauri
  person2.greet(); // O/p: Hello, Bidwai
  