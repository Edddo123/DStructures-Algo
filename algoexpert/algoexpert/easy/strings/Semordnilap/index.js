/*
<p>
  Write a function that takes in a list of unique strings and returns a list of
  semordnilap pairs.
</p>
<p>
  A semordnilap pair is defined as a set of different strings where the reverse
  of one word is the same as the forward version of the other. For example the
  words "diaper" and "repaid" are a semordnilap pair, as are the words
  "palindromes" and "semordnilap".
</p>
<p>
  The order of the returned pairs and the order of the strings within each pair
  does not matter.
</p>
*/

/* <p>
  The order of the returned pairs and the order of the strings within each pair
  does not matter.
</p> */
function semordnilap(words) {
    const wordset = new Set(words)
    let result = [];
    
    for(let word of words) {
      const reversedWord = reverse(word)
      // set lookup is O(1)
      if(wordset.has(reversedWord) && word !== reversedWord) {
        result.push([word, reversedWord])
        wordset.delete(word)
        wordset.delete(reversedWord)
      }
    }
  
    return result
  }
  
  
  // gives me reversed version of string
  function reverse(string) {
    let newStringArray = [];
    for(let i = string.length - 1; i >= 0; i--) {
      newStringArray.push(string[i]);
    }
  
    return newStringArray.join('')
  }