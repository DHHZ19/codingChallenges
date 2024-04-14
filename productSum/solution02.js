function productSum(array, depth = 1) {
  const sum = array.reduce((a, e) => {
    if (Array.isArray(e)) return a + productSum(e, depth + 1)
    else return a + e
  }, 0)

  return sum * depth
}
