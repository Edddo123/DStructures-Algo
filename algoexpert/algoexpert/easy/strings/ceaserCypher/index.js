function caesarCipherEncryptor(string, key) {
  // loops over asci codes and converts asci code into string char
  const letters = new Array(26)
    .fill(1)
    .map((_, i) => String.fromCharCode(97 + i));
  const lettersObj = {};

  // we map each letter to object and get their index
  for (let j = 0; j < letters.length; j++) {
    lettersObj[letters[j]] = {
      index: j,
    };
  }

  let newStringArray = [];

  // here we use idea of circular array where indexes are i % size of array so z index + 1 will be 0
  for (let i = 0; i < string.length; i++) {
    let letterToAdd =
      letters[(lettersObj[string[i]].index + key) % letters.length];
    newStringArray.push(letterToAdd);
  }

  return newStringArray.join("");
}

// same idea but instead of object they use char codes to get string index
// O(n) time | O(n) space
function caesarCipherEncryptor(string, key) {
  const newLetters = [];
  const newKey = key % 26;
  for (const letter of string) {
    newLetters.push(getNewLetter(letter, newKey));
  }
  return newLetters.join("");
}

function getNewLetter(letter, key) {
  const newLetterCode = letter.charCodeAt() + key;
  return newLetterCode <= 122
    ? String.fromCharCode(newLetterCode)
    : String.fromCharCode(96 + (newLetterCode % 122));
}




// O(n^2) time | O(n) space
function caesarCipherEncryptor(string, key) {
    const newLetters = [];
    const newKey = key % 26;
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    for (const letter of string) {
      newLetters.push(getNewLetter(letter, newKey, alphabet));
    }
    return newLetters.join('');
  }
  
  function getNewLetter(letter, key, alphabet) {
    const newLetterCode = alphabet.indexOf(letter) + key;
    return alphabet[newLetterCode % 26];
  }
  
  