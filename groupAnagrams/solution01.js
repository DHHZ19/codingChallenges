// leetcode.com/problems/group-anagrams/description/
// yay first leetocde medium
// Group Anagrams
var groupAnagrams = function(strs) {
    let s = strs.map(x => x.split("").sort().join(""))
    let wordMap = {}

    for(let i = 0; i < strs.length; i++){
        if(strs[i].split("").toSorted().join("") === s[i] && !(s[i] in wordMap)){
            wordMap[s[i]] = [strs[i]]
        } else {
            wordMap[s[i]].push(strs[i])
        }
    }
    let res = []
    for(const word in wordMap){
       res.push(wordMap[word]) 
    }

    return res

};
