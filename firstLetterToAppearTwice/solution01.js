// leetcode.com/problems/first-letter-to-appear-twice/description/
// First letter to appear twice
var repeatedCharacter = function(s) {
   let charsMap = {} 
   for(const char of s){
        if(char in charsMap){
            return char
        } else {
            charsMap[char] = true
        }
   }
}
