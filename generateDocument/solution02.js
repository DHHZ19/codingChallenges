function generateDocument(characters, document) {
  let map = {};

  for (let char of characters) {
    if (char in map) {
      map[char]++;
    } else {
      map[char] = 1;
    }
  }

  for (let char of document) {
    if (!(char in map) || map[char] === 0) return false;
    map[char]--;
  }

  return true;
}
