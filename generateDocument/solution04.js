function generateDocument(chars, doc){
    let map = {}

    for(let char of chars){
        if(!(char in chars){
            map[char] = 1
        }else {
            map[char]++
        }
    }
    for (let char of doc){
        if(!(char in map) || map[char] === 0) return false
        char[map]--
    }

    return false
}
