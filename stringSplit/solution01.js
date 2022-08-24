/*
PREP
P: a string of letters
R: the strings split in paris with a undercse if missing a pair
E: 'abc' =>  ['ab', 'c_'] 'abcdef' => ['ab', 'cd', 'ef']
*/
function solution(str) {
  let res = [];
  for (let i = 0; i < str.length; i += 2) {
    if (!str.length % 2 === 0 && str.length === i + 1) {
      res.push([str[i] + "_"].join(""));
    } else {
      res.push([str[i], str[i + 1]].join(""));
    }
  }
  console.log(res);
  return res;
}
