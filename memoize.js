var isPrimeScoped = (function(){  
  var answers = {};
  return function(value){
    if (answers[value] != null) {
      console.log('had in cache...');
      return answers[value];
    }
    var prime = value != 1; // 1 can never be prime
    for (var i = 2; i < value; i++) {
      if (value % i == 0) {
        prime = false;
        break;
      }
    }
    console.log('hadn\'t in cache...');
    return answers[value] = prime;
  };
}());

console.log(isPrimeScoped(5));
console.log(isPrimeScoped(5));
console.log(isPrimeScoped(5));
