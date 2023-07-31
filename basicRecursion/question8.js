/**
   Fibancaci series
 */

const getFibonacci = (n, cache = {}) => {
	if (!cache[n]) {
		return (cache[n] =
			n > 1 ? getFibonacci(n - 1, cache) + getFibonacci(n - 2, cache) : n);
	}

	return cache[n];
};

console.log(getFibonacci(10));
