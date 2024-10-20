// link to problem https://www.codewars.com/kata/5a29a0898f27f2d9c9000058/

const solve = (s) => {
  let result = [0, 0, 0, 0];
  for (let i = 0; i < s.length; i += 1) {
    if (s[i].toLowerCase() > s[i]) {
      result[0] += 1;
    } else if (s[i].toUpperCase() < s[i]) {
      result[1] += 1;
    } else if (s[i] >= 0 && s[i] <= 9) {
      result[2] += 1;
    } else {
      result[3] += 1;
    }
  }
  return result;
};

