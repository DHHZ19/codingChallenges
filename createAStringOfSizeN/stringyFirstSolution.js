 function stringy(size) {
     string = "1";
     for (var i = 0; i < size-1; i++) {
       if(i % 2 == 0)
         string += "0";
       else
         string += "1";
     }
     return string;
  }
  function stringy(size) {
    var str='';
    for( var i=1; i<=size; i++ ) {
    console.log('index: ' + i)
      str+=i%2;
      console.log('index modulo: ' + i%2)
      console.log('string: ' + str)
    }

    return str;
    
  }
  stringy(3) 
