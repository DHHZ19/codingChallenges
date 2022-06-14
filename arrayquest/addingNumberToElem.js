var number=function(array){
  
    let newArray =  array.map((x,i)=>{
       return x = `${i+1}: ${x}`
     })
    return newArray
   }