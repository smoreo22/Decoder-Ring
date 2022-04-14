// Write your tests here!
const { substitution } = require("../src/substitution");
const { expect } = require("chai");

describe("error handeling", () => {
  it("should return false if the substitution alphabet is missing", () => {
    let actual = substitution("hello");

    expect(actual).to.be.false;
  });
  it("should return false if the substitution alphabet is not exactly 26 characters", () => {
    let alphabet = "abcde";
    let actual = substitution("hello", alphabet);

    expect(actual).to.be.false;
  });
  it(" should return false if the substitution alphabet does not contain unique characters", () => {
    let alphabet = "abcdefabfioefajdsdfosdfasf";
    let actual = substitution("hello", alphabet);

    expect(actual).to.be.false;
  });
});

describe("encoding a message", () => {
  it(" should encode a message by using the given substitution alphabet", () => {
    let message = "hello";
    let alphabet = "qazxswedcvfrtgbnhyujmkiolp";
    let actual = substitution(message, alphabet);
    let expected = "dsrrb";

    expect(actual).to.equal(expected);
  });
  it("should work with any kind of key with unique characters", () => {
    let message = "hello";
    let alphabet = "qazxswedcvf&tgbnhyujmkiolp";
    let actual = substitution(message, alphabet);
    let expected = "ds&&b";

    expect(actual).to.equal(expected);
  });
  it("should preserve spaces", () => {
    let message = "hello there";
    let alphabet = "qazxswedcvfrtgbnhyujmkiolp";
    let actual = substitution(message, alphabet);
    let expected = "dsrrb jdsys";

    expect(actual).to.equal(expected);
  });
});

describe("decoding a message", () => {
  it("should decode a message by using the given substitution alphabet", () => {
    let message = "dsrrb";
    let alphabet = "qazxswedcvfrtgbnhyujmkiolp";
    let actual = substitution(message, alphabet, false);
    let expected = "hello";

    expect(actual).to.equal(expected);
  });
  it("should work with any kind of key with unique characters", () => {
    let message = "dsrr%";
    let alphabet = "qazxswedcvfrtg%nhyujmkiolp";
    let actual = substitution(message, alphabet, false);
    let expected = "hello";

    expect(actual).to.equal(expected);
  });
  it("should preserve spaces", () => {
    let message = "dsrrb jdsys";
    let alphabet = "qazxswedcvfrtgbnhyujmkiolp";
    let actual = substitution(message, alphabet, false);
    let expected = "hello there";

    expect(actual).to.equal(expected);
  });
});
