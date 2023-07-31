/**

Example 1:
Input: num1 = 4, num2 = 8
Output: 4
Explanation: Since 4 is the greatest number which divides both num1 and num2.

 */

const findGCD = ({ num1, num2 }) => {
	const min = Math.min(num1, num2);

	for (let gcd = min; gcd >= 1; gcd--) {
		if (num1 % gcd === 0 && num2 % gcd === 0) {
			return gcd;
		}
	}

	return 1;
};

console.log(findGCD({ num1: 256, num2: 108 }));
