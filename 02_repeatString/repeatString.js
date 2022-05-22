const repeatString = function(string, num) {
  if (num === 0){
    return '';
  }
  else if (num === 1){
    return string;
  }
  else if (num < 0){
    return 'ERROR';
  }
  else{
    let newString = '';
    for (i = 1 ; i <= num ; i++){
      newString += string;
    }
    return newString
  }
    
  
};

// Do not edit below this line
module.exports = repeatString;
