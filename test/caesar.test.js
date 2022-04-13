// Write your tests here!
const {caesar} = require("../src/caesar");
const {expect} = require("chai");

describe("error handling", () => {
  it("should return false if the shift amount is 0", () => {
    let input = "hello";
    let shift = 0;
    let actual = caesar(input, shift);

    expect(actual).to.be.false;
  });
  it("should return false if the shift amount is above 25", () => {
    let input = "hello";
    let shift = 30;
    let actual = caesar(input, shift);

    expect(actual).to.be.false;
  });
  it("should return false if the shift amount is less than -25", () => {
    let input = "hello";
    let shift = -30;
    let actual = caesar(input, shift);

    expect(actual).to.be.false;
  });
});

describe("encoding a message", () => {
  it("should encode a message by shifting the letters", () => {
      let input = "hello"
      let shift = 2
      let actual = caesar(input, shift)
      let expected = "jgnnq"

      expect(actual).to.equal(expected)
  });
  it("should leave spaces and other symbols as is", () => {
      let input = "hello There!"
      let shift = 2
      let actual = caesar(input, shift)
      let expected = "jgnnq vjgtg!"

      expect(actual).to.equal(expected)
  });
  it("should ignore capital letters", () => {
      let input = "Hello There"
      let shift = 2
      let actual = caesar(input, shift)
      let expected = "jgnnq vjgtg"

      expect(actual).to.equal(expected)
  });
  it("should appropriately handle letters at the end of the alphabet", () => {
      let input = "Why Not"
      let shift = 5 
      let actual = caesar(input, shift)
      let expected = "bmd sty"

      expect(actual).to.equal(expected)
  });
  it("should allow for a negative shift to the left ", () => {
      let input = "Why Not"
      let shift = -3
      let actual = caesar(input, shift)
      let expected = "tev klq"

      expect(actual).to.equal(expected)
  });
});

describe("decoding a message", () => {
  it("should decode a message by shifting the letters in the opposite direction", () => {
      let input = "jgnnq vjgtg"
      let shift = -2
      let actual = caesar(input, shift)
      let expected = "hello there"

      expect(actual).to.equal(expected)
  });
});
