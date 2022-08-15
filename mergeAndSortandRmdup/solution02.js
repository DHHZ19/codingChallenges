// uses two important methods
// Array.from()
// Set() // keeps unique values

function mergeArrays(arr1, arr2) {
  return Array.from(new Set(arr1.concat(arr2).sort((a, b) => a - b)));
}
