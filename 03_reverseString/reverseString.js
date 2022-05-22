const reverseString = function(str) {
  let newStr = '';
  for (i = str.length - 1 ; i >= 0 ; i--){
    newStr += str[i]
  }
  return newStr;
};

//best:
//return string.split('').reverse().join('');

// Do not edit below this line
module.exports = reverseString;
