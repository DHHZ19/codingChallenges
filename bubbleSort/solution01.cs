using System;

public class Program {
  public static int[] BubbleSort(int[] array) {
      for(var i = 0; i < array.Length; i++){
          for( var j = 0; j < array.Length - 1 - i; j++){
              if(array[j] > array[j + 1]){
                  var temp = array[j];
                  array[j] = array[j + 1];
                  array[j + 1] = temp;
              }
          }
      }
    return array;
  }
}

