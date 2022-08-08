function makeHash(str) {
  //Make an array with 26 slots filled with 0s
  const count = Array(26).fill(0);
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    //get and increment the index in the alphabet for each character where a is 0 and z is 25
    const alphaIndex = char.charCodeAt() - 97;
    count[alphaIndex]++;
  }
  //join the string together by a non–digit character
  return count.join("|");
}
