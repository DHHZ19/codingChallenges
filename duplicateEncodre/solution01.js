// from codewars
function duplicateEncode(word){
  let map = {}
  let words = ""
  
  word.toLowerCase().split("").forEach(x => {
   if(x in map) {
     map[x] += 1
   } else {
     map[x] = 1 
   }
  })
  
  word.toLowerCase().split("").forEach(x => {
  if (map[x] <= 1){
  words += "("
  } else {
   words += ")"
  }
  })
  return words   
}
