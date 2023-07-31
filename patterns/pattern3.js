/**

Draw this pattern

  1
  12
  123
  1234
  12345

  i
  i, i+1

 */


function printPattern(rows, columns) {
	for (let i = 0; i <= rows; i++) {
    let pattern = 1;
    let row = '' 

		for (let j = 0; j < columns; j++) {
			row += pattern;
			pattern++;
			console.log(row);
		};
	}
      
}

printPattern(5, 7);
