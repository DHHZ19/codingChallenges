function findOutlier(integers){
    let even = []
    let odd = []
    for(let i = 0; i < integers.length; i++){
      if(integers[i] % 2 == 0){
        even.push(integers[i])
      }else{
        odd.push(integers[i])
      }
    }
    if(even.length == 1){
      return even[0]
    }else if(odd.length == 1){
      return odd[0]
    }
  }