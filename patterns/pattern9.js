/**

Draw this pattern

					*
				 ***
				*****
			 *******
			*********
			*********
			*******
				*****
				***
				 *

			i - rows
			j - spaces
			k - stars

 */

const pattern = '*';

function upperPyramidPattern(rows) {
	for (let i = 1; i <= rows; i++) {
		let space = '';
		let star = '';

		// Add spaces
		for (let j = 1; j <= rows - i; j++) {
			space += ' ';
		}

		// Add stars
		for (let k = 1; k <= 2 * i - 1; k++) {
			star += '*';
		}

		console.log(space + star);
	}
}

function lowerPyramidPattern(rows) {
	for (let i = rows; i >= 0; i--) {
		let space = '';
		let star = '';

		// Add spaces
		for (let j = 1; j <= rows - i; j++) {
			space += ' ';
		}

		// Add stars
		for (let k = 1; k <= 2 * i - 1; k++) {
			star += '*';
		}

		console.log(space + star);
	}
}

function printPattern(rows) {
	upperPyramidPattern(rows);
	lowerPyramidPattern(rows);
}

printPattern(5);
