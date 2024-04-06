// recursive solution
// Paramas: array
// returns: flattend array (an array without nested arrays)
const ex = [1, 2, 3, 4, [4, 3], 1, 2, 3, 4, 0, [1]];
function flattenArray(arr) {
  let newArray = [];
  for (let idx = 0; idx < arr.length; idx++) {
    let el = arr[idx];
    if (Array.isArray(el)) {
      newArray = newArray.concat(flattenArray(el));
    } else {
      newArray.push(el);
    }
  }

  return newArray;
}

const answer = flattenArray(ex);

console.log(answer);
