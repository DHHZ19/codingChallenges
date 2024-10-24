// https://leetcode.com/problems/jewels-and-stones/description/

var numJewelsInStones = function(jewels, stones) {
    let jls = new Set(jewels)
    let ans = 0
    stones.split("").forEach(x => {
        if(jls.has(x)){
            ans++
        }
    })
    return ans
};
