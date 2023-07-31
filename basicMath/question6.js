/**

Example 1:
Input:153 
Output: Yes, it is an Armstrong Number
Explanation: 1^3 + 5^3 + 3^3 = 153
 */

const isArmstrong = (num1) =>
	String(
		String(num1)
			?.split('')
			?.reduce(
				(acc, curr) => Number(acc) + Number(curr) ** String(num1)?.length,
				0,
			),
	) === String(num1)
		? `Yes ${num1}, it is an Armstrong Number`
		: `No ${num1}, it is not an Armstrong Number`;

console.log(isArmstrong(407));
