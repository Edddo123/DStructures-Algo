
// O(logN) and space O(1)
function binarySearch(array, target) {
    let left = 0;
    let right = array.length - 1;
    
    // we need equality check in case we find item at max search, when left and right are same
    while(left <= right) {
        let middle = Math.floor((left + right) / 2)
        if(target === array[middle]) return middle;
        else if (target > array[middle]) {
          left = middle + 1;
        }
      else if (target < array[middle]) {
          right = middle - 1;
        }
    }
  
    return -1;
  }



// O(log(n)) time | O(log(n)) space
function binarySearch(array, target) {
    // we write it separately since arguments array target of binary search helper will coincide with binary Search fn here
    return binarySearchHelper(array, target, 0, array.length - 1);
  }
  
  function binarySearchHelper(array, target, left, right) {
    // if we searched through everything
    if (left > right) return -1;
    const middle = Math.floor((left + right) / 2);
    const potentialMatch = array[middle];
    if (target === potentialMatch) {
      return middle;
    } else if (target < potentialMatch) {
      return binarySearchHelper(array, target, left, middle - 1);
    } else {
      return binarySearchHelper(array, target, middle + 1, right);
    }
  }
  
  