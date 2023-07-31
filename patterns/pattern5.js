/**

Draw this pattern

  *****
  ****
  ***
  **
  *


  i+5
  i+4

 */
const pattern = '*';

function printPattern(rows) {
	for (let i = 0; i <=rows; i++) {
		let row = '';
		for (let j = rows; j>i ; j--) {
			row += pattern;
		}
    console.log(row);
	}
}

printPattern(5);
