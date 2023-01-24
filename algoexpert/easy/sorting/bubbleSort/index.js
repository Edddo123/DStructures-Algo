/*
So in bubble sort, we loop through array and on each iteration, we compare current element and current +1 element. If its bigger we swap. Then we go compare next and like that. Result of each iteration if we sort array in ascending order would be that, 1 number will be moved to top. Thats why if array is not sorted, avergae/worst case would be O(n^2). If array is sorted, it means no swap will occur and we will stop loop with O(n) in 1 iteration. So if array is nearly sorted, its best case since we will do minimal swaps and loops to sort it and it can be O(n)
*/


// Best: O(n) time | O(1) space
// Average: O(n^2) time | O(1) space
// Worst: O(n^2) time | O(1) space
function bubbleSort(array) {
    // buuble sort optimization, if during loop we didnt do any swaps, it means array is already sorted
    let isSorted = false;
    let counter = 0;
    while (!isSorted) {
      isSorted = true;
      // another optimization, every time we check 1 less element because it has already been bubbled up and sorted. Also we compare current element to next one, so loop has to go length - 1 since on before last element, last element gets compared
      for (let i = 0; i < array.length - 1 - counter; i++) {
        if (array[i] > array[i + 1]) {
          swap(i, i + 1, array);
          isSorted = false;
        }
      }
      counter++;
    }
    return array;
  }
  
  function swap(i, j, array) {
    const temp = array[j];
    array[j] = array[i];
    array[i] = temp;
  }
  
  


bubbleSort([8, 5, 2, 9, 5, 6, 3])