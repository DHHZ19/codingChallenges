function sevenAte9(str) {
    let removedNine = str.split('').map((x,i)=>`${7}${x}${7}`=== `${str[i-1]}${9}${str[i+1]}` ? x = '' : x) 
    return removedNine.join('')
   }