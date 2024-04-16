// probably not the best solution
function removeDuplicatesFromLinkedList(linkedList) {
  let curr = linkedList;
  let nextNode = curr?.next
  while (curr?.next) {
    if (curr.value === nextNode?.value) {
      nextNode = nextNode?.next;
    } else if (curr.value !== nextNode?.value) {
      curr.next = nextNode
      nextNode = nextNode?.next
      curr = curr.next;
    }
  }
  return linkedList
}
