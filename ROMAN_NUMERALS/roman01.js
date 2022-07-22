var romanToInt = function(s) {
const ROMAN_NUMERALS = {
        'I' : 1,
        'V' : 5,
        'X': 10,
        'L' : 50,
        'C' : 100,
        'D' : 500,
        'M' : 1000    
}   
    let sArray = s.split('')
    let result = 0;
        for(let i = 0; i < s.length; i++){
            if(ROMAN_NUMERALS[sArray[i]] < ROMAN_NUMERALS[sArray[i+1]]){
                result -= ROMAN_NUMERALS[sArray[i]]
            }else if(sArray[i] in ROMAN_NUMERALS){
                result += ROMAN_NUMERALS[sArray[i]]
            }
        }
        return result    
    };