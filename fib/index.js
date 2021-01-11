//solution #1
function fib1(n) {
    let counter
    let fibArray = [0, 1]
    for (let i = 2; i <= n; i++) {
        counter = fibArray[i - 1] + fibArray[i - 2]
        fibArray.push(counter)
    }

    return fibArray[n]
}
//its linear runtime as by increasing input by 1 number to calculate increases by 1 too


//memoization - store the arguments of each function call along with the result and if same function is called again return precomputed result, very good technique to increase perfomance of our algorithm not only in recursive cases
//recursive solution - exponential runtime
let fibArray2 = [0, 1]
function fib2(n) {

    if (n < 2) {
        return fibArray2[n]
    }

    else {
        fib2(n - 1)
        fibArray2.push(fibArray2[n - 1] + fibArray2[n - 2])
    }
    return fibArray2[n]

}

//better recursion

function fib3(n) {
    if (n < 2) {
        return n
    }
    return fib3(n-1) + fib3(n-2) //in this case we call same functions again and again multiple times
}

//this method is actually faster than iterative solution
function memoize(fn) {
    const cache = {};
    return function(...args) {
      if (cache[args]) {
        return cache[args];
      }
  
      const result = fn.apply(this, args);
      cache[args] = result;
  
      return result;
    };
  }
  
  function slowFib(n) {
    if (n < 2) {
      return n;
    }
  
    return fib(n - 1) + fib(n - 2);
  }
  
  const fib4 = memoize(slowFib);



console.log(fib2(15))