// PREP

// P: number, [(), ()] array of functions

// R: number

// E: chain(3, [addsOne(), subOne()]) // 3

//P: 

function chain(input, fs) {
    let result = input
    // let start = fs[0](input)
    for(let i = 0; i < fs.length; i++){
     result =  fs[i](result)
    }
      return result
    }