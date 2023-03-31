const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius() additional test", () => {
  it("should encode and decode a new message correctly", () => {
    const message = "Secret Code";
    const encoded = polybius(message);
    const expectedEncoded = "345131245144 31434151";
    const decoded = polybius(encoded, false);
    const expectedDecoded = "secret code";

    expect(encoded).to.equal(expectedEncoded);
    expect(decoded).to.equal(expectedDecoded);
  });
});
