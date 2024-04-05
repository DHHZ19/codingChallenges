// problem link: https://www.algoexpert.io/questions/remove-duplicates-from-linked-list
// PREP
// P: linked list with each node having a number value and a next pointer
// R: linked list with duplicates removed from linked list
// E: removeDuplicatesFromLinkedList(1 -> 3 -> 6 -> 6 -> 7 -> 9 -> 10) // 1 -> 3 -> 6 -> 7 -> 9 -> 10
// P: while next value is not null
// loop though the linkedlist checking if the previous number is equal to the current
// if they're equal than remove and reset the pointer to the .nex.next

// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeDuplicatesFromLinkedList(linkedList) {
  let currentNode = linkedList;
  while (currentNode) {
    let nextDistinct = currentNode.next;
    while (nextDistinct && nextDistinct.value === currentNode.value) {
      nextDistinct = nextDistinct.next;
    }
    currentNode.next = nextDistinct;
    currentNode = nextDistinct;
  }
  return linkedList;
}
