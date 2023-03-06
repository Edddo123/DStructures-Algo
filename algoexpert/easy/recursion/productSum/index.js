
// O(n) time | O(d) space - where n is the total number of elements in the array,
// including sub-elements, and d is the greatest depth of "special" arrays in the array
function productSum(array, multiplier = 1) {
    let sum = 0;
    // each loop here will go over elements of the respective depth
    for (const element of array) {
        // if its array, increase my sum by product sum of internal array
      if (Array.isArray(element)) {
        sum += productSum(element, multiplier + 1);
      } else {
        sum += element;
      }
    }
    return sum * multiplier;
  }
  
  