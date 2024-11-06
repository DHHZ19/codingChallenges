// better solution
var groupAnagrams = function(strs) {
    let ans = {}

    for(const s of strs){
        key = s.split("").sort().join("")
        if(!ans[key]){
            ans[key] = []
        }

        ans[key].push(s)
    }

    return Object.values(ans)
};
