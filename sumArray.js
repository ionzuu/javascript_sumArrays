// Task 5: Sum of Array Elements
// Write a function that takes an array of numbers and returns the sum of all elements.

function sumArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
    // reduce((accumulator, currentValue) => accumulator + currentValue, initialValue,);
  }
  console.log('arr: 1, 2, 3, 4, 5 : Total:', sumArray([1, 2, 3, 4, 5]));
  