function redistributeWealth(wealth) {
    let target = wealth.reduce((a,b)=> a+b, 0) / wealth.length
    for (let money in wealth){
      wealth[money] = target
    }
  }