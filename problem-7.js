/* 
    Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.
*/

function romanToInteger(romanNumber) {
  const romanVsInt = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  for (let i = 0; i < romanNumber.length; i++) {
    const currentInt = romanVsInt[romanNumber[i]];
    const nextInt = romanVsInt[romanNumber[i + 1]];
    // console.log(currentInt, nextInt)
    if (nextInt && currentInt < nextInt) {
      result += nextInt - currentInt;
      i++;
    } else {
      result += currentInt;
    }
  }
  return result;
}

let romanNumber1 = "IX";
let romanNumber2 = "XXI";
const output1 = romanToInteger(romanNumber1);
const output2= romanToInteger(romanNumber2);
console.log(output1);
console.log(output2);
