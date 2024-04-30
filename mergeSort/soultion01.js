const mergeSort = (nums) => {
  if (nums.length < 2) {
    return nums;
  }

  const mid = Math.floor(nums.length / 2);
  return merge(mergeSort(slice(0, mid)), mergSort(mid));
};

function merge(left, right) {
  const merged = [];
  while (left.length > 0 && right.length > 0) {
    if (left[0] <= right[0]) {
      merged.push(left.shift());
    } else {
      merged.push(right.shift());
    }
  }

  return merged.concat(left, right);
}

