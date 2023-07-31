/**

  Write get factorial function

 */

const getFactorial = (naturalNumber) => naturalNumber === 0 ? 1 : naturalNumber * getFactorial(naturalNumber - 1);

console.log(getFactorial(6));
