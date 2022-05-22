const palindromes = function (str) {
  let chainedLetters = str.match(/\w/gi).join('').toLowerCase().split('');
  if (chainedLetters.join('') === chainedLetters.reverse().join('')){
  return true
  } 
  else{
  return false
  }
}

/*useless function that works ->

const palindromes = function (str) {
let chainedLetters = str.match(/\w/gi).join('').toLowerCase();
let sliceFirstHalf = function(){
  if(chainedLetters.length % 2 == 0){
    return chainedLetters.slice(0, (chainedLetters.length / 2))
  }
  else{
    return chainedLetters.slice(0, (chainedLetters.length / 2) +1)
  }
}
let reverseLastHalf = reverseString(chainedLetters.slice(chainedLetters.length / 2))


if(sliceFirstHalf() === reverseLastHalf) {
return true
}
else return false


function reverseString(str) {
  let newStr = "";
  for (let i = (str.length -1); i >= 0; i--){
  newStr += str[i];
  }
  return newStr;
}
};
palindromes('Animal loots foliated detail of stool lamina.')
*/

// Do not edit below this line
module.exports = palindromes;
