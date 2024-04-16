// [5, 8, 2, 9, 5, 6, 3]
function bubbleSort(array) {
  let swap = false;
  while (!swap) {
    swap = true
    for (let idx = 0; idx < array.length - 1; idx++) {
      if (array[idx] > array[idx + 1]) {
        let temp = array[idx]
        array[idx] = array[idx + 1]
        array[idx + 1] = temp
        swap = false
      }
    }
  }
  return array
}
