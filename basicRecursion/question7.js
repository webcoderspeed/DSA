/**
  Pallindrome array
 */

// function isPallindrome({
// 	initialString,
// 	initialList = [],
// 	reversedArray = [],
// }) {
// 	if (!initialList.length) {
// 		const reversedString = reversedArray.join('');

// 		return initialString === reversedString
// 			? `Yes - [ ${initialString} ] is a pallindrome string`
// 			: `No - [ ${initialString} ] is not a pallindrome string`;
// 	}

// 	reversedArray.push(initialList.pop());

// 	return isPallindrome({
// 		initialString,
// 		initialList,
// 		reversedArray,
// 	});
// }

// const initialString = 'Hello';

// console.log(
// 	isPallindrome({
// 		initialString,
// 		initialList: initialString.split(''),
// 	}),
// );

/*
	Check if the given String is Palindrome or not
*/

const isPallindrome = (inputString = '') => {
	const checkPallindrome = (leftIndex, rightIndex) => {
		if (leftIndex >= rightIndex) return true;

		if (inputString[leftIndex] !== inputString[rightIndex]) return false;

		return checkPallindrome(leftIndex + 1, rightIndex - 1);
	};

	return checkPallindrome(0, inputString.length - 1)
		? `Yes - [ ${inputString} ] is a pallindrome string`
		: `No - [ ${inputString} ] is not a pallindrome string`;
};

console.log(isPallindrome('ABCBA'));
