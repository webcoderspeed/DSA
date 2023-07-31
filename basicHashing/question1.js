/**

  Count frequency of each element in the array
 @example Problem statement: Given an array, we have found the number of occurrences of each element in the array.

  Example 1:
  Input: arr[] = {10,5,10,15,10,5};
  Output: 10  3
          5  2
          15  1
  Explanation:  10 occurs 3 times in the array
                5 occurs 2 times in the array
                15 occurs 1 time in the array

  Example2: 
  Input: arr[] = {2,2,3,4,4,2};
  Output: 2  3
          3  1
          4  2
  Explanation: 2 occurs 3 times in the array
               3 occurs 1 time in the array
               4 occurs 2 time in the array

 */

function countFrequencyOfEachElementInTheArray(arr = []) {
	return arr.reduce(
		(acc, curr) => ((acc[curr] = (acc[curr] || 0) + 1), acc),
		{},
	);
}

const arr1 = [10, 5, 10, 15, 10, 5];
console.log('Example 1:', countFrequencyOfEachElementInTheArray(arr1));

const arr2 = [2, 2, 3, 4, 4, 2];
console.log('Example 2:', countFrequencyOfEachElementInTheArray(arr2));
