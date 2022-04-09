
  let myPoints = 90;
  
  let testClassPoints  = [10,20,40,100,70,80,50]
  function betterThanAverage(testClassPoints, myPoints) {
  // Your code her
      
  for(let i = 0; i < testClassPoints.length; i++){
  let averagedClassPoints = 0;
    averagedClassPoints =  testClassPoints[i] + averagedClassPoints;
    x =  averagedClassPoints / 2
  }
  
  if(x > myPoints){
    return false;
  }else{
    return true;
  }
      
}

betterThanAverage(testClassPoints, myPoints)

