/*
Given two non-empty arrays of integers, write a function that determines
  whether the second array is a subsequence of the first one.


  A subsequence of an array is a set of numbers that aren't necessarily adjacent
  in the array but that are in the same order as they appear in the array. For
  instance, the numbers [1, 3, 4] form the subsequence of the array [1, 2, 3, 4] and so do [2, 4]. single number array and array itself are valid subequences
*/

// Initial Solution - O(n^2)
function isValidSubsequence(array, sequence) {
  // saving when last sequence match occured, since we need to make sure every element of subsequence come in same order in search array
  let lastIndex = -1;
  // counter of sequence matches
  let counter = 0;

  for (let i = 0; i < sequence.length; i++) {
    for (let j = 0; j < array.length; j++) {
      // if sequence element matches target array element and last found index is smaller(meaning next sequence occurence happens after first one) we got valid element of subsequence
      if (sequence[i] === array[j] && j > lastIndex) {
        lastIndex = j;
        counter++;
        break;
      }
    }
  }

  // we have to make sure all elements are valid subsequence
  return counter === sequence.length;
}

// solved with hints - O(n), Space time O(1)
function isValidSubsequence(array, sequence) {
  let counter = 0;

  for (let i = 0; i < array.length; i++) {
    // if we match with 1 subsequent element, then we increase and search for 2nd subsequent element
    if (array[i] === sequence[counter]) {
      counter++;
    }
  }

  return counter === sequence.length;
}

// same logic solution
function isValidSubsequence(array, sequence) {
  let arrIdx = 0;
  let seqIdx = 0;
  while (arrIdx < array.length && seqIdx < sequence.length) {
    if (array[arrIdx] === sequence[seqIdx]) seqIdx++;
    arrIdx++;
  }
  return seqIdx === sequence.length;
}
