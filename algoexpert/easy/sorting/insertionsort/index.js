/*
So with insertion sort, we take element and put it in sorted box. so if we have [8, 5, 2, 4] first we take 8 and put it in our sorted place since its firt element. Then we compare 5 to our sorted array which is 8 rn. 5 is less than 8 so we move it down. then we have 2. We compare to first to 8, then 5 and it goes to last place. Then we go to 4, compare it to 8, then 5, then 2 and its greater than 2 so we put after it.
Usually its n^2 but if array is sorted and we are inserting new items one by one its O(n). It can be good for live logging where you add new log to existing ones if you need sorting somewhere
*/



// Best: O(n) time | O(1) space
// Average: O(n^2) time | O(1) space
// Worst: O(n^2) time | O(1) space
function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let j = i;
    while (j > 0 && array[j] < array[j - 1]) {
      swap(j, j - 1, array);
      j -= 1;
    }
  }
  return array;
}

function swap(i, j, array) {
  const temp = array[j];
  array[j] = array[i];
  array[i] = temp;
}

