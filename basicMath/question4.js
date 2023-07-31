/**

Example 1:
Input: N = 123
Output: Not Palindrome Number
Explanation: 123 read backwards is 321.Since these are two different numbers 123 is not a palindrome.

 */

const isPallindrome = (text) =>
	(text + '')?.split('')?.reverse()?.join('') !== text + '' ? 'No' : 'Yes';

console.log(isPallindrome(121));
