/**

Insertion Sort Algorithm
  
Problem Statement: Given an array of N integers, write a program to implement the Insertion sorting algorithm.

Example 1:
Input: N = 6, array[] = {13,46,24,52,20,9}
Output: 9,13,20,24,46,52
Explanation: 
After sorting the array is: 9,13,20,24,46,52


Example 2:
Input: N=5, array[] = {5,4,3,2,1}
Output: 1,2,3,4,5
Explanation: After sorting the array is: 1,2,3,4,5

```
Insertion Sort Algorithm:

The Insertion Sort algorithm is a simple sorting algorithm that builds the final sorted array one element at a time. It iterates through the input array, considering each element in turn and inserting it into its correct position in the sorted part of the array. The algorithm is called "Insertion Sort" because it sorts elements by inserting them into their correct positions.

Algorithm Steps:

Start with the first element as the sorted part of the array.
Consider the next element and compare it with the elements in the sorted part of the array, moving from right to left.
Shift the elements in the sorted part of the array that are larger than the current element to the right.
Insert the current element into its correct position in the sorted part of the array.
Repeat steps 2 to 4 for all the remaining elements in the unsorted part of the array.
When all elements are processed, the array will be fully sorted.
Example:

Consider an unsorted array: [64, 34, 25, 12, 22, 11].

Start with the first element 64 as the sorted part of the array: [64].
Consider the next element 34 and compare it with 64. Since 34 is smaller, shift 64 to the right and insert 34 before it: [34, 64].
Consider the next element 25 and compare it with 64 and 34. Since 25 is smaller, shift 64 and 34 to the right and insert 25 before them: [25, 34, 64].
Continue this process for the rest of the elements, and the final sorted array will be: [11, 12, 22, 25, 34, 64].
Time Complexity:

The time complexity of the Insertion Sort algorithm is O(n^2) in the worst and average cases. In each iteration, we compare the current element with all the elements in the sorted part of the array, which involves a linear search. Since there are n iterations (n elements to sort), the overall time complexity is O(n^2).

Space Complexity:

The space complexity of the Insertion Sort algorithm is O(1) because it sorts the elements in place and does not require any additional memory proportional to the input array size. The sorting is done by shifting and inserting elements within the given array itself.


```
 */

function sortUsingInsertionSort (arr =[ ]) {


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

console.log(sortUsingInsertionSort(
  [...unsortedArray]
))