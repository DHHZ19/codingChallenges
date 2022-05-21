function consecutive(arr, a, b) {
    //PREP
    //P: array, integer, integer
    //R: True if both integers are consecuitve, false if not
    //E: consective([1,2,3,4,5], 1, 3 ) R: false consecutive([1,2,3,4] 1,2) R:True
    //P: 
    //  FOR each number in the array
    // IF the a and b are next to each other THEN
    // END if return true
    // IF a and b are not next to each other THEN
    // return false
    let answer;
    // here we check if a and b are consetuive in the order a,b or order b,a
     const array = arr.map((x,i) => arr[i] == a && arr[i+1] == b || arr[i] == b && arr[i+1] == a  ? answer = true: answer = false)
     // here we run though the mapped array and if it contains a true then we have that as the answer else its false
      array.forEach((x,i) => x == true ? answer = x : false )
    return answer
    
  }