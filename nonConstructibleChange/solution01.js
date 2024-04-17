// algoexprt question

function nonConstructibleChange(coins) {
  coins.sort((a,b) => a-b)
  let change = 0;
  for (let el of coins) {
    if (el > change + 1) {
      return change + 1
    }
    change += el
  }
  return change + 1
}
