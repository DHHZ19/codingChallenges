//PREP
// P: an array
// R: a number that is the sum of two lowest from the array
// E: sumTwoSmallextNumbers([1,2,3,4,5,9]) 3 sumTwoSmallestNumbers([5,4,3,2,9,10]) 5
// P:
// run the the array check for two smallest numbers
  // first we sort it
  // the first two in the array should be the two smallest
  // then we grab those two numbers and add them
  // RETURN the sum
  function sumTwoSmallestNumbers(numbers) {  
    let answer
    numbers.sort((a,b) => a-b).slice(0, 2).reduce((acc, c) => {
      return answer = acc += c
    })
    return answer
  }