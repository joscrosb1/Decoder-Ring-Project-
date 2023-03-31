// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  function polybius(input, encode = true) {
    // Return false if the input is invalid or if the length of characters is odd when decoding
    if (!input || (input.replace(/ /g, "").length % 2 !== 0 && !encode)) {
      return false;
    }

    // Create the Polybius square
    const square = [
      ["A", "B", "C", "D", "E"],
      ["F", "G", "H", "I/J", "K"],
      ["L", "M", "N", "O", "P"],
      ["Q", "R", "S", "T", "U"],
      ["V", "W", "X", "Y", "Z"],
    ];
    const normalizedInput = input.toUpperCase();
    let result = "";

    if (encode) {
      // Encoding
      for (const char of normalizedInput) {
        // Keep spaces as is
        if (char === " ") {
          result += " ";
          continue;
        }
        // Loop through the square to find the corresponding coordinates for each character
        for (let row = 0; row < 5; row++) {
          for (let col = 0; col < 5; col++) {
            if (square[row][col].includes(char)) {
              result += `${col + 1}${row + 1}`;
      }
      }
      }
      }
    } else {
      // Decoding
      // Split the input into chunks by spaces
      const inputArr = input.split(" ");
      for (const chunk of inputArr) {
        // Process each pair of numbers as coordinates
        for (let i = 0; i < chunk.length; i += 2) {
          const col = parseInt(chunk[i]) - 1;
          const row = parseInt(chunk[i + 1]) - 1;
          result += square[row][col];
        }
        // Add spaces back after processing each chunk
        result += " ";
  }
      // Convert the decoded result to lowercase and replace "i/j" with "(i/j)"
      result = result.trim().toLowerCase().replace("i/j", "(i/j)");
  }
    return result;
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
