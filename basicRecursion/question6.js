/**

Reverse the array using recursion

Example 1:
Input: N = 5, arr[] = {5,4,3,2,1}
Output: {1,2,3,4,5}
Explanation: Since the order of elements gets reversed the first element will occupy the fifth position, the second element occupies the fourth position and so on.

Example 2:
Input: N=6 arr[] = {10,20,30,40}
Output: {40,30,20,10}
Explanation: Since the order of elements gets reversed the first element will occupy the fifth position, the second element occupies the fourth position and so on.

 */

// function reverseArray({ arr = [], reversedArray = [] }) {
// 	if (arr.length === reverseArray.length - 1) return reversedArray;

// 	reversedArray.push(arr.pop());

// 	return reverseArray({ arr, reversedArray });
// }

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(
// 	reverseArray({
// 		arr,
// 	}),
// );

const reverseArray = (inputArr = []) => {
	const reverseHelper = (leftIndex, rightIndex) => {
		if (leftIndex >= rightIndex) return inputArr;

		const temp = inputArr[leftIndex];
		inputArr[leftIndex] = inputArr[rightIndex];
		inputArr[rightIndex] = temp;

		return reverseHelper(leftIndex + 1, rightIndex - 1);
	};

	return reverseHelper(0, inputArr.length - 1);
};

console.log(reverseArray([1, 2, 3, 4, 5, 10, 25, 75, 34]));
