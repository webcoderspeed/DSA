/**

Draw this pattern

  ********
  ********
  ********
  ********
  ********
  ********

  no. of rows = no. of columns
  i === j

 */

const pattern = '*';

function printPattern(rows, columns) {
	for (let i = 0; i <= rows; i++) {
		let row = '';
		for (let j = 0; j <= columns; j++) {
			row += pattern;
		}
		console.log(row);
	}
}

printPattern(5,10)
