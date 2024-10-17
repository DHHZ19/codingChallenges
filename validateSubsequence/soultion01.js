// From: https://www.algoexpert.io/questions/validate-subsequence
function isValidSubsequence(array, sequence) {
  let i = 0
  let j = 0 
   while(i < array.length && j < sequence.length) {
     if(array[i] !== sequence[j]) {
      i++ 
     } else if (array[i] === sequence[j]) {
       j++, i++
     }
    if(j === sequence.length) return true 
   } 
  return false
}
