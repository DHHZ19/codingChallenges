  // doesnt pass all test cases
function oddOrEven(n) {
    let oddOrEvens;
    if(n == 1){
      oddOrEvens = 'Either'
    }else if(n /2 % 2 !== 0 ){
      oddOrEvens = 'Odd'
    }else if(n/2 % 2 == 0){
      oddOrEvens = 'Even'
    }
    return oddOrEvens;
  }

  

//this will pass all the test cases
  function oddOrEven(n) {
    let oddOrEvens;
    if(n %2){
      oddOrEvens = 'Either'
    }else if(n /2 % 2 ){
      oddOrEvens = 'Odd'
    }else{
      oddOrEvens = 'Even'
    }
    return oddOrEvens;
  }