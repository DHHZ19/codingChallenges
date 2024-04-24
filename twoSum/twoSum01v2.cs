using System;
using System.Collections.Generic;

public class Program {
  public static int[] TwoNumberSum(int[] array, int targetSum) {
      var numberToLookFor = 0;

      HashSet<int> hash = new HashSet<int>();

      for(var i = 0; i < array.Length; i++){
          int value = 0;
          numberToLookFor = targetSum - array[i];
          
          if( hash.TryGetValue(numberToLookFor, out value) ){
              int[] ans = { numberToLookFor , array[i] };
              return ans;
          } else {
              hash.Add(array[i]);
          }
      }

    return new int[0];
  }
}

