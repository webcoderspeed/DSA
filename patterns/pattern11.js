/**

Draw this pattern

    1
    0 1
    1 0 1
    0 1 0 1
    1 0 1 0 1 

	
 */

const one = '1';
const zero = '0';

function printPattern(rows) {
	for (let i = 0; i <= rows; i++) {
		let row = '';
		for (let j = 0; j <= i; j++) {
			if ((i + j) % 2 === 0) {
				row += one;
			} else {
				row += zero;
			}
		}
		console.log(row);
	}
}

printPattern(5);
