//PREP
// P: an array of numbers with peaks
// R: the lenght of the longest peak
// 
// intalize a count and longestPeakcoutn vars 
// loop through the array 
// find a peak at which point
// loop left and right to mesaure the peak length
// after peak length is mesaured set it to longest peak
// reset count to 1 and conitnue through the rest of array

// finaly return array after for loop is finished

function longestPeak(array) {
  let longestPeakcount = 0;
  // starts of counting first peak
  let peakCount = 1;

  for(let i = 1; i < array.length - 1; i++){
    if(array[i - 1] < array[i] && array[i + 1] < array[i]){
      // peak found 
      let left = i
      let right = i 
      // calc left side of peak
      while (array[left - 1] < array[left]) {
        left--
        peakCount++
      }
      // calc right side of peak
      while (array[right + 1] < array[right]) {
        right++
        peakCount++
      }
      
      longestPeakcount = Math.max(peakCount, longestPeakcount)
      peakCount = 1;
      // start searching for next peak at the right most point of the currnt      // peak
      i = right
    }
  }
  return longestPeakcount
}
