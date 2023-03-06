/*
<p>
  The Fibonacci sequence is defined as follows: the first number of the sequence
  is <span>0</span>, the second number is <span>1</span>, and the nth number is the sum of the (n - 1)th
  and (n - 2)th numbers. Write a function that takes in an integer
  <span>n</span> and returns the nth Fibonacci number.
</p>
<p>
  Important note: the Fibonacci sequence is often defined with its first two
  numbers as <span>F0 = 0</span> and <span>F1 = 1</span>. For the purpose of
  this question, the first Fibonacci number is <span>F0</span>; therefore,
  <span>getNthFib(1)</span> is equal to <span>F0</span>, <span>getNthFib(2)</span>
  is equal to <span>F1</span>, etc..
</p>
*/

// time complexity O(N) and space complexity O(N)
function getNthFib(n) {

    let fib = [0, 1]
    let i = 2;
    
    while(1) {
        if(n <= i) return fib[n-1];
        let firstNum = fib[i-1];
        let secondNum = fib[i-2];
        let newNum = firstNum + secondNum;
        fib.push(newNum);
        i++;
      
    }
    
  }



// O(n) time | O(n) space
// memoization is basically caching previous solution so functions do not have to recalculate
function getNthFib(n, memoize = {1: 0, 2: 1}) {
    if (n in memoize) {
      return memoize[n];
    } else {
      memoize[n] = getNthFib(n - 1, memoize) + getNthFib(n - 2, memoize);
      return memoize[n];
    }
  }
  

// O(n) time | O(1) space
function getNthFib(n) {
    const lastTwo = [0, 1];
    let counter = 3;
    while (counter <= n) {
      const nextFib = lastTwo[0] + lastTwo[1];
      lastTwo[0] = lastTwo[1];
      lastTwo[1] = nextFib;
      counter++;
    }
    return n > 1 ? lastTwo[1] : lastTwo[0];
}
  
  
  