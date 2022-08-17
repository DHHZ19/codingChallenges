/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
  PREP
  P: array of nums, a number k the (the number to check for)
  R: returns an array of the k most frequent numbers
  E: topKFrequent([1,2,3,4,4,4, 1], 2) // [4,1]
  [12,13,14,15,16,15]
 */

var topKFrequent = function (nums, k) {
  let res = [];
  let map = {};
  // create the bucket
  let bucket = Array.from({ length: nums.length + 1 }, () => []);

  // sets the number of times each number occurs
  for (let i = 0; i < nums.length; i++) {
    nums[i] in map ? (map[nums[i]] = map[nums[i]] + 1) : (map[nums[i]] = 1);
  }

  //  sets the number of frequency to the index
  // for(let i = 0; i < bucket.length; i++){
  //     if(i in map){
  //         console.log(i)
  //        bucket[i].push(map[i])
  //     }
  // }
  for (const c in map) {
    console.log(c);
    bucket[map[c]].push(c);
  }
  console.log(map);
  console.log(bucket);
  // pushing to res array
  for (let i = bucket.length - 1; i >= 0; i--) {
    if (bucket[i].length > 0) {
      bucket[i].forEach((el) => res.push(el));
      if (k == res.length) {
        return res;
      }
    }
  }
};
