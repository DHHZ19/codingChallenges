/*
PREP
P: String word;
R: returns String word with 2 spaces between each letter and all letters captlized
E: vaporcode('yo hello dude') // Y  O  H  E  L  L  O  D  U  D  E
P: 
  upper case all the letters
    run through the array 
      IF its a letter add two spaces to the right of it
      IF its not a letter just add one space to the right of it
    return the string in the vaporwave affect
*/
function vaporcode(string) {
    let stringArray = string.toUpperCase().split('')
    for(let i = 0; i < stringArray.length; i++){
      if(stringArray[i] == ' '){
        stringArray.splice(i, 1, '')
      }
    }
    for(let i =0; i < stringArray.length; i++){
      if(stringArray[i].toUpperCase() != stringArray[i].toLowerCase()){
        stringArray.splice(i+1,0, ' ');
        stringArray.splice(i+2,0, ' ');
      }
    }
    return stringArray.join('').trim()
      console.log(stringArray)
  }