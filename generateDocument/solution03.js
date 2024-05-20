//PREP
//P: characters - a string of letters. document - a string of characters
//R: boolean value - saying if the characters given can generate the doucment
// E:
// P: 
// loop through characters add every instance of a letter to a map
// key being the letter, value being the number of times it occurs in the character string
// loop through document and start subtracting the number of letters in each map based of the seen ones in the document
// return false as soon as the doucment is see nthat it can no longer be written
// return true at the end if no false value was returned


function generateDocument(characters, document) {
  let charMap = new Map()
  for (let char of characters) {
     if (charMap.has(char)) {
       charMap.set(char, (charMap.get(char) + 1))
     } else {
       charMap.set(char, 1)
     }
  }

  for (let char of document) {
    if(charMap.has(char)){
      if(charMap.get(char) === 0){
        return false
      }else {
        charMap.set(char, (charMap.get(char) - 1))
      }
    }else {
      return false
    }
  }
  return true;
}

