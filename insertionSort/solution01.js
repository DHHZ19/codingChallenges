// [1|3,2,4]
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    // number to inster start at 1
    let numberToInsert = arr[i]; // this will be the number we want to insert
    let j = i - 1;
    // if j >= 0 we shoudnt continue looping && numberToInsert < arr[j]
    // *&& is important here it means that they both have to be true
    // *if one becomes falsy we stop the loop
    // j >= 0 is saying we should make sure the insertion loation is at the 0th postion or greater

    // arr[j] > numberToInsert is saying as long as the spot to the right of the insertion location is greter then the spot of the insertion location
    while (j >= 0 && arr[j] > numberToInsert) {
      // move the bigger number to the right untill insertion spot is found
      arr[j + 1] = arr[j];
      // subtract from i - 1 once
      j--;
    }
    // now that we have found our insertion spot (we know this becasue we have exited the loop)
    // do the insert
    arr[j + 1] = numberToInsert;
  }
  return arr;
}
