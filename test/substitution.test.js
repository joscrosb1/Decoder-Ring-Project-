const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution() additional test", () => {
  describe("handling special characters", () => {
    it("should correctly encode and decode messages with special characters in the alphabet", () => {
      const message = "helloworld";
      const alphabet = "!@#$%^&*()-_=+qwertyuioplk";
      const encodedMessage = substitution(message, alphabet);
      const decodedMessage = substitution(encodedMessage, alphabet, false);
      
      expect(decodedMessage).to.equal(message);
    });
  });
});

