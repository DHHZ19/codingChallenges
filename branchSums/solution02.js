class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(root) {
  let sums = []
  calcBranchSums(root, 0, sums)
  return sums
}

function calcBranchSums(node, sum, sums){
  // if tree is null return 
  if (!node) {
    return
  }
  // calc the new sum by adding the current sum and the currnt node we're at
  let newSum = sum + node.value
  // if we reach the end of the branch then add the newSum to the array of sums
  // then return from that recrusive call
  if(!node.left && !node.right){
    sums.push(newSum)
    return
  }
  // recursively check the left side of the branch, this will also check the entire left side not just
  // going left as this function will call the right right branches after the inital left branch
  calcBranchSums(node.left, newSum, sums)
  // recursively check the right side of the branch
  calcBranchSums(node.right, newSum, sums)
        
}
