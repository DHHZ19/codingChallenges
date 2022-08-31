var isPalindrome = function (s) {
  if (s.length < 2) return true;
  const replaced = s.replace(/[^a-z0-9]/gi, ""); // used regex to determine if its alphanumeric... this hurt my soul but coudnt find another soultion at the time 🥺
  let secondReplaced = replaced.slice();
  if (
    replaced.toLowerCase().split("").reverse().join("") ==
    secondReplaced.toLowerCase().split("").join("")
  ) {
    return true;
  } else {
    return false;
  }
};
