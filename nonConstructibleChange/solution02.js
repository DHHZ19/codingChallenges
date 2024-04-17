function nonConstructibleChange(coins) {
  coins.sort((a,b) => a-b);
  let minChange = 0;
  for (let idx = 0; idx < coins.length; idx++) {
    if (coins[idx] > minChange + 1) {
      break
    }
    minChange += coins[idx]
    console.log(minChange)
  }
  return minChange + 1;
}
