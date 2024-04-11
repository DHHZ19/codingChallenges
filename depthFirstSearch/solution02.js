// Do not edit the class below except
// for the depthFirstSearch method.
// Feel free to add new properties
// and methods to the class.
// itterative solution
class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array) {
    let stack = [this];
    while (stack.length > 0) {
      let currentNode = stack.pop();
      array.push(currentNode.name);
      for (let node of currentNode.children.reverse()) {
        stack.push(node);
      }
    }
    return array;
  }
}
