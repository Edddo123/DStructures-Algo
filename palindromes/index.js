//Solution #1
function palindrome1(str) {
    return str === str.split('').reverse().join('')
}

//Solution #2
function palindrome2(str) {
    str.split('').every((char, i)=> {
        return char === str[str.length-i-1]
    })
}
//every itterates over whole array and checks my condition and returns boolean, even if 1 is false it returns false