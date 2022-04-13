// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  //const square = new Map([[1, 'a'], [2, 'b'], [3, 'c'], [4, 'd'], [5, 'e']]);
  //console.log(square)

  const square = {
    1: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e" },
    2: { 1: "f", 2: "g", 3: "h", 4: "(i/j)", 5: "k" },
    3: { 1: "l", 2: "m", 3: "n", 4: "o", 5: "p" },
    4: { 1: "q", 2: "r", 3: "s", 4: "t", 5: "u" },
    5: { 1: "v", 2: "w", 3: "x", 4: "y", 5: "z" },
  };

 
  function polybius(input, encode = true) {
    // your solution code here
    if (encode === false && input.split(' ').join('').length %2 > 0){
      return false
    }
    let output = []
    let string = input.toLowerCase().split("");

    
    if (encode === false){
      for (let i = 0; i < string.length; i++){
      if(string[i] === " ") {output.push(string[i])}
      else{
        output.push(decode([string[i+1],string[i]]))
        i++
      }
    }}
    if (encode === true){
      for(let x = 0; x<string.length; x++){
        if(string[x] === " "){ output.push(string[x])}
        if(string[x] === "i"||string[x] === "j"){output.push("42")}
        for(let i = 1; i<= 5; i++){
          for(let j = 1; j <=5; j++){
            if (square[i][j] === string[x]){
              output.push(`${j}${i}`)
            }
          }
        }
      }
    }
    
    
    return output.join('')
    
    
  }

  function decode(x){
    return square[x[0]][x[1]]
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
