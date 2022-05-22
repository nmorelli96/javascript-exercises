const removeFromArray = function (arr, ...numbers) {
  let newArr = [];
  for (const num of arr) {
    if (numbers.includes(num)) {
      continue;
    }
    else newArr.push(num);
  }
  return newArr;
}

// Do not edit below this line
module.exports = removeFromArray;
