// PREP
// P: array of sorted numbers, a target number
// R: returns index of target number or -1 if not presenemt
// E: binarySearch([1,2,3,4,5,6], 10) // -1
// binarySearch([1,2,3,4,5,6], 5) // 5
// P: setup lower bound variable and higher bound variable
// setup while loop and run while loop as long as left is smaller than right bound
// make mid index variable based of lower bound and higher bound
// check if target is mid
// if not then check if target is greater than mid
// if yes, then get rid of left half of array
// if not, then get righ of righ half of array
// if after loop ends and target was not found then return -1

function binarySearch(array, target) {
  let l = 0;
  let r = array.length;

  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (array[mid] === target) {
      return mid;
    } else if (array[mid] < target) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  return -1;
}
