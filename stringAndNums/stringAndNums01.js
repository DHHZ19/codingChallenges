// add string ints, 
// subtract that from the non-string ints
function divCon(x){
    let nonString = 0;
    let stringType = 0;
    x.forEach((x,i) => {
      typeof x == 'string' ? stringType += parseInt(x) : nonString += x
    })
    return nonString - stringType
  }