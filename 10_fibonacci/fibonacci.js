const fibonacci = function(num) {
  let numberSeries = [1, 1];
  let fibo = 1;
  if(num < 1){
      return 'OOPS'
  }
  else{
  for ( let i = 0 ; i < num ; i++){
      fibo += numberSeries[i];
      numberSeries.push(fibo);
  }
  return numberSeries[num-1];
  }
};

// Do not edit below this line
module.exports = fibonacci;
