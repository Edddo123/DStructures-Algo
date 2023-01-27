
// time complexity O(n) and space complexity O(1)
function findThreeLargestNumbers(array) {
  
    // its always 3 elements so constant space
    let maxNums = [null, null, null];
  
    // outer loop will always just do 3 iterations no matter what array size n is, and O(3n) is considered O(n)
    for(let i = 2; i >= 0; i--) {
      for(let j = 0; j<array.length;j++) {
        if(!maxNums[i]) {
          maxNums[i] = array[j];
        }
        else if (array[j] > maxNums[i]) {
          maxNums[i] = array[j];
        }
      }
      removeItemOnce(array, maxNums[i])
    }
  
    return maxNums
    
  }
  function removeItemOnce(arr, value) {
    let index = arr.indexOf(value);
    // splice mutates array
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  }





// O(n) time | O(1) space
function findThreeLargestNumbers(array) {
    const threeLargest = [null, null, null];
    for (const num of array) {
      updateLargest(threeLargest, num);
    }
    return threeLargest;
  }
  
  // so here we compare every new array number to our large 3, first we compare to highest then 2nd and then 3rd.
  function updateLargest(threeLargest, num) {
    if (threeLargest[2] === null || num > threeLargest[2]) {
      shiftAndUpdate(threeLargest, num, 2);
    } else if (threeLargest[1] === null || num > threeLargest[1]) {
      shiftAndUpdate(threeLargest, num, 1);
    } else if (threeLargest[0] === null || num > threeLargest[0]) {
      shiftAndUpdate(threeLargest, num, 0);
    }
  }
  
  // here we shift top 3 array to include our new number. So if we have [0, 5, 103] and new num is 104, array[0] becomes array[1], array[1] becomes array[2] and array[2] becomes 104, so new array would be [5, 103, 104]
  function shiftAndUpdate(array, num, idx) {
    for (let i = 0; i <= idx; i++) {
      if (i === idx) {
        array[i] = num;
      } else {
        array[i] = array[i + 1];
      }
    }
  }
  
  exports.findThreeLargestNumbers = findThreeLargestNumbers;
  
  