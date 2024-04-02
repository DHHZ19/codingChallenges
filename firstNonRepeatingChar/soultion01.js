// P: a string of chars
// R: false if all characters are repeating otherwise returns index of first 
// non repeating char
// E: firstNonRepeatingCharacter('afdfdfw') // 0
// P: loop through array, add every element to a map, count the number of times
// a letter shows up, at the end of the loop find first char with only one repeating letter and return the index
function firstNonRepeatingCharacter(string) {
    let map = {}
    for (let char of string) {
         if(char in map){
           map[char]++
         } else {
           map[char] = 1;
         }
    }
  
    for(const char in map){
        if(map[char] === 1){
          return string.indexOf(char)
        }
    }
    return -1;
  } 