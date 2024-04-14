// question: https://www.algoexpert.io/questions/product-sum
// Tip: You can use the Array.isArray function to check whether an item
// is a list or an integer.
function productSum(array, depth = 1) {
  let sum = 0;
  
  for (const el of array) {
    if (Array.isArray(el)) {
      sum += productSum(el, depth + 1)
    }  else {
      sum += el;
    }
  }
  return sum * depth
}
