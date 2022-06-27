function redistributeWealth(wealth) {
    let divided = wealth.reduce((acc, c) => acc + c, 0)
    wealth.fill(divided / wealth.length)
    }