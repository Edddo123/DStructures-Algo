// Find in array of integers numbers that add up to targetsum, assume there is only one pair

// my origina solution - O(n^2)
function twoNumberSum(array, targetSum) {
  let targetNum;
  let resultArray = [];

  for (let e = 0; e < array.length; e++) {
    // finding what element I need
    targetNum = targetSum - array[e];
    for (let i = e + 1; i < array.length; i++) {
      if (array[e] + array[i] === targetSum) {
        resultArray.push(array[e]);
        resultArray.push(array[i]);
      }
    }
  }

  return resultArray;
}

// O(n) time | O(n) space
function twoNumberSum2(array, targetSum) {
  const nums = {};
  for (const num of array) {
    const potentialMatch = targetSum - num;

    // checks if object has the number we need for sum
    if (potentialMatch in nums) {
      return [potentialMatch, num];
    }
    // if not adds that number as key so its searchable with amortized O(1)
    else {
      nums[num] = true;
    }
  }
  return [];
}

// O(nlog(n)) | O(1) space - save space, increase time complexity
function twoNumberSum(array, targetSum) {
  array.sort((a, b) => a - b);
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    // summing left element and right
    const currentSum = array[left] + array[right];

    // if some is what we need all good
    if (currentSum === targetSum) {
      return [array[left], array[right]];
    } 
    
    // if sum is less what we need, we increase left side thus increasing the total sum
    else if (currentSum < targetSum) {
      left++;
    } 
    // if sum is more than we need, we decrease right side thus decreasing the total sum
    else if (currentSum > targetSum) {
      right--;
    }
  }
  return [];
}
