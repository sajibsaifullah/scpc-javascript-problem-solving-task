/* 
    Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.
*/

function generatePassword(length) {
  let character =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
  let password = "";
  for (let i = 0; i < length; i++) {
    let generate = Math.floor(Math.random() * character.length);
    password += character[generate];
  }
  return password;
}

let length = 8;
const result = generatePassword(length);
console.log(result)
