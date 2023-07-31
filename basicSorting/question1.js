/**

Selection Sort Algorithm
  
Problem Statement: Given an array of N integers, write a program to implement the Selection sorting algorithm.

Example 1:
Input: N = 6, array[] = {13,46,24,52,20,9}
Output: 9,13,20,24,46,52
Explanation: After sorting the array is: 9, 13, 20, 24, 46, 52

Example 2:
Input: N=5, array[] = {5,4,3,2,1}
Output: 1,2,3,4,5
Explanation: After sorting the array is: 1, 2, 3, 4, 5




```
Algorithm: Selection Sort

Input: An array of elements (arr) to be sorted.

Output: The sorted array in ascending order.

Steps:

Start with the first element of the array (at index 0) and consider it as the "minimum" element for now.

Traverse through the array to find the minimum element in the remaining unsorted part.

Compare the current element with the assumed minimum element. If a smaller element is found, update the "minimum" element to the index of the smaller element.

After completing the traversal, swap the "minimum" element with the first element of the unsorted part.

Now, consider the next element (at index 1) as the "minimum" element for the remaining unsorted part and repeat steps 2 to 4.

Continue this process until the entire array is sorted.

Return the sorted array.

Note: The "unsorted part" of the array will decrease in size with each iteration, as the sorted elements are moved to the left side of the array.

Example:
Let's consider an array [64, 34, 25, 12, 22, 11] as an example.

Step 1: [64, 34, 25, 12, 22, 11] (Assuming the first element is the minimum)
Step 2: [64, 34, 25, 12, 22, 11] (Found 34 as the new minimum)
Step 3: [11, 34, 25, 12, 22, 64] (Swap the minimum element with the first element of the unsorted part)
Step 4: [11, 12, 25, 34, 22, 64] (Found 12 as the new minimum)
Step 5: [11, 12, 22, 34, 25, 64] (Found 22 as the new minimum)
Step 6: [11, 12, 22, 25, 34, 64] (Found 25 as the new minimum)
Step 7: [11, 12, 22, 25, 34, 64] (Found 34 as the new minimum)

The array is now sorted in ascending order: [11, 12, 22, 25, 34, 64].
```

 */

function sortArrayUsingSelectionSort(arr = []) {
	for (let currentIndex = 0; currentIndex < arr.length; currentIndex++) {
		let minIndex = currentIndex;

		for (
			let nextIndex = currentIndex + 1;
			nextIndex < arr.length;
			nextIndex++
		) {
			if (arr[minIndex] > arr[nextIndex]) {
				minIndex = nextIndex;
			}
		}

		//  Swap the minimum element with the current element if they are different
		if (minIndex !== currentIndex) {
			[arr[currentIndex], arr[minIndex]] = [arr[minIndex], arr[currentIndex]];
		}
	}

	return arr;
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


console.log({
	unsortedArray,
	sortedArray: sortArrayUsingSelectionSort([...unsortedArray]),
});
