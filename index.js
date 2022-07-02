
// eslint-disable-next-line func-style
function sum(fromN, toN) {
// Sum all the values from fromN up to toN

  if (fromN === toN) {
    return toN;

  } else {
    return sum(fromN, toN - 1) + toN;
  }


}
//console.log(sum(1,4));


module.exports = sum;
