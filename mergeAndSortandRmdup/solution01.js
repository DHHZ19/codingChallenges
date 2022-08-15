function mergeArrays(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      arr2.splice(arr2.indexOf(arr1[i]), 1);
    }
  }
  let merged = [...arr1, ...arr2];
  merged.sort((a, b) => a - b);
  return merged;
}
