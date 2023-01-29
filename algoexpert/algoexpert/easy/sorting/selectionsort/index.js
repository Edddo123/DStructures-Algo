/* we loop over array, we select smallest item and append to our sorted array, then next iteration we look at other elements, again select the smallest element, mark it and swap them. 
for example, we have array [8, 2, 5, 4]. We loop over array and find smallest element. Then we swap it out with last element of unsorted array and so on.
Worst algorith from simple ones since it has no best case its always O(n^2)
*/


// Best: O(n^2) time | O(1) space
// Average: O(n^2) time | O(1) space
// Worst: O(n^2) time | O(1) space
function selectionSort(array) {
  let startIdx = 0;
  while (startIdx < array.length - 1) {
    let smallestIdx = startIdx;
    for (let i = startIdx + 1; i < array.length; i++) {
      if (array[smallestIdx] > array[i]) smallestIdx = i;
    }
    // after loop we find smallest element index and we swap out with first num from unsorted array, basically appending to sorted part of array
    swap(startIdx, smallestIdx, array);
    startIdx++;
  }
  return array;
}

function swap(i, j, array) {
  const temp = array[j];
  array[j] = array[i];
  array[i] = temp;
}

exports.selectionSort = selectionSort;
