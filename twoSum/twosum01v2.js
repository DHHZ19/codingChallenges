// question: https://www.algoexpert.io/questions/two-number-sum
//PREP
// P: an array of numbers, a target number
// R: returns the two numbers that add to target number, if no two numbers are found return an empty array
// E: twoNumberSum([1,])
// P: initlaize a set
// loop through array put number in set when its found
// attempt to reach target number, if not reached then continue adding number to set
// if target number found return the two numbers.
// else return an empty array
function twoNumberSum(array, targetSum) {
  let numberSet = new Set();

  for (let idx = 0; idx < array.length; idx++) {
    let numberToLookFor = targetSum - array[idx];
    if (numberSet.has(numberToLookFor)) {
      return [numberToLookFor, array[idx]];
    } else {
      numberSet.add(array[idx]);
    }
  }

  return [];
}
