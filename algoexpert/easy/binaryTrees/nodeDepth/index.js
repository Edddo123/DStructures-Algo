/*
<p>
  The distance between a node in a Binary Tree and the tree's root is called the
  node's depth.
</p>
<p>
  Write a function that takes in a Binary Tree and returns the sum of its nodes'
  depths.
</p>
<p>
  Each <span>BinaryTree</span> node has an integer <span>value</span>, a
  <span>left</span> child node, and a <span>right</span> child node. Children
  nodes can either be <span>BinaryTree</span> nodes themselves or
  <span>None</span> / <span>null</span>.
</p>
*/

// Node Depth = The distance between a node in a Binary Tree and the tree's root is called the
//  node's depth.
// Root has 0 depth and first level has 1 depth

// Depth of tree would be depth of its deepest leaf node - its also known as height of tree


// Time complexity, O(n) since we visit each node one time.
// Space complexity, if tree balanced, O(logn) but it worst case, skewed tree it would be O(n). Space complexity comes from functions on call stack. We would also call it O(h) where h is height of the tree. If tree is balanced, smaller height, if tree is not balanced, bigger height where its nearly same as number of nodes
function nodeDepths(root) {
    let depth = 0;
    let depthSum = 0;
    depthSum = calculateNodeDepthSum(depthSum, depth, root)
    return depthSum
  }
  
  // here everywhere I return depth sum, since depthSum is primitive variable and value has to be copied everywhere, if it was array, returns would not be necessary
  function calculateNodeDepthSum(depthSum, depth, node) {
    // in case only either node left or node right was undefined I need to return nodeDepth before sum so that extra depth will not be added by mistakes
    if(!node) return depthSum;


    depthSum += depth;
  
    // if its last leaf node, thats last depth I summed up, so I just return the sum. First I do sum, because I need to include depth of leaf node
    if(!node.left && !node.right) return depthSum;
  
    depthSum = calculateNodeDepthSum(depthSum, depth + 1, node.left)
    depthSum = calculateNodeDepthSum(depthSum, depth + 1, node.right)
  
    // we will get here after each function iteration will be called and we will have total dephsum
    return depthSum;
    
  }
  
  
  // This is the class of the input binary tree.
  class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  /*
          1
       /     \
      2       3
    /   \   /   \
   4     5 6     7
 /   \
8     9

So in this example, first we add 0 since depth of root is 0, then we pass 2 to function, then 2 calls 4, then 4 calls 8. 8 returns and then 4 calls right now. 9 returns and then 4 returns with last return statement and thats flow basically
  */




// Average case: when the tree is balanced
// O(n) time | O(h) space - where n is the number of nodes in
// the Binary Tree and h is the height of the Binary Tree
// Similar to my solution but more concise
function nodeDepths(root, depth = 0) {
    if (root === null) return 0;
    return depth + nodeDepths(root.left, depth + 1) + nodeDepths(root.right, depth + 1);
  }
  
  // This is the class of the input binary tree.
  class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  




// Average case: when the tree is balanced
// O(n) time | O(h) space - where n is the number of nodes in
// the Binary Tree and h is the height of the Binary Tree
function nodeDepths(root) {
    let sumOfDepths = 0;
    const stack = [{node: root, depth: 0}];
    // iterative solution, we add each node to stack and store depth of it
    while (stack.length > 0) {
        // we pop the element from stack
      const {node, depth} = stack.pop();
      if (node === null) continue;
      // if its node, then we increase depth sum
      sumOfDepths += depth;
      // after that we add to stack popped elements left and right child, this way after root node, every left and right child will be popped and inserted on stack, and when everything is popped, all the depth will be summed up
      stack.push({node: node.left, depth: depth + 1});
      stack.push({node: node.right, depth: depth + 1});
    }
    return sumOfDepths;
  }
  
  // This is the class of the input binary tree.
  class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  exports.nodeDepths = nodeDepths;
  