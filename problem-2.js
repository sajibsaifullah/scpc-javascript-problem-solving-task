/* 
    Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 

    Example Input: [2, -5, 10, -3, 7] Example Output: 19
*/

function sumOfAllPositiveNumbers(array) {
  let sum = 0;
  for (let i = 0; i <= array.length; i++) {
    // console.log(array[i], i)
    if (array[i] >= 0) {
      sum += array[i];
    }
  }
  return sum;
}

const numbers = [2, -5, 10, -3, 7];
const result = sumOfAllPositiveNumbers(numbers);
console.log(result);
