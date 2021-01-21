var fizzBuzz = function (n) {
    let newArray = [];
    
    for (let i = 1; i <= n; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        newArray[i-1] = "FizzBuzz";
      } else if (i % 3 === 0) {
        newArray[i-1] = "Fizz";
      } else if (i % 5 === 0) {
        newArray[i-1] = "Buzz";
      } else{
        newArray[i-1] = i.toString();
      }  
    }
    return newArray;
  };