//attempt #1
function capitalize1(str) {
    let strArray = str.split(' ')
    let newArray = []
    for(let i=0; i<strArray.length;i++) {
     newArray.push(strArray[i][0].toUpperCase() + strArray[i].slice(1))
    }
    return newArray.join(' ')
}
//brute force approach
function capitalize2(str) {
    let result = str[0].toUpperCase();
  
    for (let i = 1; i < str.length; i++) {
      if (str[i - 1] === ' ') {
        result += str[i].toUpperCase();
      } else {
        result += str[i];
      }
    }
  
    return result;
  }

const str = 'hello world'

// console.log(capitalize(str))
console.log(capitalize1(str))