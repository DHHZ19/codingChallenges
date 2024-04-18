// add new solution - better
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
   array.push(this.name)

    for (let idx = 0; idx < this.children.length; idx++) {
      this.children[idx].depthFirstSearch(array)
    }
    return array
  }
}
