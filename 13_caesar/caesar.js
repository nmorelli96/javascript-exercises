const caesar = function (str, shift) {
  let caesarStr = '';
  //convert negative shift to positive value between 0 and 25, since there are 26 letters
  if (shift < 0) {
    return caesar(str, shift + 26)
  }
  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);
    /*if uppercase, subtract 65 since A=65 unicode, then use % 26 to maintain the
    the value between 0 and 26, and add the 65 again*/
    if (str[i].match(/\w/) && str[i].match(/[A-Z]/)) {
      caesarStr += String.fromCharCode(((charCode - 65 + shift) % 26) + 65);
    }
    //same for lowercase, but here a=97
    else if (str[i].match(/\w/) && str[i].match(/[a-z]/)) {
      caesarStr += String.fromCharCode(((charCode - 97 + shift) % 26) + 97);
    }
    //if the char is not A-Z/a-z, just add it
    else caesarStr += str[i];
  }
  return caesarStr
};
caesar('Hello, World!', 5);

// Do not edit below this line
module.exports = caesar;
