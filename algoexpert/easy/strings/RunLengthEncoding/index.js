/*
<p>
  Write a function that takes in a non-empty string and returns its run-length
  encoding.
</p>
<p>
  From Wikipedia, "run-length encoding is a form of lossless data compression in
  which runs of data are stored as a single data value and count, rather than as
  the original run." For this problem, a run of data is any sequence of
  consecutive, identical characters. So the run <span>"AAA"</span> would be
  run-length-encoded as <span>"3A"</span>.
</p>
<p>
  To make things more complicated, however, the input string can contain all
  sorts of special characters, including numbers. And since encoded data must be
  decodable, this means that we can't naively run-length-encode long runs. For
  example, the run <span>"AAAAAAAAAAAA"</span> (12 <span>A</span>s), can't
  naively be encoded as <span>"12A"</span>, since this string can be decoded as
  either <span>"AAAAAAAAAAAA"</span> or <span>"1AA"</span>. Thus, long runs (runs
  of 10 or more characters) should be encoded in a split fashion; the
  aforementioned run should be encoded as <span>"9A3A"</span>.
</p>
*/



// O(n) time | O(n) space - where n is the length of the input string
function runLengthEncoding(string) {
  // The input string is guaranteed to be non-empty,
  // so our first run will be of at least length 1.
  const encodedStringCharacters = [];
  let currentRunLength = 1;

  for (let i = 1; i < string.length; i++) {
    const currentCharacter = string[i];
    const previousCharacter = string[i - 1];

    // if last element is not same as new element, or length is 9, we append to list
    if (currentCharacter !== previousCharacter || currentRunLength === 9) {
      encodedStringCharacters.push(currentRunLength.toString());
      encodedStringCharacters.push(previousCharacter);
      currentRunLength = 0;
    }

    currentRunLength++;
  }

  // Handle the last run. also handles case where we only have 1 character
  encodedStringCharacters.push(currentRunLength.toString());
  encodedStringCharacters.push(string[string.length - 1]);

  return encodedStringCharacters.join('');
}

