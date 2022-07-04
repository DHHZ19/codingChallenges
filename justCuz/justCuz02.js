function reverseList(list) {
    return list.reduce((reverseList, element) => [element, ...reverseList], []);
  }