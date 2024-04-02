function firstNonRepeatingCharacter(string) {
    let map = {}
    for (let char of string) {
         if(char in map){
           map[char]++
         } else {
           map[char] = 1;
         }
    }
  
    for(let i = 0; i < string.length; i++){
        if(map[string[i]] === 1){
          return i
        }
    }
    return -1;
  }