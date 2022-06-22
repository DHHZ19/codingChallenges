function getTheVowels(word) {
    let st = "aeiou", i = 0, n = 0
    for(let x of word){
      if(x != st[i]) continue
      else{
        i = (i + 1) % st.length
        n++
      }
    }
    return n
  }