//my solution
var isPowerOfThree = function(n) {
    let end = 30;
    if(n <= 0) return false;
    for(let i = 0; i < end; i++){
      if(3**i === n){
        return true;
      }
    }
    return false;
  };

  //Another solution


    var isPowerOfThree =  function (n) {
        if (n < 1) {
            return false;
        }

        while (n % 3 === 0) {
            n /= 3;
        }

        return n === 1;
    }

    //Another solution without using a loop
    var isPowerOfThree = function(n) {
        return ( Math.log(n) / Math.log(3) ) % 1 < 0.00000000000001  ;
      };