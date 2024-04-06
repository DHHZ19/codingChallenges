// Paramas: array
// returns: flattend array (an array without nested arrays)
const ex = [1, 2, 3, 4, [4, 3], 1, 2, 3, 4, 0, [1]];
function flattenArray(arr) {
  let flattend = [];
  for (let idx = 0; idx < arr.length; idx++) {
    const element = arr[idx];
    console.log(Array.isArray(element));
    if (Array.isArray(element)) {
      for (let idx = 0; idx < element.length; idx++) {
        const el = element[idx];
        flattend.push(el);
      }
    } else {
      flattend.push(element);
    }
  }
  return flattend;
}

const answer = flattenArray(ex);

console.log(answer);
