// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
 
  // console.log(caesar("zebra", 3));
  function caesar(input, shift, encode = true) {
    // your solution code here
    if (!input || !shift || shift === 0 || shift < -25 || shift > 25) {
      return false;
    }
    if (encode === false) shift = 0 - shift;

    let inputArray = input.toLowerCase().split("");
    let output = [];
    let moveValue = shift;
    let letter = null;

    for (let i of inputArray) {
      letter = i.charCodeAt();
     
      if (letter < 96) letter = letter;    
      else if (moveValue + letter < 97) letter += moveValue + 26;
      else if (moveValue + letter > 122) letter = letter + moveValue - 26;
      else letter = letter + moveValue;
      output.push(String.fromCharCode(letter));
      
    }

    //console.log(output.join(""));
    return output.join("");
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
