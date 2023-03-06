/*

  Given an array of positive integers representing the values of coins in your
  possession, write a function that returns the minimum amount of change (the
  minimum sum of money) that you cannot  create. The given coins can have
  any positive integer value and aren't necessarily unique (i.e., you can have
  multiple coins of the same value).
  For example, if you're given coins = [1, 2, 5], the minimum
  amount of change that you can't create is 4. If you're given no
  coins, the minimum amount of change that you can't create is 1.
*/


/*
So basic idea is once array is sorted, we just go over array and check if next element is greater than max change I can make(sum of elements on each step) + 1. Because lets say sum in 19 and next element is 21. If with all elements sum is 19, how am I gonna make 20 since we only got 21 left.
*/

// O(NlogN) and space complexity O(1) since we just sort in place
function nonConstructibleChange(sortedCoins) {

    if(!sortedCoins.length) return 1;
      
    // this sorts in place
    sortedCoins.sort((a, b) => a-b)
    let change = 0;
    
    for(let i = 0; i < sortedCoins.length; i++) {
      if(sortedCoins[i] > change + 1) return change + 1;
      else change += sortedCoins[i];
    }
    
    
      
    return change + 1;
      
    }
      
    