
function mygcd(x,y){
	let gcd = []
  let leastNumber = Math.min(x,y)
  for(let i = 0; i <= leastNumber; i++){
    if(x % leastNumber == 0 && y % leastNumber == 0){
     gcd.push(leastNumber)
  }else if( x % i == 0 && y % i == 0){	
    gcd.push(i)
  }
  }
 let newSplited = Math.max.apply(null, gcd); 
  return newSplited
 }