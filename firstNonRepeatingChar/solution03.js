function firstNonRepeatingCharacter(string) {
    // Write your code here.
    for(let i = 0; i < string.length; i++){
      let duplicate = false;
      for(let j = 0; j < string.length; j++){
        if(string[j] === string[i] && j != i){
          duplicate = true
        }
      }
      if(duplicate === false){
          return i
      }
    }
    return -1;
  }
  