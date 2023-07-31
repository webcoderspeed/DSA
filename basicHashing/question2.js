/**

Find the highest/lowest frequency element
Problem Statement: Given an array of size N. Find the highest and lowest frequency element.


  Example 1:
Input: array[] = {10,5,10,15,10,5};
Output: 10 15
Explanation: The frequency of 10 is 3, i.e. the highest and the frequency of 15 is 1 i.e. the lowest.

Example 2:

Input: array[] = {2,2,3,4,4,2};
Output: 2 3
Explanation: The frequency of 2 is 3, i.e. the highest and the frequency of 3 is 1 i.e. the lowest.

 */

function countFrequencyOfEachElementInTheArray(arr = []) {
	return arr.reduce(
		(acc, curr) => ((acc[curr] = (acc[curr] || 0) + 1), acc),
		{},
	);
}

function findTheHighestAndLowestFrequencyElement(arr = []) {
	const frequency = countFrequencyOfEachElementInTheArray(arr) ?? {};
	let maxFrequency = Number.MIN_VALUE,
		minFrequency = Number.MAX_VALUE;

	let highestFrequency = null,
		lowestFrequency = null;

	for (const [key, value] of Object.entries(frequency)) {
		if (value >= maxFrequency) {
			maxFrequency = value;
			highestFrequency = key;
		}

		if (value <= minFrequency) {
			minFrequency = value;
			lowestFrequency = key;
		}
	}

	return {
		highestFrequency: Number(highestFrequency),
		lowestFrequency: Number(lowestFrequency),
	};
}

const arr1 = [10, 5, 10, 15, 10, 5];
console.log('Example 1:', findTheHighestAndLowestFrequencyElement(arr1));

const arr2 = [2, 2, 3, 4, 4, 2];
console.log('Example 2:', findTheHighestAndLowestFrequencyElement(arr2));
