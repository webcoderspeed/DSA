/**

Theatre Square in the capital city of Berland has a rectangular shape with the size n × m meters. On the occasion of the city's anniversary, a decision was taken to pave the Square with square granite flagstones. Each flagstone is of the size a × a.

What is the least number of flagstones needed to pave the Square? It's allowed to cover the surface larger than the Theatre Square, but the Square has to be covered. It's not allowed to break the flagstones. The sides of flagstones should be parallel to the sides of the Square.

Input
The input contains three positive integer numbers in the first line: n,  m and a (1 ≤  n, m, a ≤ 109).

Output
Write the needed number of flagstones.

input
  6 6 4

output
4
 */

function calculateFlagstonesNeeded(length, width, flagstoneSize) {
  const horizontalFlagstones = Math.ceil(length / flagstoneSize);
  const verticalFlagstones = Math.ceil(width / flagstoneSize);

  return horizontalFlagstones * verticalFlagstones;
}

const lengthOfTheatreSquare = 60;
const widthOfTheatreSquare = 60;
const sizeOfFlagstone = 4;

const result = calculateFlagstonesNeeded(lengthOfTheatreSquare, widthOfTheatreSquare, sizeOfFlagstone);
console.log(result); 
