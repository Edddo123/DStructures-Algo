//first attempt
function chunk1(array, size) {
    let final = []
    let newArray = []

    for (let i = 0; i < array.length; i += size) {
        let rotation = size + i
        if (array.length % size != 0 && i == array.length - array.length % size) {
            rotation = array.length % size + i
        }
        for (let j = i; j < rotation; j++) {
            newArray.push(array[j])
        }
        final.push(newArray)
        newArray = []
    }
    return final
}

//solution 2

function chunk2(array, size) {
    const chunked = []
    for(let element of array) {
        const last = chunked[chunked.length - 1]

        if(!last || last.length === size) {
            chunked.push([element])  
        }

        else last.push(element)
    }

    return chunked
}

//solution 3
//array.slice(start, end) it copies array from start index until(not including) end index

function chunk3(array, size) {
    const chunked = [];
    let index = 0;
  
    while (index < array.length) {
      chunked.push(array.slice(index, index + size));
      index += size;
    }
  
    return chunked;
  }

let myArr = [1, 2, 3, 4, 5]

console.log(chunk3(myArr, 2))