// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
   // helpers function to indicate the alphabet characters is valid, with only 26 characters.
  function isValidAlphabet(alphabet) {
    if (!alphabet || alphabet.length !== 26) return false;
    const uniqueChars = new Set(alphabet.split(''));
    return uniqueChars.size === 26;
  }

  function substitution(input, alphabet, encode = true) {
    // Check if the provided alphabet is valid, return false otherwise
    if (!isValidAlphabet(alphabet)) return false;

    // Define the standard alphabet for comparison
    const standardAlphabet = "abcdefghijklmnopqrstuvwxyz";
    // Convert input to lowercase to ignore capital letters
    const inputLowerCase = input.toLowerCase();
    // Initialize an empty string to store the result
    let result = '';

    // Iterate through each character in the input string
    for (let char of inputLowerCase) {
      // If the character is a space, add it to the result and move on to the next character
      if (char === ' ') {
        result += ' ';
        continue;
      }

      // Find the index of the character in the standard or substitution alphabet based on the encode 
      const index = encode ? standardAlphabet.indexOf(char) : alphabet.indexOf(char);
      // Find the corresponding transposed character from the substitution or standard alphabet based on the encode 
      const transposedChar = encode ? alphabet[index] : standardAlphabet[index];
      // Add the transposed character to the result string
      result += transposedChar;
    }

    // Return the final result after processing all characters in the input string
    return result;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
