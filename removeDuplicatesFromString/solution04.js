// remove duplicadtes from string
const str = "this is is a test test string";

function removeDuplicates(str) {
  return [...new Set(str.split(" "))].join(" ");
}

console.log(removeDuplicates(str));
