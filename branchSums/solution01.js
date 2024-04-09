//PREP
// P: binary tree
// R: an array of all the branch sums
// E: branchSums() // [10, 12, 5]
// P: while node.left aggerate numbers push funal number to array
// 

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

function calcBranchSums(node, runningSum, sums) {
  if (!node) {
    return
  }
  let newRunningSum = runningSum + node.value;
  if (!node.left && !node.right) {
    sums.push(newRunningSum)
    return
  }

  calcBranchSums(node.left, newRunningSum, sums)
  calcBranchSums(node.right, newRunningSum, sums)
}
