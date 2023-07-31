/**

Draw this pattern

  1
  22
  333
  4444
  55555

  i
  i+1, i+1

 */

function printPattern(rows) {
	for (let i = 1; i <= rows; i++) {
		let row = '';
		for (let j = 1; j <= i; j++) {
			row += i;
		}
		console.log(row);
	}
}

printPattern(5);
