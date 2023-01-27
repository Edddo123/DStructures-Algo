/*

  You're given a string of available characters and a string representing a
  document that you need to generate. Write a function that determines if you
  can generate the document using the available characters. If you can generate
  the document, your function should return true ; otherwise, it
  should return false.
  <p>
  You're only able to generate the document if the frequency of unique
  characters in the characters string is greater than or equal to the frequency
  of unique characters in the document string. For example, if you're given
  <span>characters = "abcabc"</span> and <span>document = "aabbccc"</span> you
  <b>cannot</b> generate the document because you're missing one <span>c</span>.
</p>
<p>
  The document that you need to create may contain any characters, including
  special characters, capital letters, numbers, and spaces.
</p>
<p>Note: you can always generate the empty string (<span>""</span>).</p>
*/


function generateDocument(characters, document) {
    // We will map characters and their counts
    let charMap = mostCommonChar(characters);
    let documentMap = mostCommonChar(document);
  
  
  
    for(let key in documentMap) {
      if(!(`${key}` in charMap) || documentMap[key] > charMap[key]) {
        return false;
      } 
    }
    
    return true;
  }
  
  function mostCommonChar(str) {
    let charMap = {}
    for (let char of str) {
      charMap[char] = charMap[char] + 1 || 1
    }
  
    return charMap;
  }

  



// O(n + m) time | O(c) space - where n is the number of characters, m is
// the length of the document, and c is the number of unique characters in the characters string
function generateDocument(characters, document) {
    const characterCounts = {};
  
    for (const character of characters) {
      if (!(character in characterCounts)) characterCounts[character] = 0;
  
      characterCounts[character]++;
    }
  // similar idea, we just decrement if char available to count
    for (const character of document) {
      if (!(character in characterCounts) || characterCounts[character] === 0) return false;
  
      characterCounts[character]--;
    }
  
    return true;
  }
  
  // Do not edit the line below.
  exports.generateDocument = generateDocument;
  