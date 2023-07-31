/**

Draw this pattern

				*
				**
				***
				****
				*****
				****
				***
				*

			i - rows

 */

const pattern = '*';

function upperLeftPyramidPattern(rows) {
	for (let i = 0; i < rows; i++) {
		let row = '';
		for (let j = 0; j < i; j++) {
			row += pattern;
		}
    console.log(row)
	}
}

function lowerRightPyramidPattern(rows) {
	for (let i = 0; i < rows; i++) {
		let row = '';
		for (let j = rows; j > i; j--) {
			row += pattern;
		}
		console.log(row);
	}
}

function printPattern(rows) {
	upperLeftPyramidPattern(rows);
	lowerRightPyramidPattern(rows);
}

printPattern(5);
