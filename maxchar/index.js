//First try
function maxChar(str) {
    let max = 0;
    let maxChar = '';
    let myObj = {}
    for(char of str) { //mapping it in object with frequency
        // myObj[char] = myObj[char] + 1 || 1 - another option instead of if/else
        if(!myObj[char]) {
            myObj[char] = 1
        }
        else {
            myObj[char]++
        }
    }
    for(obj in myObj) {
        if (myObj[obj]> max) {
            max = myObj[obj]
            maxChar = obj
            
        }
    }
    return maxChar
}

console.log(maxChar('hey111eeeee'))