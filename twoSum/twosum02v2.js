// two pointers
function twoNumberSum(array, targetSum) {
  let l = 0;
  let r = array.length;
  array.sort((a, b) => a - b);
  while (l <= r) {
    if (array[l] + array[r] === targetSum) {
      return [array[l], array[r]];
    } else if (array[l] + array[r] < targetSum) {
      l++;
    } else {
      r--;
    }
  }
  return [];
}
