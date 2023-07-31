/**

Example 1:
Input: n = 36
Output: 1 2 3 4 6 9 12 18 36
Explanation: All the divisors of 36 are printed.

 */

const getAllDivisors = (num1) => {
	const divisors = [];
	const perfectSquares = [];

	console.time('Start');

	// Iterate from 1 to the square root of num1
	for (let i = 1; i * i <= num1; i++) {
		if (num1 % i === 0) {
			divisors.push(i);

			// If num1/i is a different divisor, add it as well (avoid duplication for perfect squares)
			if (i !== num1 / i) {
				divisors.push(num1 / i);
				perfectSquares.push({ square: num1 / i, i });
			}
		}
	}

	console.timeEnd('Start');
	return { divisors:divisors.length, perfectSquares:perfectSquares.length };
};

console.log(getAllDivisors(10000000000));
