/**

  Print sum of first N natural numbers

 */

function sumOfNNaturalNumber(naturalNumber, sum = 0) {
	if (naturalNumber === 0) return sum;

	if (naturalNumber > 0) {
		sum = naturalNumber + sum;
		naturalNumber--;
		return sumOfNNaturalNumber(naturalNumber, sum);
	}
}

console.log(sumOfNNaturalNumber(4));
