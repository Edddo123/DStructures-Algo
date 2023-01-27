/*
<p>
  Write a function that takes in a string of lowercase English-alphabet letters
  and returns the index of the string's first non-repeating character.
</p>
<p>
  The first non-repeating character is the first character in a string that
  occurs only once.
</p>
<p>
  If the input string doesn't have any non-repeating characters, your function
  should return <span>-1</span>.
</p>
*/



function firstNonRepeatingCharacter(string) {
    // it will always have 26 characters since we only have lowercase alphabet letters so space complexity will be O(1)
    let letters = {}
    
    for(let index = 0; index < string.length; index++){
      let e = string[index]
     if(letters[e]) {
       let charCount = letters[e].count
       letters[e] = {
         count : charCount + 1,
         index,
         char: e
       }
     }
     else {
      letters[e] = {
        index,
        char: e,
        count: 1
      }
       }
    }  
  
    let smallestIndex = string.length
  
    
    // finding smallest index where count is 1
    for(let key in letters) {
  
      if(!key) {
        smallestIndex = -1;
        break;
      }
      
      if(letters[key].index < smallestIndex && letters[key].count === 1) {
        smallestIndex = letters[key].index
      }
    }
  
  
    // if smallest index did not change, it means we couldnt find match
    return smallestIndex === string.length ? -1 : smallestIndex
    
  }





// O(n) time | O(1) space - where n is the length of the input string
// The constant space is because the input string only has lowercase
// English-alphabet letters; thus, our hash table will never have more
// than 26 character frequencies.
function firstNonRepeatingCharacter(string) {
    const characterFrequencies = {};
  
    for (const character of string) {
      if (!(character in characterFrequencies)) characterFrequencies[character] = 0;
      characterFrequencies[character]++;
    }
  
    // instead of looping down letters object, here we just go through string and first char that will have count of 1 will be chosen automatically
    for (let idx = 0; idx < string.length; idx++) {
      const character = string[idx];
      if (characterFrequencies[character] === 1) return idx;
    }
  
    return -1;
  }
  
  // Do not edit the line below.
  exports.firstNonRepeatingCharacter = firstNonRepeatingCharacter;
  