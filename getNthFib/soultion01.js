// write a function that takes in an integer and returns the nth fib number
// https://www.algoexpert.io/questions/nth-fibonacci
function getNthFib(n) {
  
  if (n <= 2) {
    return n - 1;
  }

  return getNthFib(n - 1) + getNthFib(n - 2); // Fn-1 + Fn-2
}
