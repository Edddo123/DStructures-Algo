// we receive sorted array and we must return also sorted array but with squared values. Catch here is negative numbers here when squared would be bigger than some positive numbers


// O(nlogn) solution I came up with
function sortedSquaredArray(array) {
    // Write your code here.
    let target = []
    for(let i = 0; i < array.length; i++) {
        target[i] = array[i] * array[i]
    }
  
    // time complexity O(nLogn)
    target.sort((a, b) => {
      return a - b;
    })
    
    return target;
  }
  




// O(n) time | O(n) space - where n is the length of the input array
function sortedSquaredArray(array) {
    // create new array of fixed length and fill it with 0s
    const sortedSquares = new Array(array.length).fill(0);
    let smallerValueIdx = 0;
    let largerValueIdx = array.length - 1;
  
    // starts from the end since array is sorted by default
    for (let idx = array.length - 1; idx >= 0; idx--) {
    // start of the array
      const smallerValue = array[smallerValueIdx];

      // end of array
      const largerValue = array[largerValueIdx];
  
      // if absolute value of smaller item is bigger, it means its negative number and abs is bigger. So we put This element in last place since we keep ascending order.
      if (Math.abs(smallerValue) > Math.abs(largerValue)) {
        // we add the element and go to compare next one
        sortedSquares[idx] = smallerValue * smallerValue;
        smallerValueIdx++;
      } else {
        // if not last array element would be larger and will be filled in
        sortedSquares[idx] = largerValue * largerValue;
        largerValueIdx--;
      }
    }
  
    return sortedSquares;
  }