// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  const letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  function substitution(input, alphabet, encode = true) {
    // your solution code here

    if (alphabet === undefined || alphabet.length !== 26) {
      return false;
    }

    let output = [];
    let message = input.toLowerCase().split("");
    let code = alphabet.split("");

   
    for (let i = 0; i < code.length; i++) {
      let check = [];
      for (let j = 0; j < code.length; j++) {
        if (code[i] === code[j]) {
          check.push(code[j]);
          if (check.length > 1) {
            return false;
          }
        }
      }
    }

    if (encode === true) {
      for (let i = 0; i < message.length; i++) {
        if (message[i] === " ") {
          output.push(" ");
        }
        for (let j = 0; j < letters.length; j++) {
          if (message[i] === letters[j]) {
            output.push(code[j]);
          }
        }
      }
    }
    if (encode === false) {
      for (let i = 0; i < message.length; i++) {
        if (message[i] === " ") {
          output.push(" ");
        }
        for (let j = 0; j < code.length; j++) {
          if (message[i] === code[j]) {
            output.push(letters[j]);
          }
        }
      }
    }

    return output.join("");
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
