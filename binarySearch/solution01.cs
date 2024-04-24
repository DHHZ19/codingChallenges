public class Program {
  public static int BinarySearch(int[] array, int target) {
    var l = 0;
    var r = array.Length - 1;
    while(l <= r){
        int mid = (l + r) / 2;
        if(array[mid] == target) {
            return mid;
        } else if (array[mid] > target){
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    return -1;
  }
}

