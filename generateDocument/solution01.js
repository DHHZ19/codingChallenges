// https://www.algoexpert.io/questions/generate-document
//PREP
// P: char string, document string
// R: true or false
// E: generateDocument('abcde', dad) // false
// P: loop through the character string and add characters to hashmap
// increase charagter count if a character is seen more than once
// check if the character is seen in the doucment
// if its seen subtract one and so on.
// finally check if every character is grater or equal to zero then return true if not then false.
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
    if (char in map) {
      map[char]--;
    } else {
      return false;
    }
  }

  for (let num of Object.values(map)) {
    if (num >= 0) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}
