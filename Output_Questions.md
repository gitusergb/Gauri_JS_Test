 <!-- A Markdown file with output-based questions and reasons. -->

 1)
 ```javascript
 
 console.log("Start");
setTimeout(() => console.log("Timeout"), 0);
Promise.resolve().then(() => console.log("Promise"));
console.log("End");

```
Question: What will be the output? Explain why.
o/p:
Start
End
Promise
Timeout
1. **Synchronous Code Execution**:
   - The code begins by executing `console.log("Start")`, which is a synchronous operation, so it logs `"Start"` immediately.
   - The next line schedules a `setTimeout` callback with a delay of `0` milliseconds. This places the callback in the **macrotask queue** but does not execute it immediately. The JavaScript engine moves on to the next line without waiting for the timeout.
   - Then, we have a `Promise` that immediately resolves. This places the `.then` callback into the **microtask queue** for execution after the current stack of synchronous code finishes.
   - Finally, `console.log("End")` is a synchronous operation, so it logs `"End"` right away.

2. **Event Loop and Task Execution Order**:
   - Once the synchronous code has finished (i.e., `"Start"` and `"End"` have been logged), the JavaScript event loop checks for tasks in the **microtask queue** (promises, async callbacks, etc.) before moving on to the **macrotask queue** (like `setTimeout` callbacks).
   - The `.then` callback from the `Promise` is in the microtask queue, so `"Promise"` is logged next.
   - After all microtasks are processed, the event loop moves to the macrotask queue and executes the `setTimeout` callback, logging `"Timeout"`.
# S0,
The event loop prioritizes tasks in the following order:
1. Complete synchronous code.
2. Process all microtasks (e.g., `Promise` callbacks).
3. Process macrotasks (e.g., `setTimeout` callbacks).

Therefore, the final output is that.

2) 
```javascript
let original = { a: 1, b: { c: 2 } };
let shallowCopy = { ...original };
shallowCopy.b.c = 3;
console.log(original.b.c);

```
Question: What will be the output? Explain why shallow copy behaves this way.

o/p: 3
1. **Shallow Copy with Spread Operator**:
   - The `shallowCopy` object is created using the spread operator `{ ...original }`, which creates a **shallow copy** of `original`.
   - A shallow copy duplicates the top-level properties but does not recursively copy nested objects. Instead, it copies references to the nested objects.
   
2. **Effect on Nested Objects**:
   - In `original`, `b` is an object with a property `c`. Since the copy is shallow, `shallowCopy.b` is a reference to the same `b` object as in `original`.
   - When we modify `shallowCopy.b.c` by setting it to `3`, this change affects `original.b.c` as well, because both `original.b` and `shallowCopy.b` point to the same object.

3. **Result**:
   - After setting `shallowCopy.b.c = 3`, `original.b.c` also becomes `3`, because they are referencing the same nested object.

# Why Shallow Copy Behaves This Way
A shallow copy only duplicates the top-level properties and references, not the actual nested objects. Thus, any changes made to nested objects in the copied object will also be reflected in the original object (and vice versa). This behavior is why `original.b.c` reflects the change made through `shallowCopy.b.c`.


3) 
```javascript
for (var i = 1; i <= 3; i++) { setTimeout(() => console.log(i), 1000);
}
for (let j = 1; j <= 3; j++) { setTimeout(() => console.log(j), 1000);
}

```
Question: Explain the output difference between the two loops and why this behavior occurs with var and let.
o/p: 
4
4
4
1
2
3

The difference in output between the two loops is due to the way **`var`** and **`let`** handle variable scope within a loop.
#### Loop with `var`
```javascript
for (var i = 1; i <= 3; i++) { 
    setTimeout(() => console.log(i), 1000);
}
```
- **Scope of `var`**: Variables declared with `var` have **function scope** or **global scope**, not block scope. This means that `i` in the `var` loop is shared across all iterations of the loop.
- **Behavior of `setTimeout`**: Each `setTimeout` callback is scheduled to run after 1 second, but they all reference the same `i` variable. By the time these callbacks execute, the loop has completed, and `i` has already been incremented to `4`.
- **Output**: Since all the callbacks reference the final value of `i` after the loop ends, each `console.log(i)` outputs `4`.

Therefore, the output for this loop is:
4
4
4

#### Loop with `let`

```javascript
for (let j = 1; j <= 3; j++) { 
    setTimeout(() => console.log(j), 1000);
}
```
- **Scope of `let`**: Variables declared with `let` have **block scope**, meaning a new `j` is created for each iteration of the loop.
- **Effect of Block Scope**: Each `setTimeout` callback in this loop references a unique `j` for each iteration. When the callbacks execute, they access the `j` value from the iteration in which they were created.
- **Output**: Each `console.log(j)` outputs the value of `j` as it was during that specific iteration, resulting in `1`, `2`, and `3`.

Therefore, the output for this loop is:
1
2
3
# S0,
The difference in behavior is due to the **scope of `var` (function scope)** versus **`let` (block scope)**. The `var` loop shares a single `i` across all iterations, whereas the `let` loop creates a new `j` for each iteration, allowing the `setTimeout` callbacks to retain the intended value.



4) 
```javascript
let obj1 = { a: 10 };
let obj2 = obj1;
obj2.a = 20;
console.log(obj1.a);

```

Question: What will be the output? Explain how JavaScript treats objects when assigned to another variable.
o/p: 20
1. **Object Assignment by Reference**:
   - In JavaScript, when an object is assigned to another variable, the new variable does not receive a copy of the object’s data. Instead, it holds a **reference** to the same object in memory.
   - Here, `let obj2 = obj1;` creates a new reference, `obj2`, which points to the same object that `obj1` points to.

2. **Effect of Modifying the Object via `obj2`**:
   - When you modify `obj2.a = 20;`, you are actually modifying the property `a` of the object that both `obj1` and `obj2` reference.
   - Since `obj1` and `obj2` both point to the same object, this change is reflected in both variables.

3. **Result**:
   - After updating `obj2.a`, `obj1.a` also shows the value `20`, because they are referencing the same object in memory.

# S0,
JavaScript treats objects as **reference types**, meaning variables hold references (or "pointers") to the same object rather than creating a copy. Therefore, any change made to the object via one reference is visible through any other reference to the same object.

