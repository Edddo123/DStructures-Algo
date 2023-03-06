/*
<p>
  Write a function that takes in a Binary Tree and returns a list of its branch
  sums ordered from leftmost branch sum to rightmost branch sum.
</p>
<p>
  A branch sum is the sum of all values in a Binary Tree branch. A Binary Tree
  branch is a path of nodes in a tree that starts at the root node and ends at
  any leaf node.
</p>
<p>
  Each <span>BinaryTree</span> node has an integer <span>value</span>, a
  <span>left</span> child node, and a <span>right</span> child node. Children
  nodes can either be <span>BinaryTree</span> nodes themselves or
  <span>None</span> / <span>null</span>.
</p>
*/

class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  // O(n) time | O(n) space - where n is the number of nodes in the Binary Tree
  // Time is O(N) since we visit every node for sum
  // Space is O(N) for different reasons. First for just traversing tree and having function calls on callstack. If tree is balanced then it would be O(logN) but worst case would be O(n)(If least is skewed and maybe 1 line as linked list, then we have N function calls on callstack). 
  // 2nd part of space being O(n) is array of sums. Array of sums will be same amount as number of leaf nodes. Number of possible leaf nodes at any level would be 2^k where k starts from 0 and increments on each level. On 3 level tree, we will have 8 leaf nodes, which is roughly half of all the nodes and as we know O(n/2) is O(n) 
  function branchSums(root) {
    const sums = [];
    calculateBranchSums(root, 0, sums);
    return sums;
  }
  
  function calculateBranchSums(node, runningSum, sums) {
    // if we entered undefined, return. Happens when one of either left or right is null
    if (!node) return;
  
    // increase our sum count by existing value
    const newRunningSum = runningSum + node.value;

    // if its leaf node, we must have total sum for that path and we push it to array
    if (!node.left && !node.right) {
      sums.push(newRunningSum);
      return;
    }
  
    // we starting with searching left side and then going to right on each call maintaining total current sum and sums array
    calculateBranchSums(node.left, newRunningSum, sums);
    calculateBranchSums(node.right, newRunningSum, sums);
  }
  

  