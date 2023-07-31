/**

  Print name N times using N

 */

function printNameNTimes(n, name) {
	if (n !== 0) {
		console.log(`Printed ${n} - ${name}`);
		n--;
		printNameNTimes(n, name);
	}
}

printNameNTimes(5, 'Speed');
