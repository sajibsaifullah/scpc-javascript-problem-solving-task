/* 
    Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

    Example Input: ([1, 3, 6, 9, 11, 15], 9) Example Output: [1, 2] (numbers at indices 1 and 2: 3 + 6 = 9)
*/

const findNumbersArr = (storedArray, targetValue) => {
  // using two pointer method
  let leftPointer = 0;
  let rightPointer = storedArray.length - 1;
  while (leftPointer < rightPointer) {
    const sum = storedArray[leftPointer] + storedArray[rightPointer];
    // console.log(storedArray[leftPointer], storedArray[rightPointer], sum);
    if (sum === targetValue) {
      return [leftPointer, rightPointer];
    } else if (sum < targetValue) {
      leftPointer++;
    } else {
      rightPointer--;
    }
  }
};

const inputArray = [1, 3, 6, 9, 11, 15];
const inputTarget = 9;
const result = findNumbersArr(inputArray, inputTarget);
console.log(result)
