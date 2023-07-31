/**

  Print name 1 times using N

 */

function print1ToN(start = 1, end) {
	if (start === end+1) return;
	console.log(`${start} - ${end}`);
	start++;
	print1ToN(start, end);
}

print1ToN(1, 5);
