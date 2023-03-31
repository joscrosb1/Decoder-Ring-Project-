const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar() additional tests", () => {
  describe("encoding and decoding with special characters", () => {
    it("should correctly encode and decode a message with special characters", () => {
      const message = "Zebra$123 Magazine!";
      const shift = 5;
      const encoded = caesar(message, shift);
      const expectedEncoded = "ejgwf$123 rflfensj!";
      const decoded = caesar(encoded, shift, false);

      expect(encoded).to.equal(expectedEncoded);
      expect(decoded).to.equal(message.toLowerCase());
    });
  });

  
});

