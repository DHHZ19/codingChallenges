function productSum(array, depth = 1) {
  const sum = array.reduce((acc, el) => {
    if (Array.isArray(el)) return acc + productSum(el, depth + 1);
    else return (acc += el);
  }, 0);

  return sum * depth;
}
