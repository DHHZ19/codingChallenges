let bigger 
let smaller 
let result = 0
function getSum( a,b )
{
    a < b ? bigger = b : bigger = a
    a < b ? smaller = a : smaller = b
    console.log(bigger + "bigger")
    console.log(smaller + "smaller")
    if(a == b){
      return a
    } 

  for(let i = smaller + 1; i <= bigger; i++){
     smaller += i
//      console.log(smaller)
  }
  return smaller 
}