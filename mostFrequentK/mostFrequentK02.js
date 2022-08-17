let map = {};
let res = [];
const nums = [1, 1, 1, 2, 2, 3];
var topKFrequent = function (nums, k) {
  let map = {};
  let res = [];
  let bucket = Array.from({ length: nums.length + 1 }, () => []); // to create unique arrays

  // storing frequency of numbers in a map
  for (const n of nums) {
    map[n] = n in map ? 1 + map[n] : 1;
  }
  console.log(map);
  // Populate the bucket with numbers in frequency
  // as the index of the bucket
  for (const c in map) {
    bucket[map[c]].push(c);
  }
  console.log(bucket);
  console.log(bucket[2]);

  for (let i = bucket.length - 1; i >= 0; i--) {
    if (bucket[i].length > 0) {
      bucket[i].forEach((elem) => res.push(elem));
      if (k == res.length) {
        return res;
      }
    }
  }
};
topKFrequent(nums, 2);
