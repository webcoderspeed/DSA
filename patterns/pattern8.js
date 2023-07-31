/**

Draw this pattern

       *******
        *****
         ***
          *



			i - rows
			j - spaces
			k - stars

 */

const pattern = '*';

function printPattern(rows) {
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

printPattern(5);
