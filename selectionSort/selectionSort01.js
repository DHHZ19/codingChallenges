function selectionSort(array) {
    for(let i = 0; i < array.length; i++){
      let min = array[i];
      for(let j = i + 1; j < array.length; j++){
      //   0 1 2 3 4     
        // [1,2,3,4,5]
       if(array[j] < min){
         min = array[j]
         array[j] = array[i]
         array[i] = min
        }
      }
    }
    console.log(array)
    return array
  }