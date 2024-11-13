// Code to print numbers from 1 to 10 in 1-second intervals.

// Write code that prints numbers from 1 to 10, each number after a 1-second delay.
// Use a for loop combined with setTimeout to create delay,
// let keyword can help ensure that each timer has access to the correct number.

for (let i = 1; i <= 10; i++) {
    setTimeout(() => 
    console.log(i),
     i * 1000);
  }

//   o/p: 
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
  