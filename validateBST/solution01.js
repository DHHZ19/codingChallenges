function validateBst(tree, min = -Infinity, max = Infinity) {
  // base case
  if (tree === null) {
    return true
  }

  // MIN <= Value > MAX
  if (tree.value < min || tree.value >= max) {
    return false
  }


  // recurse
  return validateBst(tree.left, min, tree.value) && validateBst(tree.right, tree.value, max)
  
}

