// from: leetcode.com/problems/valid-anagram/description/
// Valid Anagaram
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false
    const sMap = {}
    const tMap = {}

    for(let i = 0; i < s.length; i++){
        if(s[i] in sMap){
            sMap[s[i]]++
        } else {
            sMap[s[i]] = 1
        }
        if(t[i] in tMap){
            tMap[t[i]]++
        } else {
            tMap[t[i]] = 1
        }
    }

    for (const char in sMap){
        if(!(char in tMap)){
            return false
        }

        if(sMap[char] !== tMap[char]){
            return false
        }
    }

    return true
};
