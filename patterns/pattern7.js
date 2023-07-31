/**

Draw this pattern

         *
        ***
       ****
      ******

      i
      i+3

			i - rows
			j - spaces
			k - stars

 */

const pattern = '*';

function printPattern(rows) {
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

function printPattern(rows) {
	for (let i = 1; i <= rows; i++) {
		const spaces = ' '.repeat(rows - i);
		const stars = '*'.repeat(2 * i - 1);


		console.log(spaces + stars);
	}
}

printPattern(3);
