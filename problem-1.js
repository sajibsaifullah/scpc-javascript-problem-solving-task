/* 
    Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 

    Example Input: "hello world" Example Output: "dlrow olleh"
*/

function reverseString(string) {
  let newString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    // console.log(string[i], i)
    newString = newString + string[i];
  }
  //   console.log(newString);
  return newString;
}

const inputString = "hello world";
const result = reverseString(inputString);
console.log(result);
