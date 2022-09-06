// better solution :)
var isPalindrome = function (s) {
  let leftPointer = 0;
  let rightPointer = s.length - 1;
  while (leftPointer < rightPointer) {
    while (
      isNonAlphaNumeric(s[leftPointer].toLowerCase()) &&
      leftPointer < rightPointer
    ) {
      leftPointer++;
    }
    while (
      isNonAlphaNumeric(s[rightPointer].toLowerCase()) &&
      rightPointer > leftPointer
    ) {
      rightPointer--;
    }
    console.log(s[leftPointer], "left");
    console.log(s[rightPointer], "right");
    if (s[leftPointer].toLowerCase() !== s[rightPointer].toLowerCase()) {
      return false;
    }
    leftPointer++, rightPointer--;
  }
  return true;
};
// this function will return false if its alpha numeric, true if its not
const isNonAlphaNumeric = (char) => {
  const isNonAlpha = char < "a" || "z" < char; // a(97) - z(122)
  const isNonNumeric = char < "0" || "9" < char; // 0(48) - 9(57)

  return isNonAlpha && isNonNumeric;
};
