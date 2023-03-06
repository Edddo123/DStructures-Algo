/*

  Write a function that takes in a non-empty string and that returns a boolean
  representing whether the string is a palindrome.
  
  A palindrome is defined as a string that's written the same forward and
  backward. Note that single-character strings are palindromes.
*/


// O(n) and space O(n)
function isPalindrome(string) {
    let reversed = [];
    j = 0;
  
    for(let i = string.length - 1;i>=0;i--, j++) {
      reversed[j] = string[i];
      
    }
  
      return reversed.join('') === string;
  }
  


// two pointer solution
// O(n) time | O(1) space
function isPalindrome(string) {
    let leftIdx = 0;
    let rightIdx = string.length - 1;
    while (leftIdx < rightIdx) {
      if (string[leftIdx] !== string[rightIdx]) return false;
      leftIdx++;
      rightIdx--;
    }
    return true;
  }
  
  exports.isPalindrome = isPalindrome;
  