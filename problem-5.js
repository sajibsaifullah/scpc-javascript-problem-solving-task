/* 
    Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.
*/

function calculator(num1, num2, operator) {
  let output;
  switch (operator) {
    case "+":
      output = num1 + num2;
      break;
    case "-":
      output = num1 - num2;
      break;
    case "*":
      output = num1 * num2;
      break;
    case "/":
      if (num2 === 0) {
        output = "Cannot divide by zero";
      } else {
        output = parseFloat((num1 / num2).toFixed(2));
      }
      break;

    default:
        output = "Invalid operator";
        break;
  }
  return output;
}

const num1 = 5;
const num2 = 3;
const operator = "/";
const result = calculator(num1, num2, operator);
console.log(result);
