// from : https://leetcode.com/problems/contains-duplicate/
var containsDuplicate = function (nums) {

    const numSet = new Set(nums)

    return numSet.size !== nums.length ? true : false 

}
