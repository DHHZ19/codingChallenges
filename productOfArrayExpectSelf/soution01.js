var productExceptSelf = function (nums) {
  // set result array of length nums length
  let res = new Array(nums.length);
  let prefix = 1;
  for (let i = 0; i < nums.length; i++) {
    // res at index i will equal the prefix
    res[i] = prefix;
    // prefix is multipled by the index i of nums array
    prefix *= nums[i];
  }
  // ^ the process above allows for us the get the multiplaction of all       the number to the left of self[i]
  let postfix = 1;
  for (let j = nums.length - 1; j >= 0; j--) {
    // sets the result multplied by the numbers ahead
    res[j] *= postfix;
    // set the postifx equal to the current index i of nums array
    postfix *= nums[j];
  }
  // result will now have the multiplaction of left and right side            exepct self
  return res;
};
