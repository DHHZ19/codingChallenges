function solution(nums){
    let sorted = []
   
   nums !== null ?  sorted = nums.sort((a,b) => a-b): sorted
    return sorted
  }