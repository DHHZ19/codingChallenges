//PREP
//P: string
//R: str with every element repeated expect ofr spaces
// E: doubleChar(Diego) DDIIEEGGOO doubleChar(43$2) 4433$$22
//P: 
  // run through the array
  // check if its a int,char,symbols,
    // IF true then add another to the right
    // IF False do not double
// TRUE return doubled string
// else false

function doubleChar(str) {
    let newStr = str.split("").map((x,i)=> {
      if(x !== ' '){
       return x + x
      }
    })
    return newStr.join('')
  }