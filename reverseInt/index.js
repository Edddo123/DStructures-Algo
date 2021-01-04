//first try not ideal to say the least lol
function reverseInt(n) {
    if (n >= 0) {
        let reverse = n.toString()
        let arr = reverse.split('')
        if (arr.length == 1) {
            let output = arr[0]
            return parseInt(output)
        }
        else {
            let output = ''
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] == 0) { //I dont need this anymore as parseInt already removes zeros in front
                    arr[i] = ''
                }
                output = arr[i] + output
            }
            return parseInt(output)
        }
    }
    else {
        let reverse = n.toString()
        let arr = reverse.split('')
        let output = ''
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == 0) {
                arr[i] = ''
            }
            output = arr[i] + output
        }
        let newArr = output.split('')
        newArr.pop()
        newArr.unshift('-')
        let final = newArr.join('')
        return parseInt(final)
    }

}


//2nd try
function reverseInt2(n) {
    const reverse = n.split('').reverse().join('')
    return parseInt(reverse) * Math.sign(n) //if n>=0 it returns 1 otherwise -1
}
