/* P: and integer year
   R: true if its a leap year FALSE if its not
   E: isLeapYear(12) // true  isLeapYear(2123) // false
   P: 
   divide the number by the first condition 100
      IF dividing by 400 yields a integer then return false
   THEN divide by 400
        IF dividing by 100 yields a integer then return false
   THEN divide by 4
        IF Divides by 4 then return true
        */
        function isLeapYear(year) {
            let ans
            if(year % 400 == 0){
              ans = true
            }else if( year % 100 == 0){
              ans =  false
          }else if (year % 4 == 0){
            ans =  true
          }else{
            ans = false
          }
          return ans
          }