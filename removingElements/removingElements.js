function removeEveryOther(arr){
    const filterdArray = arr.filter((x,i)=>{
      if(i % 2 == 0){
        return arr
      }
    })
     return filterdArray
  }
