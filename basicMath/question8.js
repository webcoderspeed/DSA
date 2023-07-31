/**

  Example 1:
  Input: N = 3
  Output: Prime
  Explanation: 3 is a prime number
 */

const isPrime = (num) => {
	console.time('Start');

	for (let i = 2; i < num; i++) {
		if (num % i === 0) {
			console.timeEnd('Start');
			return `${num} is not prime`;
		}
	}

	console.timeEnd('Start');

	return `${num} is a prime`;
};

// const isPrime = (num) => {
// 	console.time('Start');
// 	if (num <= 1) {
// 		console.timeEnd('Start');
// 		return `${num} is not prime`;
// 	}

// 	if (num === 2) {
// 		console.timeEnd('Start');
// 		return `${num} is a prime`;
// 	}

// 	if (num % 2 === 0) {
// 		console.timeEnd('Start');
// 		return `${num} is not prime`;
// 	}

// 	// Start checking for divisors from 3 up to the square root of num
// 	for (let i = 3; i * i <= num; i += 2) {
// 		if (num % i === 0) {
// 			console.timeEnd('Start');
// 			return `${num} is not prime`;
// 		}
// 	}

// 	console.timeEnd('Start');
// 	return `${num} is a prime`;
// };

console.log(isPrime(999983));
