// from: https://leetcode.com/problems/longest-substring-without-repeating-characters/solutions/5111376/video-3-ways-to-solve-this-question-sliding-window-set-hashing-and-the-last-position/?envType=problem-list-v2&envId=hash-table
// sliding window & set approach to solving problem
var lengthOfLongestSubstring = function(s) {
    let charSet = new Set()
    let left = 0
    let maxLength = 0

    for(let right = 0; right < s.length; right++){
        while(charSet.has(s[right])){
            charSet.delete(s[left])
            left++
        }

        charSet.add(s[right])
        maxLength = Math.max(maxLength, right - left + 1)
    }

    return maxLength
};
