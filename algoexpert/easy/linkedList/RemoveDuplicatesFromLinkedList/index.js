// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

let linkedList1 = new LinkedList(1);
const linkedList2 = new LinkedList(1);
const linkedList3 = new LinkedList(3);
const linkedList4 = new LinkedList(4);
const linkedList5 = new LinkedList(4);
const linkedList6 = new LinkedList(4);
const linkedList7 = new LinkedList(5);
const linkedList8 = new LinkedList(6);
const linkedList9 = new LinkedList(6);

linkedList1.next = linkedList2;
linkedList2.next = linkedList3;
linkedList3.next = linkedList4;
linkedList4.next = linkedList5;
linkedList5.next = linkedList6;
linkedList6.next = linkedList7;
linkedList7.next = linkedList8;
linkedList8.next = linkedList9;

function removeDuplicatesFromLinkedList(linkedList) {
    let previousValue = null;
    let i = 0;
    let head = linkedList

    if(!linkedList.next) return head
  
    // here we check if linkedList next is null meaning, loop will end on last node but last node will not be checked, better would be to check definition of current node
    while (linkedList.next) {
      if (i === 0) {
        previousValue = linkedList;
        i++;
        linkedList = linkedList.next;
        continue;
      } else {
        i++;
  
        if (linkedList.value === previousValue.value) {
          previousValue.next = linkedList.next;
          linkedList.value = null;
          linkedList = previousValue.next;
        } else {
          previousValue = linkedList
          linkedList = linkedList.next
        }
      }
    }
  
    if(previousValue.value === linkedList.value) {
      previousValue.next = null
    }
  
  
    return head;
  }

// removeDuplicatesFromLinkedList(linkedList1);


function testfn() {
    // head still references what linked list 1 initially referenced
    let head = linkedList1;

    linkedList1 = linkedList4

    console.log(head)
    console.log(linkedList1)

}
testfn()



class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  // so in my solution I remove 1 duplicate at a time, for example if I have 1->1->1->3 I would check each 1 and remove then 1 by 1, In this solution we automatically look for next distinct node so we remove all at once so even tho there is while loop inside of while loop I still go over N nodes so its O(n)
  // O(n) time | O(1) space - where n is the number of nodes in the Linked List
  function removeDuplicatesFromLinkedList(linkedList) {
    let currentNode = linkedList;
    while (currentNode !== null) {
        // we search for next non duplicate node, first we assume possibility of next node
      let nextDistinctNode = currentNode.next;
      // then we go down the list and choose closest distince node if next node is duplicate
      while (nextDistinctNode !== null && nextDistinctNode.value === currentNode.value) {
        nextDistinctNode = nextDistinctNode.next;
      }
  
      // we move current node pointer to next node
      currentNode.next = nextDistinctNode;
      currentNode = nextDistinctNode;
    }
  
    // we return linked list since variable reference was not changed so it still references head node
    return linkedList;
  }

  