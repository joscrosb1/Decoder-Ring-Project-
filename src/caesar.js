// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  function caesar(input, shift, encode = true) {
    // if the shift is not provided, is 0, or is greater than 25 or less than -25, return false.
    if (!shift || shift === 0 || shift > 25 || shift < -25) {
      return false;
    }
  
    // Create an array of the alphabet.
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  
    // If decode is true, invert the value of shift.
    if (!encode) {
      shift = shift * -1;
    }
  
    // Convert the input to lowercase and split it into an array of characters.
    const inputArray = input.toLowerCase().split("");
  
    // For each character in the input array:
    const result = inputArray.map((char) => {
      // If the character is not in the alphabet, return the character as is.
      if (!alphabet.includes(char)) {
        return char;
      }
  
      // Otherwise, get the index of the character in the alphabet and add the shift value.
      let index = alphabet.indexOf(char) + shift;
  
      // If the index is less than 0 or greater than 25, wrap it around to the other end of the alphabet.
      if (index < 0) {
        index = index + 26;
      } else if (index > 25) {
        index = index - 26;
      }
  
      // Return the character at the shifted index.
      return alphabet[index];
    });
  
    // Join the result array into a string and return it.
    return result.join("");
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
