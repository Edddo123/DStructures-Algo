//Solution #1
function reverseString1(str) {
    let newString = '';
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i]
    }
    return newString
}
//Solution #2

function reverseString2(str) {
    return str.split('').reverse().join('') //string gets converted into array and back to string
}
//Solution #3(cleaner version of loop)

function reverseString3(str) {
    let newString = '';
    for (character of str) {
        newString = character + newString
    }
    return newString
}

function reverseString4(str) {
   return str.split('').reduce((reversed, character)=>
   character + reversed
   , '') 
}
//this takes array and reduces it to single value, reversed is the value it starts with after each iteration on array member, its empty at start as I set it
console.log(reverseString4('hey'))

