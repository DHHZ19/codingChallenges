//PREP
//P: A String,(jadens tweeta)
//R: String thats Jaden-Cased
//E: toJadenCase('What the fuck my dad slapped chris rock') // What The Fuck My Dad Slapped Chris Rock
// P: 

String.prototype.toJadenCase = function () {
    // take in the string and run the the string
    // check if first letter after space is uppercase
    // if not uppercase it 
    // return the new string
   let newString = this.split('')
    for(let i = 0; i <  newString.length; i++){
      if(newString[i] == ' '){
        newString[i+1] = newString[i+1].toUpperCase()
      }else if(i == 0){
        newString[i] = newString[i].toUpperCase()
      }
    }
    return newString.join('')
  };
  
  
  