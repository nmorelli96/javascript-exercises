const sumAll = function (a, b) {
  let sum = 0;
  if ((a < 0 || b < 0) || (typeof a != 'number' || typeof b != 'number')){
    return 'ERROR';
  }
  else if (a < b) {
    for (i = a; i <= b; i++) {
      sum += i;
    }
    return sum
  }
  else if (a > b) {
    for (i = b; i <= a; i++) {
      sum += i;
    }
    return sum
  }
}
console.log(sumAll(1, 4))
// Do not edit below this line
module.exports = sumAll;
