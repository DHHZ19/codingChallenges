// PREP
//P: string, with uppercae and lower case
// R: returns same string with space inbetween where caps and lowercase meet
// E: sollution(diegoHernandez) diego Hernandez, solution(iLoveMyMOM) i Love My Mom
// P: run through string check for uppercase letters
// if upperCase == true place a space to the left of it
function solution(string){
    let newString = string.split('')
    for(let i = 0; i < newString.length; i++){
      if(newString[i] == newString[i].toUpperCase()){
      newString[i-1]+= ' '
      }
  }
    return newString.join('')
  }
  solution('camelCase')