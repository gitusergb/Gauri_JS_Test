<!-- A Markdown file with answers to all theoretical questions. -->

1) Explain the concept of closures in JavaScript. Provide a use-case where closures are beneficial.

A closure is the combination of a function bundled together (enclosed) with references to its surrounding state(the lexical environment).
In other words,a closure gives you access to an outer function's scope from an inner function. 
In JavaScript, closures are created every time a function is created, at function creation time.
Closures are functions bundled together in such a way that the inner function has access to the scope 
and hence the variables of the outer function, even after the outer function has finished executing.
This behavior is possible because JavaScript functions remember the environment in which they were created, 
keeping a reference to the variables in the outer scope, rather than copying them.

Use Case: Creating Private Variables

Closures are beneficial when you want to create private variables that cannot be accessed directly from outside a function. 
For example, closures allow us to encapsulate data and create functions with private state, 
which can be useful in implementing data privacy.

Here's an example of using closures to create a counter that retains its state between calls:

function createCounter() {
    let count = 0; // This variable is private to createCounter
    return function() {
        count++;      // Inner function has access to 'count'
        return count;
    };
}
const counter = createCounter();
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
console.log(counter()); // Output: 3

In this example, the `count` variable is enclosed in the `createCounter` function, 
and only the inner function returned by `createCounter` has access to it. 
This makes `count` effectively a "private" variable that can't be modified directly from outside, 
but it can still be accessed and updated via the returned function. 
This approach is commonly used in situations where you want to limit direct access to certain data 
while providing controlled methods to modify or retrieve it.




2) Describe the differences between var, let, and const in JavaScript, focusing on hoisting and scope.

In JavaScript,`var`,`let`,and `const`are used to declare variables, but they differ in terms of scope, hoisting, and mutability.

1. **`var`**:
Variables declared with **`var`** have **function scope** (if declared inside a function) or **global scope** (if declared outside any function). They are **hoisted to the top of their scope**, meaning they are accessible before their declaration, but their value will be `undefined` until the actual line of code where they are assigned. **`var`** variables can also be **redeclared** and **reassigned** within the same scope.

```javascript
function example() {
  var x = 10;
  if (true) {
    var x = 20; // Same variable as the outer x
    console.log(x); // Output: 20
  }
  console.log(x); // Output: 20
}

example();
```

In this example, both `x` variables refer to the same `x` due to `var`’s function scope. The value of `x` is 20 in both `console.log` statements.

2. **`let`**:
Variables declared with **`let`** have **block scope**, meaning they are restricted to the block (e.g., `{ }` braces) where they are defined. While **`let`** is also hoisted, it is placed in the **Temporal Dead Zone (TDZ)** from the start of the block until its declaration, so it is not accessible before being declared. **`let`** variables can be **reassigned** but cannot be **redeclared** within the same scope.

```javascript
function example() {
  let x = 10;
  if (true) {
    let x = 20; // Different variable from the outer x
    console.log(x); // Output: 20
  }
  console.log(x); // Output: 10
}

example();
```

In this example, the two `x` variables are distinct due to `let`’s block scope. The inner `x` shadows the outer `x` within the `if` block but does not affect it outside the block.

3. **`const`**:
Variables declared with **`const`** are similar to **`let`** in terms of **block scope**. However, **`const`** variables are **constants** and must be assigned a value at the time of declaration. They **cannot be reassigned** once initialized, although if the value is an object or array, the properties or elements can still be modified. Like `let`, `const` is also hoisted and placed in the **TDZ**, meaning it cannot be accessed before its declaration.

```javascript
function example() {
  const x = 10;
  if (true) {
    const x = 20; // Different variable from the outer x
    console.log(x); // Output: 20
  }
  console.log(x); // Output: 10
}

example();
```

In this example, `const` behaves like `let` in terms of block scope. The inner `x` shadows the outer `x` within the block, but neither `x` can be reassigned.

Summary:
- **`var`**: Function or global scope, hoisted (initialized as `undefined`), can be redeclared and reassigned.
- **`let`**: Block scope, hoisted (in TDZ), cannot be redeclared in the same scope, can be reassigned.
- **`const`**: Block scope, hoisted (in TDZ), cannot be redeclared or reassigned, but properties of objects/arrays declared with `const` can be modified.
In modern JavaScript, it’s recommended to use **`let`** and **`const`** instead of **`var`** to reduce unexpected behaviors and create more predictable code.


3) What are the differences between a programming language and a scripting language? Where does JavaScript fit in?
The terms "programming language" and "scripting language" are often used interchangeably, but they have distinctions based on their purpose, usage, and execution model.

Key Differences between Programming and Scripting Languages

1. **Purpose and Use Case**:
   - **Programming Language**: Generally designed for building applications from scratch and creating complex, large-scale software. They are often used for compiling code to a standalone application or executable.
   - **Scripting Language**: Primarily intended to automate tasks, control existing systems, or manipulate other applications rather than building them from scratch. They often work within a runtime environment and are typically interpreted, making them useful for tasks within larger applications.

2. **Compilation vs. Interpretation**:
   - **Programming Language**: Often compiled into machine code (binary) that runs directly on the hardware. This makes programs faster but requires a compilation step.
   - **Scripting Language**: Generally interpreted at runtime by another program (interpreter). This allows for easier testing and debugging without recompilation, but it may run slower than compiled code.

3. **Execution Environment**:
   - **Programming Language**: Usually used to create software that can run independently of other applications.
   - **Scripting Language**: Typically runs within a host environment (e.g., a web browser, operating system shell, or application), leveraging the capabilities provided by that environment.

4. **Typical Usage**:
   - **Programming Language**: Used for building software like games, operating systems, desktop applications, etc.
   - **Scripting Language**: Used for tasks like automating repetitive operations, gluing different components of an application, or enhancing web pages.

# Where JavaScript Fits In

JavaScript began as a **scripting language** primarily for web browsers to control webpage behavior, manipulate the DOM, and enhance user interactions without requiring a page reload. It was designed to work within a host environment (the browser), where it was interpreted and executed by the JavaScript engine embedded in the browser.

Over time, JavaScript has evolved significantly:

- With **Node.js**, JavaScript can now run server-side code, functioning much like traditional programming languages for building complex applications, not just browser-based scripts.
- **Modern JavaScript (ES6 and beyond)** supports features typical of traditional programming languages, such as classes, modules, and asynchronous programming, making it suitable for building large, scalable applications.

As a result, JavaScript blurs the line between a traditional programming language and a scripting language. While it retains characteristics of a scripting language (interpreted, often runs in a browser), it also has capabilities that allow it to be used as a full-fledged programming language for developing standalone applications.
