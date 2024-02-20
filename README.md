# JavaScript-Q27

Write a function for searching JavaScript arrays with binary searches.

A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.

// Define a function named array_binary Search that performs binary search on a sorted array
function array_binarySearch(narray, delement) {
   // Calculate the middle position of the array
   var mposition = Math.floor(narray.length / 2);

   // Check if the middle element is equal to the desired element
   if (narray[mposition] === delement){
      return mposition;
   }
   // Check if the array has only one element and it is not equal to the desired element
   else if (narray.length === 1) 
   {
      // If true, return null as the element is not found
      return null;
   }
   // Check if the middle element is less than the desired element
   else if (narray[mposition] < delement) {
      // Create a new array containing elements to the right of the middle position
      var arr = narray.slice(mposition + 1);
      
      // Recursively call array_binarySearch on the new array
      var res = array_binarySearch(arr, delement);
      
      // Check if the result is null
      if (res === null)
      {
         // If true, return null
         return null;
      }
      else {
         // If false, return the adjusted index by adding mposition + 1 to the result
         return mposition + 1 + res;
      }
   }
   // If the middle element is greater than or equal to the desired element
   else {
      // Create a new array containing elements to the left of the middle position
      var arr1 = narray.slice(0, mposition);
      
      // Recursively call array_binarySearch on the new array
      return array_binarySearch(arr1, delement);
   }
}

// Create an example sorted array
var myArray = [1, 2, 3, 5, 6, 7, 10, 11, 14, 15, 17, 19, 20, 22, 23];

// Log the result of calling array_binarySearch with the input array and desired element to the console
console.log(array_binarySearch(myArray, 6)); 
 
