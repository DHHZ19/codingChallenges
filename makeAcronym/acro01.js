function toAcronym(inp) {
  let inpArray = inp.split("");
  let res = [];
  res.push(inpArray[0]);
  for (let i = 0; i < inp.length; i++) {
    if (inpArray[i] === " ") {
      res.push(inpArray[i + 1]);
    }
  }
  return res.join("").toUpperCase();
}
