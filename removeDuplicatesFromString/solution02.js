// remove duplicadtes from string
let str = "this is is a test test string";

function removeDuplicates() {
  const arr = str.split(" ");

  const wordSet = new Set(arr);

  str = "";
  for (const word of wordSet.values()) {
    str += str === "" ? word : ` ${word}`;
  }

  return str;
}

console.log(removeDuplicates(str));
