// hash map solution
var twoSum = function(nums, target){
    const hash = {}
    let res = []
    for(let i = 0; i < nums.length; i++){
        if(target - nums[i] in hash){
            res.push(i)
            res.push(hash[target - nums[i]])
        }else{
            hash[nums[i]] = i
        }
    }
    return res
}