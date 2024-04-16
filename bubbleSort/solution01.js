for (let i = 0; i < nums.length; i++) {
  for (let j = 0; j < nums.length; j++) {
    if (!nums[j] > nums[i]) {
      let temp = nums[j];
      nums[i] = nums[j];
      nums[j] = temp;
    }
  }
}
