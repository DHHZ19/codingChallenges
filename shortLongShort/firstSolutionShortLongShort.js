function solution(a, b){
    // this checks the string length of a and b.
    // ? says if a is bigger do the then do the first one else the second one.
    return a.length > b.length ? `${b}${a}${b}`: `${a}${b}${a}`
  }
  