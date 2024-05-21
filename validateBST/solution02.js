function validateBst(tree) {
  return validateBstHelper(tree, -Infinity, Infinity)
}
function validateBstHelper(tree, min, max){
  if(!tree) return true
  if (tree.value < min || tree.value >= max) return false

  leftIsValid = validateBstHelper(tree.left, min, tree.value)
  return leftIsValid && validateBstHelper(tree.right, tree.value, max)
}
