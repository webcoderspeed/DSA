/**

  Bubble Sort Algorithm

  Problem Statement: Given an array of N integers, write a program to implement the Bubble Sorting algorithm.

  Example 1:
  Input: N = 6, array[] = {13,46,24,52,20,9}
  Output: 9,13,20,24,46,52
  Explanation: After sorting we get 9,13,20,24,46,52


  Input: N = 5, array[] = {5,4,3,2,1}
  Output: 1,2,3,4,5
  Explanation: After sorting we get 1,2,3,4,5

  ```
Algorithm: Bubble Sort

Input: An array of elements (arr) to be sorted.

Output: The sorted array in ascending order.

Steps:

Start with the first pass (i = 0) through the array.
For each pass, compare adjacent elements of the array from the beginning.
If the current element is greater than the next element, swap them to bring the smaller element towards the left.
Continue this comparison and swapping process until the end of the array for the current pass.
After the first pass, the largest element will "bubble" to the end of the array.
For the next pass (i = 1), repeat the comparison and swapping process, excluding the last (largest) element since it is already in its correct position.
Continue this process for subsequent passes (i = 2, i = 3, ...), each time excluding one more element from the end as they are already sorted.
The algorithm terminates when all the elements are sorted, and no more swaps are needed.
Example:
Let's consider an unsorted array [64, 34, 25, 12, 22, 11] as an example.

Step 1 (i = 0): [64, 34, 25, 12, 22, 11] (Compare 64 with 34, 34 with 25, 25 with 12, 12 with 22, 22 with 11, and swap where necessary)
Step 2 (i = 1): [34, 25, 12, 22, 11, 64] (Compare 34 with 25, 25 with 12, 12 with 22, 22 with 11, and swap where necessary)
Step 3 (i = 2): [25, 12, 22, 11, 34, 64] (Compare 25 with 12, 12 with 22, 22 with 11, and swap where necessary)
Step 4 (i = 3): [12, 22, 11, 25, 34, 64] (Compare 12 with 22, 22 with 11, and swap where necessary)
Step 5 (i = 4): [11, 12, 22, 25, 34, 64] (Compare 11 with 12, and swap where necessary)

The array is now sorted in ascending order: [11, 12, 22, 25, 34, 64].

Time Complexity:
Bubble Sort has a time complexity of O(n^2) in the worst and average cases. This is because, in the worst-case scenario, the algorithm will perform n*(n-1)/2 comparisons and swaps. Even in the best-case scenario, where the array is already sorted, the algorithm will still need to perform n*(n-1)/2 comparisons (though no swaps) to determine that the array is sorted.

Space Complexity:
Bubble Sort has a space complexity of O(1) because it sorts the elements in place and does not require any additional memory proportional to the input array size. The sorting is done by swapping elements within the given array itself.
  ```

 */



function sortArrayUsingBubbleSort(arr = []) {

  console.log({arr})
  const length = arr.length

  // control the number of passes
  for (let pass = 0; pass < length-1; pass++) {
    // compare adjacent elements and swap them if neccessary
    for (let index = 0; index < length - pass -1; index++) {
      const currentElement = arr[index];
      const nextElement = arr[index + 1]

      if (currentElement > nextElement) {
        arr[index] = nextElement;
        arr[index + 1] = currentElement;
      }
    }
  }
  return arr
}


function generateUnsortedArray(length, min, max) {
  const arr = [];
  for (let i = 0; i < length; i++) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    arr.push(randomNumber);
  }
  return arr;
}

const unsortedArray = generateUnsortedArray(10, 1, 10);

console.log(sortArrayUsingBubbleSort(
  [...unsortedArray]
))