// return masked string
function maskify(cc) {
    let masked = cc.split('')
    for(let i = 0; i < masked.length-4; i++){
      masked[i] = '#'
    }
  return masked.join('')
  }
  