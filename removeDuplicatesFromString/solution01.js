// remove duplicadtes from string
const str = "this is is a test test string";

function removeDuplicates(str) {
  const wordSet = new Set();
  let strArray = str.split(" ");
  for (let i = 0; i < strArray.length; i++) {
    let word = strArray[i];
    if (wordSet.has(word)) {
      strArray.splice(i, 1);
    } else {
      wordSet.add(word);
    }
  }
  return strArray.join(" ");
}

console.log(removeDuplicates(str));
