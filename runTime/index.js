
//runtime complexity is basically how effective our algorithm is or how much power/time it takes to execute it with different input.
//How much more time we will need with double input

function reverseString1(str) {
    let newString = '';
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i]
    }
    return newString
}
//in reverse string example if our string length increased by one we would need to loop through 1 more thing, so its linear complexity. O(n)

function steps1(n) {
    let step = ''
    for(let i=0;i<n;i++) {
        for(let j=0;j<n;j++) {
            if(j<=i) {
                step += '#'
            }
            else {
                step += ' '
            }
        }
        console.log(step)
        step = ''
                     
    }
}
//in steps example with double for loop each additiong to n increases things to do by n*n so its quadratic complexity. O(n^2)

//some different types of runtime

/* 
1-constant - doesnt change with input
log(n) - more than 1 but still less than linear
n- linear
n*log(n) - Quasilinear time - bit more than linear
n^2- quadratic
2^n- exponential- very bad
*/

//space complexity - same as time complexity but for memory consumption

/* 
iterating over single loop - probably O(n)
half collection is still O(n) as o(2n) is same as o(n) and any other constant
if iterating over two different collections with separate for loop o(n+m)
two nested for loop over same collection - O(n^2)
two nested for loops over different collection O(n*m)
sorting O(n*log(n))
searching through sorted array O(log(n))
*/