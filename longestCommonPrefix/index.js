// Input: strs = ["flower", "flow", "flight"];
let strs = ["flower", "flow", "flight"];
var longestCommonPrefix = function (strs) {
  let prefix = strs[0];
  for (let word of strs) {
    for (let i = strs.length - 1; i >= 0; i--) {
      if (prefix[i] !== word[i]) {
        prefix = prefix.slice(0, i);
      }
    }
  }
  return prefix;
};

longestCommonPrefix(strs);
