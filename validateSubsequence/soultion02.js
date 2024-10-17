// simplier solution
function isValidSubsequence(array, sequence) {
  let j = 0;
  for(let i = 0; i < array.length; i++){
        if(sequence[j] === array[i]){
          j++;
        }
  }
  return sequence.length === j
}
