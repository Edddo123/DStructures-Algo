
// bst propert can be defined in slightly different ways. For us, every left node to our current node is smaller, and every right node is greater or equal to this
/*
So here 10 is bigger than 5, then 5 is bigger than 2 and so on. BST propert could also be right is bigger and left is smaller or equal to
         10
       /     \
      5      15
    /   \   /   \
   2     5 13   22
 /           \
1            14
*/
class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  
    // We search where to insert with out BST property and then add new value
    // For recursive solution
    // Average: Time compexity O(logN) If tree is balanced, and worse O(n) if its skewed and like linked list
    // Average:  Space compexity O(logN) If tree is balanced, and worse O(n) if its skewed and like linked list since we require functions on callstack

    insert(value) {
      if(value >= this.value) {
        if(this.right === null) { this.right = new BST(value)
        return this.right
        }
        return this.right.insert(value)
      }
       else {
        if(this.left === null) {
            this.left = new BST(value)
            return this.left
        }
        return this.left.insert(value)
       }
    }
  
    // We search for value, if its equal with current node we return, if its greater than current node, we go right and if smaller than current node we go left, if we reached leaf node and equality did not happen, it means BST does not have provided value
    // For recursive solution
    // Average: Time compexity O(logN) If tree is balanced, and worse O(n) if its skewed and like linked list
    // Average:  Space compexity O(logN) If tree is balanced, and worse O(n) if its skewed and like linked list since we require functions on callstack
    contains(value) {
        if(value === this.value) return true;
        if(value < this.value) {
          if(this.left === null) return false;
          else return this.left.contains(value)
        }
        else {
          if(this.right === null) return false;
          else return this.right.contains(value)
        }
    }

   
    // So idea is, if node we are removing has 2 child nodes, we must pick smallest(left most) value of right tree, this way bst property will be kept, if it has no child nodes, you just remove it, if it has 1 child node its also easy, you just attach parent of this deleted node to this child node
    // Average: O(log(n)) time | O(log(n)) space
    // Worst: O(n) time | O(n) space
    remove(value, parent = null) {
        if (value < this.value) {
          if (this.left !== null) {
            this.left.remove(value, this);
          }
        } else if (value > this.value) {
          if (this.right !== null) {
            this.right.remove(value, this);
          }
        } 
        // we get here only when we find the value to delete
        else {
            // if we have 2 child nodes for value we want deleted, we take smallest value from the right subtree and put it there(since that would be value to satisfy BST)
          if (this.left !== null && this.right !== null) {
            this.value = this.right.getMinValue();
            // and then we remove that min element since we moved it up to previously removed element
            this.right.remove(this.value, this);
          } 
          // parent is null only on first function call, so we will come only when root node is removed and root node has only left or right node, not both
          else if (parent === null) {
            // if there is node on left, attach that node, 
            if (this.left !== null) {
              this.value = this.left.value;
              this.right = this.left.right;
              this.left = this.left.left;
            } 
            // if there is node on right, attach that node in place of deleted value
            else if (this.right !== null) {
              this.value = this.right.value;
              this.left = this.right.left;
              this.right = this.right.right;
            } 
            // if it was leaf node that got removed, nothing is needed
            else {
              // This is a single-node tree; do nothing.
            }
          } 
          // if element we are deleting is left child node of parent, we will attach left or right node of deleted child node
          else if (parent.left === this) {
            // first we try attaching left element since we go left from right, however opposite would work too
            parent.left = this.left !== null ? this.left : this.right;
          }
          // if element we are deleting is right child node of parent, we will attach left or right node of deleted child node 
          else if (parent.right === this) {
            parent.right = this.left !== null ? this.left : this.right;
          }
        }
        return this;
      }
    
      // finds smallest value in tree(left most)
      getMinValue() {
        if (this.left === null) {
          return this.value;
        } else {
          return this.left.getMinValue();
        }
      }
  }
  


const root1 = new BST(10)


root1.insert(5)
root1.insert(15)
root1.insert(2)
root1.insert(5)
root1.insert(13)
root1.insert(22)

console.log('deleted tree',root1.remove(10))




// console.log('whole tree', root1)
// root1.left = new BST(5)
// root1.right = new BST(15)
// root1.left.left = new BST(2)
// root1.left.right = new BST(5)
// root1.right.left = new BST(13)
// root1.right.right = new BST(22)

// console.log(root1.contains(22))

  



class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  // Average: O(log(n)) time | O(1) space
  // Worst: O(n) time | O(1) space
  insert(value) {
    let currentNode = this;
    // we loop until we find place to insert
    while (true) {
      if (value < currentNode.value) {
        // when value is smaller we go left and if there is nothing on left we insert new element there
        if (currentNode.left === null) {
          currentNode.left = new BST(value);
          break;
        } else {
          currentNode = currentNode.left;
        }
      } else {
        // when value is larger we go right and if there is nothing on right we insert new element there
        if (currentNode.right === null) {
          currentNode.right = new BST(value);
          break;
        } else {
          currentNode = currentNode.right;
        }
      }
    }
    return this;
  }

  // Average: O(log(n)) time | O(1) space
  // Worst: O(n) time | O(1) space
  contains(value) {
    let currentNode = this;
    // if we end loop with this statement, no match was found and we return false
    while (currentNode !== null) {
      if (value < currentNode.value) {
        // if value is smaller than current node, we go to left
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        // if value is bigger than we go right
        currentNode = currentNode.right;
      } else {
        // if there is equality we return the loop
        return true;
      }
    }
    return false;
  }

  // Average: O(log(n)) time | O(1) space
  // Worst: O(n) time | O(1) space
  remove(value, parentNode = null) {
    let currentNode = this;
    while (currentNode !== null) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else {
        if (currentNode.left !== null && currentNode.right !== null) {
          currentNode.value = currentNode.right.getMinValue();
          currentNode.right.remove(currentNode.value, currentNode);
        } else if (parentNode === null) {
          if (currentNode.left !== null) {
            currentNode.value = currentNode.left.value;
            currentNode.right = currentNode.left.right;
            currentNode.left = currentNode.left.left;
          } else if (currentNode.right !== null) {
            currentNode.value = currentNode.right.value;
            currentNode.left = currentNode.right.left;
            currentNode.right = currentNode.right.right;
          } else {
            // This is a single-node tree; do nothing.
          }
        } else if (parentNode.left === currentNode) {
          parentNode.left = currentNode.left !== null ? currentNode.left : currentNode.right;
        } else if (parentNode.right === currentNode) {
          parentNode.right = currentNode.left !== null ? currentNode.left : currentNode.right;
        }
        break;
      }
    }
    return this;
  }

  getMinValue() {
    let currentNode = this;
    while (currentNode.left !== null) {
      currentNode = currentNode.left;
    }
    return currentNode.value;
  }
}

exports.BST = BST;

  
  exports.BST = BST;
  