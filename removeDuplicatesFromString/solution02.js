// remove duplicadtes from string
const str = "this is is a test test string";

function removeDuplicates() {
  const arr = str.split(" ");

  const wordSet = new Set(arr);

  let newStr = "";
  for (const word of wordSet.values()) {
    newStr += newStr === "" ? `${word}` : ` ${word}`;
  }

  return newStr;
}

console.log(removeDuplicates(str));
