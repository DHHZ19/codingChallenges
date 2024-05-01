class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  breadthFirstSearch(array) {
    const q = [this]

    while (q.length) {
      const node = q.shift()
      array.push(node.name)
      
      for (const childNode of node.children) {
          q.push(childNode)
      }
    }
    return array
  }
}
