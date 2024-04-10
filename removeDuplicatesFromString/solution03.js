// remove duplicadtes from string
const str = "this is is a test test string";

function removeDuplicates(str) {
  let arr = str.split(" ");

  let wordSet = new Set(arr);

  return [...wordSet].join(" ");
}

console.log(removeDuplicates(str));
