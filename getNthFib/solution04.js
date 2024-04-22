// time: o(n) space: o(n)
// fastest solution itterative
function getNthFib(n) {
  
  let fib = [0, 1]
  let count = 3;
  while (count <= n) {
    let next = fib[0] + fib[1]
    fib.shift()
    fib.push(next)
    count++
  }
  return n > 1 ? fib[1] : fib[0]
}

