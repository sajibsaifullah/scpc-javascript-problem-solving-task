/* 
    Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.
*/

function secondSmallest(numbers) {
  let smallest = Infinity;
  let secondSmallest;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < smallest) {
      secondSmallest = smallest;
      smallest = numbers[i];
    } else if (numbers[i] < secondSmallest && numbers[i] !== smallest) {
      secondSmallest = numbers[i];
    }
  }
  return secondSmallest;
}

let numbers = [10, 15, 20, 25, 30];
console.log(secondSmallest(numbers));
