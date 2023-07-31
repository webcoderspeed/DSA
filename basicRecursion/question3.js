/**

  Print name N times using 1

 */

function print1ToN(start, end=1) {
	if (end === start + 1) return;
	console.log(`${start} - ${end}`);
	end++;
	print1ToN(start, end);
}

print1ToN(5, 1);
