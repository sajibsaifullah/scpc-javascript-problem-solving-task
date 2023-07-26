/* 
    Task 3: Write a JavaScript program to find the most frequent element in an array and return it. 

    Example Input: [3, 5, 2, 5, 3, 3, 1, 4, 5] Example Output: 3
*/

const mostFrequentElement = (array) => {
  let count = {};
  let maxCount = 0;
  let mostFrequent = null;

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (count[element] === undefined) {
      count[element] = 1;
    } else {
      count[element]++;
    }

    if (count[element] > maxCount) {
      maxCount = count[element];
      mostFrequent = element;
    }
  }
  return mostFrequent;
};

const inputArray = [3, 5, 2, 5, 3, 3, 1, 4, 5];
const result = mostFrequentElement(inputArray);
console.log(result);
