/**

Draw this pattern

  12345
  1234
  123
  12
  1  


  i+5
  i+4

 */

function printPattern(rows) {
	for (let i = 0; i <= rows; i++) {
    let pattern = 1;
		let row = '';
		for (let j = rows; j > i; j--) {
			row += pattern;
      ++pattern
		}
		console.log(row);
	}
}

printPattern(5);
