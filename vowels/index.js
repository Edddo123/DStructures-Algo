//version 1
function vowels1(str) {
    let count = 0
    let formatted = str.toLowerCase()
    for (char of formatted) {
        switch (char) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                count++
        }
    }
    return count
    
}

// OR
function vowels2(str) {
  let count = 0;
  const checker = ['a', 'e', 'i', 'o', 'u'];

  for (let char of str.toLowerCase()) {
    if (checker.includes(char)) {
      count++;
    }
  }

  return count;
}

//with Regex

function vowels3(str) {
    const matches = str.match(/[aeiou]/gi); //it returns either array of matches or null
    return matches ? matches.length : 0;
  }